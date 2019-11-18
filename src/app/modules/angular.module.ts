import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTabsModule, MatCardModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule, 
    ReactiveFormsModule,
    TextMaskModule,
    MatTabsModule,
    MatExpansionModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports:[
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule, 
    ReactiveFormsModule,
    TextMaskModule,
    MatTabsModule,
    MatExpansionModule,
    AngularMultiSelectModule,
    BrowserAnimationsModule,
    MatCardModule
  ]
})
export class AngularModule { }
