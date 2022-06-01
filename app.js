class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar" class="box">
        <div>
          <ul>
            <li>Dashboard</li>
            <li>Widget</li>
            <li>Customers</li>
            <li>Online Analysis</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    );
  }
}

class HeadBox1 extends React.Component {
  render() {
    return (
      <div id="head-box1" class="box">
        <div>
          <h3> Reviews</h3>
          <ul>
            <li class="num">1,281</li>
          </ul>
        </div>
      </div>
    );
  }
}

class HeadBox2 extends React.Component {
  render() {
    return (
      <div id="head-box2" class="box">
        <div>
          <h3> Average Rating</h3>
          <ul>
            <li class="num">4.6 out of 5</li>
          </ul>
        </div>
      </div>
    );
  }
}

class HeadBox3 extends React.Component {
  render() {
    return (
      <div id="head-box3" class="box">
        <div>
          <h3>Sentiment Analysis</h3>
          <ul>
            <li class="num">960 +</li>
            <li class="num">122 -</li>
          </ul>
        </div>
      </div>
    );
  }
}

class BodyBox extends React.Component {
  render() {
    return (
      <div id="bottom-box" class="box">
        <div>
          <h3>Website Visitors</h3>
          <ul>
            <li id="num-large">821</li>
          </ul>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Sidebar />
        <HeadBox1 />
        <HeadBox2 />
        <HeadBox3 />
        <BodyBox />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("main"));
