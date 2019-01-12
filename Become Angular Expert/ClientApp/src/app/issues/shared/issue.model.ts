import { Name } from "./name.model";

export class Issue {
  id: number;
  description: string;
  duedate: any;
  assignee: Name;
  reviewer: Name;
}
