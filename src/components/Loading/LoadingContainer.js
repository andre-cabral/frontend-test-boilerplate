import * as React from 'react';
import LoadingComponent from './LoadingComponent';

class LoadingContainer extends React.Component {
  render() {
    const ViewComponent = LoadingComponent;
    const {
      isLoading = false
    } = this.props;
    const viewComponentProps = {
      isLoading
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default LoadingContainer;
