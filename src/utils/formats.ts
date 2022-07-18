const TextCapitalize = (str: string) => {
  str = str.charAt(0).toUpperCase() + str.slice(1);

  return str;
};

export { TextCapitalize };
