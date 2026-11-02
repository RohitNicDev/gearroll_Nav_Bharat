export const SITE_URL = 'https://www.gearroll.com';
export const ASSET = `${SITE_URL}/assets/images`;

export const images = {
  hero: `${ASSET}/strip-mill.jpg`,
  about: `${ASSET}/about-2.webp`,
  stripMill: `${ASSET}/strip-mill.jpg`,
  rollingMill: `${ASSET}/rolling-mill.jpg`,
  gearbox: `${ASSET}/gear-box.jpg`,
  slitMill: `${ASSET}/slit-rolling-mill.jpg`,
  housingless: `${ASSET}/housing-less-mill-stand.jpg`,
  coolingBed: `${ASSET}/cooling-bed.jpg`,
  customized: `${ASSET}/customized-solution.jpg`,
  gearGrinder: `${ASSET}/hofler-gear.jpg`,
  why1: `${ASSET}/why-1.jpg`,
  why2: `${ASSET}/why-2.jpg`,
  why4: `${ASSET}/why-4.jpg`,
  missionVision: `${ASSET}/info-1.jpg`,
  client1: `${ASSET}/client-1.jpg`,
  clientLogos: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((number) => `${ASSET}/client-${number}.jpg`),
};

export const mainNav = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about.html', children: [
    { label: 'Company Profile', path: '/about.html' },
    { label: 'Our Existence', path: '/existence.html' },
    { label: 'Our Vision & Mission', path: '/vision-mission.html' },
    { label: "Director's Message", path: '/director-message.html' },
  ] },
  { label: 'Products', path: '/hot-rolling-mill.html', children: [
    { label: 'Hot Rolling Mill', path: '/hot-rolling-mill.html', children: [
      { label: 'Slit Rolling Mill', path: '/slit-rolling-mill.html' },
      { label: 'Strip Rolling Mill', path: '/strip-rolling-mill.html' },
      { label: 'Section Rolling Mill', path: '/section-rolling-mill.html' },
      { label: 'TMT Bars Rolling Mill', path: '/tmt-bars-rolling-mill.html' },
    ] },
    { label: 'Gear Grinding Solutions', path: '/gear-grinding-solutions-din-1-2.html' },
    { label: 'Industrial Gearbox', path: '/industrial-gear-boxes.html', children: [
      { label: 'Planetary Gearbox', path: '/planetary-gearboxes.html' },
      { label: 'Helical Gearbox', path: '/helical-gear-box.html' },
    ] },
    { label: 'Hot Rolling Mill Equipment', path: '/hot-rolling-mill-equipment.html', children: [
      { label: 'Continuous Rotating Shears', path: '/shears.html' },
      { label: 'Crank Shear Machine', path: '/crank-shear-machine.html' },
      { label: 'Housingless Stands', path: '/housingless-stands.html' },
      { label: 'Cooling Bed', path: '/cooling-bed.html' },
      { label: 'Twin Channel Cooling Bed', path: '/twin-channel-cooling-bed.html' },
      { label: 'TMT Quenching Box', path: '/tmt-quenching-box.html' },
      { label: 'Tying Machine', path: '/tying-machine.html' },
    ] },
    { label: 'Gear Grinding Solution', path: '/gear-grinding-solution.html' },
    { label: 'Customized Solution', path: '/customized-solution.html' },
    { label: 'Rolling Mill Stand', path: '/rolling-mill-stand.html' },
    { label: 'Mill Stands', path: '/mill-stands.html' },
  ] },
  { label: 'Infrastructure', path: '/infrastructure.html' },
  { label: 'Clients', path: '/client.html' },
  { label: 'Contact Us', path: '/contact.html' },
  { label: 'Enquiry', path: '/enquiry.html' },
  { label: 'Blog', path: '/blog/' },
];

export const productPages = [
  {
    title: 'Hot Rolling Mill', path: '/hot-rolling-mill.html', image: images.rollingMill,
    eyebrow: 'Rolling Mill Solutions', excerpt: 'Integrated hot rolling mill plants engineered around your required product mix and production capacity.',
    paragraphs: [
      'Nav Bharat designs and supplies complete turnkey hot rolling mill solutions, from engineering and manufacturing to on-site erection and commissioning. With decades of experience, the mills are planned around each customer’s product mix, layout constraints and future expansion, helping steel producers improve productivity and quality.',
      'The published product information describes complete turnkey systems for rolling billets into bars, sections and strips. A typical line can include a reheating furnace, roughing stands, intermediate and finishing stands, hydraulic automatic gauge control, quick roll-change systems, laminar cooling, loopers, coilers and PLC-based process controls.',
      'Typical published ranges include 0.3–6 million tonnes per annum capacity, 100–150 mm square billets, bar and section finishing speeds up to 20–30 m/s, and strip thickness from 1.5–25 mm depending on the selected configuration. The final design is application-specific.'
    ], bullets: ['Automatic or semi-automatic configurations', 'Custom-designed to the client’s specifications', 'Optimized for energy efficiency and productivity', 'Complete erection and commissioning support', 'TMT rebar sizes 8–50 mm, sections, wire rods and strips depending on line configuration'],
  },
  {
    title: 'Slit Rolling Mill', path: '/slit-rolling-mill.html', image: images.slitMill,
    eyebrow: 'Hot Rolling Mill', excerpt: 'Slit rolling mill systems for higher output of small-diameter TMT bars.',
    paragraphs: [
      'Slit rolling configurations increase output for small-diameter TMT bars by dividing a single incoming billet into multiple strands and making efficient use of reheating and rolling capacity. The process can use dog-bone and slit-pass designs, multiple strands through housingless finishing stands, followed by controlled cooling, flying shears and walking-beam cooling beds.',
      'The published product information describes line configurations around 130–180 tonnes per hour for 10 mm bars, 2–5 strands, bar sizes of approximately 5.5–20 mm and finishing speeds of 13–20 m/s. Equipment and performance depend on the mill design and product mix.',
      'The site also identifies potential power and fuel savings for slit sizes, fewer required stands and rolls, automatic screw-down, hydraulic gauge control (approximately ±0.15 mm), laminar cooling, loopers, quick roll changes and PLC automation.'
    ], bullets: ['Multiple-strand rolling for increased throughput', 'Dog-bone and slit-pass design', 'Housingless finishing stands and automatic screw-down', 'Controlled strand separation, cooling and flying shears', 'Line arrangement and commissioning support'],
  },
  {
    title: 'Strip Rolling Mill', path: '/strip-rolling-mill.html', image: images.stripMill,
    eyebrow: 'Hot Rolling Mill', excerpt: 'Strip rolling mill lines designed for consistent dimensions and high-volume steel production.',
    paragraphs: [
      'The source website describes its strip rolling mills as flexible and customized solutions supported by knowledge of the technological process, high-performance control systems, reliable drive systems and strip-rolling process models. Powerful drives and automation are intended to optimize the rolling process from the reheating furnace to the downstream area.',
      'Published typical ranges include 300,000–400,000 tonnes per annum, strip thickness of 1.5–8 mm, width of 150–350 mm, coil weight up to 3 tonnes and finishing speed up to 90 m/s. The mill arrangement may include reversing roughing and edging equipment followed by 6–7 continuous 4-high finishing stands.',
      'Hydraulic gauge control (approximately ±0.15 mm), laminar cooling, PLC controls, quick roll changes and coil handling can be selected to meet the specification. Final capacities and tolerances depend on the project design.'
    ], bullets: ['Customer-specific strip dimensions and output', 'Roughing, edging and continuous finishing stands', 'Hydraulic gauge control and automation options', 'Laminar cooling and coil-handling integration'],
  },
  {
    title: 'Section Rolling Mill', path: '/section-rolling-mill.html', image: images.rollingMill,
    eyebrow: 'Hot Rolling Mill', excerpt: 'Rolling mill plants for structural sections such as beams, channels, angles and flats.',
    paragraphs: [
      'Nav Bharat manufactures heavy and light section rolling mill plants for processing reheated steel into structural profiles. Stand configuration and pass design are selected for the required product dimensions, throughput and operating conditions, with attention to automation and applicable environmental requirements.',
      'The published technical information references 2-high, 3-high and universal horizontal-vertical arrangements; work-roll diameters around 300–600 mm; closed-frame housings; hydraulic gap adjustment of approximately ±0.5 mm; rolling forces of up to 750–2,000 tonnes and operating speeds of approximately 1–15 m/s.',
      'Quick roll changing, anti-cambering and horizontal/vertical adjustment are among the listed design considerations. Final equipment specifications are project-specific.'
    ], bullets: ['Beams, channels, angles, flats and other structural sections', '2-high, 3-high and universal H/V stand arrangements', 'Product-led pass design and stand selection', 'Quick roll change and adjustment options', 'Integrated plant engineering and commissioning'],
  },
  {
    title: 'Gear Grinding Solutions (DIN 1-2)', path: '/gear-grinding-solutions-din-1-2.html', image: images.gearGrinder,
    eyebrow: 'Precision Gear Manufacturing', excerpt: 'Precision gear grinding for demanding power-transmission applications.',
    paragraphs: ['Nav Bharat manufactures hardened and ground gears for demanding power-transmission applications. Precision gear grinding and in-process inspection are used to check profile, lead, pitch and surface finish.', 'The published service information references Hofler high-precision gear-grinding systems for helical and spur gears, DIN 1 and 2 accuracy standards, gears up to 2000 mm diameter and modules from 1–20 mm.'],
    bullets: ['Hofler high-precision gear-grinding systems', 'DIN 1 & 2 accuracy standard referenced by the company', 'Profile grinding and post-grind measurement', 'Rolling mill gearboxes, pinion stands and high-speed drives'],
  },
  {
    title: 'Industrial Gear Boxes', path: '/industrial-gear-boxes.html', image: images.gearbox,
    eyebrow: 'Power Transmission', excerpt: 'Heavy-duty, high-efficiency industrial gearboxes for rolling-mill drives.',
    paragraphs: [
      'Nav Bharat Engineering Works supplies heavy-duty industrial gearboxes for rolling-mill and other demanding drive applications. Gearbox layouts use helical and hardened gears, stress-relieved housings and application-specific output arrangements for high loads and reliable power transmission.',
      'The product page publishes power ratings of approximately 500–4,500 kW, torque up to 2,500 kNm, efficiency in the 96–99% range and low backlash below 0.36 mm for listed configurations. Gear materials, tooth hardening, lubrication, bearing selection and housing design are specified to suit the duty.',
      'Typical applications include roughing and finishing stands and pinion drives in hot- and cold-rolling mills. These figures describe published product ranges, not a guarantee for every model.'
    ], bullets: ['500–4,500 kW power range listed', 'Torque ratings up to 2,500 kNm listed', 'Helical and hardened gear arrangements', 'Forced lubrication and stress-relieved housing options', 'Rolling-mill, roughing-stand and finishing-stand applications'],
  },
  {
    title: 'Planetary Gearboxes', path: '/planetary-gearboxes.html', image: images.gearbox,
    eyebrow: 'Industrial Gearbox', excerpt: 'Compact planetary gearbox solutions for high-torque applications.',
    paragraphs: [
      'Planetary gearboxes provide high torque in a compact envelope, with low backlash and high torsional stiffness. The source website describes bevel-planetary stages, horizontal input and vertical flanged output arrangements, thrust bearings and hydro-lubricated bearing options.',
      'Published ratings include power up to 5,600 kW, torque up to 2,500 kNm and efficiency up to 97%, depending on the configuration. Application examples include rolling mills, vertical roller mills, conveyors and mixers.'
    ], bullets: ['Compact layout with high torque density', 'Bevel-planetary stage options', 'Horizontal input and vertical flanged output configurations', 'Thrust-bearing and lubrication options', 'Rolling mills, vertical roller mills, conveyors and mixers'],
  },
  {
    title: 'Helical Gear Box', path: '/helical-gear-box.html', image: images.gearbox,
    eyebrow: 'Industrial Gearbox', excerpt: 'Helical gearboxes for continuous-duty and high-shock industrial applications.',
    paragraphs: [
      'Nav Bharat’s helical gearboxes are described for continuous and high-shock duty. Small and medium housings may be fabricated from SAIL steel with ribbed stress zones; housings are stress-relieved and designed around the load and installation.',
      'The published ranges include 100–500 kW, torque up to 1,200 kNm, 3–4 stage vertical-helical arrangements, ratios from 10:1 to 60:1, input speeds around 700–1,500 rpm and efficiency of 96–98%. Case-carburized gears are listed at 58–60 HRC. SKF, FAG or NTN bearings, forced lubrication, external heat exchangers where needed and accurate shaft tolerances are also described.',
      'Typical uses include pinion stands and reduction drives. Actual ratings, ratios and service life depend on the selected design and operating conditions.'
    ], bullets: ['100–500 kW power range listed', 'Torque up to 1,200 kNm listed', 'Case-carburized gears and industrial bearing options', 'Forced lubrication and heat-exchanger options', 'Pinion stands and reduction drives'],
  },
  {
    title: 'Hot Rolling Mill Equipment', path: '/hot-rolling-mill-equipment.html', image: images.housingless,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Supporting equipment for rolling mill lines, including stands, shears, quenching and cooling systems.',
    paragraphs: [
      'Nav Bharat Engineering Works supplies equipment used across rolling-mill processing and finishing lines. The published equipment range includes mill stands, flying shears, quenching/TMT boxes, automatic cooling beds, crank shears, disc/drum shears, rolling-mill gearboxes, roughing/intermediate/finishing stands and cold shears.',
      'The site describes the equipment as designed for industrial service, with attention to robust construction, service life, efficiency and integration into the customer’s production process. Selection depends on product dimensions, throughput, line speed and plant layout.'
    ], bullets: ['Mill stands and roughing/intermediate/finishing stands', 'Flying, crank, disc/drum and cold shears', 'TMT quenching boxes and automatic cooling beds', 'Rolling-mill gearboxes and line auxiliaries', 'Tying and finishing-line equipment'],
  },
  {
    title: 'Continuous Rotating Shears', path: '/shears.html', image: images.rollingMill,
    eyebrow: 'Hot Rolling Mill Equipment', excerpt: 'High-speed shearing equipment for cutting moving bars within a rolling-mill line.',
    paragraphs: [
      'The source page describes a flying shear installed between the quenching box and cooling bed. It cuts TMT bars at temperatures above approximately 500°C to the required lengths while the product is moving through the line.',
      'Published ranges include 8–16 mm TMT bars and speeds up to 32 m/s. The listed construction includes a vertically split casing, double-cone torque coupling and case-carburized hardened gears. PLC control, pneumatic shifters, servo positioning and safety covers are also mentioned.'
    ], bullets: ['High-speed cutting of moving TMT bars', '8–16 mm bar size and up to 32 m/s listed', 'Gear-train and torque-coupling design', 'PLC control and servo-positioning options', 'Designed to reduce material loss in finishing lines'],
  },
  {
    title: 'Crank Shear Machine', path: '/crank-shear-machine.html', image: images.rollingMill,
    eyebrow: 'Hot Rolling Mill Equipment', excerpt: 'Crank-driven shear equipment for cropping bar and rod heads and tails.',
    paragraphs: [
      'The crank shear machine is used to crop the heads and tails of bars and rods in a rolling-mill line. The product page lists applications for bars up to 50 mm diameter and cutting speeds below 3 m/s.',
      'The design uses a crank-rocker mechanism and a vertical cutting edge intended to remain perpendicular to the stock. A robust flywheel drive, PLC operation, high cutting quality and minimized burrs are among the published characteristics. The site lists a 75–200 kW power range.'
    ], bullets: ['Cropping heads and tails of bars and rods', 'Bar diameters up to 50 mm listed', 'Cutting speeds below 3 m/s listed', 'Crank-rocker mechanism and flywheel drive', 'PLC operation and integration at roughing-mill entry'],
  },
  {
    title: 'Housingless Stands', path: '/housingless-stands.html', image: images.housingless,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'High-rigidity housingless stands designed for rapid roll changes and compact mill arrangements.',
    paragraphs: [
      'Housingless stands are designed around a compact cartridge with a closed stress path and roll balance intended to eliminate backlash. The source page describes horizontal, vertical, convertible and drop-in “joker” configurations for bars, wire rod, sections and beams.',
      'Published features include automatic spindle and utility connections, axial roll adjustment, automatic screw-down, self-balancing spindles and roll changes in under two minutes. The compact arrangement can reduce the need for heavy stand housings and crane handling during roll changes.'
    ], bullets: ['Compact, stiff cartridge design without heavy housings', 'Roll change in under two minutes listed', 'Automatic spindle, hydraulic and lubrication connections', 'Axial adjustment, auto screw-down and self-balancing spindles', 'Configurations for bars, wire rod, TMT, sections and strips'],
  },
  {
    title: 'Cooling Bed', path: '/cooling-bed.html', image: images.coolingBed,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Automatic cooling beds for uniform cooling and controlled handling of rolled bars and sections.',
    paragraphs: [
      'The automatic cooling bed receives TMT bars and other rolled products from the finishing stand and supports uniform air cooling and controlled handling before the cold shear or bundling line. A phased rake arrangement positions bars over toothed racks, levels their front ends and transfers counted bars downstream.',
      'The website lists typical ranges of 20–75 tonnes per hour, product diameters of 8–50 mm, lengths around 40–105 m and widths around 5–13.5 m. Layout and dimensions are selected to match the mill, bar size and production target. Motorized chains, automatic rakes, alignment controls and PLC options are described.'
    ], bullets: ['Uniform air cooling and automatic material handling', '20–75 t/h and 8–50 mm bar range published', 'Custom bed length and width for the mill layout', 'Straightening, alignment and anti-prebend handling options', 'TMT rebars, rounds, flats and angles'],
  },
  {
    title: 'Twin Channel Cooling Bed', path: '/twin-channel-cooling-bed.html', image: images.coolingBed,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Twin-channel cooling and transfer equipment for TMT bar rolling lines.',
    paragraphs: [
      'The twin-channel cooling bed provides uniform cooling and controlled transfer of TMT bars. The published arrangement uses dual water-cooled C-channels, hydraulic flaps and a cam mechanism to guide bars from the dividing shear and alternate them onto the rake bed.',
      'The source page lists speeds up to 21 m/s and handling capacity around 20 metric tonnes per hour. Timed flap opening, automatic/manual operation and integration with braking pinch rolls are described to help maintain alignment and limit warping.'
    ], bullets: ['Dual water-cooled C-channel arrangement', 'Hydraulic flaps and cam-operated transfer', 'Speed up to 21 m/s and around 20 MT/hour listed', 'PLC-timed opening with automatic/manual control', 'Designed to help maintain bar alignment and prevent warping'],
  },
  {
    title: 'TMT Quenching Box', path: '/tmt-quenching-box.html', image: images.rollingMill,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Controlled water-quenching systems for producing a hardened rim and ductile core in TMT bars.',
    paragraphs: [
      'The TMT quenching box provides intensive, controlled water quenching directly after rolling. Multiple water inlets and nozzles produce a hardened outer rim while retaining a ductile core; self-tempering follows as heat from the core moves toward the surface.',
      'The published product range includes 8–40 mm bars, throughput up to 1.2 tonnes per second and modular chambers approximately 6–12 m long. Listed operating details include a surface temperature of around 50–100°C with the core around 600–750°C during the relevant quenching stage, adjustable water flow and pressure, and PLC-controlled valves.'
    ], bullets: ['Multi-nozzle, high-pressure water quenching', '8–40 mm bar size range published', 'Modular chambers and adjustable flow/pressure', 'PLC valve control and self-tempering process', 'Designed for consistent ring formation and TMT properties'],
  },
  {
    title: 'Tying Machine', path: '/tying-machine.html', image: images.rollingMill,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Hydraulically operated tying equipment for bundling finished TMT bars.',
    paragraphs: [
      'The source website describes a simple binding machine for 8 mm and 10 mm TMT bars. A foot pedal operates the wrapping mechanism to form a bundle, after which a hydraulic twisting ram twists the wire into a tight tie.',
      'The published process ties a 2-tonne master bundle at five locations. The website states that one operator with the machine can handle approximately 25 bundles per hour.'
    ], bullets: ['Hydraulically operated wrap and twist', 'Foot-pedal operation for wrapping', 'Five tie positions on a 2-tonne master bundle', 'Published output: approximately 25 bundles per hour', 'Designed for TMT bar bundle handling'],
  },
  {
    title: 'Customized Solution', path: '/customized-solution.html', image: images.customized,
    eyebrow: 'Turnkey Engineering', excerpt: 'Complete turnkey hot rolling mill solutions from design and manufacturing through commissioning.',
    paragraphs: ['Nav Bharat Engineering Works provides customized and turnkey hot rolling mill solutions. The company describes its approach as planning and designing the mill around customer requirements while considering future expansion possibilities.', 'Project scope can span design, manufacturing, installation and commissioning.'],
    bullets: ['Customer-specific mill planning', 'Design and manufacturing integration', 'Commissioning support', 'Future expansion considered during planning'],
  },
  {
    title: 'Gear Grinding Solution', path: '/gear-grinding-solution.html', image: images.gearGrinder,
    eyebrow: 'Precision Gear Manufacturing', excerpt: 'Gear grinding and precision manufacturing solutions for industrial applications.',
    paragraphs: ['Precision gear grinding is used to achieve the required gear geometry and finish for demanding power-transmission systems. Nav Bharat Engineering Works offers gear grinding solutions within its broader gear and gearbox capability.'],
    bullets: ['Precision grinding processes', 'Gear geometry and finish checks', 'Power transmission applications', 'Manufacturing capability aligned to customer requirements'],
  },
  {
    title: 'TMT Bars Rolling Mill', path: '/tmt-bars-rolling-mill.html', image: images.rollingMill,
    eyebrow: 'Rolling Mill Solutions', excerpt: 'Rolling mill plants for TMT bar production and associated processing equipment.',
    paragraphs: ['TMT bar rolling mills combine billet reheating, rolling stands, quenching and finishing equipment to produce reinforcing bars. The plant arrangement is planned around bar sizes, throughput and downstream handling.'],
    bullets: ['TMT bar production line', 'Rolling and quenching equipment integration', 'Finishing and handling systems', 'Plant design and commissioning support'],
  },
  {
    title: 'Rolling Mill Stand', path: '/rolling-mill-stand.html', image: images.housingless,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Rolling mill stands engineered for controlled shaping of steel through successive rolling passes.',
    paragraphs: ['Rolling mill stands hold the rolls and associated mechanisms that shape heated steel progressively into the required section or size. Stand selection depends on rolling load, product geometry and line configuration.'],
    bullets: ['Stand arrangement matched to the product', 'Heavy-duty structural design', 'Integration into rolling mill lines', 'Engineering-led configuration'],
  },
  {
    title: 'Mill Stands', path: '/mill-stands.html', image: images.housingless,
    eyebrow: 'Rolling Mill Equipment', excerpt: 'Mill stand machinery for bar and section rolling applications.',
    paragraphs: ['Mill stands are core elements in a rolling mill, supporting the rolls and applying the forces needed to shape material. The appropriate stand design is determined by product range, mill layout and operating requirements.'],
    bullets: ['Rolling-mill core equipment', 'Selected for product and load requirements', 'Designed for line integration', 'Industrial service application'],
  },
  {
    title: 'DIN 2 Quality Gears', path: '/din-2-quality-gears.html', image: images.gearGrinder,
    eyebrow: 'Gear Manufacturing', excerpt: 'Precision gears manufactured and inspected to meet application-specific quality requirements.',
    paragraphs: ['Gear quality is critical in high-load industrial power-transmission systems. Nav Bharat Engineering Works presents gear grinding and precision gear manufacturing capabilities, with DIN accuracy standards referenced in its service information.'],
    bullets: ['Precision gear manufacturing', 'Inspection of tooth geometry and finish', 'Power transmission applications', 'Application-specific quality requirements'],
  },
];

export const companyPages = {
  '/about.html': {
    title: 'Company Profile', subtitle: 'We Believe In Rolling Excellence', image: images.about,
    paragraphs: [
      'The only way to discover the limits of the possible is to go beyond them into the impossible.',
      'The name “Nav Bharat” evokes hope for a new India and that is what our core philosophy is to build “A Marquee of Excellence”. It typifies quality, integrity, performance, perfection, and above all, character. We stand for all these traits.',
      'We believe in becoming an active participant in an ever-evolving steel industry, working fiercely to explore every possibility of innovation and excellence.',
      'Spread over two units, Site 1, located on the main NH24, is 5,400 square yards with a built-up area of 40,000 sq. ft. The other fabrication unit is 5,000 square yards with a built-up area of 20,000 sq. ft.',
      'Our infrastructure facility is equipped with advanced manufacturing technologies and machines to fabricate quality products. Departments include manufacturing, quality control, research and development, warehouse and packaging, and sales and marketing.'
    ],
  },
  '/existence.html': {
    title: 'Our Existence', subtitle: 'Nav Bharat Engineering Works', image: images.about,
    paragraphs: [
      'Nav Bharat Engineering Works came into existence in 1986 and has been a major contributor to the steel industry since then. The company serves clients in India and abroad and offers a wide range of rolling mill and gear-related products.',
      'The company focuses on hard work, honesty and continuous innovation. It works with customers and partners to improve steel production and meet changing requirements across the metal industry.',
      'The company lists state-of-the-art manufacturing technology, an effective quality management system, adherence to delivery schedules and continual improvement among its operating priorities.'
    ], bullets: ['State-of-the-art manufacturing technology', 'Efficient and effective quality management system', 'Adherence to delivery schedules with consistent supply', 'Continual improvement and customer satisfaction'],
  },
  '/vision-mission.html': {
    title: 'Our Vision & Mission', subtitle: 'Vision, Mission & Quality', image: images.missionVision,
    sections: [
      { title: 'Our Vision', text: 'To become a leading and trusted engineering partner, delivering innovative, high-performance solutions while building long-term relationships based on quality, integrity, and reliability.' },
      { title: 'Our Mission', text: 'To design, manufacture, and deliver world-class engineering solutions through technical excellence, skilled workmanship, and a strong commitment to customer satisfaction.' },
      { title: 'Quality', text: 'We are committed to maintaining the highest quality standards through strict inspection, continuous improvement, and compliance with international engineering norms.' },
    ],
  },
  '/director-message.html': {
    title: 'Message from Desk', subtitle: 'Mr. Bhisham Kumar — Managing Director', image: images.about,
    paragraphs: [
      'Steel is one of the most significant industrial sectors in India due to its wide application across sectors. With the current wave of “Make in India”, we are standing on the threshold of major reforms and manufacturing sector has a key role to play in the success story of the nation. These sectors need high quality products that can boost economic growth such as infrastructure, power, machinery and railways.',
      'At the same time, the steel industry is facing major changes with challenging market conditions that mandates a high degree of flexibility to meet the complex and ever changing needs of the customers.',
      'Being an expert in industrial processes, Nav Bharat offers a complete range of tailor-made solutions related to rolling mills. Our facility boasts of state-of-the-art technologies for producing equipment for value added steel manufacturers. We care for environment and strive to reduce environmental footprints. Our aim is to improve the economic and technical performance of our customers’ equipment.',
      'We take complete pride in our ability to partner and come up with most constructive solutions by extending innovations to our customers. Innovations in process are focused to ensure accessibility of the equipment, improved productivity and minimum operational costs. We are sure that these are the primary factors that can be instrumental in the global success of any business. This brochure is an insight into our portfolio of technologies and shows how earnestly we work to meet your requirements.'
    ],
  },
  '/infrastructure.html': {
    title: 'Infrastructure', subtitle: 'Manufacturing capability built around quality', image: images.why4,
    paragraphs: [
      'Nav Bharat is a one-stop rolling mill solution provider offering comprehensive solutions. The company describes its approach as delivering results without compromising on quality, supported by research, process development and quality checks at different stages.',
      'The Design Unit focuses on improving quality and productivity through engineering. The design team develops product configurations and customized units after the design has been reviewed with the client.',
      'The Production Unit is equipped with machinery and equipment for manufacturing. The production process is supervised by experienced engineers and trained professionals and is intended to support both urgent and bulk requirements.'
    ], bullets: ['Manufacturing Department', 'Quality Control Department', 'Research & Development Department', 'Warehouse & Packaging Department', 'Sales & Marketing Department'],
  },
  '/client.html': {
    title: 'Our Esteemed Clientele', subtitle: 'Our Clients', image: images.client1,
    paragraphs: ['Nav Bharat Engineering Works serves customers in India and overseas across the rolling mill and gear manufacturing industries. The company’s website highlights a broad client base and an international presence.'],
  },
  '/contact.html': {
    title: 'Contact Us', subtitle: 'Here to Help Our Customers',
    paragraphs: ['Connect with Nav Bharat Engineering Works for product information, engineering requirements, and project enquiries. The website lists three operating addresses in the B.S. Road Industrial Area, Ghaziabad, Uttar Pradesh.'],
  },
  '/enquiry.html': {
    title: 'Enquiry', subtitle: 'Feel Free to Say Hello or Send Your Questions',
    paragraphs: ['Complete the enquiry form and the team will be in touch as soon as possible.'],
  },
  '/catalogue.html': {
    title: 'Catalogue', subtitle: 'Product Catalogue',
    paragraphs: ['Browse the product range or submit an enquiry to request catalogue information. The original website links to a catalogue resource; the downloadable catalogue asset was not exposed by the public page parser during inspection.'],
  },
};

export const blogPosts = [
  {
    title: 'How Strip Rolling Mills Support High-Volume Steel Production', path: '/blog/strip-rolling-mill-machinery-exporter-from-india/', date: 'October 8, 2026', image: images.stripMill,
    excerpt: 'Steel strips are thin, flat strips manufactured with controlled thickness and width. These are used to make automotive parts, structural parts, tubes and pipes, and for other metal processing activities.',
    sections: [
      { title: 'What is Strip Rolling Mill', paragraphs: ['Strip rolling mills reduce the thickness of heated steel and turn it into a continuous strip. This operation can include reversing roughing mills, edging equipment, finishing stands, hydraulic gauge control, laminar cooling and coil handling.'] },
      { title: 'How Rolling Mills Improve Strip Production', paragraphs: ['The structure of a rolling mill influences the efficiency of moving steel from primary reduction to the finished coil. Roughing mills prepare the strip, edging equipment controls width, and finishing stands control final dimensions.'] },
      { title: 'Advanced Features of Strip Rolling Mills', paragraphs: ['PLC-based process control coordinates the line and monitors process conditions. Hydraulic gauge control supports thickness adjustment during operation, while laminar cooling manages thermal conditions before coiling.'] },
      { title: 'Conclusion', paragraphs: ['A well-designed strip rolling mill combines these functions to meet a manufacturer’s production needs and quality expectations. Nav Bharat Engineering Works offers strip rolling mills with commissioning and after-sales support.'] },
    ], faqs: [
      ['What are the features of your strip rolling mill?', 'The website lists laminar cooling, quick roll changing and advanced coil handling.'],
      ['Is strip rolling machinery automated?', 'The published article says its strip rolling machines use PLC-controlled automation.'],
      ['What strip thickness and width can the mill produce?', 'The article references thicknesses of 1.5–8 mm and widths of 150–350 mm.'],
    ],
  },
  {
    title: 'Hot Rolling Mill Plant Components and Their Functions', path: '/blog/hot-rolling-mill-plant-component-india/', date: 'October 6, 2026', image: images.rollingMill,
    excerpt: 'Hot rolled steel is a multipurpose material applied in construction, automotive, pipelines and other sectors. A hot rolling mill plant converts billets into usable steel products.',
    sections: [
      { title: 'Components Depend on the Output Needed', paragraphs: ['Hot rolling mill layouts vary according to the final product. Slit rolling mills process material into multiple strands, strip rolling mills produce flat strip, and section rolling mills produce structural profiles such as angles and channels.'] },
      { title: 'Key Components of a Hot Rolling Mill Plant', paragraphs: ['A typical line may include a reheating furnace, rolling mill stands, rolls and roll passes, guides and pinch rolls, and shearing equipment. The exact arrangement depends on the product and process.'] },
      { title: 'Finishing and Material Handling Equipment', paragraphs: ['Cooling beds receive hot-rolled bars and sections. Straightening, cutting and bundling equipment may be used downstream to prepare products for dispatch.'] },
      { title: 'Conclusion', paragraphs: ['A suitable hot rolling mill setup depends on the product, expected output and conditions of upstream and downstream operations. Nav Bharat lists slit, strip and section rolling mill solutions.'] },
    ], faqs: [['What is a hot rolling mill?', 'It is a steel processing plant that rolls heated metal billets into required shapes and sizes.'], ['Which types of hot rolling mills are offered?', 'The website lists slit, strip and section rolling mills.']],
  },
  {
    title: 'Guide to Finding the Best Rolling Mill Manufacturers and Exporters from India', path: '/blog/best-rolling-mill-exporters-from-india/', date: 'September 23, 2026', image: images.slitMill,
    excerpt: 'Rolling mills are used in modern metal processing industries. Manufacturer selection depends on engineering capability, product quality, manufacturing infrastructure and service support.',
    sections: [
      { title: 'Evaluate Technical Capability', paragraphs: ['Compare a manufacturer’s experience with the type of rolling mill, equipment and production capacity required for the project. Review the ability to develop a layout around the intended product and operating conditions.'] },
      { title: 'Review Quality and Infrastructure', paragraphs: ['Assess manufacturing facilities, inspection procedures, process controls and the company’s ability to manage fabrication, machining and assembly.'] },
      { title: 'Consider Project Support', paragraphs: ['Engineering coordination, commissioning and after-sales support are important considerations when evaluating industrial equipment suppliers.'] },
    ],
  },
  {
    title: 'How Steel Mills Can Choose the Right Gearbox Supplier in USA', path: '/blog/gearbox-supplier-usa/', date: 'August 3, 2026', image: images.gearbox,
    excerpt: 'Steel production companies use high-performance machinery to increase production. Gearbox selection affects drive performance, reliability and maintenance planning.',
    sections: [
      { title: 'Assess Application Requirements', paragraphs: ['Start with operating torque, speed, ratio, duty cycle, load profile, mounting arrangement and available installation space. These inputs guide the gearbox configuration.'] },
      { title: 'Check Engineering and Quality', paragraphs: ['Review design experience, manufacturing controls, inspection and documentation, together with the supplier’s support through commissioning and operation.'] },
      { title: 'Plan for Lifecycle Support', paragraphs: ['A supplier should be able to discuss maintenance needs, lubrication, spare parts and support for the operating environment.'] },
    ],
  },
  {
    title: 'How to Evaluate a Double Helical Gears Exporter Before Placing a Bulk Order', path: '/blog/helical-gears-exporter-manufacturer/', date: 'August 3, 2026', image: images.gearbox,
    excerpt: 'Importing double helical gears is a strategic decision. Supplier selection should consider engineering specifications, quality systems and delivery capability.',
    sections: [
      { title: 'Confirm Technical Specifications', paragraphs: ['Share the drawing, material, required accuracy, load conditions and inspection requirements before placing an order. Confirm that the manufacturer can support the required gear size and geometry.'] },
      { title: 'Review Manufacturing and Inspection', paragraphs: ['Ask about manufacturing methods, inspection equipment, traceability and the quality documents supplied with the order.'] },
      { title: 'Align Delivery and Support', paragraphs: ['Confirm lead time, packaging, shipping arrangements and how technical questions will be handled during and after delivery.'] },
    ],
  },
  {
    title: 'Key Features to Look for in Heavy-Duty Industrial Gear Boxes', path: '/blog/industrial-gear-boxes-exporters-india/', date: 'July 11, 2026', image: images.gearbox,
    excerpt: 'Industrial equipment depends on reliable drive components. Heavy-duty gearboxes should be selected around load, operating conditions and the wider drive system.',
    sections: [
      { title: 'Load and Torque Capacity', paragraphs: ['Evaluate operating torque, shock loads, start-stop cycles, speed and required service life. The gearbox should be matched to actual machine conditions.'] },
      { title: 'Thermal and Lubrication Design', paragraphs: ['Lubrication, heat dissipation, sealing and maintenance access affect gearbox performance and availability.'] },
      { title: 'Construction and Serviceability', paragraphs: ['Housing stiffness, gear quality, bearing arrangement, inspection and spare-part support should be reviewed before selection.'] },
    ],
  },
  {
    title: 'How to Choose the Right Gear Coupling Manufacturer for Industrial Applications', path: '/blog/gear-coupling-manufacturer-in-india/', date: 'May 29, 2026', image: images.gearbox,
    excerpt: 'Industrial machinery operates under load every day, and coupling selection is important for reliable power transmission.',
    sections: [
      { title: 'Match the Coupling to the Drive', paragraphs: ['Check torque, shaft dimensions, misalignment, speed, temperature and the operating environment before selecting a coupling.'] },
      { title: 'Check Manufacturing Quality', paragraphs: ['Review material specifications, machining tolerances, inspection procedures and the supplier’s ability to meet repeat-order requirements.'] },
      { title: 'Consider Support and Maintenance', paragraphs: ['Installation guidance, maintenance needs, replacement parts and response to technical queries should be considered alongside price and delivery.'] },
    ],
  },
];

export const homeStats = [
  { value: '95%', label: 'Repeat Project Engagements' },
  { value: '100+', label: 'Domestic Customers' },
  { value: '25+', label: 'International Customers' },
];

export const processSteps = [
  { letter: 'P', title: 'Planning', image: images.why4, text: 'We analyze client requirements, site conditions, and project scope to ensure efficient and reliable execution.' },
  { letter: 'D', title: 'Designing', image: images.about, text: 'Our engineering team develops customized, cost-effective designs focused on performance and durability.' },
  { letter: 'M', title: 'Manufacturing', image: images.rollingMill, text: 'We manufacture high-quality equipment using modern machinery and strict quality control standards.' },
  { letter: 'C', title: 'Commissioning', image: images.gearbox, text: 'We ensure smooth installation, testing, and commissioning for optimal plant performance.' },
];

export const cncFacilities = [
  { title: 'HOFLER Gear Grinder', image: images.gearGrinder },
  { title: 'Mazak VTL', image: images.rollingMill },
  { title: 'Mazak HMC', image: images.gearGrinder },
  { title: 'Toshiba CNC Borer', image: images.gearbox },
  { title: 'SNK Double Column VMC', image: images.housingless },
  { title: 'Mazak Integrex', image: images.rollingMill },
];

export const testimonials = [
  { name: 'Dewaker Jain', location: 'North India', quote: 'Nav Bharat Engineering Works is the best solution for all our queries, offering excellent products and outstanding customer service. Their product quality is impressive, and their team is highly professional, supportive, and dedicated to customer satisfaction. Truly, they are one of the best engineering companies to rely on for quality, trust, and reliable solutions. Highly recommended!' },
  { name: 'RP Ojha', location: 'India', quote: 'Nav Bharat Engineering Works is a trusted name in the rolling industry, known for its high-quality products, reliable performance, and excellent after-sales service. Their team provides professional guidance, timely support, and practical solutions to meet industrial requirements.' },
  { name: 'Yash Verma', location: 'India', quote: 'Great experience with Nav Bharat Engineering Works! Their steel plant has excellent machinery, good quality work, and a professional team. Highly recommended for quality and reliability.' },
];
