// Publications data array
const publicationsData = [
    {
      title:
        "Electrical conductivity and relaxation in lithium-doped barium vanadate glasses investigated by impedance spectroscopy",
      authors: "Parul Goel, Gajanan V Honnavar* and K P Ramesh",
      journal: "Journal of Physics and Chemistry of Solids",
      volume: "173",
      pages: "111105",
      year: "2023",
      impactFactor: "Q2",
      hIndex: "112",
    },
    {
      title:
        "Evidence of Lampert Triangle and Jonscher’s Double Power Law in Doped Poly(3,4-ethylenedioxythiophene) Devices",
      authors: "Amit Roy*, Anjaneyulu Ponnam, Vaibhav Varade, Gajanan V Honnavar, Reghu Menon",
      journal: "Journal of Physical Chemistry C",
      volume: "127",
      pages: "5502–5512",
      year: "2023",
      impactFactor: "Q1",
      hIndex: "306",
    },
    {
      title:
        "Short-Range Structural Insight into Lithium-Substituted Barium Vanadate Glasses Using Raman and EPR Spectroscopy as Probes",
      authors: "Parul Goel and Gajanan V. Honnavar*",
      journal: "ACS Omega",
      volume: "6",
      pages: "22454−22461",
      year: "2021",
      impactFactor: "Q1",
      hIndex: "40",
    },
    {
      title:
        "Structural and Electrical Properties of Lithium Substituted Niobo Vanadate Glasses Doped with Nickel Ferrite",
      authors: "Belay G. Hailemariam, Gajanan V. Honnavar*, Mohamed Irfan, and Ramesh Keralapura",
      journal: "AIP Advances",
      volume: "11",
      pages: "035210",
      year: "2021",
      impactFactor: "Q2",
      hIndex: "44",
    },
    {
      title:
        "Vibrational, Thermal, and Physical Characterizations of Some Zinc Niobo Tellurite Glasses Doped with Rare Earth (Eu, Dy)",
      authors: "Afrash Ejigu A, Gajanan V Honnavar*, K P Ramesh",
      journal: "Optics and Spectroscopy",
      volume: "129",
      pages: "527",
      year: "2021",
      impactFactor: "Q3",
      hIndex: "35",
    },
    {
      title:
        "Effect of local environment on stretching parameter in the mixed alkali oxyfluoro vanadate glasses: Electrical Modulus and structural analysis",
      authors: "Gajanan V Honnavar*",
      journal: "Ionics",
      volume: "27",
      pages: "1177-1183",
      year: "2021",
      impactFactor: "Q2",
      hIndex: "52",
    },
    {
      title:
        "Nickel ferrite doped lithium substituted zinc and niobo vanadate glasses: thermal, physical, and electrical characterization",
      authors: "Belay Getachew, Gajanan V Honnavar*, K P Ramesh",
      journal: "Mater. Res. Express",
      volume: "7",
      pages: "095202",
      year: "2020",
      impactFactor: "Q2",
      hIndex: "27",
    },
    {
      title:
        "Optical spectroscopic characterization of Rare earth (Eu, Er) doped Oxyfluorotellurite glasses for photonic applications",
      authors: "Gajanan V Honnavar*, K P Ramesh and S V Bhat",
      journal: "Bull. Mater. Sci.",
      volume: "40",
      pages: "991 – 997",
      year: "2017",
      impactFactor: "Q2",
      hIndex: "63",
    },
    {
      title:
        "Role of crystal field in mixed alkali metal effect: Electron Paramagnetic Resonance study of mixed alkali metal oxyfluoro vanadate glasses",
      authors: "Gajanan V Honnavar, K P Ramesh* and S V Bhat",
      journal: "J. Phys. Chem. A.",
      volume: "118",
      pages: "573 – 578",
      year: "2014",
      impactFactor: "Q2",
      hIndex: "225",
    },
    {
      title:
        "Study of the effect of alkali mixture on V – O bond length in Oxyfluoride Vanadate glasses using Raman spectroscopy",
      authors: "Gajanan V Honnavar*, Prabhava S N and K P Ramesh",
      journal: "J. Non-Cryst. Solids.",
      volume: "370",
      pages: "6 – 9",
      year: "2013",
      impactFactor: "Q1",
      hIndex: "135",
    },
    {
      title:
        "Probing disorder and transport properties in polypyrrole thin-film devices by impedance and Raman spectroscopy",
      authors: "Vaibhav Varade*, Gajanan V Honnavar, P Anjaneyulu, K P Ramesh, and Reghu Menon",
      journal: "J. Phys. D: Appl. Phys.",
      volume: "46",
      pages: "365306",
      year: "2013",
      impactFactor: "Q1",
      hIndex: "185",
    },
  ];
  
  // Student project supervision data array
  const projectsData = [
    {
      type: "Undergraduate (Supervised)",
      title: "Design of a new Quantum Multiplier based on novel Indian Algorithms",
      description: "Aditya Kumar, Akash H Rao, Navaneeth N Anchan, Shivakiran T S"
    },
    {
      type: "Undergraduate (Supervised)",
      title: "Synthesis, I-V analysis, and frequency response of Co-doped CuS and ZnS Quantum Dot thin films for memory applications",
      description: "Karan Aggarwal, Yatharth Bakshi, P Shri Gurudatta, Gajanan Kamat"
    },
    {
      type: "Undergraduate (Supervised)",
      title: "Modelling of solar cells using novel perovskite structure",
      description: "Tadi Surya Reddy"
    },
    {
      type: "Doctoral (Supervised)",
      title: "Mr. Belay Getachew Hailemariam",
      description: "Graduated from Bahir Dar University, Bahir Dar, Ethiopia on 15th July 2021.",
    },
    {
      type: "Doctoral (Supervised)",
      title: "Mrs. Parul Goel",
      description: "Successfully defended her thesis on 21st April, 2023. Visvesvaraya Technological University (VTU) Belagavi, India",
    },
    {
      type: "Doctoral (Supervising)",
      title: "Mr. Afrash Ejigu",
      description: "Working on the effect of zinc and cadmium substitution on the optical properties of rare-earth doped niobo-tellurite glasses for photonic applications. (Bahir Dar University, joined in 2017). Ready to submit the thesis.",
    },
    {
      type: "Masters (Supervised)",
      title: "Tuning the optical and electrical properties of glasses by quantum dot and carbon nanotubes",
      description: "Nanoscience and Technology, Kuvenpu University, Shankaraghatta, Karnataka, India. Student- H.P. Anusha (2012)",
    },
    {
      type: "Masters (Supervised)",
      title: "Analysis of neodymium-doped telluro-cadmium glass for photonic application",
      description: "Department of Physics, Bahir Dar University, Ethiopia, Student - Moges Tsega (2019).",
    },
    {
      type: "Masters (Supervised)",
      title: "Study of Structural and Magnetic Properties of ZnO quantum dot doped Nickel ferrite",
      description: "Department of Physics, Bahir Dar University, Ethiopia, Student - Mengistu  (2019).",
    },
    {
      type: "Undergraduate (Supervised)",
      title: "Novel Quantum multiplication algorithm based on Indian classic multiplication techniques",
      description: "Students – Shivakiran T S, Aditya Kumar, Akash H Rao, and Navneeth Anchan, ECE (2023)",
    },
    {
      type: "Undergraduate (Supervised)",
      title: "Synthesis of Quantum Dots and its applications",
      description: "Students – Abhinaya K, Niharika R Munjoji, Pranav S Kashyap, and Sneha R, ECE (2023)",
    },
    {
      type: "Undergraduate (Supervised)",
      title: "Fabrication of MRAM using Quantum Dots",
      description: "Students – Yatharth Bakshi, P Guru Datta, Karan Agarwal, and Gajanan Kamat ECE (2023)",
    },
  ];
  
  export { publicationsData, projectsData };
  