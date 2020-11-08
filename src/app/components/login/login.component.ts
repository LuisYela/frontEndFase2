import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  passcode:string = "";
  user:string = "";

  ngOnInit(): void {
  }


  Ingresar(){
    if(this.passcode=="Yela"&&this.user=="Luis"){
      this.router.navigate(['/home']);
    }else{
      alert("usuario o contraseña invalidos");
    }
  }

}
