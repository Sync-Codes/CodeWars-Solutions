const century = (year) => {
  let y = year % 100 == 0 ? Math.floor(year / 100) : Math.floor(year / 100) + 1; 
  console.log(y);
}

century(89);