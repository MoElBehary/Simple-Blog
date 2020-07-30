import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/admin/components/blog/blog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-blog',
  templateUrl: './user-blog.component.html',
  styleUrls: ['./user-blog.component.css']
})
export class UserBlogComponent implements OnInit {
  articles: Blog[] = [];
  constructor(public blog_serv: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blog_serv.getAllArticles().subscribe(res => {
      this.articles = res   
      console.log(this.articles) 
    });
  }
  showArticle(id){
    this.router.navigateByUrl("user-blog/"+id)
  }
}
