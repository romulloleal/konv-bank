import { Box, Grid } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, Flip } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

import Routes from './routes'

const App = () => {
  return (
    <>
      <Grid container justifyContent='center'>
        <header>Konv Bank</header>
        <Grid item xs={12} md={8}>
          <Box sx={{ padding: '10px 20px' }}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </>
  )
}

export default App
