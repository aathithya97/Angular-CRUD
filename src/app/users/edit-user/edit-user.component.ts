import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: any;
  userDetails: any;
  editUserForm : FormGroup = new FormGroup({})
  dataLoaded : boolean = false
  constructor(private activatedRoute : ActivatedRoute,private userService:UserService,private formBuilder :FormBuilder,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false
    this.activatedRoute.params.subscribe((data:any) => {
      this.userId = data.id;
    })

    if(this.userId !== ''){
      this.userService.viewuser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails,data)
        console.log(this.userDetails)

        this.editUserForm = this.formBuilder.group({
          'username':new FormControl(this.userDetails.name,[Validators.required,Validators.minLength(3)]),
          'email': new FormControl(this.userDetails.email,[Validators.required,Validators.email]),
        })
        this.dataLoaded = true
      })
      .catch(err =>{
        console.log(err)
      })
    }
  }

  updateUser(){
    console.log(this.editUserForm.value)
    this.userService.updateUser(this.userId,this.editUserForm.value).subscribe(data => {
      console.log("User created")
      this._snackBar.open("User created Successfully")
    },err =>{
      console.log("error")
      this._snackBar.open("Unabto to create User")
    })
  }

}
