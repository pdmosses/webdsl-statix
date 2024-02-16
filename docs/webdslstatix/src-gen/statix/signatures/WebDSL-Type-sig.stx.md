---
title: WebDSL-Type-sig.stx
hide:
  - toc
---

# `WebDSL-Type-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Type-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Type-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Type-sig_26_3" id="signatures/WebDSL-Type-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-Type-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_1_8" id="signatures/WebDSL-DataModel-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_6_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-Native-sig.stx/#signatures/WebDSL-Native-sig_1_8" id="signatures/WebDSL-Native-sig_7_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Native-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_8_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="TypeElement_13_5" title="a definition with multiple references" data-urls="#TypeElement line 16_25, 21_25, 22_30, 23_34, 24_54; ../../../../trans/static-semantics/types/type-extensions.stx/#TypeElement line 23_35"><span class="token sort_Id">TypeElement</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="TypeElement-Plhdr_16_5" title="a definition with no references"><span class="token sort_Id">TypeElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#TypeElement_13_5" id="TypeElement_16_25" title="a reference to a single-file definition"><span class="token sort_Id">TypeElement</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/types/type-extensions.stx/#TypeDef_15_12" id="TypeDef_21_5" title="a definition with a single reference"><span class="token sort_Id">TypeDef</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_21_15" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#TypeElement_13_5" id="TypeElement_21_25" title="a reference to a single-file definition"><span class="token sort_Id">TypeElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_21_41" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="TypeAnno_22_5" title="a definition with no references"><span class="token sort_Id">TypeAnno</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#Annotation_14_5" id="Annotation_22_16" title="a reference to a single-file definition"><span class="token sort_Id">Annotation</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TypeElement_13_5" id="TypeElement_22_30" title="a reference to a single-file definition"><span class="token sort_Id">TypeElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/types/type-extensions.stx/#TypeFunction_24_28" id="TypeFunction_23_5" title="a definition with a single reference"><span class="token sort_Id">TypeFunction</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Native-sig.stx/#NCFunction_14_5" id="NCFunction_23_20" title="a reference to a single-file definition"><span class="token sort_Id">NCFunction</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TypeElement_13_5" id="TypeElement_23_34" title="a reference to a single-file definition"><span class="token sort_Id">TypeElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/types/type-extensions.stx/#TypeFunctionFromStatic_27_28" id="TypeFunctionFromStatic_24_5" title="a definition with a single reference"><span class="token sort_Id">TypeFunctionFromStatic</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Native-sig.stx/#NCFunctionFromStatic_17_5" id="NCFunctionFromStatic_24_30" title="a reference to a single-file definition"><span class="token sort_Id">NCFunctionFromStatic</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TypeElement_13_5" id="TypeElement_24_54" title="a reference to a single-file definition"><span class="token sort_Id">TypeElement</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
