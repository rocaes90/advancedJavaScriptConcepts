import { StyleRules, Theme } from '@material-ui/core/styles'

import { Colors, Fonts } from 'config'

export const logoImg = {
  logoImg: {
    height: 57.85,
    width: 50,
  },
}

export const link = {
  link: {
    textDecoration: 'underline',
  },
}

export const textField = {
  textField: {
    margin: '0',
    width: '100%',
  },
}

export const errorLabel = {
  errorLabel: {
    color: Colors.error,
    height: '50px',
  },
}

export const centerContent = {
  centerContent: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}

export const italic = {
  italic: {
    fontStyle: 'italic',
    fontFamily: Fonts.ptSerif,
  },
}

export const highlightAnimation = (theme) => ({
  '@keyframes highlightRow': {
    '0%': {
      border: `1px solid ${theme.palette.common.white}`,
    },
    '50%': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '100%': {
      border: `1px solid ${theme.palette.common.white}`,
    },
  },
  card: {
    border: `1px solid ${theme.palette.common.white}`,
  },
  highlight: {
    animation: '$highlightRow 3s',
  },
})

export const highlightAnimationInTable = (theme) => ({
  '@keyframes highlightRow': {
    '0%': {
      backgroundColor: 'inherit',
    },
    '50%': {
      backgroundColor: theme.palette.primary.light,
    },
    '100%': {
      backgroundColor: 'inherit',
    },
  },
  highlight: {
    animation: '$highlightRow 3s',
  },
})

export const roundWhiteBox = (theme) => ({
  roundWhiteBox: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4,
    boxShadow: theme.shadows[1],
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
  },
})

export default {
  centerContent,
  errorLabel,
  italic,
  link,
  logoImg,
  roundWhiteBox,
  textField,
}
