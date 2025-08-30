
# 🛒 E-Commerce Demo

![GitHub repo size](https://img.shields.io/github/repo-size/seu-usuario/seu-repositorio?color=green)
![GitHub last commit](https://img.shields.io/github/last-commit/seu-usuario/seu-repositorio?color=blue)
![GitHub stars](https://img.shields.io/github/stars/seu-usuario/seu-repositorio?style=social)
![GitHub forks](https://img.shields.io/github/forks/seu-usuario/seu-repositorio?style=social)

Este é um projeto de e-commerce desenvolvido para o meu portfólio, com foco em demonstrar habilidades em **desenvolvimento web full stack**.  
O objetivo é criar uma aplicação moderna, responsiva e funcional, simulando uma loja virtual com experiência de compra fluida e intuitiva.

---

## 🚀 Funcionalidades

✅ Listagem de produtos com imagens, preços e descrições  
✅ Sistema de busca e filtro de produtos  
✅ Adição e remoção de itens no carrinho  
✅ Cálculo automático do total de compras  
✅ Página de checkout simulada  
✅ Autenticação de usuários (login e registro)  
✅ Integração com API Fake para simulação de dados  

---

## 🛠️ Tecnologias Utilizadas

**Frontend:**  
- React.js / Next.js  
- HTML5, CSS3, TailwindCSS  

**Backend:**  
- Node.js, Express.js  

**Banco de Dados:**  
- MongoDB / PostgreSQL  

**Outros:**  
- Axios (consumo de API)  
- Context API / Redux (gerenciamento de estado)  

---

## 📸 Demonstração

![Demonstração do E-Commerce](https://via.placeholder.com/900x500.png?text=Preview+do+E-commerce)

---

## 📂 Como Executar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio




### Criando Projeto

npx create-next-app@15.1.6

npm install prisma@6.2.1

npm install @prisma/client@6.2.1

npx prisma init

npx prisma migrate dev
    name migration new -- add_initial_tables

    -> aterar algum campo da tabela
    npx prisma migrate dev -n rename-descripition-to-description

##  Commit
git status
git add .
git commit -m 'feat: add initial db tables' 

