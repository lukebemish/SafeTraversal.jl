var documenterSearchIndex = {"docs":
[{"location":"#SafeTraversal.jl","page":"SafeTraversal.jl","title":"SafeTraversal.jl","text":"","category":"section"},{"location":"","page":"SafeTraversal.jl","title":"SafeTraversal.jl","text":"Documentation for SafeTraversal.jl","category":"page"},{"location":"","page":"SafeTraversal.jl","title":"SafeTraversal.jl","text":"⋄","category":"page"},{"location":"#SafeTraversal.:⋄","page":"SafeTraversal.jl","title":"SafeTraversal.:⋄","text":"key ⋄ object\n\nReturns object[key] if object is not nothing or missing andkeyis a valid key inobject, otherwise returnsnothing`.\n\nExamples\n\njulia> nothing ⋄ :a\n\njulia> Dict(:a => 1) ⋄ :a\n1\n\njulia> Dict(:a => 1) ⋄ :b\n\n\n\n\n\n","category":"function"},{"location":"","page":"SafeTraversal.jl","title":"SafeTraversal.jl","text":"@⋄","category":"page"},{"location":"#SafeTraversal.@⋄","page":"SafeTraversal.jl","title":"SafeTraversal.@⋄","text":"@⋄ var1=expr evaluation\n@⋄ var1 evaluation\n\nEvaluates the first provided expression, and if it is not nothing or missing, evaluates the second expression using the first expression as a local variable. For instance:\n\n@⋄ x=[1,2,3] x[1]\n\nThis will evaluate to 1, and is equivalent to\n\nlet x = [1,2,3]\n    if isnothing(x) || ismissing(x)\n        nothing\n    else\n        x[1]\n    end\nend\n\nIf the first expression is a single symbol, the value of that variable is checked for null:\n\njulia> x = [1,2,3]\n3-element Vector{Int64}:\n 1\n 2\n 3\n\njulia> @⋄ x x[1]\n1\n\n\n\n\n\n","category":"macro"}]
}