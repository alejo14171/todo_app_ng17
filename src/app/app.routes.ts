import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

export const routes: Routes = [
    {
        path: '', // Un string vacío representa la ruta por defecto o raíz
        component: HomeComponent
    },
    {
        path: 'labs',
        component: LabsComponent
    }
];
