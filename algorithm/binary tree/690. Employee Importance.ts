
//  Definition for Employee.
class Employee {
  id: number
  importance: number
  subordinates: number[]
  constructor(id: number, importance: number, subordinates: number[]) {
    this.id = (id === undefined) ? 0 : id;
    this.importance = (importance === undefined) ? 0 : importance;
    this.subordinates = (subordinates === undefined) ? [] : subordinates;
  }
}


function getImportance(employees: Employee[], id: number): number {
  let map = new Map()
  employees.forEach(item => {
    map.set(item.id, [item.importance, item.subordinates])
  })
  let res = 0
  let add = id => {
    if (map.has(id)) {
      let cur = map.get(id)
      res += cur[0]
      cur[1].forEach(element => {
        add(element)
      });
    }
  }
  add(id)
  return res
};