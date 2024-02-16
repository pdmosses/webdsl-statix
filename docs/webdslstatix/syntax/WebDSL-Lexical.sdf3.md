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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Lexical_1_8" title="a definition with multiple references" data-urls="../HQL.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-AccessControl.sdf3/#WebDSL-Lexical line 7_3; ../WebDSL-Action.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-Ajax.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Attributes.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Core.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-DataModel.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-DataValidation.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Dispatch.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-EntityDerive.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-Exception.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-Expand.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Generated.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Native.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Prefetch.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-Regex.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Search.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-Service.sdf3/#WebDSL-Lexical line 6_3; ../webdsl-statix.sdf3/#WebDSL-Lexical line 17_3; ../WebDSL-Test.sdf3/#WebDSL-Lexical line 5_3; ../WebDSL-Type.sdf3/#WebDSL-Lexical line 6_3; ../WebDSL-UI.sdf3/#WebDSL-Lexical line 7_3">WebDSL-Lexical</button>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="QId_5_3" title="a definition with multiple references" data-urls="#QId line 10_9; ../WebDSL-Core.sdf3/#QId line 54_18, 60_18; ../WebDSL-Native.sdf3/#QId line 14_19, 20_26, 49_6, 56_6">QId</button> <span id="TemplateId_5_7" title="a definition with no references">TemplateId</span> <a href="#VarId_13_13" id="VarId_5_18" title="a definition with a single reference">VarId</a> <span id="FAVarId_5_24" title="a definition with no references">FAVarId</span> <span id="FunId_5_32" title="a definition with no references">FunId</span> <button class="modal-open" id="PropertyId_5_38" title="a definition with multiple references" data-urls="#PropertyId line 108_49; ../WebDSL-Ajax.sdf3/#PropertyId line 108_35; ../WebDSL-Prefetch.sdf3/#PropertyId line 66_61">PropertyId</button> <button class="modal-open" id="Id_5_49" title="a definition with multiple references" data-urls="#Id line 9_9, 10_17, 11_16, 12_11, 14_11, 15_16, 38_3, 107_25, 172_20; ../WebDSL-AccessControl.sdf3/#Id line 37_16, 42_19, 42_42, 46_16, 51_19, 51_42, 54_15, 72_41, 78_20, 84_16, 92_21, 101_39, 106_14; ../WebDSL-Action.sdf3/#Id line 125_33, 221_6, 251_24, 260_42, 399_27; ../WebDSL-Ajax.sdf3/#Id line 64_50, 64_58, 67_53, 70_43, 77_66, 77_74, 78_69, 79_59, 84_52, 107_28; ../WebDSL-Attributes.sdf3/#Id line 16_47, 34_17; ../WebDSL-Core.sdf3/#Id line 119_11, 123_27; ../WebDSL-DataModel.sdf3/#Id line 15_13, 15_20, 20_13, 25_14, 31_20, 36_21, 117_40, 117_47, 118_50, 119_50, 119_57, 121_39, 122_38, 131_44, 141_18; ../WebDSL-DataValidation.sdf3/#Id line 16_36, 27_6, 32_56; ../WebDSL-Dispatch.sdf3/#Id line 24_6, 27_6, 46_49, 47_52; ../WebDSL-EntityDerive.sdf3/#Id line 18_28, 21_14, 26_14, 37_21; ../WebDSL-Expand.sdf3/#Id line 18_13, 21_13, 24_13, 27_13, 30_13, 33_34, 34_33, 34_40, 39_6, 42_41, 60_28, 63_21, 126_17; ../WebDSL-Generated.sdf3/#Id line 20_34; ../WebDSL-Native.sdf3/#Id line 25_26, 27_25, 38_6, 58_36, 61_33, 71_17; ../WebDSL-Prefetch.sdf3/#Id line 17_19, 20_19, 29_56, 37_43; ../WebDSL-Regex.sdf3/#Id line 14_34; ../WebDSL-Search.sdf3/#Id line 21_36, 48_20, 51_18, 54_21, 60_41, 96_21, 108_19, 111_19, 120_36, 123_36, 126_40, 127_43, 129_50, 147_21, 157_14, 299_19, 301_17, 357_20, 361_46, 362_49; ../WebDSL-Service.sdf3/#Id line 17_26, 20_29, 20_54, 26_68, 27_68; ../WebDSL-Test.sdf3/#Id line 11_11; ../WebDSL-Type.sdf3/#Id line 17_11; ../WebDSL-UI.sdf3/#Id line 28_25, 40_39, 52_24, 444_46, 465_33, 467_6, 470_36, 471_44, 472_39, 473_41, 504_39, 504_44">Id</button> <button class="modal-open" id="PageId_5_52" title="a definition with multiple references" data-urls="#PageId line 39_3; ../WebDSL-AccessControl.sdf3/#PageId line 22_28; ../WebDSL-UI.sdf3/#PageId line 42_23, 292_6">PageId</button> <button class="modal-open" id="ExtendedId_5_59" title="a definition with multiple references" data-urls="#ExtendedId line 27_29; ../WebDSL-UI.sdf3/#ExtendedId line 398_26">ExtendedId</button> <button class="modal-open" id="SectionName_5_70" title="a definition with multiple references" data-urls="#SectionName line 151_3; ../WebDSL-Core.sdf3/#SectionName line 49_34">SectionName</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="QId_9_3" title="a definition with multiple references" data-urls="#QId line 10_9; ../WebDSL-Core.sdf3/#QId line 54_18, 60_18; ../WebDSL-Native.sdf3/#QId line 14_19, 20_26, 49_6, 56_6">QId</button> = <a href="#Id_5_49" id="Id_9_9" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="QId_10_3" title="a definition with multiple references" data-urls="#QId line 10_9; ../WebDSL-Core.sdf3/#QId line 54_18, 60_18; ../WebDSL-Native.sdf3/#QId line 14_19, 20_26, 49_6, 56_6">QId</button> = <a href="#QId_5_3" id="QId_10_9" title="a reference to a single-file definition">QId</a> <span class="cons_Lit">"."</span> <a href="#Id_5_49" id="Id_10_17" title="a reference to a single-file definition">Id</a>
  <span id="TemplateId_11_3" title="a definition with no references">TemplateId</span> = <a href="#Id_5_49" id="Id_11_16" title="a reference to a single-file definition">Id</a> <span class="layout">%% hook for reject rules on templatecall names</span>
  <a href="#VarId_13_13" id="VarId_12_3" title="a definition with a single reference">VarId</a> = <a href="#Id_5_49" id="Id_12_11" title="a reference to a single-file definition">Id</a>
  <span id="FAVarId_13_3" title="a definition with no references">FAVarId</span> = <a href="#VarId_5_18" id="VarId_13_13" title="a reference to a single-file definition">VarId</a>
  <span id="FunId_14_3" title="a definition with no references">FunId</span> = <a href="#Id_5_49" id="Id_14_11" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="PropertyId_15_3" title="a definition with multiple references" data-urls="#PropertyId line 108_49; ../WebDSL-Ajax.sdf3/#PropertyId line 108_35; ../WebDSL-Prefetch.sdf3/#PropertyId line 66_61">PropertyId</button> = <a href="#Id_5_49" id="Id_15_16" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="Id_16_3" title="a definition with multiple references" data-urls="#Id line 9_9, 10_17, 11_16, 12_11, 14_11, 15_16, 38_3, 107_25, 172_20; ../WebDSL-AccessControl.sdf3/#Id line 37_16, 42_19, 42_42, 46_16, 51_19, 51_42, 54_15, 72_41, 78_20, 84_16, 92_21, 101_39, 106_14; ../WebDSL-Action.sdf3/#Id line 125_33, 221_6, 251_24, 260_42, 399_27; ../WebDSL-Ajax.sdf3/#Id line 64_50, 64_58, 67_53, 70_43, 77_66, 77_74, 78_69, 79_59, 84_52, 107_28; ../WebDSL-Attributes.sdf3/#Id line 16_47, 34_17; ../WebDSL-Core.sdf3/#Id line 119_11, 123_27; ../WebDSL-DataModel.sdf3/#Id line 15_13, 15_20, 20_13, 25_14, 31_20, 36_21, 117_40, 117_47, 118_50, 119_50, 119_57, 121_39, 122_38, 131_44, 141_18; ../WebDSL-DataValidation.sdf3/#Id line 16_36, 27_6, 32_56; ../WebDSL-Dispatch.sdf3/#Id line 24_6, 27_6, 46_49, 47_52; ../WebDSL-EntityDerive.sdf3/#Id line 18_28, 21_14, 26_14, 37_21; ../WebDSL-Expand.sdf3/#Id line 18_13, 21_13, 24_13, 27_13, 30_13, 33_34, 34_33, 34_40, 39_6, 42_41, 60_28, 63_21, 126_17; ../WebDSL-Generated.sdf3/#Id line 20_34; ../WebDSL-Native.sdf3/#Id line 25_26, 27_25, 38_6, 58_36, 61_33, 71_17; ../WebDSL-Prefetch.sdf3/#Id line 17_19, 20_19, 29_56, 37_43; ../WebDSL-Regex.sdf3/#Id line 14_34; ../WebDSL-Search.sdf3/#Id line 21_36, 48_20, 51_18, 54_21, 60_41, 96_21, 108_19, 111_19, 120_36, 123_36, 126_40, 127_43, 129_50, 147_21, 157_14, 299_19, 301_17, 357_20, 361_46, 362_49; ../WebDSL-Service.sdf3/#Id line 17_26, 20_29, 20_54, 26_68, 27_68; ../WebDSL-Test.sdf3/#Id line 11_11; ../WebDSL-Type.sdf3/#Id line 17_11; ../WebDSL-UI.sdf3/#Id line 28_25, 40_39, 52_24, 444_46, 465_33, 467_6, 470_36, 471_44, 472_39, 473_41, 504_39, 504_44">Id</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <button class="modal-open" id="PageId_17_3" title="a definition with multiple references" data-urls="#PageId line 39_3; ../WebDSL-AccessControl.sdf3/#PageId line 22_28; ../WebDSL-UI.sdf3/#PageId line 42_23, 292_6">PageId</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]*
  <button class="modal-open" id="ExtendedId_18_3" title="a definition with multiple references" data-urls="#ExtendedId line 27_29; ../WebDSL-UI.sdf3/#ExtendedId line 398_26">ExtendedId</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\.] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_\.]*
  <button class="modal-open" id="SectionName_19_3" title="a definition with multiple references" data-urls="#SectionName line 151_3; ../WebDSL-Core.sdf3/#SectionName line 49_34">SectionName</button> = ~[\n\r]*

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ModuleName_23_3" title="a definition with multiple references" data-urls="#ModuleName line 34_30, 40_3; ../WebDSL-Core.sdf3/#ModuleName line 65_13, 71_13">ModuleName</button> <a href="#ModulePart_33_32" id="ModulePart_23_14" title="a definition with a single reference">ModulePart</a> <span id="ImportName_23_25" title="a definition with no references">ImportName</span> <a href="#OptWildcardImport_34_44" id="OptWildcardImport_23_36" title="a definition with a single reference">OptWildcardImport</a>

<span class="keyword">context-free syntax</span>

  <a href="#ModulePart_33_32" id="ModulePart_27_3" title="a definition with a single reference">ModulePart</a>.<span class="cons_Constructor"><span id="ModulePart_27_14" title="a definition with no references">ModulePart</span></span> = &lt;&lt;<a href="#ExtendedId_5_59" id="ExtendedId_27_29" title="a reference to a single-file definition">ExtendedId</a>&gt;&gt;
  <a href="#OptWildcardImport_34_44" id="OptWildcardImport_28_3" title="a definition with a single reference">OptWildcardImport</a>.<span class="cons_Constructor"><span id="WildcardImport_28_21" title="a definition with no references">WildcardImport</span></span> = <span class="cons_Lit">"/-"</span>
  <a href="#OptWildcardImport_34_44" id="OptWildcardImport_29_3" title="a definition with a single reference">OptWildcardImport</a>.<span class="cons_Constructor"><span id="NoWildcardImport_29_21" title="a definition with no references">NoWildcardImport</span></span> = &lt;&gt;

<span class="keyword">syntax</span>

  <button class="modal-open" id="ModuleName_33_3" title="a definition with multiple references" data-urls="#ModuleName line 34_30, 40_3; ../WebDSL-Core.sdf3/#ModuleName line 65_13, 71_13">ModuleName</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ModuleName_33_17" title="a definition with no references">ModuleName</span></span> = { <a href="#ModulePart_23_14" id="ModulePart_33_32" title="a reference to a single-file definition">ModulePart</a><span class="keyword">-CF</span> <span class="cons_Lit">"/"</span>}+
  <span id="ImportName_34_3" title="a definition with no references">ImportName</span><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ImportName_34_17" title="a definition with no references">ImportName</span></span> = <a href="#ModuleName_23_3" id="ModuleName_34_30" title="a reference to a single-file definition">ModuleName</a><span class="keyword">-CF</span> <a href="#OptWildcardImport_23_36" id="OptWildcardImport_34_44" title="a reference to a single-file definition">OptWildcardImport</a><span class="keyword">-CF</span>

<span class="keyword">lexical restrictions</span>

  <a href="#Id_5_49" id="Id_38_3" title="a reference to a single-file definition">Id</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <a href="#PageId_5_52" id="PageId_39_3" title="a reference to a single-file definition">PageId</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]
  <a href="#ModuleName_23_3" id="ModuleName_40_3" title="a reference to a single-file definition">ModuleName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\/]

<span class="keyword">lexical sorts</span>

   <button class="modal-open" id="Int_44_4" title="a definition with multiple references" data-urls="#Int line 60_3, 61_3, 62_3; ../WebDSL-Action.sdf3/#Int line 185_20; ../WebDSL-DataModel.sdf3/#Int line 127_38, 130_36; ../WebDSL-Search.sdf3/#Int line 131_43, 132_48, 159_14">Int</button> <a href="../WebDSL-Action.sdf3/#Long_186_21" id="Long_44_8" title="a definition with a single reference">Long</a> <button class="modal-open" id="Float_44_13" title="a definition with multiple references" data-urls="#Float line 63_3; ../WebDSL-Action.sdf3/#Float line 187_22; ../WebDSL-Search.sdf3/#Float line 70_57, 128_48, 133_39, 158_14">Float</button> <button class="modal-open" id="FloatDigits_44_19" title="a definition with multiple references" data-urls="#FloatDigits line 50_16, 64_3">FloatDigits</button> <a href="#ExponentPart_50_28" id="ExponentPart_44_31" title="a definition with a single reference">ExponentPart</a> <button class="modal-open" id="SignedInteger_44_44" title="a definition with multiple references" data-urls="#SignedInteger line 53_23, 65_3">SignedInteger</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="Int_48_3" title="a definition with multiple references" data-urls="#Int line 60_3, 61_3, 62_3; ../WebDSL-Action.sdf3/#Int line 185_20; ../WebDSL-DataModel.sdf3/#Int line 127_38, 130_36; ../WebDSL-Search.sdf3/#Int line 131_43, 132_48, 159_14">Int</button> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="../WebDSL-Action.sdf3/#Long_186_21" id="Long_49_3" title="a definition with a single reference">Long</a> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ <span class="cons_Lit">"L"</span>
  <button class="modal-open" id="Float_50_3" title="a definition with multiple references" data-urls="#Float line 63_3; ../WebDSL-Action.sdf3/#Float line 187_22; ../WebDSL-Search.sdf3/#Float line 70_57, 128_48, 133_39, 158_14">Float</button> = <span class="cons_Lit">"-"</span>? <a href="#FloatDigits_44_19" id="FloatDigits_50_16" title="a reference to a single-file definition">FloatDigits</a> <a href="#ExponentPart_44_31" id="ExponentPart_50_28" title="a reference to a single-file definition">ExponentPart</a>? [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]?
  <button class="modal-open" id="FloatDigits_51_3" title="a definition with multiple references" data-urls="#FloatDigits line 50_16, 64_3">FloatDigits</button> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]* <span class="cons_Lit">"."</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <button class="modal-open" id="FloatDigits_52_3" title="a definition with multiple references" data-urls="#FloatDigits line 50_16, 64_3">FloatDigits</button> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#ExponentPart_50_28" id="ExponentPart_53_3" title="a definition with a single reference">ExponentPart</a> = [<span class="cons_Regular">e</span><span class="cons_Regular">E</span>] <a href="#SignedInteger_44_44" id="SignedInteger_53_23" title="a reference to a single-file definition">SignedInteger</a>
  <button class="modal-open" id="SignedInteger_54_3" title="a definition with multiple references" data-urls="#SignedInteger line 53_23, 65_3">SignedInteger</button> = [\+\-]? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <button class="modal-open" id="Float_55_3" title="a definition with multiple references" data-urls="#Float line 63_3; ../WebDSL-Action.sdf3/#Float line 187_22; ../WebDSL-Search.sdf3/#Float line 70_57, 128_48, 133_39, 158_14">Float</button> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ {<span class="keyword">reject</span>}
  <button class="modal-open" id="FloatDigits_56_3" title="a definition with multiple references" data-urls="#FloatDigits line 50_16, 64_3">FloatDigits</button> = <span class="cons_Lit">"."</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#Int_44_4" id="Int_60_3" title="a reference to a single-file definition">Int</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#Int_44_4" id="Int_61_3" title="a reference to a single-file definition">Int</a> -/- [<span class="cons_Regular">L</span>]             <span class="layout">// to avoid longs getting parsed as an integer followed by a template call</span>
  <a href="#Int_44_4" id="Int_62_3" title="a reference to a single-file definition">Int</a> -/- [<span class="cons_Regular">e</span><span class="cons_Regular">E</span><span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]        <span class="layout">// to avoid floats getting parsed as an integer followed by a template call</span>
  <a href="#Float_44_13" id="Float_63_3" title="a reference to a single-file definition">Float</a> -/- [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]
  <a href="#FloatDigits_44_19" id="FloatDigits_64_3" title="a reference to a single-file definition">FloatDigits</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#SignedInteger_44_44" id="SignedInteger_65_3" title="a reference to a single-file definition">SignedInteger</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="String_69_3" title="a definition with multiple references" data-urls="../WebDSL-Action.sdf3/#String line 188_28; ../WebDSL-Core.sdf3/#String line 123_34; ../WebDSL-DataModel.sdf3/#String line 128_38, 132_40, 133_50; ../WebDSL-Search.sdf3/#String line 60_48">String</button> <a href="#StringPart_75_27" id="StringPart_69_10" title="a definition with a single reference">StringPart</a> <button class="modal-open" id="StringInterpExp_69_21" title="a definition with multiple references" data-urls="#StringInterpExp line 78_35, 84_3">StringInterpExp</button>

<span class="layout">%% Kernel syntax is required here since we do not want LAYOUT to be parsed between</span>
<span class="layout">%% the first QMLex and StringLex</span>
<span class="keyword">syntax</span>

  <button class="modal-open" id="String_75_3" title="a definition with multiple references" data-urls="../WebDSL-Action.sdf3/#String line 188_28; ../WebDSL-Core.sdf3/#String line 123_34; ../WebDSL-DataModel.sdf3/#String line 128_38, 132_40, 133_50; ../WebDSL-Search.sdf3/#String line 60_48">String</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="String_75_13" title="a definition with no references">String</span></span> = <span class="cons_Lit">"\""</span> <a href="#StringPart_69_10" id="StringPart_75_27" title="a reference to a single-file definition">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

  <a href="#StringPart_75_27" id="StringPart_77_3" title="a definition with a single reference">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="StringValue_77_17" title="a definition with no references">StringValue</span></span> = <a href="#StringLex_112_9" id="StringLex_77_31" title="a reference to a single-file definition">StringLex</a><span class="keyword">-LEX</span>
  <a href="#StringPart_75_27" id="StringPart_78_3" title="a definition with a single reference">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpValue_78_17" title="a definition with no references">InterpValue</span></span> = <span class="cons_Lit">"~"</span> <a href="#StringInterpExp_69_21" id="StringInterpExp_78_35" title="a reference to a single-file definition">StringInterpExp</a><span class="keyword">-CF</span>

  <button class="modal-open" id="StringInterpExp_80_3" title="a definition with multiple references" data-urls="#StringInterpExp line 78_35, 84_3">StringInterpExp</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpSimpleExp_80_22" title="a definition with no references">InterpSimpleExp</span></span> = <a href="#SimpleExp_97_3" id="SimpleExp_80_40" title="a reference to a single-file definition">SimpleExp</a><span class="keyword">-CF</span>

<span class="keyword">context-free restrictions</span>

  <a href="#StringInterpExp_69_21" id="StringInterpExp_84_3" title="a reference to a single-file definition">StringInterpExp</a> -/- [\.\(]

<span class="keyword">context-free sorts</span>

  <span id="OutputShorthand_88_3" title="a definition with no references">OutputShorthand</span>

<span class="keyword">context-free syntax</span>
<span class="layout">%% ~SimpleExp and ~(Exp) shorthand for output template call</span>

  <span id="OutputShorthand_93_3" title="a definition with no references">OutputShorthand</span>.<span class="cons_Constructor"><span id="OutputShorthandSimpleExp_93_19" title="a definition with no references">OutputShorthandSimpleExp</span></span> = <span class="cons_Lit">"~"</span> <a href="#SimpleExp_97_3" id="SimpleExp_93_50" title="a reference to a single-file definition">SimpleExp</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="SimpleExp_97_3" title="a definition with multiple references" data-urls="#SimpleExp line 80_40, 93_50, 108_35">SimpleExp</button>

<span class="keyword">context-free syntax</span>
<span class="layout">%% SimpleExp: specific commonly occuring expressions allowed directly after '~' inside string</span>
<span class="layout">%% allowing all expressions directly after '~' causes too many ambiguities</span>
<span class="layout">%% parentheses expression is used as delimiter for inserting any expression</span>
<span class="layout">%% allowed after '~': var/fieldaccess/thiscall/call/brackets a, a.b, a(), a.b(), (exp)</span>
<span class="layout">%% a '.' after a SimpleExp must be rejected as part of String to avoid amb, e.g. not allowed: "~a."</span>
<span class="layout">%% in these cases, use '()' if a '.' is needed as part of the string,       e.g.     allowed: "~(a)."</span>

  <button class="modal-open" id="SimpleExp_107_3" title="a definition with multiple references" data-urls="#SimpleExp line 80_40, 93_50, 108_35">SimpleExp</button>.<span class="cons_Constructor"><span id="SimpleVar_107_13" title="a definition with no references">SimpleVar</span></span> = <a href="#Id_5_49" id="Id_107_25" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="SimpleExp_108_3" title="a definition with multiple references" data-urls="#SimpleExp line 80_40, 93_50, 108_35">SimpleExp</button>.<span class="cons_Constructor"><span id="SimpleFieldAccess_108_13" title="a definition with no references">SimpleFieldAccess</span></span> = &lt;&lt;<a href="#SimpleExp_97_3" id="SimpleExp_108_35" title="a reference to a single-file definition">SimpleExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PropertyId_5_38" id="PropertyId_108_49" title="a reference to a single-file definition">PropertyId</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <span id="QMLex_112_3" title="a definition with no references">QMLex</span> <button class="modal-open" id="StringLex_112_9" title="a definition with multiple references" data-urls="#StringLex line 77_31, 125_3">StringLex</button> <a href="#StringChar_117_15" id="StringChar_112_19" title="a definition with a single reference">StringChar</a> <button class="modal-open" id="HexPart_112_30" title="a definition with multiple references" data-urls="#HexPart line 121_22, 121_30, 121_38, 121_46">HexPart</button>

<span class="keyword">lexical syntax</span>

  <span id="QMLex_116_3" title="a definition with no references">QMLex</span> = <span class="cons_Lit">"\""</span>
  <button class="modal-open" id="StringLex_117_3" title="a definition with multiple references" data-urls="#StringLex line 77_31, 125_3">StringLex</button> = <a href="#StringChar_112_19" id="StringChar_117_15" title="a reference to a single-file definition">StringChar</a>+
  <a href="#StringChar_117_15" id="StringChar_118_3" title="a definition with a single reference">StringChar</a> = ~[\"\n\~\\]
  <a href="#StringChar_117_15" id="StringChar_119_3" title="a definition with a single reference">StringChar</a> = <span class="cons_Lit">"\\"</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">b</span><span class="cons_Regular">t</span><span class="cons_Regular">n</span><span class="cons_Regular">f</span><span class="cons_Regular">r</span>\'\"\\\~]
  <button class="modal-open" id="HexPart_120_3" title="a definition with multiple references" data-urls="#HexPart line 121_22, 121_30, 121_38, 121_46">HexPart</button> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span>]
  <a href="#StringChar_117_15" id="StringChar_121_3" title="a definition with a single reference">StringChar</a> = <span class="cons_Lit">"\\u"</span> <a href="#HexPart_112_30" id="HexPart_121_22" title="a reference to a single-file definition">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_30" title="a reference to a single-file definition">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_38" title="a reference to a single-file definition">HexPart</a> <a href="#HexPart_112_30" id="HexPart_121_46" title="a reference to a single-file definition">HexPart</a>

<span class="keyword">lexical restrictions</span>

  <a href="#StringLex_112_9" id="StringLex_125_3" title="a reference to a single-file definition">StringLex</a> -/- ~[\"\n\~]

<span class="keyword">lexical sorts</span>

  <a href="#InsideComment_134_21" id="InsideComment_129_3" title="a definition with a single reference">InsideComment</a> <button class="modal-open" id="CommentChar_129_17" title="a definition with multiple references" data-urls="#CommentChar line 136_20, 143_3">CommentChar</button> <a href="#NewLineEOF_133_30" id="NewLineEOF_129_29" title="a definition with a single reference">NewLineEOF</a> <button class="modal-open" id="EOF_129_40" title="a definition with multiple references" data-urls="#EOF line 139_16, 144_3">EOF</button>

<span class="keyword">lexical syntax</span>
  <span class="keyword">LAYOUT</span>     = [\ \t\n\r]
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"//"</span> ~[\n\r]* <a href="#NewLineEOF_129_29" id="NewLineEOF_133_30" title="a reference to a single-file definition">NewLineEOF</a>
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"/*"</span> <a href="#InsideComment_129_3" id="InsideComment_134_21" title="a reference to a single-file definition">InsideComment</a>* <span class="cons_Lit">"*/"</span>
  <a href="#InsideComment_134_21" id="InsideComment_135_3" title="a definition with a single reference">InsideComment</a>  = ~[\*]
  <a href="#InsideComment_134_21" id="InsideComment_136_3" title="a definition with a single reference">InsideComment</a>  = <a href="#CommentChar_129_17" id="CommentChar_136_20" title="a reference to a single-file definition">CommentChar</a>
  <button class="modal-open" id="CommentChar_137_3" title="a definition with multiple references" data-urls="#CommentChar line 136_20, 143_3">CommentChar</button>    = [\*]
  <a href="#NewLineEOF_133_30" id="NewLineEOF_138_3" title="a definition with a single reference">NewLineEOF</a> = [\n\r]
  <a href="#NewLineEOF_133_30" id="NewLineEOF_139_3" title="a definition with a single reference">NewLineEOF</a> = <a href="#EOF_129_40" id="EOF_139_16" title="a reference to a single-file definition">EOF</a>
  <button class="modal-open" id="EOF_140_3" title="a definition with multiple references" data-urls="#EOF line 139_16, 144_3">EOF</button>        =

<span class="keyword">lexical restrictions</span>
  <a href="#CommentChar_129_17" id="CommentChar_143_3" title="a reference to a single-file definition">CommentChar</a> -/- [\/]
  <a href="#EOF_129_40" id="EOF_144_3" title="a reference to a single-file definition">EOF</a>         -/- ~[]

<span class="keyword">context-free restrictions</span>

  <span class="keyword">LAYOUT</span>? -/- [\ \t\n\r]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\/]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\*]
  <a href="#SectionName_5_70" id="SectionName_151_3" title="a reference to a single-file definition">SectionName</a> -/- ~[\n\r]

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="Word_155_3" title="a definition with multiple references" data-urls="#Word line 163_3; ../WebDSL-Core.sdf3/#Word line 112_20, 115_13">Word</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="Word_159_3" title="a definition with multiple references" data-urls="#Word line 163_3; ../WebDSL-Core.sdf3/#Word line 112_20, 115_13">Word</button> = ~[\ \t\n\r\}]+

<span class="keyword">lexical restrictions</span>

  <a href="#Word_155_3" id="Word_163_3" title="a reference to a single-file definition">Word</a> -/- ~[\ \t\n\r\}]

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="SimpleSortLex_167_3" title="a definition with multiple references" data-urls="#SimpleSortLex line 177_3; ../WebDSL-Action.sdf3/#SimpleSortLex line 214_26; ../WebDSL-Search.sdf3/#SimpleSortLex line 172_39, 248_28">SimpleSortLex</button> <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_167_17" title="a definition with a single reference">GenericSortLex</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="SimpleSortLex_171_3" title="a definition with multiple references" data-urls="#SimpleSortLex line 177_3; ../WebDSL-Action.sdf3/#SimpleSortLex line 214_26; ../WebDSL-Search.sdf3/#SimpleSortLex line 172_39, 248_28">SimpleSortLex</button> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_172_3" title="a definition with a single reference">GenericSortLex</a> = <a href="#Id_5_49" id="Id_172_20" title="a reference to a single-file definition">Id</a>
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_15_24" id="GenericSortLex_173_3" title="a definition with a single reference">GenericSortLex</a> = <span class="cons_Lit">"Ref"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#SimpleSortLex_167_3" id="SimpleSortLex_177_3" title="a reference to a single-file definition">SimpleSortLex</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
