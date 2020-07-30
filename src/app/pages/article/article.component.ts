import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/admin/components/blog/blog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  artID:any;
  article;
  artsIDs:any[] = []
  config: any;
  constructor(private activatedRoute: ActivatedRoute, public blog_serv: BlogService) { }
  ngOnInit(): void {
    this.getSelectedArt(this.paramID())
  }
  paramID(){
    return this.activatedRoute.snapshot.paramMap.get('id');
  }
  setConfig(){
    this.config = {
      currentPage: this.artsIDs.indexOf(this.paramID()),
      totalItems: this.artsIDs.length-1
    };
    console.log(this.config.currentPage)
  }
  getSelectedArt(id){
    this.blog_serv.getSelectedArticle(id).subscribe(
      res =>{
        this.article = res;
        console.log(this.article)
      },
      err =>{},
      () => { this.getAllArts()}
    )
  }
  getAllArts(){
    this.artsIDs = [];
    this.blog_serv.getAllArticles().subscribe(
      res=>{
        for(let art of res){
          this.artsIDs.push(art.id)
        }
      },
      err=>{}
      ,()=>{
        this.setConfig()
      }
    )
  }
}
