import { render, screen, fireEvent } from "@testing-library/react";
import TasksField from "./TasksField";
import { taskType } from "../../Types/types";
import userEvent from "@testing-library/user-event";

const mockTasks: taskType[] = [
  { id: "1", order: 1, title: "Test Task 1", itsDone: false },
  { id: "2", order: 2, title: "Test Task 2", itsDone: true },
];
