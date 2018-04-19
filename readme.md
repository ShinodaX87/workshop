# D3 Collection
## SNIPPETS

```coffeescript
'.text.html':
  'd3 template':
    'prefix':'d3 template'
    'body':"""
          <!DOCTYPE html>
          <html lang="en" dir="ltr">

            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">

              <title>$1</title>
              <script src="https://d3js.org/d3.v5.min.js"></script>
            </head>

            <body>
              <h1>D3 Basics</h1>

              <script type="text/javascript">
                // IIFE - Pattern (Immediate Invoked Function Expression)
                (function() {
                  'use strict';
                  //  - - - - - - - - - -

                  // $2
                  $3

                  //  - - - - - - - - - -
                })();
              </script>
            </body>

          </html>
    """
```
