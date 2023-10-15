---
title: WebDSL-Routing-sig.stx
hide:
  - toc
---

# `WebDSL-Routing-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Routing-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Routing-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Routing-sig_612_641" id="signatures/WebDSL-Routing-sig_7_36" title="Referenced at ../webdsl-statix-sig.stx line 21"><span class="token sort_Id">signatures/WebDSL-Routing-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_48_74" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_77_105" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#RoutingElement_188_202" id="RoutingElement_130_144" title="Referenced at line 13, 18, 19, 20"><span class="token sort_Id">RoutingElement</span></a></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="RoutingElement-Plhdr_165_185" title="Not referenced locally, nor via imports"><span class="token sort_Id">RoutingElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RoutingElement_130_144" id="RoutingElement_188_202" title="Defined at line 10"><span class="token sort_Id">RoutingElement</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl.stx/#Routing_15698_15705" id="Routing_234_241" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 359"><span class="token sort_Id">Routing</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#RoutingElement_130_144" id="RoutingElement_249_263" title="Defined at line 10"><span class="token sort_Id">RoutingElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_310_320" id="Definition_268_278" title="Defined at ../WebDSL-Core-sig.stx line 20"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="RoutingReceive_283_297" title="Not referenced locally, nor via imports"><span class="token sort_Id">RoutingReceive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_178_191" id="OptFormalArgs_300_313" title="Defined at ../WebDSL-Core-sig.stx line 12"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_255_260" id="Block_316_321" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RoutingElement_130_144" id="RoutingElement_325_339" title="Defined at line 10"><span class="token sort_Id">RoutingElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="RoutingConstruct_344_360" title="Not referenced locally, nor via imports"><span class="token sort_Id">RoutingConstruct</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_178_191" id="OptFormalArgs_363_376" title="Defined at ../WebDSL-Core-sig.stx line 12"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_255_260" id="Block_379_384" title="Defined at ../WebDSL-Action-sig.stx line 15"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RoutingElement_130_144" id="RoutingElement_388_402" title="Defined at line 10"><span class="token sort_Id">RoutingElement</span></a></span></span>
</code></pre></td></tr></tbody></table></div>