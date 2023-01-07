// import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Zeeshan Nasir',
  title: "Hi, I'm",
  role: 'MERN Developer',
  info: 'I transforms the UI designs into high-quality code and develop responsive, optimized and efficient websites',
  description: [
    "I'm Zeeshan Nasir, a detail-oriented and creative full-stack developer who worked well in a team or independently to applications primarliy developed using MERN. I like to create or transform the UI's or wireframes into functional & responsive site as well as built scalable web applications",
    'Seeking a position in a firm where i can utilize my knowledge and skills, that not only makes contribution to the firm but also lead to the enhancement of my current skillset and to get better exposure to the field.',
  ],
  profileImg: 'https://avatars.githubusercontent.com/u/57254223?v=4',
};

export const openSource = {
  githubUserName: 'zeeshannasir16',
};

export const contact = {
  email: 'm.zeeshannasir5@gmail.com',
};

export const socialLinks = {
  github: 'https://github.com/zeeshannasir16',
  linkedin: 'https://www.linkedin.com/in/zeeshannasir16',
  resume:
    'https://drive.google.com/file/d/19faJSfAbsidlZPkfNFi7LBc5aq4aTXkl/view?usp=share_link',
};

export const skillSet = [
  {
    skillName: 'HTML5',
    fontAwesomeClassname: 'vscode-icons:file-type-html',
  },
  {
    skillName: 'CSS3',
    fontAwesomeClassname: 'vscode-icons:file-type-css',
  },
  {
    skillName: 'JavaScript',
    fontAwesomeClassname: 'logos:javascript',
  },
  {
    skillName: 'Reactjs',
    fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
  },

  {
    skillName: 'Material UI',
    fontAwesomeClassname: 'simple-icons:mui',
  },

  {
    skillName: 'Firebase',
    fontAwesomeClassname: 'logos:firebase',
  },
  {
    skillName: 'Git',
    fontAwesomeClassname: 'logos:git-icon',
  },
  {
    skillName: 'Redux Toolkit',
    fontAwesomeClassname: 'logos:redux',
  },
  // {
  //   skillName: 'Next JS',
  //   fontAwesomeClassname: 'logos:nextjs-icon',
  // },
  // {
  //   skillName: 'Nodejs',
  //   fontAwesomeClassname: 'logos:nodejs-icon',
  // },
];

export const experience = [
  {
    role: 'Front-end Developer',
    company: 'Fiverr',
    // companylogo: '/img/icons/common/google.svg',
    date: 'Jul 2021 – Present',
    descBullets: [
      // 'Developing new user-features using React.js',
      'Writing application interface codes using JavaScript following react.js workflows',
      'Developing and implementing highly-responsive user interface components using React concepts as well as translating designs to interactive, pixel perfect and responsive sites',

      // 'Worked on serveral projects as front-end developer.',
      // "Developed UI's of various projects from the mockups or the UI design file provided alongwith fetching data through api and managing it in frontend codebase.",
    ],
  },
  {
    role: 'Software Developer',
    company: 'InterwebBytes ',
    // companylogo: '/img/icons/common/github.svg',
    date: 'Sep 2020 – Feb 2021',
    descBullets: [
      'Writing clean, functional code on the front- and back-end',
      'Testing and fixing bugs or other coding issues',
      'Troubleshoot, debug and upgrade an application',
    ],
  },
];

export const projects = {
  collaboration: [
    {
      projectType: 'TOUR & TRAVELLING',
      name: 'GOODFLY TRAVELS',
      desc: 'A travel & tour website that makes your next trip the best it can be.  Travel packages are designed to give travellers the experience of a lifetime, every time.',
      link: 'https://example.com',
      techList: [
        'React JS',
        'Node JS',
        'Material-UI',
        'Context API',
        'Axios',
        'React Hook Form',
      ],
      status: 'completed',
      logo: 'https://i.ibb.co/gWbT5x5/white-Logo.png',
      extras: {
        color: '#46B9F6',
        screenshot: 'https://i.ibb.co/98gcPx3/goodfly.png',
      },
    },
    {
      projectType: 'Health & Wellness',
      name: 'Royal Thai Spa',
      desc: 'A multi-vendor site that offers wide range of spa related products and services of various vendors.',
      link: 'https://example.com',
      techList: [
        'React JS',
        'Node JS',
        'Material-UI',
        'Redux Toolkit',
        'Formik',
        'Yup',
        'Stripe',
      ],
      logo: 'https://i.ibb.co/xmh2hkf/spaNew.png',
      extras: {
        color: '#ff679b',
        screenshot: 'https://i.ibb.co/qNMnrpw/royalSpa.png',
        status: 'In Development',
      },
    },
    {
      projectType: 'Auctions',
      name: 'LotPot Auctions',
      desc: 'An auction marketplace where you can propose the buying and selling of any item or experience you want that you cannot get normally.',
      link: 'https://example.com',
      techList: ['React JS', 'Node JS', 'Material-UI', 'Axios', 'Stripe'],
      logo: 'https://i.ibb.co/8xsktjz/lotpot-New.png',
      extras: {
        color: '#7c7c7c',
        screenshot: 'https://i.ibb.co/dgVYccZ/screely-1650768678170.png',
      },
    },
  ],
  personal: [
    {
      name: 'box Cloud Storage - Clone',
      desc: 'Simple cloud storage clone built using React JS and Firebase.',
      repoLink: 'https://github.com/ZeeshanNasir16/Cloud-Storage',
      techList: ['React JS', 'Firebase', 'Material-UI', 'Axios'],
    },
    {
      name: 'Ecommerce App',
      desc: "Basic ecommerce application using which the user can manage the items in a cart and can purchase an item. The Commerce.js provides custom cart and checkout experiences with the integration of various third-party API's. The internal state of application is managed using react-redux.",
      repoLink: 'https://github.com/ZeeshanNasir16/Laptop-Store',
      techList: [
        'React JS',
        'Commerce.js API',
        'Material-UI',
        'Redux',
        'Stripe API',
      ],
    },
    {
      name: 'React Colors App',
      desc: 'A clone of sites like Flat UI Colors or Material UI colors.',
      repoLink: 'https://github.com/ZeeshanNasir16/React-Color-Project',
      techList: ['React JS', 'Material-UI'],
    },
  ],
};
