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
  id: string;
  name: string;
  email: string;
  phone: string;
  services: string[];
  totalPrice: number;
  date: string; 
  panelValues: PanelFormValues;
}

export interface SelectedServices {
  seo: boolean;
  ads: boolean;
  website: boolean;
}


  