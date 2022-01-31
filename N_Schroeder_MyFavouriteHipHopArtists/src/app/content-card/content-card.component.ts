import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  kanye: Content;
  jayZ: Content;
  kendrickLamar: Content;

  constructor() {
    this.kanye = {
      id: 1,
      title: "Kanye West",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "",
      type: "",
      tags: []
    }
    this.jayZ = {
      id: 2,
      title: "Jay-Z",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "",
      type: "",
      tags: []
    }
    this.kendrickLamar = {
      id: 3,
      title: "Kendrick Lamar",
      description: "Hip-Hop Artist",
      creator: "Nathan Schroeder",
      imgURL: "",
      type: "",
      tags: []
    }
   }
  

  ngOnInit(): void {
  }

}