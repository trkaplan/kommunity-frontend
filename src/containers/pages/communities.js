import { connect } from 'react-redux';
import CommunityList from '@/components/pages/communities';

const mapStateToProps = state => ({ state });
const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(CommunityList);
