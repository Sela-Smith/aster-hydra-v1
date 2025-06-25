# ASTER-HYDRA

Solução para criação de múltiplos usuários simultâneos.

## Configuração para cPanel

1. **Configuração do Repositório no cPanel**
   - Acesse o cPanel da sua hospedagem
   - Vá em "Git Version Control"
   - Clique em "Clone a Repository"
   - Cole a URL do repositório: `https://github.com/Sela-Smith/aster-hydra-v1.git`
   - Defina o diretório de implantação (ex: `public_html`)
   - Clique em "Create"

2. **Configuração de Implantação Automática**
   - O arquivo `.cpanel.yml` já está configurado para implantação automática
   - Certifique-se de que o caminho em `DEPLOYPATH` está correto para o seu servidor

3. **Configurações Adicionais**
   - O arquivo `.htaccess` já inclui configurações para:
     - Redirecionamento HTTPS
     - Configurações de cache
     - Compressão GZIP
     - Regras para SPAs (Single Page Applications)

## Desenvolvimento Local

1. Clone o repositório:
   ```bash
   git clone https://github.com/Sela-Smith/aster-hydra-v1.git
   cd aster-hydra-v1
   ```

2. Abra o arquivo `index.html` em um navegador ou use um servidor local:
   ```bash
   python -m http.server 8000
   ```
   E acesse: http://localhost:8000

## Estrutura de Arquivos

```
aster-hydra-v1/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       └── slider.js
├── .cpanel.yml
├── .htaccess
├── index.html
└── README.md
```

## Personalização

- **Cores**: Edite as variáveis CSS em `assets/css/styles.css`
- **Conteúdo**: Atualize o arquivo `index.html`
- **Comportamento**: Modifique os arquivos JavaScript em `assets/js/`

## Suporte

Para suporte, entre em contato através das informações na seção de contato do site.
