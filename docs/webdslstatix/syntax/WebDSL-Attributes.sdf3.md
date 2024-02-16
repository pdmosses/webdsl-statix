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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Attributes_1_8" title="a definition with multiple references" data-urls="../WebDSL-Expand.sdf3/#WebDSL-Attributes line 9_3; ../WebDSL-JavaScript.sdf3/#WebDSL-Attributes line 5_3; ../webdsl-statix.sdf3/#WebDSL-Attributes line 7_3; ../WebDSL-UI.sdf3/#WebDSL-Attributes line 5_3; ../WebDSL-XML.sdf3/#WebDSL-Attributes line 6_3">WebDSL-Attributes</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_6_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="a reference to a single-file definition">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="AttributeSelection_11_3" title="a definition with multiple references" data-urls="#AttributeSelection line 43_24, 44_15">AttributeSelection</button> <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_11_22" title="a definition with a single reference">AttributeCollectionOverride</a> <a href="#AttributeElem_17_8" id="AttributeElem_11_50" title="a definition with a single reference">AttributeElem</a> <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_11_64" title="a definition with a single reference">AttributeIncludeIgnore</a> <button class="modal-open" id="Attribute_11_87" title="a definition with multiple references" data-urls="../WebDSL-JavaScript.sdf3/#Attribute line 12_16, 17_15; ../WebDSL-UI.sdf3/#Attribute line 495_43, 496_48">Attribute</button>

<span class="keyword">context-free syntax</span>

  <span id="Definition_15_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="AttributeCollection_15_14" title="a definition with no references">AttributeCollection</span></span> = &lt;
    &lt;<a href="#AttributeCollectionOverride_11_22" id="AttributeCollectionOverride_16_6" title="a reference to a single-file definition">AttributeCollectionOverride</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_16_47" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#AttributeElem_11_50" id="AttributeElem_17_8" title="a reference to a single-file definition">AttributeElem</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_20_3" title="a definition with a single reference">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeAssign_20_17" title="a definition with no references">AttributeAssign</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_20_37" title="a reference to a single-file definition">AttributeId</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-UI.sdf3/#Exp_469_3" id="Exp_20_53" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_21_3" title="a definition with a single reference">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeInclude_21_17" title="a definition with no references">AttributeInclude</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_21_38" title="a reference to a single-file definition">AttributeId</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="#AttributeIncludeIgnore_11_64" id="AttributeIncludeIgnore_21_63" title="a reference to a single-file definition">AttributeIncludeIgnore</a>&gt;&gt;
  <a href="#AttributeElem_17_8" id="AttributeElem_22_3" title="a definition with a single reference">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeIgnore_22_17" title="a definition with no references">AttributeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_22_44" title="a reference to a single-file definition">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_23_3" title="a definition with a single reference">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnoreNone_23_26" title="a definition with no references">AttributeIncludeIgnoreNone</span></span> = &lt;&gt;
  <a href="#AttributeIncludeIgnore_21_63" id="AttributeIncludeIgnore_24_3" title="a definition with a single reference">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnore_24_26" title="a definition with no references">AttributeIncludeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_24_60" title="a reference to a single-file definition">AttributeId</a>+&gt;&gt;
  <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_25_3" title="a definition with a single reference">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverrideNone_25_31" title="a definition with no references">AttributeCollectionOverrideNone</span></span> = &lt;&gt;
  <a href="#AttributeCollectionOverride_16_6" id="AttributeCollectionOverride_26_3" title="a definition with a single reference">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverride_26_31" title="a definition with no references">AttributeCollectionOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="AttributeId_30_3" title="a definition with multiple references" data-urls="#AttributeId line 20_37, 21_38, 22_44, 24_60, 40_45, 41_64">AttributeId</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="AttributeId_34_3" title="a definition with multiple references" data-urls="#AttributeId line 20_37, 21_38, 22_44, 24_60, 40_45, 41_64">AttributeId</button> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_34_17" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="AttributeId_35_3" title="a definition with multiple references" data-urls="#AttributeId line 20_37, 21_38, 22_44, 24_60, 40_45, 41_64">AttributeId</button> = <span class="cons_Lit">"all"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="AttributeId_36_3" title="a definition with multiple references" data-urls="#AttributeId line 20_37, 21_38, 22_44, 24_60, 40_45, 41_64">AttributeId</button> = <span class="cons_Lit">"attributes"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="AttributeSelection_40_3" title="a definition with multiple references" data-urls="#AttributeSelection line 43_24, 44_15">AttributeSelection</button>.<span class="cons_Constructor"><span id="AttributeSelection_40_22" title="a definition with no references">AttributeSelection</span></span> = &lt;&lt;<a href="#AttributeId_30_3" id="AttributeId_40_45" title="a reference to a single-file definition">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <button class="modal-open" id="AttributeSelection_41_3" title="a definition with multiple references" data-urls="#AttributeSelection line 43_24, 44_15">AttributeSelection</button>.<span class="cons_Constructor"><span id="AttributeIgnoreDefault_41_22" title="a definition with no references">AttributeIgnoreDefault</span></span> = &lt;<span class="cons_String">ignore</span> <span class="cons_String">default</span> &lt;<a href="#AttributeId_30_3" id="AttributeId_41_64" title="a reference to a single-file definition">AttributeId</a>&gt;&gt;

  <span id="PropertyAssignment_43_3" title="a definition with no references">PropertyAssignment</span> = <a href="#AttributeSelection_11_3" id="AttributeSelection_43_24" title="a reference to a single-file definition">AttributeSelection</a>
  <button class="modal-open" id="Attribute_44_3" title="a definition with multiple references" data-urls="../WebDSL-JavaScript.sdf3/#Attribute line 12_16, 17_15; ../WebDSL-UI.sdf3/#Attribute line 495_43, 496_48">Attribute</button> = <a href="#AttributeSelection_11_3" id="AttributeSelection_44_15" title="a reference to a single-file definition">AttributeSelection</a>

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
