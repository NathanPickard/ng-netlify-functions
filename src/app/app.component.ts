import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import products from './products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: any = products;
  private response: any;
  
  constructor(private http: HttpClient) {}

  async triggerCreateCheckout(eventProduct: any) {
    
  }

}
