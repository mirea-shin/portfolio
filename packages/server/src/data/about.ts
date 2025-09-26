import { AboutRequest } from 'shared';

let FAKE_ABOUT = [
  {
    id: '1',
    title: 'About Me v3',
    content: "Hi, I'm Mirea, a frontend developer..",
    isFeatured: true,
    createdAt: '2025-09-22T16:00:00Z',
    updatedAt: '2025-09-22T16:20:00Z',
  },

  {
    id: '2',
    title: 'About Me v4',
    content: "Hi, I'm Mirea, a frontend developer!!!!!",
    isFeatured: false,
    createdAt: '2025-09-22T17:00:00Z',
    updatedAt: '2025-09-22T17:20:00Z',
  },
];

export const findAll = () => FAKE_ABOUT;

export const findById = (id: string) =>
  FAKE_ABOUT.find((about) => about.id === id);

export const getFeatured = () =>
  FAKE_ABOUT.find((about) => about.isFeatured === true);

export const create = (parsedData: AboutRequest) => {
  const newAbout = {
    ...parsedData,
    id: (FAKE_ABOUT.length + 1).toString(),
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
    if (about.id === id) {
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

export const update = (id: string, parsedData: AboutRequest) => {
  let updatedAbout;

  console.log(parsedData);
  FAKE_ABOUT = FAKE_ABOUT.map((about) => {
    if (about.id === id) {
      updatedAbout = {
        ...about,
        ...parsedData,
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
  FAKE_ABOUT = FAKE_ABOUT.filter((about) => about.id !== id);
};
