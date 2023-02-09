import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateForm';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup
  constructor(private fb: FormBuilder, private cService: UserServiceService) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash';
    this.isText ? this.type = 'text' : this.type = 'password';
  }
  signUpSubmit(data: any) {
    if (this.signUpForm.valid) {
      this.cService.postData(data).subscribe(res => {
        console.log(res)
      })
      // send to database
      this.signUpForm.reset()
    }
    else {
      console.log('form is not valid')
      // throw the error using toaster and requiresd fields
      validateForm.validateAllFromFeilds(this.signUpForm);
      alert('Your Form Is Invalid')
    }
  }

}
