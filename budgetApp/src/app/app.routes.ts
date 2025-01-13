import { Routes } from '@angular/router';
import { BudgetDetailComponent } from './budget/budget-detail/budget-detail.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'budgetDetail/:id', component: BudgetDetailComponent }, // Ruta dinámica con el parámetro `:id`
    { path: '**', component: HomeComponent,}
];
