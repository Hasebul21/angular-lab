import { Component } from '@angular/core';
import { RouteNames } from '../app.config';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  readonly routesNames = RouteNames;
}
