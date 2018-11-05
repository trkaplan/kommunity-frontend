import { connect } from 'react-redux';
import MemberProfile from '@/components/pages/member-profile';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(MemberProfile);
