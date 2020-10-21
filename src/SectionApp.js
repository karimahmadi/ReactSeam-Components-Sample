import React from 'react';
import {Section} from '@tatareact/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const TestSection = () => {
    return(
        <>
            <Section title="section title" width="50%" >
                content of section
            </Section>
            <Section title="section title" width="50%" grid>
                content of section
            </Section>
        </>
    );
};

function SectionApp() {
    const defaultTheme = createMuiTheme(theme);
    return (
        <ThemeProvider theme={defaultTheme}>
            <div className="App">
                Test Tata React Section Components
                <TestSection/>
            </div>
        </ThemeProvider>
    );
}

export default SectionApp;
