import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface studentData{
  name:string,
  rollNo:string,
  city:string,
  status:boolean,
  marks:number
}
@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

studentData:studentData[]=[
  {
  name:'Bilal Ahmad',
  rollNo:'1E02091',
  city:'Fortabbas',
  status:true,
  marks:98
},
  {
  name:'Umais Anjum',
  rollNo:'1E02114',
  city:'Hasilpur',
  status:false,
  marks:78
},
  {
  name:'Asjad Abrar',
  rollNo:'1E2423',
  city:'Dera Gazi Khan',
  status:true,
  marks:80
},
  {
  name:'Tayab Mehmood',
  rollNo:'1E23353',
  city:'Faqeer Wali',
  status:false,
  marks:60
},
  {
  name:'Tariq',
  rollNo:'1E2453',
  city:'DG Khan',
  status:true,
  marks:90
},
]


}
