# DevWebAtitudinal

Node.js v26.13.0 LTS
Extensões do VSCOde - Prettier, ESLint, Tailwind CSS IntelliSense

# Na primeira vez

git init
git clone URL_DO_REPOSITORIO
cd NOME_DO_PROJETO
# Instala as dependências que faltam
npm ci

#Executa
npm run dev

# Muda para main
git switch main

# Pega o que tiver no github para o seu computador
git pull origin main

# Cria e já muda para uma branch diferente para não mexer direto na main (Se não quiser mandar direto para main)
git switch -c feat/minha-funcionalidade

# Vê os status dos arquivos
git status

# Adicionar os arquivos
git add ArquivosQueVaiAdicionar

# Nome do commit
git commit -m "feat: adiciona minha funcionalidade"

# Vê qual a branch atual
git branch -vv

# Manda pro github o que você fez
git push -u origin feat/minha-funcionalidade # branch
git push -u origin main # main

# Verificar o código
npm run lint

# Verificar a formatação
npm run format:check

# Verificar os tipos TypeScript
npx tsc --noEmit

# Testar a compilação
npm run build
