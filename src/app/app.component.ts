import { Component } from '@angular/core';
import { PhoneNumberService } from './phone-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UI';
  textInput: string = ''; // Input text from textarea
  detectedNumbers: string = ''; // Detected numbers to display

  constructor(private phoneNumberService: PhoneNumberService) {}

  detectNumbers() {
    this.phoneNumberService.detectNumbers(this.textInput).subscribe(
      response => {
        this.detectedNumbers = response.detectedNumbers.join('\n'); // Display detected numbers
      },
      error => {
        console.error('Error detecting phone numbers:', error);
        // Optionally handle error scenarios here
      }
    );
  }

  clearText() {
    this.textInput = ''; // Clear input text
    this.detectedNumbers = ''; // Clear detected numbers
  }

  isTextInputValid(): boolean {
    return this.textInput.trim().length > 0; // Check if there's any content in textInput
  }
}
