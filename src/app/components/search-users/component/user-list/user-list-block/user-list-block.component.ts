import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-block',
  templateUrl: './user-list-block.component.html',
  styleUrls: ['./user-list-block.component.less']
})
export class UserListBlockComponent {

  @Input() private list;

}
