import { Injectable } from '@angular/core';
import { SelectedServices, ServicePrices } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
//Propiedades privadas - almacenar cálculos
  private webCost = 0; 
  private basePrice = 0; 
  private totalPrice = 0; 

//1.Calcular y actualizar el precio base
calculateBasePrice(values: SelectedServices, prices: ServicePrices): void {
  this.basePrice =
    (values.seo ? prices.seo : 0) +
    (values.ads ? prices.ads : 0) +
    (values.website ? prices.website : 0);
  this.updateTotalPrice();
}

//2.Calcular y actualizar el costo de la web
 calculateWebCost(pages: number, languages: number): void {
  this.webCost = (pages + languages) * 30; 
  this.updateTotalPrice();
}

//3.Actualizar el precio total
  private updateTotalPrice(): void {
    this.totalPrice = this.basePrice + this.webCost;
  }

//4.Permitir a otros componentes obtener el total price --> budget-list
  getTotalPrice(): number {
    return this.totalPrice;
  }
}









