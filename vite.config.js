import { defineConfig } from 'vite';
//welcome page
export default defineConfig({
    root: 'src',
    server: {
        port: 5173,
        open: '/templates/auth/login.html'
    }
});