"use client";

import dynamic from "next/dynamic";
// ...existing code...

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Menu,
  X,
  Play,
  Music,
  Bike,
  PersonStanding,
  Moon,
  Sun,
  Instagram,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

// Localization data
const localizationData = {
  en: {
    navigation: {
      about: "About",
      portfolio: "Portfolio",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      name: "Mihai Railean",
      title: "Architectural Technologist",
      summary:
        "A dedicated architectural technologist focused on transforming design concepts into buildable realities through technical precision, BIM coordination, and innovative problem-solving.",
    },
    about: {
      title: "About Me",
      bio: "Ever since beginning my journey in Architectural Technology and Construction Management, I've been driven by the idea that architecture is more than just design—it's a refined balance between precision, technical innovation, and human-focused experience. I thrive in fast-paced environments, enjoy translating ambitious ideas into detailed technical outcomes, and am passionate about sustainable urban transformation and modular design.",
      skillsTitle: "Core Skills",
      skills: [
        "BIM Modeling & Technical Documentation",
        "Construction Drawing & Detailing",
        "Adaptive Reuse & Modular Design",
        "Interior Layout Planning",
        "Stakeholder & Supplier Communication",
        "Scan-to-BIM & Data Integration",
      ],
      hobbiesTitle: "Hobbies & Interests",
      hobbies: {
        running: {
          title: "Running",
          description:
            "Exploring new trails and pushing my limits, finding clarity and focus with every mile.",
        },
        guitar: {
          title: "Playing Guitar",
          description:
            "Crafting melodies and experimenting with chords, from acoustic folk to electric riffs.",
        },
        music: {
          title: "Music Recording",
          description:
            "Bringing musical ideas to life by producing and engineering tracks in my home studio.",
        },
        bmx: {
          title: "BMX",
          description:
            "Enjoying the freedom and creativity of street and park BMX riding.",
        },
      },
    },
    portfolio: {
      title: "Selected Projects",
      downloadButton: "View Full Portfolio (PDF)",
      projects: {
        p1: {
          title: "Can Marçal Restaurant",
          description:
            "A comprehensive bachelor project renovating a heritage site into a restaurant concept, involving full structural analysis, BIM modeling, and regulatory compliance.",
          image: "/can_marcal.png",
        },
        p2: {
          title: "Student Housing Development",
          description:
            "Adaptive reuse of a former industrial laboratory into sustainable student housing, focusing on BIM integration, modular layouts, and acoustic performance.",
          image: "/student_housing.png",
        },
        p3: {
          title: "Two-Story Family House with Basement",
          description:
            "A modern two-story family residence featuring a spacious basement, open-plan living areas, and energy-efficient design. The project included full architectural and structural documentation, daylight analysis, and integration of sustainable building technologies for a comfortable and future-proof home.",
          image: "/two_story_house.png",
        },
      },
    },
    resume: {
      title: "Resume",
      downloadButton: "Download Full CV",
      experienceTitle: "Work Experience",
      educationTitle: "Education",
      experience: [
        {
          role: "Construction & Design Team Intern",
          company: "Sircle Collection - Amsterdam, NL",
          date: "02.2024 - 07.2024",
          description:
            "Supported real-world renovation projects across Europe, contributing to technical preparation, supplier coordination, and on-site LIDAR scanning for hotel and restaurant refurbishments.",
        },
      ],
      education: [
        {
          degree: "Architectural Technology and Construction Management",
          institution: "VIA University College",
          date: "2021 - 2025",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
      },
    },
  },
  de: {
    navigation: {
      about: "Über mich",
      portfolio: "Portfolio",
      resume: "Lebenslauf",
      contact: "Kontakt",
    },
    hero: {
      name: "Mihai Railean",
      title: "Architekturtechnologe",
      summary:
        "Ein engagierter Architekturtechnologe, der sich darauf konzentriert, Entwurfskonzepte durch technische Präzision, BIM-Koordination und innovative Problemlösungen in baureife Realitäten umzusetzen.",
    },
    about: {
      title: "Über mich",
      bio: "Seit Beginn meiner Ausbildung in Architekturtechnologie und Baumanagement treibt mich die Idee an, dass Architektur mehr ist als nur Design – sie ist eine feine Balance zwischen Präzision, technischer Innovation und menschzentrierter Erfahrung. Ich blühe in schnelllebigen Umgebungen auf, genieße es, ehrgeizige Ideen in detaillierte technische Ergebnisse umzusetzen, und begeistere mich für nachhaltige städtische Transformation und modulares Design.",
      skillsTitle: "Kernkompetenzen",
      skills: [
        "BIM-Modellierung & Technische Dokumentation",
        "Bauzeichnung & Detaillierung",
        "Umnutzung & Modulares Design",
        "Innenraumplanung",
        "Kommunikation mit Stakeholdern & Lieferanten",
        "Scan-to-BIM & Datenintegration",
      ],
      hobbiesTitle: "Hobbys & Interessen",
      hobbies: {
        running: {
          title: "Laufen",
          description:
            "Neue Wege erkunden und an meine Grenzen gehen, um mit jeder Meile Klarheit und Fokus zu finden.",
        },
        guitar: {
          title: "Gitarre spielen",
          description:
            "Melodien erschaffen und mit Akkorden experimentieren, von akustischem Folk bis zu elektrischen Riffs.",
        },
        music: {
          title: "Musikaufnahme",
          description:
            "Musikalische Ideen zum Leben erwecken, indem ich Tracks in meinem Heimstudio produziere und aufnehme.",
        },
        bmx: {
          title: "BMX",
          description:
            "Die Freiheit und Kreativität des Street- und Park-BMX-Fahrens genießen.",
        },
      },
    },
    portfolio: {
      title: "Ausgewählte Projekte",
      downloadButton: "Gesamtes Portfolio ansehen (PDF)",
      projects: {
        p1: {
          title: "Restaurant Can Marçal",
          description:
            "Ein umfassendes Bachelorprojekt zur Renovierung eines denkmalgeschützten Gebäudes in ein Restaurantkonzept, einschließlich vollständiger Strukturanalyse, BIM-Modellierung und Einhaltung von Vorschriften.",
          image: "/can_marcal.png",
        },
        p2: {
          title: "Entwicklung von Studentenwohnheimen",
          description:
            "Umnutzung eines ehemaligen Industrielabors in nachhaltige Studentenwohnheime mit Schwerpunkt auf BIM-Integration, modularen Grundrissen und akustischer Leistung.",
          image: "/student_housing.png",
        },
        p3: {
          title: "Zweistöckiges Einfamilienhaus mit Keller",
          description:
            "Ein modernes, zweistöckiges Einfamilienhaus mit geräumigem Keller, offenen Wohnbereichen und energieeffizienter Bauweise. Das Projekt umfasste vollständige architektonische und statische Dokumentation, Tageslichtanalyse sowie die Integration nachhaltiger Gebäudetechnologien für ein komfortables und zukunftssicheres Zuhause.",
          image: "/two_story_house.png",
        },
      },
    },
    resume: {
      title: "Lebenslauf",
      downloadButton: "Vollständigen Lebenslauf herunterladen",
      experienceTitle: "Berufserfahrung",
      educationTitle: "Ausbildung",
      experience: [
        {
          role: "Praktikant im Bau- & Designteam",
          company: "Sircle Collection - Amsterdam, NL",
          date: "02.2024 - 07.2024",
          description:
            "Unterstützung bei realen Renovierungsprojekten in ganz Europa, Mitwirkung bei der technischen Vorbereitung, Lieferantenkoordination und LIDAR-Scans vor Ort für Hotel- und Restaurantumbauten.",
        },
      ],
      education: [
        {
          degree: "Architekturtechnologie und Baumanagement",
          institution: "VIA University College",
          date: "2021 - 2025",
        },
      ],
    },
    contact: {
      title: "Kontakt aufnehmen",
      form: {
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        subject: "Betreff",
        message: "Nachricht",
        submit: "Nachricht senden",
      },
    },
  },
  ro: {
    navigation: {
      about: "Despre",
      portfolio: "Portofoliu",
      resume: "CV",
      contact: "Contact",
    },
    hero: {
      name: "Mihai Railean",
      title: "Tehnolog Arhitect",
      summary:
        "Un tehnolog arhitect dedicat, axat pe transformarea conceptelor de design în realități construibile prin precizie tehnică, coordonare BIM și rezolvare inovatoare a problemelor.",
    },
    about: {
      title: "Despre Mine",
      bio: "De la începutul parcursului meu în Tehnologia Arhitecturală și Managementul Construcțiilor, am fost condus de ideea că arhitectura este mai mult decât design – este un echilibru rafinat între precizie, inovație tehnică și experiență centrată pe om. Mă dezvolt în medii dinamice, îmi place să traduc idei ambițioase în rezultate tehnice detaliate și sunt pasionat de transformarea urbană durabilă și de designul modular.",
      skillsTitle: "Competențe Cheie",
      skills: [
        "Modelare BIM și Documentație Tehnică",
        "Desen Tehnic de Construcții și Detaliere",
        "Reconversie Adaptivă și Design Modular",
        "Planificare Amenajări Interioare",
        "Comunicare cu Părțile Interesate și Furnizorii",
        "Scan-to-BIM și Integrarea Datelor",
      ],
      hobbiesTitle: "Hobby-uri și Interese",
      hobbies: {
        running: {
          title: "Alergat",
          description:
            "Explorând trasee noi și depășindu-mi limitele, găsind claritate și concentrare cu fiecare kilometru.",
        },
        guitar: {
          title: "Cântat la Chitară",
          description:
            "Creând melodii și experimentând cu acorduri, de la folk acustic la riff-uri electrice.",
        },
        music: {
          title: "Înregistrări Muzicale",
          description:
            "Aducând la viață idei muzicale prin producerea și ingineria pieselor în studioul meu de acasă.",
        },
        bmx: {
          title: "BMX",
          description:
            "Bucurându-mă de libertatea și creativitatea ciclismului BMX de stradă și de parc.",
        },
      },
    },
    portfolio: {
      title: "Proiecte Selectate",
      downloadButton: "Vezi Portofoliul Complet (PDF)",
      projects: {
        p1: {
          title: "Restaurant Can Marçal",
          description:
            "Un proiect de licență cuprinzător care a constat în renovarea unui sit de patrimoniu într-un concept de restaurant, implicând analiză structurală completă, modelare BIM și conformitate cu reglementările.",
          image: "/can_marcal.png",
        },
        p2: {
          title: "Dezvoltare Locuințe Studențești",
          description:
            "Reconversia adaptivă a unui fost laborator industrial în locuințe studențești durabile, cu accent pe integrarea BIM, planuri modulare și performanță acustică.",
          image: "/student_housing.png",
        },
        p3: {
          title: "Casă familială cu două etaje și subsol",
          description:
            "O locuință modernă pe două niveluri, cu un subsol spațios, zone de zi open-space și design eficient energetic. Proiectul a inclus documentație arhitecturală și structurală completă, analiză de lumină naturală și integrarea tehnologiilor sustenabile pentru un cămin confortabil și pregătit pentru viitor.",
          image: "/two_story_house.png",
        },
      },
    },
    resume: {
      title: "CV",
      downloadButton: "Descarcă CV-ul Complet",
      experienceTitle: "Experiență Profesională",
      educationTitle: "Educație",
      experience: [
        {
          role: "Stagiar în Echipa de Construcții și Design",
          company: "Sircle Collection - Amsterdam, NL",
          date: "02.2024 - 07.2024",
          description:
            "Am sprijinit proiecte de renovare în întreaga Europă, contribuind la pregătirea tehnică, coordonarea furnizorilor și scanarea LIDAR la fața locului pentru renovări de hoteluri și restaurante.",
        },
      ],
      education: [
        {
          degree: "Tehnologie Arhitecturală și Managementul Construcțiilor",
          institution: "VIA University College",
          date: "2021 - 2025",
        },
      ],
    },
    contact: {
      title: "Contactează-mă",
      form: {
        name: "Numele Complet",
        email: "Adresa de Email",
        subject: "Subiect",
        message: "Mesaj",
        submit: "Trimite Mesajul",
      },
    },
  },
};

export default function Portfolio() {
  const [currentLang, setCurrentLang] = useState<"en" | "de" | "ro">("en");
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Theme management
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const t = localizationData[currentLang];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getHobbyIcon = (hobby: string) => {
    switch (hobby) {
      case "running":
        return <PersonStanding className="w-6 h-6" />;
      case "guitar":
        return <Music className="w-6 h-6" />;
      case "music":
        return <Play className="w-6 h-6" />;
      case "bmx":
        return <Bike className="w-6 h-6" />;
      default:
        return <div className="w-6 h-6 bg-gray-300 rounded" />;
    }
  };

  // Dynamically import the PDF viewer to avoid SSR issues
  const PortfolioPdfViewer = dynamic(
    () => import("../components/portfolio-pdf-viewer"),
    {
      ssr: false,
    }
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Mihai Railean
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {Object.entries(t.navigation).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === key
                        ? "text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Switcher */}
            <div className="hidden md:flex items-center space-x-2">
              {(["en", "de", "ro"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                    currentLang === lang
                      ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
                {Object.entries(t.navigation).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full text-left transition-colors"
                  >
                    {value}
                  </button>
                ))}
                <div className="flex space-x-2 px-3 py-2">
                  {(["en", "de", "ro"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setCurrentLang(lang)}
                      className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
                        currentLang === lang
                          ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                          : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Sun className="w-4 h-4" />
                  )}
                  <span className="text-sm">
                    {theme === "light" ? "Dark" : "Light"} Mode
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {t.hero.name}
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6">
                {t.hero.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t.hero.summary}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
                <Image
                  src="/mugshot.jpg?height=500&width=400"
                  alt="Mihai Railean"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="flex flex-col items-center w-full">
                  <div className="flex items-center justify-center gap-4 mt-6">
                    <a
                      href="https://www.instagram.com/yridengrey/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-gray-500 hover:text-pink-600 transition-colors"
                    >
                      <Instagram className="w-7 h-7" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mihai-railean/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="text-gray-500 hover:text-blue-700 transition-colors"
                    >
                      <Linkedin className="w-7 h-7" />
                    </a>
                    <a
                      href="mailto:mihai.railean07@gmail.com"
                      aria-label="Email"
                      className="text-gray-500 hover:text-green-600 transition-colors"
                    >
                      <Mail className="w-7 h-7" />
                    </a>
                  </div>
                  <a href="/CV.pdf" download className="mt-4 w-full">
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download CV (PDF)
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Bio */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {t.about.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {t.about.bio}
              </p>

              {/* Skills */}
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.about.skillsTitle}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {t.about.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="p-3 text-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.about.hobbiesTitle}
              </h4>
              <div className="space-y-6">
                {Object.entries(t.about.hobbies).map(([key, hobby]) => (
                  <div key={key} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300">
                      {getHobbyIcon(key)}
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {hobby.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {hobby.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.portfolio.title}
            </h3>
            <a
              href="/Portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-8"
            >
              <Button asChild>
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-2" />
                  {t.portfolio.downloadButton}
                </span>
              </Button>
            </a>
          </div>

          {/* PDF Viewer */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12 transition-colors duration-300">
            <PortfolioPdfViewer />
          </div>

          {/* Project Snapshots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(t.portfolio.projects).map(([key, project]) => (
              <Card
                key={key}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.resume.title}
            </h3>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              {t.resume.downloadButton}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.resume.experienceTitle}
              </h4>
              <div className="space-y-6">
                {t.resume.experience.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        {exp.date}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.resume.educationTitle}
              </h4>
              <div className="space-y-6">
                {t.resume.education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {t.contact.title}
            </h3>
          </div>

          <div className="flex justify-center w-full items-center">
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
              {/* Email */}
              <div className="flex items-center space-x-4 w-full">
                <div className="flex-shrink-0 p-3 text-white bg-gray-900 dark:bg-gray-700 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </p>
                  <a
                    href="mailto:mihai.railean07@gmail.com"
                    className="text-gray-600 dark:text-gray-300 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    mihai.railean07@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-center space-x-4 w-full">
                <div className="flex-shrink-0 p-3 text-white bg-gray-900 dark:bg-gray-700 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Phone
                  </p>
                  <a
                    href="tel:+4553932101"
                    className="text-gray-600 dark:text-gray-300 underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +45 53 93 21 01
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-center space-x-4 w-full">
                <div className="flex-shrink-0 p-3 text-white bg-gray-900 dark:bg-gray-700 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Denmark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 dark:text-gray-500">
              © {new Date().getFullYear()} Mihai Railean. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
