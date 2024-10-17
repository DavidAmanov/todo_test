import { render, screen, fireEvent } from "@testing-library/react";
import TasksField from "./TasksField";
import { taskType } from "../../Types/types";
import userEvent from "@testing-library/user-event";

const mockTasks: taskType[] = [
  { id: "1", order: 1, title: "Test Task 1", itsDone: false },
  { id: "2", order: 2, title: "Test Task 2", itsDone: true },
];

jest.mock("../../Hooks/useDragAndDrop", () => ({
  useDragAndDrop: () => ({
    handleDragStart: jest.fn(),
    handleDragEnter: jest.fn(),
    handleDragEnd: jest.fn(),
    handleDragOver: jest.fn(),
    handleDragLeave: jest.fn(),
  }),
}));

describe("TasksField component", () => {
  test("renders tasks passed as props", () => {
    render(<TasksField />);
    const taskInput = screen.getByPlaceholderText(/add new task/i);
    mockTasks.forEach((task) => {
      userEvent.type(taskInput, task.title);
      fireEvent.keyDown(taskInput, { key: "Enter", code: "Enter" });
    });
    expect(screen.getByText("Test Task 1")).toBeInTheDocument();
    expect(screen.getByText("Test Task 2")).toBeInTheDocument();
  });
});
