(ns tour.core
  (:require [domina :as d]
            [domina.css :as css]))

(enable-console-print!)

;; var myCodeMirror = CodeMirror(function(elt) {
;;   myTextArea.parentNode.replaceChild(elt, myTextArea);
;; }, {value: myTextArea.value});

(doseq [textarea (d/nodes (css/sel "textarea"))]
  (js/CodeMirrorREPL. (.-id textarea)
    #js {:mode "javascript"
         :theme "eclipse"
         :lineNumbers true
         :viewportMargin js/Infinity}))
