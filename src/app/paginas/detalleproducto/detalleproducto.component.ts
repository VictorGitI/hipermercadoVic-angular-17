import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api.service';
import { Productos } from '../../modelos/productos.modelos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalleproducto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalleproducto.component.html',
  styleUrl: './detalleproducto.component.css'
})
export class DetalleproductoComponent implements OnInit {
  
  cargando:boolean =true;
  
  private _route = inject(ActivatedRoute);

  private _apiService = inject(ApiService)

  public producto?: Productos;
  
  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this._apiService.getProducto(params['id']).subscribe((data: Productos) =>{
        console.log(data);
        this.cargando = false;
        this.producto = data;
      })
    })
  } 
  

}
