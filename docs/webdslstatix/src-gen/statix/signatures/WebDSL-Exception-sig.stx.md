---
title: WebDSL-Exception-sig.stx
hide:
  - toc
---

# `WebDSL-Exception-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Exception-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Exception-sig.stx "The source file on GitHub"

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
24
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Exception-sig_13_3" id="signatures/WebDSL-Exception-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 13"><span class="token sort_Id">signatures/WebDSL-Exception-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#Catch_15_19" id="Catch_12_5" title="Referenced at line 15, 22, 23, 24"><span class="token sort_Id">Catch</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="Catch-Plhdr_15_5" title="Not referenced"><span class="token sort_Id">Catch-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Catch_12_5" id="Catch_15_19" title="Defined at line 12"><span class="token sort_Id">Catch</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#ThrowStatement_27_16" id="ThrowStatement_20_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 27"><span class="token sort_Id">ThrowStatement</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_20_27" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_20_35" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_Id">Statement</span></a></span></span>
    <span class="cons_OpDecl"><span id="ThrowTemplate_21_5" title="Not referenced"><span class="token sort_Id">ThrowTemplate</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_21_26" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateCall_18_5" id="TemplateCall_21_34" title="Defined at ../WebDSL-UI-sig.stx line 18"><span class="token sort_Id">TemplateCall</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-actions.stx/#TryStatement_28_16" id="TryStatement_22_5" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 28"><span class="token sort_Id">TryStatement</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_22_20" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#Catch_12_5" id="Catch_22_33" title="Defined at line 12"><span class="token sort_Id">Catch</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_22_43" title="Defined at ../WebDSL-Core-sig.stx line 23"><span class="token sort_Id">Statement</span></a></span></span>
    <span class="cons_OpDecl"><span id="TryTemplate_23_5" title="Not referenced"><span class="token sort_Id">TryTemplate</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_23_19" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#Catch_12_5" id="Catch_23_32" title="Defined at line 12"><span class="token sort_Id">Catch</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateCall_18_5" id="TemplateCall_23_42" title="Defined at ../WebDSL-UI-sig.stx line 18"><span class="token sort_Id">TemplateCall</span></a></span></span>
    <span class="cons_OpDecl"><span id="Catch_24_5" title="Not referenced"><span class="token sort_Id">Catch</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#VarId_10_5" id="VarId_24_13" title="Defined at ../WebDSL-Lexical-sig.stx line 10"><span class="token sort_Id">VarId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_17_5" id="Sort_24_21" title="Defined at ../WebDSL-Core-sig.stx line 17"><span class="token sort_Id">Sort</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_24_28" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Catch_12_5" id="Catch_24_37" title="Defined at line 12"><span class="token sort_Id">Catch</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
