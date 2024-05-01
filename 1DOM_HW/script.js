'use strict';

const activities = [{"name":"Power training","maxmembers":2,"members":0},{"name":"Straching","maxmembers":10,"members":0},{"name":"Workout","maxmembers":6,"members":0},{"name":"Pilates","maxmembers":4,"members":0},{"name":"Boxing","maxmembers":4,"members":0},{"name":"Grappling","maxmembers":4,"members":0}];


const container = document.querySelector('.container');
const activitiesList = container.querySelector('.activities-list');

activities.forEach(element => {
  const activityItem = createActivity(element.name, element.maxmembers, element.members);
  activitiesList.appendChild(activityItem);
});

function createActivity(name, maxmembers, members) {
  const activityItem = document.createElement('li');
  activityItem.classList.add('list-group-item');

  const activityName = document.createElement('h3');
  activityName.classList.add('mb-3');
  activityName.textContent = name;

  const activityMaxMembers = document.createElement('h5');
  activityMaxMembers.textContent = `Max members to participate this activity: ${Number(maxmembers)}`;

  const activityMembers = document.createElement('h4');
  activityMembers.textContent = `Members: ${Number(members)}`;

  const participateButton = document.createElement('button');
  participateButton.textContent = 'Participate';
  participateButton.classList.add('btn', 'btn-primary');

  const unParticipateButton = document.createElement('button');
  unParticipateButton.textContent = 'Unparticipate';  
  unParticipateButton.classList.add('btn', 'btn-danger');

  activityItem.appendChild(activityName);
  activityItem.appendChild(activityMaxMembers);
  activityItem.appendChild(activityMembers);
  activityItem.appendChild(participateButton);
  activityItem.appendChild(unParticipateButton);

  return activityItem;
}

activitiesList.addEventListener('click', function (e) {
  if (e.target.textContent == 'Participate'){
    const activityItem = e.target.closest('li');
    const activityMembers = activityItem.querySelector('h4');
    const tempMembers = Number(activityMembers.textContent.split(': ')[1]);
    const maxMembers =  activityItem.querySelector('h5');
    const tempMaxMembers = Number(maxMembers.textContent.split(': ')[1]);
    if (tempMembers === tempMaxMembers - 1) {
      activityMembers.textContent = `Members: ${tempMembers + 1}`;
      e.target.disabled = true;
    } else if (tempMembers < tempMaxMembers) {
      activityMembers.textContent = `Members: ${tempMembers + 1}`;    
    } else {
      e.target.disabled = true;
    }
  }
  if (e.target.textContent == 'Unparticipate'){
    const activityItem = e.target.closest('li');
    const activityMembers = activityItem.querySelector('h4');
    const tempMembers = Number(activityMembers.textContent.split(': ')[1]);
    if (tempMembers !== 0) {
      activityMembers.textContent = `Members: ${tempMembers - 1}`;
      const previousParticipateButton = e.target.previousElementSibling;
      previousParticipateButton.disabled = false;
    }
  }
});



