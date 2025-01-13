import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/interfaces';
import { RouterLink } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-budget-detail',
  imports: [ RouterLink],
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss'],
})
export class BudgetDetailComponent implements OnInit {

  private route = inject(ActivatedRoute); //servicio de Angular --> información sobre la ruta activa actual
  private budgetService = inject(BudgetService);

  budget: Budget | undefined; //undefined por si budgetService no encuentra el budget con el id que le enviamos por parámetro.

  
  ngOnInit(): void { //nOnInit -> escribir lógica inicial (cargar datos)
    const id = this.route.snapshot.paramMap.get('id')!; //Obtenemos el valor del id desde la URL
    this.budget = this.budgetService.getBudgetById(id); 
  }
}




