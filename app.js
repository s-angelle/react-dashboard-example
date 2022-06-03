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

class Reviews extends React.Component {
  render() {
    return (
      <div id="reviews" class="box">
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

class AverageRating extends React.Component {
  render() {
    return (
      <div id="average-rating" class="box">
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

class SentimentAnalysis extends React.Component {
  render() {
    return (
      <div id="sentiment-analysis" class="box">
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

class WebsiteVisitors extends React.Component {
  render() {
    return (
      <div id="website-visitors" class="box">
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
        <Reviews/>
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("main"));
