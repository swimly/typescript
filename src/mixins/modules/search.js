export default {
  searchSize: (mixin, size) => {
    return {
      [`&[size='${size}']`]: {
        height: `${size/2}px`,
        '.v-search-content': {
          padding: `0 ${Math.floot(size * 0.15)}px`
        },
        '.v-search-prefix': {
          'padding-left': `${Math.floot(size * 0.15)}px`,
        },
        '.v-search-suffix': {
          'padding-right': `${Math.floot(size * 0.15)}px`
        },
        '&[conner="2"]': {
          'border-radius': `${size/2}px`
        }
      }
    }
  }
}