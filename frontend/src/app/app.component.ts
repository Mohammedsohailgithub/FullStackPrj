import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PropertyCardComponent } from "./property/property-card/property-card.component";
import { PropertyListComponent } from "./property/property-list/property-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavBarComponent, PropertyCardComponent, PropertyListComponent]
})
export class AppComponent {
  title = 'frontend';
}
