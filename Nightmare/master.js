// npm install nightmare
// npm init

const Nightmare = require('nightmare');
const nightmare = Nightmare({
  show: true
})

nightmare
  .goto('http://google.rs')
  .type('#lst-ib', 'Web scraping nightmare.js  browser automation library')
  .click('input[type=submit]')
  .wait('#main')
  .click('.g .r a')
  .wait('.Header')
  .evaluate(function() {
    let allP = document.querySelectorAll('.Body p');
    //console.log(allP);
    let p = [];
    for (i = 0; i < allP.length; i++) {
        p.push(allP[i].outerHTML);
    }
    return p;
  })
  .end()
  .then(function(result) {
    console.log(result)
  });
