let period1 = [
  {name: 'Jeff', level: 1},
  {name: 'Lindsay', level: 3},
  {name: 'Arkansas', level: 2},
  {name: 'Kansas', level: 1},
  {name: 'Alabama', level: 3},
  {name: 'Texas', level: 2},
  {name: 'West Virginia', level: 2},
  {name: 'Baked Alaska', level: 2},
  {name: 'Arizona', level: 2},
  {name: 'Washington', level: 3},
  {name: 'New York', level: 1},
  {name: 'Dakota', level: 2},
  {name: 'Ashton', level: 2},
  {name: 'Kiera', level: 2},
  {name: 'Hans', level: 2},
  {name: 'Chamra', level: 3},
  {name: 'Gollum', level: 2}
];

function addRandomSortNumber(array) {
  array.map(function (student) {
    student.sortNumber = Math.random();
  });
  return array;
};

function addLeveledSortNumber(array) {
  array.map(function (student) {
    student.sortNumber = student.level + Math.random();
  });
  return array;
}

function addOrderedSortNumber(array) {
  let i = 0;
  array.map(function (student) {
    student.sortNumber = i;
    i++;
  });
  return array;
}

function sort(array) {
  array.sort(function (a, b) {
    return a.sortNumber - b.sortNumber;
  });

  return array;
};

function arrayOfNames(array) {
  let nameArray = [];
  array.forEach(function (student) {
    nameArray.push(student.name);
  });
  return nameArray;
};

function group(array, size) {
  let newArray = [];
  newArray.push(array.slice(0, size));
  for (let i = size, len = array.length; i < len; i = i + size) {
    newArray.push(array.slice(i, i + size));
  }
  if (array.length % size === 0) {
    return newArray;
  } else {
    let t = 0;
    do {
      let i = newArray.length - 1, j = i - 1, h = size - 1;
      do {
        newArray[i].unshift(newArray[j][h]);
        newArray[j].pop();
        i--;
        j--;
      } while (j >= t);
        t++;
    } while (newArray[newArray.length - 1].length < size - 1);
    return newArray;
  }

};

function orderedGroups(array, size) {
  addOrderedSortNumber(array);
  sort(array);
  let nameArray = arrayOfNames(array);
  console.log(group(nameArray, size));
}

function randomGroups(array, size) {
  addRandomSortNumber(array);
  sort(array);
  let nameArray = arrayOfNames(array);
  console.log(group(nameArray, size));
}

function leveledGroups(array, size) {
  addLeveledSortNumber(array);
  sort(array);
  let nameArray = arrayOfNames(array);
  console.log(group(nameArray, size));
}

orderedGroups(period1, 5);
console.log('------------');
randomGroups(period1, 5);
console.log('------------');
leveledGroups(period1, 5);
