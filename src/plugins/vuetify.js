import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
export default createVuetify({
    theme: {
        defaultTheme: 'landingLight',
        themes: {
            landingLight: {
                dark: false,
                colors: {
                    background: '#F7F9FC',
                    surface: '#FFFFFF',
                    primary: '#2F6BFF',
                    secondary: '#101828',
                    accent: '#FF5B4D',
                    info: '#4EA2FF',
                    success: '#22C55E',
                },
            },
            landingDark: {
                dark: true,
                colors: {
                    background: '#0A1220',
                    surface: '#101828',
                    primary: '#4EA2FF',
                    secondary: '#E5EEFF',
                    accent: '#FF6B5E',
                    info: '#7CC5FF',
                    success: '#22C55E',
                },
            },
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});
