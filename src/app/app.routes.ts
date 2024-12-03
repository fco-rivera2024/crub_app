import { Routes } from '@angular/router';
import { ProductosComponent } from "./Productos/productos.component" ;
import { ServiciosComponent } from './Servicios/servicios.component';
import { ContactosComponent } from './contactos/contactos.component';


export const routes: Routes = [

    {path: "Productos", component:ProductosComponent},
    {path: "Servicios", component:ServiciosComponent},
    {path: "Contactos", component:ContactosComponent},
];