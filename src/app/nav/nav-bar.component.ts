import { Component } from "@angular/core";

@Component({
    selector: "nav-bar",
    templateUrl: './nav-bar.component.html',
    styles: [
        `
        .nav.navbar-nav{font-size: 15px;}
         #searchForm{margin-rigth: 100px;}
         @media(max-width: 1200px) {#searchForm:{display:none}}
        `
    ]
    
})
export class NavBarComponent{

}