import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from "./banner2/banner2.component";

@Component({
    selector: 'app-banners',
    standalone: true,
    templateUrl: './banners.component.html',
    styleUrl: './banners.component.css',
    imports: [BannerComponent, Banner2Component]
})
export class BannersComponent {

}
