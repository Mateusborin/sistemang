import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component'
import { LoginComponent } from './login/login.component';
import { ProdutoComponent } from './produto/produto.component';
import { AuthGuard} from './guards/auth.guard'
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [

  // App routes goes here here
  { 
    path: 'sistema',    
    //canActivate: [AuthGuard], 
    children: [
      {path: 'cliente', component: ClienteComponent},
      {path: 'produto', component: ProdutoComponent},
      {path: 'teste', component: TesteComponent}

      
    ]
  },  
  { path: 'cliente', component: ClienteComponent},
  { path: 'login', component: LoginComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'teste', component: TesteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
