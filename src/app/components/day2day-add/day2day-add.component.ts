import { Component } from '@angular/core';
import { Day2dayService } from '../../services/day2day.service';

@Component({
  selector: 'app-day2day-add',
  standalone: true,
  imports: [],
  templateUrl: './day2day-add.component.html',
  styleUrl: './day2day-add.component.css'
})

export class Day2dayAddComponent {

  constructor (private day2dayService: Day2dayService){}

  addListados (name: string, type: string, type2: string){
    
    this.day2dayService.addListado({name, type, type2});
  }
}
