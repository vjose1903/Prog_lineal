export interface JwtResponsesI {
    dataUser:{
     _id: string;
     nombre: String;
     apellido: String;
     usuario: String;
     email: String;
     accessToken: string;
     expiresIn: string;
     tipo_usuario: String;
    },
    mensaje:string,
    HttpErrorResponse:{
       error:{
          mensaje:string
       }
    },
    
 }