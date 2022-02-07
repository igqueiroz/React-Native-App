
const envMode = (process.env.APP_ENV === 'DEV') ? 'DEV' : 'PRD'
module.exports = {
    "expo": {
      "name": (envMode === 'DEV') ? "agenda4pets" : "agenda4pets-debug",
      "slug": (envMode === 'DEV') ? "agenda4pets" : "agenda4pets-debug",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "updates": {
        "fallbackToCacheTimeout": 0
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "web": {
        "favicon": "./assets/favicon.png"
      },
      "description": "",
      "android": {
        "package": "agenda.apk"
      },
      "extra": {
        "APP_ENV": envMode
      }
    }
  }
  