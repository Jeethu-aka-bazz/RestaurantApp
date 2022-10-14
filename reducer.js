export default function reducer(state = {}, action) {
  if (action.type === 'changeLightTheme') {
    return {
      name: 'Light',
      pagebackground: '#eee',

      cardbackground: '#fff',
      cardheadercolor: '#000',
      cardsubheadercolor: '#888',

      searchbarbackground: '#eee',
      searchbartextcolor: '#000',

      topbackground: '#fff',
    };
  } else if (action.type === 'changeDarkTheme') {
    return {
      name: 'Dark',
      pagebackground: '#000',

      cardbackground: '#222',
      cardheadercolor: '#fff',
      cardsubheadercolor: '#ccc',

      searchbarbackground: '#555',
      searchbartextcolor: '#ccc',

      topbackground: '#222',
    };
  }
}
