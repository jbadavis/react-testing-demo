import {render} from '@testing-library/react';
import ModuleList from './module-list';

describe('ModuleList', () => {
  const mockModules = [
    {
      title: 'Foo',
      href: '/foo',
    },
    {
      title: 'Bar',
      href: '/bar',
    },
  ];

  let container: HTMLElement;

  beforeEach(() => {
    container = render(<ModuleList moduleList={mockModules} />).container;
  });

  test('renders correctly', () => {
    expect(container).toMatchSnapshot();
  });

  test('renders the correct number of items', () => {
    expect(container.querySelectorAll('li')).toHaveLength(mockModules.length);
  });
});
