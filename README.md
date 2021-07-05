# Weather App

Desenvolvido com `ReactJS`, Weather mostra como esta o clima na sua região.

<img src="images/main.png" width="600" alt="App"/>

# Setup

## Tecnologias

* [`React`](https://github.com/facebook/react)
* [`Typescript`](https://www.typescriptlang.org/)
* [`styled-components`](https://github.com/styled-components/styled-components)
* [`axios`](https://axios-http.com/)
  
## API's

- [`Mapbox`](https://docs.mapbox.com/api/overview/) - Retornar o região do usuário
- [`OpenWeatherMap`](https://openweathermap.org/api) - Para obter previsões com base em região.

Você precisa configurar o arquivo `.env` com as chaves das APIs como variáveis de ambiente para fazer este projeto funcionar. No projeto tem um arquivo chamado `.exemple.env` como exemplo.

# Features

* Usar a localização atual do usuário
* Clima atual da região do usuário
* A imagem de fundo muda conforme o clima

<div align="center">

<img width="400" src="images/main.png"/>
 
<img width="400" src="images/clear.png"/>

<img width="400" src="images/drizzle.png"/>

</div>

# Run

```sh
$ git clone https://github.com/andretimm/weather-by-location.git
$ cd weather-by-location
//Baixar dependências backend
$ yarn install
$ yarn start
```