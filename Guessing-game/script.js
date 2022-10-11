function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}
const point = 0;

const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = window.prompt("Enter a Number between 0-9");
    const randomNumber = Math.floor(Math.random() * 10);

    if (isNaN(userNumber)) {
      reject(new Error("Enter a number instead of string"));
    }

    if (userNumber == randomNumber) {
      resolve(point + 1);
    } else {
      reject("Try Again");
    }
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};

// const start = () => {
//   enterNumber()
//     .then((result) => {
//       myDisplayer(result);
//       //   alert(result);
//     })
//     .catch((error) => {
//       myDisplayer(error);
//       console.log(error);
//     });
//   continueGame().then((data) => {
//     if (data) {
//       start();
//     } else {
//       alert("Game Ends");
//     }
//   });
// };

const start = async () => {
  try {
    const result = await enterNumber();
    alert(` Congratulations! :🏆 You get ${result} point `);
  } catch (error) {
    alert(error);
  }
  try {
    const isContinue = await continueGame();

    if (isContinue) {
      start();
    } else {
      alert("Game Ends");
    }
  } catch (error) {}
};

const resume = () => {
  start();
};

resume();
// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;

//   // some code (try to change x to 5)

//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// }).then(
//   function (value) {
//     console.log(value);
//   },
//   function (error) {
//     console.log(error);
//   }
// );
