---
title: WebDSL-XML.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-XML_1_8" title="a definition with multiple references" data-urls="../WebDSL-JavaScript.sdf3/#WebDSL-XML line 7_3; ../webdsl-statix.sdf3/#WebDSL-XML line 28_3; ../WebDSL-UI.sdf3/#WebDSL-XML line 8_3">WebDSL-XML</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_5_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_6_3" title="a reference to a single-file definition">WebDSL-Attributes</a>

<span class="keyword">lexical sorts</span>

  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_10_3" title="a definition with a single reference">HTML5VoidElement</a> <a href="#XMLComment_49_32" id="XMLComment_10_20" title="a definition with a single reference">XMLComment</a> <a href="#XMLCommentChar_53_23" id="XMLCommentChar_10_31" title="a definition with a single reference">XMLCommentChar</a> <button class="modal-open" id="OneDash_10_46" title="a definition with multiple references" data-urls="#OneDash line 55_20, 62_3">OneDash</button> <button class="modal-open" id="TwoDashes_10_54" title="a definition with multiple references" data-urls="#TwoDashes line 56_20, 63_3">TwoDashes</button> <button class="modal-open" id="QualName_10_64" title="a definition with multiple references" data-urls="#QualName line 76_27, 84_16">QualName</button> <a href="#Qualifier_85_14" id="Qualifier_10_73" title="a definition with a single reference">Qualifier</a> <button class="modal-open" id="NCName_10_83" title="a definition with multiple references" data-urls="#NCName line 85_25, 86_15, 91_3">NCName</button>
  <button class="modal-open" id="XMLTagName_11_3" title="a definition with multiple references" data-urls="#XMLTagName line 16_9, 19_9, 21_10">XMLTagName</button>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_20_8" id="TemplateElement_15_3" title="a definition with a single reference">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLEmptyElement_15_19" title="a definition with no references">XMLEmptyElement</span></span> = &lt;
    \&lt; &lt;<a href="#XMLTagName_11_3" id="XMLTagName_16_9" title="a reference to a single-file definition">XMLTagName</a>&gt; &lt;<a href="#Attribute_67_3" id="Attribute_16_22" title="a reference to a single-file definition">Attribute</a>*&gt; <span class="cons_String">/</span>\&gt;
  &gt;
  <a href="#TemplateElement_20_8" id="TemplateElement_18_3" title="a definition with a single reference">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLElement_18_19" title="a definition with no references">XMLElement</span></span> = &lt;
    \&lt; &lt;<a href="#XMLTagName_11_3" id="XMLTagName_19_9" title="a reference to a single-file definition">XMLTagName</a>&gt; &lt;<a href="#Attribute_67_3" id="Attribute_19_22" title="a reference to a single-file definition">Attribute</a>*&gt; \&gt;
      &lt;<a href="#TemplateElement_15_3" id="TemplateElement_20_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    \&lt;<span class="cons_String">/</span> &lt;<a href="#XMLTagName_11_3" id="XMLTagName_21_10" title="a reference to a single-file definition">XMLTagName</a>&gt; \&gt;
  &gt;

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_20_8" id="TemplateElement_26_3" title="a definition with a single reference">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLEmptyElementUnclosed_26_19" title="a definition with no references">XMLEmptyElementUnclosed</span></span> = &lt;\&lt; &lt;<a href="#HTML5VoidElement_10_3" id="HTML5VoidElement_26_50" title="a reference to a single-file definition">HTML5VoidElement</a>&gt; &lt;<a href="#Attribute_67_3" id="Attribute_26_69" title="a reference to a single-file definition">Attribute</a>*&gt; \&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_30_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"area"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_31_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"base"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_32_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"br"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_33_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"col"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_34_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"embed"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_35_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"hr"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_36_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"img"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_37_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"input"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_38_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"keygen"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_39_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"link"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_40_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"menuitem"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_41_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"meta"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_42_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"param"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_43_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"source"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_44_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"track"</span>
  <a href="#HTML5VoidElement_26_50" id="HTML5VoidElement_45_3" title="a definition with a single reference">HTML5VoidElement</a> = <span class="cons_Lit">"wbr"</span>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_20_8" id="TemplateElement_49_3" title="a definition with a single reference">TemplateElement</a>.<span class="cons_Constructor"><span id="XMLComment_49_19" title="a definition with no references">XMLComment</span></span> = <a href="#XMLComment_10_20" id="XMLComment_49_32" title="a reference to a single-file definition">XMLComment</a>

<span class="keyword">lexical syntax</span>

  <a href="#XMLComment_49_32" id="XMLComment_53_3" title="a definition with a single reference">XMLComment</a> = <span class="cons_Lit">"&lt;!--"</span> <a href="#XMLCommentChar_10_31" id="XMLCommentChar_53_23" title="a reference to a single-file definition">XMLCommentChar</a>* <span class="cons_Lit">"--&gt;"</span>
  <a href="#XMLCommentChar_53_23" id="XMLCommentChar_54_3" title="a definition with a single reference">XMLCommentChar</a> = ~[\-]
  <a href="#XMLCommentChar_53_23" id="XMLCommentChar_55_3" title="a definition with a single reference">XMLCommentChar</a> = <a href="#OneDash_10_46" id="OneDash_55_20" title="a reference to a single-file definition">OneDash</a>
  <a href="#XMLCommentChar_53_23" id="XMLCommentChar_56_3" title="a definition with a single reference">XMLCommentChar</a> = <a href="#TwoDashes_10_54" id="TwoDashes_56_20" title="a reference to a single-file definition">TwoDashes</a>
  <button class="modal-open" id="OneDash_57_3" title="a definition with multiple references" data-urls="#OneDash line 55_20, 62_3">OneDash</button> = [\-]
  <button class="modal-open" id="TwoDashes_58_3" title="a definition with multiple references" data-urls="#TwoDashes line 56_20, 63_3">TwoDashes</button> = [\-] [\-]

<span class="keyword">lexical restrictions</span>

  <a href="#OneDash_10_46" id="OneDash_62_3" title="a reference to a single-file definition">OneDash</a> -/- [\-]
  <a href="#TwoDashes_10_54" id="TwoDashes_63_3" title="a reference to a single-file definition">TwoDashes</a> -/- [\&gt;]

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Attribute_67_3" title="a definition with multiple references" data-urls="#Attribute line 16_22, 19_22, 26_69, 67_48, 68_52, 68_74">Attribute</button>.<span class="cons_Constructor"><span id="XMLAttributesIf_67_13" title="a definition with no references">XMLAttributesIf</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_67_38" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_67_3" id="Attribute_67_48" title="a reference to a single-file definition">Attribute</a>*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Attribute_68_3" title="a definition with multiple references" data-urls="#Attribute line 16_22, 19_22, 26_69, 67_48, 68_52, 68_74">Attribute</button>.<span class="cons_Constructor"><span id="XMLAttributesIfElse_68_13" title="a definition with no references">XMLAttributesIfElse</span></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_68_42" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_67_3" id="Attribute_68_52" title="a reference to a single-file definition">Attribute</a>*&gt; <span class="cons_String">}</span> <span class="cons_String">else</span> <span class="cons_String">{</span> &lt;<a href="#Attribute_67_3" id="Attribute_68_74" title="a reference to a single-file definition">Attribute</a>*&gt; <span class="cons_String">}</span>&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="CommonAttribute_72_3" title="a definition with multiple references" data-urls="#CommonAttribute line 77_15; ../WebDSL-UI.sdf3/#CommonAttribute line 379_24">CommonAttribute</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Attribute_76_3" title="a definition with multiple references" data-urls="#Attribute line 16_22, 19_22, 26_69, 67_48, 68_52, 68_74">Attribute</button>.<span class="cons_Constructor"><span id="Attribute_76_13" title="a definition with no references">Attribute</span></span> = &lt;&lt;<a href="#QualName_10_64" id="QualName_76_27" title="a reference to a single-file definition">QualName</a>&gt; <span class="cons_String">=</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_76_40" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Attribute_77_3" title="a definition with multiple references" data-urls="#Attribute line 16_22, 19_22, 26_69, 67_48, 68_52, 68_74">Attribute</button> = <a href="#CommonAttribute_72_3" id="CommonAttribute_77_15" title="a reference to a single-file definition">CommonAttribute</a>
  <button class="modal-open" id="CommonAttribute_78_3" title="a definition with multiple references" data-urls="#CommonAttribute line 77_15; ../WebDSL-UI.sdf3/#CommonAttribute line 379_24">CommonAttribute</button>.<span class="cons_Constructor"><span id="AllAttributes_78_19" title="a definition with no references">AllAttributes</span></span> = &lt;<span class="cons_String">all</span> <span class="cons_String">attributes</span>&gt;
  <button class="modal-open" id="CommonAttribute_79_3" title="a definition with multiple references" data-urls="#CommonAttribute line 77_15; ../WebDSL-UI.sdf3/#CommonAttribute line 379_24">CommonAttribute</button>.<span class="cons_Constructor"><span id="AllAttributesExceptExp_79_19" title="a definition with no references">AllAttributesExceptExp</span></span> = &lt;<span class="cons_String">all</span> <span class="cons_String">attributes</span> <span class="cons_String">except</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_79_68" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="CommonAttribute_80_3" title="a definition with multiple references" data-urls="#CommonAttribute line 77_15; ../WebDSL-UI.sdf3/#CommonAttribute line 379_24">CommonAttribute</button>.<span class="cons_Constructor"><span id="AttributesExp_80_19" title="a definition with no references">AttributesExp</span></span> = &lt;<span class="cons_String">attributes</span> &lt;<a href="../WebDSL-Action.sdf3/#Exp_34_3" id="Exp_80_48" title="a reference to a single-file definition">Exp</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="XMLTagName_84_3" title="a definition with multiple references" data-urls="#XMLTagName line 16_9, 19_9, 21_10">XMLTagName</button> = <a href="#QualName_10_64" id="QualName_84_16" title="a reference to a single-file definition">QualName</a>
  <button class="modal-open" id="QualName_85_3" title="a definition with multiple references" data-urls="#QualName line 76_27, 84_16">QualName</button> = <a href="#Qualifier_10_73" id="Qualifier_85_14" title="a reference to a single-file definition">Qualifier</a>? <a href="#NCName_10_83" id="NCName_85_25" title="a reference to a single-file definition">NCName</a>
  <a href="#Qualifier_85_14" id="Qualifier_86_3" title="a definition with a single reference">Qualifier</a> = <a href="#NCName_10_83" id="NCName_86_15" title="a reference to a single-file definition">NCName</a> <span class="cons_Lit">":"</span>
  <button class="modal-open" id="NCName_87_3" title="a definition with multiple references" data-urls="#NCName line 85_25, 86_15, 91_3">NCName</button> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span>\_] [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\.\-\_]*

<span class="keyword">lexical restrictions</span>

  <a href="#NCName_10_83" id="NCName_91_3" title="a reference to a single-file definition">NCName</a> -/- [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\.\-\_]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
