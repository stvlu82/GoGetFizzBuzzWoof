const getOccurrence = (number, target) => {
  let occurrence = 0;
  if (number % target === 0) {
    occurrence += 1;
  }
  const regex = new RegExp(target, "g");
  occurrence += (number.toString().match(regex) || []).length;
  return occurrence;
};

export const fizzBuzzOrWoof = (number) => {
  const fizzes = "Fizz ".repeat(getOccurrence(number, 3));
  const buzzes = "Buzz ".repeat(getOccurrence(number, 5));
  const woofs = "Woof ".repeat(getOccurrence(number, 7));
  const alltogether = fizzes + buzzes + woofs;
  return alltogether !== "" ? `${alltogether}(${number})` : number;
};
