/* interface sirve para definir globalmente el tipo de dato de un objeto 
le decimos que sea exportable 'export' para que cualquiera lo pueda utilizar*/
export interface User {
    email: string; 
    gender: string;
    picture:{
      large:string;
      medium:string;
      thumbnail:string;
    };

  }