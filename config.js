System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  "paths": {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "tpl|*": "static/tpl/*",
    "site|*": "static/site/*",
    "js|*": "js/*"
  },
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.10.2",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.18.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
    "aurelia-framework": "github:aurelia/framework@0.17.0",
    "aurelia-history": "github:aurelia/history@0.8.0",
    "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
    "aurelia-i18next": "github:aurelia/i18n@0.2.6",
    "aurelia-loader": "github:aurelia/loader@0.10.0",
    "aurelia-loader-default": "github:aurelia/loader-default@0.11.2",
    "aurelia-logging": "github:aurelia/logging@0.8.0",
    "aurelia-metadata": "github:aurelia/metadata@0.9.0",
    "aurelia-pal": "github:aurelia/pal@0.2.0",
    "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
    "aurelia-path": "github:aurelia/path@0.10.0",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
    "aurelia-router": "github:aurelia/router@0.13.0",
    "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
    "aurelia-templating": "github:aurelia/templating@0.16.0",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.1",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.1",
    "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
    "autosize": "//cdn.bootcss.com/autosize.js/3.0.14/autosize.min.js",
    "babel": "npm:babel-core@5.8.33",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "bootstrap": "github:wlzc/bootstrap@3.3.4",
    "caretPosition": "github:akiroom/caretposition.js@master",
    "clean-css": "npm:clean-css@3.4.6",
    "cookie": "https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js",
    "core-js": "npm:core-js@1.2.3",
    "css": "github:systemjs/plugin-css@0.1.23",
    "datepicker": "github:xdan/datetimepicker@2.4.5",
    "dateutils": "github:JerrySievert/date-utils@1.2.16",
    "drag-resize-snap": "github:wlzc/drag-resize-snap@0.1.4",
    "dragula": "npm:dragula@3.5.2",
    "dropzone": "github:enyo/dropzone@4.2.0",
    "echarts": "npm:echarts@2.2.8",
    "fancyBox": "github:fancyapps/fancyBox@2.1.5",
    "hammerjs": "github:wlzc/hammer.js@1.0.5",
    "i18n": "github:wikimedia/jquery.i18n@1.0.4",
    "intl-js": "github:andyearnshaw/Intl.js@0.1.4",
    "jcrop": "github:tapmodo/Jcrop@0.9.13",
    "jquery": "//cdn.bootcss.com/jquery/2.1.4/jquery.min.js",
    "js-url": "//cdn.bootcss.com/js-url/1.8.8/url.min.js",
    "lazyload": "github:tuupola/jquery_lazyload@1.9.7",
    "moment": "//cdn.bootcss.com/moment.js/2.10.6/moment.min.js",
    "mousewheel": "github:jquery/jquery-mousewheel@3.1.13",
    "noUiSlider": "github:wlzc/noUiSlider@8.2.1",
    "notify": "github:wlzc/HTML5-Desktop-Notifications@1.0.0",
    "number": "github:customd/jquery-number@2.1.6",
    "paste": "github:layerssss/paste.js@0.0.10",
    "scrollbar": "github:malihu/malihu-custom-scrollbar-plugin@3.1.1",
    "semantic-ui": "//cdn.bootcss.com/semantic-ui/2.1.4/semantic.min.js",
    "slick": "github:kenwheeler/slick@1.5.9",
    "socketio": "github:socketio/socket.io-client@1.3.7",
    "string": "//cdn.bootcss.com/underscore.string/3.2.2/underscore.string.min.js",
    "strophejs": "github:strophe/strophejs@1.2.7",
    "terminal": "github:jcubic/jquery.terminal@0.8.8",
    "text": "github:systemjs/plugin-text@0.0.2",
    "toastr": "//cdn.bootcss.com/toastr.js/2.1.2/toastr.min.js",
    "underscore": "//cdn.bootcss.com/underscore.js/1.8.3/underscore-min.js",
    "validator": "github:chriso/validator.js@4.2.0",
    "wang-editor": "github:wangfupeng1988/wangEditor@2.1.12",
    "//cdn.bootcss.com/semantic-ui/2.1.4/semantic.min.js": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "github:aurelia/binding@0.10.2": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.18.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-framework": "github:aurelia/framework@0.17.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.9.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.11.2",
      "aurelia-logging-console": "github:aurelia/logging-console@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-pal-browser": "github:aurelia/pal-browser@0.2.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.16.1",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.16.1",
      "aurelia-templating-router": "github:aurelia/templating-router@0.17.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.11.2": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0"
    },
    "github:aurelia/framework@0.17.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.9.0": {
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/i18n@0.2.6": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-loader-default": "github:aurelia/loader-default@0.11.2",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "i18next": "github:i18next/i18next@1.10.3",
      "intl-js": "github:andyearnshaw/Intl.js@0.1.4"
    },
    "github:aurelia/loader-default@0.11.2": {
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/loader@0.10.0": {
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-path": "github:aurelia/path@0.10.0"
    },
    "github:aurelia/logging-console@0.8.0": {
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/metadata@0.9.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/pal-browser@0.2.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/route-recognizer@0.8.0": {
      "aurelia-path": "github:aurelia/path@0.10.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.13.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.9.0",
      "aurelia-history": "github:aurelia/history@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/task-queue@0.8.0": {
      "aurelia-pal": "github:aurelia/pal@0.2.0"
    },
    "github:aurelia/templating-binding@0.16.1": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating-resources@0.16.1": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.17.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-router": "github:aurelia/router@0.13.0",
      "aurelia-templating": "github:aurelia/templating@0.16.0"
    },
    "github:aurelia/templating@0.16.0": {
      "aurelia-binding": "github:aurelia/binding@0.10.2",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.11.2",
      "aurelia-loader": "github:aurelia/loader@0.10.0",
      "aurelia-logging": "github:aurelia/logging@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.9.0",
      "aurelia-pal": "github:aurelia/pal@0.2.0",
      "aurelia-path": "github:aurelia/path@0.10.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:tapmodo/Jcrop@0.9.13": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clean-css@3.4.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:contra@1.9.1": {
      "atoa": "npm:atoa@1.0.0",
      "ticky": "npm:ticky@1.0.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:crossvent@1.5.4": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "custom-event": "npm:custom-event@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:dragula@3.5.2": {
      "contra": "npm:contra@1.9.1",
      "crossvent": "npm:crossvent@1.5.4"
    },
    "npm:echarts@2.2.8": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "zrenderjs": "npm:zrenderjs@2.1.1-amd-beta1"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:ticky@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:zrenderjs@2.1.1-amd-beta1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
})