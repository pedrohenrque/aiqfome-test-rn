# README - Desafio Mobile: Produtos Favoritos aiqfome

## 📱 Sobre o Projeto

Este aplicativo implementa a funcionalidade de "favoritos" para produtos do aiqfome, permitindo ao usuário:

- Listar produtos
- Marcar/desmarcar produtos como favoritos
- Visualizar apenas os itens favoritos
- Persistir os dados localmente

Desenvolvido com React Native para oferecer uma experiência mobile fluida e intuitiva.

## 🏗️ Arquitetura MVVM

Este projeto segue a arquitetura **Model-View-ViewModel (MVVM)** para melhor separação de responsabilidades:

- **Model**: Representa os dados e regras de negócio
- **View**: Camada de interface com o usuário (componentes React Native)
- **ViewModel**: Gerencia o estado da aplicação e se comunica com os Models

Esta arquitetura proporciona:

- Melhor testabilidade
- Separação clara de responsabilidades
- Manutenibilidade aprimorada
- Reutilização de código

## 🚀 Como iniciar o projeto em modo de desenvolvimento

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/) (gerenciador de pacotes recomendado)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (caso esteja utilizando Expo)
- [Android Studio](https://developer.android.com/studio) (para emulador Android)
- [Xcode](https://developer.apple.com/xcode/) (para emulador iOS - apenas macOS)
- Um dispositivo físico com o aplicativo Expo Go instalado (opcional)

### Instalação e Execução

1. **Clone o repositório**

   ```bash
   git clone https://github.com/pedrohenrque/aiqfome-test-rn.git
   cd aiqfome-test-rn
   ```

2. **Instale as dependências com pnpm**

   ```bash
   npm install
   ou
   pnpm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm start
   pnpm start
   ```

4. **Execute no dispositivo ou emulador**

   Com Expo:

   - Pressione `a` no terminal para abrir no emulador Android
   - Pressione `i` no terminal para abrir no emulador iOS
   - Escaneie o QR code com o aplicativo Expo Go em seu dispositivo físico

   Com React Native CLI:

   ```bash
   pnpm android
   # ou
   pnpm ios
   ```

## 🧪 Testando o aplicativo

- Navegue pela lista de produtos
- Teste adicionar e remover produtos dos favoritos
- Verifique a persistência dos favoritos fechando e reabrindo o aplicativo
- Teste a visualização de apenas produtos favoritos
- Verifique a compatibilidade com diferentes tamanhos de tela (se possível)
- Clique em Teste de Notificação para testá-la (é necessário um dispositivo físico para o teste, a notificação não será recebida caso esteja testando em um emulador)

## 🛠️ Tecnologias Utilizadas

- Expo
- React Native
- Arquitetura MVVM
- Context API para gerenciamento de estado
- AsyncStorage para persistência local de dados
- Stylesheet nativo para estilização
- pnpm como gerenciador de pacotes

## 🔍 Funcionalidades Implementadas

- [x] Listagem de produtos com título, imagem, preço e review
- [x] Adicionar/remover produtos aos favoritos
- [x] Visualização filtrada de produtos favoritos
- [x] Persistência local de dados
- [x] Integrações opcionais (Push Notifications, etc.)

## ⚙️ Configurações Adicionais

Para configurar integrações opcionais como Push Notifications, siga as instruções específicas na documentação respectiva:

- [Expo Notifications](https://docs.expo.dev/push-notifications/overview/)

## 📦 Gestão de Dependências com pnpm

Este projeto utiliza [pnpm](https://pnpm.io/) como gerenciador de pacotes devido às suas vantagens:

- **Economia de espaço em disco**: pnpm usa uma abordagem de armazenamento único para todos os pacotes
- **Instalação mais rápida**: devido ao seu sistema de cache eficiente
- **Melhor resolução de dependências**: evita instalações duplicadas

Para instalar o pnpm globalmente:

```bash
npm install -g pnpm
```
