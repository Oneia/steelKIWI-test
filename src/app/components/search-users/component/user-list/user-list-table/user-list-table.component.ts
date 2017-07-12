import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.less']
})
export class UserListTableComponent {

  @Input() private list;

}
