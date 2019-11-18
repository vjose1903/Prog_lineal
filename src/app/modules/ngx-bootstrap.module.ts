import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule,  TabsModule ,ModalModule, ButtonsModule, BsDropdownModule , AlertModule, BsDatepickerModule, DatepickerModule, } from 'ngx-bootstrap';
import { ToastrModule} from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccordionModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule,
    TabsModule.forRoot(),
    ToastrModule.forRoot(),
    NgxPaginationModule,
    AccordionModule.forRoot(),
  ],
  exports:[
    CarouselModule,
    ModalModule,
    ButtonsModule,
    BsDropdownModule,
    AlertModule,
    BsDatepickerModule,
    DatepickerModule,
    TabsModule,
    ToastrModule,
    AccordionModule
  ]

})
export class NgxBootstrapModule { }
