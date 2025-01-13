import { TestBed } from '@angular/core/testing'; 
import { MatDialog } from '@angular/material/dialog'; 
import { PanelComponent } from './panel.component'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; 
import { of } from 'rxjs'; 
import { PopUpComponent } from './pop-up/pop-up.component'; 


describe('PanelComponent', () => { 
  let dialogMock: any; 

  beforeEach(async () => {
    dialogMock = jasmine.createSpyObj('MatDialog', ['open']); 
    dialogMock.open.and.returnValue({
      afterClosed: () => of(true), // Simulamos el método afterClosed
    });

    await TestBed.configureTestingModule({
      imports: [PanelComponent, NoopAnimationsModule],
      providers: [{ provide: MatDialog, useValue: dialogMock }], 
    }).compileComponents(); 
  });

  it('it should create the component', () => {
    const fixture = TestBed.createComponent(PanelComponent); // Crea una instancia del componente dentro de un contenedor fixture.
    const component = fixture.componentInstance; // Accede a la instancia del componente.
    expect(component).toBeTruthy(); // Comprueba que el componente ha sido creado correctamente.
  });

  it('hauria d\'obrir el popup amb les dades correctes', () => {
    const fixture = TestBed.createComponent(PanelComponent);
    const component = fixture.componentInstance;
  
    // Simulamos la función openPopUp
    component.openPopUp();
  
    // Comprobamos que MatDialog.open ha sido llamado con los argumentos correctos
    expect(dialogMock.open).toHaveBeenCalledWith(PopUpComponent, {
      width: '40vw',
      height: '20vw',
      data: {
        message: 'Afegeix els llenguatges que tindrà el teu projecte. El cost de cada llenguatge és de 30 €',
      },
    });
  });
});

  
/*

Conceptos basicos: 

1. Mock: algo que es falso, lo estas simulando, imitan el comportamiento de los objetos reales. 
Diferentes tipos de Mocks: dummies, stubs, spies, true mocks.

2. Fixture: contenedor alrededor de una instancia de un componente. Crea un wrapper de la instancia del componente.

3. Spy - útiles para verificar el comportamiento de nuestros componentes según las entrdas externas.  Ej: utilizarlo para un @Input

4. TestBed - busca la combinación de la plantilla(html) y la clase. Para probar correctamente un componente, debe probar que funcionan juntos cómo se espera. 


*/