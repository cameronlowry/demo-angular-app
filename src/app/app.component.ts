import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { IllustrationComponent } from "./shared/illustration/illustration.component";

import { type User } from './models/user.model';

import { DUMMY_USERS } from './test-data/dummy-users';
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent, MatButtonModule, IllustrationComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users: User[] = DUMMY_USERS;
  selectedUser?: User;

  onSelectUser(id: string) {
    if (this.users.filter((user) => user.id === id).length <= 0) {
      this.selectedUser = undefined;
      return;
    }

    this.selectedUser = this.users.filter((user) => user.id === id)[0];
  }
}
