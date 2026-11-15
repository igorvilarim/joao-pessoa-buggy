# Publicar o site na Hostinger

Este projeto usa renderização no servidor. A opção mais previsível na Hostinger é uma **VPS com Node.js**. Se o seu plano mostrar a opção **Aplicativo Node.js** no hPanel, você também pode usar o fluxo simplificado no final deste guia.

## Antes de começar

### Se você baixou o ZIP deste site

O pacote atualizado em **15/11/2026** inclui as fotos reais, os preços atuais, o e-mail `joaopessoabuggyjp@gmail.com` e o Instagram `@joaopessoabuggy` (`https://www.instagram.com/joaopessoabuggy/`). Use esta versão no lugar do ZIP anterior.

Extraia o ZIP e use a pasta `joao-pessoa-buggy`. Ela contém o código-fonte, as fotos locais e este guia. Não basta enviar esses arquivos para `public_html`: o site precisa de uma aplicação Node.js ou de uma VPS. O arquivo não inclui banco de dados, contas de acesso nem a biblioteca administrativa de imagens, que ainda não foi implementada.

Use Node.js **22.12 ou superior**. Na hospedagem, execute `npm install`, depois `npm run build:hostinger`; confirme que foi criado `.output/server/index.mjs` e inicie com `npm start`. A preparação deve ocorrer na hospedagem, não no editor Lovable.

### Se aparece “Repositório ou branch não encontrado”

O projeto agora contém um comando `start`, mas isso não corrige acesso a um repositório inexistente ou privado. Na Hostinger, confira a URL do repositório, selecione uma branch existente e autorize a conexão com a conta do GitHub que tem acesso. Se enviar o ZIP, selecione a pasta que contém `package.json`, não uma pasta acima dela. Este pacote não cria nem conecta automaticamente um repositório GitHub.

### Configuração e fotos

As fotos locais estão incluídas em `public/__l5e/assets-v1` e `src/assets`; mantenha os caminhos. O site público atual usa os dados incluídos no código. Esta entrega não migra o Lovable Cloud nem suas contas para a Hostinger e não contém senhas ou chaves privadas. Se adicionar login ou funções conectadas posteriormente, configure as variáveis necessárias de forma privada no painel da hospedagem.

Você precisa de:

- uma VPS da Hostinger com Ubuntu;
- um domínio apontado para a Hostinger;
- acesso SSH à VPS;
- o ZIP extraído deste site ou o endereço do repositório Git.

## Opção recomendada: VPS Hostinger

### 1. Acessar a VPS

No hPanel, abra **VPS → Gerenciar → Acesso SSH**. Copie o IP e conecte-se pelo terminal:

```bash
ssh root@SEU_IP
```

### 2. Instalar Node.js, Git, Nginx e PM2

```bash
apt update && apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs git nginx
npm install -g pm2
```

Confirme as instalações:

```bash
node -v
npm -v
git --version
```

### 3. Baixar e preparar o site

```bash
mkdir -p /var/www
cd /var/www
git clone URL_DO_SEU_REPOSITORIO joao-pessoa-buggy
cd joao-pessoa-buggy
npm install
npm run build:hostinger
```

### 4. Iniciar o site

Se usar o ZIP em vez de Git, envie a pasta extraída para `/var/www/joao-pessoa-buggy` e execute nela `npm install` e `npm run build:hostinger` antes deste passo.

O arquivo de inicialização gerado fica na pasta `.output/server`:

```bash
PORT=3000 HOST=127.0.0.1 pm2 start .output/server/index.mjs --name joao-pessoa-buggy
pm2 save
pm2 startup
```

O último comando mostrará outra linha para executar. Copie e execute essa linha para o site reiniciar automaticamente com o servidor.

Verifique:

```bash
curl http://127.0.0.1:3000
```

### 5. Conectar o domínio pelo Nginx

Crie a configuração:

```bash
nano /etc/nginx/sites-available/joao-pessoa-buggy
```

Cole o conteúdo abaixo e troque os dois endereços pelo seu domínio:

```nginx
server {
    listen 80;
    server_name seusite.com.br www.seusite.com.br;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Salve e ative:

```bash
ln -s /etc/nginx/sites-available/joao-pessoa-buggy /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

### 6. Apontar o domínio

No hPanel, abra **Domínios → Editor de Zona DNS**:

1. crie ou edite o registro **A** de `@` para o IP da VPS;
2. crie ou edite o registro **A** de `www` para o mesmo IP;
3. aguarde a propagação, que pode levar até 24 horas.

### 7. Ativar HTTPS gratuito

Depois que o domínio estiver apontando para a VPS:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d seusite.com.br -d www.seusite.com.br
```

Escolha o redirecionamento automático para HTTPS quando solicitado.

### 8. Atualizar o site futuramente

```bash
cd /var/www/joao-pessoa-buggy
git pull
npm install
npm run build:hostinger
pm2 restart joao-pessoa-buggy
```

## Alternativa: Aplicativo Node.js no hPanel

Use esta opção somente se ela aparecer no seu plano:

1. no hPanel, abra **Sites → Gerenciar → Avançado → Aplicativo Node.js**;
2. conecte o repositório Git ou envie os arquivos do projeto;
3. selecione Node.js 22.12 ou superior;
4. use `npm install` como comando de instalação;
5. use `npm run build:hostinger` como comando de construção;
6. defina `.output/server/index.mjs` como arquivo de inicialização;
   Se o painel pedir um comando de inicialização em vez de um arquivo, use `npm start`.
7. publique e associe o domínio ao aplicativo;
8. ative o SSL em **Segurança → SSL**.

Se o painel não aceitar um processo Node.js permanente, esse plano não é compatível com este site completo; use a opção VPS acima.

## Conferência final

- abra a página inicial e todos os roteiros;
- teste os botões do WhatsApp e Instagram;
- confirme que as fotos carregam;
- teste o endereço com e sem `www`;
- confirme o cadeado HTTPS;
- teste em um celular usando a internet móvel.