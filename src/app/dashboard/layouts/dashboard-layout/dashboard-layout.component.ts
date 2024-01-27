import {Component, computed, inject, OnInit} from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent implements OnInit{
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());

  ngOnInit(): void {

  }
  // public get user() {
  //   return this.authService.currentUser;
  // }


}
