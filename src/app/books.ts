export interface Book {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const books = [
  {
    id: 1,
    name: "Britannica All New Kids' Encyclopedia: What We Know & What We Don't",
    author: 'Britannica Group',
    price: 38.08,
    description:
      "Earth? Space? Animals? History? STEM? The Britannica All New Kids' Encyclopedia has them all.",
    imageUrl:
      'https://m.media-amazon.com/images/I/51qG7ZVRqUL._SX394_BO1,204,203,200_.jpg',
  },
  {
    id: 2,
    name: 'Ikigai: The Japanese Secret to a Long and Happy Life',
    author: 'Héctor García',
    price: 20.0,
    description:
      'According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world’s longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—the place where passion, mission, vocation, and profession intersect—means that each day is infused with meaning. It’s the reason we get up in the morning. It’s also the reason many Japanese never really retire (in fact there’s no word in Japanese that means retire in the sense it does in English): They remain active and work at what they enjoy, because they’ve found a real purpose in life—the happiness of always being busy.',
    imageUrl:
      'https://m.media-amazon.com/images/I/41mtUoTi8ZL._SX351_BO1,204,203,200_.jpg',
  },
  {
    id: 3,
    name: 'Atomic Habits: The life-changing million copy bestseller',
    author: 'James Clear',
    price: 16.0,
    description:
      'In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy.',
    imageUrl:
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
  },
  {
    id: 4,
    name: 'Spare',
    author: 'Prince Harry the Duke of Sussex',
    price: 24.8,
    description:
      "It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother's coffin as the world watched in sorrow--and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling--and how their lives would play out from that point on.",
    imageUrl:
      'https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg',
  },
];
