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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Regex_20_3" id="WebDSL-Regex_1_8" title="Referenced at ../webdsl-statix.sdf3 line 20">WebDSL-Regex</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_6_3" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>

<span class="keyword">context-free sorts</span>

  <a href="#Pattern_15_31" id="Pattern_10_3" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a> <a href="#RegexExp_14_21" id="RegexExp_10_11" title="Referenced at line 14">RegexExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_14_42" id="Exp_14_3" title="Referenced at line 14">Exp</a>.<span class="cons_Constructor"><span id="RegexCall_14_7" title="Not referenced">RegexCall</span></span> = &lt;&lt;<a href="#RegexExp_10_11" id="RegexExp_14_21" title="Defined at line 10, 15">RegexExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_14_34" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_14_3" id="Exp_14_42" title="Defined at line 14">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#RegexExp_14_21" id="RegexExp_15_3" title="Referenced at line 14">RegexExp</a>.<span class="cons_Constructor"><span id="RegexPattern_15_12" title="Not referenced">RegexPattern</span></span> = &lt;<span class="cons_String">/</span> &lt;<a href="#Pattern_10_3" id="Pattern_15_31" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">/</span>&gt;
  <a href="#Pattern_15_31" id="Pattern_16_3" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a>.<span class="cons_Constructor"><span id="SingleBranch_16_11" title="Not referenced">SingleBranch</span></span> = <a href="#Branche_21_3" id="Branche_16_26" title="Defined at line 21, 25">Branche</a>
  <a href="#Pattern_15_31" id="Pattern_17_3" title="Referenced at line 15, 17, 60, 61, 62, 63, 64, 65, 66, 67">Pattern</a>.<span class="cons_Constructor"><span id="TupleBranch_17_11" title="Not referenced">TupleBranch</span></span> = &lt;&lt;<a href="#Pattern_10_3" id="Pattern_17_27" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">|</span> &lt;<a href="#Pattern_10_3" id="Pattern_17_39" title="Defined at line 10, 16, 17">Pattern</a>&gt;&gt; {<span class="keyword">right</span>}

<span class="keyword">context-free sorts</span>

  <a href="#Branche_16_26" id="Branche_21_3" title="Referenced at line 16">Branche</a> <a href="#Piece_25_22" id="Piece_21_11" title="Referenced at line 25">Piece</a>

<span class="keyword">context-free syntax</span>

  <a href="#Branche_16_26" id="Branche_25_3" title="Referenced at line 16">Branche</a>.<span class="cons_Constructor"><span id="Pieces_25_11" title="Not referenced">Pieces</span></span> = &lt;&lt;<a href="#Piece_21_11" id="Piece_25_22" title="Defined at line 21, 26, 27">Piece</a>+&gt;&gt;
  <a href="#Piece_25_22" id="Piece_26_3" title="Referenced at line 25">Piece</a>.<span class="cons_Constructor"><span id="SingleAtom_26_9" title="Not referenced">SingleAtom</span></span> = <a href="#Atom_56_3" id="Atom_26_22" title="Defined at line 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75">Atom</a>
  <a href="#Piece_25_22" id="Piece_27_3" title="Referenced at line 25">Piece</a>.<span class="cons_Constructor"><span id="QuantifiedAtom_27_9" title="Not referenced">QuantifiedAtom</span></span> = &lt;&lt;<a href="#Atom_56_3" id="Atom_27_28" title="Defined at line 56, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75">Atom</a>&gt; &lt;<a href="#Quantifier_31_3" id="Quantifier_27_35" title="Defined at line 31, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52">Quantifier</a>&gt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Quantifier_27_35" id="Quantifier_31_3" title="Referenced at line 27">Quantifier</a>

<span class="keyword">context-free syntax</span>

  <a href="#Quantifier_27_35" id="Quantifier_35_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyExactBound_35_14" title="Not referenced">GreedyExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_35_37" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_36_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerBound_36_14" title="Not referenced">GreedyLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_36_37" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_37_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerUpperBound_37_14" title="Not referenced">GreedyLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_37_42" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_37_54" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_38_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOnceOrNot_38_14" title="Not referenced">GreedyOnceOrNot</span></span> = &lt;<span class="cons_String">?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_39_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyZeroOrMore_39_14" title="Not referenced">GreedyZeroOrMore</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_40_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOneOrMore_40_14" title="Not referenced">GreedyOneOrMore</span></span> = &lt;<span class="cons_String">+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_41_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantExactBound_41_14" title="Not referenced">ReluctantExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_41_40" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_42_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerBound_42_14" title="Not referenced">ReluctantLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_42_40" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_43_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerUpperBound_43_14" title="Not referenced">ReluctantLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_43_45" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_43_57" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_44_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOnceOrNot_44_14" title="Not referenced">ReluctantOnceOrNot</span></span> = &lt;<span class="cons_String">??</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_45_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantZeroOrMore_45_14" title="Not referenced">ReluctantZeroOrMore</span></span> = &lt;<span class="cons_String">*?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_46_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOneOrMore_46_14" title="Not referenced">ReluctantOneOrMore</span></span> = &lt;<span class="cons_String">+?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_47_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveExactBound_47_14" title="Not referenced">PossessiveExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_47_41" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_48_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerBound_48_14" title="Not referenced">PossessiveLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_48_41" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_49_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerUpperBound_49_14" title="Not referenced">PossessiveLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_49_46" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_49_58" title="Defined at line 244, 248">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_50_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOnceOrNot_50_14" title="Not referenced">PossessiveOnceOrNot</span></span> = &lt;<span class="cons_String">?+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_51_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveZeroOrMore_51_14" title="Not referenced">PossessiveZeroOrMore</span></span> = &lt;<span class="cons_String">*+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_52_3" title="Referenced at line 27">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOneOrMore_52_14" title="Not referenced">PossessiveOneOrMore</span></span> = &lt;<span class="cons_String">++</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Atom_26_22" id="Atom_56_3" title="Referenced at line 26, 27">Atom</a>

<span class="keyword">context-free syntax</span>

  <a href="#Atom_26_22" id="Atom_60_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="Capture_60_8" title="Not referenced">Capture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_10_3" id="Pattern_60_22" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_61_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NonCapture_61_8" title="Not referenced">NonCapture</span></span> = &lt;<span class="cons_String">(?:</span> &lt;<a href="#Pattern_10_3" id="Pattern_61_27" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_62_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PositiveLookahead_62_8" title="Not referenced">PositiveLookahead</span></span> = &lt;<span class="cons_String">(?=</span> &lt;<a href="#Pattern_10_3" id="Pattern_62_34" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_63_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NegativeLookahead_63_8" title="Not referenced">NegativeLookahead</span></span> = &lt;<span class="cons_String">(?!</span> &lt;<a href="#Pattern_10_3" id="Pattern_63_34" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_64_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PositiveLookbehind_64_8" title="Not referenced">PositiveLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">=</span> &lt;<a href="#Pattern_10_3" id="Pattern_64_37" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_65_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="NegativeLookbehind_65_8" title="Not referenced">NegativeLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">!</span> &lt;<a href="#Pattern_10_3" id="Pattern_65_37" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_66_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="PythonCapture_66_8" title="Not referenced">PythonCapture</span></span> = &lt;<span class="cons_String">(?P</span>\&lt; &lt;<a href="#RegexId_260_3" id="RegexId_66_32" title="Defined at line 260, 264">RegexId</a>&gt; \&gt; &lt;<a href="#Pattern_10_3" id="Pattern_66_45" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Atom_26_22" id="Atom_67_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="RegexCapture_67_8" title="Not referenced">RegexCapture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_10_3" id="Pattern_67_27" title="Defined at line 10, 16, 17">Pattern</a>&gt; <span class="cons_String">)@{</span> &lt;<a href="#RegexId_260_3" id="RegexId_67_41" title="Defined at line 260, 264">RegexId</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Atom_26_22" id="Atom_68_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="Empty_68_8" title="Not referenced">Empty</span></span> = &lt;<span class="cons_String">()</span>&gt;
  <a href="#Atom_26_22" id="Atom_69_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="SingleCharacter_69_8" title="Not referenced">SingleCharacter</span></span> = &lt;<span class="cons_String">.</span>&gt;
  <a href="#Atom_26_22" id="Atom_70_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="LineStart_70_8" title="Not referenced">LineStart</span></span> = &lt;<span class="cons_String">^</span>&gt;
  <a href="#Atom_26_22" id="Atom_71_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="LineEnd_71_8" title="Not referenced">LineEnd</span></span> = &lt;<span class="cons_String">$</span>&gt;
  <a href="#Atom_26_22" id="Atom_72_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="CharacterClass_72_8" title="Not referenced">CharacterClass</span></span> = <a href="#CharacterClass_79_3" id="CharacterClass_72_25" title="Defined at line 79, 83, 84">CharacterClass</a>
  <a href="#Atom_26_22" id="Atom_73_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="AtomLiteral_73_8" title="Not referenced">AtomLiteral</span></span> = <a href="#AtomLiteral_121_18" id="AtomLiteral_73_22" title="Defined at line 121, 128, 129, 130">AtomLiteral</a>
  <a href="#Atom_26_22" id="Atom_74_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="AtomCharacter_74_8" title="Not referenced">AtomCharacter</span></span> = <a href="#AtomCharacter_137_20" id="AtomCharacter_74_24" title="Defined at line 137, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 226">AtomCharacter</a>
  <a href="#Atom_26_22" id="Atom_75_3" title="Referenced at line 26, 27">Atom</a>.<span class="cons_Constructor"><span id="QuotedAtom_75_8" title="Not referenced">QuotedAtom</span></span> = &lt;\\<span class="cons_String">Q</span> &lt;<a href="#AllChars_121_30" id="AllChars_75_27" title="Defined at line 121, 131, 132, 133">AllChars</a>&gt; \\<span class="cons_String">E</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#CharacterClass_72_25" id="CharacterClass_79_3" title="Referenced at line 72, 88">CharacterClass</a> <a href="#BracketItem_83_36" id="BracketItem_79_18" title="Referenced at line 83, 84">BracketItem</a> <a href="#BracketLiteralOrBracketCharacter_85_25" id="BracketLiteralOrBracketCharacter_79_30" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a>

<span class="keyword">context-free syntax</span>

  <a href="#CharacterClass_72_25" id="CharacterClass_83_3" title="Referenced at line 72, 88">CharacterClass</a>.<span class="cons_Constructor"><span id="BracketList_83_18" title="Not referenced">BracketList</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#BracketItem_79_18" id="BracketItem_83_36" title="Defined at line 79, 85, 88, 89, 90">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#CharacterClass_72_25" id="CharacterClass_84_3" title="Referenced at line 72, 88">CharacterClass</a>.<span class="cons_Constructor"><span id="NegatedBracketList_84_18" title="Not referenced">NegatedBracketList</span></span> = &lt;<span class="cons_String">[^</span> &lt;<a href="#BracketItem_79_18" id="BracketItem_84_44" title="Defined at line 79, 85, 88, 89, 90">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#BracketItem_83_36" id="BracketItem_85_3" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="Range_85_15" title="Not referenced">Range</span></span> = &lt;&lt;<a href="#BracketLiteralOrBracketCharacter_79_30" id="BracketLiteralOrBracketCharacter_85_25" title="Defined at line 79, 86, 87">BracketLiteralOrBracketCharacter</a>&gt; <span class="cons_String">-</span> &lt;<a href="#BracketLiteralOrBracketCharacter_79_30" id="BracketLiteralOrBracketCharacter_85_62" title="Defined at line 79, 86, 87">BracketLiteralOrBracketCharacter</a>&gt;&gt;
  <a href="#BracketLiteralOrBracketCharacter_85_25" id="BracketLiteralOrBracketCharacter_86_3" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a> = <a href="#BracketLiteral_121_3" id="BracketLiteral_86_38" title="Defined at line 121, 125, 126, 127">BracketLiteral</a>
  <a href="#BracketLiteralOrBracketCharacter_85_25" id="BracketLiteralOrBracketCharacter_87_3" title="Referenced at line 85">BracketLiteralOrBracketCharacter</a> = <a href="#BracketCharacter_137_3" id="BracketCharacter_87_38" title="Defined at line 137, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 227">BracketCharacter</a>
  <a href="#BracketItem_83_36" id="BracketItem_88_3" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="Union_88_15" title="Not referenced">Union</span></span> = <a href="#CharacterClass_79_3" id="CharacterClass_88_23" title="Defined at line 79, 83, 84">CharacterClass</a>
  <a href="#BracketItem_83_36" id="BracketItem_89_3" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="BracketLiteral_89_15" title="Not referenced">BracketLiteral</span></span> = <a href="#BracketLiteral_121_3" id="BracketLiteral_89_32" title="Defined at line 121, 125, 126, 127">BracketLiteral</a>
  <a href="#BracketItem_83_36" id="BracketItem_90_3" title="Referenced at line 83, 84">BracketItem</a>.<span class="cons_Constructor"><span id="BracketCharacter_90_15" title="Not referenced">BracketCharacter</span></span> = <a href="#BracketCharacter_137_3" id="BracketCharacter_90_34" title="Defined at line 137, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 227">BracketCharacter</a>

<span class="keyword">context-free sorts</span>

  <span id="ClassKeyword_94_3" title="Not referenced">ClassKeyword</span>

<span class="keyword">context-free syntax</span>

  <span id="ClassKeyword_98_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="LowerClass_98_16" title="Not referenced">LowerClass</span></span> = &lt;<span class="cons_String">Lower</span>&gt;
  <span id="ClassKeyword_99_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="UpperClass_99_16" title="Not referenced">UpperClass</span></span> = &lt;<span class="cons_String">Upper</span>&gt;
  <span id="ClassKeyword_100_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="ASCIIClass_100_16" title="Not referenced">ASCIIClass</span></span> = &lt;<span class="cons_String">ASCII</span>&gt;
  <span id="ClassKeyword_101_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlphaClass_101_16" title="Not referenced">AlphaClass</span></span> = &lt;<span class="cons_String">Alpha</span>&gt;
  <span id="ClassKeyword_102_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="DigitClass_102_16" title="Not referenced">DigitClass</span></span> = &lt;<span class="cons_String">Digit</span>&gt;
  <span id="ClassKeyword_103_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlnumClass_103_16" title="Not referenced">AlnumClass</span></span> = &lt;<span class="cons_String">Alnum</span>&gt;
  <span id="ClassKeyword_104_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="PunctClass_104_16" title="Not referenced">PunctClass</span></span> = &lt;<span class="cons_String">Punct</span>&gt;
  <span id="ClassKeyword_105_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="GraphClass_105_16" title="Not referenced">GraphClass</span></span> = &lt;<span class="cons_String">Graph</span>&gt;
  <span id="ClassKeyword_106_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="PrintClass_106_16" title="Not referenced">PrintClass</span></span> = &lt;<span class="cons_String">Print</span>&gt;
  <span id="ClassKeyword_107_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="BlankClass_107_16" title="Not referenced">BlankClass</span></span> = &lt;<span class="cons_String">Blank</span>&gt;
  <span id="ClassKeyword_108_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="CntrlClass_108_16" title="Not referenced">CntrlClass</span></span> = &lt;<span class="cons_String">Cntrl</span>&gt;
  <span id="ClassKeyword_109_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="XDigitClass_109_16" title="Not referenced">XDigitClass</span></span> = &lt;<span class="cons_String">XDigit</span>&gt;
  <span id="ClassKeyword_110_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="WhiteSpace_110_16" title="Not referenced">WhiteSpace</span></span> = &lt;<span class="cons_String">Space</span>&gt;
  <span id="ClassKeyword_111_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsLowerCase_111_16" title="Not referenced">JavaIsLowerCase</span></span> = &lt;<span class="cons_String">javaLowerCase</span>&gt;
  <span id="ClassKeyword_112_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsUpperCase_112_16" title="Not referenced">JavaIsUpperCase</span></span> = &lt;<span class="cons_String">javaUpperCase</span>&gt;
  <span id="ClassKeyword_113_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsWhitespace_113_16" title="Not referenced">JavaIsWhitespace</span></span> = &lt;<span class="cons_String">javaWhitespace</span>&gt;
  <span id="ClassKeyword_114_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsMirrored_114_16" title="Not referenced">JavaIsMirrored</span></span> = &lt;<span class="cons_String">javaMirrored</span>&gt;
  <span id="ClassKeyword_115_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="GreekBlock_115_16" title="Not referenced">GreekBlock</span></span> = &lt;<span class="cons_String">InGreek</span>&gt;
  <span id="ClassKeyword_116_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="UppercaseLetter_116_16" title="Not referenced">UppercaseLetter</span></span> = &lt;<span class="cons_String">Lu</span>&gt;
  <span id="ClassKeyword_117_3" title="Not referenced">ClassKeyword</span>.<span class="cons_Constructor"><span id="CurrencySymbol_117_16" title="Not referenced">CurrencySymbol</span></span> = &lt;<span class="cons_String">Sc</span>&gt;

<span class="keyword">lexical sorts</span>

  <a href="#BracketLiteral_86_38" id="BracketLiteral_121_3" title="Referenced at line 86, 89">BracketLiteral</a> <a href="#AtomLiteral_73_22" id="AtomLiteral_121_18" title="Referenced at line 73">AtomLiteral</a> <a href="#AllChars_75_27" id="AllChars_121_30" title="Referenced at line 75">AllChars</a>

<span class="keyword">lexical syntax</span>

  <a href="#BracketLiteral_86_38" id="BracketLiteral_125_3" title="Referenced at line 86, 89">BracketLiteral</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\$\*\+\?\.\}\|]
  <a href="#BracketLiteral_86_38" id="BracketLiteral_126_3" title="Referenced at line 86, 89">BracketLiteral</a> = <span class="cons_Lit">"/"</span>
  <a href="#BracketLiteral_86_38" id="BracketLiteral_127_3" title="Referenced at line 86, 89">BracketLiteral</a> = [\&amp;\]\-] {<span class="keyword">reject</span>}
  <a href="#AtomLiteral_73_22" id="AtomLiteral_128_3" title="Referenced at line 73">AtomLiteral</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\&amp;\]\-]
  <a href="#AtomLiteral_73_22" id="AtomLiteral_129_3" title="Referenced at line 73">AtomLiteral</a> = <span class="cons_Lit">"/"</span>
  <a href="#AtomLiteral_73_22" id="AtomLiteral_130_3" title="Referenced at line 73">AtomLiteral</a> = [\}\)\|\[] {<span class="keyword">reject</span>}
  <a href="#AllChars_75_27" id="AllChars_131_3" title="Referenced at line 75">AllChars</a> = [\\\|\$\*\+\?\.\{\}\(\)\&amp;\]\-\[\^\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\t\n\r]*
  <a href="#AllChars_75_27" id="AllChars_132_3" title="Referenced at line 75">AllChars</a> = <span class="cons_Lit">"/"</span>
  <a href="#AllChars_75_27" id="AllChars_133_3" title="Referenced at line 75">AllChars</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_133_14" title="Defined at line 137, 143">DoubleQuote</a>

<span class="keyword">context-free sorts</span>

  <a href="#BracketCharacter_87_38" id="BracketCharacter_137_3" title="Referenced at line 87, 90">BracketCharacter</a> <a href="#AtomCharacter_74_24" id="AtomCharacter_137_20" title="Referenced at line 74">AtomCharacter</a> <a href="#DoubleQuote_133_14" id="DoubleQuote_137_34" title="Referenced at line 133, 168, 193, 240">DoubleQuote</a> <a href="#OctalChar_169_22" id="OctalChar_137_46" title="Referenced at line 169, 194">OctalChar</a> <a href="#HexHexChar_170_22" id="HexHexChar_137_56" title="Referenced at line 170, 195">HexHexChar</a> <a href="#DecHexChar_171_22" id="DecHexChar_137_67" title="Referenced at line 171, 196">DecHexChar</a> <a href="#Tab_172_22" id="Tab_137_78" title="Referenced at line 172, 197">Tab</a> <a href="#Newline_173_22" id="Newline_137_82" title="Referenced at line 173, 198">Newline</a> <a href="#ReturnAtom_174_22" id="ReturnAtom_137_90" title="Referenced at line 174, 199">ReturnAtom</a> <a href="#Formfeed_175_22" id="Formfeed_137_101" title="Referenced at line 175, 200">Formfeed</a> <a href="#Alarm_176_22" id="Alarm_137_110" title="Referenced at line 176, 201">Alarm</a> <a href="#Escape_177_22" id="Escape_137_116" title="Referenced at line 177, 202">Escape</a>
  <a href="#WordChar_178_22" id="WordChar_138_3" title="Referenced at line 178, 203">WordChar</a> <a href="#NonWordChar_179_22" id="NonWordChar_138_12" title="Referenced at line 179, 204">NonWordChar</a> <a href="#WhiteSpaceChar_180_22" id="WhiteSpaceChar_138_24" title="Referenced at line 180, 205">WhiteSpaceChar</a> <a href="#DigitChar_182_22" id="DigitChar_138_39" title="Referenced at line 182, 207">DigitChar</a> <a href="#NonDigitChar_183_22" id="NonDigitChar_138_49" title="Referenced at line 183, 208">NonDigitChar</a> <a href="#ControlCharacter_184_22" id="ControlCharacter_138_62" title="Referenced at line 184, 209">ControlCharacter</a> <a href="#WordBoundry_185_22" id="WordBoundry_138_79" title="Referenced at line 185, 210">WordBoundry</a> <a href="#NonWordBoundry_186_22" id="NonWordBoundry_138_91" title="Referenced at line 186, 211">NonWordBoundry</a> <a href="#InputBeginBoundry_187_22" id="InputBeginBoundry_138_106" title="Referenced at line 187, 212">InputBeginBoundry</a>
  <a href="#PrevMatchEndBoundry_188_22" id="PrevMatchEndBoundry_139_3" title="Referenced at line 188, 213">PrevMatchEndBoundry</a> <a href="#EndInputBoundry_189_22" id="EndInputBoundry_139_23" title="Referenced at line 189, 214">EndInputBoundry</a> <a href="#EndInputFinalBoundry_190_22" id="EndInputFinalBoundry_139_39" title="Referenced at line 190, 215">EndInputFinalBoundry</a> <a href="#Space_192_22" id="Space_139_60" title="Referenced at line 192, 217">Space</a> <a href="#NonWhiteSpaceChar_181_22" id="NonWhiteSpaceChar_139_66" title="Referenced at line 181, 206">NonWhiteSpaceChar</a> <a href="#BackReference_191_22" id="BackReference_139_84" title="Referenced at line 191, 216">BackReference</a>

<span class="keyword">context-free syntax</span>

  <a href="#DoubleQuote_133_14" id="DoubleQuote_143_3" title="Referenced at line 133, 168, 193, 240">DoubleQuote</a>.<span class="cons_Constructor"><span id="DoubleQuote_143_15" title="Not referenced">DoubleQuote</span></span> = &lt;<span class="cons_String">"</span>&gt;
  <a href="#OctalChar_169_22" id="OctalChar_144_3" title="Referenced at line 169, 194">OctalChar</a>.<span class="cons_Constructor"><span id="OctalChar_144_13" title="Not referenced">OctalChar</span></span> = &lt;\\<span class="cons_String">0</span> &lt;<a href="#OctalValue_244_11" id="OctalValue_144_31" title="Defined at line 244, 250, 251, 252">OctalValue</a>&gt;&gt;
  <a href="#HexHexChar_170_22" id="HexHexChar_145_3" title="Referenced at line 170, 195">HexHexChar</a>.<span class="cons_Constructor"><span id="HexHexChar_145_14" title="Not referenced">HexHexChar</span></span> = &lt;\\<span class="cons_String">x</span> &lt;<a href="#TwoHexValue_244_22" id="TwoHexValue_145_33" title="Defined at line 244, 253">TwoHexValue</a>&gt;&gt;
  <a href="#DecHexChar_171_22" id="DecHexChar_146_3" title="Referenced at line 171, 196">DecHexChar</a>.<span class="cons_Constructor"><span id="DecHexChar_146_14" title="Not referenced">DecHexChar</span></span> = &lt;\\<span class="cons_String">u</span> &lt;<a href="#FourHexValue_244_34" id="FourHexValue_146_33" title="Defined at line 244, 254">FourHexValue</a>&gt;&gt;
  <a href="#Tab_172_22" id="Tab_147_3" title="Referenced at line 172, 197">Tab</a>.<span class="cons_Constructor"><span id="Tab_147_7" title="Not referenced">Tab</span></span> = &lt;\\<span class="cons_String">t</span>&gt;
  <a href="#Newline_173_22" id="Newline_148_3" title="Referenced at line 173, 198">Newline</a>.<span class="cons_Constructor"><span id="Newline_148_11" title="Not referenced">Newline</span></span> = &lt;\\<span class="cons_String">n</span>&gt;
  <a href="#ReturnAtom_174_22" id="ReturnAtom_149_3" title="Referenced at line 174, 199">ReturnAtom</a>.<span class="cons_Constructor"><span id="ReturnAtom_149_14" title="Not referenced">ReturnAtom</span></span> = &lt;\\<span class="cons_String">r</span>&gt;
  <a href="#Formfeed_175_22" id="Formfeed_150_3" title="Referenced at line 175, 200">Formfeed</a>.<span class="cons_Constructor"><span id="Formfeed_150_12" title="Not referenced">Formfeed</span></span> = &lt;\\<span class="cons_String">f</span>&gt;
  <a href="#Alarm_176_22" id="Alarm_151_3" title="Referenced at line 176, 201">Alarm</a>.<span class="cons_Constructor"><span id="Alarm_151_9" title="Not referenced">Alarm</span></span> = &lt;\\<span class="cons_String">a</span>&gt;
  <a href="#Escape_177_22" id="Escape_152_3" title="Referenced at line 177, 202">Escape</a>.<span class="cons_Constructor"><span id="Escape_152_10" title="Not referenced">Escape</span></span> = &lt;\\<span class="cons_String">e</span>&gt;
  <a href="#WordChar_178_22" id="WordChar_153_3" title="Referenced at line 178, 203">WordChar</a>.<span class="cons_Constructor"><span id="WordChar_153_12" title="Not referenced">WordChar</span></span> = &lt;\\<span class="cons_String">w</span>&gt;
  <a href="#NonWordChar_179_22" id="NonWordChar_154_3" title="Referenced at line 179, 204">NonWordChar</a>.<span class="cons_Constructor"><span id="NonWordChar_154_15" title="Not referenced">NonWordChar</span></span> = &lt;\\<span class="cons_String">W</span>&gt;
  <a href="#WhiteSpaceChar_180_22" id="WhiteSpaceChar_155_3" title="Referenced at line 180, 205">WhiteSpaceChar</a>.<span class="cons_Constructor"><span id="WhiteSpaceChar_155_18" title="Not referenced">WhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">s</span>&gt;
  <a href="#NonWhiteSpaceChar_181_22" id="NonWhiteSpaceChar_156_3" title="Referenced at line 181, 206">NonWhiteSpaceChar</a>.<span class="cons_Constructor"><span id="NonWhiteSpaceChar_156_21" title="Not referenced">NonWhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">S</span>&gt;
  <a href="#DigitChar_182_22" id="DigitChar_157_3" title="Referenced at line 182, 207">DigitChar</a>.<span class="cons_Constructor"><span id="DigitChar_157_13" title="Not referenced">DigitChar</span></span> = &lt;\\<span class="cons_String">d</span>&gt;
  <a href="#NonDigitChar_183_22" id="NonDigitChar_158_3" title="Referenced at line 183, 208">NonDigitChar</a>.<span class="cons_Constructor"><span id="NonDigitChar_158_16" title="Not referenced">NonDigitChar</span></span> = &lt;\\<span class="cons_String">D</span>&gt;
  <a href="#ControlCharacter_184_22" id="ControlCharacter_159_3" title="Referenced at line 184, 209">ControlCharacter</a>.<span class="cons_Constructor"><span id="ControlCharacter_159_20" title="Not referenced">ControlCharacter</span></span> = &lt;\\<span class="cons_String">c</span> &lt;<a href="#ControlValue_244_64" id="ControlValue_159_45" title="Defined at line 244, 255, 256">ControlValue</a>&gt;&gt;
  <a href="#WordBoundry_185_22" id="WordBoundry_160_3" title="Referenced at line 185, 210">WordBoundry</a>.<span class="cons_Constructor"><span id="WordBoundry_160_15" title="Not referenced">WordBoundry</span></span> = &lt;\\<span class="cons_String">b</span>&gt;
  <a href="#NonWordBoundry_186_22" id="NonWordBoundry_161_3" title="Referenced at line 186, 211">NonWordBoundry</a>.<span class="cons_Constructor"><span id="NonWordBoundry_161_18" title="Not referenced">NonWordBoundry</span></span> = &lt;\\<span class="cons_String">B</span>&gt;
  <a href="#InputBeginBoundry_187_22" id="InputBeginBoundry_162_3" title="Referenced at line 187, 212">InputBeginBoundry</a>.<span class="cons_Constructor"><span id="InputBeginBoundry_162_21" title="Not referenced">InputBeginBoundry</span></span> = &lt;\\<span class="cons_String">A</span>&gt;
  <a href="#PrevMatchEndBoundry_188_22" id="PrevMatchEndBoundry_163_3" title="Referenced at line 188, 213">PrevMatchEndBoundry</a>.<span class="cons_Constructor"><span id="PrevMatchEndBoundry_163_23" title="Not referenced">PrevMatchEndBoundry</span></span> = &lt;\\<span class="cons_String">G</span>&gt;
  <a href="#EndInputBoundry_189_22" id="EndInputBoundry_164_3" title="Referenced at line 189, 214">EndInputBoundry</a>.<span class="cons_Constructor"><span id="EndInputBoundry_164_19" title="Not referenced">EndInputBoundry</span></span> = &lt;\\<span class="cons_String">Z</span>&gt;
  <a href="#EndInputFinalBoundry_190_22" id="EndInputFinalBoundry_165_3" title="Referenced at line 190, 215">EndInputFinalBoundry</a>.<span class="cons_Constructor"><span id="EndInputFinalBoundry_165_24" title="Not referenced">EndInputFinalBoundry</span></span> = &lt;\\<span class="cons_String">z</span>&gt;
  <a href="#BackReference_191_22" id="BackReference_166_3" title="Referenced at line 191, 216">BackReference</a>.<span class="cons_Constructor"><span id="BackReference_166_17" title="Not referenced">BackReference</span></span> = &lt;\\ &lt;<a href="#BackReferenceLex_244_47" id="BackReferenceLex_166_38" title="Defined at line 244, 249">BackReferenceLex</a>&gt;&gt;
  <a href="#Space_192_22" id="Space_167_3" title="Referenced at line 192, 217">Space</a>.<span class="cons_Constructor"><span id="Space_167_9" title="Not referenced">Space</span></span> = <span class="cons_Lit">"\\ "</span>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_168_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_168_22" title="Defined at line 137, 143">DoubleQuote</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_169_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#OctalChar_137_46" id="OctalChar_169_22" title="Defined at line 137, 144">OctalChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_170_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#HexHexChar_137_56" id="HexHexChar_170_22" title="Defined at line 137, 145">HexHexChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_171_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DecHexChar_137_67" id="DecHexChar_171_22" title="Defined at line 137, 146">DecHexChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_172_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Tab_137_78" id="Tab_172_22" title="Defined at line 137, 147">Tab</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_173_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Newline_137_82" id="Newline_173_22" title="Defined at line 137, 148">Newline</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_174_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#ReturnAtom_137_90" id="ReturnAtom_174_22" title="Defined at line 137, 149">ReturnAtom</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_175_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Formfeed_137_101" id="Formfeed_175_22" title="Defined at line 137, 150">Formfeed</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_176_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Alarm_137_110" id="Alarm_176_22" title="Defined at line 137, 151">Alarm</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_177_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Escape_137_116" id="Escape_177_22" title="Defined at line 137, 152">Escape</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_178_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WordChar_138_3" id="WordChar_178_22" title="Defined at line 138, 153">WordChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_179_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWordChar_138_12" id="NonWordChar_179_22" title="Defined at line 138, 154">NonWordChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_180_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WhiteSpaceChar_138_24" id="WhiteSpaceChar_180_22" title="Defined at line 138, 155">WhiteSpaceChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_181_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWhiteSpaceChar_139_66" id="NonWhiteSpaceChar_181_22" title="Defined at line 139, 156">NonWhiteSpaceChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_182_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#DigitChar_138_39" id="DigitChar_182_22" title="Defined at line 138, 157">DigitChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_183_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonDigitChar_138_49" id="NonDigitChar_183_22" title="Defined at line 138, 158">NonDigitChar</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_184_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#ControlCharacter_138_62" id="ControlCharacter_184_22" title="Defined at line 138, 159">ControlCharacter</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_185_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#WordBoundry_138_79" id="WordBoundry_185_22" title="Defined at line 138, 160">WordBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_186_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#NonWordBoundry_138_91" id="NonWordBoundry_186_22" title="Defined at line 138, 161">NonWordBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_187_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#InputBeginBoundry_138_106" id="InputBeginBoundry_187_22" title="Defined at line 138, 162">InputBeginBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_188_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#PrevMatchEndBoundry_139_3" id="PrevMatchEndBoundry_188_22" title="Defined at line 139, 163">PrevMatchEndBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_189_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#EndInputBoundry_139_23" id="EndInputBoundry_189_22" title="Defined at line 139, 164">EndInputBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_190_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#EndInputFinalBoundry_139_39" id="EndInputFinalBoundry_190_22" title="Defined at line 139, 165">EndInputFinalBoundry</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_191_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#BackReference_139_84" id="BackReference_191_22" title="Defined at line 139, 166">BackReference</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_192_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Space_139_60" id="Space_192_22" title="Defined at line 139, 167">Space</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_193_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_193_19" title="Defined at line 137, 143">DoubleQuote</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_194_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#OctalChar_137_46" id="OctalChar_194_19" title="Defined at line 137, 144">OctalChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_195_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#HexHexChar_137_56" id="HexHexChar_195_19" title="Defined at line 137, 145">HexHexChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_196_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#DecHexChar_137_67" id="DecHexChar_196_19" title="Defined at line 137, 146">DecHexChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_197_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Tab_137_78" id="Tab_197_19" title="Defined at line 137, 147">Tab</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_198_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Newline_137_82" id="Newline_198_19" title="Defined at line 137, 148">Newline</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_199_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#ReturnAtom_137_90" id="ReturnAtom_199_19" title="Defined at line 137, 149">ReturnAtom</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_200_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Formfeed_137_101" id="Formfeed_200_19" title="Defined at line 137, 150">Formfeed</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_201_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Alarm_137_110" id="Alarm_201_19" title="Defined at line 137, 151">Alarm</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_202_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Escape_137_116" id="Escape_202_19" title="Defined at line 137, 152">Escape</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_203_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#WordChar_138_3" id="WordChar_203_19" title="Defined at line 138, 153">WordChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_204_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWordChar_138_12" id="NonWordChar_204_19" title="Defined at line 138, 154">NonWordChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_205_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#WhiteSpaceChar_138_24" id="WhiteSpaceChar_205_19" title="Defined at line 138, 155">WhiteSpaceChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_206_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWhiteSpaceChar_139_66" id="NonWhiteSpaceChar_206_19" title="Defined at line 139, 156">NonWhiteSpaceChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_207_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#DigitChar_138_39" id="DigitChar_207_19" title="Defined at line 138, 157">DigitChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_208_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonDigitChar_138_49" id="NonDigitChar_208_19" title="Defined at line 138, 158">NonDigitChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_209_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#ControlCharacter_138_62" id="ControlCharacter_209_19" title="Defined at line 138, 159">ControlCharacter</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_210_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#WordBoundry_138_79" id="WordBoundry_210_19" title="Defined at line 138, 160">WordBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_211_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#NonWordBoundry_138_91" id="NonWordBoundry_211_19" title="Defined at line 138, 161">NonWordBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_212_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#InputBeginBoundry_138_106" id="InputBeginBoundry_212_19" title="Defined at line 138, 162">InputBeginBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_213_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#PrevMatchEndBoundry_139_3" id="PrevMatchEndBoundry_213_19" title="Defined at line 139, 163">PrevMatchEndBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_214_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#EndInputBoundry_139_23" id="EndInputBoundry_214_19" title="Defined at line 139, 164">EndInputBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_215_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#EndInputFinalBoundry_139_39" id="EndInputFinalBoundry_215_19" title="Defined at line 139, 165">EndInputFinalBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_216_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#BackReference_139_84" id="BackReference_216_19" title="Defined at line 139, 166">BackReference</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_217_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Space_139_60" id="Space_217_19" title="Defined at line 139, 167">Space</a>

<span class="keyword">context-free sorts</span>

  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_221_3" title="Referenced at line 225">QuotablePatternSymbol</a> <a href="#Quoted_226_19" id="Quoted_221_25" title="Referenced at line 226, 227">Quoted</a>

<span class="keyword">context-free syntax</span>

  <a href="#Quoted_226_19" id="Quoted_225_3" title="Referenced at line 226, 227">Quoted</a>.<span class="cons_Constructor"><span id="Quoted_225_10" title="Not referenced">Quoted</span></span> = &lt;\\ &lt;<a href="#QuotablePatternSymbol_221_3" id="QuotablePatternSymbol_225_24" title="Defined at line 221, 239, 240">QuotablePatternSymbol</a>&gt;&gt;
  <a href="#AtomCharacter_74_24" id="AtomCharacter_226_3" title="Referenced at line 74">AtomCharacter</a> = <a href="#Quoted_221_25" id="Quoted_226_19" title="Defined at line 221, 225">Quoted</a>
  <a href="#BracketCharacter_87_38" id="BracketCharacter_227_3" title="Referenced at line 87, 90">BracketCharacter</a> = <a href="#Quoted_221_25" id="Quoted_227_22" title="Defined at line 221, 225">Quoted</a>

<span class="keyword">lexical sorts</span>

  <a href="#QuotablePatternSymbolLex_239_49" id="QuotablePatternSymbolLex_231_3" title="Referenced at line 239">QuotablePatternSymbolLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#QuotablePatternSymbolLex_239_49" id="QuotablePatternSymbolLex_235_3" title="Referenced at line 239">QuotablePatternSymbolLex</a> = [\|\$\*\+\?\.\{\}\(\)\&amp;\]\[\-\^\\\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\/]

<span class="keyword">context-free syntax</span>

  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_239_3" title="Referenced at line 225">QuotablePatternSymbol</a>.<span class="cons_Constructor"><span id="QuotablePatternSymbol_239_25" title="Not referenced">QuotablePatternSymbol</span></span> = <a href="#QuotablePatternSymbolLex_231_3" id="QuotablePatternSymbolLex_239_49" title="Defined at line 231, 235">QuotablePatternSymbolLex</a>
  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_240_3" title="Referenced at line 225">QuotablePatternSymbol</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_240_27" title="Defined at line 137, 143">DoubleQuote</a>

<span class="keyword">lexical sorts</span>

  <a href="#Integer_35_37" id="Integer_244_3" title="Referenced at line 35, 36, 37, 41, 42, 43, 47, 48, 49">Integer</a> <a href="#OctalValue_144_31" id="OctalValue_244_11" title="Referenced at line 144">OctalValue</a> <a href="#TwoHexValue_145_33" id="TwoHexValue_244_22" title="Referenced at line 145">TwoHexValue</a> <a href="#FourHexValue_146_33" id="FourHexValue_244_34" title="Referenced at line 146">FourHexValue</a> <a href="#BackReferenceLex_166_38" id="BackReferenceLex_244_47" title="Referenced at line 166">BackReferenceLex</a> <a href="#ControlValue_159_45" id="ControlValue_244_64" title="Referenced at line 159">ControlValue</a>

<span class="keyword">lexical syntax</span>

  <a href="#Integer_35_37" id="Integer_248_3" title="Referenced at line 35, 36, 37, 41, 42, 43, 47, 48, 49">Integer</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#BackReferenceLex_166_38" id="BackReferenceLex_249_3" title="Referenced at line 166">BackReferenceLex</a> = [<span class="cons_Regular">1</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]*
  <a href="#OctalValue_144_31" id="OctalValue_250_3" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_144_31" id="OctalValue_251_3" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_144_31" id="OctalValue_252_3" title="Referenced at line 144">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">3</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#TwoHexValue_145_33" id="TwoHexValue_253_3" title="Referenced at line 145">TwoHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#FourHexValue_146_33" id="FourHexValue_254_3" title="Referenced at line 146">FourHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#ControlValue_159_45" id="ControlValue_255_3" title="Referenced at line 159">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#ControlValue_159_45" id="ControlValue_256_3" title="Referenced at line 159">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <a href="#RegexId_66_32" id="RegexId_260_3" title="Referenced at line 66, 67">RegexId</a>

<span class="keyword">context-free syntax</span>

  <a href="#RegexId_66_32" id="RegexId_264_3" title="Referenced at line 66, 67">RegexId</a>.<span class="cons_Constructor"><span id="RegexId_264_11" title="Not referenced">RegexId</span></span> = <a href="#RegexID_268_3" id="RegexID_264_21" title="Defined at line 268, 272, 273, 274, 275">RegexID</a>

<span class="keyword">lexical sorts</span>

  <a href="#RegexID_264_21" id="RegexID_268_3" title="Referenced at line 264, 279">RegexID</a>

<span class="keyword">lexical syntax</span>

  <a href="#RegexID_264_21" id="RegexID_272_3" title="Referenced at line 264, 279">RegexID</a> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span>\_\$] [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]*
  <a href="#RegexID_264_21" id="RegexID_273_3" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <a href="#RegexID_264_21" id="RegexID_274_3" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <a href="#RegexID_264_21" id="RegexID_275_3" title="Referenced at line 264, 279">RegexID</a> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#RegexID_268_3" id="RegexID_279_3" title="Defined at line 268, 272, 273, 274, 275">RegexID</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
