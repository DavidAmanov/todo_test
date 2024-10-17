import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "./Filters";

describe("Filters component", () => {
  const mockHandleFilter = jest.fn(); // Мокаем функцию handleFilter
  const mockHandleDeleteCompleted = jest.fn(); // Мокаем функцию handleDeleteCompleted
  const tasksLength = 3; // Пример длины списка задач

  beforeEach(() => {
    jest.clearAllMocks(); // Очищаем все мок-вызываемые функции перед каждым тестом
  });

  test("renders the correct number of remaining tasks", () => {
    render(
      <Filters
        handleFilter={mockHandleFilter}
        handleDeleteCompleted={mockHandleDeleteCompleted}
        tasksLength={tasksLength}
      />
    );

    // Проверяем, что корректное количество задач отображается
    expect(screen.getByText(`${tasksLength} items left`)).toBeInTheDocument();
  });

  test("calls handleFilter with 'All' when All button is clicked", () => {
    render(
      <Filters
        handleFilter={mockHandleFilter}
        handleDeleteCompleted={mockHandleDeleteCompleted}
        tasksLength={tasksLength}
      />
    );

    // Находим кнопку "All" и кликаем по ней
    const allButton = screen.getByText("All");
    fireEvent.click(allButton);

    // Проверяем, что handleFilter вызвана с "All"
    expect(mockHandleFilter).toHaveBeenCalledWith("All");
  });

  test("calls handleFilter with 'Active' when Active button is clicked", () => {
    render(
      <Filters
        handleFilter={mockHandleFilter}
        handleDeleteCompleted={mockHandleDeleteCompleted}
        tasksLength={tasksLength}
      />
    );

    // Находим кнопку "Active" и кликаем по ней
    const activeButton = screen.getByText("Active");
    fireEvent.click(activeButton);

    // Проверяем, что handleFilter вызвана с "Active"
    expect(mockHandleFilter).toHaveBeenCalledWith("Active");
  });

  test("calls handleFilter with 'Completed' when Completed button is clicked", () => {
    render(
      <Filters
        handleFilter={mockHandleFilter}
        handleDeleteCompleted={mockHandleDeleteCompleted}
        tasksLength={tasksLength}
      />
    );

    // Находим кнопку "Completed" и кликаем по ней
    const completedButton = screen.getByText("Completed");
    fireEvent.click(completedButton);

    // Проверяем, что handleFilter вызвана с "Completed"
    expect(mockHandleFilter).toHaveBeenCalledWith("Completed");
  });

  test("calls handleDeleteCompleted when Clear completed button is clicked", () => {
    render(
      <Filters
        handleFilter={mockHandleFilter}
        handleDeleteCompleted={mockHandleDeleteCompleted}
        tasksLength={tasksLength}
      />
    );

    // Находим кнопку "Clear completed" и кликаем по ней
    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    // Проверяем, что handleDeleteCompleted вызвана
    expect(mockHandleDeleteCompleted).toHaveBeenCalled();
  });
});
