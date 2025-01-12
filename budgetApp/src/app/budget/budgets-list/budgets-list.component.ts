import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { SelectedServices, ServicePrices } from '../../models/interfaces';
import { PanelComponent } from '../../panel/panel.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-budgets-list',
  imports: [ReactiveFormsModule, PanelComponent, NgClass],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
})
export class BudgetsListComponent {
  panelVisible = false;

  budgetForm = new FormGroup({
    seo: new FormControl(false),
    ads: new FormControl(false),
    website: new FormControl(false),
  });

  private prices: ServicePrices = {
    seo: 300,
    ads: 400,
    website: 500,
  };

  constructor(private budgetService: BudgetService) {
    this.budgetForm.valueChanges.subscribe((values) => {
      this.budgetService.calculateBasePrice(values as SelectedServices, this.prices);
      this.panelVisible = values.website ?? false; //Asignamos this.panelVisible el valor de values website si no es undefined / null
    });
  }
  get totalPrice(): number {
    return this.budgetService.getTotalPrice();
  }
}













