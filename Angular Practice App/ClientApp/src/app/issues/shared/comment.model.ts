import { Name } from "./name.model";

export class Comment {
  id: number;
  content: string;
  writtenBy: Name;
  writtenDate: Date;
}
