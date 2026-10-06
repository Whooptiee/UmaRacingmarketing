export type Part = {
  id: string; name: string; category: string; price: number; stock: number;
  bikes: string[]; img: string; tag?: string; desc: string;
  features: string[]; info: [string, string][];
};

const U = "https://umaracing.com/wp-content/uploads/2022/06/";

export const BIKES = [
  "Yamaha Y16ZR / Exciter 155 / MX King 155", "Yamaha Y15ZR / Exciter 150 / MX King 150",
  "Yamaha LC135 / Spark 135 / MX-135", "Yamaha NVX 155 / Aerox 155", "Yamaha NMAX",
  "Yamaha XMAX", "Honda RS150R / Sonic 150 / Winner 150", "Honda Vario / Click", "Others",
];
const ALL = [0, 1, 2, 3, 4, 5, 6, 7];

// [name, description, features, models (catalogue), options, fits BIKES index]
type D = [string, string, string[], string, string, number[]];

const CATS: { label: string; img: string; items: D[] }[] = [
  { label: "Engine Power Parts", img: "engine.png", items: [
    ["Superhead", "Improves the power performance and efficiency of your engine. Available as a full kit or a head-and-valves replacement kit.",
      ["Heat resistance at elevated temperature", "High strength & ductility aluminium", "Maximises air & fuel mixture flow", "Oval shaped exhaust port", "Apple shaped combustion chamber", "O2 sensor port"],
      "Y15ZR / Exciter 150, FZ150i, LC4S, LC5S, LCV8", "Valve size IN 23 / EX 20 or IN 25 / EX 22", [1, 2]],
    ["Cylinder Block", "Contains the cylinder, sleeves and coolant passages. Offered in composite and ceramic versions for street and racing use.",
      ["High pressure aluminium body", "Ceramic sleeve with high strength at high temperature", "Enhanced open water jacket for superior cooling", "Tough wear-resistant surface", "XPro extreme compression versions", "Suitable for racing"],
      "Y15ZR, Y16ZR, LC135, NMAX, NVX, Aerox 155, R15, RS150R, Vario 125/150, PCX, ADV", "Bore 57–65 mm depending on model; ceramic block kits and long-sleeved versions", [0, 1, 2, 3, 4, 6, 7]],
    ["Forged Pistons", "Racing forged pistons, with or without machining, plus rings and DLC piston pins.",
      ["Better strength at high temperature", "High durability", "Lightweight", "DLC piston pin: low friction, abrasion resistant"],
      "LC135, Y15ZR, RS150R, Vario 150, ADV, PCX, NMAX, NVX 155, SRL110, W110", "Sizes 51–65 mm depending on model", [1, 2, 3, 4, 6, 7]],
    ["Camshaft", "High cam (R1 camshaft) that turns rotation into valve motion to control combustion.",
      ["CNC machined from cast iron", "Increases horsepower & torque", "Extended valve timing", "Higher cam lift", "Highly durable", "Low noise"],
      "LC135, Y15ZR, FZ150i, Y16ZR, NMAX, EX5 and more", "Cam options R1, R3, S1, R4, R5, R8 for LC135 / Y15ZR / FZ150i", [0, 1, 2, 4]],
  ]},
  { label: "Fuel System", img: "Fuel-system-min.png", items: [
    ["Throttle Body", "Throttle body kit with dual injector support.",
      ["Clean & stylish", "Variable tuning options", "Dual injector for maximum performance", "Interchangeable intake manifold (long or short)"],
      "Vario 150, NMAX / NVX / Aerox V2, Y16ZR, R15 V3, RS150, Y15ZR", "32–42 mm", [0, 1, 3, 4, 6, 7]],
    ["Air Filter Kit", "Replacement air filter kits that increase airflow.",
      ["Dual-layered filters", "Bigger surface area", "Increases airflow", "Washable & replaceable filters", "Single layer, plug-and-play versions for scooters"],
      "RS150R, LC135, Y16ZR, Y15ZR, R15 V3, MT15, NMAX, FZ150i, NVX, XMAX, PCX, Vario", "Model-specific", ALL],
    ["Fuel Injector", "4-hole fuel injector for consistent fuel delivery.",
      ["Consistent fuel delivery & distribution", "Precise fuel volume sprayed per minute", "Increased pressure for optimal combustion", "Injector pipe holder improves injection consistency"],
      "FZ150, Y15ZR V1 / V2, Y16ZR", "140–320 cc", [0, 1]],
  ]},
  { label: "Cooling System", img: "Cooling-system-min.png", items: [
    ["Radiator", "Aluminium racing radiator with a larger core and higher capacity.",
      ["Made from high grade aluminium", "Superior cooling capability", "Thicker & wider core", "Quick heat dispersal", "Suitable for big bore engines"],
      "Y15ZR, Y16ZR, LC135 / LCV8, RS150R, NMAX V2, NVX V2, Aerox 155 V2", "Capacity 280–380 ml; cooling increase from 10% up to 40% depending on model", [0, 1, 2, 3, 4, 6]],
  ]},
  { label: "Electronics System", img: "M5-min.png", items: [
    ["M9 ECU", "Take command and control of your engine with the UMA Racing M9 ECU.",
      ["New generation 4-core MCU", "Computing speed increased by 100%", "B-Link smart tuning & real-time monitoring", "Auto Tune and fuel adjust", "Built-in Bluetooth, Type B USB cable", "Spark angle, backfire adjustment, peak RPM limit", "VVA control, temperature compensation, save maps, quick burn"],
      "Y15ZR, Y15ZR V2, Y16ZR, RS150, MSX125, Monkey125, NVX V1/V2, NMAX V1/V2", "Model-specific ECU", [0, 1, 3, 4, 6]],
    ["Utech Iridium Spark", "Performance spark plug. Colder heat range with a precision iridium electrode for a stable spark under high load and RPM.",
      ["Promotes better combustion", "Improved throttle response", "Consistent performance", "Longer plug service life", "Improved ignition"],
      "Universal", "AC7R31 (daily use), AB8R31 / AB9R31 (high performance, withstands higher temperature); hex 16 mm, M10 x 1", ALL],
  ]},
  { label: "Exhaust", img: "exhaust-min.png", items: [
    ["Back Pressure Exhaust", "Back pressure system designed to maintain optimal exhaust gas flow for a more responsive, smoother engine feel.",
      ["Improves horsepower & torque", "Withstands up to 200 cc", "Plug & play", "Low noise"],
      "Y15ZR, Y16ZR, LC5S, LC4S V2, LCV8, RS150R, RSX / Winner X", "Pipe OD 31.8 / 38.1 mm", [0, 1, 2, 6]],
  ]},
  { label: "Other Parts and Accessories", img: "optional-part-min.png", items: [
    ["Bypass", "Replaces the stock oil-level fitting and connects to a vent hose.",
      ["Colours: blue, black, gold, red", "45° and 90° versions", "Thread M20 x 1.5 or M20 x 2.5"],
      "Yamaha / Honda, Kawasaki / Modenas, Suzuki", "Confirm bypass size when ordering", ALL],
  ]},
];
export const CATEGORIES = CATS.map((c) => c.label);

const IMG: Record<string, string> = {
  
  Superhead: "/images/Superhead-transparent.png", "Throttle Body": U + "throttle-body.png", Radiator: U + "radiator.png",
  "Back Pressure Exhaust": U + "exhaust.png",Camshaft: "/images/camshaft.png",
  "M9 ECU": "/images/ecu.png",
  "Utech Iridium Spark": "/images/sparkplug.png",
  "Air Filter Kit": "/images/air_filter.png",
  "Forged Pistons": "/images/forged_piston.png",
  "Fuel Injector": "/images/injector.png", 
  Bypass: U + "bypass.png", 
};
const TAGS: Record<string, string> = { Superhead: "Race Proven", "M9 ECU": "New", "Utech Iridium Spark": "New" };
const hash = (s: string) => [...s].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0;
let n = 0;

export const PARTS: Part[] = CATS.flatMap((c) =>
  c.items.map(([name, desc, features, models, spec, fit]) => {
    const h = hash(name);
    return {
      id: String(++n), name, category: c.label, price: 20 + (h % 30) * 10, stock: 10 + (h % 11),
      bikes: fit.map((i) => BIKES[i]), tag: TAGS[name], img: IMG[name] ?? U + c.img, desc, features,
      info: [["Category", c.label], ["Compatible models", models], ["Options / sizes", spec],
        ["Source", "UMA Racing 2024 catalogue; price and stock are demo values"]] as [string, string][],
    };
  })
);