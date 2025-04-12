interface City {
  id: number;
  label: string;
  value: string;
}

export interface State {
  id: number;
  label: string;
  value: string;
  cites?: City[];
}

export type Country = {
  id: number;
  label: string;
  value: string;
  states?: State[];
};

export const countries = [
  {
    id: 1,
    label: "United States",
    value: "usa",
    states: [
      {
        id: 1,
        label: "New York",
        value: "ny",
        cites: [
          {
            id: 1,
            label: "New York City",
            value: "nyc",
          },
        ],
      },
      {
        id: 2,
        label: "California",
        value: "california",
        cites: [
          {
            id: 1,
            label: "Los Angeles",
            value: "la",
          },
          {
            id: 2,
            label: "San Francisco",
            value: "sfrancisco",
          },
        ],
      },
      {
        id: 3,
        label: "Texas",
        value: "texas",
        cites: [
          {
            id: 1,
            label: "Austin",
            value: "austin",
          },
        ],
      },
      {
        id: 4,
        label: "Florida",
        value: "florida",
        cites: [
          {
            id: 1,
            label: "Miami",
            value: "miami",
          },
        ],
      },
      {
        id: 5,
        label: "Oregon",
        value: "oregon",
        cites: [
          {
            id: 1,
            label: "Portland",
            value: "portland",
          },
        ],
      },
      {
        id: 6,
        label: "Washington State",
        value: "washington",
        cites: [
          {
            id: 1,
            label: "Seattle",
            value: "seattle",
          },
        ],
      },
      {
        id: 7,
        label: "Massachusetts",
        value: "massachusetts",
        cites: [
          {
            id: 1,
            label: "Boston",
            value: "boston",
          },
        ],
      },
      {
        id: 8,
        label: "Illinois",
        value: "illinois",
        cites: [
          {
            id: 1,
            label: "Chicago",
            value: "chicago",
          },
        ],
      },
      {
        id: 10,
        label: "Colorado",
        value: "colorado",
        cites: [
          {
            id: 1,
            label: "Denver",
            value: "denver",
          },
        ],
      },
      {
        id: 9,
        label: "Georgia",
        value: "georgia",
        cites: [
          {
            id: 1,
            label: "Atlanta",
            value: "atlanta",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Canada",
    value: "canada",
    states: [
      {
        id: 1,
        label: "Ontario",
        value: "ontario",
        cites: [
          {
            id: 1,
            label: "Toronto",
            value: "toronto",
          },
        ],
      },
      {
        id: 2,
        label: "British Colombia",
        value: "bcolombia",
        cites: [
          {
            id: 1,
            label: "Vancouver",
            value: "vancouver",
          },
        ],
      },
      {
        id: 3,
        label: "Quebec",
        value: "quebec",
        cites: [
          {
            id: 1,
            label: "Montreal",
            value: "montreal  ",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Mexico",
    value: "mexico",
    states: [
      {
        id: 1,
        label: "Ciudad de México",
        value: "cdmexico",
        cites: [
          {
            id: 1,
            label: "Mexico City",
            value: "mexicocity",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Northern Europe",
    value: "neurope",
    states: [
      {
        id: 1,
        label: "England",
        value: "england",
        cites: [
          {
            id: 1,
            label: "London",
            value: "london",
          },
          {
            id: 2,
            label: "Manchester",
            value: "manchester",
          },
        ],
      },
      {
        id: 2,
        label: "Germany",
        value: "germany",
        cites: [
          {
            id: 1,
            label: "Berlin",
            value: "berlin",
          },
        ],
      },
      {
        id: 3,
        label: "Netherlands",
        value: "netherlands",
        cites: [
          {
            id: 1,
            label: "Amsterdam",
            value: "amsterdam",
          },
        ],
      },
      {
        id: 4,
        label: "Denmark",
        value: "denmark",
        cites: [
          {
            id: 1,
            label: "Copenhagen",
            value: "copenhagen",
          },
        ],
      },
      {
        id: 5,
        label: "Sweden",
        value: "sweden",
        cites: [
          {
            id: 1,
            label: "Stockholm",
            value: "stockholm",
          },
        ],
      },
      {
        id: 6,
        label: "Scotland",
        value: "scotland",
        cites: [
          {
            id: 1,
            label: "Edinburgh",
            value: "edinburgh",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Australasia",
    value: "australasia",
    states: [
      {
        id: 1,
        label: "Australia",
        value: "australia",
        cites: [
          {
            id: 1,
            label: "Sydney",
            value: "sydney",
          },
          {
            id: 2,
            label: "Sydney",
            value: "auckland",
          },
        ],
      },
      {
        id: 2,
        label: "New Zealand",
        value: "newzealand",
        cites: [
          {
            id: 1,
            label: "Auckland",
            value: "auckland",
          },
        ],
      },
    ],
  },
] as Country[];
