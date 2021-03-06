export default {
  personal: {
    firstName: "Wiktor",
    lastName: "Plaga",
    photo: "profile.jpg",
    title: "Software Engineer",
  },
  contact: {
    email: "wscourge@gmail.com",
    phone: "+48 732 642 360",
    address: {
      showAddress: true,
      street: "Filipowska 5",
      city: "Warszawa",
      postCode: "16-423",
      state: "Podlasie",
      country: "Polska",
    },
  },
  interests: [
    ["UI & UX Design"],
    ["Economy"],
    ["Fantasy", "Sci-fi", "True Crime"],
    ["Calisthenics", "Rowing"],
    ["Table tennis", "Squash", "Badminton"],
  ],
  rodo: "",
  related: [
    {
      name: "GitHub",
      url: "https://github.com/wscourge",
    },
    {
      name: "GitLab",
      url: "https://gitlab.com/wscourge",
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/6439240/user3221",
    },
    {
      name: "Blog on Ruby on Rails configuration",
      url: "https://hixonrails.com/ruby-on-rails-tutorials",
    },
    {
      name: "Warsaw Ruby Users Group Talk",
      url: "https://www.youtube.com/watch?v=nOb_JGk8ojc",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/wiktor-plaga-7a353a106/",
    },
  ],

  description:
    "Software Engineer with demonstrated experience in both code development and maintenance. Possesses a strong ability to identify issues and offer creative solutions to complex problems, based on effective research, data analysis, and compelling communication. Eagers to learn new technologies, chooses best fit for the requirement.",
  experience: [
    {
      company: "Punkta",
      link: "https://punkta.pl",
      positions: [
        {
          title: "Software Engineer",
          topParagraph: "Software engineer responsible for all project",
          bottomParagraph: "Software engineer responsible for all project",
          years: {
            start: "2018-08-01",
            end: "2020-05-01",
          },
          tasks: [
            "Development and maintenance of the core company product.",
            "Working in SCRUM development team.",
            "Consulting on UI solutions for the best end users experience.",
            "Collaboration with data analysts and product owner.",
            "Writing unit and integration tests.",
            "Active code review participation.",
          ],
        },
      ],
    },
    {
      company: "MDBOOTSTRAP",
      link: "https://mdbootstrap.com/",
      positions: [
        {
          title: "Software Engineer",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2016-08-01",
            end: "2018-08-01",
          },
          tasks: [
            "Develop multiple company projects concepts, public and internal.",
            "Management of complex design for marketing automation tool.",
            "Creating clean interfaces with simple, intuitive interactions.",
            "Speed and scalability optimization.",
            "Leading decoupling front-end and back-end for a SaaS product.",
          ],
        },
      ],
    },

    {
      company: "Joompin",
      link: "https://joompin.pl/",
      positions: [
        {
          title: "Co-Founder",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2018-11-01",
            end: "2020-09-01",
          },
          tasks: [
            "Mobile application MVP development.",
            "Product planning and making architecture decisions.",
            "Collaboration with marketing and legal partners.",
            "Creating promotional website with blog",
          ],
        },
      ],
    },

    {
      company: "Hix on Rails",
      link: "https://hixonrails.com/",
      positions: [
        {
          title: "Co-Founder",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2019-10-01",
            end: "now",
          },
          tasks: [
            "Author of an idea for premium Ruby on Rails Application Template.",
            "Product planning and making architecture decisions.",
            "MVP and post MVP development.",
            "Collaboration with marketing and legal partners.",
            "Technical writing.",
            "Custom WordPress plugins development.",
          ],
        },
      ],
    },

    {
      company: "YND",
      link: "https://ynd.co/",
      positions: [
        {
          title: "Software Engineer",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2020-05-01",
            end: "2020-10-01",
          },
          tasks: [
            "Collaboration with UX/UI and QA teams.",
            "Development of online payments solution, including data (money) integrity insurance and fraud detection.",
            "Development of a back-end and highly interactive admin panel for iOS and Android applications in the gastronomy field.",
            "Active code review, SCRUM, and technical planning participation.",
            "Basic k8s orchestration on both GCP and AWS clouds.",
          ],
        },
      ],
    },

    {
      company: "Greenbits",
      link: "https://greenbits.com/",
      positions: [
        {
          title: "Software Engineer",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2020-10-01",
            end: "now",
          },
          tasks: [
            "Collaboration with UX/UI and QA teams.",
            "Development of back-end, front-end and PoS of the SaaS product.",
            "Only full-time member of the Customer Excellence team, supporting all engineering teams throughout the company.",
            "Vaste improvement of company's code quality.",
            "Introduction of code maintenance procedures.",
          ],
        },
      ],
    },
  ],
  technologies: [
    ["Ruby", "Ruby on Rails", "Sinatra"],
    ["Node", "Ember", "React", "jQuery"],
    ["React Native"],
    ["HTML", "CSS", "SCSS"],
    ["MariaDB", "MySQL", "Postgres"],
    ["Redis", "Mongo", "Firestore"],
    ["Git"],
    ["Docker", "Linux", "Nginx"],
    ["PHP", "Wordpress", "Oxygen"],
  ],

  education: [
    {
      school: "University of Warsaw",
      faculty: "Psychology",
      degrees: [
        {
          degree: "Master",
          specialization: "Psychoteraphy",
          years: {
            start: "2014-10-01",
            end: "2019-06-20",
          },
        },
      ],
    },
    {
      school: "University of Warsaw",
      faculty: "IT",
      degrees: [
        {
          degree: "Bachelor",
          specialization: "Databases",
          years: {
            start: "2014-10-01",
            end: "2016-06-20",
          },
        },
      ],
    },
    {
      school: "Warsaw University of Life Sciences",
      faculty: "Forestry",
      degrees: [
        {
          degree: "Master",
          specialization: "Geomatic",
          years: {
            start: "2018-10-01",
            end: "2020-06-20",
          },
        },
        {
          degree: "Engeenier",
          specialization: "Geomatic",
          years: {
            start: "2015-10-01",
            end: "2018-06-20",
          },
        },
      ],
    },
  ],
}
