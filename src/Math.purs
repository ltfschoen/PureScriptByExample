module PureScriptbyExample.Chapter2.Math where

{- Use a Function from an External Library -}
import Math
{- Debug.Trace includes 'print' -}
import Debug.Trace

{-
  Type Annotation documentation (optional)
  Note: Compiler infers even without this line that diagonal is a function that takes two no's and returns a no. 
-}
diagonal :: Number -> Number -> Number

{- 
  Define a Diagonal Function  
-}
diagonal w h = sqrt (w * w + h * h)

{- Define main Function Application -}
main = print (diagonal 3 4)