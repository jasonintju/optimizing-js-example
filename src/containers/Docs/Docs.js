import React from 'react';
import Loadable from 'react-loadable';
import _ from 'lodash';
import { arraySum } from '@utils/utils';
import './Docs.scss';

class Docs extends React.Component {
  state = {
    ProdComponent: null
  };

  componentDidMount() {
    if (process.env.NODE_ENV === 'production') {
      const ProdComponent = Loadable({
        loader: () => import(/* webpackChunkName: "prod-component" */ './ProductionOnly'),
        loading() {
          return <div />;
        }
      });
      this.setState({ ProdComponent });
    }
  }

  render() {
    let { ProdComponent } = this.state;
    const sum = arraySum([1, 3]);
    const b = _.sum([1, 3]);
    return (
      <div className="page-docs">
        <h1>Docs Page</h1>
        <div> 1 plus 3 equals {sum}</div>
        <br />
        <div>use _.sum, 1 plus 3 equals {b} too.</div>
        {ProdComponent && <ProdComponent />}
      </div>
    );
  }
}
export default Docs;
