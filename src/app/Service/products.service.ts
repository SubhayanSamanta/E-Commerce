import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: any = [
    {
      id: "p01",
      pname: "Laptop",
      pdesc1: "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6 inch(39.62cm) FHD Laptop ",
      pdesc2: "(8GB/256GB/SSD/Windows 11/Office 2021/3 Mongths game pass/1.5Kg)GTIN",
      pdesc3: "Order by this week and get free delivary.",
      pprice: 51000,
      pimg: "assets/images/laptop.jpg",
    },
    {
      id: "p02",
      pname: "Mobile",
      pdesc1: "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM",
      pdesc2: "1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
      pdesc3: "Order by this week and get free delivary",
      pprice: 21000,
      pimg: "assets/images/mobile.jpeg",
    },
    {
      id: "p03",
      pname: "LED",
      pdesc1: "Acer 139 cm (55 inches) Advanced",
      pdesc2: "Series 4K Ultra HD Smart LED Google TV AR55GR2851UDFL (Black)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 24000,
      pimg: "assets/images/led.jpg",
    },
    {
      id: "p04",
      pname: "Sound System",
      pdesc1: "Philips Soundbar TAB5305, Wireless Subwoofer, 1.1 Ch.",
      pdesc2: "Bluetooth Enabled, Optical Connectivity, HDMI ARC, 140W, Metal Grill, Powerful Bass (Black)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 14000,
      pimg: "assets/images/sound-system.webp",
    },
    {
      id: "p05",
      pname: "Head Phone",
      pdesc1: "PTron Tangentbeat in-Ear Bluetooth Wireless",
      pdesc2: "Headphones with Mic, Punchy Bass, 10mm Drivers, Clear Calls, Snug-Fit, Fast Charging, Magnetic Buds, Voice Assistant & IPX4 Wireless Neckband (Dark Blue)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 1500,
      pimg: "assets/images/head-phone.jpg",
    },
    {
      id: "p06",
      pname: "Electric Oven",
      pdesc1: "AGARO Marvel Oven Toaster Grill with Motorized Rotisserie & 5 Heating Modes (Black, 25 litres)",
      pdesc2: "Grill with Motorized Rotisserie & 5 Heating Modes (Black, 25 litres)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 2000,
      pimg: "assets/images/electric-oven.jpg",
    },
    {
      id: "p07",
      pname: "Washing Machine",
      pdesc1: "Whirlpool 6 Kg 5 Star Royal Fully-Automatic ",
      pdesc2: "Top Loading Washing Machine (WHITEMAGIC ROYAL 6 GENX, Grey, Hard Water Wash)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 7000,
      pimg: "assets/images/washing-machine.webp",
    },
    {
      id: "p08",
      pname: "Tablet",
      pdesc1: "Lenovo Tab P11 Plus Tablet (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling)",
      pdesc2: "Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TUV Certified Eye Protection",
      pdesc3: "Order by this week and get free delivary",
      pprice: 11000,
      pimg: "assets/images/tablet.jpg",
    },
    {
      id: "p09",
      pname: "Mouse",
      pdesc1: "Logitech M221 Wireless Mouse",
      pdesc2: "Silent Buttons, 2.4 GHz with USB Mini Receiver, 1000 DPI Optical Tracking, 18-Month Battery Life, Ambidextrous PC/Mac/Laptop - Charcoal Grey",
      pdesc3: "Order by this week and get free delivary",
      pprice: 1000,
      pimg: "assets/images/mouse.jpg",
    },
    {
      id: "p10",
      pname: "Keyboard",
      pdesc1: "Logitech K380 Wireless Multi-Device Keyboard for Windows",
      pdesc2: "Apple iOS, Apple Tv Android Or Chrome, Bluetooth, Compact Space-Saving Design, Pc/Mac/Laptop/Smartphone/Tablet (Blue)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 2000,
      pimg: "assets/images/keyboard.webp",
    },
    {
      id: "p11",
      pname: "AC",
      pdesc1: "Lloyd 2.0 Ton 5 Star Inverter Split AC",
      pdesc2: "5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Golden Deco Strip, GLS24I5FWGEV",
      pdesc3: "Order by this week and get free delivary",
      pprice: 30000,
      pimg: "assets/images/air-conditionar.jpg",
    },
    {
      id: "p12",
      pname: "Cooler",
      pdesc1: "HIFRESH Air Cooler for Home",
      pdesc2: "107CM Tower Cooler w/ 3 Speeds & 4 Modes, 12H Timer, LED Touch Screen, 4.1L Water Tank, Remote, 4 Ice Packs, 80W Low Power Consumption Evaporative Air Cooler for Room",
      pdesc3: "Order by this week and get free delivary",
      pprice: 10000,
      pimg: "assets/images/cooler.png",
    },
    {
      id: "p13",
      pname: "Power Bank",
      pdesc1: "Ambrane 27000mAh Power Bank",
      pdesc2: "20W Fast Charging, Triple Output, Type C PD (Input & Output), Quick Charge, Li-Polymer, Multi-Layer Protection for iPhone, Smartphones & Other Devices (Stylo Pro, Black)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 2000,
      pimg: "assets/images/power-bank.webp",
    },
    {
      id: "p14",
      pname: "Monitor",
      pdesc1: "BenQ GW2480 24 inch (60 cm)",
      pdesc2: "1920 x 1080 Pixels IPS Full HD Ultra-Slim Bezel Monitor- Eye Care, Anti-Glare, Brightness Intelligence, Low Blue Light, HDMI, DP, Speakers, VESA Wall Mountable (Black",
      pdesc3: "Order by this week and get free delivary",
      pprice: 21000,
      pimg: "assets/images/monitor.jpg",
    },
    {
      id: "p15",
      pname: "Router",
      pdesc1: "TP-Link TL-WR820N 300 Mbps Single_Band Speed Wireless WiFi Router",
      pdesc2: "Easy Setup, IPv6 Compatible, Supports Parent Control, Guest Network, Multi-Mode Wi-Fi Router",
      pdesc3: "Order by this week and get free delivary",
      pprice: 2000,
      pimg: "assets/images/router.jpg",
    },
    {
      id: "p16",
      pname: "Printer",
      pdesc1: "Canon PIXMA G3770 BK All-in-one (Print, Scan, Copy)",
      pdesc2: "WiFi Inktank Colour Printer (Black 6000 Prints and Colour 7700 Prints) for Home and Office",
      pdesc3: "Order by this week and get free delivary",
      pprice: 15000,
      pimg: "assets/images/printer.png",
    },
    {
      id: "p17",
      pname: "Microphone",
      pdesc1: "JBL Commercial CSHM10 Handheld Dynamic XLR Unidirectional Microphone",
      pdesc2: "With On/Off Switch (Cable Not Included) Black, Medium",
      pdesc3: "Order by this week and get free delivary",
      pprice: 3000,
      pimg: "assets/images/microphone.jpg",
    },
    {
      id: "p18",
      pname: "Camera",
      pdesc1: "CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera",
      pdesc2: "360° with Pan Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance 10mtr | CP-E25A",
      pdesc3: "Order by this week and get free delivary",
      pprice: 47000,
      pimg: "assets/images/camera.jpg",
    },
    {
      id: "p19",
      pname: "Kitchen Chimny",
      pdesc1: "Hindware Smart Appliances Nadia IN 60 cm 1350 m³/hr Stylish Filterless Auto-Clean Kitchen Chimney",
      pdesc2: "With Metallic Oil Collector, Motion Sensor & Touch Control For Easy Operation (Curved Glass, Black)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 14000,
      pimg: "assets/images/kitchen-chimny.jpg",
    },
    {
      id: "p20",
      pname: "DVD Player",
      pdesc1: "PHILIPS EP200 Multi Zone Region Free DVD Player",
      pdesc2: "1080P HDMI - PAL/NTSC Conversion - USB 2.0 - A/V Output & Remote Control",
      pdesc3: "Order by this week and get free delivary",
      pprice: 5000,
      pimg: "assets/images/dvd-player.jpg",
    },
    {
      id: "p21",
      pname: "Projector",
      pdesc1: "EGate i9 Pro-Max, FHD 1080p Native & 4K support, 4500 Lumens (420 ANSI) LED Projector for Home, 210",
      pdesc2: " (533 cm) Max Screen | 3W Inbuilt Speaker | AV, VGA, HDMI, SD Card, USB, Audio Out | (E03i31, Black)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 5000,
      pimg: "assets/images/projector.jpg",
    },
    {
      id: "p22",
      pname: "Web Camera",
      pdesc1: "Lenovo 300 FHD Webcam with Full Stereo Dual Built-in mics",
      pdesc2: "FHD 1080P 2.1 Megapixel CMOS Camera |Ultra-Wide 95 Lens, Digital Zoom | 360 Rotation | Flexible Mount, Cloud Grey",
      pdesc3: "Order by this week and get free delivary",
      pprice: 2000,
      pimg: "assets/images/web-camera.jpg",
    },
    {
      id: "p23",
      pname: "Smart Board",
      pdesc1: "Pragati Systems® Genius Regular Steel (Magnetic) Whiteboard for Office",
      pdesc2: "Home & School (GRMWB6090), Lightweight Aluminium Frame, 2x3 Feet (Pack of 1)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 5000,
      pimg: "assets/images/smart-board.jpg",
    },
    {
      id: "p24",
      pname: "BlueTooth Speaker",
      pdesc1: "JBL Go 2, Wireless Portable Bluetooth Speaker",
      pdesc2: "with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Blue)",
      pdesc3: "Order by this week and get free delivary",
      pprice: 1000,
      pimg: "assets/images/bt-speaker.jpg",
    },
  ];

  productTwo: any = [
    {
      ptid: "pt01",
      ptname: "Mixture",
      ptprice: 6999,
      ptimg: "assets/images/mixture-machine.jpg",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "Butterfly Hero Mixer Grinder, 500W, 3 Jars (Grey)",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 4999,
          ptsimg: "assets/images/mix-grinder/mixture1.jpg"
        },
        {
          ptsid: "pts02",
          ptstitle: "Lifelong LLMG23 Power Pro 500-Watt Mixer Grinder",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 2999,
          ptsimg: "assets/images/mix-grinder/mixture2.avif"
        },
        {
          ptsid: "pts03",
          ptstitle: "Bajaj Rex 500W Mixer Grinder with 3 jars",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 3999,
          ptsimg: "assets/images/mix-grinder/mixture3.jpg"
        },
        {
          ptsid: "pts04",
          ptstitle: "Butterfly Smart Mixer Grinder, 750W, 4 Jars (Grey)",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 4999,
          ptsimg: "assets/images/mix-grinder/mixture4.webp"
        },
        {
          ptsid: "pts05",
          ptstitle: "Maharaja Whiteline Livo Classic Mixer Grinder",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 699,
          ptsimg: "assets/images/mix-grinder/mixture5.jpg"
        },
        {
          ptsid: "pts06",
          ptstitle: "Morphy Richards Icon Superb 750W Mixer Grinder",
          ptspar1: "12+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 5999,
          ptsimg: "assets/images/mix-grinder/mixture6.jpg"
        },
        {
          ptsid: "pts07",
          ptstitle: "USHA Thunderbolt 800-Watt Copper Motor Mixer Grinder",
          ptspar1: "15+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 1999,
          ptsimg: "assets/images/mix-grinder/mixture7.jpg"
        },
        {
          ptsid: "pts08",
          ptstitle: "Usha Imprezza Plus Mixer Grinder with 3 jars",
          ptspar1: "5+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Self-Locking Jars ensure secure mating of Jar with Mixer Base eliminating wear and tear of Couplers and allows for easy “Pick & Place” of Jars. Nylon Couplers are self-aligning",
          ptsprice: 2999,
          ptsimg: "assets/images/mix-grinder/mixture8.jpg"
        },
      ]
    },
    {
      ptid: "pt02",
      ptname: "Fan",
      ptprice: 2999,
      ptimg: "assets/images/fan.avif",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "Orient Electric Apex Prime with 5 Years warranty | Strong & Decorative Ceiling Fan for Home| 1200mm",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Overheat protection- Fuse to protech during thermal overload;Easy assembly - Follow step by step instruction as per manual",
          ptsprice: 2999,
          ptsimg: "assets/images/fan/fan1.jpg"
        },
        {
          ptsid: "pts02",
          ptstitle: "BAJAJ PYGMY MINI 110 MM 10 W HIGH SPEED OPERATION, USB CHARGING",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Overheat protection- Fuse to protech during thermal overload;Easy assembly - Follow step by step instruction as per manual",
          ptsprice: 3999,
          ptsimg: "assets/images/fan/fan2.jpg"
        },

        {
          ptsid: "pts03",
          ptstitle: "Bajaj Frore EE/12S1 1200 mm (48) Ceiling Fans for Home |BEE Star Rated Energy Efficient Ceiling Fan",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Overheat protection- Fuse to protech during thermal overload;Easy assembly - Follow step by step instruction as per manual",
          ptsprice: 2999,
          ptsimg: "assets/images/fan/fan3.jpg"
        },
        {
          ptsid: "pts04",
          ptstitle: "CROMPTON SUREBREEZE SEA Sapphira 1200 mm (48 inch) Ceiling Fan (Ivory) Star Rated Energy efficient Fans",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Overheat protection- Fuse to protech during thermal overload;Easy assembly - Follow step by step instruction as per manual",
          ptsprice: 4999,
          ptsimg: "assets/images/fan/fan4.webp"
        },

      ]
    },
    {
      ptid: "pt03",
      ptname: "Water Purifiers",
      ptprice: 3999,
      ptimg: "assets/images/water-purifier.webp",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "Aqua d pure Copper 12-L RO+UV Water Filter Purifier for Home, Kitchen Fully Automatic UF+TDS",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "UV+UF Filtration: The water purifier utilizes both UV (Ultraviolet) and UF (Ultrafiltration) technologies to effectively remove impurities and microorganisms from the water.",
          ptsprice: 3999,
          ptsimg: "assets/images/water-purifier/one.webp"
        },
        {
          ptsid: "pts02",
          ptstitle: "KENT Gold Optima Gravity Water Purifier (11016) | UF Technology Based | Chemical Free",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "UV+UF Filtration: The water purifier utilizes both UV (Ultraviolet) and UF (Ultrafiltration) technologies to effectively remove impurities and microorganisms from the water.",
          ptsprice: 4999,
          ptsimg: "assets/images/water-purifier/two.webp"
        },
        {
          ptsid: "pts03",
          ptstitle: "Aqua Ultra Pro Copper +zinc+ alkaline 13-L RO+UV Water Filter Purifier black for Home",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "UV+UF Filtration: The water purifier utilizes both UV (Ultraviolet) and UF (Ultrafiltration) technologies to effectively remove impurities and microorganisms from the water.",
          ptsprice: 2999,
          ptsimg: "assets/images/water-purifier/three.webp"
        },
        {
          ptsid: "pts04",
          ptstitle: "AQUA D PURE Copper + Alkaline RO Water Purifier 12L RO+UV+UF Copper |  Water Purifiers.",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "UV+UF Filtration: The water purifier utilizes both UV (Ultraviolet) and UF (Ultrafiltration) technologies to effectively remove impurities and microorganisms from the water.",
          ptsprice: 5999,
          ptsimg: "assets/images/water-purifier/four.webp"
        }
      ]
    }, {
      ptid: "pt04",
      ptname: "Air Conditionar",
      ptprice: 31999,
      ptimg: "assets/images/air-conditionar.jpg",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "Panasonic 1 Ton 5 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with additional AI Mode, 4 Way Swing",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspae3: "Energy Rating: 2 Star. Annual Energy Consumption: 962.65 Units. Iseer Value: 3.7 (Please Refer Energy Label On Product Page Or Contact Brand For More Details)",
          ptsprice: 25000,
          ptsimg: "assets/images/air-conditionar/one.webp"
        },
        {
          ptsid: "pts02",
          ptstitle: "Lloyd 1.5 Ton 3 Star Inverter Split AC (5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White, GLS18I3FWAMC)",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspae3: "Energy Rating: 2 Star. Annual Energy Consumption: 962.65 Units. Iseer Value: 3.7 (Please Refer Energy Label On Product Page Or Contact Brand For More Details)",
          ptsprice: 25000,
          ptsimg: "assets/images/air-conditionar/two.png"
        },
        {
          ptsid: "pts03",
          ptstitle: "Panasonic 1.5 Ton 3 Star Wi-Fi Inverter Smart Split AC (Copper Condenser, 7 in 1 Convertible with additional AI Mode, PM 0.1",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspae3: "Energy Rating: 2 Star. Annual Energy Consumption: 962.65 Units. Iseer Value: 3.7 (Please Refer Energy Label On Product Page Or Contact Brand For More Details)",
          ptsprice: 30000,
          ptsimg: "assets/images/air-conditionar/three.jpg"
        },
        {
          ptsid: "pts04",
          ptstitle: "Voltas 1.4 Ton 3 Star Inverter Split AC(Copper, Adjustable Cooling, Anti-dust Filter, 2023 Model, 173V Vectra Platina, White)",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspae3: "Energy Rating: 2 Star. Annual Energy Consumption: 962.65 Units. Iseer Value: 3.7 (Please Refer Energy Label On Product Page Or Contact Brand For More Details)",
          ptsprice: 40000,
          ptsimg: "assets/images/air-conditionar/four.jpg"
        }
      ]
    },
    {
      ptid: "pt05",
      ptname: "Kitchen Chimny",
      ptprice: 7999,
      ptimg: "assets/images/kitchen-chimny.jpg",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "Faber 90 cm 1000 m³/hr Pyramid Kitchen Chimney | 3 Baffle Filters |12 years warranty on Motor",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Suction capacity: 1000 m3/hr (for kitchen size >200 sqft & heavy frying/grilling) Stay cool and comfortable this summer with the HIRFESH air cooler. Choose from 3-speed settings (low, medium, and high), and enjoy powerful airflow at 6.5m/s.",
          ptsprice: 10000,
          ptsimg: "assets/images/kitchen-chimny/one.jpg"
        },
        {
          ptsid: "pts02",
          ptstitle: "Elica 90 cm 1200 m3/hr Filterless Auto Clean Chimney with 15 Years Warranty",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Suction capacity: 1000 m3/hr (for kitchen size >200 sqft & heavy frying/grilling) Stay cool and comfortable this summer with the HIRFESH air cooler. Choose from 3-speed settings (low, medium, and high), and enjoy powerful airflow at 6.5m/s.",
          ptsprice: 8000,
          ptsimg: "assets/images/kitchen-chimny/two.webp"
        },
        {
          ptsid: "pts03",
          ptstitle: "Faber 90 cm 1500 m³/hr Autoclean Kitchen Chimney, 12Yr Warranty on Motor Kitchen Chimny",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Suction capacity: 1000 m3/hr (for kitchen size >200 sqft & heavy frying/grilling) Stay cool and comfortable this summer with the HIRFESH air cooler. Choose from 3-speed settings (low, medium, and high), and enjoy powerful airflow at 6.5m/s.",
          ptsprice: 7000,
          ptsimg: "assets/images/kitchen-chimny/three.webp"
        },
        {
          ptsid: "pts04",
          ptstitle: "Elica 90 cm 1425 m3/hr Filterless Auto Clean Chimney with Free Installation",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "Suction capacity: 1000 m3/hr (for kitchen size >200 sqft & heavy frying/grilling Stay cool and comfortable this summer with the HIRFESH air cooler. Choose from 3-speed settings (low, medium, and high), and enjoy powerful airflow at 6.5m/s.",
          ptsprice: 6000,
          ptsimg: "assets/images/kitchen-chimny/four.webp"
        }
      ]
    },
    {
      ptid: "pt06",
      ptname: "Cooler",
      ptprice: 6999,
      ptimg: "assets/images/cooler.webp",
      pt_sub: [
        {
          ptsid: "pts01",
          ptstitle: "HIFRESH Air Cooler for Home, 107CM Tower Cooler w/ 3 Speeds & 4 Modes, 12H Timer, LED Touch Screen, 4L Water Tank",
          ptspar1: "1K+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "CATEGORY: AIR COOLER FOR HOME. TYPE: PERSONAL COOLER. WATER TANK CAPACITY: 24 LITRES. AIR Throw: 18 FEET. AIR FLOW: 1700 CMH (PEAK). COLOUR: WHITE COOLER FOR ROOM.",
          ptsprice: 3999,
          ptsimg: "assets/images/cooler/one.jpg"
        },
        {
          ptsid: "pts02",
          ptstitle: "Casa Copenhagen, 27Ltr - 27LTRAP18.7 Air Punch Collection Personal Air Cooler with Anti Bacterial Honeycomb Pads",
          ptspar1: "10k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "CATEGORY: AIR COOLER FOR HOME. TYPE: PERSONAL COOLER. WATER TANK CAPACITY: 24 LITRES. AIR Throw: 18 FEET. AIR FLOW: 1700 CMH (PEAK). COLOUR: WHITE COOLER FOR ROOM.",
          ptsprice: 4999,
          ptsimg: "assets/images/cooler/two.jpg"
        },
        {
          ptsid: "pts03",
          ptstitle: "Crompton Ozone 75-Litre Inverter Compatible Desert Air Cooler with Honeycomb Pads for Home and Commercial | Cooler",
          ptspar1: "12k+ bought in past month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "CATEGORY: AIR COOLER FOR HOME. TYPE: PERSONAL COOLER. WATER TANK CAPACITY: 24 LITRES. AIR Throw: 18 FEET. AIR FLOW: 1700 CMH (PEAK). COLOUR: WHITE COOLER FOR ROOM.",
          ptsprice: 2999,
          ptsimg: "assets/images/cooler/three.jpg"
        },
        {
          ptsid: "pts04",
          ptstitle: "Bajaj PMH 25 DLX 24L Personal Air Cooler for home with DuraMarine Pump (2-Yr Warranty by Bajaj) Anti-Bacte | Air Cooler",
          ptspar1: "20k+ bought in last month",
          ptspar2: "Get it by these week and get free delivery.",
          ptspar3: "CATEGORY: AIR COOLER FOR HOME. TYPE: PERSONAL COOLER. WATER TANK CAPACITY: 24 LITRES. AIR Throw: 18 FEET. AIR FLOW: 1700 CMH (PEAK). COLOUR: WHITE COOLER FOR ROOM.",
          ptsprice: 6999,
          ptsimg: "assets/images/cooler/four.jpeg"
        },
      ]
    }
  ];

  homeCardOne: any = [
    {
      coid: "co01",
      coname: "Mobile",
      cotitle: "Itel S23 (8GB RAM + 128GB ROM, Up to 16GB RAM with Memory Fusion  5nm Octa-Core Processor 50MP Triple Cam",
      copar1: "50MP AI Dual Rear Camera | 5000mAh Battery with Type-C Charging | 90 Hz Display) - Mystery White",
      copar2: "Memory, Storage & SIM: 8 GB RAM (+ RAM expansion up to 8GB) | 256 GB ROM | Expandable Upto 1TB |Dual Hybrid 5G SIM Slot",
      coprice: 25000,
      coimg: "assets/images/home-card-one/one.jpg"
    },
    {
      coid: "co02",
      coname: "Mobile",
      cotitle: "Samsung Galaxy M14 5G (ICY Silver, 6GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor",
      copar1: "50MP AI Dual Rear Camera | 5000mAh Battery with Type-C Charging | 90 Hz Display) - Mystery White",
      copar2: "Memory, Storage & SIM: 8 GB RAM (+ RAM expansion up to 8GB) | 256 GB ROM | Expandable Upto 1TB |Dual Hybrid 5G SIM Slot",
      coprice: 25000,
      coimg: "assets/images/home-card-one/two.jpg"
    },
    {
      coid: "co03",
      coname: "Mobile",
      cotitle: "Samsung Galaxy M04 Dark Blue, 4GB RAM, 128GB Storage | Upto 8GB RAM with RAM Plus | MediaTek Helio P35 ",
      copar1: "50MP AI Dual Rear Camera | 5000mAh Battery with Type-C Charging | 90 Hz Display) - Mystery White",
      copar2: "Memory, Storage & SIM: 8 GB RAM (+ RAM expansion up to 8GB) | 256 GB ROM | Expandable Upto 1TB |Dual Hybrid 5G SIM Slot",
      coprice: 25000,
      coimg: "assets/images/home-card-one/three.jpg"
    },
    {
      coid: "co04",
      coname: "Mobile",
      cotitle: "Oppo F23 5G (Cool Black, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger 64MP Rear",
      copar1: "50MP AI Dual Rear Camera | 5000mAh Battery with Type-C Charging | 90 Hz Display) - Mystery White",
      copar2: "Memory, Storage & SIM: 8 GB RAM (+ RAM expansion up to 8GB) | 256 GB ROM | Expandable Upto 1TB |Dual Hybrid 5G SIM Slot",
      coprice: 25000,
      coimg: "assets/images/home-card-one/four.jpg"
    }
  ];

  homeCardTwo: any = [
    {
      ctid: "ct01",
      ctname: "Laptop",
      cttitle: "HP ZBook Firefly 12th Gen Intel Core i7-1255U 35.6 cm (14 Inch) WUXGA/IPS/Anti-Glare",
      cttitle2: " Display/32 GB RAM/1 TB SSD/NVIDIA RTX A500 (4GB GDDR6) /Win 11/B&O/Backlit KB/FPR/ G9 Workstation PC",
      ctpar1: "Operating System & Software: Windows 11 Home | Microsoft Office Home and Student 2021",
      ctpar2: "Mystery White Processor -Intel Core i7-1255U (up to 4.7 GHz with Intel Turbo Boost Technology, 12 MB L3 cache, 10 cores, 12 threads)",
      ctprice: 25000,
      ctimg: "assets/images/home-card-two/one.jpg"
    },
    {
      ctid: "ct02",
      ctname: "Laptop",
      cttitle: "Acer Aspire Lite AMD Ryzen 5 5500U Premium Thin and Light Laptop - Mystry Color",
      cttitle2: " AL15-51, 39.62 cm (15.6) Full HD Display, Metal Body, Steel Gray, 1.59 KG",
      ctpar1: "Operating System & Software: Windows 11 Home | Microsoft Office Home and Student 2021",
      ctpar2: "Processor : AMD Ryzen 5 5500U Hexa-Core Mobile Processor with AMD Radeon Graphics.Maximum Power Supply Wattage 45 W",
      ctprice: 25000,
      ctimg: "assets/images/home-card-two/two.jpg"
    },
    {
      ctid: "ct03",
      ctname: "Laptop",
      cttitle: "ASUS [Smart Choice] Vivobook 15, Intel Celeron N4020, 15.6 (39.62 cms) HD",
      cttitle2: "Integrated Graphics/Windows 11/Office 2021/Fingerprint/Silver/1.8 kg), X515MA-BR024WS",
      ctpar1: "Operating System & Software: Windows 11 Home | Microsoft Office Home and Student 2021",
      ctpar2: "Display: 15.6-inch, HD (1366 x 768) 16:9 aspect ratio, 60Hz refresh rate, 45% NTSC color gamut, Anti-glare display",
      ctprice: 25000,
      ctimg: "assets/images/home-card-two/three.jpg"
    },
    {
      ctid: "ct04",
      ctname: "Laptop",
      cttitle: "Xiaomi Notebook Pro Max 11th Gen Intel Core i5-11320H Thin & Light (16GB/512GB)",
      cttitle2: "QHD+ Display/2.5K Resolution/Win 11/Thunderbolt 4/MS Office '21/Fingerprint Sensor/1.4 Kg)",
      ctpar1: "Operating System & Software: Windows 11 Home | Microsoft Office Home and Student 2021",
      ctpar2: "Display: 35.56 centimeters IPS QHD+ resolution (2560x1600)| 300 nits brightness |16:10 aspect ratio, 100% sRGB,215 PPI, 1000:1 contrast ratio | Anti Glare | TUV low Blue ligh",
      ctprice: 25000,
      ctimg: "assets/images/home-card-two/four.jpg"
    }
  ]
  homeCardThree: any = [
    {
      ctrid: "ctr01",
      ctrname: "Home Decorator",
      ctrtitle: "OURVIC Hut Shape Decorative Wall Lamp Wooden and Glass Wall Light | Black for Home Decoration",
      ctrtitle2: "Stylish wooden hut Style Sconce Wall Lamp For Royal Look Produce Bright Light In Low Power Consumption",
      ctrpar1: "Material- Fitting- Wood, Shade- Glass, Holder- E27 (Bulb not include)",
      ctrpar2: "Use- Indore In Bad Room, Drawing Room, Hall, Kitchen, Kida Room, Living, Out Door- Lobby, Porch, Baramda Any Where Rain Not Come Direct, Hotel, Restaurant, Part Hall, ETC.",
      ctrprice: 10000,
      ctrimg: "assets/images/home-card-three/one.jpg"
    },
    {
      ctrid: "ctr02",
      ctrname: "Home Decorator",
      ctrtitle: "Desidiya® 3-Light Globe Chandelier Hanging Light Gold Modern Ceiling home light",
      ctrtitle2: "The perfect blend of the metal gold ring and white globe adds a modern, minimalist feel to any home deco",
      ctrpar1: "A white glass globe shade eliminates glares and diffuses",
      ctrpar2: "Use singly or in multiples in a living room, bedroom, dining room and foyer and create a brilliant effect.",
      ctrprice: 15000,
      ctrimg: "assets/images/home-card-three/two.jpg"
    },
    {
      ctrid: "ctr04",
      ctrname: "Home Decorator",
      ctrtitle: "BEHOMA Metal & Glass Table Top Photo Frame, Vertical Size  |with good quality | Brass with Clear Glass (6×8)",
      ctrtitle2: "The innovative floating design of this frame creates a mesmerizing illusion, making your photo appear suspended in mid-air.",
      ctrpar1: "Packaging: The vases comes neatly and securely packed in brown",
      ctrpar2: "This standing Floating Frame can be used for display of photos, pictures, dried pressed flowers, plant specimens, and vintage postcards etc. ",
      ctrprice: 5000,
      ctrimg: "assets/images/home-card-three/four.jpg"
    },
    {
      ctrid: "ctr03",
      ctrname: "Home Decorator",
      ctrtitle: "Artvibes Decorative Wall Hanging Wooden Art Decoration item for Living Room good quality | Bedroom ",
      ctrtitle2: "Motivational & Meaningful :- Be Inspired With Positive Messages About Love, Family And Appreciating Each Other!",
      ctrpar1: "Material & Durability :- About Our Wall Decorative Product Handmade",
      ctrpar2: "Easy To Clean :- This Wall Hanging For Home Decoration Item is Easy To Clean And Maintain. You Can Dust The Dirt Off It By Just Using A Soft Cloth.",
      ctrprice: 5000,
      ctrimg: "assets/images/home-card-three/three.jpg"
    }
  ]

  homeCardFour: any = [
    {
      cfid: "cf01",
      cfname: "Cosmetics",
      cftitle: "Villain Perfume For Men 100 Ml - Eau De Parfum - Premium Long Lasting Fragrance Spray - Woody & Spicy",
      cfpar1: "Woody : A strong yet earthy note that lasts longer than all the dark clouds in your head",
      cfpar2: "Super-hydrating: Compact powder with Hyaluronic Acid for hydration and comfort",
      cfprice: 3000,
      cfimg: "assets/images/home-card-four/one.webp"
    },
    {
      cfid: "cf02",
      cfname: "Cosmetics",
      cftitle: "DeBelle Gel Nail Polish Chrome Gold (Metallic Gold Nail Paint)|Non UV Gel Finish |Chip Resistant",
      cfpar1: "Chrome Gold is a metallic bright gold nail polish shade with a long lasting chrome glossy finish.",
      cfpar2: "Super-hydrating: Compact powder with Hyaluronic Acid for hydration and comfort",
      cfprice: 25000,
      cfimg: "assets/images/home-card-four/two.webp"
    },
    {
      cfid: "cf03",
      cfname: "Cosmetics",
      cftitle: "COAL Clean Beauty Hydrating Day Cream | Sunflower Seed Oil, Olive Oil.",
      cfpar1: "Hydrating Day Cream (15g) nourishes the skin – Known to offer long-lasting hydration, Hydrating Day Cream.",
      cfpar2: "Super-hydrating: Compact powder with Hyaluronic Acid for hydration and comfort",
      cfprice: 2000,
      cfimg: "assets/images/home-card-four/three.webp"
    },
    {
      cfid: "cf04",
      cfname: "Cosmetics",
      cftitle: "Indulekha Svetakutaja Oil|Ayurvedic Medicinal oil for dandruff treatment",
      cfpar1: "Clinically Proven to Treat dandruff in 4 Weeks Power of 8 Herbs & Essential Oil cooked effective & very useful",
      cfpar2: "Super-hydrating: Compact powder with Hyaluronic Acid for hydration and comfort",
      cfprice: 5000,
      cfimg: "assets/images/home-card-four/four.jpg"
    }
  ]

  // searchService: any = [
  //   {
  //     sid: "p01",
  //     sname: "Laptop",
  //     pdesc1: "Lenovo IdeaPad Slim 3 Intel Core i3-1115G4 11th Gen 15.6 inch(39.62cm) FHD Laptop ",
  //     sdesc2: "(8GB/256GB/SSD/Windows 11/Office 2021/3 Mongths game pass/1.5Kg)GTIN",
  //     sdesc3: "Order by this week and get free delivary.",
  //     sprice: 51000,
  //     simg: "assets/images/laptop.jpg",
  //   },
  //   {
  //     sid: "p02",
  //     sname: "Mobile",
  //     sdesc1: "Redmi Note 12 5G Mystique Blue 4GB RAM 128GB ROM",
  //     sdesc2: "1st Phone with 120Hz Super AMOLED and Snapdragon® 4 Gen 1 | 48MP AI Triple Camera",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 21000,
  //     simg: "assets/images/mobile.jpeg",
  //   },
  //   {
  //     sid: "p03",
  //     sname: "LED",
  //     sdesc1: "Acer 139 cm (55 inches) Advanced",
  //     sdesc2: "Series 4K Ultra HD Smart LED Google TV AR55GR2851UDFL (Black)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 24000,
  //     simg: "assets/images/led.jpg",
  //   },
  //   {
  //     sid: "p04",
  //     sname: "Sound System",
  //     sdesc1: "Philips Soundbar TAB5305, Wireless Subwoofer, 1.1 Ch.",
  //     sdesc2: "Bluetooth Enabled, Optical Connectivity, HDMI ARC, 140W, Metal Grill, Powerful Bass (Black)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 14000,
  //     simg: "assets/images/sound-system.webp",
  //   },
  //   {
  //     sid: "p05",
  //     sname: "Head Phone",
  //     sdesc1: "PTron Tangentbeat in-Ear Bluetooth Wireless",
  //     sdesc2: "Headphones with Mic, Punchy Bass, 10mm Drivers, Clear Calls, Snug-Fit, Fast Charging, Magnetic Buds, Voice Assistant & IPX4 Wireless Neckband (Dark Blue)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 1500,
  //     simg: "assets/images/head-phone.jpg",
  //   },
  //   {
  //     sid: "p06",
  //     sname: "Electric Oven",
  //     sdesc1: "AGARO Marvel Oven Toaster Grill with Motorized Rotisserie & 5 Heating Modes (Black, 25 litres)",
  //     sdesc2: "Grill with Motorized Rotisserie & 5 Heating Modes (Black, 25 litres)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 2000,
  //     simg: "assets/images/electric-oven.jpg",
  //   },
  //   {
  //     sid: "p07",
  //     sname: "Washing Machine",
  //     sdesc1: "Whirlpool 6 Kg 5 Star Royal Fully-Automatic ",
  //     sdesc2: "Top Loading Washing Machine (WHITEMAGIC ROYAL 6 GENX, Grey, Hard Water Wash)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 7000,
  //     simg: "assets/images/washing-machine.webp",
  //   },
  //   {
  //     sid: "p08",
  //     sname: "Tablet",
  //     sdesc1: "Lenovo Tab P11 Plus Tablet (11 inch (27.94 cm), 6 GB, 128 GB, Wi-Fi+LTE, Voice Calling)",
  //     sdesc2: "Slate Grey with 2K Display, Quad Speakers with Dolby Atmos, 7700 mAH Battery and TUV Certified Eye Protection",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 11000,
  //     simg: "assets/images/tablet.jpg",
  //   },
  //   {
  //     sid: "p09",
  //     sname: "Mouse",
  //     sdesc1: "Logitech M221 Wireless Mouse",
  //     sdesc2: "Silent Buttons, 2.4 GHz with USB Mini Receiver, 1000 DPI Optical Tracking, 18-Month Battery Life, Ambidextrous PC/Mac/Laptop - Charcoal Grey",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 1000,
  //     simg: "assets/images/mouse.jpg",
  //   },
  //   {
  //     sid: "p10",
  //     sname: "Keyboard",
  //     sdesc1: "Logitech K380 Wireless Multi-Device Keyboard for Windows",
  //     sdesc2: "Apple iOS, Apple Tv Android Or Chrome, Bluetooth, Compact Space-Saving Design, Pc/Mac/Laptop/Smartphone/Tablet (Blue)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 2000,
  //     simg: "assets/images/keyboard.webp",
  //   },
  //   {
  //     sid: "p11",
  //     sname: "AC",
  //     sdesc1: "Lloyd 2.0 Ton 5 Star Inverter Split AC",
  //     sdesc2: "5 in 1 Convertible, Copper, Anti-Viral + PM 2.5 Filter, 2023 Model, White with Golden Deco Strip, GLS24I5FWGEV",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 30000,
  //     simg: "assets/images/air-conditionar.jpg",
  //   },
  //   {
  //     sid: "p12",
  //     sname: "Cooler",
  //     sdesc1: "HIFRESH Air Cooler for Home",
  //     sdesc2: "107CM Tower Cooler w/ 3 Speeds & 4 Modes, 12H Timer, LED Touch Screen, 4.1L Water Tank, Remote, 4 Ice Packs, 80W Low Power Consumption Evaporative Air Cooler for Room",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 10000,
  //     simg: "assets/images/cooler.png",
  //   },
  //   {
  //     sid: "p13",
  //     sdesc1: "Ambrane 27000mAh Power Bank",
  //     sdesc2: "20W Fast Charging, Triple Output, Type C PD (Input & Output), Quick Charge, Li-Polymer, Multi-Layer Protection for iPhone, Smartphones & Other Devices (Stylo Pro, Black)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 2000,
  //     simg: "assets/images/power-bank.webp",
  //   },
  //   {
  //     sid: "p14",
  //     sname: "Monitor",
  //     sdesc1: "BenQ GW2480 24 inch (60 cm)",
  //     sdesc2: "1920 x 1080 Pixels IPS Full HD Ultra-Slim Bezel Monitor- Eye Care, Anti-Glare, Brightness Intelligence, Low Blue Light, HDMI, DP, Speakers, VESA Wall Mountable (Black",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 21000,
  //     simg: "assets/images/monitor.jpg",
  //   },
  //   {
  //     sid: "p15",
  //     sname: "Router",
  //     sdesc1: "TP-Link TL-WR820N 300 Mbps Single_Band Speed Wireless WiFi Router",
  //     sdesc2: "Easy Setup, IPv6 Compatible, Supports Parent Control, Guest Network, Multi-Mode Wi-Fi Router",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 2000,
  //     simg: "assets/images/router.jpg",
  //   },
  //   {
  //     id: "p16",
  //     sname: "Printer",
  //     sdesc1: "Canon PIXMA G3770 BK All-in-one (Print, Scan, Copy)",
  //     sdesc2: "WiFi Inktank Colour Printer (Black 6000 Prints and Colour 7700 Prints) for Home and Office",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 15000,
  //     simg: "assets/images/printer.png",
  //   },
  //   {
  //     id: "p17",
  //     sname: "Microphone",
  //     sdesc1: "JBL Commercial CSHM10 Handheld Dynamic XLR Unidirectional Microphone",
  //     sdesc2: "With On/Off Switch (Cable Not Included) Black, Medium",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 3000,
  //     simg: "assets/images/microphone.jpg",
  //   },
  //   {
  //     sid: "p18",
  //     sname: "Camera",
  //     sdesc1: "CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera",
  //     sdesc2: "360° with Pan Tilt | View & Talk | Motion Alert | Night Vision | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance 10mtr | CP-E25A",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 47000,
  //     simg: "assets/images/camera.jpg",
  //   },
  //   {
  //     sid: "p19",
  //     sname: "Kitchen Chimny",
  //     sdesc1: "Hindware Smart Appliances Nadia IN 60 cm 1350 m³/hr Stylish Filterless Auto-Clean Kitchen Chimney",
  //     sdesc2: "With Metallic Oil Collector, Motion Sensor & Touch Control For Easy Operation (Curved Glass, Black)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 14000,
  //     simg: "assets/images/kitchen-chimny.jpg",
  //   },
  //   {
  //     sid: "p20",
  //     sname: "DVD Player",
  //     sdesc1: "PHILIPS EP200 Multi Zone Region Free DVD Player",
  //     sdesc2: "1080P HDMI - PAL/NTSC Conversion - USB 2.0 - A/V Output & Remote Control",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 5000,
  //     simg: "assets/images/dvd-player.jpg",
  //   },
  //   {
  //     sid: "p21",
  //     sname: "Projector",
  //     sdesc1: "EGate i9 Pro-Max, FHD 1080p Native & 4K support, 4500 Lumens (420 ANSI) LED Projector for Home, 210",
  //     sdesc2: " (533 cm) Max Screen | 3W Inbuilt Speaker | AV, VGA, HDMI, SD Card, USB, Audio Out | (E03i31, Black)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 5000,
  //     simg: "assets/images/projector.jpg",
  //   },
  //   {
  //     sid: "p22",
  //     sname: "Web Camera",
  //     sdesc1: "Lenovo 300 FHD Webcam with Full Stereo Dual Built-in mics",
  //     sdesc2: "FHD 1080P 2.1 Megapixel CMOS Camera |Ultra-Wide 95 Lens, Digital Zoom | 360 Rotation | Flexible Mount, Cloud Grey",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 2000,
  //     simg: "assets/images/web-camera.jpg",
  //   },
  //   {
  //     sid: "p23",
  //     sname: "Smart Board",
  //     sdesc1: "Pragati Systems® Genius Regular Steel (Magnetic) Whiteboard for Office",
  //     sdesc2: "Home & School (GRMWB6090), Lightweight Aluminium Frame, 2x3 Feet (Pack of 1)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 5000,
  //     simg: "assets/images/smart-board.jpg",
  //   },
  //   {
  //     sid: "p24",
  //     sname: "BlueTooth Speaker",
  //     sdesc1: "JBL Go 2, Wireless Portable Bluetooth Speaker",
  //     sdesc2: "with Mic, JBL Signature Sound, Vibrant Color Options with IPX7 Waterproof & AUX (Blue)",
  //     sdesc3: "Order by this week and get free delivary",
  //     sprice: 1000,
  //     simg: "assets/images/bt-speaker.jpg",
  //   }
  // ];


  constructor() { }
}
