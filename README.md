# Quil [![GitHub Actions status |pink-gorilla/ui-quil](https://github.com/pink-gorilla/ui-quil/workflows/CI/badge.svg)](https://github.com/pink-gorilla/ui-quil/actions?workflow=CI)[![Clojars Project](https://img.shields.io/clojars/v/org.pinkgorilla/ui-quil.svg)](https://clojars.org/org.pinkgorilla/ui-quil)

Use [quil](http://quil.info/) in goldly.

## Goldly-Bundel

Goldly allows you to add any clojurescript or javascript / npm dependency.

If you do not want to build your own bundle and define your own ui components,
then you might want to use [goldly bundel](https://github.com/pink-gorilla/goldly-bundel)

Goldly Bundel has ui-quil /and other ui libraries) included. 

## Demo

```
clojure -X:goldly
```

Navigate your webbrowser to port. 
Quil snippes are in `running systems` / `snippet-registry`


## In Goldly as a ui extension

In deps.edn add quil as dependency and add goldly alias

```
:goldly
  {:extra-deps {org.pinkgorilla/goldly {:mvn/version "0.2.37"}
               {org.pinkgorilla/ui-quil {:mvn/version "0.0.1"}}
   :exec-fn goldly-server.app/goldly-server-run!
   :exec-args {:profile "watch"
               :config {:goldly {}}}}
```

## How to make your own bundel

Because ui-quil is a very simple project, it is a good example to learn
how to write goldly ui extensions.

In deps.edn we get the quil maven library:
```
 {:deps
  quil/quil {:mvn/version "3.1.0"}
  ...}
```

Because quil needs npm js dependencies we ass deps.cljs:
```
{:npm-deps
 {"p5" "^0.9.0" }}
```

In resources/ext/gorilla-ext.edn we add quils clojurescript namespaces to the js bundel.

To run goldly and to get goldly to add ui.quil.goldly to
the bundle we add :goldly alias to deps.edn
```
:goldly
  {:extra-deps {org.pinkgorilla/goldly {:mvn/version "0.2.37"}}
   :exec-fn goldly-server.app/goldly-server-run!
   :exec-args {:profile "watch"
               :config {:goldly {}}}}
```


