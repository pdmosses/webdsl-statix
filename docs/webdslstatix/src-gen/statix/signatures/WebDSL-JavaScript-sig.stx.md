---
title: WebDSL-JavaScript-sig.stx
hide:
  - toc
---

# `WebDSL-JavaScript-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-JavaScript-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-JavaScript-sig.stx "The source file on GitHub"

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
26
27
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-JavaScript-sig_16_3" id="signatures/WebDSL-JavaScript-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 16"><span class="token sort_Id">signatures/WebDSL-JavaScript-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Attributes-sig_1_8" id="signatures/WebDSL-Attributes-sig_5_3" title="Defined at ../WebDSL-Attributes-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_6_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-XML-sig.stx/#signatures/WebDSL-XML-sig_1_8" id="signatures/WebDSL-XML-sig_7_3" title="Defined at ../WebDSL-XML-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-XML-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="JSPart_12_5" title="Multi-file references" data-urls="#JSPart_19_20 line 19, 24, 25, 26, 27; ../../../../trans/static-semantics/webdsl-ui.stx/#JSPart_174_28 line 174"><span class="token sort_Id">JSPart</span></button></span>
    <span class="cons_SortAlias"><span id="JSChar_13_5" title="Not referenced"><span class="token sort_Id">JSChar</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#JSString_27_16" id="JSString_14_5" title="Referenced at line 27"><span class="token sort_Id">JSString</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="JSSmallerThan_15_5" title="Not referenced"><span class="token sort_Id">JSSmallerThan</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><span id="JSTilde_16_5" title="Not referenced"><span class="token sort_Id">JSTilde</span></span> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="JSPart-Plhdr_19_5" title="Not referenced"><span class="token sort_Id">JSPart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#JSPart_12_5" id="JSPart_19_20" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSElement_165_30" id="JSElement_24_5" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 165"><span class="token sort_Id">JSElement</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_24_22" title="Defined at ../WebDSL-Attributes-sig.stx line 16"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#JSPart_12_5" id="JSPart_24_40" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_24_51" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#StyleElement_169_30" id="StyleElement_25_5" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 169"><span class="token sort_Id">StyleElement</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_16_5" id="Attribute_25_25" title="Defined at ../WebDSL-Attributes-sig.stx line 16"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#JSPart_12_5" id="JSPart_25_43" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_15_5" id="TemplateElement_25_54" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSExp_176_21" id="JSExp_26_5" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 176"><span class="token sort_Id">JSExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_26_13" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#JSPart_12_5" id="JSPart_26_20" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSString_175_21" id="JSString_27_5" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 175"><span class="token sort_Id">JSString</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#JSString_14_5" id="JSString_27_16" title="Defined at line 14"><span class="token sort_Id">JSString</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#JSPart_12_5" id="JSPart_27_28" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
