import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { SharedStateModule } from '@client/shared-state';

@Component({
  selector: 'lib-login',
  standalone: true,
  imports: [CommonModule, SharedStateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private store: Store<any>) {
    console.log('Profile', this.store);
  }
}
