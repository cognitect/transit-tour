(ns tour.core
  (:require [domina :as d]
            [domina.css :as css]))

(enable-console-print!)

;; repl.eval = function (code) {
;;     try {
;;         if (isExpression(code)) {
;;             geval("__expression__ = " + code);
;;             express(__expression__);
;;         } else geval(code);
;;     } catch (error) {
;;         repl.print(error, "error");
;;     }
;; };

;; var myCodeMirror = CodeMirror(function(elt) {
;;   myTextArea.parentNode.replaceChild(elt, myTextArea);
;; }, {value: myTextArea.value});

(doseq [textarea (d/nodes (css/sel "textarea"))]
  #_(js/CodeMirror.fromTextArea textarea
    #js {:mode "javascript"
         ;:theme "eclipse"
         })
  (js/configREPL
    (js/CodeMirrorREPL. textarea
      #js {:mode "javascript"
           :theme "eclipse"})))
