---
title: WebDSL-Exception.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Exception_202_218" id="WebDSL-Exception_7_23" title="Referenced at ../webdsl-statix.sdf3 line 13">WebDSL-Exception</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_35_48" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_51_62" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_65_79" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_82_91" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#Catch_370_375" id="Catch_115_120" title="Referenced at line 26">Catch</a>

<span class="keyword">context-free syntax</span>

  <span id="Statement_145_154" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="ThrowStatement_155_169" title="Not referenced locally, nor via imports">ThrowStatement</span></span> = &lt;
    <span class="cons_String">throw</span> &lt;{<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_186_189" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">;</span>
  &gt;
  <span id="TemplateCall_205_217" title="Not referenced locally, nor via imports">TemplateCall</span>.<span class="cons_Constructor"><span id="ThrowTemplate_218_231" title="Not referenced locally, nor via imports">ThrowTemplate</span></span> = &lt;
    <span class="cons_String">throw</span> &lt;{<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_248_251" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a> <span class="cons_Lit">","</span>}+&gt;
  &gt;

  <span id="Statement_266_275" title="Not referenced locally, nor via imports">Statement</span>.<span class="cons_Constructor"><span id="TryStatement_276_288" title="Not referenced locally, nor via imports">TryStatement</span></span> = &lt;
    <span class="cons_String">try</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_302_307" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt; &lt;<a href="#Catch_115_120" id="Catch_310_315" title="Defined at line 11, 29">Catch</a>+&gt;
  &gt;
  <span id="TemplateCall_324_336" title="Not referenced locally, nor via imports">TemplateCall</span>.<span class="cons_Constructor"><span id="TryTemplate_337_348" title="Not referenced locally, nor via imports">TryTemplate</span></span> = &lt;
    <span class="cons_String">try</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_362_367" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt; &lt;<a href="#Catch_115_120" id="Catch_370_375" title="Defined at line 11, 29">Catch</a>+&gt;
  &gt;

  <a href="#Catch_370_375" id="Catch_385_390" title="Referenced at line 26">Catch</a>.<span class="cons_Constructor"><span id="Catch_391_396" title="Not referenced locally, nor via imports">Catch</span></span> = &lt;<span class="cons_String">catch</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#VarId_14717_14722" id="VarId_409_414" title="Defined at ../WebDSL-UI.sdf3 line 521">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_419_423" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">)</span> &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_428_433" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_455_465" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"try"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_485_495" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"throw"</span> {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>