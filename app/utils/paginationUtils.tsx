const countStartingIndex = (page: number, limit: number) => {
  return (page - 1) * limit;
};

export default { countStartingIndex };
