import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NgForm } from '@angular/forms';
import { Blog } from '../blog/blog';

@Component({
  selector: 'app-blog-form-modal',
  templateUrl: './blog-form-modal.component.html',
  styleUrls: ['./blog-form-modal.component.css']
})
export class BlogFormModalComponent implements OnInit {
  mood: any
  artToUpdate:Blog
  constructor(
    public blog_serv: BlogService,
    public progress_service: ProgressBarService,
    private alertService: AlertService,
    public auth_service: AuthService,
  ) { }
  author: any;
  ngOnInit(): void {
  }
  openModal(m){
    this.mood = m
    document.getElementById('createNewArt').click()
  }
  onSubmit(f: NgForm) {
    this.author = { id: this.auth_service.user.id, name: this.auth_service.user.username }
    f.value.author = this.author
    this.progress_service.startLoading()
    switch (this.mood) {
      case "Create":
        this.blog_serv.createArticle(f.value).subscribe(
          res => {
            this.progress_service.setSuccess()
            this.alertService.success('Published :)');
            this.progress_service.completeLoading()
            this.blog_serv.articles.push(res)
          },
          err => {
            this.progress_service.setError()
            this.alertService.danger(err.error.message);
            this.progress_service.completeLoading()
          },
          () => { 
            document.getElementById('closeModal').click()
          }
        )
        break;
      case "Update":
        this.blog_serv.updateArticle(this.artToUpdate.id, f.value).subscribe(
          res => {
            this.progress_service.setSuccess()
            this.alertService.success('Updated :)');
            this.progress_service.completeLoading()
            this.blog_serv.getAllArticles().subscribe(res => { this.blog_serv.articles = res })
          },
          err => {
            this.progress_service.setError()
            this.alertService.danger(err.error.message);
            this.progress_service.completeLoading()
          },
          () => {
            document.getElementById('closeModal').click()
          }
        )
    }
  }
  selectToUpdate(id) {
    this.blog_serv.getSelectedArticle(id).subscribe(
      res=>{
        this.artToUpdate = res
        console.log(this.artToUpdate)
      }
    )
  }
}
