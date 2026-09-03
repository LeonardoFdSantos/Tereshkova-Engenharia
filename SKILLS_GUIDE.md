# Guia de Skills Disponíveis no Ambiente

Este documento lista todas as **skills** disponíveis no seu ambiente Claude Code, organizadas por categoria, com explicações sobre **como usar** e **quando usar** cada uma.

---

## 📌 Como Usar Skills

Para invocar uma skill, use o comando:
```
/SKILL_NAME [args]
```

Exemplo:
```
/code-review
```

---

## 🔍 Skills de Revisão e Qualidade de Código

### **`code-review`**
- **Como usar:** `/code-review [level]`
  - Níveis: `low`, `medium`, `high`, `max` (padrão: `medium`)
  - Opções: `--comment` (comentar no PR), `--fix` (aplicar correções)
- **Quando usar:**
  - Após escrever ou modificar código.
  - Antes de fazer um PR para garantir qualidade.
  - Para revisar um PR existente: `/code-review PR#123`

### **`simplify`**
- **Como usar:** `/simplify`
- **Quando usar:**
  - Para refatorar código e torná-lo mais simples e legível.
  - Após uma revisão de código que identificou complexidade desnecessária.

### **`security-review`**
- **Como usar:** `/security-review`
- **Quando usar:**
  - Sempre que o código lida com:
    - Entrada de usuário (formulários, APIs).
    - Autenticação ou autorização.
    - Dados sensíveis (senhas, tokens, PII).
  - Antes de deploy em produção.

---

## 🚀 Skills de Desenvolvimento e Implementação

### **`feature-dev`**
- **Como usar:** `/feature-dev [feature_name]`
- **Quando usar:**
  - Para implementar um novo recurso do zero.
  - Quando precisar de um plano detalhado antes de codificar.

### **`refactor-clean`**
- **Como usar:** `/refactor-clean`
- **Quando usar:**
  - Para remover código morto ou não utilizado.
  - Limpar dependências não usadas.
  - Consolidar lógica duplicada.

### **`tdd-guide`**
- **Como usar:** `/tdd-guide`
- **Quando usar:**
  - Ao desenvolver usando **Test-Driven Development (TDD)**.
  - Para garantir cobertura de testes >80%.

### **`performance-optimizer`**
- **Como usar:** `/performance-optimizer`
- **Quando usar:**
  - Para identificar gargalos de performance.
  - Otimizar consultas lentas, loops ou algoritmos.
  - Reduzir tamanho de bundles (frontend).

---

## 🔧 Skills de Configuração e Setup

### **`update-config`**
- **Como usar:** `/update-config`
- **Quando usar:**
  - Para configurar o Claude Code via `settings.json`.
  - Adicionar permissões (ex: `allow npm commands`).
  - Configurar hooks automáticos (ex: "from now on when X").
  - Definir variáveis de ambiente (ex: `set DEBUG=true`).

### **`fewer-permission-prompts`**
- **Como usar:** `/fewer-permission-prompts`
- **Quando usar:**
  - Para reduzir prompts de permissão em comandos seguros.
  - Adiciona uma lista de permissões ao `settings.json`.

### **`keybindings-help`**
- **Como usar:** `/keybindings-help`
- **Quando usar:**
  - Para personalizar atalhos de teclado.
  - Adicionar ou modificar `~/.claude/keybindings.json`.

---

## 📊 Skills de Planejamento e Arquitetura

### **`planner`**
- **Como usar:** `/planner [task_description]`
- **Quando usar:**
  - Para planejar implementações complexas.
  - Antes de começar um novo recurso ou refatoração.
  - Quando há múltiplas abordagens possíveis.

### **`architect`**
- **Como usar:** `/architect [requirement]`
- **Quando usar:**
  - Para decisões arquiteturais (ex: escolher entre Redis ou banco de dados).
  - Design de sistemas escaláveis.

### **`code-architect`**
- **Como usar:** `/code-architect`
- **Quando usar:**
  - Para projetar a arquitetura de um novo recurso.
  - Mapear fluxos de dados e dependências.

---

## 🐛 Skills de Debug e Resolução de Problemas

### **`build-error-resolver`**
- **Como usar:** `/build-error-resolver`
- **Quando usar:**
  - Quando o build falha (TypeScript, compilação, etc.).
  - Para corrigir erros de dependência ou configuração.

### **`silent-failure-hunter`**
- **Como usar:** `/silent-failure-hunter`
- **Quando usar:**
  - Para revisar código em busca de falhas silenciosas.
  - Erros engolidos, fallbacks ruins ou propagação de erros ausente.

### **`santa-loop`**
- **Como usar:** `/santa-loop`
- **Quando usar:**
  - Para loops de desenvolvimento autônomos.
  - Tarefas repetitivas que precisam de verificação contínua.

---

## 🧪 Skills de Testes

### **`test-coverage`**
- **Como usar:** `/test-coverage`
- **Quando usar:**
  - Para verificar cobertura de testes.
  - Identificar áreas não cobertas por testes.

### **`react-test`**
- **Como usar:** `/react-test`
- **Quando usar:**
  - Para testar componentes React.
  - Garantir que hooks e estados funcionem corretamente.

### **`e2e-testing`**
- **Como usar:** `/e2e-testing`
- **Quando usar:**
  - Para criar ou executar testes end-to-end.
  - Verificar fluxos críticos do usuário.

---

## 🌐 Skills de Frontend

### **`frontend-design`**
- **Como usar:** `/frontend-design`
- **Quando usar:**
  - Para revisar ou melhorar o design de componentes UI.
  - Garantir consistência visual e acessibilidade.

### **`frontend-patterns`**
- **Como usar:** `/frontend-patterns`
- **Quando usar:**
  - Para aplicar melhores práticas de frontend (React, Vue, etc.).
  - Padronizar componentes e estruturas.

### **`seo`**
- **Como usar:** `/seo`
- **Quando usar:**
  - Para auditar SEO técnico do site.
  - Otimizar meta tags, structured data e Core Web Vitals.

---

## 📁 Skills de Gerenciamento de Projeto

### **`projects`**
- **Como usar:** `/projects`
- **Quando usar:**
  - Para listar ou gerenciar projetos ativos.
  - Organizar sessões de trabalho.

### **`pr`**
- **Como usar:** `/pr [action]`
- **Quando usar:**
  - Para criar, revisar ou gerenciar Pull Requests.
  - Exemplo: `/pr create` ou `/pr review 123`.

### **`jira`**
- **Como usar:** `/jira [issue_key]`
- **Quando usar:**
  - Para integrar com o Jira (criar, atualizar ou buscar issues).

---

## 🤖 Skills de Agentes e Multi-Agentes

### **`agent-evaluator`**
- **Como usar:** `/agent-evaluator`
- **Quando usar:**
  - Para avaliar a qualidade de um agente (precisão, completude, clareza).
  - Após uma tarefa complexa executada por um subagente.

### **`agent-harness-construction`**
- **Como usar:** `/agent-harness-construction`
- **Quando usar:**
  - Para construir um harness (estrutura) de agentes autônomos.

### **`multi-agent`**
- **Como usar:** `/multi-agent [task]`
- **Quando usar:**
  - Para executar tarefas em paralelo com múltiplos agentes.
  - Exemplo: "use a workflow" ou "fan out agents".

---

## 📂 Skills de Documentação

### **`update-docs`**
- **Como usar:** `/update-docs`
- **Quando usar:**
  - Para atualizar documentação do projeto.
  - Gerar ou manter `README.md`, `CONTRIBUTING.md`, etc.

### **`update-codemaps`**
- **Como usar:** `/update-codemaps`
- **Quando usar:**
  - Para atualizar mapas de código (`CODEMAP.md`).
  - Documentar a arquitetura do projeto.

---

## 🔄 Skills de Loop e Automação

### **`loop`**
- **Como usar:** `/loop [interval] [command]`
  - Exemplo: `/loop 5m /build` (executa `/build` a cada 5 minutos).
- **Quando usar:**
  - Para monitorar um deploy ou CI em tempo real.
  - Tarefas repetitivas que precisam de verificação periódica.

### **`cron`**
- **Como usar:** `/cron [expression] [prompt]`
  - Exemplo: `/cron "0 9 * * *" "Run daily backup"`.
- **Quando usar:**
  - Para agendar tarefas recorrentes (ex: backup diário).

---

## 🛡️ Skills de Segurança

### **`security-scan`**
- **Como usar:** `/security-scan`
- **Quando usar:**
  - Para escanear o código em busca de vulnerabilidades.
  - Verificar OWASP Top 10, injeções, XSS, etc.

---

## 📦 Skills Específicos de Linguagem/Framework

### **React**
- **`react-review`**: Revisão de código React (hooks, performance, segurança).
- **`react-build`**: Resolver erros de build em projetos React.

### **TypeScript/JavaScript**
- **`typescript-review`**: Revisão de tipo, async/await, segurança.

### **Python**
- **`python-review`**: Revisão de código Python (PEP 8, type hints, segurança).

### **Node.js**
- **`nodejs-review`**: Revisão de código Node.js (stream, buffers, segurança).

### **Django**
- **`django-review`**: Revisão de modelos, views, ORM, segurança.
- **`django-build`**: Resolver erros de build/migração.

### **Flutter**
- **`flutter-review`**: Revisão de widgets, state management, performance.

### **Go**
- **`go-review`**: Revisão de concorrência, error handling, performance.

### **Rust**
- **`rust-review`**: Revisão de ownership, lifetimes, unsafe code.

### **Java/Spring**
- **`java-review`**: Revisão de Spring Boot, JPA, segurança.

### **C#/.NET**
- **`csharp-review`**: Revisão de async, LINQ, segurança.

### **PHP/Laravel**
- **`php-review`**: Revisão de PSR-12, Eloquent, segurança.
- **`laravel-review`**: Revisão de rotas, middleware, Blade.

---

## 🌍 Skills de Integração Externa

### **`figma`**
- **Como usar:** `/figma [action]`
  - Exemplo: `/figma design-to-code` ou `/figma generate-library`.
- **Quando usar:**
  - Para converter designs do Figma em código.
  - Gerar componentes ou bibliotecas a partir de designs.

### **`supabase`**
- **Como usar:** `/supabase [action]`
- **Quando usar:**
  - Para integrar ou revisar código que usa Supabase.
  - Otimizar consultas ou schema do banco.

### **`vercel`**
- **Como usar:** `/vercel [action]`
  - Exemplo: `/vercel deploy` ou `/vercel env`.
- **Quando usar:**
  - Para deploy, configuração de ambiente ou CI/CD no Vercel.

### **`netlify`**
- **Como usar:** `/netlify [action]`
- **Quando usar:**
  - Para deploy, configuração ou otimização no Netlify.

---

## 🎯 Skills de Produtividade

### **`hookify`**
- **Como usar:** `/hookify [rule]`
- **Quando usar:**
  - Para criar hooks automáticos (ex: "before push, run tests").

### **`resume-session`**
- **Como usar:** `/resume-session`
- **Quando usar:**
  - Para retomar uma sessão anterior do Claude.

### **`save-session`**
- **Como usar:** `/save-session`
- **Quando usar:**
  - Para salvar o contexto atual da sessão.

---

## 📝 Skills de Anotação e Memória

### **`remember`**
- **Como usar:** `/remember [fact]`
- **Quando usar:**
  - Para salvar informações importantes para futuras sessões.
  - Exemplo: `/remember user prefers TypeScript over JavaScript`.

### **`forget`**
- **Como usar:** `/forget [fact]`
- **Quando usar:**
  - Para remover uma memória salva anteriormente.

---

## 🔎 Skills de Pesquisa e Busca

### **`search`**
- **Como usar:** `/search [query]`
- **Quando usar:**
  - Para buscar código, arquivos ou padrões no projeto.

### **`grep`**
- **Como usar:** `/grep [pattern]`
- **Quando usar:**
  - Para buscar por expressões regulares no código.

---

## 🛠️ Skills de Ferramentas Específicas

### **`workflow-authoring`**
- **Como usar:** `/workflow-authoring`
- **Quando usar:**
  - Para escrever scripts de workflow para multi-agentes.

### **`run`**
- **Como usar:** `/run`
- **Quando usar:**
  - Para executar o aplicativo localmente e verificar mudanças.

---

## 📌 Dicas Gerais

1. **Skills Proativas**: Algumas skills (como `code-review`, `security-review`) devem ser usadas **proativamente** após qualquer mudança de código.

2. **Skills de Revisão**: Sempre use `/code-review` ou `/simplify` após modificar código.

3. **Skills de Build**: Se o build falhar, use `/build-error-resolver` para diagnosticar.

4. **Skills de Planejamento**: Para tarefas complexas, use `/planner` ou `/architect` antes de começar a codificar.

5. **Skills de Loop**: Use `/loop` para monitorar tarefas longas (ex: CI, deploy).

---

## 🚨 Skills que Requerem Cuidado

- **`workflow`**: Requer opt-in explícito do usuário (ex: "use a workflow").
- **`agent`**: Para tarefas complexas que requerem múltiplos passos.
- **`mcp`**: Skills de MCP (Model Context Protocol) para integrações avançadas.

---

## 📚 Referências

- Para ver a lista completa de skills disponíveis no seu ambiente, use:
  ```
  /skills
  ```
- Para ajuda sobre uma skill específica, pergunte:
  ```
  Como usar a skill [NOME]?
  ```
