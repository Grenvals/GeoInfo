export const getMarkers = (state) => {
  const activeCategories = state.map.categories
    .filter((c) => c.isActive === true)
    .map((c) => c.name);
  return state.map.markers.filter((m) =>
    activeCategories.some((category) => m.category === category)
  );
};

export const getCategories = (state) => {
  return state.map.categories;
};

export const getIsMapActive = (state) => {
  return state.map.isMapActive;
};
