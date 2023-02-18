module SafeTraversal

export @⋄, ⋄, traverse

"""
    key ⋄ object

Returns `object[key]` if `object` is not `nothing` or `missing and `key` is a valid key in `object`, otherwise returns
`nothing`.

# Examples
```julia-repl
julia> nothing ⋄ :a

julia> Dict(:a => 1) ⋄ :a
1

julia> Dict(:a => 1) ⋄ :b
```
"""
⋄(object, key) = haskey(object, key) ? object[key] : nothing
⋄(::Missing, ::Any) = nothing
⋄(::Nothing, ::Any) = nothing

traverse = ⋄

function lazycheckedeval(expr::Expr, evaluate)
    symbol = if expr.head == :(=)
        expr.args[1]
    else
        error("Expected an assignment expression, got $(expr)")
    end
    return quote
        let $symbol = $expr
            if isnothing($symbol) || ismissing($symbol)
                nothing
            else
                $evaluate
            end
        end
    end
end

function lazycheckedeval(expr, evaluate)
    error("Expected an expression, got $(expr)")
end

"""
    @⋄ var1=expr evaluation

Evaluates the first provided expression, and if it is not `nothing` or `missing`, evaluates the second expression using the
first expression as a local variable. For instance:

```julia
@⋄ x=[1,2,3] x[1]
```

This will evaluate to `1`, and is equivalent to

```julia
let x = [1,2,3]
    if isnothing(x) || ismissing(x)
        nothing
    else
        x[1]
    end
end
```
"""
macro ⋄(expr, evaluation)
    lazycheckedeval(expr, evaluate)
end

end
