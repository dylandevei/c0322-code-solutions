/* exported titleCase */
const titleCase = title => {
  title = title.toLowerCase().split(' ');
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  for (let i = 0; i < title.length; i++) {
    if (title[i] === 'javascript') {
      title[i] = 'JavaScript';
    } else if (title[i] === 'javascript:') {
      title[i] = 'JavaScript:';
    } else if (title[i] === 'api') {
      title[i] = 'API';
    } else if (title[i].includes('-')) {
      const hyphenated = title[i].split('-');
      for (let k = 0; k < hyphenated.length; k++) {
        hyphenated[k] = hyphenated[k][0].toUpperCase() + hyphenated[k].slice(1);
      }
      title[i] = hyphenated.join('-');
    } else if (title[i].length >= 4) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    } else if (minor.indexOf(title[i]) === -1) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    } else if (i === 0) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    } else if (title[i - 1].includes(':')) {
      title[i] = title[i][0].toUpperCase() + title[i].slice(1);
    }
  }
  return title.join(' ');
};

// convert title to all lowercase and split into individual elements inside of an array
// create array literal containing all of the minor words listed in problem
// create for loop that will loop through array and firstly check if the words are the special cases (JavaScript or API)
// return the hardcoded words if so (JavaScript & API)
// titlecase will convert title at index 0 to uppercase and concatenate rest of lowercase word using slice method (from index[1] onwards)
// check if the word contains a hyphen, if so split them into two words and title case them indiviually, then rejoin them as one word after
// check if title's length is greater than 4, if so title case the element
// check if index is at 0, if so title case the element even if word is included in minor array or title.length < 4
// check the minor words array to see if the index is included, if not, then title case the word
// check if the word before title includes a colon, if so titlecase the word that follows the colon
// return the indivual strings as a single string
