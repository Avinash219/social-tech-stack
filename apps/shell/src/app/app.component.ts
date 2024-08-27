import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from '@client/shared-ui';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SharedModuleComponent } from '@client/shared-module';
import { SharedMessageBusService } from 'shared-message-bus';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    HeaderComponent,
    CommonModule,
    SharedModuleComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  messageBus = inject(SharedMessageBusService);
  userAddress$ = new BehaviorSubject<string>('');

  ngOnInit() {
    this.messageBus.subscribe('address', this.showUserDetails.bind(this));
  }

  showUserDetails(data: any) {
    console.log('Data', data);
    this.userAddress$.next(data);
  }
}
