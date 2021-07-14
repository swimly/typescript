export default {
  listSize: (mixin, size) => {
    return {
      [`&[size='${size}']`]: {
        margin: `${- Math.floor(size * 0.15)}`,
        '.v-list-item': {
          'min-height': `${size/2}px`,
          'padding': `${Math.floor(size * 0.15)}px 0`
        },
      }
    }
  }
}