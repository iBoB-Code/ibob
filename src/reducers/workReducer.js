const defaults = {
  pageToCrawl: 0,
  crop: [],
  fetching: false,
  fetched: false,
  steps: { active: 'harvest', harvestCompleted: false, displayCompleted: false, trainCompleted: false },
  isCrawling: false,
  error: null,
};

export default function reducer(state = defaults, action) {
  switch (action.type) {
    case 'CRAWL': {
      return { ...state, fetching: true };
    }
    case 'CRAWL_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'CRAWL_FULFILLED': {
      console.log("#############", state.pageToCrawl);
      return {
        ...state,
        pageToCrawl: state.pageToCrawl + 1,
        fetching: false,
        fetched: true,
        response: action.payload,
        crop: state.crop.concat(action.payload),
      };
    }
    case 'SWITCH_CRAWLER': {
      return {
        ...state,
        isCrawling: action.payload,
      };
    }
    case 'CLEAR_DATA': {
      return {
        ...state,
        pageToCrawl: 0,
        crop: [],
      };
    }
    default : {
      console.log(`ACTION '${action.type}' CALLED BUT NOTHING DISPATCHED`);
      return state;
    }
  }
}
