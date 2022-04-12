let myBooks = [1, 2, 3, 4, 5];
myBooks.forEach(() => console.log('reading'));

myBooks.forEach((title) => console.log(title));

myBooks.forEach((title, idx, arr) => console.log(idx + '-' + title));

myBooks.forEach((title, idx, arr): void => {
  console.log(idx + '-' + title);
});
