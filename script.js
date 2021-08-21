var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

function calculateProfitAndLoss(initial, quantity, current) {
  if(initial > current){
    // loss logic here
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss/initial) * 100;
    showOutput(`You have incured a loss of ${loss} with ${lossPercentage}% loss percentage`)
  }
  else if (current > initial) {
    //profit logic here
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(`You made a profit of ${profit} with ${profitPercentage}% returns`);
  }else {
    // No loss no gain
    showOutput(`Hodl!!!!!!! or sell!!!!!`);
  }
}

function submitHandler(){
  var initprice = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(currentPrice.value);

  calculateProfitAndLoss(initprice, qty, curr);
}

function showOutput(msg){
  outputBox.innerText = msg;
}

submitBtn.addEventListener('click', submitHandler);