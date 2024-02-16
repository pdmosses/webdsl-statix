---
title: WebDSL-Generated-sig.stx
hide:
  - toc
---

# `WebDSL-Generated-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Generated-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Generated-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Generated-sig_15_3" id="signatures/WebDSL-Generated-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-Generated-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="GeneratedElement_10_5" title="a definition with multiple references" data-urls="#GeneratedElement line 13_30, 18_29, 19_27, 20_38"><span class="token sort_Id">GeneratedElement</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="GeneratedElement-Plhdr_13_5" title="a definition with no references"><span class="token sort_Id">GeneratedElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_10_5" id="GeneratedElement_13_30" title="a reference to a single-file definition"><span class="token sort_Id">GeneratedElement</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><button class="modal-open" id="Generated_18_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/webdsl-search.stx/#Generated line 86_32; ../../../../trans/static-semantics/entities/generated-functions.stx/#Generated line 19_32, 45_32"><span class="token sort_Id">Generated</span></button> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_18_22" title="a reference to a single-file definition"><span class="token sort_Id">Id</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_10_5" id="GeneratedElement_18_29" title="a reference to a single-file definition"><span class="token sort_Id">GeneratedElement</span></a></span></span>
    <span class="cons_OpDecl"><button class="modal-open" id="GeneratedDefinition_19_5" title="a definition with multiple references" data-urls="../../../../trans/static-semantics/webdsl-search.stx/#GeneratedDefinition line 86_12; ../../../../trans/static-semantics/entities/generated-functions.stx/#GeneratedDefinition line 19_12, 45_12"><span class="token sort_Id">GeneratedDefinition</span></button> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_10_5" id="GeneratedElement_19_27" title="a reference to a single-file definition"><span class="token sort_Id">GeneratedElement</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_19_47" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="GeneratedEntityBodyDeclaration_20_5" title="a definition with no references"><span class="token sort_Id">GeneratedEntityBodyDeclaration</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#GeneratedElement_10_5" id="GeneratedElement_20_38" title="a reference to a single-file definition"><span class="token sort_Id">GeneratedElement</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-DataModel-sig.stx/#EntityBodyDeclaration_11_5" id="EntityBodyDeclaration_20_58" title="a reference to a single-file definition"><span class="token sort_Id">EntityBodyDeclaration</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
