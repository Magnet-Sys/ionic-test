import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-init',
  templateUrl: './component-init.component.html',
  styleUrls: ['./component-init.component.scss'],
  standalone: true,
})
export class ComponentInitComponent implements OnInit {
  nombre: string = 'Román Riquelme';

  constructor() {}

  ngOnInit() {
    console.log('Component initialized with name:', this.nombre);
  }
}
