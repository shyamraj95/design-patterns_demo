import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'portal-error-401',
  templateUrl: './error-401.component.html',
  styleUrls: ['./error-401.component.css'],
  standalone: true,
  imports: [MatCardModule]
})
export class Error401Component implements OnInit {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  goHome(): void {
    this.router.navigate(['/pre-login']);
  }

}
