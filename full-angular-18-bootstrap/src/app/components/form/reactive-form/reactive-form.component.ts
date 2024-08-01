import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


studentData: FormGroup= new FormGroup({
  username:new FormControl("",[ Validators.required,Validators.minLength(4),Validators.maxLength(8)]),
  email:new FormControl("",[Validators.email,Validators.required]),
  password:new FormControl("",[Validators.required,this.passwordValidator]),
 
  istermConditionConfirm:new FormControl(false,Validators.requiredTrue),
 
})
  // Custom validator for password
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumeric = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValidLength = value.length >= 8;

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength;

    if (!passwordValid) {
      return {
        passwordStrength: {
          hasUpperCase,
          hasLowerCase,
          hasNumeric,
          hasSpecialChar,
          isValidLength,
        }
      };
    }

    return null;
  }
formVal:any;


submit(){
  this.formVal=this.studentData.value
  console.log(this.formVal)
}
reset(){
  this.studentData.reset({
    username:'',
    email:'',
    password:'',
   
    istermConditionConfirm:false,
  })
}

}
