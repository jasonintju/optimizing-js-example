import React from 'react';
import _ from 'lodash';
import { arraySum } from '@utils/utils';
import './Docs.scss';

class Docs extends React.Component {
  render() {
    const sum = arraySum([1, 3]);
    const b = _.sum([1, 3]);
    return (
      <div className="page-docs">
        <h1>Docs Page</h1>
        <div> 1 plus 3 equals {sum}</div>
        <br />
        <div>use _.sum, 1 plus 3 equals {b} too.</div>
      </div>
    );
  }
}
export default Docs;
