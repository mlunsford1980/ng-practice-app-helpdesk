import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CreateIssueComponent } from "./create-issue.component";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DialogService } from "../dialog/dialog.component";

@Injectable()
export class CanDeactivateCreateIssue implements CanDeactivate<CreateIssueComponent> {
  constructor(private dialogService: DialogService) { }

  canDeactivate(component: CreateIssueComponent) {    
    return component.form.pristine || component.form.submitted
      ? true
      : this.dialogService.confirm();
  }
}
