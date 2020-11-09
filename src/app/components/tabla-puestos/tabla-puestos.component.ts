import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { grafico } from 'src/app/models/grafico';
import {ServicioService} from "src/app/services/servicio.service"

@Component({
  selector: 'app-tabla-puestos',
  templateUrl: './tabla-puestos.component.html',
  styleUrls: ['./tabla-puestos.component.css']
})
export class TablaPuestosComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [];
  public listadoBancos:string[]=[];
  public listadoBancos2:grafico[]=[];
  public lineChartLabels: Label[] = ['Julio 2019', 'Agosto 2019', 'Septiembre 2019', 'Octubre 2019', 'Nobiemrbre 2019', 'Diciembre 2019', 'Enero 2020','Febrero 2020', 'Marzo 2020', 'Abril 2020', 'Mayo 2020', 'Junio 2019','Julio 2020', 'Agosto 2020', 'Septiembre 2020'];
  
  async getData(){
    const datosimpri = await this.servio.query(`
    {
      getRank{
        bank_name,
        month_name,
        year_name,
        posicion,
        pos
      }
    }
    `);
    console.log(datosimpri['data']['getRank']);//*/
    var bancoActual:string="";
    for (let index = 0; index < datosimpri['data']['getRank'].length; index++) {
      bancoActual=datosimpri['data']['getRank'][index].bank_name;
      if(!this.listadoBancos.includes(bancoActual)){
        this.listadoBancos.push(bancoActual);
        var newBank:grafico=new grafico();
        var databancoActual:number[]=[];
        var mesActual:string=datosimpri['data']['getRank'][index].month_name;
        var anioActual:string=datosimpri['data']['getRank'][index].year_name;
        for (let index = 0; index < datosimpri['data']['getRank'].length; index++) {
          if(bancoActual==datosimpri['data']['getRank'][index].bank_name){
            databancoActual.unshift(datosimpri['data']['getRank'][index].pos);
          }
        }
        newBank={
          nombre:bancoActual,
          mes: mesActual,
          anio:anioActual,
          puesto:databancoActual
        }
        this.listadoBancos2.push(newBank);
      }
    }
    for (let i = 0; i < this.listadoBancos.length; i++) {
      this.lineChartData.push({ data: this.listadoBancos2[i].puesto , label: this.listadoBancos2[i].nombre });
    }
    console.log(this.listadoBancos2);
    console.log("get datos");
  }

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private servio: ServicioService) { 
    //this.getCategoria();
    this.getData();
  }

  ngOnInit(): void {
  }

}