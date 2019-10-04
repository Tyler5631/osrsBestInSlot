import { Serializer } from '../utils/Serializer';
import { BasicItemModel } from './BasicItemModel';

export class BasicItemSerializer implements Serializer<BasicItemModel> {
    serialize(item: BasicItemModel): {} {
        return {
            id: item.id,
            name: item.name
        };
    }

    deserialize(item: any): BasicItemModel {
        return new BasicItemModel(
            item.id,
            item.name
        );
    }
}