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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-JavaScript-sig_451_483" id="signatures/WebDSL-JavaScript-sig_7_39" title="Referenced at ../webdsl-statix-sig.stx line 16"><span class="token sort_Id">signatures/WebDSL-JavaScript-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_51_79" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Attributes-sig_7_39" id="signatures/WebDSL-Attributes-sig_82_114" title="Defined at ../WebDSL-Attributes-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_117_141" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-XML-sig.stx/#signatures/WebDSL-XML-sig_7_32" id="signatures/WebDSL-XML-sig_144_169" title="Defined at ../WebDSL-XML-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-XML-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#JSPart_326_332" id="JSPart_194_200" title="Referenced at line 19, 24, 25, 26, 27; ../../../../trans/static-semantics/webdsl-ui.stx line 174"><span class="token sort_Id">JSPart</span></a></span>
    <span class="cons_SortAlias"><span id="JSChar_205_211" title="Not referenced locally, nor via imports"><span class="token sort_Id">JSChar</span></span> <span class="operator">=</span> <span class="cons_StringSort">string</span></span>
    <span class="cons_SortAlias"><a href="#JSString_536_544" id="JSString_225_233" title="Referenced at line 27"><span class="token sort_Id">JSString</span></a> <span class="operator">=</span> <span class="cons_StringSort">string</span></span>
    <span class="cons_SortAlias"><span id="JSSmallerThan_247_260" title="Not referenced locally, nor via imports"><span class="token sort_Id">JSSmallerThan</span></span> <span class="operator">=</span> <span class="cons_StringSort">string</span></span>
    <span class="cons_SortAlias"><span id="JSTilde_274_281" title="Not referenced locally, nor via imports"><span class="token sort_Id">JSTilde</span></span> <span class="operator">=</span> <span class="cons_StringSort">string</span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="JSPart-Plhdr_311_323" title="Not referenced locally, nor via imports"><span class="token sort_Id">JSPart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#JSPart_194_200" id="JSPart_326_332" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSElement_8302_8311" id="JSElement_364_373" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 165"><span class="token sort_Id">JSElement</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_292_301" id="Attribute_381_390" title="Defined at ../WebDSL-Attributes-sig.stx line 16"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#JSPart_194_200" id="JSPart_399_405" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_256_271" id="TemplateElement_410_425" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#StyleElement_8429_8441" id="StyleElement_430_442" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 169"><span class="token sort_Id">StyleElement</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Attributes-sig.stx/#Attribute_292_301" id="Attribute_450_459" title="Defined at ../WebDSL-Attributes-sig.stx line 16"><span class="token sort_Id">Attribute</span></a></span><span class="operator">)</span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#JSPart_194_200" id="JSPart_468_474" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-UI-sig.stx/#TemplateElement_256_271" id="TemplateElement_479_494" title="Defined at ../WebDSL-UI-sig.stx line 15"><span class="token sort_Id">TemplateElement</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSExp_8668_8673" id="JSExp_499_504" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 176"><span class="token sort_Id">JSExp</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_404_407" id="Exp_507_510" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#JSPart_194_200" id="JSPart_514_520" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-ui.stx/#JSString_8634_8642" id="JSString_525_533" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 175"><span class="token sort_Id">JSString</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#JSString_225_233" id="JSString_536_544" title="Defined at line 14"><span class="token sort_Id">JSString</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#JSPart_194_200" id="JSPart_548_554" title="Defined at line 12"><span class="token sort_Id">JSPart</span></a></span></span>
</code></pre></td></tr></tbody></table></div>