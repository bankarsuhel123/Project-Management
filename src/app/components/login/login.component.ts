import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private cService: UserServiceService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  onsubmit() {
    if (this.loginForm.valid) {
      // this.cService.getData().subscribe(res => {
      //   console.log(res)
      // })
      console.log(this.loginForm.value)
      // send obj to database
    }
    else {

      console.log('form is not valid')
      // throw the error using toaster and requiresd fields
      validateForm.validateAllFromFeilds(this.loginForm);
      alert('Your Form Is Invalid')
    }
  }
}
