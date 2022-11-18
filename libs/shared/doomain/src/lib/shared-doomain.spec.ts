import { sharedDoomain } from './shared-doomain';

describe('sharedDoomain', () => {
  it('should work', () => {
    expect(sharedDoomain()).toEqual('shared-doomain');
  });
});
