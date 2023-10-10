---
title: statics.stx
hide:
  - toc
---

# `statics.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/statics.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/statics.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/statics.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <span id="statics_7_14" title="Not referenced locally, nor via imports"><span class="token sort_ConstraintId">statics</span></span>

<span class="keyword">imports</span>
  <a href="../static-semantics/webdsl.stx/#static-semantics/webdsl_7_30" id="static-semantics/webdsl_26_49" title="Defined at ../static-semantics/webdsl.stx line 1"><span class="token sort_ModuleID">static-semantics/webdsl</span></a>

<span class="layout">// see README.md for details on how to switch to multi-file analysis</span>

<span class="keyword">rules</span> <span class="layout">// single-file entry point</span>

<span class="layout">//  applicationOk : Unit</span>
<span class="layout">//  applicationOk(u) :- {s_init}</span>
<span class="layout">//    new s_init,</span>
<span class="layout">//    init(s_init),</span>
<span class="layout">//    programOk(s_init, u).</span>

<span class="keyword">rules</span> <span class="layout">// multi-file entry point</span>

  <a href="#projectOk_335_344" id="projectOk_315_324" title="Referenced at line 19"><span class="token sort_ConstraintId">projectOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort">scope</span>
  <a href="#projectOk_315_324" id="projectOk_335_344" title="Defined at line 18"><span class="token sort_ConstraintId">projectOk</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_global_345_353" title="Not referenced locally, nor via imports"><span class="token sort_ConstraintId">s_global</span></span></span><span class="operator">).</span>

  <a href="#fileOk_383_389" id="fileOk_359_365" title="Referenced at line 22"><span class="token sort_ConstraintId">fileOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort">scope</span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../../src-gen/statix/signatures/WebDSL-Core-sig.stx/#Unit_289_293" id="Unit_376_380" title="Defined at ../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 18"><span class="token sort_OpId">Unit</span></a></span>
  <a href="#fileOk_359_365" id="fileOk_383_389" title="Defined at line 21"><span class="token sort_ConstraintId">fileOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_global_417_425" id="s_global_390_398" title="Referenced at line 23"><span class="token sort_ConstraintId">s_global</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#u_427_428" id="u_400_401" title="Referenced at line 23"><span class="token sort_ConstraintId">u</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../static-semantics/webdsl.stx/#unitOk_15171_15177" id="unitOk_410_416" title="Defined at ../static-semantics/webdsl.stx line 347"><span class="token sort_ConstraintId">unitOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_global_390_398" id="s_global_417_425" title="Defined at line 22"><span class="token sort_ConstraintId">s_global</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#u_400_401" id="u_427_428" title="Defined at line 22"><span class="token sort_ConstraintId">u</span></a></span><span class="operator">).</span>

</code></pre></td></tr></tbody></table></div>