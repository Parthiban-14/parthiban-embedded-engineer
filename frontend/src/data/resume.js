export const resumeData = {
  personal: {
    name: "Parthiban N",
    title: "Embedded Engineer",
    location: "Thoothukudi",
    phone: "+91 7418949082",
    email: "parthibanmr2@gmail.com",
    summary: "Embedded Systems and IoT Engineer with hands-on experience in microcontrollers, sensor integration, real-time systems, and computer vision. Built multiple end-to-end projects including a low-cost 3D printer, number plate detection system, and smart monitoring devices. Skilled in firmware development, hardware interfacing, FreeRTOS, and cloud-connected IoT systems."
  },

  skills: {
    "Embedded Development": [
      "Embedded C",
      "Real-Time Embedded Systems",
      "FreeRTOS (Tasks, Queues, Semaphores, Scheduling)"
    ],
    "Microcontrollers & Boards": [
      "ESP32",
      "Arduino (UNO, Mega)"
    ],
    "Communication Protocols": [
      "UART",
      "SPI",
      "I2C"
    ],
    "Hardware & Interfacing": [
      "Sensors (Temperature, TDS)",
      "Servo Motors",
      "Stepper Motors",
      "LCD",
      "RTC",
      "Buzzers"
    ],
    "Design & Development Tools": [
      "KiCad (PCB Design)",
      "Linux"
    ],
    "IoT & Connectivity": [
      "Firebase",
      "Telegram Bot API"
    ],
    "Programming Languages": [
      "C (Embedded)",
      "Python (Basic)"
    ],
    "Languages": [
      "Tamil",
      "English"
    ]
  },

  experience: [
    {
      title: "Embedded Systems & FreeRTOS Intern",
      company: "Senzr AIOT Partner",
      duration: "1 Week",
      description: [
        "Developed embedded applications using Embedded C and FreeRTOS",
        "Implemented task scheduling, inter-task communication, and resource management",
        "Gained practical exposure to real-time system design and debugging"
      ]
    },
    {
      title: "VLSI Design Intern",
      company: "Pantech Solutions",
      duration: "1 Month",
      description: [
        "Worked on digital circuit design and functional verification using simulation tools",
        "Gained exposure to VLSI design flow, logic design, and timing analysis",
        "Assisted in debugging and validating digital modules"
      ]
    },
    {
      title: "Patch Antenna Design Workshop",
      company: "Workshop Participant",
      duration: "1 Day",
      description: [
        "Participated in intensive workshop on antenna design principles and RF fundamentals"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Low-Cost 3D Printer",
      type: "Academic Project",
      techStack: ["Arduino Mega", "Embedded C", "Stepper Motors", "RAMPS"],
      description: "Designed and developed a cost-effective 3D printer from scratch. Implemented stepper motor control, heating system, and extrusion logic. Developed firmware for motion control and calibration. Documented mechanical and electrical system design.",
      image: "/images/3D.png",
      images: [
        "/images/3D.png",
        "/images/3D_printers.jpg",
        "/images/3D_F.jpg",
        "/images/3D_models.jpg"
      ],
      videos: [
        {
          type: "mp4",
          url: "/videos/3D_p.mp4",
        },
        {
          type: "mp4",
          url: "/videos/3D_p2.mov",
        }
      ],
      highlights: [
        "Cost-effective design from scratch",
        "Stepper motor control implementation",
        "Complete firmware development for motion control",
        "Mechanical and electrical system documentation"
      ]
    },
    {
      id: 2,
      title: "Automatic Fish Tank Monitoring System",
      type: "Academic Project",
      techStack: ["ESP32", "Embedded C", "DS18B20 Sensor", "TDS Sensor", "LCD", "RTC"],
      description: "Developed a smart monitoring system using ESP32. Interfaced DS18B20 temperature sensor, TDS sensor, servo feeder, and RTC. Implemented automated alerts and control logic. Displayed real-time parameters on LCD.",
      image: "/images/AFTMS.png",
      images: [
        "/images/AFTMS.png",
        "/images/Auto_fish_tank.png",
        "/images/blockdiagram_aft.png"
      ],
      videos: [],
      highlights: [
        "ESP32-based smart monitoring",
        "Multiple sensor integration (Temperature, TDS)",
        "Automated alerts and control logic",
        "Real-time LCD display"
      ]
    },
    {
      id: 3,
      title: "Automatic Vehicle Number Plate Detection System",
      type: "Embedded System & IOT Project",
      techStack: ["OpenCV", "Python", "Firebase", "Telegram Bot API"],
      description: "Built a real-time vehicle number plate recognition system. Implemented image processing using OpenCV. Integrated Firebase for data storage and Telegram bot for instant alerts.",
      image: "/images/AMVNPS.png",
      images: [
        "/images/AMVNPS.png",
        "/images/AMVNPS_N.png"
      ],
      videos: [],
      highlights: [
        "Real-time number plate recognition",
        "OpenCV image processing",
        "Firebase cloud integration",
        "Instant Telegram alerts"
      ]
    },
    {
      id: 4,
      title: "Smart Parking System with Mobile App",
      type: "District Level Hackathon",
      techStack: ["IoT Sensors", "Mobile App", "Real-time Tracking"],
      description: "IoT-based parking slot tracking system. Designed mobile app interface with real-time availability. Developed for Hackathon 2025, Thoothukudi District Police.",
      image: "/images/SMS.jpg",
      images: [
        "/images/SMS.jpg",
        "/images/SVPS.png",
        "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800",
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800"
      ],
      videos: [
        {
          type: "mp4",
          url: "/videos/AVNP.mp4",
        }
      ],
      highlights: [
        "IoT-based slot tracking",
        "Mobile app interface design",
        "Real-time availability updates",
        "District-level hackathon winner"
      ]
    },
    {
      id: 5,
      title: "ADAS ECU Simulation",
      type: "Naan Mudhalvan Hackathon",
      techStack: ["ECU Simulation", "ADAS Features", "Automotive Electronics"],
      description: "Simulated ECU model for ADAS features. Demonstrated automotive electronics and control system design.",
      image: "/images/ADAS.png",
      images: [
        "/images/ADAS.png",
        "/images/ADAS_ECU.png"
      ],
      videos: [],
      highlights: [
        "ECU simulation for ADAS",
        "Automotive electronics expertise",
        "Control system design",
        "Hackathon project"
      ]
    }
  ],

  education: [
    {
      degree: "B.E. Electronics and Communication",
      institution: "Grace College of Engineering",
      years: "2022 - 2026"
    },
    {
      degree: "Higher Secondary Education (12th Standard)",
      institution: "St. Mary's Boys Hr. Sec. School",
      years: "2022"
    },
    {
      degree: "Secondary Education (10th Standard)",
      institution: "St. Mary's Boys Hr. Sec. School",
      years: "2020"
    }
  ],

  certifications: [
    {
      name: "Basic Linux Course",
      issuer: "Linux Foundation",
      date: "2024",
      image: "/images/certs/LINUX_Fundation.jpg",
      credentialId: "LF-LINUX-001",
      credentialUrl: "/images/certs/LINUX_Fundation.jpg"
    },
    {
      name: "FreeRTOS",
      issuer: "Senzr AIOT Partner",
      date: "2024",
      image: "/images/certs/Embedded_FreeRTOS.png",
      credentialId: "SENZR-FREERTOS-001",
      credentialUrl: "/images/certs/Embedded_FreeRTOS.png"
    },
    {
      name: "VLSI Design",
      issuer: "Pantech Solutions",
      date: "2023",
      image: "/images/certs/VLSI_IN.jpg",
      credentialId: "PANTECH-VLSI-001",
      credentialUrl: "/images/certs/VLSI_IN.jpg"
    },
    {
      name: "Patch Antenna Design and Testing",
      issuer: "Grace College of Engineering",
      date: "2024",
      image: "/images/certs/Antenna_design.png",
      credentialId: "GRACE-ANTENNA-001",
      credentialUrl: "/images/certs/Antenna_design.png"
    },
    {
      name: "Smart Parking System",
      issuer: "Hackathon 2025, Thoothukudi District Police",
      date: "2025",
      image: "/images/certs/Thoothukudi_Hackthon.jpg",
      credentialId: "HACKATHON-PARKING-2025",
      credentialUrl: "/images/certs/Thoothukudi_Hackthon.jpg"
    },
    {
      name: "ADAS ECU Simulation and Testing",
      issuer: "Tamilnadu Skill Development Corporation (Naan Mudhalvan Scheme)",
      date: "2024",
      image: "/images/certs/NAAN_Muthalvan_hackthon.jpg",
      credentialId: "NMSS-ADAS-ECU-001",
      credentialUrl: "/images/certs/NAAN_Muthalvan_hackthon.jpg"
    },
    {
      name: "Low-Cost 3D Printer",
      issuer: "Grace College of Engineering",
      date: "2024",
      image: "/images/certs/LowCost3D.jpg",
      credentialId: "GRACE-3DPRINTER-001",
      credentialUrl: "/images/certs/LowCost3D.jpg"
    },
    {
      name: "Automatic Fish Tank Monitoring System",
      issuer: "Grace College of Engineering",
      date: "2024",
      image: "/images/certs/AUTOMATIC_FT.jpg",
      credentialId: "GRACE-FISHTANK-001",
      credentialUrl: "/images/certs/AUTOMATIC_FT.jpg"
    }
  ],

  achievements: [
    "Participated in multiple district- and state-level hackathons, solving real-world engineering problems",
    "Successfully delivered end-to-end embedded and IoT projects, from hardware interfacing to firmware integration",
    "Demonstrated strong team collaboration and problem-solving skills in group-based technical projects"
  ]
};
