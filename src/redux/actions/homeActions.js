export function changeSocialDesc(val) {
  return {
    type: 'CHANGE_SOCIAL_DESC',
    payload: val,
  };
}

export function completedStep(val) {
  return {
    type: 'COMPLETED_STEP',
    payload: val,
  };
}

export function changeActiveStep(val) {
  return {
    type: 'CHANGE_ACTIVE_STEP',
    payload: val,
  };
}
