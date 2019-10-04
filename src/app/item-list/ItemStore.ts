import { BasicItemModel } from './BasicItemModel';

export class ItemStore {
    private _items: BasicItemModel[] = [];

    setItems(value: BasicItemModel[] | null) {
        this._items = value;
    }

    getItems(): BasicItemModel[] {
        return this._items;
    }
}