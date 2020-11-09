import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServicioService } from '../../services/servicio.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private servio: ServicioService, private router:Router) { }

  passcode:string = "";
  user:string = "";

  ngOnInit(): void {
  }


  /*Ingresar(){
    if((this.passcode=="Yela"&&this.user=="Luis")||(this.passcode=="grupo14"&&this.user=="bases2")){
      this.router.navigate(['/home']);
    }else{
      alert("usuario o contraseña invalidos");
    }
  }*/

  async Ingreso() {
    const login = await this.servio.query(`mutation{
      login(username:"${this.user}", password:"${this.passcode}"){
       errors{
        field,
        message
      },
        user{
          user_id,
          name,
          lastname
        }
      }
    }`);

    if (login['data']['login']['user']) {
      this.router.navigate(['/home']);
    } else {
      alert(login['data']['login']['errors'][0]['message']);
    }
  }

}
