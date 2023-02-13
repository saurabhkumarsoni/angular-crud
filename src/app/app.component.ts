import { Component } from '@angular/core';
import { AuthService } from './Auth/services/auth.service';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-http';
  errorMessage = '';
  successMessage = '';

  constructor(
    private authService: AuthService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.authService.getUserDetailsFromLocalStorage();

    this.messageService.errorMessageEvent.subscribe((data) => {
      this.errorMessage = data;
    });

    this.messageService.successMessageEvent.subscribe((data) => {
      this.successMessage = data;
    });
  }
}
