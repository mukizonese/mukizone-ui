module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/tradedemo',
        //destination: 'http://localhost:3002/',
        destination: process.env.NEXT_PUBLIC_DEMO_TRADING_URL,
        permanent: true,
      },
      {
        source: '/tradeaichatdemo',
        //destination: 'http://localhost:3002/',
        destination: process.env.NEXT_PUBLIC_DEMO_TRADING_AICHAT_URL,
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ]
  },
  output: "standalone"
}