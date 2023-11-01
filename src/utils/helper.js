export const filterData = (allRestaurants, searchInput) => {
  const filterData = allRestaurants.filter((each) =>
    each?.info?.name?.toLowerCase()?.includes(searchInput?.toLowerCase())
  );
  return filterData;
};
