import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Issue } from './issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getIssues(pageNumber: number) {
    return this.http.get<Issue[]>(`${this.baseUrl}api/issues/?pageNumber=${pageNumber}`, { observe: 'response' });
  }

  getIssue(id: number) {
    return this.http.get<Issue>(`${this.baseUrl}api/issues/${id}`, { observe: 'response' });
  }

  putIssue(id: number) {
    return this.http.get(`${this.baseUrl}api/issues/${id}`, { observe: 'response' });
  }

  postIssue(issue: Issue) {
    return this.http.post<Issue>(`${this.baseUrl}api/issues`, issue, { observe: 'response' });
  }
}
