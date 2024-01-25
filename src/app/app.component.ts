import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { ThemeService } from '../shared/services/theme.service';
import { ThemeType } from '../shared/models/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    NzToolTipModule,
    NzLayoutModule,
    NzButtonModule,
    NzMenuModule,
    NzIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  get currentTheme(): ThemeType {
    return this.themeService.currentTheme;
  }

  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.loadTheme(true);
  }

  changeTheme(): void {
    const theme: ThemeType =
      this.themeService.currentTheme === 'dark' ? 'light' : 'dark';

    this.themeService.changeTheme(theme);
  }
}
