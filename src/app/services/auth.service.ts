import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public validUsername = 'admin';
  public validPassword = 'admin';

  constructor() {}
  
  login(username: string, password: string): boolean {
    if (username === this.validUsername && password === this.validPassword) {
      localStorage.setItem('currentUser', JSON.stringify({ username }));
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem('currentUser');
  }
  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }


}
