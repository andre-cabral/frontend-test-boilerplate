import * as React from 'react';

class LoadingComponent extends React.Component {
  render() {
    const { isLoading } = this.props;

    return (
      <React.Fragment>
        { isLoading ?
          <div className='loading'>
              <div className='loading__spinner'></div>
          </div>
          :
          ''
        }
        
      </React.Fragment>
    );
  }
}

export default LoadingComponent;
