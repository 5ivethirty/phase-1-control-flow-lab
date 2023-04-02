function scuberGreetingForFeet(hi){
  // Write your code here!
  if (hi <= 400){
    return "This one is on me!";
  } 
  else if (hi > 400 && hi < 2000){
    return "That will be twenty bucks.";
  } 
  else if (hi > 2000 && hi < 2500){
    return "I will gladly take your thirty bucks.";
  } 
  else if (hi > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(yo){
  // Write your code here!
  return yo === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(sup){
  // Write your code here!
  switch (sup) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}