import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {NgZorroAntdModule} from 'ng-zorro-antd';

import { DefaultComponent } from './default.component';
import { DefaultRoutingModule } from './default-routing.module';

import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './content/header/header.component';

const LAYOUTALL = [DefaultComponent, SidebarComponent, ContentComponent, HeaderComponent];

const COMPONENTS = [
  ...LAYOUTALL,
]

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    DefaultRoutingModule,
  ],
  declarations: [
    ...COMPONENTS,
    ContentComponent
  ],
  exports: [
    ...COMPONENTS
  ],
})
export class DefaultModule {

}
