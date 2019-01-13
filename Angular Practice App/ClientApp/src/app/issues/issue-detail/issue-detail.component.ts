import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from '../shared/issues.service';
import { Issue } from '../shared/issue.model';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {
  issue: Issue = new Issue();
  title = 'Details for Issue #';

  constructor(private route: ActivatedRoute, private issuesService: IssuesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        let id = +params.get('id');

        this.issuesService.getIssue(id).subscribe(
          response => this.issue = response.body,
          error => console.log(error));
      }
    );
  }
}
