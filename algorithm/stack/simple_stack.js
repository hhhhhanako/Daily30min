// 给一个数组，返回一个大小相同的数组。
// 返回的数组的第i个位置的值应当是，对于原数组中的第i个元素，至少往右走多少步，才能遇到一个比自己大的元素（如果之后没有比自己大的元素，或者已经是最后一个元素，则在返回数组的对应位置放上-1）。

// 简单的例子：

// input: 5,3,1,2,4

// return: -1 3 1 1 -1
function steps(arr) {
  let ret = new Array(arr.length).fill(-1)
  let index_stack = []
  for (let i = 0; i < arr.length; i++) {
    while (
      arr[i] > arr[index_stack[index_stack.length - 1]] &&
      index_stack.length
    ) {
      let index = index_stack.pop()
      ret[index] = i - index
    }
    index_stack.push(i)
  }
  return ret
}
