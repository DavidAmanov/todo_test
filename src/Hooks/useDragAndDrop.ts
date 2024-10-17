import { useState } from "react";
import { taskType } from "../Types/types";

export const useDragAndDrop = (
  tasks: taskType[],
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>
) => {
  const [draggingTask, setDraggingTask] = useState<taskType | null>(null);

  const handleDragStart = (task: taskType) => {
    setDraggingTask(task);
  };

  const handleDragEnter = (e: React.DragEvent, targetTask: taskType) => {
    if (draggingTask && draggingTask.id !== targetTask.id) {
      const reorderedTasks = tasks.map((task) => {
        if (task.id === draggingTask.id) {
          return { ...task, order: targetTask.order };
        }
        if (task.id === targetTask.id) {
          return { ...task, order: draggingTask.order };
        }
        return task;
      });
      e.currentTarget.classList.add("drag-over");
      const updatedTasks = reorderedTasks
        .sort((a, b) => a.order - b.order)
        .map((task, index) => ({
          ...task,
          order: index + 1,
        }));
      setTasks(updatedTasks);
    }
  };

  const handleDragEnd = () => {
    document.querySelectorAll(".drag-over").forEach((element) => {
      element.classList.remove("drag-over");
    });
    setDraggingTask(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove("drag-over");
  };

  return {
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
  };
};
