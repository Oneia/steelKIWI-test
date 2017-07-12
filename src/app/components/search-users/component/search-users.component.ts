import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DataGithubService } from '../../../services/data-github/data-github.service';
import UserListItem from '../../../models/user-list-item.model';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.less']
})
export class SearchUsersComponent implements OnInit {

  private userList: UserListItem[];
  private showTableView: Boolean = false;

  constructor(
    private dataGithubService: DataGithubService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataGithubService.getUsers(params.id)
        .subscribe(res => {
          this.userList = res;
        });
    });
  }

  private searchUsers(event: any): void {
    this.router.navigate(['users', { id: event.target.value}]);
  }

  private toggleView(): void {
    this.showTableView = !this.showTableView;
  }
}
