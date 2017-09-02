const defaults = {
  socialDesc: '',
  steps: { active: 'harvest', harvestCompleted: false, displayCompleted: false, trainCompleted: false },
  error: null,
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
    case 'CHANGE_SOCIAL_DESC': {
      return {
        ...state,
        socialDesc: action.payload,
      };
    }
    case 'CHANGE_ACTIVE_STEP': {
      return {
        ...state,
        steps: Object.assign({}, state, { active: action.payload }),
      };
    }
    default : {
      console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
      return state;
    }
  }
}
