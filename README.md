# 📝 WeNote

**WeNote** é uma plataforma moderna de anotações colaborativas, desenvolvida para quem busca **organização, produtividade e trabalho em equipe** num só lugar.

A proposta é simples: permitir que você crie, edite e compartilhe notas de forma **intuitiva** e **em tempo real**, sem abrir mão da performance e da escalabilidade.

## 🚀 Tecnologias utilizadas

O projeto está sendo desenvolvido com foco em **performance**, **componentização** e **manutenibilidade**. Atualmente, as principais tecnologias são:

-   **Next.js** – Framework fullstack React com roteamento baseado em arquivos.
-   **React** – Biblioteca de construção de interfaces.
-   **TypeScript** – Tipagem estática para maior segurança no desenvolvimento.
-   **Tailwind CSS** – Estilização utilitária moderna e responsiva.

## 📦 Estrutura do projeto

O WeNote segue uma abordagem baseada em **Clean Architecture**, separando responsabilidades por camadas:

```
src/
├── app/ # Rotas e páginas (App Router do Next.js)
├── interfaces/ # Componentes de UI, hooks e utils
├── domain/ # Entidades e regras de negócio
├── use-cases/ # Casos de uso
├── infrastructure/ # Implementações concretas (db, auth, etc)
```
