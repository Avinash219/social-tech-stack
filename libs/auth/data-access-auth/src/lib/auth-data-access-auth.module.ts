import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, provideHttpClient()],
})
export class AuthDataAccessAuthModule {}
