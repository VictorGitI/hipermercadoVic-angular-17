import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ProductosComponent } from './paginas/productos/productos.component';
import { DetalleproductoComponent } from './paginas/detalleproducto/detalleproducto.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'productos/:id', component: DetalleproductoComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: '**', redirectTo: '', pathMatch: 'full' }
];
