import * as React from 'react';

class SelectFromListComponent extends React.Component {
  render() {
    const { id, label, defaultOption, list } = this.props;

    return (
      <React.Fragment>
        <div className='select-list'>
          <label htmlFor={id}>{label}</label>
          <select id={id} disabled={list.length < 1}>
            <option value="">{defaultOption}</option>
            {list.map((item) => 
              <option key={item.codigo} value={item.codigo}>{item.nome}</option>
            )}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectFromListComponent;
