(ns ui.quil.goldly
  (:require
   [goldly.sci.bindings :refer [add-cljs-namespace add-cljs-bindings]]
   [systems.snippet-registry :refer [add-snippet]]))

(println "*************************** goldly")

(add-cljs-namespace [quil.middleware]) ; access quil drawing fuctios
(add-cljs-namespace [quil.core])
;'quil.sketch
; 'quil.util
(add-cljs-namespace [ui.quil.quil]) ; add pinkie renderer

(add-cljs-bindings {'qbackground quil.core/background
                    'qfill quil.core/fill
                    'qellipse quil.core/ellipse})

(add-snippet {:type :goldly-clj
              :category :quil
              :id :quil1
              :filename "snippets/quil/quil1.clj"})