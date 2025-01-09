import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { BudgetService } from '../../models/budget';
import { PanelComponent } from '../../panel/panel/panel.component';
import { SelectedServices, ServicePrices } from '../../models/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-budgets-list',
  imports: [ReactiveFormsModule, PanelComponent, CommonModule],
  templateUrl: './budgets-list.component.html',
  styleUrls: ['./budgets-list.component.scss'],
})
export class BudgetsListComponent {
  panelVisible = false; 

  constructor(private budgetService: BudgetService) {
  //3. Subscribe a los cambios y llamada a la función calculateBasePrice
  this.budgetForm.valueChanges.subscribe((values: SelectedServices) => {
    this.budgetService.calculateBasePrice(values, this.prices);
    this.panelVisible = values.website;

  });
  }

  //1.Creamos formulario Reactivo
  budgetForm: FormGroup = new FormGroup({
    seo: new FormControl(false),
    ads: new FormControl(false),
    website: new FormControl(false),
  });

  //2.Asignamos precios base
  private prices: ServicePrices = {
    seo: 300,
    ads: 400,
    website: 500,
  };

   //3.Getter para obtener el precio total desde el servicio --> - metodo con la palabra get --> comporta como una propiedad (getter)
   get totalPrice(): number {
    return this.budgetService.getTotalPrice();
  }
}











