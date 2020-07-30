import { Component, OnInit, ViewChild } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import { AlertService } from 'ngx-alerts';
import { NgForm } from '@angular/forms';
import { Blog } from './blog'
import { AuthService } from 'src/app/shared/services/auth.service';
import { BlogFormModalComponent } from '../blog-form-modal/blog-form-modal.component';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild(BlogFormModalComponent, { static: false }) modalForm: BlogFormModalComponent;
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
  getAllArticles(){
    this.blog_serv.getAllArticles().subscribe(
      res=>{
        this.blog_serv.articles = res
      }
    )
  }
  deleteArt(id, index){
    this.blog_serv.deleteArticle(id).subscribe(
      res=>{
        this.blog_serv.articles.splice(index,1)
      }
    )
  }
  openModalForm(mood){
    this.modalForm.openModal(mood)
  }
  updateArticles(artID){
    this.modalForm.selectToUpdate(artID)
  }
}
