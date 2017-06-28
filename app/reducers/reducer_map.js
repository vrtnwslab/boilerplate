export default function reducer (
  state = {
    'be': {
      'center': [4.4699, 50.5039],
      'scale': 12000,
      'width': 980,
      'height': 670,
      'selectedAdmin': 4,
      'adminNames': [
        'Land',
        'Gewesten',
        'Provincies',
        'Kantons',
        'Gemeenten'
      ]
    },
    'eu': {
      'center': [11, 54],
      'scale': 550,
      'width': 682,
      'height': 577,
      'selectedAdmin': 'europe',
      'adminNames': [
        'europe'
      ]
    },
    'uk': {
      'center': [0, 55.3781],
      'scale': 3000,
      'width': 980,
      'height': 1200,
      'selectedAdmin': 'westminster_constituencies',
      'adminNames': [
        'Westminster Constituencies'
      ]
    }
  }, action) {
  switch (action.type) {
    case 'SET_ADMIN': {
      return {
        ...state,
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}
