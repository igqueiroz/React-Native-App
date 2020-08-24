import React, { createContext } from 'react'

const update = {
    lastUpdateDate: '',     // date
    currentVersion: '',     // date
    latestVersion: '',      // date
    updated: true,          // boolean
    tag: '0.1.0 ',          // tag release = git version tag
    apiVersion: ''          // current version of BFF API
}

export const ConfigContext = createContext()