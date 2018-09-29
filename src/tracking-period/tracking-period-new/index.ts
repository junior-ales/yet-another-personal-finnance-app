import { History } from 'history';
import { connect, MapDispatchToProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ActionsType } from '../../shared/action';
import { TrackingPeriod } from '../../shared/store';
import { saveTrackingPeriod } from './action';
import { TrackingPeriodNew } from './TrackingPeriodNew';

interface DispatchToProps {
  onSaveTrackingPeriod: (
    trackingPeriod: TrackingPeriod,
    history: History
  ) => void;
}

const mapDispatchToProps: MapDispatchToProps<DispatchToProps, {}> = (
  dispatch: ThunkDispatch<{}, {}, ActionsType>
) => ({
  onSaveTrackingPeriod: (trackingPeriod, history) =>
    dispatch(saveTrackingPeriod(trackingPeriod, history))
});

export type TrackingPeriodNewProps = DispatchToProps & RouteComponentProps;

export default (withRouter as any)(
  connect(
    null,
    mapDispatchToProps
  )(TrackingPeriodNew)
);
