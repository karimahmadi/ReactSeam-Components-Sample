/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { ModalProvider } from '@tatareact/core/Modal';
import { ChqMenu } from '@tatareact/core/ChqMenu';
import { ThemeProvider } from '@tatareact/core/ThemeProvider';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Grid } from '@tatareact/core/Grid';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import TabControl from '../pages/TabControl';
import SearchContract from '../pages/searchContract';
import Page3 from '../pages/page3';
import TreeView from '../pages/TreeView';
import Modal from '../pages/Modal';

function App() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <BrowserRouter>
          <Grid container spacing={0}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <ChqMenu
                items={[
                  { title: 'page1', url: '/page1' },
                  { title: 'page2', url: '/page2' },
                  { title: 'page3', url: '/page3' },
                  { title: 'TabControl', url: '/TabControl' },
                  { title: 'searchContract', url: '/searchContract' },
                  { title: 'treeView', url: '/treeView' },
                  { title: 'test modal', url: '/modal' },
                ]}
              />
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ padding: '5px' }}
            >
              <Switch>
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/TabControl" component={TabControl} />
                <Route path="/searchContract" component={SearchContract} />
                <Route path="/treeView" component={TreeView} />
                <Route path="/modal" component={Modal} />
              </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
