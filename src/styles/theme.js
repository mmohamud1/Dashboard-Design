const globalTheme = {
  switchWidth: '40px',
  switchHeight: '20px',
  switchPadding: '3px',
  colorContrastLow: '#d3d3d4',
  colorWhite: '#fff',
  switchColorPrimary: '#302c40',
  switchAnimationDuration: '0.2s',
  gradient:
    'linear-gradient(122deg, rgba(82,128,111,1) 0%, rgba(52,81,71,1) 100%)',
  colorPurple: '#804ad8',
  colorGray: '#adadad',
};

export const lightTheme = {
  primary: '#fff',
  secondary: '#f8f8f8',
  textColor: '#527a80',
  header: '#527a80',
  headerNumber: '#fff',
  activeMenu: '#527a80',
  ...globalTheme,
};

export const darkTheme = {
  primary: '#16221e',
  secondary: '#16221e',
  textColor: '#fff',
  header: '#fff',
  headerNumber: '#527a80',
  activeMenu: '#fff',
  ...globalTheme,
};
