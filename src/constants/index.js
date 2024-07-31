import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  reactjs,
  git,
  figma,
  docker,
  inha,
  shopify,
  python,
  pytorch,
  pandas,
  opencv,
  mysql,
  scikit,
  tensorflow,
  ishop,
  professor,
  yuldashev,
  umidjon,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Learning',
    icon: web,
  },
  {
    title: 'Deep Learning',
    icon: mobile,
  },
  {
    title: 'Computer vision',
    icon: backend,
  },
  {
    title: 'NLP',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'python',
    icon: python,
  },
  {
    name: 'pandas',
    icon: pandas,
  },
  {
    name: 'tensorflow',
    icon: tensorflow,
  },
  {
    name: 'opencv',
    icon: opencv,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'scikit',
    icon: scikit,
  },
  {
    name: 'pytorch',
    icon: pytorch,
  },
];

const experiences = [
  {
    title: 'Computer Vision',
    company_name: 'Naqd Vision',
    icon: shopify,
    iconBg: '#383E56',
    date: 'April 2024 - June 2024',
    points: [
      'Leveraged Mediapipe, OpenCV, Yolov8, and TensorFlow-based U-net for real-time facial analysis.',
      'Used U-net to detect and crop faces from live camera feeds.',
      'Utilized Yolov8 to identify frontal faces and analyze pupils.',
      'Employed Mediapipe to track eye movement direction for accurate glance time detection.',
    ],
  },
  {
    title: 'Movie Recommender',
    company_name: 'GNAI',
    icon: inha,
    iconBg: '#E6DEDD',
    date: 'June 2024 - July 2024',
    points: [
      'Analyze Movies: Explore a diverse range of movies and their attributes.',
      'User Preferences: Understand user preferences through their ratings.',
      'Personalized Recommendations: Provide movie suggestions tailored to each user.',
      'Scalable: Add more data and users effortlessly to enhance recommendations.',
    ],
  },
  /*
  {
    title: 'Movie Recommender',
    company_name: 'GNAI',
    icon: inha,
    iconBg: '#E6DEDD',
    date: 'June 2024 - July 2024',
    points: [
      'Yolov8 Model: Detects buckets in shopping malls to identify potential robbery.',
      'Vertex AI Pipeline: Automates the project whenever the dataset is updated or changed.',
      'Real-Time Deployment: Ensures immediate responsiveness to changes with real-time object detection.',
    ],
  },
*/
];

const testimonials = [
  {
    testimonial:
      "GNAI is a leading company in AI, machine learning, deep learning, and computer vision. Their innovative approach and cutting-edge solutions are impressive. I've heard great things about their ability to deliver top-notch projects efficiently and effectively. ",
    email: 'yuldashev021201@gmail.com',
    name: 'Anvar Narzullayev',
    designation: 'Engineer, CEO of MohirAI',
    company: 'MohirAI',
    image: yuldashev,
  },
  {
    testimonial:
      'GNAI stands out in the AI industry with its expertise in machine learning and computer vision. Their work is highly respected, and their commitment to innovation is evident. They are definitely a company to watch in the tech space.',
    email: 'vjkakani@inha.ac.kr',
    name: "Jahongir Po'latov",
    designation: 'CEO',
    company: 'Cambridge learning center',
    image: professor,
  },
  {
    testimonial:
      "GNAI is a remarkable company driving advancements in AI, machine learning, and computer vision. Their pioneering work is setting new standards in the industry, and their innovative solutions have the potential to significantly impact various sectors. GNAI's commitment to excellence and their forward-thinking approach make them a standout leader in the tech community.",
    email: 'uziyatdinov@gmail.com',
    name: 'Rasul Kusherboyev',
    designation: 'Politic',
    company: 'Government',
    image: umidjon,
  },
];

const projects = [
  {
    name: 'Naqd Vision',
    description: 'An advertisement company to announce news, businesses with their views in banners outside .',
    tags: [
      {
        name: 'OpenCV',
        color: 'blue-text-gradient',
      },
      {
        name: 'Unet',
        color: 'green-text-gradient',
      },
      {
        name: 'YoloV8',
        color: 'pink-text-gradient',
      },
    ],
    image: ishop,
    source_code_link: 'https://github.com/BahodirML/GlanceTimeDetection',
    web_code_link: 'https://naqdvision.uz',
  },
  {
    name: 'Car parking',
    description: 'A model to detect spots in car parking places whether they are empty or occupied',
    tags: [
      {
        name: 'Pickle',
        color: 'blue-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'green-text-gradient',
      },
      {
        name: 'Pickle',
        color: 'pink-text-gradient',
      },
    ],
    image: ishop,
    source_code_link: 'https://github.com/Gofurjon01/CarParkingProject',
    web_code_link: 'https://github.com/Gofurjon01/CarParkingProject',
  },
];

export { services, technologies, experiences, testimonials, projects };
