import Item from "./Item.js";
function Menu() {
  const pastryItems = [
    {
      item: "Croissant",
      details: "mmm yummy"
    },
    {
      item: "Dream Cake",
      details: "",
    },
    {
      item: "Aurora Parfait", 
      details: ""
    },
    {
      item: "Crescent treat",
      details: ""
    },
    {
      item: "Espresso Brownie",
      details: "??"
    }
  ]
  const beverageItems = [
    {
      item: "Lavendar Latte",
      details:
        " steamed milk, double espresso shot, simple syrup, cocinal lavendar",
    },
    {
      item: "Rose Latte",
      details: "steamed milk, double espresso, simple syrup, rose petals",
    },
    {
      item: "Matcha Latte",
      details: "steamed milk, double espresso, simple syrup, rose petals",
    },
    {
      item: "Caramel Macchiato",
      details: "steamed milk, double espresso, simple syrup, rose petals",
    },
    {
      item: "Hot Coffee",
      details: "dark roast",
    },
  ];
  return (
    <div>
      <h1>Menu</h1>
      <h2>Beverages</h2>
      <Item menuItems={beverageItems}/>
      <h2>Pastries</h2>
      <Item menuItems={pastryItems}/>
    </div>
  );
}
export default Menu;
