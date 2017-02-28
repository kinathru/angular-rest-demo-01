import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  
{
    name: string;
    email: string;  
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts : Post[];

     constructor(private postsService:PostsService)
     {
        console.log('Constructor Ran :D');
        this.name = 'Kinath';
        this.email = 'kinath@codegen.net'; 
        this.address = {
         street : 'Main Street',
         city : 'Colombo',
         state : 'Western'
        };
        this.hobbies = ['Music','Books','Movies'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
            console.log(posts);
            this.posts = posts;
        });

     }

     toggleHobbies()
     {
         console.log("Inside toggle Hobbies");
         if(this.showHobbies == true)
         {
             this.showHobbies = false;
         }
         else
         {
             this.showHobbies = true;
         }
         
     }

     addHobby(hobby:string)
     {
         console.log(hobby);
         this.hobbies.push(hobby)
     }

     deleteHobby(i:number)
     {
         this.hobbies.splice(i,1)
     }
}

interface address
{
    street: string;
    city: string;
    state: string;
}

interface Post
{
    id:number;
    title:string;
    body:string;
}
