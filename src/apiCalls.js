export let fetchUserData = () => {
  return fetch("http://localhost:3001/api/v1/users").then(response => response.json())
}

export let fetchSleepData = () => {
  return fetch("http://localhost:3001/api/v1/sleep").then(response => response.json());
}

export let fetchActivityData = () => {
  return fetch("http://localhost:3001/api/v1/activity").then(response => response.json());
}

export let fetchHydrationData = () => {
  return fetch("http://localhost:3001/api/v1/hydration").then(response => response.json());
}

export let postNewSleepEvent = (newSleepEvent) => {
  return fetch('http://localhost:3001/api/v1/sleep', {
    method: 'POST',
    body: JSON.stringify(newSleepEvent),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .catch(err => showPostErrorMsg(err))
}

export let postNewActivityEvent = (newActivityEvent) => {
  return fetch('http://localhost:3001/api/v1/activity', {
    method: 'POST',
    body: JSON.stringify(newActivityEvent),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
}

export let postNewHydrationEvent = (newHydrationEvent) => {
  return fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    body: JSON.stringify(newHydrationEvent),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
}
