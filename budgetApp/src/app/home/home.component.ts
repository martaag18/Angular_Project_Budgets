import { Component } from '@angular/core';
import { BudgetArrayComponent } from '../budget/budget-array/budget-array.component';
import { BudgetsListComponent } from '../budget/budgets-list/budgets-list.component';
import { CurrentBudgetsComponent } from '../budget/current-budgets/current-budgets.component';



@Component({
  selector: 'app-home',
  imports: [BudgetArrayComponent, BudgetsListComponent, CurrentBudgetsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
