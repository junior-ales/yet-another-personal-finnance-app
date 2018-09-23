import * as React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Action, ActionCreator, Dispatch } from 'redux';

import { ActionKeys } from './shared/action';
import { AppState, initialState, TrackingPeriod } from './shared/store';

export interface OtherAction extends Action {
  type: ActionKeys.OTHER_ACTION;
  payload: {};
}

export interface CreateTrackingPeriodAction extends Action {
  type: ActionKeys.CREATE_TRACKING_PERIOD;
  payload: TrackingPeriod;
}

export type ActionsType = CreateTrackingPeriodAction | OtherAction;

// const otherAction: ActionCreator<OtherAction> = () => ({
//   payload: {},
//   type: ActionKeys.OTHER_ACTION
// });

const createTrackingPeriod: ActionCreator<CreateTrackingPeriodAction> = () => ({
  payload: {
    endDate: new Date(),
    id: '123',
    initialBudget: 0,
    plannedSavings: 0,
    startDate: new Date()
  },
  type: ActionKeys.CREATE_TRACKING_PERIOD
});

// selector

const allTrackingPeriods = (state: AppState): TrackingPeriod[] =>
  state.trackingPeriods.allId.map(id => state.trackingPeriods.byId[id]);

interface AppProps {
  onCreateTrackingPeriod: () => void;
  trackingPeriods: TrackingPeriod[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = initialState;
  }

  public createTrackingPeriod = () => {
    this.props.onCreateTrackingPeriod();
  };

  public render() {
    return (
      <section>
        <header>
          <h1>Financeiro</h1>
        </header>

        <section>
          <h2>Clique em inicio para comecar a organizar sua vida financeira</h2>
        </section>

        <button type="button" onClick={this.createTrackingPeriod}>
          Inicio
        </button>

        <p>{JSON.stringify(this.props.trackingPeriods)}</p>
      </section>
    );
  }
}

interface StateToProps {
  trackingPeriods: TrackingPeriod[];
}

const mapStateToProps: MapStateToProps<StateToProps, {}, AppState> = state => ({
  trackingPeriods: allTrackingPeriods(state)
});

interface DispatchToProps {
  onCreateTrackingPeriod: () => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: Dispatch<ActionsType>
) => ({
  onCreateTrackingPeriod: () => dispatch(createTrackingPeriod())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
