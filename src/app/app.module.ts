import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
// components
import { AppComponent } from './app.component';
// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module'
// service
import { TokenInterceptorService } from './shared/services/token-interceptor.service'
// GARD!!
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { UserBlogComponent } from './pages/user-blog/user-blog.component';
import { ArticleComponent } from './pages/article/article.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserBlogComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    AdminModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AuthGuard,{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
