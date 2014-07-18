;;  Copyright 2014 Cognitect. All Rights Reserved.
;; 
;;  Licensed under the Apache License, Version 2.0 (the "License");
;;  you may not use this file except in compliance with the License.
;;  You may obtain a copy of the License at
;; 
;;       http:;; www.apache.org/licenses/LICENSE-2.0
;; 
;;  Unless required by applicable law or agreed to in writing, software
;;  distributed under the License is distributed on an "AS-IS" BASIS,
;;  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;;  See the License for the specific language governing permissions and
;;  limitations under the License.

(ns tour.core
  (:require [domina :as d]
            [domina.css :as css]))

(enable-console-print!)

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
        (.setValue cm (str orig "\n// " (.stringify js/JSON ret)))))))
