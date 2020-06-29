function getval01(firstcurr, secondcurr) {  
const addr = 'https://api.exchangeratesapi.io/latest?base='+firstcurr+"&symbols="+secondcurr
fetch(addr)
.then((resp) => resp.json())
.then(function(data) {
  let tabledata = data.rates;
  var ratio = document.getElementById("ratio")
  ratio.value=tabledata[secondcurr].toFixed(5)
})
.catch(function(error) {
  console.log(error);
});
} 