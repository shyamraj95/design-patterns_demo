import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerateUrl {
  db_Uri = environment.dbBaseUrl;
  remoteDB = this.db_Uri + environment.dbName;
}
