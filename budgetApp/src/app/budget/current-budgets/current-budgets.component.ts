import { Component } from '@angular/core';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-current-budgets',
  imports: [],
  templateUrl: './current-budgets.component.html',
  styleUrls: ['./current-budgets.component.scss'],
})
export class CurrentBudgetsComponent {
  // Usar un getter para acceder al Signal cuando sea necesario
  get budgets() {
    return this.budgetService.budgets;
  }

  constructor(private budgetService: BudgetService) {}
}






