import React from 'react';
import {ModalProvider,useModal} from '@tatareact/core/Modal';
import {ChqMenu} from '@tatareact/core/ChqMenu';
import { ThemeProvider } from '@tatareact/core/ThemeProvider';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Grid from "@material-ui/core/Grid/Grid";

const TestModal = () => {
  const {openError} = useModal();
  return <button onClick={()=>openError("modal from tatareact code ")}>click me</button>
};

function App() {
  return (
      <ThemeProvider>
          <ModalProvider>
              <BrowserRouter>
                  <Grid container spacing={0}>
                      <Grid item lg={12} md={12} sm={12} xs={12}>
                           <ChqMenu items={[{title:'page1',url:'/page1'},{title:'page2',url:'/page2'}]}/>
                      </Grid>
                      <Grid item item lg={12} md={12} sm={12} xs={12} style={{padding:'5px'}}>
                          <Switch>
                              <Route path="/page1" component={Page1} />
                              <Route path="/page2" component={Page2} />
                          </Switch>
                      </Grid>
                  </Grid>
              </BrowserRouter>
          </ModalProvider>
      </ThemeProvider>
  );
}

export default App;
