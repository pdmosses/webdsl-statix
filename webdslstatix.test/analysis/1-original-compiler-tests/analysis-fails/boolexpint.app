// Wrong operand types for operator And

application test

  page root { }

section functions

  function f(i : Int) : Void {
    var a : Bool := true;
    var b : Bool := true;
    var c : Bool := true;
    
    if (a && b && 2) {
      var z : Int := 2;
    }
  }
