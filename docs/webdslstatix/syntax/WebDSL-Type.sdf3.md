---
title: WebDSL-Type.sdf3
hide:
  - toc
---

# `WebDSL-Type.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Type.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Type.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Type.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Type_26_3" id="WebDSL-Type_1_8" title="Referenced at ../webdsl-statix.sdf3 line 26">WebDSL-Type</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_5_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Native.sdf3/#WebDSL-Native_1_8" id="WebDSL-Native_7_3" title="Defined at ../WebDSL-Native.sdf3 line 1">WebDSL-Native</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_8_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#TypeElement_18_8" id="TypeElement_12_3" title="Referenced at line 18">TypeElement</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_16_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="TypeDef_16_14" title="Not referenced">TypeDef</span></span> = &lt;
    <span class="cons_String">type</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_17_11" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TypeElement_12_3" id="TypeElement_18_8" title="Defined at line 12, 21, 22, 23, 24">TypeElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TypeElement_18_8" id="TypeElement_21_3" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeAnno_21_15" title="Not referenced">TypeAnno</span></span> = <a href="../WebDSL-DataModel.sdf3/#Annotation_108_3" id="Annotation_21_26" title="Defined at ../WebDSL-DataModel.sdf3 line 108, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133">Annotation</a>
  <a href="#TypeElement_18_8" id="TypeElement_22_3" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunction_22_15" title="Not referenced">TypeFunction</span></span> = <a href="../WebDSL-Native.sdf3/#NCFunction_32_24" id="NCFunction_22_30" title="Defined at ../WebDSL-Native.sdf3 line 32, 41">NCFunction</a>
  <a href="#TypeElement_18_8" id="TypeElement_23_3" title="Referenced at line 18">TypeElement</a> = &lt;<span class="cons_String">static</span>&gt; {<span class="keyword">reject</span>}
  <a href="#TypeElement_18_8" id="TypeElement_24_3" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunctionFromStatic_24_15" title="Not referenced">TypeFunctionFromStatic</span></span> = <a href="../WebDSL-Native.sdf3/#NCFunctionFromStatic_33_20" id="NCFunctionFromStatic_24_40" title="Defined at ../WebDSL-Native.sdf3 line 33, 48">NCFunctionFromStatic</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
