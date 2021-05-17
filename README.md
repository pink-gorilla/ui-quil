# Quil [![GitHub Actions status |pink-gorilla/ui-quil](https://github.com/pink-gorilla/ui-quil/workflows/CI/badge.svg)](https://github.com/pink-gorilla/ui-quil/actions?workflow=CI)[![Clojars Project](https://img.shields.io/clojars/v/org.pinkgorilla/ui-quil.svg)](https://clojars.org/org.pinkgorilla/ui-quil)

Use [quil](http://quil.info/) in goldly.

## Usage

```
clojure -X:goldly
```

Navigate your webbrowser to port. 
Quil snippes are in `running systems` / `snippet-registry`

## Goldly-Bundel

Goldly allows you to add any clojurescript or javascript / npm dependency.

If you do not want to build your own bundle and define your own ui components,
then you might want to use [goldly bundel](https://clojars.org/org.pinkgorilla/goldly-bundel)

## How to make your own bundel

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

In ui.quil.goldly we add quils clojurescript namespaces to the js bundel.
We also add ui.quil.quil, this is to export the configuration so we can
easily use quil in other goldly projects.
```
(add-cljs-namespace [quil.middleware]) ; access quil drawing fuctios
(add-cljs-namespace [quil.core])
;'quil.sketch
; 'quil.util
(add-cljs-namespace [ui.quil.quil]) ; add pinkie renderer
```


To make quil functions available, we add in ui.quil.goldly:
```
(add-cljs-bindings {'qbackground quil.core/background
                    'qfill quil.core/fill
                    'qellipse quil.core/ellipse
                    })
```


To add the demo snippets, we add in ui.quil.goldly:
```
(add-snippet {:type :goldly-clj
              :category :quil
              :id :quil1
              :filename "snippets/quil/quil1.clj"})
```


To run goldly and to get goldly to add ui.quil.goldly to
the bundle we add :goldly alias to deps.edn
```
:goldly
  {:extra-deps {org.pinkgorilla/goldly {:mvn/version "0.2.37"}}
   :exec-fn goldly-server.app/goldly-server-run!
   :exec-args {:profile "watch"
               :config {:goldly {:extensions [[ui.quil.goldly]
                                              ]}}}}
```


