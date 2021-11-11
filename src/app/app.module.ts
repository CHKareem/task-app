import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Tab1Component} from './components/tab1/tab1.component';
import { Tab2Component} from './components/tab2/tab2.component';
import { Tab3Component} from './components/tab3/tab3.component';

@NgModule({
  declarations: [
    AppComponent,
    Tab2Component,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
