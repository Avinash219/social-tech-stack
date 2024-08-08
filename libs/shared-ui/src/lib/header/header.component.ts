import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  Observable,
  Subject,
  Subscription,
  combineLatest,
  map,
} from 'rxjs';
import { SharedStateModule } from '@client/shared-state';
import * as AuthActions from '@client/shared-state';
import { Router } from '@angular/router';

interface user {
  name: string;
  email: string;
}

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SharedStateModule,
    AvatarModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  store = inject(Store);
  userData: any;
  storeSubscription: any;
  user$ = new BehaviorSubject<user | null>(null);
  router = inject(Router);

  data$: Observable<any> | undefined;

  ngOnInit() {
    this.storeSubscription = this.store
      .select('user') // Select the 'user' slice from the store
      .pipe(
        map((state) => {
          return state.user; // Assuming user is a property in your 'user' slice
        })
      )
      .subscribe((user) => {
        this.user$?.next(user); // Assign user to a component property for use in template
        if (this.user$.value) {
          this.router.navigate(['profile']);
        }
      });
  }

  login() {
    this.store.dispatch(
      AuthActions.login({ email: 'Abhishek', password: '123' })
    );
  }
}
