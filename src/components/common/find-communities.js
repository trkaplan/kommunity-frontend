import React from 'react';
import styled from 'styled-components';
import CommunityCard from '@/components/common/cards/community-card';

const SearchBox = styled.input.attrs({
  placeholder: 'Search for existing communities, type in your keyword',
})`
  width: 90%;
  border: 1px solid #ced4da;
  padding: .375rem .75rem;
  border-radius: .25rem;
  font-size: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
;`

const Section = styled.section`
  color: black;
  padding: 3em;
  background: #F6F6F6;
`

class FindCommunities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      populars: [
        {name: "Beşiktaş Topluluğu", id: "135135"},
        {name: "Antalya Topluluğu", id: "236273"},
        {id:"313666"}
      ],
      results: [
        {name: "Arama sonucu bu", id: "239273"},
      ]
    };
  }

  componentDidMount(){
    this.getPopularCommunities();
  }

  handleChange = (e) => {
    // Update searchValue State
    this.setState({
      searchValue: e.target.value
    });
    this.getResults();
  }

  // TODO: Get popular communities data and update state[populars].
  getPopularCommunities = () => {
    // this.setState({
    //   populars: 
    // });
  }
  
  // TODO: Get search results data and update state[results].
  getResults = () => {
    // this.setState({
    //   results: 
    // });
  }
  
  render() {
    const { searchValue, results, populars } = this.state
    return (
      <div>
        <Section>
          <Title>Find Communities!</Title>
          <SearchBox
            type="text"
            value={searchValue}
            onChange={this.handleChange}/>
          <h3>Results</h3>
          {(
            //If search box is empty display popular communities
            searchValue === ""
            ?
            populars.map(community =>
              <CommunityCard key={community.id} name={community.name}/>
              )
              : // Else Show search results!
              results.map(community =>
                <CommunityCard key={community.id} name={community.name}/>
            )
          )}
        </Section>
      </div>
    );
  }
}

export default FindCommunities;
