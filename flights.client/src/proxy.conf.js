const PROXY_CONFIG = [
  {
    context: [
      "/flight",
    ],
    target: "https://localhost:7094",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
