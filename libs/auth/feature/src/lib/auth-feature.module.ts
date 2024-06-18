import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authFeatureRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authFeatureRoutes)],
})
export class AuthFeatureModule {}
