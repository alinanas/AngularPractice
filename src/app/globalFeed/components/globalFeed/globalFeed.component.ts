import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: 'globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
