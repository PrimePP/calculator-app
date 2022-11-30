const displayarea = document.querySelector('.textview');
let ans = 0;
let userEntry = ''
// displayarea.value = 
function insert(num){
  userEntry+= num;
  displayarea.value = userEntry;
  }
  
  //gives the output
  function equals(){
    try {
  displayarea.value = eval(userEntry);
    } catch (error) {
      alert('Please enter a valid expression 🚫')
    }
    
  }
  
  //cleans the display area
  function clean(){
    userEntry = '';
    displayarea.value = userEntry;
  }
  //operates the back button
  function back(){
    let editedUserString = userEntry;
    editedUserString = editedUserString.slice(0,-1);
    userEntry = editedUserString;
    displayarea.value = userEntry;
  }

  
