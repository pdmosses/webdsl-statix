---
title: WebDSL-Regex-sig.stx
hide:
  - toc
---

# `WebDSL-Regex-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Regex-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Regex-sig.stx "The source file on GitHub"

<div class="stx"><table class="highlighttable"><tbody><tr><td class="linenos"><div class="linenodiv"><pre><span></span>1
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
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx/#signatures/WebDSL-Regex-sig_20_3" id="signatures/WebDSL-Regex-sig_1_8" title="Referenced at ../webdsl-statix-sig.stx line 20"><span class="token sort_Id">signatures/WebDSL-Regex-sig</span></a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx/#signatures/WebDSL-Action-sig_1_8" id="signatures/WebDSL-Action-sig_4_3" title="Defined at ../WebDSL-Action-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Action-sig</span></a>
  <a href="../WebDSL-Lexical-sig.stx/#signatures/WebDSL-Lexical-sig_1_8" id="signatures/WebDSL-Lexical-sig_5_3" title="Defined at ../WebDSL-Lexical-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-Lexical-sig</span></a>
  <a href="../WebDSL-DataModel-sig.stx/#signatures/WebDSL-DataModel-sig_1_8" id="signatures/WebDSL-DataModel-sig_6_3" title="Defined at ../WebDSL-DataModel-sig.stx line 1"><span class="token sort_Id">signatures/WebDSL-DataModel-sig</span></a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <span class="cons_SortDecl"><a href="#Pattern_64_21" id="Pattern_11_5" title="Referenced at line 64, 109, 110, 111, 133, 134, 135, 136, 137, 138, 139, 140"><span class="token sort_Id">Pattern</span></a></span>
    <span class="cons_SortDecl"><a href="#RegexExp_65_22" id="RegexExp_12_5" title="Referenced at line 65, 108, 109"><span class="token sort_Id">RegexExp</span></a></span>
    <span class="cons_SortDecl"><a href="#Branche_66_21" id="Branche_13_5" title="Referenced at line 66, 110, 112"><span class="token sort_Id">Branche</span></a></span>
    <span class="cons_SortDecl"><a href="#Piece_67_19" id="Piece_14_5" title="Referenced at line 67, 112, 113, 114"><span class="token sort_Id">Piece</span></a></span>
    <span class="cons_SortDecl"><a href="#Quantifier_68_24" id="Quantifier_15_5" title="Referenced at line 68, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132"><span class="token sort_Id">Quantifier</span></a></span>
    <span class="cons_SortDecl"><a href="#Atom_69_18" id="Atom_16_5" title="Referenced at line 69, 113, 114, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148"><span class="token sort_Id">Atom</span></a></span>
    <span class="cons_SortDecl"><a href="#CharacterClass_70_28" id="CharacterClass_17_5" title="Referenced at line 70, 145, 149, 150, 154"><span class="token sort_Id">CharacterClass</span></a></span>
    <span class="cons_SortDecl"><a href="#BracketItem_71_25" id="BracketItem_18_5" title="Referenced at line 71, 149, 150, 151, 154, 155, 156"><span class="token sort_Id">BracketItem</span></a></span>
    <span class="cons_SortDecl"><a href="#BracketLiteralOrBracketCharacter_72_46" id="BracketLiteralOrBracketCharacter_19_5" title="Referenced at line 72, 151, 152, 153"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span>
    <span class="cons_SortDecl"><a href="#ClassKeyword_73_26" id="ClassKeyword_20_5" title="Referenced at line 73, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176"><span class="token sort_Id">ClassKeyword</span></a></span>
    <span class="cons_SortAlias"><a href="#BracketLiteral_152_55" id="BracketLiteral_21_5" title="Referenced at line 152, 155"><span class="token sort_Id">BracketLiteral</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#AtomLiteral_146_19" id="AtomLiteral_22_5" title="Referenced at line 146"><span class="token sort_Id">AtomLiteral</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#AllChars_148_18" id="AllChars_23_5" title="Referenced at line 148"><span class="token sort_Id">AllChars</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><a href="#BracketCharacter_74_30" id="BracketCharacter_24_5" title="Referenced at line 74, 153, 156, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 254"><span class="token sort_Id">BracketCharacter</span></a></span>
    <span class="cons_SortDecl"><a href="#AtomCharacter_75_27" id="AtomCharacter_25_5" title="Referenced at line 75, 147, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 253"><span class="token sort_Id">AtomCharacter</span></a></span>
    <span class="cons_SortDecl"><a href="#DoubleQuote_76_25" id="DoubleQuote_26_5" title="Referenced at line 76, 177, 202, 227, 256"><span class="token sort_Id">DoubleQuote</span></a></span>
    <span class="cons_SortDecl"><a href="#OctalChar_77_23" id="OctalChar_27_5" title="Referenced at line 77, 178, 203, 228"><span class="token sort_Id">OctalChar</span></a></span>
    <span class="cons_SortDecl"><a href="#HexHexChar_78_24" id="HexHexChar_28_5" title="Referenced at line 78, 179, 204, 229"><span class="token sort_Id">HexHexChar</span></a></span>
    <span class="cons_SortDecl"><a href="#DecHexChar_79_24" id="DecHexChar_29_5" title="Referenced at line 79, 180, 205, 230"><span class="token sort_Id">DecHexChar</span></a></span>
    <span class="cons_SortDecl"><a href="#Tab_80_17" id="Tab_30_5" title="Referenced at line 80, 181, 206, 231"><span class="token sort_Id">Tab</span></a></span>
    <span class="cons_SortDecl"><a href="#Newline_81_21" id="Newline_31_5" title="Referenced at line 81, 182, 207, 232"><span class="token sort_Id">Newline</span></a></span>
    <span class="cons_SortDecl"><a href="#ReturnAtom_82_24" id="ReturnAtom_32_5" title="Referenced at line 82, 183, 208, 233"><span class="token sort_Id">ReturnAtom</span></a></span>
    <span class="cons_SortDecl"><a href="#Formfeed_83_22" id="Formfeed_33_5" title="Referenced at line 83, 184, 209, 234"><span class="token sort_Id">Formfeed</span></a></span>
    <span class="cons_SortDecl"><a href="#Alarm_84_19" id="Alarm_34_5" title="Referenced at line 84, 185, 210, 235"><span class="token sort_Id">Alarm</span></a></span>
    <span class="cons_SortDecl"><a href="#Escape_85_20" id="Escape_35_5" title="Referenced at line 85, 186, 211, 236"><span class="token sort_Id">Escape</span></a></span>
    <span class="cons_SortDecl"><a href="#WordChar_86_22" id="WordChar_36_5" title="Referenced at line 86, 187, 212, 237"><span class="token sort_Id">WordChar</span></a></span>
    <span class="cons_SortDecl"><a href="#NonWordChar_87_25" id="NonWordChar_37_5" title="Referenced at line 87, 188, 213, 238"><span class="token sort_Id">NonWordChar</span></a></span>
    <span class="cons_SortDecl"><a href="#WhiteSpaceChar_88_28" id="WhiteSpaceChar_38_5" title="Referenced at line 88, 189, 214, 239"><span class="token sort_Id">WhiteSpaceChar</span></a></span>
    <span class="cons_SortDecl"><a href="#DigitChar_89_23" id="DigitChar_39_5" title="Referenced at line 89, 191, 216, 241"><span class="token sort_Id">DigitChar</span></a></span>
    <span class="cons_SortDecl"><a href="#NonDigitChar_90_26" id="NonDigitChar_40_5" title="Referenced at line 90, 192, 217, 242"><span class="token sort_Id">NonDigitChar</span></a></span>
    <span class="cons_SortDecl"><a href="#ControlCharacter_91_30" id="ControlCharacter_41_5" title="Referenced at line 91, 193, 218, 243"><span class="token sort_Id">ControlCharacter</span></a></span>
    <span class="cons_SortDecl"><a href="#WordBoundry_92_25" id="WordBoundry_42_5" title="Referenced at line 92, 194, 219, 244"><span class="token sort_Id">WordBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#NonWordBoundry_93_28" id="NonWordBoundry_43_5" title="Referenced at line 93, 195, 220, 245"><span class="token sort_Id">NonWordBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#InputBeginBoundry_94_31" id="InputBeginBoundry_44_5" title="Referenced at line 94, 196, 221, 246"><span class="token sort_Id">InputBeginBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#PrevMatchEndBoundry_95_33" id="PrevMatchEndBoundry_45_5" title="Referenced at line 95, 197, 222, 247"><span class="token sort_Id">PrevMatchEndBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#EndInputBoundry_96_29" id="EndInputBoundry_46_5" title="Referenced at line 96, 198, 223, 248"><span class="token sort_Id">EndInputBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#EndInputFinalBoundry_97_34" id="EndInputFinalBoundry_47_5" title="Referenced at line 97, 199, 224, 249"><span class="token sort_Id">EndInputFinalBoundry</span></a></span>
    <span class="cons_SortDecl"><a href="#Space_98_19" id="Space_48_5" title="Referenced at line 98, 201, 226, 251"><span class="token sort_Id">Space</span></a></span>
    <span class="cons_SortDecl"><a href="#NonWhiteSpaceChar_99_31" id="NonWhiteSpaceChar_49_5" title="Referenced at line 99, 190, 215, 240"><span class="token sort_Id">NonWhiteSpaceChar</span></a></span>
    <span class="cons_SortDecl"><a href="#BackReference_100_27" id="BackReference_50_5" title="Referenced at line 100, 200, 225, 250"><span class="token sort_Id">BackReference</span></a></span>
    <span class="cons_SortDecl"><a href="#QuotablePatternSymbol_101_35" id="QuotablePatternSymbol_51_5" title="Referenced at line 101, 252, 255, 256"><span class="token sort_Id">QuotablePatternSymbol</span></a></span>
    <span class="cons_SortDecl"><a href="#Quoted_102_20" id="Quoted_52_5" title="Referenced at line 102, 252, 253, 254"><span class="token sort_Id">Quoted</span></a></span>
    <span class="cons_SortAlias"><a href="#QuotablePatternSymbolLex_255_29" id="QuotablePatternSymbolLex_53_5" title="Referenced at line 255"><span class="token sort_Id">QuotablePatternSymbolLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#Integer_115_24" id="Integer_54_5" title="Referenced at line 115, 116, 117, 121, 122, 123, 127, 128, 129"><span class="token sort_Id">Integer</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#OctalValue_178_17" id="OctalValue_55_5" title="Referenced at line 178"><span class="token sort_Id">OctalValue</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#TwoHexValue_179_18" id="TwoHexValue_56_5" title="Referenced at line 179"><span class="token sort_Id">TwoHexValue</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#FourHexValue_180_18" id="FourHexValue_57_5" title="Referenced at line 180"><span class="token sort_Id">FourHexValue</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#BackReferenceLex_200_21" id="BackReferenceLex_58_5" title="Referenced at line 200"><span class="token sort_Id">BackReferenceLex</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortAlias"><a href="#ControlValue_193_24" id="ControlValue_59_5" title="Referenced at line 193"><span class="token sort_Id">ControlValue</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>
    <span class="cons_SortDecl"><a href="#RegexId_103_21" id="RegexId_60_5" title="Referenced at line 103, 139, 140, 257"><span class="token sort_Id">RegexId</span></a></span>
    <span class="cons_SortAlias"><a href="#RegexID_257_15" id="RegexID_61_5" title="Referenced at line 257"><span class="token sort_Id">RegexID</span></a> <span class="operator">=</span> <span class="cons_StringSort"><span class="keyword">string</span></span></span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><span id="Pattern-Plhdr_64_5" title="Not referenced"><span class="token sort_Id">Pattern-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_64_21" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span></span>
    <span class="cons_OpDecl"><span id="RegexExp-Plhdr_65_5" title="Not referenced"><span class="token sort_Id">RegexExp-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RegexExp_12_5" id="RegexExp_65_22" title="Defined at line 12"><span class="token sort_Id">RegexExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="Branche-Plhdr_66_5" title="Not referenced"><span class="token sort_Id">Branche-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Branche_13_5" id="Branche_66_21" title="Defined at line 13"><span class="token sort_Id">Branche</span></a></span></span>
    <span class="cons_OpDecl"><span id="Piece-Plhdr_67_5" title="Not referenced"><span class="token sort_Id">Piece-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Piece_14_5" id="Piece_67_19" title="Defined at line 14"><span class="token sort_Id">Piece</span></a></span></span>
    <span class="cons_OpDecl"><span id="Quantifier-Plhdr_68_5" title="Not referenced"><span class="token sort_Id">Quantifier-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_68_24" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="Atom-Plhdr_69_5" title="Not referenced"><span class="token sort_Id">Atom-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_69_18" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="CharacterClass-Plhdr_70_5" title="Not referenced"><span class="token sort_Id">CharacterClass-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CharacterClass_17_5" id="CharacterClass_70_28" title="Defined at line 17"><span class="token sort_Id">CharacterClass</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketItem-Plhdr_71_5" title="Not referenced"><span class="token sort_Id">BracketItem-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_71_25" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketLiteralOrBracketCharacter-Plhdr_72_5" title="Not referenced"><span class="token sort_Id">BracketLiteralOrBracketCharacter-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketLiteralOrBracketCharacter_19_5" id="BracketLiteralOrBracketCharacter_72_46" title="Defined at line 19"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="ClassKeyword-Plhdr_73_5" title="Not referenced"><span class="token sort_Id">ClassKeyword-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_73_26" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketCharacter-Plhdr_74_5" title="Not referenced"><span class="token sort_Id">BracketCharacter-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_74_30" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="AtomCharacter-Plhdr_75_5" title="Not referenced"><span class="token sort_Id">AtomCharacter-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_75_27" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DoubleQuote-Plhdr_76_5" title="Not referenced"><span class="token sort_Id">DoubleQuote-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DoubleQuote_26_5" id="DoubleQuote_76_25" title="Defined at line 26"><span class="token sort_Id">DoubleQuote</span></a></span></span>
    <span class="cons_OpDecl"><span id="OctalChar-Plhdr_77_5" title="Not referenced"><span class="token sort_Id">OctalChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OctalChar_27_5" id="OctalChar_77_23" title="Defined at line 27"><span class="token sort_Id">OctalChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="HexHexChar-Plhdr_78_5" title="Not referenced"><span class="token sort_Id">HexHexChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#HexHexChar_28_5" id="HexHexChar_78_24" title="Defined at line 28"><span class="token sort_Id">HexHexChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="DecHexChar-Plhdr_79_5" title="Not referenced"><span class="token sort_Id">DecHexChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DecHexChar_29_5" id="DecHexChar_79_24" title="Defined at line 29"><span class="token sort_Id">DecHexChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="Tab-Plhdr_80_5" title="Not referenced"><span class="token sort_Id">Tab-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Tab_30_5" id="Tab_80_17" title="Defined at line 30"><span class="token sort_Id">Tab</span></a></span></span>
    <span class="cons_OpDecl"><span id="Newline-Plhdr_81_5" title="Not referenced"><span class="token sort_Id">Newline-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Newline_31_5" id="Newline_81_21" title="Defined at line 31"><span class="token sort_Id">Newline</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReturnAtom-Plhdr_82_5" title="Not referenced"><span class="token sort_Id">ReturnAtom-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ReturnAtom_32_5" id="ReturnAtom_82_24" title="Defined at line 32"><span class="token sort_Id">ReturnAtom</span></a></span></span>
    <span class="cons_OpDecl"><span id="Formfeed-Plhdr_83_5" title="Not referenced"><span class="token sort_Id">Formfeed-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Formfeed_33_5" id="Formfeed_83_22" title="Defined at line 33"><span class="token sort_Id">Formfeed</span></a></span></span>
    <span class="cons_OpDecl"><span id="Alarm-Plhdr_84_5" title="Not referenced"><span class="token sort_Id">Alarm-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Alarm_34_5" id="Alarm_84_19" title="Defined at line 34"><span class="token sort_Id">Alarm</span></a></span></span>
    <span class="cons_OpDecl"><span id="Escape-Plhdr_85_5" title="Not referenced"><span class="token sort_Id">Escape-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Escape_35_5" id="Escape_85_20" title="Defined at line 35"><span class="token sort_Id">Escape</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordChar-Plhdr_86_5" title="Not referenced"><span class="token sort_Id">WordChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordChar_36_5" id="WordChar_86_22" title="Defined at line 36"><span class="token sort_Id">WordChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordChar-Plhdr_87_5" title="Not referenced"><span class="token sort_Id">NonWordChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordChar_37_5" id="NonWordChar_87_25" title="Defined at line 37"><span class="token sort_Id">NonWordChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="WhiteSpaceChar-Plhdr_88_5" title="Not referenced"><span class="token sort_Id">WhiteSpaceChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WhiteSpaceChar_38_5" id="WhiteSpaceChar_88_28" title="Defined at line 38"><span class="token sort_Id">WhiteSpaceChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="DigitChar-Plhdr_89_5" title="Not referenced"><span class="token sort_Id">DigitChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DigitChar_39_5" id="DigitChar_89_23" title="Defined at line 39"><span class="token sort_Id">DigitChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonDigitChar-Plhdr_90_5" title="Not referenced"><span class="token sort_Id">NonDigitChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonDigitChar_40_5" id="NonDigitChar_90_26" title="Defined at line 40"><span class="token sort_Id">NonDigitChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="ControlCharacter-Plhdr_91_5" title="Not referenced"><span class="token sort_Id">ControlCharacter-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ControlCharacter_41_5" id="ControlCharacter_91_30" title="Defined at line 41"><span class="token sort_Id">ControlCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordBoundry-Plhdr_92_5" title="Not referenced"><span class="token sort_Id">WordBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordBoundry_42_5" id="WordBoundry_92_25" title="Defined at line 42"><span class="token sort_Id">WordBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordBoundry-Plhdr_93_5" title="Not referenced"><span class="token sort_Id">NonWordBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordBoundry_43_5" id="NonWordBoundry_93_28" title="Defined at line 43"><span class="token sort_Id">NonWordBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="InputBeginBoundry-Plhdr_94_5" title="Not referenced"><span class="token sort_Id">InputBeginBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#InputBeginBoundry_44_5" id="InputBeginBoundry_94_31" title="Defined at line 44"><span class="token sort_Id">InputBeginBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrevMatchEndBoundry-Plhdr_95_5" title="Not referenced"><span class="token sort_Id">PrevMatchEndBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrevMatchEndBoundry_45_5" id="PrevMatchEndBoundry_95_33" title="Defined at line 45"><span class="token sort_Id">PrevMatchEndBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputBoundry-Plhdr_96_5" title="Not referenced"><span class="token sort_Id">EndInputBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputBoundry_46_5" id="EndInputBoundry_96_29" title="Defined at line 46"><span class="token sort_Id">EndInputBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputFinalBoundry-Plhdr_97_5" title="Not referenced"><span class="token sort_Id">EndInputFinalBoundry-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputFinalBoundry_47_5" id="EndInputFinalBoundry_97_34" title="Defined at line 47"><span class="token sort_Id">EndInputFinalBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="Space-Plhdr_98_5" title="Not referenced"><span class="token sort_Id">Space-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Space_48_5" id="Space_98_19" title="Defined at line 48"><span class="token sort_Id">Space</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWhiteSpaceChar-Plhdr_99_5" title="Not referenced"><span class="token sort_Id">NonWhiteSpaceChar-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWhiteSpaceChar_49_5" id="NonWhiteSpaceChar_99_31" title="Defined at line 49"><span class="token sort_Id">NonWhiteSpaceChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="BackReference-Plhdr_100_5" title="Not referenced"><span class="token sort_Id">BackReference-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BackReference_50_5" id="BackReference_100_27" title="Defined at line 50"><span class="token sort_Id">BackReference</span></a></span></span>
    <span class="cons_OpDecl"><span id="QuotablePatternSymbol-Plhdr_101_5" title="Not referenced"><span class="token sort_Id">QuotablePatternSymbol-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#QuotablePatternSymbol_51_5" id="QuotablePatternSymbol_101_35" title="Defined at line 51"><span class="token sort_Id">QuotablePatternSymbol</span></a></span></span>
    <span class="cons_OpDecl"><span id="Quoted-Plhdr_102_5" title="Not referenced"><span class="token sort_Id">Quoted-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quoted_52_5" id="Quoted_102_20" title="Defined at line 52"><span class="token sort_Id">Quoted</span></a></span></span>
    <span class="cons_OpDecl"><span id="RegexId-Plhdr_103_5" title="Not referenced"><span class="token sort_Id">RegexId-Plhdr</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RegexId_60_5" id="RegexId_103_21" title="Defined at line 60"><span class="token sort_Id">RegexId</span></a></span></span>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span class="cons_OpDecl"><a href="../../../../trans/static-semantics/webdsl-regex.stx/#RegexCall_10_16" id="RegexCall_108_5" title="Referenced at ../../../../trans/static-semantics/webdsl-regex.stx line 10, 14, 19, 24, 29, 34"><span class="token sort_Id">RegexCall</span></a> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RegexExp_12_5" id="RegexExp_108_17" title="Defined at line 12"><span class="token sort_Id">RegexExp</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="../WebDSL-Lexical-sig.stx/#Id_14_5" id="Id_108_28" title="Defined at ../WebDSL-Lexical-sig.stx line 14"><span class="token sort_Id">Id</span></a></span> <span class="operator">*</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_108_38" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="../WebDSL-Action-sig.stx/#Exp_25_5" id="Exp_108_46" title="Defined at ../WebDSL-Action-sig.stx line 25"><span class="token sort_Id">Exp</span></a></span></span>
    <span class="cons_OpDecl"><span id="RegexPattern_109_5" title="Not referenced"><span class="token sort_Id">RegexPattern</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_109_20" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RegexExp_12_5" id="RegexExp_109_31" title="Defined at line 12"><span class="token sort_Id">RegexExp</span></a></span></span>
    <span class="cons_OpDecl"><span id="SingleBranch_110_5" title="Not referenced"><span class="token sort_Id">SingleBranch</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Branche_13_5" id="Branche_110_20" title="Defined at line 13"><span class="token sort_Id">Branche</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_110_31" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span></span>
    <span class="cons_OpDecl"><span id="TupleBranch_111_5" title="Not referenced"><span class="token sort_Id">TupleBranch</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_111_19" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_111_29" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_111_40" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span></span>
    <span class="cons_OpDecl"><span id="Pieces_112_5" title="Not referenced"><span class="token sort_Id">Pieces</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#Piece_14_5" id="Piece_112_19" title="Defined at line 14"><span class="token sort_Id">Piece</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Branche_13_5" id="Branche_112_29" title="Defined at line 13"><span class="token sort_Id">Branche</span></a></span></span>
    <span class="cons_OpDecl"><span id="SingleAtom_113_5" title="Not referenced"><span class="token sort_Id">SingleAtom</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_113_18" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Piece_14_5" id="Piece_113_26" title="Defined at line 14"><span class="token sort_Id">Piece</span></a></span></span>
    <span class="cons_OpDecl"><span id="QuantifiedAtom_114_5" title="Not referenced"><span class="token sort_Id">QuantifiedAtom</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_114_22" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_114_29" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Piece_14_5" id="Piece_114_43" title="Defined at line 14"><span class="token sort_Id">Piece</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyExactBound_115_5" title="Not referenced"><span class="token sort_Id">GreedyExactBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_115_24" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_115_35" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyLowerBound_116_5" title="Not referenced"><span class="token sort_Id">GreedyLowerBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_116_24" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_116_35" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyLowerUpperBound_117_5" title="Not referenced"><span class="token sort_Id">GreedyLowerUpperBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_117_29" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_117_39" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_117_50" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyOnceOrNot_118_5" title="Not referenced"><span class="token sort_Id">GreedyOnceOrNot</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_118_23" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyZeroOrMore_119_5" title="Not referenced"><span class="token sort_Id">GreedyZeroOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_119_24" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreedyOneOrMore_120_5" title="Not referenced"><span class="token sort_Id">GreedyOneOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_120_23" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantExactBound_121_5" title="Not referenced"><span class="token sort_Id">ReluctantExactBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_121_27" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_121_38" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantLowerBound_122_5" title="Not referenced"><span class="token sort_Id">ReluctantLowerBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_122_27" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_122_38" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantLowerUpperBound_123_5" title="Not referenced"><span class="token sort_Id">ReluctantLowerUpperBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_123_32" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_123_42" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_123_53" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantOnceOrNot_124_5" title="Not referenced"><span class="token sort_Id">ReluctantOnceOrNot</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_124_26" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantZeroOrMore_125_5" title="Not referenced"><span class="token sort_Id">ReluctantZeroOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_125_27" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReluctantOneOrMore_126_5" title="Not referenced"><span class="token sort_Id">ReluctantOneOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_126_26" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveExactBound_127_5" title="Not referenced"><span class="token sort_Id">PossessiveExactBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_127_28" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_127_39" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveLowerBound_128_5" title="Not referenced"><span class="token sort_Id">PossessiveLowerBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_128_28" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_128_39" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveLowerUpperBound_129_5" title="Not referenced"><span class="token sort_Id">PossessiveLowerUpperBound</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_129_33" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Integer_54_5" id="Integer_129_43" title="Defined at line 54"><span class="token sort_Id">Integer</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_129_54" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveOnceOrNot_130_5" title="Not referenced"><span class="token sort_Id">PossessiveOnceOrNot</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_130_27" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveZeroOrMore_131_5" title="Not referenced"><span class="token sort_Id">PossessiveZeroOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_131_28" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="PossessiveOneOrMore_132_5" title="Not referenced"><span class="token sort_Id">PossessiveOneOrMore</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quantifier_15_5" id="Quantifier_132_27" title="Defined at line 15"><span class="token sort_Id">Quantifier</span></a></span></span>
    <span class="cons_OpDecl"><span id="Capture_133_5" title="Not referenced"><span class="token sort_Id">Capture</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_133_15" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_133_26" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonCapture_134_5" title="Not referenced"><span class="token sort_Id">NonCapture</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_134_18" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_134_29" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="PositiveLookahead_135_5" title="Not referenced"><span class="token sort_Id">PositiveLookahead</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_135_25" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_135_36" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="NegativeLookahead_136_5" title="Not referenced"><span class="token sort_Id">NegativeLookahead</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_136_25" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_136_36" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="PositiveLookbehind_137_5" title="Not referenced"><span class="token sort_Id">PositiveLookbehind</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_137_26" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_137_37" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="NegativeLookbehind_138_5" title="Not referenced"><span class="token sort_Id">NegativeLookbehind</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_138_26" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_138_37" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="PythonCapture_139_5" title="Not referenced"><span class="token sort_Id">PythonCapture</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RegexId_60_5" id="RegexId_139_21" title="Defined at line 60"><span class="token sort_Id">RegexId</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_139_31" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_139_42" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="RegexCapture_140_5" title="Not referenced"><span class="token sort_Id">RegexCapture</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Pattern_11_5" id="Pattern_140_20" title="Defined at line 11"><span class="token sort_Id">Pattern</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#RegexId_60_5" id="RegexId_140_30" title="Defined at line 60"><span class="token sort_Id">RegexId</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_140_41" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="Empty_141_5" title="Not referenced"><span class="token sort_Id">Empty</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_141_13" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="SingleCharacter_142_5" title="Not referenced"><span class="token sort_Id">SingleCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_142_23" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="LineStart_143_5" title="Not referenced"><span class="token sort_Id">LineStart</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_143_17" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="LineEnd_144_5" title="Not referenced"><span class="token sort_Id">LineEnd</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_144_15" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="CharacterClass_145_5" title="Not referenced"><span class="token sort_Id">CharacterClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CharacterClass_17_5" id="CharacterClass_145_22" title="Defined at line 17"><span class="token sort_Id">CharacterClass</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_145_40" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="AtomLiteral_146_5" title="Not referenced"><span class="token sort_Id">AtomLiteral</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AtomLiteral_22_5" id="AtomLiteral_146_19" title="Defined at line 22"><span class="token sort_Id">AtomLiteral</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_146_34" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="AtomCharacter_147_5" title="Not referenced"><span class="token sort_Id">AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_147_21" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_147_38" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="QuotedAtom_148_5" title="Not referenced"><span class="token sort_Id">QuotedAtom</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#AllChars_23_5" id="AllChars_148_18" title="Defined at line 23"><span class="token sort_Id">AllChars</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Atom_16_5" id="Atom_148_30" title="Defined at line 16"><span class="token sort_Id">Atom</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketList_149_5" title="Not referenced"><span class="token sort_Id">BracketList</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_149_24" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#CharacterClass_17_5" id="CharacterClass_149_40" title="Defined at line 17"><span class="token sort_Id">CharacterClass</span></a></span></span>
    <span class="cons_OpDecl"><span id="NegatedBracketList_150_5" title="Not referenced"><span class="token sort_Id">NegatedBracketList</span></span> <span class="operator">:</span> <span class="keyword">list</span><span class="operator">(</span><span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_150_31" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span><span class="operator">)</span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#CharacterClass_17_5" id="CharacterClass_150_47" title="Defined at line 17"><span class="token sort_Id">CharacterClass</span></a></span></span>
    <span class="cons_OpDecl"><span id="Range_151_5" title="Not referenced"><span class="token sort_Id">Range</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketLiteralOrBracketCharacter_19_5" id="BracketLiteralOrBracketCharacter_151_13" title="Defined at line 19"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span> <span class="operator">*</span> <span class="cons_SimpleSort"><a href="#BracketLiteralOrBracketCharacter_19_5" id="BracketLiteralOrBracketCharacter_151_48" title="Defined at line 19"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_151_84" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketLiteral2BracketLiteralOrBracketCharacter_152_5" title="Not referenced"><span class="token sort_Id">BracketLiteral2BracketLiteralOrBracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketLiteral_21_5" id="BracketLiteral_152_55" title="Defined at line 21"><span class="token sort_Id">BracketLiteral</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketLiteralOrBracketCharacter_19_5" id="BracketLiteralOrBracketCharacter_152_73" title="Defined at line 19"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketCharacter2BracketLiteralOrBracketCharacter_153_5" title="Not referenced"><span class="token sort_Id">BracketCharacter2BracketLiteralOrBracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_153_57" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketLiteralOrBracketCharacter_19_5" id="BracketLiteralOrBracketCharacter_153_77" title="Defined at line 19"><span class="token sort_Id">BracketLiteralOrBracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Union_154_5" title="Not referenced"><span class="token sort_Id">Union</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#CharacterClass_17_5" id="CharacterClass_154_13" title="Defined at line 17"><span class="token sort_Id">CharacterClass</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_154_31" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketLiteral_155_5" title="Not referenced"><span class="token sort_Id">BracketLiteral</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketLiteral_21_5" id="BracketLiteral_155_22" title="Defined at line 21"><span class="token sort_Id">BracketLiteral</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_155_40" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span></span>
    <span class="cons_OpDecl"><span id="BracketCharacter_156_5" title="Not referenced"><span class="token sort_Id">BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_156_24" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketItem_18_5" id="BracketItem_156_44" title="Defined at line 18"><span class="token sort_Id">BracketItem</span></a></span></span>
    <span class="cons_OpDecl"><span id="LowerClass_157_5" title="Not referenced"><span class="token sort_Id">LowerClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_157_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="UpperClass_158_5" title="Not referenced"><span class="token sort_Id">UpperClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_158_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="ASCIIClass_159_5" title="Not referenced"><span class="token sort_Id">ASCIIClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_159_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="AlphaClass_160_5" title="Not referenced"><span class="token sort_Id">AlphaClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_160_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="DigitClass_161_5" title="Not referenced"><span class="token sort_Id">DigitClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_161_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="AlnumClass_162_5" title="Not referenced"><span class="token sort_Id">AlnumClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_162_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="PunctClass_163_5" title="Not referenced"><span class="token sort_Id">PunctClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_163_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="GraphClass_164_5" title="Not referenced"><span class="token sort_Id">GraphClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_164_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrintClass_165_5" title="Not referenced"><span class="token sort_Id">PrintClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_165_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="BlankClass_166_5" title="Not referenced"><span class="token sort_Id">BlankClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_166_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="CntrlClass_167_5" title="Not referenced"><span class="token sort_Id">CntrlClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_167_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="XDigitClass_168_5" title="Not referenced"><span class="token sort_Id">XDigitClass</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_168_19" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="WhiteSpace_169_5" title="Not referenced"><span class="token sort_Id">WhiteSpace</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_169_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="JavaIsLowerCase_170_5" title="Not referenced"><span class="token sort_Id">JavaIsLowerCase</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_170_23" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="JavaIsUpperCase_171_5" title="Not referenced"><span class="token sort_Id">JavaIsUpperCase</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_171_23" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="JavaIsWhitespace_172_5" title="Not referenced"><span class="token sort_Id">JavaIsWhitespace</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_172_24" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="JavaIsMirrored_173_5" title="Not referenced"><span class="token sort_Id">JavaIsMirrored</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_173_22" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="GreekBlock_174_5" title="Not referenced"><span class="token sort_Id">GreekBlock</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_174_18" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="UppercaseLetter_175_5" title="Not referenced"><span class="token sort_Id">UppercaseLetter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_175_23" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="CurrencySymbol_176_5" title="Not referenced"><span class="token sort_Id">CurrencySymbol</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ClassKeyword_20_5" id="ClassKeyword_176_22" title="Defined at line 20"><span class="token sort_Id">ClassKeyword</span></a></span></span>
    <span class="cons_OpDecl"><span id="DoubleQuote_177_5" title="Not referenced"><span class="token sort_Id">DoubleQuote</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DoubleQuote_26_5" id="DoubleQuote_177_19" title="Defined at line 26"><span class="token sort_Id">DoubleQuote</span></a></span></span>
    <span class="cons_OpDecl"><span id="OctalChar_178_5" title="Not referenced"><span class="token sort_Id">OctalChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OctalValue_55_5" id="OctalValue_178_17" title="Defined at line 55"><span class="token sort_Id">OctalValue</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#OctalChar_27_5" id="OctalChar_178_31" title="Defined at line 27"><span class="token sort_Id">OctalChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="HexHexChar_179_5" title="Not referenced"><span class="token sort_Id">HexHexChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#TwoHexValue_56_5" id="TwoHexValue_179_18" title="Defined at line 56"><span class="token sort_Id">TwoHexValue</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#HexHexChar_28_5" id="HexHexChar_179_33" title="Defined at line 28"><span class="token sort_Id">HexHexChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="DecHexChar_180_5" title="Not referenced"><span class="token sort_Id">DecHexChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#FourHexValue_57_5" id="FourHexValue_180_18" title="Defined at line 57"><span class="token sort_Id">FourHexValue</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#DecHexChar_29_5" id="DecHexChar_180_34" title="Defined at line 29"><span class="token sort_Id">DecHexChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="Tab_181_5" title="Not referenced"><span class="token sort_Id">Tab</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Tab_30_5" id="Tab_181_11" title="Defined at line 30"><span class="token sort_Id">Tab</span></a></span></span>
    <span class="cons_OpDecl"><span id="Newline_182_5" title="Not referenced"><span class="token sort_Id">Newline</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Newline_31_5" id="Newline_182_15" title="Defined at line 31"><span class="token sort_Id">Newline</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReturnAtom_183_5" title="Not referenced"><span class="token sort_Id">ReturnAtom</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ReturnAtom_32_5" id="ReturnAtom_183_18" title="Defined at line 32"><span class="token sort_Id">ReturnAtom</span></a></span></span>
    <span class="cons_OpDecl"><span id="Formfeed_184_5" title="Not referenced"><span class="token sort_Id">Formfeed</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Formfeed_33_5" id="Formfeed_184_16" title="Defined at line 33"><span class="token sort_Id">Formfeed</span></a></span></span>
    <span class="cons_OpDecl"><span id="Alarm_185_5" title="Not referenced"><span class="token sort_Id">Alarm</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Alarm_34_5" id="Alarm_185_13" title="Defined at line 34"><span class="token sort_Id">Alarm</span></a></span></span>
    <span class="cons_OpDecl"><span id="Escape_186_5" title="Not referenced"><span class="token sort_Id">Escape</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Escape_35_5" id="Escape_186_14" title="Defined at line 35"><span class="token sort_Id">Escape</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordChar_187_5" title="Not referenced"><span class="token sort_Id">WordChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordChar_36_5" id="WordChar_187_16" title="Defined at line 36"><span class="token sort_Id">WordChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordChar_188_5" title="Not referenced"><span class="token sort_Id">NonWordChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordChar_37_5" id="NonWordChar_188_19" title="Defined at line 37"><span class="token sort_Id">NonWordChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="WhiteSpaceChar_189_5" title="Not referenced"><span class="token sort_Id">WhiteSpaceChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WhiteSpaceChar_38_5" id="WhiteSpaceChar_189_22" title="Defined at line 38"><span class="token sort_Id">WhiteSpaceChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWhiteSpaceChar_190_5" title="Not referenced"><span class="token sort_Id">NonWhiteSpaceChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWhiteSpaceChar_49_5" id="NonWhiteSpaceChar_190_25" title="Defined at line 49"><span class="token sort_Id">NonWhiteSpaceChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="DigitChar_191_5" title="Not referenced"><span class="token sort_Id">DigitChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DigitChar_39_5" id="DigitChar_191_17" title="Defined at line 39"><span class="token sort_Id">DigitChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonDigitChar_192_5" title="Not referenced"><span class="token sort_Id">NonDigitChar</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonDigitChar_40_5" id="NonDigitChar_192_20" title="Defined at line 40"><span class="token sort_Id">NonDigitChar</span></a></span></span>
    <span class="cons_OpDecl"><span id="ControlCharacter_193_5" title="Not referenced"><span class="token sort_Id">ControlCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ControlValue_59_5" id="ControlValue_193_24" title="Defined at line 59"><span class="token sort_Id">ControlValue</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#ControlCharacter_41_5" id="ControlCharacter_193_40" title="Defined at line 41"><span class="token sort_Id">ControlCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordBoundry_194_5" title="Not referenced"><span class="token sort_Id">WordBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordBoundry_42_5" id="WordBoundry_194_19" title="Defined at line 42"><span class="token sort_Id">WordBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordBoundry_195_5" title="Not referenced"><span class="token sort_Id">NonWordBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordBoundry_43_5" id="NonWordBoundry_195_22" title="Defined at line 43"><span class="token sort_Id">NonWordBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="InputBeginBoundry_196_5" title="Not referenced"><span class="token sort_Id">InputBeginBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#InputBeginBoundry_44_5" id="InputBeginBoundry_196_25" title="Defined at line 44"><span class="token sort_Id">InputBeginBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrevMatchEndBoundry_197_5" title="Not referenced"><span class="token sort_Id">PrevMatchEndBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrevMatchEndBoundry_45_5" id="PrevMatchEndBoundry_197_27" title="Defined at line 45"><span class="token sort_Id">PrevMatchEndBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputBoundry_198_5" title="Not referenced"><span class="token sort_Id">EndInputBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputBoundry_46_5" id="EndInputBoundry_198_23" title="Defined at line 46"><span class="token sort_Id">EndInputBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputFinalBoundry_199_5" title="Not referenced"><span class="token sort_Id">EndInputFinalBoundry</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputFinalBoundry_47_5" id="EndInputFinalBoundry_199_28" title="Defined at line 47"><span class="token sort_Id">EndInputFinalBoundry</span></a></span></span>
    <span class="cons_OpDecl"><span id="BackReference_200_5" title="Not referenced"><span class="token sort_Id">BackReference</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BackReferenceLex_58_5" id="BackReferenceLex_200_21" title="Defined at line 58"><span class="token sort_Id">BackReferenceLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BackReference_50_5" id="BackReference_200_41" title="Defined at line 50"><span class="token sort_Id">BackReference</span></a></span></span>
    <span class="cons_OpDecl"><span id="Space_201_5" title="Not referenced"><span class="token sort_Id">Space</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Space_48_5" id="Space_201_13" title="Defined at line 48"><span class="token sort_Id">Space</span></a></span></span>
    <span class="cons_OpDecl"><span id="DoubleQuote2BracketCharacter_202_5" title="Not referenced"><span class="token sort_Id">DoubleQuote2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DoubleQuote_26_5" id="DoubleQuote_202_36" title="Defined at line 26"><span class="token sort_Id">DoubleQuote</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_202_51" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="OctalChar2BracketCharacter_203_5" title="Not referenced"><span class="token sort_Id">OctalChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OctalChar_27_5" id="OctalChar_203_34" title="Defined at line 27"><span class="token sort_Id">OctalChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_203_47" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="HexHexChar2BracketCharacter_204_5" title="Not referenced"><span class="token sort_Id">HexHexChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#HexHexChar_28_5" id="HexHexChar_204_35" title="Defined at line 28"><span class="token sort_Id">HexHexChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_204_49" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DecHexChar2BracketCharacter_205_5" title="Not referenced"><span class="token sort_Id">DecHexChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DecHexChar_29_5" id="DecHexChar_205_35" title="Defined at line 29"><span class="token sort_Id">DecHexChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_205_49" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Tab2BracketCharacter_206_5" title="Not referenced"><span class="token sort_Id">Tab2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Tab_30_5" id="Tab_206_28" title="Defined at line 30"><span class="token sort_Id">Tab</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_206_35" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Newline2BracketCharacter_207_5" title="Not referenced"><span class="token sort_Id">Newline2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Newline_31_5" id="Newline_207_32" title="Defined at line 31"><span class="token sort_Id">Newline</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_207_43" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReturnAtom2BracketCharacter_208_5" title="Not referenced"><span class="token sort_Id">ReturnAtom2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ReturnAtom_32_5" id="ReturnAtom_208_35" title="Defined at line 32"><span class="token sort_Id">ReturnAtom</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_208_49" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Formfeed2BracketCharacter_209_5" title="Not referenced"><span class="token sort_Id">Formfeed2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Formfeed_33_5" id="Formfeed_209_33" title="Defined at line 33"><span class="token sort_Id">Formfeed</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_209_45" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Alarm2BracketCharacter_210_5" title="Not referenced"><span class="token sort_Id">Alarm2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Alarm_34_5" id="Alarm_210_30" title="Defined at line 34"><span class="token sort_Id">Alarm</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_210_39" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Escape2BracketCharacter_211_5" title="Not referenced"><span class="token sort_Id">Escape2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Escape_35_5" id="Escape_211_31" title="Defined at line 35"><span class="token sort_Id">Escape</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_211_41" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordChar2BracketCharacter_212_5" title="Not referenced"><span class="token sort_Id">WordChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordChar_36_5" id="WordChar_212_33" title="Defined at line 36"><span class="token sort_Id">WordChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_212_45" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordChar2BracketCharacter_213_5" title="Not referenced"><span class="token sort_Id">NonWordChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordChar_37_5" id="NonWordChar_213_36" title="Defined at line 37"><span class="token sort_Id">NonWordChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_213_51" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WhiteSpaceChar2BracketCharacter_214_5" title="Not referenced"><span class="token sort_Id">WhiteSpaceChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WhiteSpaceChar_38_5" id="WhiteSpaceChar_214_39" title="Defined at line 38"><span class="token sort_Id">WhiteSpaceChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_214_57" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWhiteSpaceChar2BracketCharacter_215_5" title="Not referenced"><span class="token sort_Id">NonWhiteSpaceChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWhiteSpaceChar_49_5" id="NonWhiteSpaceChar_215_42" title="Defined at line 49"><span class="token sort_Id">NonWhiteSpaceChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_215_63" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DigitChar2BracketCharacter_216_5" title="Not referenced"><span class="token sort_Id">DigitChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DigitChar_39_5" id="DigitChar_216_34" title="Defined at line 39"><span class="token sort_Id">DigitChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_216_47" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonDigitChar2BracketCharacter_217_5" title="Not referenced"><span class="token sort_Id">NonDigitChar2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonDigitChar_40_5" id="NonDigitChar_217_37" title="Defined at line 40"><span class="token sort_Id">NonDigitChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_217_53" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="ControlCharacter2BracketCharacter_218_5" title="Not referenced"><span class="token sort_Id">ControlCharacter2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ControlCharacter_41_5" id="ControlCharacter_218_41" title="Defined at line 41"><span class="token sort_Id">ControlCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_218_61" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordBoundry2BracketCharacter_219_5" title="Not referenced"><span class="token sort_Id">WordBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordBoundry_42_5" id="WordBoundry_219_36" title="Defined at line 42"><span class="token sort_Id">WordBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_219_51" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordBoundry2BracketCharacter_220_5" title="Not referenced"><span class="token sort_Id">NonWordBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordBoundry_43_5" id="NonWordBoundry_220_39" title="Defined at line 43"><span class="token sort_Id">NonWordBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_220_57" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="InputBeginBoundry2BracketCharacter_221_5" title="Not referenced"><span class="token sort_Id">InputBeginBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#InputBeginBoundry_44_5" id="InputBeginBoundry_221_42" title="Defined at line 44"><span class="token sort_Id">InputBeginBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_221_63" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrevMatchEndBoundry2BracketCharacter_222_5" title="Not referenced"><span class="token sort_Id">PrevMatchEndBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrevMatchEndBoundry_45_5" id="PrevMatchEndBoundry_222_44" title="Defined at line 45"><span class="token sort_Id">PrevMatchEndBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_222_67" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputBoundry2BracketCharacter_223_5" title="Not referenced"><span class="token sort_Id">EndInputBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputBoundry_46_5" id="EndInputBoundry_223_40" title="Defined at line 46"><span class="token sort_Id">EndInputBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_223_59" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputFinalBoundry2BracketCharacter_224_5" title="Not referenced"><span class="token sort_Id">EndInputFinalBoundry2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputFinalBoundry_47_5" id="EndInputFinalBoundry_224_45" title="Defined at line 47"><span class="token sort_Id">EndInputFinalBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_224_69" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="BackReference2BracketCharacter_225_5" title="Not referenced"><span class="token sort_Id">BackReference2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BackReference_50_5" id="BackReference_225_38" title="Defined at line 50"><span class="token sort_Id">BackReference</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_225_55" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Space2BracketCharacter_226_5" title="Not referenced"><span class="token sort_Id">Space2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Space_48_5" id="Space_226_30" title="Defined at line 48"><span class="token sort_Id">Space</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_226_39" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DoubleQuote2AtomCharacter_227_5" title="Not referenced"><span class="token sort_Id">DoubleQuote2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DoubleQuote_26_5" id="DoubleQuote_227_33" title="Defined at line 26"><span class="token sort_Id">DoubleQuote</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_227_48" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="OctalChar2AtomCharacter_228_5" title="Not referenced"><span class="token sort_Id">OctalChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#OctalChar_27_5" id="OctalChar_228_31" title="Defined at line 27"><span class="token sort_Id">OctalChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_228_44" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="HexHexChar2AtomCharacter_229_5" title="Not referenced"><span class="token sort_Id">HexHexChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#HexHexChar_28_5" id="HexHexChar_229_32" title="Defined at line 28"><span class="token sort_Id">HexHexChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_229_46" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DecHexChar2AtomCharacter_230_5" title="Not referenced"><span class="token sort_Id">DecHexChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DecHexChar_29_5" id="DecHexChar_230_32" title="Defined at line 29"><span class="token sort_Id">DecHexChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_230_46" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Tab2AtomCharacter_231_5" title="Not referenced"><span class="token sort_Id">Tab2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Tab_30_5" id="Tab_231_25" title="Defined at line 30"><span class="token sort_Id">Tab</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_231_32" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Newline2AtomCharacter_232_5" title="Not referenced"><span class="token sort_Id">Newline2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Newline_31_5" id="Newline_232_29" title="Defined at line 31"><span class="token sort_Id">Newline</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_232_40" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="ReturnAtom2AtomCharacter_233_5" title="Not referenced"><span class="token sort_Id">ReturnAtom2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ReturnAtom_32_5" id="ReturnAtom_233_32" title="Defined at line 32"><span class="token sort_Id">ReturnAtom</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_233_46" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Formfeed2AtomCharacter_234_5" title="Not referenced"><span class="token sort_Id">Formfeed2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Formfeed_33_5" id="Formfeed_234_30" title="Defined at line 33"><span class="token sort_Id">Formfeed</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_234_42" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Alarm2AtomCharacter_235_5" title="Not referenced"><span class="token sort_Id">Alarm2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Alarm_34_5" id="Alarm_235_27" title="Defined at line 34"><span class="token sort_Id">Alarm</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_235_36" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Escape2AtomCharacter_236_5" title="Not referenced"><span class="token sort_Id">Escape2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Escape_35_5" id="Escape_236_28" title="Defined at line 35"><span class="token sort_Id">Escape</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_236_38" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordChar2AtomCharacter_237_5" title="Not referenced"><span class="token sort_Id">WordChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordChar_36_5" id="WordChar_237_30" title="Defined at line 36"><span class="token sort_Id">WordChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_237_42" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordChar2AtomCharacter_238_5" title="Not referenced"><span class="token sort_Id">NonWordChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordChar_37_5" id="NonWordChar_238_33" title="Defined at line 37"><span class="token sort_Id">NonWordChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_238_48" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WhiteSpaceChar2AtomCharacter_239_5" title="Not referenced"><span class="token sort_Id">WhiteSpaceChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WhiteSpaceChar_38_5" id="WhiteSpaceChar_239_36" title="Defined at line 38"><span class="token sort_Id">WhiteSpaceChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_239_54" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWhiteSpaceChar2AtomCharacter_240_5" title="Not referenced"><span class="token sort_Id">NonWhiteSpaceChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWhiteSpaceChar_49_5" id="NonWhiteSpaceChar_240_39" title="Defined at line 49"><span class="token sort_Id">NonWhiteSpaceChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_240_60" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="DigitChar2AtomCharacter_241_5" title="Not referenced"><span class="token sort_Id">DigitChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DigitChar_39_5" id="DigitChar_241_31" title="Defined at line 39"><span class="token sort_Id">DigitChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_241_44" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonDigitChar2AtomCharacter_242_5" title="Not referenced"><span class="token sort_Id">NonDigitChar2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonDigitChar_40_5" id="NonDigitChar_242_34" title="Defined at line 40"><span class="token sort_Id">NonDigitChar</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_242_50" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="ControlCharacter2AtomCharacter_243_5" title="Not referenced"><span class="token sort_Id">ControlCharacter2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#ControlCharacter_41_5" id="ControlCharacter_243_38" title="Defined at line 41"><span class="token sort_Id">ControlCharacter</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_243_58" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="WordBoundry2AtomCharacter_244_5" title="Not referenced"><span class="token sort_Id">WordBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#WordBoundry_42_5" id="WordBoundry_244_33" title="Defined at line 42"><span class="token sort_Id">WordBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_244_48" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="NonWordBoundry2AtomCharacter_245_5" title="Not referenced"><span class="token sort_Id">NonWordBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#NonWordBoundry_43_5" id="NonWordBoundry_245_36" title="Defined at line 43"><span class="token sort_Id">NonWordBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_245_54" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="InputBeginBoundry2AtomCharacter_246_5" title="Not referenced"><span class="token sort_Id">InputBeginBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#InputBeginBoundry_44_5" id="InputBeginBoundry_246_39" title="Defined at line 44"><span class="token sort_Id">InputBeginBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_246_60" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="PrevMatchEndBoundry2AtomCharacter_247_5" title="Not referenced"><span class="token sort_Id">PrevMatchEndBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#PrevMatchEndBoundry_45_5" id="PrevMatchEndBoundry_247_41" title="Defined at line 45"><span class="token sort_Id">PrevMatchEndBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_247_64" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputBoundry2AtomCharacter_248_5" title="Not referenced"><span class="token sort_Id">EndInputBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputBoundry_46_5" id="EndInputBoundry_248_37" title="Defined at line 46"><span class="token sort_Id">EndInputBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_248_56" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="EndInputFinalBoundry2AtomCharacter_249_5" title="Not referenced"><span class="token sort_Id">EndInputFinalBoundry2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#EndInputFinalBoundry_47_5" id="EndInputFinalBoundry_249_42" title="Defined at line 47"><span class="token sort_Id">EndInputFinalBoundry</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_249_66" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="BackReference2AtomCharacter_250_5" title="Not referenced"><span class="token sort_Id">BackReference2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#BackReference_50_5" id="BackReference_250_35" title="Defined at line 50"><span class="token sort_Id">BackReference</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_250_52" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Space2AtomCharacter_251_5" title="Not referenced"><span class="token sort_Id">Space2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Space_48_5" id="Space_251_27" title="Defined at line 48"><span class="token sort_Id">Space</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_251_36" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Quoted_252_5" title="Not referenced"><span class="token sort_Id">Quoted</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#QuotablePatternSymbol_51_5" id="QuotablePatternSymbol_252_14" title="Defined at line 51"><span class="token sort_Id">QuotablePatternSymbol</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#Quoted_52_5" id="Quoted_252_39" title="Defined at line 52"><span class="token sort_Id">Quoted</span></a></span></span>
    <span class="cons_OpDecl"><span id="Quoted2AtomCharacter_253_5" title="Not referenced"><span class="token sort_Id">Quoted2AtomCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quoted_52_5" id="Quoted_253_28" title="Defined at line 52"><span class="token sort_Id">Quoted</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#AtomCharacter_25_5" id="AtomCharacter_253_38" title="Defined at line 25"><span class="token sort_Id">AtomCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="Quoted2BracketCharacter_254_5" title="Not referenced"><span class="token sort_Id">Quoted2BracketCharacter</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#Quoted_52_5" id="Quoted_254_31" title="Defined at line 52"><span class="token sort_Id">Quoted</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#BracketCharacter_24_5" id="BracketCharacter_254_41" title="Defined at line 24"><span class="token sort_Id">BracketCharacter</span></a></span></span>
    <span class="cons_OpDecl"><span id="QuotablePatternSymbol_255_5" title="Not referenced"><span class="token sort_Id">QuotablePatternSymbol</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#QuotablePatternSymbolLex_53_5" id="QuotablePatternSymbolLex_255_29" title="Defined at line 53"><span class="token sort_Id">QuotablePatternSymbolLex</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#QuotablePatternSymbol_51_5" id="QuotablePatternSymbol_255_57" title="Defined at line 51"><span class="token sort_Id">QuotablePatternSymbol</span></a></span></span>
    <span class="cons_OpDecl"><span id="DoubleQuote2QuotablePatternSymbol_256_5" title="Not referenced"><span class="token sort_Id">DoubleQuote2QuotablePatternSymbol</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#DoubleQuote_26_5" id="DoubleQuote_256_41" title="Defined at line 26"><span class="token sort_Id">DoubleQuote</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#QuotablePatternSymbol_51_5" id="QuotablePatternSymbol_256_56" title="Defined at line 51"><span class="token sort_Id">QuotablePatternSymbol</span></a></span></span>
    <span class="cons_OpDecl"><span id="RegexId_257_5" title="Not referenced"><span class="token sort_Id">RegexId</span></span> <span class="operator">:</span> <span class="cons_SimpleSort"><a href="#RegexID_61_5" id="RegexID_257_15" title="Defined at line 61"><span class="token sort_Id">RegexID</span></a></span> <span class="operator">-&gt;</span> <span class="cons_SimpleSort"><a href="#RegexId_60_5" id="RegexId_257_26" title="Defined at line 60"><span class="token sort_Id">RegexId</span></a></span></span>
</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
