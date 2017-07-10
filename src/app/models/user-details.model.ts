export default class UserDetails {
  private avatar: string;
  private login: string;
  private name: string;
  private location: string;
  private bio: string;
  private created: string;
  private link: string;

  constructor(obj) {
    this.avatar = obj.avatar_url;
    this.login = obj.login;
    this.name = obj.name || 'Unknown';
    this.location = obj.location || 'user do not share his location';
    this.bio = obj.bio || 'user do not share his bio';
    this.created = obj.created_at;
    this.link = obj.html_url;
  }
}
