import * as React from 'react';

class SelectFromListComponent extends React.Component {
  render() {
    const { id, label, defaultOption, list, onChange } = this.props;

    return (
      <React.Fragment>
        <div className='select-list'>
          <label className='select-list__label' htmlFor={id}>{label}</label>
          <select id={id} disabled={list.length < 1} onChange={event => onChange(event.target.value)}>
            <option value="">{defaultOption}</option>
            {list.map((item) => 
              <option key={`item.nome-${item.codigo}`} value={item.codigo}>{item.nome}</option>
            )}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectFromListComponent;
