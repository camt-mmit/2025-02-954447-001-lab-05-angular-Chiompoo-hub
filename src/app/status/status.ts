import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.html',
  styleUrl: './status.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Status {
  date = new Date();
  Kuy = window.navigator;
}
