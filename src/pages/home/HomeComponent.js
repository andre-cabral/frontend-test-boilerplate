import * as React from 'react';

class HomeComponent extends React.Component {
  render() {
    const { welcome, isFetching, tipoLista } = this.props;
    console.log('welcome', welcome);
    console.log('carregando', isFetching);

    return (
      <React.Fragment>
        <h2>{welcome}</h2>
        {isFetching ? (<p>Carregando</p>) : ''}
        {tipoLista.map( item => {
          return <p key={item.codigo}>{item.nome}</p>
        })}
      </React.Fragment>
    );
  }
}

export default HomeComponent;
