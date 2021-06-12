import { namespace } from '../src/utils/constants';

describe('namespace', () => {
  it('test namespace', () => {
    expect(namespace.GLOBAL).toBe('global');
  });
});
