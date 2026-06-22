# Portfólio de Serviços — Leandro Tenório

Landing page de serviços focada em conversão, construída em HTML + CSS + JavaScript puro (sem build, sem dependências). Pronta para deploy em Vercel, Netlify ou GitHub Pages.

## 🚀 Como rodar localmente

Basta abrir o `index.html` no navegador. Ou, para servir com live reload:

```bash
npx serve .
```

## 🌐 Deploy

- **Vercel / Netlify:** arraste a pasta ou conecte o repositório — detecta automaticamente como site estático.
- **GitHub Pages:** Settings → Pages → branch `main` → pasta `/root`.

## ✏️ Personalize antes de publicar

| Onde | O quê |
|------|-------|
| `index.html` — links `wa.me/...` (2 botões + botão flutuante) | **Adicione seu número de WhatsApp** com DDI/DDD: `https://wa.me/5511999999999?text=...` |
| `index.html` — seção de **Projetos** | Troque/adicione projetos e links reais |
| `index.html` — seção **Sobre** e estatísticas | Ajuste números e texto conforme preferir |
| `index.html` — `<meta>` Open Graph | Adicione uma imagem `og:image` para preview em redes sociais |
| `styles.css` — `:root` | Cores do tema (esmeralda + violeta por padrão) |

> 💡 **Dica de conversão:** considere adicionar depoimentos de clientes reais (prova social) na seção Sobre — é um dos maiores impulsionadores de conversão.

## 📁 Estrutura

```
portifolio-servicos/
├── index.html   # estrutura e conteúdo
├── styles.css   # design e responsividade
├── script.js    # menu, header e animações
└── README.md
```

## 🧱 Seções

Hero → Stack de tecnologias → Serviços → Projetos → Como funciona → Sobre → CTA de contato → Rodapé.
