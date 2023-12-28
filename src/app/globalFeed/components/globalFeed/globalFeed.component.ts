import { Component } from '@angular/core';
import { FeedComponent } from '../../../shared/components/feed/feed.component';
import { BannerComponent } from '../../../shared/components/banner/banner.component';
import { ErrorMessageComponent } from '../../../shared/components/errorMessage/errorMessage.component';
import { FeedTogglerComponent } from '../../../shared/components/feed-toggler/feed-toggler.component';

@Component({
  selector: 'app-global-feed',
  templateUrl: 'globalFeed.component.html',
  standalone: true,
  imports: [
    FeedComponent,
    BannerComponent,
    ErrorMessageComponent,
    FeedTogglerComponent,
  ],
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
