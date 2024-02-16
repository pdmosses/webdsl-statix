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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3/#WebDSL-Regex_20_3" id="WebDSL-Regex_1_8" title="a definition with a single reference">WebDSL-Regex</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_5_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_6_3" title="a reference to a single-file definition">WebDSL-DataModel</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="Pattern_10_3" title="a definition with multiple references" data-urls="#Pattern line 15_31, 17_27, 17_39, 60_22, 61_27, 62_34, 63_34, 64_37, 65_37, 66_45, 67_27">Pattern</button> <a href="#RegexExp_14_21" id="RegexExp_10_11" title="a definition with a single reference">RegexExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_14_42" id="Exp_14_3" title="a definition with a single reference">Exp</a>.<span class="cons_Constructor"><span id="RegexCall_14_7" title="a definition with no references">RegexCall</span></span> = &lt;&lt;<a href="#RegexExp_10_11" id="RegexExp_14_21" title="a reference to a single-file definition">RegexExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_14_34" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_14_3" id="Exp_14_42" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#RegexExp_14_21" id="RegexExp_15_3" title="a definition with a single reference">RegexExp</a>.<span class="cons_Constructor"><span id="RegexPattern_15_12" title="a definition with no references">RegexPattern</span></span> = &lt;<span class="cons_String">/</span> &lt;<a href="#Pattern_10_3" id="Pattern_15_31" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">/</span>&gt;
  <button class="modal-open" id="Pattern_16_3" title="a definition with multiple references" data-urls="#Pattern line 15_31, 17_27, 17_39, 60_22, 61_27, 62_34, 63_34, 64_37, 65_37, 66_45, 67_27">Pattern</button>.<span class="cons_Constructor"><span id="SingleBranch_16_11" title="a definition with no references">SingleBranch</span></span> = <a href="#Branche_21_3" id="Branche_16_26" title="a reference to a single-file definition">Branche</a>
  <button class="modal-open" id="Pattern_17_3" title="a definition with multiple references" data-urls="#Pattern line 15_31, 17_27, 17_39, 60_22, 61_27, 62_34, 63_34, 64_37, 65_37, 66_45, 67_27">Pattern</button>.<span class="cons_Constructor"><span id="TupleBranch_17_11" title="a definition with no references">TupleBranch</span></span> = &lt;&lt;<a href="#Pattern_10_3" id="Pattern_17_27" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">|</span> &lt;<a href="#Pattern_10_3" id="Pattern_17_39" title="a reference to a single-file definition">Pattern</a>&gt;&gt; {<span class="keyword">right</span>}

<span class="keyword">context-free sorts</span>

  <a href="#Branche_16_26" id="Branche_21_3" title="a definition with a single reference">Branche</a> <a href="#Piece_25_22" id="Piece_21_11" title="a definition with a single reference">Piece</a>

<span class="keyword">context-free syntax</span>

  <a href="#Branche_16_26" id="Branche_25_3" title="a definition with a single reference">Branche</a>.<span class="cons_Constructor"><span id="Pieces_25_11" title="a definition with no references">Pieces</span></span> = &lt;&lt;<a href="#Piece_21_11" id="Piece_25_22" title="a reference to a single-file definition">Piece</a>+&gt;&gt;
  <a href="#Piece_25_22" id="Piece_26_3" title="a definition with a single reference">Piece</a>.<span class="cons_Constructor"><span id="SingleAtom_26_9" title="a definition with no references">SingleAtom</span></span> = <a href="#Atom_56_3" id="Atom_26_22" title="a reference to a single-file definition">Atom</a>
  <a href="#Piece_25_22" id="Piece_27_3" title="a definition with a single reference">Piece</a>.<span class="cons_Constructor"><span id="QuantifiedAtom_27_9" title="a definition with no references">QuantifiedAtom</span></span> = &lt;&lt;<a href="#Atom_56_3" id="Atom_27_28" title="a reference to a single-file definition">Atom</a>&gt; &lt;<a href="#Quantifier_31_3" id="Quantifier_27_35" title="a reference to a single-file definition">Quantifier</a>&gt;&gt;

<span class="keyword">context-free sorts</span>

  <a href="#Quantifier_27_35" id="Quantifier_31_3" title="a definition with a single reference">Quantifier</a>

<span class="keyword">context-free syntax</span>

  <a href="#Quantifier_27_35" id="Quantifier_35_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyExactBound_35_14" title="a definition with no references">GreedyExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_35_37" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_36_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerBound_36_14" title="a definition with no references">GreedyLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_36_37" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_37_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyLowerUpperBound_37_14" title="a definition with no references">GreedyLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_37_42" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_37_54" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_38_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOnceOrNot_38_14" title="a definition with no references">GreedyOnceOrNot</span></span> = &lt;<span class="cons_String">?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_39_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyZeroOrMore_39_14" title="a definition with no references">GreedyZeroOrMore</span></span> = &lt;<span class="cons_String">*</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_40_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="GreedyOneOrMore_40_14" title="a definition with no references">GreedyOneOrMore</span></span> = &lt;<span class="cons_String">+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_41_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantExactBound_41_14" title="a definition with no references">ReluctantExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_41_40" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_42_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerBound_42_14" title="a definition with no references">ReluctantLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_42_40" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_43_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantLowerUpperBound_43_14" title="a definition with no references">ReluctantLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_43_45" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_43_57" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_44_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOnceOrNot_44_14" title="a definition with no references">ReluctantOnceOrNot</span></span> = &lt;<span class="cons_String">??</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_45_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantZeroOrMore_45_14" title="a definition with no references">ReluctantZeroOrMore</span></span> = &lt;<span class="cons_String">*?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_46_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="ReluctantOneOrMore_46_14" title="a definition with no references">ReluctantOneOrMore</span></span> = &lt;<span class="cons_String">+?</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_47_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveExactBound_47_14" title="a definition with no references">PossessiveExactBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_47_41" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_48_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerBound_48_14" title="a definition with no references">PossessiveLowerBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_48_41" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_49_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveLowerUpperBound_49_14" title="a definition with no references">PossessiveLowerUpperBound</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#Integer_244_3" id="Integer_49_46" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">,</span> &lt;<a href="#Integer_244_3" id="Integer_49_58" title="a reference to a single-file definition">Integer</a>&gt; <span class="cons_String">}+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_50_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOnceOrNot_50_14" title="a definition with no references">PossessiveOnceOrNot</span></span> = &lt;<span class="cons_String">?+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_51_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveZeroOrMore_51_14" title="a definition with no references">PossessiveZeroOrMore</span></span> = &lt;<span class="cons_String">*+</span>&gt;
  <a href="#Quantifier_27_35" id="Quantifier_52_3" title="a definition with a single reference">Quantifier</a>.<span class="cons_Constructor"><span id="PossessiveOneOrMore_52_14" title="a definition with no references">PossessiveOneOrMore</span></span> = &lt;<span class="cons_String">++</span>&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="Atom_56_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Atom_60_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="Capture_60_8" title="a definition with no references">Capture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_10_3" id="Pattern_60_22" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_61_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="NonCapture_61_8" title="a definition with no references">NonCapture</span></span> = &lt;<span class="cons_String">(?:</span> &lt;<a href="#Pattern_10_3" id="Pattern_61_27" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_62_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="PositiveLookahead_62_8" title="a definition with no references">PositiveLookahead</span></span> = &lt;<span class="cons_String">(?=</span> &lt;<a href="#Pattern_10_3" id="Pattern_62_34" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_63_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="NegativeLookahead_63_8" title="a definition with no references">NegativeLookahead</span></span> = &lt;<span class="cons_String">(?!</span> &lt;<a href="#Pattern_10_3" id="Pattern_63_34" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_64_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="PositiveLookbehind_64_8" title="a definition with no references">PositiveLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">=</span> &lt;<a href="#Pattern_10_3" id="Pattern_64_37" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_65_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="NegativeLookbehind_65_8" title="a definition with no references">NegativeLookbehind</span></span> = &lt;<span class="cons_String">(?</span>\&lt;<span class="cons_String">!</span> &lt;<a href="#Pattern_10_3" id="Pattern_65_37" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_66_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="PythonCapture_66_8" title="a definition with no references">PythonCapture</span></span> = &lt;<span class="cons_String">(?P</span>\&lt; &lt;<a href="#RegexId_260_3" id="RegexId_66_32" title="a reference to a single-file definition">RegexId</a>&gt; \&gt; &lt;<a href="#Pattern_10_3" id="Pattern_66_45" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Atom_67_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="RegexCapture_67_8" title="a definition with no references">RegexCapture</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#Pattern_10_3" id="Pattern_67_27" title="a reference to a single-file definition">Pattern</a>&gt; <span class="cons_String">)@{</span> &lt;<a href="#RegexId_260_3" id="RegexId_67_41" title="a reference to a single-file definition">RegexId</a>&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Atom_68_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="Empty_68_8" title="a definition with no references">Empty</span></span> = &lt;<span class="cons_String">()</span>&gt;
  <button class="modal-open" id="Atom_69_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="SingleCharacter_69_8" title="a definition with no references">SingleCharacter</span></span> = &lt;<span class="cons_String">.</span>&gt;
  <button class="modal-open" id="Atom_70_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="LineStart_70_8" title="a definition with no references">LineStart</span></span> = &lt;<span class="cons_String">^</span>&gt;
  <button class="modal-open" id="Atom_71_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="LineEnd_71_8" title="a definition with no references">LineEnd</span></span> = &lt;<span class="cons_String">$</span>&gt;
  <button class="modal-open" id="Atom_72_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="CharacterClass_72_8" title="a definition with no references">CharacterClass</span></span> = <a href="#CharacterClass_79_3" id="CharacterClass_72_25" title="a reference to a single-file definition">CharacterClass</a>
  <button class="modal-open" id="Atom_73_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="AtomLiteral_73_8" title="a definition with no references">AtomLiteral</span></span> = <a href="#AtomLiteral_121_18" id="AtomLiteral_73_22" title="a reference to a single-file definition">AtomLiteral</a>
  <button class="modal-open" id="Atom_74_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="AtomCharacter_74_8" title="a definition with no references">AtomCharacter</span></span> = <a href="#AtomCharacter_137_20" id="AtomCharacter_74_24" title="a reference to a single-file definition">AtomCharacter</a>
  <button class="modal-open" id="Atom_75_3" title="a definition with multiple references" data-urls="#Atom line 26_22, 27_28">Atom</button>.<span class="cons_Constructor"><span id="QuotedAtom_75_8" title="a definition with no references">QuotedAtom</span></span> = &lt;\\<span class="cons_String">Q</span> &lt;<a href="#AllChars_121_30" id="AllChars_75_27" title="a reference to a single-file definition">AllChars</a>&gt; \\<span class="cons_String">E</span>&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="CharacterClass_79_3" title="a definition with multiple references" data-urls="#CharacterClass line 72_25, 88_23">CharacterClass</button> <button class="modal-open" id="BracketItem_79_18" title="a definition with multiple references" data-urls="#BracketItem line 83_36, 84_44">BracketItem</button> <button class="modal-open" id="BracketLiteralOrBracketCharacter_79_30" title="a definition with multiple references" data-urls="#BracketLiteralOrBracketCharacter line 85_25, 85_62">BracketLiteralOrBracketCharacter</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="CharacterClass_83_3" title="a definition with multiple references" data-urls="#CharacterClass line 72_25, 88_23">CharacterClass</button>.<span class="cons_Constructor"><span id="BracketList_83_18" title="a definition with no references">BracketList</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#BracketItem_79_18" id="BracketItem_83_36" title="a reference to a single-file definition">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="CharacterClass_84_3" title="a definition with multiple references" data-urls="#CharacterClass line 72_25, 88_23">CharacterClass</button>.<span class="cons_Constructor"><span id="NegatedBracketList_84_18" title="a definition with no references">NegatedBracketList</span></span> = &lt;<span class="cons_String">[^</span> &lt;<a href="#BracketItem_79_18" id="BracketItem_84_44" title="a reference to a single-file definition">BracketItem</a>+&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="BracketItem_85_3" title="a definition with multiple references" data-urls="#BracketItem line 83_36, 84_44">BracketItem</button>.<span class="cons_Constructor"><span id="Range_85_15" title="a definition with no references">Range</span></span> = &lt;&lt;<a href="#BracketLiteralOrBracketCharacter_79_30" id="BracketLiteralOrBracketCharacter_85_25" title="a reference to a single-file definition">BracketLiteralOrBracketCharacter</a>&gt; <span class="cons_String">-</span> &lt;<a href="#BracketLiteralOrBracketCharacter_79_30" id="BracketLiteralOrBracketCharacter_85_62" title="a reference to a single-file definition">BracketLiteralOrBracketCharacter</a>&gt;&gt;
  <button class="modal-open" id="BracketLiteralOrBracketCharacter_86_3" title="a definition with multiple references" data-urls="#BracketLiteralOrBracketCharacter line 85_25, 85_62">BracketLiteralOrBracketCharacter</button> = <a href="#BracketLiteral_121_3" id="BracketLiteral_86_38" title="a reference to a single-file definition">BracketLiteral</a>
  <button class="modal-open" id="BracketLiteralOrBracketCharacter_87_3" title="a definition with multiple references" data-urls="#BracketLiteralOrBracketCharacter line 85_25, 85_62">BracketLiteralOrBracketCharacter</button> = <a href="#BracketCharacter_137_3" id="BracketCharacter_87_38" title="a reference to a single-file definition">BracketCharacter</a>
  <button class="modal-open" id="BracketItem_88_3" title="a definition with multiple references" data-urls="#BracketItem line 83_36, 84_44">BracketItem</button>.<span class="cons_Constructor"><span id="Union_88_15" title="a definition with no references">Union</span></span> = <a href="#CharacterClass_79_3" id="CharacterClass_88_23" title="a reference to a single-file definition">CharacterClass</a>
  <button class="modal-open" id="BracketItem_89_3" title="a definition with multiple references" data-urls="#BracketItem line 83_36, 84_44">BracketItem</button>.<span class="cons_Constructor"><span id="BracketLiteral_89_15" title="a definition with no references">BracketLiteral</span></span> = <a href="#BracketLiteral_121_3" id="BracketLiteral_89_32" title="a reference to a single-file definition">BracketLiteral</a>
  <button class="modal-open" id="BracketItem_90_3" title="a definition with multiple references" data-urls="#BracketItem line 83_36, 84_44">BracketItem</button>.<span class="cons_Constructor"><span id="BracketCharacter_90_15" title="a definition with no references">BracketCharacter</span></span> = <a href="#BracketCharacter_137_3" id="BracketCharacter_90_34" title="a reference to a single-file definition">BracketCharacter</a>

<span class="keyword">context-free sorts</span>

  <span id="ClassKeyword_94_3" title="a definition with no references">ClassKeyword</span>

<span class="keyword">context-free syntax</span>

  <span id="ClassKeyword_98_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="LowerClass_98_16" title="a definition with no references">LowerClass</span></span> = &lt;<span class="cons_String">Lower</span>&gt;
  <span id="ClassKeyword_99_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="UpperClass_99_16" title="a definition with no references">UpperClass</span></span> = &lt;<span class="cons_String">Upper</span>&gt;
  <span id="ClassKeyword_100_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="ASCIIClass_100_16" title="a definition with no references">ASCIIClass</span></span> = &lt;<span class="cons_String">ASCII</span>&gt;
  <span id="ClassKeyword_101_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlphaClass_101_16" title="a definition with no references">AlphaClass</span></span> = &lt;<span class="cons_String">Alpha</span>&gt;
  <span id="ClassKeyword_102_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="DigitClass_102_16" title="a definition with no references">DigitClass</span></span> = &lt;<span class="cons_String">Digit</span>&gt;
  <span id="ClassKeyword_103_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="AlnumClass_103_16" title="a definition with no references">AlnumClass</span></span> = &lt;<span class="cons_String">Alnum</span>&gt;
  <span id="ClassKeyword_104_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="PunctClass_104_16" title="a definition with no references">PunctClass</span></span> = &lt;<span class="cons_String">Punct</span>&gt;
  <span id="ClassKeyword_105_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="GraphClass_105_16" title="a definition with no references">GraphClass</span></span> = &lt;<span class="cons_String">Graph</span>&gt;
  <span id="ClassKeyword_106_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="PrintClass_106_16" title="a definition with no references">PrintClass</span></span> = &lt;<span class="cons_String">Print</span>&gt;
  <span id="ClassKeyword_107_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="BlankClass_107_16" title="a definition with no references">BlankClass</span></span> = &lt;<span class="cons_String">Blank</span>&gt;
  <span id="ClassKeyword_108_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="CntrlClass_108_16" title="a definition with no references">CntrlClass</span></span> = &lt;<span class="cons_String">Cntrl</span>&gt;
  <span id="ClassKeyword_109_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="XDigitClass_109_16" title="a definition with no references">XDigitClass</span></span> = &lt;<span class="cons_String">XDigit</span>&gt;
  <span id="ClassKeyword_110_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="WhiteSpace_110_16" title="a definition with no references">WhiteSpace</span></span> = &lt;<span class="cons_String">Space</span>&gt;
  <span id="ClassKeyword_111_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsLowerCase_111_16" title="a definition with no references">JavaIsLowerCase</span></span> = &lt;<span class="cons_String">javaLowerCase</span>&gt;
  <span id="ClassKeyword_112_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsUpperCase_112_16" title="a definition with no references">JavaIsUpperCase</span></span> = &lt;<span class="cons_String">javaUpperCase</span>&gt;
  <span id="ClassKeyword_113_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsWhitespace_113_16" title="a definition with no references">JavaIsWhitespace</span></span> = &lt;<span class="cons_String">javaWhitespace</span>&gt;
  <span id="ClassKeyword_114_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="JavaIsMirrored_114_16" title="a definition with no references">JavaIsMirrored</span></span> = &lt;<span class="cons_String">javaMirrored</span>&gt;
  <span id="ClassKeyword_115_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="GreekBlock_115_16" title="a definition with no references">GreekBlock</span></span> = &lt;<span class="cons_String">InGreek</span>&gt;
  <span id="ClassKeyword_116_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="UppercaseLetter_116_16" title="a definition with no references">UppercaseLetter</span></span> = &lt;<span class="cons_String">Lu</span>&gt;
  <span id="ClassKeyword_117_3" title="a definition with no references">ClassKeyword</span>.<span class="cons_Constructor"><span id="CurrencySymbol_117_16" title="a definition with no references">CurrencySymbol</span></span> = &lt;<span class="cons_String">Sc</span>&gt;

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="BracketLiteral_121_3" title="a definition with multiple references" data-urls="#BracketLiteral line 86_38, 89_32">BracketLiteral</button> <a href="#AtomLiteral_73_22" id="AtomLiteral_121_18" title="a definition with a single reference">AtomLiteral</a> <a href="#AllChars_75_27" id="AllChars_121_30" title="a definition with a single reference">AllChars</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="BracketLiteral_125_3" title="a definition with multiple references" data-urls="#BracketLiteral line 86_38, 89_32">BracketLiteral</button> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\$\*\+\?\.\}\|]
  <button class="modal-open" id="BracketLiteral_126_3" title="a definition with multiple references" data-urls="#BracketLiteral line 86_38, 89_32">BracketLiteral</button> = <span class="cons_Lit">"/"</span>
  <button class="modal-open" id="BracketLiteral_127_3" title="a definition with multiple references" data-urls="#BracketLiteral line 86_38, 89_32">BracketLiteral</button> = [\&amp;\]\-] {<span class="keyword">reject</span>}
  <a href="#AtomLiteral_73_22" id="AtomLiteral_128_3" title="a definition with a single reference">AtomLiteral</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\&amp;\]\-]
  <a href="#AtomLiteral_73_22" id="AtomLiteral_129_3" title="a definition with a single reference">AtomLiteral</a> = <span class="cons_Lit">"/"</span>
  <a href="#AtomLiteral_73_22" id="AtomLiteral_130_3" title="a definition with a single reference">AtomLiteral</a> = [\}\)\|\[] {<span class="keyword">reject</span>}
  <a href="#AllChars_75_27" id="AllChars_131_3" title="a definition with a single reference">AllChars</a> = [\\\|\$\*\+\?\.\{\}\(\)\&amp;\]\-\[\^\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\t\n\r]*
  <a href="#AllChars_75_27" id="AllChars_132_3" title="a definition with a single reference">AllChars</a> = <span class="cons_Lit">"/"</span>
  <a href="#AllChars_75_27" id="AllChars_133_3" title="a definition with a single reference">AllChars</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_133_14" title="a reference to a single-file definition">DoubleQuote</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="BracketCharacter_137_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> <a href="#AtomCharacter_74_24" id="AtomCharacter_137_20" title="a definition with a single reference">AtomCharacter</a> <button class="modal-open" id="DoubleQuote_137_34" title="a definition with multiple references" data-urls="#DoubleQuote line 133_14, 168_22, 193_19, 240_27">DoubleQuote</button> <button class="modal-open" id="OctalChar_137_46" title="a definition with multiple references" data-urls="#OctalChar line 169_22, 194_19">OctalChar</button> <button class="modal-open" id="HexHexChar_137_56" title="a definition with multiple references" data-urls="#HexHexChar line 170_22, 195_19">HexHexChar</button> <button class="modal-open" id="DecHexChar_137_67" title="a definition with multiple references" data-urls="#DecHexChar line 171_22, 196_19">DecHexChar</button> <button class="modal-open" id="Tab_137_78" title="a definition with multiple references" data-urls="#Tab line 172_22, 197_19">Tab</button> <button class="modal-open" id="Newline_137_82" title="a definition with multiple references" data-urls="#Newline line 173_22, 198_19">Newline</button> <button class="modal-open" id="ReturnAtom_137_90" title="a definition with multiple references" data-urls="#ReturnAtom line 174_22, 199_19">ReturnAtom</button> <button class="modal-open" id="Formfeed_137_101" title="a definition with multiple references" data-urls="#Formfeed line 175_22, 200_19">Formfeed</button> <button class="modal-open" id="Alarm_137_110" title="a definition with multiple references" data-urls="#Alarm line 176_22, 201_19">Alarm</button> <button class="modal-open" id="Escape_137_116" title="a definition with multiple references" data-urls="#Escape line 177_22, 202_19">Escape</button>
  <button class="modal-open" id="WordChar_138_3" title="a definition with multiple references" data-urls="#WordChar line 178_22, 203_19">WordChar</button> <button class="modal-open" id="NonWordChar_138_12" title="a definition with multiple references" data-urls="#NonWordChar line 179_22, 204_19">NonWordChar</button> <button class="modal-open" id="WhiteSpaceChar_138_24" title="a definition with multiple references" data-urls="#WhiteSpaceChar line 180_22, 205_19">WhiteSpaceChar</button> <button class="modal-open" id="DigitChar_138_39" title="a definition with multiple references" data-urls="#DigitChar line 182_22, 207_19">DigitChar</button> <button class="modal-open" id="NonDigitChar_138_49" title="a definition with multiple references" data-urls="#NonDigitChar line 183_22, 208_19">NonDigitChar</button> <button class="modal-open" id="ControlCharacter_138_62" title="a definition with multiple references" data-urls="#ControlCharacter line 184_22, 209_19">ControlCharacter</button> <button class="modal-open" id="WordBoundry_138_79" title="a definition with multiple references" data-urls="#WordBoundry line 185_22, 210_19">WordBoundry</button> <button class="modal-open" id="NonWordBoundry_138_91" title="a definition with multiple references" data-urls="#NonWordBoundry line 186_22, 211_19">NonWordBoundry</button> <button class="modal-open" id="InputBeginBoundry_138_106" title="a definition with multiple references" data-urls="#InputBeginBoundry line 187_22, 212_19">InputBeginBoundry</button>
  <button class="modal-open" id="PrevMatchEndBoundry_139_3" title="a definition with multiple references" data-urls="#PrevMatchEndBoundry line 188_22, 213_19">PrevMatchEndBoundry</button> <button class="modal-open" id="EndInputBoundry_139_23" title="a definition with multiple references" data-urls="#EndInputBoundry line 189_22, 214_19">EndInputBoundry</button> <button class="modal-open" id="EndInputFinalBoundry_139_39" title="a definition with multiple references" data-urls="#EndInputFinalBoundry line 190_22, 215_19">EndInputFinalBoundry</button> <button class="modal-open" id="Space_139_60" title="a definition with multiple references" data-urls="#Space line 192_22, 217_19">Space</button> <button class="modal-open" id="NonWhiteSpaceChar_139_66" title="a definition with multiple references" data-urls="#NonWhiteSpaceChar line 181_22, 206_19">NonWhiteSpaceChar</button> <button class="modal-open" id="BackReference_139_84" title="a definition with multiple references" data-urls="#BackReference line 191_22, 216_19">BackReference</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="DoubleQuote_143_3" title="a definition with multiple references" data-urls="#DoubleQuote line 133_14, 168_22, 193_19, 240_27">DoubleQuote</button>.<span class="cons_Constructor"><span id="DoubleQuote_143_15" title="a definition with no references">DoubleQuote</span></span> = &lt;<span class="cons_String">"</span>&gt;
  <button class="modal-open" id="OctalChar_144_3" title="a definition with multiple references" data-urls="#OctalChar line 169_22, 194_19">OctalChar</button>.<span class="cons_Constructor"><span id="OctalChar_144_13" title="a definition with no references">OctalChar</span></span> = &lt;\\<span class="cons_String">0</span> &lt;<a href="#OctalValue_244_11" id="OctalValue_144_31" title="a reference to a single-file definition">OctalValue</a>&gt;&gt;
  <button class="modal-open" id="HexHexChar_145_3" title="a definition with multiple references" data-urls="#HexHexChar line 170_22, 195_19">HexHexChar</button>.<span class="cons_Constructor"><span id="HexHexChar_145_14" title="a definition with no references">HexHexChar</span></span> = &lt;\\<span class="cons_String">x</span> &lt;<a href="#TwoHexValue_244_22" id="TwoHexValue_145_33" title="a reference to a single-file definition">TwoHexValue</a>&gt;&gt;
  <button class="modal-open" id="DecHexChar_146_3" title="a definition with multiple references" data-urls="#DecHexChar line 171_22, 196_19">DecHexChar</button>.<span class="cons_Constructor"><span id="DecHexChar_146_14" title="a definition with no references">DecHexChar</span></span> = &lt;\\<span class="cons_String">u</span> &lt;<a href="#FourHexValue_244_34" id="FourHexValue_146_33" title="a reference to a single-file definition">FourHexValue</a>&gt;&gt;
  <button class="modal-open" id="Tab_147_3" title="a definition with multiple references" data-urls="#Tab line 172_22, 197_19">Tab</button>.<span class="cons_Constructor"><span id="Tab_147_7" title="a definition with no references">Tab</span></span> = &lt;\\<span class="cons_String">t</span>&gt;
  <button class="modal-open" id="Newline_148_3" title="a definition with multiple references" data-urls="#Newline line 173_22, 198_19">Newline</button>.<span class="cons_Constructor"><span id="Newline_148_11" title="a definition with no references">Newline</span></span> = &lt;\\<span class="cons_String">n</span>&gt;
  <button class="modal-open" id="ReturnAtom_149_3" title="a definition with multiple references" data-urls="#ReturnAtom line 174_22, 199_19">ReturnAtom</button>.<span class="cons_Constructor"><span id="ReturnAtom_149_14" title="a definition with no references">ReturnAtom</span></span> = &lt;\\<span class="cons_String">r</span>&gt;
  <button class="modal-open" id="Formfeed_150_3" title="a definition with multiple references" data-urls="#Formfeed line 175_22, 200_19">Formfeed</button>.<span class="cons_Constructor"><span id="Formfeed_150_12" title="a definition with no references">Formfeed</span></span> = &lt;\\<span class="cons_String">f</span>&gt;
  <button class="modal-open" id="Alarm_151_3" title="a definition with multiple references" data-urls="#Alarm line 176_22, 201_19">Alarm</button>.<span class="cons_Constructor"><span id="Alarm_151_9" title="a definition with no references">Alarm</span></span> = &lt;\\<span class="cons_String">a</span>&gt;
  <button class="modal-open" id="Escape_152_3" title="a definition with multiple references" data-urls="#Escape line 177_22, 202_19">Escape</button>.<span class="cons_Constructor"><span id="Escape_152_10" title="a definition with no references">Escape</span></span> = &lt;\\<span class="cons_String">e</span>&gt;
  <button class="modal-open" id="WordChar_153_3" title="a definition with multiple references" data-urls="#WordChar line 178_22, 203_19">WordChar</button>.<span class="cons_Constructor"><span id="WordChar_153_12" title="a definition with no references">WordChar</span></span> = &lt;\\<span class="cons_String">w</span>&gt;
  <button class="modal-open" id="NonWordChar_154_3" title="a definition with multiple references" data-urls="#NonWordChar line 179_22, 204_19">NonWordChar</button>.<span class="cons_Constructor"><span id="NonWordChar_154_15" title="a definition with no references">NonWordChar</span></span> = &lt;\\<span class="cons_String">W</span>&gt;
  <button class="modal-open" id="WhiteSpaceChar_155_3" title="a definition with multiple references" data-urls="#WhiteSpaceChar line 180_22, 205_19">WhiteSpaceChar</button>.<span class="cons_Constructor"><span id="WhiteSpaceChar_155_18" title="a definition with no references">WhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">s</span>&gt;
  <button class="modal-open" id="NonWhiteSpaceChar_156_3" title="a definition with multiple references" data-urls="#NonWhiteSpaceChar line 181_22, 206_19">NonWhiteSpaceChar</button>.<span class="cons_Constructor"><span id="NonWhiteSpaceChar_156_21" title="a definition with no references">NonWhiteSpaceChar</span></span> = &lt;\\<span class="cons_String">S</span>&gt;
  <button class="modal-open" id="DigitChar_157_3" title="a definition with multiple references" data-urls="#DigitChar line 182_22, 207_19">DigitChar</button>.<span class="cons_Constructor"><span id="DigitChar_157_13" title="a definition with no references">DigitChar</span></span> = &lt;\\<span class="cons_String">d</span>&gt;
  <button class="modal-open" id="NonDigitChar_158_3" title="a definition with multiple references" data-urls="#NonDigitChar line 183_22, 208_19">NonDigitChar</button>.<span class="cons_Constructor"><span id="NonDigitChar_158_16" title="a definition with no references">NonDigitChar</span></span> = &lt;\\<span class="cons_String">D</span>&gt;
  <button class="modal-open" id="ControlCharacter_159_3" title="a definition with multiple references" data-urls="#ControlCharacter line 184_22, 209_19">ControlCharacter</button>.<span class="cons_Constructor"><span id="ControlCharacter_159_20" title="a definition with no references">ControlCharacter</span></span> = &lt;\\<span class="cons_String">c</span> &lt;<a href="#ControlValue_244_64" id="ControlValue_159_45" title="a reference to a single-file definition">ControlValue</a>&gt;&gt;
  <button class="modal-open" id="WordBoundry_160_3" title="a definition with multiple references" data-urls="#WordBoundry line 185_22, 210_19">WordBoundry</button>.<span class="cons_Constructor"><span id="WordBoundry_160_15" title="a definition with no references">WordBoundry</span></span> = &lt;\\<span class="cons_String">b</span>&gt;
  <button class="modal-open" id="NonWordBoundry_161_3" title="a definition with multiple references" data-urls="#NonWordBoundry line 186_22, 211_19">NonWordBoundry</button>.<span class="cons_Constructor"><span id="NonWordBoundry_161_18" title="a definition with no references">NonWordBoundry</span></span> = &lt;\\<span class="cons_String">B</span>&gt;
  <button class="modal-open" id="InputBeginBoundry_162_3" title="a definition with multiple references" data-urls="#InputBeginBoundry line 187_22, 212_19">InputBeginBoundry</button>.<span class="cons_Constructor"><span id="InputBeginBoundry_162_21" title="a definition with no references">InputBeginBoundry</span></span> = &lt;\\<span class="cons_String">A</span>&gt;
  <button class="modal-open" id="PrevMatchEndBoundry_163_3" title="a definition with multiple references" data-urls="#PrevMatchEndBoundry line 188_22, 213_19">PrevMatchEndBoundry</button>.<span class="cons_Constructor"><span id="PrevMatchEndBoundry_163_23" title="a definition with no references">PrevMatchEndBoundry</span></span> = &lt;\\<span class="cons_String">G</span>&gt;
  <button class="modal-open" id="EndInputBoundry_164_3" title="a definition with multiple references" data-urls="#EndInputBoundry line 189_22, 214_19">EndInputBoundry</button>.<span class="cons_Constructor"><span id="EndInputBoundry_164_19" title="a definition with no references">EndInputBoundry</span></span> = &lt;\\<span class="cons_String">Z</span>&gt;
  <button class="modal-open" id="EndInputFinalBoundry_165_3" title="a definition with multiple references" data-urls="#EndInputFinalBoundry line 190_22, 215_19">EndInputFinalBoundry</button>.<span class="cons_Constructor"><span id="EndInputFinalBoundry_165_24" title="a definition with no references">EndInputFinalBoundry</span></span> = &lt;\\<span class="cons_String">z</span>&gt;
  <button class="modal-open" id="BackReference_166_3" title="a definition with multiple references" data-urls="#BackReference line 191_22, 216_19">BackReference</button>.<span class="cons_Constructor"><span id="BackReference_166_17" title="a definition with no references">BackReference</span></span> = &lt;\\ &lt;<a href="#BackReferenceLex_244_47" id="BackReferenceLex_166_38" title="a reference to a single-file definition">BackReferenceLex</a>&gt;&gt;
  <button class="modal-open" id="Space_167_3" title="a definition with multiple references" data-urls="#Space line 192_22, 217_19">Space</button>.<span class="cons_Constructor"><span id="Space_167_9" title="a definition with no references">Space</span></span> = <span class="cons_Lit">"\\ "</span>
  <button class="modal-open" id="BracketCharacter_168_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#DoubleQuote_137_34" id="DoubleQuote_168_22" title="a reference to a single-file definition">DoubleQuote</a>
  <button class="modal-open" id="BracketCharacter_169_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#OctalChar_137_46" id="OctalChar_169_22" title="a reference to a single-file definition">OctalChar</a>
  <button class="modal-open" id="BracketCharacter_170_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#HexHexChar_137_56" id="HexHexChar_170_22" title="a reference to a single-file definition">HexHexChar</a>
  <button class="modal-open" id="BracketCharacter_171_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#DecHexChar_137_67" id="DecHexChar_171_22" title="a reference to a single-file definition">DecHexChar</a>
  <button class="modal-open" id="BracketCharacter_172_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Tab_137_78" id="Tab_172_22" title="a reference to a single-file definition">Tab</a>
  <button class="modal-open" id="BracketCharacter_173_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Newline_137_82" id="Newline_173_22" title="a reference to a single-file definition">Newline</a>
  <button class="modal-open" id="BracketCharacter_174_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#ReturnAtom_137_90" id="ReturnAtom_174_22" title="a reference to a single-file definition">ReturnAtom</a>
  <button class="modal-open" id="BracketCharacter_175_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Formfeed_137_101" id="Formfeed_175_22" title="a reference to a single-file definition">Formfeed</a>
  <button class="modal-open" id="BracketCharacter_176_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Alarm_137_110" id="Alarm_176_22" title="a reference to a single-file definition">Alarm</a>
  <button class="modal-open" id="BracketCharacter_177_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Escape_137_116" id="Escape_177_22" title="a reference to a single-file definition">Escape</a>
  <button class="modal-open" id="BracketCharacter_178_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#WordChar_138_3" id="WordChar_178_22" title="a reference to a single-file definition">WordChar</a>
  <button class="modal-open" id="BracketCharacter_179_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#NonWordChar_138_12" id="NonWordChar_179_22" title="a reference to a single-file definition">NonWordChar</a>
  <button class="modal-open" id="BracketCharacter_180_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#WhiteSpaceChar_138_24" id="WhiteSpaceChar_180_22" title="a reference to a single-file definition">WhiteSpaceChar</a>
  <button class="modal-open" id="BracketCharacter_181_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#NonWhiteSpaceChar_139_66" id="NonWhiteSpaceChar_181_22" title="a reference to a single-file definition">NonWhiteSpaceChar</a>
  <button class="modal-open" id="BracketCharacter_182_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#DigitChar_138_39" id="DigitChar_182_22" title="a reference to a single-file definition">DigitChar</a>
  <button class="modal-open" id="BracketCharacter_183_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#NonDigitChar_138_49" id="NonDigitChar_183_22" title="a reference to a single-file definition">NonDigitChar</a>
  <button class="modal-open" id="BracketCharacter_184_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#ControlCharacter_138_62" id="ControlCharacter_184_22" title="a reference to a single-file definition">ControlCharacter</a>
  <button class="modal-open" id="BracketCharacter_185_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#WordBoundry_138_79" id="WordBoundry_185_22" title="a reference to a single-file definition">WordBoundry</a>
  <button class="modal-open" id="BracketCharacter_186_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#NonWordBoundry_138_91" id="NonWordBoundry_186_22" title="a reference to a single-file definition">NonWordBoundry</a>
  <button class="modal-open" id="BracketCharacter_187_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#InputBeginBoundry_138_106" id="InputBeginBoundry_187_22" title="a reference to a single-file definition">InputBeginBoundry</a>
  <button class="modal-open" id="BracketCharacter_188_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#PrevMatchEndBoundry_139_3" id="PrevMatchEndBoundry_188_22" title="a reference to a single-file definition">PrevMatchEndBoundry</a>
  <button class="modal-open" id="BracketCharacter_189_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#EndInputBoundry_139_23" id="EndInputBoundry_189_22" title="a reference to a single-file definition">EndInputBoundry</a>
  <button class="modal-open" id="BracketCharacter_190_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#EndInputFinalBoundry_139_39" id="EndInputFinalBoundry_190_22" title="a reference to a single-file definition">EndInputFinalBoundry</a>
  <button class="modal-open" id="BracketCharacter_191_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#BackReference_139_84" id="BackReference_191_22" title="a reference to a single-file definition">BackReference</a>
  <button class="modal-open" id="BracketCharacter_192_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Space_139_60" id="Space_192_22" title="a reference to a single-file definition">Space</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_193_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_193_19" title="a reference to a single-file definition">DoubleQuote</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_194_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#OctalChar_137_46" id="OctalChar_194_19" title="a reference to a single-file definition">OctalChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_195_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#HexHexChar_137_56" id="HexHexChar_195_19" title="a reference to a single-file definition">HexHexChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_196_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#DecHexChar_137_67" id="DecHexChar_196_19" title="a reference to a single-file definition">DecHexChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_197_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Tab_137_78" id="Tab_197_19" title="a reference to a single-file definition">Tab</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_198_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Newline_137_82" id="Newline_198_19" title="a reference to a single-file definition">Newline</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_199_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#ReturnAtom_137_90" id="ReturnAtom_199_19" title="a reference to a single-file definition">ReturnAtom</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_200_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Formfeed_137_101" id="Formfeed_200_19" title="a reference to a single-file definition">Formfeed</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_201_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Alarm_137_110" id="Alarm_201_19" title="a reference to a single-file definition">Alarm</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_202_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Escape_137_116" id="Escape_202_19" title="a reference to a single-file definition">Escape</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_203_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#WordChar_138_3" id="WordChar_203_19" title="a reference to a single-file definition">WordChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_204_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#NonWordChar_138_12" id="NonWordChar_204_19" title="a reference to a single-file definition">NonWordChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_205_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#WhiteSpaceChar_138_24" id="WhiteSpaceChar_205_19" title="a reference to a single-file definition">WhiteSpaceChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_206_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#NonWhiteSpaceChar_139_66" id="NonWhiteSpaceChar_206_19" title="a reference to a single-file definition">NonWhiteSpaceChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_207_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#DigitChar_138_39" id="DigitChar_207_19" title="a reference to a single-file definition">DigitChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_208_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#NonDigitChar_138_49" id="NonDigitChar_208_19" title="a reference to a single-file definition">NonDigitChar</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_209_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#ControlCharacter_138_62" id="ControlCharacter_209_19" title="a reference to a single-file definition">ControlCharacter</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_210_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#WordBoundry_138_79" id="WordBoundry_210_19" title="a reference to a single-file definition">WordBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_211_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#NonWordBoundry_138_91" id="NonWordBoundry_211_19" title="a reference to a single-file definition">NonWordBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_212_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#InputBeginBoundry_138_106" id="InputBeginBoundry_212_19" title="a reference to a single-file definition">InputBeginBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_213_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#PrevMatchEndBoundry_139_3" id="PrevMatchEndBoundry_213_19" title="a reference to a single-file definition">PrevMatchEndBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_214_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#EndInputBoundry_139_23" id="EndInputBoundry_214_19" title="a reference to a single-file definition">EndInputBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_215_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#EndInputFinalBoundry_139_39" id="EndInputFinalBoundry_215_19" title="a reference to a single-file definition">EndInputFinalBoundry</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_216_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#BackReference_139_84" id="BackReference_216_19" title="a reference to a single-file definition">BackReference</a>
  <a href="#AtomCharacter_74_24" id="AtomCharacter_217_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Space_139_60" id="Space_217_19" title="a reference to a single-file definition">Space</a>

<span class="keyword">context-free sorts</span>

  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_221_3" title="a definition with a single reference">QuotablePatternSymbol</a> <button class="modal-open" id="Quoted_221_25" title="a definition with multiple references" data-urls="#Quoted line 226_19, 227_22">Quoted</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Quoted_225_3" title="a definition with multiple references" data-urls="#Quoted line 226_19, 227_22">Quoted</button>.<span class="cons_Constructor"><span id="Quoted_225_10" title="a definition with no references">Quoted</span></span> = &lt;\\ &lt;<a href="#QuotablePatternSymbol_221_3" id="QuotablePatternSymbol_225_24" title="a reference to a single-file definition">QuotablePatternSymbol</a>&gt;&gt;
  <a href="#AtomCharacter_74_24" id="AtomCharacter_226_3" title="a definition with a single reference">AtomCharacter</a> = <a href="#Quoted_221_25" id="Quoted_226_19" title="a reference to a single-file definition">Quoted</a>
  <button class="modal-open" id="BracketCharacter_227_3" title="a definition with multiple references" data-urls="#BracketCharacter line 87_38, 90_34">BracketCharacter</button> = <a href="#Quoted_221_25" id="Quoted_227_22" title="a reference to a single-file definition">Quoted</a>

<span class="keyword">lexical sorts</span>

  <a href="#QuotablePatternSymbolLex_239_49" id="QuotablePatternSymbolLex_231_3" title="a definition with a single reference">QuotablePatternSymbolLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#QuotablePatternSymbolLex_239_49" id="QuotablePatternSymbolLex_235_3" title="a definition with a single reference">QuotablePatternSymbolLex</a> = [\|\$\*\+\?\.\{\}\(\)\&amp;\]\[\-\^\\\!\#\%\'\,\:\;\&lt;\=\&gt;\@\_\`\~\/]

<span class="keyword">context-free syntax</span>

  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_239_3" title="a definition with a single reference">QuotablePatternSymbol</a>.<span class="cons_Constructor"><span id="QuotablePatternSymbol_239_25" title="a definition with no references">QuotablePatternSymbol</span></span> = <a href="#QuotablePatternSymbolLex_231_3" id="QuotablePatternSymbolLex_239_49" title="a reference to a single-file definition">QuotablePatternSymbolLex</a>
  <a href="#QuotablePatternSymbol_225_24" id="QuotablePatternSymbol_240_3" title="a definition with a single reference">QuotablePatternSymbol</a> = <a href="#DoubleQuote_137_34" id="DoubleQuote_240_27" title="a reference to a single-file definition">DoubleQuote</a>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="Integer_244_3" title="a definition with multiple references" data-urls="#Integer line 35_37, 36_37, 37_42, 37_54, 41_40, 42_40, 43_45, 43_57, 47_41, 48_41, 49_46, 49_58">Integer</button> <a href="#OctalValue_144_31" id="OctalValue_244_11" title="a definition with a single reference">OctalValue</a> <a href="#TwoHexValue_145_33" id="TwoHexValue_244_22" title="a definition with a single reference">TwoHexValue</a> <a href="#FourHexValue_146_33" id="FourHexValue_244_34" title="a definition with a single reference">FourHexValue</a> <a href="#BackReferenceLex_166_38" id="BackReferenceLex_244_47" title="a definition with a single reference">BackReferenceLex</a> <a href="#ControlValue_159_45" id="ControlValue_244_64" title="a definition with a single reference">ControlValue</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="Integer_248_3" title="a definition with multiple references" data-urls="#Integer line 35_37, 36_37, 37_42, 37_54, 41_40, 42_40, 43_45, 43_57, 47_41, 48_41, 49_46, 49_58">Integer</button> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#BackReferenceLex_166_38" id="BackReferenceLex_249_3" title="a definition with a single reference">BackReferenceLex</a> = [<span class="cons_Regular">1</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]*
  <a href="#OctalValue_144_31" id="OctalValue_250_3" title="a definition with a single reference">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_144_31" id="OctalValue_251_3" title="a definition with a single reference">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#OctalValue_144_31" id="OctalValue_252_3" title="a definition with a single reference">OctalValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">3</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">7</span>]
  <a href="#TwoHexValue_145_33" id="TwoHexValue_253_3" title="a definition with a single reference">TwoHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#FourHexValue_146_33" id="FourHexValue_254_3" title="a definition with a single reference">FourHexValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span><span class="cons_Regular">A</span>-<span class="cons_Regular">F</span><span class="cons_Regular">a</span>-<span class="cons_Regular">f</span>]
  <a href="#ControlValue_159_45" id="ControlValue_255_3" title="a definition with a single reference">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]
  <a href="#ControlValue_159_45" id="ControlValue_256_3" title="a definition with a single reference">ControlValue</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>] [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="RegexId_260_3" title="a definition with multiple references" data-urls="#RegexId line 66_32, 67_41">RegexId</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="RegexId_264_3" title="a definition with multiple references" data-urls="#RegexId line 66_32, 67_41">RegexId</button>.<span class="cons_Constructor"><span id="RegexId_264_11" title="a definition with no references">RegexId</span></span> = <a href="#RegexID_268_3" id="RegexID_264_21" title="a reference to a single-file definition">RegexID</a>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="RegexID_268_3" title="a definition with multiple references" data-urls="#RegexID line 264_21, 279_3">RegexID</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="RegexID_272_3" title="a definition with multiple references" data-urls="#RegexID line 264_21, 279_3">RegexID</button> = [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span>\_\$] [<span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]*
  <button class="modal-open" id="RegexID_273_3" title="a definition with multiple references" data-urls="#RegexID line 264_21, 279_3">RegexID</button> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="RegexID_274_3" title="a definition with multiple references" data-urls="#RegexID line 264_21, 279_3">RegexID</button> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="RegexID_275_3" title="a definition with multiple references" data-urls="#RegexID line 264_21, 279_3">RegexID</button> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

<span class="keyword">lexical restrictions</span>

  <a href="#RegexID_268_3" id="RegexID_279_3" title="a reference to a single-file definition">RegexID</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_\$]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
