import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Rahul Goli",
  title: "Embedded Systems Engineer",
  summary: "Results-driven Electronics Engineering graduate specializing in Embedded Systems with hands-on experience in C/Embedded C, ARM microcontrollers (LPC2148, STM32), and communication protocols (UART, SPI, I2C, CAN). Proven ability to design real-time monitoring systems using GSM modules. Certified embedded systems engineer seeking to leverage technical expertise in firmware development and IoT solutions at innovative technology companies.",
  contact: {
    phone: "+91-9067497029",
    email: "rahulgoli0223@gmail.com",
    linkedin: "linkedin.com/in/rahul-goli",
    github: "github.com/rahulgoli",
    naukri: "naukri.com/code360/rahulgoli",
    portfolio: "rahulgoli.github.io",
    location: "Solapur, Maharashtra, India"
  },
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["C", "Embedded C", "C++", "Python (Machine Learning)"]
    },
    {
      category: "Microcontrollers & Platforms",
      skills: ["ARM7 (LPC2148)", "STM32", "ARM Cortex", "Embedded Linux"]
    },
    {
      category: "Communication Protocols",
      skills: ["UART", "SPI", "I2C", "CAN", "TCP/IP", "UDP"]
    },
    {
      category: "Hardware Interfacing",
      skills: ["GSM Modules", "LCD Displays", "Sensors", "ADC/DAC"]
    },
    {
      category: "Development Tools",
      skills: ["Keil uVision", "GCC", "Git", "JTAG Debugging", "Oscilloscope"]
    },
    {
      category: "Concepts",
      skills: ["Real-Time Operating Systems (RTOS)", "Firmware Development", "IoT", "Robotics", "Machine Learning"]
    }
  ],
  experience: [
    {
      role: "Embedded System Software Engineer",
      company: "Vector India Pvt. Ltd.",
      location: "Hyderabad, Telangana",
      period: "October 2024 – Present",
      points: [
        "Developing embedded software solutions using C/C++ and Embedded C for automotive and industrial applications",
        "Implementing communication protocols including UART, SPI, I2C, CAN, TCP/IP, and UDP for microcontroller-based systems",
        "Collaborating with cross-functional engineering teams to design, test, and optimize firmware for ARM-based platforms",
        "Debugging and troubleshooting embedded systems using JTAG, oscilloscopes, and logic analyzers",
        "Contributing to code reviews and documentation following industry best practices and safety standards"
      ]
    },
    {
      role: "Robotics Intern",
      company: "Kodacy-SPACE",
      location: "Virtual",
      period: "August 2023",
      points: [
        "Completed intensive training program on robotics fundamentals and embedded control systems",
        "Gained practical knowledge in robotic systems integration and sensor interfacing",
        "Collaborated with peers on virtual robotics projects emphasizing automation and embedded programming"
      ]
    }
  ],
  projects: [
    {
      title: "Real-Time Monitoring System with GSM Communication",
      period: "2023 – 2024",
      description: [
        "Designed and implemented an embedded monitoring system using ARM7 LPC2148 microcontroller with GSM module integration",
        "Developed firmware in Embedded C for UART-based communication between microcontroller and GSM module",
        "Integrated LCD display for real-time data visualization and user interface",
        "Implemented sensor data acquisition and wireless transmission capabilities for remote monitoring applications"
      ]
    },
    {
      title: "STM32-Based Communication Protocol Implementation",
      period: "2024",
      description: [
        "Developed multi-protocol communication framework supporting UART, SPI, and I2C on STM32 platform",
        "Optimized interrupt-driven data handling for low-latency communication in real-time embedded systems",
        "Created modular driver architecture for scalable peripheral interfacing"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Walchand Institute of Technology",
      location: "Solapur, Maharashtra",
      period: "July 2021 – June 2024",
      details: "Relevant Coursework: Embedded Systems, Microcontrollers, Digital Signal Processing, Communication Systems"
    }
  ],
  certifications: [
    {
      name: "Machine Learning Certificate Course",
      issuer: "Internshala Trainings",
      period: "May 2024 – July 2024",
      details: "Completed comprehensive training in ML algorithms, data analysis, and Python programming"
    },
    {
      name: "Embedded Systems Training",
      issuer: "Vector India",
      period: "2024",
      details: "Professional certification in embedded software development and industry-standard practices"
    }
  ]
};