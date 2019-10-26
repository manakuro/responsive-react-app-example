import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Grid  from '@material-ui/core/Grid';
import styledSystem from './utils/styledSystem'
import Media from './Media'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Heading fontSize={{ xs: 'h1' }}>Title here</Heading>
      <Media pc>
        <p>Hi I'm from PC</p>
      </Media>
      <Media mobile>
        <p>Hi I'm from mobile</p>
      </Media>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            bg={{xs: 'orange', sm: 'grey'}}
            fontSize={{xs: 'small', sm: 'medium', md: 'large'}}
            p={20}
            m="50px auto">
            This is a Box
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box2
            bg={{xs: 'orange', sm: 'grey'}}
            fontSize={{xs: 'small', sm: 'medium', md: 'large'}}
            p={20}
            m="50px auto">
            This is a Box
          </Box2>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box3
            bg={{xs: 'orange', sm: 'grey'}}
            fontSize={{xs: 'small', sm: 'medium', md: 'large'}}
            p={20}
            m="50px auto">
            This is a Box
          </Box3>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

const Box = styledSystem(styled.div``)
const Box2 = styledSystem(styled.div``)
const Box3 = styledSystem(styled.div``)
const Heading = styledSystem(styled.h1``)

export default App
