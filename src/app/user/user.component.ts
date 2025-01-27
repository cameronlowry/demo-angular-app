import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  imports: [CardComponent, MatButtonModule, MatRippleModule]
})
export class UserComponent {
  id = input.required<string>();
  avatar = input<string>();
  name = input<string>();
  selected = input.required<boolean>();

  select = output<string>();

  imagePath = computed(() => {
    return `assets/users/${this.avatar()}`;
  })

  onSelectUser() {
    this.select.emit(this.id());
  }
}
