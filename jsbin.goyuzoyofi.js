function multiply(nums){
  var sum = 1;
  for (var i=0; i<nums.length; i++){
    sum = sum * nums[i];
  }
  console.log(sum);
}

function reverse(words){
  var wordArray = words.split("");
  var wordArrayBackwards = wordArray.reverse();
  var reverseWord = wordArrayBackwards.join("");
  console.log(reverseWord);
}