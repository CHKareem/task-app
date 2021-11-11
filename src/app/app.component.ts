import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'task-app';
  navLinks:any[] = [
    {
        linkName: 'add daily reort',
        icon: 'note_add',
        link: '/tab1',
    }, {
        linkName: 'report list - daily',
        icon: 'description',
        link: '/tab2',
    }, {
        linkName: 'daily report - monthly',
        icon: 'inventory',
        link: '/tab3',
    },
];
  constructor(
    private router: Router
  ) {}
  setTab(tabname: string) {
    this.router.navigate([`/${tabname}`]);
      }

  }
