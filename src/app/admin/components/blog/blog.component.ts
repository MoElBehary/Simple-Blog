import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';
import { NgForm } from '@angular/forms';
import { Blog } from './blog'
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles : Blog[] = [];
  author:any;
  @ViewChild('title') titleInp; 
  @ViewChild('imgURL') imgInp; 
  @ViewChild('content') contentInp; 
  constructor(
    public blog_serv: BlogService,
    public validations_serv: ValidationsService,
    public progress_service: ProgressBarService,
    private alertService: AlertService,
    public auth_service: AuthService,
    ) { }

  ngOnInit(): void {
    this.getAllArticles()
  }
  onSubmit(f: NgForm) {
    this.author = { id: this.auth_service.user.id, name: this.auth_service.user.username}
    f.value.author = this.author
    console.log(f.value)
    this.progress_service.startLoading()
    this.blog_serv.createArticle(f.value).subscribe(
      res =>{
        this.progress_service.setSuccess()
        this.alertService.success('Published :)');
        this.progress_service.completeLoading()
        this.articles.push(res)
      },
      err =>{
        this.progress_service.setError()
        this.alertService.danger(err.error.message);
        this.progress_service.completeLoading()
      },
      ()  =>{}
    )
  }
  getAllArticles(){
    this.blog_serv.getAllArticles().subscribe(
      res=>{
        this.articles = res
      }
    )
  }
  deleteArt(id, index){
    this.blog_serv.deleteArticle(id).subscribe(
      res=>{
        this.articles.splice(index,1)
      }
    )
  }
}
