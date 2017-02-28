import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

    private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: Http) {
        console.log('Posts service Initialized......');
    }

    getPosts() {
        return this.http.get(this.postsUrl).map(res => res.json());
    }
}