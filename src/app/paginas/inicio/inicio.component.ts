import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  
  listaProductos: any[] = [];
  
  private _router = inject(Router)
  
  private _apiService = inject(ApiService);
  
  ngOnInit(): void {
    this._apiService.getProductos().subscribe((data: any[]) =>{
      this.listaProductos = data;
    });
  }
}
