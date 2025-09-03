export const theme = {
  colors: {
    primary: '#0a7ea4',
    background: '#ffffff',
    text: '#11181C',
    border: '#CCCCCC',
    card: '#F3F4F6',
    onPrimary: '#ffffff', // texto sobre fondo primary
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
  },
} as const;

// Tipos para autocompletado
export type Theme = typeof theme;