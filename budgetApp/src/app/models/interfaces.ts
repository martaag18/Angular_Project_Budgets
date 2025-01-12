export interface ServicePrices {
  seo: number;
  ads: number;
  website: number;
}

export interface PanelFormValues {
  pages: number;
  languages: number;
}

export interface Budget {
  name: string;
  phone: string;
  email: string;
  services: string[]; // Aquí guardamos los servicios seleccionados directamente
  totalPrice: number;
  panelValues: PanelFormValues;

}

export interface SelectedServices {
  seo: boolean;
  ads: boolean;
  website: boolean;
}


  