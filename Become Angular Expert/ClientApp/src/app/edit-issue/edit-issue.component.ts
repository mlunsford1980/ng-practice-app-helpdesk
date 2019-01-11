import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Name } from '../models/name.model';
import { Project } from '../models/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  form: FormGroup = new FormGroup({
    description: new FormControl("", [Validators.required]),
    project: new FormControl("", [Validators.required]),
    reviewer: new FormControl("", [Validators.required]),
    assignee: new FormControl("", [Validators.required]),
    dueDate: new FormControl(),
  });
  projects: Project[] = [];
  reviewers: Name[];
  assignees: Name[];

  constructor(private projectsService: ProjectsService) { }

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

  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      response => this.projects = response.body,
      error => console.log(error));
  }

}
