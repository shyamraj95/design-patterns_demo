import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { AuthState, OktaAuth } from '@okta/okta-auth-js';
import { filter, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated$!: Observable<boolean>;

  constructor(
    private _router: Router,
    private _oktaStateService: OktaAuthStateService,
    @Inject(OKTA_AUTH) private _oktaAuth: OktaAuth
  ) {
    this.isAuthenticated$ = this._oktaStateService.authState$.pipe(
      filter((s: AuthState) => !!s),
      map((s: AuthState) =>
        s.isAuthenticated ?? false)
    );

    /*     this._oktaAuth.isAuthenticated().then((auth) => {
          this.isAuthenticated$.next(auth) = auth;
        }); */
  }
  /*   async signIn(): Promise<void> {
      await this._oktaAuth.signInWithRedirect().then(
        _ => this._router.navigate(['/dashboard'])
      ); 
    }*/

  async signOut(): Promise<void> {
    await this._oktaAuth.signOut().then(
      _ => this._router.navigate(['/login'])
    );
  }
}

// https://developer.okta.com/docs/guides/sign-into-spa-redirect/angular/main/
//https://stackoverflow.com/questions/55623067/okta-angular-7-oktaauth-isauthenticated-is-false-even-after-successfully-loggi
//https://stackoverflow.com/questions/71642486/angular-okta-authentication-always-returns-false