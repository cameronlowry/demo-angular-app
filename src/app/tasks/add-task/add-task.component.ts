import { ChangeDetectionStrategy, Component, HostListener, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatTooltipModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTaskComponent {
  userId = input.required<string>();
  close = output();

  name = signal('');
  description = signal('');
  dueDate = signal('');

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  @HostListener('window:keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    if (event && event.key == 'Escape') {
      this.close.emit();
    }
  }

  onSubmit() {
    if (this.name() && this.name()?.trim() !== "") {
      this.tasksService.addTask({
        name: this.name(),
        description: this.description(),
        dueDate: this.dueDate(),
      }, this.userId());

      this.close.emit();
    }
  }
}
