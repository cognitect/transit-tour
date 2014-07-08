(defproject transit-tour "0.1.0-SNAPSHOT"
  :description "A Tour of the Transit format"
  :url "http://transit-format.org"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"]
                 [domina "1.0.2"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src" "resources"]

  :cljsbuild { 
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "resources/tour.js"
                :output-dir "resources/out-dev"
                :optimizations :none
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :pretty-print false
                :externs ["codemirror_externs.js"]
                :output-to "resources/tour.js"
                :output-dir "resources/out-adv"
                :optimizations :advanced}}]})
