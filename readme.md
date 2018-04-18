#D3 Collection
##SNIPPETS

```
'.text.html':
  'navigation component':
    'prefix':'nav component'
    'body': """
            <!-- navigation component -->
            <nav>
              <ul role="navigation" class="nav nav-vertical">
                <li role="presentation"><a href="page-1.html" id="my-navi-1">page 1</a></li>
                <li role="presentation"><a href="page-2.html" id="my-navi-2">page 2</a></li>
                <li role="presentation"><a href="page-3.html" id="my-navi-3">page 3</a></li>
              </ul>
            </nav>
            <!-- /navigation component -->
            """
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
