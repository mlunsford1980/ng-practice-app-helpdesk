import { Component, OnInit, ViewChild } from '@angular/core';
import { Name } from '../issues/name.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css']
})
export class CreateIssueComponent implements OnInit {
  reviewers: Name[];
  assignees: Name[];
  wasSubmited = false;
  @ViewChild('f') public form: NgForm;

  public canDeactivate() : boolean {
    return this.form.pristine || this.wasSubmited;
  }

  constructor() {
    this.reviewers = [
      { id: 1, surname: 'Doe', givenName: 'John', fullname: 'Doe, John' },
      { id: 2, surname: 'Smith', givenName: 'Jane', fullname: 'Smith, Jane' },
    ];

    this.assignees = [
      { id: 1, surname: 'Doe', givenName: 'John', fullname: 'Doe, John' },
      { id: 2, surname: 'Smith', givenName: 'Jane', fullname: 'Smith, Jane' },
    ];
  }

  submit(f) {
    console.log(f);
    this.wasSubmited = true;
  }

  ngOnInit() {
  }

}
