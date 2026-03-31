import { links } from "@/config";

export const navItems = [
  { name: "Platform", link: "#about" },
  { name: "Features", link: "#projects" },
  // { name: "Customers", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Get Started", link: "/contact-us" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "End-to-end hiring automation that eliminates manual effort",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Scalable across teams, regions, and time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "Built for enterprise scale",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI-powered platform built for modern recruitment teams.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building the future of bias-free, intelligent hiring",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ready to transform your hiring process?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Automated Hiring Pipeline",
    des: "Create jobs, collect applications, and move candidates through hiring stages automatically.",
    img: "/image1.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 2,
    title: "Virtual Interview Engine",
    des: "Conduct structured interviews with automated scheduling and real-time monitoring.",
    img: "/image2.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 3,
    title: "AI Evaluation Dashboard",
    des: "Analyze candidate performance using intelligent scoring and insights.",
    img: "/image3.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#",
    sourceCode: "#",
  },
  {
    id: 4,
    title: "Bulk Hiring System",
    des: "Handle high-volume recruitment with seamless bulk candidate processing.",
    img: "/image4.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#",
    sourceCode: "#",
  },
] as const;

export const testimonials = [
  {
    quote:
      "D360 ACE reduced our hiring time by more than 50% and helped us identify better candidates without bias. The automated interview system is a game-changer for high-volume recruitment.",
    name: "Priya Sharma",
    title: "Head of Talent Acquisition, ScaleUp Technologies",
  },
  {
    quote:
      "We used to lose top talent because of scheduling delays. With D360 ACE, candidates go from application to virtual interview in minutes. Our quality of hire has never been higher.",
    name: "Rahul Kapoor",
    title: "VP of People & Culture, NovaTech Solutions",
  },
  {
    quote:
      "D360 ACE transformed our recruitment workflow completely. Everything is now automated and scalable. We processed 500+ applicants in a single weekend without lifting a finger.",
    name: "Ananya Mehta",
    title: "HR Director, Infinity Dynamics",
  },
  {
    quote:
      "As an HR leader, ensuring fair evaluations is our top priority. D360 ACE scores candidates purely on skills and responses — bias has been completely eliminated from our hiring process.",
    name: "Vikram Desai",
    title: "Chief People Officer, Horizon Group",
  },
  {
    quote:
      "The AI Evaluation Dashboard gives us instant, actionable insights on every candidate. Our recruitment team now focuses on strategic decisions instead of manual screening.",
    name: "Neha Gupta",
    title: "Technical Recruiting Manager, CloudNine Labs",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "60% Faster Time-to-Hire",
    desc: "Eliminate scheduling conflicts and manual screening delays. Automatically move top candidates through the pipeline.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "100% Bias-Free Screening",
    desc: "AI evaluates hard skills and responses objectively, removing human bias from the critical initial shortlisting phase.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Infinite Scalability",
    desc: "Whether you're hiring 1 or 1,000 employees, the platform handles simultaneous interviews and bulk processing effortlessly.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Fully Automated Workflows",
    desc: "From job posting to candidate evaluation — every step is automated, data-driven, and intelligently orchestrated.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "#",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "#",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "#",
  },
] as const;

export const techStack = {
  stack1: ["AI Engine", "NLP", "Python"],
  stack2: ["Node.js", "AWS", "PostgreSQL"],
} as const;
