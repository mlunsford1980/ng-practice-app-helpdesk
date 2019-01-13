import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesGridComponent } from './issues/issues-grid/issues-grid.component';
import { CreateIssueComponent } from './issues/create-issue/create-issue.component';
import { CanDeactivateCreateIssue } from './issues/create-issue/can-deactivate-create-issue';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditIssueComponent } from './issues/edit-issue/edit-issue.component';
import { DateValidators } from './issues/shared/date.validators';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    IssuesComponent,
    IssuesGridComponent,
    CreateIssueComponent,
    DialogComponent,
    EditIssueComponent,
    DateValidators,
    IssueDetailComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: IssuesComponent, pathMatch: 'full' },
      { path: 'issues', component: IssuesComponent },
      { path: 'issues/create', component: CreateIssueComponent, canDeactivate: [CanDeactivateCreateIssue] },
      { path: 'issues/:id/edit', component: EditIssueComponent },
      { path: 'issues/:id', component: IssueDetailComponent },
    ]),
    NgbModule
  ],
  providers: [CanDeactivateCreateIssue, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
