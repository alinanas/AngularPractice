import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  template: '<div>{{errorMessage}}</div>',
})
export class ErrorMessageComponent {
  @Input() errorMessage: string = 'Something went wrong...';
}
