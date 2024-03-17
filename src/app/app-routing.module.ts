import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const routes: Routes = [
  {path: '', component: EmpresaComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'contact-form', component: ContactFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
