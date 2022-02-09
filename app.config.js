
const envMode = process.env.APP_ENV

module.exports = {
  "expo": {
    "owner": "andyarm",
    "name":  (envMode !== 'PRD') ? `Agenda4pets ${envMode}` :  "Agenda4pets",
    "slug": "agenda4pets",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon":  (envMode !== 'PRD') ? "./assets/icon-debug.png" : "./assets/icon.png",
    "splash": {
    "image":  (envMode !== 'PRD') ? "./assets/splash-debug.png" : "./assets/splash.png",
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
      "favicon":  (envMode !== 'PRD') ? "./assets/favicon-debug.png" : "./assets/favicon.png"
    },
    "description": "",
    "android": {
    "package":  (envMode !== 'PRD') ? "agenda_debug.apk" : "agenda.apk"
    },
    "extra": {
      "APP_ENV": envMode
    }
  }
}
  