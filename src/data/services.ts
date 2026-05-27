export interface ServiceProduct {
  name: string;
  image: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  category: string;
  icon: string;
  heroImage: string;
  keyStats: { value: string; label: string }[];
  overview: string;
  whyMatters: string;
  benefits: string[];
  processSteps: ServiceStep[];
  products: ServiceProduct[];
  faqs: ServiceFAQ[];
  formFields: { name: string; label: string; type: string; options?: string[] }[];
  seoTitle: string;
  seoDescription: string;
}

const P = "/images/products";

export const services: ServiceData[] = [
  {
    slug: "waterproofing",
    title: "Waterproofing Services",
    tagline: "Stop Leaks Before They Destroy What You Built.",
    heroDescription: "Professional waterproofing for terraces, basements, bathrooms, and retaining walls — applied on-site by trained specialists using high-performance systems.",
    category: "Application Services",
    icon: "Droplets",
    heroImage: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=1400",
    keyStats: [
      { value: "15+", label: "Years Experience" },
      { value: "500+", label: "Projects Delivered" },
      { value: "10yr", label: "Workmanship Warranty" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    overview: "Water damage is one of the most destructive — and most preventable — problems in construction. In Gujarat's extreme climate, with temperatures swinging from 45°C summers to monsoon-driven moisture, waterproofing failure costs property owners lakhs in repairs. Our waterproofing service is designed for the Indian climate: we assess root causes, recommend the right system for your specific structure, and execute with precision using only proven, high-performance products.",
    whyMatters: "A water leak is not just a cosmetic issue. Uncontrolled moisture weakens RCC structures, triggers rebar corrosion, destroys interior finishes, and creates unhealthy living conditions. In residential buildings, a leaking terrace can destroy two floors below. In basements, hydrostatic pressure compromises the entire foundation. Getting waterproofing right the first time is always cheaper than remediation.",
    benefits: [
      "On-site assessment before any application — no guesswork",
      "Terrace and rooftop waterproofing with liquid membranes",
      "Basement and underground structure waterproofing",
      "Bathroom and wet area waterproofing — tile backing and slopes",
      "Crystalline waterproofing for concrete structures",
      "2K elastic polymer-modified membranes",
      "Cement-based systems for water tanks and sumps",
      "Water tank repair and coating",
      "Long-lasting protection — tested to 0.5 bar hydrostatic pressure",
      "Guaranteed workmanship with follow-up inspection",
    ],
    processSteps: [
      { number: "01", title: "Site Inspection", description: "Our team visits your site, identifies the source of the issue, assesses the substrate condition, and documents problem areas — before quoting anything." },
      { number: "02", title: "System Design", description: "We select the optimal waterproofing system based on your substrate type, exposure to water, access constraints, and budget — not a one-size-fits-all answer." },
      { number: "03", title: "Surface Preparation", description: "We clean, repair cracks, fill honeycombs, and prepare the substrate to the required standard. No good membrane adheres to a poor surface." },
      { number: "04", title: "Primer & Membrane Application", description: "Primer is applied first, then the membrane system is installed to the correct coverage and thickness — verified using wet-film gauges." },
      { number: "05", title: "Quality Check & Flood Test", description: "All terraces and basements are flood-tested for 24–48 hours before handover. We confirm zero leaks before we leave." },
      { number: "06", title: "Handover & Warranty", description: "You receive a written warranty card for workmanship. We provide post-application care instructions and remain reachable for any follow-up." },
    ],
    products: [
      { name: "Smarzkot Advanced", image: `${P}/SMARZKOT-ADVANCED.png` },
      { name: "Polycote BB", image: `${P}/POLYCOTE-BB.png` },
      { name: "Polycote WH100", image: `${P}/POLYCOTE-WH100.png` },
      { name: "Redwop PU-200", image: `${P}/REDWOP-PU-200.png` },
      { name: "Polycote WH-1", image: `${P}/POLYCOTE-WH-1.png` },
      { name: "Polycote CWP", image: `${P}/POLYCOTE_CWP.png` },
      { name: "Redoflex PG", image: `${P}/REDOFLEX-PG.png` },
      { name: "Redoseal", image: `${P}/REDOSEAL.png` },
    ],
    faqs: [
      { q: "How long does waterproofing last?", a: "A properly applied waterproofing system typically lasts 8–15 years depending on the system used, UV exposure, and foot traffic on the terrace. We use systems rated for minimum 10 years. Regular inspection every 2–3 years is recommended." },
      { q: "Can waterproofing be done in the monsoon?", a: "For new construction or dry-substrate applications, we prefer a window of dry weather (2–3 days minimum). However, crystalline systems and cementitious coatings can be applied in damp conditions. We plan work around weather forecasts." },
      { q: "My terrace is already tiled — do you need to break the tiles?", a: "In many cases, no. We can apply an injection-based or crack-injection repair from below, or use a surface-applied liquid membrane over the existing tiles if they are structurally sound and bonded. We assess this on-site." },
      { q: "Do you provide a warranty?", a: "Yes — we provide a written workmanship warranty. Material warranties are backed by the manufacturer. Our standard workmanship warranty is 1–3 years; longer-term contracts are available for commercial projects." },
      { q: "What is the cost of waterproofing per square foot?", a: "Cost depends on the system selected, area, substrate condition, and accessibility. Typical range in Rajkot is ₹40–₹120/sqft for standard systems. We provide a detailed quote after the site inspection — no surprises." },
      { q: "What is the difference between liquid membrane and crystalline waterproofing?", a: "Liquid membranes form a physical barrier on the surface — ideal for terraces, rooftops, and external walls. Crystalline systems penetrate the concrete and react with moisture to block capillary pores from within — ideal for water tanks, basements, and structural concrete. We recommend the right system after site assessment." },
    ],
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "location", label: "Project Location in Rajkot", type: "text" },
      { name: "type", label: "Type of Area", type: "select", options: ["Terrace / Rooftop", "Basement", "Bathroom / Wet Area", "Water Tank / Sump", "Retaining Wall", "Other"] },
      { name: "area", label: "Approximate Area (sq ft)", type: "text" },
      { name: "issue", label: "Describe the Issue", type: "textarea" },
    ],
    seoTitle: "Waterproofing Services Rajkot — Terrace, Basement & Bathroom | SJS Architecture Solutions",
    seoDescription: "Professional waterproofing services in Rajkot — terrace, basement, bathroom, water tanks. Liquid membranes, crystalline systems, 2K polymer coatings. 10yr warranty.",
  },

  {
    slug: "epoxy-grout",
    title: "Epoxy Grout Work",
    tagline: "Joints That Never Stain. Surfaces That Never Fail.",
    heroDescription: "Expert epoxy grouting for kitchens, hospitals, factories, and commercial spaces — stain-resistant, chemical-resistant, hygienic joints that last decades.",
    category: "Application Services",
    icon: "Layers",
    heroImage: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg?auto=compress&cs=tinysrgb&w=1400",
    keyStats: [
      { value: "200+", label: "Commercial Projects" },
      { value: "20yr", label: "Joint Lifespan" },
      { value: "100%", label: "Stain Resistant" },
      { value: "15+", label: "Colour Options" },
    ],
    overview: "Standard cement grout is the weakest element in any tiled surface — it stains, cracks, harbours bacteria, and absorbs moisture. In commercial kitchens, food processing units, hospitals, and factories, this is not just an aesthetic failure, it's a hygiene and compliance failure. Epoxy grout eliminates all these problems. Our application team specialises in epoxy grouting for demanding environments, delivering flawless, glass-smooth joints that pass FSSAI and hospital hygiene standards.",
    whyMatters: "In Gujarat's food processing hubs, manufacturing facilities, and high-end residential projects, hygiene and durability are non-negotiable. Cement grout absorbs bacteria, spills, and cleaning chemicals — discoloring within months and becoming a contamination risk. Epoxy grout is virtually impermeable, withstands chemical cleaning agents, acids, and alkalis, and maintains appearance for 15–20 years. For commercial spaces, it's not a premium — it's a requirement.",
    benefits: [
      "Stain-resistant and impermeable — no absorption of oils, spills, chemicals",
      "Chemical-resistant — ideal for acid-wash and bleach-based cleaning regimes",
      "Hygienic — smooth, non-porous surface that doesn't harbour bacteria",
      "Food-safe grades available — compliant with FSSAI-grade kitchen requirements",
      "Ideal for hospitals, OTs, kitchens, factories, food processing units",
      "High-traffic floor grouting — resistant to abrasion and heavy loads",
      "Both new installation and re-grouting of existing tile joints",
      "Decorative options — glitter, metallic, and colour-matched epoxy grouts",
      "UV-stable — colour does not fade from sunlight exposure",
      "15–20 year expected joint lifespan under normal conditions",
    ],
    processSteps: [
      { number: "01", title: "Surface & Joint Assessment", description: "We evaluate tile type, joint width, substrate condition, and the chemical/mechanical demands of the space before selecting the right epoxy system." },
      { number: "02", title: "Substrate Cleaning", description: "Joints are cleaned of any existing grout residue, dust, oil, and contamination. Substrate must be dry and free of release agents for epoxy adhesion." },
      { number: "03", title: "Epoxy Mixing", description: "Two-component epoxy grout (resin + hardener) is mixed in the exact ratio per manufacturer specification. Pot life is managed to ensure consistent application." },
      { number: "04", title: "Application & Pressing", description: "Epoxy is pressed into joints using float technique, ensuring full fill with no voids or air pockets — critical for chemical resistance and durability." },
      { number: "05", title: "Surface Cleaning", description: "Excess epoxy is cleaned from tile faces before curing begins. This stage requires speed and precision — our trained crew handles it efficiently." },
      { number: "06", title: "Curing & Inspection", description: "Epoxy cures to full hardness in 24–48 hours. We inspect joint continuity, colour consistency, and surface level before final sign-off." },
    ],
    products: [
      { name: "Eptile Grout Glitter", image: `${P}/EPTILE-GROUT-GLITTER-1.png` },
      { name: "Tile Grout", image: `${P}/TILE-GROUT.png` },
      { name: "Recleaner 100", image: `${P}/RECLEANER-100.png` },
      { name: "Teratile Platinum", image: `${P}/TERATILE-PLATIUM.png` },
      { name: "Butabond SBR", image: `${P}/BUTABOND-SBR.png` },
      { name: "Primer WB", image: `${P}/PRIMER-WB.png` },
    ],
    faqs: [
      { q: "Is epoxy grout necessary for homes, or only for commercial spaces?", a: "Epoxy grout is excellent for any area subject to frequent cleaning, moisture, or staining — kitchen counters, kitchen floors, bathroom floors, and outdoor areas. For living room or bedroom floors with light-coloured tiles, it's a premium choice. For commercial kitchens and factories, it's essential." },
      { q: "Can you re-grout over existing cement grout with epoxy?", a: "Yes. We remove the existing cement grout to a minimum depth (typically 5–8mm), clean the joint thoroughly, and apply epoxy grout. Full joint removal is required for proper adhesion — partial raking is not sufficient." },
      { q: "Does epoxy grout require special maintenance?", a: "No special maintenance is required. Epoxy joints can be cleaned with standard household cleaners, industrial degreasers, or diluted acids without damage. They do not need sealing or retreatment." },
      { q: "How long does epoxy grouting take for a typical kitchen?", a: "A 200–300 sqft kitchen floor can typically be grouted in one day, with a second visit for final cleaning and inspection. Commercial projects are scheduled in sections to minimise disruption to operations." },
      { q: "What joint width is suitable for epoxy grout?", a: "Epoxy grout works best in joints of 2mm to 10mm width. Very narrow joints (<2mm) may not achieve full fill. Very wide joints (>10mm) may require a modified epoxy or aggregate-filled system — we advise on this during assessment." },
      { q: "Is epoxy grout slip-resistant for wet floors?", a: "Standard epoxy grout has a smooth finish. For wet areas requiring slip resistance (commercial kitchen floors, hospital corridors), we use textured or anti-slip epoxy systems that meet IS standards." },
    ],
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "location", label: "Project Location", type: "text" },
      { name: "spaceType", label: "Type of Space", type: "select", options: ["Residential Kitchen", "Commercial Kitchen", "Hospital / Clinic", "Factory / Industrial", "Food Processing Unit", "Retail / Showroom", "Other"] },
      { name: "area", label: "Approximate Area (sq ft)", type: "text" },
      { name: "existing", label: "New Installation or Re-Grouting?", type: "select", options: ["New Installation", "Re-Grouting Existing Tiles", "Not Sure"] },
      { name: "message", label: "Additional Details", type: "textarea" },
    ],
    seoTitle: "Epoxy Grout Work Rajkot — Kitchen, Hospital, Factory Tiling | SJS Architecture Solutions",
    seoDescription: "Expert epoxy grouting services in Rajkot. Stain-resistant, chemical-resistant tile joints for kitchens, hospitals, factories. New & re-grouting. Call for site assessment.",
  },

  {
    slug: "chemicals-supply",
    title: "Construction Chemicals Supply",
    tagline: "Every Chemical You Need. Always In Stock.",
    heroDescription: "Rajkot's most complete construction chemicals supplier — from concrete admixtures to waterproofing, tile adhesives to repair mortars, all under one roof.",
    category: "Product Supply",
    icon: "Package",
    heroImage: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1400",
    keyStats: [
      { value: "50+", label: "Product Categories" },
      { value: "500+", label: "Happy Clients" },
      { value: "Same Day", label: "Delivery in Rajkot" },
      { value: "ISI", label: "Certified Products" },
    ],
    overview: "Construction chemical selection is a technical decision that most sites get wrong — buying based on price rather than performance, or using the wrong product for the substrate and exposure conditions. SJS Architecture Solutions is not just a distributor; we are your technical partner. Every product we stock has been evaluated for performance in Gujarat's climate, and our team provides application guidance alongside supply — so you get the right product and know how to use it.",
    whyMatters: "India's construction chemicals market is expected to exceed ₹25,000 crore by 2027, driven by infrastructure expansion, rising standards for waterproofing and finishing, and demand from Gujarat's growing real estate sector. Using substandard or incorrectly specified chemicals is one of the leading causes of structural failure, water seepage, and finishing defects on Indian construction sites. The right product, correctly applied, is a fraction of the cost of remediation.",
    benefits: [
      "Complete range — admixtures, waterproofing, adhesives, grouts, coatings, repair mortars",
      "ISI-certified and tested products from leading manufacturers",
      "Expert guidance on product selection for your specific application",
      "Same-day delivery within Rajkot; fast supply across Gujarat",
      "Project-scale procurement support — bulk pricing available",
      "Ready stock — no waiting for orders or lead times",
      "Building materials: FRP manholes, water tanks, white cement, wall putty",
      "Technical data sheets and application guides provided with every product",
    ],
    processSteps: [
      { number: "01", title: "Requirement Discussion", description: "Share your project type, substrate, and application — we guide you to the right product range rather than asking you to figure it out alone." },
      { number: "02", title: "Product Recommendation", description: "We shortlist 1–2 recommended products with technical comparison, dosage rates, and expected coverage so you can make an informed decision." },
      { number: "03", title: "Quotation & Confirmation", description: "We provide a clear written quotation with product names, quantities, unit pricing, and delivery timeline — no hidden charges." },
      { number: "04", title: "Dispatch & Delivery", description: "Products are dispatched from our Rajkot warehouse. Same-day delivery within city limits for orders placed before 2 PM. Outstation supply coordinated with timeline." },
      { number: "05", title: "On-Site Support", description: "For first-time use of any product, our team can visit site to demonstrate correct mixing ratios, application technique, and curing requirements." },
      { number: "06", title: "After-Sale Follow-Up", description: "We check in after application to confirm performance and address any questions. Long-term relationships with contractors and developers are how we operate." },
    ],
    products: [
      { name: "Plastcone AW", image: `${P}/PLASTCONE-AW.png` },
      { name: "Plastcone HS200", image: `${P}/PLASTCONE-HS200.png` },
      { name: "Smarzkot Advanced", image: `${P}/SMARZKOT-ADVANCED.png` },
      { name: "Teratile Platinum", image: `${P}/TERATILE-PLATIUM.png` },
      { name: "Redwop PU-200", image: `${P}/REDWOP-PU-200.png` },
      { name: "Blockfix", image: `${P}/BLOCKFIX.png` },
      { name: "Polycote WH100", image: `${P}/POLYCOTE-WH100.png` },
      { name: "Mazikcoat-1", image: `${P}/MAZIKCOAT-1.png` },
    ],
    faqs: [
      { q: "Do you supply only to contractors, or to individuals too?", a: "We supply to everyone — individual homeowners, civil contractors, builders, architects, and infrastructure companies. Pricing is based on quantity; larger orders receive better rates." },
      { q: "Can you deliver outside Rajkot?", a: "Yes. We supply across Saurashtra and Gujarat. For outstation orders, we coordinate transport and provide delivery timelines based on your location. Contact us for outstation pricing." },
      { q: "Do you provide technical support on how to use the products?", a: "Absolutely. This is a key part of what we do. Every product comes with a technical data sheet, and our team is available by phone or on-site visit for application guidance. We don't just sell — we help you get the result you need." },
      { q: "What brands do you stock?", a: "We stock products from Redwop and other leading Indian manufacturers. All products in our range are selected for performance in Indian climate conditions. We do not stock substandard or uncertified products." },
      { q: "Can you help with BOQ (Bill of Quantities) for chemicals?", a: "Yes — for larger projects, we can help prepare a chemical BOQ based on your drawings or area measurements. This includes product selection, coverage rates, and quantity estimation." },
      { q: "Do you have a physical store I can visit?", a: "Yes. Our Rajkot location is at PI-208, Sitaram Park, Dharti Tyres Street, Opp. Rajkot Taluka Police Station, Motamava, Rajkot — 360005. Walk-ins welcome during business hours." },
    ],
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "role", label: "You Are", type: "select", options: ["Contractor / Builder", "Civil Engineer / Architect", "Individual Homeowner", "Interior Designer", "Other"] },
      { name: "product", label: "Product / Category Needed", type: "text" },
      { name: "quantity", label: "Approximate Quantity", type: "text" },
      { name: "message", label: "Project Details or Questions", type: "textarea" },
    ],
    seoTitle: "Construction Chemicals Supply Rajkot — Admixtures, Waterproofing, Adhesives | SJS Architecture Solutions",
    seoDescription: "Complete construction chemicals supply in Rajkot — admixtures, waterproofing, tile adhesives, repair mortars, coatings. Same-day delivery. Expert technical guidance.",
  },

  {
    slug: "waterproofing-work",
    title: "On-Site Waterproofing Application",
    tagline: "The Right System. The Right Result. Every Time.",
    heroDescription: "Site-executed waterproofing tailored to your specific structure — from persistent leaking roofs to new construction terraces, damp walls to underground structures.",
    category: "Application Services",
    icon: "Hammer",
    heroImage: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1400",
    keyStats: [
      { value: "300+", label: "Terrace Projects" },
      { value: "Zero", label: "Call-Back Rate" },
      { value: "48hr", label: "Site Response" },
      { value: "All", label: "Structure Types" },
    ],
    overview: "There is a critical difference between supplying waterproofing chemicals and knowing how to apply them correctly. Product failure on Indian construction sites is rarely a product problem — it is almost always an application problem: wrong surface preparation, insufficient coverage, missed details at junctions, or no primer. Our application team is trained specifically in the systems we supply, which means we know the failure modes and how to prevent them.",
    whyMatters: "In Gujarat, monsoon-driven hydrostatic pressure, extreme UV exposure, and thermal cycling create particularly demanding conditions for waterproofing membranes. A terrace membrane that performs in the UK will fail within two monsoons in Rajkot without correct detailing at parapets, drain pockets, and service penetrations. Our application team has developed site-specific practices for Gujarat's climate — ensuring lasting performance rather than a temporary fix.",
    benefits: [
      "On-site assessment of root cause before any application begins",
      "Remedial waterproofing for active leaks and existing structures",
      "New construction waterproofing — terrace, basement, wet areas",
      "Parapet and junction detailing — the most common failure points",
      "Service penetration sealing — pipe sleeves, drainage outlets",
      "Retrofitting without breaking existing finishes where possible",
      "Thermal-resistant systems for Rajkot's extreme summer heat",
      "Underground water tank repair and interior coating",
      "Guaranteed workmanship — we return if there's a problem",
    ],
    processSteps: [
      { number: "01", title: "Leak Investigation", description: "We trace the source of leakage — which is often not where the water appears. Water travels through concrete and appears far from the entry point. Correct diagnosis is essential." },
      { number: "02", title: "Scope & Method Statement", description: "We define the scope of work, the system to be applied, surface preparation requirements, and the sequence of work — documented so both parties know what's being done." },
      { number: "03", title: "Surface Preparation", description: "Existing coatings, laitance, and contamination are removed. Cracks are chased and filled with polyurethane or cementitious repair mortar. The substrate is brought to the required surface profile." },
      { number: "04", title: "Primer Application", description: "Correct primer is applied and allowed to fully cure. Primer adhesion is critical — a membrane applied over uncured primer will delaminate under hydrostatic pressure." },
      { number: "05", title: "Membrane & Detail Work", description: "Membrane is applied in the specified number of coats at the required coverage. All details — junctions, corners, pipe penetrations, and drains — receive reinforcing fabric and extra coat." },
      { number: "06", title: "Test, Protection & Handover", description: "Flood test for a minimum 24 hours. Once confirmed watertight, a protection screed or layer is applied if required. Written completion report and warranty provided." },
    ],
    products: [
      { name: "Smarzkot B2Flex", image: `${P}/SMARZKOT-B2Flex.png` },
      { name: "Smarzkot Waterguard", image: `${P}/SMARZKOT-waterguard.png` },
      { name: "Bituflash 2MM", image: `${P}/BITUFLASH-2MM.png` },
      { name: "Polyurea Waterproofing", image: `${P}/POLYUREA-WATERPROOFING.jpeg` },
      { name: "Plugfast", image: `${P}/PLUGFAST.png` },
      { name: "Sealcrack", image: `${P}/SEALCRACK.png` },
      { name: "Fiber Glass Mesh", image: `${P}/FIBER-GLASS-MESH-145-GSM.png` },
      { name: "Backer Rod", image: `${P}/Backer-Rod.jpg` },
    ],
    faqs: [
      { q: "My terrace has been waterproofed twice and still leaks — what's different about your approach?", a: "Most repeat failures are caused by applying a new membrane over a failed substrate without addressing why the previous system failed: insufficient surface preparation, missed junctions, or wrong product selection. We begin every project with root-cause investigation, not just product application. We will tell you honestly if a complete strip-out is needed." },
      { q: "How long do I need to vacate the area during waterproofing application?", a: "Solvent-free systems (cementitious, water-based acrylics) allow re-entry within hours. Solvent-based or polyurethane systems require ventilation and 24–48hr cure time before foot traffic. We schedule work to minimise disruption." },
      { q: "Can waterproofing be applied in summer heat?", a: "Yes, with adjustments. We apply during early morning or late evening hours in peak summer, use shade where possible, and select products rated for high-temperature application. Cementitious and crystalline systems actually perform better in slightly warm conditions." },
      { q: "Do you handle repair of injection cracks in concrete?", a: "Yes — polyurethane injection for active water-bearing cracks and epoxy injection for structural crack repair are both part of our scope. We specify the correct material based on crack width, activity, and structural requirement." },
      { q: "What is the minimum area for which you take on-site work?", a: "We take on projects of all sizes — from a 200 sqft terrace to large commercial buildings. Smaller residential jobs are typically done in one visit; larger projects are planned in phases." },
    ],
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "address", label: "Site Address / Area in Rajkot", type: "text" },
      { name: "structureType", label: "Structure Type", type: "select", options: ["Residential Building", "Commercial Building", "Industrial / Factory", "New Construction", "Existing / Remedial", "Other"] },
      { name: "area", label: "Area to be Waterproofed (sq ft)", type: "text" },
      { name: "urgency", label: "Urgency", type: "select", options: ["Emergency — Active Leak", "Before Monsoon", "New Construction — Planned", "Flexible Timeline"] },
      { name: "message", label: "Describe the Problem", type: "textarea" },
    ],
    seoTitle: "Waterproofing Application Rajkot — Terrace Repair, Basement, Leaking Roof | SJS Architecture Solutions",
    seoDescription: "On-site waterproofing application in Rajkot — remedial and new construction. Terrace, basement, bathroom, retaining walls. Flood-test guaranteed. Contact for site visit.",
  },

  {
    slug: "premix-work",
    title: "Premix Mortar Application",
    tagline: "Consistent Quality. Faster Completion. No Wastage.",
    heroDescription: "On-site premix mortar application for plastering, block laying, tile fixing, and floor screeding — delivering uniform quality and faster project timelines.",
    category: "Application Services",
    icon: "ClipboardList",
    heroImage: "https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1400",
    keyStats: [
      { value: "30%", label: "Faster Than Site Mix" },
      { value: "Zero", label: "Batch Variation" },
      { value: "100+", label: "Residential Projects" },
      { value: "AAC", label: "Specialist Block Work" },
    ],
    overview: "Site-batched cement mortar is the standard on Indian construction sites — and it is the source of enormous quality variation, material waste, and finishing defects. Mortar mixed by hand on site varies in water-cement ratio batch to batch, leading to inconsistent strength, shrinkage cracking, and poor adhesion. Ready-mix and premix systems solve this problem: consistent factory-batched formulations that arrive at site ready to use, delivering predictable performance every time.",
    whyMatters: "Gujarat's construction market is transitioning rapidly from traditional site-mix to premix systems, particularly for AAC block projects, high-end residential finishes, and fast-track commercial construction. AAC blocks require thin-bed adhesive mortars (not traditional cement-sand), and using the wrong mortar destroys the thermal and acoustic benefits of AAC. Tile adhesives, floor screeds, and plaster all perform dramatically better with factory-calibrated dry-mix systems.",
    benefits: [
      "Wall plastering with ready-mix plaster — smooth, consistent, crack-resistant",
      "AAC block laying with thin-bed block adhesive — correct bond, no cracking",
      "Traditional brick laying with modified polymer mortar",
      "Tile fixing with premix adhesive — correct coverage, no lippage",
      "Floor screed and levelling — pumpable or hand-applied",
      "Consistent mix ratios in every batch — factory quality on site",
      "Reduced material wastage vs site-batched mortar",
      "Faster application — less time mixing, more time placing",
      "Polymer-modified systems — better adhesion, flexibility, durability",
    ],
    processSteps: [
      { number: "01", title: "Scope & Specification", description: "We review your drawings and specification to identify which premix systems are required: AAC block adhesive, plaster, tile adhesive, screed — each application needs a different product." },
      { number: "02", title: "Surface Preparation", description: "Substrate is checked for level, plumb, contamination, and moisture. Any loose material, oil, or laitance is removed. Surfaces are pre-wetted where required by the product specification." },
      { number: "03", title: "Material Mixing", description: "Premix bags are mixed with the exact water quantity per manufacturer guidance using a paddle mixer — not trowel mixing. Consistency is checked with every batch." },
      { number: "04", title: "Application", description: "Material is applied using the correct technique for the system — spray plaster, trowel plaster, notched trowel for tile adhesive, screed bar for flooring. Thickness is controlled throughout." },
      { number: "05", title: "Finishing & Curing", description: "Surfaces are finished to the required level and texture. Curing is done per product spec — typically wet curing for 3–7 days for plaster and screed to prevent shrinkage cracking." },
      { number: "06", title: "Quality Inspection", description: "We check for hollowness, cracking, levelness, and adhesion before signing off. Any patches or defects are corrected before the work is handed over for the next trade." },
    ],
    products: [
      { name: "Blockfix", image: `${P}/BLOCKFIX.png` },
      { name: "Blockfast AC100", image: `${P}/BLOCKFAST-AC100.png` },
      { name: "Blockfast Elop 24", image: `${P}/BLOCKFAST-ELOP-24.png` },
      { name: "Ready Mix Plaster", image: `${P}/Ready-Mix-Plaster.jpg` },
      { name: "Whitplast SF", image: `${P}/WHITPLAST-SF.png` },
      { name: "Teratile Platinum", image: `${P}/TERATILE-PLATIUM.png` },
      { name: "Mattcem SL", image: `${P}/MATTCEM-SL.png` },
      { name: "Wall Putty", image: `${P}/Wall-Putty.jpg` },
    ],
    faqs: [
      { q: "What is the difference between premix and site-batched mortar?", a: "Premix (dry-mix) mortar is factory-batched with precise proportions of cement, sand, polymer additives, and retarders — you add only water on site. Site-batched mortar is mixed from raw materials on site, with no process control. Premix delivers consistent strength, better workability, and less waste." },
      { q: "Is premix plaster suitable for AAC block walls?", a: "Yes — in fact, premix plaster is strongly recommended for AAC blocks. AAC has high suction and low density, requiring modified polymer plaster for proper adhesion. Standard sand-cement plaster applied to AAC frequently cracks due to suction mismatch." },
      { q: "Does premix tile adhesive perform better than cement-sand for tiles?", a: "Significantly better. Premix tile adhesive provides 3–5x higher pull-off strength than cement-sand, better coverage uniformity, open time for adjustment, and flexibility to accommodate minor substrate movement. It is now the standard for any tiles larger than 300×300mm." },
      { q: "Can you supply the premix materials as well as apply them?", a: "Yes — we supply the materials through our distribution arm and apply them through our application team. This is a key advantage: single-source responsibility and guaranteed product authenticity." },
      { q: "What is the cost of premix plastering per sqft?", a: "Material + application cost for premix plaster ranges from ₹35–₹65/sqft depending on wall type, surface condition, and finish requirement. This is competitive with traditional plaster when you factor in material waste reduction and rework savings." },
    ],
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "location", label: "Project Location", type: "text" },
      { name: "workType", label: "Type of Work Required", type: "select", options: ["Wall Plastering", "AAC Block Laying", "Tile Fixing", "Floor Screed / Levelling", "Multiple / Full Project", "Other"] },
      { name: "area", label: "Approximate Area (sq ft)", type: "text" },
      { name: "timeline", label: "Project Timeline", type: "text" },
      { name: "message", label: "Additional Details", type: "textarea" },
    ],
    seoTitle: "Premix Mortar Application Rajkot — Plastering, AAC Block, Tile Fixing | SJS Architecture Solutions",
    seoDescription: "Premix mortar application in Rajkot — wall plastering, AAC block laying, tile adhesive, floor screeding. Consistent quality, faster completion. Supply and apply.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
