const seeds = (ref) => {
  let seeds = {
    item1 : {title :'laundry', dueDate: '10/3/2019', importance: 1, category: 'household', completed : 0},
    item2 : {title :'schedule meeting', dueDate: '18/3/2019', importance: 1, category: 'pro', completed : 0},
    item3 : {title :'prepare DnD', dueDate: '12/3/2019', importance: 0, category: 'social', completed : 0},
    item4 : {title :'cook', dueDate: '24/3/2019', importance: 0, category: 'household', completed : 0},
    item5 : {title :'programming', dueDate: '21/3/2019', importance: 1, category: 'pro', completed : 0},
  }

  for(let seed in seeds) {
    ref.push(seeds[seed])
  }
}

export { seeds }