import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-list-page',
  templateUrl: './meeting-list-page.component.html',
  styleUrls: ['./meeting-list-page.component.scss']
})
export class MeetingListPageComponent implements OnInit {
  meetings = [
    {
      id: 1,
      metting: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    // ... other rows here
    {
      id: 11,
      metting: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];

  settings = {
    columns: {
      id: {
        title: 'ID',
        width: '10%'
      },
      metting: {
        title: 'Meetings'
      },
      username: {
        title: 'User Name'
      },

    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
