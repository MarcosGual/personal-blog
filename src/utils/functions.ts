export const dateTimeToDate = (str: string) => {
  return str.slice(0, 10).split("-").reverse().join("-");
};
