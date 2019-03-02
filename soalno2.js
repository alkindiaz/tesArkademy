function hasUppercase(input){
  for(var i =0; i<input.length; i++){
    if(input[i]===input[i].toUpperCase()){
      return true;
    }
  }
}
function hasLowercase(input){
  for(var i =0; i<input.length;i++){
    if(input[i]===input[i].toLowerCase()){
      return true
    }
  }
}

function isLongEnough(input){
  if(input.length>=8){
    return true
  }
}

function hasSpecialCharacter(input){
  var specialChar = ['!','@','#','$','_','&']
  for(var i=0; i<input.length; i++){
		for(var j=0; j<specialChar.length; j++){
      if(input[i]===specialChar[j]){
        return true
      }
    }
  }
}
function isPasswordValid(input){
  if(hasUppercase(input)&&hasLowercase(input)&&isLongEnough(input) && hasSpecialCharacter(input)){
   	console.log('password is Valid')
  }if(!hasUppercase(input)){
    console.log('password need uppercase')
  }

 if(!hasLowercase(input)){
    console.log('password need lowercase')
  }

  if(!isLongEnough(input)){
    console.log('at least 8 char')
  }
  if(!hasSpecialCharacter(input)){
    console.log('need special char')
  }
}

isPasswordValid('4Lkin!42');
