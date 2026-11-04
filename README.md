# DevWebAtitudinal

Sistema web de avaliação atitudinal escolar, feito com Next.js, TypeScript e Tailwind CSS.

## Wireframes e mapa de navegação

<p align="center">
  <a href="./wireframe%26mapadenavegacao/mapa-de-navegacao.png">
    <img src="./wireframe%26mapadenavegacao/mapa-de-navegacao.png" alt="Mapa de navegação" width="100%">
  </a>
</p>

<table>
  <tr>
    <th>Desktop</th>
    <th>Celular</th>
  </tr>
  <tr>
    <td width="70%">
      <a href="./wireframe%26mapadenavegacao/wireframes-desktop.png">
        <img src="./wireframe%26mapadenavegacao/wireframes-desktop.png" alt="Wireframes desktop" width="100%">
      </a>
    </td>
    <td width="30%">
      <a href="./wireframe%26mapadenavegacao/wireframecelular.png">
        <img src="./wireframe%26mapadenavegacao/wireframecelular.png" alt="Wireframe celular" width="100%">
      </a>
    </td>
  </tr>
</table>

## Requisitos

- **Node.js** `26.13.0 LTS`: [nodejs.org](https://nodejs.org/)
- **Git**: [git-scm.com](https://git-scm.com/downloads)
- **VS Code** (recomendado) com as extensões:
  - ESLint (`dbaeumer.vscode-eslint`)
  - Prettier (`esbenp.prettier-vscode`)
  - Tailwind CSS IntelliSense (`bradlc.vscode-tailwindcss`)

> Ao abrir o projeto, o VS Code sugere essas extensões automaticamente.

## Como rodar

```powershell
git clone https://github.com/MarcosVitorGoularte/DevWebAtitudinal.git
cd DevWebAtitudinal
npm ci
npm run dev
```

O `npm ci` instala as versões exatas do `package-lock.json`. Use ele, e não o `npm install`.

Depois, abra **http://localhost:3000** no navegador.

Para parar o servidor, pressione `Ctrl + C` no terminal.

## Páginas

Por enquanto as páginas não estão ligadas entre si. Para ver cada uma, digite o endereço direto no navegador:

| Página                                          | Endereço                                   |
| ----------------------------------------------- | ------------------------------------------ |
| Login                                           | http://localhost:3000/                     |
| Professor · Minhas turmas                       | http://localhost:3000/professor/turmas     |
| Professor · Turma (troque o número: 1, 2 ou 3)  | http://localhost:3000/professor/turmas/1   |
| Professor · Estudantes                          | http://localhost:3000/professor/estudantes |
| Professor · Registro do estudante               | http://localhost:3000/professor/registro   |
| Administração (abas por turma, período e geral) | http://localhost:3000/administracao        |
| Aluno · Início                                  | http://localhost:3000/aluno                |
| Aluno · Autoavaliação                           | http://localhost:3000/aluno/autoavaliacao  |
