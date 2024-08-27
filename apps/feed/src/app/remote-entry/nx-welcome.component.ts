import { Component, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMessageBusService } from 'shared-message-bus';
import { SharedModuleComponent } from '@client/shared-module';
@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, SharedModuleComponent],
  template: `<button (click)="updateAddress()">Update Address</button>`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  sharedMessage = inject(SharedMessageBusService);
  updateAddress() {
    console.log('1');
    this.sharedMessage.publish('address', 'Jaipur');
  }
}
