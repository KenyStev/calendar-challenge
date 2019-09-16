import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from './store';
import { theme } from './theme';
import { Box, Container } from './components';
import Calendar from './modules/Calendar';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <>
          <Helmet>
            <title>Calendar Challenge</title>

            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          </Helmet>
          <Box>
            <Container>
              <Calendar />
            </Container>
          </Box>
        </>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
