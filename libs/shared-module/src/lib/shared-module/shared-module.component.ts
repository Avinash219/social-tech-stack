import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMessageBusService } from 'shared-message-bus';

@Component({
  selector: 'lib-shared-module',
  standalone: true,
  imports: [CommonModule],
  providers: [SharedMessageBusService],
  templateUrl: './shared-module.component.html',
  styleUrl: './shared-module.component.css',
})
export class SharedModuleComponent {}
