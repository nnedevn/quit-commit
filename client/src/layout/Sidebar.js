import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Mainsidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      sidebarWidth: '',
    }
    this.handleViewSidebar = this.handleViewSidebar.bind(this);
    this.setWidth = this.setWidth.bind(this);
  }

  handleViewSidebar() {
    //Works
    console.log('sidebar open',this.state.sidebarOpen);
    console.log('sidebar width',this.state.sidebarWidth);
  	this.setState({ sidebarOpen: !this.state.sidebarOpen });
  }

  setWidth(width) {
    this.setState({ sidebarWidth: width })
  }

  render() {
    const sidebarOpen = this.state.sidebarOpen;
    const slideFrom = {
      left: 'left',
      right: 'right',
    }
    const transitionTypes = {
      overlay: 'overlay',
      push: 'push',
    }
    const links = (
      <ul className="sidebarlinks">
        <li>
          <Link to="/stats">Stats</Link>
        </li>
        <li>
          <Link to="/journal">Journal</Link>
        </li>
        <li>
          <Link to="/reward">Reward</Link>
        </li>
        <li>
          <Link to="/connect">Connect</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
    );
    return (
      <div className='outer-container'>
        <Sidebar
          isOpen={sidebarOpen}
          showOverlay={true}
          slideFrom={slideFrom.left}
          width={this.state.sidebarWidth}
        >
           {links}
        </Sidebar>
        <Content transition={transitionTypes.push} sidebarWidth={this.state.sidebarWidth}>
        </Content>
        <SideBarTarget toggleSidebar={this.handleViewSidebar}>
          <button>Toggle</button>
        </SideBarTarget>
      </div>
    )
  }
}

class Sidebar extends React.Component {

  componentDidMount() {
    console.log('is open prop', this.props.isOpen);
    console.log('width prop', this.props.width);
    console.log('this.sidebar', this.sidebar);
  }

  render() {
    const overlayOpen = this.props.isOpen ? 'overlay overlay--open' : 'overlay' ;
    const sidebarOpen = this.props.isOpen ? 'sidebar sidebar--open' : 'sidebar' ;
    const slideFrom = (this.props.isOpen) ? '' : 'sidebar--left' ;
    const classNames = [sidebarOpen, slideFrom].join(' ');
    console.log('classnames', classNames);

    return (
      <div>
      {this.props.showOverlay ? (
        <div>
          <div className={overlayOpen} />
          <div className={classNames} ref={(element) => {this.sidebar = element; }}>
            <div className='sidebar__menu'>
              {this.props.children}
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames} ref={(element) => {this.sidebar = element; }}>
          <div className='sidebar__menu'>
            {this.props.children}
          </div>
        </div>
      )}
      </div>
    );
  }

}

class SideBarTarget extends React.Component {

  render() {
    return (
      <div className='button-wrap' onClick={this.props.toggleSidebar}>
        {this.props.children}
      </div>
    );
  }

}


class Content extends React.Component {
  render() {
    const { sidebarWidth } = this.props;


    const willPush = this.props.transition == 'push' ? 'sidebar__content--push' : '';
    const classNames = ['sidebar__content', willPush].join(' ');
    return (
      <div className={classNames}>
        {this.props.children}
      </div>
    )
  }
}

export default Mainsidebar;
