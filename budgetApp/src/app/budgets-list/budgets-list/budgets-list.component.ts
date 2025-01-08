import { Component, computed, signal} from '@angular/core'; 
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-budgets-list',
  imports: [ReactiveFormsModule],
  templateUrl: './budgets-list.component.html',
  styleUrl: './budgets-list.component.scss'
})
export class BudgetsListComponent {

  constructor(){
  //3.Subscribir a cambios y actualizarlos (subscribe + set)
    this.budgetForm.valueChanges.subscribe((values) => {
      this.formSignal.set(values);
    })
  }

  //1.Crear formulario reactivo

  budgetForm = new FormGroup ({ 
    seo: new FormControl(false),
    ads: new FormControl(false),
    website: new FormControl(false),
  })

  //2.Crear Signal

  formSignal = signal(this.budgetForm.value);

  //4.Definir precios

  private prices: {seo:number; ads:number; website: number} = {
    seo: 300,
    ads: 400,
    website: 500,
  }

  //5. Crear computed() para reaccionar a los cambios

  totalPrice = computed(() => {
    const values = this.formSignal();
    return (
      (values.seo ? this.prices.seo : 0)+
      (values.ads ? this.prices.ads : 0)+
      (values.website ? this.prices.website : 0)
    )
  })
  
}



// 1. Crear Signal para guardar estado reactivo
// 2. set(newValue) - cambiar valor de Signal y actualizar todo lo que dependa de él
// 3. computed(() => {}) - crea Signal derivado que se recalcula automaticamente en funcion de otros signals
