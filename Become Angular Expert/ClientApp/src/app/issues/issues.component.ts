import { Component, OnInit, Inject } from '@angular/core';
import { Issue } from './issue.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[];
  assignedGrid = {
    title: "Assigned to me",
    pageSize: 5
  };
  reviewedGrid = {
    title: "Reviewed by me",
    pageSize: 5
  };

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Issue[]>(baseUrl + 'api/issues').subscribe(result => {
      this.issues = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}
