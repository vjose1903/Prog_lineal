import "reflect-metadata";
import "../polyfills";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";

// NG Translate
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from "./app.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";

// modulos
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxBootstrapModule } from "./modules/ngx-bootstrap.module";
import { AngularModule } from "./modules/angular.module";

import { ToastrModule } from "ngx-toastr";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
    //  UploadImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    //modulos
    AngularModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    NgxBootstrapModule
  ],
  exports: [
    AngularModule,
    MDBBootstrapModule,

    BrowserAnimationsModule,
    NgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
