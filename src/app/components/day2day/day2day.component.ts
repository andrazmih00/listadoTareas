import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Day2dayService } from '../../services/day2day.service';

@Component({
  selector: 'app-day2day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './day2day.component.html',
  styleUrl: './day2day.component.css'
})

export class Day2dayComponent implements OnInit{

  tiposListado: string[] = ['Reptil', 'Mamifero', 'Ave'];

  listados: {name: string, type: string, type2: string} []=[];

  constructor (private day2dayService: Day2dayService){}

  ngOnInit(): void {

    this.listados = this.day2dayService.getListados();
  }

  addListados (name: string, type: string, type2: string){
    this.day2dayService.addListado({name, type, type2});
  }

  deleteListados (index: number){

    this.day2dayService.deleteListado(index);
  }
}
