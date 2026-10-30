# DevWebAtitudinal

Projeto desenvolvido em equipe utilizando Next.js, TypeScript e Tailwind CSS.

## 1. Antes de começar

Instale as seguintes ferramentas:

- **Node.js:** versão `26.13.0 LTS`
- **Git:** [Baixar Git](https://git-scm.com/downloads)
- **VS Code:** [Baixar VS Code](https://code.visualstudio.com/)

### Extensões do VS Code

- Prettier
- ESLint
- Tailwind CSS IntelliSense

## 2. Primeira vez no projeto

### 1. Clonar o repositório

Abra o terminal do VS Code na pasta em que deseja salvar o projeto.

```powershell
git clone URL_DO_REPOSITORIO
```

Substitua `URL_DO_REPOSITORIO` pelo endereço do repositório no GitHub.

### 2. Entrar na pasta do projeto

```powershell
cd NOME_DO_PROJETO
```

Substitua `NOME_DO_PROJETO` pelo nome da pasta criada pelo comando anterior.

### 3. Instalar as dependências

```powershell
npm ci
```

### 4. Executar o projeto

```powershell
npm run dev
```

Abra o navegador e acesse:

http://localhost:3000

Para parar o servidor, pressione `Ctrl + C` no terminal.

**Importante:** não é necessário executar `git init`. O `git clone` já configura o repositório Git no computador.

---

# 3. Antes de enviar alterações

Antes de compartilhar seu código, execute as verificações abaixo:

### Verificar possíveis problemas no código

```powershell
npm run lint
```

### Verificar a formatação

```powershell
npm run format:check
```

### Verificar os tipos do TypeScript

```powershell
npx tsc --noEmit
```

### Testar a compilação

```powershell
npm run build
```

Se algum comando apresentar erro, procure resolver o problema antes de enviar as alterações.

---

# 4. Opção A — Enviar usando uma branch

## Passo 1. Atualizar a main

Antes de começar uma nova tarefa, execute:

```powershell
git switch main
git pull origin main
```

## Passo 2. Criar sua branch

```powershell
git switch -c feat/minha-funcionalidade
```

Use um nome que descreva o que você vai fazer. Por exemplo:

```text
feat/tela-login
feat/cadastro-alunos
feat/dashboard
fix/erro-formulario
```

## Passo 3. Desenvolver e verificar

Faça suas alterações no VS Code e execute os testes apresentados na seção 3.

## Passo 4. Conferir os arquivos alterados

```powershell
git status
```

Para visualizar as alterações:

```powershell
git diff
```

## Passo 5. Adicionar os arquivos

Para adicionar todas as alterações que deseja enviar:

```powershell
git add .
```

## Passo 6. Criar um commit

```powershell
git commit -m "feat: adiciona minha funcionalidade"
```

A mensagem deve descrever o que foi feito.

## Passo 7. Enviar a branch ao GitHub

Na primeira vez que enviar essa branch:

```powershell
git push -u origin feat/minha-funcionalidade
```

Nas próximas alterações feitas na mesma branch, basta:

```powershell
git add .
git commit -m "feat: atualiza minha funcionalidade"
git push
```

## Passo 8. Criar o Pull Request

Depois de enviar a branch:

1. Abra o repositório no GitHub.
2. Clique em **Compare & pull request** ou abra a aba **Pull requests** e clique em **New pull request**.
3. Confira se `main` está como destino (**base**) e sua branch como origem (**compare**).
4. Clique em **Create pull request**.
5. Peça para outro integrante revisar o código.
6. Depois da aprovação, faça o merge para integrar as alterações à `main`.

## Passo 9. Começar outra tarefa

Após a integração, atualize sua `main`:

```powershell
git switch main
git pull origin main
```

Crie uma nova branch para a próxima tarefa:

```powershell
git switch -c feat/proxima-funcionalidade
```

**Importante:** não reutilize uma branch antiga para uma tarefa nova sem antes verificar seu estado.

---

# 5. Opção B — Enviar diretamente para a main

Nesta opção, você trabalha diretamente na branch `main`, sem criar outra branch nem abrir Pull Request.

**Atenção:** como o projeto tem quatro integrantes, todos precisam combinar essa forma de trabalho para evitar que as alterações de uma pessoa interfiram nas da outra. O GitHub também pode impedir o envio direto se a `main` estiver protegida.

## Passo 1. Atualizar a main

Antes de começar a editar os arquivos, execute:

```powershell
git switch main
git pull --rebase origin main
```

Confira se não há alterações locais pendentes:

```powershell
git status
```

## Passo 2. Desenvolver e verificar

Faça suas alterações no VS Code e execute os testes apresentados na seção 3.

## Passo 3. Adicionar os arquivos

```powershell
git add nomeArquivo
```

## Passo 4. Criar um commit

```powershell
git commit -m "feat: adiciona minha funcionalidade"
```

## Passo 5. Enviar diretamente para a main

```powershell
git push origin main
```

Pronto! Suas alterações serão enviadas para a `main` caso o GitHub aceite o envio.

### Se outro integrante enviar alterações antes de você

Se o `git push` for rejeitado porque o GitHub tem commits que você ainda não possui, execute:

```powershell
git pull --rebase origin main
```

Se houver conflitos, resolva-os antes de continuar. Depois, tente novamente:

```powershell
git push origin main
```

Não utilize `git push --force` para tentar resolver esse problema.

---

# 6. Comandos úteis

| Comando                     | Para que serve                                     |
| --------------------------- | -------------------------------------------------- |
| `git status`                | Mostra os arquivos modificados.                    |
| `git branch --show-current` | Mostra a branch atual.                             |
| `git branch -vv`            | Mostra as branches e suas associações remotas.     |
| `git switch main`           | Muda para a branch principal.                      |
| `git pull origin main`      | Busca e integra as atualizações da `main`.         |
| `git add .`                 | Prepara as alterações para o commit.               |
| `git commit -m "mensagem"`  | Registra as alterações localmente.                 |
| `git push`                  | Envia os commits para a branch remota configurada. |

## 7. Regras importantes

- Não envie senhas ou chaves secretas ao GitHub.
- Não apague o `package-lock.json` para resolver erros de instalação.
- Não envie a pasta `node_modules` ou `.next`.
- Antes de começar uma tarefa, atualize a `main`.
- Não troque de branch com alterações pendentes sem antes verificar o `git status`.
- Revise os arquivos antes de executar `git add .`.
