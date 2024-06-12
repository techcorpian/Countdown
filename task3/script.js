// var count = 10;

// const interval = setInterval(() => {
//   count = count - 1;
//   const body = document.querySelector("body")
//   const heading = document.createElement("div");
//   heading.innerText = count;
//   body.append(heading);
//   console.log(count);
//   if (count === 0) {
//     clearInterval(interval);
//     const body = document.querySelector("body")
//     const heading1 = document.createElement("h1");
//     heading1.innerText = count;
//     body.append(heading1);
//   }
// }, 1000);

var count = 10;

const interval = setInterval(() => {
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerText = count;
  
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    const header1 = document.querySelector("div")
    header1.innerText = "Happy New Year";
    body.append(heading1);
  }
}, 1000);