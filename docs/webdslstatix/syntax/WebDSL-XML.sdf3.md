---
title: WebDSL-XML.sdf3
---

# `WebDSL-XML.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-XML.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-XML.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-XML.sdf3 "The source file on GitHub"

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
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-XML_454_464" id="WebDSL-XML_7_17" title="Referenced at ../webdsl-statix.sdf3 line 28">WebDSL-XML</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_29_42" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_45_54" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-Attributes.sdf3#WebDSL-Attributes_7_24" id="WebDSL-Attributes_57_74" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>

<span class="keyword">lexical sorts</span>

  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_93_109" title="Referenced at line 26">HTML5VoidElement</a> <a href="#XMLComment_1045_1055" id="XMLComment_110_120" title="Referenced at line 49">XMLComment</a> <a href="#XMLCommentChar_1095_1109" id="XMLCommentChar_121_135" title="Referenced at line 53">XMLCommentChar</a> <a href="#OneDash_1264_1271" id="OneDash_136_143" title="Referenced at line 62">OneDash</a> <a href="#TwoDashes_1283_1292" id="TwoDashes_144_153" title="Referenced at line 63">TwoDashes</a> <a href="#QualName_1819_1827" id="QualName_154_162" title="Referenced at line 84">QualName</a> <a href="#Qualifier_1841_1850" id="Qualifier_163_172" title="Referenced at line 85">Qualifier</a> <a href="#NCName_1950_1956" id="NCName_173_179" title="Referenced at line 91">NCName</a>
  <a href="#XMLTagName_397_407" id="XMLTagName_182_192" title="Referenced at line 21">XMLTagName</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_370_385" id="TemplateElement_217_232" title="Referenced at line 20">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLEmptyElement_233_248" title="Not referenced locally, nor via imports">XMLEmptyElement</span></span> = &lt;
    \&lt; &lt;<a href="#XMLTagName_182_192" id="XMLTagName_261_271" title="Defined at line 11, 84">XMLTagName</a>&gt; &lt;<a href="#Attribute_1326_1335" id="Attribute_274_283" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; <span class="cons_String">/</span>\&gt;
  &gt;
  <a href="#TemplateElement_370_385" id="TemplateElement_296_311" title="Referenced at line 20">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLElement_312_322" title="Not referenced locally, nor via imports">XMLElement</span></span> = &lt;
    \&lt; &lt;<a href="#XMLTagName_182_192" id="XMLTagName_335_345" title="Defined at line 11, 84">XMLTagName</a>&gt; &lt;<a href="#Attribute_1326_1335" id="Attribute_348_357" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; \&gt;
      &lt;<a href="#TemplateElement_217_232" id="TemplateElement_370_385" title="Defined at line 15, 18, 26, 49">TemplateElement</a>*&gt;
    \&lt;<span class="cons_String">/</span> &lt;<a href="#XMLTagName_182_192" id="XMLTagName_397_407" title="Defined at line 11, 84">XMLTagName</a>&gt; \&gt;
  &gt;

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_370_385" id="TemplateElement_440_455" title="Referenced at line 20">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLEmptyElementUnclosed_456_479" title="Not referenced locally, nor via imports">XMLEmptyElementUnclosed</span></span> = &lt;\&lt; &lt;<a href="#HTML5VoidElement_93_109" id="HTML5VoidElement_487_503" title="Defined at line 10, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45">HTML5VoidElement</a>&gt; &lt;<a href="#Attribute_1326_1335" id="Attribute_506_515" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; \&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_541_557" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"area"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_569_585" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"base"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_597_613" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"br"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_623_639" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"col"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_650_666" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"embed"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_679_695" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"hr"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_705_721" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"img"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_732_748" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"input"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_761_777" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"keygen"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_791_807" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"link"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_819_835" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"menuitem"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_851_867" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"meta"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_879_895" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"param"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_908_924" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"source"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_938_954" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"track"</span>
  <a href="#HTML5VoidElement_487_503" id="HTML5VoidElement_967_983" title="Referenced at line 26">HTML5VoidElement</a> = <span class="cons_Lit">"wbr"</span>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_370_385" id="TemplateElement_1016_1031" title="Referenced at line 20">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLComment_1032_1042" title="Not referenced locally, nor via imports">XMLComment</span></span> = <a href="#XMLComment_110_120" id="XMLComment_1045_1055" title="Defined at line 10, 53">XMLComment</a>

<span class="keyword">lexical syntax</span>

  <a href="#XMLComment_1045_1055" id="XMLComment_1075_1085" title="Referenced at line 49">XMLComment</a> = <span class="cons_Lit">"&lt;!--"</span> <a href="#XMLCommentChar_121_135" id="XMLCommentChar_1095_1109" title="Defined at line 10, 54, 55, 56">XMLCommentChar</a>* <span class="cons_Lit">"--&gt;"</span>
  <a href="#XMLCommentChar_1095_1109" id="XMLCommentChar_1119_1133" title="Referenced at line 53">XMLCommentChar</a> = ~[\-]
  <a href="#XMLCommentChar_1095_1109" id="XMLCommentChar_1144_1158" title="Referenced at line 53">XMLCommentChar</a> = <a href="#OneDash_136_143" id="OneDash_1161_1168" title="Defined at line 10, 57">OneDash</a>
  <a href="#XMLCommentChar_1095_1109" id="XMLCommentChar_1171_1185" title="Referenced at line 53">XMLCommentChar</a> = <a href="#TwoDashes_144_153" id="TwoDashes_1188_1197" title="Defined at line 10, 58">TwoDashes</a>
  <a href="#OneDash_1264_1271" id="OneDash_1200_1207" title="Referenced at line 62">OneDash</a> = [\-]
  <a href="#TwoDashes_1283_1292" id="TwoDashes_1217_1226" title="Referenced at line 63">TwoDashes</a> = [\-] [\-]

<span class="keyword">lexical restrictions</span>

  <a href="#OneDash_136_143" id="OneDash_1264_1271" title="Defined at line 10, 57">OneDash</a> -/- [\-]
  <a href="#TwoDashes_144_153" id="TwoDashes_1283_1292" title="Defined at line 10, 58">TwoDashes</a> -/- [\&gt;]

<span class="keyword">context-free syntax</span>

  <a href="#Attribute_1459_1468" id="Attribute_1326_1335" title="Referenced at line 68">Attribute</a>.<span class="cons_Constructor"><span id="XMLAttributesIf_1336_1351" title="Not referenced locally, nor via imports">XMLAttributesIf</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1361_1364" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_1326_1335" id="Attribute_1371_1380" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#Attribute_1459_1468" id="Attribute_1388_1397" title="Referenced at line 68">Attribute</a>.<span class="cons_Constructor"><span id="XMLAttributesIfElse_1398_1417" title="Not referenced locally, nor via imports">XMLAttributesIfElse</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1427_1430" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_1326_1335" id="Attribute_1437_1446" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; <span class="cons_String">}</span> <span class="cons_String">else</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_1326_1335" id="Attribute_1459_1468" title="Defined at line 67, 68, 76, 77">Attribute</a>*&gt; <span class="cons_String">}</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#CommonAttribute_1594_1609" id="CommonAttribute_1497_1512" title="Referenced at line 77; ../WebDSL-UI.sdf3 line 379">CommonAttribute</a>

<span class="keyword">context-free syntax</span>

  <a href="#Attribute_1459_1468" id="Attribute_1537_1546" title="Referenced at line 68">Attribute</a>.<span class="cons_Constructor"><span id="Attribute_1547_1556" title="Not referenced locally, nor via imports">Attribute</span></span> = &lt;&lt;<a href="#QualName_154_162" id="QualName_1561_1569" title="Defined at line 10, 85">QualName</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1574_1577" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Attribute_1459_1468" id="Attribute_1582_1591" title="Referenced at line 68">Attribute</a> = <a href="#CommonAttribute_1497_1512" id="CommonAttribute_1594_1609" title="Defined at line 72, 78, 79, 80">CommonAttribute</a>
  <a href="#CommonAttribute_1594_1609" id="CommonAttribute_1612_1627" title="Referenced at line 77; ../WebDSL-UI.sdf3 line 379">CommonAttribute</a>.<span class="cons_Constructor"><span id="AllAttributes_1628_1641" title="Not referenced locally, nor via imports">AllAttributes</span></span> = &lt;<span class="cons_String">all</span> <span class="cons_String">attributes</span>&gt;
  <a href="#CommonAttribute_1594_1609" id="CommonAttribute_1663_1678" title="Referenced at line 77; ../WebDSL-UI.sdf3 line 379">CommonAttribute</a>.<span class="cons_Constructor"><span id="AllAttributesExceptExp_1679_1701" title="Not referenced locally, nor via imports">AllAttributesExceptExp</span></span> = &lt;<span class="cons_String">all</span> <span class="cons_String">attributes</span> <span class="cons_String">except</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1728_1731" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#CommonAttribute_1594_1609" id="CommonAttribute_1736_1751" title="Referenced at line 77; ../WebDSL-UI.sdf3 line 379">CommonAttribute</a>.<span class="cons_Constructor"><span id="AttributesExp_1752_1765" title="Not referenced locally, nor via imports">AttributesExp</span></span> = &lt;<span class="cons_String">attributes</span> &lt;<a href="../WebDSL-Action.sdf3#Exp_757_760" id="Exp_1781_1784" title="Defined at ../WebDSL-Action.sdf3 line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#XMLTagName_397_407" id="XMLTagName_1806_1816" title="Referenced at line 21">XMLTagName</a> = <a href="#QualName_154_162" id="QualName_1819_1827" title="Defined at line 10, 85">QualName</a>
  <a href="#QualName_1819_1827" id="QualName_1830_1838" title="Referenced at line 84">QualName</a> = <a href="#Qualifier_163_172" id="Qualifier_1841_1850" title="Defined at line 10, 86">Qualifier</a>? <a href="#NCName_173_179" id="NCName_1852_1858" title="Defined at line 10, 87">NCName</a>
  <a href="#Qualifier_1841_1850" id="Qualifier_1861_1870" title="Referenced at line 85">Qualifier</a> = <a href="#NCName_173_179" id="NCName_1873_1879" title="Defined at line 10, 87">NCName</a> <span class="cons_Lit">":"</span>
  <a href="#NCName_1950_1956" id="NCName_1886_1892" title="Referenced at line 91">NCName</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span>\_] [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\.\-\_]*

<span class="keyword">lexical restrictions</span>

  <a href="#NCName_173_179" id="NCName_1950_1956" title="Defined at line 10, 87">NCName</a> -/- [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\.\-\_]

</code></pre></td></tr></tbody></table></div>