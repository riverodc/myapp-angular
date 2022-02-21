import { Component, OnInit } from '@angular/core';
import { Product } from './../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


   /* Construimos un array de productos */
   products: Product[] = [
    {
      title: 'Lenovo Legion',
      price: 4000,
      text: 'Gamer Comnputer',
      image: 'assets/images/daniel.jpg',
      
    },
    {
      title: 'Lenovo ThinkPad',
      price: 5000,
      text:'Bussines Computer',
      image: 'assets/images/daniel.jpg',
      
    },
    {
      title: 'Asus Rock',
      price: 4500,
      text:'Gamer Computer',
      image: 'assets/images/daniel.jpg',
    },


  ];


  constructor() { }

  ngOnInit(): void {
  }

}
