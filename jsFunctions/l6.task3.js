function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  }
  if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  }
  return "Your order is accepted";
}

function logOrder(available, ordered) {
  const result = checkOrder(available, ordered);
  console.log(`Order: (available=${available}, ordered=${ordered}) — ${result}`);
}

// Examples
logOrder(1, 10);   
logOrder(10, 0);  
logOrder(10, 5); 

