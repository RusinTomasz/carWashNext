// #review

interface Review {
  author: string;
  message: string;
  rate: number;
}

const reviews: Review[] = [
  {
    author: "Tomek Szymek",
    message: "Super myjnia",
    rate: 4,
  },
  { author: "Andrzej Kowalski", message: "Bardzo wporządku myjnia.", rate: 5 },
  { author: "Mirko z Bogdańca", message: "Troche słabo umyli.", rate: 3 },
  {
    author: "Jasiek",
    message: "Beznadzieja, nie wiem kto tu w ogóle przyjeżdza.",
    rate: 1,
  },
  {
    author: "Katerina via El Bella",
    message: "Wszytko było w porządku.",
    rate: 4,
  },
];

export { reviews };
