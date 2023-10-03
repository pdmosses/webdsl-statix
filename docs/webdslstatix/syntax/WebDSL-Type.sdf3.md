---
title: WebDSL-Type.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Type_428_439" id="WebDSL-Type_7_18" title="Referenced at ../webdsl-statix.sdf3 line 26">WebDSL-Type</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_30_43" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_46_62" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_65_79" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Native.sdf3#WebDSL-Native_7_20" id="WebDSL-Native_82_95" title="Defined at ../WebDSL-Native.sdf3 line 1">WebDSL-Native</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_98_109" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>

<span class="keyword">context-free sorts</span>

  <a href="#TypeElement_215_226" id="TypeElement_133_144" title="Referenced at line 18">TypeElement</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_169_179" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="TypeDef_180_187" title="Not referenced locally, nor via imports">TypeDef</span></span> = &lt;
    <span class="cons_String">type</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_202_204" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TypeElement_133_144" id="TypeElement_215_226" title="Defined at line 12, 21, 22, 23, 24">TypeElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TypeElement_215_226" id="TypeElement_241_252" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeAnno_253_261" title="Not referenced locally, nor via imports">TypeAnno</span></span> = <a href="../WebDSL-DataModel.sdf3#Annotation_2288_2298" id="Annotation_264_274" title="Defined at ../WebDSL-DataModel.sdf3 line 108, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133">Annotation</a>
  <a href="#TypeElement_215_226" id="TypeElement_277_288" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunction_289_301" title="Not referenced locally, nor via imports">TypeFunction</span></span> = <a href="../WebDSL-Native.sdf3#NCFunction_490_500" id="NCFunction_304_314" title="Defined at ../WebDSL-Native.sdf3 line 32, 41">NCFunction</a>
  <a href="#TypeElement_215_226" id="TypeElement_317_328" title="Referenced at line 18">TypeElement</a> = &lt;<span class="cons_String">static</span>&gt; {<span class="keyword">reject</span>}
  <a href="#TypeElement_215_226" id="TypeElement_351_362" title="Referenced at line 18">TypeElement</a>.<span class="cons_Constructor"><span id="TypeFunctionFromStatic_363_385" title="Not referenced locally, nor via imports">TypeFunctionFromStatic</span></span> = <a href="../WebDSL-Native.sdf3#NCFunctionFromStatic_537_557" id="NCFunctionFromStatic_388_408" title="Defined at ../WebDSL-Native.sdf3 line 33, 48">NCFunctionFromStatic</a>

</code></pre></td></tr></tbody></table></div>