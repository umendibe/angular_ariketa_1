import { Component, signal, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MendiakComponent } from './mendiak-component/mendiak-component';
import { TarifakComponent } from './tarifak-component/tarifak-component';
import { InfoGehioComponent } from './info-gehio-component/info-gehio-component';
import { HeaderComponent } from './header-component/header-component';
import { HasieraComponent } from './hasiera-component/hasiera-component';

@Component({
  imports: [RouterOutlet, MendiakComponent, TarifakComponent, InfoGehioComponent, HeaderComponent, HasieraComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular_ariketa_1');
}
