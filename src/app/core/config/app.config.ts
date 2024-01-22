import { environment } from "src/environments/environment";

export default {
  oidc: {
    issuer: `${environment.oktaIssuer}/oauth2/default`,
    clientId: `${environment.oktaClientId}`,
   // redirectUri should same as okta Sign-in redirect URIs
    redirectUri: window.location.origin + '/dashboard',
    scopes: ['openid', 'profile', 'email'],
    // Configure TokenManager to use sessionStorage instead of localStorage
    tokenManager: {
      storage: 'sessionStorage'
    }
  }
}