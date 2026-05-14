function adicionar() {
  let texto = document.getElementById("item").value;

  let li = document.createElement("li");
  li.innerText = texto;

  document.getElementById("lista").appendChild(li);
}