import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  template: ` Test <p-button label="Submit" /> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
