import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutService } from '@car-dashboard-shared/data-access-layout';
import { MenuComponent } from '@car-dashboard-shared/ui-menu';

@Component({
  selector: 'lib-side-bar',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) {}
}
