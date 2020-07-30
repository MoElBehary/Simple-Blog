import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }
  _url = environment.baseURL+"api/blog";

  getAllArticles(){
    return this.http.get<any>(environment.baseURL +"api/articles");
  }
  // [?] get Article by :id
  getSelectedArticle(id) {
    return this.http.get<any>(environment.baseURL +"api/articles/" + id)
  }
  //[?] (POST) Create Article
  createArticle(newArticle:any) {
    return this.http.post<any>(this._url, newArticle)
  }
  // [?] (PUT) udpate Article
  updateArticle(id, updatedArticle) {
    return this.http.put(this._url + '/' + id, updatedArticle)
  }
  //[?] (DELETE) delete Article
  deleteArticle(id) {
    return this.http.delete(this._url + '/' + id)
  }
}
