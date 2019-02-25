const seeds = (ref) => {
  let seeds = {
    item1 : {name :'laundry', dueDate: '10/3/2019', importance: 1, parent: 'household', completed : 0},
    item2 : {name :'schedule meeting', dueDate: '18/3/2019', importance: 1, parent: 'pro', completed : 0},
    item3 : {name :'prepare DnD', dueDate: '12/3/2019', importance: 0, parent: 'social', completed : 0},
    item4 : {name :'cook', dueDate: '24/3/2019', importance: 0, parent: 'household', completed : 0},
    item5 : {name :'programming', dueDate: '21/3/2019', importance: 1, parent: 'pro', completed : 0},
  }

  for(let seed in seeds) {
    ref.push(seeds[seed])
  }
}

export { seeds }