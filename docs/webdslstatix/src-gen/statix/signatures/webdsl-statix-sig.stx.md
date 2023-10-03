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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../../../trans/static-semantics/webdsl.stx#signatures/webdsl-statix-sig_42_70" id="signatures/webdsl-statix-sig_7_35" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 4">signatures/webdsl-statix-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-AccessControl-sig.stx#signatures/WebDSL-AccessControl-sig_7_42" id="signatures/WebDSL-AccessControl-sig_47_82" title="Defined at ../WebDSL-AccessControl-sig.stx line 1">signatures/WebDSL-AccessControl-sig</a>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_85_113" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Ajax-sig.stx#signatures/WebDSL-Ajax-sig_7_33" id="signatures/WebDSL-Ajax-sig_116_142" title="Defined at ../WebDSL-Ajax-sig.stx line 1">signatures/WebDSL-Ajax-sig</a>
  <a href="../WebDSL-Attributes-sig.stx#signatures/WebDSL-Attributes-sig_7_39" id="signatures/WebDSL-Attributes-sig_145_177" title="Defined at ../WebDSL-Attributes-sig.stx line 1">signatures/WebDSL-Attributes-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_180_206" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_209_240" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-DataValidation-sig.stx#signatures/WebDSL-DataValidation-sig_7_43" id="signatures/WebDSL-DataValidation-sig_243_279" title="Defined at ../WebDSL-DataValidation-sig.stx line 1">signatures/WebDSL-DataValidation-sig</a>
  <a href="../WebDSL-Dispatch-sig.stx#signatures/WebDSL-Dispatch-sig_7_37" id="signatures/WebDSL-Dispatch-sig_282_312" title="Defined at ../WebDSL-Dispatch-sig.stx line 1">signatures/WebDSL-Dispatch-sig</a>
  <a href="../WebDSL-EntityDerive-sig.stx#signatures/WebDSL-EntityDerive-sig_7_41" id="signatures/WebDSL-EntityDerive-sig_315_349" title="Defined at ../WebDSL-EntityDerive-sig.stx line 1">signatures/WebDSL-EntityDerive-sig</a>
  <a href="../WebDSL-Exception-sig.stx#signatures/WebDSL-Exception-sig_7_38" id="signatures/WebDSL-Exception-sig_352_383" title="Defined at ../WebDSL-Exception-sig.stx line 1">signatures/WebDSL-Exception-sig</a>
  <a href="../WebDSL-Expand-sig.stx#signatures/WebDSL-Expand-sig_7_35" id="signatures/WebDSL-Expand-sig_386_414" title="Defined at ../WebDSL-Expand-sig.stx line 1">signatures/WebDSL-Expand-sig</a>
  <a href="../WebDSL-Generated-sig.stx#signatures/WebDSL-Generated-sig_7_38" id="signatures/WebDSL-Generated-sig_417_448" title="Defined at ../WebDSL-Generated-sig.stx line 1">signatures/WebDSL-Generated-sig</a>
  <a href="../WebDSL-JavaScript-sig.stx#signatures/WebDSL-JavaScript-sig_7_39" id="signatures/WebDSL-JavaScript-sig_451_483" title="Defined at ../WebDSL-JavaScript-sig.stx line 1">signatures/WebDSL-JavaScript-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_486_515" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-Native-sig.stx#signatures/WebDSL-Native-sig_7_35" id="signatures/WebDSL-Native-sig_518_546" title="Defined at ../WebDSL-Native-sig.stx line 1">signatures/WebDSL-Native-sig</a>
  <a href="../WebDSL-Prefetch-sig.stx#signatures/WebDSL-Prefetch-sig_7_37" id="signatures/WebDSL-Prefetch-sig_549_579" title="Defined at ../WebDSL-Prefetch-sig.stx line 1">signatures/WebDSL-Prefetch-sig</a>
  <a href="../WebDSL-Regex-sig.stx#signatures/WebDSL-Regex-sig_7_34" id="signatures/WebDSL-Regex-sig_582_609" title="Defined at ../WebDSL-Regex-sig.stx line 1">signatures/WebDSL-Regex-sig</a>
  <a href="../WebDSL-Routing-sig.stx#signatures/WebDSL-Routing-sig_7_36" id="signatures/WebDSL-Routing-sig_612_641" title="Defined at ../WebDSL-Routing-sig.stx line 1">signatures/WebDSL-Routing-sig</a>
  <a href="../WebDSL-Search-sig.stx#signatures/WebDSL-Search-sig_7_35" id="signatures/WebDSL-Search-sig_644_672" title="Defined at ../WebDSL-Search-sig.stx line 1">signatures/WebDSL-Search-sig</a>
  <a href="../WebDSL-Service-sig.stx#signatures/WebDSL-Service-sig_7_36" id="signatures/WebDSL-Service-sig_675_704" title="Defined at ../WebDSL-Service-sig.stx line 1">signatures/WebDSL-Service-sig</a>
  <a href="../WebDSL-Test-sig.stx#signatures/WebDSL-Test-sig_7_33" id="signatures/WebDSL-Test-sig_707_733" title="Defined at ../WebDSL-Test-sig.stx line 1">signatures/WebDSL-Test-sig</a>
  <a href="../WebDSL-TimeInterval-sig.stx#signatures/WebDSL-TimeInterval-sig_7_41" id="signatures/WebDSL-TimeInterval-sig_736_770" title="Defined at ../WebDSL-TimeInterval-sig.stx line 1">signatures/WebDSL-TimeInterval-sig</a>
  <a href="../WebDSL-Type-sig.stx#signatures/WebDSL-Type-sig_7_33" id="signatures/WebDSL-Type-sig_773_799" title="Defined at ../WebDSL-Type-sig.stx line 1">signatures/WebDSL-Type-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_802_826" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../WebDSL-XML-sig.stx#signatures/WebDSL-XML-sig_7_32" id="signatures/WebDSL-XML-sig_829_854" title="Defined at ../WebDSL-XML-sig.stx line 1">signatures/WebDSL-XML-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>

  <span class="keyword">constructors</span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
</code></pre></td></tr></tbody></table></div>