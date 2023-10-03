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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-TimeInterval-sig_736_770" id="signatures/WebDSL-TimeInterval-sig_7_41" title="Referenced at ../webdsl-statix-sig.stx line 25">signatures/WebDSL-TimeInterval-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_53_81" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_84_110" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#TimeIntervalPart_214_230" id="TimeIntervalPart_135_151" title="Referenced at line 14, 20, 21, 22, 23, 24, 25, 26; ../../../../trans/static-semantics/actions/functions.stx line 71">TimeIntervalPart</a>
    <a href="#TimeInterval_256_268" id="TimeInterval_156_168" title="Referenced at line 15, 26, 27">TimeInterval</a>

  <span class="keyword">constructors</span>
    <span id="TimeIntervalPart-Plhdr_189_211" title="Not referenced locally, nor via imports">TimeIntervalPart-Plhdr</span> : <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_214_230" title="Defined at line 10">TimeIntervalPart</a>
    <span id="TimeInterval-Plhdr_235_253" title="Not referenced locally, nor via imports">TimeInterval-Plhdr</span> : <a href="#TimeInterval_156_168" id="TimeInterval_256_268" title="Defined at line 11">TimeInterval</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Weeks_2941_2946" id="Weeks_300_305" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 72">Weeks</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_308_311" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_315_331" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Days_3016_3020" id="Days_336_340" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 73">Days</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_343_346" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_350_366" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Hours_3091_3096" id="Hours_371_376" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 74">Hours</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_379_382" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_386_402" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Minutes_3166_3173" id="Minutes_407_414" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 75">Minutes</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_417_420" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_424_440" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Seconds_3241_3248" id="Seconds_445_452" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 76">Seconds</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_455_458" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_462_478" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Milliseconds_3316_3328" id="Milliseconds_483_495" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 77">Milliseconds</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_498_501" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_505_521" title="Defined at line 10">TimeIntervalPart</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#TimeInterval_2731_2743" id="TimeInterval_526_538" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 66">TimeInterval</a> : <span class="keyword">list</span>(<a href="#TimeIntervalPart_135_151" id="TimeIntervalPart_546_562" title="Defined at line 10">TimeIntervalPart</a>) -&gt; <a href="#TimeInterval_156_168" id="TimeInterval_567_579" title="Defined at line 11">TimeInterval</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#InvokeEvery_2714_2725" id="InvokeEvery_584_595" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 66">InvokeEvery</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_598_601" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#TimeInterval_156_168" id="TimeInterval_604_616" title="Defined at line 11">TimeInterval</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_620_630" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
</code></pre></td></tr></tbody></table></div>