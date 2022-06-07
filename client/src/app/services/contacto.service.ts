import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Contacto } from "../interfaces/contacto";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  BASE_URL: string="http://localhost:3000";


  constructor(private http:HttpClient) { }

  getContactos():Observable< Contacto[]> {
    return this.http.get<Contacto[]>(`${this.BASE_URL}/contacto`);
    
  }
  getContacto(id:any):Observable<Contacto>{
    return this.http.get<Contacto>(`${this.BASE_URL}/contacto/${id}`);
  }
  createContacto(contacto:Contacto):Observable<Contacto>{
    return this.http.post<Contacto>(`${this.BASE_URL}/contacto/create`,contacto)
  }
  deleteContacto(id:any):Observable<Contacto>{
    return this.http.delete<Contacto>(`${this.BASE_URL}/contacto/delete/${id}`)
  }
  updateContacto(id:any, contacto:Contacto):Observable<Contacto>{
    return this.http.patch<Contacto>(`${this.BASE_URL}/contacto/update/${id}`,contacto)
  }




}
