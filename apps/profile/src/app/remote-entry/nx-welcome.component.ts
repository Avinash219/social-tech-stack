import { Component, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nx-welecome.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  store = inject(Store);
  user$ = new BehaviorSubject<any>({ user: null, error: null });

  ngOnInit() {
    this.store
      .select('user')
      .pipe(map((state) => state.user))
      .subscribe((user) => {
        this.user$.next(user);
      });
  }
}
