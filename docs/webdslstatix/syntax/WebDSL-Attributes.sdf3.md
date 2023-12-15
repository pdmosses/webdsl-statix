---
title: WebDSL-Attributes.sdf3
hide:
  - toc
---

# `WebDSL-Attributes.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Attributes.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Attributes.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Attributes.sdf3 "The source file on GitHub"

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
35
36
37
38
39
40
41
42
43
44
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Attributes_1_8" title="Multi-file references" data-urls="../WebDSL-Expand.sdf3/#WebDSL-Attributes_9_3 line 9; ../WebDSL-JavaScript.sdf3/#WebDSL-Attributes_5_3 line 5; ../webdsl-statix.sdf3/#WebDSL-Attributes_7_3 line 7; ../WebDSL-UI.sdf3/#WebDSL-Attributes_5_3 line 5; ../WebDSL-XML.sdf3/#WebDSL-Attributes_6_3 line 6">WebDSL-Attributes</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_6_3" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#AttributeSelection_43_24" id="AttributeSelection_11_3" title="Referenced at line 43, 44">AttributeSelection</a> <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_11_22" title="Referenced at line 16">AttributeCollectionOverride</a> <a href="#AttributeElem_17_8" id="AttributeElem_11_50" title="Referenced at line 17">AttributeElem</a> <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_11_64" title="Referenced at line 21">AttributeIncludeIgnore</a> <button class="modal-open" id="Attribute_11_87" title="Multi-file references" data-urls="../WebDSL-JavaScript.sdf3/#Attribute_12_16 line 12, 17; ../WebDSL-UI.sdf3/#Attribute_495_43 line 495, 496">Attribute</button>

<span class="keyword">context-free syntax</span>

  <span id="Definition_15_3" title="Not referenced">Definition</span>.<span class="cons_Constructor"><span id="AttributeCollection_15_14" title="Not referenced">AttributeCollection</span></span> = &lt;
    &lt;<a href="#AttributeCollectionOverride_11_22" id="AttributeCollectionOverride_16_6" title="Defined at line 11, 25, 26">AttributeCollectionOverride</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_16_47" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#AttributeElem_11_50" id="AttributeElem_17_8" title="Defined at line 11, 20, 21, 22">AttributeElem</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_20_3" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeAssign_20_17" title="Not referenced">AttributeAssign</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_20_37" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_20_53" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_21_3" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeInclude_21_17" title="Not referenced">AttributeInclude</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_21_38" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="#AttributeIncludeIgnore_11_64" id="AttributeIncludeIgnore_21_63" title="Defined at line 11, 23, 24">AttributeIncludeIgnore</a>&gt;&gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_22_3" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeIgnore_22_17" title="Not referenced">AttributeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_22_44" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_23_3" title="Referenced at line 21">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnoreNone_23_26" title="Not referenced">AttributeIncludeIgnoreNone</span></span> = &lt;&gt;
  <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_24_3" title="Referenced at line 21">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnore_24_26" title="Not referenced">AttributeIncludeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_24_60" title="Defined at line 30, 34, 35, 36">AttributeId</a>+&gt;&gt;
  <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_25_3" title="Referenced at line 16">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverrideNone_25_31" title="Not referenced">AttributeCollectionOverrideNone</span></span> = &lt;&gt;
  <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_26_3" title="Referenced at line 16">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverride_26_31" title="Not referenced">AttributeCollectionOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#AttributeId_20_37" id="AttributeId_30_3" title="Referenced at line 20, 21, 22, 24, 40, 41">AttributeId</a>

<span class="keyword">lexical syntax</span>

  <a href="#AttributeId_20_37" id="AttributeId_34_3" title="Referenced at line 20, 21, 22, 24, 40, 41">AttributeId</a> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_34_17" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#AttributeId_20_37" id="AttributeId_35_3" title="Referenced at line 20, 21, 22, 24, 40, 41">AttributeId</a> = <span class="cons_Lit">"all"</span> {<span class="keyword">reject</span>}
  <a href="#AttributeId_20_37" id="AttributeId_36_3" title="Referenced at line 20, 21, 22, 24, 40, 41">AttributeId</a> = <span class="cons_Lit">"attributes"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#AttributeSelection_43_24" id="AttributeSelection_40_3" title="Referenced at line 43, 44">AttributeSelection</a>.<span class="cons_Constructor"><span id="AttributeSelection_40_22" title="Not referenced">AttributeSelection</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_40_45" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <a href="#AttributeSelection_43_24" id="AttributeSelection_41_3" title="Referenced at line 43, 44">AttributeSelection</a>.<span class="cons_Constructor"><span id="AttributeIgnoreDefault_41_22" title="Not referenced">AttributeIgnoreDefault</span></span> = &lt;<span class="cons_String">ignore</span> <span class="cons_String">default</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_41_64" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt;&gt;

  <span id="PropertyAssignment_43_3" title="Not referenced">PropertyAssignment</span> = <a href="#AttributeSelection_11_3" id="AttributeSelection_43_24" title="Defined at line 11, 40, 41">AttributeSelection</a>
  <button class="modal-open" id="Attribute_44_3" title="Multi-file references" data-urls="../WebDSL-JavaScript.sdf3/#Attribute_12_16 line 12, 17; ../WebDSL-UI.sdf3/#Attribute_495_43 line 495, 496">Attribute</button> = <a href="#AttributeSelection_11_3" id="AttributeSelection_44_15" title="Defined at line 11, 40, 41">AttributeSelection</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
