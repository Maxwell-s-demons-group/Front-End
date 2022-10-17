import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social-media-angular';
  isDarkTheme = false;

  toggleTheme()
  {
    this.isDarkTheme=! this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
  }

}
