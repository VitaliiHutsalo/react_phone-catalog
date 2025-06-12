import { Color } from '@models/common/Color';
import { Description } from './Description';

export interface Accessory {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: Color[];
  color: Color;
  images: string[];
  description: Description[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  cell: string[];
}
