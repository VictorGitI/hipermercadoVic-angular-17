import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private _urlBase: string = environment.apiUrl;


  getProductos():Observable<any>{
    return this._http.get(this._urlBase);
  }

  getProducto(id: number):Observable<any>{
    return this._http.get(`${this._urlBase}/${id}`);
  }
}
