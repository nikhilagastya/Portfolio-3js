import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "ML Enginner",
      icon: mobile,
    },
    {
      title: "Cloud Architect",
      icon: backend,
    },
    {
      title: "DevOps Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
   
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
   
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: 'src/assets/Jenkins.png',
    },
    {
      name: "JavaScript",
      icon: 'src/assets/MongoDB.png',
    },
    {
      name: "JavaScript",
      icon: 'src/assets/OpenCV.png',
    },
    {
      name: "JavaScript",
      icon: 'src/assets/AWS.png',
    },
    
  ];
  
  const experiences = [
    {
      title: "Teaching Assisstant",
      company_name: "Blue Sky Coding",
      icon: 'http://www.blueskycoding-gh.com/assets/logo.png',
      iconBg: "white",
      date: "March 2022 - July 2022",
      points: [
      "Helped the company in setting up a community of over 1k college students and working professionals",
      "Worked as a teaching assistant and mentored a batch of 50 students",
      "Assisted the faculty in the process of course creation and content curation",
      "Devised innovative ways of teaching DSA and Web Technologies for begginers"
     
      ],
    },
    {
      title: "Research Intern",
      company_name: "Indian Space Research Organization",
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/400px-Indian_Space_Research_Organisation_Logo.svg.png',
      iconBg:"white" ,
      date: "July 20223 - Oct 2023",
      points: [
      "Collabrated with a team of scientists to develop cutting-edge technologies in field of Satellite Imagery",
      "Worked extensively on SuperResolution of satellite Imagery",
      "Built CNN models which increase the quality of ground level satellite images by 40%.",
      "Published a Research Paper titled Super Resolution Resourcesat-2 satellite imagery using SRCNN",
     
      ],
    },
    {
      title: "Software Intern",
      company_name: "EKSAQ",
      icon: 'https://eksaq.in/wp-content/uploads/2019/05/Colored-logo-1170x536.png',
      iconBg: "White",
      date: "Oct 2023 - June 2024",
      points: [
      "Built a in-house tool for content managment for multiple products.",
      "Encorporated AI features for plagarism check and various language tools.",
      "Enabled analytics and performances measure of content creators and editors.",
      "Built AI pipelines for simplyfiying the process of Assert creation and animation"
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "EKSAQ",
      icon: 'https://eksaq.in/wp-content/uploads/2019/05/Colored-logo-1170x536.png',
      iconBg: "White",
      date: "June 2024",
      points: [
      "Led a team in desigining ,developing and testing a Learning Management System using React Native",
      "Created a CI/CD pipeline for test and build automation.",
      "Developed Rest APIs and scalable backend using Supabase.",
      "Managed hoisting and data storage services on AWS using EC2 ,S3, Amplify and Cloudfront",
      "Integrated anaytics for visualization of user behaviour",
      "Developed and launched pilot for about 10,000 students in less than 2 months."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Priyansh has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
      name: "Khyati Bhatt",
      designation: "CEO",
      company: "Simply Body Talk",
      image: "https://media.licdn.com/dms/image/C4D03AQEpBQFei2OEtQ/profile-displayphoto-shrink_400_400/0/1650362145770?e=1694044800&v=beta&t=DQlFIbXqEC2uj_sx91baM_7e7QMpBKli03NgxYaQqbc",
    },
    {
      testimonial:
        "I highly recommend Priyansh for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
      name: "Anup Robins",
      designation: "HR Business Partner",
      company: "Experian",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    {
      testimonial:
        "This guy has what it takes for the first unicorn. Just wait and watch.",
      name: "Aman Sharma",
      designation: "CTO",
      company: "Dinnerfy",
      image: "https://media.licdn.com/dms/image/D4E03AQFrs3BhOhnt5A/profile-displayphoto-shrink_400_400/0/1683687300051?e=1693440000&v=beta&t=BKh8L96K5xzfbcOMTznFCep4PPAuwTr5iIBNtiTJBEQ",
    },
  ];
  
  const projects = [
    {
      name: "ShowEazy",
      description:
        "ShowEazy is a pass-generating app and QR scanner is a streamlined solution designed to enhance event management for college activities. It automates the process of generating event passes and utilizes QR codes for seamless check-in. With a user-friendly interface, students receive their passes digitally, which they can easily scan at event entrances using the QR scanner.Say Bye-Bye to queus with BookEazy.",
      tags: [
        {
          name: "web dev",
          color: "blue-text-gradient",
        },
        {
          name: "software engineering",
          color: "pink-text-gradient",
        },
        {
          name: "App dev",
          color: "green-text-gradient",
        },
       

      ],
      image: 'src/assets/PRHome.png',
      source_code_link: "https://github.com/nikhilagastya/Pass_frontend_updated",
    },
    {
      name: "BlindAid",
      description:
        "Project Blind is a device designed to help visually impaired individuals navigate their surroundings independently and confidently through their audiory senses . It uses a combination of sensors, cameras, and advanced algorithms to identify objects and provide detailed descriptions like object detection ,human recognition and distance estimation in real-time..",
      tags: [
        {
          name: "internet of things",
          color: "blue-text-gradient",
        },
        {
          name: "Open-CV",
          color: "green-text-gradient",
        },
        {
          name: "YOLO",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "orange-text-gradient",
        },
      ],
      image: 'src/assets/BlindAid.png',
      source_code_link: "https://github.com/nikhilagastya/Poject-Blind",
    },
    {
      name: "Artandance",
      description:
        "Artandance is a comprehensive software solution designed to streamline attendance management. For students, Artandance offers an intuitive platform to track and manage attendance across multiple classes by integrating with their timetable.For professors, Artandance simplifies the process of posting and managing attendance. The software provides an efficient interface to record and update attendance in educational institutions.",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "React JS",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "pink-text-gradient",
        },
      ],
      image: 'src/assets/Artendance.png',
      source_code_link: "https://github.com/nikhilagastya/artendance-frontend",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };