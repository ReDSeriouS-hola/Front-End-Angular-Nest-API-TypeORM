import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactoService } from "../../services/contacto.service";


@Component({
  selector: 'app-contacto-list',
  templateUrl: './contacto-list.component.html',
  styleUrls: ['./contacto-list.component.css']
})
export class ContactoListComponent implements OnInit {
  contactos: Contacto[] = [];
  constructor(
    private contactoService: ContactoService,
    ) { }

  ngOnInit(): void {

    this.getContactos()
  }

  getContactos(){
    this.contactoService.getContactos()
    .subscribe(
      res=>{
        this.contactos =res;
      },
      err=> console.log(err)
    )
  }
  
  deleteContacto(id:any){
    this.contactoService.deleteContacto(id)
    
    .subscribe(
      res=>{
        this.getContactos()
      },
      err=>{
        console.log(err)
      } 
    )
    
  }

}
