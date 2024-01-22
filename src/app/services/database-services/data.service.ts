import { EventEmitter, Injectable } from '@angular/core';
import PouchDB from 'pouchdb'
import PouchAuth from 'pouchdb-authentication'
import { environment } from 'src/environments/environment';
import { GenerateUrl } from '../shared-services/generate-url.service';

@Injectable({
  providedIn: 'root' //The application-level injector in most apps
})
export class DataService {
  public db: any;
  private isInstantiated: boolean = false;
  private remoteDatabase: any;
  private listener: EventEmitter<any> = new EventEmitter();



  constructor(private url: GenerateUrl) {
    this.db = new PouchDB(environment.dbName)
    PouchDB.plugin(PouchAuth)
    this.sync
  }

  private sync() {
    const options = {
      live: true, // continuously sync between local and remote.
      retry: true // Retry on connection lost.
    };
   const HTTPPouch = PouchDB.defaults({
      prefix: this.url.remoteDB,
    })
   const remoteDbRef = new HTTPPouch('admin', {
      skip_setup: true, // prevents PouchDB from checking if the DB exists.
    })
      // And sync
      const sync = this.db.sync(remoteDbRef, {
        retry: true,
        live: true,
      })
      return () => {
        // and cancel syncing whenever our sessionState changes
        sync.cancel()
      }
  }

  doLogOutDB() {
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