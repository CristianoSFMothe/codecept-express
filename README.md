# **CodeceptJS Express - Automação de Testes para Cadastro de Tarefas**

Este repositório contém a automação de testes utilizando **CodeceptJS** com **Playwright**, desenvolvido para um projeto de cadastro de tarefas. A estrutura abrange tanto a API quanto a interface web da aplicação, com um banco de dados **SQLite3**.

---

## **📋 Pré-requisitos**

Antes de executar o projeto, certifique-se de ter instalado em sua máquina:  
- **Node.js** ([Baixe aqui](https://nodejs.org))  
- **NPM** (incluso com o Node.js)  
- **Visual Studio Code** (VSCode) ([Baixe aqui](https://code.visualstudio.com/))
> Recomendado para edição e execução do projeto.

---

## **🔧 Configuração e Inicialização**

### **Passo 1: Configurar o Ambiente da API**

1. Acesse o diretório **MarkL**:  
   ```bash
   cd MarkL
   ```

2. Dentro do diretório, acesse a pasta **API**:  
   ```bash
   cd api
   ```

3. Instale as dependências:  
   ```bash
   npm i
   ```

4. Inicialize o banco de dados SQLite3:  
   ```bash
   npm run db:init
   ```

5. Inicie o serviço da API:  
   ```bash
   npm run dev
   ```

---

### **Passo 2: Configurar o Ambiente Web**

1. Retorne ao diretório **MarkL** e acesse a pasta **Web**:  
   ```bash
   cd ../web
   ```

2. Instale as dependências:  
   ```bash
   npm i
   ```

3. Inicie o serviço web da aplicação:  
   ```bash
   npm run dev
   ```

---

### **Passo 3: Configurar o CodeceptJS**

1. Instale o CodeceptJS com Playwright. Consulte a documentação oficial para detalhes:  
   [Setup CodeceptJS + Playwright](https://codecept.io/playwright/#setup)  

2. Na pasta do projeto onde será criada a automação, execute o comando abaixo para criar a estrutura inicial do CodeceptJS:  
   ```bash
   npx create-codeceptjs .
   ```  
   > **Nota**: O espaço seguido de `.` é essencial para criar o CodeceptJS dentro da pasta atual.

3. Configure o projeto com o comando:  
   ```bash
   npx codeceptjs init
   ```  
   Durante a execução, responda às perguntas de acordo com os requisitos do projeto.

---

## **🚀 Executando os Testes**

### **Executar todos os testes**
```bash
npx codeceptjs run
```

### **Executar um cenário de teste específico usando uma tag**
```bash
npx codeceptjs run --grep 'duplicate'
```

### **Executar testes com relatório em HTML**
Para gerar um relatório em formato **HTML** usando o **mochawesome**, execute:  
```bash
npx codeceptjs run --reporter mochawesome
```

---

## **🛠 Tecnologias Utilizadas**

- **CodeceptJS**: Framework de automação de testes.  
- **Playwright**: Ferramenta para execução de testes em navegadores.  
- **SQLite3**: Banco de dados para a API.  
- **Node.js**: Ambiente de execução para JavaScript no servidor.  

---

## **🤝 Contribuições**

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.  

---

## **📝 Licença**

Este projeto está licenciado sob a licença [MIT](LICENSE).  

---

Gostou do projeto? ⭐ Dê um **star** e compartilhe com a comunidade!  
