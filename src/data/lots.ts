import { Lot } from '../types';

export const LOTS_DATA: Lot[] = [
  {
    id: 'lot-1',
    number: '01',
    price: 125000,
    sqft: 12500,
    status: 'available',
    path: 'M 50 50 L 150 50 L 150 150 L 50 150 Z',
    description: 'Prime hillside location with unobstructed ocean views.'
  },
  {
    id: 'lot-2',
    number: '02',
    price: 135000,
    sqft: 13200,
    status: 'reserved',
    path: 'M 160 50 L 260 50 L 260 150 L 160 150 Z',
    description: 'Spacious corner lot near the community entrance.'
  },
  {
    id: 'lot-3',
    number: '03',
    price: 115000,
    sqft: 11800,
    status: 'sold',
    path: 'M 270 50 L 370 50 L 370 150 L 270 150 Z',
    description: 'Quiet cul-de-sac lot with lush tropical surroundings.'
  },
  {
    id: 'lot-4',
    number: '04',
    price: 145000,
    sqft: 14000,
    status: 'available',
    path: 'M 50 160 L 150 160 L 150 260 L 50 260 Z',
    description: 'Elevated lot offering panoramic sunset views.'
  },
  {
    id: 'lot-5',
    number: '05',
    price: 155000,
    sqft: 15500,
    status: 'available',
    path: 'M 160 160 L 260 160 L 260 260 L 160 260 Z',
    description: 'The largest lot in Phase 1, perfect for a grand estate.'
  },
  {
    id: 'lot-6',
    number: '06',
    price: 110000,
    sqft: 11000,
    status: 'available',
    path: 'M 270 160 L 370 160 L 370 260 L 270 260 Z',
    description: 'Excellent value lot with gentle slope for easy building.'
  }
];
