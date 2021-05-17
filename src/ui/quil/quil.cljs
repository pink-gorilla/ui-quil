(ns ui.quil.quil
  (:require
   [reagent.core :as r]
   [reagent.dom :as rd]
   [pinkie.pinkie :refer-macros [register-component]]
   [quil.core]
   [quil.middleware]))

(defn quil-canvas [size setup draw update]
  (r/create-class
   {:component-did-mount
    (fn [component]
      (quil.core/sketch
       :host       (rd/dom-node component)
       :middleware [quil.middleware/fun-mode]
       :draw       draw
       :setup      setup
       :update     update
       :size       size))
    :render
    (fn []
      [:div])}))

(register-component :p/quil quil-canvas)

