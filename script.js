document.getElementById('openModal').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

//----------------------------------------------------------------->

const input2 = document.querySelector('#input1');
const btn = document.querySelector('#btn');
 

function changecolor() {
    const color = input2.value.toLowerCase(); 
    if (!['red', 'blue', 'green', 'black', 'white'].includes(color)) {
      alert('შემდეგი ფერებიც მხოლოდ შეიძლება: red, blue, green, black, white');
    } else {
      document.body.style.backgroundColor = color;
    }
  }
//----------------------------------------------------------------->

const input1 = document.querySelector('.input1');
const button1 = document.querySelector('.btn1');

const element = () => {
    const inputv = input1.value; 
    const divide = inputv.split(":").map(num => parseInt(num));
    const sum = divide.reduce((acc, curr) => acc + curr, 0);
    const average = sum / divide.length;
    document.getElementById("result").innerText = average;
}

//----------------------------------------------------------------->
