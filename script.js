//Init the segments by numbers - top, mid, bot
let top = {
  0: [' - '],
  1: ['   '],
  2: [' - '],
  3: [' - '],
  4: ['   '],
  5: [' - '],
  6: ['   '],
  7: [' - '],
  8: [' - '],
  9: [' - ']
};

let mid = {
  0: ['| |'],
  1: ['  |'],
  2: [' -|'],
  3: [' -|'],
  4: ['|_|'],
  5: ['|- '],
  6: ['|- '],
  7: ['  |'],
  8: ['|_|'],
  9: ['|_|']
}

let bot = {
  0: ['|_|'],
  1: ['  |'],
  2: ['|- '],
  3: [' -|'],
  4: ['  |'],
  5: [' -|'],
  6: ['|-|'],
  7: ['  |'],
  8: ['|_|'],
  9: [' _|']
}

createSegment = (input) => {
  let result = "";
  let topSect = "";
  let midSect = "";
  let botSect = "";
  for(let num of input.toString()){
    topSect += top[num];
    midSect += mid[num];
    botSect += bot[num];
  };
  result = topSect + '\n' + midSect + '\n' + botSect;
  return result;
};

console.log(createSegment(process.argv[2]));
