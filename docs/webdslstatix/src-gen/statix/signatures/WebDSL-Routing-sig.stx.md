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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Routing-sig_21_3" id="signatures/WebDSL-Routing-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-Routing-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="RoutingElement_10_5" title="a definition with multiple references" data-urls="#RoutingElement line 13_28, 18_20, 19_47, 20_49"><span class="token sort_Id">RoutingElement</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="RoutingElement-Plhdr_13_5" title="a definition with no references"><span class="token sort_Id">RoutingElement-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RoutingElement_10_5" id="RoutingElement_13_28" title="a reference to a single-file definition"><span class="token sort_Id">RoutingElement</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl.stx/#Routing_359_12" id="Routing_18_5" title="a definition with a single reference"><span class="token sort_Id">Routing</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#RoutingElement_10_5" id="RoutingElement_18_20" title="a reference to a single-file definition"><span class="token sort_Id">RoutingElement</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_18_39" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
    <span class="cons_OpDecl"><span id="RoutingReceive_19_5" title="a definition with no references"><span class="token sort_Id">RoutingReceive</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_12_5" id="OptFormalArgs_19_22" title="a reference to a single-file definition"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_19_38" title="a reference to a single-file definition"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RoutingElement_10_5" id="RoutingElement_19_47" title="a reference to a single-file definition"><span class="token sort_Id">RoutingElement</span></a></span></span>
    <span class="cons_OpDecl"><span id="RoutingConstruct_20_5" title="a definition with no references"><span class="token sort_Id">RoutingConstruct</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#OptFormalArgs_12_5" id="OptFormalArgs_20_24" title="a reference to a single-file definition"><span class="token sort_Id">OptFormalArgs</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Block_15_5" id="Block_20_40" title="a reference to a single-file definition"><span class="token sort_Id">Block</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RoutingElement_10_5" id="RoutingElement_20_49" title="a reference to a single-file definition"><span class="token sort_Id">RoutingElement</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
