import { Pipe, PipeTransform } from '@angular/core';
/* Primero importamos la libreria date-fns con la opción format */
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat' /* El nombre de mi pipe al usar */
})
export class DateFormatPipe implements PipeTransform {

  /* le desimos que el valor(value) a traer es tipo Date y ponemos 
  argumentos(args) o valores por defecto con el formato PPPP de la 
  nueva libreria */
  /* en la documentación de la libreria podemos ver como usar 
  los formatos */
  transform(value: Date, args: string = 'PPPP'): any {
    /* finalmente devolvemos los valores */
    return format(value, args);
  }

}
