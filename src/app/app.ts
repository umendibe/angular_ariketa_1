import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MendiakComponent } from './mendiak-component/mendiak-component';

@Component({
  imports: [RouterOutlet, MendiakComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_ariketa_1');
}
