import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  started = false;
  solucionado = false;
  balanceado = false;

  imagenCapturaDatos = '../assets/img/sin.png';
  btnSelected: any;

  element: HTMLElement;

  oferta_1 = 400;
  oferta_2 = 7000;
  oferta_3 = 1090;

  demanda_A = 590;
  demanda_B = 1500;
  demanda_C = 5500;
  demanda_D = 900;

  // ------------------
  _1A = 13;
  _1B = 17;
  _1C = 19;
  _1D = 11;
  _1E = 0;

  _2A = 21;
  _2B = 29;
  _2C = 27;
  _2D = 20;
  _2E = 0;

  _3A = 38;
  _3B = 32;
  _3C = 30;
  _3D = 37;
  _3E = 0;

  _4A = 0;
  _4B = 0;
  _4C = 0;
  _4D = 0;
  _4E = 0;
  // ------------------
  asignacion_1A = 0;
  asignacion_1B = 0;
  asignacion_1C = 0;
  asignacion_1D = 0;
  asignacion_1E = 0;

  asignacion_2A = 0;
  asignacion_2B = 0;
  asignacion_2C = 0;
  asignacion_2D = 0;
  asignacion_2E = 0;

  asignacion_3A = 0;
  asignacion_3B = 0;
  asignacion_3C = 0;
  asignacion_3D = 0;
  asignacion_3E = 0;

  asignacion_4A = 0;
  asignacion_4B = 0;
  asignacion_4C = 0;
  asignacion_4D = 0;
  asignacion_4E = 0;
  // ------------------

  sumaOferta;
  sumaDemanda;
  balanceOferta = 0;
  balanceDemanda = 0;
  resultado = 0;

  constructor(public electronService: ElectronService, private translate: TranslateService) {}
  formatearNumero(nStr) {
    if (nStr !== undefined) {
      nStr += '';
      const x = nStr.split('.');
      let x1 = x[0];
      const x2 = x.length > 1 ? '.' + x[1] : '';
      const rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
    }
  }

  ngOnInit(): void {}

  cambiarValores() {
    this.started = true;
    this.solucionado = false;
    this.balanceado = false;
    this.btnSelected = '';
  }

  nuevoProblema() {
    this.started = true;
    this.solucionado = false;
    this.balanceado = false;
    this.btnSelected = '';
    this.limpiar();
  }

  pantallaInicio() {
    this.started = false;
    this.solucionado = false;
    this.balanceado = false;
    this.btnSelected = '';
    this.limpiar();
  }

  limpiar() {
    this.oferta_1 = 0;
    this.oferta_2 = 0;
    this.oferta_3 = 0;

    this.demanda_A = 0;
    this.demanda_B = 0;
    this.demanda_C = 0;
    this.demanda_D = 0;

    // ------------------
    this._1A = 0;
    this._1B = 0;
    this._1C = 0;
    this._1D = 0;
    this._1E = 0;

    this._2A = 0;
    this._2B = 0;
    this._2C = 0;
    this._2D = 0;
    this._2E = 0;

    this._3A = 0;
    this._3B = 0;
    this._3C = 0;
    this._3D = 0;
    this._3E = 0;

    this._4A = 0;
    this._4B = 0;
    this._4C = 0;
    this._4D = 0;
    this._4E = 0;
    // ------------------
    this.asignacion_1A = 0;
    this.asignacion_1B = 0;
    this.asignacion_1C = 0;
    this.asignacion_1D = 0;
    this.asignacion_1E = 0;

    this.asignacion_2A = 0;
    this.asignacion_2B = 0;
    this.asignacion_2C = 0;
    this.asignacion_2D = 0;
    this.asignacion_2E = 0;

    this.asignacion_3A = 0;
    this.asignacion_3B = 0;
    this.asignacion_3C = 0;
    this.asignacion_3D = 0;
    this.asignacion_3E = 0;

    this.asignacion_4A = 0;
    this.asignacion_4B = 0;
    this.asignacion_4C = 0;
    this.asignacion_4D = 0;
    this.asignacion_4E = 0;
    // ------------------

    this.sumaOferta = 0;
    this.sumaDemanda = 0;
    this.balanceOferta = 0;
    this.balanceDemanda = 0;
    this.resultado = 0;
  }
  buscarSRC(key) {
    if (key === 'uno') {
      this.imagenCapturaDatos = '../assets/img/uno.png';
      this.enfocarInput('input-oferta-1');
    } else if (key === 'dos') {
      this.imagenCapturaDatos = '../assets/img/dos.png';
      this.enfocarInput('input-oferta-2');
    } else if (key === 'tres') {
      this.imagenCapturaDatos = '../assets/img/tres.png';
      this.enfocarInput('input-oferta-3');
    } else if (key === 'A') {
      this.imagenCapturaDatos = '../assets/img/sin.png';
      this.enfocarInput('input-demanda-A');
    } else if (key === 'B') {
      this.imagenCapturaDatos = '../assets/img/sin.png';
      this.enfocarInput('input-demanda-B');
    } else if (key === 'C') {
      this.imagenCapturaDatos = '../assets/img/sin.png';
      this.enfocarInput('input-demanda-C');
    } else if (key === 'D') {
      this.imagenCapturaDatos = '../assets/img/sin.png';
      this.enfocarInput('input-demanda-D');
    }
    this.btnSelected = key;
  }
  enfocarOferta(key) {
    if (key === 'uno') {
      this.imagenCapturaDatos = '../assets/img/uno.png';
    } else if (key === 'dos') {
      this.imagenCapturaDatos = '../assets/img/dos.png';
    } else if (key === 'tres') {
      this.imagenCapturaDatos = '../assets/img/tres.png';
    }
    this.btnSelected = key;
  }

  enfocarInput(arg) {
    this.element = document.getElementById(arg) as HTMLElement;
    this.element.focus();
  }
  desenfocar() {
    this.btnSelected = null;
    this.imagenCapturaDatos = '../assets/img/sin.png';
  }

  balancear() {
    const sumaOferta = this.oferta_1 + this.oferta_2 + this.oferta_3;
    const sumaDemanda = this.demanda_A + this.demanda_B + this.demanda_C + this.demanda_D;

    this.sumaDemanda = sumaDemanda;
    this.sumaOferta = sumaOferta;

    if (sumaOferta === sumaDemanda) {
      this.balanceDemanda = 0;
      this.balanceOferta = 0;
      //
    } else if (sumaOferta < sumaDemanda) {
      this.balanceOferta = sumaDemanda - sumaOferta;
      this.sumaOferta = sumaDemanda;
      this.balanceDemanda = 0;
      //
    } else if (sumaOferta > sumaDemanda) {
      this.balanceDemanda = sumaOferta - sumaDemanda;
      this.sumaDemanda = sumaOferta;
      this.balanceOferta = 0;
    }
    this.balanceado = true;
  }

  Resolver() {
    const ofertas = [this.oferta_1, this.oferta_2, this.oferta_3, this.balanceOferta];
    let demandas = [this.demanda_A, this.demanda_B, this.demanda_C, this.demanda_D, this.balanceDemanda];

    this.solucionado = true;
    this.started = false;
    console.log('=========================');

    for (let indexOferta = 0; indexOferta < ofertas.length; indexOferta++) {
      let ofert = ofertas[indexOferta];
      console.log(ofert);

      console.log('=========================');
      for (let indexDemanda = 0; indexDemanda < demandas.length; indexDemanda++) {
        const demand = demandas[indexDemanda];
        
        this.darAsignaciones(indexOferta + 1, indexDemanda, 0);
        if (demand > 0) {
          if (demand >= ofert) {
            demandas[indexDemanda] = Math.abs(ofert - demand);
          } else {
            demandas[indexDemanda] = 0;
          }

          if (demand >= ofert) {
            this.darAsignaciones(indexOferta + 1, indexDemanda, ofert);
            ofert = 0;
          } else {
            ofert = ofert - demand;
            this.darAsignaciones(indexOferta + 1, indexDemanda, demand);
          }
        }
      }
      console.log('=========================');

      if (indexOferta === ofertas.length - 1) {
        this.calcularResultado();
      }
    }
  }

  calcularResultado() {
    this.resultado =
      this.asignacion_1A * this._1A +
      this.asignacion_1B * this._1B +
      this.asignacion_1C * this._1C +
      this.asignacion_1D * this._1D +
      this.asignacion_1E * this._1E +
      this.asignacion_2A * this._2A +
      this.asignacion_2B * this._2B +
      this.asignacion_2C * this._2C +
      this.asignacion_2D * this._2D +
      this.asignacion_2E * this._2E +
      this.asignacion_3A * this._3A +
      this.asignacion_3B * this._3B +
      this.asignacion_3C * this._3C +
      this.asignacion_3D * this._3D +
      this.asignacion_3E * this._3E +
      this.asignacion_4A * this._4A +
      this.asignacion_4B * this._4B +
      this.asignacion_4C * this._4C +
      this.asignacion_4D * this._4D +
      this.asignacion_4E * this._4E;
  }

  darAsignaciones(almacen, cliente, suma) {
    let res = {};
    const vocales = ['A', 'B', 'C', 'D', 'E'];
    const asig = 'asignacion_' + _.parseInt(almacen) + vocales[cliente];
    console.log(asig + ' = ' + suma);
    res['asignacion_1A'] = () => {
      this.asignacion_1A = suma;
    };
    res['asignacion_1B'] = () => {
      this.asignacion_1B = suma;
    };
    res['asignacion_1C'] = () => {
      this.asignacion_1C = suma;
    };
    res['asignacion_1D'] = () => {
      this.asignacion_1D = suma;
    };
    res['asignacion_1E'] = () => {
      this.asignacion_1E = suma;
    };

    res['asignacion_2A'] = () => {
      this.asignacion_2A = suma;
    };
    res['asignacion_2B'] = () => {
      this.asignacion_2B = suma;
    };
    res['asignacion_2C'] = () => {
      this.asignacion_2C = suma;
    };
    res['asignacion_2D'] = () => {
      this.asignacion_2D = suma;
    };
    res['asignacion_2E'] = () => {
      this.asignacion_2E = suma;
    };

    res['asignacion_3A'] = () => {
      this.asignacion_3A = suma;
    };
    res['asignacion_3B'] = () => {
      this.asignacion_3B = suma;
    };
    res['asignacion_3C'] = () => {
      this.asignacion_3C = suma;
    };
    res['asignacion_3D'] = () => {
      this.asignacion_3D = suma;
    };
    res['asignacion_3E'] = () => {
      this.asignacion_3E = suma;
    };

    res['asignacion_4A'] = () => {
      this.asignacion_4A = suma;
    };
    res['asignacion_4B'] = () => {
      this.asignacion_4B = suma;
    };
    res['asignacion_4C'] = () => {
      this.asignacion_4C = suma;
    };
    res['asignacion_4D'] = () => {
      this.asignacion_4D = suma;
    };
    res['asignacion_4E'] = () => {
      this.asignacion_4E = suma;
    };
    res[asig]();
  }

  habilitarBtnBanlancear() {
    let res = true;
    if (this.oferta_1 !== 0 && this.oferta_2 !== 0 && this.oferta_3 !== 0 && this.demanda_A !== 0 && this.demanda_B !== 0 && this.demanda_C !== 0 && this.demanda_D !== 0 && this._1A !== 0 && this._1B !== 0 && this._1C !== 0 && this._1D !== 0 && this._2A !== 0 && this._2B !== 0 && this._2C !== 0 && this._2D !== 0 && this._3A !== 0 && this._3B !== 0 && this._3C !== 0 && this._3D !== 0) {
      res = false;
    }
    return res;
  }
}
