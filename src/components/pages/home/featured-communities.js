import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Link, Paragraph, Title,
} from '@/components/ui';

const avatarUrl = 'data:image/jpeg;base64,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';

const FeaturedCommunities = ({ communityList }) => (
  <div className="text-center">
    <Title type="h5" extraClassName="font-bold mb-14">
      Featured Communities
    </Title>
    <div className="flex flex-wrap justify-between">
      {communityList.map(({ uuid, name, desc }) => (
        <div key={uuid} className="w-3/12 px-4">
          <Link to={`/community/${uuid}`}>
            <Card applyPadding={false} shadow="md">
              <div className="bg-paleGrey pt-4">
                <div
                  className="bg-cover inline-block w-20 h-20 overflow-hidden rounded-4 border-white border-8"
                  style={{
                    backgroundImage: `url(${avatarUrl})`,
                    transform: 'translateY(24px)',
                  }}
              />
              </div>
              <div className="pt-12 pb-6 px-6">
                <Link
                  color="text-dark hover:text-primary"
                  extraClassName="font-bold"
                  to={`/community/${uuid}`}
                >
                  {name}
                </Link>
                <Paragraph extraClassName="mb-6">{desc}</Paragraph>
                <Button label="Join" styleType="outline" size="small"/>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
    <Link to="/communities" extraClassName="block mt-10">
      Discover all communities
    </Link>
  </div>
);

FeaturedCommunities.defaultProps = {
  communityList: [],
};

FeaturedCommunities.propTypes = {
  communityList: PropTypes.arrayOf(PropTypes.object),
};

export default FeaturedCommunities;
