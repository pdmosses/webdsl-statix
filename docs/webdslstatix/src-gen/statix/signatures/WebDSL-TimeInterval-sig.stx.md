---
title: WebDSL-TimeInterval-sig.stx
hide:
  - toc
---

# `WebDSL-TimeInterval-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-TimeInterval-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-TimeInterval-sig_25_3" id="signatures/WebDSL-TimeInterval-sig_1_8" title="a definition with a single reference"><span class="token sort_Id">signatures/WebDSL-TimeInterval-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_5_3" title="a reference to a single-file definition"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><button class="modal-open" id="TimeIntervalPart_10_5" title="a definition with multiple references" data-urls="#TimeIntervalPart line 14_30, 20_20, 21_19, 22_20, 23_22, 24_22, 25_27, 26_25; ../../../../trans/static-semantics/actions/functions.stx/#TimeIntervalPart line 71_32"><span class="token sort_Id">TimeIntervalPart</span></button></span>
    <span class="cons_SortDecl"><button class="modal-open" id="TimeInterval_11_5" title="a definition with multiple references" data-urls="#TimeInterval line 15_26, 26_46, 27_25"><span class="token sort_Id">TimeInterval</span></button></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="TimeIntervalPart-Plhdr_14_5" title="a definition with no references"><span class="token sort_Id">TimeIntervalPart-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_14_30" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><span id="TimeInterval-Plhdr_15_5" title="a definition with no references"><span class="token sort_Id">TimeInterval-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#TimeInterval_11_5" id="TimeInterval_15_26" title="a reference to a single-file definition"><span class="token sort_Id">TimeInterval</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Weeks_72_25" id="Weeks_20_5" title="a definition with a single reference"><span class="token sort_Id">Weeks</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_20_13" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_20_20" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Days_73_25" id="Days_21_5" title="a definition with a single reference"><span class="token sort_Id">Days</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_21_12" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_21_19" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Hours_74_25" id="Hours_22_5" title="a definition with a single reference"><span class="token sort_Id">Hours</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_22_13" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_22_20" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Minutes_75_25" id="Minutes_23_5" title="a definition with a single reference"><span class="token sort_Id">Minutes</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_23_15" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_23_22" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Seconds_76_25" id="Seconds_24_5" title="a definition with a single reference"><span class="token sort_Id">Seconds</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_24_15" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_24_22" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#Milliseconds_77_25" id="Milliseconds_25_5" title="a definition with a single reference"><span class="token sort_Id">Milliseconds</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_25_20" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_25_27" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#TimeInterval_66_29" id="TimeInterval_26_5" title="a definition with a single reference"><span class="token sort_Id">TimeInterval</span></a> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#TimeIntervalPart_10_5" id="TimeIntervalPart_26_25" title="a reference to a single-file definition"><span class="token sort_Id">TimeIntervalPart</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#TimeInterval_11_5" id="TimeInterval_26_46" title="a reference to a single-file definition"><span class="token sort_Id">TimeInterval</span></a></span></span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/actions/functions.stx/#InvokeEvery_66_12" id="InvokeEvery_27_5" title="a definition with a single reference"><span class="token sort_Id">InvokeEvery</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_27_19" title="a reference to a single-file definition"><span class="token sort_Id">Exp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#TimeInterval_11_5" id="TimeInterval_27_25" title="a reference to a single-file definition"><span class="token sort_Id">TimeInterval</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Core-sig.stx/#Definition_20_5" id="Definition_27_41" title="a reference to a single-file definition"><span class="token sort_Id">Definition</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
