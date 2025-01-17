---
title: WebDSL-TimeInterval.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-TimeInterval_25_3" id="WebDSL-TimeInterval_1_8" title="a definition with a single reference">WebDSL-TimeInterval</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="a reference to a single-file definition">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_9_3" title="a definition with a single reference">TimeIntervalPart</a> <a href="#TimeInterval_24_25" id="TimeInterval_9_20" title="a definition with a single reference">TimeInterval</a>

<span class="keyword">context-free syntax</span>

  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_13_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Weeks_13_20" title="a definition with no references">Weeks</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_13_30" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">weeks</span>&gt;
  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_14_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Days_14_20" title="a definition with no references">Days</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_14_29" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">days</span>&gt;
  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_15_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Hours_15_20" title="a definition with no references">Hours</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_15_30" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">hours</span>&gt;
  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_16_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Minutes_16_20" title="a definition with no references">Minutes</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_16_32" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">minutes</span>&gt;
  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_17_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Seconds_17_20" title="a definition with no references">Seconds</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_17_32" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">seconds</span>&gt;
  <a href="#TimeIntervalPart_19_33" id="TimeIntervalPart_18_3" title="a definition with a single reference">TimeIntervalPart</a>.<span class="cons_Constructor"><span id="Milliseconds_18_20" title="a definition with no references">Milliseconds</span></span> = &lt;&lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_18_37" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">milliseconds</span>&gt;
  <a href="#TimeInterval_24_25" id="TimeInterval_19_3" title="a definition with a single reference">TimeInterval</a>.<span class="cons_Constructor"><span id="TimeInterval_19_16" title="a definition with no references">TimeInterval</span></span> = &lt;&lt;<a href="#TimeIntervalPart_9_3" id="TimeIntervalPart_19_33" title="a reference to a single-file definition">TimeIntervalPart</a>*&gt;&gt;

<span class="keyword">context-free syntax</span>

  <span id="Definition_23_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="InvokeEvery_23_14" title="a definition with no references">InvokeEvery</span></span> = &lt;
    <span class="cons_String">invoke</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_24_13" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">every</span> &lt;<a href="#TimeInterval_9_20" id="TimeInterval_24_25" title="a reference to a single-file definition">TimeInterval</a>&gt;
  &gt;

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
