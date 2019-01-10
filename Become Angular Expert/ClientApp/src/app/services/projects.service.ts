import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project.model';
import { Name } from '../models/name.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  getProjects() {
    return this.http.get<Project[]>(`${this.baseUrl}api/projects`, { observe: 'response' });
  }

  getReviewers(programId: number) {
    return this.http.get<Name[]>(`${this.baseUrl}api/projects/${programId}/reviewers`, { observe: 'response' });
  }

  getAssignees(programId: number) {
    return this.http.get<Name[]>(`${this.baseUrl}api/projects/${programId}/assignees`, { observe: 'response' });
  }
}
