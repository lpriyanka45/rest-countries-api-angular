import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './components/shared/data.service';
import { ThemeService,Theme} from './components/shared/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent implements OnInit{
  theme: Observable<Theme>;

  constructor(
    private apiService: DataService,
    private themeService:ThemeService
  ) {}
  ngOnInit(){
    
    this.theme=this.themeService.mode$;
  }
}

