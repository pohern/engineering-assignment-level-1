import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core"
import { SITE_TITLE } from "../constants"

function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{SITE_TITLE}</Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: 20 }}>{children}</div>
    </>
  )
}

export { Layout }
