import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from '../../models/sidebar.metadata';
import { MenuItems } from '../../constants/sidebar-items';
import { SvgIconComponent } from '../../../shared-components/svg-icon/svg-icon.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SvgIconComponent, RouterLink, AsyncPipe]
})
export class SidebarComponent implements OnInit, OnDestroy {
  sidebarItems: MenuItem[] = [];

  constructor(

  ) { }
  ngOnInit() {
    const userRoles = ['All', 'Admin', 'User'];
    // let filteredRestaurants = MenuItems.filter(r => userRoles.every(f => r.roles?.includes(f))) match with full array string
    this.sidebarItems = MenuItems.filter(a => a.roles.some(a => userRoles.includes(a)))
  }

  toggleSearchBox() {
    const header = document.querySelector('.header')!.classList;
    if (header.contains('search_active')) {
      header.remove('search_active');
    } else {
      header.add('search_active');
    }
  }

  toggleSideMenu(event_from: any) {
    const wrapper = document.querySelector('.wrapper')!.classList; 
/*      if (event_from == 'body') {
      wrapper.remove('menu_overlay');
    } */
    if (window.matchMedia('(max-width: 1300px)').matches) {
      wrapper.remove('menu_small');
      if (wrapper.contains('menu_overlay')) {
        wrapper.remove('menu_overlay');
      } else if (event_from == 'toggleButton') {
        wrapper.add('menu_overlay');
      }
    } else {
      wrapper.remove('menu_overlay');
      if (wrapper.contains('menu_small')) {
        wrapper.remove('menu_small');
      } else if (event_from == 'toggleButton') {
        wrapper.add('menu_small');
      }
    }
  }
  // logout from application
  logout() {
    // this.authService.signOut();
  }

  ngOnDestroy() {
  }
}



//https://www.studentstutorial.com/code-editor/?topic=html&file_name=create_submenu