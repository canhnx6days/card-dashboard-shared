import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LayoutService } from '@car-dashboard-shared/data-access-layout';
import { MenuItemComponent } from '@car-dashboard-shared/ui-menu-item';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'lib-menu',
  standalone: true,
  imports: [CommonModule, MenuItemComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  model: MenuItem[] = [];

  constructor(public layoutService: LayoutService) {}

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
        ],
      },
      {
        label: 'Details',
        items: [
          {
            label: 'Key Metric',
            icon: 'pi pi-fw pi-info-circle',
            routerLink: ['/key-metric'],
          },
        ],
      },
    ];
  }
}
