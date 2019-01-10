import { Component} from '@angular/core';

@Component({
  selector: 'issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent {
  assignedGrid = {
    title: "Assigned to me",
    pageSize: 5
  };
  reviewedGrid = {
    title: "Reviewed by me",
    pageSize: 5
  };
}
