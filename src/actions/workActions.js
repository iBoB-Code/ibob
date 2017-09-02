import axios from 'axios';

export function changeActiveStep(val) {
  return {
    type: 'CHANGE_ACTIVE_STEP',
    payload: val,
  };
}

export function crawl(page) {
  const size = 5;
  return (dispatch) => {
    dispatch({ type: 'CRAWL' });
    axios.get(`https://www.bienici.com/realEstateAds.json?filters={%22size%22:${size},%22from%22:${page * size},%22filterType%22:%22rent%22,%22propertyType%22:[%22flat%22],%22sortBy%22:%22publicationDate%22,%22sortOrder%22:%22desc%22,%22onTheMarket%22:[true],%22zoneIdsByTypes%22:{%22zoneIds%22:[%22-35738%22]},%22resultsPerPage%22:2700,%22showAllModels%22:false}`)
    .then((response) => {
      console.log(response);
      dispatch({ type: 'CRAWL_FULFILLED', payload: response.data.realEstateAds.filter(elem => elem.title) });
    })
    .catch((err) => {
      dispatch({ type: 'CRAWL_REJECTED', payload: err });
    });
  };
}

export function crawlerOn() {
  return {
    type: 'SWITCH_CRAWLER',
    payload: true,
  };
}

export function crawlerOff() {
  return {
    type: 'SWITCH_CRAWLER',
    payload: false,
  };
}
export function clearData() {
  return {
    type: 'CLEAR_DATA',
  };
}
