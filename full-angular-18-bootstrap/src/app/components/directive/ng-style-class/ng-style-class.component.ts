import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style-class.component.html',
  styleUrl: './ng-style-class.component.css'
})
export class NgStyleClassComponent {
red:boolean=false
warning:boolean=false
success:boolean=false
redClick(){
  this.red=true
}
blueClick(){
  this.red=false
}

toggle(){
  this.warning=!this.warning
}
ngStyleTogle(){
  this.success=!this.success
}
}
