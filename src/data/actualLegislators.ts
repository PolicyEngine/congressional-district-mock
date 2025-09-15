// Auto-generated from legislators-current.csv
// Data source: https://github.com/unitedstates/congress-legislators

export interface Representative {
  name: string;
  lastName: string;
  firstName: string;
  party: 'D' | 'R' | 'I';
  district: number;
  state: string;
}

export interface Senator {
  name: string;
  lastName: string;
  firstName: string;
  party: 'D' | 'R' | 'I';
  state: string;
}

export const ACTUAL_LEGISLATORS: Record<string, {
  representatives: Representative[];
  senators: Senator[];
}> = {
  "WA": {
    "representatives": [
      {
        "name": "Suzan K. DelBene",
        "lastName": "DelBene",
        "firstName": "Suzan",
        "party": "D",
        "district": 1,
        "state": "WA"
      },
      {
        "name": "Rick Larsen",
        "lastName": "Larsen",
        "firstName": "Rick",
        "party": "D",
        "district": 2,
        "state": "WA"
      },
      {
        "name": "Marie Gluesenkamp Perez",
        "lastName": "Gluesenkamp Perez",
        "firstName": "Marie",
        "party": "D",
        "district": 3,
        "state": "WA"
      },
      {
        "name": "Dan Newhouse",
        "lastName": "Newhouse",
        "firstName": "Dan",
        "party": "R",
        "district": 4,
        "state": "WA"
      },
      {
        "name": "Michael Baumgartner",
        "lastName": "Baumgartner",
        "firstName": "Michael",
        "party": "R",
        "district": 5,
        "state": "WA"
      },
      {
        "name": "Emily Randall",
        "lastName": "Randall",
        "firstName": "Emily",
        "party": "D",
        "district": 6,
        "state": "WA"
      },
      {
        "name": "Pramila Jayapal",
        "lastName": "Jayapal",
        "firstName": "Pramila",
        "party": "D",
        "district": 7,
        "state": "WA"
      },
      {
        "name": "Kim Schrier",
        "lastName": "Schrier",
        "firstName": "Kim",
        "party": "D",
        "district": 8,
        "state": "WA"
      },
      {
        "name": "Adam Smith",
        "lastName": "Smith",
        "firstName": "Adam",
        "party": "D",
        "district": 9,
        "state": "WA"
      },
      {
        "name": "Marilyn Strickland",
        "lastName": "Strickland",
        "firstName": "Marilyn",
        "party": "D",
        "district": 10,
        "state": "WA"
      }
    ],
    "senators": [
      {
        "name": "Maria Cantwell",
        "lastName": "Cantwell",
        "firstName": "Maria",
        "party": "D",
        "state": "WA"
      },
      {
        "name": "Patty Murray",
        "lastName": "Murray",
        "firstName": "Patty",
        "party": "D",
        "state": "WA"
      }
    ]
  },
  "MN": {
    "representatives": [
      {
        "name": "Brad Finstad",
        "lastName": "Finstad",
        "firstName": "Brad",
        "party": "R",
        "district": 1,
        "state": "MN"
      },
      {
        "name": "Angie Craig",
        "lastName": "Craig",
        "firstName": "Angie",
        "party": "D",
        "district": 2,
        "state": "MN"
      },
      {
        "name": "Kelly Morrison",
        "lastName": "Morrison",
        "firstName": "Kelly",
        "party": "D",
        "district": 3,
        "state": "MN"
      },
      {
        "name": "Betty McCollum",
        "lastName": "McCollum",
        "firstName": "Betty",
        "party": "D",
        "district": 4,
        "state": "MN"
      },
      {
        "name": "Ilhan Omar",
        "lastName": "Omar",
        "firstName": "Ilhan",
        "party": "D",
        "district": 5,
        "state": "MN"
      },
      {
        "name": "Tom Emmer",
        "lastName": "Emmer",
        "firstName": "Tom",
        "party": "R",
        "district": 6,
        "state": "MN"
      },
      {
        "name": "Michelle Fischbach",
        "lastName": "Fischbach",
        "firstName": "Michelle",
        "party": "R",
        "district": 7,
        "state": "MN"
      },
      {
        "name": "Pete Stauber",
        "lastName": "Stauber",
        "firstName": "Pete",
        "party": "R",
        "district": 8,
        "state": "MN"
      }
    ],
    "senators": [
      {
        "name": "Amy Klobuchar",
        "lastName": "Klobuchar",
        "firstName": "Amy",
        "party": "D",
        "state": "MN"
      },
      {
        "name": "Tina Smith",
        "lastName": "Smith",
        "firstName": "Tina",
        "party": "D",
        "state": "MN"
      }
    ]
  },
  "VT": {
    "representatives": [
      {
        "name": "Becca Balint",
        "lastName": "Balint",
        "firstName": "Becca",
        "party": "D",
        "district": 0,
        "state": "VT"
      }
    ],
    "senators": [
      {
        "name": "Bernard Sanders",
        "lastName": "Sanders",
        "firstName": "Bernard",
        "party": "I",
        "state": "VT"
      },
      {
        "name": "Peter Welch",
        "lastName": "Welch",
        "firstName": "Peter",
        "party": "D",
        "state": "VT"
      }
    ]
  },
  "RI": {
    "representatives": [
      {
        "name": "Gabe Amo",
        "lastName": "Amo",
        "firstName": "Gabe",
        "party": "D",
        "district": 1,
        "state": "RI"
      },
      {
        "name": "Seth Magaziner",
        "lastName": "Magaziner",
        "firstName": "Seth",
        "party": "D",
        "district": 2,
        "state": "RI"
      }
    ],
    "senators": [
      {
        "name": "Sheldon Whitehouse",
        "lastName": "Whitehouse",
        "firstName": "Sheldon",
        "party": "D",
        "state": "RI"
      },
      {
        "name": "Jack Reed",
        "lastName": "Reed",
        "firstName": "John",
        "party": "D",
        "state": "RI"
      }
    ]
  },
  "WY": {
    "representatives": [
      {
        "name": "Harriet M. Hageman",
        "lastName": "Hageman",
        "firstName": "Harriet",
        "party": "R",
        "district": 0,
        "state": "WY"
      }
    ],
    "senators": [
      {
        "name": "John Barrasso",
        "lastName": "Barrasso",
        "firstName": "John",
        "party": "R",
        "state": "WY"
      },
      {
        "name": "Cynthia M. Lummis",
        "lastName": "Lummis",
        "firstName": "Cynthia",
        "party": "R",
        "state": "WY"
      }
    ]
  },
  "MS": {
    "representatives": [
      {
        "name": "Trent Kelly",
        "lastName": "Kelly",
        "firstName": "Trent",
        "party": "R",
        "district": 1,
        "state": "MS"
      },
      {
        "name": "Bennie G. Thompson",
        "lastName": "Thompson",
        "firstName": "Bennie",
        "party": "D",
        "district": 2,
        "state": "MS"
      },
      {
        "name": "Michael Guest",
        "lastName": "Guest",
        "firstName": "Michael",
        "party": "R",
        "district": 3,
        "state": "MS"
      },
      {
        "name": "Mike Ezell",
        "lastName": "Ezell",
        "firstName": "Mike",
        "party": "R",
        "district": 4,
        "state": "MS"
      }
    ],
    "senators": [
      {
        "name": "Roger F. Wicker",
        "lastName": "Wicker",
        "firstName": "Roger",
        "party": "R",
        "state": "MS"
      },
      {
        "name": "Cindy Hyde-Smith",
        "lastName": "Hyde-Smith",
        "firstName": "Cindy",
        "party": "R",
        "state": "MS"
      }
    ]
  },
  "ME": {
    "representatives": [
      {
        "name": "Chellie Pingree",
        "lastName": "Pingree",
        "firstName": "Chellie",
        "party": "D",
        "district": 1,
        "state": "ME"
      },
      {
        "name": "Jared F. Golden",
        "lastName": "Golden",
        "firstName": "Jared",
        "party": "D",
        "district": 2,
        "state": "ME"
      }
    ],
    "senators": [
      {
        "name": "Susan M. Collins",
        "lastName": "Collins",
        "firstName": "Susan",
        "party": "R",
        "state": "ME"
      },
      {
        "name": "Angus S. King, Jr.",
        "lastName": "King",
        "firstName": "Angus",
        "party": "I",
        "state": "ME"
      }
    ]
  },
  "TX": {
    "representatives": [
      {
        "name": "Nathaniel Moran",
        "lastName": "Moran",
        "firstName": "Nathaniel",
        "party": "R",
        "district": 1,
        "state": "TX"
      },
      {
        "name": "Dan Crenshaw",
        "lastName": "Crenshaw",
        "firstName": "Dan",
        "party": "R",
        "district": 2,
        "state": "TX"
      },
      {
        "name": "Keith Self",
        "lastName": "Self",
        "firstName": "Keith",
        "party": "R",
        "district": 3,
        "state": "TX"
      },
      {
        "name": "Pat Fallon",
        "lastName": "Fallon",
        "firstName": "Patrick",
        "party": "R",
        "district": 4,
        "state": "TX"
      },
      {
        "name": "Lance Gooden",
        "lastName": "Gooden",
        "firstName": "Lance",
        "party": "R",
        "district": 5,
        "state": "TX"
      },
      {
        "name": "Jake Ellzey",
        "lastName": "Ellzey",
        "firstName": "Jake",
        "party": "R",
        "district": 6,
        "state": "TX"
      },
      {
        "name": "Lizzie Fletcher",
        "lastName": "Fletcher",
        "firstName": "Lizzie",
        "party": "D",
        "district": 7,
        "state": "TX"
      },
      {
        "name": "Morgan Luttrell",
        "lastName": "Luttrell",
        "firstName": "Morgan",
        "party": "R",
        "district": 8,
        "state": "TX"
      },
      {
        "name": "Al Green",
        "lastName": "Green",
        "firstName": "Al",
        "party": "D",
        "district": 9,
        "state": "TX"
      },
      {
        "name": "Michael T. McCaul",
        "lastName": "McCaul",
        "firstName": "Michael",
        "party": "R",
        "district": 10,
        "state": "TX"
      },
      {
        "name": "August Pfluger",
        "lastName": "Pfluger",
        "firstName": "August",
        "party": "R",
        "district": 11,
        "state": "TX"
      },
      {
        "name": "Craig A. Goldman",
        "lastName": "Goldman",
        "firstName": "Craig",
        "party": "R",
        "district": 12,
        "state": "TX"
      },
      {
        "name": "Ronny Jackson",
        "lastName": "Jackson",
        "firstName": "Ronny",
        "party": "R",
        "district": 13,
        "state": "TX"
      },
      {
        "name": "Randy K. Weber, Sr.",
        "lastName": "Weber",
        "firstName": "Randy",
        "party": "R",
        "district": 14,
        "state": "TX"
      },
      {
        "name": "Monica De La Cruz",
        "lastName": "De La Cruz",
        "firstName": "Mónica",
        "party": "R",
        "district": 15,
        "state": "TX"
      },
      {
        "name": "Veronica Escobar",
        "lastName": "Escobar",
        "firstName": "Veronica",
        "party": "D",
        "district": 16,
        "state": "TX"
      },
      {
        "name": "Pete Sessions",
        "lastName": "Sessions",
        "firstName": "Pete",
        "party": "R",
        "district": 17,
        "state": "TX"
      },
      {
        "name": "Jodey C. Arrington",
        "lastName": "Arrington",
        "firstName": "Jodey",
        "party": "R",
        "district": 19,
        "state": "TX"
      },
      {
        "name": "Joaquin Castro",
        "lastName": "Castro",
        "firstName": "Joaquin",
        "party": "D",
        "district": 20,
        "state": "TX"
      },
      {
        "name": "Chip Roy",
        "lastName": "Roy",
        "firstName": "Chip",
        "party": "R",
        "district": 21,
        "state": "TX"
      },
      {
        "name": "Troy E. Nehls",
        "lastName": "Nehls",
        "firstName": "Troy",
        "party": "R",
        "district": 22,
        "state": "TX"
      },
      {
        "name": "Tony Gonzales",
        "lastName": "Gonzales",
        "firstName": "Ernest",
        "party": "R",
        "district": 23,
        "state": "TX"
      },
      {
        "name": "Beth Van Duyne",
        "lastName": "Van Duyne",
        "firstName": "Beth",
        "party": "R",
        "district": 24,
        "state": "TX"
      },
      {
        "name": "Roger Williams",
        "lastName": "Williams",
        "firstName": "Roger",
        "party": "R",
        "district": 25,
        "state": "TX"
      },
      {
        "name": "Brandon Gill",
        "lastName": "Gill",
        "firstName": "Brandon",
        "party": "R",
        "district": 26,
        "state": "TX"
      },
      {
        "name": "Michael Cloud",
        "lastName": "Cloud",
        "firstName": "Michael",
        "party": "R",
        "district": 27,
        "state": "TX"
      },
      {
        "name": "Henry Cuellar",
        "lastName": "Cuellar",
        "firstName": "Henry",
        "party": "D",
        "district": 28,
        "state": "TX"
      },
      {
        "name": "Sylvia R. Garcia",
        "lastName": "Garcia",
        "firstName": "Sylvia",
        "party": "D",
        "district": 29,
        "state": "TX"
      },
      {
        "name": "Jasmine Crockett",
        "lastName": "Crockett",
        "firstName": "Jasmine",
        "party": "D",
        "district": 30,
        "state": "TX"
      },
      {
        "name": "John R. Carter",
        "lastName": "Carter",
        "firstName": "John",
        "party": "R",
        "district": 31,
        "state": "TX"
      },
      {
        "name": "Julie Johnson",
        "lastName": "Johnson",
        "firstName": "Julie",
        "party": "D",
        "district": 32,
        "state": "TX"
      },
      {
        "name": "Marc A. Veasey",
        "lastName": "Veasey",
        "firstName": "Marc",
        "party": "D",
        "district": 33,
        "state": "TX"
      },
      {
        "name": "Vicente Gonzalez",
        "lastName": "Gonzalez",
        "firstName": "Vicente",
        "party": "D",
        "district": 34,
        "state": "TX"
      },
      {
        "name": "Greg Casar",
        "lastName": "Casar",
        "firstName": "Gregorio",
        "party": "D",
        "district": 35,
        "state": "TX"
      },
      {
        "name": "Brian Babin",
        "lastName": "Babin",
        "firstName": "Brian",
        "party": "R",
        "district": 36,
        "state": "TX"
      },
      {
        "name": "Lloyd Doggett",
        "lastName": "Doggett",
        "firstName": "Lloyd",
        "party": "D",
        "district": 37,
        "state": "TX"
      },
      {
        "name": "Wesley Hunt",
        "lastName": "Hunt",
        "firstName": "Wesley",
        "party": "R",
        "district": 38,
        "state": "TX"
      }
    ],
    "senators": [
      {
        "name": "John Cornyn",
        "lastName": "Cornyn",
        "firstName": "John",
        "party": "R",
        "state": "TX"
      },
      {
        "name": "Ted Cruz",
        "lastName": "Cruz",
        "firstName": "Ted",
        "party": "R",
        "state": "TX"
      }
    ]
  },
  "IL": {
    "representatives": [
      {
        "name": "Jonathan L. Jackson",
        "lastName": "Jackson",
        "firstName": "Jonathan",
        "party": "D",
        "district": 1,
        "state": "IL"
      },
      {
        "name": "Robin L. Kelly",
        "lastName": "Kelly",
        "firstName": "Robin",
        "party": "D",
        "district": 2,
        "state": "IL"
      },
      {
        "name": "Delia C. Ramirez",
        "lastName": "Ramirez",
        "firstName": "Delia",
        "party": "D",
        "district": 3,
        "state": "IL"
      },
      {
        "name": "Jesús G. \"Chuy\" García",
        "lastName": "García",
        "firstName": "Jesús",
        "party": "D",
        "district": 4,
        "state": "IL"
      },
      {
        "name": "Mike Quigley",
        "lastName": "Quigley",
        "firstName": "Mike",
        "party": "D",
        "district": 5,
        "state": "IL"
      },
      {
        "name": "Sean Casten",
        "lastName": "Casten",
        "firstName": "Sean",
        "party": "D",
        "district": 6,
        "state": "IL"
      },
      {
        "name": "Danny K. Davis",
        "lastName": "Davis",
        "firstName": "Danny",
        "party": "D",
        "district": 7,
        "state": "IL"
      },
      {
        "name": "Raja Krishnamoorthi",
        "lastName": "Krishnamoorthi",
        "firstName": "Raja",
        "party": "D",
        "district": 8,
        "state": "IL"
      },
      {
        "name": "Janice D. Schakowsky",
        "lastName": "Schakowsky",
        "firstName": "Janice",
        "party": "D",
        "district": 9,
        "state": "IL"
      },
      {
        "name": "Bradley Scott Schneider",
        "lastName": "Schneider",
        "firstName": "Bradley",
        "party": "D",
        "district": 10,
        "state": "IL"
      },
      {
        "name": "Bill Foster",
        "lastName": "Foster",
        "firstName": "Bill",
        "party": "D",
        "district": 11,
        "state": "IL"
      },
      {
        "name": "Mike Bost",
        "lastName": "Bost",
        "firstName": "Mike",
        "party": "R",
        "district": 12,
        "state": "IL"
      },
      {
        "name": "Nikki Budzinski",
        "lastName": "Budzinski",
        "firstName": "Nicole (Nikki)",
        "party": "D",
        "district": 13,
        "state": "IL"
      },
      {
        "name": "Lauren Underwood",
        "lastName": "Underwood",
        "firstName": "Lauren",
        "party": "D",
        "district": 14,
        "state": "IL"
      },
      {
        "name": "Mary E. Miller",
        "lastName": "Miller",
        "firstName": "Mary",
        "party": "R",
        "district": 15,
        "state": "IL"
      },
      {
        "name": "Darin LaHood",
        "lastName": "LaHood",
        "firstName": "Darin",
        "party": "R",
        "district": 16,
        "state": "IL"
      },
      {
        "name": "Eric Sorensen",
        "lastName": "Sorensen",
        "firstName": "Eric",
        "party": "D",
        "district": 17,
        "state": "IL"
      }
    ],
    "senators": [
      {
        "name": "Richard J. Durbin",
        "lastName": "Durbin",
        "firstName": "Richard",
        "party": "D",
        "state": "IL"
      },
      {
        "name": "Tammy Duckworth",
        "lastName": "Duckworth",
        "firstName": "Tammy",
        "party": "D",
        "state": "IL"
      }
    ]
  },
  "SC": {
    "representatives": [
      {
        "name": "Nancy Mace",
        "lastName": "Mace",
        "firstName": "Nancy",
        "party": "R",
        "district": 1,
        "state": "SC"
      },
      {
        "name": "Joe Wilson",
        "lastName": "Wilson",
        "firstName": "Joe",
        "party": "R",
        "district": 2,
        "state": "SC"
      },
      {
        "name": "Sheri Biggs",
        "lastName": "Biggs",
        "firstName": "Sheri",
        "party": "R",
        "district": 3,
        "state": "SC"
      },
      {
        "name": "William R. Timmons IV",
        "lastName": "Timmons",
        "firstName": "William",
        "party": "R",
        "district": 4,
        "state": "SC"
      },
      {
        "name": "Ralph Norman",
        "lastName": "Norman",
        "firstName": "Ralph",
        "party": "R",
        "district": 5,
        "state": "SC"
      },
      {
        "name": "James E. Clyburn",
        "lastName": "Clyburn",
        "firstName": "James",
        "party": "D",
        "district": 6,
        "state": "SC"
      },
      {
        "name": "Russell Fry",
        "lastName": "Fry",
        "firstName": "Russell",
        "party": "R",
        "district": 7,
        "state": "SC"
      }
    ],
    "senators": [
      {
        "name": "Lindsey Graham",
        "lastName": "Graham",
        "firstName": "Lindsey",
        "party": "R",
        "state": "SC"
      },
      {
        "name": "Tim Scott",
        "lastName": "Scott",
        "firstName": "Tim",
        "party": "R",
        "state": "SC"
      }
    ]
  },
  "KY": {
    "representatives": [
      {
        "name": "James Comer",
        "lastName": "Comer",
        "firstName": "James",
        "party": "R",
        "district": 1,
        "state": "KY"
      },
      {
        "name": "Brett Guthrie",
        "lastName": "Guthrie",
        "firstName": "Brett",
        "party": "R",
        "district": 2,
        "state": "KY"
      },
      {
        "name": "Morgan McGarvey",
        "lastName": "McGarvey",
        "firstName": "Morgan",
        "party": "D",
        "district": 3,
        "state": "KY"
      },
      {
        "name": "Thomas Massie",
        "lastName": "Massie",
        "firstName": "Thomas",
        "party": "R",
        "district": 4,
        "state": "KY"
      },
      {
        "name": "Harold Rogers",
        "lastName": "Rogers",
        "firstName": "Harold",
        "party": "R",
        "district": 5,
        "state": "KY"
      },
      {
        "name": "Andy Barr",
        "lastName": "Barr",
        "firstName": "Garland",
        "party": "R",
        "district": 6,
        "state": "KY"
      }
    ],
    "senators": [
      {
        "name": "Mitch McConnell",
        "lastName": "McConnell",
        "firstName": "Mitch",
        "party": "R",
        "state": "KY"
      },
      {
        "name": "Rand Paul",
        "lastName": "Paul",
        "firstName": "Rand",
        "party": "R",
        "state": "KY"
      }
    ]
  },
  "OR": {
    "representatives": [
      {
        "name": "Suzanne Bonamici",
        "lastName": "Bonamici",
        "firstName": "Suzanne",
        "party": "D",
        "district": 1,
        "state": "OR"
      },
      {
        "name": "Cliff Bentz",
        "lastName": "Bentz",
        "firstName": "Cliff",
        "party": "R",
        "district": 2,
        "state": "OR"
      },
      {
        "name": "Maxine Dexter",
        "lastName": "Dexter",
        "firstName": "Maxine",
        "party": "D",
        "district": 3,
        "state": "OR"
      },
      {
        "name": "Val T. Hoyle",
        "lastName": "Hoyle",
        "firstName": "Valerie",
        "party": "D",
        "district": 4,
        "state": "OR"
      },
      {
        "name": "Janelle S. Bynum",
        "lastName": "Bynum",
        "firstName": "Janelle",
        "party": "D",
        "district": 5,
        "state": "OR"
      },
      {
        "name": "Andrea Salinas",
        "lastName": "Salinas",
        "firstName": "Andrea",
        "party": "D",
        "district": 6,
        "state": "OR"
      }
    ],
    "senators": [
      {
        "name": "Jeff Merkley",
        "lastName": "Merkley",
        "firstName": "Jeff",
        "party": "D",
        "state": "OR"
      },
      {
        "name": "Ron Wyden",
        "lastName": "Wyden",
        "firstName": "Ron",
        "party": "D",
        "state": "OR"
      }
    ]
  },
  "ID": {
    "representatives": [
      {
        "name": "Russ Fulcher",
        "lastName": "Fulcher",
        "firstName": "Russ",
        "party": "R",
        "district": 1,
        "state": "ID"
      },
      {
        "name": "Michael K. Simpson",
        "lastName": "Simpson",
        "firstName": "Michael",
        "party": "R",
        "district": 2,
        "state": "ID"
      }
    ],
    "senators": [
      {
        "name": "James E. Risch",
        "lastName": "Risch",
        "firstName": "James",
        "party": "R",
        "state": "ID"
      },
      {
        "name": "Mike Crapo",
        "lastName": "Crapo",
        "firstName": "Michael",
        "party": "R",
        "state": "ID"
      }
    ]
  },
  "NH": {
    "representatives": [
      {
        "name": "Chris Pappas",
        "lastName": "Pappas",
        "firstName": "Chris",
        "party": "D",
        "district": 1,
        "state": "NH"
      },
      {
        "name": "Maggie Goodlander",
        "lastName": "Goodlander",
        "firstName": "Maggie",
        "party": "D",
        "district": 2,
        "state": "NH"
      }
    ],
    "senators": [
      {
        "name": "Jeanne Shaheen",
        "lastName": "Shaheen",
        "firstName": "Jeanne",
        "party": "D",
        "state": "NH"
      },
      {
        "name": "Margaret Wood Hassan",
        "lastName": "Hassan",
        "firstName": "Margaret",
        "party": "D",
        "state": "NH"
      }
    ]
  },
  "VA": {
    "representatives": [
      {
        "name": "Robert J. Wittman",
        "lastName": "Wittman",
        "firstName": "Robert",
        "party": "R",
        "district": 1,
        "state": "VA"
      },
      {
        "name": "Jennifer A. Kiggans",
        "lastName": "Kiggans",
        "firstName": "Jennifer",
        "party": "R",
        "district": 2,
        "state": "VA"
      },
      {
        "name": "Robert C. \"Bobby\" Scott",
        "lastName": "Scott",
        "firstName": "Robert",
        "party": "D",
        "district": 3,
        "state": "VA"
      },
      {
        "name": "Jennifer L. McClellan",
        "lastName": "McClellan",
        "firstName": "Jennifer",
        "party": "D",
        "district": 4,
        "state": "VA"
      },
      {
        "name": "John J. McGuire III",
        "lastName": "McGuire",
        "firstName": "John",
        "party": "R",
        "district": 5,
        "state": "VA"
      },
      {
        "name": "Ben Cline",
        "lastName": "Cline",
        "firstName": "Ben",
        "party": "R",
        "district": 6,
        "state": "VA"
      },
      {
        "name": "Eugene Simon Vindman",
        "lastName": "Vindman",
        "firstName": "Eugene",
        "party": "D",
        "district": 7,
        "state": "VA"
      },
      {
        "name": "Donald S. Beyer, Jr.",
        "lastName": "Beyer",
        "firstName": "Donald",
        "party": "D",
        "district": 8,
        "state": "VA"
      },
      {
        "name": "H. Morgan Griffith",
        "lastName": "Griffith",
        "firstName": "H.",
        "party": "R",
        "district": 9,
        "state": "VA"
      },
      {
        "name": "Suhas Subramanyam",
        "lastName": "Subramanyam",
        "firstName": "Suhas",
        "party": "D",
        "district": 10,
        "state": "VA"
      },
      {
        "name": "",
        "lastName": "Walkinshaw",
        "firstName": "James",
        "party": "D",
        "district": 11,
        "state": "VA"
      }
    ],
    "senators": [
      {
        "name": "Mark R. Warner",
        "lastName": "Warner",
        "firstName": "Mark",
        "party": "D",
        "state": "VA"
      },
      {
        "name": "Tim Kaine",
        "lastName": "Kaine",
        "firstName": "Timothy",
        "party": "D",
        "state": "VA"
      }
    ]
  },
  "NY": {
    "representatives": [
      {
        "name": "Nick LaLota",
        "lastName": "LaLota",
        "firstName": "Nicolas",
        "party": "R",
        "district": 1,
        "state": "NY"
      },
      {
        "name": "Andrew R. Garbarino",
        "lastName": "Garbarino",
        "firstName": "Andrew",
        "party": "R",
        "district": 2,
        "state": "NY"
      },
      {
        "name": "Thomas R. Suozzi",
        "lastName": "Suozzi",
        "firstName": "Thomas",
        "party": "D",
        "district": 3,
        "state": "NY"
      },
      {
        "name": "Laura Gillen",
        "lastName": "Gillen",
        "firstName": "Laura",
        "party": "D",
        "district": 4,
        "state": "NY"
      },
      {
        "name": "Gregory W. Meeks",
        "lastName": "Meeks",
        "firstName": "Gregory",
        "party": "D",
        "district": 5,
        "state": "NY"
      },
      {
        "name": "Grace Meng",
        "lastName": "Meng",
        "firstName": "Grace",
        "party": "D",
        "district": 6,
        "state": "NY"
      },
      {
        "name": "Nydia M. Velázquez",
        "lastName": "Velázquez",
        "firstName": "Nydia",
        "party": "D",
        "district": 7,
        "state": "NY"
      },
      {
        "name": "Hakeem S. Jeffries",
        "lastName": "Jeffries",
        "firstName": "Hakeem",
        "party": "D",
        "district": 8,
        "state": "NY"
      },
      {
        "name": "Yvette D. Clarke",
        "lastName": "Clarke",
        "firstName": "Yvette",
        "party": "D",
        "district": 9,
        "state": "NY"
      },
      {
        "name": "Daniel S. Goldman",
        "lastName": "Goldman",
        "firstName": "Dan",
        "party": "D",
        "district": 10,
        "state": "NY"
      },
      {
        "name": "Nicole Malliotakis",
        "lastName": "Malliotakis",
        "firstName": "Nicole",
        "party": "R",
        "district": 11,
        "state": "NY"
      },
      {
        "name": "Jerrold Nadler",
        "lastName": "Nadler",
        "firstName": "Jerrold",
        "party": "D",
        "district": 12,
        "state": "NY"
      },
      {
        "name": "Adriano Espaillat",
        "lastName": "Espaillat",
        "firstName": "Adriano",
        "party": "D",
        "district": 13,
        "state": "NY"
      },
      {
        "name": "Alexandria Ocasio-Cortez",
        "lastName": "Ocasio-Cortez",
        "firstName": "Alexandria",
        "party": "D",
        "district": 14,
        "state": "NY"
      },
      {
        "name": "Ritchie Torres",
        "lastName": "Torres",
        "firstName": "Ritchie",
        "party": "D",
        "district": 15,
        "state": "NY"
      },
      {
        "name": "George Latimer",
        "lastName": "Latimer",
        "firstName": "George",
        "party": "D",
        "district": 16,
        "state": "NY"
      },
      {
        "name": "Michael Lawler",
        "lastName": "Lawler",
        "firstName": "Michael",
        "party": "R",
        "district": 17,
        "state": "NY"
      },
      {
        "name": "Patrick Ryan",
        "lastName": "Ryan",
        "firstName": "Patrick",
        "party": "D",
        "district": 18,
        "state": "NY"
      },
      {
        "name": "Josh Riley",
        "lastName": "Riley",
        "firstName": "Josh",
        "party": "D",
        "district": 19,
        "state": "NY"
      },
      {
        "name": "Paul Tonko",
        "lastName": "Tonko",
        "firstName": "Paul",
        "party": "D",
        "district": 20,
        "state": "NY"
      },
      {
        "name": "Elise M. Stefanik",
        "lastName": "Stefanik",
        "firstName": "Elise",
        "party": "R",
        "district": 21,
        "state": "NY"
      },
      {
        "name": "John W. Mannion",
        "lastName": "Mannion",
        "firstName": "John",
        "party": "D",
        "district": 22,
        "state": "NY"
      },
      {
        "name": "Nicholas A. Langworthy",
        "lastName": "Langworthy",
        "firstName": "Nicholas",
        "party": "R",
        "district": 23,
        "state": "NY"
      },
      {
        "name": "Claudia Tenney",
        "lastName": "Tenney",
        "firstName": "Claudia",
        "party": "R",
        "district": 24,
        "state": "NY"
      },
      {
        "name": "Joseph D. Morelle",
        "lastName": "Morelle",
        "firstName": "Joseph",
        "party": "D",
        "district": 25,
        "state": "NY"
      },
      {
        "name": "Timothy M. Kennedy",
        "lastName": "Kennedy",
        "firstName": "Timothy",
        "party": "D",
        "district": 26,
        "state": "NY"
      }
    ],
    "senators": [
      {
        "name": "Kirsten E. Gillibrand",
        "lastName": "Gillibrand",
        "firstName": "Kirsten",
        "party": "D",
        "state": "NY"
      },
      {
        "name": "Charles E. Schumer",
        "lastName": "Schumer",
        "firstName": "Charles",
        "party": "D",
        "state": "NY"
      }
    ]
  },
  "DE": {
    "representatives": [
      {
        "name": "Sarah McBride",
        "lastName": "McBride",
        "firstName": "Sarah",
        "party": "D",
        "district": 0,
        "state": "DE"
      }
    ],
    "senators": [
      {
        "name": "Christopher A. Coons",
        "lastName": "Coons",
        "firstName": "Christopher",
        "party": "D",
        "state": "DE"
      },
      {
        "name": "Lisa Blunt Rochester",
        "lastName": "Blunt Rochester",
        "firstName": "Lisa",
        "party": "D",
        "state": "DE"
      }
    ]
  },
  "AL": {
    "representatives": [
      {
        "name": "Barry Moore",
        "lastName": "Moore",
        "firstName": "Barry",
        "party": "R",
        "district": 1,
        "state": "AL"
      },
      {
        "name": "Shomari Figures",
        "lastName": "Figures",
        "firstName": "Shomari",
        "party": "D",
        "district": 2,
        "state": "AL"
      },
      {
        "name": "Mike Rogers",
        "lastName": "Rogers",
        "firstName": "Mike",
        "party": "R",
        "district": 3,
        "state": "AL"
      },
      {
        "name": "Robert B. Aderholt",
        "lastName": "Aderholt",
        "firstName": "Robert",
        "party": "R",
        "district": 4,
        "state": "AL"
      },
      {
        "name": "Dale W. Strong",
        "lastName": "Strong",
        "firstName": "Dale",
        "party": "R",
        "district": 5,
        "state": "AL"
      },
      {
        "name": "Gary J. Palmer",
        "lastName": "Palmer",
        "firstName": "Gary",
        "party": "R",
        "district": 6,
        "state": "AL"
      },
      {
        "name": "Terri A. Sewell",
        "lastName": "Sewell",
        "firstName": "Terri",
        "party": "D",
        "district": 7,
        "state": "AL"
      }
    ],
    "senators": [
      {
        "name": "Tommy Tuberville",
        "lastName": "Tuberville",
        "firstName": "Tommy",
        "party": "R",
        "state": "AL"
      },
      {
        "name": "Katie Boyd Britt",
        "lastName": "Britt",
        "firstName": "Katie",
        "party": "R",
        "state": "AL"
      }
    ]
  },
  "WI": {
    "representatives": [
      {
        "name": "Bryan Steil",
        "lastName": "Steil",
        "firstName": "Bryan",
        "party": "R",
        "district": 1,
        "state": "WI"
      },
      {
        "name": "Mark Pocan",
        "lastName": "Pocan",
        "firstName": "Mark",
        "party": "D",
        "district": 2,
        "state": "WI"
      },
      {
        "name": "Derrick Van Orden",
        "lastName": "Van Orden",
        "firstName": "Derrick",
        "party": "R",
        "district": 3,
        "state": "WI"
      },
      {
        "name": "Gwen Moore",
        "lastName": "Moore",
        "firstName": "Gwen",
        "party": "D",
        "district": 4,
        "state": "WI"
      },
      {
        "name": "Scott Fitzgerald",
        "lastName": "Fitzgerald",
        "firstName": "Scott",
        "party": "R",
        "district": 5,
        "state": "WI"
      },
      {
        "name": "Glenn Grothman",
        "lastName": "Grothman",
        "firstName": "Glenn",
        "party": "R",
        "district": 6,
        "state": "WI"
      },
      {
        "name": "Thomas P. Tiffany",
        "lastName": "Tiffany",
        "firstName": "Thomas",
        "party": "R",
        "district": 7,
        "state": "WI"
      },
      {
        "name": "Tony Wied",
        "lastName": "Wied",
        "firstName": "Tony",
        "party": "R",
        "district": 8,
        "state": "WI"
      }
    ],
    "senators": [
      {
        "name": "Tammy Baldwin",
        "lastName": "Baldwin",
        "firstName": "Tammy",
        "party": "D",
        "state": "WI"
      },
      {
        "name": "Ron Johnson",
        "lastName": "Johnson",
        "firstName": "Ron",
        "party": "R",
        "state": "WI"
      }
    ]
  },
  "CO": {
    "representatives": [
      {
        "name": "Diana DeGette",
        "lastName": "DeGette",
        "firstName": "Diana",
        "party": "D",
        "district": 1,
        "state": "CO"
      },
      {
        "name": "Joe Neguse",
        "lastName": "Neguse",
        "firstName": "Joe",
        "party": "D",
        "district": 2,
        "state": "CO"
      },
      {
        "name": "Jeff Hurd",
        "lastName": "Hurd",
        "firstName": "Jeff",
        "party": "R",
        "district": 3,
        "state": "CO"
      },
      {
        "name": "Lauren Boebert",
        "lastName": "Boebert",
        "firstName": "Lauren",
        "party": "R",
        "district": 4,
        "state": "CO"
      },
      {
        "name": "Jeff Crank",
        "lastName": "Crank",
        "firstName": "Jeff",
        "party": "R",
        "district": 5,
        "state": "CO"
      },
      {
        "name": "Jason Crow",
        "lastName": "Crow",
        "firstName": "Jason",
        "party": "D",
        "district": 6,
        "state": "CO"
      },
      {
        "name": "Brittany Pettersen",
        "lastName": "Pettersen",
        "firstName": "Brittany",
        "party": "D",
        "district": 7,
        "state": "CO"
      },
      {
        "name": "Gabe Evans",
        "lastName": "Evans",
        "firstName": "Gabe",
        "party": "R",
        "district": 8,
        "state": "CO"
      }
    ],
    "senators": [
      {
        "name": "Michael F. Bennet",
        "lastName": "Bennet",
        "firstName": "Michael",
        "party": "D",
        "state": "CO"
      },
      {
        "name": "John W. Hickenlooper",
        "lastName": "Hickenlooper",
        "firstName": "John",
        "party": "D",
        "state": "CO"
      }
    ]
  },
  "FL": {
    "representatives": [
      {
        "name": "Jimmy Patronis",
        "lastName": "Patronis",
        "firstName": "Jimmy",
        "party": "R",
        "district": 1,
        "state": "FL"
      },
      {
        "name": "Neal P. Dunn",
        "lastName": "Dunn",
        "firstName": "Neal",
        "party": "R",
        "district": 2,
        "state": "FL"
      },
      {
        "name": "Kat Cammack",
        "lastName": "Cammack",
        "firstName": "Katherine",
        "party": "R",
        "district": 3,
        "state": "FL"
      },
      {
        "name": "Aaron Bean",
        "lastName": "Bean",
        "firstName": "Aaron",
        "party": "R",
        "district": 4,
        "state": "FL"
      },
      {
        "name": "John H. Rutherford",
        "lastName": "Rutherford",
        "firstName": "John",
        "party": "R",
        "district": 5,
        "state": "FL"
      },
      {
        "name": "Randy Fine",
        "lastName": "Fine",
        "firstName": "Randall",
        "party": "R",
        "district": 6,
        "state": "FL"
      },
      {
        "name": "Cory Mills",
        "lastName": "Mills",
        "firstName": "Cory",
        "party": "R",
        "district": 7,
        "state": "FL"
      },
      {
        "name": "Mike Haridopolos",
        "lastName": "Haridopolos",
        "firstName": "Mike",
        "party": "R",
        "district": 8,
        "state": "FL"
      },
      {
        "name": "Darren Soto",
        "lastName": "Soto",
        "firstName": "Darren",
        "party": "D",
        "district": 9,
        "state": "FL"
      },
      {
        "name": "Maxwell Frost",
        "lastName": "Frost",
        "firstName": "Maxwell",
        "party": "D",
        "district": 10,
        "state": "FL"
      },
      {
        "name": "Daniel Webster",
        "lastName": "Webster",
        "firstName": "Daniel",
        "party": "R",
        "district": 11,
        "state": "FL"
      },
      {
        "name": "Gus M. Bilirakis",
        "lastName": "Bilirakis",
        "firstName": "Gus",
        "party": "R",
        "district": 12,
        "state": "FL"
      },
      {
        "name": "Anna Paulina Luna",
        "lastName": "Luna",
        "firstName": "Anna",
        "party": "R",
        "district": 13,
        "state": "FL"
      },
      {
        "name": "Kathy Castor",
        "lastName": "Castor",
        "firstName": "Kathy",
        "party": "D",
        "district": 14,
        "state": "FL"
      },
      {
        "name": "Laurel M. Lee",
        "lastName": "Lee",
        "firstName": "Laurel",
        "party": "R",
        "district": 15,
        "state": "FL"
      },
      {
        "name": "Vern Buchanan",
        "lastName": "Buchanan",
        "firstName": "Vern",
        "party": "R",
        "district": 16,
        "state": "FL"
      },
      {
        "name": "W. Gregory Steube",
        "lastName": "Steube",
        "firstName": "W.",
        "party": "R",
        "district": 17,
        "state": "FL"
      },
      {
        "name": "Scott Franklin",
        "lastName": "Franklin",
        "firstName": "C.",
        "party": "R",
        "district": 18,
        "state": "FL"
      },
      {
        "name": "Byron Donalds",
        "lastName": "Donalds",
        "firstName": "Byron",
        "party": "R",
        "district": 19,
        "state": "FL"
      },
      {
        "name": "Sheila Cherfilus-McCormick",
        "lastName": "Cherfilus-McCormick",
        "firstName": "Sheila",
        "party": "D",
        "district": 20,
        "state": "FL"
      },
      {
        "name": "Brian J. Mast",
        "lastName": "Mast",
        "firstName": "Brian",
        "party": "R",
        "district": 21,
        "state": "FL"
      },
      {
        "name": "Lois Frankel",
        "lastName": "Frankel",
        "firstName": "Lois",
        "party": "D",
        "district": 22,
        "state": "FL"
      },
      {
        "name": "Jared Moskowitz",
        "lastName": "Moskowitz",
        "firstName": "Jared",
        "party": "D",
        "district": 23,
        "state": "FL"
      },
      {
        "name": "Frederica S. Wilson",
        "lastName": "Wilson",
        "firstName": "Frederica",
        "party": "D",
        "district": 24,
        "state": "FL"
      },
      {
        "name": "Debbie Wasserman Schultz",
        "lastName": "Wasserman Schultz",
        "firstName": "Debbie",
        "party": "D",
        "district": 25,
        "state": "FL"
      },
      {
        "name": "Mario Diaz-Balart",
        "lastName": "Diaz-Balart",
        "firstName": "Mario",
        "party": "R",
        "district": 26,
        "state": "FL"
      },
      {
        "name": "Maria Elvira Salazar",
        "lastName": "Salazar",
        "firstName": "Maria",
        "party": "R",
        "district": 27,
        "state": "FL"
      },
      {
        "name": "Carlos A. Gimenez",
        "lastName": "Gimenez",
        "firstName": "Carlos",
        "party": "R",
        "district": 28,
        "state": "FL"
      }
    ],
    "senators": [
      {
        "name": "Rick Scott",
        "lastName": "Scott",
        "firstName": "Rick",
        "party": "R",
        "state": "FL"
      },
      {
        "name": "Ashley Moody",
        "lastName": "Moody",
        "firstName": "Ashley",
        "party": "R",
        "state": "FL"
      }
    ]
  },
  "GA": {
    "representatives": [
      {
        "name": "Earl L. \"Buddy\" Carter",
        "lastName": "Carter",
        "firstName": "Earl",
        "party": "R",
        "district": 1,
        "state": "GA"
      },
      {
        "name": "Sanford D. Bishop, Jr.",
        "lastName": "Bishop",
        "firstName": "Sanford",
        "party": "D",
        "district": 2,
        "state": "GA"
      },
      {
        "name": "Brian Jack",
        "lastName": "Jack",
        "firstName": "Brian",
        "party": "R",
        "district": 3,
        "state": "GA"
      },
      {
        "name": "Henry C. \"Hank\" Johnson, Jr.",
        "lastName": "Johnson",
        "firstName": "Henry",
        "party": "D",
        "district": 4,
        "state": "GA"
      },
      {
        "name": "Nikema Williams",
        "lastName": "Williams",
        "firstName": "Nikema",
        "party": "D",
        "district": 5,
        "state": "GA"
      },
      {
        "name": "Lucy McBath",
        "lastName": "McBath",
        "firstName": "Lucy",
        "party": "D",
        "district": 6,
        "state": "GA"
      },
      {
        "name": "Richard McCormick",
        "lastName": "McCormick",
        "firstName": "Rich",
        "party": "R",
        "district": 7,
        "state": "GA"
      },
      {
        "name": "Austin Scott",
        "lastName": "Scott",
        "firstName": "Austin",
        "party": "R",
        "district": 8,
        "state": "GA"
      },
      {
        "name": "Andrew S. Clyde",
        "lastName": "Clyde",
        "firstName": "Andrew",
        "party": "R",
        "district": 9,
        "state": "GA"
      },
      {
        "name": "Mike Collins",
        "lastName": "Collins",
        "firstName": "Mike",
        "party": "R",
        "district": 10,
        "state": "GA"
      },
      {
        "name": "Barry Loudermilk",
        "lastName": "Loudermilk",
        "firstName": "Barry",
        "party": "R",
        "district": 11,
        "state": "GA"
      },
      {
        "name": "Rick W. Allen",
        "lastName": "Allen",
        "firstName": "Rick",
        "party": "R",
        "district": 12,
        "state": "GA"
      },
      {
        "name": "David Scott",
        "lastName": "Scott",
        "firstName": "David",
        "party": "D",
        "district": 13,
        "state": "GA"
      },
      {
        "name": "Marjorie Taylor Greene",
        "lastName": "Greene",
        "firstName": "Marjorie",
        "party": "R",
        "district": 14,
        "state": "GA"
      }
    ],
    "senators": [
      {
        "name": "Jon Ossoff",
        "lastName": "Ossoff",
        "firstName": "Jon",
        "party": "D",
        "state": "GA"
      },
      {
        "name": "Raphael G. Warnock",
        "lastName": "Warnock",
        "firstName": "Raphael",
        "party": "D",
        "state": "GA"
      }
    ]
  },
  "TN": {
    "representatives": [
      {
        "name": "Diana Harshbarger",
        "lastName": "Harshbarger",
        "firstName": "Diana",
        "party": "R",
        "district": 1,
        "state": "TN"
      },
      {
        "name": "Tim Burchett",
        "lastName": "Burchett",
        "firstName": "Tim",
        "party": "R",
        "district": 2,
        "state": "TN"
      },
      {
        "name": "Charles J. \"Chuck\" Fleischmann",
        "lastName": "Fleischmann",
        "firstName": "Charles",
        "party": "R",
        "district": 3,
        "state": "TN"
      },
      {
        "name": "Scott DesJarlais",
        "lastName": "DesJarlais",
        "firstName": "Scott",
        "party": "R",
        "district": 4,
        "state": "TN"
      },
      {
        "name": "Andrew Ogles",
        "lastName": "Ogles",
        "firstName": "Andrew",
        "party": "R",
        "district": 5,
        "state": "TN"
      },
      {
        "name": "John W. Rose",
        "lastName": "Rose",
        "firstName": "John",
        "party": "R",
        "district": 6,
        "state": "TN"
      },
      {
        "name": "David Kustoff",
        "lastName": "Kustoff",
        "firstName": "David",
        "party": "R",
        "district": 8,
        "state": "TN"
      },
      {
        "name": "Steve Cohen",
        "lastName": "Cohen",
        "firstName": "Steve",
        "party": "D",
        "district": 9,
        "state": "TN"
      }
    ],
    "senators": [
      {
        "name": "Marsha Blackburn",
        "lastName": "Blackburn",
        "firstName": "Marsha",
        "party": "R",
        "state": "TN"
      },
      {
        "name": "Bill Hagerty",
        "lastName": "Hagerty",
        "firstName": "Bill",
        "party": "R",
        "state": "TN"
      }
    ]
  },
  "CT": {
    "representatives": [
      {
        "name": "John B. Larson",
        "lastName": "Larson",
        "firstName": "John",
        "party": "D",
        "district": 1,
        "state": "CT"
      },
      {
        "name": "Joe Courtney",
        "lastName": "Courtney",
        "firstName": "Joe",
        "party": "D",
        "district": 2,
        "state": "CT"
      },
      {
        "name": "Rosa L. DeLauro",
        "lastName": "DeLauro",
        "firstName": "Rosa",
        "party": "D",
        "district": 3,
        "state": "CT"
      },
      {
        "name": "James A. Himes",
        "lastName": "Himes",
        "firstName": "James",
        "party": "D",
        "district": 4,
        "state": "CT"
      },
      {
        "name": "Jahana Hayes",
        "lastName": "Hayes",
        "firstName": "Jahana",
        "party": "D",
        "district": 5,
        "state": "CT"
      }
    ],
    "senators": [
      {
        "name": "Richard Blumenthal",
        "lastName": "Blumenthal",
        "firstName": "Richard",
        "party": "D",
        "state": "CT"
      },
      {
        "name": "Christopher Murphy",
        "lastName": "Murphy",
        "firstName": "Christopher",
        "party": "D",
        "state": "CT"
      }
    ]
  },
  "AR": {
    "representatives": [
      {
        "name": "Eric A. \"Rick\" Crawford",
        "lastName": "Crawford",
        "firstName": "Eric",
        "party": "R",
        "district": 1,
        "state": "AR"
      },
      {
        "name": "J. French Hill",
        "lastName": "Hill",
        "firstName": "J.",
        "party": "R",
        "district": 2,
        "state": "AR"
      },
      {
        "name": "Steve Womack",
        "lastName": "Womack",
        "firstName": "Steve",
        "party": "R",
        "district": 3,
        "state": "AR"
      },
      {
        "name": "Bruce Westerman",
        "lastName": "Westerman",
        "firstName": "Bruce",
        "party": "R",
        "district": 4,
        "state": "AR"
      }
    ],
    "senators": [
      {
        "name": "John Boozman",
        "lastName": "Boozman",
        "firstName": "John",
        "party": "R",
        "state": "AR"
      },
      {
        "name": "Tom Cotton",
        "lastName": "Cotton",
        "firstName": "Tom",
        "party": "R",
        "state": "AR"
      }
    ]
  },
  "CA": {
    "representatives": [
      {
        "name": "Doug LaMalfa",
        "lastName": "LaMalfa",
        "firstName": "Doug",
        "party": "R",
        "district": 1,
        "state": "CA"
      },
      {
        "name": "Jared Huffman",
        "lastName": "Huffman",
        "firstName": "Jared",
        "party": "D",
        "district": 2,
        "state": "CA"
      },
      {
        "name": "Kevin Kiley",
        "lastName": "Kiley",
        "firstName": "Kevin",
        "party": "R",
        "district": 3,
        "state": "CA"
      },
      {
        "name": "Mike Thompson",
        "lastName": "Thompson",
        "firstName": "Mike",
        "party": "D",
        "district": 4,
        "state": "CA"
      },
      {
        "name": "Tom McClintock",
        "lastName": "McClintock",
        "firstName": "Tom",
        "party": "R",
        "district": 5,
        "state": "CA"
      },
      {
        "name": "Ami Bera",
        "lastName": "Bera",
        "firstName": "Ami",
        "party": "D",
        "district": 6,
        "state": "CA"
      },
      {
        "name": "Doris O. Matsui",
        "lastName": "Matsui",
        "firstName": "Doris",
        "party": "D",
        "district": 7,
        "state": "CA"
      },
      {
        "name": "John Garamendi",
        "lastName": "Garamendi",
        "firstName": "John",
        "party": "D",
        "district": 8,
        "state": "CA"
      },
      {
        "name": "Josh Harder",
        "lastName": "Harder",
        "firstName": "Josh",
        "party": "D",
        "district": 9,
        "state": "CA"
      },
      {
        "name": "Mark DeSaulnier",
        "lastName": "DeSaulnier",
        "firstName": "Mark",
        "party": "D",
        "district": 10,
        "state": "CA"
      },
      {
        "name": "Nancy Pelosi",
        "lastName": "Pelosi",
        "firstName": "Nancy",
        "party": "D",
        "district": 11,
        "state": "CA"
      },
      {
        "name": "Lateefah Simon",
        "lastName": "Simon",
        "firstName": "Lateefah",
        "party": "D",
        "district": 12,
        "state": "CA"
      },
      {
        "name": "Adam Gray",
        "lastName": "Gray",
        "firstName": "Adam",
        "party": "D",
        "district": 13,
        "state": "CA"
      },
      {
        "name": "Eric Swalwell",
        "lastName": "Swalwell",
        "firstName": "Eric",
        "party": "D",
        "district": 14,
        "state": "CA"
      },
      {
        "name": "Kevin Mullin",
        "lastName": "Mullin",
        "firstName": "Kevin",
        "party": "D",
        "district": 15,
        "state": "CA"
      },
      {
        "name": "Sam T. Liccardo",
        "lastName": "Liccardo",
        "firstName": "Sam",
        "party": "D",
        "district": 16,
        "state": "CA"
      },
      {
        "name": "Ro Khanna",
        "lastName": "Khanna",
        "firstName": "Ro",
        "party": "D",
        "district": 17,
        "state": "CA"
      },
      {
        "name": "Zoe Lofgren",
        "lastName": "Lofgren",
        "firstName": "Zoe",
        "party": "D",
        "district": 18,
        "state": "CA"
      },
      {
        "name": "Jimmy Panetta",
        "lastName": "Panetta",
        "firstName": "Jimmy",
        "party": "D",
        "district": 19,
        "state": "CA"
      },
      {
        "name": "Vince Fong",
        "lastName": "Fong",
        "firstName": "Vince",
        "party": "R",
        "district": 20,
        "state": "CA"
      },
      {
        "name": "Jim Costa",
        "lastName": "Costa",
        "firstName": "Jim",
        "party": "D",
        "district": 21,
        "state": "CA"
      },
      {
        "name": "David G. Valadao",
        "lastName": "Valadao",
        "firstName": "David",
        "party": "R",
        "district": 22,
        "state": "CA"
      },
      {
        "name": "Jay Obernolte",
        "lastName": "Obernolte",
        "firstName": "Jay",
        "party": "R",
        "district": 23,
        "state": "CA"
      },
      {
        "name": "Salud O. Carbajal",
        "lastName": "Carbajal",
        "firstName": "Salud",
        "party": "D",
        "district": 24,
        "state": "CA"
      },
      {
        "name": "Raul Ruiz",
        "lastName": "Ruiz",
        "firstName": "Raul",
        "party": "D",
        "district": 25,
        "state": "CA"
      },
      {
        "name": "Julia Brownley",
        "lastName": "Brownley",
        "firstName": "Julia",
        "party": "D",
        "district": 26,
        "state": "CA"
      },
      {
        "name": "George Whitesides",
        "lastName": "Whitesides",
        "firstName": "George",
        "party": "D",
        "district": 27,
        "state": "CA"
      },
      {
        "name": "Judy Chu",
        "lastName": "Chu",
        "firstName": "Judy",
        "party": "D",
        "district": 28,
        "state": "CA"
      },
      {
        "name": "Luz M. Rivas",
        "lastName": "Rivas",
        "firstName": "Luz",
        "party": "D",
        "district": 29,
        "state": "CA"
      },
      {
        "name": "Laura Friedman",
        "lastName": "Friedman",
        "firstName": "Laura",
        "party": "D",
        "district": 30,
        "state": "CA"
      },
      {
        "name": "Gilbert Ray Cisneros, Jr.",
        "lastName": "Cisneros",
        "firstName": "Gilbert",
        "party": "D",
        "district": 31,
        "state": "CA"
      },
      {
        "name": "Brad Sherman",
        "lastName": "Sherman",
        "firstName": "Brad",
        "party": "D",
        "district": 32,
        "state": "CA"
      },
      {
        "name": "Pete Aguilar",
        "lastName": "Aguilar",
        "firstName": "Pete",
        "party": "D",
        "district": 33,
        "state": "CA"
      },
      {
        "name": "Jimmy Gomez",
        "lastName": "Gomez",
        "firstName": "Jimmy",
        "party": "D",
        "district": 34,
        "state": "CA"
      },
      {
        "name": "Norma J. Torres",
        "lastName": "Torres",
        "firstName": "Norma",
        "party": "D",
        "district": 35,
        "state": "CA"
      },
      {
        "name": "Ted Lieu",
        "lastName": "Lieu",
        "firstName": "Ted",
        "party": "D",
        "district": 36,
        "state": "CA"
      },
      {
        "name": "Sydney Kamlager-Dove",
        "lastName": "Kamlager-Dove",
        "firstName": "Sydney",
        "party": "D",
        "district": 37,
        "state": "CA"
      },
      {
        "name": "Linda T. Sánchez",
        "lastName": "Sánchez",
        "firstName": "Linda",
        "party": "D",
        "district": 38,
        "state": "CA"
      },
      {
        "name": "Mark Takano",
        "lastName": "Takano",
        "firstName": "Mark",
        "party": "D",
        "district": 39,
        "state": "CA"
      },
      {
        "name": "Young Kim",
        "lastName": "Kim",
        "firstName": "Young",
        "party": "R",
        "district": 40,
        "state": "CA"
      },
      {
        "name": "Ken Calvert",
        "lastName": "Calvert",
        "firstName": "Ken",
        "party": "R",
        "district": 41,
        "state": "CA"
      },
      {
        "name": "Robert Garcia",
        "lastName": "Garcia",
        "firstName": "Robert",
        "party": "D",
        "district": 42,
        "state": "CA"
      },
      {
        "name": "Maxine Waters",
        "lastName": "Waters",
        "firstName": "Maxine",
        "party": "D",
        "district": 43,
        "state": "CA"
      },
      {
        "name": "Nanette Diaz Barragán",
        "lastName": "Barragán",
        "firstName": "Nanette",
        "party": "D",
        "district": 44,
        "state": "CA"
      },
      {
        "name": "Derek Tran",
        "lastName": "Tran",
        "firstName": "Derek",
        "party": "D",
        "district": 45,
        "state": "CA"
      },
      {
        "name": "J. Luis Correa",
        "lastName": "Correa",
        "firstName": "J.",
        "party": "D",
        "district": 46,
        "state": "CA"
      },
      {
        "name": "Dave Min",
        "lastName": "Min",
        "firstName": "Dave",
        "party": "D",
        "district": 47,
        "state": "CA"
      },
      {
        "name": "Darrell Issa",
        "lastName": "Issa",
        "firstName": "Darrell",
        "party": "R",
        "district": 48,
        "state": "CA"
      },
      {
        "name": "Mike Levin",
        "lastName": "Levin",
        "firstName": "Mike",
        "party": "D",
        "district": 49,
        "state": "CA"
      },
      {
        "name": "Scott H. Peters",
        "lastName": "Peters",
        "firstName": "Scott",
        "party": "D",
        "district": 50,
        "state": "CA"
      },
      {
        "name": "Sara Jacobs",
        "lastName": "Jacobs",
        "firstName": "Sara",
        "party": "D",
        "district": 51,
        "state": "CA"
      },
      {
        "name": "Juan Vargas",
        "lastName": "Vargas",
        "firstName": "Juan",
        "party": "D",
        "district": 52,
        "state": "CA"
      }
    ],
    "senators": [
      {
        "name": "Adam B. Schiff",
        "lastName": "Schiff",
        "firstName": "Adam",
        "party": "D",
        "state": "CA"
      },
      {
        "name": "Alex Padilla",
        "lastName": "Padilla",
        "firstName": "Alejandro",
        "party": "D",
        "state": "CA"
      }
    ]
  },
  "WV": {
    "representatives": [
      {
        "name": "Carol D. Miller",
        "lastName": "Miller",
        "firstName": "Carol",
        "party": "R",
        "district": 1,
        "state": "WV"
      },
      {
        "name": "Riley M. Moore",
        "lastName": "Moore",
        "firstName": "Riley",
        "party": "R",
        "district": 2,
        "state": "WV"
      }
    ],
    "senators": [
      {
        "name": "Shelley Moore Capito",
        "lastName": "Capito",
        "firstName": "Shelley",
        "party": "R",
        "state": "WV"
      },
      {
        "name": "James C. Justice",
        "lastName": "Justice",
        "firstName": "Jim",
        "party": "R",
        "state": "WV"
      }
    ]
  },
  "IN": {
    "representatives": [
      {
        "name": "Frank J. Mrvan",
        "lastName": "Mrvan",
        "firstName": "Frank",
        "party": "D",
        "district": 1,
        "state": "IN"
      },
      {
        "name": "Rudy Yakym III",
        "lastName": "Yakym",
        "firstName": "Rudy",
        "party": "R",
        "district": 2,
        "state": "IN"
      },
      {
        "name": "Marlin A. Stutzman",
        "lastName": "Stutzman",
        "firstName": "Marlin",
        "party": "R",
        "district": 3,
        "state": "IN"
      },
      {
        "name": "James R. Baird",
        "lastName": "Baird",
        "firstName": "James",
        "party": "R",
        "district": 4,
        "state": "IN"
      },
      {
        "name": "Victoria Spartz",
        "lastName": "Spartz",
        "firstName": "Victoria",
        "party": "R",
        "district": 5,
        "state": "IN"
      },
      {
        "name": "Jefferson Shreve",
        "lastName": "Shreve",
        "firstName": "Jefferson",
        "party": "R",
        "district": 6,
        "state": "IN"
      },
      {
        "name": "André Carson",
        "lastName": "Carson",
        "firstName": "André",
        "party": "D",
        "district": 7,
        "state": "IN"
      },
      {
        "name": "Mark B. Messmer",
        "lastName": "Messmer",
        "firstName": "Mark",
        "party": "R",
        "district": 8,
        "state": "IN"
      },
      {
        "name": "Erin Houchin",
        "lastName": "Houchin",
        "firstName": "Erin",
        "party": "R",
        "district": 9,
        "state": "IN"
      }
    ],
    "senators": [
      {
        "name": "Todd Young",
        "lastName": "Young",
        "firstName": "Todd",
        "party": "R",
        "state": "IN"
      },
      {
        "name": "Jim Banks",
        "lastName": "Banks",
        "firstName": "Jim",
        "party": "R",
        "state": "IN"
      }
    ]
  },
  "LA": {
    "representatives": [
      {
        "name": "Steve Scalise",
        "lastName": "Scalise",
        "firstName": "Steve",
        "party": "R",
        "district": 1,
        "state": "LA"
      },
      {
        "name": "Troy A. Carter",
        "lastName": "Carter",
        "firstName": "Troy",
        "party": "D",
        "district": 2,
        "state": "LA"
      },
      {
        "name": "Clay Higgins",
        "lastName": "Higgins",
        "firstName": "Clay",
        "party": "R",
        "district": 3,
        "state": "LA"
      },
      {
        "name": "Mike Johnson",
        "lastName": "Johnson",
        "firstName": "Mike",
        "party": "R",
        "district": 4,
        "state": "LA"
      },
      {
        "name": "Julia Letlow",
        "lastName": "Letlow",
        "firstName": "Julia",
        "party": "R",
        "district": 5,
        "state": "LA"
      },
      {
        "name": "Cleo Fields",
        "lastName": "Fields",
        "firstName": "Cleo",
        "party": "D",
        "district": 6,
        "state": "LA"
      }
    ],
    "senators": [
      {
        "name": "Bill Cassidy",
        "lastName": "Cassidy",
        "firstName": "Bill",
        "party": "R",
        "state": "LA"
      },
      {
        "name": "John Kennedy",
        "lastName": "Kennedy",
        "firstName": "John",
        "party": "R",
        "state": "LA"
      }
    ]
  },
  "MO": {
    "representatives": [
      {
        "name": "Wesley Bell",
        "lastName": "Bell",
        "firstName": "Wesley",
        "party": "D",
        "district": 1,
        "state": "MO"
      },
      {
        "name": "Ann Wagner",
        "lastName": "Wagner",
        "firstName": "Ann",
        "party": "R",
        "district": 2,
        "state": "MO"
      },
      {
        "name": "Robert F. Onder, Jr.",
        "lastName": "Onder",
        "firstName": "Robert",
        "party": "R",
        "district": 3,
        "state": "MO"
      },
      {
        "name": "Mark Alford",
        "lastName": "Alford",
        "firstName": "Mark",
        "party": "R",
        "district": 4,
        "state": "MO"
      },
      {
        "name": "Emanuel Cleaver",
        "lastName": "Cleaver",
        "firstName": "Emanuel",
        "party": "D",
        "district": 5,
        "state": "MO"
      },
      {
        "name": "Sam Graves",
        "lastName": "Graves",
        "firstName": "Sam",
        "party": "R",
        "district": 6,
        "state": "MO"
      },
      {
        "name": "Eric Burlison",
        "lastName": "Burlison",
        "firstName": "Eric",
        "party": "R",
        "district": 7,
        "state": "MO"
      },
      {
        "name": "Jason Smith",
        "lastName": "Smith",
        "firstName": "Jason",
        "party": "R",
        "district": 8,
        "state": "MO"
      }
    ],
    "senators": [
      {
        "name": "Josh Hawley",
        "lastName": "Hawley",
        "firstName": "Joshua",
        "party": "R",
        "state": "MO"
      },
      {
        "name": "Eric Schmitt",
        "lastName": "Schmitt",
        "firstName": "Eric",
        "party": "R",
        "state": "MO"
      }
    ]
  },
  "OK": {
    "representatives": [
      {
        "name": "Kevin Hern",
        "lastName": "Hern",
        "firstName": "Kevin",
        "party": "R",
        "district": 1,
        "state": "OK"
      },
      {
        "name": "Josh Brecheen",
        "lastName": "Brecheen",
        "firstName": "Josh",
        "party": "R",
        "district": 2,
        "state": "OK"
      },
      {
        "name": "Frank D. Lucas",
        "lastName": "Lucas",
        "firstName": "Frank",
        "party": "R",
        "district": 3,
        "state": "OK"
      },
      {
        "name": "Tom Cole",
        "lastName": "Cole",
        "firstName": "Tom",
        "party": "R",
        "district": 4,
        "state": "OK"
      },
      {
        "name": "Stephanie I. Bice",
        "lastName": "Bice",
        "firstName": "Stephanie",
        "party": "R",
        "district": 5,
        "state": "OK"
      }
    ],
    "senators": [
      {
        "name": "James Lankford",
        "lastName": "Lankford",
        "firstName": "James",
        "party": "R",
        "state": "OK"
      },
      {
        "name": "Markwayne Mullin",
        "lastName": "Mullin",
        "firstName": "Markwayne",
        "party": "R",
        "state": "OK"
      }
    ]
  },
  "NC": {
    "representatives": [
      {
        "name": "Donald G. Davis",
        "lastName": "Davis",
        "firstName": "Donald",
        "party": "D",
        "district": 1,
        "state": "NC"
      },
      {
        "name": "Deborah K. Ross",
        "lastName": "Ross",
        "firstName": "Deborah",
        "party": "D",
        "district": 2,
        "state": "NC"
      },
      {
        "name": "Gregory F. Murphy",
        "lastName": "Murphy",
        "firstName": "Gregory",
        "party": "R",
        "district": 3,
        "state": "NC"
      },
      {
        "name": "Valerie P. Foushee",
        "lastName": "Foushee",
        "firstName": "Valerie",
        "party": "D",
        "district": 4,
        "state": "NC"
      },
      {
        "name": "Virginia Foxx",
        "lastName": "Foxx",
        "firstName": "Virginia",
        "party": "R",
        "district": 5,
        "state": "NC"
      },
      {
        "name": "Addison P. McDowell",
        "lastName": "McDowell",
        "firstName": "Addison",
        "party": "R",
        "district": 6,
        "state": "NC"
      },
      {
        "name": "David Rouzer",
        "lastName": "Rouzer",
        "firstName": "David",
        "party": "R",
        "district": 7,
        "state": "NC"
      },
      {
        "name": "Mark Harris",
        "lastName": "Harris",
        "firstName": "Mark",
        "party": "R",
        "district": 8,
        "state": "NC"
      },
      {
        "name": "Richard Hudson",
        "lastName": "Hudson",
        "firstName": "Richard",
        "party": "R",
        "district": 9,
        "state": "NC"
      },
      {
        "name": "Pat Harrigan",
        "lastName": "Harrigan",
        "firstName": "Pat",
        "party": "R",
        "district": 10,
        "state": "NC"
      },
      {
        "name": "Chuck Edwards",
        "lastName": "Edwards",
        "firstName": "Charles (Chuck)",
        "party": "R",
        "district": 11,
        "state": "NC"
      },
      {
        "name": "Alma S. Adams",
        "lastName": "Adams",
        "firstName": "Alma",
        "party": "D",
        "district": 12,
        "state": "NC"
      },
      {
        "name": "Brad Knott",
        "lastName": "Knott",
        "firstName": "Brad",
        "party": "R",
        "district": 13,
        "state": "NC"
      },
      {
        "name": "Tim Moore",
        "lastName": "Moore",
        "firstName": "Tim",
        "party": "R",
        "district": 14,
        "state": "NC"
      }
    ],
    "senators": [
      {
        "name": "Thom Tillis",
        "lastName": "Tillis",
        "firstName": "Thom",
        "party": "R",
        "state": "NC"
      },
      {
        "name": "Ted Budd",
        "lastName": "Budd",
        "firstName": "Ted",
        "party": "R",
        "state": "NC"
      }
    ]
  },
  "AZ": {
    "representatives": [
      {
        "name": "David Schweikert",
        "lastName": "Schweikert",
        "firstName": "David",
        "party": "R",
        "district": 1,
        "state": "AZ"
      },
      {
        "name": "Elijah Crane",
        "lastName": "Crane",
        "firstName": "Eli",
        "party": "R",
        "district": 2,
        "state": "AZ"
      },
      {
        "name": "Yassamin Ansari",
        "lastName": "Ansari",
        "firstName": "Yassamin",
        "party": "D",
        "district": 3,
        "state": "AZ"
      },
      {
        "name": "Greg Stanton",
        "lastName": "Stanton",
        "firstName": "Greg",
        "party": "D",
        "district": 4,
        "state": "AZ"
      },
      {
        "name": "Andy Biggs",
        "lastName": "Biggs",
        "firstName": "Andy",
        "party": "R",
        "district": 5,
        "state": "AZ"
      },
      {
        "name": "Juan Ciscomani",
        "lastName": "Ciscomani",
        "firstName": "Juan",
        "party": "R",
        "district": 6,
        "state": "AZ"
      },
      {
        "name": "Abraham J. Hamadeh",
        "lastName": "Hamadeh",
        "firstName": "Abraham",
        "party": "R",
        "district": 8,
        "state": "AZ"
      },
      {
        "name": "Paul A. Gosar",
        "lastName": "Gosar",
        "firstName": "Paul",
        "party": "R",
        "district": 9,
        "state": "AZ"
      }
    ],
    "senators": [
      {
        "name": "Ruben Gallego",
        "lastName": "Gallego",
        "firstName": "Ruben",
        "party": "D",
        "state": "AZ"
      },
      {
        "name": "Mark Kelly",
        "lastName": "Kelly",
        "firstName": "Mark",
        "party": "D",
        "state": "AZ"
      }
    ]
  },
  "IA": {
    "representatives": [
      {
        "name": "Mariannette Miller-Meeks",
        "lastName": "Miller-Meeks",
        "firstName": "Mariannette",
        "party": "R",
        "district": 1,
        "state": "IA"
      },
      {
        "name": "Ashley Hinson",
        "lastName": "Hinson",
        "firstName": "Ashley",
        "party": "R",
        "district": 2,
        "state": "IA"
      },
      {
        "name": "Zachary Nunn",
        "lastName": "Nunn",
        "firstName": "Zachary (Zach)",
        "party": "R",
        "district": 3,
        "state": "IA"
      },
      {
        "name": "Randy Feenstra",
        "lastName": "Feenstra",
        "firstName": "Randy",
        "party": "R",
        "district": 4,
        "state": "IA"
      }
    ],
    "senators": [
      {
        "name": "Chuck Grassley",
        "lastName": "Grassley",
        "firstName": "Charles",
        "party": "R",
        "state": "IA"
      },
      {
        "name": "Joni Ernst",
        "lastName": "Ernst",
        "firstName": "Joni",
        "party": "R",
        "state": "IA"
      }
    ]
  },
  "MD": {
    "representatives": [
      {
        "name": "Andy Harris",
        "lastName": "Harris",
        "firstName": "Andy",
        "party": "R",
        "district": 1,
        "state": "MD"
      },
      {
        "name": "Johnny Olszewski, Jr.",
        "lastName": "Olszewski",
        "firstName": "Johnny",
        "party": "D",
        "district": 2,
        "state": "MD"
      },
      {
        "name": "Sarah Elfreth",
        "lastName": "Elfreth",
        "firstName": "Sarah",
        "party": "D",
        "district": 3,
        "state": "MD"
      },
      {
        "name": "Glenn Ivey",
        "lastName": "Ivey",
        "firstName": "Glenn",
        "party": "D",
        "district": 4,
        "state": "MD"
      },
      {
        "name": "Steny H. Hoyer",
        "lastName": "Hoyer",
        "firstName": "Steny",
        "party": "D",
        "district": 5,
        "state": "MD"
      },
      {
        "name": "April McClain Delaney",
        "lastName": "McClain Delaney",
        "firstName": "April",
        "party": "D",
        "district": 6,
        "state": "MD"
      },
      {
        "name": "Kweisi Mfume",
        "lastName": "Mfume",
        "firstName": "Kweisi",
        "party": "D",
        "district": 7,
        "state": "MD"
      },
      {
        "name": "Jamie Raskin",
        "lastName": "Raskin",
        "firstName": "Jamie",
        "party": "D",
        "district": 8,
        "state": "MD"
      }
    ],
    "senators": [
      {
        "name": "Chris Van Hollen",
        "lastName": "Van Hollen",
        "firstName": "Chris",
        "party": "D",
        "state": "MD"
      },
      {
        "name": "Angela D. Alsobrooks",
        "lastName": "Alsobrooks",
        "firstName": "Angela",
        "party": "D",
        "state": "MD"
      }
    ]
  },
  "NM": {
    "representatives": [
      {
        "name": "Melanie A. Stansbury",
        "lastName": "Stansbury",
        "firstName": "Melanie",
        "party": "D",
        "district": 1,
        "state": "NM"
      },
      {
        "name": "Gabe Vasquez",
        "lastName": "Vasquez",
        "firstName": "Gabriel (Gabe)",
        "party": "D",
        "district": 2,
        "state": "NM"
      },
      {
        "name": "Teresa Leger Fernandez",
        "lastName": "Leger Fernandez",
        "firstName": "Teresa",
        "party": "D",
        "district": 3,
        "state": "NM"
      }
    ],
    "senators": [
      {
        "name": "Martin Heinrich",
        "lastName": "Heinrich",
        "firstName": "Martin",
        "party": "D",
        "state": "NM"
      },
      {
        "name": "Ben Ray Luján",
        "lastName": "Luján",
        "firstName": "Ben",
        "party": "D",
        "state": "NM"
      }
    ]
  },
  "HI": {
    "representatives": [
      {
        "name": "Ed Case",
        "lastName": "Case",
        "firstName": "Ed",
        "party": "D",
        "district": 1,
        "state": "HI"
      },
      {
        "name": "Jill N. Tokuda",
        "lastName": "Tokuda",
        "firstName": "Jill",
        "party": "D",
        "district": 2,
        "state": "HI"
      }
    ],
    "senators": [
      {
        "name": "Mazie K. Hirono",
        "lastName": "Hirono",
        "firstName": "Mazie",
        "party": "D",
        "state": "HI"
      },
      {
        "name": "Brian Schatz",
        "lastName": "Schatz",
        "firstName": "Brian",
        "party": "D",
        "state": "HI"
      }
    ]
  },
  "ND": {
    "representatives": [
      {
        "name": "Julie Fedorchak",
        "lastName": "Fedorchak",
        "firstName": "Julie",
        "party": "R",
        "district": 0,
        "state": "ND"
      }
    ],
    "senators": [
      {
        "name": "John Hoeven",
        "lastName": "Hoeven",
        "firstName": "John",
        "party": "R",
        "state": "ND"
      },
      {
        "name": "Kevin Cramer",
        "lastName": "Cramer",
        "firstName": "Kevin",
        "party": "R",
        "state": "ND"
      }
    ]
  },
  "MI": {
    "representatives": [
      {
        "name": "Jack Bergman",
        "lastName": "Bergman",
        "firstName": "Jack",
        "party": "R",
        "district": 1,
        "state": "MI"
      },
      {
        "name": "John R. Moolenaar",
        "lastName": "Moolenaar",
        "firstName": "John",
        "party": "R",
        "district": 2,
        "state": "MI"
      },
      {
        "name": "Hillary J. Scholten",
        "lastName": "Scholten",
        "firstName": "Hillary",
        "party": "D",
        "district": 3,
        "state": "MI"
      },
      {
        "name": "Bill Huizenga",
        "lastName": "Huizenga",
        "firstName": "Bill",
        "party": "R",
        "district": 4,
        "state": "MI"
      },
      {
        "name": "Tim Walberg",
        "lastName": "Walberg",
        "firstName": "Tim",
        "party": "R",
        "district": 5,
        "state": "MI"
      },
      {
        "name": "Debbie Dingell",
        "lastName": "Dingell",
        "firstName": "Debbie",
        "party": "D",
        "district": 6,
        "state": "MI"
      },
      {
        "name": "Tom Barrett",
        "lastName": "Barrett",
        "firstName": "Tom",
        "party": "R",
        "district": 7,
        "state": "MI"
      },
      {
        "name": "Kristen McDonald Rivet",
        "lastName": "McDonald Rivet",
        "firstName": "Kristen",
        "party": "D",
        "district": 8,
        "state": "MI"
      },
      {
        "name": "Lisa C. McClain",
        "lastName": "McClain",
        "firstName": "Lisa",
        "party": "R",
        "district": 9,
        "state": "MI"
      },
      {
        "name": "John James",
        "lastName": "James",
        "firstName": "John",
        "party": "R",
        "district": 10,
        "state": "MI"
      },
      {
        "name": "Haley M. Stevens",
        "lastName": "Stevens",
        "firstName": "Haley",
        "party": "D",
        "district": 11,
        "state": "MI"
      },
      {
        "name": "Rashida Tlaib",
        "lastName": "Tlaib",
        "firstName": "Rashida",
        "party": "D",
        "district": 12,
        "state": "MI"
      },
      {
        "name": "Shri Thanedar",
        "lastName": "Thanedar",
        "firstName": "Shri",
        "party": "D",
        "district": 13,
        "state": "MI"
      }
    ],
    "senators": [
      {
        "name": "Gary C. Peters",
        "lastName": "Peters",
        "firstName": "Gary",
        "party": "D",
        "state": "MI"
      },
      {
        "name": "Elissa Slotkin",
        "lastName": "Slotkin",
        "firstName": "Elissa",
        "party": "D",
        "state": "MI"
      }
    ]
  },
  "OH": {
    "representatives": [
      {
        "name": "Greg Landsman",
        "lastName": "Landsman",
        "firstName": "Greg",
        "party": "D",
        "district": 1,
        "state": "OH"
      },
      {
        "name": "David J. Taylor",
        "lastName": "Taylor",
        "firstName": "David",
        "party": "R",
        "district": 2,
        "state": "OH"
      },
      {
        "name": "Joyce Beatty",
        "lastName": "Beatty",
        "firstName": "Joyce",
        "party": "D",
        "district": 3,
        "state": "OH"
      },
      {
        "name": "Jim Jordan",
        "lastName": "Jordan",
        "firstName": "Jim",
        "party": "R",
        "district": 4,
        "state": "OH"
      },
      {
        "name": "Robert E. Latta",
        "lastName": "Latta",
        "firstName": "Robert",
        "party": "R",
        "district": 5,
        "state": "OH"
      },
      {
        "name": "Michael A. Rulli",
        "lastName": "Rulli",
        "firstName": "Michael",
        "party": "R",
        "district": 6,
        "state": "OH"
      },
      {
        "name": "Max L. Miller",
        "lastName": "Miller",
        "firstName": "Max",
        "party": "R",
        "district": 7,
        "state": "OH"
      },
      {
        "name": "Warren Davidson",
        "lastName": "Davidson",
        "firstName": "Warren",
        "party": "R",
        "district": 8,
        "state": "OH"
      },
      {
        "name": "Marcy Kaptur",
        "lastName": "Kaptur",
        "firstName": "Marcy",
        "party": "D",
        "district": 9,
        "state": "OH"
      },
      {
        "name": "Michael R. Turner",
        "lastName": "Turner",
        "firstName": "Michael",
        "party": "R",
        "district": 10,
        "state": "OH"
      },
      {
        "name": "Shontel M. Brown",
        "lastName": "Brown",
        "firstName": "Shontel",
        "party": "D",
        "district": 11,
        "state": "OH"
      },
      {
        "name": "Troy Balderson",
        "lastName": "Balderson",
        "firstName": "Troy",
        "party": "R",
        "district": 12,
        "state": "OH"
      },
      {
        "name": "Emilia Strong Sykes",
        "lastName": "Sykes",
        "firstName": "Emilia",
        "party": "D",
        "district": 13,
        "state": "OH"
      },
      {
        "name": "David P. Joyce",
        "lastName": "Joyce",
        "firstName": "David",
        "party": "R",
        "district": 14,
        "state": "OH"
      },
      {
        "name": "Mike Carey",
        "lastName": "Carey",
        "firstName": "Mike",
        "party": "R",
        "district": 15,
        "state": "OH"
      }
    ],
    "senators": [
      {
        "name": "Bernie Moreno",
        "lastName": "Moreno",
        "firstName": "Bernie",
        "party": "R",
        "state": "OH"
      },
      {
        "name": "Jon Husted",
        "lastName": "Husted",
        "firstName": "Jon",
        "party": "R",
        "state": "OH"
      }
    ]
  },
  "MA": {
    "representatives": [
      {
        "name": "Richard E. Neal",
        "lastName": "Neal",
        "firstName": "Richard",
        "party": "D",
        "district": 1,
        "state": "MA"
      },
      {
        "name": "James P. McGovern",
        "lastName": "McGovern",
        "firstName": "James",
        "party": "D",
        "district": 2,
        "state": "MA"
      },
      {
        "name": "Lori Trahan",
        "lastName": "Trahan",
        "firstName": "Lori",
        "party": "D",
        "district": 3,
        "state": "MA"
      },
      {
        "name": "Jake Auchincloss",
        "lastName": "Auchincloss",
        "firstName": "Jake",
        "party": "D",
        "district": 4,
        "state": "MA"
      },
      {
        "name": "Katherine M. Clark",
        "lastName": "Clark",
        "firstName": "Katherine",
        "party": "D",
        "district": 5,
        "state": "MA"
      },
      {
        "name": "Seth Moulton",
        "lastName": "Moulton",
        "firstName": "Seth",
        "party": "D",
        "district": 6,
        "state": "MA"
      },
      {
        "name": "Ayanna Pressley",
        "lastName": "Pressley",
        "firstName": "Ayanna",
        "party": "D",
        "district": 7,
        "state": "MA"
      },
      {
        "name": "Stephen F. Lynch",
        "lastName": "Lynch",
        "firstName": "Stephen",
        "party": "D",
        "district": 8,
        "state": "MA"
      },
      {
        "name": "William R. Keating",
        "lastName": "Keating",
        "firstName": "William",
        "party": "D",
        "district": 9,
        "state": "MA"
      }
    ],
    "senators": [
      {
        "name": "Edward J. Markey",
        "lastName": "Markey",
        "firstName": "Edward",
        "party": "D",
        "state": "MA"
      },
      {
        "name": "Elizabeth Warren",
        "lastName": "Warren",
        "firstName": "Elizabeth",
        "party": "D",
        "state": "MA"
      }
    ]
  },
  "PA": {
    "representatives": [
      {
        "name": "Brian K. Fitzpatrick",
        "lastName": "Fitzpatrick",
        "firstName": "Brian",
        "party": "R",
        "district": 1,
        "state": "PA"
      },
      {
        "name": "Brendan F. Boyle",
        "lastName": "Boyle",
        "firstName": "Brendan",
        "party": "D",
        "district": 2,
        "state": "PA"
      },
      {
        "name": "Dwight Evans",
        "lastName": "Evans",
        "firstName": "Dwight",
        "party": "D",
        "district": 3,
        "state": "PA"
      },
      {
        "name": "Madeleine Dean",
        "lastName": "Dean",
        "firstName": "Madeleine",
        "party": "D",
        "district": 4,
        "state": "PA"
      },
      {
        "name": "Mary Gay Scanlon",
        "lastName": "Scanlon",
        "firstName": "Mary",
        "party": "D",
        "district": 5,
        "state": "PA"
      },
      {
        "name": "Chrissy Houlahan",
        "lastName": "Houlahan",
        "firstName": "Chrissy",
        "party": "D",
        "district": 6,
        "state": "PA"
      },
      {
        "name": "Ryan Mackenzie",
        "lastName": "Mackenzie",
        "firstName": "Ryan",
        "party": "R",
        "district": 7,
        "state": "PA"
      },
      {
        "name": "Robert P. Bresnahan, Jr.",
        "lastName": "Bresnahan",
        "firstName": "Robert",
        "party": "R",
        "district": 8,
        "state": "PA"
      },
      {
        "name": "Daniel Meuser",
        "lastName": "Meuser",
        "firstName": "Daniel",
        "party": "R",
        "district": 9,
        "state": "PA"
      },
      {
        "name": "Scott Perry",
        "lastName": "Perry",
        "firstName": "Scott",
        "party": "R",
        "district": 10,
        "state": "PA"
      },
      {
        "name": "Lloyd Smucker",
        "lastName": "Smucker",
        "firstName": "Lloyd",
        "party": "R",
        "district": 11,
        "state": "PA"
      },
      {
        "name": "Summer L. Lee",
        "lastName": "Lee",
        "firstName": "Summer",
        "party": "D",
        "district": 12,
        "state": "PA"
      },
      {
        "name": "John Joyce",
        "lastName": "Joyce",
        "firstName": "John",
        "party": "R",
        "district": 13,
        "state": "PA"
      },
      {
        "name": "Guy Reschenthaler",
        "lastName": "Reschenthaler",
        "firstName": "Guy",
        "party": "R",
        "district": 14,
        "state": "PA"
      },
      {
        "name": "Glenn Thompson",
        "lastName": "Thompson",
        "firstName": "Glenn",
        "party": "R",
        "district": 15,
        "state": "PA"
      },
      {
        "name": "Mike Kelly",
        "lastName": "Kelly",
        "firstName": "Mike",
        "party": "R",
        "district": 16,
        "state": "PA"
      },
      {
        "name": "Christopher R. Deluzio",
        "lastName": "Deluzio",
        "firstName": "Chris",
        "party": "D",
        "district": 17,
        "state": "PA"
      }
    ],
    "senators": [
      {
        "name": "John Fetterman",
        "lastName": "Fetterman",
        "firstName": "John",
        "party": "D",
        "state": "PA"
      },
      {
        "name": "David McCormick",
        "lastName": "McCormick",
        "firstName": "Dave",
        "party": "R",
        "state": "PA"
      }
    ]
  },
  "UT": {
    "representatives": [
      {
        "name": "Blake D. Moore",
        "lastName": "Moore",
        "firstName": "Blake",
        "party": "R",
        "district": 1,
        "state": "UT"
      },
      {
        "name": "Celeste Maloy",
        "lastName": "Maloy",
        "firstName": "Celeste",
        "party": "R",
        "district": 2,
        "state": "UT"
      },
      {
        "name": "Mike Kennedy",
        "lastName": "Kennedy",
        "firstName": "Mike",
        "party": "R",
        "district": 3,
        "state": "UT"
      },
      {
        "name": "Burgess Owens",
        "lastName": "Owens",
        "firstName": "Clarence",
        "party": "R",
        "district": 4,
        "state": "UT"
      }
    ],
    "senators": [
      {
        "name": "Mike Lee",
        "lastName": "Lee",
        "firstName": "Mike",
        "party": "R",
        "state": "UT"
      },
      {
        "name": "John R. Curtis",
        "lastName": "Curtis",
        "firstName": "John",
        "party": "R",
        "state": "UT"
      }
    ]
  },
  "KS": {
    "representatives": [
      {
        "name": "Tracey Mann",
        "lastName": "Mann",
        "firstName": "Tracey",
        "party": "R",
        "district": 1,
        "state": "KS"
      },
      {
        "name": "Derek Schmidt",
        "lastName": "Schmidt",
        "firstName": "Derek",
        "party": "R",
        "district": 2,
        "state": "KS"
      },
      {
        "name": "Sharice Davids",
        "lastName": "Davids",
        "firstName": "Sharice",
        "party": "D",
        "district": 3,
        "state": "KS"
      },
      {
        "name": "Ron Estes",
        "lastName": "Estes",
        "firstName": "Ron",
        "party": "R",
        "district": 4,
        "state": "KS"
      }
    ],
    "senators": [
      {
        "name": "Jerry Moran",
        "lastName": "Moran",
        "firstName": "Jerry",
        "party": "R",
        "state": "KS"
      },
      {
        "name": "Roger Marshall",
        "lastName": "Marshall",
        "firstName": "Roger",
        "party": "R",
        "state": "KS"
      }
    ]
  },
  "AK": {
    "representatives": [
      {
        "name": "Nicholas J. Begich III",
        "lastName": "Begich",
        "firstName": "Nicholas",
        "party": "R",
        "district": 0,
        "state": "AK"
      }
    ],
    "senators": [
      {
        "name": "Lisa Murkowski",
        "lastName": "Murkowski",
        "firstName": "Lisa",
        "party": "R",
        "state": "AK"
      },
      {
        "name": "Dan Sullivan",
        "lastName": "Sullivan",
        "firstName": "Dan",
        "party": "R",
        "state": "AK"
      }
    ]
  },
  "DC": {
    "representatives": [
      {
        "name": "Eleanor Holmes Norton",
        "lastName": "Norton",
        "firstName": "Eleanor",
        "party": "D",
        "district": 0,
        "state": "DC"
      }
    ],
    "senators": []
  },
  "NJ": {
    "representatives": [
      {
        "name": "Donald Norcross",
        "lastName": "Norcross",
        "firstName": "Donald",
        "party": "D",
        "district": 1,
        "state": "NJ"
      },
      {
        "name": "Jefferson Van Drew",
        "lastName": "Van Drew",
        "firstName": "Jefferson",
        "party": "R",
        "district": 2,
        "state": "NJ"
      },
      {
        "name": "Herbert C. Conaway, Jr.",
        "lastName": "Conaway",
        "firstName": "Herbert",
        "party": "D",
        "district": 3,
        "state": "NJ"
      },
      {
        "name": "Christopher H. Smith",
        "lastName": "Smith",
        "firstName": "Christopher",
        "party": "R",
        "district": 4,
        "state": "NJ"
      },
      {
        "name": "Josh Gottheimer",
        "lastName": "Gottheimer",
        "firstName": "Josh",
        "party": "D",
        "district": 5,
        "state": "NJ"
      },
      {
        "name": "Frank Pallone, Jr.",
        "lastName": "Pallone",
        "firstName": "Frank",
        "party": "D",
        "district": 6,
        "state": "NJ"
      },
      {
        "name": "Thomas H. Kean, Jr.",
        "lastName": "Kean",
        "firstName": "Thomas",
        "party": "R",
        "district": 7,
        "state": "NJ"
      },
      {
        "name": "Robert Menendez",
        "lastName": "Menendez",
        "firstName": "Robert",
        "party": "D",
        "district": 8,
        "state": "NJ"
      },
      {
        "name": "Nellie Pou",
        "lastName": "Pou",
        "firstName": "Nellie",
        "party": "D",
        "district": 9,
        "state": "NJ"
      },
      {
        "name": "LaMonica McIver",
        "lastName": "McIver",
        "firstName": "LaMonica",
        "party": "D",
        "district": 10,
        "state": "NJ"
      },
      {
        "name": "Mikie Sherrill",
        "lastName": "Sherrill",
        "firstName": "Mikie",
        "party": "D",
        "district": 11,
        "state": "NJ"
      },
      {
        "name": "Bonnie Watson Coleman",
        "lastName": "Watson Coleman",
        "firstName": "Bonnie",
        "party": "D",
        "district": 12,
        "state": "NJ"
      }
    ],
    "senators": [
      {
        "name": "Cory A. Booker",
        "lastName": "Booker",
        "firstName": "Cory",
        "party": "D",
        "state": "NJ"
      },
      {
        "name": "Andy Kim",
        "lastName": "Kim",
        "firstName": "Andy",
        "party": "D",
        "state": "NJ"
      }
    ]
  },
  "NE": {
    "representatives": [
      {
        "name": "Mike Flood",
        "lastName": "Flood",
        "firstName": "Mike",
        "party": "R",
        "district": 1,
        "state": "NE"
      },
      {
        "name": "Don Bacon",
        "lastName": "Bacon",
        "firstName": "Don",
        "party": "R",
        "district": 2,
        "state": "NE"
      },
      {
        "name": "Adrian Smith",
        "lastName": "Smith",
        "firstName": "Adrian",
        "party": "R",
        "district": 3,
        "state": "NE"
      }
    ],
    "senators": [
      {
        "name": "Deb Fischer",
        "lastName": "Fischer",
        "firstName": "Deb",
        "party": "R",
        "state": "NE"
      },
      {
        "name": "Pete Ricketts",
        "lastName": "Ricketts",
        "firstName": "Pete",
        "party": "R",
        "state": "NE"
      }
    ]
  },
  "SD": {
    "representatives": [
      {
        "name": "Dusty Johnson",
        "lastName": "Johnson",
        "firstName": "Dusty",
        "party": "R",
        "district": 0,
        "state": "SD"
      }
    ],
    "senators": [
      {
        "name": "John Thune",
        "lastName": "Thune",
        "firstName": "John",
        "party": "R",
        "state": "SD"
      },
      {
        "name": "Mike Rounds",
        "lastName": "Rounds",
        "firstName": "Mike",
        "party": "R",
        "state": "SD"
      }
    ]
  },
  "NV": {
    "representatives": [
      {
        "name": "Dina Titus",
        "lastName": "Titus",
        "firstName": "Dina",
        "party": "D",
        "district": 1,
        "state": "NV"
      },
      {
        "name": "Mark E. Amodei",
        "lastName": "Amodei",
        "firstName": "Mark",
        "party": "R",
        "district": 2,
        "state": "NV"
      },
      {
        "name": "Susie Lee",
        "lastName": "Lee",
        "firstName": "Susie",
        "party": "D",
        "district": 3,
        "state": "NV"
      },
      {
        "name": "Steven Horsford",
        "lastName": "Horsford",
        "firstName": "Steven",
        "party": "D",
        "district": 4,
        "state": "NV"
      }
    ],
    "senators": [
      {
        "name": "Catherine Cortez Masto",
        "lastName": "Cortez Masto",
        "firstName": "Catherine",
        "party": "D",
        "state": "NV"
      },
      {
        "name": "Jacky Rosen",
        "lastName": "Rosen",
        "firstName": "Jacky",
        "party": "D",
        "state": "NV"
      }
    ]
  },
  "MT": {
    "representatives": [
      {
        "name": "Ryan K. Zinke",
        "lastName": "Zinke",
        "firstName": "Ryan",
        "party": "R",
        "district": 1,
        "state": "MT"
      },
      {
        "name": "Troy Downing",
        "lastName": "Downing",
        "firstName": "Troy",
        "party": "R",
        "district": 2,
        "state": "MT"
      }
    ],
    "senators": [
      {
        "name": "Steve Daines",
        "lastName": "Daines",
        "firstName": "Steve",
        "party": "R",
        "state": "MT"
      },
      {
        "name": "Tim Sheehy",
        "lastName": "Sheehy",
        "firstName": "Tim",
        "party": "R",
        "state": "MT"
      }
    ]
  },
  "VI": {
    "representatives": [
      {
        "name": "Stacey E. Plaskett",
        "lastName": "Plaskett",
        "firstName": "Stacey",
        "party": "D",
        "district": 0,
        "state": "VI"
      }
    ],
    "senators": []
  },
  "AS": {
    "representatives": [
      {
        "name": "Aumua Amata Coleman Radewagen",
        "lastName": "Radewagen",
        "firstName": "Aumua Amata",
        "party": "R",
        "district": 0,
        "state": "AS"
      }
    ],
    "senators": []
  },
  "GU": {
    "representatives": [
      {
        "name": "James C. Moylan",
        "lastName": "Moylan",
        "firstName": "James (Jim)",
        "party": "R",
        "district": 0,
        "state": "GU"
      }
    ],
    "senators": []
  },
  "MP": {
    "representatives": [
      {
        "name": "Kimberlyn King-Hinds",
        "lastName": "King-Hinds",
        "firstName": "Kimberlyn",
        "party": "R",
        "district": 0,
        "state": "MP"
      }
    ],
    "senators": []
  },
  "PR": {
    "representatives": [
      {
        "name": "Pablo José Hernández",
        "lastName": "Hernández Rivera",
        "firstName": "Pablo José",
        "party": "D",
        "district": 0,
        "state": "PR"
      }
    ],
    "senators": []
  }
};

// State name mapping
export const STATE_NAMES: Record<string, string> = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'DC': 'District of Columbia'
};
