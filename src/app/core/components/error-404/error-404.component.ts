import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'portal-error-404',
  templateUrl: './error-404.component.html',
  styleUrls: ['./error-404.component.css'],
    standalone: true,
  imports: [MatCardModule]
})
export class Error404Component implements OnInit {


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goHome(): void {
    this.router.navigate(['/pre-login']);
  }

}
