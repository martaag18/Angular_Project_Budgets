import { Component, inject } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PanelFormValues } from '../models/interfaces';
import { MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';

@Component({
  selector: 'app-panel',
  imports: [ReactiveFormsModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent {


  private dialog = inject(MatDialog); // Inyecta MatDialog fuera del constructor

  constructor(private budgetService: BudgetService) {
    //2.Calcular coste web al cargar el panel
    this.budgetService.calculateWebCost(this.panelForm.get('pages')?.value,this.panelForm.get('languages')?.value);

    //3.Suscribir cambios en el formulario. Cada vez que un control (pages, languages) cambia, se emite un nuevo objeto con los valores actualizados.
    this.panelForm.valueChanges.subscribe((values: PanelFormValues) => {
      this.budgetService.calculateWebCost(values.pages, values.languages);
    });
  }

  //1.Crear formulario reactivo
  panelForm: FormGroup = new FormGroup({
    pages: new FormControl(0), 
    languages: new FormControl(0), 
  });

  //4.Métodos para incrementar/reducir páginas
  incrementPages() {
    const current = this.panelForm.get('pages')?.value;
    this.panelForm.get('pages')?.setValue(current + 1);
  }
  
  decrementPages() {
    const current = this.panelForm.get('pages')?.value;
    if (current > 0) {
      this.panelForm.get('pages')?.setValue(current - 1);
    }
  }
  
  incrementLanguages() {
    const current = this.panelForm.get('languages')?.value;
    this.panelForm.get('languages')?.setValue(current + 1);
  }
  
  decrementLanguages() {
    const current = this.panelForm.get('languages')?.value;
    if (current > 0) {
      this.panelForm.get('languages')?.setValue(current - 1);
    }
  }

  //Llamada popUp

  openPopUp(){
    this.dialog.open(PopUpComponent, {
      width: "40vw",
      height: "20vw",
      data: {message: "Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30 €"},
    });
  }
}











