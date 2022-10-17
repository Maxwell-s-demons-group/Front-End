import { Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Post from 'src/app/models/Post';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  faThumbsUp = faThumbsUp;

  commentForm = new FormGroup({
    text: new FormControl(''),
  })
  numOfLikes:number = 0;
  likePost(){
    this.numOfLikes++;
  }
 /* dislikePost(){
    this.numOfLikes--;
  }
*/
  @Input('post') post!: Post;

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
  }
  
  submitLike= () => {
    console.log(this.post);
    let newLike = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [],[])
    // [user1, user2, user3] -spread operator> user1,user2,user3
    this.postService.upsertPost({...this.post, likes: [ ...this.post.likes, this.authService.currentUser ]})

    // this.inputLike.likes, newLike // this.authService.currentUser
    // ...this.inputLike.likes, newLike]})
      .subscribe(
        (response) => {
          this.post = response
          this.likePost()
          console.log(this.post);
      
        }
      )
  }

}
