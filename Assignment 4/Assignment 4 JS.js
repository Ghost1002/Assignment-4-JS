// Question 1
// By how many ways we can access elements in the DOM and write about them in brief?

// ANS:
// We can access elements in the DOM by the following ways,They are;
// 1.Fetch elements using TagName:
//       *The elements from HTML file can be fetched by usingTagName.
//       *If two or more elements have the same TagName then we use index numbers to get them.
//        Ex:document.getElementsByTagName ("Name");
// 2.Fetch elements using Id:
//       *The elements can be fetched by using Id from an HTML document. 
//       *If we have two or more with the same Id then we can get the element using an index number.
//        Ex:document.getElementById ("hello world");
// 3.Fetch elements using ClassName:
//       *The elements can be fetched by using ClassName from html document. 
//       *If we have two or more with same ClassName then we can get the element using index number.
//        Ex:document.getElementsByClassName ("hello");

// QUESTION 2:

function add_number(){
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a + b;
document.getElementById("answer").value= c;
}
