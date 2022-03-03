export default {
  personal: {
    firstName: "Olga",
    lastName: "Plaga",
    photo: "op.jpg",
    title: "Front-End Developer",
  },
  contact: {
    email: "olga.plaga@gmail.com",
    phone: "+48 792 808 932",
    address: {
      showAddress: false,
      street: "Filipowska 5",
      city: "Warszawa",
      postCode: "16-423",
      state: "Podlasie",
      country: "Polska",
    },
  },
  interests: [
    ["UI & UX Design"],
    ["Human mind"],
    ["Home-grown flowers"],
    ["Fauna, Flora"],
    ["Handicrafts", "Rug weaving"],
    ["Yoga"],
  ],
  rodo: "",
  related: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/olga-plaga-36914714a/",
    },
    {
      name: "GitHub",
      url: "https://github.com/mwnmoa",
    },

    {
      name: "Codewars",
      url: "https://www.codewars.com/users/mwnmoa",
    },
    {
      name: "Codecademy",
      url: "https://www.codecademy.com/profiles/mwnmoa",
    },
  ],

  description:
    "Self-taught front-end developer seeking the possibility of further expanding skills in a larger team environment.",
  experience: [
    {
      company: "Hix on Rails",
      link: "https://hixonrails.com/",
      positions: [
        {
          title: "Front-End Developer",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2022-01-01",
            end: "now",
          },
          tasks: [
            "Building a web app with React and Next.js",
            "Creating clear interface with simple, intuitive interactions",
            "Active debugging and user interface improving",
            "Creating scss styles for markdown text imported from CMS",
            "Writing unit and integration tests",
            "Working with back-end development team",
          ],
        },
      ],
    },

    {
      company: "FPP-Enviro",
      link: "https://klimatfppenviro.pl/",
      positions: [
        {
          title: "Environmental Project Specialist",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2020-08-01",
            end: "2021-06-01",
          },
          tasks: [
            "conducting projects in the field of nature inventory",
            "processing, analysis, and reporting of data from nature inventories",
            "assessing the investment's impact on the biotic and abiotic environment",
            "preparing information sheets and reports on the environmental impact of industrial and  transport investments",
            "performing spatial analyzes and cartographic visualizations using ArcGIS software.",
            "teamwork organization",
          ],
        },
        {
          title: "Coordinator's Assistant in the EIA team",
          topParagraph: "",
          bottomParagraph: "",
          years: {
            start: "2019-10-01",
            end: "2020-08-01",
          },
          tasks: [
            "support in creating environmental studies for investments at all stages of project implementation.",
          ],
        },
      ],
    },
  ],
  technologies: [
    ["JavaScript", "React"],
    ["HTML", "CSS", "SCSS"],
    ["PostgreSQL"],
    ["Git"],
    ["ArcGIS", "QGIS"],
  ],

  education: [
    {
      school: "Warsaw University of Life Sciences",
      faculty: "Forestry",
      degrees: [
        {
          degree: "Master's degree",
          specialization: "Geoinformation technologies",
          years: {
            start: "2019-10-01",
            end: "2020-06-20",
          },
        },
        {
          degree: "Engineer's degree",
          specialization: "Geoinformation technologies",
          years: {
            start: "2015-10-01",
            end: "2019-06-20",
          },
        },
      ],
    },
    {
      school: "University of Warsaw",
      faculty: "Psychology",
      degrees: [
        {
          degree: "Master's degree",
          specialization: "Psychotherapy",
          years: {
            start: "2014-10-01",
            end: "2019-06-20",
          },
        },
      ],
    },
  ],
}
