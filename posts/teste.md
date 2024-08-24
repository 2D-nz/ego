---
title: "Next Navigation VS React Router DOM"
description: "Minha experiência usando a navegação de Next após estar acostumado com RRD"
date: "2024-08-21"
---

# Navegação em NEXT e React Router DOM

## Contexto

Eu sempre utilizei React Router DOM para fazer navegação nos meus websites com React. Mas na metade desse ano comecei a utilizar NEXT JS e Next já vem com a navegação pré feita.

Porém, ambas as opções são diferentes e irei aqui explicar a MINHA experiência com cada uma

## Configurando

A configuração do React Router DOM(RRD, a partir de agora), mudou depois de uma atualização, atualmente você cria um Provider, e as rotas você declara em um OBJETO

Já o NEXT já vem configurado e as rotas são definidas pelas PASTAS que você cria
Cada pasta com um arquivo page.js/tsx se torna uma rota, e dependendo da nomenclatura você determina como serão lidados as rotas e subrotas

Next se mostrou bem mais fácil e organizado nesse quesito, ainda com a atualização do App Router, a organização do projeto e a navegação para quem está codando se tornou simples demais.

## Link

Ambos utilizam maneiras parecidas para navegar para outra paginas utilizando coisas que simulam o que seria a Anchor Tag no HTML mas há uma pequena, porém importante, diferença:

### Location

Esse é o motivo de eu mais ter dificuldade de lidar com o Next. O RRD conta com o objeto LOCATION, que pode ser passado pra quando você usa um LINK pra ir em outra página. Na minha primeira experiência com RRD eu utilizei o Location pra carregar informações, quase como se um context, para outras páginas, tornando informações persistentes entre os links sem a necessidade de um contexto necessáriamente. Next já não conta com essa opção, a opção de Context, se torna dificil de configurar sem utilizar CLIENTE COMPONENTS, que pra mim deveriam ser utilizado menos possível dentro do ecossistema Next.
