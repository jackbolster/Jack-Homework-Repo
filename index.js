let pizzaToppings = ["pineapple","pepperoni","sausage","banana peppers"];
const greetCustomer = function(){
text("Welcome to PizzazziP! Choose between " + ${pizzaToppings.length} + " different toppings:");
for(i=0; i < pizzaToppings.length; i++) {
text(pizzaToppings[i] + ",");
i++;
}
}
console.log(greetCustomer());
let size = [{text: "10\"", selected: false},
            {text: "12\"", selected: false},
            {text: "14\"", selected: true},
            {text: "16\"", selected: false}];
let crust = [{text: "Neopolitan", selected: false},
             {text: "Chicago", selected: false},
             {text: "Detroit", selected: true}]}
let toppings = ["pepperoni","banana peppers","muschrooms", ...]
const getPizzaOrder = function() {
for(let i = 0; i < size.length; i++)
  if size[i].selected = true {
    return text(size.text[i]);
  }
for (let i = 0; i < crust.length; i++) {
  if crust[i].selected = true {
    return text(crust.text[i])
  }
for (let i = 0; i < toppings.length; i++) {

}
}
}
