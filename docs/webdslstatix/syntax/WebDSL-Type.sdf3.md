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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Type_26_3" id="WebDSL-Type_1_8" title="a definition with a single reference">WebDSL-Type</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_5_3" title="a reference to a single-file definition">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-Native.sdf3/#WebDSL-Native_1_8" id="WebDSL-Native_7_3" title="a reference to a single-file definition">WebDSL-Native</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_8_3" title="a reference to a single-file definition">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#TypeElement_18_8" id="TypeElement_12_3" title="a definition with a single reference">TypeElement</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_16_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="TypeDef_16_14" title="a definition with no references">TypeDef</span></span> = &lt;
    <span class="cons_String">type</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_17_11" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TypeElement_12_3" id="TypeElement_18_8" title="a reference to a single-file definition">TypeElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TypeElement_18_8" id="TypeElement_21_3" title="a definition with a single reference">TypeElement</a>.<span class="cons_Constructor"><span id="TypeAnno_21_15" title="a definition with no references">TypeAnno</span></span> = <a href="../WebDSL-DataModel.sdf3/#Annotation_108_3" id="Annotation_21_26" title="a reference to a single-file definition">Annotation</a>
  <a href="#TypeElement_18_8" id="TypeElement_22_3" title="a definition with a single reference">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunction_22_15" title="a definition with no references">TypeFunction</span></span> = <a href="../WebDSL-Native.sdf3/#NCFunction_32_24" id="NCFunction_22_30" title="a reference to a single-file definition">NCFunction</a>
  <a href="#TypeElement_18_8" id="TypeElement_23_3" title="a definition with a single reference">TypeElement</a> = &lt;<span class="cons_String">static</span>&gt; {<span class="keyword">reject</span>}
  <a href="#TypeElement_18_8" id="TypeElement_24_3" title="a definition with a single reference">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunctionFromStatic_24_15" title="a definition with no references">TypeFunctionFromStatic</span></span> = <a href="../WebDSL-Native.sdf3/#NCFunctionFromStatic_33_20" id="NCFunctionFromStatic_24_40" title="a reference to a single-file definition">NCFunctionFromStatic</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
