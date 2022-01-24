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
