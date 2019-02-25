import React from 'react';
import { shallow } from 'enzyme';
import Notes from './notes.component';

let notes;
let removeNote;

describe('Component: Notes', () => {
  beforeEach(() => {
    notes = [
      { id: 'random-note', message: 'This is a random note' },
    ];
    removeNote = jest.fn();
  });

  it('renders', () => {
    const component = shallow(<Notes removeNote={jest.fn()} notes={notes} />);
    const note = component.find('WithStyles(Snackbar)');
    expect(note.exists()).toBe(true);
  });
});
