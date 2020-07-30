import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { UserBlogComponent } from './pages/user-blog/user-blog.component';
import { ArticleComponent } from './pages/article/article.component';


const routes: Routes = [
  { path: '', component: UsersComponent, canActivate: [AuthGuard]},
  { path: 'user-blog', component: UserBlogComponent},
  { path: 'user-blog/:id', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
