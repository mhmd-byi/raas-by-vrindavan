export const site = {
  name: "Raas by Vrindavan",
  url: "https://raasbyvrindavan.com",
  tagline: "A splendid destination for marvelous celebrations",
  phone: "+91 98260 37001",
  phoneHref: "tel:+919826037001",
  whatsappHref:
    "https://wa.me/919826037001?text=Hello%20Raas%20by%20Vrindavan%2C%20I%27d%20like%20to%20make%20an%20enquiry.",
  email: "rasbyvrindavan@gmail.com",
  address: [
    "F-3, Raas by Vrindavan",
    "Kanadiya Road, California City",
    "Indore, Madhya Pradesh 452016",
  ],
  facebook: "https://www.facebook.com/vrindavanfoodvilla/",
  instagram: "https://instagram.com/raasbyvrindavan?utm_medium=copy_link",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/property", label: "Property" },
  { href: "/rooms", label: "Rooms" },
  { href: "/banquets", label: "Banquets" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/gallery", label: "Gallery" },
];

export const footerNav = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export const img = {
  poolNight: "/images/AG7_9274.jpg",
  poolCourtyard: "/images/AG7_9324.jpg",
  entrance: "/images/AG7_9337.jpg",
  lobby: "/images/AG7_9308-1.jpg",
  banquet: "/images/AG7_9315.jpg",
  banquetStairs: "/images/AG7_9316.jpg",
  corridor: "/images/AG7_9300.jpg",
  foodVilla: "/images/AG7_9116.jpg",
  roomPlatform: "/images/AG7_9240.jpg",
  roomMirror: "/images/AG7_9249.jpg",
  roomCurtain: "/images/AG7_9255.jpg",
  roomDesk: "/images/AG7_9259.jpg",
  roomFan: "/images/AG7_9266.jpg",
  lounge: "/images/AG7_9277.jpg",
  suite: "/images/AG7_9285.jpg",
};

export type Room = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  blurb: string;
};

export const rooms: Room[] = [
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    image: img.suite,
    alt: "Suite with padded headboard, timber ceiling and dressing area",
    blurb:
      "Our most generous stay: a restful bed beneath a slatted timber ceiling, with a mirrored dressing area just beyond.",
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    image: img.lounge,
    alt: "Suite living area with a large grey corner sofa",
    blurb:
      "A sofa-lined sitting room and room to spread out, made for families sharing a celebration together.",
  },
  {
    slug: "deluxe-double-bed",
    name: "Deluxe Double Bed",
    image: img.roomMirror,
    alt: "Deluxe room with quilted headboard and patterned tile floor",
    blurb:
      "A floating bed with a quilted golden headboard, a full-length mirror and a bold patterned floor.",
  },
  {
    slug: "executive-room",
    name: "Executive Room",
    image: img.roomDesk,
    alt: "Executive room with TV, writing desk and velvet chairs",
    blurb:
      "A work-ready room with a wall-mounted TV, writing desk, wardrobe and a mini fridge.",
  },
  {
    slug: "club-house-room",
    name: "Club House Room",
    image: img.roomFan,
    alt: "Club house room with timber ceiling and gold-accented wall",
    blurb:
      "A warm timber ceiling, rich drapes and a king-size bed for easy, unhurried stays.",
  },
  {
    slug: "luxurious-stay",
    name: "Luxurious Stay",
    image: img.roomPlatform,
    alt: "Room with a low platform bed and warm accent lighting",
    blurb:
      "A low platform bed with soft cove lighting, ideal for groups travelling together.",
  },
];

export const galleryItems = [
  { src: img.poolNight, alt: "Poolside entrance at night", cat: "Property" },
  { src: img.poolCourtyard, alt: "Poolside courtyard", cat: "Property" },
  { src: img.entrance, alt: "Resort entrance walkway", cat: "Property" },
  { src: img.corridor, alt: "Guest-room corridor", cat: "Property" },
  { src: img.foodVilla, alt: "Vrindavan Food Villa", cat: "Dining" },
  { src: img.lobby, alt: "Lobby lounge", cat: "Lobby" },
  { src: img.banquet, alt: "Banquet hall", cat: "Banquets" },
  { src: img.banquetStairs, alt: "Banquet hall and staircase", cat: "Banquets" },
  { src: img.suite, alt: "Suite", cat: "Rooms" },
  { src: img.lounge, alt: "Suite lounge", cat: "Rooms" },
  { src: img.roomMirror, alt: "Deluxe room", cat: "Rooms" },
  { src: img.roomDesk, alt: "Executive room", cat: "Rooms" },
  { src: img.roomCurtain, alt: "Room with drapes", cat: "Rooms" },
  { src: img.roomFan, alt: "Club house room", cat: "Rooms" },
  { src: img.roomPlatform, alt: "Platform bed room", cat: "Rooms" },
];

export const testimonials = [
  {
    name: "Tushar Gamecha",
    role: "IT Professional",
    quote:
      "It's been a pleasure for us to host our wedding at Raas. They made my brother's wedding unforgettable. Food, service and their hospitality was excellent. All of our guests over three days enjoyed staying there. I would like to say special thanks to their team as they considered our spontaneous requests too. I'll highly recommend the venue.",
  },
  {
    name: "Smriti Nagpal",
    role: "Wedding host",
    quote:
      "Our function was very well organized by the Raas team. Kudos to the management, their team was continuously asking for feedback and food arrangement, our function was nicely managed by them and all our family members were very happy and satisfied by all our 3 days function.",
  },
  {
    name: "Mandeep Singh Juneja",
    role: "Guest",
    quote:
      "The resort is splendid and luxurious. The rooms are suave and spacious with all amenities. We were impressed by their banquet interior as they were quite appealing and refined. Overall a fabulous experience.",
  },
  {
    name: "Abhilasha Ahuja",
    role: "Guest",
    quote:
      "One of the most amazing stays ever. I am short of words to describe the experience of this place. The staff is so amazing, always ready to assist you with a big smile. Each and every little detail on the entire property is beautifully thought out. Loved the food also. Perfect for any sort of gathering or a day out. 11 out of 10 stars!",
  },
];

export const pillars = [
  {
    title: "Catering",
    text: "Our chefs have refined their recipes over decades, and every dish is served as a small work of art that complements your occasion.",
  },
  {
    title: "Luxury",
    text: "Our rooms and suites offer a cosy, comfortable stay with opulent facilities and warm hospitality, whether you are here for a wedding, a meeting or a getaway.",
  },
  {
    title: "Event Management",
    text: "From weddings to farewell parties, we take care of your event so you can sit back and relax, with elegance, aesthetic and delight in every detail.",
  },
];
