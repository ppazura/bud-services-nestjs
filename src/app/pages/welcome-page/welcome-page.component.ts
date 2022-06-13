import {Component, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-search-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor(public metaTagService: Meta) {
    this.metaTagService.addTags([{
      name: 'description',
      content: 'Small family company that creates and manufacture everything that you need to better organize your day. Products created with a view to every person who is looking for balance and focus, appreciates natural raw materials and loves to surround themselves with beautiful and functional objects.'
    }]);
  }

  ngOnInit(): void {
  }

}
