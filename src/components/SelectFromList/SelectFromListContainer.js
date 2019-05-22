import * as React from 'react';
import SelectFromListComponent from './SelectFromListComponent';

class SelectFromListContainer extends React.Component {
  render() {
    const ViewComponent = SelectFromListComponent;
    const {
      id = '',
      list = [],
      label = '',
      defaultOption = ''
    } = this.props;
    const viewComponentProps = {
      id,
      list,
      label,
      defaultOption
    };

    return <ViewComponent {...viewComponentProps} />;
  }
}

export default SelectFromListContainer;
