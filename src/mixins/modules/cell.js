export default {
  cellSize: (mixin, size) => {
    return {
      [`&[size='${size}']`]: {
        'min-height': `${size/2}px`,
        padding: `${size * 0.15}px 0`,
        '.v-cell-label': {
          'margin-top': `${size * 0.05}px`
        }
      }
    }
  }
}