import React from "react"

const SiteContext = React.createContext({
  socialMedia: {
    nodes: [],
  },
  contactData: {
    items: [],
  },
})

export default SiteContext
