import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select'

const Material=[
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  MatSelectModule
];
@NgModule({
 
  imports: [
    Material
  ],
  exports:[
    Material
  ]
})
export class MaterialModule { }
