import { Name } from "./name.model";

export class Issue {
  description: string;
  duedate: any;
  assignee: Name;
  reviewer: Name;
}
