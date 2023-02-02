function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error("Position outside range");
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  return buffer;
}
