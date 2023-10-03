---
title: WebDSL-TimeInterval.sdf3
---

# `WebDSL-TimeInterval.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-TimeInterval.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-TimeInterval.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-TimeInterval.sdf3 "The source file on GitHub"

<div class="sdf3"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-TimeInterval_406_425" id="WebDSL-TimeInterval_7_26" title="Referenced at ../webdsl-statix.sdf3 line 25">WebDSL-TimeInterval</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_38_51" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_54_65" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_89_105" title="Referenced at line 19">TimeIntervalPart</a> <a href="#TimeInterval_534_546" id="TimeInterval_106_118" title="Referenced at line 24">TimeInterval</a>

<span class="keyword">context-free syntax</span>

  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_143_159" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Weeks_160_165" title="Not referenced locally, nor via imports">Weeks</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_170_173" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">weeks</span>&gt;
  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_184_200" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Days_201_205" title="Not referenced locally, nor via imports">Days</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_210_213" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">days</span>&gt;
  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_223_239" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Hours_240_245" title="Not referenced locally, nor via imports">Hours</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_250_253" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">hours</span>&gt;
  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_264_280" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Minutes_281_288" title="Not referenced locally, nor via imports">Minutes</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_293_296" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">minutes</span>&gt;
  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_309_325" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Seconds_326_333" title="Not referenced locally, nor via imports">Seconds</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_338_341" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">seconds</span>&gt;
  <a href="#TimeIntervalPart_439_455" id="TimeIntervalPart_354_370" title="Referenced at line 19">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Milliseconds_371_383" title="Not referenced locally, nor via imports">Milliseconds</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_388_391" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">milliseconds</span>&gt;
  <a href="#TimeInterval_534_546" id="TimeInterval_409_421" title="Referenced at line 24">TimeInterval</a>.<span class="cons_Constructor"><span id="TimeInterval_422_434" title="Not referenced locally, nor via imports">TimeInterval</span></span> = &lt;&lt;<a href="#TimeIntervalPart_89_105" id="TimeIntervalPart_439_455" title="Defined at line 9, 13, 14, 15, 16, 17, 18">TimeIntervalPart</a>*&gt;&gt;

<span class="keyword">context-free syntax</span>

  <span id="Definition_483_493" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="InvokeEvery_494_505" title="Not referenced locally, nor via imports">InvokeEvery</span></span> = &lt;
    <span class="cons_String">invoke</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_522_525" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">every</span> &lt;<a href="#TimeInterval_106_118" id="TimeInterval_534_546" title="Defined at line 9, 19">TimeInterval</a>&gt;
  &gt;

</code></pre></td></tr></tbody></table></div>