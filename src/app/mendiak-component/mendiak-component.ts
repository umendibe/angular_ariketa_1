import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-mendiak-component',
  styleUrl: './mendiak-component.css',
  templateUrl: './mendiak-component.html',
})
export class MendiakComponent {
  @Input() argazkia = '';
  @Input() tamaina = '';
  @Input() kolorea = '';
  @Input() izena = '';
}
