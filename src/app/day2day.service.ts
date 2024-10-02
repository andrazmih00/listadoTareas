import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Day2dayService {

  private storageKey = 'listados';

    constructor() {

      if (this.isLocalStorageAvailable()) {
        const savedListados = localStorage.getItem (this.storageKey);
        
        if (savedListados) {
          this.listados = JSON.parse(savedListados);
        }
      }
    }

    listados = [

      {name: 'Desayunar', type: 'Reptil', type2: ''},
      {name: 'Comer', type: 'Reptil', type2: ''},
      {name: 'Cenar', type: 'Mamifero', type2: ''},
    ]; 

    getListados(){

      return this.listados;
    }

    addListado(day2day :{name: string, type: string, type2: string}) {

      this.listados.push(day2day);
      this.saveToLocalStorage();   
    }

    deleteListado(index: number){

      this.listados.splice(index, 1);
      this.saveToLocalStorage();  
    }

    private saveToLocalStorage() {

      localStorage.setItem (this.storageKey, JSON.stringify(this.listados));
    }
  

    private isLocalStorageAvailable(): boolean {

      try {
        return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
      } catch (e) {
        return false;
      }
    }
}
