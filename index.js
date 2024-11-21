// 1
// const totalBalance = users.reduce((sum, user) => sum + user.balance, 0);
// console.log(totalBalance); 

// 2
// const getUsersWithFriend = (friendName) =>
//   users
//     .filter(user => user.friends.some(friend => friend.name === friendName))
//     .map(user => user.name);
// console.log(getUsersWithFriend("Alice"));

// 3
// const sortedByFriendsCount = users
//   .slice()
//   .sort((a, b) => b.friends.length - a.friends.length)
//   .map(user => user.name);
// console.log(sortedByFriendsCount);

// 4
const users = [
    { id: 1, name: "Alice", skills: ["JavaScript", "HTML", "CSS"] },
    { id: 2, name: "Bob", skills: ["Python", "JavaScript", "Django"] },
    { id: 3, name: "Charlie", skills: ["Java", "Spring", "HTML"] },
  ];
  const allSkills = users.flatMap(user => user.skills);
  const uniqueSkills = [...new Set(allSkills)];
  const sortedSkills = uniqueSkills.sort();
  console.log(sortedSkills);
  
