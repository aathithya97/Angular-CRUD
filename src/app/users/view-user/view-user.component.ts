import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId: any;
  userDetails:any;
  constructor(private userService : UserService,private activatedRouter : ActivatedRoute) { }

  ngOnInit() {

     this.activatedRouter.params.subscribe((data:any) => {
     this.userId = data.id
     console.log()
    })
    this.userService.viewuser(this.userId).subscribe((data:any) =>{
      console.log(data)
      this.userDetails = data
    })
  }

}
