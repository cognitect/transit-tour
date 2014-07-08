(defproject transit-tour "0.1.0-SNAPSHOT"
  :description "A Tour of the Transit format"
  :url "http://transit-format.org"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2261"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild { 
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "tour.js"
                :output-dir "out-dev"
                :optimizations :none
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "tour.js"
                :output-dir "out-adv"
                :optimizations :advanced}}]})
