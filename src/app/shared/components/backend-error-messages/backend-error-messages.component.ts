import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from '../../types/backendError.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'backend-error-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './backend-error-messages.component.html',
  styleUrl: './backend-error-messages.component.css',
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input()
  backendErrors: BackendErrorInterface = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    console.log(this.backendErrors);

    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const msg = this.backendErrors[name].join(' ');
      return `${name} ${msg}`;
    });
  }
}
