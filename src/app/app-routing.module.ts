import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Component } from './components/tab1/tab1.component'
import { Tab2Component } from './components/tab2/tab2.component'
import { Tab3Component } from './components/tab3/tab3.component'


const routes: Routes = [
  { path: 'tab1', component: Tab1Component },
    { path: 'tab2', component: Tab2Component },
    { path: 'tab3', component: Tab3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
