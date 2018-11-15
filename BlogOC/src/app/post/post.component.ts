import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() posts :any;
  
  constructor(){
   
   }

  ngOnInit() {
  }

  likeUp(){
    this.posts["loveIt"] += 1;
  }

  likeDown(){
    this.posts["loveIt"] -= 1;
  }

  getColor(){
    if (this.posts["loveIt"] > 0)
      return 'green';
    else if (this.posts["loveIt"] < 0)
      return 'red';
  }

}
