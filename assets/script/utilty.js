function onEvent(selector, event, callback) {
    return selector.addEventListener(event, callback);
  }
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }
  
  // Print
  function print(arg) {
    console.log(arg);
  }
  
  // Sleep
  function sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration)
    });
  }
  


  export {
    onEvent,
    getElement,
    select,
    selectAll,
    print,
    sleep,
  };