import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#527F9F',
            dark: '#466D89',
        },
        secondary: {
            main: '#719A83',
        },
        warning: {
            main: '#ff9800',
        },
        text: {
            primary: '#23415C',
            secondary: '#58738A',
        },
        success: {
            main: '#719A83',
            light: '#DCEBE2',
        },
        info: {
            main: '#527F9F',
            light: '#DCEAF2',
        },
        background: {
            default: '#F6F9F8',
            paper: '#FFFFFF',
        },
        divider: '#D6E2E8',
    },
    typography: {
        fontFamily: 'Inter',
        // Головний заголовок сторінки
        h1: {
            fontSize: '34px',
            fontWeight: 600,
            lineHeight: 1.2,
        },
        // Заголовки секцій
        h2: {
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: 1.2,
        },
        // Заголовки карток
        h3: {
            fontSize: '22px',
            fontWeight: 700,
            lineHeight: 1.2,
        },
        // Заголовки менших карток (назви міст: "Lviv", "Prague")
        h4: {
            fontSize: '17px',
            fontWeight: 600,
            lineHeight: 1,
        },
        // Назва проєкту / логотип у верхній шапці
        h5: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.375,
        },
        // Заголовки інформаційних плашок і підказок
        h6: {
            fontSize: '15px',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        // Пункти навігації та посилання у футері
        subtitle1: {
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.43,
        },
        // Дрібні жирні підписи й статуси в картках ("Selected · Open guide")
        subtitle2: {
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1.5,
        },
        // Основний текст, текст у полях вводу та вступний абзац під h1
        body1: {
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        // Звичайні й довгі описи, назви країн, підказки під інпутами
        body2: {
            fontSize: '13px',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        // Текст усередині кнопок
        button: {
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'none',
        },
        // Найдрібніший текст: дисклеймери, копірайт, перемикач мов "EN / UA"
        caption: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: 1.6,
        },
        // Маленький КАПС над заголовками ("EXPLORE THE CITY GUIDES")
        overline: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: 1.33,
            letterSpacing: '0.02em',
        },

    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 12,
            },
        },
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#689f38',
                color: 'default',
            },
        },
    },
    shape: {
        borderRadius: 18,
    },
    components: {
        MuiAppBar: {
            color: 'default',
        },
    },
}
);