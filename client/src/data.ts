export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
    
    ],
  },

  {
    id: 3,
    title: "Department",
    listItems: [
      {
        id: 1,
        title: "Computer",
        url: "/Computer",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "AIML",
        url: "/Aiml",
        icon: "note.svg",
      },
      /*{
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },*/
    ],
  },

  {
    id: 2,
    title: "Analytics",
    listItems: [
      /*{
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },*/
      {
      id: 1,
        title: "Analytics Tools",
        url: "./Analyticstools",
        icon: "chart.svg",
      },
      {
        id: 2,
          title: "Prediction Tools",
          url: "/Predictiontools",
          icon: "chart.svg",
        },
        {
          id: 2,
            title: "Compare",
            url: "/Compare",
            icon: "chart.svg",
          }
      ],
  },
 
  {
    id: 5,
    title: "Result Data",
    listItems: [
      {
        id: 1,
        title: "Semester Result ",
        url: "/Presentyear",
        icon: "log.svg",
      },
      {
        id: 2,
        title: "Past Year",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const linechart = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Linechart",
  number: "",
  dataKey: "users",
  percentage: 82.70,
  chartData: [
    { name: "Sun", users: 900 },
    { name: "Mon", users: 800 },
    { name: "Tue", users: 700 },
    { name: "Wed", users: 800 },
    { name: "Thu", users: 900 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 350 },
  ],
};

export const barchart = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Barchart",
  number: "",
  dataKey: "users",
  //percentage: 82.70,
  chartData: [
    { name: "Sun", users: 900 },
    { name: "Mon", users: 800 },
    { name: "Tue", users: 700 },
    { name: "Wed", users: 800 },
    { name: "Thu", users: 900 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 350 },
  ],
};

export const areachart = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "AreaChart",
  number: "",
  dataKey: "users",
  //percentage: 82.70,
  chartData: [
    { name: "Sun", users: 900 },
    { name: "Mon", users: 800 },
    { name: "Tue", users: 700 },
    { name: "Wed", users: 800 },
    { name: "Thu", users: 250 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 350 },
  ],
};

export const piechartbox = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Piechart",
  number: "",
  dataKey: "users",
  //percentage: 82.70,
  chartData: [
    { name: "Sun", users: 900 },
    { name: "Mon", users: 800 },
    { name: "Tue", users: 700 },
    { name: "Wed", users: 800 },
    { name: "Thu", users: 900 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 350 },
  ],
};

export const radarchart = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "radarchart",
  number: "",
  dataKey: "users",
  //percentage: 82.70,
  chartData: [
    { name: "Sun", users: 900 },
    { name: "Mon", users: 800 },
    { name: "Tue", users: 700 },
    { name: "Wed", users: 800 },
    { name: "Thu", users: 900 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 350 },
  ],
};

export const treemap = {
  color: "#82ca9d",
  icon: "/treeIcon.svg",
  title: "Treemap Chart",
  number: "",
  dataKey: "size",
  chartData: [
    {
      name: "Frontend",
      children: [
        { name: "React", size: 4000 },
        { name: "Angular", size: 3500 },
        { name: "Vue.js", size: 3000 },
      ],
    },
    {
      name: "Backend",
      children: [
        { name: "Node.js", size: 4500 },
        { name: "Express", size: 3200 },
        { name: "Django", size: 2800 },
      ],
    },
    {
      name: "Databases",
      children: [
        { name: "MongoDB", size: 5000 },
        { name: "MySQL", size: 4500 },
        { name: "PostgreSQL", size: 4000 },
      ],
    },
    {
      name: "Cloud Services",
      children: [
        { name: "AWS", size: 6000 },
        { name: "Azure", size: 5500 },
        { name: "Google Cloud", size: 5000 },
      ],
    },
  ],
};

export const semesterwise = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Semester Wise",
  number: "",
  dataKey: "users",
  percentage: 82.70,
  chartData: [
    { name: "Sem 3", users: 80 },
    { name: "Sem 5", users: 20 },
    { name: "Sem 7", users: 90 },
  ],
};

export const subjectwise = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Subjectwise",
  number: "",
  dataKey: "users",
  percentage: 82.70,
  chartData: [
    { name: "M3", users: 20 },
    { name: "DS", users: 90 },
    { name: "Ml", users: 10 },
  ],
};

export const individual = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Individual",
  number: "",
  dataKey: "users",
  percentage: 82.70,
  chartData: [
    { name: "M3", users: 20 },
    { name: "DS", users: 90 },
    { name: "Ml", users: 10 },
  ],
};

export const overall = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Overall",
  number: "",
  dataKey: "users",
  percentage: 82.70,
  chartData: [
    { name: "M3", users: 20 },
    { name: "DS", users: 90 },
    { name: "Ml", users: 10 },
  ],
};

export const compsemester3rd = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "Swati Mungekar",
    email: "3rd Semester",
    amount: "09.87",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "Jigisha Mhapasekar",
    email: "3rd Semester",
    amount: "09.48",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "Mayuri Waghralkar",
    email: "3rd Semester",
    amount: "09.39",
  },
];

export const compsemester5th = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "Jesiya Fernandes",
    email: "5th Semester",
    amount: "10.00",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "Vasudev Narvekar",
    email: "5th Semester",
    amount: "9.87",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "Sahil Awate",
    email: "5th Semester",
    amount: "9.74",
  },
];

export const compsemester7th = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "Samidha Chougale",
    email: "7th Semester",
    amount: "9.59",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "Shankar Kalvankar",
    email: "7th Semester",
    amount: "9.45",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "Kunalika Nanche",
    email: "7th Semester",
    amount: "9.05",
  },
];

export const aimlsemester3 = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "Arpita Buchade",
    email: "3rd Semester",
    amount: "9.74",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "Harshwardhan Karanjekar",
    email: "3rd Semester",
    amount: "9.57",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "Danesh Parab",
    email: "3rd Semester",
    amount: "9.48",
  },
];

export const aimlsemester5 = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "MS. Snehal Parab",
    email: "5th Semester",
    amount: "9.86",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "MR. Aditya Kaloji",
    email: "5th Semester",
    amount: "9.59",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "MS. Vaibhavi Girkar",
    email: "5th Semester",
    amount: "9.45",
  },
];

export const aimlsemester7 = [
  {
    id: 1,
    img: "../public/noavatar.png",
    username: "Kajal Bagwe",
    email: "7th Semester",
    amount: "9.59",
  },
  {
    id: 2,
    img: "../public/noavatar.png",
    username: "Shruti Paradkar",
    email: "7th Semester",
    amount: "8.77",
  },
  {
    id: 3,
    img: "../public/noavatar.png",
    username: "Pranav Dabholkar",
    email: "7th Semester",
    amount: "8.64",
  },
];


export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "Computer",
  number: "7th Semester",
  dataKey: "users",
  percentage: 88.52,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Products",
  number: "238",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "AIML",
  number: "7th Semester",
  dataKey: "ratio",
  percentage: 100,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Computer Chart",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Aiml Chart",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
];

export const products = [
  {
    id: 1,
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    title: "Playstation 5 Digital Edition",
    color: "white",
    producer: "Sony",
    price: "$250.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 2,
    img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
    title: "Dell Laptop KR211822",
    color: "black",
    producer: "Dell",
    price: "$499.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 3,
    img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
    title: "Samsung TV 4K SmartTV",
    color: "gray",
    producer: "Samsung",
    price: "$999.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 4,
    img: "https://raylo.imgix.net/iphone-14-blue.png",
    title: "Apple Iphone 14 Pro Max",
    color: "white",
    producer: "Apple",
    price: "$799.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 5,
    img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
    title: "Philips Hue Play Gradient",
    color: "rainbow",
    producer: "Philips",
    price: "$39.99",
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
    title: "Logitech MX Master 3",
    color: "black",
    producer: "Logitech",
    price: "$59.49",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 7,
    img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
    title: "Rode Podcast Microphone",
    color: "gray",
    producer: "Rode",
    price: "$119.49",
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
    title: "Toshiba Split AC 2",
    color: "white",
    producer: "Toshiba",
    price: "$899.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
  {
    id: 9,
    img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
    title: "Sony Bravia KDL-47W805A",
    color: "black",
    producer: "Sony",
    price: "$970.49",
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
    title: "Acer Laptop 16 KL-4804",
    color: "black",
    producer: "Acer",
    price: "$599.99",
    createdAt: "01.02.2023",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Johndoe99",
    fullname: "John Doe",
    email: "johndoe@gmail.com",
    phone: "123 456 789",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
