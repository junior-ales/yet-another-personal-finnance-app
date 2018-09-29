import * as moment from 'moment';
import { AppState, TrackingPeriod } from '../../../shared/store';
import { selectedTrackingPeriod } from '../selector';

describe('Tracking Period View Selector', () => {
  const endDate = moment();
  const startDate = moment();

  const stateWithoutSelection: AppState = {
    trackingPeriods: { allId: [], byId: {}, selected: null },
    transactions: { allId: [], byId: {}, selected: null }
  };

  const stateWithTPSelected: AppState = {
    trackingPeriods: {
      allId: ['123'],
      byId: {
        '123': {
          endDate,
          id: '123',
          initialBudget: 0,
          plannedSavings: 0,
          startDate
        }
      },
      selected: '123'
    },
    transactions: { allId: [], byId: {}, selected: null }
  };

  it('should get a selected tracking period', () => {
    const actualTrackingPeriod: TrackingPeriod | null = selectedTrackingPeriod(
      stateWithTPSelected
    );

    const expectedTrackingPeriod: TrackingPeriod = {
      endDate,
      id: '123',
      initialBudget: 0,
      plannedSavings: 0,
      startDate
    };

    expect(actualTrackingPeriod).toEqual(expectedTrackingPeriod);
  });

  it('should get null when there is no tracking period selected', () => {
    const actualTrackingPeriod: TrackingPeriod | null = selectedTrackingPeriod(
      stateWithoutSelection
    );

    expect(actualTrackingPeriod).toBeNull();
  });
});
