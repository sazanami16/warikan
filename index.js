'use strict'
{
  const money = document.getElementById('money')
  const person = document.getElementById('person')
  const unit = document.getElementById('unit')
  const name = document.getElementById('name')
  const btn = document.getElementById('btn')

  function checkInput() {
    let int = /^[1-9][0-9]*$/ 
    if (
      money.value.match(int) !== null &&
      person.value.match(int) !== null
    ) {
      name.classList.remove('hidden')
      addForm();
    } else {
      name.classList.add('hidden')
    }
  }

  money.addEventListener('keyup', checkInput);
  person.addEventListener('keyup', checkInput);

  function addForm() {
    for (let input = 1; input <= person.value; input++) {
      input.textContent = 'good' 
    }
  }

  //スタートボタンをクリックすると、割った金額がランダムで表示される処理。

  btn.addEventListener('click', () =>{

  });
}
