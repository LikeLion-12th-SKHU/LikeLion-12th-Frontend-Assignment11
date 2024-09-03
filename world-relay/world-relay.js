const number = Number(prompt("참가자는 몇 명인가요?"));
const $input = document.querySelector("input");
const $button = document.querySelector("button");
const $word = document.querySelector("#word");

let newWord;
let word;
const onInput = (event) => {
  newWord = event.target.value;
};

const $order = document.querySelector("#order");
const onClickButton = () => {
  if (!word || word.at(-1) == newWord[0]) {
    word = newWord;
    $word.textContent = word;

    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    alert("틀린 단어입니다!");
  }
  // 최적화
  $input.value = "";
  $input.focus();
};

$input.addEventListener("input", onInput);
$button.addEventListener("click", onClickButton);
