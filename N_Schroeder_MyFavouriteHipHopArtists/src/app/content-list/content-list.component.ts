import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  artistList: Content[];
  titleFound?: boolean;

  constructor() {
    this.artistList = [
      { id: 1, title: "Kanye West", description: "Kanye west is a Hip-Hop producer", creator: "Nathan Schroeder", imgURL: "https://media.nu.nl/m/4rexwb2a94hr_sqr256.jpg/rechter-keurt-naamsverandering-van-kanye-west-goed.jpg", type: "Producer" },
      { id: 2, title: "Jay-Z", description: "Jay-Z is a Rapper/Hip Hop artist", creator: "Nathan Schroeder", imgURL: "http://www.dailynews.lk/sites/default/files/news/2017/11/13/z_p32-Jay.jpg", type: "Rapper"},
      { id: 3, title: "Kendrick Lamar", description: "Kendrick lamar is a Rapper/Hip-Hop artist", creator: "Nathan Schroeder", imgURL: "http://cache.umusic.com/_sites/kendricklamar.com/images/og.jpg", type: "Rapper" },
      { id: 4, title: "Drake", description: "Drake is a Hip-Hop artist", creator: "Nathan Schroeder", imgURL: "https://78.media.tumblr.com/5af5281da58f311cee309ff6444b50f6/tumblr_p2gzmxFDh11vzkjvvo1_1280.jpg" },
      { id: 5, title: "Anderson .Paak", description: "Anderson .Paak is a Hip-Hop producer", creator: "Nathan Schroeder", imgURL: "https://pbs.twimg.com/profile_images/730915338167017472/EeqP-_nj_400x400.jpg", type: "Producer" },
      { id: 6, title: "J Cole", description: "J Cole is a Rapper/Hip-Hop producer", creator: "Nathan Schroeder", imgURL: "https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a", type: "Rapper" }
    ];

   }

  ngOnInit(): void {
  }

  checkForTitle(title: string): void{
    if (this.artistList.some(artist => artist.title === title))
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.artistList.filter(d => d.title === title).length)
    {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }

}
