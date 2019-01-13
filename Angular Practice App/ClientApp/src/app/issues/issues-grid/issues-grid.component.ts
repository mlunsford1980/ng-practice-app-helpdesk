import { Component, OnInit, Input } from '@angular/core';
import { IssuesService } from '../shared/issues.service';
import { Issue } from '../shared/issue.model';
import { Page } from './page.model';
import { NgbPanel, NgbPanelContent, NgbPanelTitle, NgbAlert, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'issues-grid',
  templateUrl: './issues-grid.component.html',
  styleUrls: ['./issues-grid.component.css']
})
export class IssuesGridComponent implements OnInit {
  @Input('title') title: string;
  @Input('page-size') pageSize = 5;

  issues: Issue[];
  pages: Page[] = [];
  pageNumber: number;
  public isCollapsed = false;

  constructor(private issuesService: IssuesService) {
    this.loadPage(1);
  }

  loadPage(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.issuesService.getIssues(pageNumber)
      .subscribe(result => {
        let totalPagesHeader = result.headers.get('x-total-pages');
        this.issues = result.body.slice(0, this.pageSize);
        this.pages = [];

        let totalPages = parseInt(totalPagesHeader);
        for (let i = 1; i <= totalPages; i++) {
          this.pages.push(new Page(i, i == pageNumber));
        }
      },
      error => console.error(error));
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
  }
}
