import { Name } from "./name.model";
import { Project } from "./project.model";

export class Issue {
  id: number;
  project: Project;
  description: string;
  duedate: any;
  assignee: Name;
  reviewer: Name;
}
