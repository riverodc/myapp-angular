import { Pipe, PipeTransform } from '@angular/core';

/* ESTE PIPE VA A REVERSAR UN TEXTO */

/* Tenemos un decorador tipo Pipe @Pipe */
@Pipe({
  name: 'reverse'
})
/* al final tenemos una clase */
export class ReversePipe implements PipeTransform {

  /* Tranform es por donde va a ingresar nuestro texto o argumentos 
  para ser transformados */

  /* el valor que resiva en value de tipo string lo pase por los metodos
  de java script y retorne la respuesta */
  transform(value: string): any {
    return value.split('').reverse().join('');
  }

}
