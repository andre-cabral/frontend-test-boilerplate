import * as React from 'react';

class HomeContainer extends React.Component {
  render() {
    const ViewComponent = this.props.viewComponent;
    const {
      userStore: { welcome },
      uiStore: {isFetching}
    } = this.props;
    const viewComponentProps = {
      welcome,
      isFetching
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default HomeContainer;
