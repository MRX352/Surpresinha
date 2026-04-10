# 🚀 Configurar GitHub Pages (5 minutos)

Siga estes passos para deixar seu site online no GitHub Pages:

## Passo 1: Fazer o Build Localmente

```bash
cd Surpresinha
pnpm install
pnpm build
```

Isso cria a pasta `dist/public/` com os arquivos prontos.

## Passo 2: Fazer Push para o GitHub

```bash
git add .
git commit -m "build: arquivos prontos para deploy"
git push origin main
```

## Passo 3: Ativar GitHub Pages

1. Vá para seu repositório: https://github.com/MRX352/Surpresinha
2. Clique em **Settings** (engrenagem no topo)
3. No menu lateral, clique em **Pages**
4. Em "Build and deployment":
   - **Source:** Selecione "Deploy from a branch"
   - **Branch:** Selecione `main`
   - **Folder:** Selecione `/root` (ou `/` se não aparecer)
5. Clique em **Save**

## Passo 4: Aguarde o Deploy

GitHub vai fazer o build automaticamente. Aguarde 2-5 minutos.

Seu site estará em: **https://MRX352.github.io/Surpresinha**

## ✅ Pronto!

Seu site de declaração de amor está online! 💕

---

**Dúvidas?** Verifique se:
- ✓ O repositório é público
- ✓ Você selecionou a branch `main`
- ✓ Você selecionou a pasta `/root`
