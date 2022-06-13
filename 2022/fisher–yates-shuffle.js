// https://cnblogs.com/z-sm/p/12393211.html

const getRand = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
}

const swap = (numList, i, j) => {
  const temp = numList[i];
  numList[i] = numList[j];
  numList[j] = temp;
}

const shuffle = (numList = []) => {
  for (let i = 0; i < numList.length; i++) {
    const randomIndex = getRand(i, numList.length - 1);
    swap(numList, i, randomIndex);
  }

  return numList;
}
