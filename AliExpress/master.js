const Nightmare = require('nightmare');
const nightmare = Nightmare({
  show: true
});

nightmare
  .goto("https://www.aliexpress.com/")
  .type("#search-key", "asus zenfone mobile")
  .click(".search-button")
  .wait("#page")
  .evaluate(function() {
    let findName = document.querySelectorAll("#hs-below-list-items .item .info .icon-hotproduct a")
    let findPrice = document.querySelectorAll("#hs-below-list-items .item .info .price .value")
    let getAll = [];
    for (i = 0; i < findName.length; i++) {
      getAll.push(findName[i].outerHTML);
      getAll.push(findPrice[i].outerHTML);
    }
    return getAll;
  })
  .end("End")
  .then(function(result) {
    console.log(result);
  });
