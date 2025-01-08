import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetsListComponent } from './budgets-list/budgets-list/budgets-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BudgetsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'budgetApp';
}
