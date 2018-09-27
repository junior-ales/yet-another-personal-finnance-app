import { AppState, TrackingPeriod } from '../../../shared/store';
import { selectedTrackingPeriod } from '../selector';

describe('Tracking Period View Selector', () => {
  const endDate = new Date();
  const startDate = new Date();

  const stateWithoutSelection: AppState = {
    editing: { trackingPeriod: null },
    trackingPeriods: { allId: [], byId: {}, selected: null }
  };

  const stateWithTPSelected: AppState = {
    editing: { trackingPeriod: null },
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
    }
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
