import { Injectable, signal } from '@angular/core';
import { ServicePrices, Budget, SelectedServices } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  // Propiedades privadas para cálculos internos --> solo puede ser accedida y modificada dentro de la misma clase. 
  private webCost = 0;
  private basePrice = 0;
  private totalPrice = 0;

  private selectedServices: string[] = [];
  private selectedPages = 0;
  private selectedLanguages = 0;

  budgets = signal<Budget[]>([]); // Signal para almacenar un array de budgets

  calculateBasePrice(values: SelectedServices, prices: ServicePrices): void {
    this.selectedServices = []; 

    this.basePrice =
      (values.seo ? prices.seo : 0) +
      (values.ads ? prices.ads : 0) +
      (values.website ? prices.website : 0);

    // Agregamos los servicios seleccionados al array
    if (values.seo) this.selectedServices.push('SEO');
    if (values.ads) this.selectedServices.push('ADS');
    if (values.website) this.selectedServices.push(`Web (${this.selectedPages} pàgines, ${this.selectedLanguages} llenguatges)`);

    this.updateTotalPrice();
  }

  calculateWebCost(pages: number, languages: number): void {
    this.webCost = (pages + languages) * 30; 
    this.selectedPages = pages;
    this.selectedLanguages = languages;

    // Eliminar de selectedServices lo que hemos almacenado en web para que no se acumule:
    this.selectedServices = this.selectedServices.filter((service) => service === "SEO" || service === "ADS");
    this.selectedServices.push(`Web (${pages} pàgines, ${languages} llenguatges)`);
    

    this.updateTotalPrice();
  }

  private updateTotalPrice(): void {
    this.totalPrice = this.basePrice + this.webCost;
  }


  getTotalPrice(): number { //llamado desde budget-list para obtener precio total.
    return this.totalPrice;
  }

  addBudget(budget: Budget): void { //llamado desde budget-array --> agregar nuevo budget al array reactivo budgets
    this.budgets.update((currentBudgets) => [...currentBudgets, budget]);
  }
  getSelectedServices(): string[] {
    return [...this.selectedServices]; //llamado desde budget-array --> acceder servicios seleccionados
  }

  getPanelValues(): { pages: number; languages: number } {
    return { 
      pages: this.selectedPages, 
      languages: this.selectedLanguages,
    };
  }
  
  //MÉTODOS PARA ORDENAR

  getBudgets() {
    return this.budgets();
  }

  updateBudgets(orderedBudget: Budget[]): void {
    this.budgets.set([...orderedBudget]); //copia para mantener inmutabilidad
  }

}




