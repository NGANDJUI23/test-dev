import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavBarComponent} from './composants/nav-bar/nav-bar.component';
import {FooterComponent} from './composants/footer/footer.component';
import {Section1Component} from './main/section1/section1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, FooterComponent, Section1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test-dev';
}
