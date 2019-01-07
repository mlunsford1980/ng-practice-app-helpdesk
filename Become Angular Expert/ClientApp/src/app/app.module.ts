import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesGridComponent } from './issues-grid/issues-grid.component';
import { CreateIssueComponent } from './create-issue/create-issue.component';
import { CanDeactivateCreateIssue } from './create-issue/can-deactivate-create-issue';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    IssuesComponent,
    IssuesGridComponent,
    CreateIssueComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'issues/create', component: CreateIssueComponent, canDeactivate: [CanDeactivateCreateIssue] },
    ]),
    NgbModule
  ],
  providers: [CanDeactivateCreateIssue, DialogService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
