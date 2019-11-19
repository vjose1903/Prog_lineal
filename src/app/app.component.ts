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
  sinRayas = true;
  uno = false;
  dos = false;
  tres = false;
  A = false;
  B = false;
  C = false;
  D = false;
  imagenCapturaDatos = '../assets/img/sin.png';
  btnSelected: any;

  element: HTMLElement;

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

  enfocarInput(arg) {
    this.element = document.getElementById(arg) as HTMLElement;
    this.element.focus();
  }
  desenfocar() {
    this.btnSelected = null;
    this.imagenCapturaDatos = '../assets/img/sin.png';
  }
}
