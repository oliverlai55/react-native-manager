import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // [] is key interpolation if input is 'name' then prop is 'name', if its 'shift', its shift
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
