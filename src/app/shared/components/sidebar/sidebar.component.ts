import { Component, OnInit } from '@angular/core';

import { NbComponentSize, NbMenuItem, NbSidebarService, NbSidebarState } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sizes: NbComponentSize[] = ['small', 'medium', 'large'];
  menuView: NbSidebarState;

  items: NbMenuItem[] = [
    {
      title: 'Meetings',
      expanded: true,
      icon: 'calendar-outline',
      children: [
        {
          title: 'List',
          icon: 'list-outline',
          link: 'meetings/list'
        },
        {
          title: 'Create Agenda',
          icon: 'file-text-outline',
          link: 'meetings/agenda/create'
        },
      ],
    },
    {
      title: 'Settings',
      expanded: true,
      icon: 'cors',
      children: [
        {
          title: 'Create User',
          icon: 'user-outline',
          link: 'settings/user/create'
        },
        {
          title: 'Create Church Unit',
          icon: 'building-outline',
          link: 'settings/church-unit/create'
        },
      ],
    },
  ];

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }

  onSwitchMenuMode() {
    if (this.menuView == 'expanded') {
      this.menuView = 'compacted';
    } else {
      this.menuView = 'expanded';
    }
  }
}
