import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Post from 'src/app/models/Post';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  commentForm = new FormGroup({
    text: new FormControl(''),
  })

 /* numOfLikes:number = 0;
  likePost(){
    this.numOfLikes++;
  }
  dislikePost(){
    this.numOfLikes--;
  }
  */

  @Input('post') post: Post
  replyToPost: boolean = false

  constructor(private postService: PostService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleReplyToPost = () => {
    this.replyToPost = !this.replyToPost
  }

  submitReply = (e: any) => {
    e.preventDefault()
    let newComment = new Post(0, this.commentForm.value.text || "", "", this.authService.currentUser, [],[])
    this.postService.upsertPost({...this.post, comments: [...this.post.comments, newComment]})
      .subscribe(
        (response) => {

          if(response == null){
            alert("this comment contains profanity");
          }

          else{
            this.post = response
            this.toggleReplyToPost()
          }
          
        }
      )
  }
}
