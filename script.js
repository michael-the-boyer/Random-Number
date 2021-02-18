document.getElementById('button').addEventListener('click', epicFunction)



function epicFunction( ){
  let userguess = document.getElementById('userinput').value
  userguess = parseInt(userguess)
  let randomnum = Math.floor(Math.random() * 6) + 1
  if (userguess == randomnum) {
    alert('Haha! I guessed your number. It was ' + userguess + '!')
  } else {
    alert('Dang it, I thought it was ' + randomnum + '.')
  }
}
