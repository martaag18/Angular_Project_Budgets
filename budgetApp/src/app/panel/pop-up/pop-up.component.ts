import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss'
})
export class PopUpComponent {

  public data = inject<{ message: string }>(MAT_DIALOG_DATA); //inject actua como función que devuelve el valor asociado al token MAT_DIALOG_DATA

}

//MatDialog - servicio de Angular Material - para abrir dialog module. (dialog - ventana emergente)
//@Inject(MAT_DIALOG_DATA) - permite acceder a los datos enviados desde el componente Panel. 
//MAT_DIALOG_DATA - token especial que Angular Material utiliza para proporcionar los datos pasados al abrir el diálogo con dialog.open()