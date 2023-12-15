---
title: WebDSL-Exception.sdf3
hide:
  - toc
---

# `WebDSL-Exception.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Exception.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Exception.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Exception.sdf3 "The source file on GitHub"

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
26
27
28
29
30
31
32
33
34
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Exception_13_3" id="WebDSL-Exception_1_8" title="Referenced at ../webdsl-statix.sdf3 line 13">WebDSL-Exception</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_5_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#Catch_23_18" id="Catch_11_3" title="Referenced at line 23, 26">Catch</a>

<span class="keyword">context-free syntax</span>

  <span id="Statement_15_3" title="Not referenced">Statement</span>.<span class="cons_Constructor"><span id="ThrowStatement_15_13" title="Not referenced">ThrowStatement</span></span> = &lt;
    <span class="cons_String">throw</span> &lt;{<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_16_13" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">;</span>
  &gt;
  <span id="TemplateCall_18_3" title="Not referenced">TemplateCall</span>.<span class="cons_Constructor"><span id="ThrowTemplate_18_16" title="Not referenced">ThrowTemplate</span></span> = &lt;
    <span class="cons_String">throw</span> &lt;{<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_19_13" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;

  <span id="Statement_22_3" title="Not referenced">Statement</span>.<span class="cons_Constructor"><span id="TryStatement_22_13" title="Not referenced">TryStatement</span></span> = &lt;
    <span class="cons_String">try</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_23_10" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt; &lt;<a href="#Catch_11_3" id="Catch_23_18" title="Defined at line 11, 29">Catch</a>+&gt;
  &gt;
  <span id="TemplateCall_25_3" title="Not referenced">TemplateCall</span>.<span class="cons_Constructor"><span id="TryTemplate_25_16" title="Not referenced">TryTemplate</span></span> = &lt;
    <span class="cons_String">try</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_26_10" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt; &lt;<a href="#Catch_11_3" id="Catch_26_18" title="Defined at line 11, 29">Catch</a>+&gt;
  &gt;

  <a href="#Catch_23_18" id="Catch_29_3" title="Referenced at line 23, 26">Catch</a>.<span class="cons_Constructor"><span id="Catch_29_9" title="Not referenced">Catch</span></span> = &lt;<span class="cons_String">catch</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#VarId_521_3" id="VarId_29_27" title="Defined at ../WebDSL-UI.sdf3 line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-UI.sdf3/#Sort_464_3" id="Sort_29_37" title="Defined at ../WebDSL-UI.sdf3 line 464">Sort</a>&gt; <span class="cons_String">)</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_29_46" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_33_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"try"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_34_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"throw"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
