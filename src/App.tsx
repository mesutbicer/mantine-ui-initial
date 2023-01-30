import {ColorScheme, MantineProvider, ColorSchemeProvider} from '@mantine/core';
import {NavbarSegmented} from "./navbar/NavbarSegmented";
import {ActionToggle} from "./darkLight/ActionToggle";
import {SegmentedToggle} from "./darkLight/SegmentedToggle";
import {useState} from "react";
import {NavbarMinimal} from "./navbar/NavbarMinimal";

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
                {/*<Text>Welcome to Mantine!</Text>*/}
                {/*<NavbarSimpleColored/>*/}
                {/*<NavbarSegmented/>*/}
                <NavbarMinimal/>
                {/*<ActionToggle/>*/}
                {/*<SegmentedToggle/>*/}
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
