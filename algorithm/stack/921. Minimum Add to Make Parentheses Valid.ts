function minAddToMakeValid(S: string): number {
  //'()))(('
  if (!S.length) return 0
  if (S.length === 1) return 1
  let stack = []
  for(let i = 0; i< S.length; i++){
    if(S[i] === ')' && stack[stack.length -1] === '(') stack.pop()
    else stack.push(S[i])
  }
  return stack.length
};