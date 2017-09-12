import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AcronymsComponent } from './acronyms/acronyms.component';
import { AcronymLinkComponent } from './acronyms/acronym-link.component';

@NgModule({
  declarations: [
    AppComponent,
    AcronymsComponent,
    AcronymLinkComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
