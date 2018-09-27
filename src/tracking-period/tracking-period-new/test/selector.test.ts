import { AppState, TrackingPeriod } from '../../../shared/store';
import { editingTrackingPeriod } from '../selector';

describe('Tracking Period New Selector', () => {
  const endDate = new Date();
  const startDate = new Date();

  const initialState: AppState = {
    editing: { trackingPeriod: null },
    trackingPeriods: { allId: [], byId: {}, selected: null }
  };

  const editingTrackingPeriodState: AppState = {
    editing: {
      trackingPeriod: {
        endDate,
        id: '123',
        initialBudget: 50,
        plannedSavings: 25,
        startDate
      }
    },
    trackingPeriods: { allId: [], byId: {}, selected: null }
  };

  it('should get null editing tracking period on initial state', () => {
    expect(editingTrackingPeriod(initialState)).toBeNull();
  });

  it('should get editing tracking period', () => {
    const expectedTp: TrackingPeriod = {
      endDate,
      id: '123',
      initialBudget: 50,
      plannedSavings: 25,
      startDate
    };

    expect(editingTrackingPeriod(editingTrackingPeriodState)).toEqual(
      expectedTp
    );
  });
});
