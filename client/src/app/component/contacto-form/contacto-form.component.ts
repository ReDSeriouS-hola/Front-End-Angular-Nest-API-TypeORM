import { Component, OnInit } from '@angular/core';
import { Contacto } from "../../interfaces/contacto";
import { ContactoService } from "../../services/contacto.service";
import { Router,/*ActivatedRoute*/ } from "@angular/router";
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
  //edit:boolean=false;

  constructor(
    private contactoService:ContactoService,
    private router:Router,
    //private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    /*if(this.activatedRoute.snapshot.params){
      const param= this.activatedRoute.snapshot.params;
      this.contactoService.getContacto(param["id"])
      .subscribe(
        res=>{
          this.contacto=res;
          this.edit=true;
        }

      )
    }*/
  }

  submitContacto(){
    this.contactoService.createContacto(this.contacto)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/contacto']);
      },
  
      err=> console.log(err),

    )
  }
  /*updateContacto(){
    this.contactoService.updateContacto(this.contacto.id, this.contacto)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/contacto"])
      },
      err=>console.log(err)

    )
  }*/

}
