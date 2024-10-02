import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Day2dayComponent } from './day2day/day2day.component';
import { Day2dayAddComponent } from './day2day-add/day2day-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Day2dayComponent, Day2dayAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'listadoTareas';
}
