import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcronymsComponent } from './acronyms/acronyms.component';
import { AcronymLinkComponent } from './acronyms/acronym-link.component';
import { AcronymAddComponent } from './acronyms/acronym-add.component';
//import { AcronymService } from './acronyms/acronym.service';

@NgModule({
  declarations: [
    AppComponent,
    AcronymsComponent,
    AcronymLinkComponent,
    AcronymAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
