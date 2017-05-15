import selectedOptions, { ADD_TRIED_BACK } from './selectedOptions';

describe('selectedOptions reducer', () => {
  let initialState = {
      currentOption: null,
      options: [{
        id: "5",
        tried: true
      },
      {
        id: "3",
        tried: true
      }
    ]
  };
  it('should update the current option going from 0 untried items to 1 untried item from null to the option id', () => {
    expect(
      selectedOptions(initialState, {
        type: ADD_TRIED_BACK,
        id: "5"
      }).currentOption
    ).toEqual(
      "5"
    );
  });
  it('should change the option tried status from true to false', () => {
    expect(
      selectedOptions(initialState, {
        type: ADD_TRIED_BACK,
        id: "3"
      }).options[1].tried
    ).toEqual(
      false
    );
  });
});
