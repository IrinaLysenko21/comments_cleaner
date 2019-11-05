const string = `
// Comment
const URL = 'http://localhost:3000/notes'; // Comment
const URL_2 = 'https://rozetka.com.ua/'; // URL with https for example

const getNotes = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching: ' + response.statusText);
  });
};

/*

Comments
More comments

*/
const saveNote = note => { // Comment
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(note)
  };

  // Comment
  // Comment
  return fetch(URL, opts).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Error while fetching: ' + response.statusText);
  });
};
`;

const commentsCleaner = (jsCode) => {
    const reg = /\n([ \t]*\/\/.*|[ \t]*\/\*[\s\S]*?\*\/)|[ \t]*(?<!http:)(?<!https:)\/\/.*/g;

    const result = jsCode.replace(reg, '');

    return result;
};

console.log(commentsCleaner(string));