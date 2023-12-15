---
title: webdsl-statix-sig.stx
hide:
  - toc
---

# `webdsl-statix-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/webdsl-statix-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/webdsl-statix-sig.stx "The source file on GitHub"

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
28
29
30
31
32
33
34
35
36
37
38
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../../../trans/static-semantics/webdsl.stx/#signatures/webdsl-statix-sig_4_3" id="signatures/webdsl-statix-sig_1_8" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 4"><span class="token sort_Id">signatures/webdsl-statix-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-AccessControl-sig.stx/#signatures/WebDSL-AccessControl-sig_1_8" id="signatures/WebDSL-AccessControl-sig_4_3" title="Defined at ../WebDSL-AccessControl-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-AccessControl-sig</span></a>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_5_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Ajax-sig.stx/#signatures/WebDSL-Ajax-sig_1_8" id="signatures/WebDSL-Ajax-sig_6_3" title="Defined at ../WebDSL-Ajax-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Ajax-sig</span></a>
  <a href="../WebDSL-Attributes-sig.stx/#signatures/WebDSL-Attributes-sig_1_8" id="signatures/WebDSL-Attributes-sig_7_3" title="Defined at ../WebDSL-Attributes-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Attributes-sig</span></a>
  <a href="../WebDSL-Core-sig.stx/#signatures/WebDSL-Core-sig_1_8" id="signatures/WebDSL-Core-sig_8_3" title="Defined at ../WebDSL-Core-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Core-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_1_8" id="signatures/WebDSL-DataModel-sig_9_3" title="Defined at ../WebDSL-DataModel-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>
  <a href="../WebDSL-DataValidation-sig.stx/#signatures/WebDSL-DataValidation-sig_1_8" id="signatures/WebDSL-DataValidation-sig_10_3" title="Defined at ../WebDSL-DataValidation-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-DataValidation-sig</span></a>
  <a href="../WebDSL-Dispatch-sig.stx/#signatures/WebDSL-Dispatch-sig_1_8" id="signatures/WebDSL-Dispatch-sig_11_3" title="Defined at ../WebDSL-Dispatch-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Dispatch-sig</span></a>
  <a href="../WebDSL-EntityDerive-sig.stx/#signatures/WebDSL-EntityDerive-sig_1_8" id="signatures/WebDSL-EntityDerive-sig_12_3" title="Defined at ../WebDSL-EntityDerive-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-EntityDerive-sig</span></a>
  <a href="../WebDSL-Exception-sig.stx/#signatures/WebDSL-Exception-sig_1_8" id="signatures/WebDSL-Exception-sig_13_3" title="Defined at ../WebDSL-Exception-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Exception-sig</span></a>
  <a href="../WebDSL-Expand-sig.stx/#signatures/WebDSL-Expand-sig_1_8" id="signatures/WebDSL-Expand-sig_14_3" title="Defined at ../WebDSL-Expand-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Expand-sig</span></a>
  <a href="../WebDSL-Generated-sig.stx/#signatures/WebDSL-Generated-sig_1_8" id="signatures/WebDSL-Generated-sig_15_3" title="Defined at ../WebDSL-Generated-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Generated-sig</span></a>
  <a href="../WebDSL-JavaScript-sig.stx/#signatures/WebDSL-JavaScript-sig_1_8" id="signatures/WebDSL-JavaScript-sig_16_3" title="Defined at ../WebDSL-JavaScript-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-JavaScript-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_17_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-Native-sig.stx/#signatures/WebDSL-Native-sig_1_8" id="signatures/WebDSL-Native-sig_18_3" title="Defined at ../WebDSL-Native-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Native-sig</span></a>
  <a href="../WebDSL-Prefetch-sig.stx/#signatures/WebDSL-Prefetch-sig_1_8" id="signatures/WebDSL-Prefetch-sig_19_3" title="Defined at ../WebDSL-Prefetch-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Prefetch-sig</span></a>
  <a href="../WebDSL-Regex-sig.stx/#signatures/WebDSL-Regex-sig_1_8" id="signatures/WebDSL-Regex-sig_20_3" title="Defined at ../WebDSL-Regex-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Regex-sig</span></a>
  <a href="../WebDSL-Routing-sig.stx/#signatures/WebDSL-Routing-sig_1_8" id="signatures/WebDSL-Routing-sig_21_3" title="Defined at ../WebDSL-Routing-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Routing-sig</span></a>
  <a href="../WebDSL-Search-sig.stx/#signatures/WebDSL-Search-sig_1_8" id="signatures/WebDSL-Search-sig_22_3" title="Defined at ../WebDSL-Search-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Search-sig</span></a>
  <a href="../WebDSL-Service-sig.stx/#signatures/WebDSL-Service-sig_1_8" id="signatures/WebDSL-Service-sig_23_3" title="Defined at ../WebDSL-Service-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Service-sig</span></a>
  <a href="../WebDSL-Test-sig.stx/#signatures/WebDSL-Test-sig_1_8" id="signatures/WebDSL-Test-sig_24_3" title="Defined at ../WebDSL-Test-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Test-sig</span></a>
  <a href="../WebDSL-TimeInterval-sig.stx/#signatures/WebDSL-TimeInterval-sig_1_8" id="signatures/WebDSL-TimeInterval-sig_25_3" title="Defined at ../WebDSL-TimeInterval-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-TimeInterval-sig</span></a>
  <a href="../WebDSL-Type-sig.stx/#signatures/WebDSL-Type-sig_1_8" id="signatures/WebDSL-Type-sig_26_3" title="Defined at ../WebDSL-Type-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Type-sig</span></a>
  <a href="../WebDSL-UI-sig.stx/#signatures/WebDSL-UI-sig_1_8" id="signatures/WebDSL-UI-sig_27_3" title="Defined at ../WebDSL-UI-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-UI-sig</span></a>
  <a href="../WebDSL-XML-sig.stx/#signatures/WebDSL-XML-sig_1_8" id="signatures/WebDSL-XML-sig_28_3" title="Defined at ../WebDSL-XML-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-XML-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>

  <span class="keyword">constructors</span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
