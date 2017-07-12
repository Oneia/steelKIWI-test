import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-block',
  templateUrl: './user-list-block-item.component.html',
  styleUrls: ['./user-list-block-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListBlockComponent {

  @Input() private list;

}
