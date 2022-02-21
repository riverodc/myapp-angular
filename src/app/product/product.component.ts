import { Component, Input } from '@angular/core';

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

}