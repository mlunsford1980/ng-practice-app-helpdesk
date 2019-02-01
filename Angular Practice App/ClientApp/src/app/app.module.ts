import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesGridComponent } from './issues/issues-grid/issues-grid.component';
import { CreateIssueComponent } from './issues/create-issue/create-issue.component';
import { CanDeactivateCreateIssue } from './issues/create-issue/can-deactivate-create-issue';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.component';
import { EditIssueComponent } from './issues/edit-issue/edit-issue.component';
import { DateValidators } from './issues/shared/date.validators';
import { IssueDetailComponent } from './issues/issue-detail/issue-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './shared/auth-guard.service';

export function tokenGetter() {
  return localStorage.getItem('token');
}

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
    IssueDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: IssuesComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
      { path: 'issues', component: IssuesComponent, canActivate: [AuthGuardService]},
      { path: 'issues/create', component: CreateIssueComponent, canActivate: [AuthGuardService], canDeactivate: [CanDeactivateCreateIssue] },
      { path: 'issues/:id/edit', component: EditIssueComponent, canActivate: [AuthGuardService] },
      { path: 'issues/:id', component: IssueDetailComponent, canActivate: [AuthGuardService] },
      { path: 'login', component: LoginComponent },
    ]),
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44397'],
        blacklistedRoutes: ['localhost:44397/api/auth/login']
      }
    })
  ],
  providers: [CanDeactivateCreateIssue, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
