import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BlogComponent } from './components/blog/blog.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [BlogComponent]
})
export class AdminModule { }
