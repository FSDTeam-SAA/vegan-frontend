interface City {
  id: number;
  label: string;
  value: string;
}

interface State {
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
      },
      {
        id: 2,
        label: "British Colombia",
        value: "bcolombia",
      },
      {
        id: 3,
        label: "Quebec",
        value: "quebec",
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
      },
      {
        id: 2,
        label: "Germany",
        value: "germany",
      },
      {
        id: 3,
        label: "Netherlands",
        value: "netherlands",
      },
      {
        id: 4,
        label: "Denmark",
        value: "denmark",
      },
      {
        id: 5,
        label: "Sweden",
        value: "sweden",
      },
      {
        id: 6,
        label: "Scotland",
        value: "scotland",
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
      },
      {
        id: 2,
        label: "New Zealand",
        value: "newzealand",
      },
    ],
  },
] as Country[];
