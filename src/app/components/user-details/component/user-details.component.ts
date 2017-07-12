import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataGithubService } from '../../../services/data-github/data-github.service';

import UserDetails from '../../../models/user-details.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent implements OnInit {

  private userModel: UserDetails;

  constructor(
    private route: ActivatedRoute,
    private dataGithubService: DataGithubService,
  ) { }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.dataGithubService.getUserInfo(id)
      .then(res => {
        this.userModel = res;
      });
  }

}
