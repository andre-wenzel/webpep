import { Component } from '@angular/core';
import { asapScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpep';
  action = 'open';

  toggleNav(): void {
    document.getElementById("menuIcon").classList.toggle("change");
    if (this.action === "open") {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      this.action = "close";
    }
    else {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      this.action = "open";
    }

  }
}
