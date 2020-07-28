import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  isAdmin = true;

  sevenWonders = [
    {name: 'Christ Statue' , link: '/christstatue'},
    {name: 'Great Wall Of China' , link: '/greatwallofchina'},
    {name: 'Machu Picchu' , link: '/machupicchu'},
    {name: 'Taj Mahal' , link: '/tajmahal'},
    {name: 'The Roman Colosseum' , link: '/theroman'} 
  ]

}
