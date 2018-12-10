import React from 'react';
import { Query } from 'react-apollo';
import FeaturedCommunities from '@/components/pages/home/featured-communities';
import Loading from '@/components/ui/loading';
import { POPULAR_COMMUNITIES } from '@/containers/query';

const FeaturedCommunitiesContainer = () => (
  <Query query={POPULAR_COMMUNITIES}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading/>;
      }
      // TODO style error message
      if (error) {
        return (
          <div className="text-center">
            {"Sorry, we couldn't fetch popular communities."}
          </div>
        );
      }
      return (
        <FeaturedCommunities communityList={data.popularCommunities} />
      );
    }}
  </Query>
);

export default FeaturedCommunitiesContainer;
