// MAKING USE OF ASYNCHRONOUS AND FETCH.
let advice_id = document.querySelector(".id span");
let advice_quote = document.querySelector(".quote span");
const generator_btn = document.getElementsByTagName("button")[0];

// When we click on the dice to generate new advice.

// USING FETCH API TO RETURN A RESOLVED PROMISE OF THE ADVICE
function get_advice(url) {
  fetch(url)
    .then((data) => data.json())
    .then((advice) => {
      console.log("USER FETCHED");
      advice_id.innerHTML = advice.slip.id;
      advice_quote.innerHTML = advice.slip.advice;
    })
    .catch(() => {
      advice_id.innerHTML = 'ERROR 404'
      advice_quote.innerHTML = 'FAILED TO FETCH, CONNECTION TIMEOUT'
    });
}

generator_btn.addEventListener("click", () => {
  get_advice("https://api.adviceslip.com/advice");
});
