import React from 'react';
import Header from '@/components/common/header';
import FindCommunities from '@/components/common/find-communities';
import Footer from '@/components/common/footer';
import Button from '@/components/ui/button';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home">
          hello world!
          <div className="mb-2">
            <Button size="small" type="primary" label="Button" />
            <Button size="medium" type="primary" label="Button" />
            <Button size="large" type="primary" label="Button" />
            <Button size="large" type="primary" disabled={true} label="Button" />
          </div>
          <div className="mb-2">
            <Button size="small" type="secondary" label="Button" />
            <Button size="medium" type="secondary" label="Button" />
            <Button size="large" type="secondary" label="Button" />
            <Button size="large" type="secondary" disabled={true} label="Button" />
          </div>
          <div className="mb-2">
            <Button size="small" type="outline" label="Button" />
            <Button size="medium" type="outline" label="Button" />
            <Button size="large" type="outline" label="Button" />
            <Button size="large" type="outline" disabled={true} label="Button" />
          </div>
          <div className="mb-2">
            <Button size="small" type="danger" label="Button" />
            <Button size="medium" type="danger" label="Button" />
            <Button size="large" type="danger" label="Button" />
            <Button size="large" type="danger" disabled={true} label="Button" />
          </div>
          <div>
            <Button size="small" type="plain" label="Button" />
            <Button size="medium" type="plain" label="Button" />
            <Button size="large" type="plain" label="Button" />
            <Button size="large" type="plain" disabled={true} label="Button" />
          </div>

        </div>
        <FindCommunities/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
