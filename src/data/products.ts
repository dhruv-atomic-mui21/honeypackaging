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
  image: string;
  alt: string;
  products: Product[];
}

export const categories: ProductCategory[] = [
  {
    id: 'strapping',
    name: 'Strapping Machines',
    icon: Boxes,
    tone: 'gold',
    tagline: 'Secure every carton, every time',
    description: 'Semi-automatic and fully automatic strapping solutions engineered for high speed, rigid compression, and all carton sizes.',
    image: '/images/catalog/strapping-arch-type-heavy.webp',
    alt: 'High-speed automatic box strapping machine',
    products: [
      {
        id: 'semi-auto-strapping',
        name: 'Semi-Automatic Box Strapping Machine (Tabletop / MST-N)',
        shortDesc: 'Instant-heat table operation with foot-pedal and push-button controls for fast carton bundling.',
        image: '/images/catalog/strapping-semi-auto-mst-n.webp',
        alt: 'Semi Automatic Box Strapping Machine table with heavy duty stainless steel top',
        specs: ['Operation: Semi-automatic tabletop', 'Strap width: 5–15 mm', 'Strap tension: up to 45 kgf', 'Compatible: Polypropylene (PP) strap'],
      },
      {
        id: 'semi-auto-strapping-ball-table',
        name: 'Semi-Automatic Box Strapping Machine (Ball-Roller Tabletop)',
        shortDesc: 'Heavy-duty steel ball-bearing roller tabletop enabling effortless multi-directional rotation and cross-strapping of heavy 50kg+ cartons.',
        image: '/images/products/strapping-ball-table.webp',
        alt: 'Semi-Automatic Box Strapping Machine with multi-directional ball transfer roller tabletop',
        specs: ['Operation: Semi-automatic tabletop cycle', 'Tabletop: Integrated steel ball-bearing rollers', 'Strap width: 6–15 mm adjustable', 'Ideal for heavy boxes, tiles, and cross-strapping'],
      },
      {
        id: 'auto-strapping',
        name: 'Fully Automatic Box Strapping Machine (High-Speed Arch)',
        shortDesc: 'Overhead arch with high-speed automated strap feed, heat seal, and auto strap loop ejection.',
        image: '/images/catalog/strapping-arch-type-heavy.webp',
        alt: 'Automatic Box Strapping Machine with overhead arch and strapping reel',
        specs: ['Operation: Fully automatic arch cycle', 'Strap width: 5–12 mm', 'Speed: up to 60 cycles/min', 'Seal type: friction heat weld'],
      },
      {
        id: 'auto-strapping-online',
        name: 'Automatic Box Strapping Machine Online (Conveyor Integrated)',
        shortDesc: 'In-line conveyor integration with optical sensors for continuous transit without stopping.',
        image: '/images/products/auto-strapping-online.webp',
        alt: 'Online Automatic Box Strapping Machine with motorized conveyor integration',
        specs: ['Operation: Fully automatic in-line', 'Optical auto carton detection', 'PLC + sensor controlled transit', 'Adjustable arch size'],
      },
      {
        id: 'horizontal-pressing-strapping',
        name: 'Horizontal Compression & Box Strapping Machine',
        shortDesc: 'Specialized dual horizontal pneumatic compression plates for compacting corrugated bundles, textiles, and cartons.',
        image: '/images/products/horizontal-pressing.webp',
        alt: 'Horizontal compression and strapping machine for bundled cartons and materials',
        specs: ['Operation: Dual horizontal pneumatic compression cycle', 'High bundle compression before friction strap weld', 'Adjustable compression distance & tensioning', 'Ideal for cardboard boxes, paper bundles, and textiles'],
      },
      {
        id: 'low-table-strapping',
        name: 'Automatic Strapping Machine — Low Table with Pressing',
        shortDesc: 'Low table height with pneumatic top pressing plate for compressed and soft boxes.',
        image: '/images/products/low-table-strapping.webp',
        alt: 'Low Table Automatic Box Strapping Machine with pneumatic top pressing cylinder',
        specs: ['Operation: Automatic with pneumatic press', 'Pneumatic pressing plate', 'Table height: 300–500 mm', 'Ideal for bulky or soft boxes'],
      },
      {
        id: 'side-belt-strapping',
        name: 'Side Belt Drive Strapping Machine Online',
        shortDesc: 'Side-belt conveyor drive for heavy cartons and continuous transit.',
        image: '/images/products/side-belt-strapping.webp',
        alt: 'Side Belt Drive Online Box Strapping Machine with integrated power belt feed',
        specs: ['Operation: Fully automatic side-belt feed', 'Side belt drive feed system', 'Variable line speed control', 'Heavy carton stability'],
      },
    ],
  },
  {
    id: 'pallet',
    name: 'Pallet',
    icon: CircleDot,
    tone: 'blue',
    tagline: 'Stable pallets, protected loads',
    description: 'Heavy-duty semi-automatic, fully automatic, and drive-in M-Type pallet wrappers and orbital ring machines.',
    image: '/images/products/fully-auto-pallet.webp',
    alt: 'Pallet and stretch wrapping machines',
    products: [
      {
        id: 'semi-auto-pallet',
        name: 'Semi-Automatic Pallet Stretch Wrapping Machine',
        shortDesc: 'Heavy-duty rotating turntable with manual film attachment and automatic photo-eye pallet height sensing.',
        image: '/images/products/fully-auto-pallet.webp',
        alt: 'Semi-Automatic Pallet Stretch Wrapping Machine with heavy turntable and vertical mast',
        specs: ['Operation: Semi-automatic one-touch cycle', 'Turntable load: up to 2000 kg', 'Turntable diameter: 1650–1800 mm', 'Pre-stretch film carriage up to 250%'],
      },
      {
        id: 'fully-auto-pallet',
        name: 'Fully Automatic Pallet Stretch Wrapping Machine',
        shortDesc: 'In-line automated pallet turntable wrapper with auto film clamp, cut, wipe, and remote start.',
        image: '/images/products/fully-auto-pallet.webp',
        alt: 'Fully Automatic Pallet Stretch Wrapping Machine with heavy turntable and vertical carriage',
        specs: ['Operation: 100% Fully automatic', 'Turntable load: up to 2000 kg', 'Auto film clamping & hot-wire cutting', 'Integrated in-feed and out-feed capability'],
      },
      {
        id: 'pallet-wrapper-ntype',
        name: 'Pallet Wrapping Machine M-Type (Drive-in Turntable)',
        shortDesc: 'Horseshoe cutout turntable allowing operators to roll hand pallet trucks directly into turntable center without a ramp.',
        image: '/images/products/pallet-wrapper-ntype.webp',
        alt: 'M-Type Pallet Stretch Wrapper with hand pallet truck driveway cutout turntable',
        specs: ['Turntable design: M-Type horseshoe cutout for hand pallet trucks', 'Zero ramp required — direct floor-level entry', 'Turntable load: up to 1500 kg', 'Automatic pallet height sensing & pre-stretch carriage'],
      },
      {
        id: 'box-wrapping-prestetch',
        name: 'Semi-Automatic U-Box Stretch Wrapping Machine',
        shortDesc: 'Compact motorized turntable stretch wrapper with pneumatic top clamp and power pre-stretch.',
        image: '/images/products/box-wrapping-prestetch.webp',
        alt: 'Semi-Automatic Box Stretch Wrapping Machine with pneumatic top clamp and motorized turntable',
        specs: ['Operation: Semi-automatic turntable cycle', 'Power pre-stretch up to 300%', 'Reduces film consumption ~50%', 'Pneumatic top clamp for light boxes'],
      },
      {
        id: 'ring-stretch',
        name: 'Automatic Ring & Orbital Stretch Wrapping Machine',
        shortDesc: 'Continuous horizontal rotating ring wrapper for long profiles, aluminium bundles, pipes, and oversized goods.',
        image: '/images/products/ring-stretch.webp',
        alt: 'Ring Stretch Wrapping Machine orbital wrapper for profiles and pipes',
        specs: ['Operation: Automatic continuous ring rotation', 'Pass-through motorized roller conveyor', 'Adjustable wrap tension & speed', 'Ideal for pipes, timber, & rolls'],
      },
    ],
  },
  {
    id: 'strapping-roll',
    name: 'Strapping Rolls',
    icon: Package,
    tone: 'teal',
    tagline: 'The right supplies, always in stock',
    description: 'High-tensile Polypropylene (PP) and Polyester (PET) strapping rolls in semi-virgin, virgin, transparent, and Granplant recycled grades.',
    image: '/images/products/strapping-roll.webp',
    alt: 'High-tensile PP and PET strapping rolls',
    products: [
      {
        id: 'semi-virgin-strapping',
        name: 'Semi-Virgin PP Strapping Roll (Commercial Grade)',
        shortDesc: 'Cost-effective blended polypropylene strapping roll engineered for semi-automatic tabletop machines and everyday box bundling.',
        image: '/images/products/strapping-roll.webp',
        alt: 'Semi-Virgin PP strapping roll commercial grade for semi-automatic machines',
        specs: ['Grade: Semi-Virgin blended PP', 'Core use: Semi-automatic machines & manual bundling', 'Widths: 9 mm, 12 mm, 15 mm', 'High economy per meter for cost-conscious shipping'],
      },
      {
        id: 'virgin-strapping',
        name: 'Virgin PP Strapping Roll (100% Prime Machine Grade)',
        shortDesc: 'High-tensile pure polypropylene strapping roll engineered for high-speed automatic arch machines and export cartons.',
        image: '/images/products/strapping-roll.webp',
        alt: 'Virgin 100% pure PP strapping rolls in yellow, blue, and transparent',
        specs: ['Grade: 100% Pure Virgin Polypropylene', 'Core use: High-speed automatic arch strapping machines', 'Widths: 5 mm, 9 mm, 12 mm, 15 mm', 'High tensile break-load, zero curvature, jam-free feeding'],
      },
      {
        id: 'transparent-strapping',
        name: 'Transparent Virgin PP Strapping Roll (High Clarity)',
        shortDesc: 'Optically clear prime polypropylene strap for high-value retail merchandise, electronics, and printed carton packaging.',
        image: '/images/products/strapping-roll.webp',
        alt: 'Transparent high-clarity virgin polypropylene strapping roll',
        specs: ['Grade: Ultra-pure transparent virgin PP', 'Core use: Clean presentation and barcoded carton dispatch', 'Widths: 9 mm, 12 mm', 'High elastic memory and invisible joint welding'],
      },
      {
        id: 'granplant-recycled-strapping',
        name: 'Granplant (Recycled / Grade-Mix Strapping Band)',
        shortDesc: 'Eco-conscious heavy composite and recycled plastic strapping band for rigid industrial bundling and cost optimization.',
        image: '/images/products/strapping-roll.webp',
        alt: 'Granplant recycled grade mix heavy industrial strapping band',
        specs: ['Grade: Granplant recycled industrial blend', 'Core use: Construction materials, tiles, bales, and timber', 'Widths: 12 mm, 15 mm, 19 mm', 'High break-load with maximized cost savings per bundle'],
      },
      {
        id: 'aqd19-pneumatic-strapping-tool',
        name: 'AQD-19 Heavy-Duty Pneumatic Strapping Tool (PET & PP)',
        shortDesc: 'Pneumatic friction-heat welding handheld tool with high tensioning force for PET and heavy PP strap bands.',
        image: '/images/products/tool-pneumatic-aqd19.webp',
        alt: 'AQD-19 heavy duty pneumatic strapping tool friction weld for PET band',
        specs: ['Operation: Handheld pneumatic tension & friction weld', 'Strap compatibility: PET and heavy-duty PP straps', 'Strap width: 13–19 mm (thickness: 0.5–1.2 mm)', 'Air pressure: 0.5–0.8 MPa, tension force up to 3500 N'],
      },
    ],
  },
  {
    id: 'sealer',
    name: 'Carton Sealers',
    icon: PackageCheck,
    tone: 'green',
    tagline: 'Consistent top & bottom sealing',
    description: 'Plain manual-feed, motorized belt-driven, and fully automatic random carton sealing machines for uniform BOPP tape application.',
    image: '/images/products/auto-random-carton.webp',
    alt: 'Automatic random carton sealer with flap closure',
    products: [
      {
        id: 'plain-carton-sealer',
        name: 'Plain Top & Bottom Carton Sealing Machine (Manual Feed)',
        shortDesc: 'Synchronous dual top and bottom tape heads for clean simultaneous BOPP sealing on standardized boxes.',
        image: '/images/products/top-bottom-carton.webp',
        alt: 'Plain top and bottom drive carton sealing machine with infeed roller bed',
        specs: ['Operation: Semi-automatic manual box feed', 'Drive: synchronous top & bottom drive belts', 'Tape width: 48 mm, 60 mm, or 72 mm', 'Speed: up to 20 meters/min'],
      },
      {
        id: 'belt-driven-carton-sealer',
        name: 'Belt Driven Carton Sealing Machine (Side Belt Drive)',
        shortDesc: 'Heavy-duty side belt drive transport for unstable, tall, narrow, or heavy corrugated cartons.',
        image: '/images/products/top-bottom-carton.webp',
        alt: 'Side belt driven carton sealing machine for tall and heavy boxes',
        specs: ['Drive mechanism: High-grip dual side drive belts', 'Box compatibility: Tall, narrow, and overweight cartons', 'Speed: up to 25 meters/min', 'Adjustable height and width hand-cranks'],
      },
      {
        id: 'auto-random-carton',
        name: 'Fully Automatic Random Carton Sealer with Flap Closure',
        shortDesc: 'Self-adjusting pneumatic arms with automatic carton top flap folding and continuous tape sealing.',
        image: '/images/products/auto-random-carton.webp',
        alt: 'Automatic random carton sealer with pneumatic flap closing mechanism',
        specs: ['Operation: Fully automatic flap folding & sealing', 'Pneumatic random size detection', 'Automatic top 4-flap folding', 'High speed continuous conveyor transit'],
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
    image: '/images/products/free-roller-conveyor.webp',
    alt: 'Free roller and motorized industrial conveyor systems',
    products: [
      {
        id: 'free-roller-conveyor',
        name: 'Free Roller Gravity Conveyor (Fabricated Bed)',
        shortDesc: 'Gravity or push-feed stainless steel and galvanized roller conveyor modules fabricated to custom floor plans.',
        image: '/images/products/free-roller-conveyor.webp',
        alt: 'Stainless steel free roller gravity conveyor with adjustable legs',
        specs: ['Operation: Manual push / gravity flow', 'Custom width & lengths (1m to 50m+)', 'Roller pitch: 50–150 mm', 'Mild steel powder coated or SS304'],
      },
      {
        id: 'belt-conveyor',
        name: 'Motorized Industrial Belt Conveyor (Automated Transit)',
        shortDesc: 'Flat or inclined motorized belt conveyor for smooth carton and parcel transit.',
        image: '/images/products/belt-conveyor.webp',
        alt: 'Motorized industrial flat belt conveyor with geared motor drive',
        specs: ['Operation: Motorized automated drive', 'High-grip PVC or food-grade PU belts', 'Variable frequency drive (VFD)', 'Adjustable heavy-duty leveling feet'],
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
    image: '/images/products/web-sealer-shrink.webp',
    alt: 'Web sealer with continuous heat shrink tunnel',
    products: [
      {
        id: 'l-sealer',
        name: 'Semi-Automatic L-Sealer Machine',
        shortDesc: 'Precision L-bar cutting and sealing frame for individual retail packaging and display boxes.',
        image: '/images/products/l-sealer.webp',
        alt: 'L-Sealer machine with ergonomic seal bar and take-away conveyor',
        specs: ['Operation: Semi-automatic L-bar sealing', 'Precision Teflon-coated sealing wire', 'Adjustable sealing timer & temperature', 'Automatic discharge conveyor'],
      },
      {
        id: 'shrink-tunnel',
        name: 'Industrial Recirculating Shrink Tunnel',
        shortDesc: 'Recirculating hot-air heat tunnel for uniform 360-degree film contraction.',
        image: '/images/products/shrink-tunnel.webp',
        alt: 'Industrial heat shrink tunnel machine with temperature control and roller bed',
        specs: ['Operation: Continuous heat shrink tunnel', 'Tunnel temperature: 100–220°C', 'Adjustable speed mesh/roller conveyor', 'Compatible with POF, PVC, and PE films'],
      },
      {
        id: 'web-sealer-shrink',
        name: 'Fully Automatic Web Sealer with Shrink Tunnel',
        shortDesc: 'Continuous heavy-duty sleeve web sealer paired with inline shrink tunnel for beverage and can bundling.',
        image: '/images/products/web-sealer-shrink.webp',
        alt: 'Automatic web sleeve sealer with integrated heavy-duty shrink tunnel for bundling',
        specs: ['Operation: Fully automatic sleeve seal & tunnel flow', 'Automatic pneumatic pusher infeed', 'Heavy PE film sleeve wrapping', 'Complete end-of-line bundling flow'],
      },
    ],
  },
];

// Provide legacy ID mapping so existing bookmarks and search params resolve cleanly
export const categoryMap: Record<string, ProductCategory> = {
  ...Object.fromEntries(categories.map((c) => [c.id, c])),
  'pallet-wrapping': categories.find((c) => c.id === 'pallet')!,
  'carton-sealing': categories.find((c) => c.id === 'sealer')!,
  'consumables': categories.find((c) => c.id === 'strapping-roll')!,
};
