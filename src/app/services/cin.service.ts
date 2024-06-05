import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CinService {
  private cin!: number;

  constructor() { }

  setCin(cin: number): void {
    this.cin = cin;
  }

  getCin(): number {
    return this.cin;
  }
}
