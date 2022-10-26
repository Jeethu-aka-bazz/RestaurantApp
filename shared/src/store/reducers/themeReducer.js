const initialState = {
  name: 'Dark',
  pagebackground: '#000',

  cardbackground: '#222',
  cardheadercolor: '#fff',
  cardsubheadercolor: '#ccc',

  searchbarbackground: '#555',
  searchbartextcolor: '#ccc',

  topbackground: '#222',

  menubackground: '#444',
  menutextcolor: '#ccc',

  buttonstext: '#000',
  buttonsbackground: '#fff',

  cartbackgroundcolor: '#666',
};

export default function themeReducer(state = initialState, action) {
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

      menubackground: '#ddd',
      menutextcolor: '#333',

      buttonstext: '#fff',
      buttonsbackground: '#000',

      cartbackgroundcolor: '#bbb',
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

      menubackground: '#444',
      menutextcolor: '#ccc',

      buttonsbackground: '#fff',
      buttonstext: '#000',

      cartbackgroundcolor: '#666',
    };
  }
  return state;
}
