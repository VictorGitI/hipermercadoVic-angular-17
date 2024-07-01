import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  listaProductos: any[] = [];

  private _router = inject(Router)

  private _apiService = inject(ApiService);

  ngOnInit(): void {
    this._apiService.getProductos().subscribe((data: any[]) =>{
      console.log(data);
      this.listaProductos = data;
    });
  }

  navegar(id: number): void{
    this._router.navigate(['/productos', id]);
  }

}
