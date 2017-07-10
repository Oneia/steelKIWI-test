export default class UserListItem {
  private login: string;
  private link: string;

  constructor(obj) {
   this.login = obj.login;
   this.link = obj.html_url;
  }
}
