function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`hello ${name}`);
  });
  return greetPromise;
}

const suzie = greet("suzie");
console.log(suzie);
