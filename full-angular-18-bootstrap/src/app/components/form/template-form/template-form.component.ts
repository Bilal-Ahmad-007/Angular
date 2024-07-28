import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface contactDetail{
  username:string,
  email:string,
  password:string,
  gender:string,
  termCondition:boolean
}
@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  data:any
  genderVal:string='';
detail:contactDetail={
  username: '',
  email: '',
  password: '',
  gender: '',
  termCondition: false
}

genderClick(event:any){
  this.genderVal=event.target.id
  this.detail.gender=this.genderVal

}
formData(){
this.data=this.detail
console.log(this.detail)

}
CleaarformData(){
  this.detail={
  username: '',
  email: '',
  password: '',
  gender: '',
  termCondition: false
}

console.log(this.detail)
}
}
