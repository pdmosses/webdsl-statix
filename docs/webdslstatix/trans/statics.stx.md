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
<td class="code"><pre><code><span class="keyword">module</span> <span id="statics_1_8" title="a definition with no references"><span class="token sort_Id">statics</span></span>

<span class="keyword">imports</span>
  <a href="../static-semantics/webdsl.stx/#static-semantics/webdsl_1_8" id="static-semantics/webdsl_4_3" title="a reference to a single-file definition"><span class="token sort_Id">static-semantics/webdsl</span></a>

<span class="layout">// see README.md for details on how to switch to multi-file analysis</span>

<span class="keyword">rules</span> <span class="layout">// single-file entry point</span>

<span class="layout">//  applicationOk : Unit</span>
<span class="layout">//  applicationOk(u) :- {s_init}</span>
<span class="layout">//    new s_init,</span>
<span class="layout">//    init(s_init),</span>
<span class="layout">//    programOk(s_init, u).</span>

<span class="keyword">rules</span> <span class="layout">// multi-file entry point</span>

  <a href="#projectOk_19_3" id="projectOk_18_3" title="a definition with a single reference"><span class="token sort_Id">projectOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span>
  <a href="#projectOk_18_3" id="projectOk_19_3" title="a reference to a single-file definition"><span class="token sort_Id">projectOk</span></a><span class="operator">(</span><span class="cons_Var"><span id="s_global_19_13" title="a definition with no references"><span class="token sort_Id">s_global</span></span></span><span class="operator">).</span>

  <a href="#fileOk_22_3" id="fileOk_21_3" title="a definition with a single reference"><span class="token sort_Id">fileOk</span></a> <span class="operator">:</span> <span class="cons_ScopeSort"><span class="keyword">scope</span></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../../src-gen/statix/signatures/WebDSL-Core-sig.stx/#Unit_18_5" id="Unit_21_20" title="a reference to a single-file definition"><span class="token sort_Id">Unit</span></a></span>
  <a href="#fileOk_21_3" id="fileOk_22_3" title="a reference to a single-file definition"><span class="token sort_Id">fileOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_global_23_12" id="s_global_22_10" title="a definition with a single reference"><span class="token sort_Id">s_global</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#u_23_22" id="u_22_20" title="a definition with a single reference"><span class="token sort_Id">u</span></a></span><span class="operator">)</span> <span class="operator">:-</span>
    <a href="../static-semantics/webdsl.stx/#unitOk_347_3" id="unitOk_23_5" title="a reference to a single-file definition"><span class="token sort_Id">unitOk</span></a><span class="operator">(</span><span class="cons_Var"><a href="#s_global_22_10" id="s_global_23_12" title="a reference to a single-file definition"><span class="token sort_Id">s_global</span></a></span><span class="operator">,</span> <span class="cons_Var"><a href="#u_22_20" id="u_23_22" title="a reference to a single-file definition"><span class="token sort_Id">u</span></a></span><span class="operator">).</span>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
