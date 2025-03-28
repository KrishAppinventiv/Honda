import { ImageSourcePropType } from "react-native";
import { Images } from "../assets";


    export const specifications = [
    {
      id: '1',
      feature: 'Air Cleaner',
      value: 'Dual type',
    },
    {
      id: '2',
      feature: 'Bore X Stroke (mm)',
      value: '88 x 64',
    },
    {
      id: '3',
      feature: 'Compression ratio',
      value: '8.2:1',
    },
    {
      id: '4',
      feature: 'Displacement (cm3)',
      value: '389',
    },
    {
      id: '5',
      feature: 'Fuel Tank Capacity (L)',
      value: '19.2',
    },
    {
      id: '6',
      feature: 'Fuel Type',
      value: 'Unleaded gasoline',
    },
  ];

  
  export const NewArrivalsData = [
    {
      id: '1',
      number: 'EU70is',
      title: 'Generators',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '2',
      number: 'HRJ196',
      title: 'Lawn Mowers',
      price: '₹ 68,000.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '3',
      number: 'WB40XD',
      title: 'Water Pumps',
      price: '₹ 36,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '4',
      number: 'EU70is',
      title: 'Generators',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '5',
      number: 'HRJ196',
      title: 'Lawn Mowers',
      price: '₹ 68,000.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '6',
      number: 'WB40XD',
      title: 'Water Pumps',
      price: '₹ 36,500.00',
      image: require('../assets/images/battery.png'),
    },
  ];
  
  export const BestSellingProducts = [
    {
      id: '1',
      number: 'F300',
      title: 'Tillers',
      price: '₹ 58,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '2',
      number: 'BF200',
      title: 'Outboard Motors',
      price: '₹ --',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '3',
      number: 'EU70is',
      title: 'Tillers',
      price: '₹ 88,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '4',
      number: 'F300',
      title: 'Tillers',
      price: '₹ 58,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '5',
      number: 'BF200',
      title: 'Outboard Motors',
      price: '₹ --',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '6',
      number: 'EU70is',
      title: 'Tillers',
      price: '₹ 88,500.00',
      image: require('../assets/images/battery.png'),
    },
  ];
  
  export const buttonData = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Inverter' },
    { id: 3, title: 'Silent Series' },
    { id: 4, title: 'Handy Series' },
  ];

  export const newArrivals = [
    {
      id: '1',
      number: 'EU70is',
      price: '₹ 2,65,000.00',
      image: Images.tutorial1,
      title: 'Generators',
    },

    {
      id: '2',
      number: 'HRJ196',
      price: '₹ 68,000.00',
      image: Images.tutorial3,
      title: 'Lawn Mowers',
    },
    {
      id: '3',
      number: 'WB40XD',
      price: '₹ 36,500.00',
      image: Images.WB,
      title: 'Water Pumps',
    },
    {
        id: '4',
        number: 'EU70is',
        price: '₹ 2,65,000.00',
        image: Images.tutorial1,
        title: 'Generators',
      },
      {
        id: '5',
        number: 'HRJ196',
        price: '₹ 68,000.00',
        image: Images.tutorial3,
        title: 'Lawn Mowers',
      },
      {
        id: '6',
        number: 'WB40XD',
        price: '₹ 36,500.00',
        image: Images.WB,
        title: 'Water Pumps',
      },
  ];


  export const categoriesData = [
    {id: '1', label: 'Battery Operated Hand Tools'},
    {id: '2', label: 'Generators'},
    {id: '3', label: 'Tillers'},
    {id: '4', label: 'Brush Cutters'},
    {id: '5', label: 'Water Pumps'},
    {id: '6', label: 'Lawn Mowers'},
    {id: '7', label: 'General Purpose Engines'},
    {id: '8', label: 'Outdoor Engines'},
  ];
  
  export const typesData = [
    {id: '1', label: 'Honda'},
    {id: '2', label: 'HI+'},
    {id: '3', label: 'HI Value +'},
  ];

  export const notificationsData: Record<string, { header: string; description: string, image?: ImageSourcePropType }[]> = {
    '2025-03-11': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
    ],
    '2025-03-10': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn }
    ],
    '2025-03-12': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
    ]
};

export const trainingButtonData = [
  {id: 1, title: 'Sales Talk'},
  {id: 2, title: 'DIY Videos'},
  {id: 3, title: 'Service Manuals'},
  {id: 4, title: 'Parts Catalog'},
];

export const HIPlus = [
  {
    id: '1',
    title: 'Agriculture Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=ULFliexcxso&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '2',
    title: 'Light Construction Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '3',
    title: 'Other Categories',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '4',
    title: 'Agriculture Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '5',
    title: 'Light Construction Machinery',
    image: Images.dummyYouTube,
     type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '6',
    title: 'Other Categories',
    image: Images.dummyYouTube,
     type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
];

export const Honda = [
  {
    id: '1',
    title: 'Battery operated Hand Tools',
    image: Images.dummyFile,
    type: 'file',
    link: ''
  },
  {
    id: '2',
    title: 'Generators',
    image: Images.dummyFile,
    type: 'file',
     link: ''
  },
  {
    id: '3',
    title: 'Tilers',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '4',
    title: 'Battery operated Hand Tools',
    image: Images.dummyFile,
    type: 'file',
    link: ''
  },
  {
    id: '5',
    title: 'Generators',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '6',
    title: 'Tilers',
    image: Images.dummyFile,
    type: 'file',
    link: ''
  },
];

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const retailers = [
  {
    id: '1',
    name: 'Jenny Retailers',
    phone: '+91-9809000001',
    status: 'Activated',
    date: '12/22/2025'
  },
  {
    id: '2',
    name: 'Jenny Retailers 2',
    phone: '+91-9809000001',
    status: 'De-activated',
    date: '12/12/2025'
  },
  {
    id: '3',
    name: 'Jenny Retailers 3',
    phone: '+91-9809000001',
    status: 'Activated',
    date: '12/02/2025'
  },
  {
    id: '4',
    name: 'Jenny Retailers 4',
    phone: '+91-9809000001',
    status: 'Activated',
    date: '12/20/2025'
  },
];