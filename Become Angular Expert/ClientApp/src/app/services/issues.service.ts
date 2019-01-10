import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getIssues(pageNumber: number) {
    return this.http.get<Issue[]>(`${this.baseUrl}api/issues/?pageNumber=${pageNumber}`, { observe: 'response' });
  }

  postIssue(issue: Issue) {
    console.log("Saving issues...");
    return this.http.post<Issue>(`${this.baseUrl}api/issues`, issue, { observe: 'response' });
  }
}