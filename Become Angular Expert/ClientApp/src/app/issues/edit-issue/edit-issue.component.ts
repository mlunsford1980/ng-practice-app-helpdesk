import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Name } from '../shared/name.model';
import { Project } from '../shared/project.model';
import { ProjectsService } from '../shared/projects.service';
import { DateValidators } from '../shared/date.validators';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  constructor(private projectsService: ProjectsService) { }

  form: FormGroup = new FormGroup({
    description: new FormControl("", [Validators.required]),
    project: new FormControl("", [Validators.required]),
    reviewer: new FormControl("", [Validators.required]),
    assignee: new FormControl("", [Validators.required]),
    dueDate: new FormControl('', [DateValidators.mustBeFuture]),
  });
  projects: Project[] = [];
  reviewers: Name[];
  assignees: Name[];

  get description() {
    return this.form.get('description');
  }

  get project() {
    return this.form.get('project');
  }

  get reviewer() {
    return this.form.get('reviewer');
  }

  get assignee() {
    return this.form.get('assignee');
  }

  get dueDate() {
    return this.form.get('dueDate');
  }

  loadProjects() {
    this.projectsService.getProjects().subscribe(
      response => this.projects = response.body,
      error => console.log(error));
  }

  projectSelected(projectId: number) {
    this.loadReviewers(projectId);
    this.loadAssignees(projectId);
  }

  loadReviewers(projectId: number) {
    this.projectsService.getReviewers(projectId).subscribe(
      response => this.reviewers = response.body,
      error => console.log(error));
  }

  loadAssignees(projectId: number) {
    this.projectsService.getAssignees(projectId).subscribe(
      response => this.assignees = response.body,
      error => console.log(error));
  }

  ngOnInit() {
    this.loadProjects();
    this.project.valueChanges.subscribe(value => this.projectSelected(value));
  }
}
