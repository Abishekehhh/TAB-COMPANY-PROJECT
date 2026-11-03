import anemometerImg from "@/assets/anemometer.jpg";
import captureHoodImg from "@/assets/capture-hood.jpg";
import ductTestingImg from "@/assets/duct-testing.jpg";
import flushingProcessImg from "@/assets/flushing-process.jpg";
import infraredThermometerImg from "@/assets/infrared-thermometer.png";
import siteActivitiesImg from "@/assets/site-activities.jpg";
import tabIconsImg from "@/assets/tab-icons.png";

export interface BotKnowledgeItem {
  id: string;
  title: string;
  shortLabel: string;
  answerSummary: string;
  answerParagraphs: string[];
  bulletPoints?: {
    heading?: string;
    items: string[];
  };
  extraNotes?: string;
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  serviceButtons?: {
    label: string;
    targetId: string;
  }[];
  followUps: {
    label: string;
    targetId: string;
  }[];
  keywords: string[];
}

export const MAIN_MENU_OPTIONS = [
  { label: "1. HVAC Services", targetId: "hvac-services" },
  { label: "2. What is HVAC?", targetId: "what-is-hvac" },
  { label: "3. Testing & Commissioning", targetId: "hvac-commissioning" },
  { label: "4. Airflow Measurement", targetId: "airflow-measurement" },
  { label: "5. Chilled Water Flushing", targetId: "chilled-water-flushing" },
  { label: "6. Temperature Measurement", targetId: "temperature-measurement" },
  { label: "7. Duct Leakage Testing", targetId: "duct-leakage-testing" },
  { label: "8. Contact Us", targetId: "contact-us" },
];

export const KNOWLEDGE_BASE: Record<string, BotKnowledgeItem> = {
  "what-is-hvac": {
    id: "what-is-hvac",
    title: "What is HVAC?",
    shortLabel: "What is HVAC?",
    answerSummary: "HVAC stands for Heating, Ventilation and Air Conditioning.",
    answerParagraphs: [
      "HVAC stands for Heating, Ventilation and Air Conditioning.",
      "It is a system used to control indoor temperature, humidity, ventilation and air quality to ensure comfortable and healthy building environments.",
    ],
    bulletPoints: {
      heading: "Main components:",
      items: [
        "Heating (maintaining warm indoor air during cold seasons)",
        "Ventilation (introducing fresh outdoor air and removing stale air & contaminants)",
        "Air Conditioning (cooling, dehumidifying, and circulating conditioned air)",
      ],
    },
    image: {
      src: tabIconsImg,
      alt: "HVAC System Components and Technical Symbols",
      caption: "HVAC Systems: Heating, Ventilation & Air Conditioning Controls",
    },
    followUps: [
      { label: "Explore HVAC Services", targetId: "hvac-services" },
      { label: "Testing, Adjusting & Balancing (TAB)", targetId: "hvac-tab" },
      { label: "HVAC Commissioning", targetId: "hvac-commissioning" },
    ],
    keywords: ["what is hvac", "hvac", "heating", "ventilation", "air conditioning", "definition", "ac", "indoor air"],
  },

  "hvac-services": {
    id: "hvac-services",
    title: "What HVAC services do you provide?",
    shortLabel: "HVAC Services",
    answerSummary: "Explore our comprehensive HVAC technical services across Chennai and Kerala:",
    answerParagraphs: [
      "Explore our comprehensive HVAC technical services across commercial, industrial, healthcare, and IT facilities:",
    ],
    serviceButtons: [
      { label: "HVAC Testing, Adjusting & Balancing (TAB)", targetId: "hvac-tab" },
      { label: "Airflow Measurement", targetId: "airflow-measurement" },
      { label: "Chilled Water Flushing", targetId: "chilled-water-flushing" },
      { label: "Temperature Measurement", targetId: "temperature-measurement" },
      { label: "HVAC Testing and Commissioning", targetId: "hvac-commissioning" },
    ],
    image: {
      src: siteActivitiesImg,
      alt: "TAB Technical Services Engineers on Site",
      caption: "Certified TAB Engineering Team on Site for HVAC Validation",
    },
    followUps: [
      { label: "Duct Leakage Testing", targetId: "duct-leakage-testing" },
      { label: "Contact Us for a Quote", targetId: "contact-us" },
    ],
    keywords: ["services", "what services", "provide", "solutions", "offerings", "scope of work", "capabilities"],
  },

  "hvac-tab": {
    id: "hvac-tab",
    title: "What is HVAC Testing, Adjusting and Balancing?",
    shortLabel: "Testing, Adjusting & Balancing",
    answerSummary: "HVAC Testing, Adjusting and Balancing (TAB) is the process of measuring and adjusting airflow and water flow in HVAC systems according to design requirements.",
    answerParagraphs: [
      "HVAC Testing, Adjusting and Balancing (TAB) is the process of measuring and adjusting airflow and water flow in HVAC systems according to design requirements.",
      "TAB ensures that every zone, room, diffuser, and air handling unit receives the exact volume of air and chilled water planned by the design engineer.",
    ],
    bulletPoints: {
      heading: "Key Benefits:",
      items: [
        "Verify airflow requirements meet original design parameters.",
        "Identify airflow imbalance and eliminate hot/cold spots.",
        "Improve overall system performance and energy efficiency.",
        "Support optimal indoor comfort, humidity control, and air quality.",
      ],
    },
    image: {
      src: captureHoodImg,
      alt: "Capture Hood Balancing Supply Air Diffuser",
      caption: "Balancing Airflow at Ceiling Diffuser using Electronic Capture Hood",
    },
    followUps: [
      { label: "Airflow Measurement", targetId: "airflow-measurement" },
      { label: "Duct Leakage Testing", targetId: "duct-leakage-testing" },
      { label: "Testing & Commissioning", targetId: "hvac-commissioning" },
    ],
    keywords: ["tab", "testing adjusting balancing", "air balancing", "water balancing", "balancing", "adjusting", "imbalance"],
  },

  "airflow-measurement": {
    id: "airflow-measurement",
    title: "What is Airflow Measurement?",
    shortLabel: "Airflow Measurement",
    answerSummary: "Airflow measurement determines the volume or velocity of air moving through HVAC ducts, grilles and diffusers.",
    answerParagraphs: [
      "Airflow measurement determines the volume or velocity of air moving through HVAC ducts, grilles and diffusers.",
      "Accurate measurement guarantees that air handling units (AHUs), fan coil units (FCUs), and exhaust systems deliver designated air distribution.",
    ],
    bulletPoints: {
      heading: "Common instruments:",
      items: [
        "Anemometer (Vane and Hot-wire for duct traverse & velocity)",
        "Airflow hood (Capture hood for volumetric grille readings)",
        "Pitot tube (Differential pressure airflow traverses)",
      ],
    },
    extraNotes: "Common Measurement Units: CFM (Cubic Feet/Min), L/s (Liters/Sec), and m³/h (Cubic Meters/Hour).",
    image: {
      src: anemometerImg,
      alt: "Digital Anemometer for Air Velocity Measurement",
      caption: "Digital Vane Anemometer for Air Velocity & Volumetric Flow Testing",
    },
    followUps: [
      { label: "HVAC Testing & Balancing", targetId: "hvac-tab" },
      { label: "Duct Leakage Testing", targetId: "duct-leakage-testing" },
      { label: "Temperature Measurement", targetId: "temperature-measurement" },
    ],
    keywords: ["airflow", "air flow", "velocity", "cfm", "anemometer", "hood", "pitot", "diffusers", "grilles", "volume"],
  },

  "chilled-water-flushing": {
    id: "chilled-water-flushing",
    title: "What is Chilled Water Flushing?",
    shortLabel: "Chilled Water Flushing",
    answerSummary: "Chilled water flushing is a cleaning process used to remove unwanted particles and contaminants from chilled-water piping.",
    answerParagraphs: [
      "Chilled water flushing is a specialized cleaning process used to remove unwanted particles, welding slag, sand, corrosion products, and contaminants from chilled-water piping systems.",
      "High-velocity water flushing combined with chemical cleaning prevents strainers, control valves, and heat exchangers from clogging.",
    ],
    bulletPoints: {
      heading: "Benefits:",
      items: [
        "Remove construction debris, rust, and foreign particles.",
        "Clean piping systems and optimize heat transfer.",
        "Prepare hydronic systems for final commissioning.",
        "Support reliable long-term chiller and pump operation.",
      ],
    },
    image: {
      src: flushingProcessImg,
      alt: "Chilled Water Pipe Flushing and Cleaning Process",
      caption: "High-Velocity Chilled Water Pipe Flushing & Chemical Decontamination",
    },
    followUps: [
      { label: "Testing & Commissioning", targetId: "hvac-commissioning" },
      { label: "Temperature Measurement", targetId: "temperature-measurement" },
      { label: "HVAC Services", targetId: "hvac-services" },
    ],
    keywords: ["flushing", "chilled water", "pipe flushing", "piping", "debris", "hydronic", "water system", "cleaning", "pipe"],
  },

  "hvac-commissioning": {
    id: "hvac-commissioning",
    title: "What is HVAC Commissioning?",
    shortLabel: "Testing & Commissioning",
    answerSummary: "HVAC commissioning is the process of verifying that HVAC systems are installed and operating according to project requirements.",
    answerParagraphs: [
      "HVAC commissioning is the systematic quality assurance process of verifying that HVAC systems are installed, integrated, and operating according to project requirements and engineering specifications.",
      "Our engineers ensure smooth handover from mechanical contractors to building facility management.",
    ],
    bulletPoints: {
      heading: "Key Activities:",
      items: [
        "Equipment inspection (AHUs, chillers, FCUs, dampers, and pumps).",
        "Functional testing under full and partial design loads.",
        "Airflow verification across all duct branches and zones.",
        "Water-flow verification across coils and balancing valves.",
        "Control system checks, thermostats, and sensor calibrations.",
      ],
    },
    image: {
      src: siteActivitiesImg,
      alt: "Commissioning Engineers Verifying System Operations",
      caption: "TAB Technical Services Conducting Verification & Commissioning Protocols",
    },
    followUps: [
      { label: "Testing, Adjusting & Balancing", targetId: "hvac-tab" },
      { label: "Chilled Water Flushing", targetId: "chilled-water-flushing" },
      { label: "Contact Commissioning Team", targetId: "contact-us" },
    ],
    keywords: ["commissioning", "testing commissioning", "cx", "functional testing", "handover", "inspection", "verification"],
  },

  "temperature-measurement": {
    id: "temperature-measurement",
    title: "What is Temperature Measurement?",
    shortLabel: "Temperature Measurement",
    answerSummary: "Temperature measurement determines the temperature of air, water or equipment in an HVAC system.",
    answerParagraphs: [
      "Temperature measurement determines the exact thermal conditions of air, chilled water, or equipment surfaces across an HVAC system.",
      "It verifies supply, return, and ambient delta-T (temperature difference), ensuring optimal heat exchange and occupancy comfort.",
    ],
    bulletPoints: {
      heading: "Common instruments:",
      items: [
        "Digital thermometer (High-precision dual-channel thermocouple)",
        "Temperature probe (Immersion sensors for pipe water and duct air)",
        "Infrared thermometer (Non-contact laser thermal surface verification)",
      ],
    },
    image: {
      src: infraredThermometerImg,
      alt: "Infrared Thermometer Instrument",
      caption: "Infrared Thermometer for Accurate Surface & Coil Temperature Verification",
    },
    followUps: [
      { label: "Airflow Measurement", targetId: "airflow-measurement" },
      { label: "HVAC Testing & Balancing", targetId: "hvac-tab" },
      { label: "HVAC Services", targetId: "hvac-services" },
    ],
    keywords: ["temperature", "temp", "thermometer", "infrared", "probe", "heat", "thermal", "delta t", "celsius", "cooling"],
  },

  "duct-leakage-testing": {
    id: "duct-leakage-testing",
    title: "What is Duct Leakage Testing?",
    shortLabel: "Duct Leakage Testing",
    answerSummary: "Duct leakage testing identifies unwanted air leakage from HVAC ductwork.",
    answerParagraphs: [
      "Duct leakage testing identifies unwanted air leakage from HVAC ductwork sections under positive or negative static pressure.",
      "Ductwork joints and seams are pressurized to measure leakage rates against SMACNA or DW/144 standards.",
    ],
    bulletPoints: {
      heading: "Key Benefits:",
      items: [
        "Identify duct leakage before ceilings and insulation are sealed.",
        "Verify ductwork fabrication and installation workmanship quality.",
        "Support system efficiency and drastically reduce energy waste.",
        "Help satisfy mandatory project specifications and green certifications.",
      ],
    },
    image: {
      src: ductTestingImg,
      alt: "Duct Leakage Testing Machine",
      caption: "Orifice-Plate Duct Leakage Tester Connected to Duct Section",
    },
    followUps: [
      { label: "Airflow Measurement", targetId: "airflow-measurement" },
      { label: "Testing, Adjusting & Balancing", targetId: "hvac-tab" },
      { label: "Testing & Commissioning", targetId: "hvac-commissioning" },
    ],
    keywords: ["duct leakage", "leak testing", "duct test", "air leakage", "smacna", "pressure test", "ductwork"],
  },

  "contact-us": {
    id: "contact-us",
    title: "Contact Us",
    shortLabel: "Contact Us",
    answerSummary: "Thank you for your interest in TAB Technical Services. Please visit our Contact Us page to get in touch with our team.",
    answerParagraphs: [
      "Thank you for your interest in TAB Technical Services.",
      "Please visit our Contact Us page to get in touch with our team for consultations, site visits, or quotation requests.",
    ],
    bulletPoints: {
      heading: "Official Contact Details:",
      items: [
        "Phone: +91 6380513174 / +91 8848908880",
        "Email: tabtechnicalservice@gmail.com",
        "Offices: Chennai (Tamil Nadu) & Kottayam (Kerala)",
      ],
    },
    followUps: [
      { label: "What is HVAC?", targetId: "what-is-hvac" },
      { label: "Explore HVAC Services", targetId: "hvac-services" },
    ],
    keywords: ["contact", "contact us", "reach out", "phone", "email", "call", "whatsapp", "address", "location", "quote", "price", "chennai", "kerala"],
  },
};

export const findAnswerByQuery = (query: string): string | null => {
  const normalized = query.toLowerCase().trim();
  if (!normalized) return null;

  // Exact or high priority match for contact
  if (
    normalized.includes("contact") ||
    normalized.includes("phone") ||
    normalized.includes("email") ||
    normalized.includes("call") ||
    normalized.includes("whatsapp") ||
    normalized.includes("address") ||
    normalized.includes("location") ||
    normalized.includes("quote")
  ) {
    return "contact-us";
  }

  // Duct testing
  if (normalized.includes("duct") || normalized.includes("leak")) {
    return "duct-leakage-testing";
  }

  // Temperature
  if (
    normalized.includes("temp") ||
    normalized.includes("infrared") ||
    normalized.includes("thermometer") ||
    normalized.includes("heat")
  ) {
    return "temperature-measurement";
  }

  // Flushing
  if (
    normalized.includes("flush") ||
    normalized.includes("chilled water") ||
    normalized.includes("pipe") ||
    normalized.includes("hydronic")
  ) {
    return "chilled-water-flushing";
  }

  // Airflow
  if (
    normalized.includes("airflow") ||
    normalized.includes("air flow") ||
    normalized.includes("cfm") ||
    normalized.includes("anemometer") ||
    normalized.includes("hood")
  ) {
    return "airflow-measurement";
  }

  // Balancing / TAB
  if (
    normalized.includes("balancing") ||
    normalized.includes("tab") ||
    normalized.includes("adjusting")
  ) {
    return "hvac-tab";
  }

  // Commissioning
  if (
    normalized.includes("commission") ||
    normalized.includes("commissioning") ||
    normalized.includes("cx")
  ) {
    return "hvac-commissioning";
  }

  // Services
  if (
    normalized.includes("service") ||
    normalized.includes("services") ||
    normalized.includes("provide") ||
    normalized.includes("offer")
  ) {
    return "hvac-services";
  }

  // What is HVAC
  if (normalized.includes("hvac") || normalized.includes("heating") || normalized.includes("ventilation")) {
    return "what-is-hvac";
  }

  // Fuzzy check in keywords
  for (const item of Object.values(KNOWLEDGE_BASE)) {
    for (const kw of item.keywords) {
      if (normalized.includes(kw) || kw.includes(normalized)) {
        return item.id;
      }
    }
  }

  return null;
};
