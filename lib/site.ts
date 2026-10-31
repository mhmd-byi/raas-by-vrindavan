export const site = {
  name: "Raas by Vrindavan",
  url: "https://raasbyvrindavan.com",
  tagline: "A splendid destination for marvelous celebrations",
  phones: [
    { number: "+91 98260 37001", href: "tel:+919826037001" },
    { number: "+91 98260 56001", href: "tel:+919826056001" },
  ],
  // Primary number, for single-button spots such as the floating Call button.
  phone: "+91 98260 37001",
  phoneHref: "tel:+919826037001",
  whatsappHref:
    "https://wa.me/919826037001?text=Hello%20Raas%20by%20Vrindavan%2C%20I%27d%20like%20to%20make%20an%20enquiry.",
  email: "raasvrindavan588@gmail.com",
  address: [
    "Californea Citi",
    "Near LNCT Medical College & Sewa Kunj Hospital",
    "Kanadiya Road, Indore, MP - 452016",
  ],
  facebook: "https://www.facebook.com/vrindavanfoodvilla/",
  instagram: "https://instagram.com/raasbyvrindavan?utm_medium=copy_link",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/property", label: "Property" },
  { href: "/rooms", label: "Rooms" },
  { href: "/banquets", label: "Banquets" },
  { href: "/in-room-dining", label: "In-Room Dining" },
  { href: "/gallery", label: "Gallery" },
];

export const footerNav = [
  { href: "/about-us", label: "About Us" },
  { href: "/careers", label: "Careers" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

// Location pin from the venue's own Google Maps listing.
export const map = {
  lat: 22.7463066,
  lng: 75.9798624,
  embed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.9748317494862!2d75.97986236161486!3d22.746306588856157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e3cbd73df54f%3A0x9498841eb1cff211!2sRaas%20by%20Vrindavan!5e0!3m2!1sen!2sin!4v1640765182885!5m2!1sen!2sin",
  placeUrl: "https://maps.google.com/?cid=10707453381440434705",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=22.7463066,75.9798624",
  qr: "/images/raas-location-qr.svg",
};

export const img = {
  poolNight: "/images/AG7_9274.jpg",
  poolCourtyard: "/images/AG7_9324.jpg",
  entrance: "/images/AG7_9337.jpg",
  lobby: "/images/AG7_9308-1.jpg",
  banquet: "/images/AG7_9315.jpg",
  banquetStairs: "/images/AG7_9316.jpg",
  corridor: "/images/AG7_9300.jpg",
  aerialVillas: "/images/aerial-villas.jpg",
  aerialLane: "/images/aerial-lane.jpg",
  aerialLawn: "/images/aerial-lawn.jpg",
  aerialLane2: "/images/aerial-lane-2.jpg",
  villaGable: "/images/villa-gable.jpg",
  villaFront: "/images/villa-front.jpg",
  villaDusk: "/images/villa-dusk.jpg",
  villaLounge: "/images/villa-lounge.jpg",
  mahal1: "/images/mahal-1.jpg",
  mahal2: "/images/mahal-2.jpg",
  mahal3: "/images/mahal-3.jpg",
  lawn: "/images/lawn.jpg",
  hallFloral: "/images/hall-floral.jpg",
  mandap: "/images/mandap.jpg",
  poolDecor: "/images/pool-decor.jpg",
  poolDecor2: "/images/pool-decor-2.jpg",
  diningSpread: "/images/dining-spread.jpg",
  diningDrinks: "/images/dining-drinks.jpg",
  diningWrap: "/images/dining-wrap.jpg",
  diningPaneer: "/images/dining-paneer.jpg",
  diningBrownie: "/images/dining-brownie.jpg",
};

export type Room = {
  slug: string;
  name: string;
  image: string;
  alt: string;
  blurb: string;
  gallery: { src: string; alt: string }[];
};

export const rooms: Room[] = [
  {
    slug: "suite",
    name: "Suite",
    image: "/images/suite-1.jpg",
    alt: "Suite bedroom with a slatted timber ceiling and padded headboard",
    blurb:
      "A spacious suite with its own living area, a corner sofa and wall-mounted TV, and a bedroom beneath a slatted timber ceiling.",
    gallery: [
      { src: "/images/suite-1.jpg", alt: "Suite bedroom with a slatted timber ceiling" },
      { src: "/images/suite-2.jpg", alt: "Suite living area with a tan corner sofa" },
      { src: "/images/suite-3.jpg", alt: "Suite lounge with a TV wall and coffee table" },
      { src: "/images/suite-4.jpg", alt: "Suite bed with padded headboard and bedside table" },
      { src: "/images/suite-5.jpg", alt: "Suite bathroom with a round basin" },
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    image: "/images/premium-1.jpg",
    alt: "Premium room with a palm-print headboard wall and arched bed",
    blurb:
      "A premium room with a palm-print feature wall, a cosy seating corner and a bathroom with a whirlpool tub.",
    gallery: [
      { src: "/images/premium-1.jpg", alt: "Premium room with a palm-print headboard wall" },
      { src: "/images/premium-2.jpg", alt: "Premium bed with an arched headboard and palm mural" },
      { src: "/images/premium-3.jpg", alt: "Premium seating corner with teal armchairs" },
      { src: "/images/premium-4.jpg", alt: "Whirlpool tub against a slate-tiled wall" },
      { src: "/images/premium-5.jpg", alt: "Premium bathroom with a bathtub and writing desk" },
    ],
  },
  {
    slug: "super-deluxe",
    name: "Super Deluxe",
    image: "/images/super-deluxe-1.jpg",
    alt: "Super deluxe room with yellow and grey geometric wall panels",
    blurb: "A room with a separate sitting area, a sofa with yellow stools and bold yellow-and-grey accent walls.",
    gallery: [
      { src: "/images/super-deluxe-1.jpg", alt: "Super deluxe bed with yellow geometric wall panels" },
      { src: "/images/super-deluxe-2.jpg", alt: "Sitting area with a sofa and yellow stools" },
      { src: "/images/super-deluxe-3.jpg", alt: "Super deluxe bed beside a geometric feature wall" },
      { src: "/images/super-deluxe-4.jpg", alt: "Super deluxe room with a TV and writing desk" },
      { src: "/images/super-deluxe-5.jpg", alt: "Super deluxe room with a velvet bench and wardrobe" },
    ],
  },
  {
    slug: "deluxe-villa",
    name: "Deluxe Villa",
    image: "/images/deluxe-villa-1.jpg",
    alt: "Deluxe villa room with an arched headboard and wooden bed",
    blurb: "A calm villa room with a classic arched headboard, warm lighting and a cosy chair, with a lounge close by.",
    gallery: [
      { src: "/images/deluxe-villa-1.jpg", alt: "Deluxe villa room with an arched headboard" },
      { src: "/images/deluxe-villa-2.jpg", alt: "Deluxe villa bed with a wall-mounted TV" },
      { src: "/images/deluxe-villa-3.jpg", alt: "Deluxe villa room with an armchair and side table" },
      { src: "/images/deluxe-villa-4.jpg", alt: "Villa lounge with sofas and a wooden staircase" },
      { src: "/images/deluxe-villa-5.jpg", alt: "Villa bathroom with a glass shower" },
    ],
  },
  {
    slug: "deluxe-cottage",
    name: "Deluxe Cottage",
    image: "/images/deluxe-cottage-1.jpg",
    alt: "Deluxe cottage room with yellow and grey geometric wall panels",
    blurb: "A bright cottage room with yellow-and-grey accent walls, a work desk and a quiet sofa lounge.",
    gallery: [
      { src: "/images/deluxe-cottage-1.jpg", alt: "Deluxe cottage bed with geometric wall panels" },
      { src: "/images/deluxe-cottage-2.jpg", alt: "Deluxe cottage bed beneath a yellow and grey feature wall" },
      { src: "/images/deluxe-cottage-3.jpg", alt: "Deluxe cottage room with a TV and velvet chairs" },
      { src: "/images/deluxe-cottage-4.jpg", alt: "Cottage lounge with a sofa and framed art" },
      { src: "/images/deluxe-cottage-5.jpg", alt: "Cottage bathroom with a round basin and framed mirror" },
    ],
  },
  {
    slug: "executive",
    name: "Executive",
    image: "/images/executive-1.jpg",
    alt: "Executive room with a tropical-print wall and timber ceiling",
    blurb: "A work-ready room with a TV and desk, a tropical-print feature wall and a timber ceiling.",
    gallery: [
      { src: "/images/executive-1.jpg", alt: "Executive room with a tropical-print wall" },
      { src: "/images/executive-2.jpg", alt: "Executive bed under a tropical mural" },
      { src: "/images/executive-3.jpg", alt: "Executive room with TV, desk and velvet chairs" },
      { src: "/images/executive-4.jpg", alt: "Executive bed beneath a leaf-print feature wall" },
      { src: "/images/executive-5.jpg", alt: "Bathroom with patterned floor tiles" },
    ],
  },
  {
    slug: "standard",
    name: "Standard",
    image: "/images/standard-1.jpg",
    alt: "Standard room with an arched headboard and warm lighting",
    blurb: "A comfortable, well-appointed room with an arched headboard, warm lighting and a clean, modern bathroom.",
    gallery: [
      { src: "/images/standard-1.jpg", alt: "Standard room with an arched headboard and TV" },
      { src: "/images/standard-2.jpg", alt: "Standard bed with cove lighting above" },
      { src: "/images/standard-3.jpg", alt: "Standard bed with crisp white linen" },
      { src: "/images/standard-4.jpg", alt: "Standard room with a textured feature band" },
      { src: "/images/standard-5.jpg", alt: "Standard bathroom with a glass shower" },
    ],
  },
];

export const galleryItems = [
  { src: img.aerialVillas, alt: "Aerial view of the gabled villas", cat: "Property" },
  { src: img.aerialLane, alt: "Aerial view of the villa lane", cat: "Property" },
  { src: img.aerialLawn, alt: "Aerial view of the lawn and banquet roof", cat: "Property" },
  { src: img.aerialLane2, alt: "Aerial view of numbered villa entrances", cat: "Property" },
  { src: img.villaFront, alt: "Villa entrance lit at dusk", cat: "Property" },
  { src: img.villaDusk, alt: "Gabled villas at dusk", cat: "Property" },
  { src: img.villaGable, alt: "Timber-clad villa gable", cat: "Property" },
  { src: img.entrance, alt: "Resort entrance walkway at night", cat: "Property" },
  { src: img.poolNight, alt: "Poolside entrance at night", cat: "Poolside" },
  { src: img.poolCourtyard, alt: "Poolside courtyard at night", cat: "Poolside" },
  { src: img.poolDecor, alt: "Poolside decorated for an event", cat: "Poolside" },
  { src: img.poolDecor2, alt: "Poolside canopy and decks at night", cat: "Poolside" },
  { src: img.mahal1, alt: "Raas Mahal banquet hall", cat: "Banquets" },
  { src: img.mahal2, alt: "Raas Mahal with a crystal chandelier", cat: "Banquets" },
  { src: img.mahal3, alt: "Raas Mahal seating on red carpet", cat: "Banquets" },
  { src: img.hallFloral, alt: "Hall with floral seating", cat: "Banquets" },
  { src: img.mandap, alt: "Wedding mandap entrance with elephant statues", cat: "Banquets" },
  { src: img.lawn, alt: "Wedding lawn with a stage", cat: "Banquets" },
  { src: img.banquet, alt: "Hall with chandeliers and gold drapes", cat: "Banquets" },
  { src: img.lobby, alt: "Lobby lounge with chandeliers", cat: "Lobby" },
  { src: img.villaLounge, alt: "Villa lounge with a wooden staircase", cat: "Lobby" },
  { src: img.corridor, alt: "Guest-room corridor", cat: "Lobby" },
  { src: "/images/suite-1.jpg", alt: "Suite bedroom", cat: "Rooms" },
  { src: "/images/suite-2.jpg", alt: "Suite living area", cat: "Rooms" },
  { src: "/images/premium-1.jpg", alt: "Premium room with a palm-print wall", cat: "Rooms" },
  { src: "/images/premium-4.jpg", alt: "Whirlpool tub in a premium room", cat: "Rooms" },
  { src: "/images/super-deluxe-1.jpg", alt: "Super deluxe room", cat: "Rooms" },
  { src: "/images/deluxe-villa-1.jpg", alt: "Deluxe villa room", cat: "Rooms" },
  { src: "/images/deluxe-cottage-1.jpg", alt: "Deluxe cottage room", cat: "Rooms" },
  { src: "/images/executive-1.jpg", alt: "Executive room", cat: "Rooms" },
  { src: "/images/standard-1.jpg", alt: "Standard room", cat: "Rooms" },
  { src: "/images/deluxe-villa-5.jpg", alt: "Bathroom with a glass shower", cat: "Rooms" },
  { src: img.diningSpread, alt: "A spread of snacks and desserts", cat: "Dining" },
  { src: img.diningDrinks, alt: "Fresh mocktails", cat: "Dining" },
  { src: img.diningPaneer, alt: "Grilled paneer tikka", cat: "Dining" },
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
