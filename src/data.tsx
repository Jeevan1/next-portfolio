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
    percentage: 70,
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
    percentage: 60,
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
    title: "BusinessBoard: Online Business Management",
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
    live: "https://businessboard.netlify.app/",
    source: "https://github.com/Jeevan1/businessboard",
  },
  {
    id: 2,
    title: "Chat App (React Native)",
    image: "/assets/images/projects/chat-app.jpg",
    description:
      "Built a simple chat app using React Native and Firebase, featuring real-time messaging and a responsive user interface.",
    live: "#top",
    source: "https://github.com/Jeevan1/chat-app",
  },
  {
    id: 3,
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
    id: 4,
    title: "Online Liquor Store (React Native)",
    image: "/assets/images/projects/liquor.png",
    description:
      "An e-commerce mobile app built with React Native, providing a user-friendly interface for browsing products, managing cart, and making purchases.",
    live: "#top",
    source: "https://github.com/Jeevan1/ecom-app",
  },
  {
    id: 5,
    title: "GEOSTORE: e-Commerce Platform",
    image: "/assets/images/projects/geostore.png",
    description: `Welcome to Geomart, your gateway to an exceptional online
    shopping experience. Geomart is not just another
    e-commerce site; it's a destination where convenience,
    quality, and innovation converge to redefine your shopping
    journey. At Geomart, we're committed to offering you a
    curated selection of products that cater to your diverse
    needs. Whether you're looking for fashion, electronics,
    home essentials, or more, our platform provides a seamless
    shopping experience, complete with user-friendly features,
    secure transactions, and personalized recommendations.
    Join us on this exciting journey through the world of
    online shopping. Explore the endless possibilities that
    Geomart has to offer, as we strive to enhance your
    lifestyle with a click. Discover our unique features and
    exceptional customer service as we pave the way for the
    future of e-commerce.`,
    live: "https://geostorenp.netlify.app/",
    source: "https://github.com/Jeevan1/geostore",
  },
];
