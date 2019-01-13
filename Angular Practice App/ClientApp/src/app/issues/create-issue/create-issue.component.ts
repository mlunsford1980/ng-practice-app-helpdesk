import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../shared/projects.service';
import { IssuesService } from '../shared/issues.service';
import { Name } from '../shared/name.model';
import { Project } from '../shared/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  projects: Project[] = [];
  reviewers: Name[];
  assignees: Name[];
  wasSubmited = false;
  @ViewChild('f') public form: NgForm;

  public canDeactivate() : boolean {
    return this.form.pristine || this.wasSubmited;
  }

  constructor(private issuesService: IssuesService,
    private projectsService: ProjectsService,
    private router: Router) { }

  loadProjectData(projectId: number) {
    this.getAssignees(projectId);
    this.getReviewers(projectId);
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(
      response => this.projects = response.body,
      error => console.log(error));
  }

  getReviewers(programId: number) {
    this.projectsService.getReviewers(programId).subscribe(
      response => this.reviewers = response.body,
      error => console.log(error));
  }

  getAssignees(programId: number) {
    this.projectsService.getAssignees(programId).subscribe(
      response => this.assignees = response.body,
      error => console.log(error));
  }

  submit(f) {
    console.log(f);
    this.issuesService.postIssue(f.value).subscribe(
      response => {
        let createdIssueId = +response.headers.get('x-created-issue-id');
        this.router.navigate(['/issues', createdIssueId]);
      });
    
    this.wasSubmited = true;
  }

  ngOnInit(): void {
    this.getProjects();
  }
}
