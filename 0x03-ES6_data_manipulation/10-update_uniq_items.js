function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error("Cannot process");
  }

  const updatedMap = new Map();
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, value);
    }
  }

  return updatedMap;
}
