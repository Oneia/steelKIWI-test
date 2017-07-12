import { TestBed, inject } from '@angular/core/testing';

import { DataGithubService } from './data-github.service';

describe('DataGithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataGithubService]
    });
  });

  it('should ...', inject([DataGithubService], (service: DataGithubService) => {
    expect(service).toBeTruthy();
  }));
});
