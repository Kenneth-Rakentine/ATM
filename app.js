// let displOut = document.queryselector(".screen");
// let balance = document.queryselector(".balance");

let screen = document.querySelector('.displOut');
let balance = '$5000'



const selectedOption = (text)=>{
  const centerDiv = document.createElement('div')
  centerDiv.classList.add('centerScreen')
  centerDiv.textContent = text
  screen.appendChild(centerDiv)
}




const uploadtoscreen = (number)=>{
  if (screen.innerHTML === '0') {
    screen.innerHTML = number
  } else {
    screen.append(number)
  }
}


const clearScreen = ()=>{
  screen.innerHTML = ''
}


const chkBalance = ()=>{
  screen.innerHTML = ('$' + balance)
}


// const showDep ()=>{
//   centerDiv.classlist('depositBoxes')
// }

const chkBalanceBtn = ()=>{
  screen.innerHTML = (balance)
}




const showDep = ()=>{
  clearScreen()
  selectedOption()

  const centerDiv = document.querySelector('.centerScreen')

  const btn = document.createElement('button')
  btn.classList.add('depBtn')
  btn.textContent = '$20'


  btn.addEventListener('click', () => {
    balance = parseInt(balance.slice(1)) + 20
    clearScreen()
    chkBalance()
  })


  const btn2 = document.createElement('button')
  btn2.classList.add('depBtn')
  btn2.textContent = '$60'

  btn2.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) + 60 
    clearScreen()
    chkBalance()
  })

  const btn3 = document.createElement('button')

  btn3.classList.add('depBtn') 
  btn3.textContent = '$100'

  btn3.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) + 100
    chkBalance()
  })

  centerDiv.appendChild(btn)
  centerDiv.appendChild(btn2)
  centerDiv.appendChild(btn3)
}


const fastCash = ()=>{
  clearScreen()
  selectedOption()
  const centerDiv = document.querySelector('.centerScreen')

  const btn = document.createElement('button')

  btn.classList.add('depBtn')
  btn.textContent = '$20'


  btn.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 20;
    clearScreen()
    chkBalance()
  })


  const btn2 = document.createElement('button')
  btn2.classList.add('depBtn')
  btn2.textContent = '$60'
  btn2.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 60;
    clearScreen()
    chkBalance()
  })

  const btn3  = document.createElement('button')
  btn3.classList.add('depBtn') 
  btn3.textContent = '$100'
  btn3.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 100;
    chkBalance()
  })

  centerDiv.appendChild(btn)
  centerDiv.appendChild(btn2)
  centerDiv.appendChild(btn3)
}


const withdraw = ()=>{

  clearScreen()
  selectedOption()
  const centerDiv = document.querySelector('.centerScreen')


  const btn = document.createElement('button')
  btn.classList.add('depBtn')
  btn.textContent = '$20'


  btn.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 20;
    clearScreen()
    chkBalance()
  })


  const btn2 = document.createElement('button')
  btn2.classList.add('depBtn')
  btn2.textContent = '$40'
  btn2.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 40;
    clearScreen()
    chkBalance()
  })


  const btn3 = document.createElement('button')
  btn3.classList.add('depBtn') 
  btn3.textContent = '$60'

  btn3.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) - 60;
    chkBalance()
  })


  centerDiv.appendChild(btn)
  centerDiv.appendChild(btn2)
  centerDiv.appendChild(btn3)
}

const chkDeposit = ()=>{
  clearScreen()
  selectedOption()

  const centerDiv = document.querySelector('.centerScreen')

  const btn = document.createElement('button')
  btn.classList.add('depBtn')
  btn.textContent = '$1000'

  btn.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) + 1000;
    clearScreen()
    chkBalance()
  })


  const btn2 = document.createElement('button')
  btn2.classList.add('depBtn')
  btn2.textContent = '$2000'

  btn2.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) + 2000; 
    clearScreen()
    chkBalance()
  })

  const btn3 = document.createElement('button')
  btn3.classList.add('depBtn') 
  btn3.textContent = '$3000';

  btn3.addEventListener('click', ()=>{
    balance = parseInt(balance.slice(1)) + 3000;
    chkBalance()
  })


  centerDiv.appendChild(btn)
  centerDiv.appendChild(btn2)
  centerDiv.appendChild(btn3)
}




const cancelBtn = ()=>{
  location.reload()
}




//calculator code:
const calculateTerms = (x, y, sign)=>{
  if (sign === "+"){
      screen.innerHTML = parseInt(x) + parseInt(y);
  } else if  (sign === "-"){
      screen.innerHTML = parseInt(x) - parseInt(y);
  } else if  (sign === "X"){
      screen.innerHTML = parseInt(x) * parseInt(y);
  } else if  (sign === "%"){
      screen.innerHTML = parseInt(x) / parseInt(y);
  } else{
      alert("ERROR");
  }
};

const splitInput = ()=>{
let nput = screen.textContent;
console.log(nput)

if (nput.includes("+")) {
  let solve = nput.split("+");
  console.log("input:", solve);
  calculateTerms(solve[0], solve[1], "+");
} else if (nput.includes("-")){
  let solve  = nput.split("-")
  console.log("input:", solve)
  calculateTerms(solve[0], solve[1], "-");
} else if (nput.includes("X")){
  let solve  = nput.split("X")
  console.log("input:", solve)
  calculateTerms(solve[0], solve[1], "X");
} else if (nput.includes("%")){
  let solve  = nput.split("%")
  console.log("input:", solve)
  calculateTerms(solve[0], solve[1], "%");
}
else{
  alert("ERROR")
}

}
