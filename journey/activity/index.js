fetch('content/list.json')
    .then(res => res.json())
    .then(body => console.log(body))