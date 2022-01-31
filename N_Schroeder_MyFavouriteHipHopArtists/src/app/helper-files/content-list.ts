import { Content } from './content-interface';

export class ContentList {
    private _items: Content[];

    constructor(item: Content) {
        this._items = []; //initialize array

    }

    get items(): Content[]{
        return this._items; //get items in array
    }

    addContent(item: Content) {
        this._items.push(item); //push item to the array
    }

    contentCount() {
        return this._items.length; //get length of the content/items array
    }

    displayContent(index: number) {
        let id = "id: " + this._items[index].id;
        let title = "title: " + this._items[index].title;
        let description = "description: " + this._items[index].description;
        let creator = "creator: " + this._items[index].creator;
        let imgURL = "imgURL: " + this._items[index].imgURL;
        let type = "type: " + this._items[index].type;
        let tags = "tags: " + this._items[index].tags;

        return "<span [innerHtml]='id'></span></br> <span [innerHtml]='title'></span></br> <span [innerHtml]='description'></span></br> <span [innerHtml]='creator'></span></br> <img [src]='imgURL'/></br> <span [innerHtml]='type'></span></br> <span [innerHtml]='tags'></span> ";
    }
}