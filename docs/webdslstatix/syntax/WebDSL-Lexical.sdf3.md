---
title: WebDSL-Lexical.sdf3
hide:
  - toc
---

# `WebDSL-Lexical.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Lexical.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Lexical.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Lexical.sdf3 "The source file on GitHub"

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
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Lexical_1_8" title="Multi-file references" data-urls="../HQL.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-AccessControl.sdf3/#WebDSL-Lexical_7_3 line 7; ../WebDSL-Action.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-Ajax.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Attributes.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Core.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-DataModel.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-DataValidation.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Dispatch.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-EntityDerive.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-Exception.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-Expand.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Generated.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Native.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Prefetch.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-Regex.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Search.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-Service.sdf3/#WebDSL-Lexical_6_3 line 6; ../webdsl-statix.sdf3/#WebDSL-Lexical_17_3 line 17; ../WebDSL-Test.sdf3/#WebDSL-Lexical_5_3 line 5; ../WebDSL-Type.sdf3/#WebDSL-Lexical_6_3 line 6; ../WebDSL-UI.sdf3/#WebDSL-Lexical_7_3 line 7">WebDSL-Lexical</button>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="QId_5_3" title="Multi-file references" data-urls="#QId_10_9 line 10; ../WebDSL-Core.sdf3/#QId_54_18 line 54, 60; ../WebDSL-Native.sdf3/#QId_14_19 line 14, 20, 49, 56">QId</button> <span id="TemplateId_5_7" title="Not referenced">TemplateId</span> <a href="#VarId_13_13" id="VarId_5_18" title="Referenced at line 13">VarId</a> <span id="FAVarId_5_24" title="Not referenced">FAVarId</span> <span id="FunId_5_32" title="Not referenced">FunId</span> <button class="modal-open" id="PropertyId_5_38" title="Multi-file references" data-urls="#PropertyId_108_49 line 108; ../WebDSL-Ajax.sdf3/#PropertyId_108_35 line 108; ../WebDSL-Prefetch.sdf3/#PropertyId_66_61 line 66">PropertyId</button> <button class="modal-open" id="Id_5_49" title="Multi-file references" data-urls="#Id_9_9 line 9, 10, 11, 12, 14, 15, 38, 107, 172; ../WebDSL-AccessControl.sdf3/#Id_37_16 line 37, 42, 46, 51, 54, 72, 78, 84, 92, 101, 106; ../WebDSL-Action.sdf3/#Id_125_33 line 125, 221, 251, 260, 399; ../WebDSL-Ajax.sdf3/#Id_64_50 line 64, 67, 70, 77, 78, 79, 84, 107; ../WebDSL-Attributes.sdf3/#Id_16_47 line 16, 34; ../WebDSL-Core.sdf3/#Id_119_11 line 119, 123; ../WebDSL-DataModel.sdf3/#Id_15_13 line 15, 20, 25, 31, 36, 117, 118, 119, 121, 122, 131, 141; ../WebDSL-DataValidation.sdf3/#Id_16_36 line 16, 27, 32; ../WebDSL-Dispatch.sdf3/#Id_24_6 line 24, 27, 46, 47; ../WebDSL-EntityDerive.sdf3/#Id_18_28 line 18, 21, 26, 37; ../WebDSL-Expand.sdf3/#Id_18_13 line 18, 21, 24, 27, 30, 33, 34, 39, 42, 60, 63, 126; ../WebDSL-Generated.sdf3/#Id_20_34 line 20; ../WebDSL-Native.sdf3/#Id_25_26 line 25, 27, 38, 58, 61, 71; ../WebDSL-Prefetch.sdf3/#Id_17_19 line 17, 20, 29, 37; ../WebDSL-Regex.sdf3/#Id_14_34 line 14; ../WebDSL-Search.sdf3/#Id_21_36 line 21, 48, 51, 54, 60, 96, 108, 111, 120, 123, 126, 127, 129, 147, 157, 299, 301, 357, 361, 362; ../WebDSL-Service.sdf3/#Id_17_26 line 17, 20, 26, 27; ../WebDSL-Test.sdf3/#Id_11_11 line 11; ../WebDSL-Type.sdf3/#Id_17_11 line 17; ../WebDSL-UI.sdf3/#Id_28_25 line 28, 40, 52, 444, 465, 467, 470, 471, 472, 473, 504">Id</button> <button class="modal-open" id="PageId_5_52" title="Multi-file references" data-urls="#PageId_39_3 line 39; ../WebDSL-AccessControl.sdf3/#PageId_22_28 line 22; ../WebDSL-UI.sdf3/#PageId_42_23 line 42, 292">PageId</button> <button class="modal-open" id="ExtendedId_5_59" title="Multi-file references" data-urls="#ExtendedId_27_29 line 27; ../WebDSL-UI.sdf3/#ExtendedId_398_26 line 398">ExtendedId</button> <button class="modal-open" id="SectionName_5_70" title="Multi-file references" data-urls="#SectionName_151_3 line 151; ../WebDSL-Core.sdf3/#SectionName_49_34 line 49">SectionName</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="QId_9_3" title="Multi-file references" data-urls="#QId_10_9 line 10; ../WebDSL-Core.sdf3/#QId_54_18 line 54, 60; ../WebDSL-Native.sdf3/#QId_14_19 line 14, 20, 49, 56">QId</button> = <a href="#Id_5_49" id="Id_9_9" title="Defined at line 5, 16">Id</a>
  <button class="modal-open" id="QId_10_3" title="Multi-file references" data-urls="#QId_10_9 line 10; ../WebDSL-Core.sdf3/#QId_54_18 line 54, 60; ../WebDSL-Native.sdf3/#QId_14_19 line 14, 20, 49, 56">QId</button> = <a href="#QId_5_3" id="QId_10_9" title="Defined at line 5, 9, 10">QId</a> <span class="cons_Lit">"."</span> <a href="#Id_5_49" id="Id_10_17" title="Defined at line 5, 16">Id</a>
  <span id="TemplateId_11_3" title="Not referenced">TemplateId</span> = <a href="#Id_5_49" id="Id_11_16" title="Defined at line 5, 16">Id</a> <span class="layout">%% hook for reject rules on templatecall names</span>
  <a href="#VarId_13_13" id="VarId_12_3" title="Referenced at line 13">VarId</a> = <a href="#Id_5_49" id="Id_12_11" title="Defined at line 5, 16">Id</a>
  <span id="FAVarId_13_3" title="Not referenced">FAVarId</span> = <a href="#VarId_5_18" id="VarId_13_13" title="Defined at line 5, 12">VarId</a>
  <span id="FunId_14_3" title="Not referenced">FunId</span> = <a href="#Id_5_49" id="Id_14_11" title="Defined at line 5, 16">Id</a>
  <button class="modal-open" id="PropertyId_15_3" title="Multi-file references" data-urls="#PropertyId_108_49 line 108; ../WebDSL-Ajax.sdf3/#PropertyId_108_35 line 108; ../WebDSL-Prefetch.sdf3/#PropertyId_66_61 line 66">PropertyId</button> = <a href="#Id_5_49" id="Id_15_16" title="Defined at line 5, 16">Id</a>
  <button class="modal-open" id="Id_16_3" title="Multi-file references" data-urls="#Id_9_9 line 9, 10, 11, 12, 14, 15, 38, 107, 172; ../WebDSL-AccessControl.sdf3/#Id_37_16 line 37, 42, 46, 51, 54, 72, 78, 84, 92, 101, 106; ../WebDSL-Action.sdf3/#Id_125_33 line 125, 221, 251, 260, 399; ../WebDSL-Ajax.sdf3/#Id_64_50 line 64, 67, 70, 77, 78, 79, 84, 107; ../WebDSL-Attributes.sdf3/#Id_16_47 line 16, 34; ../WebDSL-Core.sdf3/#Id_119_11 line 119, 123; ../WebDSL-DataModel.sdf3/#Id_15_13 line 15, 20, 25, 31, 36, 117, 118, 119, 121, 122, 131, 141; ../WebDSL-DataValidation.sdf3/#Id_16_36 line 16, 27, 32; ../WebDSL-Dispatch.sdf3/#Id_24_6 line 24, 27, 46, 47; ../WebDSL-EntityDerive.sdf3/#Id_18_28 line 18, 21, 26, 37; ../WebDSL-Expand.sdf3/#Id_18_13 line 18, 21, 24, 27, 30, 33, 34, 39, 42, 60, 63, 126; ../WebDSL-Generated.sdf3/#Id_20_34 line 20; ../WebDSL-Native.sdf3/#Id_25_26 line 25, 27, 38, 58, 61, 71; ../WebDSL-Prefetch.sdf3/#Id_17_19 line 17, 20, 29, 37; ../WebDSL-Regex.sdf3/#Id_14_34 line 14; ../WebDSL-Search.sdf3/#Id_21_36 line 21, 48, 51, 54, 60, 96, 108, 111, 120, 123, 126, 127, 129, 147, 157, 299, 301, 357, 361, 362; ../WebDSL-Service.sdf3/#Id_17_26 line 17, 20, 26, 27; ../WebDSL-Test.sdf3/#Id_11_11 line 11; ../WebDSL-Type.sdf3/#Id_17_11 line 17; ../WebDSL-UI.sdf3/#Id_28_25 line 28, 40, 52, 444, 465, 467, 470, 471, 472, 473, 504">Id</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <button class="modal-open" id="PageId_17_3" title="Multi-file references" data-urls="#PageId_39_3 line 39; ../WebDSL-AccessControl.sdf3/#PageId_22_28 line 22; ../WebDSL-UI.sdf3/#PageId_42_23 line 42, 292">PageId</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]*
  <button class="modal-open" id="ExtendedId_18_3" title="Multi-file references" data-urls="#ExtendedId_27_29 line 27; ../WebDSL-UI.sdf3/#ExtendedId_398_26 line 398">ExtendedId</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\.] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_\.]*
  <button class="modal-open" id="SectionName_19_3" title="Multi-file references" data-urls="#SectionName_151_3 line 151; ../WebDSL-Core.sdf3/#SectionName_49_34 line 49">SectionName</button> = ~[\n\r]*

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ModuleName_23_3" title="Multi-file references" data-urls="#ModuleName_34_30 line 34, 40; ../WebDSL-Core.sdf3/#ModuleName_65_13 line 65, 71">ModuleName</button> <a href="#ModulePart_33_32" id="ModulePart_23_14" title="Referenced at line 33">ModulePart</a> <span id="ImportName_23_25" title="Not referenced">ImportName</span> <a href="#OptWildcardImport_34_44" id="OptWildcardImport_23_36" title="Referenced at line 34">OptWildcardImport</a>

<span class="keyword">context-free syntax</span>

  <a href="#ModulePart_33_32" id="ModulePart_27_3" title="Referenced at line 33">ModulePart</a>.<span class="cons_Constructor"><span id="ModulePart_27_14" title="Not referenced">ModulePart</span></span> = &lt;&lt;<a href="#ExtendedId_5_59" id="ExtendedId_27_29" title="Defined at line 5, 18">ExtendedId</a>&gt;&gt;
  <a href="#OptWildcardImport_34_44" id="OptWildcardImport_28_3" title="Referenced at line 34">OptWildcardImport</a>.<span class="cons_Constructor"><span id="WildcardImport_28_21" title="Not referenced">WildcardImport</span></span> = <span class="cons_Lit">"/-"</span>
  <a href="#OptWildcardImport_34_44" id="OptWildcardImport_29_3" title="Referenced at line 34">OptWildcardImport</a>.<span class="cons_Constructor"><span id="NoWildcardImport_29_21" title="Not referenced">NoWildcardImport</span></span> = &lt;&gt;

<span class="keyword">syntax</span>

  <button class="modal-open" id="ModuleName_33_3" title="Multi-file references" data-urls="#ModuleName_34_30 line 34, 40; ../WebDSL-Core.sdf3/#ModuleName_65_13 line 65, 71">ModuleName</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ModuleName_33_17" title="Not referenced">ModuleName</span></span> = { <a href="#ModulePart_23_14" id="ModulePart_33_32" title="Defined at line 23, 27">ModulePart</a><span class="keyword">-CF</span> <span class="cons_Lit">"/"</span>}+
  <span id="ImportName_34_3" title="Not referenced">ImportName</span><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ImportName_34_17" title="Not referenced">ImportName</span></span> = <a href="#ModuleName_23_3" id="ModuleName_34_30" title="Defined at line 23, 33">ModuleName</a><span class="keyword">-CF</span> <a href="#OptWildcardImport_23_36" id="OptWildcardImport_34_44" title="Defined at line 23, 28, 29">OptWildcardImport</a><span class="keyword">-CF</span>

<span class="keyword">lexical restrictions</span>

  <a href="#Id_5_49" id="Id_38_3" title="Defined at line 5, 16">Id</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <a href="#PageId_5_52" id="PageId_39_3" title="Defined at line 5, 17">PageId</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]
  <a href="#ModuleName_23_3" id="ModuleName_40_3" title="Defined at line 23, 33">ModuleName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\/]

<span class="keyword">lexical sorts</span>

   <button class="modal-open" id="Int_44_4" title="Multi-file references" data-urls="#Int_60_3 line 60, 61, 62; ../WebDSL-Action.sdf3/#Int_185_20 line 185; ../WebDSL-DataModel.sdf3/#Int_127_38 line 127, 130; ../WebDSL-Search.sdf3/#Int_131_43 line 131, 132, 159">Int</button> <a href="../WebDSL-Action.sdf3/#Long_186_21" id="Long_44_8" title="Referenced at ../WebDSL-Action.sdf3 line 186">Long</a> <button class="modal-open" id="Float_44_13" title="Multi-file references" data-urls="#Float_63_3 line 63; ../WebDSL-Action.sdf3/#Float_187_22 line 187; ../WebDSL-Search.sdf3/#Float_70_57 line 70, 128, 133, 158">Float</button> <a href="#FloatDigits_50_16" id="FloatDigits_44_19" title="Referenced at line 50, 64">FloatDigits</a> <a href="#ExponentPart_50_28" id="ExponentPart_44_31" title="Referenced at line 50">ExponentPart</a> <a href="#SignedInteger_53_23" id="SignedInteger_44_44" title="Referenced at line 53, 65">SignedInteger</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="Int_48_3" title="Multi-file references" data-urls="#Int_60_3 line 60, 61, 62; ../WebDSL-Action.sdf3/#Int_185_20 line 185; ../WebDSL-DataModel.sdf3/#Int_127_38 line 127, 130; ../WebDSL-Search.sdf3/#Int_131_43 line 131, 132, 159">Int</button> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="../WebDSL-Action.sdf3/#Long_186_21" id="Long_49_3" title="Referenced at ../WebDSL-Action.sdf3 line 186">Long</a> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ <span class="cons_Lit">"L"</span>
  <button class="modal-open" id="Float_50_3" title="Multi-file references" data-urls="#Float_63_3 line 63; ../WebDSL-Action.sdf3/#Float_187_22 line 187; ../WebDSL-Search.sdf3/#Float_70_57 line 70, 128, 133, 158">Float</button> = <span class="cons_Lit">"-"</span>? <a href="#FloatDigits_44_19" id="FloatDigits_50_16" title="Defined at line 44, 51, 52, 56">FloatDigits</a> <a href="#ExponentPart_44_31" id="ExponentPart_50_28" title="Defined at line 44, 53">ExponentPart</a>? [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]?
  <a href="#FloatDigits_50_16" id="FloatDigits_51_3" title="Referenced at line 50, 64">FloatDigits</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]* <span class="cons_Lit">"."</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#FloatDigits_50_16" id="FloatDigits_52_3" title="Referenced at line 50, 64">FloatDigits</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#ExponentPart_50_28" id="ExponentPart_53_3" title="Referenced at line 50">ExponentPart</a> = [<span class="cons_Regular">e</span><span class="cons_Regular">E</span>] <a href="#SignedInteger_44_44" id="SignedInteger_53_23" title="Defined at line 44, 54">SignedInteger</a>
  <a href="#SignedInteger_53_23" id="SignedInteger_54_3" title="Referenced at line 53, 65">SignedInteger</a> = [\+\-]? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <button class="modal-open" id="Float_55_3" title="Multi-file references" data-urls="#Float_63_3 line 63; ../WebDSL-Action.sdf3/#Float_187_22 line 187; ../WebDSL-Search.sdf3/#Float_70_57 line 70, 128, 133, 158">Float</button> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ {<span class="keyword">reject</span>}
  <a href="#FloatDigits_50_16" id="FloatDigits_56_3" title="Referenced at line 50, 64">FloatDigits</a> = <span class="cons_Lit">"."</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#Int_44_4" id="Int_60_3" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#Int_44_4" id="Int_61_3" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">L</span>]             <span class="layout">// to avoid longs getting parsed as an integer followed by a template call</span>
  <a href="#Int_44_4" id="Int_62_3" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">e</span><span class="cons_Regular">E</span><span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]        <span class="layout">// to avoid floats getting parsed as an integer followed by a template call</span>
  <a href="#Float_44_13" id="Float_63_3" title="Defined at line 44, 50, 55">Float</a> -/- [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]
  <a href="#FloatDigits_44_19" id="FloatDigits_64_3" title="Defined at line 44, 51, 52, 56">FloatDigits</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#SignedInteger_44_44" id="SignedInteger_65_3" title="Defined at line 44, 54">SignedInteger</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="String_69_3" title="Multi-file references" data-urls="../WebDSL-Action.sdf3/#String_188_28 line 188; ../WebDSL-Core.sdf3/#String_123_34 line 123; ../WebDSL-DataModel.sdf3/#String_128_38 line 128, 132, 133; ../WebDSL-Search.sdf3/#String_60_48 line 60">String</button> <a href="#StringPart_75_27" id="StringPart_69_10" title="Referenced at line 75">StringPart</a> <a href="#StringInterpExp_78_35" id="StringInterpExp_69_21" title="Referenced at line 78, 84">StringInterpExp</a>

<span class="layout">%% Kernel syntax is required here since we do not want LAYOUT to be parsed between</span>
<span class="layout">%% the first QMLex and StringLex</span>
<span class="keyword">syntax</span>

  <button class="modal-open" id="String_75_3" title="Multi-file references" data-urls="../WebDSL-Action.sdf3/#String_188_28 line 188; ../WebDSL-Core.sdf3/#String_123_34 line 123; ../WebDSL-DataModel.sdf3/#String_128_38 line 128, 132, 133; ../WebDSL-Search.sdf3/#String_60_48 line 60">String</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="String_75_13" title="Not referenced">String</span></span> = <span class="cons_Lit">"\""</span> <a href="#StringPart_69_10" id="StringPart_75_27" title="Defined at line 69, 77, 78">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

  <a href="#StringPart_75_27" id="StringPart_77_3" title="Referenced at line 75">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="StringValue_77_17" title="Not referenced">StringValue</span></span> = <a href="#StringLex_112_9" id="StringLex_77_31" title="Defined at line 112, 117">StringLex</a><span class="keyword">-LEX</span>
  <a href="#StringPart_75_27" id="StringPart_78_3" title="Referenced at line 75">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpValue_78_17" title="Not referenced">InterpValue</span></span> = <span class="cons_Lit">"~"</span> <a href="#StringInterpExp_69_21" id="StringInterpExp_78_35" title="Defined at line 69, 80">StringInterpExp</a><span class="keyword">-CF</span>

  <a href="#StringInterpExp_78_35" id="StringInterpExp_80_3" title="Referenced at line 78, 84">StringInterpExp</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpSimpleExp_80_22" title="Not referenced">InterpSimpleExp</span></span> = <a href="#SimpleExp_97_3" id="SimpleExp_80_40" title="Defined at line 97, 107, 108">SimpleExp</a><span class="keyword">-CF</span>

<span class="keyword">context-free restrictions</span>

  <a href="#StringInterpExp_69_21" id="StringInterpExp_84_3" title="Defined at line 69, 80">StringInterpExp</a> -/- [\.\(]

<span class="keyword">context-free sorts</span>

  <span id="OutputShorthand_88_3" title="Not referenced">OutputShorthand</span>

<span class="keyword">context-free syntax</span>
<span class="layout">%% ~SimpleExp and ~(Exp) shorthand for output template call</span>

  <span id="OutputShorthand_93_3" title="Not referenced">OutputShorthand</span>.<span class="cons_Constructor"><span id="OutputShorthandSimpleExp_93_19" title="Not referenced">OutputShorthandSimpleExp</span></span> = <span class="cons_Lit">"~"</span> <a href="#SimpleExp_97_3" id="SimpleExp_93_50" title="Defined at line 97, 107, 108">SimpleExp</a>

<span class="keyword">context-free sorts</span>

  <a href="#SimpleExp_80_40" id="SimpleExp_97_3" title="Referenced at line 80, 93, 108">SimpleExp</a>

<span class="keyword">context-free syntax</span>
<span class="layout">%% SimpleExp: specific commonly occuring expressions allowed directly after '~' inside string</span>
<span class="layout">%% allowing all expressions directly after '~' causes too many ambiguities</span>
<span class="layout">%% parentheses expression is used as delimiter for inserting any expression</span>
<span class="layout">%% allowed after '~': var/fieldaccess/thiscall/call/brackets a, a.b, a(), a.b(), (exp)</span>
<span class="layout">%% a '.' after a SimpleExp must be rejected as part of String to avoid amb, e.g. not allowed: "~a."</span>
<span class="layout">%% in these cases, use '()' if a '.' is needed as part of the string,       e.g.     allowed: "~(a)."</span>

  <a href="#SimpleExp_80_40" id="SimpleExp_107_3" title="Referenced at line 80, 93, 108">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleVar_107_13" title="Not referenced">SimpleVar</span></span> = <a href="#Id_5_49" id="Id_107_25" title="Defined at line 5, 16">Id</a>
  <a href="#SimpleExp_80_40" id="SimpleExp_108_3" title="Referenced at line 80, 93, 108">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleFieldAccess_108_13" title="Not referenced">SimpleFieldAccess</span></span> = &lt;&lt;<a href="#SimpleExp_97_3" id="SimpleExp_108_35" title="Defined at line 97, 107, 108">SimpleExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PropertyId_5_38" id="PropertyId_108_49" title="Defined at line 5, 15">PropertyId</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <span id="QMLex_112_3" title="Not referenced">QMLex</span> <a href="#StringLex_77_31" id="StringLex_112_9" title="Referenced at line 77, 125">StringLex</a> <a href="#StringChar_117_15" id="StringChar_112_19" title="Referenced at line 117">StringChar</a> <a href="#HexPart_121_22" id="HexPart_112_30" title="Referenced at line 121">HexPart</a>

<span class="keyword">lexical syntax</span>

  <span id="QMLex_116_3" title="Not referenced">QMLex</span> = <span class="cons_Lit">"\""</span>
  <a href="#StringLex_77_31" id="StringLex_117_3" title="Referenced at line 77, 125">StringLex</a> = <a href="#StringChar_112_19" id="StringChar_117_15" title="Defined at line 112, 118, 119, 121">StringChar</a>+
  <a href="#StringChar_117_15" id="StringChar_118_3" title="Referenced at line 117">StringChar</a> = ~[\"\n\~\\]
  <a href="#StringChar_117_15" id="StringChar_119_3" title="Referenced at line 117">StringChar</a> = <span class="cons_Lit">"\\"</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">b</span><span class="cons_Regular">t</span><span class="cons_Regular">n</span><span class="cons_Regular">f</span><span class="cons_Regular">r</span>\'\"\\\~]
  <a href="#HexPart_121_22" id="HexPart_120_3" title="Referenced at line 121">HexPart</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span>]
  <a href="#StringChar_117_15" id="StringChar_121_3" title="Referenced at line 117">StringChar</a> = <span class="cons_Lit">"\\u"</span> <a href="#HexPart_112_30" id="HexPart_121_22" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_30" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_38" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_46" title="Defined at line 112, 120">HexPart</a>

<span class="keyword">lexical restrictions</span>

  <a href="#StringLex_112_9" id="StringLex_125_3" title="Defined at line 112, 117">StringLex</a> -/- ~[\"\n\~]

<span class="keyword">lexical sorts</span>

  <a href="#InsideComment_134_21" id="InsideComment_129_3" title="Referenced at line 134">InsideComment</a> <a href="#CommentChar_136_20" id="CommentChar_129_17" title="Referenced at line 136, 143">CommentChar</a> <a href="#NewLineEOF_133_30" id="NewLineEOF_129_29" title="Referenced at line 133">NewLineEOF</a> <a href="#EOF_139_16" id="EOF_129_40" title="Referenced at line 139, 144">EOF</a>

<span class="keyword">lexical syntax</span>
  <span class="keyword">LAYOUT</span>     = [\ \t\n\r]
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"//"</span> ~[\n\r]* <a href="#NewLineEOF_129_29" id="NewLineEOF_133_30" title="Defined at line 129, 138, 139">NewLineEOF</a>
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"/*"</span> <a href="#InsideComment_129_3" id="InsideComment_134_21" title="Defined at line 129, 135, 136">InsideComment</a>* <span class="cons_Lit">"*/"</span>
  <a href="#InsideComment_134_21" id="InsideComment_135_3" title="Referenced at line 134">InsideComment</a>  = ~[\*]
  <a href="#InsideComment_134_21" id="InsideComment_136_3" title="Referenced at line 134">InsideComment</a>  = <a href="#CommentChar_129_17" id="CommentChar_136_20" title="Defined at line 129, 137">CommentChar</a>
  <a href="#CommentChar_136_20" id="CommentChar_137_3" title="Referenced at line 136, 143">CommentChar</a>    = [\*]
  <a href="#NewLineEOF_133_30" id="NewLineEOF_138_3" title="Referenced at line 133">NewLineEOF</a> = [\n\r]
  <a href="#NewLineEOF_133_30" id="NewLineEOF_139_3" title="Referenced at line 133">NewLineEOF</a> = <a href="#EOF_129_40" id="EOF_139_16" title="Defined at line 129, 140">EOF</a>
  <a href="#EOF_139_16" id="EOF_140_3" title="Referenced at line 139, 144">EOF</a>        =

<span class="keyword">lexical restrictions</span>
  <a href="#CommentChar_129_17" id="CommentChar_143_3" title="Defined at line 129, 137">CommentChar</a> -/- [\/]
  <a href="#EOF_129_40" id="EOF_144_3" title="Defined at line 129, 140">EOF</a>         -/- ~[]

<span class="keyword">context-free restrictions</span>

  <span class="keyword">LAYOUT</span>? -/- [\ \t\n\r]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\/]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\*]
  <a href="#SectionName_5_70" id="SectionName_151_3" title="Defined at line 5, 19">SectionName</a> -/- ~[\n\r]

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="Word_155_3" title="Multi-file references" data-urls="#Word_163_3 line 163; ../WebDSL-Core.sdf3/#Word_112_20 line 112, 115">Word</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="Word_159_3" title="Multi-file references" data-urls="#Word_163_3 line 163; ../WebDSL-Core.sdf3/#Word_112_20 line 112, 115">Word</button> = ~[\ \t\n\r\}]+

<span class="keyword">lexical restrictions</span>

  <a href="#Word_155_3" id="Word_163_3" title="Defined at line 155, 159">Word</a> -/- ~[\ \t\n\r\}]

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="SimpleSortLex_167_3" title="Multi-file references" data-urls="#SimpleSortLex_177_3 line 177; ../WebDSL-Action.sdf3/#SimpleSortLex_214_26 line 214; ../WebDSL-Search.sdf3/#SimpleSortLex_172_39 line 172, 248">SimpleSortLex</button> <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_167_17" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="SimpleSortLex_171_3" title="Multi-file references" data-urls="#SimpleSortLex_177_3 line 177; ../WebDSL-Action.sdf3/#SimpleSortLex_214_26 line 214; ../WebDSL-Search.sdf3/#SimpleSortLex_172_39 line 172, 248">SimpleSortLex</button> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_172_3" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a> = <a href="#Id_5_49" id="Id_172_20" title="Defined at line 5, 16">Id</a>
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_173_3" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a> = <span class="cons_Lit">"Ref"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#SimpleSortLex_167_3" id="SimpleSortLex_177_3" title="Defined at line 167, 171">SimpleSortLex</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
