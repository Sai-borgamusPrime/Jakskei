const teams = [
  {
    id: 1,
    slug: "plattelanders",
    name: "Plattelanders",
    color: "Green",
    logo: "/schoemans-mark.png",
    bannerLogo: "/schoemans-mark.png",
    schedule: [
      {
        id: 1,
        datetime: "13/05/2026 08:00 - 08:30",
        match: "Plattelanders VS Nathan's Hammers",
        dotColor: "green",
      },
      {
        id: 2,
        datetime: "13/05/2026 08:30 - 09:00",
        match: "Police A VS Plattelanders",
        dotColor: "yellow",
      },
    ],
  },
  {
    id: 2,
    slug: "nathans-hammers",
    name: "Nathans Hammers",
    color: "Yellow",
    logo: "/hammers-logo.png",
    bannerLogo: "/hammers-logo.png",
    schedule: [
      {
        id: 1,
        datetime: "13/05/2026 08:00 - 08:30",
        match: "Nathans Hammers VS Tech Wizards",
        dotColor: "yellow",
      },
      {
        id: 2,
        datetime: "13/05/2026 08:30 - 09:00",
        match: "Nathans Hammers VS Police A",
        dotColor: "yellow",
      },
      {
        id: 3,
        datetime: "13/05/2026 09:00 - 09:30",
        match: "Nathans Hammers VS SAJJR",
        dotColor: "yellow",
      },
    ],
  },
  {
    id: 3,
    slug: "sAJJR",
    name: "SAJJR",
    color: "Orange",
    logo: "/ombu-logo.jpg",
    bannerLogo: "/ombu-logo.jpg", 
    schedule: [
      {
        id: 1,
        datetime: "13/05/2026 09:00 - 09:30",
        match: "Nathans Hammers VS SAJJR",
        dotColor: "orange",
      },
    ],
  },
  {
    id: 4,
    slug: "police-a",
    name: "Police A",
    color: "Red",
    logo: "/kingprice-logo.png",
    bannerLogo: "/kingprice-logo.png",
    schedule: [
      {
        id: 1,
        datetime: "13/05/2026 08:30 - 09:00",
        match: "Nathans Hammers VS Police A",
        dotColor: "red",
      },
    ],
  },
  {
    id: 5,
    slug: "draft-warriors",
    name: "Draft Warriors",
    color: "Black",
    logo: "/windhoek-logo.jpg",
    bannerLogo: "/windhoek-logo.jpg",
    schedule: [
      {
        id: 1,
        datetime: "14/05/2026 10:00 - 10:30",
        match: "Draft Warriors VS Tech Wizards",
        dotColor: "black",
      },
    ],
  },
];

export default teams;