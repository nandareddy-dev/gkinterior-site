// Real photos vachaaka: /public/images/ lo petti, path ni "/images/xxx.jpg" ani marchandi.

export const projects = [
  {
    slug: "modern-living-room",
    title: "Modern Living Room",
    category: "Living Room",
    location: "Gachibowli, Hyderabad",
    area: "450 sq ft",
    year: "2025",
    featured: true,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
    ],
    description: "A warm, minimal living space with wooden textures and soft lighting.",
  },
  {
    slug: "luxury-bedroom",
    title: "Luxury Bedroom",
    category: "Bedroom",
    location: "Jubilee Hills, Hyderabad",
    area: "300 sq ft",
    year: "2025",
    featured: true,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
    ],
    description: "Calm tones, a custom headboard wall and hidden storage.",
  },
  {
    slug: "modular-kitchen",
    title: "Modular Kitchen",
    category: "Kitchen",
    location: "Kondapur, Hyderabad",
    area: "180 sq ft",
    year: "2024",
    featured: true,
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
    ],
    description: "L-shaped modular kitchen with quartz counter and smart storage.",
  },
  {
    slug: "modern-office",
    title: "Modern Office",
    category: "Office",
    location: "HITEC City, Hyderabad",
    area: "2000 sq ft",
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
    ],
    description: "Open workspace with meeting pods and a relaxed breakout zone.",
  },
  // Placeholder projects: mee real projects tho replace cheyandi
  {
    slug: "compact-2bhk-apartment",
    title: "Compact 2BHK Apartment",
    category: "Living Room",
    location: "Kukatpally, Hyderabad",
    area: "1100 sq ft",
    year: "2025",
    featured: false,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
    ],
    description: "Space-saving layout with multi-purpose furniture and a bright, airy palette.",
  },
  {
    slug: "kids-bedroom",
    title: "Kids Bedroom",
    category: "Bedroom",
    location: "Madhapur, Hyderabad",
    area: "200 sq ft",
    year: "2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200",
    gallery: ["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200"],
    description: "Playful yet calm bedroom with a study corner and bunk storage.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const services = [
  { title: "Residential Interiors", text: "Complete home design from concept to handover." },
  { title: "Modular Kitchens", text: "Functional, stylish kitchens with quality fittings." },
  { title: "Commercial Interiors", text: "Offices, clinics and showrooms designed for business." },
  { title: "Furniture & Decor", text: "Custom furniture, lighting and styling." },
];

export const testimonials = [
  { name: "Ravi Kumar", text: "They finished our 3BHK on time and the result looks amazing." },
  { name: "Sneha Reddy", text: "Great design ideas and very transparent about costs." },
  { name: "Anil Varma", text: "Our office was ready before the deadline. Very professional team." },
];