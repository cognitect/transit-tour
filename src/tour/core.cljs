(ns tour.core
  (:require [domina :as d]
            [domina.css :as css]))

(enable-console-print!)

;; var myCodeMirror = CodeMirror(function(elt) {
;;   myTextArea.parentNode.replaceChild(elt, myTextArea);
;; }, {value: myTextArea.value});

(def textareas (atom {}))

(doseq [textarea (d/nodes (css/sel "textarea"))]
  (let [id (.-id textarea)]
    (swap! textareas assoc id
      (js/CodeMirror.fromTextArea textarea
        #js {:mode "javascript"
             :fontSize 15
             :lineNumbers true}))))

(set! (.-evaluate js/window.document)
  (fn [id]
    (let [cm   (get @textareas id)
          re   (js/RegExp. "\n\\/\\/.*" "g")
          orig (.replace (.getValue cm) re "")
          ret  (js/window.eval orig)]
      (if (undefined? ret)
        (.setValue cm (str orig "\n// undefined"))
        (.setValue cm (str orig "\n// " ret))))))
