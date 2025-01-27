import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

import { NewTask, Statuses, Task } from "../models/task.model";
import { TASKS_LOCAL_STORAGE_KEY } from "../constants";

import { DUMMY_TASKS } from "../test-data/dummy-tasks";
import dayjs from "dayjs";

const allTasks = DUMMY_TASKS;

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = allTasks as Task[];

  constructor() {
    const tasks = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(id: string) {
    return this.tasks.filter((task) => task.assignee === id)
  }

  getActiveUserTasks(id: string) {
    return this.tasks.filter((task) => task.status !== Statuses.completed && task.assignee === id).sort(orderByDueDate);
  }

  addTask(task: NewTask, userId: string) {
    this.tasks.unshift({
      ...task,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: `t-${uuidv4()}`,
      status: Statuses.backlog,
      assignee: userId
    });
    this.saveTasks();
  }

  updateTaskStatus(taskId: string, status: Statuses) {
    const selectedTask = this.tasks.find((task) => (task.id === taskId));
    if (!selectedTask) {
      return;
    }

    this.tasks = [
      ...this.tasks.filter((task) => (task.id != taskId)),
      {
        ...selectedTask,
        updatedAt: new Date().toISOString(),
        status,
      }
    ]
    this.saveTasks();
  }

  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => (task.id !== taskId));
    this.saveTasks();
  }

  isTaskComplete(task: Task) {
    return task.status === Statuses.completed;
  }

  private saveTasks() {
    localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(this.tasks));
  }

}

export const orderByDueDate = (a: Task, b: Task) => {
  if (!a.dueDate || !b.dueDate) {
    return 1;
  }
  return dayjs(a.dueDate).isAfter(dayjs(b.dueDate)) ? 1 : -1;
}
