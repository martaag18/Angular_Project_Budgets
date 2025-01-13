import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/interfaces';
import { v4 as uuidv4 } from 'uuid';



@Component({
  selector: 'app-budget-array',
  imports: [ReactiveFormsModule],
  templateUrl: './budget-array.component.html',
  styleUrls: ['./budget-array.component.scss']
})
export class BudgetArrayComponent {

  budgetForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    
  });

  constructor(private budgetService: BudgetService) {}

  submitBudget(): void {
    if (this.budgetForm.valid) {
        
      const budget: Budget = {
        id: uuidv4(), // Genera un UUID único
        name: this.budgetForm.value.name!,
        phone: this.budgetForm.value.phone!,
        email: this.budgetForm.value.email!,
        services: this.budgetService.getSelectedServices(), 
        totalPrice: this.budgetService.getTotalPrice(),
        date: new Date().toISOString(), 
        panelValues: this.budgetService.getPanelValues(),
      };
  
      this.budgetService.addBudget(budget); //llamamos método definido en servicio --> añadir nuevo budget al array de budgets gestionado por el servicio
  
    }
  }
}




