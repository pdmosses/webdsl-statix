---
title: WebDSL-Expand.sdf3
hide:
  - toc
---

# `WebDSL-Expand.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Expand.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Expand.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Expand.sdf3 "The source file on GitHub"

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
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Expand_14_3" id="WebDSL-Expand_1_8" title="a definition with a single reference">WebDSL-Expand</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_6_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_8_3" title="a reference to a single-file definition">WebDSL-DataModel</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_9_3" title="a reference to a single-file definition">WebDSL-Attributes</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="DeriveProperty_13_3" title="a definition with multiple references" data-urls="#DeriveProperty line 18_36, 24_36">DeriveProperty</button> <button class="modal-open" id="DeriveBody_13_18" title="a definition with multiple references" data-urls="#DeriveBody line 24_61, 27_29, 30_18">DeriveBody</button> <a href="#DeriveBodyElement_36_6" id="DeriveBodyElement_13_29" title="a definition with a single reference">DeriveBodyElement</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_17_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><span id="DeriveNoBody_17_19" title="a definition with no references">DeriveNoBody</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_18_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_92_3" id="Exp_18_23" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;{<a href="#DeriveProperty_13_3" id="DeriveProperty_18_36" title="a reference to a single-file definition">DeriveProperty</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="TemplateElement_20_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><a href="#DeriveNoForNoBody_55_19" id="DeriveNoForNoBody_20_19" title="a definition with a single reference">DeriveNoForNoBody</a></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_21_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_92_3" id="Exp_21_23" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_23_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><span id="Derive_23_19" title="a definition with no references">Derive</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_24_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_92_3" id="Exp_24_23" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;{<a href="#DeriveProperty_13_3" id="DeriveProperty_24_36" title="a reference to a single-file definition">DeriveProperty</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#DeriveBody_13_18" id="DeriveBody_24_61" title="a reference to a single-file definition">DeriveBody</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_26_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><span id="DeriveNoFor_26_19" title="a definition with no references">DeriveNoFor</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_27_13" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_92_3" id="Exp_27_23" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#DeriveBody_13_18" id="DeriveBody_27_29" title="a reference to a single-file definition">DeriveBody</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_29_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><span id="DeriveNoFromNoFor_29_19" title="a definition with no references">DeriveNoFromNoFor</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_30_13" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="#DeriveBody_13_18" id="DeriveBody_30_18" title="a reference to a single-file definition">DeriveBody</a>&gt;
  &gt;

  <button class="modal-open" id="DeriveProperty_33_3" title="a definition with multiple references" data-urls="#DeriveProperty line 18_36, 24_36">DeriveProperty</button>.<span class="cons_Constructor"><span id="DeriveDefault_33_18" title="a definition with no references">DeriveDefault</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_33_34" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="DeriveProperty_34_3" title="a definition with multiple references" data-urls="#DeriveProperty line 18_36, 24_36">DeriveProperty</button>.<span class="cons_Constructor"><span id="DeriveMode_34_18" title="a definition with no references">DeriveMode</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_34_33" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_34_40" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="DeriveBody_35_3" title="a definition with multiple references" data-urls="#DeriveBody line 24_61, 27_29, 30_18">DeriveBody</button>.<span class="cons_Constructor"><span id="DeriveBody_35_14" title="a definition with no references">DeriveBody</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#DeriveBodyElement_13_29" id="DeriveBodyElement_36_6" title="a reference to a single-file definition">DeriveBodyElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#DeriveBodyElement_36_6" id="DeriveBodyElement_38_3" title="a definition with a single reference">DeriveBodyElement</a>.<span class="cons_Constructor"><span id="DeriveBodyElement_38_21" title="a definition with no references">DeriveBodyElement</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_39_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_17_3" id="TemplateElement_39_13" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;

  <button class="modal-open" id="Definition_42_3" title="a definition with multiple references" data-urls="#Definition line 64_8, 89_8">Definition</button>.<span class="cons_Constructor"><span id="DeriveCrud_42_14" title="a definition with no references">DeriveCrud</span></span> = &lt;<span class="cons_String">derive</span> <span class="cons_String">crud</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_42_41" title="a reference to a single-file definition">Id</a>&gt;&gt; {<span class="keyword">case-insensitive</span>}

<span class="keyword">context-free syntax</span>

  <span id="TemplateCall_46_3" title="a definition with no references">TemplateCall</span> = &lt;<span class="cons_String">from</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_50_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"derive"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_51_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"for"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#TemplateElement_17_3" id="TemplateElement_55_3" title="a reference to a single-file definition">TemplateElement</a>.<span class="cons_Constructor"><a href="#DeriveNoForNoBody_20_19" id="DeriveNoForNoBody_55_19" title="a reference to a single-file definition">DeriveNoForNoBody</a></span> &lt;3&gt; .&gt; <a href="#Exp_92_3" id="Exp_55_44" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#ObjectCreation_214_7" id="ObjectCreation_55_48" title="a reference to a single-file definition">ObjectCreation</a></span>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Definition_59_3" title="a definition with multiple references" data-urls="#Definition line 64_8, 89_8">Definition</button>.<span class="cons_Constructor"><span id="ExpandTemplateCall_59_14" title="a definition with no references">ExpandTemplateCall</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_60_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_60_28" title="a reference to a single-file definition">Id</a>&gt;
  &gt;
  <button class="modal-open" id="Definition_62_3" title="a definition with multiple references" data-urls="#Definition line 64_8, 89_8">Definition</button>.<span class="cons_Constructor"><span id="ExpandTemplateDefinition_62_14" title="a definition with no references">ExpandTemplateDefinition</span></span> = &lt;
    <span class="cons_String">expandtemplate</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_63_21" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_63_29" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Definition_42_3" id="Definition_64_8" title="a reference to a single-file definition">Definition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_67_3" title="a definition with multiple references" data-urls="#TemplateElement line 39_13, 55_3, 69_8, 113_24">TemplateElement</button>.<span class="cons_Constructor"><span id="TemplateElementExpandLocal_67_19" title="a definition with no references">TemplateElementExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_68_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_68_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_17_3" id="TemplateElement_69_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#EntityBodyDeclaration_74_8" id="EntityBodyDeclaration_72_3" title="a definition with a single reference">EntityBodyDeclaration</a>.<span class="cons_Constructor"><span id="EntityBodyDeclarationExpandLocal_72_25" title="a definition with no references">EntityBodyDeclarationExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_73_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_73_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_72_3" id="EntityBodyDeclaration_74_8" title="a reference to a single-file definition">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Statement_79_8" id="Statement_77_3" title="a definition with a single reference">Statement</a>.<span class="cons_Constructor"><span id="StatementExpandLocal_77_13" title="a definition with no references">StatementExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_78_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_78_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Statement_77_3" id="Statement_79_8" title="a reference to a single-file definition">Statement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#ObjectPropertyAssignment_84_8" id="ObjectPropertyAssignment_82_3" title="a definition with a single reference">ObjectPropertyAssignment</a>.<span class="cons_Constructor"><span id="ObjectPropertyAssignmentExpandLocal_82_28" title="a definition with no references">ObjectPropertyAssignmentExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_83_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_83_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ObjectPropertyAssignment_82_3" id="ObjectPropertyAssignment_84_8" title="a reference to a single-file definition">ObjectPropertyAssignment</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="Definition_87_3" title="a definition with multiple references" data-urls="#Definition line 64_8, 89_8">Definition</button>.<span class="cons_Constructor"><span id="DefinitionExpandLocal_87_14" title="a definition with no references">DefinitionExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_88_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_88_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Definition_42_3" id="Definition_89_8" title="a reference to a single-file definition">Definition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="Exp_92_3" title="a definition with multiple references" data-urls="#Exp line 18_23, 21_23, 24_23, 27_23, 55_44, 92_65">Exp</button>.<span class="cons_Constructor"><span id="ExpExpandLocal_92_7" title="a definition with no references">ExpExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_92_33" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_92_48" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#Exp_92_3" id="Exp_92_65" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Attribute_93_77" id="Attribute_93_3" title="a definition with a single reference">Attribute</a>.<span class="cons_Constructor"><span id="AttributeExpandLocal_93_13" title="a definition with no references">AttributeExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_93_45" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_93_60" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#Attribute_93_3" id="Attribute_93_77" title="a reference to a single-file definition">Attribute</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#PropertyAssignment_94_95" id="PropertyAssignment_94_3" title="a definition with a single reference">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentExpandLocal_94_22" title="a definition with no references">PropertyAssignmentExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_94_63" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_94_78" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#PropertyAssignment_94_3" id="PropertyAssignment_94_95" title="a reference to a single-file definition">PropertyAssignment</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#FormalArg_95_77" id="FormalArg_95_3" title="a definition with a single reference">FormalArg</a>.<span class="cons_Constructor"><span id="FormalArgExpandLocal_95_13" title="a definition with no references">FormalArgExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_95_45" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_95_60" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#FormalArg_95_3" id="FormalArg_95_77" title="a reference to a single-file definition">FormalArg</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Case_98_8" id="Case_96_3" title="a definition with a single reference">Case</a>.<span class="cons_Constructor"><span id="CaseAltExpandLocal_96_8" title="a definition with no references">CaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_97_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_97_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Case_96_3" id="Case_98_8" title="a reference to a single-file definition">Case</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_103_8" id="TemplateCaseAlt_101_3" title="a definition with a single reference">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAltExpandLocal_101_19" title="a definition with no references">TemplateCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_102_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_102_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateCaseAlt_101_3" id="TemplateCaseAlt_103_8" title="a reference to a single-file definition">TemplateCaseAlt</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TypeCaseAlt_106_3" title="a definition with no references">TypeCaseAlt</span>.<span class="cons_Constructor"><span id="TypeCaseAltExpandLocal_106_15" title="a definition with no references">TypeCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_107_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_107_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_108_8" title="a reference to a single-file definition">ExpandArgId</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_108_22" title="a reference to a single-file definition">Block</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TemplateTypeCaseAlt_111_3" title="a definition with no references">TemplateTypeCaseAlt</span>.<span class="cons_Constructor"><span id="TemplateTypeCaseAltExpandLocal_111_23" title="a definition with no references">TemplateTypeCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_121_3" id="ExpandId_112_13" title="a reference to a single-file definition">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_112_28" title="a reference to a single-file definition">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ExpandArgId_121_12" id="ExpandArgId_113_8" title="a reference to a single-file definition">ExpandArgId</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_17_3" id="TemplateElement_113_24" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
    <span class="cons_String">}</span>
  &gt;



<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="ExpandId_121_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> <button class="modal-open" id="ExpandArgId_121_12" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="ExpandId_125_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]+
  <button class="modal-open" id="ExpandArgId_126_3" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_126_17" title="a reference to a single-file definition">Id</a>

  <button class="modal-open" id="ExpandId_128_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> = <span class="cons_Lit">"expandtemplate"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandId_129_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandId_130_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandId_131_3" title="a definition with multiple references" data-urls="#ExpandId line 60_13, 68_13, 73_13, 78_13, 83_13, 88_13, 92_33, 93_45, 94_63, 95_45, 97_13, 102_13, 107_13, 112_13, 142_3">ExpandId</button> = <span class="cons_Lit">"to"</span> {<span class="keyword">reject</span>}

  <button class="modal-open" id="ExpandArgId_133_3" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button> = <span class="cons_Lit">"expandtemplate"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandArgId_134_3" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandArgId_135_3" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="ExpandArgId_136_3" title="a definition with multiple references" data-urls="#ExpandArgId line 63_29, 68_28, 73_28, 78_28, 83_28, 88_28, 92_48, 93_60, 94_78, 95_60, 97_28, 102_28, 107_28, 108_8, 112_28, 113_8">ExpandArgId</button> = <span class="cons_Lit">"to"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_138_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#ExpandId_121_3" id="ExpandId_142_3" title="a reference to a single-file definition">ExpandId</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
