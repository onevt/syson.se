const shuffle = array => {
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

export default shuffle([
  {
    name: 'Alexander Hedberg',
    profileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vQWXShOcs8-aZ3i516973hCPjy_N_jvfk0BM5M6LCR3jBbgviCVm9IPpGevjt8ywkzfTIakMnYGRYoT/pub',
    image: '/images/people/alexh.jpg',
    quote: '.NET / JS'
  },
  {
    name: 'Johanna Lagerholm',
    profileUrl:
      'https://docs.google.com/document/d/1FTaXx83ry7rS5vMPMyywwaQ_XqRk-3VBmQV5Pi-7-yc/pub',
    image: '/images/people/johanna.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Leo Danielsson',
    profileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vSxiEc0TSynbc_BFIo2Yr8f-oBzkKkHtYuVcDsNclXb1N3LO0Y5UAahoGoJ2gzJUAF4CIV9YFzJ4RHK/pub',
    image: '/images/people/leo.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Alexander Lissenko',
    profileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vSFPFoMEGbFYSKwNHw1fjbEsEydunSKPyG2BPoIyoaj-4wQ1ARCWV9YnqoRL-_DZu6bkuT3ova-TkCY/pub',
    image: '/images/people/alexander.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Olov Gullikson',
    profileUrl:
      'https://docs.google.com/document/d/e/2PACX-1vQR6JrgxZw2vG9Sc0C9XeuDs59uhXo-7edCIN_7PpYDPCJNDUid9a3McxW4OB2TNlWKuJcfBSceRC5I/pub',
    image: '/images/people/olov.jpg',
    quote: '.NET / JS'
  },
  {
    name: 'Anton Söderstedt',
    profileUrl:
      'https://docs.google.com/document/d/1vZeB8Jxe7qM4qVV8wJBM6X2zGvQKCUEhkVY4-vTFGtk/pub',
    image: '/images/people/anton.jpg',
    quote: '.NET / JS'
  },
  {
    name: 'Mikael Larsson',
    profileUrl:
      'https://docs.google.com/document/d/13QeSY4v8b5hOBbZPC3SkdaZqivr-D3sGh4jEj-EUCag/pub',
    image: '/images/people/micke.jpg',
    quote: 'Node / JS / UX'
  },
  {
    name: 'Otto Nordgren',
    profileUrl:
      'https://docs.google.com/document/d/1NwXJjs6DdApM_Qg04mQY8raWkY7IrPeaUxIa64TkIDM/pub',
    image: '/images/people/otto.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Magnus Linell',
    profileUrl:
      'https://docs.google.com/document/d/1aTuje5x5GmgnupA6zcyPqvzm-mRebmGIO_z0JTn_4ao/pub',
    image: '/images/people/magnus.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Katrine Johansson',
    profileUrl:
      'https://docs.google.com/document/d/1TZj2yAhj6acUkCCTEomhN2GXQNFQHp2HRt6ksnaJP2M/pub',
    image: '/images/people/katrine.jpg',
    quote: 'Testautomatisering / Java'
  },
  {
    name: 'David Skog',
    profileUrl:
      'https://docs.google.com/document/d/1ykZhFpRhlcc2CH5JnDdna6fZId4l4stmS78A92BqXh0/pub',
    image: '/images/people/david.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Joakim Gordillo',
    profileUrl:
      'https://docs.google.com/a/syson.se/document/d/1zNxgPpG5LfE35n1OLF3rB6iKIHbZBUCbo__h9wOC2wE/pub',
    image: '/images/people/joakim.jpg',
    quote: 'Node / JS'
  },
  {
    name: 'Patrick Thomsson',
    profileUrl:
      'https://docs.google.com/document/d/1GuaMyViqwnT8Nysba9n3LKW2CBJesuORIiGlY93twqk/pub',
    image: '/images/people/patrick.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Soroush Hakami',
    image: '/images/people/soroush.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/soroush-hakami/',
    quote: 'Sälj / Rekrytering'
  },
  {
    name: 'Love Gehlin',
    profileUrl:
      'https://docs.google.com/document/d/13WyjMVR69WEQ75vV5UPBtdOjLMaqUFTyZLAwPr90Hvk/pub',
    image: '/images/people/love.jpg',
    quote: 'JS / Java'
  },
  {
    name: 'Anders Söderstedt',
    image: '/images/people/anders.jpg',
    linkedInUrl: 'https://www.linkedin.com/in/anders-s%C3%B6derstedt-1631b8/',
    quote: 'Sälj / Rekrytering'
  },
  {
    name: 'Sabina Kosgård',
    image: '/images/people/sabina.jpg',
    profileUrl: 'https://docs.google.com/document/d/e/2PACX-1vRTjqB_pEAps8T-toENZn0y82Q7Xm8Af2uAIn-m1FAgVvMM8a1xFvWhcO6FIcM0T4VQr-L5zi9Cw8h-/pub',
    quote: 'Test & testautomatisering'
  }
]);
