function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}



document.getElementById('noun1').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('NOUN'));

});

document.getElementById('verb').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('VERB'));

});

document.getElementById('adjective').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('ADJECTIVE'));

});

document.getElementById('noun2').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('NOUN'));

});

document.getElementById('day').addEventListener('click', (event) => {
  event.target.innerText = 'day mode';
  event.target.style.color = '#ffffff';
  event.target.style.backgroundColor = '#33cc00';

});

document.getElementById('night').addEventListener('click', (event) => {
  event.target.innerText = 'night mode';
  event.target.style.color = '#330033';
  event.target.style.backgroundColor = '#6600cc';

});

document.getElementById('block').addEventListener('click', (event) => {
  event.target.style.color = '#990000';
  event.target.style.backgroundColor = '#ffff66';

});

document.getElementById('button').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  element_img.setAttribute("src", 'https://th.bing.com/th/id/R.fde011b2103f109ed31f0fd81632f5a6?rik=UspAHsDZ6r%2f9Kw&pid=ImgRaw&r=0');

});
