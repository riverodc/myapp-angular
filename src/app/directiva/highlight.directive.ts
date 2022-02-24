import { Directive, ElementRef } from '@angular/core';



@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  

  constructor(
    /* Lo inyectamos como una inyeccion de dependencias a nuestra directiva 
    de esta forma nos va a llegar al elemento que queremos modificar, luego
    podemos hacer cualquier modificacion. ejemplo tomamos el elemento y cambiamos 
    el estilo */
    private element: ElementRef
  ) { 
    /* en este momento tenemos la directiva de los elementos nativos del 
    navegador nativeElement y ya podemos hacer cambios */
    this.element.nativeElement.style.backgroundColor = 'yellow'; 
  }

}
