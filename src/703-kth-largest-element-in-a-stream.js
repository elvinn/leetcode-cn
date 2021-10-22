// https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/

// 小根堆
class MinHeap {
  constructor () {
    this.heap = []
  }

  size () {
    return this.heap.length
  }

  top () {
    return this.heap[0]
  }

  /**
   * @param {number} val
   */
  add (val) {
    const { heap } = this
    heap.push(val)
    let i = heap.length - 1

    while (true) {
      const nextI = Math.floor((i - 1) / 2)
      if (nextI < 0 || heap[i] >= heap[nextI]) {
        break
      }

      this.swap(i, nextI)
      i = nextI
    }
  }

  remove () {
    const { heap } = this
    const result = heap[0]

    heap[0] = heap.pop()
    const length = heap.length
    let i = 0
    while (i < length) {
      const rightI = 2 * (i + 1)
      const leftI = rightI - 1
      if (rightI >= length || heap[leftI] < heap[rightI]) {
        if (heap[i] > heap[leftI]) {
          this.swap(i, leftI)
          i = leftI
        } else {
          break
        }
      } else {
        if (heap[i] > heap[rightI]) {
          this.swap(i, rightI)
          i = rightI
        } else {
          break
        }
      }
    }

    return result
  }

  swap (i, j) {
    const { heap } = this
    const temp = heap[i]
    heap[i] = heap[j]
    heap[j] = temp
  }
}

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor (k, nums) {
    this.heap = new MinHeap()
    this.k = k

    nums.forEach((num) => {
      this.heap.add(num)
      if (this.heap.size() > k) {
        this.heap.remove()
      }
    })
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add (val) {
    const { k, heap } = this

    heap.add(val)
    if (heap.size() > k) {
      heap.remove()
    }

    return heap.top()
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
