import { Component, input } from '@angular/core';

@Component({
  selector: 'app-illustration',
  standalone: true,
  imports: [],
  templateUrl: 'illustration.component.html',
  styleUrl: 'illustration.component.scss'
})
export class IllustrationComponent {
  image = input.required<string>()
  alt = input<string>()
}
