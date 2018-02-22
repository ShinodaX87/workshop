# Code Snippets

```coffeescript
# - - - - - - - - - -
# COMPONENTS FOR PHP
# - - - - - - - - - -
'.source.php':
  'php docblock':
    'prefix': 'docblock'
    'body':"""
           /**
            * $1
            *
            * @package Webapplication
            * @author Michael [michael@zenbox.de]
            * @since $2
            * @version v1.0.0
            * @copyright (c) 2018 Michael Reichart, Cologne
            * @license MIT License [https://opensource.org/licenses/MIT]
            */
           $3
    """
  'php setter':
    'prefix': 'setter'
    'body': """
          /**
          * the setter for value
          * @var mixed $value
          * @return boolean indicates if the methods worked or not
          */
          public function setProperty ($argument = null)
          {
            // some value validation
            if (empty($argument)) return false;
              $this->property = $argument;
              return true;
            }
    """
  'php getter':
    'prefix': 'getter'
    'body': """
          /**
          * the getter for value
          * @return mixed return the value
          */
          public function getProperty ()
          {
            return $this->property;
          }
    """
```
