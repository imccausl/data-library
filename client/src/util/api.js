const DOMAIN = 'http://localhost'
const PORT = '3000'

export default {
    root: `${DOMAIN}:${PORT}`,
    endpoint: {
        device: '/device',
        devices: '/devices',
        plans: '/plans'
    }
}
