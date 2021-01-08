function checkP (str) {

let reverseWord = str.split("").reverse().join("");
if (reverseWord === str) {
  console.log(str + "  palindrome");
} else {
  console.log(str +"  palindrome degil");
}

}

checkP("oeo");
checkP("mouse");
checkP("91019");
checkP("book");
