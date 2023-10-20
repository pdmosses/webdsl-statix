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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../HQL.sdf3/#WebDSL-Lexical_39_53" id="WebDSL-Lexical_7_21" title="Referenced at ../HQL.sdf3 line 6; ../WebDSL-AccessControl.sdf3 line 7; ../WebDSL-Action.sdf3 line 6; ../WebDSL-Ajax.sdf3 line 5; ../WebDSL-Attributes.sdf3 line 5; ../WebDSL-Core.sdf3 line 6; ../WebDSL-DataModel.sdf3 line 6; ../WebDSL-DataValidation.sdf3 line 5; ../WebDSL-Dispatch.sdf3 line 6; ../WebDSL-EntityDerive.sdf3 line 6; ../WebDSL-Exception.sdf3 line 6; ../WebDSL-Expand.sdf3 line 5; ../WebDSL-Generated.sdf3 line 5; ../WebDSL-Native.sdf3 line 5; ../WebDSL-Prefetch.sdf3 line 6; ../WebDSL-Regex.sdf3 line 5; ../WebDSL-Search.sdf3 line 6; ../WebDSL-Service.sdf3 line 6; ../webdsl-statix.sdf3 line 17; ../WebDSL-Test.sdf3 line 5; ../WebDSL-Type.sdf3 line 6; ../WebDSL-UI.sdf3 line 7">WebDSL-Lexical</a>

<span class="keyword">lexical sorts</span>

  <a href="#QId_155_158" id="QId_40_43" title="Referenced at line 10; ../WebDSL-Core.sdf3 line 54, 60; ../WebDSL-Native.sdf3 line 14, 20, 49, 56">QId</a> <span id="TemplateId_44_54" title="Not referenced locally, nor via imports">TemplateId</span> <a href="#VarId_256_261" id="VarId_55_60" title="Referenced at line 13; ../WebDSL-Core.sdf3 line 32, 36">VarId</a> <span id="FAVarId_61_68" title="Not referenced locally, nor via imports">FAVarId</span> <span id="FunId_69_74" title="Not referenced locally, nor via imports">FunId</span> <a href="#PropertyId_2848_2858" id="PropertyId_75_85" title="Referenced at line 108; ../WebDSL-Ajax.sdf3 line 108; ../WebDSL-Prefetch.sdf3 line 66">PropertyId</a> <a href="#Id_144_146" id="Id_86_88" title="Referenced at line 9, 10, 11, 12, 14, 15, 38, 107, 172; ../WebDSL-AccessControl.sdf3 line 37, 42, 46, 51, 54, 72, 78, 84, 92, 101, 106; ../WebDSL-Action.sdf3 line 125, 221, 251, 260, 399; ../WebDSL-Ajax.sdf3 line 64, 67, 70, 77, 78, 79, 84, 107; ../WebDSL-Attributes.sdf3 line 16, 34; ../WebDSL-Core.sdf3 line 119, 123; ../WebDSL-DataModel.sdf3 line 15, 20, 25, 31, 36, 117, 118, 119, 121, 122, 131, 141; ../WebDSL-DataValidation.sdf3 line 16, 27, 32; ../WebDSL-Dispatch.sdf3 line 24, 27, 46, 47; ../WebDSL-EntityDerive.sdf3 line 18, 21, 26, 37; ../WebDSL-Expand.sdf3 line 18, 21, 24, 27, 30, 33, 34, 39, 42, 60, 63, 126; ../WebDSL-Generated.sdf3 line 20; ../WebDSL-Native.sdf3 line 25, 27, 38, 58, 61, 71; ../WebDSL-Prefetch.sdf3 line 17, 20, 29, 37; ../WebDSL-Regex.sdf3 line 14; ../WebDSL-Search.sdf3 line 21, 48, 51, 54, 60, 96, 108, 111, 120, 123, 126, 127, 129, 147, 157, 299, 301, 357, 361, 362; ../WebDSL-Service.sdf3 line 17, 20, 26, 27; ../WebDSL-Test.sdf3 line 11; ../WebDSL-Type.sdf3 line 17; ../WebDSL-UI.sdf3 line 28, 40, 52, 444, 465, 467, 470, 471, 472, 473, 504">Id</a> <a href="#PageId_829_835" id="PageId_89_95" title="Referenced at line 39; ../WebDSL-AccessControl.sdf3 line 22; ../WebDSL-UI.sdf3 line 42, 292">PageId</a> <a href="#ExtendedId_560_570" id="ExtendedId_96_106" title="Referenced at line 27; ../WebDSL-UI.sdf3 line 398">ExtendedId</a> <a href="#SectionName_3651_3662" id="SectionName_107_118" title="Referenced at line 151; ../WebDSL-Core.sdf3 line 49">SectionName</a>

<span class="keyword">lexical syntax</span>

  <a href="#QId_155_158" id="QId_138_141" title="Referenced at line 10; ../WebDSL-Core.sdf3 line 54, 60; ../WebDSL-Native.sdf3 line 14, 20, 49, 56">QId</a> = <a href="#Id_86_88" id="Id_144_146" title="Defined at line 5, 16">Id</a>
  <a href="#QId_155_158" id="QId_149_152" title="Referenced at line 10; ../WebDSL-Core.sdf3 line 54, 60; ../WebDSL-Native.sdf3 line 14, 20, 49, 56">QId</a> = <a href="#QId_40_43" id="QId_155_158" title="Defined at line 5, 9, 10">QId</a> <span class="cons_Lit">"."</span> <a href="#Id_86_88" id="Id_163_165" title="Defined at line 5, 16">Id</a>
  <span id="TemplateId_168_178" title="Not referenced locally, nor via imports">TemplateId</span> = <a href="#Id_86_88" id="Id_181_183" title="Defined at line 5, 16">Id</a> <span class="layout">%% hook for reject rules on templatecall names</span>
  <a href="#VarId_256_261" id="VarId_233_238" title="Referenced at line 13; ../WebDSL-Core.sdf3 line 32, 36">VarId</a> = <a href="#Id_86_88" id="Id_241_243" title="Defined at line 5, 16">Id</a>
  <span id="FAVarId_246_253" title="Not referenced locally, nor via imports">FAVarId</span> = <a href="#VarId_55_60" id="VarId_256_261" title="Defined at line 5, 12">VarId</a>
  <span id="FunId_264_269" title="Not referenced locally, nor via imports">FunId</span> = <a href="#Id_86_88" id="Id_272_274" title="Defined at line 5, 16">Id</a>
  <a href="#PropertyId_2848_2858" id="PropertyId_277_287" title="Referenced at line 108; ../WebDSL-Ajax.sdf3 line 108; ../WebDSL-Prefetch.sdf3 line 66">PropertyId</a> = <a href="#Id_86_88" id="Id_290_292" title="Defined at line 5, 16">Id</a>
  <a href="#Id_144_146" id="Id_295_297" title="Referenced at line 9, 10, 11, 12, 14, 15, 38, 107, 172; ../WebDSL-AccessControl.sdf3 line 37, 42, 46, 51, 54, 72, 78, 84, 92, 101, 106; ../WebDSL-Action.sdf3 line 125, 221, 251, 260, 399; ../WebDSL-Ajax.sdf3 line 64, 67, 70, 77, 78, 79, 84, 107; ../WebDSL-Attributes.sdf3 line 16, 34; ../WebDSL-Core.sdf3 line 119, 123; ../WebDSL-DataModel.sdf3 line 15, 20, 25, 31, 36, 117, 118, 119, 121, 122, 131, 141; ../WebDSL-DataValidation.sdf3 line 16, 27, 32; ../WebDSL-Dispatch.sdf3 line 24, 27, 46, 47; ../WebDSL-EntityDerive.sdf3 line 18, 21, 26, 37; ../WebDSL-Expand.sdf3 line 18, 21, 24, 27, 30, 33, 34, 39, 42, 60, 63, 126; ../WebDSL-Generated.sdf3 line 20; ../WebDSL-Native.sdf3 line 25, 27, 38, 58, 61, 71; ../WebDSL-Prefetch.sdf3 line 17, 20, 29, 37; ../WebDSL-Regex.sdf3 line 14; ../WebDSL-Search.sdf3 line 21, 48, 51, 54, 60, 96, 108, 111, 120, 123, 126, 127, 129, 147, 157, 299, 301, 357, 361, 362; ../WebDSL-Service.sdf3 line 17, 20, 26, 27; ../WebDSL-Test.sdf3 line 11; ../WebDSL-Type.sdf3 line 17; ../WebDSL-UI.sdf3 line 28, 40, 52, 444, 465, 467, 470, 471, 472, 473, 504">Id</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="#PageId_829_835" id="PageId_326_332" title="Referenced at line 39; ../WebDSL-AccessControl.sdf3 line 22; ../WebDSL-UI.sdf3 line 42, 292">PageId</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]*
  <a href="#ExtendedId_560_570" id="ExtendedId_363_373" title="Referenced at line 27; ../WebDSL-UI.sdf3 line 398">ExtendedId</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\.] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_\.]*
  <a href="#SectionName_3651_3662" id="SectionName_413_424" title="Referenced at line 151; ../WebDSL-Core.sdf3 line 49">SectionName</a> = ~[\n\r]*

<span class="keyword">context-free sorts</span>

  <a href="#ModuleName_746_756" id="ModuleName_459_469" title="Referenced at line 34, 40; ../WebDSL-Core.sdf3 line 65, 71">ModuleName</a> <a href="#ModulePart_697_707" id="ModulePart_470_480" title="Referenced at line 33">ModulePart</a> <span id="ImportName_481_491" title="Not referenced locally, nor via imports">ImportName</span> <a href="#OptWildcardImport_760_777" id="OptWildcardImport_492_509" title="Referenced at line 34">OptWildcardImport</a>

<span class="keyword">context-free syntax</span>

  <a href="#ModulePart_697_707" id="ModulePart_534_544" title="Referenced at line 33">ModulePart</a>.<span class="cons_Constructor"><span id="ModulePart_545_555" title="Not referenced locally, nor via imports">ModulePart</span></span> = &lt;&lt;<a href="#ExtendedId_96_106" id="ExtendedId_560_570" title="Defined at line 5, 18">ExtendedId</a>&gt;&gt;
  <a href="#OptWildcardImport_760_777" id="OptWildcardImport_575_592" title="Referenced at line 34">OptWildcardImport</a>.<span class="cons_Constructor"><span id="WildcardImport_593_607" title="Not referenced locally, nor via imports">WildcardImport</span></span> = <span class="cons_Lit">"/-"</span>
  <a href="#OptWildcardImport_760_777" id="OptWildcardImport_617_634" title="Referenced at line 34">OptWildcardImport</a>.<span class="cons_Constructor"><span id="NoWildcardImport_635_651" title="Not referenced locally, nor via imports">NoWildcardImport</span></span> = &lt;&gt;

<span class="keyword">syntax</span>

  <a href="#ModuleName_746_756" id="ModuleName_668_678" title="Referenced at line 34, 40; ../WebDSL-Core.sdf3 line 65, 71">ModuleName</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ModuleName_682_692" title="Not referenced locally, nor via imports">ModuleName</span></span> = { <a href="#ModulePart_470_480" id="ModulePart_697_707" title="Defined at line 23, 27">ModulePart</a><span class="keyword">-CF</span> <span class="cons_Lit">"/"</span>}+
  <span id="ImportName_719_729" title="Not referenced locally, nor via imports">ImportName</span><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="ImportName_733_743" title="Not referenced locally, nor via imports">ImportName</span></span> = <a href="#ModuleName_459_469" id="ModuleName_746_756" title="Defined at line 23, 33">ModuleName</a><span class="keyword">-CF</span> <a href="#OptWildcardImport_492_509" id="OptWildcardImport_760_777" title="Defined at line 23, 28, 29">OptWildcardImport</a><span class="keyword">-CF</span>

<span class="keyword">lexical restrictions</span>

  <a href="#Id_86_88" id="Id_806_808" title="Defined at line 5, 16">Id</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <a href="#PageId_89_95" id="PageId_829_835" title="Defined at line 5, 17">PageId</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\-]
  <a href="#ModuleName_459_469" id="ModuleName_858_868" title="Defined at line 23, 33">ModuleName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\/]

<span class="keyword">lexical sorts</span>

   <a href="#Int_1282_1285" id="Int_906_909" title="Referenced at line 60, 61, 62; ../WebDSL-Action.sdf3 line 185; ../WebDSL-DataModel.sdf3 line 127, 130; ../WebDSL-Search.sdf3 line 131, 132, 159">Int</a> <a href="../WebDSL-Action.sdf3/#Long_3628_3632" id="Long_910_914" title="Referenced at ../WebDSL-Action.sdf3 line 186">Long</a> <a href="#Float_1501_1506" id="Float_915_920" title="Referenced at line 63; ../WebDSL-Action.sdf3 line 187; ../WebDSL-Search.sdf3 line 70, 128, 133, 158">Float</a> <a href="#FloatDigits_1037_1048" id="FloatDigits_921_932" title="Referenced at line 50, 64">FloatDigits</a> <a href="#ExponentPart_1049_1061" id="ExponentPart_933_945" title="Referenced at line 50">ExponentPart</a> <a href="#SignedInteger_1150_1163" id="SignedInteger_946_959" title="Referenced at line 53, 65">SignedInteger</a>

<span class="keyword">lexical syntax</span>

  <a href="#Int_1282_1285" id="Int_979_982" title="Referenced at line 60, 61, 62; ../WebDSL-Action.sdf3 line 185; ../WebDSL-DataModel.sdf3 line 127, 130; ../WebDSL-Search.sdf3 line 131, 132, 159">Int</a> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="../WebDSL-Action.sdf3/#Long_3628_3632" id="Long_999_1003" title="Referenced at ../WebDSL-Action.sdf3 line 186">Long</a> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ <span class="cons_Lit">"L"</span>
  <a href="#Float_1501_1506" id="Float_1024_1029" title="Referenced at line 63; ../WebDSL-Action.sdf3 line 187; ../WebDSL-Search.sdf3 line 70, 128, 133, 158">Float</a> = <span class="cons_Lit">"-"</span>? <a href="#FloatDigits_921_932" id="FloatDigits_1037_1048" title="Defined at line 44, 51, 52, 56">FloatDigits</a> <a href="#ExponentPart_933_945" id="ExponentPart_1049_1061" title="Defined at line 44, 53">ExponentPart</a>? [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]?
  <a href="#FloatDigits_1037_1048" id="FloatDigits_1073_1084" title="Referenced at line 50, 64">FloatDigits</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]* <span class="cons_Lit">"."</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#FloatDigits_1037_1048" id="FloatDigits_1107_1118" title="Referenced at line 50, 64">FloatDigits</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#ExponentPart_1049_1061" id="ExponentPart_1130_1142" title="Referenced at line 50">ExponentPart</a> = [<span class="cons_Regular">e</span><span class="cons_Regular">E</span>] <a href="#SignedInteger_946_959" id="SignedInteger_1150_1163" title="Defined at line 44, 54">SignedInteger</a>
  <a href="#SignedInteger_1150_1163" id="SignedInteger_1166_1179" title="Referenced at line 53, 65">SignedInteger</a> = [\+\-]? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#Float_1501_1506" id="Float_1199_1204" title="Referenced at line 63; ../WebDSL-Action.sdf3 line 187; ../WebDSL-Search.sdf3 line 70, 128, 133, 158">Float</a> = <span class="cons_Lit">"-"</span>? [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+ {<span class="keyword">reject</span>}
  <a href="#FloatDigits_1037_1048" id="FloatDigits_1230_1241" title="Referenced at line 50, 64">FloatDigits</a> = <span class="cons_Lit">"."</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#Int_906_909" id="Int_1282_1285" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#Int_906_909" id="Int_1298_1301" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">L</span>]             <span class="layout">// to avoid longs getting parsed as an integer followed by a template call</span>
  <a href="#Int_906_909" id="Int_1399_1402" title="Defined at line 44, 48">Int</a> -/- [<span class="cons_Regular">e</span><span class="cons_Regular">E</span><span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]        <span class="layout">// to avoid floats getting parsed as an integer followed by a template call</span>
  <a href="#Float_915_920" id="Float_1501_1506" title="Defined at line 44, 50, 55">Float</a> -/- [<span class="cons_Regular">f</span><span class="cons_Regular">F</span><span class="cons_Regular">d</span><span class="cons_Regular">D</span>]
  <a href="#FloatDigits_921_932" id="FloatDigits_1520_1531" title="Defined at line 44, 51, 52, 56">FloatDigits</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#SignedInteger_946_959" id="SignedInteger_1544_1557" title="Defined at line 44, 54">SignedInteger</a> -/- [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <a href="../WebDSL-Action.sdf3/#String_3687_3693" id="String_1591_1597" title="Referenced at ../WebDSL-Action.sdf3 line 188; ../WebDSL-Core.sdf3 line 123; ../WebDSL-DataModel.sdf3 line 128, 132, 133; ../WebDSL-Search.sdf3 line 60">String</a> <a href="#StringPart_1776_1786" id="StringPart_1598_1608" title="Referenced at line 75">StringPart</a> <a href="#StringInterpExp_1875_1890" id="StringInterpExp_1609_1624" title="Referenced at line 78, 84">StringInterpExp</a>

<span class="layout">%% Kernel syntax is required here since we do not want LAYOUT to be parsed between</span>
<span class="layout">%% the first QMLex and StringLex</span>
<span class="keyword">syntax</span>

  <a href="../WebDSL-Action.sdf3/#String_3687_3693" id="String_1752_1758" title="Referenced at ../WebDSL-Action.sdf3 line 188; ../WebDSL-Core.sdf3 line 123; ../WebDSL-DataModel.sdf3 line 128, 132, 133; ../WebDSL-Search.sdf3 line 60">String</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="String_1762_1768" title="Not referenced locally, nor via imports">String</span></span> = <span class="cons_Lit">"\""</span> <a href="#StringPart_1598_1608" id="StringPart_1776_1786" title="Defined at line 69, 77, 78">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

  <a href="#StringPart_1776_1786" id="StringPart_1799_1809" title="Referenced at line 75">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="StringValue_1813_1824" title="Not referenced locally, nor via imports">StringValue</span></span> = <a href="#StringLex_2885_2894" id="StringLex_1827_1836" title="Defined at line 112, 117">StringLex</a><span class="keyword">-LEX</span>
  <a href="#StringPart_1776_1786" id="StringPart_1843_1853" title="Referenced at line 75">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpValue_1857_1868" title="Not referenced locally, nor via imports">InterpValue</span></span> = <span class="cons_Lit">"~"</span> <a href="#StringInterpExp_1609_1624" id="StringInterpExp_1875_1890" title="Defined at line 69, 80">StringInterpExp</a><span class="keyword">-CF</span>

  <a href="#StringInterpExp_1875_1890" id="StringInterpExp_1897_1912" title="Referenced at line 78, 84">StringInterpExp</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpSimpleExp_1916_1931" title="Not referenced locally, nor via imports">InterpSimpleExp</span></span> = <a href="#SimpleExp_2207_2216" id="SimpleExp_1934_1943" title="Defined at line 97, 107, 108">SimpleExp</a><span class="keyword">-CF</span>

<span class="keyword">context-free restrictions</span>

  <a href="#StringInterpExp_1609_1624" id="StringInterpExp_1977_1992" title="Defined at line 69, 80">StringInterpExp</a> -/- [\.\(]

<span class="keyword">context-free sorts</span>

  <span id="OutputShorthand_2027_2042" title="Not referenced locally, nor via imports">OutputShorthand</span>

<span class="keyword">context-free syntax</span>
<span class="layout">%% ~SimpleExp and ~(Exp) shorthand for output template call</span>

  <span id="OutputShorthand_2127_2142" title="Not referenced locally, nor via imports">OutputShorthand</span>.<span class="cons_Constructor"><span id="OutputShorthandSimpleExp_2143_2167" title="Not referenced locally, nor via imports">OutputShorthandSimpleExp</span></span> = <span class="cons_Lit">"~"</span> <a href="#SimpleExp_2207_2216" id="SimpleExp_2174_2183" title="Defined at line 97, 107, 108">SimpleExp</a>

<span class="keyword">context-free sorts</span>

  <a href="#SimpleExp_1934_1943" id="SimpleExp_2207_2216" title="Referenced at line 80, 93, 108">SimpleExp</a>

<span class="keyword">context-free syntax</span>
<span class="layout">%% SimpleExp: specific commonly occuring expressions allowed directly after '~' inside string</span>
<span class="layout">%% allowing all expressions directly after '~' causes too many ambiguities</span>
<span class="layout">%% parentheses expression is used as delimiter for inserting any expression</span>
<span class="layout">%% allowed after '~': var/fieldaccess/thiscall/call/brackets a, a.b, a(), a.b(), (exp)</span>
<span class="layout">%% a '.' after a SimpleExp must be rejected as part of String to avoid amb, e.g. not allowed: "~a."</span>
<span class="layout">%% in these cases, use '()' if a '.' is needed as part of the string,       e.g.     allowed: "~(a)."</span>

  <a href="#SimpleExp_1934_1943" id="SimpleExp_2775_2784" title="Referenced at line 80, 93, 108">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleVar_2785_2794" title="Not referenced locally, nor via imports">SimpleVar</span></span> = <a href="#Id_86_88" id="Id_2797_2799" title="Defined at line 5, 16">Id</a>
  <a href="#SimpleExp_1934_1943" id="SimpleExp_2802_2811" title="Referenced at line 80, 93, 108">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleFieldAccess_2812_2829" title="Not referenced locally, nor via imports">SimpleFieldAccess</span></span> = &lt;&lt;<a href="#SimpleExp_2207_2216" id="SimpleExp_2834_2843" title="Defined at line 97, 107, 108">SimpleExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PropertyId_75_85" id="PropertyId_2848_2858" title="Defined at line 5, 15">PropertyId</a>&gt;&gt;

<span class="keyword">lexical sorts</span>

  <span id="QMLex_2879_2884" title="Not referenced locally, nor via imports">QMLex</span> <a href="#StringLex_1827_1836" id="StringLex_2885_2894" title="Referenced at line 77, 125">StringLex</a> <a href="#StringChar_2960_2970" id="StringChar_2895_2905" title="Referenced at line 117">StringChar</a> <a href="#HexPart_3083_3090" id="HexPart_2906_2913" title="Referenced at line 121">HexPart</a>

<span class="keyword">lexical syntax</span>

  <span id="QMLex_2933_2938" title="Not referenced locally, nor via imports">QMLex</span> = <span class="cons_Lit">"\""</span>
  <a href="#StringLex_1827_1836" id="StringLex_2948_2957" title="Referenced at line 77, 125">StringLex</a> = <a href="#StringChar_2895_2905" id="StringChar_2960_2970" title="Defined at line 112, 118, 119, 121">StringChar</a>+
  <a href="#StringChar_2960_2970" id="StringChar_2974_2984" title="Referenced at line 117">StringChar</a> = ~[\"\n\~\\]
  <a href="#StringChar_2960_2970" id="StringChar_3001_3011" title="Referenced at line 117">StringChar</a> = <span class="cons_Lit">"\\"</span> [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">b</span><span class="cons_Regular">t</span><span class="cons_Regular">n</span><span class="cons_Regular">f</span><span class="cons_Regular">r</span>\'\"\\\~]
  <a href="#HexPart_3083_3090" id="HexPart_3040_3047" title="Referenced at line 121">HexPart</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span>]
  <a href="#StringChar_2960_2970" id="StringChar_3064_3074" title="Referenced at line 117">StringChar</a> = <span class="cons_Lit">"\\u"</span> <a href="#HexPart_2906_2913" id="HexPart_3083_3090" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_2906_2913" id="HexPart_3091_3098" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_2906_2913" id="HexPart_3099_3106" title="Defined at line 112, 120">HexPart</a> <a href="#HexPart_2906_2913" id="HexPart_3107_3114" title="Defined at line 112, 120">HexPart</a>

<span class="keyword">lexical restrictions</span>

  <a href="#StringLex_2885_2894" id="StringLex_3140_3149" title="Defined at line 112, 117">StringLex</a> -/- ~[\"\n\~]

<span class="keyword">lexical sorts</span>

  <a href="#InsideComment_3325_3338" id="InsideComment_3182_3195" title="Referenced at line 134">InsideComment</a> <a href="#CommentChar_3389_3400" id="CommentChar_3196_3207" title="Referenced at line 136, 143">CommentChar</a> <a href="#NewLineEOF_3294_3304" id="NewLineEOF_3208_3218" title="Referenced at line 133">NewLineEOF</a> <a href="#EOF_3462_3465" id="EOF_3219_3222" title="Referenced at line 139, 144">EOF</a>

<span class="keyword">lexical syntax</span>
  <span class="keyword">LAYOUT</span>     = [\ \t\n\r]
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"//"</span> ~[\n\r]* <a href="#NewLineEOF_3208_3218" id="NewLineEOF_3294_3304" title="Defined at line 129, 138, 139">NewLineEOF</a>
  <span class="keyword">LAYOUT</span>     = <span class="cons_Lit">"/*"</span> <a href="#InsideComment_3182_3195" id="InsideComment_3325_3338" title="Defined at line 129, 135, 136">InsideComment</a>* <span class="cons_Lit">"*/"</span>
  <a href="#InsideComment_3325_3338" id="InsideComment_3347_3360" title="Referenced at line 134">InsideComment</a>  = ~[\*]
  <a href="#InsideComment_3325_3338" id="InsideComment_3372_3385" title="Referenced at line 134">InsideComment</a>  = <a href="#CommentChar_3196_3207" id="CommentChar_3389_3400" title="Defined at line 129, 137">CommentChar</a>
  <a href="#CommentChar_3389_3400" id="CommentChar_3403_3414" title="Referenced at line 136, 143">CommentChar</a>    = [\*]
  <a href="#NewLineEOF_3294_3304" id="NewLineEOF_3427_3437" title="Referenced at line 133">NewLineEOF</a> = [\n\r]
  <a href="#NewLineEOF_3294_3304" id="NewLineEOF_3449_3459" title="Referenced at line 133">NewLineEOF</a> = <a href="#EOF_3219_3222" id="EOF_3462_3465" title="Defined at line 129, 140">EOF</a>
  <a href="#EOF_3462_3465" id="EOF_3468_3471" title="Referenced at line 139, 144">EOF</a>        =

<span class="keyword">lexical restrictions</span>
  <a href="#CommentChar_3196_3207" id="CommentChar_3505_3516" title="Defined at line 129, 137">CommentChar</a> -/- [\/]
  <a href="#EOF_3219_3222" id="EOF_3528_3531" title="Defined at line 129, 140">EOF</a>         -/- ~[]

<span class="keyword">context-free restrictions</span>

  <span class="keyword">LAYOUT</span>? -/- [\ \t\n\r]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\/]
  <span class="keyword">LAYOUT</span>? -/- [\/].[\*]
  <a href="#SectionName_107_118" id="SectionName_3651_3662" title="Defined at line 5, 19">SectionName</a> -/- ~[\n\r]

<span class="keyword">lexical sorts</span>

  <a href="#Word_3764_3768" id="Word_3693_3697" title="Referenced at line 163; ../WebDSL-Core.sdf3 line 112, 115">Word</a>

<span class="keyword">lexical syntax</span>

  <a href="#Word_3764_3768" id="Word_3717_3721" title="Referenced at line 163; ../WebDSL-Core.sdf3 line 112, 115">Word</a> = ~[\ \t\n\r\}]+

<span class="keyword">lexical restrictions</span>

  <a href="#Word_3693_3697" id="Word_3764_3768" title="Defined at line 155, 159">Word</a> -/- ~[\ \t\n\r\}]

<span class="keyword">lexical sorts</span>

  <a href="#SimpleSortLex_3971_3984" id="SimpleSortLex_3805_3818" title="Referenced at line 177; ../WebDSL-Action.sdf3 line 214; ../WebDSL-Search.sdf3 line 172, 248">SimpleSortLex</a> <a href="../WebDSL-Core.sdf3/#GenericSortLex_292_306" id="GenericSortLex_3819_3833" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#SimpleSortLex_3971_3984" id="SimpleSortLex_3853_3866" title="Referenced at line 177; ../WebDSL-Action.sdf3 line 214; ../WebDSL-Search.sdf3 line 172, 248">SimpleSortLex</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_292_306" id="GenericSortLex_3892_3906" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a> = <a href="#Id_86_88" id="Id_3909_3911" title="Defined at line 5, 16">Id</a>
  <a href="../WebDSL-Core.sdf3/#GenericSortLex_292_306" id="GenericSortLex_3914_3928" title="Referenced at ../WebDSL-Core.sdf3 line 15">GenericSortLex</a> = <span class="cons_Lit">"Ref"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#SimpleSortLex_3805_3818" id="SimpleSortLex_3971_3984" title="Defined at line 167, 171">SimpleSortLex</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>