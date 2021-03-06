import expect from 'expect';
import reducer from '../../../../src/redux/reducers/model';
import { INITIAL_STATE } from '../../../../src/common/app-const';

const defaultState = INITIAL_STATE.model;

describe('Model Reducer', () => {
  describe('a call to the reducer', () => {
    describe('with an undefined state', () => {
      it('should return the default state', () => {
        expect(
                    reducer(undefined, defaultState)
                ).toEqual(defaultState);
      });
    });
  });
});
