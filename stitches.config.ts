import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

import {
    green,
    greenDark,
    blue,
    blueDark,
    slate,
    slateDark,
    tomato,
    tomatoDark,
    indigo,
    indigoDark,
} from '@radix-ui/colors';

const stitches = createStitches({
    prefix: 'local-ads',
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        animation: '(prefers-reduced-motion: no-preference)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
    theme: {
        space: {
            0: '0px',
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        sizes: {
            0: '0px',
            1: '5px',
            2: '10px',
            3: '15px',
            4: '20px',
            5: '25px',
            6: '35px',
            7: '45px',
            8: '65px',
            9: '80px',
        },
        fontSizes: {
            1: '12px',
            2: '13px',
            3: '15px',
            4: '17px',
            5: '19px',
            6: '21px',
            7: '27px',
            8: '35px',
            9: '59px',
        },
        fonts: {
            body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
            heading: 'inherit',
            monospace: 'Menlo, monospace',
            untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        fontWeights: {
            body: 400,
            normal: 400,
            heading: 700,
            bold: 700,
        },
        lineHeights: {
            body: 1.5,
            heading: 1.125,
        },
        radii: {
            1: '0px',
            2: '0px',
            3: '0px',
            4: '0px',
            round: '50%',
            pill: '9999px',
        },
    },
    utils: {
        p: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
            paddingLeft: value,
            paddingRight: value,
        }),
        pt: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
        }),
        pr: (value: Stitches.ScaleValue<'space'>) => ({
            paddingRight: value,
        }),
        pb: (value: Stitches.ScaleValue<'space'>) => ({
            paddingBottom: value,
        }),
        pl: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
        }),
        px: (value: Stitches.ScaleValue<'space'>) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: Stitches.ScaleValue<'space'>) => ({
            paddingTop: value,
            paddingBottom: value,
        }),

        m: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
            marginLeft: value,
            marginRight: value,
        }),
        mt: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
        }),
        mr: (value: Stitches.ScaleValue<'space'>) => ({
            marginRight: value,
        }),
        mb: (value: Stitches.ScaleValue<'space'>) => ({
            marginBottom: value,
        }),
        ml: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value,
        }),
        mx: (value: Stitches.ScaleValue<'space'>) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: Stitches.ScaleValue<'space'>) => ({
            marginTop: value,
            marginBottom: value,
        }),

        ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

        fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
        fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

        ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
        ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
        jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
        as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
        fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
        fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
        fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

        bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
            backgroundColor: value,
        }),

        br: (value: Stitches.ScaleValue<'radii'>) => ({
            borderRadius: value,
        }),
        btrr: (value: Stitches.ScaleValue<'radii'>) => ({
            borderTopRightRadius: value,
        }),
        bbrr: (value: Stitches.ScaleValue<'radii'>) => ({
            borderBottomRightRadius: value,
        }),
        bblr: (value: Stitches.ScaleValue<'radii'>) => ({
            borderBottomLeftRadius: value,
        }),
        btlr: (value: Stitches.ScaleValue<'radii'>) => ({
            borderTopLeftRadius: value,
        }),

        bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

        lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

        ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
        oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

        pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
        us: (value: Stitches.PropertyValue<'userSelect'>) => ({ WebkitUserSelect: value, userSelect: value }),

        size: (value: Stitches.ScaleValue<'space'>) => ({
            width: value,
            height: value,
        }),

        linearGradient: (value: string) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),

        appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
            WebkitAppearance: value,
            appearance: value,
        }),
        userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
            WebkitUserSelect: value,
            userSelect: value,
        }),
        backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value,
        }),
    },
});

export const {
    styled, css, keyframes, config, globalCss, createTheme, theme,
} = stitches;

// Server side rendering
export const { getCssText } = stitches;

// -- Stitches TYPES
// CSS Type for css prop of custom components
export type CSS = Stitches.CSS<typeof config>;
export type CSSProp = { css?: CSS };
export interface StyledComponentProps {
    css?: CSS
}
// Create prop types of variants
export type VariantProps<T> = Stitches.VariantProps<T>;

// Light Theme
export const lightTheme = createTheme({
    colors: {
        ...slate,
        baseBg: 'white',
        subtleBg: slate.slate1,

        accentBg: green.green3,
        accentBgHover: green.green4,
        accentBgActive: green.green5,
        accentLine: green.green6,
        accentBorder: green.green7,
        accentBorderHover: green.green8,
        accentSolid: green.green9,
        accentSolidHover: green.green10,
        accentText: green.green11,
        accentTextContrast: green.green12,

        primaryBg: blue.blue3,
        primaryBgHover: blue.blue4,
        primaryBgActive: blue.blue5,
        primaryLine: blue.blue6,
        primaryBorder: blue.blue7,
        primaryBorderHover: blue.blue8,
        primarySolid: blue.blue9,
        primarySolidHover: blue.blue10,
        primaryText: blue.blue11,
        primaryTextContrast: blue.blue12,

        neutralBg: slate.slate2,
        neutralBgHover: slate.slate3,
        neutralBgActive: slate.slate4,
        neutralLine: slate.slate5,
        neutralBorder: slate.slate6,
        neutralBorderHover: slate.slate7,
        neutralSolid: slate.slate8,
        neutralSolidHover: slate.slate9,
        neutralText: slate.slate11,
        neutralTextContrast: slate.slate12,

        dangerBg: tomato.tomato3,
        dangerBgHover: tomato.tomato4,
        dangerBgActive: tomato.tomato5,
        dangerLine: tomato.tomato6,
        dangerBorder: tomato.tomato7,
        dangerBorderHover: tomato.tomato8,
        dangerSolid: tomato.tomato9,
        dangerSolidHover: tomato.tomato10,
        dangerText: tomato.tomato11,
        dangerTextContrast: tomato.tomato12,

        infoBg: indigo.indigo3,
        infoBgHover: indigo.indigo4,
        infoBgActive: indigo.indigo5,
        infoLine: indigo.indigo6,
        infoBorder: indigo.indigo7,
        infoBorderHover: indigo.indigo8,
        infoSolid: indigo.indigo9,
        infoSolidHover: indigo.indigo10,
        infoText: indigo.indigo11,
        infoTextContrast: indigo.indigo12,

        // Semantic colors
        shadowLight: 'hsl(206 22% 7% / 35%)',
        shadowDark: 'hsl(206 22% 7% / 20%)',
        disabledBg: '$neutralLine',
        disabledText: '$neutralText',
    },
});

// Dark Theme
export const darkTheme = createTheme({
    colors: {
        baseBg: slateDark.slate1,
        subtleBg: slateDark.slate2,

        accentBg: greenDark.green3,
        accentBgHover: greenDark.green4,
        accentBgActive: greenDark.green5,
        accentLine: greenDark.green6,
        accentBorder: greenDark.green7,
        accentBorderHover: greenDark.green8,
        accentSolid: greenDark.green9,
        accentSolidHover: greenDark.green10,
        accentText: greenDark.green11,
        accentTextContrast: greenDark.green12,

        primaryBg: blueDark.blue3,
        primaryBgHover: blueDark.blue4,
        primaryBgActive: blueDark.blue5,
        primaryLine: blueDark.blue6,
        primaryBorder: blueDark.blue7,
        primaryBorderHover: blueDark.blue8,
        primarySolid: blueDark.blue9,
        primarySolidHover: blueDark.blue10,
        primaryText: blueDark.blue11,
        primaryTextContrast: blueDark.blue12,

        neutralBg: slateDark.slate3,
        neutralBgHover: slateDark.slate4,
        neutralBgActive: slateDark.slate5,
        neutralLine: slateDark.slate6,
        neutralBorder: slateDark.slate7,
        neutralBorderHover: slateDark.slate8,
        neutralSolid: slateDark.slate9,
        neutralSolidHover: slateDark.slate10,
        neutralText: slateDark.slate11,
        neutralTextContrast: slateDark.slate12,

        dangerBg: tomatoDark.tomato3,
        dangerBgHover: tomatoDark.tomato4,
        dangerBgActive: tomatoDark.tomato5,
        dangerLine: tomatoDark.tomato6,
        dangerBorder: tomatoDark.tomato7,
        dangerBorderHover: tomatoDark.tomato8,
        dangerSolid: tomatoDark.tomato9,
        dangerSolidHover: tomatoDark.tomato10,
        dangerText: tomatoDark.tomato11,
        dangerTextContrast: tomatoDark.tomato12,

        infoBg: indigoDark.indigo3,
        infoBgHover: indigoDark.indigo4,
        infoBgActive: indigoDark.indigo5,
        infoLine: indigoDark.indigo6,
        infoBorder: indigoDark.indigo7,
        infoBorderHover: indigoDark.indigo8,
        infoSolid: indigoDark.indigo9,
        infoSolidHover: indigoDark.indigo10,
        infoText: indigoDark.indigo11,
        infoTextContrast: indigoDark.indigo12,

        // Semantic colors
        shadowLight: 'hsl(206 22% 7% / 20%)',
        shadowDark: 'hsl(206 22% 7% / 35%)',
        disabledBg: slateDark.slate8,
        disabledText: slateDark.slate2,
    },
});

// Global Styles
const globalStyles = globalCss({
    html: {
        boxSizing: 'border-box',
    },

    '*': { boxSizing: 'inherit' },
    '*::before': { boxSizing: 'inherit' },
    '*::after': { boxSizing: 'inherit' },

    body: {
        background: '$background',
        color: '$foreground',
        margin: 0,
        fontFamily: '$untitled',
    },
});

globalStyles();
