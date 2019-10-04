import { BasicItemModel } from '../item-list/BasicItemModel';

export interface ItemRepository {
    getBasicItems(): Promise<BasicItemModel[]>;
}