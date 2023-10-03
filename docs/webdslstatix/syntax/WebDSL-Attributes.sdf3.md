---
title: WebDSL-Attributes.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Attributes_85_102" id="WebDSL-Attributes_7_24" title="Referenced at ../webdsl-statix.sdf3 line 7">WebDSL-Attributes</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_36_49" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_52_66" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_69_80" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_83_92" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">context-free sorts</span>

  <a href="#AttributeSelection_1196_1214" id="AttributeSelection_116_134" title="Referenced at line 44">AttributeSelection</a> <a href="#AttributeCollectionOverride_274_301" id="AttributeCollectionOverride_135_162" title="Referenced at line 16">AttributeCollectionOverride</a> <a href="#AttributeElem_328_341" id="AttributeElem_163_176" title="Referenced at line 17">AttributeElem</a> <a href="#AttributeIncludeIgnore_474_496" id="AttributeIncludeIgnore_177_199" title="Referenced at line 21">AttributeIncludeIgnore</a> <a href="../WebDSL-JavaScript.sdf3#Attribute_266_275" id="Attribute_200_209" title="Referenced at ../WebDSL-JavaScript.sdf3 line 17; ../WebDSL-UI.sdf3 line 496">Attribute</a>

<span class="keyword">context-free syntax</span>

  <span id="Definition_234_244" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="AttributeCollection_245_264" title="Not referenced locally, nor via imports">AttributeCollection</span></span> = &lt;
    &lt;<a href="#AttributeCollectionOverride_135_162" id="AttributeCollectionOverride_274_301" title="Defined at line 11, 25, 26">AttributeCollectionOverride</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_315_317" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#AttributeElem_163_176" id="AttributeElem_328_341" title="Defined at line 11, 20, 21, 22">AttributeElem</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#AttributeElem_328_341" id="AttributeElem_356_369" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeAssign_370_385" title="Not referenced locally, nor via imports">AttributeAssign</span></span> = &lt;&lt;<a href="#AttributeId_854_865" id="AttributeId_390_401" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-UI.sdf3#Exp_13248_13251" id="Exp_406_409" title="Defined at ../WebDSL-UI.sdf3 line 469, 517">Exp</a>&gt;&gt;
  <a href="#AttributeElem_328_341" id="AttributeElem_414_427" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeInclude_428_444" title="Not referenced locally, nor via imports">AttributeInclude</span></span> = &lt;&lt;<a href="#AttributeId_854_865" id="AttributeId_449_460" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span> &lt;<a href="#AttributeIncludeIgnore_177_199" id="AttributeIncludeIgnore_474_496" title="Defined at line 11, 23, 24">AttributeIncludeIgnore</a>&gt;&gt;
  <a href="#AttributeElem_328_341" id="AttributeElem_501_514" title="Referenced at line 17">AttributeElem</a>.<span class="cons_Constructor"><span id="AttributeIgnore_515_530" title="Not referenced locally, nor via imports">AttributeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_854_865" id="AttributeId_542_553" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <a href="#AttributeIncludeIgnore_474_496" id="AttributeIncludeIgnore_569_591" title="Referenced at line 21">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnoreNone_592_618" title="Not referenced locally, nor via imports">AttributeIncludeIgnoreNone</span></span> = &lt;&gt;
  <a href="#AttributeIncludeIgnore_474_496" id="AttributeIncludeIgnore_626_648" title="Referenced at line 21">AttributeIncludeIgnore</a>.<span class="cons_Constructor"><span id="AttributeIncludeIgnore_649_671" title="Not referenced locally, nor via imports">AttributeIncludeIgnore</span></span> = &lt;<span class="cons_String">ignore</span> &lt;<a href="#AttributeId_854_865" id="AttributeId_683_694" title="Defined at line 30, 34, 35, 36">AttributeId</a>+&gt;&gt;
  <a href="#AttributeCollectionOverride_274_301" id="AttributeCollectionOverride_700_727" title="Referenced at line 16">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverrideNone_728_759" title="Not referenced locally, nor via imports">AttributeCollectionOverrideNone</span></span> = &lt;&gt;
  <a href="#AttributeCollectionOverride_274_301" id="AttributeCollectionOverride_767_794" title="Referenced at line 16">AttributeCollectionOverride</a>.<span class="cons_Constructor"><span id="AttributeCollectionOverride_795_822" title="Not referenced locally, nor via imports">AttributeCollectionOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#AttributeId_1125_1136" id="AttributeId_854_865" title="Referenced at line 41">AttributeId</a>

<span class="keyword">lexical syntax</span>

  <a href="#AttributeId_1125_1136" id="AttributeId_885_896" title="Referenced at line 41">AttributeId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_899_901" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#AttributeId_1125_1136" id="AttributeId_904_915" title="Referenced at line 41">AttributeId</a> = <span class="cons_Lit">"all"</span> {<span class="keyword">reject</span>}
  <a href="#AttributeId_1125_1136" id="AttributeId_935_946" title="Referenced at line 41">AttributeId</a> = <span class="cons_Lit">"attributes"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#AttributeSelection_1196_1214" id="AttributeSelection_995_1013" title="Referenced at line 44">AttributeSelection</a>.<span class="cons_Constructor"><span id="AttributeSelection_1014_1032" title="Not referenced locally, nor via imports">AttributeSelection</span></span> = &lt;&lt;<a href="#AttributeId_854_865" id="AttributeId_1037_1048" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt; <span class="cons_String">attributes</span>&gt;
  <a href="#AttributeSelection_1196_1214" id="AttributeSelection_1064_1082" title="Referenced at line 44">AttributeSelection</a>.<span class="cons_Constructor"><span id="AttributeIgnoreDefault_1083_1105" title="Not referenced locally, nor via imports">AttributeIgnoreDefault</span></span> = &lt;<span class="cons_String">ignore</span> <span class="cons_String">default</span> &lt;<a href="#AttributeId_854_865" id="AttributeId_1125_1136" title="Defined at line 30, 34, 35, 36">AttributeId</a>&gt;&gt;

  <span id="PropertyAssignment_1142_1160" title="Not referenced locally, nor via imports">PropertyAssignment</span> = <a href="#AttributeSelection_116_134" id="AttributeSelection_1163_1181" title="Defined at line 11, 40, 41">AttributeSelection</a>
  <a href="../WebDSL-JavaScript.sdf3#Attribute_266_275" id="Attribute_1184_1193" title="Referenced at ../WebDSL-JavaScript.sdf3 line 17; ../WebDSL-UI.sdf3 line 496">Attribute</a> = <a href="#AttributeSelection_116_134" id="AttributeSelection_1196_1214" title="Defined at line 11, 40, 41">AttributeSelection</a>

</code></pre></td></tr></tbody></table></div>