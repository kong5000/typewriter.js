const sentence = "hello there from lighthouse labs"
let delay = 100;

for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i])
  }, delay);
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write("\n");
    }, delay)
  }
  delay += 50;
}
