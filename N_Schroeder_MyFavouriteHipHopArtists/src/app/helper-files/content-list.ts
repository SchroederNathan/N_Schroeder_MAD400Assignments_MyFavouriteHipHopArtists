import { Content } from './content-interface';

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = []; //initialize arraynpm s
    }

    get itemsArray(): Content[]{
        return this._items; //get items in array
    }

    addContent(newItem: Content) {
        this._items.push(newItem); //push item to the array
    }

    contentCount() {
        return this._items.length; //get length of the content/items array
    }

    displayContent(index: number): string {
        if (index >= this._items.length) {
            return `<div class="error">No artist found at index ${index}</div>`;
        }

        return `<div class="title">title: ${this._items[index].title}</div>
        <div class="description">description: ${this._items[index].description}</div>
        <div class="creator">creator: ${this._items[index].creator}</div>
        <div class="imageUrl"><img src="${this._items[index].imgURL}"></div>
        <div class="type">${this._items[index].type}</div>`;
    }
}