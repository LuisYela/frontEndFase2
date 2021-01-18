import { Component, OnInit } from '@angular/core';

import {ServicioService} from "src/app/services/servicio.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private servio: ServicioService) { }
  
  saludo="";

  ngOnInit(): void {
    this.servio.getSaludo().subscribe(
      res => {
        this.saludo=res.saludo;
        console.log(res);
      },
      err => console.error(err)
    );
  }

}
