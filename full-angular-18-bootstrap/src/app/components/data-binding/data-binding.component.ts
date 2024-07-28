import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  changedName:string=""
  hiddenVal:boolean=true;
  input:string=''
myValues:any={
  name:'bilal',
  age:22,
  rollNo:2091,
  inputVal:'Bilal Ahmad',
  checkBox:true,
}
show(){
  this.hiddenVal=!this.hiddenVal
}
getVal(event:any){
     this.changedName=event.target.value
}
ChangeName(){
  this.myValues.name=this.changedName;
 

}
}
