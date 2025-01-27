import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskComponent } from "./task/task.component";
import { IllustrationComponent } from "../shared/illustration/illustration.component";
import { MatDividerModule } from '@angular/material/divider';

import { Statuses, type NewTask } from '../models/task.model';
import { type User } from '../models/user.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [AddTaskComponent, TaskComponent, MatButtonModule, MatTooltipModule, IllustrationComponent, MatDividerModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  user = input.required<User>();
  showAddTask = false;

  private tasksService = inject(TasksService);

  get activeUserTasks() {
    return this.tasksService.getActiveUserTasks(this.user().id);
  }

  get completedUserTasks() {
    return this.tasksService.getUserTasks(this.user().id).filter((task) => task.status === Statuses.completed);
  }

  onAddTask(task: NewTask) {
    this.tasksService.addTask(task, this.user().id);

    this.onCloseAddTask();
  }

  onOpenAddTask() {
    this.showAddTask = true;
  }

  onCloseAddTask() {
    this.showAddTask = false;
  }
}
