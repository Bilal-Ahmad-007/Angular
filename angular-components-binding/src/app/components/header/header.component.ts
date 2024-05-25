import { Component } from '@angular/core';
import { UperHeaderComponent } from "./uper-header/uper-header.component";
import { MainHeaderComponent } from './main-header/main-header.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [UperHeaderComponent,MainHeaderComponent]
})
export class HeaderComponent {

}
