import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-settings-general-page',
  templateUrl: './settings-general-page.component.html',
  styleUrls: ['./settings-general-page.component.scss']
})
export class SettingsGeneralPageComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  currentTheme = 'dark';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
  ];

  constructor(
    private themeService: NbThemeService
  ) {
    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

}
