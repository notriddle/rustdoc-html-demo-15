(function() {
    var type_impls = Object.fromEntries([["rustc_middle",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable%3CD%3E-for-%26RawList%3CTypeInfo,+Clause%3C'tcx%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/codec.rs.html#466-477\">Source</a><a href=\"#impl-Decodable%3CD%3E-for-%26RawList%3CTypeInfo,+Clause%3C'tcx%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'tcx, D: <a class=\"trait\" href=\"rustc_middle/ty/trait.TyDecoder.html\" title=\"trait rustc_middle::ty::TyDecoder\">TyDecoder</a>&lt;I = <a class=\"struct\" href=\"rustc_middle/ty/context/struct.TyCtxt.html\" title=\"struct rustc_middle::ty::context::TyCtxt\">TyCtxt</a>&lt;'tcx&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_serialize/serialize/trait.Decodable.html\" title=\"trait rustc_serialize::serialize::Decodable\">Decodable</a>&lt;D&gt; for &amp;'tcx <a class=\"type\" href=\"rustc_middle/ty/list/type.ListWithCachedTypeInfo.html\" title=\"type rustc_middle::ty::list::ListWithCachedTypeInfo\">ListWithCachedTypeInfo</a>&lt;<a class=\"struct\" href=\"rustc_middle/ty/predicate/struct.Clause.html\" title=\"struct rustc_middle::ty::predicate::Clause\">Clause</a>&lt;'tcx&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/ty/codec.rs.html#466-477\">Source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/nightly-rustc/rustc_serialize/serialize/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>(decoder: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut D</a>) -&gt; Self</h4></section></div></details>","Decodable<D>","rustc_middle::ty::Clauses"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-EraseType-for-%26RawList%3CTypeInfo,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#72-74\">Source</a><a href=\"#impl-EraseType-for-%26RawList%3CTypeInfo,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"rustc_middle/query/erase/trait.EraseType.html\" title=\"trait rustc_middle::query::erase::EraseType\">EraseType</a> for &amp;<a class=\"type\" href=\"rustc_middle/ty/list/type.ListWithCachedTypeInfo.html\" title=\"type rustc_middle::ty::list::ListWithCachedTypeInfo\">ListWithCachedTypeInfo</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Result\" class=\"associatedtype trait-impl\"><a class=\"src rightside\" href=\"src/rustc_middle/query/erase.rs.html#73\">Source</a><a href=\"#associatedtype.Result\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"rustc_middle/query/erase/trait.EraseType.html#associatedtype.Result\" class=\"associatedtype\">Result</a> = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">8</a>]</h4></section></div></details>","EraseType","rustc_middle::ty::Clauses"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[3237]}