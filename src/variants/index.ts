// global
export const fadeVariants = {
  fadeIn: {
    opacity: 1,
  },
  fadeOut: {
    opacity: 0,
  },
};

// hamburger menu

export const topBarVariants = {
  open: {
    d: 'M 0 20 L 20 0',
    stroke: '#fff',
  },
  closed: {
    d: 'M 0 1 L 20 1',
    stroke: '#fff',
  },
};

export const middleBarVariants = {
  open: {
    opacity: 0,
  },
  closed: {
    opacity: 1,
  },
};

export const bottomBarVariants = {
  open: {
    d: 'M 0 0 L 20 20',
    stroke: '#fff',
  },
  closed: {
    d: 'M 0 18 L 20 18',
    stroke: '#fff',
  },
};
