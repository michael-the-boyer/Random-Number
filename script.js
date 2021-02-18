document.getElementById('button').addEventListener('click', epicFunction)

function epicFunction () {
  let userguess = document.getElementById('userinput').value
  userguess = parseInt(userguess)
  const randomnum = Math.floor(Math.random() * 6) + 1
  if (userguess === randomnum) {
    alert('Haha! I guessed your number. It was ' + userguess + '!')
  } else if (userguess > 6) {
    alert('Come on man, I said 1 to 6!')
  } else {
    alert('Dang it, I thought it was ' + randomnum + '.')
  }
}
