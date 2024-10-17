import { render, screen, fireEvent } from "@testing-library/react";
import AddNewTask from "./AddNewTask";
import { AddNewTaskProps } from "../../Types/types";

jest.mock("uuid", () => ({
  v4: jest.fn(() => "mock-uuid"),
}));

describe("AddNewTask component", () => {
  const mockAddTask = jest.fn();
  const mockSetShowTasks = jest.fn();

  const defaultProps: AddNewTaskProps = {
    addTask: mockAddTask,
    order: 1,
    showTasks: true,
    setShowTasks: mockSetShowTasks,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders input and button correctly", () => {
    render(<AddNewTask {...defaultProps} />);

    expect(screen.getByPlaceholderText(/add new task/i)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByAltText("arrow")).toBeInTheDocument();
  });

  test("toggles showTasks when button is clicked", () => {
    render(<AddNewTask {...defaultProps} />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockSetShowTasks).toHaveBeenCalledWith(false);
  });
});
