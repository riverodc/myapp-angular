import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from './../models/product.model';

@Component({
    selector:'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {

    /* En este caso hay un error de compilacion por causa de la variable que no esta definida (se da por 
    la nueva version de TypeScript)  con el simbolo de (!) podemos decirle al compilador que no se preocupe de que no se defina.
    Ahora, el compilador entiende que esta variable, aunque no se define en tiempo de compilación, 
    se definirá en tiempo de ejecución y en tiempo, antes de que se utilice.*/

   @Input() product!: Product;

   /* El EventEmitter me va a trasmitir la información hacia el componente Padre 
   y le puedo decir el tipo de valor string, number, boolean, etc*/

   @Output() clickedProduct = new EventEmitter<number>();

   viewDetail() {
       console.log('viewDetail', this.product.title); 
       /* Vamos a decir que emita el valor del producto */
       this.clickedProduct.emit(this.product.id);
   }

}