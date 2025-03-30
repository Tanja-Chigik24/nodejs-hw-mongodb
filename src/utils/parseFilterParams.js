const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isContactType = (type) => ['work', 'home', 'personal'].includes(type);

  if (isContactType(type)) return type;
};

const parseBoolean = (string) => {
  if (['true', 'false'].includes(string)) return JSON.parse(string);
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;
  const parsedContactType = parseContactType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);
  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
