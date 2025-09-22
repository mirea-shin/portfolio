let FAKE_ABOUT = [
  {
    id: 1,
    title: 'About Me v3',
    content: "<p>Hi, I'm Mirea, a frontend developer...</p>",
    isFeatured: true,
    createdAt: '2025-09-22T16:00:00Z',
    updatedAt: '2025-09-22T16:20:00Z',
  },

  {
    id: 2,
    title: 'About Me v4',
    content: "<h1>Hi, I'm Mirea, a frontend developer!!!!!</h1>",
    isFeatured: false,
    createdAt: '2025-09-22T17:00:00Z',
    updatedAt: '2025-09-22T17:20:00Z',
  },
];

export const findAll = () => FAKE_ABOUT;

export const findById = (id: string) =>
  FAKE_ABOUT.find((about) => about.id === Number(id));

export const getFeatured = () =>
  FAKE_ABOUT.find((about) => about.isFeatured === true);

export const create = (parsedData: { content: string; title: string }) => {
  const newAbout = {
    ...parsedData,
    id: FAKE_ABOUT.length + 1,
    isFeatured: false,
    createdAt: new Date().toISOString(),
    updatedAt: '',
  };

  FAKE_ABOUT.push(newAbout);

  return newAbout;
};

export const setFeatured = (id: string) => {
  let selectedAbout;

  FAKE_ABOUT = FAKE_ABOUT.map((about) => {
    if (about.id === Number(id)) {
      selectedAbout = {
        ...about,
        isFeatured: true,
        updatedAt: new Date().toISOString(),
      };
      return selectedAbout;
    } else {
      return about.isFeatured
        ? { ...about, isFeatured: false, updatedAt: new Date().toISOString() }
        : about;
    }
  });
  return selectedAbout;
};

export const update = (
  id: string,
  parsedData: { content: string; title: string }
) => {
  let updatedAbout;

  FAKE_ABOUT = FAKE_ABOUT.map((about) => {
    if (about.id === Number(id)) {
      updatedAbout = {
        ...parsedData,
        ...about,
        updatedAt: new Date().toISOString(),
      };
      return updatedAbout;
    } else {
      return about;
    }
  });

  return updatedAbout;
};

export const remove = (id: string) => {
  FAKE_ABOUT = FAKE_ABOUT.filter((about) => about.id !== Number(id));
};
