const men = [
  {
    name: "zack",
    age: 26,
    role: "dev",
    skillset: 'css',
  },
  {
    name: "ashik",
    age: 23,
    role: "designer",
    skillset: 'css',
  },
  {
    name: "mik",
    age: 26,
    role: "dev",
    skillset: 'css',
  },
  {
    name: "nu",
    age: 22,
    role: "manager",
    skillset: 'css',
  },
];

const cond = {
  age : [22, 26],
  role : ['dev', 'manager', 'designer'],
  skillset: ['js', 'css'],
  children: []
}

const filterMen = () => {
  const entriesFromCond = Object.entries(cond);
  const orderedCond = Object.fromEntries(entriesFromCond.sort((a, b) => b[1].length - a[1].length))

  let filteredByAge = []
  orderedCond.age.forEach(age => {
    men.forEach(person => {
      if(person.age === age) filteredByAge.push(person)
    })
  })
  let filteredByAgeandRole = []
  orderedCond.role.forEach(role => {
    filteredByAge.forEach(person => {
      if(person.role === role) filteredByAgeandRole.push(person)
    })
  })
  let filteredByAgeandRoleandSkillset = []
  if(orderedCond.skillset.length > 0) {
    orderedCond.skillset.forEach(skillset => {
      filteredByAgeandRole.forEach(person => {
        if(person.skillset === skillset) filteredByAgeandRoleandSkillset.push(person)
      })
    })
  } else filteredByAgeandRoleandSkillset = filteredByAgeandRole;

  console.log(filteredByAgeandRoleandSkillset);

  // for(let prop in cond) {
  //   cond[prop].forEach(item => {
  //     men.forEach(person => {
  //       if(person[prop] == item) filteredPersons.add(person)
  //     })
  //   })
  // }

  // console.log(Array.from(filteredPersons));
}

filterMen();
