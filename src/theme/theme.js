import { createTheme } from "@mui/material"

export function setupTheme() {
    const palette = {
        primary: {
            main: "#DCEAF2"
        },
        secondary: {
            main: "#DCEBE2"
        },
        text: {
            main: "#58738A"
        },
        background: {
            main: "#FFFFFF"
        },
        border: {
            main: "#D6E2E8"
        }
    };
    return createTheme({
        palette,
        shape: {
            borderRadius: 18,
        },
        typography: {
            fontFamily: "Inter",
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                    },
                },
            },
        },
    });
}
