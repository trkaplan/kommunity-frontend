import { connect } from 'react-redux';
import Logout from '@/components/pages/logout';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Logout);
