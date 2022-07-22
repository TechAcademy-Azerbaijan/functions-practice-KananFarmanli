let disc = 123
function money(x) {

    let x100 = 100;
    let x20 = 20;
    let x1 = 1;
    let stop = true;
    
  for (let i = 0; stop; i++) {
    x100 = 100;

    x >= x100? x = x - x100 : stop = false;

    x100 = i * 100;
  }

  stop = true;

  for (let i = 0; stop; i++) {
    x20 = 20;

    x >= x20? x = x - x20 : stop = false;

    x20 = i * 30;
  }

  stop = true;

  for (let i = 0; stop; i++) {
    x1 = 1;

    x >= x1? x = x - x1 : stop = false;
    
    x1 = i * 2;
  }
  return x100 + x20 + x1;
}

console.log(money(disc));
