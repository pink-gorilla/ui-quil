(require '[goldly.system :as goldly])
(require '[goldly.runner :refer [system-start!]])

(println "*********************** quil")

(system-start!
 (goldly/system
  {:id :quil1
   :state {}
   :html [:p/quil [500 500] ?setup ?draw ?update]
   :fns {}
   :fns-raw {:setup (fn []
                 {:width   500
                  :height  500
                  :circles []})
         :draw (fn [{:keys [circles]}]
           ;(qbackground 255)
           (doseq [{[x y] :pos [r g b] :color} circles]
             (qfill r g b)
             (qellipse x y 10 10)))
         
         :update (fn [{:keys [width height] :as state}]
           (update state 
                   :circles conj 
                   {:pos [(+ 20 (rand-int (- width 40)))
                          (+ 20 (rand-int (- height 40)))]
                    :color (repeatedly 3 #(rand-int 250))
                                        }))}
  }
  {:fns {}}
  ))


; (pinkgorilla.notebook.repl/r! [canvas])


