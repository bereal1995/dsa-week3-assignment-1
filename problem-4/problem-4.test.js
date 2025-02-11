const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

const shellSort = (array) => {
  const { length } = array;

  let h = 1;
  while (h < Math.floor(length / 3)) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    for (let i = h; i < length; i++) {
      for (let j = i; j >= 0; j = j - h) {
        if (array[j] < array[j - h]) {
          swap(array, j, j - h);
        } else {
          break;
        }
      }
    }

    h = Math.floor(h / 3);
  }
};

test.each([
  [[24, 20, 19, 19, 18, 16, 15, 13, 12, 12, 12, 8, 5, 5, 5, 1]],
  [[1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24]],
  [[19, 8, 5, 12, 12, 19, 15, 18, 20, 5, 24, 1, 13, 16, 12, 5]],
])('주어진 배열을 오름차순으로 정렬한다', (array) => {
  shellSort(array);

  expect(array).toEqual([
    1, 5, 5, 5, 8, 12, 12, 12, 13, 15, 16, 18, 19, 19, 20, 24,
  ]);
});
