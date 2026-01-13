// Product data (local assets)
const kidsProducts = [
  {
    id: 'ride-jeep',
    name: 'Electric Ride-On AMG Jeep',
    price: 2200,
    age: '3–8 years',
    ageMin: 3,
    battery: '12V rechargeable (included)',
    batteryVolt: 12,
    safety: 'Seat belt, parental remote, LED headlights',
    image: 'assets/images/licensed-mercedes-benz-g63-12v-childrens-ride-on-jeep-833718.webp'
  },
  {
    id: 'ride-convertible',
    name: 'Mercedes Ride-On Convertible',
    price: 1950,
    age: '2–7 years',
    ageMin: 2,
    battery: '12V rechargeable',
    batteryVolt: 12,
    safety: 'Parental remote, white finish, adjustable seat',
    image: 'assets/images/MercedesSL65AMG12vKidsElectricRideOn-WhiteSide.webp'
  },
  {
    id: 'ride-porsche',
    name: 'Porsche Ride-On Sports Car',
    price: 2100,
    age: '3–8 years',
    ageMin: 3,
    battery: '12V, 10Ah',
    batteryVolt: 12,
    safety: 'Anti-slip wheels, parental override, black finish',
    image: 'assets/images/porsche-911-kids-electric-ride-on-car-9750804_800x.webp'
  },
  {
    id: 'ride-audi',
    name: 'Audi R8 Ride-On',
    price: 1850,
    age: '2–6 years',
    ageMin: 2,
    battery: '12V rechargeable',
    batteryVolt: 12,
    safety: 'Soft start, parental control, pink finish',
    image: 'assets/images/Kids-Audi-R8-12V-Electric-Ride-On-Car-Toy-Battery-Electric-Ride-on-Toys-Audi-Pink_bbdecceb-5222-4a0e-ae60-77cebb5d2be3.webp'
  },
  {
    id: 'ride-combo',
    name: 'Ride-On Car Collection',
    price: 1700,
    age: '2–6 years',
    ageMin: 2,
    battery: '6V rechargeable',
    batteryVolt: 6,
    safety: 'Multiple designs, beginner-friendly, parental control',
    image: 'assets/images/ride-on-cars-134232_600x600_crop_center.webp'
  },
  {
    id: 'ride-classic',
    name: 'Classic Ride-On',
    price: 1600,
    age: '1–5 years',
    ageMin: 1,
    battery: '6V rechargeable',
    batteryVolt: 6,
    safety: 'Lightweight, stable, perfect for toddlers',
    image: 'assets/images/71KI7Y-yWYL.jpg'
  },
  {
    id: 'balancing-bicycle',
    name: 'Kiddies Balancing Bicycle',
    price: 600,
    age: '2–6 years',
    ageMin: 2,
    battery: 'No Battery',
    batteryVolt: 0,
    safety: 'First step before riding a bicycle, pedal-powered',
    image: 'assets/images/597169775_122097514401159166_1716948259654408164_n.jpg'
  },
  {
    id: 'electric-audi-32-72m',
    name: 'Electric Audi',
    price: 3995,
    age: '32–72 months (2.5–6 years)',
    ageMin: 3,
    battery: '12V rechargeable',
    batteryVolt: 12,
    safety: 'Parental remote, doors open/close, LED lights, music control',
    image: 'assets/images/597600971_122100427113159166_8322990122562332748_n.jpg'
  },
  {
    id: 'maxim-mini-jeep',
    name: 'Maxim Mini Jeep',
    price: 3995,
    age: '1–4 years',
    ageMin: 1,
    battery: '12V / 7Ah',
    batteryVolt: 12,
    safety: 'Parental remote, electric brake, safety belt, MP3/USB',
    image: 'assets/images/598373065_122101633989159166_3215094860231632170_n.jpg'
  },
  {
    id: 'vannm-jeep',
    name: 'Vannm Jeep',
    price: 4500,
    age: '1–4 years',
    ageMin: 1,
    battery: '12V / 7Ah',
    batteryVolt: 12,
    safety: 'Parental remote, electric brake, safety belt, music control',
    image: 'assets/images/598713982_122101480821159166_5424288995909950595_n.jpg'
  },
  {
    id: 'hurricane-jeep-4x4',
    name: 'Hurricane All Jeep 4x4',
    price: 6500,
    age: '2–7 years',
    ageMin: 2,
    battery: '12V / 7Ah',
    batteryVolt: 12,
    safety: '4x4 off-road, dual seats, parental remote, doors, LED lights',
    image: 'assets/images/600246620_122105955591159166_3848212956144491632_n.jpg'
  },
  {
    id: 'hurux-quad-4x4',
    name: 'Hurux Quad Bike 4x4',
    price: 7995,
    age: '2–7 years',
    ageMin: 2,
    battery: '12V / 7Ah',
    batteryVolt: 12,
    safety: '4x4 off-road quad, parental remote, electric brake',
    image: 'assets/images/600264077_122105960661159166_3201267813231691829_n.jpg'
  },
  {
    id: 'beach-quad-standard',
    name: 'Beach Quad',
    price: 5500,
    age: '4–7 years',
    ageMin: 4,
    battery: '12V / 7Ah',
    batteryVolt: 12,
    safety: 'Dual seats, parental remote, electric brake, safety belt',
    image: 'assets/images/600367010_122105957883159166_1895119922338253011_n.jpg'
  },
  {
    id: 'utv-5xl-24v',
    name: 'UTV 5XL 24V Battery',
    price: 9995,
    age: '4–10 years',
    ageMin: 4,
    battery: '24V rechargeable',
    batteryVolt: 24,
    safety: '2x4 off-road driving, rubber wheels, dual seats, parental control',
    image: 'assets/images/600684805_122105963973159166_3517330156571236844_n.jpg'
  },
  {
    id: 'tesla-03-24v',
    name: 'Tesla 03 24V Battery',
    price: 9995,
    age: '5–10 years',
    ageMin: 5,
    battery: '24V rechargeable',
    batteryVolt: 24,
    safety: 'Dual seats, realistic design, MP3/USB, LED lights, parental remote',
    image: 'assets/images/601412148_122105950551159166_79611908899422363_n.jpg'
  }
];

const batteryProducts = [
  {
    id: 'asterion-ct1204',
    name: 'Asterion CT 1204',
    price: 445,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '4Ah',
    capacityNumber: 4,
    terminal: 'YB4L-B, YB4L-A, YTX4L-BS',
    image: 'assets/images/asterion-ct1204.jpg'
  },
  {
    id: 'asterion-ct1205',
    name: 'Asterion CT 1205',
    price: 473,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '5Ah',
    capacityNumber: 5,
    terminal: 'YTX5L-BS, YTZ7S, YT5L-BS',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1205-1',
    name: 'Asterion CT 1205.1',
    price: 500,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '5Ah',
    capacityNumber: 5,
    terminal: 'YB5L-BS(MF), 12N5-3B, YB5L-B',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1206',
    name: 'Asterion CT 1206',
    price: 537,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '6Ah',
    capacityNumber: 6,
    terminal: 'YTZ7S',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1206-5',
    name: 'Asterion CT 1206.5',
    price: 578,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '7Ah',
    capacityNumber: 7,
    terminal: 'YT7B-4, YT7B-BS, YT9B-BS',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1207',
    name: 'Asterion CT 1207',
    price: 611,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '7Ah',
    capacityNumber: 7,
    terminal: 'YTX7A-BS',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1207-1',
    name: 'Asterion CT 1207.1',
    price: 650,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '7Ah',
    capacityNumber: 7,
    terminal: 'YTX7L-BS',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1208',
    name: 'Asterion CT 1208',
    price: 675,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '9Ah',
    capacityNumber: 9,
    terminal: 'YT9B-4, YT9B-BS',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1208-6',
    name: 'Asterion CT 1208.6',
    price: 698,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '10Ah',
    capacityNumber: 10,
    terminal: 'YTZ10S',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1209',
    name: 'Asterion CT 1209',
    price: 668,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '9Ah',
    capacityNumber: 9,
    terminal: 'YTX9-BS',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1209-1',
    name: 'Asterion CT 1209.1',
    price: 690,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '9Ah',
    capacityNumber: 9,
    terminal: 'YB9-BS, YB9A-A, YB9-B, 12N9-4B-1',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1210',
    name: 'Asterion CT 1210',
    price: 743,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '12Ah',
    capacityNumber: 12,
    terminal: 'YT12B-4, YT12B-BS, YB9A-A',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1211-2',
    name: 'Asterion CT 1211.2',
    price: 770,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '12Ah',
    capacityNumber: 12,
    terminal: 'YTZ12S, YTZ14S',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1212',
    name: 'Asterion CT 1212',
    price: 875,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '12Ah',
    capacityNumber: 12,
    terminal: 'YTX12-BS, YTX14-BS',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1212-1',
    name: 'Asterion CT 1212.1',
    price: 910,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '14Ah',
    capacityNumber: 14,
    terminal: 'YT12B-BS, YT14B-BS',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1212-2',
    name: 'Asterion CT 1212.2',
    price: 980,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '14Ah',
    capacityNumber: 14,
    terminal: 'YT12B-BS, 12N12-4B-1',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1214',
    name: 'Asterion CT 1214',
    price: 995,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '14Ah',
    capacityNumber: 14,
    terminal: 'YTX14-BS, YTX4H-BS, YTX16-BS, YB16B-A',
    image: 'assets/images/asterion-ct1214.jpg'
  },
  {
    id: 'asterion-ct1214-1',
    name: 'Asterion CT 1214.1',
    price: 1100,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '14Ah',
    capacityNumber: 14,
    terminal: 'YTZ14-BS, YTX14H-BS, YTX16-BS',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1216',
    name: 'Asterion CT 1216',
    price: 1286,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '16Ah',
    capacityNumber: 16,
    terminal: 'YB16AL-B, YB16AL-A2',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1216-1',
    name: 'Asterion CT 1216.1',
    price: 1300,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '16Ah',
    capacityNumber: 16,
    terminal: 'YTX16-BS, YB16B-A',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1218',
    name: 'Asterion CT 1218',
    price: 1350,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '20Ah',
    capacityNumber: 20,
    terminal: 'YTX20-BS, YTX20H, YB16-B-CX',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct2020',
    name: 'Asterion CT 2020',
    price: 1385,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '20Ah',
    capacityNumber: 20,
    terminal: 'YT20-4, YTX20-BS, YTX20H, YB16-B',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct1220-1',
    name: 'Asterion CT 1220.1',
    price: 1450,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '20Ah',
    capacityNumber: 20,
    terminal: 'YT20L-4, YT19BL-BS, BMWGT',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1220-2',
    name: 'Asterion CT 1220.2',
    price: 1490,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '20Ah',
    capacityNumber: 20,
    terminal: 'YB19L-BS, YTX20L-BS, YTX20HL-BS',
    image: 'assets/images/images (2).jpg'
  },
  {
    id: 'asterion-ct1221',
    name: 'Asterion CT 1221',
    price: 1550,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '21Ah',
    capacityNumber: 21,
    terminal: 'YTX21L-BS, Y50-N18L-A3, YTX24HL-BS',
    image: 'assets/images/images.jpg'
  },
  {
    id: 'asterion-ct12201',
    name: 'Asterion CT 12201',
    price: 1420,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '20Ah',
    capacityNumber: 20,
    terminal: 'YTX20L-BS, YTX20HL-BS, YB16L-BS',
    image: 'assets/images/images (1).jpg'
  },
  {
    id: 'asterion-ct1230',
    name: 'Asterion CT 1230',
    price: 2355,
    voltage: '12V',
    voltageNumber: 12,
    capacity: '30Ah',
    capacityNumber: 30,
    terminal: 'YIX30L, YIX30L-BS, YB30L-B',
    image: 'assets/images/images (2).jpg'
  }
 ];

const tanksProducts = [
  {
    id: 'tank-500l',
    name: 'CountryPetro 500L Trailer Bowser',
    price: 45630.53,
    capacity: '500L',
    capacityNumber: 500,
    specs: '1" flowmeter, 4m hose & nozzle, 12v pump (40l/min)',
    image: 'assets/images/tanker-trailer.jpg'
  },
  {
    id: 'tank-1000l',
    name: 'CountryPetro 1000L Trailer Bowser',
    price: 66883.45,
    capacity: '1000L',
    capacityNumber: 1000,
    specs: '1" flowmeter, 4m hose & nozzle, 12v pump (70l/min)',
    image: 'assets/images/tanker-trailer.jpg'
  },
  {
    id: 'tank-1500l',
    name: 'CountryPetro 1500L Trailer Bowser',
    price: 74420.92,
    capacity: '1500L',
    capacityNumber: 1500,
    specs: '2" flowmeter option, 4m hose, braked axle option',
    image: 'assets/images/tanker-trailer.jpg'
  },
  {
    id: 'tank-2000l',
    name: 'CountryPetro 2000L Trailer Bowser',
    price: 86148.32,
    capacity: '2000L',
    capacityNumber: 2000,
    specs: 'Double axle, 12v pump options, custom paint available',
    image: 'assets/images/tanker-trailer.jpg'
  },
  {
    id: 'tank-2500l',
    name: 'CountryPetro 2500L Trailer Bowser',
    price: 99443.49,
    capacity: '2500L',
    capacityNumber: 2500,
    specs: 'Heavy-duty chassis, twin pumps available, full signage included',
    image: 'assets/images/tanker-trailer.jpg'
  }
];

const carPartsProducts = [
  {
    id: 'front-bumper',
    name: 'Front Bumper (Car)',
    price: 1300,
    terminal: 'Car Part',
    specs: 'Steel, primed — fits many sedans',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.20 PM.jpeg'
  },
  {
    id: 'fog-lamps',
    name: 'Fog Lamp Set (includes wiring)',
    price: 1400,
    terminal: 'Car Part',
    specs: 'Includes wiring, pair',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.22 PM.jpeg'
  },
  {
    id: 'headlight-assembly',
    name: 'Headlamp Assembly - LED (set of 2)',
    price: 9500,
    terminal: 'Car Part',
    specs: 'LED, set of two',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.24 PM.jpeg'
  },
  {
    id: 'taillamps-led',
    name: 'Tail Lamps - LED (set of 2)',
    price: 3900,
    terminal: 'Car Part',
    specs: 'LED tail lamps, set of two',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.25 PM.jpeg'
  },
  {
    id: 'grill-normal',
    name: 'Front Grill - OEM Style',
    price: 1800,
    terminal: 'Car Part',
    specs: 'Standard factory-style grill',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.26 PM.jpeg'
  },
  {
    id: 'grill-aftermarket',
    name: 'Front Grill - Aftermarket (BIG TOYOTA)',
    price: 2200,
    terminal: 'Car Part',
    specs: 'Aftermarket grill with bold TOYOTA lettering',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.27 PM.jpeg'
  },
  {
    id: 'bonnet-guard',
    name: 'Bonnet Guard - Black',
    price: 500,
    terminal: 'Car Part',
    specs: 'Black bonnet guard',
    image: 'assets/images/WhatsApp Image 2025-12-28 at 1.49.28 PM.jpeg'
  },
  {
    id: 'brake-pads-front',
    name: 'Brake Pads (Front) - Ceramic',
    price: 350,
    terminal: 'Car Part',
    specs: 'Set of 4, high performance',
    image: 'assets/images/514333977_1138063051508186_7428174303899890104_n.jpg'
  },
  {
    id: 'motorcycle-fairing',
    name: 'Motorcycle Fairing - Sport',
    price: 980,
    terminal: 'Motorcycle Body Part',
    specs: 'ABS plastic, universal fit',
    image: 'assets/images/514408304_1138062774841547_599486468778302098_n.jpg'
  },
  {
    id: 'motorcycle-seat',
    name: 'Motorcycle Seat - Comfort',
    price: 420,
    terminal: 'Motorcycle Body Part',
    specs: 'Black, foam padded',
    image: 'assets/images/514583372_1138063121508179_4898380959510542785_n.jpg'
  },
  {
    id: 'side-mirror',
    name: 'Side Mirror (Car) - Manual',
    price: 1500,
    terminal: 'Car Part',
    specs: 'Right side, black finish (price estimated)',
    image: 'assets/images/514236474_1138063001508191_3103371825589043372_n.jpg'
  },
  {
    id: 'hilux-2021-rocco-upgrade',
    name: 'Hilux Revo → 2021 Rocco Upgrade Kit',
    price: 5500,
    terminal: 'Car Part',
    specs: 'Full body upgrade kit — bumpers, grille, lights, trims',
    image: 'assets/images/hilux-upgrade.jpg',
    isGallery: true
  },
  {
    id: 'accessory-kit-a',
    name: 'Accessory Kit A',
    price: 1500,
    terminal: 'Car Part',
    specs: 'Generic accessory kit — estimated price',
    image: 'assets/images/514040229_1138062921508199_6039796050809011714_n.jpg'
  },
  {
    id: 'accessory-kit-b',
    name: 'Accessory Kit B',
    price: 1500,
    terminal: 'Car Part',
    specs: 'Generic accessory kit — estimated price',
    image: 'assets/images/597600971_122100427113159166_8322990122562332748_n.jpg'
  }
];

const clancyProperties = [
  {
    id: 'clancy-apt-1',
    name: 'Clancy Apartments - 2 Bed',
    price: 75000,
    type: 'sale',
    location: 'Gaborone, Block 3',
    specs: '2 bed, 1 bath, parking, close to amenities',
    image: ''
  },
  {
    id: 'clancy-flat-1',
    name: 'Clancy Flat - 1 Bed (To Rent)',
    price: 3500,
    type: 'rent',
    location: 'Gaborone, CBD',
    specs: 'Furnished, utilities negotiable, secure compound',
    image: ''
  },
  {
    id: 'clancy-office-1',
    name: 'Clancy Office - Small Suite',
    price: 12000,
    type: 'sale',
    location: 'Gaborone, Industrial Area',
    specs: '100 sqm, shared amenities, parking',
    image: ''
  }
];
  if(product.id && modelMap[product.id]) return modelMap[product.id];
  if(product.name){
    if(/CT\s?1204|CT1204/i.test(product.name)) return 'assets/images/asterion-ct1204.jpg';
    if(/CT\s?1214|CT1214/i.test(product.name)) return 'assets/images/asterion-ct1214.jpg';
  }

  // Use images in the assets based on capacity or voltage (kept as reasonable fallbacks)
  if(product.voltage && product.voltage.includes('36')) return 'assets/images/36V60AhGen2Edit2_720x.webp';
  if(product.capacityNumber >= 30) return 'assets/images/12.8V30AHCutout1_360x.webp';
  if(product.capacityNumber >= 20) return 'assets/images/12v54_12v100_Stacked_Mobile.webp';
  if(product.capacityNumber >= 14) return 'assets/images/12V_100Ah_Cranking_Battery_fa41a82b-3088-4c4f-9732-452e54002bd1_360x.webp';

  // For smaller batteries without real photos, construct an inline SVG data-URL that shows the name and capacity
  const title = (product.name || 'Asterion').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  const capacity = product.capacity || '';
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='360' height='220' viewBox='0 0 360 220'>
    <rect width='100%' height='100%' fill='${'#1E1E1E'}'/>
    <rect x='16' y='16' width='328' height='188' rx='10' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.03)' />
    <text x='26' y='70' font-family='Poppins, Arial' font-size='20' fill='${'#FF8C00'}' font-weight='700'>${title}</text>
    <text x='26' y='102' font-family='Poppins, Arial' font-size='16' fill='${'#F4F4F4'}'>${capacity}</text>
    <rect x='26' y='130' width='120' height='36' rx='6' fill='${'#FF8C00'}' />
    <text x='86' y='154' font-family='Poppins, Arial' font-size='14' fill='${'#0B0B0B'}' font-weight='700' text-anchor='middle'>ASTERION</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Ensure every battery product has a concrete image assigned
batteryProducts.forEach(p => {
  // Assign computed image if the current image is a generic placeholder
  p.image = getProductImage(p);
});

// Reconcile images by asking the server for files in assets/images; map product.image where possible
async function reconcileImages(){
  try{
    const res = await fetch('/api/images');
    if(!res.ok) throw new Error('Failed to fetch image list');
    const data = await res.json();
    const files = (data.images || []).map(f => f.toLowerCase());

    const norm = s => s ? s.toLowerCase().replace(/[^a-z0-9]/g,'') : '';

    function findMatchForProduct(p){
      // prefer explicit image path
      if(p.image && p.image.startsWith('assets/images/')){
        const fname = p.image.split('/').pop().toLowerCase();
        if(files.includes(fname)) return 'assets/images/' + fname;
      }
      // try by id
      const idKey = norm(p.id);
      const nameKey = norm(p.name);
      // exact filename matches
      for(const f of files){ if(f.indexOf(idKey) !== -1 && idKey.length > 2) return 'assets/images/' + f; }
      // name includes
      for(const f of files){ if(nameKey && f.indexOf(nameKey.slice(0,8)) !== -1) return 'assets/images/' + f; }
      // best-effort: match numeric tokens like '1204'
      const m = (p.name || '').match(/\b(\d{3,4})\b/);
      if(m){ for(const f of files){ if(f.indexOf(m[1]) !== -1) return 'assets/images/' + f; } }
      return null;
    }

    const allProducts = [].concat(kidsProducts||[]).concat(batteryProducts||[]).concat(tanksProducts||[]).concat(carPartsProducts||[]).concat(clancyProperties||[]);
    let updated = 0;
    allProducts.forEach(p => {
      const match = findMatchForProduct(p);
      if(match && (!p.image || !p.image.startsWith('assets/images/'))){ p.image = match; updated++; }
    });
    console.log('[reconcileImages] matched', updated, 'products to local assets');
  }catch(e){
    console.warn('[reconcileImages] could not reconcile images', e);
  }
}

function auditBatteryImages(){
  const summary = batteryProducts.map(p => {
    const hasLocal = /assets\/images\//i.test(p.image);
    return { id: p.id, name: p.name, image: hasLocal ? p.image : 'generated/placeholder' };
  });
  console.log('[auditBatteryImages] image summary:', summary);
}

function auditAllImages(){
  const all = [].concat(kidsProducts||[]).concat(batteryProducts||[]).concat(tanksProducts||[]).concat(carPartsProducts||[]).concat(clancyProperties||[]);
  const missing = all.filter(p => !(p.image && /assets\/images\//i.test(p.image))).map(p => ({ id:p.id, name:p.name }));
  console.log('[auditAllImages] total products:', all.length, 'missing images:', missing.length, missing.slice(0,20));
  // show a small admin banner on pages
  const div = document.getElementById('adminImageAudit');
  if(!div){
    const d = document.createElement('div'); d.id = 'adminImageAudit'; d.style.cssText = 'position:fixed;left:16px;bottom:16px;padding:8px 12px;background:var(--secondary);color:#000;border-radius:8px;z-index:9999;font-weight:700';
    d.textContent = `Products: ${all.length}. Missing images: ${missing.length}`;
    document.body.appendChild(d);
  } else {
    div.textContent = `Products: ${all.length}. Missing images: ${missing.length}`;
  }
}

let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function saveCart(){
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

/* Rendering */
function createProductSVGDataUrl(product){
  const title = (product.name || 'Asterion').replace(/&/g,'&amp;').replace(/"/g,'&quot;');
  const capacity = product.capacity || '';
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns='http://www.w3.org/2000/svg' width='360' height='220' viewBox='0 0 360 220'>
    <rect width='100%' height='100%' fill='${'#1E1E1E'}'/>
    <rect x='16' y='16' width='328' height='188' rx='10' fill='rgba(255,255,255,0.02)' stroke='rgba(255,255,255,0.03)' />
    <text x='26' y='70' font-family='Poppins, Arial' font-size='20' fill='${'#FF8C00'}' font-weight='700'>${title}</text>
    <text x='26' y='102' font-family='Poppins, Arial' font-size='16' fill='${'#F4F4F4'}'>${capacity}</text>
    <rect x='26' y='130' width='120' height='36' rx='6' fill='${'#FF8C00'}' />
    <text x='86' y='154' font-family='Poppins, Arial' font-size='14' fill='${'#0B0B0B'}' font-weight='700' text-anchor='middle'>ASTERION</text>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

function createProductCard(product, type){
  // ensure product.image exists and is resolved
  if(!product.image) product.image = getProductImage(product);

  const div = document.createElement('div');
  div.className = 'card';
  if(product.isGallery) div.classList.add('gallery');

  // Small badge for featured/gallery items
  const badgeHtml = product.isGallery ? `<div class="badge">Featured kit</div>` : '';

  // Compose meta and specs for different product types
  let metaText = '';
  let specsText = '';
  if(type === 'kids'){
    metaText = product.age ? (product.age + ' • ' + product.battery) : product.battery;
    specsText = product.safety || '';
  } else if(type === 'tanks'){
    metaText = product.capacity;
    specsText = product.specs || '';
  } else if(type === 'parts'){
    metaText = product.terminal || '';
    specsText = product.specs || product.terminal || '';
  } else if(type === 'properties' || type === 'clancy'){
    metaText = product.location || '';
    specsText = (product.type ? (product.type.charAt(0).toUpperCase() + product.type.slice(1)) + ' • ' : '') + (product.specs || '');
  } else {
    metaText = (product.voltage ? product.voltage + ' • ' : '') + (product.capacity || '');
    specsText = product.terminal || '';
  }

  const priceLabel = (typeof product.price === 'number' && product.price > 0) ? `P${product.price}` : 'Call for quote';

  // small convenience: show condition and rating if provided
  const condLabel = product.condition ? `<div class="small">${product.condition}</div>` : '';
  const ratingLabel = product.rating ? `<div class="small">${product.rating.toFixed(1)} ★ (${product.reviews || 0})</div>` : '';

  // short meta for list view
  const shortMeta = `<div style="display:flex;gap:12px;align-items:center"><div class="price">${priceLabel}</div>${condLabel}${ratingLabel}</div>`;

  div.innerHTML = `
    ${badgeHtml}
    <img src="${getProductImage(product)}" alt="${product.name}">
    <div>
      <h4>${product.name}</h4>
      <div class="meta">
        <div class="small">${metaText}</div>
        <div class="price">${priceLabel}</div>
      </div>
      <p class="specs">${specsText}</p>
      <div class="actions">
        <button class="btn" data-action="add" data-id="${product.id}">Add to Cart</button>
        <button class="btn btn-outline" data-action="view" data-id="${product.id}">View</button>
      </div>
      <div class="card-foot" style="display:flex;gap:8px;margin-top:8px;align-items:center">${condLabel}${ratingLabel}</div>
    </div>
  `;

  // If the image 404s (file missing), replace with an SVG data-url that contains the product name and capacity
  const img = div.querySelector('img');
  if(img){
    console.log('[createProductCard] image src for', product.id, '=>', img.src);
    img.onerror = function(){
      console.warn('[createProductCard] image failed to load, using placeholder for', product.id, img.src);
      this.onerror = null;
      this.src = createProductSVGDataUrl(product);
      this.style.objectFit = 'cover';
    };
    // In some browsers the image may be cached as failed — explicitly check naturalWidth
    setTimeout(()=>{
      if(!img.naturalWidth){
        console.warn('[createProductCard] image appears missing (naturalWidth=0) for', product.id, img.src);
        img.src = createProductSVGDataUrl(product);
      }
    }, 300);

    // Add a dataset for quick debugging
    img.dataset.productId = product.id;
  }

  return div;
}

function renderProducts(){
  console.log('[renderProducts] start');
  const viewMode = localStorage.getItem('viewMode') || 'grid';
  const kidsGrid = document.getElementById('kidsGrid');
  const batteriesGrid = document.getElementById('batteriesGrid');

  // inject view toggle controls and page filters next to grids on pages
  ['kidsGrid','batteriesGrid','tanksGrid','carPartsGrid','clancyGrid'].forEach(gid => {
    const grid = document.getElementById(gid);
    if(!grid) return;
    const parent = grid.parentNode;
    if(!parent) return;

    // view toggle
    let ctl = parent.querySelector('.view-toggle');
    if(!ctl){
      ctl = document.createElement('div'); ctl.className = 'view-toggle'; ctl.style.marginBottom = '8px';
      ctl.innerHTML = `<button class="btn-ghost small" data-view="grid">Grid</button> <button class="btn-ghost small" data-view="list">List</button> <button class="btn-ghost small" data-view="gallery">Gallery</button>`;
      parent.insertBefore(ctl, grid);
      ctl.querySelectorAll('button').forEach(btn => btn.addEventListener('click', (e)=>{ const v = e.currentTarget.dataset.view; localStorage.setItem('viewMode', v); renderProducts(); }));
    }
    // highlight selected
    ctl.querySelectorAll('button').forEach(b=> b.style.opacity = (b.dataset.view === viewMode) ? '1' : '0.6');

    // page filters (condition, location, sort)
    let pf = parent.querySelector('.page-filters');
    if(!pf){
      pf = document.createElement('div'); pf.className = 'page-filters'; pf.style.marginBottom = '10px';
      pf.innerHTML = `
        <label style="margin-right:10px">Condition
          <select class="page-filter-condition"><option value="">All</option><option value="new">New</option><option value="used">Used</option></select>
        </label>
        <label style="margin-right:10px">Location
          <select class="page-filter-location"><option value="">Any</option><option value="Gaborone">Gaborone</option><option value="Francistown">Francistown</option></select>
        </label>
        <label style="margin-right:10px">Sort
          <select class="page-sort"><option value="best">Best match</option><option value="price_asc">Price: low to high</option><option value="price_desc">Price: high to low</option><option value="newest">Newest</option></select>
        </label>
      `;
      parent.insertBefore(pf, grid);
      pf.querySelectorAll('select').forEach(s => s.addEventListener('change', renderProducts));
    }
  });

  if(kidsGrid){
    kidsGrid.innerHTML = '';
    let list = applyKidsFilter(kidsProducts);
    const parentK = kidsGrid.parentNode;
    if(parentK){
      const pf = parentK.querySelector('.page-filters');
      if(pf){
        const cond = pf.querySelector('.page-filter-condition').value;
        const loc = pf.querySelector('.page-filter-location').value;
        const sort = pf.querySelector('.page-sort').value;
        if(cond) list = list.filter(p => (p.condition || 'new').toLowerCase() === cond);
        if(loc) list = list.filter(p => (p.location || '').toLowerCase().indexOf(loc.toLowerCase()) !== -1);
        if(sort === 'price_asc') list.sort((a,b)=>(a.price||0)-(b.price||0));
        else if(sort === 'price_desc') list.sort((a,b)=>(b.price||0)-(a.price||0));
        else if(sort === 'newest') list = list.slice().reverse();
      }
    }
    console.log('[renderProducts] kids to render:', list.length);
    list.forEach(p => {
      if(viewMode === 'list') kidsGrid.appendChild(createProductListItem(p,'kids'));
      else kidsGrid.appendChild(createProductCard(p, 'kids'));
    });

    (function(){
      const id = 'kidsDebugBanner';
      let b = document.getElementById(id);
      const txt = `Kids: ${list.length} — sample: ${list.slice(0,5).map(p=>p.id).join(', ')}`;
      if(!b){ b = document.createElement('div'); b.id = id; b.style.cssText = 'margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.15);color:#fff;border-radius:6px;font-size:13px'; kidsGrid.parentNode.insertBefore(b, kidsGrid); }
      b.textContent = txt;
    })();

    if(list.length === 0){
      kidsGrid.innerHTML = `<div class="empty" style="padding:24px;color:#fff;background:rgba(255,255,255,0.02);border-radius:8px">No kids products found</div>`;
    } else if(list.length > 0 && kidsGrid.childElementCount === 0){
      // Textual fallback when cards aren't visible (CSS/image issue)
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      list.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price} <div style="font-size:13px;color:var(--muted)">${p.specs || p.age || ''}</div>`; ul.appendChild(li); });
      kidsGrid.appendChild(ul);
    }
  }

  if(batteriesGrid){
    batteriesGrid.innerHTML = '';
    let list = applyBatteryFilter(batteryProducts);
    // apply page filters if present
    const parentB = batteriesGrid.parentNode;
    if(parentB){
      const pf = parentB.querySelector('.page-filters');
      if(pf){
        const cond = pf.querySelector('.page-filter-condition').value;
        const loc = pf.querySelector('.page-filter-location').value;
        const sort = pf.querySelector('.page-sort').value;
        if(cond) list = list.filter(p => (p.condition || 'new').toLowerCase() === cond);
        if(loc) list = list.filter(p => (p.location || '').toLowerCase().indexOf(loc.toLowerCase()) !== -1);
        if(sort === 'price_asc') list.sort((a,b)=>(a.price||0)-(b.price||0));
        else if(sort === 'price_desc') list.sort((a,b)=>(b.price||0)-(a.price||0));
        else if(sort === 'newest') list = list.slice().reverse();
      }
    }
    console.log('[renderProducts] batteries to render:', list.length);
    list.forEach(p => {
      if(viewMode === 'list') batteriesGrid.appendChild(createProductListItem(p,'batt'));
      else if(viewMode === 'gallery'){
        const c = createProductCard(p,'batt'); c.classList.add('gallery'); batteriesGrid.appendChild(c);
      } else batteriesGrid.appendChild(createProductCard(p, 'batt'));
    });

    // Update debug panel with image status
    const dbg = document.getElementById('batteryDebug');
    if(dbg){
      const rows = list.map(p=>{
        const src = getProductImage(p);
        const status = /assets\/images\/asterion-ct/i.test(src) ? 'local' : (src.startsWith('data:') ? 'generated' : 'other');
        return `${p.id} → ${status}`;
      });
      dbg.textContent = `Products: ${list.length}. Image status: ${rows.join(' | ')}`;
    }

    // Visible debug banner (created if missing) next to the grid
    (function(){
      const id = 'batteriesDebugBanner';
      let b = document.getElementById(id);
      const txt = `Batteries: ${list.length} — sample: ${list.slice(0,5).map(p=>p.id).join(', ')}`;
      if(!b){ b = document.createElement('div'); b.id = id; b.style.cssText = 'margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.25);color:#fff;border-radius:6px;font-size:13px'; batteriesGrid.parentNode.insertBefore(b, batteriesGrid); }
      b.textContent = txt;
    })();

    if(list.length === 0){
      batteriesGrid.innerHTML = `<div class="empty" style="padding:24px;color:#fff;background:rgba(255,255,255,0.02);border-radius:8px">No batteries found</div>`;
    } else if(list.length > 0 && batteriesGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      list.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price}`; ul.appendChild(li); });
      batteriesGrid.appendChild(ul);
    } else if(list.length > 0 && batteriesGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      list.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price} <div style="font-size:13px;color:var(--muted)">${p.capacity || ''}</div>`; ul.appendChild(li); });
      batteriesGrid.appendChild(ul);
    }
  }

  const tanksGrid = document.getElementById('tanksGrid');
  if(tanksGrid){
    tanksGrid.innerHTML = '';
    const tlist = (tanksProducts || []);
    console.log('[renderProducts] tanks to render:', tlist.length);
    tlist.forEach(p => {
      if(viewMode === 'list') tanksGrid.appendChild(createProductListItem(p,'tanks'));
      else tanksGrid.appendChild(createProductCard(p, 'tanks'));
    });

    (function(){
      const id = 'tanksDebugBanner';
      let b = document.getElementById(id);
      const txt = `Tanks: ${tlist.length} — sample: ${tlist.slice(0,5).map(p=>p.id).join(', ')}`;
      if(!b){ b = document.createElement('div'); b.id = id; b.style.cssText = 'margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.15);color:#fff;border-radius:6px;font-size:13px'; tanksGrid.parentNode.insertBefore(b, tanksGrid); }
      b.textContent = txt;
    })();

    if(tlist.length === 0){
      tanksGrid.innerHTML = `<div class="empty" style="padding:24px;color:#fff;background:rgba(255,255,255,0.02);border-radius:8px">No tanks found</div>`;
    } else if(tlist.length > 0 && tanksGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      tlist.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price}`; ul.appendChild(li); });
      tanksGrid.appendChild(ul);
    } else if(tlist.length > 0 && tanksGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      tlist.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price} <div style="font-size:13px;color:var(--muted)">${p.specs || ''}</div>`; ul.appendChild(li); });
      tanksGrid.appendChild(ul);
    }
  }

  const partsGrid = document.getElementById('carPartsGrid');
  if(partsGrid){
    partsGrid.innerHTML = '';
    let listParts = applyPartsFilter(carPartsProducts || []);
    const parentP = partsGrid.parentNode;
    if(parentP){
      const pf = parentP.querySelector('.page-filters');
      if(pf){
        const cond = pf.querySelector('.page-filter-condition').value;
        const loc = pf.querySelector('.page-filter-location').value;
        const sort = pf.querySelector('.page-sort').value;
        if(cond) listParts = listParts.filter(p => (p.condition || 'used').toLowerCase() === cond);
        if(loc) listParts = listParts.filter(p => (p.location || '').toLowerCase().indexOf(loc.toLowerCase()) !== -1);
        if(sort === 'price_asc') listParts.sort((a,b)=>(a.price||0)-(b.price||0));
        else if(sort === 'price_desc') listParts.sort((a,b)=>(b.price||0)-(a.price||0));
        else if(sort === 'newest') listParts = listParts.slice().reverse();
      }
    }
    console.log('[renderProducts] parts to render:', listParts.length);
    listParts.forEach(p => {
      if(viewMode === 'list') partsGrid.appendChild(createProductListItem(p,'parts'));
      else partsGrid.appendChild(createProductCard(p, 'parts'));
    });

    (function(){
      const id = 'partsDebugBanner';
      let b = document.getElementById(id);
      const txt = `Parts: ${listParts.length} — sample: ${listParts.slice(0,5).map(p=>p.id).join(', ')}`;
      if(!b){ b = document.createElement('div'); b.id = id; b.style.cssText = 'margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.15);color:#fff;border-radius:6px;font-size:13px'; partsGrid.parentNode.insertBefore(b, partsGrid); }
      b.textContent = txt;
    })();

    if(listParts.length === 0){
      partsGrid.innerHTML = `<div class="empty" style="padding:24px;color:#fff;background:rgba(255,255,255,0.02);border-radius:8px">No car parts found</div>`;
    } else if(listParts.length > 0 && partsGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      listParts.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price}`; ul.appendChild(li); });
      partsGrid.appendChild(ul);
    } else if(listParts.length > 0 && partsGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      listParts.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price} <div style="font-size:13px;color:var(--muted)">${p.specs || ''}</div>`; ul.appendChild(li); });
      partsGrid.appendChild(ul);
    }
  }

  const clancyGrid = document.getElementById('clancyGrid');
  if(clancyGrid){
    clancyGrid.innerHTML = '';
    let listClancy = applyClancyFilter(clancyProperties || []);
    const parentC = clancyGrid.parentNode;
    if(parentC){
      const pf = parentC.querySelector('.page-filters');
      if(pf){
        const cond = pf.querySelector('.page-filter-condition').value;
        const loc = pf.querySelector('.page-filter-location').value;
        const sort = pf.querySelector('.page-sort').value;
        if(cond) listClancy = listClancy.filter(p => (p.type || 'sale').toLowerCase() === cond);
        if(loc) listClancy = listClancy.filter(p => (p.location || '').toLowerCase().indexOf(loc.toLowerCase()) !== -1);
        if(sort === 'price_asc') listClancy.sort((a,b)=>(a.price||0)-(b.price||0));
        else if(sort === 'price_desc') listClancy.sort((a,b)=>(b.price||0)-(a.price||0));
        else if(sort === 'newest') listClancy = listClancy.slice().reverse();
      }
    }
    console.log('[renderProducts] clancy to render:', listClancy.length);
    listClancy.forEach(p => {
      if(viewMode === 'list') clancyGrid.appendChild(createProductListItem(p,'properties'));
      else clancyGrid.appendChild(createProductCard(p, 'properties'));
    });

    (function(){
      const id = 'clancyDebugBanner';
      let b = document.getElementById(id);
      const txt = `Properties: ${listClancy.length} — sample: ${listClancy.slice(0,5).map(p=>p.id).join(', ')}`;
      if(!b){ b = document.createElement('div'); b.id = id; b.style.cssText = 'margin-bottom:12px;padding:8px;background:rgba(0,0,0,0.15);color:#fff;border-radius:6px;font-size:13px'; clancyGrid.parentNode.insertBefore(b, clancyGrid); }
      b.textContent = txt;
    })();

    if(listClancy.length === 0){
      clancyGrid.innerHTML = `<div class="empty" style="padding:24px;color:#fff;background:rgba(255,255,255,0.02);border-radius:8px">No properties found</div>`;
    } else if(listClancy.length > 0 && clancyGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      listClancy.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price}`; ul.appendChild(li); });
      clancyGrid.appendChild(ul);
    } else if(listClancy.length > 0 && clancyGrid.childElementCount === 0){
      const ul = document.createElement('ul'); ul.style.listStyle='none'; ul.style.padding='12px'; ul.style.margin='0';
      listClancy.forEach(p => { const li = document.createElement('li'); li.style.padding='8px 0'; li.innerHTML = `<strong>${p.name}</strong> — P${p.price} <div style="font-size:13px;color:var(--muted)">${p.specs || p.location || ''}</div>`; ul.appendChild(li); });
      clancyGrid.appendChild(ul);
    }
  }

  // Attach filter listeners (idempotent behavior)
  const fb = document.getElementById('filterBattery'); if(fb) fb.onchange = renderProducts;
  const fp = document.getElementById('filterPrice'); if(fp) fp.onchange = renderProducts;
  const fc = document.getElementById('filterCapacity'); if(fc) fc.onchange = renderProducts;
  const fbp = document.getElementById('filterBatteryPrice'); if(fbp) fbp.onchange = renderProducts;
  const fpc = document.getElementById('filterPartCategory'); if(fpc) fpc.onchange = renderProducts;
  const fpp = document.getElementById('filterPartPrice'); if(fpp) fpp.onchange = renderProducts;
  const fct = document.getElementById('filterClancyType'); if(fct) fct.onchange = renderProducts;
  const fcp = document.getElementById('filterClancyPrice'); if(fcp) fcp.onchange = renderProducts;

  // Debug overlay: show counts of available products so we can root-cause missing display
  try{
    const debug = document.getElementById('debugSummary') || (() => {
      const d = document.createElement('div'); d.id = 'debugSummary'; d.style.position = 'fixed'; d.style.right = '12px'; d.style.bottom = '12px'; d.style.background = 'rgba(0,0,0,0.7)'; d.style.color = '#fff'; d.style.padding = '10px 12px'; d.style.borderRadius = '8px'; d.style.zIndex = '9999'; d.style.fontSize = '13px'; document.body.appendChild(d); return d;
    })();
    const kidsCount = (applyKidsFilter(kidsProducts) || []).length;
    const battCount = (applyBatteryFilter(batteryProducts) || []).length;
    const partsCount = (applyPartsFilter(carPartsProducts) || []).length;
    const clancyCount = (applyClancyFilter(clancyProperties) || []).length;
    debug.innerHTML = `<strong>Products</strong><br>Kids: ${kidsCount} <br>Batteries: ${battCount} <br>Parts: ${partsCount} <br>Properties: ${clancyCount}`;
  }catch(e){ console.warn('Debug overlay failed', e); }
}

function applyKidsFilter(list){
  const fv = document.getElementById('filterBattery');
  const fp = document.getElementById('filterPrice');
  let out = list.slice();
  if(fv && fv.value){
    const v = parseInt(fv.value,10);
    out = out.filter(p => p.batteryVolt === v);
  }
  if(fp && fp.value){
    const max = parseInt(fp.value,10);
    out = out.filter(p => p.price <= max);
  }
  return out;
}

function applyBatteryFilter(list){
  const fc = document.getElementById('filterCapacity');
  const fp = document.getElementById('filterBatteryPrice');
  let out = list.slice();
  if(fc && fc.value){
    const min = parseInt(fc.value,10);
    out = out.filter(p => p.capacityNumber >= min);
  }
  if(fp && fp.value){
    const max = parseInt(fp.value,10);
    out = out.filter(p => p.price <= max);
  }
  return out;
}

function applyPartsFilter(list){
  const fc = document.getElementById('filterPartCategory');
  const fp = document.getElementById('filterPartPrice');
  let out = (list || []).slice();
  if(fc && fc.value && fc.value !== 'all'){
    const v = fc.value.toLowerCase();
    out = out.filter(p => (p.terminal || '').toLowerCase().indexOf(v) !== -1);
  }
  if(fp && fp.value){
    const max = parseInt(fp.value,10);
    out = out.filter(p => p.price <= max);
  }
  return out;
}

function applyClancyFilter(list){
  const ft = document.getElementById('filterClancyType');
  const fp = document.getElementById('filterClancyPrice');
  let out = (list || []).slice();
  if(ft && ft.value && ft.value !== 'all'){
    const v = ft.value.toLowerCase();
    out = out.filter(p => (p.type || '').toLowerCase() === v);
  }
  if(fp && fp.value){
    const max = parseInt(fp.value,10);
    out = out.filter(p => p.price <= max);
  }
  return out;
}

/* Cart functions */
function addToCartById(id){
  const product = kidsProducts.concat(batteryProducts).concat(tanksProducts || []).concat(carPartsProducts || []).concat(clancyProperties || []).find(p => p.id === id);
  if(!product) return;

  const existing = cart.find(i => i.id === id);
  if(existing){ existing.qty += 1; }
  else { cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 }); }

  saveCart();
}

function removeFromCart(id){
  cart = cart.filter(i => i.id !== id);
  saveCart();
}

function clearCart(){ cart = []; saveCart(); }

function formatCurrency(amount){ return `P${amount}`; }

function renderCart(){
  const cartItems = document.getElementById('cartItems');
  const totalDisplay = document.getElementById('total');
  const cartCount = document.getElementById('cartCount');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item =>{
    const li = document.createElement('li');
    li.innerHTML = `<span>${item.name} x ${item.qty}</span> <span>${formatCurrency(item.price*item.qty)}</span> <button class="btn-ghost small" data-action="remove" data-id="${item.id}">Remove</button>`;
    cartItems.appendChild(li);
    total += item.price * item.qty;
  });

  totalDisplay.textContent = formatCurrency(total);
  cartCount.textContent = cart.reduce((s,i) => s + i.qty, 0);
}

/* Modal */
function openModalFor(product){
  // ensure the product has an image
  if(!product.image) product.image = getProductImage(product);
  const modal = document.getElementById('productModal');
  const body = document.getElementById('modalBody');
  let html = `
    <div style="display:flex;gap:18px;align-items:flex-start;flex-wrap:wrap">
      <img src="${getProductImage(product)}" alt="${product.name}" style="width:320px;height:200px;object-fit:cover;border-radius:8px">
      <div style="flex:1">
        <h3>${product.name}</h3>
        <p class="lead">P${product.price}</p>
        <ul>
          ${product.age ? `<li><strong>Age:</strong> ${product.age}</li>` : ''}
          ${product.battery ? `<li><strong>Battery:</strong> ${product.battery}</li>` : ''}
          ${product.safety ? `<li><strong>Safety:</strong> ${product.safety}</li>` : ''}
          ${product.voltage ? `<li><strong>Voltage:</strong> ${product.voltage}</li>` : ''}
          ${product.capacity ? `<li><strong>Capacity:</strong> ${product.capacity}</li>` : ''}
        </ul>
        <div style="display:flex;gap:8px;margin-top:8px">
          <input type="number" id="modalQty" value="1" min="1" style="width:80px;padding:8px;border-radius:8px;border:1px solid #e6eefc">
          <button id="modalAdd" class="btn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
  body.innerHTML = html;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');

  document.getElementById('modalAdd').addEventListener('click', ()=>{
    const qty = parseInt(document.getElementById('modalQty').value,10) || 1;
    for(let i=0;i<qty;i++) addToCartById(product.id);
    closeModal();
    openCart();
  });
}

function closeModal(){
  const modal = document.getElementById('productModal');
}

// Create compact list item for list view
function createProductListItem(product,type){
  const li = document.createElement('div');
  li.className = 'list-item';
  li.innerHTML = `
    <a href="product.html?id=${encodeURIComponent(product.id)}" style="display:flex;gap:12px;align-items:center;text-decoration:none;color:inherit">
      <img src="${product.image || getProductImage(product)}" alt="${product.name}" style="width:120px;height:80px;object-fit:cover;border-radius:6px">
      <div style="flex:1">
        <h4 style="margin:0 0 6px">${product.name}</h4>
        ${shortMeta}
        <div style="font-size:13px;color:var(--muted);margin-top:6px">${product.specs || product.location || ''}</div>
      </div>
      <div style="min-width:90px;text-align:right">
        <button class="btn" data-action="add" data-id="${product.id}">Add</button>
      </div>
    </a>
  `;
  // attach click handlers for delegated events to work
  return li;
}
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

/* Cart Drawer */
function openCart(){
  const drawer = document.getElementById('cartDrawer');
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  document.getElementById('cartButton').setAttribute('aria-expanded','true');
}
function closeCart(){
  const drawer = document.getElementById('cartDrawer');
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  document.getElementById('cartButton').setAttribute('aria-expanded','false');
}

/* Event Delegation */
document.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;
  const id = el.dataset.id;

  if(action === 'add' && id){ addToCartById(id); openCart(); }
  if(action === 'view' && id){
    const product = kidsProducts.concat(batteryProducts).concat(tanksProducts || []).concat(carPartsProducts || []).concat(clancyProperties || []).find(p=>p.id===id);
    if(product) openModalFor(product);
  }
  if(action === 'remove' && id){ removeFromCart(id); }
});

// Header cart button
const cartBtn = document.getElementById('cartButton');
if(cartBtn) {
  cartBtn.addEventListener('click', ()=>{
    const drawer = document.getElementById('cartDrawer');
    if(drawer.classList.contains('open')) closeCart(); else openCart();
  });
}

// Close cart
const closeCartBtn = document.getElementById('closeCart');
if(closeCartBtn) {
  closeCartBtn.addEventListener('click', closeCart);
}

// Close modal
const closeModalBtn = document.getElementById('closeModal');
if(closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}

// Clear cart
const clearCartBtn = document.getElementById('clearCart');
if(clearCartBtn) {
  clearCartBtn.addEventListener('click', ()=>{ if(confirm('Clear cart?')) clearCart(); });
}

// Checkout link: navigate to checkout page, but prevent navigation when cart is empty
const checkoutEl = document.getElementById('checkout');
if(checkoutEl){
  checkoutEl.addEventListener('click', (e)=>{
    if(cart.length === 0){
      e.preventDefault();
      alert('Your cart is empty. Add items before checking out.');
      return;
    }
    // allow navigation to checkout.html if there are items
  });
}

// Close modal on background click
const productModal = document.getElementById('productModal');
if(productModal) {
  productModal.addEventListener('click', (e)=>{ if(e.target.id === 'productModal') closeModal(); });
}

// Keyboard accessibility
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape'){ closeModal(); closeCart(); } });

// Product detail renderer (for product.html)
function renderProductDetail(){
  const el = document.getElementById('productDetail');
  if(!el) {
    console.error('productDetail element not found');
    return;
  }
  
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  console.log('[renderProductDetail] ID:', id);
  
  if(!id){
    el.innerHTML = '<div class="product-header"><h1>No Product Selected</h1></div>';
    return;
  }
  
  const product = kidsProducts.concat(batteryProducts).concat(tanksProducts || []).concat(carPartsProducts || []).concat(clancyProperties || []).find(p => p.id === id);
  console.log('[renderProductDetail] Found product:', product);
  
  if(!product){ 
    el.innerHTML = '<div class="product-header"><h1>Product Not Found</h1></div>';
    return; 
  }

  const specs = product.safety || product.battery || product.specs || product.terminal || 'Premium quality product';
  
  const html = '<div class="product-header"><h1>' + product.name + '</h1></div>' +
    '<div class="product-wrapper">' +
      '<div class="product-grid">' +
        '<div>' +
          '<img src="' + (product.image || getProductImage(product)) + '" alt="' + product.name + '" class="product-image">' +
        '</div>' +
        '<div class="product-info">' +
          '<h2>' + product.name + '</h2>' +
          '<div class="price-box">' +
            '<div class="price">P' + product.price.toLocaleString() + '</div>' +
          '</div>' +
          '<div class="details-box">' +
            '<h3>Product Details</h3>' +
            '<p>' + specs + '</p>' +
          '</div>' +
          '<div class="action-bar">' +
            '<input type="number" id="detailQty" class="qty-input" value="1" min="1" max="10">' +
            '<button id="detailAdd" class="btn-add">Add to Cart</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  
  console.log('[renderProductDetail] Setting innerHTML');
  el.innerHTML = html;

  const addBtn = document.getElementById('detailAdd');
  if(addBtn) {
    addBtn.addEventListener('click', function(){
      const qty = parseInt(document.getElementById('detailQty').value) || 1;
      for(let i=0; i<qty; i++) addToCartById(product.id);
      alert('Added ' + qty + ' to cart!');
      window.location.href = 'checkout.html';
    });
  }
}

// Mobile helper: add 'Open on Mobile' button and modal
function createMobileLink() {
  try {
    const nav = document.querySelector('.main-nav');
    if(!nav) return;
    if(document.getElementById('openOnMobileButton')) return; // already added

    const btn = document.createElement('button');
    btn.id = 'openOnMobileButton';
    btn.className = 'btn-ghost';
    btn.textContent = 'Open on Mobile';
    btn.addEventListener('click', openMobileModal);
    nav.appendChild(btn);
  } catch(e){ console.error('[createMobileLink]', e) }
}

function detectLocalIPs(callback) {
  // Use WebRTC to gather candidate IPs (works in many browsers)
  const ips = new Set();
  const pc = new RTCPeerConnection({iceServers:[]});
  pc.createDataChannel('');
  pc.createOffer().then(sdp => pc.setLocalDescription(sdp)).catch(()=>{});
  pc.onicecandidate = (e) => {
    if(!e || !e.candidate) {
      try{ pc.close() }catch(_){}
      callback(Array.from(ips));
      return;
    }
    const parts = e.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3})/g);
    if(parts) parts.forEach(ip=>ips.add(ip));
  };
  // Fallback timeout
  setTimeout(()=>{ try{ pc.close() }catch(_){ } ; callback(Array.from(ips)); }, 1500);
}

function choosePrivateIP(ips){
  if(!ips || !ips.length) return null;
  // prefer commonly-used private ranges
  const sorted = ips.slice().sort();
  const pick = sorted.find(ip=>ip.startsWith('192.') || ip.startsWith('10.') || ip.startsWith('172.'));
  return pick || sorted[0];
}

function openMobileModal(){
  // Create modal if missing
  let mm = document.getElementById('mobileModal');
  if(!mm){
    mm = document.createElement('div');
    mm.id = 'mobileModal';
    mm.className = 'modal';
    mm.setAttribute('role','dialog');
    mm.setAttribute('aria-modal','true');
    mm.innerHTML = '<div class="modal-content"><button class="modal-close" id="closeMobileModal" aria-label="Close mobile modal">✕</button><div id="mobileModalBody" style="min-width:260px"></div></div>';
    document.body.appendChild(mm);
    document.getElementById('closeMobileModal').addEventListener('click', ()=>{ mm.classList.remove('open');});
  }
  mm.classList.add('open');
  const body = document.getElementById('mobileModalBody');
  body.innerHTML = '<h3>Open this site on your phone</h3><p>Detecting your computer\'s local IP. If detection fails, manually enter your machine IP (e.g., <code>192.168.1.5</code>) in the box below and tap the link or scan the QR code.</p><div style="margin-top:10px"><label style="font-weight:700">URL</label><div style="display:flex;gap:8px;margin-top:6px"><input id="mobileUrlInput" style="flex:1;padding:8px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);font-size:14px" readonly><button id="copyMobileUrl" class="btn-ghost">Copy</button></div></div><div id="mobileQrWrap" style="margin-top:12px;display:flex;gap:12px;align-items:center"></div><p style="margin-top:12px;color:var(--muted);font-size:13px">If your phone cannot reach the URL, ensure your device is on the same Wi-Fi network and that your server is listening on all interfaces (not just localhost).</p>'; 

  const input = document.getElementById('mobileUrlInput');
  const copyBtn = document.getElementById('copyMobileUrl');
  copyBtn.addEventListener('click', function(){
    const url = input.value;
    if(!url) return;
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(url).then(()=>{ alert('URL copied to clipboard. Paste it in your phone browser.'); });
    } else {
      input.select(); document.execCommand('copy'); alert('URL copied to clipboard.');
    }
  });

  // Build a URL once we have a usable IP
  const buildUrl = (ip)=>{
    const protocol = window.location.protocol;
    const port = window.location.port ? (':' + window.location.port) : '';
    return protocol + '//' + ip + port + window.location.pathname + window.location.search;
  };

  // Attempt detection
  detectLocalIPs(function(ips){
    let ip = choosePrivateIP(ips);
    if(!ip){
      // fallback: try hostname if looks like an IP
      const h = window.location.hostname;
      if(h && h !== 'localhost' && h !== '127.0.0.1') ip = h;
    }

    const url = ip ? buildUrl(ip) : '';
    input.value = url || '';

    const qrWrap = document.getElementById('mobileQrWrap');
    qrWrap.innerHTML = '';
    if(url){
      const link = document.createElement('a');
      link.href = url; link.textContent = 'Open on this device'; link.className = 'btn'; link.style.display = 'inline-block'; link.target = '_blank';
      const qr = document.createElement('img');
      qr.alt = 'QR code';
      qr.style.width = '140px';
      qr.style.height = '140px';
      // Use public QR API
      qr.src = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(url);
      qrWrap.appendChild(link);
      qrWrap.appendChild(qr);
    } else {
      const msg = document.createElement('div');
      msg.innerHTML = '<div style="color:var(--muted)">Could not detect local IP. You can find it by running <code>ipconfig</code> (Windows) or <code>ifconfig</code>/<code>ip a</code> (Mac/Linux) and entering it into the URL above.</div>';
      qrWrap.appendChild(msg);
    }
  });
}

// Quick load check
console.log('[script] script.js loaded');

// Initialise
function init() {
  console.log('[init] Starting initialization');
  console.log('[init] product counts:', { kids: (kidsProducts||[]).length, batteries: (batteryProducts||[]).length, tanks: (tanksProducts||[]).length, parts: (carPartsProducts||[]).length, clancy: (clancyProperties||[]).length });
  renderProducts();
  renderCart();
  setTimeout(function() {
    console.log('[init] Calling renderProductDetail after delay');
    renderProductDetail();
  }, 100);
  // add mobile helper button
  createMobileLink();
  // Attempt to reconcile images on the server and then audit
  reconcileImages().then(()=>{ auditBatteryImages(); auditAllImages(); renderProducts(); }).catch(()=>{ auditBatteryImages(); auditAllImages(); });
}


if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  setTimeout(init, 100);
}
