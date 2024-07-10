import { Component } from '@angular/core';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent{
  slide:any= document.querySelector(".slide")
  slider(){
    this.slide.classList.toggle("hidden")
  }
  Home(){
    console.log("hello i am home")
  }
}
