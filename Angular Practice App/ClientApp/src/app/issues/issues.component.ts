import { Component} from '@angular/core';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  assignedGrid = {
    title: "Assigned to me",
    pageSize: 10
  };
  reviewedGrid = {
    title: "Created by me",
    pageSize: 5
  };
}
