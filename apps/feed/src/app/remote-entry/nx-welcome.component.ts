import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: ` This is test for affected file update`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
