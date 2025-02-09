
const researchData = {
    tabs: [
      "Research Areas",
      "International Journal Papers",
      "International Conference Papers",
      "Book Chapters",
      "Books",
    ],
    content: {
      "Research Areas": [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Science",
        "Computer Vision",
        "Distributed Systems",
        "Quantum Computing",
      ],
      "International Journal Papers": [
        {
          title: "Advancements in Neural Networks for Image Recognition",
          authors: "John Doe, Jane Smith",
          journal: "Journal of AI Research",
          year: 2023,
        },
        {
          title: "A Survey of Reinforcement Learning Algorithms",
          authors: "Alice Johnson, Bob Brown",
          journal: "Machine Learning Quarterly",
          year: 2022,
        },
        {
          title: "Deep Learning for Natural Language Processing",
          authors: "Charlie Davis, Emma Wilson",
          journal: "Computational Linguistics",
          year: 2021,
        },
      ],
      "International Conference Papers": [
        {
          title: "Real-Time Object Detection Using YOLO",
          authors: "Michael Green, Sarah Lee",
          conference: "CVPR 2023",
          year: 2023,
        },
        {
          title: "Efficient Algorithms for Large-Scale Data Processing",
          authors: "David Clark, Laura White",
          conference: "ICML 2022",
          year: 2022,
        },
        {
          title: "Blockchain Technology for Secure Data Sharing",
          authors: "Kevin Harris, Olivia Martin",
          conference: "IEEE Blockchain 2021",
          year: 2021,
        },
      ],
      "Book Chapters": [
        {
          title: "Introduction to Machine Learning",
          authors: "Robert Taylor, Emily Adams",
          book: "Handbook of AI",
          year: 2023,
        },
        {
          title: "Advanced Topics in Computer Vision",
          authors: "Daniel Moore, Sophia Garcia",
          book: "Computer Vision Essentials",
          year: 2022,
        },
      ],
      "Books": [
        {
          title: "Artificial Intelligence: A Modern Approach",
          authors: "Stuart Russell, Peter Norvig",
          publisher: "Pearson",
          year: 2020,
        },
        {
          title: "Deep Learning",
          authors: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
          publisher: "MIT Press",
          year: 2016,
        },
      ],
    },
    filterOptions: {
      "Research Areas": ["All", "Artificial Intelligence", "Machine Learning", "Data Science", "Computer Vision", "Distributed Systems", "Quantum Computing"],
      "International Journal Papers": ["All", "2023", "2022", "2021"],
      "International Conference Papers": ["All", "CVPR", "ICML", "IEEE"],
      "Book Chapters": ["All", "2023", "2022"],
      "Books": ["All", "2020", "2016"],
    },
  };
  
  export default researchData;