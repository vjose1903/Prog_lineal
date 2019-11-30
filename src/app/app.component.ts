import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { AppConfig } from '../environments/environment';

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

  oferta_1 = 1000;
  oferta_2 = 1000;
  oferta_3 = 1000;
  oferta_4;

  demanda_A = 500;
  demanda_B = 1000;
  demanda_C = 1000;
  demanda_D = 500;
  demanda_E;

  _1A = 1;
  _1B = 1;
  _1C = 1;
  _1D = 1;

  _2A = 1;
  _2B = 1;
  _2C = 1;
  _2D = 1;

  _3A = 1;
  _3B = 1;
  _3C = 1;
  _3D = 1;

  _4A;
  _4B;
  _4C;
  _4D;

  sumaOferta;
  sumaDemanda;
  balanceOferta = 0;
  balanceDemanda = 0;

  constructor(public electronService: ElectronService, private translate: TranslateService) {}

  ngOnInit(): void {}
  iniciarPrograma() {
    this.started = !this.started;
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
    this.solucionado = true;
    this.started = false;
    // document.documentElement.style.setProperty('--widthResolver', '70rem');
  }
  habilitarBtnBanlancear() {
    let res = true;
    if (
      this.oferta_1 !== undefined &&
      this.oferta_2 !== undefined &&
      this.oferta_3 !== undefined &&
      this.demanda_A !== undefined &&
      this.demanda_B !== undefined &&
      this.demanda_C !== undefined &&
      this.demanda_D !== undefined &&
      this._1A !== undefined &&
      this._1B !== undefined &&
      this._1C !== undefined &&
      this._1D !== undefined &&
      this._2A !== undefined &&
      this._2B !== undefined &&
      this._2C !== undefined &&
      this._2D !== undefined &&
      this._3A !== undefined &&
      this._3B !== undefined &&
      this._3C !== undefined &&
      this._3D !== undefined
    ) {
      res = false;
    }
    return res;
  }
}
