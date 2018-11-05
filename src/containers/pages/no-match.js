import { connect } from 'react-redux';
import NoMatch from '@/components/pages/no-match';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(NoMatch);
