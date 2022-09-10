import 'react-native-get-random-values';
import { WebView as ReactWebView } from 'react-native-webview';

export function DeviceWebView() {
  return (
    <ReactWebView
      style={{ width: '100%', height: 400 }}
      // source={{ uri: 'https://www.google.com' }}
      originWhitelist={['*']}
      bounces={false}
      overScrollMode="never"
      source={{
        html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="./src/styles.css" />
                <style>
                  html, body {
                    margin: 0;
                    padding: 0;
                    background: transparent;
                  }
                </style>
              </head>
              <body>
                <canvas id="canvas3d"></canvas>
                <!-- Import maps polyfill -->
                <!-- Remove this when import maps will be widely supported -->
                <script async src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"></script>
                <script type="importmap">
                  {
                    "imports": {
                      "@splinetool/runtime": "https://unpkg.com/@splinetool/runtime@0.9.106/build/runtime.js"
                    }
                  }
                </script>
                <script type="module">
                  import { Application } from "@splinetool/runtime";
            
                  const canvas = document.getElementById("canvas3d");                     
                  const app = new Application(canvas);
                  app.load("https://prod.spline.design/sfjv-3ajlZFR1C-n/scene.splinecode").then(() => {
                    app._viewportHeight = 400;
                  })

                </script>
              </body>
            </html>
            `
      }}
    />
  );
}
