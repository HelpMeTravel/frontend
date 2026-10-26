import { createTheme } from "@mui/material"
import { components } from "./components.js"
import { palette } from "./palette.js"
import { shape } from "./shape.js"
import { typography } from "./typography.js"

export function setupTheme() {
    return createTheme({
        palette,
        shape,
        typography,
        components
    });
}
