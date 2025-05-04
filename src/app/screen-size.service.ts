import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private screenSizeSubject: BehaviorSubject<{ width: number, height: number }>;

  constructor() {
    this.screenSizeSubject = new BehaviorSubject(this.getScreenSize());
    this.initializeScreenSizeListener();
  }

  private getScreenSize(): { width: number, height: number } {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  private initializeScreenSizeListener(): void {
    window.addEventListener('resize', () => {
      this.screenSizeSubject.next(this.getScreenSize());
    });
  }

  get screenSize$(): Observable<{ width: number, height: number }> {
    return this.screenSizeSubject.asObservable();
  }
}