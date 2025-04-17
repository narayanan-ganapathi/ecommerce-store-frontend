import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Organic Apples',
    description: 'Sweet and crispy organic apples from local farms. These premium apples are carefully selected and harvested at peak ripeness to ensure the best flavor and nutritional value. Perfect for snacking, baking, or adding to your favorite recipes.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6',
    category: 'Grocery'
  },
  {
    id: '2',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton basic t-shirt. Made with premium cotton for maximum comfort and durability. Features a classic fit, crew neck, and short sleeves. Perfect for everyday wear or layering.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab',
    category: 'Fashion'
  },
  {
    id: '3',
    name: 'Baby Diapers Pack',
    description: 'Ultra-absorbent baby diapers, pack of 50. Features a soft, breathable outer cover and a super-absorbent core that keeps your baby dry and comfortable. Includes wetness indicator and gentle elastic around legs for a secure fit.',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    category: 'Baby Care'
  },
  {
    id: '4',
    name: 'Organic Face Cream',
    description: 'Natural moisturizing face cream with vitamin E. Made with organic ingredients including aloe vera, shea butter, and essential oils. Provides deep hydration while being gentle on sensitive skin. Perfect for daily use.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8',
    category: 'Cosmetics'
  },
];