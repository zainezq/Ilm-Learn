import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ilm-learn-frontend';
}
