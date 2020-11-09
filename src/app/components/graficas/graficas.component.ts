import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-annotation';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { grafico } from 'src/app/models/grafico';
import {ServicioService} from "src/app/services/servicio.service"

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
    
export class GraficasComponent implements OnInit {

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
    
    //console.log(this.listadoBancos);
    console.log(this.listadoBancos2);
    //console.log( this.listadoBancos2[0].puesto);
    console.log("get datos");
    this.changeColor();
    /*this.servio.postTabla()
    .subscribe(
      res=>{
        var bancoActual:string="";
        for (let index = 0; index < res.data.getRank.length; index++) {
          bancoActual=res.data.getRank[index].bank_name;
          if(!this.listadoBancos.includes(bancoActual)){
            this.listadoBancos.push(bancoActual);
            var newBank:grafico=new grafico();
            var databancoActual:number[]=[];
            var mesActual:string=res.data.getRank[index].month_name;
            var anioActual:string=res.data.getRank[index].year_name;
            for (let index = 0; index < res.data.getRank.length; index++) {
              if(bancoActual==res.data.getRank[index].bank_name){
                databancoActual.unshift(res.data.getRank[index].posicion);
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
        
        //console.log(this.listadoBancos);
        console.log(this.listadoBancos2);
        console.log( this.listadoBancos2[0].puesto);
        var datos:number[]=[];
        //alert(res);
      },
      err=> console.log(err)
    )*/
  }//*/

  public lineChartData: ChartDataSets[] = [
    { data: [0], label: 'Inicial' }
  ];//*/
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'right',
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
    {
      borderColor: 'yellow',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'green',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'blue',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'red',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'white',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'orange',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'purple',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'pink',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'brown',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'yellow',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'dark-red',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'green',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'blue',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'red',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'white',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'orange',
      pointBorderColor: 'black',
      pointHoverBorderColor: 'black'
    },
    {
      borderColor: 'brown',
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
    this.getData();
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
