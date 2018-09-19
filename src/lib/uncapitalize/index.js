import { replace, pipe, toLower, toUpper } from 'ramda';

export default pipe(
  toUpper,
  replace(/^./, toLower),
);
