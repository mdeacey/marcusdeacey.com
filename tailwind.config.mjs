import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Semantic color system - centralized color control
        bg: {
          primary: {
            light: 'stone-100',
            dark: 'stone-900',
          },
          secondary: {
            light: 'stone-100/75',
            dark: 'stone-900/25',
          },
          surface: {
            light: 'stone-200',
            dark: 'stone-800',
          },
          elevated: {
            light: 'stone-100',
            dark: 'stone-900',
          },
        },
        text: {
          primary: {
            light: 'black/50',
            dark: 'white/75',
          },
          heading: {
            light: 'black',
            dark: 'white',
          },
          accent: {
            light: 'black',
            dark: 'white',
          },
        },
        border: {
          primary: {
            light: 'black/15',
            dark: 'white/20',
          },
          subtle: {
            light: 'black/10',
            dark: 'white/10',
          },
        },
        decoration: {
          primary: {
            light: 'black/15',
            dark: 'white/30',
          },
          hover: {
            light: 'black/25',
            dark: 'white/50',
          },
        },
        interactive: {
          hover: {
            light: 'black/5',
            dark: 'white/5',
          },
        },
      },
      fontSize: {
        // Complete Tailwind font scale (matching official defaults)
        'xs': ['0.75rem', { lineHeight: '1rem' }],          // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],       // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],          // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],       // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],        // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],           // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],      // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],        // 36px
        '5xl': ['3rem', { lineHeight: '1' }],                // 48px
        '6xl': ['3.75rem', { lineHeight: '1' }],             // 60px
        '7xl': ['4.5rem', { lineHeight: '1' }],              // 72px
        '8xl': ['6rem', { lineHeight: '1' }],                // 96px
        '9xl': ['8rem', { lineHeight: '1' }],                // 128px

        // Semantic font sizes for consistent use
        'body': ['1rem', { lineHeight: '1.5rem' }],          // Body text (16px)
        'meta': ['0.875rem', { lineHeight: '1.25rem' }],     // Meta info, dates (14px)
        'heading': ['1.5rem', { lineHeight: '2rem' }],       // Page headings (24px)
        'subheading': ['1.25rem', { lineHeight: '1.75rem' }], // Section headings (20px)
        'card': ['1.125rem', { lineHeight: '1.75rem' }],     // Card titles (18px)
        'caption': ['0.75rem', { lineHeight: '1rem' }],      // Captions, small labels (12px)
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      theme: {
        extend: {
          typography: {
            DEFAULT: {
              css: {
                h1: {
                  fontSize: '1.5rem',
                  lineHeight: '2rem',
                },
                h2: {
                  fontSize: '1.25rem',
                  lineHeight: '1.75rem',
                },
                h3: {
                  fontSize: '1.125rem',
                  lineHeight: '1.75rem',
                },
                h4: {
                  fontSize: '1rem',
                  lineHeight: '1.5rem',
                },
                h5: {
                  fontSize: '0.875rem',
                  lineHeight: '1.25rem',
                },
                h6: {
                  fontSize: '0.75rem',
                  lineHeight: '1rem',
                },
              }
            }
          }
        }
      }
    }),
  ],
};
