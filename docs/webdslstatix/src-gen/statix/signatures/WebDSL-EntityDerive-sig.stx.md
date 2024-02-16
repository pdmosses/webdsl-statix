---
title: WebDSL-EntityDerive-sig.stx
hide:
  - toc
---

# `WebDSL-EntityDerive-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-EntityDerive-sig.stx "The source file on GitHub"

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
25
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-EntityDerive-sig_12_3" id="signatures/WebDSL-EntityDerive-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-EntityDerive-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_7_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="ExpEntityDeriveProp_12_5" title="a definition with multiple references" data-urls="#ExpEntityDeriveProp line 16_33, 21_34, 22_60"><span class="token sort_Id">ExpEntityDeriveProp</span></button></span>
    <span class="cons_SortAlias"><button class="modal-open" id="DeriveArgPropId_13_5" title="a definition with multiple references" data-urls="#DeriveArgPropId line 22_27, 23_28"><span class="token sort_Id">DeriveArgPropId</span></button> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="ExpEntityDeriveProp-Plhdr_16_5" title="a definition with no references"><span class="token sort_Id">ExpEntityDeriveProp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_12_5" id="ExpEntityDeriveProp_16_33" title="a reference to a single-file definition"><span class="token sort_Id">ExpEntityDeriveProp</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/ui/template-calls.stx/#ExpEntityDerive_51_27" id="ExpEntityDerive_21_5" title="a definition with a single reference"><span class="token sort_Id">ExpEntityDerive</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_21_23" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_12_5" id="ExpEntityDeriveProp_21_34" title="a reference to a single-file definition"><span class="token sort_Id">ExpEntityDeriveProp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateArgExp_20_5" id="TemplateArgExp_21_58" title="a reference to a single-file definition"><span class="token sort_Id">TemplateArgExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="ExpEntityDeriveProp_22_5" title="a definition with no references"><span class="token sort_Id">ExpEntityDeriveProp</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DeriveArgPropId_13_5" id="DeriveArgPropId_22_27" title="a reference to a single-file definition"><span class="token sort_Id">DeriveArgPropId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptCallArgs_16_5" id="OptCallArgs_22_45" title="a reference to a single-file definition"><span class="token sort_Id">OptCallArgs</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ExpEntityDeriveProp_12_5" id="ExpEntityDeriveProp_22_60" title="a reference to a single-file definition"><span class="token sort_Id">ExpEntityDeriveProp</span></a></span></span>
    <span class="cons_OpDecl"><span id="ArgEntityDerive_23_5" title="a definition with no references"><span class="token sort_Id">ArgEntityDerive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_23_23" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#DeriveArgPropId_13_5" id="DeriveArgPropId_23_28" title="a reference to a single-file definition"><span class="token sort_Id">DeriveArgPropId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_12_5" id="OptFormalArgs_23_46" title="a reference to a single-file definition"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Sort_17_5" id="Sort_23_63" title="a reference to a single-file definition"><span class="token sort_Id">Sort</span></a></span></span>
    <span class="cons_OpDecl"><span id="ForeachElementEntityDerive_24_5" title="a definition with no references"><span class="token sort_Id">ForeachElementEntityDerive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_24_34" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_24_44" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_24_64" title="a reference to a single-file definition"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-entities.stx/#ForeachStatementEntityDerive_18_16" id="ForeachStatementEntityDerive_25_5" title="a definition with a single reference"><span class="token sort_Id">ForeachStatementEntityDerive</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_25_36" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_25_46" title="a reference to a single-file definition"><span class="token sort_Id">Statement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Statement_23_5" id="Statement_25_60" title="a reference to a single-file definition"><span class="token sort_Id">Statement</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
