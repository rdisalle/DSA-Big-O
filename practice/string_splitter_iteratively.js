//5. String Splitter
//Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.

//Input: 02/20/2020
//Output: ["02", "20", "2020"]

function stringSplitter(str, sep) {
    let ret = [];
    while (true) {
      var idx = str.indexOf(sep);
      if (idx == -1) break;
      ret.push(str.slice(0, idx));
      str = str.slice(idx + sep.length);
    }
    ret.push(str);
    return ret;
  }

stringSplitter("02/20/2020", "/");

//Big O = linear O(n) because input value directly determines time value