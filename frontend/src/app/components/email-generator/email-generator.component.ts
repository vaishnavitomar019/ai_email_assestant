import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-email-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './email-generator.component.html',
  styleUrl: './email-generator.component.css'
})
export class EmailGeneratorComponent {
  toEmail = '';
  promptText = '';
  generatedEmail = '';
  loading = false;
  popupMessage = '';
  emailTouched = false;
  promptTouched = false;
  sending = false;

  constructor(private emailService: EmailService) { }

  generateEmail() {
    if (!this.toEmail || !this.validateEmail(this.toEmail)) {
      this.popupMessage = "Please enter a valid email address.";
      return;
    }

    if (!this.promptText || this.promptText.trim() === '') {
      this.popupMessage = "Prompt cannot be empty.";
      return;
    }

    this.loading = true;
    this.popupMessage = "";

    this.emailService.generateEmail(this.promptText).subscribe((email) => {
      this.generatedEmail = email.email;
      this.loading = false;
    });
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  sendEmail() {
    if (!this.generatedEmail || !this.toEmail) return;

    const userConfirmed = confirm('Do you want to edit the email before sending?\nClick Cancel to edit, or OK to send.');
    if (!userConfirmed) {
      return;
    }

    this.sending = true;
    const htmlBody = `<p>${this.generatedEmail.replace(/\n/g, '<br>')}</p>`;
    this.emailService.sendEmail(this.toEmail, 'AI Generated Email', htmlBody).subscribe({
      next: () => {
        this.popupMessage = 'Email sent successfully!';
        this.generatedEmail = '';
        this.promptText = '';
        this.toEmail = '';
        this.emailTouched = false;
        this.promptTouched = false;
      },
      error: () => {
        this.popupMessage = 'Failed to send email.';
      },
      complete: () => {
        this.sending = false;
        setTimeout(() => {
          this.popupMessage = '';
        }, 3000);
      }
    });
  }

  popup(message: string) {
    this.popupMessage = message;
    setTimeout(() => this.popupMessage = '', 3000);
  }
}