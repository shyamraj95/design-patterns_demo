import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'portal-error-500',
  templateUrl: './error-500.component.html',
  styleUrls: ['./error-500.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class Error500Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  goHome(): void {
    this.router.navigate(['/pre-login']);
  }
}
