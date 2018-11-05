import { connect } from 'react-redux';
import Login from '@/components/pages/login';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Login);
