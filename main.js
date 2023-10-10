item1 = {
  quatity: 0,
  input: document.getElementById("for1"),
  price: parseFloat(document.getElementById("1").textContent),
  total: 0,
};

item1.input.addEventListener("change", (e) => {
  item1.quatity = e.target.value;
  console.log(item1.quatity);

  item1.total = item1.quatity * item1.price;
  console.log(item1.price);
  console.log(item1);
});

item2 = {
  quatity: 0,
  input: document.getElementById("for2"),
  price: parseFloat(document.getElementById("2").textContent),
  total: 0,
};

item2.input.addEventListener("change", (e) => {
  item2.quatity = e.target.value;
  console.log(item2.quatity);
  item2.total = item2.quatity * item2.price;

  console.log(item2.price);
  console.log(item2);
});

let btn = document.getElementById("totalprice");
btn.addEventListener("click", (e) => {
  let result = document.getElementById("total");
  console.log(result);
  result.textContent = Number.parseFloat( item1.total + item2.total).toFixed(2);
  console.log(totalprice)
});
