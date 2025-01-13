import { Component, inject} from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { faSortUp, faSortDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';




@Component({
  selector: 'app-sort-buttons',
  imports: [FontAwesomeModule, FormsModule, NgClass],
  templateUrl: './sort-buttons.component.html',
  styleUrl: './sort-buttons.component.scss'
})
export class SortButtonsComponent {
  private budgetService = inject(BudgetService); 
  currentSort: string = '';
  searchQuery: string = "";

  faSortUp = faSortUp;
  faSortDown = faSortDown;
  faSearch = faSearch;

  sortByDate(): void {
    const budgets = this.budgetService.getBudgets();
    if (this.currentSort === 'date-asc') {
      budgets.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      this.currentSort = 'date-desc';
    } else {
      budgets.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      this.currentSort = 'date-asc';
    }
    this.budgetService.updateBudgets(budgets);
  }

  //b.date -> string que representa una fecha
  //new Date(b.date) -> crear instancia de Date-> convertimos string en objeto Date 
  //getTime() -> metodo de objeto Date

  sortByPrice(): void {
    const budgets = this.budgetService.getBudgets();
    if (this.currentSort === 'price-asc') {
      budgets.sort((a, b) => b.totalPrice - a.totalPrice);
      this.currentSort = 'price-desc';
    } else {
      budgets.sort((a, b) => a.totalPrice - b.totalPrice);
      this.currentSort = 'price-asc';
    }
    this.budgetService.updateBudgets(budgets);
  }

  sortByName(): void {
    const orderedBudgets = this.budgetService.getBudgets();
    if (this.currentSort === 'name-asc') {
      orderedBudgets.sort((a, b) => b.name.localeCompare(a.name));
      this.currentSort = 'name-desc';
    } else {
      orderedBudgets.sort((a, b) => a.name.localeCompare(b.name));
      this.currentSort = 'name-asc';
    }
    this.budgetService.updateBudgets(orderedBudgets);
  }

  onSearch(): void {
    const budgets = this.budgetService.getBudgets();
    const filteredBudgets = budgets.filter((budget) => budget.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    this.budgetService.updateBudgets(filteredBudgets);

  }


}
