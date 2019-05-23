export const VehicleDataKeyDictionary = key => {
  const dictionary = {
    'Valor': 'Valor',
    'Marca': 'Marca',
    'Modelo': 'Modelo',
    'AnoModelo': 'Ano',
    'Combustivel': 'Combustível',
    'CodigoFipe': 'Código Fipe',
    'MesReferencia': 'Mês de referẽncia',
    'TipoVeiculo': 'Tipo do veículo',
    'SiglaCombustivel': 'Sigla do combustível'
  };
  
  return dictionary[key];
}