# Weather App

Desenvolvido com `ReactJS`, Weather mostra como esta o clima na sua região.

![clear](https://user-images.githubusercontent.com/8572757/124406806-b45ed700-dd18-11eb-9aff-c449c1700241.PNG)


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

![drizzle](https://user-images.githubusercontent.com/8572757/124406813-bd4fa880-dd18-11eb-8aa2-f8f87b9f1f53.PNG)
  
![main](https://user-images.githubusercontent.com/8572757/124406817-c17bc600-dd18-11eb-9186-b80ba541f0c3.PNG)
  
![clear](https://user-images.githubusercontent.com/8572757/124406818-c3458980-dd18-11eb-8346-d4d52bb6905b.PNG)


</div>

# Run

```sh
$ git clone https://github.com/andretimm/weather-by-location.git
$ cd weather-by-location
//Baixar dependências backend
$ yarn install
$ yarn start
```
