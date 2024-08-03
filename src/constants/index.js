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
  python,
  pytorch,
  pandas,
  opencv,
  mysql,
  scikit,
  tensorflow,
  anvar,
  rasul,
  abu,
  carParkingImage,
  BoardPainterImage,
  facialEmotionImage,
  gameImage,
  handGestureImage,
  calcGestureImage,
  glanceDetectionImage,
  quizImage,
  naqdCompany,
  movieCompany,
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
    icon: naqdCompany,
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
    icon: movieCompany,
    iconBg: '#383E56',
    date: 'June 2024 - July 2024',
    points: [
      'Analyze Movies: Explore a diverse range of movies and their attributes.',
      'User Preferences: Understand user preferences through their ratings.',
      'Personalized Recommendations: Provide movie suggestions tailored to each user.',
      'Scalable: Add more data and users effortlessly to enhance recommendations.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "GNAI is a leading company in AI, machine learning, deep learning, and computer vision. Their innovative approach and  solutions are impressive. I've heard great things about their ability to deliver top-notch projects effectively. ",
    email: 'anvarbek@gmail.com',
    name: 'Anvar Narzullayev',
    designation: 'Engineer, CEO of MohirAI',
    company: 'MohirAI',
    image: anvar,
  },
  {
    testimonial:
      'GNAI stands out in the AI industry with its expertise in machine learning and computer vision. Their work is highly respected, and their commitment to innovation is evident. They are definitely a company to watch in the tech space.',
    email: 'aabuallaban@pm.me',
    name: 'Anas Abou Allaban',
    designation: 'CEO',
    company: 'Cambridge learning center',
    image: abu,
  },
  {
    testimonial:
      'GNAI pioneers industry standards and offers innovative solutions with significant impact across various sectors, making them a standout leader in tech, recognized for driving progress and transforming the future of technology.',
    email: 'Telegram: @deputat_kusherboyev',
    name: 'Rasul Kusherboyev',
    designation: 'Politic',
    company: 'Government',
    image: rasul,
  },
];

const projects = [
  {
    name: 'Quiz Game',
    description: 'A simple quiz platform where children can play from a distance using hand gestures.',
    tags: [
      {
        name: 'MediaPipe',
        color: 'blue-text-gradient',
      },
      {
        name: 'TensorFlow',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'pink-text-gradient',
      },
    ],
    image: quizImage,
    source_code_link: 'https://github.com/Next-Generation-of-AI/quiz',
    web_code_link: 'https://quiz-game.vercel.app',
  },
  {
    name: 'Facial Emotion Detection',
    description:
      "A tool to detect students' facial emotions during the class to analyze whether they are satisfied with the course or not.",
    tags: [
      {
        name: 'YoloV',
        color: 'blue-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'green-text-gradient',
      },
      {
        name: 'TensorFlow',
        color: 'pink-text-gradient',
      },
    ],
    image: facialEmotionImage, // Placeholder for the image variable
    source_code_link: 'https://github.com/Next-Generation-of-AI/face_emotion',
    web_code_link: 'https://github.com/Next-Generation-of-AI/face_emotion', // Placeholder for the live demo link
  },
  {
    name: '2048 Game',
    description:
      'A 2048 game that can be played from a distance using hand gestures. Combine tiles to reach the 2048 tile.',
    tags: [
      {
        name: 'PyGame',
        color: 'blue-text-gradient',
      },
      {
        name: 'MediaPipe',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'pink-text-gradient',
      },
    ],
    image: gameImage, // Placeholder for the image variable
    source_code_link: 'https://github.com/Next-Generation-of-AI/2058game',
    web_code_link: 'https://2048-game.vercel.app', // Placeholder for the live demo link
  },
  {
    name: 'Borad painter',
    description:
      'An interactive drawing application for children that allows them to create artwork using hand gestures.',
    tags: [
      {
        name: 'TensorFlow',
        color: 'blue-text-gradient',
      },
      {
        name: 'MediaPipe',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'pink-text-gradient',
      },
    ],
    image: BoardPainterImage, // Placeholder for the image variable
    source_code_link: 'https://github.com/Next-Generation-of-AI/Painter',
    web_code_link: 'https://github.com/Next-Generation-of-AI/Painter', // Placeholder for the live demo link
  },
  {
    name: 'Hand Gesture Presentation',
    description: 'Control presentations seamlessly using hand gestures for a more interactive and dynamic experience.',
    tags: [
      {
        name: 'HandTracking',
        color: 'blue-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'green-text-gradient',
      },
      {
        name: 'MediaPipe',
        color: 'pink-text-gradient',
      },
    ],
    image: handGestureImage, // Placeholder for the image variable
    source_code_link: 'https://github.com/Next-Generation-of-AI/Hand-Gesture-Controlled-Presentation-OpenCV-Python-',
    web_code_link: 'https://github.com/Next-Generation-of-AI/Hand-Gesture-Controlled-Presentation-OpenCV-Python-', // Placeholder for the live demo link
  },
  {
    name: 'Hand Gesture Controlled Calculator',
    description: 'A futuristic calculator operated effortlessly with hand gestures from a distance.',
    tags: [
      {
        name: 'PTQ5',
        color: 'blue-text-gradient',
      },
      {
        name: 'MediaPipe',
        color: 'green-text-gradient',
      },
      {
        name: 'OpenCV',
        color: 'pink-text-gradient',
      },
    ],
    image: calcGestureImage, // Placeholder for the image variable
    source_code_link: 'https://github.com/Next-Generation-of-AI/calculator',
    web_code_link: 'https://github.com/Next-Generation-of-AI/calculator', // Placeholder for the live demo link
  },
  {
    name: 'Glance Detection',
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
    image: glanceDetectionImage,
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
    image: carParkingImage,
    source_code_link: 'https://github.com/Gofurjon01/CarParkingProject',
    web_code_link: 'https://github.com/Gofurjon01/CarParkingProject',
  },
];

export { services, technologies, experiences, testimonials, projects };
