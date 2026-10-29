# 🎓 AGRUPA - Sistema de Gerenciamento de Grupos

Este projeto é focado em otimizar tempo, gestão de grupos e organização em sala de aula.  
O front-end foi desenvolvido utilizando **Angular** e **Bootstrap**.

---

# 🚀 1. Visão Geral

O **AGRUPA** visa orientar a execução da interface do sistema, facilitando a interação entre professores e alunos no processo de formação de grupos.

---

# 📂 2. Estrutura do Projeto

A arquitetura do front-end está organizada da seguinte forma:

```bash
src/app/features
```
Contém os módulos de funcionalidades principais, como `home` e `professor`.

```bash
src/app/pages
```
Páginas independentes, incluindo a área do aluno (`entrar-sessao`, `validar-identidade`) e a página `sobre`.

```bash
src/app/services
```
Lógica de negócios e integração com a API.

```bash
src/app/shared
```
Componentes reutilizáveis como `header` e `modal`.

```bash
models
```
Definições de interfaces e classes de dados.

---

# 🛠️ 3. Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- ✅ **Node.js**: Versão 20 ou superior.
- ✅ **Angular CLI**: Instale globalmente via terminal:

```bash
npm install -g @angular/cli
```

> [!IMPORTANT]
> É extremamente importante que você esteja conectado na mesma rede Wi-Fi que o professor/host da sessão.  
> Caso contrário, a aplicação não funcionará corretamente.

---

# ⚙️ 4. Como Rodar o Projeto

## 1️⃣ Instalar Dependências

Navegue até a pasta raiz do projeto (`AGRUPA`) e execute:

```bash
npm install
```

---

## 2️⃣ Executar o Servidor

Inicie a aplicação com o comando:

```bash
npm start
```

#### ⚠️ Após o carregamento, acesso o link exibido no terminal.

---

## 3️⃣ Encerrar o Servidor

Para parar a execução, utilize o atalho no terminal:

```bash
CTRL + C
```

---

# 🗺️ 5. Estrutura de Navegação

| Caminho | Descrição |
|---|---|
| `home` | Tela de acesso inicial do professor |
| `professor` | Área administrativa e criação de atividades |
| `atividade-grupos` | Gerenciamento em tempo real dos grupos |
| `qrcodes` | Geração de QR Code ou Hash para os alunos |
| `entrar-sessao` | Acesso do aluno via código Hash |
| `validar-identidade` | Identificação do aluno (nome e sobrenome) |
| `sessao-grupos` | Escolha do grupo por parte do aluno |

---

# ⚠️ 6. Observações Importantes

### 🔗 Integração Back-end
Se o servidor Spring Boot estiver local, verifique se as portas e endpoints da API estão corretos.

---

# 🧠 7. Conceitos Chave

### 📦 Node.js
Ambiente que permite rodar JavaScript fora do navegador e gerenciar scripts como o `start.js`.

### 📚 Node Modules
Pasta onde residem todas as bibliotecas de terceiros necessárias para o funcionamento do app.

### 🅰️ Angular
Framework baseado em TypeScript que organiza a interface em componentes e serviços.

### 🌐 Acesso em Rede
O script `start.js` funciona como um servidor que distribui os arquivos estáticos (`HTML`, `CSS` e `JS`) para outros dispositivos na rede.

---

## 🌐 Créditos

Front-End desenvolvido por:  
[Clara Joaquim](https://www.linkedin.com/in/clarajoaquim/) ✦ [Kaique Souza](https://www.linkedin.com/in/kaique-souzaa/)

---
