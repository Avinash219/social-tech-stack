import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';

@NgModule({
  imports: [
    CommonModule,
    /* StoreModule.forFeature({userReducer}),
    EffectsModule.forFeature([AuthEffects]), */
  ],
})
export class SharedStateModule {}
