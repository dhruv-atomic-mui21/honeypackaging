import type { LucideIcon } from 'lucide-react';
import {
  Boxes,
  CircleDot,
  PackageCheck,
  Settings2,
  MoveRight,
  Package,
} from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  alt: string;
  specs: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  tone: string;
  tagline: string;
  description: string;
  products: Product[];
}

export const categories: ProductCategory[] = [
  {
    id: 'strapping',
    name: 'Strapping Machines',
    icon: Boxes,
    tone: 'gold',
    tagline: 'Secure every carton, every time',
    description: 'Semi-automatic and fully automatic strapping solutions for all carton sizes, high volume speeds, and compression needs.',
    products: [
      {
        id: 'semi-auto-strapping',
        name: 'Semi Automatic Box Strapping Machine',
        shortDesc: 'Foot-pedal or push-button table operation for fast carton strapping.',
        image: '/images/products/semi-auto-strapping.webp',
        alt: 'Semi Automatic Box Strapping Machine table with heavy duty stainless steel top',
        specs: ['Strap width: 5–15 mm', 'Strap tension: up to 40 kg', 'Cycle time: ~2.0 sec', 'Compatible: Polypropylene (PP) strap'],
      },
      {
        id: 'auto-strapping',
        name: 'Automatic Box Strapping Machine',
        shortDesc: 'High-speed automatic strap arch feed, heat seal, and auto-eject.',
        image: '/images/products/auto-strapping.webp',
        alt: 'Automatic Box Strapping Machine with overhead arch and yellow strapping reel',
        specs: ['Strap width: 5–12 mm', 'Speed: up to 60 cycles/min', 'Seal type: friction heat weld', 'Power: 220V / 550W AC'],
      },
      {
        id: 'auto-strapping-online',
        name: 'Automatic Box Strapping Machine Online',
        shortDesc: 'In-line conveyor integration for continuous packaging lines without stopping.',
        image: '/images/products/auto-strapping-online.webp',
        alt: 'Online Automatic Box Strapping Machine with motorized conveyor integration',
        specs: ['Online conveyor integration', 'Optical auto carton detection', 'Adjustable arch size', 'PLC + sensor controlled'],
      },
      {
        id: 'low-table-strapping',
        name: 'Automatic Strapping Machine — Low Table with Pressing',
        shortDesc: 'Low table height with pneumatic top pressing plate for compressed and soft boxes.',
        image: '/images/products/low-table-strapping.webp',
        alt: 'Low Table Automatic Box Strapping Machine with pneumatic top pressing cylinder',
        specs: ['Pneumatic pressing plate', 'Table height: 300–500 mm', 'Ideal for bulky or soft boxes', 'Auto strap feed & weld'],
      },
      {
        id: 'side-belt-strapping',
        name: 'Side Belt Drive Strapping Machine Online',
        shortDesc: 'Side-belt conveyor drive for heavy cartons and continuous transit.',
        image: '/images/products/side-belt-strapping.webp',
        alt: 'Side Belt Drive Online Box Strapping Machine with integrated power belt feed',
        specs: ['Side belt drive feed system', 'Variable line speed control', 'Heavy carton stability', 'Rapid strap coil replacement'],
      },
    ],
  },
  {
    id: 'pallet-wrapping',
    name: 'Pallet Wrapping Machines',
    icon: CircleDot,
    tone: 'blue',
    tagline: 'Stable pallets, protected loads',
    description: 'Heavy-duty automatic and semi-automatic pallet stretch wrappers for factory dispatch, warehouse, and export containers.',
    products: [
      {
        id: 'fully-auto-pallet',
        name: 'Fully Auto Pallet Stretch Wrapping Machine',
        shortDesc: 'Heavy-duty rotating turntable with automatic mast film delivery and photo-eye height sensing.',
        image: '/images/products/fully-auto-pallet.webp',
        alt: 'Fully Automatic Pallet Stretch Wrapping Machine with heavy turntable and vertical carriage',
        specs: ['Turntable load: up to 2000 kg', 'Turntable diameter: 1650–1800 mm', 'Automatic height photo-eye', 'Pre-stretch film carriage up to 250%'],
      },
      {
        id: 'ring-stretch',
        name: 'Ring Stretch Wrapping Machine',
        shortDesc: 'Orbital horizontal wrapping ring for long profiles, bundles, and oversized industrial goods.',
        image: '/images/products/ring-stretch.webp',
        alt: 'Ring Stretch Wrapping Machine orbital wrapper for profiles and pipes',
        specs: ['Continuous ring rotation', 'Pass-through roller conveyor', 'Adjustable wrap tension', 'Ideal for pipes, timber, & rolls'],
      },
      {
        id: 'box-wrapping-prestetch',
        name: 'Box Wrapping Machine With Power Pre-Stretch',
        shortDesc: 'Compact motorized turntable wrapper with pneumatic top clamp and power pre-stretch.',
        image: '/images/products/box-wrapping-prestetch.webp',
        alt: 'Box Stretch Wrapping Machine with pneumatic top clamp and motorized turntable',
        specs: ['Power pre-stretch up to 300%', 'Reduces film consumption ~50%', 'Pneumatic top clamp for light boxes', 'Mobile lockable castors'],
      },
    ],
  },
  {
    id: 'carton-sealing',
    name: 'Carton Sealing Machines',
    icon: PackageCheck,
    tone: 'green',
    tagline: 'Consistent top & bottom sealing',
    description: 'Automatic and random carton sealers for uniform tape application on all carton sizes.',
    products: [
      {
        id: 'top-bottom-carton',
        name: 'Top & Bottom Drive Carton Sealing Machine',
        shortDesc: 'Dual-drive belts for simultaneous top and bottom BOPP adhesive tape sealing.',
        image: '/images/products/top-bottom-carton.webp',
        alt: 'Top and bottom drive carton sealing machine with infeed and outfeed roller conveyors',
        specs: ['Drive: synchronous top & bottom belts', 'Tape width: 48 mm, 60 mm, or 72 mm', 'Speed: up to 25 meters/min', 'Adjustable carton height & width'],
      },
      {
        id: 'auto-random-carton',
        name: 'Auto Random Carton Sealing with Flap Closure',
        shortDesc: 'Self-adjusting pneumatic arms with automatic carton top flap folding and tape sealing.',
        image: '/images/products/auto-random-carton.webp',
        alt: 'Automatic random carton sealer with pneumatic flap closing mechanism',
        specs: ['Pneumatic random size detection', 'Automatic top 4-flap folding', 'High speed continuous operation', 'Heavy-duty steel construction'],
      },
    ],
  },
  {
    id: 'shrink',
    name: 'Shrink Packaging',
    icon: Settings2,
    tone: 'orange',
    tagline: 'Clean finish for every pack',
    description: 'Industrial heat shrink tunnels, L-sealers, and automatic web sleeve sealers for retail bundles and protective packaging.',
    products: [
      {
        id: 'shrink-tunnel',
        name: 'Shrink Tunnel',
        shortDesc: 'Recirculating hot-air heat tunnel for uniform 360-degree film contraction.',
        image: '/images/products/shrink-tunnel.webp',
        alt: 'Industrial heat shrink tunnel machine with temperature control and roller bed',
        specs: ['Tunnel temperature: 100–220°C', 'Adjustable speed mesh/roller conveyor', 'Compatible with POF, PVC, and PE films', 'Thermal insulated outer chamber'],
      },
      {
        id: 'web-sealer-shrink',
        name: 'Web Sealer with Shrink Tunnel',
        shortDesc: 'Continuous heavy-duty sleeve web sealer paired with inline shrink tunnel for beverage and can bundling.',
        image: '/images/products/web-sealer-shrink.webp',
        alt: 'Automatic web sleeve sealer with integrated heavy-duty shrink tunnel for bundling',
        specs: ['Automatic pneumatic pusher infeed', 'Heavy PE film sleeve wrapping', 'Handles heavy bottles, cans, & jars', 'Complete end-of-line bundling flow'],
      },
      {
        id: 'l-sealer',
        name: 'L-Sealer Machine',
        shortDesc: 'Precision L-bar cutting and sealing frame for individual retail packaging and display boxes.',
        image: '/images/products/l-sealer.webp',
        alt: 'L-Sealer machine with ergonomic seal bar and take-away conveyor',
        specs: ['Precision Teflon-coated sealing wire', 'Adjustable sealing timer & temperature', 'Automatic discharge conveyor', 'Ideal for POF presentation wrap'],
      },
      {
        id: 'rewinding',
        name: 'Rewinding Machine',
        shortDesc: 'Industrial film and roll rewinder for roll inspection, tension rewinding, and slitting.',
        image: '/images/products/rewinding.webp',
        alt: 'Industrial film and web roll rewinding machine with dual shaft mandrel',
        specs: ['Max roll diameter: 400 mm', 'Variable electronic speed regulator', 'Precision tension control', 'Suitable for stretch, BOPP & POF'],
      },
    ],
  },
  {
    id: 'conveyors',
    name: 'Customize Conveyors',
    icon: MoveRight,
    tone: 'navy',
    tagline: 'Built to your floor, your pace',
    description: 'Fully customized conveyor systems — free roller and motorized belt conveyors — fabricated to your exact floor dimensions.',
    products: [
      {
        id: 'free-roller-conveyor',
        name: 'Free Roller Conveyor',
        shortDesc: 'Gravity or push-feed stainless steel and galvanized roller conveyor modules.',
        image: '/images/products/free-roller-conveyor.webp',
        alt: 'Stainless steel free roller gravity conveyor with adjustable legs',
        specs: ['Custom width & lengths (1m to 50m+)', 'Roller pitch: 50–150 mm', 'Heavy duty ball bearings', 'Mild steel powder coated or SS304'],
      },
      {
        id: 'belt-conveyor',
        name: 'Belt Conveyor',
        shortDesc: 'Flat or inclined motorized belt conveyor for smooth carton and parcel transit.',
        image: '/images/products/belt-conveyor.webp',
        alt: 'Motorized industrial flat belt conveyor with geared motor drive',
        specs: ['Custom width & elevation specs', 'High-grip PVC or food-grade PU belts', 'Variable frequency drive (VFD)', 'Adjustable heavy-duty leveling feet'],
      },
    ],
  },
  {
    id: 'consumables',
    name: 'Consumables & Strapping Rolls',
    icon: Package,
    tone: 'teal',
    tagline: 'The right supplies, always in stock',
    description: 'High-tensile virgin polypropylene (PP) strapping rolls and consumables engineered for smooth machine feeding.',
    products: [
      {
        id: 'strapping-roll',
        name: 'Strapping Roll (PP)',
        shortDesc: 'High-tensile polypropylene machine-grade strapping rolls in various colors.',
        image: '/images/products/strapping-roll.webp',
        alt: 'High-tensile virgin PP strapping rolls in yellow, blue, red, white, and green',
        specs: ['Widths: 5 mm, 9 mm, 12 mm, 15 mm', 'Thickness: 0.5–1.0 mm', 'High break-load tensile resistance', 'Available in virgin transparent, yellow, & custom colors'],
      },
    ],
  },
];

export const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));
