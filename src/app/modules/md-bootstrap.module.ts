import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MDB Angular Pro
import { ButtonsModule, WavesModule } from 'angular-bootstrap-md'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CollapseModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsModule, 
    WavesModule,
    MDBBootstrapModule.forRoot(),
    CollapseModule

  ],
  exports:[
    CommonModule,
    ButtonsModule, 
    WavesModule,
    CollapseModule

  ]
})
export class MdBootstrapModule { }
