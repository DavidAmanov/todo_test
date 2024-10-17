import { render, screen, fireEvent } from "@testing-library/react";
import Task from "./Task";
import { taskType } from "../../Types/types";

describe("Task component", () => {
  test("calls handleIsChecked and updates task state", () => {
    const mockTask: taskType = {
      id: "1",
      order: 1,
      title: "Test Task",
      itsDone: false,
    };
    const mockTasks: taskType[] = [mockTask];
    const mockSetTasks = jest.fn();

    render(<Task task={mockTask} tasks={mockTasks} setTasks={mockSetTasks} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(mockSetTasks).toHaveBeenCalledWith([{ ...mockTask, itsDone: true }]);
  });
});
