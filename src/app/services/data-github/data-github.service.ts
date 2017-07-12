import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// rxjs operators
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Models
import UserListItem from '../../models/user-list-item.model';
import UserDetails from '../../models/user-details.model';

// Constants
import * as DataGithubConstants from './data-github.service.constants';

/**
 * service for the action download data from facebook
 */
@Injectable()
export class DataGithubService {

  /**
   * Constructor
   * @param http
   */
  constructor(
    private http: Http
  ) { }

  /**
   * Download users
   * @param text
   * @return {Observable<R|T>}
   */
  public getUsers(text: string): Observable<UserListItem[]> {
    return this.http.get(DataGithubConstants.SEARCH_USERS + text)
      .map(this.extractDataUsersList)
      .catch(this.handleError);
  }

  /**
   * Download user info
   * @param text
   * @return {Promise<TResult|T>}
   */
  public getUserInfo(text: string): Promise<UserDetails> {
    return this.http.get(DataGithubConstants.USER_DETAILS + text)
      .map(this.extractDataUserDetails)
      .toPromise()
      .catch(this.handleError);
  }

  /**
   * handling data for user details
   * @param res
   * @return {UserDetails}
   */
  private extractDataUserDetails(res: Response): UserDetails {
    return new UserDetails(res.json());
  }

  /**
   * handling data for user list
   * @param res
   */
  private extractDataUsersList(res: Response): UserListItem {
    return res.json().items
      .map(el => new UserListItem(el));
  }

  /**
   * Handle error
   * @param error
   * @return {any}
   */
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
