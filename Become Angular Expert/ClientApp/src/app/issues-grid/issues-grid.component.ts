import { Component, OnInit, Input } from '@angular/core';
import { Issue } from '../issues/issue.model';
import { Page } from './page.model';
import { ActivatedRoute } from '@angular/router';
import { IssuesService } from '../issues/issues.service';

@Component({
  selector: 'issues-grid',
  templateUrl: './issues-grid.component.html',
  styleUrls: ['./issues-grid.component.css']
})
export class IssuesGridComponent implements OnInit {
  @Input('title') title: string;
  @Input('page-size') pageSize = 5;

  issues: Issue[];
  totalPages: number;
  pages: Page[] = [];
  pageNumber: number;

  constructor(private issuesService: IssuesService) {
    this.loadPage(1);
  }

  loadPage(pageNumber: number) {
    this.issuesService.getIssues(pageNumber)
      .subscribe(result => {
        let totalPagesHeader = result.headers.get('x-total-pages');
        this.totalPages = parseInt(totalPagesHeader);
        this.issues = result.body.slice(0, this.pageSize);
      }, error => console.error(error)
      , () => {
        this.pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages.push(new Page(i, i == pageNumber));
        }
      });
  }

  ngOnInit() {
  }
}
