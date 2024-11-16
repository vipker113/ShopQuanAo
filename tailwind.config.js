/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "sans-serif"],
        nonito: ["Nonito", "sans-serif"],
      },
      keyframes: {
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      colors: {
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#182230",
          900: "#101828",
          950: "#0C111D",
          1000: "#141414",
        },
        dark: {
          25: "#FAFAFA",
          50: "#F5F5F6",
          100: "#F0F1F1",
          200: "#ECECED",
          300: "#CECFD2",
          400: "#94969C",
          500: "#85888E",
          600: "#61646C",
          700: "#333741",
          800: "#1F242F",
          900: "#161B26",
          950: "#0C111D",
        },
        brand: {
          25: "#FCFAFF",
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          300: "#D6BBFB",
          400: "#B692F6",
          500: "#9E77ED",
          600: "#7F56D9",
          700: "#6941C6",
          800: "#53389E",
          900: "#42307D",
          950: "#2C1C57",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
          950: "#55160C",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
          950: "#4E1D09",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#DCFAE6",
          200: "#ABEFC6",
          300: "#75E0A7",
          400: "#47CD89",
          500: "#17B26A",
          600: "#079455",
          700: "#067647",
          800: "#085D3A",
          900: "#074D31",
          950: "#053321",
        },
        orange: {
          25: "#FEFAF5",
          50: "#FEF6EE",
          100: "#FDEAD7",
          200: "#F9DBAF",
          300: "#F7B27A",
          400: "#F38744",
          500: "#EF6820",
          600: "#F04F16",
          700: "#B93815",
          800: "#923F19",
          900: "#772917",
          950: "#511C10",
        },
        primary: {
          25: "#F5F8FF",
          50: "#EFF4FF",
          100: "#D1E0FF",
          200: "#B2CCFF",
          300: "#84ADFF",
          400: "#528BFF",
          500: "#2970FF",
          600: "#155EEF",
          700: "#004EEB",
          800: "#0040C1",
          900: "#00359E",
          950: "#002266",
          1100: "#030A65",
        },
        secondary: {
          DEFAULT: "#FFF4EA",
          700: "#344054",
        },
        tertiary: {
          600: "#475467",
        },
      },
      fontSize: {
        // *******
        "title-h1": [
          "72px",
          {
            lineHeight: "82px",
            fontWeight: "600",
          },
        ],
        "title-h2": [
          "60px",
          {
            lineHeight: "70px",
            fontWeight: "600",
          },
        ],
        "title-h3": [
          "48px",
          {
            lineHeight: "56px",
            fontWeight: "600",
          },
        ],
        "title-h4": [
          "38px",
          {
            lineHeight: "48px",
            fontWeight: "600",
          },
        ],
        "title-h5": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "xs-regular": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        "xs-medium": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "500",
          },
        ],
        "xs-semi-bold": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "600",
          },
        ],
        "xs-bold": [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "700",
          },
        ],

        "sm-regular": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
          },
        ],
        "sm-medium": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "sm-semi-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "sm-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "700",
          },
        ],

        "md-regular": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "md-medium": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "500",
          },
        ],
        "md-semi-bold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "600",
          },
        ],
        "md-bold": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "700",
          },
        ],

        "lg-regular": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "lg-medium": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "500",
          },
        ],
        "lg-semi-bold": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        "lg-bold": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "700",
          },
        ],

        "xl-regular": [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "400",
          },
        ],
        "xl-medium": [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "500",
          },
        ],
        "xl-semi-bold": [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        "xl-bold": [
          "20px",
          {
            lineHeight: "30px",
            fontWeight: "700",
          },
        ],

        "display-xs-regular": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "400",
          },
        ],
        "display-xs-medium": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "500",
          },
        ],
        "display-xs-semi-bold": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "600",
          },
        ],
        "display-xs-bold": [
          "24px",
          {
            lineHeight: "32px",
            fontWeight: "700",
          },
        ],

        "display-sm-regular": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "400",
          },
        ],
        "display-sm-medium": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "500",
          },
        ],
        "display-sm-semi-bold": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "600",
          },
        ],
        "display-sm-bold": [
          "30px",
          {
            lineHeight: "38px",
            fontWeight: "700",
          },
        ],

        "display-md-regular": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          },
        ],
        "display-md-medium": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
        "display-md-semi-bold": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-md-bold": [
          "36px",
          {
            lineHeight: "44px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],

        "display-lg-regular": [
          "48px",
          {
            lineHeight: "60px",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          },
        ],
        "display-lg-medium": [
          "48px",
          {
            lineHeight: "60px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
        "display-lg-semi-bold": [
          "48px",
          {
            lineHeight: "60px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-lg-bold": [
          "48px",
          {
            lineHeight: "60px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],

        "display-xl-regular": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          },
        ],
        "display-xl-medium": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
        "display-xl-semi-bold": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-xl-bold": [
          "60px",
          {
            lineHeight: "72px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],

        "display-2xl-regular": [
          "72px",
          {
            lineHeight: "90px",
            fontWeight: "400",
            letterSpacing: "-0.02em",
          },
        ],
        "display-2xl-medium": [
          "72px",
          {
            lineHeight: "90px",
            fontWeight: "500",
            letterSpacing: "-0.02em",
          },
        ],
        "display-2xl-semi-bold": [
          "72px",
          {
            lineHeight: "90px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          },
        ],
        "display-2xl-bold": [
          "72px",
          {
            lineHeight: "90px",
            fontWeight: "700",
            letterSpacing: "-0.02em",
          },
        ],
      },
      boxShadow: {
        sm: "0px 0px 0px 4px rgba(208, 213, 221, 0.24)",
        md: "0px 0px 0px 4px rgba(240, 68, 56, 0.24)",
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: "icon",
    }),
  ],
};
