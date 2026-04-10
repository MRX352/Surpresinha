# 🎁 Surpresinha - Declaração de Amor

Um site lindo e responsivo com uma declaração de amor, criado com React, Tailwind CSS e muito carinho.

## 📋 Requisitos

- Node.js 18+
- npm ou pnpm

## 🚀 Como Usar Localmente

```bash
# 1. Clone o repositório
git clone https://github.com/MRX352/Surpresinha.git
cd Surpresinha

# 2. Instale as dependências
pnpm install
# ou
npm install

# 3. Inicie o servidor de desenvolvimento
pnpm dev
# ou
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

## 🏗️ Build para Produção

```bash
pnpm build
# ou
npm run build
```

Os arquivos buildados estarão em `dist/public/`

## 📤 Deploy em Plataformas Populares

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist/public
```

### GitHub Pages
1. Vá para Settings > Pages
2. Selecione "Deploy from a branch"
3. Escolha a branch `main` e pasta `/root`
4. Salve

### Railway
1. Conecte seu repositório GitHub
2. Selecione este repositório
3. Railway fará o deploy automaticamente

## 🎨 Personalizações

- **Cores:** Edite `client/src/index.css` para mudar a paleta de cores
- **Textos:** Edite `client/src/pages/Home.tsx` para alterar o conteúdo
- **Imagens:** Coloque suas fotos em `client/public/images/`

## 📱 Responsivo

O site é totalmente responsivo e funciona perfeitamente em:
- Desktop
- Tablet
- Mobile

## ❤️ Créditos

Criado com amor usando React, Tailwind CSS e muito carinho.

---

**Dúvidas?** Abra uma issue no repositório!
