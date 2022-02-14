import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTagged'
})
export class ContentTaggedPipe implements PipeTransform {

  transform(artistList: Content[]) {
    return artistList.filter(c => c.tags != null ? c.tags.length : null);
      ;
  }

}
