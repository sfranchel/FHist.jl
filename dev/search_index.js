var documenterSearchIndex = {"docs":
[{"location":"#FHist.jl","page":"Introduction","title":"FHist.jl","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"(Image: Dev) (Image: Build Status) (Image: Codecov)","category":"page"},{"location":"","page":"Introduction","title":"Introduction","text":"Fast, error-aware, and thread-safe 1&2D histograms that are also compatible with StatsBase.Histogram","category":"page"},{"location":"#Quick-Start","page":"Introduction","title":"Quick Start","text":"","category":"section"},{"location":"","page":"Introduction","title":"Introduction","text":"julia> a = rand(1000);\n\njulia> h1 = Hist1D(a)\nStatsBase.Histogram{Int64, 1, Tuple{StepRangeLen{Float64, Base.TwicePrecision{Float64}, Base.TwicePrecision{Float64}}}}\nedges:\n  0.0:0.1:1.0\nweights: [81, 106, 108, 99, 88, 113, 105, 96, 91, 113]\n...\n...\n\njulia> h2 = Hist1D(Int; bins=0:0.1:1);\n\njulia> Threads.@threads for i in a\n           push!(h2, i)\n       end\n\njulia> update_error!(h2);\n\njulia> h1 == h2\ntrue","category":"page"}]
}
