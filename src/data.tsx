import {
  About,
  Education,
  Experience,
  Interest,
  NavLinks,
  ProjectsProps,
  Skills,
  Testimonial,
} from "./models";

export const navLinks: NavLinks[] = [
  {
    id: 1,
    title: "Home",
    active: "active",
    path: "#top",
  },
  {
    id: 2,
    title: "About",
    active: "",
    path: "#about",
  },
  {
    id: 2,
    title: "Skills",
    active: "",
    path: "#skills",
  },
  {
    id: 4,
    title: "Education",
    active: "",
    path: "#education",
  },
  {
    id: 5,
    title: "Projects",
    active: "",
    path: "#projects",
  },
  {
    id: 6,
    title: "Contact",
    active: "",
    path: "#contact",
  },
];

export const about: About[] = [
  {
    id: 1,
    title: "Name",
    detail: "Jeevan Shrestha",
    icon: "fa-github",
    link: "https://github.com/Jeevan1",
  },
  {
    id: 2,
    title: "Email",
    detail: "shresthaj1986@gmail.com",
    icon: "fa-envelope",
    link: "",
  },
  {
    id: 3,
    title: "Phone",
    detail: "+91 9876543210",
    icon: "fa-phone",
    link: "",
  },
  {
    id: 4,
    title: "Linkdn",
    detail: "Kathmandu, NP",
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/jeevan-shrestha-34a3b01a5",
  },
];

export const interest: Interest[] = [
  {
    id: 1,
    title: "Music",
    icon: "fa-music",
  },
  {
    id: 2,
    title: "Game",
    icon: "fa-gamepad",
  },
  {
    id: 3,
    title: "Coding",
    icon: "fa-code",
  },
  {
    id: 4,
    title: "Travel",
    icon: "fa-map-marker",
  },
  {
    id: 5,
    title: "Movies",
    icon: "fa-compact-disc",
  },
  {
    id: 6,
    title: "Photos",
    icon: "fa-camera-retro",
  },
];

export const skills: Skills[] = [
  {
    id: 1,
    title: "HTML",
    image: "/assets/images/skills/html.png",
    percentage: 100,
  },
  {
    id: 2,
    title: "CSS",
    image: "/assets/images/skills/css.png",
    percentage: 90,
  },
  {
    id: 3,
    title: "Javascript",
    image: "/assets/images/skills/js.png",
    percentage: 90,
  },
  {
    id: 4,
    title: "SCSS",
    image: "/assets/images/skills/scss.png",
    percentage: 70,
  },
  {
    id: 5,
    title: "Bootstrap",
    image: "/assets/images/skills/bootstrap.png",
    percentage: 80,
  },
  {
    id: 6,
    title: "PHP",
    image: "/assets/images/skills/php.png",
    percentage: 50,
  },
  {
    id: 7,
    title: "Git/github",
    image: "/assets/images/skills/github.png",
    percentage: 90,
  },
  {
    id: 8,
    title: "React",
    image: "/assets/images/skills/react.png",
    percentage: 90,
  },
  {
    id: 9,
    title: "Redux",
    image: "/assets/images/skills/redux.png",
    percentage: 80,
  },
  {
    id: 10,
    title: "Tailwind",
    image: "/assets/images/skills/tailwind.png",
    percentage: 80,
  },
  {
    id: 11,
    title: "Next.js",
    image: "/assets/images/skills/nextjs.png",
    percentage: 80,
  },
  {
    id: 12,
    title: "React Native",
    image: "/assets/images/skills/native.png",
    percentage: 50,
  },
  {
    id: 13,
    title: "Django",
    image: "/assets/images/skills/django.png",
    percentage: 50,
  },
];

export const education: Education[] = [
  {
    id: 1,
    durations: "2018-2023",
    title: "Madan Bhandari Memorial College",
    degree: "Bsc. CSIT",
    description:
      "Received a Bachelor of Science degree in Computer Science from Trivuwan University, specializing in Bsc. CSIT. The program equipped me with advanced knowledge in software development, algorithms, and computer systems.",
  },
  {
    id: 2,
    durations: "2015-2027",
    title: "Reliance International Academy",
    degree: "+2 Science",
    description:
      "Completed Higher Secondary Education (10+2) from Reliance International Academy, specializing in Science. This program provided a solid foundation in Science and prepared me for further academic pursuits.",
  },
  {
    id: 3,
    durations: "2004-2014",
    title: "Shree Jana Jagriti Secondary School",
    degree: "SLC",
    description:
      "Attained the Secondary School Leaving Certificate (SLC) from Shree Jana Jagriti Secondary School, which laid the groundwork for my academic journey. Completed studies in a diverse range of subjects, fostering a well-rounded educational experience",
  },
];

export const experience: Experience[] = [
  {
    id: 1,
    durations: "May 2023 – Sep 2023",
    title: "Frontend Developer Internship At Suga Inc.",
    degree: "Internship",
    description:
      "Assisted in the development of frontend features and UI enhancements for web applications, gaining hands-on experience in a professional environment.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Jhukal",
    image: "/assets/images/testimonial/user1.png",
    designation: "Frontend Developer",
    content: `Jeevan Shrestha consistently impressed us with their innovative approach to front-end development. Their attention to detail and commitment to excellence set them apart.`,
  },
  {
    id: 2,
    name: "Harish Bhatt",
    image: "/assets/images/testimonial/user2.png",
    designation: "Fullstack Developer",
    content: `Working with Jeevan Shrestha was a delightful experience. Their ability to create visually appealing and user-friendly interfaces exceeded our expectations.`,
  },
  {
    id: 3,
    name: "Rajendra Thapa",
    image: "/assets/images/testimonial/user1.png",
    designation: "UI/UX Developer",
    content: `Jeevan Shrestha is a highly skilled developer who always goes above and beyond to deliver outstanding results. It was a pleasure collaborating with them.`,
  },
  {
    id: 5,
    name: "Bijay Shrestha",
    image: "/assets/images/testimonial/user2.png",
    designation: "UI/UX Developer",
    content: `I was thoroughly impressed by Jeevan Shrestha's professionalism and expertise. They have a natural talent for transforming design concepts into functional interfaces.`,
  },
];

export const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "BusinessBoard: Online Business Management (React JS)",
    image: "/assets/images/projects/oneup.png",
    description: ` Welcome to the Business Dashboard project, where
        data-driven decision-making meets streamlined operations.
        Our project is designed to provide businesses with a
        powerful tool to visualize and analyze key metrics,
        helping you gain valuable insights into your company's
        performance. The Business Dashboard offers a comprehensive
        view of critical business data, from sales and financial
        data to marketing analytics and customer insights. With
        user-friendly interfaces and customizable widgets, our
        dashboard simplifies complex data into actionable
        information, empowering you to make informed choices that
        drive growth and success. Join us on this journey to
        transform your business operations by harnessing the power
        of data. Explore the features and capabilities of our
        Business Dashboard and unlock the potential to enhance
        efficiency, drive innovation, and achieve your business
        goals.`,
    live: "https://dashboard.sthajeevan.com.np",
    source: "https://github.com/Jeevan1/businessboard",
  },
  {
    id: 2,
    title: "SPDSS School Website (React JS)",
    image: "/assets/images/projects/spdss.png",
    description: `The SPDSS School Website is a modern and responsive educational platform built using React JS. Designed for Shree Prabha Dhamkot Technical & Vocational Secondary School, the site provides comprehensive information about the institution, including academic programs, staff, announcements, and events. With a clean user interface and smooth navigation, the website aims to improve user engagement and provide easy access to resources for students, parents, and educators. Developed with a focus on performance and accessibility, the site reflects the school’s dedication to quality education and community service.`,
    live: "https://spdss.edu.np/",
    source: "#top",
  },
  {
    id: 3,
    title: "LifeLine Achham: Blood Donor (React JS)",
    image: "/assets/images/projects/lifeline.png",
    description:
      "LifeLine Achham is a web application developed using React JS that serves as a comprehensive directory of active blood donors in Achham. The platform aims to bridge the gap between blood donors and recipients, facilitating timely assistance during emergencies. By providing an organized and accessible list of willing donors, LifeLine Achham plays a crucial role in strengthening the healthcare support system within the community.",
    live: "https://lifelineachham.org/",
    source: "#top",
  },
  {
    id: 4,
    title: "Recondition Hub: Vehicle Marketplace (Next JS)",
    image: "/assets/images/projects/reconditionhub.png",
    description:
      "Recondition Hub is an online platform developed using React JS that connects buyers and sellers of reconditioned vehicles, including bikes and cars. The website allows trusted recondition houses to list their vehicles, enabling customers to browse, visit showrooms, and connect with sellers seamlessly. The platform aims to streamline the process of buying and selling reconditioned vehicles, providing a user-friendly interface and a comprehensive directory for vehicle enthusiasts and potential buyers.",
    live: "https://reconditionhub.com",
    source: "#top",
  },
  {
    id: 5,
    title: "Santosh Raj Construction and Supplies (Next JS)",
    image: "/assets/images/projects/src.png",
    description: `The SR Construction Company Website is a professional and responsive platform developed using Next JS. It showcases the company's construction services, portfolio, and client testimonials. The website features a clean design with intuitive navigation, allowing potential clients to easily explore the company's offerings and past projects. With a focus on performance and user experience, the site effectively represents SR Construction's commitment to quality and excellence in the construction industry.`,
    live: "https://srconstruction.sthajeevan.com.np",
    source: "https://github.com/Jeevan1/srcs",
  },
  {
    id: 6,
    title: "Chat App (React Native)",
    image: "/assets/images/projects/chat-app.jpg",
    description:
      "Built a simple chat app using React Native and Firebase, featuring real-time messaging and a responsive user interface.",
    live: "#top",
    source: "https://github.com/Jeevan1/chat-app",
  },
  {
    id: 7,
    title: "FarmMart: Online e-Commerce platform",
    image: "/assets/images/projects/farm.png",
    description: `Welcome to FarmMart: Online Marketplace, where agriculture
    meets e-commerce. In a world increasingly connected
    through technology, our project bridges the gap between
    farmers and consumers, offering a digital platform that
    revolutionizes the way fresh produce is bought and sold.
    
    FarmMart provides a seamless and convenient experience for
    both farmers and buyers, connecting them in a virtual
    marketplace that promotes local, sustainable, and
    accessible food sources. Explore how our platform empowers
    farmers to reach a broader customer base while enabling
    consumers to access farm-fresh products with ease. Join us
    on this journey to transform the agricultural landscape,
    supporting local farmers and fostering a more sustainable
    and transparent food supply chain. Discover the features
    and benefits of FarmMart: Online Marketplace as we
    redefine the future of agriculture and online commerce.`,
    live: "#top",
    source: "https://github.com/Jeevan1/FarmManagement",
  },
  {
    id: 8,
    title: "Online Liquor Store (React Native)",
    image: "/assets/images/projects/liquor.png",
    description:
      "An e-commerce mobile app built with React Native, providing a user-friendly interface for browsing products, managing cart, and making purchases.",
    live: "#top",
    source: "https://github.com/Jeevan1/ecom-app",
  },
  {
    id: 9,
    title: "IT Company (React Native)",
    image: "/assets/images/projects/it-company.png",
    description:
      "Developed an IT company website using Next.js, demonstrating expertise in building modern, responsive, and dynamic web applications tailored to professional needs.",
    live: "https://company.sthajeevan.com.np",
    source: "https://github.com/Jeevan1/it-company",
  },
];
