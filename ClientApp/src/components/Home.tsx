import * as React from 'react';
import { connect } from 'react-redux';
import { MainTable } from './MainTable';
import GetApi from './GetApi';

const Home = () => (
  <div>
    <h1>Assignment (React)</h1>
    <p>Page application to help an end-user manage the status of their voicemail box's messages.</p>
        <MainTable rows={[{
            id: '1',
            status: 'New',
            from: '8/4/2020',
            to: '8/15/2020',
            duration: '1:30'
        }]} />
        <GetApi {
            get :''
        } />
  </div>
);

export default connect()(Home);
