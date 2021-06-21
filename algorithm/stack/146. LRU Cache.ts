// class LRUCache {
//   max: number
//   cache: Map<number,number>
//   keys: number[]
//   constructor(capacity: number) {
//     this.max = capacity
//     this.cache = new Map()
//     this.keys = []
//   }

//   get(key: number): number {
//     if(!this.cache.has(key)) return -1
//     this.remove(key)
//     this.keys.push(key)
//     console.log('get keys:',this.keys)
//     console.log('get cache:', this.cache)
//     return this.cache.get(key)
//   }

//   put(key: number, value: number): void {
//     if (this.cache.has(key)) {
//       this.remove(key)
//       this.keys.push(key)
//       this.cache.set(key,value)
//     } else {
//       this.keys.push(key)
//       this.cache.set(key,value)
//       if (this.keys.length > this.max) {
//         let del = this.keys.shift()
//         this.cache.delete(del)
//       }
//     }
//     console.log('put keys:',this.keys)
//     console.log('put cache:', this.cache)
//   }
//   remove(key: number): void {
//     let index = this.keys.indexOf(key)
//     this.keys.splice(index, 1)
//   }
// }

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// The functions get and put must each run in O(1) average time complexity.

// get O(1) hash table
// put O(1) 双向链表

class DoubleDirectionListNode {
  key: number
  val: number
  next: DoubleDirectionListNode | null
  prev: DoubleDirectionListNode | null
  constructor(key?: number, val?: number, prev?: DoubleDirectionListNode | null, next?: DoubleDirectionListNode | null) {
    this.key = (key === undefined ? 0 : key)
    this.val = (val === undefined ? 0 : val)
    this.prev = (prev === undefined ? null : prev)
    this.next = (next === undefined ? null : next)
  }
}
class LRUCache {
  max: number
  size: number
  cache: Map<number, DoubleDirectionListNode>
  headNode: DoubleDirectionListNode | null
  tailNode: DoubleDirectionListNode | null
  constructor(capacity: number) {
    this.max = capacity
    this.size = 0
    this.cache = new Map()
    this.headNode = new DoubleDirectionListNode(-1, -1)
    this.tailNode = new DoubleDirectionListNode(-1, -1)

    this.headNode.prev = this.tailNode
    this.headNode.next = this.tailNode
    this.tailNode.prev = this.headNode
    this.tailNode.next = this.headNode
  }

  get(key: number): number {
    if (!this.cache.has(key)) return -1
    let cur = this.remove(key)
    this.push(cur)
    return cur.val
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.remove(key)
      let node = new DoubleDirectionListNode(key, value)
      this.push(node)
      this.cache.set(key, node)
    } else {
      let node = new DoubleDirectionListNode(key, value)
      this.push(node)
      this.cache.set(key, node)
      this.size++
      if (this.size > this.max) {
        // 删除最少使用的那个节点
        let cur = this.headNode.next
        this.remove(cur.key)
        this.cache.delete(cur.key)
        this.size--
      }
    }

  }
  remove(key: number): DoubleDirectionListNode {
    let cur = this.cache.get(key)
    cur.prev.next = cur.next
    cur.next.prev = cur.prev
    return cur
  }
  push(node: DoubleDirectionListNode) {
    this.tailNode.prev.next = node
    node.prev = this.tailNode.prev
    node.next = this.tailNode
    this.tailNode.prev = node
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/