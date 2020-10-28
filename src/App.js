import React from 'react';
import {ModalProvider} from '@tatareact/core/Modal';
import {ChqMenu} from '@tatareact/core/ChqMenu';
import { ThemeProvider } from '@tatareact/core/ThemeProvider';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Grid from "@material-ui/core/Grid/Grid";

function App() {
  return (
      <ThemeProvider>
          <ModalProvider>
              <BrowserRouter>
                  <Grid container spacing={0}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                           <ChqMenu items={[{title:'page1',url:'/page1'},{title:'page2',url:'/page2'}]}/>
                      </Grid>
                      <Grid item lg={12} md={12} sm={12} xs={12} style={{padding:'5px'}}>
                          <Switch>
                              <Route path="/page1" component={Page1} />
                              <Route path="/page2" component={Page2} />
                              <Route path="/page3" component={Page3} />
                          </Switch>
                      </Grid>
                  </Grid>
              </BrowserRouter>
          </ModalProvider>
      </ThemeProvider>
  );
}

export default App;
