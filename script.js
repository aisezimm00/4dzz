// User

// Kubanychbek Nazaraliev
// Дз 4. let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ]
// Найдите пользователя у которого id равен 2.

// Доп задание: Отфильтруйте массив так чтобы в нём остались только те пользователи, у которых id больше 1.






let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ]
  
  
  let usser = users.find(user => user.id === 2)
  console.log(usser)
  

  let userfilt = users.filter(user => user.id > 1)
  console.log(userfilt)
  