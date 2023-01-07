# Aplicação  Git Find 
  ### Este é um projeto aprendido na Formação de React da Digital Innovation One

Este código parece ser um aplicativo React que busca informações de um usuário e seus repositórios do GitHub. O usuário pode inserir o nome de usuário do GitHub em um campo de entrada e, em seguida, clicar em um botão "Buscar" para obter os dados do usuário.

Quando o botão "Buscar" é clicado, uma função handleGetData é executada. Esta função faz duas chamadas para a API do GitHub usando o método fetch: uma para obter informações sobre o usuário e outra para obter uma lista de repositórios do usuário. As respostas dessas chamadas são convertidas em objetos JSON e, em seguida, usadas para atualizar os estados de componente currentUser e repos, respectivamente.

Se o nome do usuário for encontrado, os dados do usuário são exibidos na tela. Se houver repositórios disponíveis, eles são exibidos em uma lista usando o componente ItemList. Cada item na lista tem um botão de lixeira que, quando clicado, chama a função handleDeleteRepo e passa o ID do repositório para ela.

A função handleDeleteRepo faz uma chamada para a API do GitHub usando o método fetch e o método DELETE para excluir o repositório. Se a chamada for bem-sucedida, o repositório é removido da lista de repositórios usando o método setRepos.

## Tecnologias usadas:

    * React: biblioteca JavaScript para criar interfaces de usuário
    * fetch: método JavaScript para fazer chamadas de rede
    * useState: hook do React para gerenciar o estado de um componente
    * async/await: sintaxe JavaScript para trabalhar com promessas de maneira síncrona
    * JSX: sintaxe usada em conjunto com o React para criar elementos de interface de usuário de maneira declarativa