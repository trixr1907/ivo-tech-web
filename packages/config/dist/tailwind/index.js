/**
 * Gemeinsame Tailwind-Konfiguration für alle Packages
 */
export const tailwindConfig = {
    content: [
        // App-Dateien
        './src/**/*.{js,jsx,ts,tsx}',
        // Monorepo-Packages
        '../../packages/ui/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                },
            },
        },
    },
    plugins: [],
};
