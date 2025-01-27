/**
 * @enum Statuses
 * @description Enum representing the possible statuses of a task.
 * This enum is used to track the current state of a task within the system.
 */
export enum Statuses {
  backlog = 'backlog',
  inProgress = 'in-progress',
  completed = 'completed',
  onHold = 'on-hold',
}

/**
 * @interface Task
 * @description Represents a task in the system.
 * Used to track and manage work items in a project management tool.
 */
export interface Task {
  /**
   * Unique identifier for the task.
   * Example: 'task-123'.
   */
  id: string;

  /**
   * Short name or title of the task.
   * Example: 'Fix Login Bug'.
   */
  name: string;

  /**
   * Detailed description of the task.
   * This can include steps, notes, or context.
   * Example: 'Investigate and resolve the issue causing login failures.'
   */
  description: string;

  /**
   * Current status of the task.
   * - `backlog`: Task is awaiting action.
   * - `in-progress`: Task is actively being worked on.
   * - `completed`: Task has been finished.
   * - `on-hold`: Task is paused for now.
   */
  status: Statuses;

  /**
   * Identifier for the user assigned to the task.
   * Null if the task is not yet assigned.
   * Example: 'user-42' or `null`.
   */
  assignee: string | null;

  /**
   * Optional due date for completing the task.
   * Should be in ISO format (e.g., '2025-01-31').
   */
  dueDate?: string;

  /**
   * Priority level of the task.
   * - `low`: Not urgent.
   * - `medium`: Requires attention but not critical.
   * - `high`: Important and time-sensitive.
   * - `critical`: Urgent and must be addressed immediately.
   * Example: `high`.
   */
  priority?: 'low' | 'medium' | 'high' | 'critical';

  /**
   * Timestamp when the task was created.
   * Must be in ISO format (e.g., '2025-01-15T10:00:00.000Z').
   */
  createdAt: string;

  /**
   * Optional timestamp for the last time the task was updated.
   * Must be in ISO format.
   * Example: '2025-01-16T15:30:00.000Z'.
   */
  updatedAt?: string;
}

/**
 * @interface NewTask
 * @description Used to create a new Task in the system.
 */
export interface NewTask {
  /**
   * Short name or title of the task.
   * Example: 'Fix Login Bug'.
   */
  name: string;

  /**
   * Detailed description of the task.
   * This can include steps, notes, or context.
   * Example: 'Investigate and resolve the issue causing login failures.'
   */
  description: string;

  /**
   * Optional due date for completing the task.
   * Should be in ISO format (e.g., '2025-01-31').
   */
  dueDate?: string;
}
