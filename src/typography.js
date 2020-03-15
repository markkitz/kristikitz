import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

const typography = new Typography(moragaTheme)

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;