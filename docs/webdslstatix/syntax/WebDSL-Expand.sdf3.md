---
title: WebDSL-Expand.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Expand_221_234" id="WebDSL-Expand_7_20" title="Referenced at ../webdsl-statix.sdf3 line 14">WebDSL-Expand</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_32_45" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_48_62" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_65_76" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_79_88" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_91_107" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Attributes.sdf3#WebDSL-Attributes_7_24" id="WebDSL-Attributes_110_127" title="Defined at ../WebDSL-Attributes.sdf3 line 1">WebDSL-Attributes</a>

<span class="keyword">context-free sorts</span>

  <a href="#DeriveProperty_450_464" id="DeriveProperty_151_165" title="Referenced at line 24">DeriveProperty</a> <a href="#DeriveBody_626_636" id="DeriveBody_166_176" title="Referenced at line 30">DeriveBody</a> <a href="#DeriveBodyElement_759_776" id="DeriveBodyElement_177_194" title="Referenced at line 36">DeriveBodyElement</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateElement_2842_2857" id="TemplateElement_219_234" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><span id="DeriveNoBody_235_247" title="Not referenced locally, nor via imports">DeriveNoBody</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_264_266" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_2008_2011" id="Exp_274_277" title="Defined at line 92">Exp</a>&gt; <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;{<a href="#DeriveProperty_151_165" id="DeriveProperty_287_301" title="Defined at line 13, 33, 34">DeriveProperty</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;
  <a href="#TemplateElement_2842_2857" id="TemplateElement_317_332" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><a href="#DeriveNoForNoBody_1106_1123" id="DeriveNoForNoBody_333_350" title="Referenced at line 55">DeriveNoForNoBody</a></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_367_369" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_2008_2011" id="Exp_377_380" title="Defined at line 92">Exp</a>&gt;
  &gt;
  <a href="#TemplateElement_2842_2857" id="TemplateElement_388_403" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><span id="Derive_404_410" title="Not referenced locally, nor via imports">Derive</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_427_429" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_2008_2011" id="Exp_437_440" title="Defined at line 92">Exp</a>&gt; <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;{<a href="#DeriveProperty_151_165" id="DeriveProperty_450_464" title="Defined at line 13, 33, 34">DeriveProperty</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#DeriveBody_166_176" id="DeriveBody_475_485" title="Defined at line 13, 35">DeriveBody</a>&gt;
  &gt;
  <a href="#TemplateElement_2842_2857" id="TemplateElement_493_508" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><span id="DeriveNoFor_509_520" title="Not referenced locally, nor via imports">DeriveNoFor</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_537_539" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">from</span> &lt;<a href="#Exp_2008_2011" id="Exp_547_550" title="Defined at line 92">Exp</a>&gt; &lt;<a href="#DeriveBody_166_176" id="DeriveBody_553_563" title="Defined at line 13, 35">DeriveBody</a>&gt;
  &gt;
  <a href="#TemplateElement_2842_2857" id="TemplateElement_571_586" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><span id="DeriveNoFromNoFor_587_604" title="Not referenced locally, nor via imports">DeriveNoFromNoFor</span></span> = &lt;
    <span class="cons_String">derive</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_621_623" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; &lt;<a href="#DeriveBody_166_176" id="DeriveBody_626_636" title="Defined at line 13, 35">DeriveBody</a>&gt;
  &gt;

  <a href="#DeriveProperty_450_464" id="DeriveProperty_645_659" title="Referenced at line 24">DeriveProperty</a>.<span class="cons_Constructor"><span id="DeriveDefault_660_673" title="Not referenced locally, nor via imports">DeriveDefault</span></span> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_676_678" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>
  <a href="#DeriveProperty_450_464" id="DeriveProperty_681_695" title="Referenced at line 24">DeriveProperty</a>.<span class="cons_Constructor"><span id="DeriveMode_696_706" title="Not referenced locally, nor via imports">DeriveMode</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_711_713" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_718_720" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#DeriveBody_626_636" id="DeriveBody_727_737" title="Referenced at line 30">DeriveBody</a>.<span class="cons_Constructor"><span id="DeriveBody_738_748" title="Not referenced locally, nor via imports">DeriveBody</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#DeriveBodyElement_177_194" id="DeriveBodyElement_759_776" title="Defined at line 13, 38">DeriveBodyElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#DeriveBodyElement_759_776" id="DeriveBodyElement_786_803" title="Referenced at line 36">DeriveBodyElement</a>.<span class="cons_Constructor"><span id="DeriveBodyElement_804_821" title="Not referenced locally, nor via imports">DeriveBodyElement</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_831_833" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_219_234" id="TemplateElement_838_853" title="Defined at line 17, 20, 23, 26, 29, 67">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;

  <a href="#Definition_1983_1993" id="Definition_865_875" title="Referenced at line 89">Definition</a>.<span class="cons_Constructor"><span id="DeriveCrud_876_886" title="Not referenced locally, nor via imports">DeriveCrud</span></span> = &lt;<span class="cons_String">derive</span> <span class="cons_String">crud</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_903_905" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt; {<span class="keyword">case-insensitive</span>}

<span class="keyword">context-free syntax</span>

  <span id="TemplateCall_951_963" title="Not referenced locally, nor via imports">TemplateCall</span> = &lt;<span class="cons_String">from</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <span id="TemplateId_1001_1011" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"derive"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_1034_1044" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"for"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#TemplateElement_219_234" id="TemplateElement_1090_1105" title="Defined at line 17, 20, 23, 26, 29, 67">TemplateElement</a>.<span class="cons_Constructor"><a href="#DeriveNoForNoBody_333_350" id="DeriveNoForNoBody_1106_1123" title="Defined at line 20">DeriveNoForNoBody</a></span> &lt;3&gt; .&gt; <a href="#Exp_2008_2011" id="Exp_1131_1134" title="Defined at line 92">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3#ObjectCreation_4155_4169" id="ObjectCreation_1135_1149" title="Defined at ../WebDSL-Action.sdf3 line 214">ObjectCreation</a></span>

<span class="keyword">context-free syntax</span>

  <a href="#Definition_1983_1993" id="Definition_1174_1184" title="Referenced at line 89">Definition</a>.<span class="cons_Constructor"><span id="ExpandTemplateCall_1185_1203" title="Not referenced locally, nor via imports">ExpandTemplateCall</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1220_1228" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1235_1237" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;
  &gt;
  <a href="#Definition_1983_1993" id="Definition_1245_1255" title="Referenced at line 89">Definition</a>.<span class="cons_Constructor"><span id="ExpandTemplateDefinition_1256_1280" title="Not referenced locally, nor via imports">ExpandTemplateDefinition</span></span> = &lt;
    <span class="cons_String">expandtemplate</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_1305_1307" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1313_1324" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Definition_865_875" id="Definition_1336_1346" title="Defined at line 42, 59, 62, 87">Definition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateElement_2842_2857" id="TemplateElement_1361_1376" title="Referenced at line 113">TemplateElement</a>.<span class="cons_Constructor"><span id="TemplateElementExpandLocal_1377_1403" title="Not referenced locally, nor via imports">TemplateElementExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1420_1428" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1435_1446" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_219_234" id="TemplateElement_1458_1473" title="Defined at line 17, 20, 23, 26, 29, 67">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#EntityBodyDeclaration_1597_1618" id="EntityBodyDeclaration_1488_1509" title="Referenced at line 74">EntityBodyDeclaration</a>.<span class="cons_Constructor"><span id="EntityBodyDeclarationExpandLocal_1510_1542" title="Not referenced locally, nor via imports">EntityBodyDeclarationExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1559_1567" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1574_1585" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#EntityBodyDeclaration_1488_1509" id="EntityBodyDeclaration_1597_1618" title="Defined at line 72">EntityBodyDeclaration</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Statement_1718_1727" id="Statement_1633_1642" title="Referenced at line 79">Statement</a>.<span class="cons_Constructor"><span id="StatementExpandLocal_1643_1663" title="Not referenced locally, nor via imports">StatementExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1680_1688" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1695_1706" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Statement_1633_1642" id="Statement_1718_1727" title="Defined at line 77">Statement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#ObjectPropertyAssignment_1857_1881" id="ObjectPropertyAssignment_1742_1766" title="Referenced at line 84">ObjectPropertyAssignment</a>.<span class="cons_Constructor"><span id="ObjectPropertyAssignmentExpandLocal_1767_1802" title="Not referenced locally, nor via imports">ObjectPropertyAssignmentExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1819_1827" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1834_1845" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ObjectPropertyAssignment_1742_1766" id="ObjectPropertyAssignment_1857_1881" title="Defined at line 82">ObjectPropertyAssignment</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Definition_1983_1993" id="Definition_1896_1906" title="Referenced at line 89">Definition</a>.<span class="cons_Constructor"><span id="DefinitionExpandLocal_1907_1928" title="Not referenced locally, nor via imports">DefinitionExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_1945_1953" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_1960_1971" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Definition_865_875" id="Definition_1983_1993" title="Defined at line 42, 59, 62, 87">Definition</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Exp_2070_2073" id="Exp_2008_2011" title="Referenced at line 92">Exp</a>.<span class="cons_Constructor"><span id="ExpExpandLocal_2012_2026" title="Not referenced locally, nor via imports">ExpExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2038_2046" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2053_2064" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#Exp_2008_2011" id="Exp_2070_2073" title="Defined at line 92">Exp</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Attribute_2154_2163" id="Attribute_2080_2089" title="Referenced at line 93">Attribute</a>.<span class="cons_Constructor"><span id="AttributeExpandLocal_2090_2110" title="Not referenced locally, nor via imports">AttributeExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2122_2130" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2137_2148" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#Attribute_2080_2089" id="Attribute_2154_2163" title="Defined at line 93">Attribute</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#PropertyAssignment_2262_2280" id="PropertyAssignment_2170_2188" title="Referenced at line 94">PropertyAssignment</a>.<span class="cons_Constructor"><span id="PropertyAssignmentExpandLocal_2189_2218" title="Not referenced locally, nor via imports">PropertyAssignmentExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2230_2238" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2245_2256" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#PropertyAssignment_2170_2188" id="PropertyAssignment_2262_2280" title="Defined at line 94">PropertyAssignment</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#FormalArg_2361_2370" id="FormalArg_2287_2296" title="Referenced at line 95">FormalArg</a>.<span class="cons_Constructor"><span id="FormalArgExpandLocal_2297_2317" title="Not referenced locally, nor via imports">FormalArgExpandLocal</span></span> = &lt;<span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2329_2337" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2344_2355" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span> &lt;<a href="#FormalArg_2287_2296" id="FormalArg_2361_2370" title="Defined at line 95">FormalArg</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Case_2455_2459" id="Case_2377_2381" title="Referenced at line 98">Case</a>.<span class="cons_Constructor"><span id="CaseAltExpandLocal_2382_2400" title="Not referenced locally, nor via imports">CaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2417_2425" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2432_2443" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#Case_2377_2381" id="Case_2455_2459" title="Defined at line 96">Case</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_2570_2585" id="TemplateCaseAlt_2473_2488" title="Referenced at line 103">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAltExpandLocal_2489_2515" title="Not referenced locally, nor via imports">TemplateCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2532_2540" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2547_2558" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateCaseAlt_2473_2488" id="TemplateCaseAlt_2570_2585" title="Defined at line 101">TemplateCaseAlt</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TypeCaseAlt_2599_2610" title="Not referenced locally, nor via imports">TypeCaseAlt</span>.<span class="cons_Constructor"><span id="TypeCaseAltExpandLocal_2611_2633" title="Not referenced locally, nor via imports">TypeCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2650_2658" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2665_2676" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2688_2699" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>&gt; &lt;<a href="../WebDSL-Action.sdf3#Block_145_150" id="Block_2702_2707" title="Defined at ../WebDSL-Action.sdf3 line 13, 45">Block</a>&gt;
    <span class="cons_String">}</span>
  &gt;
  <span id="TemplateTypeCaseAlt_2721_2740" title="Not referenced locally, nor via imports">TemplateTypeCaseAlt</span>.<span class="cons_Constructor"><span id="TemplateTypeCaseAltExpandLocal_2741_2771" title="Not referenced locally, nor via imports">TemplateTypeCaseAltExpandLocal</span></span> = &lt;
    <span class="cons_String">expand</span> &lt;<a href="#ExpandId_2892_2900" id="ExpandId_2788_2796" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a>+&gt; <span class="cons_String">to</span> &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2803_2814" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>+&gt; <span class="cons_String">{</span>
      &lt;<a href="#ExpandArgId_2901_2912" id="ExpandArgId_2826_2837" title="Defined at line 121, 126, 133, 134, 135, 136">ExpandArgId</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_219_234" id="TemplateElement_2842_2857" title="Defined at line 17, 20, 23, 26, 29, 67">TemplateElement</a>*&gt; <span class="cons_String">}</span>
    <span class="cons_String">}</span>
  &gt;



<span class="keyword">lexical sorts</span>

  <a href="#ExpandId_3312_3320" id="ExpandId_2892_2900" title="Referenced at line 142">ExpandId</a> <a href="#ExpandArgId_2826_2837" id="ExpandArgId_2901_2912" title="Referenced at line 113">ExpandArgId</a>

<span class="keyword">lexical syntax</span>

  <a href="#ExpandId_3312_3320" id="ExpandId_2932_2940" title="Referenced at line 142">ExpandId</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]+
  <a href="#ExpandArgId_2826_2837" id="ExpandArgId_2962_2973" title="Referenced at line 113">ExpandArgId</a> = <a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2976_2978" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>

  <a href="#ExpandId_3312_3320" id="ExpandId_2982_2990" title="Referenced at line 142">ExpandId</a> = <span class="cons_Lit">"expandtemplate"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandId_3312_3320" id="ExpandId_3021_3029" title="Referenced at line 142">ExpandId</a> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandId_3312_3320" id="ExpandId_3054_3062" title="Referenced at line 142">ExpandId</a> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandId_3312_3320" id="ExpandId_3085_3093" title="Referenced at line 142">ExpandId</a> = <span class="cons_Lit">"to"</span> {<span class="keyword">reject</span>}

  <a href="#ExpandArgId_2826_2837" id="ExpandArgId_3113_3124" title="Referenced at line 113">ExpandArgId</a> = <span class="cons_Lit">"expandtemplate"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandArgId_2826_2837" id="ExpandArgId_3155_3166" title="Referenced at line 113">ExpandArgId</a> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandArgId_2826_2837" id="ExpandArgId_3191_3202" title="Referenced at line 113">ExpandArgId</a> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}
  <a href="#ExpandArgId_2826_2837" id="ExpandArgId_3225_3236" title="Referenced at line 113">ExpandArgId</a> = <span class="cons_Lit">"to"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_3256_3266" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"expand"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#ExpandId_2892_2900" id="ExpandId_3312_3320" title="Defined at line 121, 125, 128, 129, 130, 131">ExpandId</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]

</code></pre></td></tr></tbody></table></div>