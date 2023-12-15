---
title: HQL.sdf3
hide:
  - toc
---

# `HQL.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/HQL.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/HQL.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/HQL.sdf3 "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-Action.sdf3/#HQL_9_3" id="HQL_1_8" title="Referenced at ../WebDSL-Action.sdf3 line 9">HQL</a>

<span class="keyword">imports</span>

  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_5_3" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_7_3" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">lexical sorts</span>

  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_11_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> <span id="HQLIdParameter_11_17" title="Not referenced">HQLIdParameter</span> <span id="HQLNumParameter_11_32" title="Not referenced">HQLNumParameter</span> <a href="#HQLNumInt_17_25" id="HQLNumInt_11_48" title="Referenced at line 17, 212">HQLNumInt</a> <a href="#HQLQuotedString_211_27" id="HQLQuotedString_11_58" title="Referenced at line 211">HQLQuotedString</a> <a href="#HQLQuotedStringChar_19_25" id="HQLQuotedStringChar_11_74" title="Referenced at line 19">HQLQuotedStringChar</a>

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_15_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>\_] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <span id="HQLIdParameter_16_3" title="Not referenced">HQLIdParameter</span> = <span class="cons_Lit">":"</span> <a href="#HQLIdentifier_11_3" id="HQLIdentifier_16_24" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>
  <span id="HQLNumParameter_17_3" title="Not referenced">HQLNumParameter</span> = <span class="cons_Lit">"?"</span> <a href="#HQLNumInt_11_48" id="HQLNumInt_17_25" title="Defined at line 11, 18">HQLNumInt</a>
  <a href="#HQLNumInt_17_25" id="HQLNumInt_18_3" title="Referenced at line 17, 212">HQLNumInt</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#HQLQuotedString_211_27" id="HQLQuotedString_19_3" title="Referenced at line 211">HQLQuotedString</a> = <span class="cons_Lit">"'"</span> <a href="#HQLQuotedStringChar_11_74" id="HQLQuotedStringChar_19_25" title="Defined at line 11, 20, 21">HQLQuotedStringChar</a>* <span class="cons_Lit">"'"</span>
  <a href="#HQLQuotedStringChar_19_25" id="HQLQuotedStringChar_20_3" title="Referenced at line 19">HQLQuotedStringChar</a> = ~[\']
  <a href="#HQLQuotedStringChar_19_25" id="HQLQuotedStringChar_21_3" title="Referenced at line 19">HQLQuotedStringChar</a> = <span class="cons_Lit">"\\'"</span>

<span class="keyword">lexical restrictions</span>

  <a href="#HQLIdentifier_11_3" id="HQLIdentifier_25_3" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <span class="cons_Lit">"from"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <span class="cons_Lit">"select"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free sorts</span>

  <span id="HQLStatement_31_3" title="Not referenced">HQLStatement</span> <button class="modal-open" id="HQLDeleteStatement_31_16" title="Multi-file references" data-urls="#HQLDeleteStatement_37_34 line 37; ../WebDSL-Action.sdf3/#HQLDeleteStatement_347_6 line 347">HQLDeleteStatement</button> <a href="#HQLSelectClauseOpt_44_32" id="HQLSelectClauseOpt_31_35" title="Referenced at line 44">HQLSelectClauseOpt</a> <a href="#HQLFromClause_40_52" id="HQLFromClause_31_54" title="Referenced at line 40, 44">HQLFromClause</a> <button class="modal-open" id="HQLQueryRule_31_68" title="Multi-file references" data-urls="#HQLQueryRule_38_34 line 38, 148, 149; ../WebDSL-Action.sdf3/#HQLQueryRule_337_35 line 337, 338, 339">HQLQueryRule</button> <a href="#HQLSelectFrom_42_30" id="HQLSelectFrom_31_81" title="Referenced at line 42">HQLSelectFrom</a>
  <a href="#HQLDistinctOpt_46_44" id="HQLDistinctOpt_32_3" title="Referenced at line 46">HQLDistinctOpt</a> <a href="#HQLSelection_46_61" id="HQLSelection_32_18" title="Referenced at line 46">HQLSelection</a> <a href="#HQLFromRangeJoin_56_38" id="HQLFromRangeJoin_32_31" title="Referenced at line 56">HQLFromRangeJoin</a> <a href="#HQLFromJoin_58_53" id="HQLFromJoin_32_48" title="Referenced at line 58">HQLFromJoin</a> <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_32_60" title="Referenced at line 60">HQLJoinTypeOpt</a> <a href="#HQLFetchOpt_60_50" id="HQLFetchOpt_32_75" title="Referenced at line 60">HQLFetchOpt</a>
  <a href="#HQLWithClauseOpt_60_112" id="HQLWithClauseOpt_33_3" title="Referenced at line 60">HQLWithClauseOpt</a> <a href="#HQLFromRange_58_38" id="HQLFromRange_33_20" title="Referenced at line 58">HQLFromRange</a>

<span class="keyword">context-free syntax</span>

  <span id="HQLStatement_37_3" title="Not referenced">HQLStatement</span>.<span class="cons_Constructor"><span id="DeleteStatement_37_16" title="Not referenced">DeleteStatement</span></span> = <a href="#HQLDeleteStatement_31_16" id="HQLDeleteStatement_37_34" title="Defined at line 31, 40">HQLDeleteStatement</a>
  <span id="HQLStatement_38_3" title="Not referenced">HQLStatement</span>.<span class="cons_Constructor"><span id="SelectStatement_38_16" title="Not referenced">SelectStatement</span></span> = <a href="#HQLQueryRule_31_68" id="HQLQueryRule_38_34" title="Defined at line 31, 42">HQLQueryRule</a>

  <button class="modal-open" id="HQLDeleteStatement_40_3" title="Multi-file references" data-urls="#HQLDeleteStatement_37_34 line 37; ../WebDSL-Action.sdf3/#HQLDeleteStatement_347_6 line 347">HQLDeleteStatement</button>.<span class="cons_Constructor"><span id="HQLDeleteStatement_40_22" title="Not referenced">HQLDeleteStatement</span></span> = &lt;<span class="cons_String">delete</span> &lt;<a href="#HQLFromClause_31_54" id="HQLFromClause_40_52" title="Defined at line 31, 56">HQLFromClause</a>&gt; &lt;<a href="#HQLWhereClauseOpt_83_54" id="HQLWhereClauseOpt_40_68" title="Defined at line 83, 112, 113">HQLWhereClauseOpt</a>&gt;&gt;

  <button class="modal-open" id="HQLQueryRule_42_3" title="Multi-file references" data-urls="#HQLQueryRule_38_34 line 38, 148, 149; ../WebDSL-Action.sdf3/#HQLQueryRule_337_35 line 337, 338, 339">HQLQueryRule</button>.<span class="cons_Constructor"><span id="QueryRule_42_16" title="Not referenced">QueryRule</span></span> = &lt;&lt;<a href="#HQLSelectFrom_31_81" id="HQLSelectFrom_42_30" title="Defined at line 31, 44">HQLSelectFrom</a>&gt; &lt;<a href="#HQLWhereClauseOpt_83_54" id="HQLWhereClauseOpt_42_46" title="Defined at line 83, 112, 113">HQLWhereClauseOpt</a>&gt; &lt;<a href="#HQLGroupByClauseOpt_82_46" id="HQLGroupByClauseOpt_42_66" title="Defined at line 82, 95, 96">HQLGroupByClauseOpt</a>&gt; &lt;<a href="#HQLOrderByClauseOpt_82_66" id="HQLOrderByClauseOpt_42_88" title="Defined at line 82, 98, 99">HQLOrderByClauseOpt</a>&gt;&gt;

  <a href="#HQLSelectFrom_42_30" id="HQLSelectFrom_44_3" title="Referenced at line 42">HQLSelectFrom</a>.<span class="cons_Constructor"><span id="SelectFrom_44_17" title="Not referenced">SelectFrom</span></span> = &lt;&lt;<a href="#HQLSelectClauseOpt_31_35" id="HQLSelectClauseOpt_44_32" title="Defined at line 31, 46, 47">HQLSelectClauseOpt</a>&gt; &lt;<a href="#HQLFromClause_31_54" id="HQLFromClause_44_53" title="Defined at line 31, 56">HQLFromClause</a>&gt;&gt;

  <a href="#HQLSelectClauseOpt_44_32" id="HQLSelectClauseOpt_46_3" title="Referenced at line 44">HQLSelectClauseOpt</a>.<span class="cons_Constructor"><span id="Select_46_22" title="Not referenced">Select</span></span>     = &lt;<span class="cons_String">select</span> &lt;<a href="#HQLDistinctOpt_32_3" id="HQLDistinctOpt_46_44" title="Defined at line 32, 49, 50">HQLDistinctOpt</a>&gt; &lt;<a href="#HQLSelection_32_18" id="HQLSelection_46_61" title="Defined at line 32, 52, 53, 54">HQLSelection</a>&gt;&gt;
  <a href="#HQLSelectClauseOpt_44_32" id="HQLSelectClauseOpt_47_3" title="Referenced at line 44">HQLSelectClauseOpt</a>.<span class="cons_Constructor"><span id="SelectNone_47_22" title="Not referenced">SelectNone</span></span> = &lt;&gt;

  <a href="#HQLDistinctOpt_46_44" id="HQLDistinctOpt_49_3" title="Referenced at line 46">HQLDistinctOpt</a>.<span class="cons_Constructor"><span id="Distinct_49_18" title="Not referenced">Distinct</span></span>     = &lt;<span class="cons_String">distinct</span>&gt;
  <a href="#HQLDistinctOpt_46_44" id="HQLDistinctOpt_50_3" title="Referenced at line 46">HQLDistinctOpt</a>.<span class="cons_Constructor"><span id="NoneDistinct_50_18" title="Not referenced">NoneDistinct</span></span> = &lt;&gt;

  <a href="#HQLSelection_46_61" id="HQLSelection_52_3" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="NewExpression_52_16" title="Not referenced">NewExpression</span></span>      = &lt;<span class="cons_String">new</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_52_43" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#HQLAliasedExpression_83_72" id="HQLAliasedExpression_52_56" title="Defined at line 83, 115">HQLAliasedExpression</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLSelection_46_61" id="HQLSelection_53_3" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="SelectObject_53_16" title="Not referenced">SelectObject</span></span>       = &lt;<span class="cons_String">object</span> <span class="cons_String">(</span> &lt;<a href="#HQLIdentifier_11_3" id="HQLIdentifier_53_48" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLSelection_46_61" id="HQLSelection_54_3" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="SelectedProperties_54_16" title="Not referenced">SelectedProperties</span></span> = &lt;&lt;{<a href="#HQLAliasedExpression_83_72" id="HQLAliasedExpression_54_40" title="Defined at line 83, 115">HQLAliasedExpression</a> <span class="cons_Lit">","</span>}+&gt;&gt;

  <a href="#HQLFromClause_40_52" id="HQLFromClause_56_3" title="Referenced at line 40, 44">HQLFromClause</a>.<span class="cons_Constructor"><span id="FromClause_56_17" title="Not referenced">FromClause</span></span> = &lt;<span class="cons_String">from</span> &lt;{<a href="#HQLFromRangeJoin_32_31" id="HQLFromRangeJoin_56_38" title="Defined at line 32, 58">HQLFromRangeJoin</a> <span class="cons_Lit">","</span>}+&gt;&gt;

  <a href="#HQLFromRangeJoin_56_38" id="HQLFromRangeJoin_58_3" title="Referenced at line 56">HQLFromRangeJoin</a>.<span class="cons_Constructor"><span id="FromRangeJoin_58_20" title="Not referenced">FromRangeJoin</span></span> = &lt;&lt;<a href="#HQLFromRange_33_20" id="HQLFromRange_58_38" title="Defined at line 33, 75, 76, 77, 78">HQLFromRange</a>&gt; &lt;<a href="#HQLFromJoin_32_48" id="HQLFromJoin_58_53" title="Defined at line 32, 60">HQLFromJoin</a>*&gt;&gt;

  <a href="#HQLFromJoin_58_53" id="HQLFromJoin_60_3" title="Referenced at line 58">HQLFromJoin</a>.<span class="cons_Constructor"><span id="FromJoin_60_15" title="Not referenced">FromJoin</span></span> = &lt;&lt;<a href="#HQLJoinTypeOpt_32_60" id="HQLJoinTypeOpt_60_28" title="Defined at line 32, 61, 62, 63, 64, 65, 66, 67">HQLJoinTypeOpt</a>&gt; <span class="cons_String">join</span> &lt;<a href="#HQLFetchOpt_32_75" id="HQLFetchOpt_60_50" title="Defined at line 32, 69, 70">HQLFetchOpt</a>&gt; &lt;<a href="#HQLPath_84_3" id="HQLPath_60_64" title="Defined at line 84, 117">HQLPath</a>&gt; &lt;<a href="#HQLAsAliasOpt_82_32" id="HQLAsAliasOpt_60_74" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt; &lt;<a href="#HQLPropertyFetchOpt_82_3" id="HQLPropertyFetchOpt_60_90" title="Defined at line 82, 92, 93">HQLPropertyFetchOpt</a>&gt; &lt;<a href="#HQLWithClauseOpt_33_3" id="HQLWithClauseOpt_60_112" title="Defined at line 33, 72, 73">HQLWithClauseOpt</a>&gt;&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_61_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="LeftJoin_61_18" title="Not referenced">LeftJoin</span></span>       = &lt;<span class="cons_String">left</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_62_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="RightJoin_62_18" title="Not referenced">RightJoin</span></span>      = &lt;<span class="cons_String">right</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_63_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="LeftOuterJoin_63_18" title="Not referenced">LeftOuterJoin</span></span>  = &lt;<span class="cons_String">left</span> <span class="cons_String">outer</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_64_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="RightOuterJoin_64_18" title="Not referenced">RightOuterJoin</span></span> = &lt;<span class="cons_String">right</span> <span class="cons_String">outer</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_65_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="FullJoin_65_18" title="Not referenced">FullJoin</span></span>       = &lt;<span class="cons_String">full</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_66_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="InnerJoin_66_18" title="Not referenced">InnerJoin</span></span>      = &lt;<span class="cons_String">inner</span>&gt;
  <a href="#HQLJoinTypeOpt_60_28" id="HQLJoinTypeOpt_67_3" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="JoinTypeNone_67_18" title="Not referenced">JoinTypeNone</span></span>   = &lt;&gt;

  <a href="#HQLFetchOpt_60_50" id="HQLFetchOpt_69_3" title="Referenced at line 60">HQLFetchOpt</a>.<span class="cons_Constructor"><span id="Fetch_69_15" title="Not referenced">Fetch</span></span>     = &lt;<span class="cons_String">fetch</span>&gt;
  <a href="#HQLFetchOpt_60_50" id="HQLFetchOpt_70_3" title="Referenced at line 60">HQLFetchOpt</a>.<span class="cons_Constructor"><span id="FetchNone_70_15" title="Not referenced">FetchNone</span></span> = &lt;&gt;

  <a href="#HQLWithClauseOpt_60_112" id="HQLWithClauseOpt_72_3" title="Referenced at line 60">HQLWithClauseOpt</a>.<span class="cons_Constructor"><span id="WithClause_72_20" title="Not referenced">WithClause</span></span>     = &lt;<span class="cons_String">with</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_72_44" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLWithClauseOpt_60_112" id="HQLWithClauseOpt_73_3" title="Referenced at line 60">HQLWithClauseOpt</a>.<span class="cons_Constructor"><span id="WithClauseNone_73_20" title="Not referenced">WithClauseNone</span></span> = &lt;&gt;

  <a href="#HQLFromRange_58_38" id="HQLFromRange_75_3" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="FromClassOrOuterQueryPath_75_16" title="Not referenced">FromClassOrOuterQueryPath</span></span>        = &lt;&lt;<a href="#HQLPath_84_3" id="HQLPath_75_53" title="Defined at line 84, 117">HQLPath</a>&gt; &lt;<a href="#HQLAsAliasOpt_82_32" id="HQLAsAliasOpt_75_63" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt; &lt;<a href="#HQLPropertyFetchOpt_82_3" id="HQLPropertyFetchOpt_75_79" title="Defined at line 82, 92, 93">HQLPropertyFetchOpt</a>&gt;&gt;
  <a href="#HQLFromRange_58_38" id="HQLFromRange_76_3" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InClassDeclaration_76_16" title="Not referenced">InClassDeclaration</span></span>               = &lt;&lt;<a href="#HQLAlias_82_23" id="HQLAlias_76_53" title="Defined at line 82, 90">HQLAlias</a>&gt; <span class="cons_String">in</span> <span class="cons_String">class</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_76_73" title="Defined at line 84, 117">HQLPath</a>&gt;&gt;
  <a href="#HQLFromRange_58_38" id="HQLFromRange_77_3" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InCollectionDeclaration_77_16" title="Not referenced">InCollectionDeclaration</span></span>          = &lt;<span class="cons_String">in</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_77_58" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span> &lt;<a href="#HQLAlias_82_23" id="HQLAlias_77_70" title="Defined at line 82, 90">HQLAlias</a>&gt;&gt;
  <a href="#HQLFromRange_58_38" id="HQLFromRange_78_3" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InCollectionElementsDeclaration_78_16" title="Not referenced">InCollectionElementsDeclaration</span></span>  = &lt;&lt;<a href="#HQLAlias_82_23" id="HQLAlias_78_53" title="Defined at line 82, 90">HQLAlias</a>&gt; <span class="cons_String">in</span> <span class="cons_String">elements</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_78_78" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#HQLPropertyFetchOpt_60_90" id="HQLPropertyFetchOpt_82_3" title="Referenced at line 60, 75">HQLPropertyFetchOpt</a> <a href="#HQLAlias_76_53" id="HQLAlias_82_23" title="Referenced at line 76, 77, 78, 88">HQLAlias</a> <a href="#HQLAsAliasOpt_60_74" id="HQLAsAliasOpt_82_32" title="Referenced at line 60, 75, 115">HQLAsAliasOpt</a> <a href="#HQLGroupByClauseOpt_42_66" id="HQLGroupByClauseOpt_82_46" title="Referenced at line 42">HQLGroupByClauseOpt</a> <a href="#HQLOrderByClauseOpt_42_88" id="HQLOrderByClauseOpt_82_66" title="Referenced at line 42">HQLOrderByClauseOpt</a>
  <a href="#HQLOrderElement_98_51" id="HQLOrderElement_83_3" title="Referenced at line 98">HQLOrderElement</a> <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_83_19" title="Referenced at line 100">HQLAscOrDescOpt</a> <a href="#HQLHavingClauseOpt_95_74" id="HQLHavingClauseOpt_83_35" title="Referenced at line 95">HQLHavingClauseOpt</a> <a href="#HQLWhereClauseOpt_40_68" id="HQLWhereClauseOpt_83_54" title="Referenced at line 40, 42">HQLWhereClauseOpt</a> <a href="#HQLAliasedExpression_52_56" id="HQLAliasedExpression_83_72" title="Referenced at line 52, 54">HQLAliasedExpression</a>
  <a href="#HQLPath_52_43" id="HQLPath_84_3" title="Referenced at line 52, 60, 75, 76, 77, 78, 145, 202, 203">HQLPath</a>

<span class="keyword">context-free syntax</span>

  <a href="#HQLAsAliasOpt_60_74" id="HQLAsAliasOpt_88_3" title="Referenced at line 60, 75, 115">HQLAsAliasOpt</a>.<span class="cons_Constructor"><span id="AsAlias_88_17" title="Not referenced">AsAlias</span></span>     = &lt;<span class="cons_String">as</span> &lt;<a href="#HQLAlias_82_23" id="HQLAlias_88_36" title="Defined at line 82, 90">HQLAlias</a>&gt;&gt;
  <a href="#HQLAsAliasOpt_60_74" id="HQLAsAliasOpt_89_3" title="Referenced at line 60, 75, 115">HQLAsAliasOpt</a>.<span class="cons_Constructor"><span id="AsAliasNone_89_17" title="Not referenced">AsAliasNone</span></span> = &lt;&gt;
  <a href="#HQLAlias_76_53" id="HQLAlias_90_3" title="Referenced at line 76, 77, 78, 88">HQLAlias</a>.<span class="cons_Constructor"><span id="Alias_90_12" title="Not referenced">Alias</span></span> = &lt;&lt;<a href="#HQLIdentifier_11_3" id="HQLIdentifier_90_22" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>&gt;&gt;

  <a href="#HQLPropertyFetchOpt_60_90" id="HQLPropertyFetchOpt_92_3" title="Referenced at line 60, 75">HQLPropertyFetchOpt</a>.<span class="cons_Constructor"><span id="PropertyFetch_92_23" title="Not referenced">PropertyFetch</span></span>     = &lt;<span class="cons_String">fetch</span> <span class="cons_String">all</span> <span class="cons_String">properties</span>&gt;
  <a href="#HQLPropertyFetchOpt_60_90" id="HQLPropertyFetchOpt_93_3" title="Referenced at line 60, 75">HQLPropertyFetchOpt</a>.<span class="cons_Constructor"><span id="PropertyFetchNone_93_23" title="Not referenced">PropertyFetchNone</span></span> = &lt;&gt;

  <a href="#HQLGroupByClauseOpt_42_66" id="HQLGroupByClauseOpt_95_3" title="Referenced at line 42">HQLGroupByClauseOpt</a>.<span class="cons_Constructor"><span id="HQLGroupBy_95_23" title="Not referenced">HQLGroupBy</span></span>     = &lt;<span class="cons_String">group</span> <span class="cons_String">by</span> &lt;{<a href="#HQLExpression_139_3" id="HQLExpression_95_52" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#HQLHavingClauseOpt_83_35" id="HQLHavingClauseOpt_95_74" title="Defined at line 83, 109, 110">HQLHavingClauseOpt</a>&gt;&gt;
  <a href="#HQLGroupByClauseOpt_42_66" id="HQLGroupByClauseOpt_96_3" title="Referenced at line 42">HQLGroupByClauseOpt</a>.<span class="cons_Constructor"><span id="HQLGroupByNone_96_23" title="Not referenced">HQLGroupByNone</span></span> = &lt;&gt;

  <a href="#HQLOrderByClauseOpt_42_88" id="HQLOrderByClauseOpt_98_3" title="Referenced at line 42">HQLOrderByClauseOpt</a>.<span class="cons_Constructor"><span id="OrderByClause_98_23" title="Not referenced">OrderByClause</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#HQLOrderElement_83_3" id="HQLOrderElement_98_51" title="Defined at line 83, 100">HQLOrderElement</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#HQLOrderByClauseOpt_42_88" id="HQLOrderByClauseOpt_99_3" title="Referenced at line 42">HQLOrderByClauseOpt</a>.<span class="cons_Constructor"><span id="OrderByClauseNone_99_23" title="Not referenced">OrderByClauseNone</span></span> = &lt;&gt;
  <a href="#HQLOrderElement_98_51" id="HQLOrderElement_100_3" title="Referenced at line 98">HQLOrderElement</a>.<span class="cons_Constructor"><span id="OrderElement_100_19" title="Not referenced">OrderElement</span></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_100_36" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; &lt;<a href="#HQLAscOrDescOpt_83_19" id="HQLAscOrDescOpt_100_52" title="Defined at line 83, 102, 103, 105, 106, 107">HQLAscOrDescOpt</a>&gt;&gt;

  <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_102_3" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLAscending_102_19" title="Not referenced">HQLAscending</span></span>      = &lt;<span class="cons_String">ascending</span>&gt;
  <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_103_3" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLAscendingAbbr_103_19" title="Not referenced">HQLAscendingAbbr</span></span>  = &lt;<span class="cons_String">asc</span>&gt;

  <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_105_3" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLDescending_105_19" title="Not referenced">HQLDescending</span></span>     = &lt;<span class="cons_String">descending</span>&gt;
  <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_106_3" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLDescendingAbbr_106_19" title="Not referenced">HQLDescendingAbbr</span></span> = &lt;<span class="cons_String">desc</span>&gt;
  <a href="#HQLAscOrDescOpt_100_52" id="HQLAscOrDescOpt_107_3" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="AscOrDescNone_107_19" title="Not referenced">AscOrDescNone</span></span>     = &lt;&gt;

  <a href="#HQLHavingClauseOpt_95_74" id="HQLHavingClauseOpt_109_3" title="Referenced at line 95">HQLHavingClauseOpt</a>.<span class="cons_Constructor"><span id="HavingClause_109_22" title="Not referenced">HavingClause</span></span>     = &lt;<span class="cons_String">having</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_109_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLHavingClauseOpt_95_74" id="HQLHavingClauseOpt_110_3" title="Referenced at line 95">HQLHavingClauseOpt</a>.<span class="cons_Constructor"><span id="HavingClauseNone_110_22" title="Not referenced">HavingClauseNone</span></span> = &lt;&gt;

  <a href="#HQLWhereClauseOpt_40_68" id="HQLWhereClauseOpt_112_3" title="Referenced at line 40, 42">HQLWhereClauseOpt</a>.<span class="cons_Constructor"><span id="WhereClause_112_21" title="Not referenced">WhereClause</span></span>     = &lt;<span class="cons_String">where</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_112_47" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLWhereClauseOpt_40_68" id="HQLWhereClauseOpt_113_3" title="Referenced at line 40, 42">HQLWhereClauseOpt</a>.<span class="cons_Constructor"><span id="WhereClauseNone_113_21" title="Not referenced">WhereClauseNone</span></span> = &lt;&gt;

  <a href="#HQLAliasedExpression_52_56" id="HQLAliasedExpression_115_3" title="Referenced at line 52, 54">HQLAliasedExpression</a>.<span class="cons_Constructor"><span id="AliasedExpression_115_24" title="Not referenced">AliasedExpression</span></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_115_46" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; &lt;<a href="#HQLAsAliasOpt_82_32" id="HQLAsAliasOpt_115_62" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt;&gt;

  <a href="#HQLPath_52_43" id="HQLPath_117_3" title="Referenced at line 52, 60, 75, 76, 77, 78, 145, 202, 203">HQLPath</a>.<span class="cons_Constructor"><span id="Path_117_11" title="Not referenced">Path</span></span> = &lt;&lt;{<a href="#HQLIdentifier_11_3" id="HQLIdentifier_117_21" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a> <span class="cons_Lit">"."</span>}+&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_121_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"select"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_122_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"from"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_123_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_124_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"order"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_126_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_127_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"order"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_128_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"having"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_129_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"where"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_130_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"as"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_131_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"in"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="../WebDSL-Action.sdf3/#TemplateCall_401_55" id="TemplateCall_135_3" title="Referenced at ../WebDSL-Action.sdf3 line 401, 402, 411, 412">TemplateCall</a> = &lt;<span class="cons_String">select</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#HQLExpression_72_44" id="HQLExpression_139_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a> <a href="#HQLConstant_205_33" id="HQLConstant_139_17" title="Referenced at line 205">HQLConstant</a>

<span class="keyword">context-free syntax</span>

  <a href="#HQLExpression_72_44" id="HQLExpression_143_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLDslExp_143_17" title="Not referenced">HQLDslExp</span></span> = <a href="../WebDSL-Action.sdf3/#DslExp_331_24" id="DslExp_143_29" title="Defined at ../WebDSL-Action.sdf3 line 331, 344">DslExp</a>

  <a href="#HQLExpression_72_44" id="HQLExpression_145_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLPath_232_19" id="HQLPath_145_17" title="Referenced at line 232">HQLPath</a></span> = <a href="#HQLPath_84_3" id="HQLPath_145_27" title="Defined at line 84, 117">HQLPath</a>

  <a href="#HQLExpression_72_44" id="HQLExpression_147_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLExpressions_233_19" id="HQLExpressions_147_17" title="Referenced at line 233">HQLExpressions</a></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#HQLExpression_139_3" id="HQLExpression_147_39" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_148_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLQueryRule_148_17" title="Not referenced">HQLQueryRule</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#HQLQueryRule_31_68" id="HQLQueryRule_148_36" title="Defined at line 31, 42">HQLQueryRule</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_149_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLQueryRuleAlt_149_17" title="Not referenced">HQLQueryRuleAlt</span></span> = <a href="#HQLQueryRule_31_68" id="HQLQueryRule_149_35" title="Defined at line 31, 42">HQLQueryRule</a>

  <a href="#HQLExpression_72_44" id="HQLExpression_151_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryOr_276_26" id="QueryOr_151_17" title="Referenced at line 276">QueryOr</a></span>   = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_151_31" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">or</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_151_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_152_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryAnd_275_26" id="QueryAnd_152_17" title="Referenced at line 275">QueryAnd</a></span>  = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_152_31" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">and</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_152_51" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_153_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNot_274_19" id="QueryNot_153_17" title="Referenced at line 274">QueryNot</a></span>  = &lt;<span class="cons_String">not</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_153_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_155_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryEq_269_19" id="QueryEq_155_17" title="Referenced at line 269">QueryEq</a></span>       = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_155_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">=</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_155_53" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_156_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIs_270_19" id="QueryIs_156_17" title="Referenced at line 270">QueryIs</a></span>       = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_156_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">is</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_156_54" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_157_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNe_271_19" id="QueryNe_157_17" title="Referenced at line 271">QueryNe</a></span>       = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_157_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_157_54" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_158_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QuerySqlNe_272_19" id="QuerySqlNe_158_17" title="Referenced at line 272">QuerySqlNe</a></span>    = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_158_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt;\&gt; &lt;<a href="#HQLExpression_139_3" id="HQLExpression_158_56" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_159_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLike_257_19" id="QueryLike_159_17" title="Referenced at line 257">QueryLike</a></span>     = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_159_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">like</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_159_56" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_160_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotLike_258_19" id="QueryNotLike_160_17" title="Referenced at line 258">QueryNotLike</a></span>  = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_160_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">like</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_160_60" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_162_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLt_259_19" id="QueryLt_162_17" title="Referenced at line 259">QueryLt</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_162_29" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt; &lt;<a href="#HQLExpression_139_3" id="HQLExpression_162_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_163_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLe_260_19" id="QueryLe_163_17" title="Referenced at line 260">QueryLe</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_163_29" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_163_49" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_164_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGt_261_19" id="QueryGt_164_17" title="Referenced at line 261">QueryGt</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_164_29" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&gt; &lt;<a href="#HQLExpression_139_3" id="HQLExpression_164_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_165_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGe_262_19" id="QueryGe_165_17" title="Referenced at line 262">QueryGe</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_165_29" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_165_49" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_167_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIn_263_19" id="QueryIn_167_17" title="Referenced at line 263">QueryIn</a></span>           = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_167_39" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">in</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_167_58" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_168_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotIn_264_19" id="QueryNotIn_168_17" title="Referenced at line 264">QueryNotIn</a></span>        = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_168_39" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">in</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_168_62" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_169_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMemberOf_265_19" id="QueryMemberOf_169_17" title="Referenced at line 265">QueryMemberOf</a></span>     = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_169_39" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">member</span> <span class="cons_String">of</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_169_65" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_170_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotMemberOf_266_19" id="QueryNotMemberOf_170_17" title="Referenced at line 266">QueryNotMemberOf</a></span>  = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_170_39" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">member</span> <span class="cons_String">of</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_170_69" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_172_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryConcat_250_19" id="QueryConcat_172_17" title="Referenced at line 250">QueryConcat</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_172_33" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">||</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_172_52" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_174_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryPlus_253_19" id="QueryPlus_174_17" title="Referenced at line 253">QueryPlus</a></span>   = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_174_33" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">+</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_174_51" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_175_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMinus_254_19" id="QueryMinus_175_17" title="Referenced at line 254">QueryMinus</a></span>  = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_175_33" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">-</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_175_51" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_177_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMultiply_247_19" id="QueryMultiply_177_17" title="Referenced at line 247">QueryMultiply</a></span> = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_177_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">*</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_177_53" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_178_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryDivide_248_19" id="QueryDivide_178_17" title="Referenced at line 248">QueryDivide</a></span>   = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_178_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">/</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_178_53" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_179_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryModulo_249_19" id="QueryModulo_179_17" title="Referenced at line 249">QueryModulo</a></span>   = &lt;&lt;<a href="#HQLExpression_139_3" id="HQLExpression_179_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">%</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_179_53" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_181_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryUMinus_244_19" id="QueryUMinus_181_17" title="Referenced at line 244">QueryUMinus</a></span> = &lt;<span class="cons_String">-</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_181_35" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_183_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurDate_183_17" title="Not referenced">HQLFunCurDate</span></span>       = &lt;<span class="cons_String">current_date</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_184_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurTime_184_17" title="Not referenced">HQLFunCurTime</span></span>       = &lt;<span class="cons_String">current_time</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_185_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurTimestamp_185_17" title="Not referenced">HQLFunCurTimestamp</span></span>  = &lt;<span class="cons_String">current_timestamp</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_186_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunSecond_186_17" title="Not referenced">HQLFunSecond</span></span>        = &lt;<span class="cons_String">second</span> <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_186_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_187_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunMinute_187_17" title="Not referenced">HQLFunMinute</span></span>        = &lt;<span class="cons_String">minute</span> <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_187_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_188_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunHour_188_17" title="Not referenced">HQLFunHour</span></span>          = &lt;<span class="cons_String">hour</span>   <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_188_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_189_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunDay_189_17" title="Not referenced">HQLFunDay</span></span>           = &lt;<span class="cons_String">day</span>    <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_189_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_190_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunMonth_190_17" title="Not referenced">HQLFunMonth</span></span>         = &lt;<span class="cons_String">month</span>  <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_190_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_191_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunYear_191_17" title="Not referenced">HQLFunYear</span></span>          = &lt;<span class="cons_String">year</span>   <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_191_50" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_193_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLAvg_234_19" id="HQLAvg_193_17" title="Referenced at line 234">HQLAvg</a></span>        = &lt;<span class="cons_String">avg</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_193_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_194_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSum_235_19" id="HQLSum_194_17" title="Referenced at line 235">HQLSum</a></span>        = &lt;<span class="cons_String">sum</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_194_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_195_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMin_236_19" id="HQLMin_195_17" title="Referenced at line 236">HQLMin</a></span>        = &lt;<span class="cons_String">min</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_195_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_196_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMax_237_19" id="HQLMax_196_17" title="Referenced at line 237">HQLMax</a></span>        = &lt;<span class="cons_String">max</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_196_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_197_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCountStar_238_19" id="HQLCountStar_197_17" title="Referenced at line 238">HQLCountStar</a></span>  = &lt;<span class="cons_String">count</span>      <span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_198_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCount_239_19" id="HQLCount_198_17" title="Referenced at line 239">HQLCount</a></span>      = &lt;<span class="cons_String">count</span>      <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_198_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_199_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSize_240_19" id="HQLSize_199_17" title="Referenced at line 240">HQLSize</a></span>       = &lt;<span class="cons_String">size</span>       <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_199_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_200_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSubString_241_19" id="HQLSubString_200_17" title="Referenced at line 241">HQLSubString</a></span>  = &lt;<span class="cons_String">substring</span>  <span class="cons_String">(</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_200_48" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">,</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_200_66" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">,</span> &lt;<a href="#HQLExpression_139_3" id="HQLExpression_200_84" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_202_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLElements_242_19" id="HQLElements_202_17" title="Referenced at line 242">HQLElements</a></span> = &lt;<span class="cons_String">elements</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_202_44" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_72_44" id="HQLExpression_203_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLIndices_243_19" id="HQLIndices_203_17" title="Referenced at line 243">HQLIndices</a></span>  = &lt;<span class="cons_String">indices</span>  <span class="cons_String">(</span> &lt;<a href="#HQLPath_84_3" id="HQLPath_203_44" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_72_44" id="HQLExpression_205_3" title="Referenced at line 72, 95, 100, 109, 112, 115, 147, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 198, 199, 200, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 247, 248, 249, 250, 253, 254, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 269, 270, 271, 272, 274, 275, 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLConstant_205_17" title="Not referenced">HQLConstant</span></span> = &lt;&lt;<a href="#HQLConstant_139_17" id="HQLConstant_205_33" title="Defined at line 139, 207, 208, 209, 210, 211, 212">HQLConstant</a>&gt;&gt;

  <a href="#HQLConstant_205_33" id="HQLConstant_207_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLTrue_207_15" title="Not referenced">HQLTrue</span></span>   = &lt;<span class="cons_String">true</span>&gt;
  <a href="#HQLConstant_205_33" id="HQLConstant_208_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLFalse_208_15" title="Not referenced">HQLFalse</span></span>  = &lt;<span class="cons_String">false</span>&gt;
  <a href="#HQLConstant_205_33" id="HQLConstant_209_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLEmpty_209_15" title="Not referenced">HQLEmpty</span></span>  = &lt;<span class="cons_String">empty</span>&gt;
  <a href="#HQLConstant_205_33" id="HQLConstant_210_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLNull_210_15" title="Not referenced">HQLNull</span></span>   = &lt;<span class="cons_String">null</span>&gt;
  <a href="#HQLConstant_205_33" id="HQLConstant_211_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLString_211_15" title="Not referenced">HQLString</span></span> = <a href="#HQLQuotedString_11_58" id="HQLQuotedString_211_27" title="Defined at line 11, 19">HQLQuotedString</a>
  <a href="#HQLConstant_205_33" id="HQLConstant_212_3" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLNumInt_212_15" title="Not referenced">HQLNumInt</span></span> = <a href="#HQLNumInt_11_48" id="HQLNumInt_212_27" title="Defined at line 11, 18">HQLNumInt</a>

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_216_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_217_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_218_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"empty"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_16_24" id="HQLIdentifier_219_3" title="Referenced at line 16, 25, 53, 90, 117">HQLIdentifier</a> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_221_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"or"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_222_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"and"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_223_3" title="Not referenced">TemplateId</span> = <span class="cons_Lit">"not"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="../WebDSL-Action.sdf3/#TemplateCall_401_55" id="TemplateCall_227_3" title="Referenced at ../WebDSL-Action.sdf3 line 401, 402, 411, 412">TemplateCall</a> = &lt;<span class="cons_String">empty</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  {
    <a href="#HQLExpression_139_3" id="HQLExpression_232_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLPath_145_17" id="HQLPath_232_19" title="Defined at line 145">HQLPath</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_233_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLExpressions_147_17" id="HQLExpressions_233_19" title="Defined at line 147">HQLExpressions</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_234_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLAvg_193_17" id="HQLAvg_234_19" title="Defined at line 193">HQLAvg</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_235_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSum_194_17" id="HQLSum_235_19" title="Defined at line 194">HQLSum</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_236_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMin_195_17" id="HQLMin_236_19" title="Defined at line 195">HQLMin</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_237_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMax_196_17" id="HQLMax_237_19" title="Defined at line 196">HQLMax</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_238_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCountStar_197_17" id="HQLCountStar_238_19" title="Defined at line 197">HQLCountStar</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_239_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCount_198_17" id="HQLCount_239_19" title="Defined at line 198">HQLCount</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_240_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSize_199_17" id="HQLSize_240_19" title="Defined at line 199">HQLSize</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_241_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSubString_200_17" id="HQLSubString_241_19" title="Defined at line 200">HQLSubString</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_242_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLElements_202_17" id="HQLElements_242_19" title="Defined at line 202">HQLElements</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_243_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLIndices_203_17" id="HQLIndices_243_19" title="Defined at line 203">HQLIndices</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_244_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryUMinus_181_17" id="QueryUMinus_244_19" title="Defined at line 181">QueryUMinus</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_139_3" id="HQLExpression_247_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMultiply_177_17" id="QueryMultiply_247_19" title="Defined at line 177">QueryMultiply</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_248_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryDivide_178_17" id="QueryDivide_248_19" title="Defined at line 178">QueryDivide</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_249_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryModulo_179_17" id="QueryModulo_249_19" title="Defined at line 179">QueryModulo</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_250_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryConcat_172_17" id="QueryConcat_250_19" title="Defined at line 172">QueryConcat</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_139_3" id="HQLExpression_253_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryPlus_174_17" id="QueryPlus_253_19" title="Defined at line 174">QueryPlus</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_254_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMinus_175_17" id="QueryMinus_254_19" title="Defined at line 175">QueryMinus</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_139_3" id="HQLExpression_257_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLike_159_17" id="QueryLike_257_19" title="Defined at line 159">QueryLike</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_258_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotLike_160_17" id="QueryNotLike_258_19" title="Defined at line 160">QueryNotLike</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_259_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLt_162_17" id="QueryLt_259_19" title="Defined at line 162">QueryLt</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_260_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLe_163_17" id="QueryLe_260_19" title="Defined at line 163">QueryLe</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_261_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGt_164_17" id="QueryGt_261_19" title="Defined at line 164">QueryGt</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_262_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGe_165_17" id="QueryGe_262_19" title="Defined at line 165">QueryGe</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_263_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIn_167_17" id="QueryIn_263_19" title="Defined at line 167">QueryIn</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_264_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotIn_168_17" id="QueryNotIn_264_19" title="Defined at line 168">QueryNotIn</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_265_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMemberOf_169_17" id="QueryMemberOf_265_19" title="Defined at line 169">QueryMemberOf</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_266_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotMemberOf_170_17" id="QueryNotMemberOf_266_19" title="Defined at line 170">QueryNotMemberOf</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_139_3" id="HQLExpression_269_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryEq_155_17" id="QueryEq_269_19" title="Defined at line 155">QueryEq</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_270_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIs_156_17" id="QueryIs_270_19" title="Defined at line 156">QueryIs</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_271_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNe_157_17" id="QueryNe_271_19" title="Defined at line 157">QueryNe</a></span>
    <a href="#HQLExpression_139_3" id="HQLExpression_272_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QuerySqlNe_158_17" id="QuerySqlNe_272_19" title="Defined at line 158">QuerySqlNe</a></span>
  }
  &gt; <a href="#HQLExpression_139_3" id="HQLExpression_274_5" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNot_153_17" id="QueryNot_274_19" title="Defined at line 153">QueryNot</a></span>
  &gt; {<span class="keyword">left</span>: <a href="#HQLExpression_139_3" id="HQLExpression_275_12" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryAnd_152_17" id="QueryAnd_275_26" title="Defined at line 152">QueryAnd</a></span>}
  &gt; {<span class="keyword">left</span>: <a href="#HQLExpression_139_3" id="HQLExpression_276_12" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryOr_151_17" id="QueryOr_276_26" title="Defined at line 151">QueryOr</a></span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
