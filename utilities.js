// var selectElement = (selector)=> document.querySelector(selector);
// var selectElement = (selector)=> document.querySelectorAll(selector);

// var createDOM = (element)=> document.createElement(element);


var $_ = function(selector, node = document) {
    return node.querySelector(selector);
};

var $$_ = function(selector, node = document) {
    return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
    var element = document.createElement(tagName);
    element.setAttribute("class", className);
    if (text) {
      element.textContent = text;
    }
  
    return element;
};