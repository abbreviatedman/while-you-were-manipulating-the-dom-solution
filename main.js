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
  
  // TODO: Find the input box the user is typing in and put it in a variable.
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
  
  // TODO: Find the input box the user is typing in and put it in a variable.
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

function crazyify(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put it in a variable.
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

function reverse(event) {
  // Make sure the page isn't reloaded when the user submits the form.
  event.preventDefault();

/*
  TODO: Call the function `clearList`, which we have defined for you. You
  don't need to put anything in the parentheses to tell it what to clear, just
  call it--it knows what to do!
*/
  clearList();
  
  // TODO: Find the input box the user is typing in and put it in a variable.
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

function printValue(value) {
  // Create a list item.
  const listItem = document.createElement('li');
  // Put its value as its contents.
  listItem.innerText = value;

  /*
    Stretch goal TODO:
    Before we append it to the list, let's style this list item.
    Give it the following (easy but not particularly good) CSS, using properties
    on [element].style. See `printValueStrong` below for a couple examples.

    Although I'm using CSS to demonstrate what we want, note that we want you to
    use JavaScript for this. Also note that there's no kebab case in JavaScript!

    li {
      font-size: 2em;
      color: blue;
      margin-top: 5px;
    }
    
    If you want to set the values of these properties to something else, feel
    free! But do use these three properties.
    
  */

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