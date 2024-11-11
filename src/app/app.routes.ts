import { Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { authGuard } from './services/auth-guard.service';
import { FormularioClienteComponent } from './components/clientes/formulario-cliente/formulario-cliente.component';

export const routes: Routes = [
    { path: 'login',
        loadComponent: () => import('../app/components/login/login.component').then(mod => mod.LoginComponent),
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'clientes', component: ClientesComponent, canActivate: [authGuard]},
    { path: 'cliente', component: FormularioClienteComponent, canActivate: [authGuard]},
];
