import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import heroImage from "../images/header-background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Đặng Đình Ngọc - QA Engineer",
  description: "This ngocdd profile",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "Quote",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Oliver`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">
          I'm a Vietnamese based Full Stack QA Engineer, my full name is ĐẶNG
          ĐÌNH NGỌC
        </strong>
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Currently working as a QA Enginner . with a passion for ensuring the
        quality and reliability of software products. With 6 of experience in
        the field, I excel in creating comprehensive test strategies, executing
        test plans, and identifying and reporting defects. I am skilled in both
        manual and automated testing methodologies, leveraging industry-standard
        tools and frameworks. My strong analytical mindset and attention to
        detail allow me to deliver high-quality software by detecting issues
        early in the development process. I am a collaborative team player who
        thrives in fast-paced environments and is committed to delivering
        top-notch, user-friendly software solutions."
      </p>
    </>
  ),
  actions: [
    {
      href: "https://github.com/ngocdd/ngocdd/blob/2880f6bc5de59f539bf4a6c3be701af9576f0e2a/assets/ngocdd_cv.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I have more than 6 years of work experience in software testing, 
  with both manual and automation tests for web apps and mobile apps,
  I also have experience testing for API, performance, and Database,
  As a person who always works with a high sense of responsibility,
  I am confident that I will always complete the job well and contribute a
  lot of value to the quality of the company's products.`,
  aboutItems: [
    { label: "Location", text: "Ha Noi, Viet Nam", Icon: MapIcon },
    { label: "Age", text: "29", Icon: CalendarIcon },
    { label: "Nationality", text: "Vietnamese", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Books, Music and Travel",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Hanoi University of Industry",
      Icon: AcademicCapIcon,
    },
    {
      label: "Current Job",
      text: "Remote Full Time.",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 8,
      },
      {
        name: "Vietnamese",
        level: 10,
      },
    ],
  },
  {
    name: "Tech Stacks",
    skills: [
      {
        name: "JS/TS",
        level: 9,
      },
      {
        name: "Python",
        level: 6,
      },
    ],
  },
  {
    name: "Framework",
    skills: [
      {
        name: "Playwright",
        level: 9,
      },
      {
        name: "Selenium",
        level: 5,
      },
      {
        name: "Cypress",
        level: 5,
      },
    ],
  },
  {
    name: "Other",
    skills: [
      {
        name: "API Test",
        level: 9,
      },
      {
        name: "Database Test",
        level: 8,
      },
      {
        name: "Performance Test",
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Playwright TS",
    description: "PLaywight TS",
    url: "https://github.com/ngocdd/playwright-ts",
    image: porfolioImage1,
  },
  {
    title: "Behave Python",
    description: "Behave Python",
    url: "https://github.com/ngocdd/behave_demoqa",
    image: porfolioImage2,
  },
  {
    title: "QA Blogs",
    description: "QA Blogs",
    url: "https://qablogs.io.vn/",
    image: porfolioImage3,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage4,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage5,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage6,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage7,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage8,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage9,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage10,
  },
  {
    title: "",
    description: "",
    url: "",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "",
    location: "Information Technology",
    title: "Hanoi University of Industry",
    content: (
      <p>
        In a university Information Technology major, students learn core IT
        concepts, programming, database management, web development, and
        cybersecurity. They gain practical skills in software development,
        networking, and cloud computing. Additionally, they explore emerging
        fields like artificial intelligence and data analytics. This education
        prepares graduates for diverse career opportunities in the technology
        industry.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "February 2022 - Present",
    location: "MANABIE INTERNATIONAL LTD",
    title: "QUALITY ASSISTANCE",
    content: (
      <p>
        Additionally, I conducted exploratory and regression testing for the
        products, and I reviewed automation test scripts created by developers,
        leveraging tools like Playwright and TypeScript. My role also involved
        meticulous bug tracking and verification. Furthermore, I managed a
        dedicated QA team comprising three members, ensuring seamless project
        execution and product excellence.
      </p>
    ),
  },
  {
    date: "July 2021 - February 2022",
    location: "AHT TECH JSC ",
    title: "QA Leader",
    content: (
      <p>
        In my diverse range of projects spanning E-Commerce websites (Magento,
        Shopify, WordPress), mobile apps (iOS/Android), web apps, databases, and
        APIs, I assumed several key responsibilities. These included
        collaborating closely with customers to clarify product quality
        requirements, devising effective test strategies and plans to meet
        project objectives and customer expectations. Additionally, I played a
        vital role in enhancing the testing skills of the company's testers
        through training initiatives. My commitment to staying updated with the
        latest test automation tools helped improve testing efficiency. I also
        managed and developed a proficient team, boosting overall testing
        capacity. Moreover, I successfully set up and implemented automated
        build and test processes using Jenkins. Throughout these endeavors, I
        gained valuable insights into E-Commerce website testing, honed my team
        management and leadership skills, and acquired expertise in training and
        developing new testers in the field.
      </p>
    ),
  },
  {
    date: "January 2019 - June 2021",
    location: "VINSMART RESEARCH & MANUFACTURE JOINT STOCK COMPANY ",
    title: "TESTING SPECIALIST",
    content: (
      <p>
        In my role, I undertook diverse testing projects, including Mobile
        Functional and Performance Testing for Vsmart Aris and Aris Pro, Web
        Testing for a Lab Management Web Application, and API and Performance
        Testing for Customer Services. My core responsibilities revolved around
        crafting meticulous test scenarios based on product features, designs,
        or documentation and strategically planning testing activities based on
        the volume of test cases. I ensured the robust functionality and
        stability of Vinsmart's mobile applications and conducted comprehensive
        testing across APIs, web solutions, and AI components. Furthermore, I
        played a critical role in synthesizing quality assessment results at
        different stages of product development. Utilizing Python, specifically
        the Behave and Pytest frameworks, I wrote test automation scripts to
        enhance testing efficiency. Through these experiences, I deepened my
        understanding of the product development lifecycle, honed my skills in
        requirements analysis and test scenario creation, and developed the
        capability to assess project quality in accordance with distinct
        development stage requirements.
      </p>
    ),
  },
  {
    date: "July 2017 - January 2019",
    location: "SAMSUNG VIETNAM MOBILE R&D CENTER ",
    title: "TESTER",
    content: (
      <p>
        In my role, I actively contributed to a series of significant projects
        involving Samsung mobile devices such as the Galaxy S8, S9, Note 8, and
        Note 9, focusing on mobile testing. Additionally, I was engaged in
        testing the SmartThings Internet of Things (IoT) ecosystem, which
        encompassed web and API testing. My core responsibilities included
        meticulously crafting test cases based on project documentation,
        formulating comprehensive testing plans, and providing succinct project
        status reports. I conducted a wide spectrum of testing activities,
        spanning manual testing, automation testing, web testing, API testing,
        performance testing, and stress testing. Moreover, post-project
        evaluation and lessons learned were integral parts of my role. Through
        these experiences, I gained a profound understanding of testing
        processes and honed my testing skills for mobile devices, applications,
        web, and APIs. I became adept at analyzing project requirements and
        generating test cases based on product documentation, while also
        mastering the art of creating effective test plans for different project
        stages to ensure timely completion. My expertise extended to automation
        testing for both mobile applications and web platforms, enriching my
        skill set in this domain.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Steve Jobs",
      text: "Stay Hungry. Stay Foolish",
      // image: steveJobImage1,
    },
    {
      name: "ngocdd",
      text: "Keep Everything Simple",
      // image: "",
    },
    {
      name: "ngocdd",
      text: "Life is Sharing",
      // image: "",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description: "Conrect to me",
  items: [
    {
      type: ContactType.Email,
      text: "ngodd94@gmail.com",
      href: "mailto:ngodd94@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Ha Noi, Viet Nam",
      href: "",
    },
    {
      type: ContactType.Github,
      text: "ngocdd",
      href: "https://github.com/ngocdd",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/ngocdd",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/ngocdd94/",
  },
];
