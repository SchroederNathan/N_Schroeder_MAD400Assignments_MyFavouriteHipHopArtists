import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(artistList: Content[], type?: string): Content[] {
    // return digimonList.filter(digimon => digimon.type === type); // technically this solves the null check too
    return artistList.filter(artist => {
      console.log("Artist name: ", artist.title, " type is set to ", artist.type);
      return type ? artist.type === type : (!artist.type || artist.type === '');
    });
  }

}
