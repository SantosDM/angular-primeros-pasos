import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

public heroNames: string [] =['spiderman', 'ironman', 'hulk', 'shehulk','thor']


}
