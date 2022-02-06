import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  list: ContentList;
  kanye: Content;
  jayZ: Content;
  kendrickLamar: Content;

  constructor() {
    this.kanye = {
      id: 1,
      title: "Kanye West",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/2/21/Kanye_West_at_the_Met_Gala_in_2019.png",
    };

    this.jayZ = {
      id: 2,
      title: "Jay-Z",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "https://imageio.forbes.com/specials-images/imageserve/5ed554fab14861000600baf1/0x0.jpg?format=jpg&crop=686,686,x53,y114,safe&fit=crop",
    };

    this.kendrickLamar = {
      id: 3,
      title: "Kendrick Lamar",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/17/1434554616815/Kendrick-Lamar-photograph-009.jpg?width=620&quality=85&auto=format&fit=max&s=38335cea8205e5544b27efc587139c35",
    };

    

    this.list = new ContentList();
    this.list.addContent(this.kanye);
    this.list.addContent(this.jayZ);
    this.list.addContent(this.kendrickLamar);
   }
  

  ngOnInit(): void {
  }

}