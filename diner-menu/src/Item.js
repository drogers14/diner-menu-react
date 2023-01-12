function Item(props) {
  var menuItems = props.menuItems;

  return (
    <div style={{ align: "center" }}>
      {menuItems.map((menuItem) => (
        <>
          {" "}
          <p><b>{menuItem.item}</b></p> 
          <p>{menuItem.details}</p>
          <code>.............................................</code>
        </>
      ))}
    </div>
  );
}
export default Item;
