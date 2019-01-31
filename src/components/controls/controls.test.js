import React from 'react';
import { shallow } from 'enzyme';
import Controls from './controls.component';

describe('Component: Controls', () => {
  it('renders', () => {
    const component = shallow(
      <Controls
        disabled={false}
        openQueryInfo={jest.fn()}
        serviceName="service"
      />
    );
    const button = component.find('WithStyles(SpeedDial)');
    expect(button.exists()).toBe(true);
  });
});
