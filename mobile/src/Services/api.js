
// ─── IMPORT ─────────────────────────────────────────────────────────────────────

import axios from 'axios';

// ─── AXIOS ──────────────────────────────────────────────────────────────────────

const api = axios.create({
    baseURL: 'http://ip:3333'
});

export default api;