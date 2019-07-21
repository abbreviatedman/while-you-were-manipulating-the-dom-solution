// TODO: Find the lucky numbers button on our page.
const luckyNumbersButton = document.querySelector('');
//When it's clicked, launch `luckify`.
luckyNumbersButton.onclick = luckify;


// TODO: Find the biggify numbers button on our page.
const biggifyNumbersButton = document.querySelector('');
//When it's clicked, launch `biggify`.
biggifyNumbersButton.onclick = biggify;

// TODO: Find the crazyify string button on our page.
const crazifyStringButton = document.querySelector('');
//When it's clicked, launch `stringify`.
crazifyStringButton.onclick = stringify;


// TODO: Find the reverse string button on our page.
const reverseStringButton = document.querySelector('');
//When it's clicked, launch `reverse`.
reverseStringButton.onclick = reverse;


function luckify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!
  const inputBox = document.querySelector('');
  
  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.


  /*
    TODO: Print out the numbers from 1 to the number they typed in, as long as they are divisible by 7 or 13.

    Use the pre-defined `printValue` function below to print out each line,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
  */


  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

  inputBox.value = '';

}

function biggify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!
  const inputBox = document.querySelector('');
  
  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.


  /*
    TODO: Multiply the number they've given you by 9000.

    A hint: if this isn't working, it _might_ be because of the JavaScript type of the data coming in.

    Use the pre-defined `printValue` function below to print out the result,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
  */


  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

  inputBox.value = '';

}

function crazyify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!t
  const inputBox = document.querySelector('');
  
  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.


  /*
    TODO: Loop through and capitalize every character with an even-numbered index.

    Hint: you'll probably have to "build" a new string as you loop.

    Use the pre-defined `printValue` function below to print out result,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
  */


  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

  inputBox.value = '';

}

function reverse(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put the DOM node in a variable.
  // Make sure you're using the right selector!
  const inputBox = document.querySelector('');
  
  // TODO: Use the variable you saved in the above step to dive deeper into the
  // object and find the value the user has added there. Make sure it's a
  // number, not a string. Save it to a variable.


  /*
    TODO: Print out the string, but in reverse. Do _not_ print out each character from the string individually; this would be pretty weird behavior when someone wants to see the reversed string of what they typed in!
    
    Guidelines: 
    * You will find solutions on the internet that involve using `split` to make the string into an array. This is _not_ the correct solution for this exercise! Besides being incredibly inefficient (although this is a matter of principle more than app speed), this solution would teach you nothing about how to iterate over strings--and probably nothing about iterating over arrays either, since we don't have the foundational knowledge of arrays yet.
    * To get a complete string, we'll have to build a new string entirely.
    * It would probably _not_ make sense to go through the user input string in regular, 0-length order.

    Use the pre-defined `printValue` function below to print out the result,
    giving it the value you want to print.
    
    Essentially, you can use `printValue` the same way you would `console.log`,
    only it will write to the DOM instead of to the console.
  */


  /*
    Stretch goal TODO:
    Using the variable we saved above for the input box, clear its value.

    This is a very useful feature, as it's an annoying and unexpected user
    experience to ask them to delete anything they've inputted previously before
    inputting something else.
  */

  inputBox.value = '';

}

function printValue(value) {
  // Create a list item.
  const listItem = document.createElement('li');
  // Put its value as its contents.
  listItem.innerText = value;

  // Find the unordered list we've made into a results console.
  const list = document.querySelector('.list')
  // Append our list item to it.
  list.appendChild(listItem);
}


function clearList() {
  // Find the unordered list we've made into a results console.
  const list = document.querySelector('.list')

  // Remove its list items.
  while(list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}