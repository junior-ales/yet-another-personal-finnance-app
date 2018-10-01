import { default as numberFormatter } from 'format-number';

export const formatNumber = numberFormatter({
  padRight: 2,
  prefix: '£',
  round: 2,
  truncate: 2
});
