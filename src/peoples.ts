export interface IPerson {
  index?: number;
  name: string;
  profileUrl?: string;
  linkedInUrl?: string;
  phone?: string;
  /** corresponding to the image file name in the images/people folder */
  image: string;
  quote: string;
  mail?: string;
}

// Perhaps this could be done in a more elegant way
// but importing them all will make them get compressed
const peopleImages = import.meta.glob("./images/people/*.jpg", {
  eager: true,
  import: "default",
});

const shuffle = (array: any[]) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const matchPeopleImage = (people: IPerson[]): IPerson[] => {
  const peopleWithImages = people.map((person, index) => {
    const path = Object.keys(peopleImages).find((path) =>
      path.includes(person.image.toLowerCase())
    );
    return {
      ...person,
      index,
      image: path ? (peopleImages[path] as string) : "",
    };
  });
  return peopleWithImages;
};

export default shuffle(
  matchPeopleImage([
    {
      name: "Johanna Lagerholm",
      profileUrl:
        "https://docs.google.com/document/d/19fDEWBrFH449nJoqzrZkqby3v5AcJ7PYdn4pmUlr07E/edit?usp=sharing",
      image: "johanna.jpg",
      quote: "JS / Java",
    },
    {
      name: "Leo Danielsson",
      profileUrl:
        "https://docs.google.com/document/d/172NvQgKH1xIx-UTDcIwtFDDgKeEYaOn-OFsf4MCiNm8/edit?usp=sharing",
      image: "leo.jpg",
      quote: "JS / React",
    },
    {
      name: "Anton Söderstedt",
      profileUrl:
        "https://docs.google.com/document/d/1mp3L3mIeuixXMV7CpGp_wHiyGcWzOQPJ_GT7zu-sixs/edit?usp=sharing",
      image: "anton.jpg",
      quote: "JS / .NET",
    },
    {
      name: "Katrine Johansson",
      profileUrl:
        "https://docs.google.com/document/d/10vA5JZfqXxqPSt4YuKJXRNWVjs2sQ0fc3-2Y9_dDuts/edit?usp=sharing",
      image: "katrine.jpg",
      quote: "Testautomatisering / Java",
    },
    {
      name: "Soroush Hakami",
      profileUrl:
        "https://docs.google.com/document/d/1zhhJQneniBod_kk54PkmVA6cbL6GabbR5sgHmVkju4o/edit?usp=sharing",
      image: "soroush.jpg",
      phone: "073-047 34 41",
      quote: "JS / React",
    },
    {
      name: "Love Gehlin",
      profileUrl:
        "https://docs.google.com/document/d/1G5nqrnYOWyYFlL1kPp0h4kwzgaqXPl9Cq66-bDQqECE/edit#",
      image: "love.jpg",
      quote: "JS / Java",
    },
    {
      name: "Mattias Ekström",
      image: "mattias.jpg",
      profileUrl:
        "https://docs.google.com/document/d/1_h2Fjb8JxDHs1B1b-ftnSTsH5O_z_UJjo2iATJ8KUFI/edit?usp=sharing",
      quote: "JS / .NET",
    },
    {
      name: "Aram Ghanipour",
      profileUrl:
        "https://docs.google.com/document/d/1MMQOWN8GbvxxQAmD6bisEndDSZVme1B-A2yiF8e5WS0/edit?usp=sharing",
      image: "aram.jpg",
      quote: "JS / .NET",
    },
    {
      name: "Denny Johansson",
      profileUrl:
        "https://docs.google.com/document/d/1annUyp0YVi2rzEDNbcLQL3BTlRAfgyHEtKRTcCJBBbY/edit?usp=sharing",
      image: "denny.jpg",
      quote: "JS / React",
    },
    {
      name: "Olov Gulliksson",
      profileUrl:
        "https://docs.google.com/document/d/1NQ7IQzW8mZMl9iYdsS8JZXPmGzWP6AWrymL-C37bjTA/edit?usp=sharing",
      image: "olov.jpg",
      quote: "JS / .NET",
    },
    {
      name: "Victor Trigo Wagner",
      profileUrl:
        "https://docs.google.com/document/d/1UoNXF-xm-xHoJLp9fibAlq5aw6KwU3Oz8uvFc-4YjCM/edit?usp=sharing",
      image: "victor.jpg",
      quote: "JS / React",
    },
    {
      name: "Gustav Lindberg",
      profileUrl:
        "https://docs.google.com/document/d/1KhtqREPwBCNqAoReT8r1dqZjAGqlZfmgSRyXNecVH-0/edit?usp=sharing",
      image: "gustav.jpg",
      quote: "JS / React",
    },
    {
      name: "Dimitris Thanasis",
      profileUrl:
        "https://docs.google.com/document/d/1eNJre_NsDYioSvKQHmQQMjRHUg52Jd-iZuPg233Ao9g/edit?usp=sharing",
      image: "dimitris.jpg",
      quote: "JS / .NET",
    },
    {
      name: "Edvin Lundberg",
      profileUrl:
        "https://docs.google.com/document/d/1intPOtGY2aNpBjQJ9q6vWDXzk5SIgSxAQzM3Kjj8ucA/edit?usp=sharing",
      image: "edvin.jpg",
      quote: "JS / Java",
    },
    {
      name: "Michaela Bång",
      profileUrl:
        "https://docs.google.com/document/d/1zHAKhsHYDRLgfF9lTrQuT7BOBc97owk1MLKxEPk791Q/edit?usp=sharing",
      image: "michaela.jpg",
      quote: "JS / React",
    },
  ])
);
