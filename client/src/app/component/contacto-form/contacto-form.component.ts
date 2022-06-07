import { Component, OnInit } from '@angular/core';
import { Contacto } from "../../interfaces/contacto";
import { ContactoService } from "../../services/contacto.service";
import { Router,ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-contacto-form',
  templateUrl: './contacto-form.component.html',
  styleUrls: ['./contacto-form.component.css']
})
export class ContactoFormComponent implements OnInit {
  
  contacto:Contacto={
    fullname: '',
    phone: '',
    mail: '',
    age: '',
    status: ''
  };
  edit:boolean=false;

  constructor(
    private contactoService:ContactoService,
    private router:Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const param = this.activatedRoute.snapshot.params;
    if(param){
      this.contactoService.getContacto(param["id"])
      .subscribe(
        res=>{
          this.contacto=res;
          this.edit=true;
        }

      )
    }
  }

  sumbmitContacto(){
    this.contactoService.createContacto(this.contacto)
    .subscribe(
      res=>{
        this.router.navigate(['/']);
      },
      err=> console.log(err),
    )
  }

}
