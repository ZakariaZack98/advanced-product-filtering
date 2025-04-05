const men = [
  {
    name: "zack",
    age: 26,
    role: "dev",
    skillset: 'a',
  },
  {
    name: "ashik",
    age: 23,
    role: "designer",
    skillset: 'a',
  },
  {
    name: "mik",
    age: 26,
    role: "dev",
    skillset: 'a',
  },
  {
    name: "nu",
    age: 22,
    role: "manager",
    skillset: 'a',
  },
];

const cond = {
  age : [22, 26],
  role : ['dev', 'manager', 'designer'],
  skillset: [],
  children: []
}

const filterMen = () => {
  const filteredMen = men.filter(person => {
    // Iterate over all keys in the cond object
    return Object.keys(cond).every(key => {
      // If the array in cond[key] is empty, skip filtering for this key
      if (cond[key].length === 0) return true;

      // Check if the person's property matches any value in cond[key]
      return cond[key].includes(person[key]);
    });
  });

  return filteredMen;
};

console.log(filterMen());