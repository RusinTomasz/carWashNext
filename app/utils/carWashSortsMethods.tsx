import CarWashType from "../types/CarWash";

const sortByNumberOfComments = (a: CarWashType, b: CarWashType) => {
  if (a.comments.length > b.comments.length) return -1;
  if (a.comments.length < b.comments.length) return 1;
  return 0;
};

export { sortByNumberOfComments };
