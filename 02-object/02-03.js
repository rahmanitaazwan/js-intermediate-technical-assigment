// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
  {
      btc: { buy: 10, sell: 9 },
      eth: { buy: 8, sell: 7.5 },
      doge: { buy: 7, sell: 6.5 },
      day: 1
  },
  {
      btc: { buy: 9, sell: 5 },
      eth: { buy: 7, sell: 4 },
      doge: { buy: 6, sell: 3 },
      day: 2
  },
  {
      btc: { buy: 5, sell: 10 },
      eth: { buy: 4, sell: 6 },
      doge: { buy: 3, sell: 4 },
      day: 3
  }
];

const calculateIncome = (items) => {
  return items.reduce((acc, curr) => {
      const btcSum = curr.btc.sell - curr.btc.buy;
      const dogeSum = curr.doge.sell - curr.doge.buy;
      const ethSum = curr.eth.sell - curr.eth.buy;
      return {
          btc: acc.btc + btcSum,
          doge: acc.doge + dogeSum,
          eth: acc.eth + ethSum,
      };
  }, {
      btc: 0,
      doge: 0,
      eth: 0
  });
}

const calculateIncome2 = (items) => {
  let resultTemp = {
      btc: 0,
      doge: 0,
      eth: 0
  };
  // for loop
  for (let i = 0; i < items.length; i++) {
      const val = items[i];
      const btcSum = val.btc.sell - val.btc.buy;
      const dogeSum = val.doge.sell - val.doge.buy;
      const ethSum = val.eth.sell - val.eth.buy;
      resultTemp = {
          btc: resultTemp.btc + btcSum,
          doge: resultTemp.doge + dogeSum,
          eth: resultTemp.eth + ethSum,
      }
  }
  return resultTemp;
}

console.log(calculateIncome2(items))
