import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-toggler',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './feed-toggler.component.html',
})
export class FeedTogglerComponent {
  @Input() tagName?: string;
  currentUser$ = this.store.select(selectCurrentUser);

  constructor(private store: Store) {}
}
