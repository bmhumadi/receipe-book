import { Component } from '@angular/core';
import { ReceipeService } from './receipes/receipe.service';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  providers: [ReceipeService]
})
export class AppComponent {
}
