import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export enum Theme{
  light='light',
  dark='dark',
}

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  // if(sessionStorage.getItem(this.themeColor)==)
  private myValue=localStorage.getItem('themeColor');
  private mode: BehaviorSubject<Theme>=new BehaviorSubject(this.myValue=='dark'?Theme.dark:Theme.light);
  constructor() { }
  get mode$(): Observable<Theme>{
    return this.mode.asObservable();
  }
  toggleMode(){
    if(this.mode.value===Theme.light){
      this.mode.next(Theme.dark);
      localStorage.setItem('themeColor',Theme.dark);
    }
    else{
      this.mode.next(Theme.light);
      localStorage.setItem('themeColor',Theme.light);
    }
  }
}
