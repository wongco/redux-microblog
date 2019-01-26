import { TEST } from './actionTypes';

export function testActionCreator(payloadObj) {
  return {
    type: TEST,
    payload: payloadObj
  };
}
