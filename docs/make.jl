using Documenter
using SafeTraversal

makedocs(
    sitename = "SafeTraversal.jl",
    format = Documenter.HTML(),
    modules = [SafeTraversal]
)

deploydocs(
    repo   = "github.com/lukebemish/SafeTraversal.jl.git",
    target = "build",
    push_preview = true
)
