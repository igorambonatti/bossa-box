# Projeto feito em um desafio da BossaBox (ツ)

### Desafio | Frontend Developer

> **Link da aplicação no Netlify:** https://determined-mclean-10d7f4.netlify.app/

## ATENÇÃO, É NECESSÁRIO RODAR UM BACKEND FAKE, QUE FOI DISPONIBILIZADO PELA BOSSABOX NO SEGUINTE LINK:

- https://gitlab.com/bossabox/challenge-fake-api/tree/master

> Garanta que o json-server rode na porta 3000, caso queria mudar a porta, basta mudar a rota utilizada em src/services/api.js no arquivo do frontend.

---

## Instruções caso queira rodar o FRONTEND localmente:

- Faça o download da aplicação e rode o comando **yarn install** para instalar todas as dependencias do projeto;
- Após installar todas as dependencias, rode **yarn start** para vizualizar a aplicação na web(Cuidado para não "roubar" a porta 3000);

> Garanta que você possui o Node.js e o Yarn devidamente instalado.

---

### Resumo:

- Projeto construido utilizando HTML, CSS E JavaScipt com a biblioteca React e todo seu ecossistema. Busquei me aproximar ao máximo do layout modelo utilizando parte do style-guide da sugerido, dando vida com JavaScript.

---

### Layout:

- Layout construido de forma simples, procurando trazer simplicidade e desempenho. Utilizei os styled componentes buscando aplimorar e simplificar o CSS.

---

### Funcionamento da página:

- Inicialmente a página carrega de forma em que o useEffect tem a função de carregar a lista das ferramentas presentes iniciais da fake api. Com a requisição feita, e a lista já armazenada em um estado da aplicação, uso o método .map que faz a leitura do estado e me devolve os itens que são carregados em tela.

- Com todo o layout carregado, apresenta-se as funcionalidades de procurar, adicionar e excluir as ferramnetas, sendo executadas a partir do preenchimento e click no botão de submit.

---

### Ferramentas/Bibliotecas utilizadas:

- Axios
- Reactotron (utlizado para debug em ambiente de desenvolvimento)
- ReactJs
- Redux
- Redux Saga
- Styled Components
- Eslint, editorConfig, prettierrc(Buscando padronizar o código)

---

**Obrigado (ツ)**
