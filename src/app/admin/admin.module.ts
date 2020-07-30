import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BlogComponent } from './components/blog/blog.component'
import { FormsModule } from '@angular/forms';
import { BlogFormModalComponent } from './components/blog-form-modal/blog-form-modal.component';

@NgModule({
  declarations: [BlogComponent, BlogFormModalComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  exports: [BlogComponent]
})
export class AdminModule { }
