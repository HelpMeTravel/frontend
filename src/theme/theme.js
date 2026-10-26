import { createTheme } from "@mui/material";
import { components } from "./components.js";
import { palette } from "./palette.js";
import { shape } from "./shape.js";
import { typography } from "./typography.js";

export function setupTheme() {
    return createTheme({
        palette: {
            ...palette,
            primary: {
                ...palette.primary,
                main: "#527F9F",
                dark: "#466D89"
            },
            secondary: {
                ...palette.secondary,
                main: "#719A83"
            },
            warning: {
                main: "#ff9800"
            },
            text: {
                ...palette.text,
                primary: "#23415C",
                secondary: "#58738A"
            },
            success: {
                main: "#719A83",
                light: "#DCEBE2"
            },
            info: {
                main: "#527F9F",
                light: "#DCEAF2"
            },
            background: {
                ...palette.background,
                default: "#F6F9F8",
                paper: "#FFFFFF"
            },
            divider: "#D6E2E8"
        },
        shape,
        typography: {
            ...typography,
            h1: {
                fontSize: "34px",
                fontWeight: 600,
                lineHeight: 1.2
            },
            h2: {
                fontSize: "24px",
                fontWeight: 600,
                lineHeight: 1.2
            },
            h3: {
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.2
            },
            h4: {
                fontSize: "17px",
                fontWeight: 600,
                lineHeight: 1
            },
            h5: {
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: 1.375
            },
            h6: {
                fontSize: "15px",
                fontWeight: 600,
                lineHeight: 1.4
            },
            subtitle1: {
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.43
            },
            subtitle2: {
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: 1.5
            },
            body1: {
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: 1.5
            },
            body2: {
                fontSize: "13px",
                fontWeight: 400,
                lineHeight: 1.6
            },
            button: {
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none"
            },
            caption: {
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: 1.6
            },
            overline: {
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: 1.33,
                letterSpacing: "0.02em"
            }
        },
        components: {
            ...components,
            MuiAppBar: {
                defaultProps: {
                    color: "inherit"
                },
                styleOverrides: {
                    colorInherit: {
                        backgroundColor: "#689f38",
                        color: "#FFFFFF"
                    }
                }
            }
        }
    });
}

export const theme = setupTheme();
