import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import {ServicioService} from "src/app/services/servicio.service"
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  getData(){
    console.log("get datos");
    this.servio.getInfo()
    .subscribe(
      res=>{
        console.log(res);
        //alert(res);
      },
      err=> console.log(err)
    )
  }

  public lineChartData: ChartDataSets[] = [
    { data: [1, 3, 2, 4, 9, 1, 2, 7, 2, 5, 4, 1], label: 'Banco 1' },
    { data: [2, 4, 4, 1, 8, 2, 9, 4, 1, 8, 2, 9], label: 'Banco 2' },
    { data: [5, 3, 7, 3, 3, 7, 4, 2, 5, 3, 7, 4], label: 'Banco 3' }
  ];
  public lineChartLabels: Label[] = ['Agosto', 'Septiembre', 'Octubre', 'Nobriembre', 'Diciembre','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {},
  };
  public lineChartColors: Color[] = [
    { // grey
      borderColor: 'yellow',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    { // dark grey
      borderColor: 'blue',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    { // red
      borderColor: 'red',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    }
  ];
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private servio: ServicioService) { 
    //this.getCategoria();
  }

  ngOnInit(): void {
  }
  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  /*
  public barChartOptions:ChartOptions={
    responsive:true,
    scales:{ xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[]=['2010','2011','2012','2013','2014','2015','2016'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  //datos de los graficos
  public barChartData:ChartDataSets[];
  public chartColors;
  
  private categoria;
  private dato: string;
  //Arreglo de los datos que vamos a pasar
  private datos = [];
  //Arreglo de las categorias que vamos a pasar
  private nombreCategoria = [];
  //Arreglo de los colores que vamos a pasar
  private colores = [];
  getCategoria() {
    //this.categoriaService.getCategorias().subscribe(res => {
    //this.categoria = res;
    for (var _i = 0; _i < 6; _i++) {
      this.dato = _i.toString();
      this.datos.push(this.dato);
      this.nombreCategoria.push("cat " + _i);
      this.colores.push('#1449a9');
    }
    console.log(this.nombreCategoria);
    this.cargarDatos(this.datos, this.nombreCategoria, this.colores);
    //});
  }

  //Función que carga los datos en la grafica, asi como los colores
  cargarDatos(datos, nombreCategoria, colores) {
    this.barChartData = [];
    this.chartColors = [];
    
    for (const index in datos) {
      this.barChartData.push({ data: datos[index], label: nombreCategoria[index] });
      this.chartColors.push({backgroundColor: colores[index]});
    }

  }*/

}
