import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }
  @Input('user') user!: User[];
  word:String;
  

  ngOnInit(): void {
   
  }
  
  search(){
    console.log("hello")
    
    this.userService.search(this.word).subscribe(
        
      returnedUser => {
      
        this.user = returnedUser;
        

      }
    )
  }
}
