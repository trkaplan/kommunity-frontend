import React from 'react';
import CommunityCard from '@/components/common/cards/community-card';
import { Title, Paragraph } from '@/components/ui';

class FindCommunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      popularCommunities: [
        { name: 'Beşiktaş Topluluğu', id: '135135' },
        { name: 'Antalya Topluluğu', id: '236273' },
        { id: '313666' },
      ],
      results: [
        { name: 'Arama sonucu bu', id: '239273' },
      ],
      displayCommunities: true,
    };
  }

  componentDidMount() {
    this.getPopularCommunities();
  }

  handleChange = (e) => {
    // Update searchValue State
    this.setState({
      searchValue: e.target.value,
    }, this.getResults);
  }

  // TODO: Get popular communities data and update state[popularCommunities]
  // if response is empty, set displayCommunities false
  getPopularCommunities = () => {
    // this.setState({
    //   popularCommunities
    // });

  }

  // TODO: Get search results data and update state[results]
  // if response is empty, set displayCommunities false
  getResults = () => {
    // this.setState({
    //   results
    // });
  }

  render() {
    const {
      searchValue, results, popularCommunities, displayCommunities,
    } = this.state;

    return (
      <section className="px-4 py-16">
        <div className="text-center">
          <Title extraClassName="text-center" type="h5">Find Communities!</Title>
          <input
            className="border rounded-lg outline-none w-6/12 mt-4 px-6 py-4"
            onChange={this.handleChange}
            placeholder="Search for existing communities, type in your keyword"
            value={searchValue}
            type="text"
          />
        </div>
        <Paragraph extraClassName="mt-8 text-center">
          { displayCommunities ? 'Results' : 'No communities found'}
        </Paragraph>
        {
          // If search box is empty display popular communities
          searchValue === ''
            ? popularCommunities.map(community => <CommunityCard key={community.id}
              name={community.name}/>)
            // Else Show search results!
            : results.map(community => <CommunityCard key={community.id}
              name={community.name}/>)
          }
      </section>
    );
  }
}

export default FindCommunities;
