function cleanSet(inputSet, startString) {
  let result = "";
  for (let item of inputSet) {
    if (item.startsWith(startString)) {
      result += item.substring(startString.length) + "-";
    }
  }
  return result.slice(0, -1);
}
