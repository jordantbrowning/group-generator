let period1List = document.querySelector('.period-1-list');
period1.forEach(teacher => {
  let teacherListItem = document.createElement('li');
  teacherListItem.innerHTML = `<strong>${teacher.name}</strong>, Level: ${teacher.level}`;
  period1List.appendChild(teacherListItem);
});

function populateGrouping(grouping) {
  let groupingElement = document.querySelector('.grouped-teachers');
  groupingElement.innerHTML = ""; // Clear the previous grouping if it exists

  for (let i = 0, len = grouping.length; i < len; i++) {
    // Create the group column
    let groupElement = document.createElement('div');
    groupElement.classList.add('col-6');

    // Create the group header
    let groupHeader = document.createElement('h5');
    groupHeader.innerHTML = `Group ${i + 1}`;
    groupElement.appendChild(groupHeader);

    // Create and populate the group list
    let groupList = document.createElement('ul');
    let group = grouping[i];
    group.forEach(teacher => {
      let groupListItem = document.createElement('li');
      groupListItem.innerHTML = teacher;
      groupList.appendChild(groupListItem);
    });
    groupElement.appendChild(groupList);

    // Append the group column to the parent grouping div
    groupingElement.appendChild(groupElement);
  }
}

// Bind buttons to click event
let perGroupInput = document.querySelector('#per_group');

document.querySelector('.group-by-order').addEventListener('click', e => {
  e.preventDefault();
  let perGroup = Number(perGroupInput.value);
  let orderedGroup = orderedGroups(period1, perGroup);
  populateGrouping(orderedGroup);
});

document.querySelector('.group-by-random').addEventListener('click', e => {
  e.preventDefault();
  let perGroup = Number(perGroupInput.value);
  let randomGroup = randomGroups(period1, perGroup);
  populateGrouping(randomGroup);
});

document.querySelector('.group-by-level').addEventListener('click', e => {
  e.preventDefault();
  let perGroup = Number(perGroupInput.value);
  let leveledGroup = leveledGroups(period1, perGroup);
  populateGrouping(leveledGroup);
});
