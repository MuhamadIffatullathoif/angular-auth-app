import {Component, computed, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent{
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());

  // public get user() {
  //   return this.authService.currentUser;
  // }

  onLogout(): void {
    this.authService.logout();
  }
}
