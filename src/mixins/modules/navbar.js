export default {
  navbarSize: (mixin, size) => {
    return {
      [`&[size='${size}']`]: {
        height: `${size/2}px`,
        '.v-navbar-prefix,.v-navbar-suffix': {
          'min-width': `${Math.floor(size * 0.8)}px`
        }
      }
    }
  },
  navbarType: (mixin, name,  color) => {
    return {
      [`&[type='${name}']`]: {
        'background-color': color
      }
    }
  }
}