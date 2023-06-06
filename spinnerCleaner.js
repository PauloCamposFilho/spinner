const spinnerCharacters = ['|', '/', '-', '\\']; // one full "loop"

const doSpin = (timeBetweenFrames, totalDuration) => {
  let i = 1; // index to track the spinnerCharacters array. Start at 1 because we're printing the first one immediately outside of the interval loop
  const startTime = Date.now(); // get start time

  process.stdout.write(`\r${spinnerCharacters[0]}   `);

  const intervalID = setInterval(() => {
    process.stdout.write(`\r${spinnerCharacters[i]}   `);
    i++;
    if (i === spinnerCharacters.length) i = 0;
    let currentTime = Date.now();
    if (currentTime - startTime > totalDuration) {
      clearInterval(intervalID);
      process.stdout.write("\n");
    }
  }, timeBetweenFrames);
};

doSpin(50, 5000);
