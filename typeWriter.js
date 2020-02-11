// animate the sentence, revealing one character at a time

const sentence = "hello there from lighthouse labs";

const sentenceArr = sentence.split('') 
sentenceArr.forEach(
  (char, index) => {
    setTimeout(() => {
      index === sentence.length -1 ?
        process.stdout.write(char + '\n'):
        process.stdout.write(char);
    }, 100 * index);
  });