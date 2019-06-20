import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() isCollapsed: boolean;

  username: string;

  // constructor() { }
  constructor(
    // private store: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  openAddListModal(): void {

  }

  goSetting() {
    // this.router.navigateByUrl('/setting');
  }

  goSummary() {
    // this.router.navigateByUrl('/summary');
  }
}
