---
title: WebDSL-Exception-sig.stx
hide:
  - toc
---

# `WebDSL-Exception-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Exception-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Exception-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Exception-sig_352_383" id="signatures/WebDSL-Exception-sig_7_38" title="Referenced at ../webdsl-statix-sig.stx line 13">signatures/WebDSL-Exception-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_50_78" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_81_107" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_110_139" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_142_166" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#Catch_231_236" id="Catch_191_196" title="Referenced at line 15, 22, 23, 24">Catch</a>

  <span class="keyword">constructors</span>
    <span id="Catch-Plhdr_217_228" title="Not referenced locally, nor via imports">Catch-Plhdr</span> : <a href="#Catch_191_196" id="Catch_231_236" title="Defined at line 12">Catch</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ThrowStatement_755_769" id="ThrowStatement_268_282" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 27">ThrowStatement</a> : <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_290_293" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_298_307" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="ThrowTemplate_312_325" title="Not referenced locally, nor via imports">ThrowTemplate</span> : <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_333_336" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_341_353" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#TryStatement_861_873" id="TryStatement_358_370" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 28">TryStatement</a> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_373_378" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> * <span class="keyword">list</span>(<a href="#Catch_191_196" id="Catch_386_391" title="Defined at line 12">Catch</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_396_405" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="TryTemplate_410_421" title="Not referenced locally, nor via imports">TryTemplate</span> : <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_424_429" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> * <span class="keyword">list</span>(<a href="#Catch_191_196" id="Catch_437_442" title="Defined at line 12">Catch</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_447_459" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a>
    <span id="Catch_464_469" title="Not referenced locally, nor via imports">Catch</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_472_477" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_480_484" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Block_255_260" id="Block_487_492" title="Defined at ../WebDSL-Action-sig.stx line 15">Block</a> -&gt; <a href="#Catch_191_196" id="Catch_496_501" title="Defined at line 12">Catch</a>
</code></pre></td></tr></tbody></table></div>