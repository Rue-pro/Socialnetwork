import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import {updateNewMessage, addMessage} from '../../redux/dialogsReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mstp = state => {return {...state.dialogsReducer}}

export default compose(
    connect(mstp, {updateNewMessage, addMessage}),
    withAuthRedirect
)(Dialogs)