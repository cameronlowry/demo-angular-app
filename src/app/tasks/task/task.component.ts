import dayjs from 'dayjs';
import { Component, inject, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CardComponent } from "../../shared/card/card.component";
import { Statuses, type Task } from '../../models/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, FormsModule, MatButtonModule, MatSelectModule, MatIconModule, MatDividerModule, MatTooltipModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task = input.required<Task>();
  statusOptions = [Statuses.backlog, Statuses.inProgress, Statuses.completed, Statuses.onHold];

  private tasksService = inject(TasksService);

  isTaskComplete() {
    return this.tasksService.isTaskComplete(this.task());
  }

  onCompleteTask() {
    this.tasksService.updateTaskStatus(this.task().id, Statuses.completed);
  }

  onDeleteTask() {
    this.tasksService.removeTask(this.task().id);
  }

  onSelectStatus() {
    this.tasksService.updateTaskStatus(this.task().id, this.task().status);
  }

  isPastDue(task: Task) {
    if (task.status === Statuses.completed) {
      return false;
    }

    var today = dayjs();
    return dayjs(task.dueDate).isBefore(today);
  }
}
