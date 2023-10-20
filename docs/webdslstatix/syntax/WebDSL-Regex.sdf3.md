---
title: WebDSL-Regex.sdf3
hide:
  - toc
---

# `WebDSL-Regex.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Regex.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Regex.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Regex.sdf3 "The source file on GitHub"

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
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Regex_327_339" id="WebDSL-Regex_7_19" title="Referenced at ../webdsl-statix.sdf3 line 20">WebDSL-Regex</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_7_20" id="WebDSL-Action_31_44" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_7_21" id="WebDSL-Lexical_47_61" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_7_23" id="WebDSL-DataModel_64_80" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>

<span class="keyword">context-free sorts</span>

  <a href="#Pattern_228_235" id="Pattern_104_111" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a> <a href="#RegexExp_163_171" id="RegexExp_112_120" title="Referenced at line 14">RegexExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_184_187" id="Exp_145_148" title="Referenced at line 14">Exp</a>.<span class="cons_Constructor"><span id="RegexCall_149_158" title="Not referenced locally, nor via imports">RegexCall</span></span> = &lt;&lt;<a href="#RegexExp_112_120" id="RegexExp_163_171" title="Defined at line 10, 15">RegexExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_86_88" id="Id_176_178" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_145_148" id="Exp_184_187" title="Defined at line 14">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#RegexExp_163_171" id="RegexExp_200_208" title="Referenced at line 14">RegexExp</a>.<span class="cons_Constructor"><span id="RegexPattern_209_221" title="Not referenced locally, nor via imports">RegexPattern</span></span> = &lt;<span class="cons_String">/</span> &lt;<a href="#Pattern_104_111" id="Pattern_228_235" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">/</span>&gt;
  <a href="#Pattern_228_235" id="Pattern_242_249" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a>.<span class="cons_Constructor"><span id="SingleBranch_250_262" title="Not referenced locally, nor via imports">SingleBranch</span></span> = <a href="#Branche_352_359" id="Branche_265_272" title="Defined at line 21, 25">Branche</a>
  <a href="#Pattern_228_235" id="Pattern_275_282" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a>.<span class="cons_Constructor"><span id="TupleBranch_283_294" title="Not referenced locally, nor via imports">TupleBranch</span></span> = &lt;&lt;<a href="#Pattern_104_111" id="Pattern_299_306" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">|</span> &lt;<a href="#Pattern_104_111" id="Pattern_311_318" title="Defined at line 10, 16, 17">Pattern</a>&gt;&gt; {<span class="keyword">right</span>}

<span class="keyword">context-free sorts</span>

  <a href="#Branche_265_272" id="Branche_352_359" title="Referenced at line 16">Branche</a> <a href="#Piece_409_414" id="Piece_360_365" title="Referenced at line 25">Piece</a>

<span class="keyword">context-free syntax</span>

  <a href="#Branche_265_272" id="Branche_390_397" title="Referenced at line 16">Branche</a>.<span class="cons_Constructor"><span id="Pieces_398_404" title="Not referenced locally, nor via imports">Pieces</span></span> = &lt;&lt;<a href="#Piece_360_365" id="Piece_409_414" title="Defined at line 21, 26, 27">Piece</a>+&gt;&gt;
  <a href="#Piece_409_414" id="Piece_420_425" title="Referenced at line 25">Piece</a>.<span class="cons_Constructor"><span id="SingleAtom_426_436" title="Not referenced locally, nor via imports">SingleAtom</span></span> = <a href="#Atom_1431_1435" id="Atom_439_443" title="Defined at line 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75">Atom</a>
  <a href="#Piece_409_414" id="Piece_446_451" title="Referenced at line 25">Piece</a>.<span class="cons_Constructor"><span id="QuantifiedAtom_452_466" title="Not referenced locally, nor via imports">QuantifiedAtom</span></span> = &lt;&lt;<a href="#Atom_1431_1435" id="Atom_471_475" title="Defined at line 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75">Atom</a>&gt; &lt;<a href="#Quantifier_514_524" id="Quantifier_478_488" title="Defined at line 31, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52">Quantifier</a>&gt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Quantifier_478_488" id="Quantifier_514_524" title="Referenced at line 27">Quantifier</a>

<span class="keyword">context-free syntax</span>

  <a href="#Quantifier_478_488" id="Quantifier_549_559" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyExactBound_560_576" title="Not referenced locally, nor via imports">GreedyExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_583_590" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_597_607" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerBound_608_624" title="Not referenced locally, nor via imports">GreedyLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_631_638" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_647_657" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerUpperBound_658_679" title="Not referenced locally, nor via imports">GreedyLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_686_693" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_7293_7300" id="Integer_698_705" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_712_722" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOnceOrNot_723_738" title="Not referenced locally, nor via imports">GreedyOnceOrNot</span></span> = &lt;<span class="cons_String">?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_747_757" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyZeroOrMore_758_774" title="Not referenced locally, nor via imports">GreedyZeroOrMore</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_783_793" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOneOrMore_794_809" title="Not referenced locally, nor via imports">GreedyOneOrMore</span></span> = &lt;<span class="cons_String">+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_818_828" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantExactBound_829_848" title="Not referenced locally, nor via imports">ReluctantExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_855_862" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_870_880" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerBound_881_900" title="Not referenced locally, nor via imports">ReluctantLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_907_914" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_924_934" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerUpperBound_935_959" title="Not referenced locally, nor via imports">ReluctantLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_966_973" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_7293_7300" id="Integer_978_985" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_993_1003" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOnceOrNot_1004_1022" title="Not referenced locally, nor via imports">ReluctantOnceOrNot</span></span> = &lt;<span class="cons_String">??</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1032_1042" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantZeroOrMore_1043_1062" title="Not referenced locally, nor via imports">ReluctantZeroOrMore</span></span> = &lt;<span class="cons_String">*?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1072_1082" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOneOrMore_1083_1101" title="Not referenced locally, nor via imports">ReluctantOneOrMore</span></span> = &lt;<span class="cons_String">+?</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1111_1121" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveExactBound_1122_1142" title="Not referenced locally, nor via imports">PossessiveExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_1149_1156" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1164_1174" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerBound_1175_1195" title="Not referenced locally, nor via imports">PossessiveLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_1202_1209" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1219_1229" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerUpperBound_1230_1255" title="Not referenced locally, nor via imports">PossessiveLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_7293_7300" id="Integer_1262_1269" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_7293_7300" id="Integer_1274_1281" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1289_1299" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOnceOrNot_1300_1319" title="Not referenced locally, nor via imports">PossessiveOnceOrNot</span></span> = &lt;<span class="cons_String">?+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1329_1339" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveZeroOrMore_1340_1360" title="Not referenced locally, nor via imports">PossessiveZeroOrMore</span></span> = &lt;<span class="cons_String">*+</span>&gt;
  <a href="#Quantifier_478_488" id="Quantifier_1370_1380" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOneOrMore_1381_1400" title="Not referenced locally, nor via imports">PossessiveOneOrMore</span></span> = &lt;<span class="cons_String">++</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Atom_439_443" id="Atom_1431_1435" title="Referenced at line 26, 27">Atom</a>

<span class="keyword">context-free syntax</span>

  <a href="#Atom_439_443" id="Atom_1460_1464" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="Capture_1465_1472" title="Not referenced locally, nor via imports">Capture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_104_111" id="Pattern_1479_1486" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1493_1497" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NonCapture_1498_1508" title="Not referenced locally, nor via imports">NonCapture</span></span> = &lt;<span class="cons_String">(?:</span> &lt;<a href="#Pattern_104_111" id="Pattern_1517_1524" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1531_1535" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PositiveLookahead_1536_1553" title="Not referenced locally, nor via imports">PositiveLookahead</span></span> = &lt;<span class="cons_String">(?=</span> &lt;<a href="#Pattern_104_111" id="Pattern_1562_1569" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1576_1580" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NegativeLookahead_1581_1598" title="Not referenced locally, nor via imports">NegativeLookahead</span></span> = &lt;<span class="cons_String">(?!</span> &lt;<a href="#Pattern_104_111" id="Pattern_1607_1614" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1621_1625" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PositiveLookbehind_1626_1644" title="Not referenced locally, nor via imports">PositiveLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">=</span> &lt;<a href="#Pattern_104_111" id="Pattern_1655_1662" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1669_1673" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NegativeLookbehind_1674_1692" title="Not referenced locally, nor via imports">NegativeLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">!</span> &lt;<a href="#Pattern_104_111" id="Pattern_1703_1710" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1717_1721" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PythonCapture_1722_1735" title="Not referenced locally, nor via imports">PythonCapture</span></span> = &lt;<span class="cons_String">(?P</span>\&lt; &lt;<a href="#RegexId_7698_7705" id="RegexId_1746_1753" title="Defined at line 260, 264">RegexId</a>&gt; \&gt; &lt;<a href="#Pattern_104_111" id="Pattern_1759_1766" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_439_443" id="Atom_1773_1777" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="RegexCapture_1778_1790" title="Not referenced locally, nor via imports">RegexCapture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_104_111" id="Pattern_1797_1804" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)@{</span> &lt;<a href="#RegexId_7698_7705" id="RegexId_1811_1818" title="Defined at line 260, 264">RegexId</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Atom_439_443" id="Atom_1825_1829" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="Empty_1830_1835" title="Not referenced locally, nor via imports">Empty</span></span> = &lt;<span class="cons_String">()</span>&gt;
  <a href="#Atom_439_443" id="Atom_1845_1849" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="SingleCharacter_1850_1865" title="Not referenced locally, nor via imports">SingleCharacter</span></span> = &lt;<span class="cons_String">.</span>&gt;
  <a href="#Atom_439_443" id="Atom_1874_1878" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="LineStart_1879_1888" title="Not referenced locally, nor via imports">LineStart</span></span> = &lt;<span class="cons_String">^</span>&gt;
  <a href="#Atom_439_443" id="Atom_1897_1901" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="LineEnd_1902_1909" title="Not referenced locally, nor via imports">LineEnd</span></span> = &lt;<span class="cons_String">$</span>&gt;
  <a href="#Atom_439_443" id="Atom_1918_1922" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="CharacterClass_1923_1937" title="Not referenced locally, nor via imports">CharacterClass</span></span> = <a href="#CharacterClass_2089_2103" id="CharacterClass_1940_1954" title="Defined at line 79, 83, 84">CharacterClass</a>
  <a href="#Atom_439_443" id="Atom_1957_1961" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="AtomLiteral_1962_1973" title="Not referenced locally, nor via imports">AtomLiteral</span></span> = <a href="#AtomLiteral_3488_3499" id="AtomLiteral_1976_1987" title="Defined at line 121, 128, 129, 130">AtomLiteral</a>
  <a href="#Atom_439_443" id="Atom_1990_1994" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="AtomCharacter_1995_2008" title="Not referenced locally, nor via imports">AtomCharacter</span></span> = <a href="#AtomCharacter_3951_3964" id="AtomCharacter_2011_2024" title="Defined at line 137, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 226">AtomCharacter</a>
  <a href="#Atom_439_443" id="Atom_2027_2031" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="QuotedAtom_2032_2042" title="Not referenced locally, nor via imports">QuotedAtom</span></span> = &lt;\\<span class="cons_String">Q</span> &lt;<a href="#AllChars_3500_3508" id="AllChars_2051_2059" title="Defined at line 121, 131, 132, 133">AllChars</a>&gt; \\<span class="cons_String">E</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#CharacterClass_1940_1954" id="CharacterClass_2089_2103" title="Referenced at line 72, 88">CharacterClass</a> <a href="#BracketItem_2206_2217" id="BracketItem_2104_2115" title="Referenced at line 83, 84">BracketItem</a> <a href="#BracketLiteralOrBracketCharacter_2307_2339" id="BracketLiteralOrBracketCharacter_2116_2148" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a>

<span class="keyword">context-free syntax</span>

  <a href="#CharacterClass_1940_1954" id="CharacterClass_2173_2187" title="Referenced at line 72, 88">CharacterClass</a>.<span class="cons_Constructor"><span id="BracketList_2188_2199" title="Not referenced locally, nor via imports">BracketList</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#BracketItem_2104_2115" id="BracketItem_2206_2217" title="Defined at line 79, 85, 88, 89, 90">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#CharacterClass_1940_1954" id="CharacterClass_2225_2239" title="Referenced at line 72, 88">CharacterClass</a>.<span class="cons_Constructor"><span id="NegatedBracketList_2240_2258" title="Not referenced locally, nor via imports">NegatedBracketList</span></span> = &lt;<span class="cons_String">[^</span> &lt;<a href="#BracketItem_2104_2115" id="BracketItem_2266_2277" title="Defined at line 79, 85, 88, 89, 90">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#BracketItem_2206_2217" id="BracketItem_2285_2296" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="Range_2297_2302" title="Not referenced locally, nor via imports">Range</span></span> = &lt;&lt;<a href="#BracketLiteralOrBracketCharacter_2116_2148" id="BracketLiteralOrBracketCharacter_2307_2339" title="Defined at line 79, 86, 87">BracketLiteralOrBracketCharacter</a>&gt; <span class="cons_String">-</span> &lt;<a href="#BracketLiteralOrBracketCharacter_2116_2148" id="BracketLiteralOrBracketCharacter_2344_2376" title="Defined at line 79, 86, 87">BracketLiteralOrBracketCharacter</a>&gt;&gt;
  <a href="#BracketLiteralOrBracketCharacter_2307_2339" id="BracketLiteralOrBracketCharacter_2381_2413" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a> = <a href="#BracketLiteral_3473_3487" id="BracketLiteral_2416_2430" title="Defined at line 121, 125, 126, 127">BracketLiteral</a>
  <a href="#BracketLiteralOrBracketCharacter_2307_2339" id="BracketLiteralOrBracketCharacter_2433_2465" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a> = <a href="#BracketCharacter_3934_3950" id="BracketCharacter_2468_2484" title="Defined at line 137, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 227">BracketCharacter</a>
  <a href="#BracketItem_2206_2217" id="BracketItem_2487_2498" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="Union_2499_2504" title="Not referenced locally, nor via imports">Union</span></span> = <a href="#CharacterClass_2089_2103" id="CharacterClass_2507_2521" title="Defined at line 79, 83, 84">CharacterClass</a>
  <a href="#BracketItem_2206_2217" id="BracketItem_2524_2535" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="BracketLiteral_2536_2550" title="Not referenced locally, nor via imports">BracketLiteral</span></span> = <a href="#BracketLiteral_3473_3487" id="BracketLiteral_2553_2567" title="Defined at line 121, 125, 126, 127">BracketLiteral</a>
  <a href="#BracketItem_2206_2217" id="BracketItem_2570_2581" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="BracketCharacter_2582_2598" title="Not referenced locally, nor via imports">BracketCharacter</span></span> = <a href="#BracketCharacter_3934_3950" id="BracketCharacter_2601_2617" title="Defined at line 137, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 227">BracketCharacter</a>

<span class="keyword">context-free sorts</span>

  <span id="ClassKeyword_2641_2653" title="Not referenced locally, nor via imports">ClassKeyword</span>

<span class="keyword">context-free syntax</span>

  <span id="ClassKeyword_2678_2690" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="LowerClass_2691_2701" title="Not referenced locally, nor via imports">LowerClass</span></span> = &lt;<span class="cons_String">Lower</span>&gt;
  <span id="ClassKeyword_2714_2726" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="UpperClass_2727_2737" title="Not referenced locally, nor via imports">UpperClass</span></span> = &lt;<span class="cons_String">Upper</span>&gt;
  <span id="ClassKeyword_2750_2762" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="ASCIIClass_2763_2773" title="Not referenced locally, nor via imports">ASCIIClass</span></span> = &lt;<span class="cons_String">ASCII</span>&gt;
  <span id="ClassKeyword_2786_2798" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlphaClass_2799_2809" title="Not referenced locally, nor via imports">AlphaClass</span></span> = &lt;<span class="cons_String">Alpha</span>&gt;
  <span id="ClassKeyword_2822_2834" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="DigitClass_2835_2845" title="Not referenced locally, nor via imports">DigitClass</span></span> = &lt;<span class="cons_String">Digit</span>&gt;
  <span id="ClassKeyword_2858_2870" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlnumClass_2871_2881" title="Not referenced locally, nor via imports">AlnumClass</span></span> = &lt;<span class="cons_String">Alnum</span>&gt;
  <span id="ClassKeyword_2894_2906" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="PunctClass_2907_2917" title="Not referenced locally, nor via imports">PunctClass</span></span> = &lt;<span class="cons_String">Punct</span>&gt;
  <span id="ClassKeyword_2930_2942" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="GraphClass_2943_2953" title="Not referenced locally, nor via imports">GraphClass</span></span> = &lt;<span class="cons_String">Graph</span>&gt;
  <span id="ClassKeyword_2966_2978" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="PrintClass_2979_2989" title="Not referenced locally, nor via imports">PrintClass</span></span> = &lt;<span class="cons_String">Print</span>&gt;
  <span id="ClassKeyword_3002_3014" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="BlankClass_3015_3025" title="Not referenced locally, nor via imports">BlankClass</span></span> = &lt;<span class="cons_String">Blank</span>&gt;
  <span id="ClassKeyword_3038_3050" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="CntrlClass_3051_3061" title="Not referenced locally, nor via imports">CntrlClass</span></span> = &lt;<span class="cons_String">Cntrl</span>&gt;
  <span id="ClassKeyword_3074_3086" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="XDigitClass_3087_3098" title="Not referenced locally, nor via imports">XDigitClass</span></span> = &lt;<span class="cons_String">XDigit</span>&gt;
  <span id="ClassKeyword_3112_3124" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="WhiteSpace_3125_3135" title="Not referenced locally, nor via imports">WhiteSpace</span></span> = &lt;<span class="cons_String">Space</span>&gt;
  <span id="ClassKeyword_3148_3160" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsLowerCase_3161_3176" title="Not referenced locally, nor via imports">JavaIsLowerCase</span></span> = &lt;<span class="cons_String">javaLowerCase</span>&gt;
  <span id="ClassKeyword_3197_3209" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsUpperCase_3210_3225" title="Not referenced locally, nor via imports">JavaIsUpperCase</span></span> = &lt;<span class="cons_String">javaUpperCase</span>&gt;
  <span id="ClassKeyword_3246_3258" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsWhitespace_3259_3275" title="Not referenced locally, nor via imports">JavaIsWhitespace</span></span> = &lt;<span class="cons_String">javaWhitespace</span>&gt;
  <span id="ClassKeyword_3297_3309" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsMirrored_3310_3324" title="Not referenced locally, nor via imports">JavaIsMirrored</span></span> = &lt;<span class="cons_String">javaMirrored</span>&gt;
  <span id="ClassKeyword_3344_3356" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="GreekBlock_3357_3367" title="Not referenced locally, nor via imports">GreekBlock</span></span> = &lt;<span class="cons_String">InGreek</span>&gt;
  <span id="ClassKeyword_3382_3394" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="UppercaseLetter_3395_3410" title="Not referenced locally, nor via imports">UppercaseLetter</span></span> = &lt;<span class="cons_String">Lu</span>&gt;
  <span id="ClassKeyword_3420_3432" title="Not referenced locally, nor via imports">ClassKeyword</span>.<span class="cons_Constructor"><span id="CurrencySymbol_3433_3447" title="Not referenced locally, nor via imports">CurrencySymbol</span></span> = &lt;<span class="cons_String">Sc</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#BracketLiteral_2416_2430" id="BracketLiteral_3473_3487" title="Referenced at line 86, 89">BracketLiteral</a> <a href="#AtomLiteral_1976_1987" id="AtomLiteral_3488_3499" title="Referenced at line 73">AtomLiteral</a> <a href="#AllChars_2051_2059" id="AllChars_3500_3508" title="Referenced at line 75">AllChars</a>

<span class="keyword">lexical syntax</span>

  <a href="#BracketLiteral_2416_2430" id="BracketLiteral_3528_3542" title="Referenced at line 86, 89">BracketLiteral</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\$\*\+\?\.\}\|]
  <a href="#BracketLiteral_2416_2430" id="BracketLiteral_3601_3615" title="Referenced at line 86, 89">BracketLiteral</a> = <span class="cons_Lit">"/"</span>
  <a href="#BracketLiteral_2416_2430" id="BracketLiteral_3624_3638" title="Referenced at line 86, 89">BracketLiteral</a> = [\&amp;\]\-] {<span class="keyword">reject</span>}
  <a href="#AtomLiteral_1976_1987" id="AtomLiteral_3661_3672" title="Referenced at line 73">AtomLiteral</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\&amp;\]\-]
  <a href="#AtomLiteral_1976_1987" id="AtomLiteral_3723_3734" title="Referenced at line 73">AtomLiteral</a> = <span class="cons_Lit">"/"</span>
  <a href="#AtomLiteral_1976_1987" id="AtomLiteral_3743_3754" title="Referenced at line 73">AtomLiteral</a> = [\}\)\|\[] {<span class="keyword">reject</span>}
  <a href="#AllChars_2051_2059" id="AllChars_3779_3787" title="Referenced at line 75">AllChars</a> = [\\\|\$\*\+\?\.\{\}\(\)\&amp;\]\-\[\^\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\t\n\r]*
  <a href="#AllChars_2051_2059" id="AllChars_3871_3879" title="Referenced at line 75">AllChars</a> = <span class="cons_Lit">"/"</span>
  <a href="#AllChars_2051_2059" id="AllChars_3888_3896" title="Referenced at line 75">AllChars</a> = <a href="#DoubleQuote_3965_3976" id="DoubleQuote_3899_3910" title="Defined at line 137, 143">DoubleQuote</a>

<span class="keyword">context-free sorts</span>

  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_3934_3950" title="Referenced at line 87, 90">BracketCharacter</a> <a href="#AtomCharacter_2011_2024" id="AtomCharacter_3951_3964" title="Referenced at line 74">AtomCharacter</a> <a href="#DoubleQuote_3899_3910" id="DoubleQuote_3965_3976" title="Referenced at line 133, 168, 193, 240">DoubleQuote</a> <a href="#OctalChar_5283_5292" id="OctalChar_3977_3986" title="Referenced at line 169, 194">OctalChar</a> <a href="#HexHexChar_5314_5324" id="HexHexChar_3987_3997" title="Referenced at line 170, 195">HexHexChar</a> <a href="#DecHexChar_5346_5356" id="DecHexChar_3998_4008" title="Referenced at line 171, 196">DecHexChar</a> <a href="#Tab_5378_5381" id="Tab_4009_4012" title="Referenced at line 172, 197">Tab</a> <a href="#Newline_5403_5410" id="Newline_4013_4020" title="Referenced at line 173, 198">Newline</a> <a href="#ReturnAtom_5432_5442" id="ReturnAtom_4021_4031" title="Referenced at line 174, 199">ReturnAtom</a> <a href="#Formfeed_5464_5472" id="Formfeed_4032_4040" title="Referenced at line 175, 200">Formfeed</a> <a href="#Alarm_5494_5499" id="Alarm_4041_4046" title="Referenced at line 176, 201">Alarm</a> <a href="#Escape_5521_5527" id="Escape_4047_4053" title="Referenced at line 177, 202">Escape</a>
  <a href="#WordChar_5549_5557" id="WordChar_4056_4064" title="Referenced at line 178, 203">WordChar</a> <a href="#NonWordChar_5579_5590" id="NonWordChar_4065_4076" title="Referenced at line 179, 204">NonWordChar</a> <a href="#WhiteSpaceChar_5612_5626" id="WhiteSpaceChar_4077_4091" title="Referenced at line 180, 205">WhiteSpaceChar</a> <a href="#DigitChar_5687_5696" id="DigitChar_4092_4101" title="Referenced at line 182, 207">DigitChar</a> <a href="#NonDigitChar_5718_5730" id="NonDigitChar_4102_4114" title="Referenced at line 183, 208">NonDigitChar</a> <a href="#ControlCharacter_5752_5768" id="ControlCharacter_4115_4131" title="Referenced at line 184, 209">ControlCharacter</a> <a href="#WordBoundry_5790_5801" id="WordBoundry_4132_4143" title="Referenced at line 185, 210">WordBoundry</a> <a href="#NonWordBoundry_5823_5837" id="NonWordBoundry_4144_4158" title="Referenced at line 186, 211">NonWordBoundry</a> <a href="#InputBeginBoundry_5859_5876" id="InputBeginBoundry_4159_4176" title="Referenced at line 187, 212">InputBeginBoundry</a>
  <a href="#PrevMatchEndBoundry_5898_5917" id="PrevMatchEndBoundry_4179_4198" title="Referenced at line 188, 213">PrevMatchEndBoundry</a> <a href="#EndInputBoundry_5939_5954" id="EndInputBoundry_4199_4214" title="Referenced at line 189, 214">EndInputBoundry</a> <a href="#EndInputFinalBoundry_5976_5996" id="EndInputFinalBoundry_4215_4235" title="Referenced at line 190, 215">EndInputFinalBoundry</a> <a href="#Space_6053_6058" id="Space_4236_4241" title="Referenced at line 192, 217">Space</a> <a href="#NonWhiteSpaceChar_5648_5665" id="NonWhiteSpaceChar_4242_4259" title="Referenced at line 181, 206">NonWhiteSpaceChar</a> <a href="#BackReference_6018_6031" id="BackReference_4260_4273" title="Referenced at line 191, 216">BackReference</a>

<span class="keyword">context-free syntax</span>

  <a href="#DoubleQuote_3899_3910" id="DoubleQuote_4298_4309" title="Referenced at line 133, 168, 193, 240">DoubleQuote</a>.<span class="cons_Constructor"><span id="DoubleQuote_4310_4321" title="Not referenced locally, nor via imports">DoubleQuote</span></span> = &lt;<span class="cons_String">"</span>&gt;
  <a href="#OctalChar_5283_5292" id="OctalChar_4330_4339" title="Referenced at line 169, 194">OctalChar</a>.<span class="cons_Constructor"><span id="OctalChar_4340_4349" title="Not referenced locally, nor via imports">OctalChar</span></span> = &lt;\\<span class="cons_String">0</span> &lt;<a href="#OctalValue_7301_7311" id="OctalValue_4358_4368" title="Defined at line 244, 250, 251, 252">OctalValue</a>&gt;&gt;
  <a href="#HexHexChar_5314_5324" id="HexHexChar_4373_4383" title="Referenced at line 170, 195">HexHexChar</a>.<span class="cons_Constructor"><span id="HexHexChar_4384_4394" title="Not referenced locally, nor via imports">HexHexChar</span></span> = &lt;\\<span class="cons_String">x</span> &lt;<a href="#TwoHexValue_7312_7323" id="TwoHexValue_4403_4414" title="Defined at line 244, 253">TwoHexValue</a>&gt;&gt;
  <a href="#DecHexChar_5346_5356" id="DecHexChar_4419_4429" title="Referenced at line 171, 196">DecHexChar</a>.<span class="cons_Constructor"><span id="DecHexChar_4430_4440" title="Not referenced locally, nor via imports">DecHexChar</span></span> = &lt;\\<span class="cons_String">u</span> &lt;<a href="#FourHexValue_7324_7336" id="FourHexValue_4449_4461" title="Defined at line 244, 254">FourHexValue</a>&gt;&gt;
  <a href="#Tab_5378_5381" id="Tab_4466_4469" title="Referenced at line 172, 197">Tab</a>.<span class="cons_Constructor"><span id="Tab_4470_4473" title="Not referenced locally, nor via imports">Tab</span></span> = &lt;\\<span class="cons_String">t</span>&gt;
  <a href="#Newline_5403_5410" id="Newline_4484_4491" title="Referenced at line 173, 198">Newline</a>.<span class="cons_Constructor"><span id="Newline_4492_4499" title="Not referenced locally, nor via imports">Newline</span></span> = &lt;\\<span class="cons_String">n</span>&gt;
  <a href="#ReturnAtom_5432_5442" id="ReturnAtom_4510_4520" title="Referenced at line 174, 199">ReturnAtom</a>.<span class="cons_Constructor"><span id="ReturnAtom_4521_4531" title="Not referenced locally, nor via imports">ReturnAtom</span></span> = &lt;\\<span class="cons_String">r</span>&gt;
  <a href="#Formfeed_5464_5472" id="Formfeed_4542_4550" title="Referenced at line 175, 200">Formfeed</a>.<span class="cons_Constructor"><span id="Formfeed_4551_4559" title="Not referenced locally, nor via imports">Formfeed</span></span> = &lt;\\<span class="cons_String">f</span>&gt;
  <a href="#Alarm_5494_5499" id="Alarm_4570_4575" title="Referenced at line 176, 201">Alarm</a>.<span class="cons_Constructor"><span id="Alarm_4576_4581" title="Not referenced locally, nor via imports">Alarm</span></span> = &lt;\\<span class="cons_String">a</span>&gt;
  <a href="#Escape_5521_5527" id="Escape_4592_4598" title="Referenced at line 177, 202">Escape</a>.<span class="cons_Constructor"><span id="Escape_4599_4605" title="Not referenced locally, nor via imports">Escape</span></span> = &lt;\\<span class="cons_String">e</span>&gt;
  <a href="#WordChar_5549_5557" id="WordChar_4616_4624" title="Referenced at line 178, 203">WordChar</a>.<span class="cons_Constructor"><span id="WordChar_4625_4633" title="Not referenced locally, nor via imports">WordChar</span></span> = &lt;\\<span class="cons_String">w</span>&gt;
  <a href="#NonWordChar_5579_5590" id="NonWordChar_4644_4655" title="Referenced at line 179, 204">NonWordChar</a>.<span class="cons_Constructor"><span id="NonWordChar_4656_4667" title="Not referenced locally, nor via imports">NonWordChar</span></span> = &lt;\\<span class="cons_String">W</span>&gt;
  <a href="#WhiteSpaceChar_5612_5626" id="WhiteSpaceChar_4678_4692" title="Referenced at line 180, 205">WhiteSpaceChar</a>.<span class="cons_Constructor"><span id="WhiteSpaceChar_4693_4707" title="Not referenced locally, nor via imports">WhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">s</span>&gt;
  <a href="#NonWhiteSpaceChar_5648_5665" id="NonWhiteSpaceChar_4718_4735" title="Referenced at line 181, 206">NonWhiteSpaceChar</a>.<span class="cons_Constructor"><span id="NonWhiteSpaceChar_4736_4753" title="Not referenced locally, nor via imports">NonWhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">S</span>&gt;
  <a href="#DigitChar_5687_5696" id="DigitChar_4764_4773" title="Referenced at line 182, 207">DigitChar</a>.<span class="cons_Constructor"><span id="DigitChar_4774_4783" title="Not referenced locally, nor via imports">DigitChar</span></span> = &lt;\\<span class="cons_String">d</span>&gt;
  <a href="#NonDigitChar_5718_5730" id="NonDigitChar_4794_4806" title="Referenced at line 183, 208">NonDigitChar</a>.<span class="cons_Constructor"><span id="NonDigitChar_4807_4819" title="Not referenced locally, nor via imports">NonDigitChar</span></span> = &lt;\\<span class="cons_String">D</span>&gt;
  <a href="#ControlCharacter_5752_5768" id="ControlCharacter_4830_4846" title="Referenced at line 184, 209">ControlCharacter</a>.<span class="cons_Constructor"><span id="ControlCharacter_4847_4863" title="Not referenced locally, nor via imports">ControlCharacter</span></span> = &lt;\\<span class="cons_String">c</span> &lt;<a href="#ControlValue_7354_7366" id="ControlValue_4872_4884" title="Defined at line 244, 255, 256">ControlValue</a>&gt;&gt;
  <a href="#WordBoundry_5790_5801" id="WordBoundry_4889_4900" title="Referenced at line 185, 210">WordBoundry</a>.<span class="cons_Constructor"><span id="WordBoundry_4901_4912" title="Not referenced locally, nor via imports">WordBoundry</span></span> = &lt;\\<span class="cons_String">b</span>&gt;
  <a href="#NonWordBoundry_5823_5837" id="NonWordBoundry_4923_4937" title="Referenced at line 186, 211">NonWordBoundry</a>.<span class="cons_Constructor"><span id="NonWordBoundry_4938_4952" title="Not referenced locally, nor via imports">NonWordBoundry</span></span> = &lt;\\<span class="cons_String">B</span>&gt;
  <a href="#InputBeginBoundry_5859_5876" id="InputBeginBoundry_4963_4980" title="Referenced at line 187, 212">InputBeginBoundry</a>.<span class="cons_Constructor"><span id="InputBeginBoundry_4981_4998" title="Not referenced locally, nor via imports">InputBeginBoundry</span></span> = &lt;\\<span class="cons_String">A</span>&gt;
  <a href="#PrevMatchEndBoundry_5898_5917" id="PrevMatchEndBoundry_5009_5028" title="Referenced at line 188, 213">PrevMatchEndBoundry</a>.<span class="cons_Constructor"><span id="PrevMatchEndBoundry_5029_5048" title="Not referenced locally, nor via imports">PrevMatchEndBoundry</span></span> = &lt;\\<span class="cons_String">G</span>&gt;
  <a href="#EndInputBoundry_5939_5954" id="EndInputBoundry_5059_5074" title="Referenced at line 189, 214">EndInputBoundry</a>.<span class="cons_Constructor"><span id="EndInputBoundry_5075_5090" title="Not referenced locally, nor via imports">EndInputBoundry</span></span> = &lt;\\<span class="cons_String">Z</span>&gt;
  <a href="#EndInputFinalBoundry_5976_5996" id="EndInputFinalBoundry_5101_5121" title="Referenced at line 190, 215">EndInputFinalBoundry</a>.<span class="cons_Constructor"><span id="EndInputFinalBoundry_5122_5142" title="Not referenced locally, nor via imports">EndInputFinalBoundry</span></span> = &lt;\\<span class="cons_String">z</span>&gt;
  <a href="#BackReference_6018_6031" id="BackReference_5153_5166" title="Referenced at line 191, 216">BackReference</a>.<span class="cons_Constructor"><span id="BackReference_5167_5180" title="Not referenced locally, nor via imports">BackReference</span></span> = &lt;\\ &lt;<a href="#BackReferenceLex_7337_7353" id="BackReferenceLex_5188_5204" title="Defined at line 244, 249">BackReferenceLex</a>&gt;&gt;
  <a href="#Space_6053_6058" id="Space_5209_5214" title="Referenced at line 192, 217">Space</a>.<span class="cons_Constructor"><span id="Space_5215_5220" title="Not referenced locally, nor via imports">Space</span></span> = <span class="cons_Lit">"\\ "</span>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5231_5247" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DoubleQuote_3965_3976" id="DoubleQuote_5250_5261" title="Defined at line 137, 143">DoubleQuote</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5264_5280" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#OctalChar_3977_3986" id="OctalChar_5283_5292" title="Defined at line 137, 144">OctalChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5295_5311" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#HexHexChar_3987_3997" id="HexHexChar_5314_5324" title="Defined at line 137, 145">HexHexChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5327_5343" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DecHexChar_3998_4008" id="DecHexChar_5346_5356" title="Defined at line 137, 146">DecHexChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5359_5375" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Tab_4009_4012" id="Tab_5378_5381" title="Defined at line 137, 147">Tab</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5384_5400" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Newline_4013_4020" id="Newline_5403_5410" title="Defined at line 137, 148">Newline</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5413_5429" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#ReturnAtom_4021_4031" id="ReturnAtom_5432_5442" title="Defined at line 137, 149">ReturnAtom</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5445_5461" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Formfeed_4032_4040" id="Formfeed_5464_5472" title="Defined at line 137, 150">Formfeed</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5475_5491" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Alarm_4041_4046" id="Alarm_5494_5499" title="Defined at line 137, 151">Alarm</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5502_5518" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Escape_4047_4053" id="Escape_5521_5527" title="Defined at line 137, 152">Escape</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5530_5546" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WordChar_4056_4064" id="WordChar_5549_5557" title="Defined at line 138, 153">WordChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5560_5576" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWordChar_4065_4076" id="NonWordChar_5579_5590" title="Defined at line 138, 154">NonWordChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5593_5609" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WhiteSpaceChar_4077_4091" id="WhiteSpaceChar_5612_5626" title="Defined at line 138, 155">WhiteSpaceChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5629_5645" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWhiteSpaceChar_4242_4259" id="NonWhiteSpaceChar_5648_5665" title="Defined at line 139, 156">NonWhiteSpaceChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5668_5684" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DigitChar_4092_4101" id="DigitChar_5687_5696" title="Defined at line 138, 157">DigitChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5699_5715" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonDigitChar_4102_4114" id="NonDigitChar_5718_5730" title="Defined at line 138, 158">NonDigitChar</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5733_5749" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#ControlCharacter_4115_4131" id="ControlCharacter_5752_5768" title="Defined at line 138, 159">ControlCharacter</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5771_5787" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WordBoundry_4132_4143" id="WordBoundry_5790_5801" title="Defined at line 138, 160">WordBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5804_5820" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWordBoundry_4144_4158" id="NonWordBoundry_5823_5837" title="Defined at line 138, 161">NonWordBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5840_5856" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#InputBeginBoundry_4159_4176" id="InputBeginBoundry_5859_5876" title="Defined at line 138, 162">InputBeginBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5879_5895" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#PrevMatchEndBoundry_4179_4198" id="PrevMatchEndBoundry_5898_5917" title="Defined at line 139, 163">PrevMatchEndBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5920_5936" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#EndInputBoundry_4199_4214" id="EndInputBoundry_5939_5954" title="Defined at line 139, 164">EndInputBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5957_5973" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#EndInputFinalBoundry_4215_4235" id="EndInputFinalBoundry_5976_5996" title="Defined at line 139, 165">EndInputFinalBoundry</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_5999_6015" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#BackReference_4260_4273" id="BackReference_6018_6031" title="Defined at line 139, 166">BackReference</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_6034_6050" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Space_4236_4241" id="Space_6053_6058" title="Defined at line 139, 167">Space</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6061_6074" title="Referenced at line 74">AtomCharacter</a> = <a href="#DoubleQuote_3965_3976" id="DoubleQuote_6077_6088" title="Defined at line 137, 143">DoubleQuote</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6091_6104" title="Referenced at line 74">AtomCharacter</a> = <a href="#OctalChar_3977_3986" id="OctalChar_6107_6116" title="Defined at line 137, 144">OctalChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6119_6132" title="Referenced at line 74">AtomCharacter</a> = <a href="#HexHexChar_3987_3997" id="HexHexChar_6135_6145" title="Defined at line 137, 145">HexHexChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6148_6161" title="Referenced at line 74">AtomCharacter</a> = <a href="#DecHexChar_3998_4008" id="DecHexChar_6164_6174" title="Defined at line 137, 146">DecHexChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6177_6190" title="Referenced at line 74">AtomCharacter</a> = <a href="#Tab_4009_4012" id="Tab_6193_6196" title="Defined at line 137, 147">Tab</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6199_6212" title="Referenced at line 74">AtomCharacter</a> = <a href="#Newline_4013_4020" id="Newline_6215_6222" title="Defined at line 137, 148">Newline</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6225_6238" title="Referenced at line 74">AtomCharacter</a> = <a href="#ReturnAtom_4021_4031" id="ReturnAtom_6241_6251" title="Defined at line 137, 149">ReturnAtom</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6254_6267" title="Referenced at line 74">AtomCharacter</a> = <a href="#Formfeed_4032_4040" id="Formfeed_6270_6278" title="Defined at line 137, 150">Formfeed</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6281_6294" title="Referenced at line 74">AtomCharacter</a> = <a href="#Alarm_4041_4046" id="Alarm_6297_6302" title="Defined at line 137, 151">Alarm</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6305_6318" title="Referenced at line 74">AtomCharacter</a> = <a href="#Escape_4047_4053" id="Escape_6321_6327" title="Defined at line 137, 152">Escape</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6330_6343" title="Referenced at line 74">AtomCharacter</a> = <a href="#WordChar_4056_4064" id="WordChar_6346_6354" title="Defined at line 138, 153">WordChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6357_6370" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWordChar_4065_4076" id="NonWordChar_6373_6384" title="Defined at line 138, 154">NonWordChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6387_6400" title="Referenced at line 74">AtomCharacter</a> = <a href="#WhiteSpaceChar_4077_4091" id="WhiteSpaceChar_6403_6417" title="Defined at line 138, 155">WhiteSpaceChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6420_6433" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWhiteSpaceChar_4242_4259" id="NonWhiteSpaceChar_6436_6453" title="Defined at line 139, 156">NonWhiteSpaceChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6456_6469" title="Referenced at line 74">AtomCharacter</a> = <a href="#DigitChar_4092_4101" id="DigitChar_6472_6481" title="Defined at line 138, 157">DigitChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6484_6497" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonDigitChar_4102_4114" id="NonDigitChar_6500_6512" title="Defined at line 138, 158">NonDigitChar</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6515_6528" title="Referenced at line 74">AtomCharacter</a> = <a href="#ControlCharacter_4115_4131" id="ControlCharacter_6531_6547" title="Defined at line 138, 159">ControlCharacter</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6550_6563" title="Referenced at line 74">AtomCharacter</a> = <a href="#WordBoundry_4132_4143" id="WordBoundry_6566_6577" title="Defined at line 138, 160">WordBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6580_6593" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWordBoundry_4144_4158" id="NonWordBoundry_6596_6610" title="Defined at line 138, 161">NonWordBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6613_6626" title="Referenced at line 74">AtomCharacter</a> = <a href="#InputBeginBoundry_4159_4176" id="InputBeginBoundry_6629_6646" title="Defined at line 138, 162">InputBeginBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6649_6662" title="Referenced at line 74">AtomCharacter</a> = <a href="#PrevMatchEndBoundry_4179_4198" id="PrevMatchEndBoundry_6665_6684" title="Defined at line 139, 163">PrevMatchEndBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6687_6700" title="Referenced at line 74">AtomCharacter</a> = <a href="#EndInputBoundry_4199_4214" id="EndInputBoundry_6703_6718" title="Defined at line 139, 164">EndInputBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6721_6734" title="Referenced at line 74">AtomCharacter</a> = <a href="#EndInputFinalBoundry_4215_4235" id="EndInputFinalBoundry_6737_6757" title="Defined at line 139, 165">EndInputFinalBoundry</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6760_6773" title="Referenced at line 74">AtomCharacter</a> = <a href="#BackReference_4260_4273" id="BackReference_6776_6789" title="Defined at line 139, 166">BackReference</a>
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6792_6805" title="Referenced at line 74">AtomCharacter</a> = <a href="#Space_4236_4241" id="Space_6808_6813" title="Defined at line 139, 167">Space</a>

<span class="keyword">context-free sorts</span>

  <a href="#QuotablePatternSymbol_6911_6932" id="QuotablePatternSymbol_6837_6858" title="Referenced at line 225">QuotablePatternSymbol</a> <a href="#Quoted_6953_6959" id="Quoted_6859_6865" title="Referenced at line 226, 227">Quoted</a>

<span class="keyword">context-free syntax</span>

  <a href="#Quoted_6953_6959" id="Quoted_6890_6896" title="Referenced at line 226, 227">Quoted</a>.<span class="cons_Constructor"><span id="Quoted_6897_6903" title="Not referenced locally, nor via imports">Quoted</span></span> = &lt;\\ &lt;<a href="#QuotablePatternSymbol_6837_6858" id="QuotablePatternSymbol_6911_6932" title="Defined at line 221, 239, 240">QuotablePatternSymbol</a>&gt;&gt;
  <a href="#AtomCharacter_2011_2024" id="AtomCharacter_6937_6950" title="Referenced at line 74">AtomCharacter</a> = <a href="#Quoted_6859_6865" id="Quoted_6953_6959" title="Defined at line 221, 225">Quoted</a>
  <a href="#BracketCharacter_2468_2484" id="BracketCharacter_6962_6978" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Quoted_6859_6865" id="Quoted_6981_6987" title="Defined at line 221, 225">Quoted</a>

<span class="keyword">lexical sorts</span>

  <a href="#QuotablePatternSymbolLex_7212_7236" id="QuotablePatternSymbolLex_7006_7030" title="Referenced at line 239">QuotablePatternSymbolLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#QuotablePatternSymbolLex_7212_7236" id="QuotablePatternSymbolLex_7050_7074" title="Referenced at line 239">QuotablePatternSymbolLex</a> = [\|\$\*\+\?\.\{\}\(\)\&amp;\]\[\-\^\\\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\/]

<span class="keyword">context-free syntax</span>

  <a href="#QuotablePatternSymbol_6911_6932" id="QuotablePatternSymbol_7166_7187" title="Referenced at line 225">QuotablePatternSymbol</a>.<span class="cons_Constructor"><span id="QuotablePatternSymbol_7188_7209" title="Not referenced locally, nor via imports">QuotablePatternSymbol</span></span> = <a href="#QuotablePatternSymbolLex_7006_7030" id="QuotablePatternSymbolLex_7212_7236" title="Defined at line 231, 235">QuotablePatternSymbolLex</a>
  <a href="#QuotablePatternSymbol_6911_6932" id="QuotablePatternSymbol_7239_7260" title="Referenced at line 225">QuotablePatternSymbol</a> = <a href="#DoubleQuote_3965_3976" id="DoubleQuote_7263_7274" title="Defined at line 137, 143">DoubleQuote</a>

<span class="keyword">lexical sorts</span>

  <a href="#Integer_583_590" id="Integer_7293_7300" title="Referenced at line 35, 36, 37, 41, 42, 43, 47, 48, 49">Integer</a> <a href="#OctalValue_4358_4368" id="OctalValue_7301_7311" title="Referenced at line 144">OctalValue</a> <a href="#TwoHexValue_4403_4414" id="TwoHexValue_7312_7323" title="Referenced at line 145">TwoHexValue</a> <a href="#FourHexValue_4449_4461" id="FourHexValue_7324_7336" title="Referenced at line 146">FourHexValue</a> <a href="#BackReferenceLex_5188_5204" id="BackReferenceLex_7337_7353" title="Referenced at line 166">BackReferenceLex</a> <a href="#ControlValue_4872_4884" id="ControlValue_7354_7366" title="Referenced at line 159">ControlValue</a>

<span class="keyword">lexical syntax</span>

  <a href="#Integer_583_590" id="Integer_7386_7393" title="Referenced at line 35, 36, 37, 41, 42, 43, 47, 48, 49">Integer</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#BackReferenceLex_5188_5204" id="BackReferenceLex_7405_7421" title="Referenced at line 166">BackReferenceLex</a> = [<span class="cons_Regular">1</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]*
  <a href="#OctalValue_4358_4368" id="OctalValue_7439_7449" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_4358_4368" id="OctalValue_7460_7470" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_4358_4368" id="OctalValue_7487_7497" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">3</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#TwoHexValue_4403_4414" id="TwoHexValue_7520_7531" title="Referenced at line 145">TwoHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#FourHexValue_4449_4461" id="FourHexValue_7560_7572" title="Referenced at line 146">FourHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#ControlValue_4872_4884" id="ControlValue_7625_7637" title="Referenced at line 159">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#ControlValue_4872_4884" id="ControlValue_7648_7660" title="Referenced at line 159">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <a href="#RegexId_1746_1753" id="RegexId_7698_7705" title="Referenced at line 66, 67">RegexId</a>

<span class="keyword">context-free syntax</span>

  <a href="#RegexId_1746_1753" id="RegexId_7730_7737" title="Referenced at line 66, 67">RegexId</a>.<span class="cons_Constructor"><span id="RegexId_7738_7745" title="Not referenced locally, nor via imports">RegexId</span></span> = <a href="#RegexID_7774_7781" id="RegexID_7748_7755" title="Defined at line 268, 272, 273, 274, 275">RegexID</a>

<span class="keyword">lexical sorts</span>

  <a href="#RegexID_7748_7755" id="RegexID_7774_7781" title="Referenced at line 264, 279">RegexID</a>

<span class="keyword">lexical syntax</span>

  <a href="#RegexID_7748_7755" id="RegexID_7801_7808" title="Referenced at line 264, 279">RegexID</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span>\_\$] [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]*
  <a href="#RegexID_7748_7755" id="RegexID_7843_7850" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <a href="#RegexID_7748_7755" id="RegexID_7871_7878" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <a href="#RegexID_7748_7755" id="RegexID_7900_7907" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#RegexID_7774_7781" id="RegexID_7951_7958" title="Defined at line 268, 272, 273, 274, 275">RegexID</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]

</code></pre></td></tr></tbody></table></div>