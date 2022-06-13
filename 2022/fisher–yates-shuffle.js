// https://cnblogs.com/z-sm/p/12393211.html

const getRand = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
}

const swap = (numList, i, j) => {
  const temp = numList[i];
  numList[i] = numList[j];
  numList[j] = temp;
}

/**
 * Fisher–Yates shuffle 算法随机
 * 其实和每次随机从原始数组选一个，然后加入到新数组的思路是一模一样的
 * @param {number[]} numList 原始数组
 * @returns 随机后的数组
 */
const shuffle = (numList = []) => {
  for (let i = 0; i < numList.length; i++) {
    const randomIndex = getRand(i, numList.length - 1);
    swap(numList, i, randomIndex);
  }

  return numList;
}
