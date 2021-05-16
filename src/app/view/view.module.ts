import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ViewRoutingModule } from './view-routing.module';
import { KeysPipe } from './view/keys.pipe';



@NgModule({
  declarations: [ViewComponent,KeysPipe],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
