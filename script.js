// Comprehensive project topics database
const projectTopics = [
  {
    id: 1,
    title: "Assessment of Microplastic Contamination in Urban Water Bodies",
    category: "water-quality",
    difficulty: "advanced",
    globalRelevance: "High - Microplastics are emerging pollutants affecting ecosystems worldwide",
    description: "Investigate the presence, concentration, and types of microplastics in local rivers, lakes, or reservoirs.",
    objectives: [
      "Identify and quantify microplastic particles in water samples",
      "Analyze seasonal variations in microplastic concentrations",
      "Assess potential sources and pathways of contamination",
      "Propose mitigation strategies"
    ],
    methodology: [
      "Sample collection from multiple sites using plankton nets",
      "Laboratory filtration and density separation",
      "Microscopic identification and FTIR spectroscopy",
      "Statistical analysis of spatial and temporal patterns"
    ],
    pastWorks: [
      "Mason et al. (2016) - Microplastic pollution in Great Lakes",
      "Eerkes-Medrano et al. (2015) - Global review of microplastics",
      "Li et al. (2018) - Microplastics in Chinese freshwater systems"
    ],
    equipment: ["Plankton net (20-50μm)", "Stereomicroscope", "FTIR spectrometer", "Filtration apparatus"],
    duration: "3-6 months"
  },
  {
    id: 2,
    title: "Rainwater Harvesting System Design for Urban Residential Buildings",
    category: "water-resources",
    difficulty: "intermediate",
    globalRelevance: "High - Water scarcity affects 2 billion people globally",
    description: "Design and evaluate a rainwater harvesting system for a residential or institutional building.",
    objectives: [
      "Estimate rainwater harvesting potential based on local rainfall",
      "Design storage tank capacity and distribution system",
      "Conduct cost-benefit analysis",
      "Evaluate water quality and treatment requirements"
    ],
    methodology: [
      "Collect 10-year rainfall data for the study area",
      "Calculate runoff coefficient and catchment area",
      "Design storage tank using mass balance approach",
      "Water quality testing (pH, turbidity, coliforms)",
      "Economic analysis (NPV, payback period)"
    ],
    pastWorks: [
      "Karim et al. (2015) - RWH in developing countries",
      "Campisano et al. (2017) - Urban RWH systems review",
      "Ghisi et al. (2020) - Economic viability of RWH"
    ],
    equipment: ["Rain gauge", "Water quality test kit", "AutoCAD/design software"],
    duration: "2-4 months"
  },
  {
    id: 3,
    title: "Performance Evaluation of Constructed Wetlands for Wastewater Treatment",
    category: "wastewater",
    difficulty: "advanced",
    globalRelevance: "High - Nature-based solutions for sustainable wastewater treatment",
    description: "Assess the treatment efficiency of constructed wetlands in removing pollutants from domestic or industrial wastewater.",
    objectives: [
      "Monitor pollutant removal efficiency (BOD, COD, nitrogen, phosphorus)",
      "Evaluate the role of vegetation and substrate",
      "Assess hydraulic performance and retention time",
      "Compare with conventional treatment methods"
    ],
    methodology: [
      "Select existing constructed wetland or design pilot system",
      "Collect influent and effluent samples weekly",
      "Analyze for BOD, COD, TSS, TN, TP, heavy metals",
      "Monitor hydraulic loading rate and retention time",
      "Statistical analysis of removal efficiencies"
    ],
    pastWorks: [
      "Vymazal (2011) - Constructed wetlands for wastewater treatment",
      "Wu et al. (2015) - Review of CW performance worldwide",
      "Sultana et al. (2015) - Tropical constructed wetlands"
    ],
    equipment: ["Water sampling bottles", "BOD/COD analyzer", "Spectrophotometer", "pH meter"],
    duration: "4-6 months"
  },
  {
    id: 4,
    title: "Climate Change Impact on Regional Water Resources Availability",
    category: "climate",
    difficulty: "advanced",
    globalRelevance: "Very High - Climate change threatens water security globally",
    description: "Assess the impact of climate change on water availability in a specific river basin or region.",
    objectives: [
      "Analyze historical climate and streamflow trends",
      "Project future climate scenarios using GCM models",
      "Assess changes in water availability and demand",
      "Develop adaptation strategies"
    ],
    methodology: [
      "Collect historical climate and streamflow data (30+ years)",
      "Perform trend analysis (Mann-Kendall test)",
      "Downscale GCM projections using statistical methods",
      "Run hydrological models (SWAT, HEC-HMS)",
      "Water balance analysis for future scenarios"
    ],
    pastWorks: [
      "IPCC AR6 (2021) - Climate change and water",
      "Kundzewicz et al. (2008) - Climate change impacts on water",
      "Schewe et al. (2014) - Multi-model assessment"
    ],
    equipment: ["Climate data access", "Hydrological modeling software", "GIS tools"],
    duration: "5-8 months"
  },
  {
    id: 5,
    title: "Assessment of Groundwater Quality for Drinking and Irrigation Purposes",
    category: "water-quality",
    difficulty: "intermediate",
    globalRelevance: "High - 2.5 billion people depend on groundwater",
    description: "Evaluate groundwater quality in a specific area and assess its suitability for various uses.",
    objectives: [
      "Determine physical and chemical characteristics of groundwater",
      "Assess drinking water quality using WHO/EPA standards",
      "Evaluate irrigation water quality (SAR, RSC, %Na)",
      "Identify contamination sources and vulnerable zones"
    ],
    methodology: [
      "Select sampling points (wells, boreholes) across study area",
      "Collect groundwater samples during pre and post-monsoon",
      "Analyze for pH, TDS, hardness, major ions, heavy metals",
      "Calculate water quality indices (WQI, SAR, RSC)",
      "GIS-based spatial distribution mapping"
    ],
    pastWorks: [
      "Selvam et al. (2017) - Groundwater quality assessment methods",
      "Adimalla et al. (2018) - GIS-based groundwater quality",
      "WHO (2017) - Drinking water quality guidelines"
    ],
    equipment: ["Water sampling kit", "GPS", "Spectrophotometer", "Ion chromatograph", "GIS software"],
    duration: "3-5 months"
  },
  {
    id: 6,
    title: "Design of Sustainable Urban Drainage Systems (SUDS)",
    category: "hydrology",
    difficulty: "intermediate",
    globalRelevance: "High - Urban flooding affects millions annually",
    description: "Design green infrastructure solutions to manage urban stormwater runoff sustainably.",
    objectives: [
      "Assess existing drainage system and flooding issues",
      "Design SUDS components (bioswales, permeable pavements, rain gardens)",
      "Model runoff reduction and peak flow attenuation",
      "Evaluate environmental and economic benefits"
    ],
    methodology: [
      "Conduct site survey and hydrological assessment",
      "Analyze rainfall intensity-duration-frequency (IDF) curves",
      "Design SUDS using sizing guidelines",
      "Model performance using SWMM or similar software",
      "Cost-benefit analysis"
    ],
    pastWorks: [
      "Fletcher et al. (2015) - SUDS, LID, and green infrastructure",
      "Woods Ballard et al. (2015) - The SUDS Manual (CIRIA)",
      "Liao et al. (2017) - Performance of SUDS worldwide"
    ],
    equipment: ["Survey equipment", "SWMM software", "AutoCAD", "Rain gauge data"],
    duration: "3-5 months"
  },
  {
    id: 7,
    title: "Heavy Metal Contamination in Agricultural Soils and Food Crops",
    category: "pollution",
    difficulty: "advanced",
    globalRelevance: "High - Soil contamination threatens food security",
    description: "Investigate heavy metal pollution in agricultural areas and assess transfer to food crops.",
    objectives: [
      "Determine heavy metal concentrations in soil and crops",
      "Assess soil-to-plant transfer factors",
      "Evaluate health risk through consumption",
      "Identify pollution sources"
    ],
    methodology: [
      "Collect soil and crop samples from agricultural fields",
      "Digest samples using acid digestion",
      "Analyze for Cd, Pb, Cr, As, Hg using AAS/ICP-MS",
      "Calculate bioaccumulation factors and health risk index",
      "Statistical analysis and correlation studies"
    ],
    pastWorks: [
      "Tchounwou et al. (2012) - Heavy metal toxicity",
      "Khan et al. (2015) - Heavy metals in soils and crops",
      "Antoniadis et al. (2017) - Trace elements in the soil-plant system"
    ],
    equipment: ["Soil auger", "AAS or ICP-MS", "Digestion apparatus", "Laboratory glassware"],
    duration: "4-6 months"
  },
  {
    id: 8,
    title: "Optimization of Water Distribution Network Using Hydraulic Modeling",
    category: "water-resources",
    difficulty: "advanced",
    globalRelevance: "High - 30-50% water loss in distribution systems globally",
    description: "Analyze and optimize an existing water distribution network to reduce losses and improve efficiency.",
    objectives: [
      "Model existing water distribution network",
      "Identify pressure deficient areas and leakage points",
      "Optimize pipe sizes and pump operations",
      "Reduce energy consumption and water losses"
    ],
    methodology: [
      "Collect network data (pipe layout, diameters, elevations, demands)",
      "Develop hydraulic model using EPANET or WaterGEMS",
      "Calibrate model using field pressure measurements",
      "Run optimization scenarios (pipe replacement, PRVs, pumping)",
      "Economic analysis of proposed improvements"
    ],
    pastWorks: [
      "Walski et al. (2003) - Advanced water distribution modeling",
      "Giustolisi et al. (2008) - WDN optimization",
      "Farmani et al. (2005) - Multi-objective optimization"
    ],
    equipment: ["EPANET/WaterGEMS", "Pressure loggers", "GIS data", "Network maps"],
    duration: "4-6 months"
  },
  {
    id: 9,
    title: "Efficacy of Low-Cost Water Filters for Point-of-Use Treatment",
    category: "water-quality",
    difficulty: "beginner",
    globalRelevance: "Very High - 2 billion people lack safe drinking water",
    description: "Test the effectiveness of low-cost filtration methods (ceramic, biosand, activated carbon) in removing contaminants.",
    objectives: [
      "Compare removal efficiency of different filter types",
      "Assess bacterial and chemical removal rates",
      "Evaluate filter lifespan and maintenance needs",
      "Conduct cost analysis for community implementation"
    ],
    methodology: [
      "Construct or obtain different filter types",
      "Prepare contaminated water with known pollutant levels",
      "Test removal of turbidity, bacteria, heavy metals, organic compounds",
      "Monitor filter performance over time",
      "Economic analysis and user acceptability survey"
    ],
    pastWorks: [
      "Sobsey et al. (2008) - Point-of-use household water treatment",
      "Elliott et al. (2008) - Household water treatment",
      "Ngai et al. (2014) - Biosand filter effectiveness"
    ],
    equipment: ["Filter materials", "Turbidity meter", "Bacteria culture kit", "Water quality test kit"],
    duration: "2-4 months"
  },
  {
    id: 10,
    title: "River Water Quality Modeling Using QUAL2K",
    category: "water-quality",
    difficulty: "intermediate",
    globalRelevance: "High - River pollution affects ecosystems and water supply",
    description: "Develop a water quality model to simulate pollutant transport and fate in a river system.",
    objectives: [
      "Characterize water quality along river stretch",
      "Develop and calibrate QUAL2K model",
      "Simulate impact of point and non-point sources",
      "Predict future water quality under different scenarios"
    ],
    methodology: [
      "Collect water quality data at multiple stations",
      "Measure river hydraulic parameters (flow, depth, velocity)",
      "Input data into QUAL2K software",
      "Calibrate model using observed data",
      "Run scenarios (increased discharge, reduced pollution)"
    ],
    pastWorks: [
      "Chapra et al. (2008) - QUAL2K documentation",
      "Kannel et al. (2007) - River water quality modeling",
      "Park & Lee (2002) - Water quality modeling"
    ],
    equipment: ["Water quality probes", "Flow meter", "QUAL2K software", "GPS"],
    duration: "3-5 months"
  },
  {
    id: 11,
    title: "Life Cycle Assessment of Wastewater Treatment Technologies",
    category: "wastewater",
    difficulty: "advanced",
    globalRelevance: "High - Sustainability assessment of treatment systems",
    description: "Compare environmental impacts of different wastewater treatment technologies using LCA.",
    objectives: [
      "Conduct LCA for conventional and alternative treatment systems",
      "Quantify energy consumption, emissions, and resource use",
      "Compare environmental footprints",
      "Identify sustainable treatment options"
    ],
    methodology: [
      "Define system boundaries and functional units",
      "Collect inventory data (energy, chemicals, materials)",
      "Use LCA software (SimaPro, GaBi, OpenLCA)",
      "Assess impact categories (GWP, eutrophication, toxicity)",
      "Sensitivity analysis and interpretation"
    ],
    pastWorks: [
      "Corominas et al. (2013) - LCA of wastewater treatment",
      "Foley et al. (2010) - Comprehensive LCA review",
      "Hospido et al. (2004) - Environmental performance of WWTPs"
    ],
    equipment: ["LCA software", "Data collection templates", "Literature databases"],
    duration: "4-6 months"
  },
  {
    id: 12,
    title: "Flood Risk Mapping Using GIS and Remote Sensing",
    category: "hydrology",
    difficulty: "intermediate",
    globalRelevance: "Very High - Floods cause billions in damages annually",
    description: "Create flood hazard maps for a river basin using geospatial technologies.",
    objectives: [
      "Identify flood-prone areas using DEM and satellite imagery",
      "Develop flood hazard maps for different return periods",
      "Assess vulnerability of population and infrastructure",
      "Propose flood mitigation measures"
    ],
    methodology: [
      "Obtain DEM, land use, and rainfall data",
      "Delineate watershed and extract river network",
      "Run hydrological model (HEC-HMS) for flood estimation",
      "Use HEC-RAS for flood inundation mapping",
      "Integrate in GIS for vulnerability assessment"
    ],
    pastWorks: [
      "Tehrany et al. (2014) - Flood susceptibility mapping",
      "Ouma & Tateishi (2014) - Urban flood vulnerability",
      "Sanyal & Lu (2004) - GIS-based flood hazard mapping"
    ],
    equipment: ["GIS software (QGIS/ArcGIS)", "HEC-HMS/RAS", "Satellite imagery", "DEM data"],
    duration: "4-6 months"
  },
  {
    id: 13,
    title: "Evaluation of Greywater Recycling Systems for Household Use",
    category: "water-resources",
    difficulty: "beginner",
    globalRelevance: "High - Water reuse is key to sustainable water management",
    description: "Design and test a greywater treatment and recycling system for non-potable domestic uses.",
    objectives: [
      "Characterize greywater quality from household sources",
      "Design simple treatment system (filtration, disinfection)",
      "Test treated water quality for toilet flushing/gardening",
      "Estimate water and cost savings"
    ],
    methodology: [
      "Collect greywater samples (bathroom, laundry, kitchen)",
      "Analyze for BOD, COD, TSS, pH, coliforms",
      "Design multi-stage treatment (sedimentation, sand filter, UV/chlorine)",
      "Monitor treatment efficiency",
      "Calculate payback period and water conservation potential"
    ],
    pastWorks: [
      "Eriksson et al. (2002) - Greywater characteristics and reuse",
      "Friedler (2004) - Quality of individual greywater streams",
      "Li et al. (2009) - Greywater treatment and reuse"
    ],
    equipment: ["Storage tanks", "Filter materials", "Disinfection unit", "Water quality test kit"],
    duration: "2-4 months"
  },
  {
    id: 14,
    title: "Assessment of Agricultural Non-Point Source Pollution",
    category: "pollution",
    difficulty: "intermediate",
    globalRelevance: "High - Agriculture is major source of water pollution",
    description: "Quantify nutrient and pesticide runoff from agricultural lands and its impact on water bodies.",
    objectives: [
      "Estimate nutrient loading (nitrogen, phosphorus) from farmlands",
      "Assess pesticide contamination in runoff",
      "Evaluate impact on downstream water quality",
      "Recommend best management practices (BMPs)"
    ],
    methodology: [
      "Select agricultural watershed and monitoring points",
      "Collect runoff samples during rain events",
      "Analyze for nitrate, phosphate, pesticide residues",
      "Model pollution loading using SWAT or AGNPS",
      "Evaluate BMPs (buffer strips, cover crops, precision agriculture)"
    ],
    pastWorks: [
      "Carpenter et al. (1998) - Nonpoint pollution of surface waters",
      "Sharpley et al. (2003) - Agricultural phosphorus",
      "Arnold et al. (2012) - SWAT model applications"
    ],
    equipment: ["Automated samplers", "Nutrient analyzer", "GC-MS for pesticides", "SWAT software"],
    duration: "4-6 months"
  },
  {
    id: 15,
    title: "Urban Heat Island Effect and Water Consumption Patterns",
    category: "climate",
    difficulty: "intermediate",
    globalRelevance: "High - Urbanization increases water demand and temperature",
    description: "Investigate the relationship between urban heat islands and residential water consumption.",
    objectives: [
      "Map urban heat island intensity using remote sensing",
      "Analyze water consumption data across temperature zones",
      "Correlate temperature with water demand",
      "Propose mitigation strategies (green roofs, urban forests)"
    ],
    methodology: [
      "Obtain Landsat thermal imagery for LST calculation",
      "Collect water consumption data from utility company",
      "GIS analysis to overlay temperature and consumption patterns",
      "Statistical correlation analysis",
      "Model future scenarios with climate change"
    ],
    pastWorks: [
      "Guhathakurta & Gober (2007) - Urban heat and water use",
      "Wentz et al. (2014) - Water consumption in Phoenix",
      "Voogt & Oke (2003) - Thermal remote sensing of UHI"
    ],
    equipment: ["Satellite imagery", "GIS software", "Water consumption records", "Statistical software"],
    duration: "3-5 months"
  },
  {
    id: 16,
    title: "Performance of Decentralized Wastewater Treatment Systems",
    category: "wastewater",
    difficulty: "intermediate",
    globalRelevance: "High - Suitable for rural and peri-urban areas",
    description: "Evaluate the effectiveness of septic tanks, package plants, or community-scale treatment systems.",
    objectives: [
      "Assess treatment efficiency of decentralized systems",
      "Monitor effluent quality compliance with standards",
      "Evaluate operation and maintenance challenges",
      "Compare with centralized alternatives"
    ],
    methodology: [
      "Select existing decentralized systems for study",
      "Collect influent and effluent samples monthly",
      "Analyze for BOD, COD, TSS, nutrients, pathogens",
      "Survey users on satisfaction and maintenance",
      "Economic comparison with centralized systems"
    ],
    pastWorks: [
      "Massoud et al. (2009) - Decentralized wastewater treatment",
      "Bakir (2001) - Sustainable wastewater management",
      "Libralato et al. (2012) - Decentralized treatment systems review"
    ],
    equipment: ["Sampling bottles", "Laboratory analysis equipment", "Survey forms"],
    duration: "3-5 months"
  },
  {
    id: 17,
    title: "Drinking Water Safety Plan Development for Small Communities",
    category: "water-quality",
    difficulty: "beginner",
    globalRelevance: "High - WHO promotes Water Safety Plans globally",
    description: "Develop a Water Safety Plan (WSP) for a rural or small urban water supply system.",
    objectives: [
      "Assess the water supply system from source to tap",
      "Identify hazards and hazardous events",
      "Implement control measures and monitoring",
      "Develop management and communication protocols"
    ],
    methodology: [
      "Form WSP team and define system scope",
      "Conduct hazard assessment (HACCP approach)",
      "Develop risk matrix and control measures",
      "Establish operational monitoring plan",
      "Create incident response and improvement plan"
    ],
    pastWorks: [
      "WHO (2009) - Water Safety Plan Manual",
      "Bartram et al. (2009) - WSP implementation",
      "Summerill et al. (2010) - WSP in developing countries"
    ],
    equipment: ["System assessment tools", "Water quality test kit", "Documentation templates"],
    duration: "2-4 months"
  },
  {
    id: 18,
    title: "Ecological Impact Assessment of Dam Construction",
    category: "water-resources",
    difficulty: "advanced",
    globalRelevance: "High - Dams alter river ecosystems worldwide",
    description: "Evaluate environmental and ecological impacts of an existing or proposed dam project.",
    objectives: [
      "Assess changes in river hydrology and sediment transport",
      "Evaluate impacts on aquatic biodiversity",
      "Analyze downstream water quality changes",
      "Propose environmental flow requirements"
    ],
    methodology: [
      "Collect pre and post-dam data (flow, water quality, species)",
      "Compare upstream and downstream conditions",
      "Conduct biodiversity surveys (fish, macroinvertebrates)",
      "Model environmental flow scenarios",
      "Stakeholder consultation"
    ],
    pastWorks: [
      "Poff et al. (1997) - Natural flow regime",
      "Nilsson et al. (2005) - Fragmentation and flow regulation",
      "Richter et al. (2003) - Environmental flow assessment"
    ],
    equipment: ["Water quality probes", "Biological sampling gear", "Flow modeling software"],
    duration: "5-8 months"
  },
  {
    id: 19,
    title: "Solar Disinfection (SODIS) for Rural Water Treatment",
    category: "water-quality",
    difficulty: "beginner",
    globalRelevance: "Very High - Low-cost solution for developing regions",
    description: "Test the effectiveness of solar disinfection for treating drinking water in resource-limited settings.",
    objectives: [
      "Evaluate bacterial inactivation under different conditions",
      "Optimize exposure time and bottle type",
      "Test effectiveness on local water sources",
      "Assess community acceptance and scalability"
    ],
    methodology: [
      "Collect water samples with known bacterial contamination",
      "Expose in PET bottles to sunlight for varying durations",
      "Test for E. coli and total coliforms using membrane filtration",
      "Vary parameters (turbidity, bottle type, weather)",
      "Community demonstration and feedback survey"
    ],
    pastWorks: [
      "McGuigan et al. (2012) - SODIS review",
      "Ubomba-Jaswa et al. (2009) - SODIS and turbidity",
      "Luzi et al. (2016) - SODIS field applications"
    ],
    equipment: ["PET bottles", "Membrane filtration kit", "Incubator", "Light intensity meter"],
    duration: "2-3 months"
  },
  {
    id: 20,
    title: "Water Footprint Assessment of Agricultural Products",
    category: "water-resources",
    difficulty: "intermediate",
    globalRelevance: "High - Agriculture uses 70% of global freshwater",
    description: "Calculate the water footprint of major crops or livestock in a region.",
    objectives: [
      "Quantify green, blue, and grey water footprints",
      "Compare water footprints across crops/products",
      "Identify opportunities for water use reduction",
      "Assess sustainability of current practices"
    ],
    methodology: [
      "Select crops/products and define system boundaries",
      "Collect data on water use, irrigation, rainfall, yields",
      "Calculate footprints using Water Footprint Network methods",
      "Compare with global benchmarks",
      "Scenario analysis for improved practices"
    ],
    pastWorks: [
      "Hoekstra et al. (2011) - Water Footprint Assessment Manual",
      "Mekonnen & Hoekstra (2011) - Global crop water footprints",
      "Chapagain & Hoekstra (2004) - Water footprints of nations"
    ],
    equipment: ["Agricultural data", "Climate data", "Calculation templates", "GIS (optional)"],
    duration: "3-5 months"
  },
  {
    id: 21,
    title: "Biochar for Wastewater Treatment and Soil Amendment",
    category: "wastewater",
    difficulty: "intermediate",
    globalRelevance: "High - Circular economy and carbon sequestration",
    description: "Investigate the use of biochar produced from agricultural waste for wastewater treatment.",
    objectives: [
      "Produce biochar from local agricultural residues",
      "Test adsorption capacity for pollutants (dyes, heavy metals, nutrients)",
      "Optimize treatment conditions (dosage, contact time, pH)",
      "Evaluate spent biochar for soil amendment"
    ],
    methodology: [
      "Pyrolyze agricultural waste (rice husk, corn stover) at 400-600°C",
      "Characterize biochar (surface area, porosity, functional groups)",
      "Batch adsorption experiments with wastewater",
      "Kinetic and isotherm modeling",
      "Pot trials with biochar-amended soil"
    ],
    pastWorks: [
      "Tan et al. (2015) - Biochar for water/wastewater treatment",
      "Mohan et al. (2014) - Organic and inorganic pollutant removal",
      "Inyang et al. (2016) - Biochar from agricultural wastes"
    ],
    equipment: ["Pyrolysis unit/kiln", "Spectrophotometer", "BET analyzer", "Soil pots"],
    duration: "3-5 months"
  },
  {
    id: 22,
    title: "Smart Water Metering and Leak Detection Systems",
    category: "water-resources",
    difficulty: "advanced",
    globalRelevance: "High - Water loss reduction through technology",
    description: "Design and implement a smart water monitoring system using IoT sensors.",
    objectives: [
      "Develop IoT-based water flow monitoring system",
      "Implement real-time leak detection algorithms",
      "Create dashboard for data visualization",
      "Assess water savings and system cost-effectiveness"
    ],
    methodology: [
      "Design sensor network (flow meters, pressure sensors)",
      "Develop microcontroller-based data acquisition (Arduino/Raspberry Pi)",
      "Implement wireless data transmission (WiFi/LoRa/GSM)",
      "Create web dashboard for real-time monitoring",
      "Test leak detection accuracy in pilot area"
    ],
    pastWorks: [
      "Britton et al. (2013) - Smart metering for residential water",
      "Loureiro et al. (2014) - IoT for water distribution",
      "Pérez et al. (2014) - Leak detection methodologies"
    ],
    equipment: ["Flow sensors", "Arduino/Raspberry Pi", "IoT communication modules", "Programming tools"],
    duration: "4-6 months"
  },
  {
    id: 23,
    title: "Eutrophication Assessment and Management in Lakes",
    category: "water-quality",
    difficulty: "intermediate",
    globalRelevance: "High - Nutrient pollution degrades lakes worldwide",
    description: "Assess the trophic status of a lake and develop management strategies to control eutrophication.",
    objectives: [
      "Determine trophic state (oligotrophic, mesotrophic, eutrophic)",
      "Identify nutrient sources and loading rates",
      "Monitor algal blooms and dissolved oxygen",
      "Propose restoration and management measures"
    ],
    methodology: [
      "Monthly water sampling from multiple depths and locations",
      "Measure chlorophyll-a, total phosphorus, total nitrogen, Secchi depth",
      "Calculate Trophic State Index (TSI)",
      "Nutrient budget analysis (point and non-point sources)",
      "Develop management plan (nutrient reduction, aeration, biomanipulation)"
    ],
    pastWorks: [
      "Carlson (1977) - Trophic state index",
      "Schindler (2006) - Recent advances in eutrophication",
      "Smith et al. (1999) - Eutrophication science and policy"
    ],
    equipment: ["Secchi disk", "Van Dorn sampler", "Chlorophyll meter", "Nutrient analyzer"],
    duration: "4-6 months"
  },
  {
    id: 24,
    title: "Permeable Pavement Systems for Stormwater Management",
    category: "hydrology",
    difficulty: "intermediate",
    globalRelevance: "High - Green infrastructure for sustainable cities",
    description: "Design and test permeable pavement for reducing urban runoff and improving water quality.",
    objectives: [
      "Design permeable pavement system for parking lot or pathway",
      "Measure infiltration rates and runoff reduction",
      "Assess pollutant removal (sediments, oils, heavy metals)",
      "Evaluate long-term performance and maintenance needs"
    ],
    methodology: [
      "Design pavement layers (surface, bedding, base, subbase)",
      "Construct pilot section or use existing installation",
      "Monitor rainfall, infiltration, and runoff volumes",
      "Collect and analyze runoff quality",
      "Assess clogging and recommend maintenance schedule"
    ],
    pastWorks: [
      "Scholz & Grabowiecki (2007) - Permeable pavement systems review",
      "Brattebo & Booth (2003) - Long-term performance",
      "Collins et al. (2008) - Hydrologic performance"
    ],
    equipment: ["Infiltrometer", "Rain gauge", "Runoff collection system", "Water quality kit"],
    duration: "3-5 months"
  },
  {
    id: 25,
    title: "Plastic Waste Management and Recycling for Water Protection",
    category: "pollution",
    difficulty: "beginner",
    globalRelevance: "Very High - Plastic pollution in water bodies is a global crisis",
    description: "Assess plastic waste generation and develop recycling strategies to prevent water pollution.",
    objectives: [
      "Quantify plastic waste generation in a community",
      "Identify pathways of plastics entering water bodies",
      "Develop waste segregation and recycling program",
      "Raise awareness on plastic pollution"
    ],
    methodology: [
      "Conduct waste characterization study (composition, quantities)",
      "Survey on plastic use and disposal practices",
      "Map waste collection and disposal systems",
      "Design community recycling center or collection system",
      "Educational campaign and behavior change assessment"
    ],
    pastWorks: [
      "Jambeck et al. (2015) - Plastic waste inputs to ocean",
      "Lebreton et al. (2017) - River plastic emissions to ocean",
      "UNEP (2018) - Single-use plastics report"
    ],
    equipment: ["Waste sorting bins", "Weighing scale", "Survey forms", "Educational materials"],
    duration: "2-4 months"
  },
  {
    id: 26,
    title: "Desalination Technologies for Brackish Water Treatment",
    category: "water-quality",
    difficulty: "advanced",
    globalRelevance: "High - Growing freshwater scarcity drives desalination",
    description: "Compare performance and cost-effectiveness of small-scale desalination technologies.",
    objectives: [
      "Test different desalination methods (RO, ED, solar distillation)",
      "Evaluate water quality and recovery rates",
      "Assess energy consumption and operational costs",
      "Determine optimal technology for local conditions"
    ],
    methodology: [
      "Obtain or construct pilot desalination units",
      "Feed brackish water with known TDS levels",
      "Measure product water quality (TDS, hardness, pH)",
      "Calculate recovery rate and energy consumption",
      "Economic analysis (capital, O&M costs)"
    ],
    pastWorks: [
      "Elimelech & Phillip (2011) - Future of seawater desalination",
      "Greenlee et al. (2009) - RO desalination review",
      "Qiblawey & Banat (2008) - Solar thermal desalination"
    ],
    equipment: ["RO unit or distillation apparatus", "TDS meter", "Energy meter", "Pumps"],
    duration: "4-6 months"
  },
  {
    id: 27,
    title: "Wetland Restoration for Biodiversity and Water Quality",
    category: "climate",
    difficulty: "intermediate",
    globalRelevance: "High - Wetlands provide critical ecosystem services",
    description: "Plan and monitor restoration of a degraded wetland ecosystem.",
    objectives: [
      "Assess current wetland status and degradation level",
      "Develop restoration plan (hydrology, vegetation, habitat)",
      "Implement restoration activities",
      "Monitor recovery of biodiversity and water quality"
    ],
    methodology: [
      "Baseline survey (hydrology, vegetation, fauna, water quality)",
      "Identify restoration techniques (re-wetting, native planting, invasive removal)",
      "Implement restoration in pilot area",
      "Monitor changes in species richness, water quality parameters",
      "Engage local community in restoration"
    ],
    pastWorks: [
      "Zedler (2000) - Progress in wetland restoration ecology",
      "Moreno-Mateos et al. (2012) - Structural and functional loss",
      "Palmer et al. (2014) - Linkages between restoration science and practice"
    ],
    equipment: ["Vegetation survey tools", "Water quality kit", "GPS", "Camera traps"],
    duration: "5-8 months"
  },
  {
    id: 28,
    title: "Waterborne Disease Surveillance and Prevention",
    category: "water-quality",
    difficulty: "intermediate",
    globalRelevance: "Very High - Waterborne diseases kill thousands daily",
    description: "Investigate the occurrence of waterborne diseases and their relationship with water quality.",
    objectives: [
      "Collect epidemiological data on waterborne diseases",
      "Test drinking water sources for pathogenic contamination",
      "Identify high-risk areas and vulnerable populations",
      "Develop intervention strategies"
    ],
    methodology: [
      "Obtain disease surveillance data from health departments",
      "Collect water samples from household and source points",
      "Test for E. coli, total coliforms, and specific pathogens",
      "GIS mapping of disease incidence and water quality",
      "Community survey on WASH practices"
    ],
    pastWorks: [
      "Ashbolt (2004) - Microbial contamination of drinking water",
      "Prüss-Ustün et al. (2014) - Burden of disease from water",
      "WHO (2017) - Water safety and disease burden"
    ],
    equipment: ["Water sampling kit", "Microbial culture supplies", "GIS software", "Survey tools"],
    duration: "3-5 months"
  },
  {
    id: 29,
    title: "Green Roof Systems for Urban Water Management",
    category: "hydrology",
    difficulty: "intermediate",
    globalRelevance: "High - Nature-based solutions for resilient cities",
    description: "Design and evaluate green roof performance in reducing stormwater runoff and improving water quality.",
    objectives: [
      "Design green roof system (extensive or intensive)",
      "Measure runoff reduction and peak flow delay",
      "Assess runoff water quality improvements",
      "Evaluate co-benefits (thermal, biodiversity, air quality)"
    ],
    methodology: [
      "Design green roof layers (waterproofing, drainage, substrate, vegetation)",
      "Install on test structure or use existing green roof",
      "Monitor rainfall and runoff from green roof vs conventional roof",
      "Analyze runoff for nutrients, heavy metals, TSS",
      "Measure roof surface temperature and building energy use"
    ],
    pastWorks: [
      "Berndtsson (2010) - Green roof performance",
      "Mentens et al. (2006) - Green roofs as flood mitigation",
      "Vijayaraghavan (2016) - Green roofs: a critical review"
    ],
    equipment: ["Rain gauge", "Flow measurement devices", "Water quality kit", "Temperature sensors"],
    duration: "4-6 months"
  },
  {
    id: 30,
    title: "Water-Energy Nexus in Municipal Systems",
    category: "water-resources",
    difficulty: "advanced",
    globalRelevance: "High - Integrated resource management is critical",
    description: "Analyze energy consumption in water supply and wastewater systems and identify efficiency improvements.",
    objectives: [
      "Quantify energy use in water treatment, distribution, and wastewater treatment",
      "Identify energy-intensive processes and inefficiencies",
      "Propose energy optimization strategies",
      "Assess renewable energy integration potential"
    ],
    methodology: [
      "Collect energy consumption data from water utility",
      "Conduct energy audit of pumping, treatment, and distribution",
      "Calculate specific energy consumption (kWh/m³)",
      "Identify opportunities (pump optimization, renewable energy, gravity systems)",
      "Economic and carbon footprint analysis"
    ],
    pastWorks: [
      "Plappally & Lienhard (2012) - Energy requirements for water production",
      "Kenway et al. (2008) - Water-energy futures for Melbourne",
      "Rothausen & Conway (2011) - Greenhouse gas emissions from water use"
    ],
    equipment: ["Energy meters", "Utility data", "Hydraulic modeling software", "Economic analysis tools"],
    duration: "4-6 months"
  }
];

// State management
let filteredTopics = [...projectTopics];
let currentSection = 'topics';

// Initialize the application
function init() {
  renderTopics();
  updateTopicCount();
}

// Section navigation
function showSection(section) {
  document.getElementById('topicsSection').classList.add('hidden');
  document.getElementById('guidelinesSection').classList.add('hidden');
  document.getElementById('resourcesSection').classList.add('hidden');
  
  currentSection = section;
  
  if (section === 'topics') {
    document.getElementById('topicsSection').classList.remove('hidden');
  } else if (section === 'guidelines') {
    document.getElementById('guidelinesSection').classList.remove('hidden');
  } else if (section === 'resources') {
    document.getElementById('resourcesSection').classList.remove('hidden');
  }
}

// Filter topics based on search and filters
function filterTopics() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;
  const difficultyFilter = document.getElementById('difficultyFilter').value;
  
  filteredTopics = projectTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm) || 
                         topic.description.toLowerCase().includes(searchTerm) ||
                         topic.globalRelevance.toLowerCase().includes(searchTerm);
    const matchesCategory = categoryFilter === 'all' || topic.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === 'all' || topic.difficulty === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  renderTopics();
  updateTopicCount();
}

// Update topic count display
function updateTopicCount() {
  const count = filteredTopics.length;
  document.getElementById('topicCount').textContent = `${count} ${count === 1 ? 'topic' : 'topics'} found`;
}

// Render topic cards
function renderTopics() {
  const container = document.getElementById('topicsContainer');
  
  if (filteredTopics.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-12">
        <p class="text-gray-500 text-lg">No topics found. Try adjusting your filters.</p>
      </div>
    `;
    return;
  }
  
  container.innerHTML = filteredTopics.map(topic => `
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition cursor-pointer" onclick="showTopicDetails(${topic.id})">
      <div class="flex items-start justify-between mb-3">
        <span class="px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(topic.category)}">${getCategoryName(topic.category)}</span>
        <span class="px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(topic.difficulty)}">${topic.difficulty}</span>
      </div>
      <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">${topic.title}</h3>
      <p class="text-sm text-gray-600 mb-4 line-clamp-3">${topic.description}</p>
      <div class="flex items-center text-xs text-gray-500">
        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        ${topic.duration}
      </div>
    </div>
  `).join('');
}

// Show topic details in modal
function showTopicDetails(topicId) {
  const topic = projectTopics.find(t => t.id === topicId);
  if (!topic) return;
  
  document.getElementById('modalTitle').textContent = topic.title;
  document.getElementById('modalContent').innerHTML = `
    <div class="space-y-6">
      <div class="flex gap-2">
        <span class="px-3 py-1 text-xs font-medium rounded-full ${getCategoryColor(topic.category)}">${getCategoryName(topic.category)}</span>
        <span class="px-3 py-1 text-xs font-medium rounded-full ${getDifficultyColor(topic.difficulty)}">${topic.difficulty}</span>
        <span class="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">${topic.duration}</span>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Global Relevance</h4>
        <p class="text-gray-700 text-sm">${topic.globalRelevance}</p>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Description</h4>
        <p class="text-gray-700 text-sm">${topic.description}</p>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Objectives</h4>
        <ul class="space-y-2">
          ${topic.objectives.map(obj => `<li class="text-sm text-gray-700 flex items-start"><span class="text-blue-600 mr-2">•</span>${obj}</li>`).join('')}
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Methodology</h4>
        <ul class="space-y-2">
          ${topic.methodology.map(method => `<li class="text-sm text-gray-700 flex items-start"><span class="text-green-600 mr-2">•</span>${method}</li>`).join('')}
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Key Past Research</h4>
        <ul class="space-y-2">
          ${topic.pastWorks.map(work => `<li class="text-sm text-gray-700 flex items-start"><span class="text-purple-600 mr-2">•</span>${work}</li>`).join('')}
        </ul>
      </div>
      
      <div>
        <h4 class="font-semibold text-gray-900 mb-2">Required Equipment/Tools</h4>
        <div class="flex flex-wrap gap-2">
          ${topic.equipment.map(equip => `<span class="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">${equip}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
  
  document.getElementById('topicModal').classList.remove('hidden');
}

// Close modal
function closeModal(event) {
  if (!event || event.target.id === 'topicModal') {
    document.getElementById('topicModal').classList.add('hidden');
  }
}

// Helper functions for styling
function getCategoryColor(category) {
  const colors = {
    'water-quality': 'bg-blue-100 text-blue-800',
    'water-resources': 'bg-green-100 text-green-800',
    'wastewater': 'bg-purple-100 text-purple-800',
    'hydrology': 'bg-cyan-100 text-cyan-800',
    'climate': 'bg-orange-100 text-orange-800',
    'pollution': 'bg-red-100 text-red-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
}

function getCategoryName(category) {
  const names = {
    'water-quality': 'Water Quality',
    'water-resources': 'Water Resources',
    'wastewater': 'Wastewater',
    'hydrology': 'Hydrology',
    'climate': 'Climate',
    'pollution': 'Pollution'
  };
  return names[category] || category;
}

function getDifficultyColor(difficulty) {
  const colors = {
    'beginner': 'bg-green-100 text-green-800',
    'intermediate': 'bg-yellow-100 text-yellow-800',
    'advanced': 'bg-red-100 text-red-800'
  };
  return colors[difficulty] || 'bg-gray-100 text-gray-800';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);