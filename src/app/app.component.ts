import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly ROOT_URL= 'https://jsonplaceholder.typicode.com';

  data: Observable<any> | undefined;
  //newData: Observable<any> | undefined;

  constructor(private http: HttpClient){}

  mostra(){
    document.getElementsByTagName("table")[0].removeAttribute("hidden");
  }

  getData(){
    let params=new HttpParams().set('userId', '4');
    //let headers= new HttpHeaders().set('Authorization', 'auth-token');
    this.data=this.http.get(this.ROOT_URL+'/posts',{ params });
  }
  
  // createData(){
  //   const data: Post ={
  //     id: 0,
  //     userId: 57,
  //     title: 'New Post!!',
  //     body: ' Hello World!'
  //   }

  //   this.newData = this.http.post<Post>(this.ROOT_URL+'/posts', data);
  // }
}