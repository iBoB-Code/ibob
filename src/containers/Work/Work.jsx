import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Step, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Harvest from './components/Harvest.jsx';
import Display from './components/Display.jsx';
import Train from './components/Train.jsx';
import { changeActiveStep, crawl, crawlerOn, crawlerOff, clearData } from '../../actions/workActions';

const selector = (data) => {
  switch (data.steps.active) {
    case 'harvest':
      return (<Harvest crop={data.crop} />);
    case 'display':
      return (<Display crop={data.crop} />);
    case 'train':
      return (<Train crop={data.crop} />);
    default:
      return 'AN ERROR OCCURED';
  }
};

@connect(store => ({
  steps: store.home.steps,
  crop: store.harvest.crop,
  isCrawling: store.harvest.isCrawling,
  pageToCrawl: store.harvest.pageToCrawl,
}))
export default class Work extends Component {
  constructor(props) {
    super(props);
    this.launchCrawl = this.launchCrawl.bind(this);
    this.loop = this.loop.bind(this);
    this.stopCrawl = this.stopCrawl.bind(this);
    this.clearData = this.clearData.bind(this);
  }

  loop(init) {
    if (this.props.isCrawling || init) {
      this.props.dispatch(crawl(this.props.pageToCrawl));
      setTimeout(() => this.loop(false), 4000);
    }
  }

  launchCrawl() {
    if (!this.props.isCrawling) {
      this.props.dispatch(crawlerOn());
      this.loop(true);
    }
  }

  stopCrawl() {
    if (this.props.isCrawling) {
      this.props.dispatch(crawlerOff());
    }
  }

  clearData() {
    this.props.dispatch(clearData());
  }
  render() {
    return (
      <div id="work">
        <div className="container">
          <div className="stepMenu">
            <Step.Group>
              <Step onClick={() => this.props.dispatch(changeActiveStep('harvest'))} completed={this.props.steps.harvestCompleted} active={this.props.steps.active === 'harvest'} icon="eye" title="Step One" description="Harvest Data" />
              <Step onClick={() => this.props.dispatch(changeActiveStep('display'))} completed={this.props.steps.displayCompleted} active={this.props.steps.active === 'display'} icon="bar chart" title="Step Two" description="Display Data" />
              <Step onClick={() => this.props.dispatch(changeActiveStep('train'))} completed={this.props.steps.trainCompleted} active={this.props.steps.active === 'train'} icon="settings" title="Step Three" description="Use Data" />
            </Step.Group>
          </div>
          <div className="currentStep">
            {
              selector(this.props)
            }
          </div>
          <Button.Group>
            <Button positive onClick={this.launchCrawl}>Start Crawl</Button>
            <Button.Or />
            <Button negative onClick={this.stopCrawl}>Stop Crawl</Button>
            <Button.Or />
            <Button color="black" onClick={this.clearData}>Clear Data</Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  dispatch: PropTypes.func,
  isCrawling: PropTypes.bool,
  pageToCrawl: PropTypes.number,
  steps: PropTypes.object,
};

Work.defaultProps = {
  dispatch: () => console.log('ERROR'),
  isCrawling: false,
  pageToCrawl: 0,
  steps: {},
};
