import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project-0';

  data : number[] = [1, 2, 3, 4, 5]
  show : boolean = true;

  toggleClick() : void {
    this.show = !this.show;
  }
}
