import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from '@components/Header/Header';
import Home from '@containers/Home/Home';
// import About from '@containers/About/About';
// import Docs from '@containers/Docs/Docs';

// 代码分割 & 异步加载
const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '@containers/About/About'),
  loading() {
    return <div>Loading...</div>;
  }
});

const LoadableDocs = Loadable({
  loader: () => import(/* webpackChunkName: "docs" */ '@containers/Docs/Docs'),
  loading() {
    return <div>Loading...</div>;
  }
});

class App extends React.Component {
  componentDidMount() {
    LoadableAbout.preload();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={LoadableAbout} />
          <Route path="/docs" component={LoadableDocs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
