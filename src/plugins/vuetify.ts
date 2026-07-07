import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const luxuryDark = {
  dark: true,
  colors: {
    background: '#090a0f',
    surface: '#131520',
    primary: '#8b5cf6',
    secondary: '#ec4899',
    accent: '#06b6d4',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
  },
}

const luxuryLight = {
  dark: false,
  colors: {
    background: '#f5f3ff',
    surface: '#ffffff',
    primary: '#7c3aed',
    secondary: '#db2777',
    accent: '#0891b2',
    error: '#dc2626',
    info: '#2563eb',
    success: '#059669',
    warning: '#d97706',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'luxuryDark',
    themes: {
      luxuryDark,
      luxuryLight,
    },
  },
})

export default vuetify