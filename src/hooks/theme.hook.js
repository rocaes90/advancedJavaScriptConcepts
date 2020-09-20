import { Theme } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'

import { Colors, Fonts, FontSizes } from 'config'

function useCustomTheme() {
  const primary = Colors.primary
  const error = Colors.error

  console.log('primary', primary)

  const {
    body1,
    body2,
    button,
    caption1,
    h1,
    h2,
    h3,
    h4,
    overline,
    subtitle1,
    subtitle2,
  } = FontSizes

  const currentTheme = {
    spacing: 4,
    palette: {
      background: {
        default: Colors.athensGray,
      },
      primary: {
        main: primary,
        light: Colors.panache,
      },
      grey: {
        400: Colors.silver,
        500: Colors.nobel,
        600: Colors.stormGray,
      },
      text: {
        disabled: Colors.nobel,
        primary: Colors.stormGray,
        secondary: Colors.black,
      },
      common: {
        black: Colors.black,
      },
      error: {
        main: error,
      },
      type: 'light',
    },
    typography: {
      fontFamily: Fonts.roboto,
    },
    overrides: {
      MuiButton: {
        root: {
          boxShadow: 'none',
          fontSize: button,
          fontWeight: 500,
          letterSpacing: '1.25px',
          textDecoration: 'none',
          lineHeight: 1.2,
        },
        contained: {
          height: 48,
          minWidth: 200,
        },
      },
      MuiFormControl: {
        root: {
          '&.textFieldDirty': {
            '& fieldset': {
              borderColor: Colors.black,
            },
          },
          '& .MuiFormLabel-filled + div': {
            '& fieldset': {
              borderColor: Colors.black,
            },
          },
        },
      },
      MuiFormHelperText: {
        root: {
          bottom: -22,
          color: Colors.stormGray,
          lineHeight: 1.34,
          position: 'absolute',
          '&.Mui-disabled': {
            color: `${Colors.nobel} !important`,
          },
        },
      },
      MuiTypography: {
        gutterBottom: {
          marginBottom: 16,
        },
        h1: {
          color: Colors.black,
          fontSize: h1,
          fontWeight: 300,
          letterSpacing: 0,
          lineHeight: 1.2,
        },
        h2: {
          color: Colors.black,
          fontSize: h2,
          fontWeight: 300,
          letterSpacing: '0.25px',
        },
        h3: {
          fontSize: h3,
          fontWeight: 300,
          letterSpacing: 0,
          lineHeight: 1.17,
        },
        h4: {
          fontSize: h4,
          fontWeight: 300,
          letterSpacing: '0.15px',
          lineHeight: 1.2,
        },
        subtitle1: {
          fontSize: subtitle1,
          fontWeight: 300,
          letterSpacing: '0.15px',
        },
        subtitle2: {
          fontSize: subtitle2,
          fontWeight: 500,
          letterSpacing: '0.1px',
        },
        body1: {
          fontSize: body1,
          fontWeight: 'normal',
          letterSpacing: '0.5px',
          lineHeight: 1.8,
        },
        body2: {
          fontSize: body2,
          fontWeight: 'normal',
          letterSpacing: '0.25px',
        },
        button: {
          boxShadow: 'none',
          fontSize: button,
          fontWeight: 500,
          letterSpacing: '1.25px',
          textDecoration: 'none',
        },
        caption: {
          color: Colors.black,
          fontSize: caption1,
          fontWeight: 'normal',
          letterSpacing: '0.4px',
          lineHeight: 16,
        },
        overline: {
          fontSize: overline,
          fontWeight: 500,
          letterSpacing: '1.5px',
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 8,
        },
      },
      MuiCheckbox: {
        root: {
          color: Colors.midGray,
          paddingBottom: 0,
          paddingTop: 2,
        },
      },
      MuiFormControlLabel: {
        root: {
          alignItems: 'flex-start',
          paddingBottom: 9,
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: Colors.white,
          borderRadius: 4,
          border: '1px solid rgba(0, 0, 0, .32)',
          '&:focus, &:hover': {
            backgroundColor: Colors.white,
          },
        },
        input: {
          '&::placeholder': {
            color: Colors.stormGray,
            opacity: 1,
          },
        },
        focused: {},
      },
      MuiInputBase: {
        root: {},
        input: {
          '&::placeholder': {
            color: Colors.stormGray,
            opacity: 1,
          },
        },
        focused: {},
      },
      MuiInputAdornment: {
        positionEnd: {
          '& .MuiIconButton-root': {
            padding: 0,
          },
        },
      },
      MuiCard: {
        root: {
          borderRadius: 0,
          boxShadow:
            '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,1,0,0.2)',
        },
      },
      MuiInputLabel: {
        root: {
          color: Colors.stormGray,
        },
      },
      MuiDrawer: {
        paper: {
          background: Colors.white,
          boxShadow: '2px 1px 20px 0 rgba(0,0,0,0.1)',
        },
      },
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(0,0,0,0.32)',
        },
      },
      MuiListItem: {
        root: {
          '&.Mui-selected:hover': {
            backgroundColor: Colors.panache,
          },
        },
        button: {
          '&:hover': {
            backgroundColor: Colors.panache,
            color: primary,
          },
          '&.Mui-selected': {
            backgroundColor: Colors.panache,
            color: primary,
          },
        },
      },
      MuiToolbar: {
        root: {
          backgroundColor: Colors.athensGray,
          borderBottom: `${1} solid ${Colors.silver}`,
          color: Colors.stormGray,
        },
      },
      MuiAppBar: {
        root: {
          boxShadow: 'none',
        },
      },
      MuiDivider: {
        middle: {
          marginLeft: 0,
          marginRight: 16,
        },
      },
      MuiTab: {
        root: {
          fontSize: 12,
          letterSpacing: 1.2,
        },
        textColorPrimary: {
          color: Colors.stormGray,
        },
      },
      MuiSelect: {
        root: {
          '&.MuiSelect-select:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
      MuiTableRow: {
        root: {
          '&.MuiTableRow-hover:hover': {
            backgroundColor: Colors.panache,
          },
        },
      },
      MuiFormLabel: {
        root: {
          '&.Mui-disabled': {
            color: `${Colors.nobel} !important`,
          },
        },
      },
      MuiTablePagination: {
        toolbar: {
          backgroundColor: 'inherit',
        },
      },
      // This Override are not included in the Overiders interface
      // @ts-ignore
      MuiPickersCalendarHeader: {
        dayLabel: {
          color: Colors.stormGray,
        },
      },
    },
  }

  const theme = createMuiTheme(currentTheme)

  return {
    theme,
  }
}

export default useCustomTheme
