import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'floral',
    name: 'Floral Collection',
    description: 'Delicate and romantic scents inspired by blooming gardens and fresh petals',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Rose', 'Jasmine', 'Lily', 'Peony'],
    products: [
      {
        id: 'floral-1',
        name: 'Garden Rose',
        description: 'A sophisticated blend of fresh roses with hints of morning dew',
        price: 89,
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Bergamot', 'Pink Pepper'],
          middle: ['Rose', 'Peony', 'Jasmine'],
          base: ['Musk', 'Amber']
        }
      },
      {
        id: 'floral-2',
        name: 'Jasmine Night',
        description: 'Intoxicating jasmine blooms under the moonlight',
        price: 95,
        image: 'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Orange Blossom', 'Mandarin'],
          middle: ['Jasmine', 'Tuberose'],
          base: ['Sandalwood', 'Vanilla']
        }
      }
    ]
  },
  {
    id: 'woody',
    name: 'Woody Collection',
    description: 'Warm and grounding fragrances with rich wood notes and earthy undertones',
    image: 'https://images.pexels.com/photos/1707215/pexels-photo-1707215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Sandalwood', 'Cedar', 'Vetiver', 'Patchouli'],
    products: [
      {
        id: 'woody-1',
        name: 'Cedar Forest',
        description: 'A journey through ancient cedar forests',
        price: 92,
        image: 'https://images.pexels.com/photos/8142968/pexels-photo-8142968.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Cardamom', 'Bergamot'],
          middle: ['Cedar', 'Cypress'],
          base: ['Vetiver', 'Amber']
        }
      },
      {
        id: 'woody-2',
        name: 'Sandalwood Dreams',
        description: 'Creamy sandalwood with a touch of spice',
        price: 98,
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Nutmeg', 'Cinnamon'],
          middle: ['Sandalwood', 'Cedar'],
          base: ['Patchouli', 'Tonka Bean']
        }
      }
    ]
  },
  {
    id: 'citrus',
    name: 'Citrus Collection',
    description: 'Fresh and energizing scents bursting with vibrant citrus notes',
    image: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Bergamot', 'Lemon', 'Orange', 'Grapefruit'],
    products: [
      {
        id: 'citrus-1',
        name: 'Bergamot Breeze',
        description: 'Light and refreshing with sparkling citrus',
        price: 85,
        image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Bergamot', 'Lemon', 'Mandarin'],
          middle: ['Neroli', 'Lavender'],
          base: ['White Musk', 'Amber']
        }
      },
      {
        id: 'citrus-2',
        name: 'Orange Grove',
        description: 'Walking through a sun-drenched orange orchard',
        price: 88,
        image: 'https://images.pexels.com/photos/5462367/pexels-photo-5462367.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Blood Orange', 'Grapefruit'],
          middle: ['Orange Blossom', 'Petit Grain'],
          base: ['Cedarwood', 'Musk']
        }
      }
    ]
  },
  {
    id: 'oriental',
    name: 'Oriental Collection',
    description: 'Exotic and mysterious fragrances with rich spices and precious resins',
    image: 'https://images.pexels.com/photos/4041397/pexels-photo-4041397.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Amber', 'Incense', 'Vanilla', 'Oud'],
    products: [
      {
        id: 'oriental-1',
        name: 'Amber Mystique',
        description: 'Warm amber wrapped in exotic spices',
        price: 105,
        image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Saffron', 'Cardamom'],
          middle: ['Rose', 'Incense'],
          base: ['Amber', 'Oud', 'Vanilla']
        }
      },
      {
        id: 'oriental-2',
        name: 'Oud Royale',
        description: 'Precious oud wood with a touch of rose',
        price: 120,
        image: 'https://images.pexels.com/photos/8142968/pexels-photo-8142968.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Bergamot', 'Black Pepper'],
          middle: ['Oud', 'Rose', 'Saffron'],
          base: ['Leather', 'Amber', 'Patchouli']
        }
      }
    ]
  },
  {
    id: 'fresh',
    name: 'Fresh Collection',
    description: 'Clean and invigorating scents that capture the essence of nature',
    image: 'https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Green Tea', 'Mint', 'Cucumber', 'Marine'],
    products: [
      {
        id: 'fresh-1',
        name: 'Green Tea Essence',
        description: 'Pure and calming green tea with cucumber',
        price: 82,
        image: 'https://images.pexels.com/photos/5462367/pexels-photo-5462367.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Green Tea', 'Mint', 'Cucumber'],
          middle: ['Bamboo', 'White Tea'],
          base: ['Musk', 'Amber']
        }
      },
      {
        id: 'fresh-2',
        name: 'Ocean Mist',
        description: 'Crisp marine notes with a touch of salt',
        price: 86,
        image: 'https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Sea Salt', 'Ozone', 'Lemon'],
          middle: ['Marine Accord', 'Sage'],
          base: ['Driftwood', 'Musk']
        }
      }
    ]
  },
  {
    id: 'gourmand',
    name: 'Gourmand Collection',
    description: 'Sweet and indulgent fragrances inspired by delicious treats',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1200',
    fraganceNotes: ['Vanilla', 'Caramel', 'Chocolate', 'Honey'],
    products: [
      {
        id: 'gourmand-1',
        name: 'Vanilla Caramel',
        description: 'Rich vanilla with sweet caramel notes',
        price: 90,
        image: 'https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Bergamot', 'Pink Pepper'],
          middle: ['Caramel', 'Praline'],
          base: ['Vanilla', 'Tonka Bean', 'Musk']
        }
      },
      {
        id: 'gourmand-2',
        name: 'Honey Almond',
        description: 'Warm honey with toasted almond',
        price: 94,
        image: 'https://images.pexels.com/photos/8142968/pexels-photo-8142968.jpeg?auto=compress&cs=tinysrgb&w=800',
        notes: {
          top: ['Almond', 'Orange'],
          middle: ['Honey', 'Heliotrope'],
          base: ['Vanilla', 'Sandalwood', 'Amber']
        }
      }
    ]
  }
];
