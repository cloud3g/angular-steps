import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultComponent,
    // canActivate: [],
    // children: [
    //   {
    //     path: ':id',
    //     component: DetailComponent,
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class DefaultRoutingModule { }
