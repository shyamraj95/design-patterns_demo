import { EventEmitter, Injectable } from '@angular/core';
import PouchDB from 'pouchdb'
import PouchAuth from 'pouchdb-authentication'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root' //The application-level injector in most apps
})
export class DataService {
  public db: any;
  private isInstantiated: boolean = false;
  private remoteDatabase: any;
  private listener: EventEmitter<any> = new EventEmitter();
  // Remote databases are created by providing a path to CouchDB
  private remoteDbUrl: string = environment.dbBaseUrl;

  constructor() {
    if (!this.isInstantiated) {
      const dbName = this.remoteDbUrl.split('/').pop();
      this.db = new PouchDB(dbName, { skip_setup: true }); // The skip_setup: true is only imported when we didn't login in yet.
      this.isInstantiated = true;
      this.sync(this.remoteDbUrl);
    }
    PouchDB.plugin(PouchAuth);
  }

  private sync(remoteDbUrl: string) {
    const options = {
      live: true, // continuously sync between local and remote.
      retry: true // Retry on connection lost.
    };
    this.db.login('test_admin', 'test_password').then(() => {
      this.db.sync(remoteDbUrl, options).on('change', (change: any) => {
        this.listener.emit(change);
        console.log(change);
      }).on('paused', (info: any) => {
        // replication was paused, usually because of a lost connection
        console.log(info);
      }).on('active', (info: any) => {
        // replication was resumed
        console.log(info);
      }).on('error', (err: Error) => {
        // totally unhandled error (shouldn't happen)
        console.log(err);
      })
    }).catch((error: Error) => {
      console.error('Login error' + error);
    });
  }

logOutDB() {
    this.db.logOut();
  }
}
//https://stackoverflow.com/questions/69040783/db-login-is-not-a-function
// https://github.com/pouchdb-community/pouchdb-authentication/blob/master/docs/recipes.md
// https://github.com/pouchdb-community/pouchdb-authentication
// https://auth0.com/blog/creating-offline-first-web-apps-with-service-workers/
// https://subvisual.com/blog/posts/130-how-to-build-offline-web-applications-with-couchdb-and-pouchdb/   *
// https://terreii.github.io/use-pouchdb/docs/basics/sync  *
// https://stackoverflow.com/questions/26598045/pouchdb-sync-authorization