import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';

import CommunityList from '@/components/pages/communities';

const mapStateToProps = () => ({});
const mapActionsToProps = {};

export default withNamespaces('translations')(connect(mapStateToProps, mapActionsToProps)(CommunityList));
