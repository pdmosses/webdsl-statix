---
title: HQL.sdf3
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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-Action.sdf3#HQL_110_113" id="HQL_7_10" title="Referenced at ../WebDSL-Action.sdf3 line 9">HQL</a>

<span class="keyword">imports</span>

  <a href="../WebDSL-Action.sdf3#WebDSL-Action_7_20" id="WebDSL-Action_23_36" title="Defined at ../WebDSL-Action.sdf3 line 1">WebDSL-Action</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_39_53" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_56_65" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>

<span class="keyword">lexical sorts</span>

  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_84_97" title="Referenced at line 117">HQLIdentifier</a> <span id="HQLIdParameter_98_112" title="Not referenced locally, nor via imports">HQLIdParameter</span> <span id="HQLNumParameter_113_128" title="Not referenced locally, nor via imports">HQLNumParameter</span> <a href="#HQLNumInt_7822_7831" id="HQLNumInt_129_138" title="Referenced at line 212">HQLNumInt</a> <a href="#HQLQuotedString_7780_7795" id="HQLQuotedString_139_154" title="Referenced at line 211">HQLQuotedString</a> <a href="#HQLQuotedStringChar_352_371" id="HQLQuotedStringChar_155_174" title="Referenced at line 19">HQLQuotedStringChar</a>

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_194_207" title="Referenced at line 117">HQLIdentifier</a> = [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span>\_] [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]*
  <span id="HQLIdParameter_238_252" title="Not referenced locally, nor via imports">HQLIdParameter</span> = <span class="cons_Lit">":"</span> <a href="#HQLIdentifier_84_97" id="HQLIdentifier_259_272" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>
  <span id="HQLNumParameter_275_290" title="Not referenced locally, nor via imports">HQLNumParameter</span> = <span class="cons_Lit">"?"</span> <a href="#HQLNumInt_129_138" id="HQLNumInt_297_306" title="Defined at line 11, 18">HQLNumInt</a>
  <a href="#HQLNumInt_7822_7831" id="HQLNumInt_309_318" title="Referenced at line 212">HQLNumInt</a> = [<span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]+
  <a href="#HQLQuotedString_7780_7795" id="HQLQuotedString_330_345" title="Referenced at line 211">HQLQuotedString</a> = <span class="cons_Lit">"'"</span> <a href="#HQLQuotedStringChar_155_174" id="HQLQuotedStringChar_352_371" title="Defined at line 11, 20, 21">HQLQuotedStringChar</a>* <span class="cons_Lit">"'"</span>
  <a href="#HQLQuotedStringChar_352_371" id="HQLQuotedStringChar_379_398" title="Referenced at line 19">HQLQuotedStringChar</a> = ~[\']
  <a href="#HQLQuotedStringChar_352_371" id="HQLQuotedStringChar_409_428" title="Referenced at line 19">HQLQuotedStringChar</a> = <span class="cons_Lit">"\\'"</span>

<span class="keyword">lexical restrictions</span>

  <a href="#HQLIdentifier_84_97" id="HQLIdentifier_462_475" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <span class="cons_Lit">"from"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]
  <span class="cons_Lit">"select"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free sorts</span>

  <span id="HQLStatement_573_585" title="Not referenced locally, nor via imports">HQLStatement</span> <a href="#HQLDeleteStatement_838_856" id="HQLDeleteStatement_586_604" title="Referenced at line 37; ../WebDSL-Action.sdf3 line 347">HQLDeleteStatement</a> <a href="#HQLSelectClauseOpt_1133_1151" id="HQLSelectClauseOpt_605_623" title="Referenced at line 44">HQLSelectClauseOpt</a> <a href="#HQLFromClause_1154_1167" id="HQLFromClause_624_637" title="Referenced at line 44">HQLFromClause</a> <a href="#HQLQueryRule_4693_4705" id="HQLQueryRule_638_650" title="Referenced at line 149; ../WebDSL-Action.sdf3 line 339">HQLQueryRule</a> <a href="#HQLSelectFrom_1021_1034" id="HQLSelectFrom_651_664" title="Referenced at line 42">HQLSelectFrom</a>
  <a href="#HQLDistinctOpt_1214_1228" id="HQLDistinctOpt_667_681" title="Referenced at line 46">HQLDistinctOpt</a> <a href="#HQLSelection_1231_1243" id="HQLSelection_682_694" title="Referenced at line 46">HQLSelection</a> <a href="#HQLFromRangeJoin_1620_1636" id="HQLFromRangeJoin_695_711" title="Referenced at line 56">HQLFromRangeJoin</a> <a href="#HQLFromJoin_1698_1709" id="HQLFromJoin_712_723" title="Referenced at line 58">HQLFromJoin</a> <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_724_738" title="Referenced at line 60">HQLJoinTypeOpt</a> <a href="#HQLFetchOpt_1763_1774" id="HQLFetchOpt_739_750" title="Referenced at line 60">HQLFetchOpt</a>
  <a href="#HQLWithClauseOpt_1825_1841" id="HQLWithClauseOpt_753_769" title="Referenced at line 60">HQLWithClauseOpt</a> <a href="#HQLFromRange_1683_1695" id="HQLFromRange_770_782" title="Referenced at line 58">HQLFromRange</a>

<span class="keyword">context-free syntax</span>

  <span id="HQLStatement_807_819" title="Not referenced locally, nor via imports">HQLStatement</span>.<span class="cons_Constructor"><span id="DeleteStatement_820_835" title="Not referenced locally, nor via imports">DeleteStatement</span></span> = <a href="#HQLDeleteStatement_586_604" id="HQLDeleteStatement_838_856" title="Defined at line 31, 40">HQLDeleteStatement</a>
  <span id="HQLStatement_859_871" title="Not referenced locally, nor via imports">HQLStatement</span>.<span class="cons_Constructor"><span id="SelectStatement_872_887" title="Not referenced locally, nor via imports">SelectStatement</span></span> = <a href="#HQLQueryRule_638_650" id="HQLQueryRule_890_902" title="Defined at line 31, 42">HQLQueryRule</a>

  <a href="#HQLDeleteStatement_838_856" id="HQLDeleteStatement_906_924" title="Referenced at line 37; ../WebDSL-Action.sdf3 line 347">HQLDeleteStatement</a>.<span class="cons_Constructor"><span id="HQLDeleteStatement_925_943" title="Not referenced locally, nor via imports">HQLDeleteStatement</span></span> = &lt;<span class="cons_String">delete</span> &lt;<a href="#HQLFromClause_624_637" id="HQLFromClause_955_968" title="Defined at line 31, 56">HQLFromClause</a>&gt; &lt;<a href="#HQLWhereClauseOpt_2816_2833" id="HQLWhereClauseOpt_971_988" title="Defined at line 83, 112, 113">HQLWhereClauseOpt</a>&gt;&gt;

  <a href="#HQLQueryRule_4693_4705" id="HQLQueryRule_994_1006" title="Referenced at line 149; ../WebDSL-Action.sdf3 line 339">HQLQueryRule</a>.<span class="cons_Constructor"><span id="QueryRule_1007_1016" title="Not referenced locally, nor via imports">QueryRule</span></span> = &lt;&lt;<a href="#HQLSelectFrom_651_664" id="HQLSelectFrom_1021_1034" title="Defined at line 31, 44">HQLSelectFrom</a>&gt; &lt;<a href="#HQLWhereClauseOpt_2816_2833" id="HQLWhereClauseOpt_1037_1054" title="Defined at line 83, 112, 113">HQLWhereClauseOpt</a>&gt; &lt;<a href="#HQLGroupByClauseOpt_2723_2742" id="HQLGroupByClauseOpt_1057_1076" title="Defined at line 82, 95, 96">HQLGroupByClauseOpt</a>&gt; &lt;<a href="#HQLOrderByClauseOpt_2743_2762" id="HQLOrderByClauseOpt_1079_1098" title="Defined at line 82, 98, 99">HQLOrderByClauseOpt</a>&gt;&gt;

  <a href="#HQLSelectFrom_1021_1034" id="HQLSelectFrom_1104_1117" title="Referenced at line 42">HQLSelectFrom</a>.<span class="cons_Constructor"><span id="SelectFrom_1118_1128" title="Not referenced locally, nor via imports">SelectFrom</span></span> = &lt;&lt;<a href="#HQLSelectClauseOpt_605_623" id="HQLSelectClauseOpt_1133_1151" title="Defined at line 31, 46, 47">HQLSelectClauseOpt</a>&gt; &lt;<a href="#HQLFromClause_624_637" id="HQLFromClause_1154_1167" title="Defined at line 31, 56">HQLFromClause</a>&gt;&gt;

  <a href="#HQLSelectClauseOpt_1133_1151" id="HQLSelectClauseOpt_1173_1191" title="Referenced at line 44">HQLSelectClauseOpt</a>.<span class="cons_Constructor"><span id="Select_1192_1198" title="Not referenced locally, nor via imports">Select</span></span>     = &lt;<span class="cons_String">select</span> &lt;<a href="#HQLDistinctOpt_667_681" id="HQLDistinctOpt_1214_1228" title="Defined at line 32, 49, 50">HQLDistinctOpt</a>&gt; &lt;<a href="#HQLSelection_682_694" id="HQLSelection_1231_1243" title="Defined at line 32, 52, 53, 54">HQLSelection</a>&gt;&gt;
  <a href="#HQLSelectClauseOpt_1133_1151" id="HQLSelectClauseOpt_1248_1266" title="Referenced at line 44">HQLSelectClauseOpt</a>.<span class="cons_Constructor"><span id="SelectNone_1267_1277" title="Not referenced locally, nor via imports">SelectNone</span></span> = &lt;&gt;

  <a href="#HQLDistinctOpt_1214_1228" id="HQLDistinctOpt_1286_1300" title="Referenced at line 46">HQLDistinctOpt</a>.<span class="cons_Constructor"><span id="Distinct_1301_1309" title="Not referenced locally, nor via imports">Distinct</span></span>     = &lt;<span class="cons_String">distinct</span>&gt;
  <a href="#HQLDistinctOpt_1214_1228" id="HQLDistinctOpt_1329_1343" title="Referenced at line 46">HQLDistinctOpt</a>.<span class="cons_Constructor"><span id="NoneDistinct_1344_1356" title="Not referenced locally, nor via imports">NoneDistinct</span></span> = &lt;&gt;

  <a href="#HQLSelection_1231_1243" id="HQLSelection_1365_1377" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="NewExpression_1378_1391" title="Not referenced locally, nor via imports">NewExpression</span></span>      = &lt;<span class="cons_String">new</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_1405_1412" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#HQLAliasedExpression_2834_2854" id="HQLAliasedExpression_1418_1438" title="Defined at line 83, 115">HQLAliasedExpression</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLSelection_1231_1243" id="HQLSelection_1451_1463" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="SelectObject_1464_1476" title="Not referenced locally, nor via imports">SelectObject</span></span>       = &lt;<span class="cons_String">object</span> <span class="cons_String">(</span> &lt;<a href="#HQLIdentifier_84_97" id="HQLIdentifier_1496_1509" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLSelection_1231_1243" id="HQLSelection_1516_1528" title="Referenced at line 46">HQLSelection</a>.<span class="cons_Constructor"><span id="SelectedProperties_1529_1547" title="Not referenced locally, nor via imports">SelectedProperties</span></span> = &lt;&lt;{<a href="#HQLAliasedExpression_2834_2854" id="HQLAliasedExpression_1553_1573" title="Defined at line 83, 115">HQLAliasedExpression</a> <span class="cons_Lit">","</span>}+&gt;&gt;

  <a href="#HQLFromClause_1154_1167" id="HQLFromClause_1585_1598" title="Referenced at line 44">HQLFromClause</a>.<span class="cons_Constructor"><span id="FromClause_1599_1609" title="Not referenced locally, nor via imports">FromClause</span></span> = &lt;<span class="cons_String">from</span> &lt;{<a href="#HQLFromRangeJoin_695_711" id="HQLFromRangeJoin_1620_1636" title="Defined at line 32, 58">HQLFromRangeJoin</a> <span class="cons_Lit">","</span>}+&gt;&gt;

  <a href="#HQLFromRangeJoin_1620_1636" id="HQLFromRangeJoin_1648_1664" title="Referenced at line 56">HQLFromRangeJoin</a>.<span class="cons_Constructor"><span id="FromRangeJoin_1665_1678" title="Not referenced locally, nor via imports">FromRangeJoin</span></span> = &lt;&lt;<a href="#HQLFromRange_770_782" id="HQLFromRange_1683_1695" title="Defined at line 33, 75, 76, 77, 78">HQLFromRange</a>&gt; &lt;<a href="#HQLFromJoin_712_723" id="HQLFromJoin_1698_1709" title="Defined at line 32, 60">HQLFromJoin</a>*&gt;&gt;

  <a href="#HQLFromJoin_1698_1709" id="HQLFromJoin_1716_1727" title="Referenced at line 58">HQLFromJoin</a>.<span class="cons_Constructor"><span id="FromJoin_1728_1736" title="Not referenced locally, nor via imports">FromJoin</span></span> = &lt;&lt;<a href="#HQLJoinTypeOpt_724_738" id="HQLJoinTypeOpt_1741_1755" title="Defined at line 32, 61, 62, 63, 64, 65, 66, 67">HQLJoinTypeOpt</a>&gt; <span class="cons_String">join</span> &lt;<a href="#HQLFetchOpt_739_750" id="HQLFetchOpt_1763_1774" title="Defined at line 32, 69, 70">HQLFetchOpt</a>&gt; &lt;<a href="#HQLPath_2857_2864" id="HQLPath_1777_1784" title="Defined at line 84, 117">HQLPath</a>&gt; &lt;<a href="#HQLAsAliasOpt_2709_2722" id="HQLAsAliasOpt_1787_1800" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt; &lt;<a href="#HQLPropertyFetchOpt_2680_2699" id="HQLPropertyFetchOpt_1803_1822" title="Defined at line 82, 92, 93">HQLPropertyFetchOpt</a>&gt; &lt;<a href="#HQLWithClauseOpt_753_769" id="HQLWithClauseOpt_1825_1841" title="Defined at line 33, 72, 73">HQLWithClauseOpt</a>&gt;&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_1846_1860" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="LeftJoin_1861_1869" title="Not referenced locally, nor via imports">LeftJoin</span></span>       = &lt;<span class="cons_String">left</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_1887_1901" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="RightJoin_1902_1911" title="Not referenced locally, nor via imports">RightJoin</span></span>      = &lt;<span class="cons_String">right</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_1929_1943" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="LeftOuterJoin_1944_1957" title="Not referenced locally, nor via imports">LeftOuterJoin</span></span>  = &lt;<span class="cons_String">left</span> <span class="cons_String">outer</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_1976_1990" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="RightOuterJoin_1991_2005" title="Not referenced locally, nor via imports">RightOuterJoin</span></span> = &lt;<span class="cons_String">right</span> <span class="cons_String">outer</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_2024_2038" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="FullJoin_2039_2047" title="Not referenced locally, nor via imports">FullJoin</span></span>       = &lt;<span class="cons_String">full</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_2065_2079" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="InnerJoin_2080_2089" title="Not referenced locally, nor via imports">InnerJoin</span></span>      = &lt;<span class="cons_String">inner</span>&gt;
  <a href="#HQLJoinTypeOpt_1741_1755" id="HQLJoinTypeOpt_2107_2121" title="Referenced at line 60">HQLJoinTypeOpt</a>.<span class="cons_Constructor"><span id="JoinTypeNone_2122_2134" title="Not referenced locally, nor via imports">JoinTypeNone</span></span>   = &lt;&gt;

  <a href="#HQLFetchOpt_1763_1774" id="HQLFetchOpt_2145_2156" title="Referenced at line 60">HQLFetchOpt</a>.<span class="cons_Constructor"><span id="Fetch_2157_2162" title="Not referenced locally, nor via imports">Fetch</span></span>     = &lt;<span class="cons_String">fetch</span>&gt;
  <a href="#HQLFetchOpt_1763_1774" id="HQLFetchOpt_2179_2190" title="Referenced at line 60">HQLFetchOpt</a>.<span class="cons_Constructor"><span id="FetchNone_2191_2200" title="Not referenced locally, nor via imports">FetchNone</span></span> = &lt;&gt;

  <a href="#HQLWithClauseOpt_1825_1841" id="HQLWithClauseOpt_2209_2225" title="Referenced at line 60">HQLWithClauseOpt</a>.<span class="cons_Constructor"><span id="WithClause_2226_2236" title="Not referenced locally, nor via imports">WithClause</span></span>     = &lt;<span class="cons_String">with</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_2250_2263" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLWithClauseOpt_1825_1841" id="HQLWithClauseOpt_2268_2284" title="Referenced at line 60">HQLWithClauseOpt</a>.<span class="cons_Constructor"><span id="WithClauseNone_2285_2299" title="Not referenced locally, nor via imports">WithClauseNone</span></span> = &lt;&gt;

  <a href="#HQLFromRange_1683_1695" id="HQLFromRange_2308_2320" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="FromClassOrOuterQueryPath_2321_2346" title="Not referenced locally, nor via imports">FromClassOrOuterQueryPath</span></span>        = &lt;&lt;<a href="#HQLPath_2857_2864" id="HQLPath_2358_2365" title="Defined at line 84, 117">HQLPath</a>&gt; &lt;<a href="#HQLAsAliasOpt_2709_2722" id="HQLAsAliasOpt_2368_2381" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt; &lt;<a href="#HQLPropertyFetchOpt_2680_2699" id="HQLPropertyFetchOpt_2384_2403" title="Defined at line 82, 92, 93">HQLPropertyFetchOpt</a>&gt;&gt;
  <a href="#HQLFromRange_1683_1695" id="HQLFromRange_2408_2420" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InClassDeclaration_2421_2439" title="Not referenced locally, nor via imports">InClassDeclaration</span></span>               = &lt;&lt;<a href="#HQLAlias_2700_2708" id="HQLAlias_2458_2466" title="Defined at line 82, 90">HQLAlias</a>&gt; <span class="cons_String">in</span> <span class="cons_String">class</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_2478_2485" title="Defined at line 84, 117">HQLPath</a>&gt;&gt;
  <a href="#HQLFromRange_1683_1695" id="HQLFromRange_2490_2502" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InCollectionDeclaration_2503_2526" title="Not referenced locally, nor via imports">InCollectionDeclaration</span></span>          = &lt;<span class="cons_String">in</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_2545_2552" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span> &lt;<a href="#HQLAlias_2700_2708" id="HQLAlias_2557_2565" title="Defined at line 82, 90">HQLAlias</a>&gt;&gt;
  <a href="#HQLFromRange_1683_1695" id="HQLFromRange_2570_2582" title="Referenced at line 58">HQLFromRange</a>.<span class="cons_Constructor"><span id="InCollectionElementsDeclaration_2583_2614" title="Not referenced locally, nor via imports">InCollectionElementsDeclaration</span></span>  = &lt;&lt;<a href="#HQLAlias_2700_2708" id="HQLAlias_2620_2628" title="Defined at line 82, 90">HQLAlias</a>&gt; <span class="cons_String">in</span> <span class="cons_String">elements</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_2645_2652" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free sorts</span>

  <a href="#HQLPropertyFetchOpt_2384_2403" id="HQLPropertyFetchOpt_2680_2699" title="Referenced at line 75">HQLPropertyFetchOpt</a> <a href="#HQLAlias_2922_2930" id="HQLAlias_2700_2708" title="Referenced at line 88">HQLAlias</a> <a href="#HQLAsAliasOpt_3948_3961" id="HQLAsAliasOpt_2709_2722" title="Referenced at line 115">HQLAsAliasOpt</a> <a href="#HQLGroupByClauseOpt_1057_1076" id="HQLGroupByClauseOpt_2723_2742" title="Referenced at line 42">HQLGroupByClauseOpt</a> <a href="#HQLOrderByClauseOpt_1079_1098" id="HQLOrderByClauseOpt_2743_2762" title="Referenced at line 42">HQLOrderByClauseOpt</a>
  <a href="#HQLOrderElement_3302_3317" id="HQLOrderElement_2765_2780" title="Referenced at line 98">HQLOrderElement</a> <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_2781_2796" title="Referenced at line 100">HQLAscOrDescOpt</a> <a href="#HQLHavingClauseOpt_3188_3206" id="HQLHavingClauseOpt_2797_2815" title="Referenced at line 95">HQLHavingClauseOpt</a> <a href="#HQLWhereClauseOpt_1037_1054" id="HQLWhereClauseOpt_2816_2833" title="Referenced at line 42">HQLWhereClauseOpt</a> <a href="#HQLAliasedExpression_1553_1573" id="HQLAliasedExpression_2834_2854" title="Referenced at line 54">HQLAliasedExpression</a>
  <a href="#HQLPath_7560_7567" id="HQLPath_2857_2864" title="Referenced at line 203">HQLPath</a>

<span class="keyword">context-free syntax</span>

  <a href="#HQLAsAliasOpt_3948_3961" id="HQLAsAliasOpt_2889_2902" title="Referenced at line 115">HQLAsAliasOpt</a>.<span class="cons_Constructor"><span id="AsAlias_2903_2910" title="Not referenced locally, nor via imports">AsAlias</span></span>     = &lt;<span class="cons_String">as</span> &lt;<a href="#HQLAlias_2700_2708" id="HQLAlias_2922_2930" title="Defined at line 82, 90">HQLAlias</a>&gt;&gt;
  <a href="#HQLAsAliasOpt_3948_3961" id="HQLAsAliasOpt_2935_2948" title="Referenced at line 115">HQLAsAliasOpt</a>.<span class="cons_Constructor"><span id="AsAliasNone_2949_2960" title="Not referenced locally, nor via imports">AsAliasNone</span></span> = &lt;&gt;
  <a href="#HQLAlias_2922_2930" id="HQLAlias_2968_2976" title="Referenced at line 88">HQLAlias</a>.<span class="cons_Constructor"><span id="Alias_2977_2982" title="Not referenced locally, nor via imports">Alias</span></span> = &lt;&lt;<a href="#HQLIdentifier_84_97" id="HQLIdentifier_2987_3000" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a>&gt;&gt;

  <a href="#HQLPropertyFetchOpt_2384_2403" id="HQLPropertyFetchOpt_3006_3025" title="Referenced at line 75">HQLPropertyFetchOpt</a>.<span class="cons_Constructor"><span id="PropertyFetch_3026_3039" title="Not referenced locally, nor via imports">PropertyFetch</span></span>     = &lt;<span class="cons_String">fetch</span> <span class="cons_String">all</span> <span class="cons_String">properties</span>&gt;
  <a href="#HQLPropertyFetchOpt_2384_2403" id="HQLPropertyFetchOpt_3071_3090" title="Referenced at line 75">HQLPropertyFetchOpt</a>.<span class="cons_Constructor"><span id="PropertyFetchNone_3091_3108" title="Not referenced locally, nor via imports">PropertyFetchNone</span></span> = &lt;&gt;

  <a href="#HQLGroupByClauseOpt_1057_1076" id="HQLGroupByClauseOpt_3117_3136" title="Referenced at line 42">HQLGroupByClauseOpt</a>.<span class="cons_Constructor"><span id="HQLGroupBy_3137_3147" title="Not referenced locally, nor via imports">HQLGroupBy</span></span>     = &lt;<span class="cons_String">group</span> <span class="cons_String">by</span> &lt;{<a href="#HQLExpression_4426_4439" id="HQLExpression_3166_3179" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#HQLHavingClauseOpt_2797_2815" id="HQLHavingClauseOpt_3188_3206" title="Defined at line 83, 109, 110">HQLHavingClauseOpt</a>&gt;&gt;
  <a href="#HQLGroupByClauseOpt_1057_1076" id="HQLGroupByClauseOpt_3211_3230" title="Referenced at line 42">HQLGroupByClauseOpt</a>.<span class="cons_Constructor"><span id="HQLGroupByNone_3231_3245" title="Not referenced locally, nor via imports">HQLGroupByNone</span></span> = &lt;&gt;

  <a href="#HQLOrderByClauseOpt_1079_1098" id="HQLOrderByClauseOpt_3254_3273" title="Referenced at line 42">HQLOrderByClauseOpt</a>.<span class="cons_Constructor"><span id="OrderByClause_3274_3287" title="Not referenced locally, nor via imports">OrderByClause</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#HQLOrderElement_2765_2780" id="HQLOrderElement_3302_3317" title="Defined at line 83, 100">HQLOrderElement</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#HQLOrderByClauseOpt_1079_1098" id="HQLOrderByClauseOpt_3328_3347" title="Referenced at line 42">HQLOrderByClauseOpt</a>.<span class="cons_Constructor"><span id="OrderByClauseNone_3348_3365" title="Not referenced locally, nor via imports">OrderByClauseNone</span></span> = &lt;&gt;
  <a href="#HQLOrderElement_3302_3317" id="HQLOrderElement_3373_3388" title="Referenced at line 98">HQLOrderElement</a>.<span class="cons_Constructor"><span id="OrderElement_3389_3401" title="Not referenced locally, nor via imports">OrderElement</span></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_3406_3419" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; &lt;<a href="#HQLAscOrDescOpt_2781_2796" id="HQLAscOrDescOpt_3422_3437" title="Defined at line 83, 102, 103, 105, 106, 107">HQLAscOrDescOpt</a>&gt;&gt;

  <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_3443_3458" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLAscending_3459_3471" title="Not referenced locally, nor via imports">HQLAscending</span></span>      = &lt;<span class="cons_String">ascending</span>&gt;
  <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_3493_3508" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLAscendingAbbr_3509_3525" title="Not referenced locally, nor via imports">HQLAscendingAbbr</span></span>  = &lt;<span class="cons_String">asc</span>&gt;

  <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_3538_3553" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLDescending_3554_3567" title="Not referenced locally, nor via imports">HQLDescending</span></span>     = &lt;<span class="cons_String">descending</span>&gt;
  <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_3589_3604" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="HQLDescendingAbbr_3605_3622" title="Not referenced locally, nor via imports">HQLDescendingAbbr</span></span> = &lt;<span class="cons_String">desc</span>&gt;
  <a href="#HQLAscOrDescOpt_3422_3437" id="HQLAscOrDescOpt_3634_3649" title="Referenced at line 100">HQLAscOrDescOpt</a>.<span class="cons_Constructor"><span id="AscOrDescNone_3650_3663" title="Not referenced locally, nor via imports">AscOrDescNone</span></span>     = &lt;&gt;

  <a href="#HQLHavingClauseOpt_3188_3206" id="HQLHavingClauseOpt_3676_3694" title="Referenced at line 95">HQLHavingClauseOpt</a>.<span class="cons_Constructor"><span id="HavingClause_3695_3707" title="Not referenced locally, nor via imports">HavingClause</span></span>     = &lt;<span class="cons_String">having</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_3723_3736" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLHavingClauseOpt_3188_3206" id="HQLHavingClauseOpt_3741_3759" title="Referenced at line 95">HQLHavingClauseOpt</a>.<span class="cons_Constructor"><span id="HavingClauseNone_3760_3776" title="Not referenced locally, nor via imports">HavingClauseNone</span></span> = &lt;&gt;

  <a href="#HQLWhereClauseOpt_1037_1054" id="HQLWhereClauseOpt_3785_3802" title="Referenced at line 42">HQLWhereClauseOpt</a>.<span class="cons_Constructor"><span id="WhereClause_3803_3814" title="Not referenced locally, nor via imports">WhereClause</span></span>     = &lt;<span class="cons_String">where</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_3829_3842" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLWhereClauseOpt_1037_1054" id="HQLWhereClauseOpt_3847_3864" title="Referenced at line 42">HQLWhereClauseOpt</a>.<span class="cons_Constructor"><span id="WhereClauseNone_3865_3880" title="Not referenced locally, nor via imports">WhereClauseNone</span></span> = &lt;&gt;

  <a href="#HQLAliasedExpression_1553_1573" id="HQLAliasedExpression_3889_3909" title="Referenced at line 54">HQLAliasedExpression</a>.<span class="cons_Constructor"><span id="AliasedExpression_3910_3927" title="Not referenced locally, nor via imports">AliasedExpression</span></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_3932_3945" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; &lt;<a href="#HQLAsAliasOpt_2709_2722" id="HQLAsAliasOpt_3948_3961" title="Defined at line 82, 88, 89">HQLAsAliasOpt</a>&gt;&gt;

  <a href="#HQLPath_7560_7567" id="HQLPath_3967_3974" title="Referenced at line 203">HQLPath</a>.<span class="cons_Constructor"><span id="Path_3975_3979" title="Not referenced locally, nor via imports">Path</span></span> = &lt;&lt;{<a href="#HQLIdentifier_84_97" id="HQLIdentifier_3985_3998" title="Defined at line 11, 15, 121, 122, 123, 124, 216, 217, 218, 219">HQLIdentifier</a> <span class="cons_Lit">"."</span>}+&gt;&gt;

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_4026_4039" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"select"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_4062_4075" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"from"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_4096_4109" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_4128_4141" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"order"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_4164_4174" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"by"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_4193_4203" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"order"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_4225_4235" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"having"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_4258_4268" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"where"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_4290_4300" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"as"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_4319_4329" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"in"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="../WebDSL-Action.sdf3#TemplateCall_9275_9287" id="TemplateCall_4370_4382" title="Referenced at ../WebDSL-Action.sdf3 line 412">TemplateCall</a> = &lt;<span class="cons_String">select</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4426_4439" title="Referenced at line 276">HQLExpression</a> <a href="#HQLConstant_7605_7616" id="HQLConstant_4440_4451" title="Referenced at line 205">HQLConstant</a>

<span class="keyword">context-free syntax</span>

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4476_4489" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLDslExp_4490_4499" title="Not referenced locally, nor via imports">HQLDslExp</span></span> = <a href="../WebDSL-Action.sdf3#DslExp_7519_7525" id="DslExp_4502_4508" title="Defined at ../WebDSL-Action.sdf3 line 331, 344">DslExp</a>

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4512_4525" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLPath_8181_8188" id="HQLPath_4526_4533" title="Referenced at line 232">HQLPath</a></span> = <a href="#HQLPath_2857_2864" id="HQLPath_4536_4543" title="Defined at line 84, 117">HQLPath</a>

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4547_4560" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLExpressions_8207_8221" id="HQLExpressions_4561_4575" title="Referenced at line 233">HQLExpressions</a></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#HQLExpression_4426_4439" id="HQLExpression_4583_4596" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_4609_4622" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLQueryRule_4623_4635" title="Not referenced locally, nor via imports">HQLQueryRule</span></span> = &lt;<span class="cons_String">(</span> &lt;<a href="#HQLQueryRule_638_650" id="HQLQueryRule_4642_4654" title="Defined at line 31, 42">HQLQueryRule</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_4661_4674" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLQueryRuleAlt_4675_4690" title="Not referenced locally, nor via imports">HQLQueryRuleAlt</span></span> = <a href="#HQLQueryRule_638_650" id="HQLQueryRule_4693_4705" title="Defined at line 31, 42">HQLQueryRule</a>

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4709_4722" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryOr_9248_9255" id="QueryOr_4723_4730" title="Referenced at line 276">QueryOr</a></span>   = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4737_4750" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">or</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4756_4769" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_4774_4787" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryAnd_9213_9221" id="QueryAnd_4788_4796" title="Referenced at line 275">QueryAnd</a></span>  = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4802_4815" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">and</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4822_4835" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_4840_4853" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNot_9179_9187" id="QueryNot_4854_4862" title="Referenced at line 274">QueryNot</a></span>  = &lt;<span class="cons_String">not</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4872_4885" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_4891_4904" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryEq_9068_9075" id="QueryEq_4905_4912" title="Referenced at line 269">QueryEq</a></span>       = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4923_4936" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">=</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4941_4954" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_4959_4972" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIs_9094_9101" id="QueryIs_4973_4980" title="Referenced at line 270">QueryIs</a></span>       = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_4991_5004" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">is</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5010_5023" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5028_5041" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNe_9120_9127" id="QueryNe_5042_5049" title="Referenced at line 271">QueryNe</a></span>       = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5060_5073" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5079_5092" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5097_5110" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QuerySqlNe_9146_9156" id="QuerySqlNe_5111_5121" title="Referenced at line 272">QuerySqlNe</a></span>    = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5129_5142" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt;\&gt; &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5150_5163" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5168_5181" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLike_8768_8777" id="QueryLike_5182_5191" title="Referenced at line 257">QueryLike</a></span>     = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5200_5213" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">like</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5221_5234" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5239_5252" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotLike_8796_8808" id="QueryNotLike_5253_5265" title="Referenced at line 258">QueryNotLike</a></span>  = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5271_5284" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">like</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5296_5309" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_5315_5328" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLt_8827_8834" id="QueryLt_5329_5336" title="Referenced at line 259">QueryLt</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5341_5354" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt; &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5360_5373" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5378_5391" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLe_8853_8860" id="QueryLe_5392_5399" title="Referenced at line 260">QueryLe</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5404_5417" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5424_5437" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5442_5455" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGt_8879_8886" id="QueryGt_5456_5463" title="Referenced at line 261">QueryGt</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5468_5481" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&gt; &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5487_5500" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5505_5518" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGe_8905_8912" id="QueryGe_5519_5526" title="Referenced at line 262">QueryGe</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5531_5544" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5551_5564" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_5570_5583" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIn_8931_8938" id="QueryIn_5584_5591" title="Referenced at line 263">QueryIn</a></span>           = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5606_5619" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">in</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5625_5638" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5643_5656" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotIn_8957_8967" id="QueryNotIn_5657_5667" title="Referenced at line 264">QueryNotIn</a></span>        = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5679_5692" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">in</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5702_5715" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5720_5733" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMemberOf_8986_8999" id="QueryMemberOf_5734_5747" title="Referenced at line 265">QueryMemberOf</a></span>     = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5756_5769" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">member</span> <span class="cons_String">of</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5782_5795" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_5800_5813" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotMemberOf_9018_9034" id="QueryNotMemberOf_5814_5830" title="Referenced at line 266">QueryNotMemberOf</a></span>  = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5836_5849" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">not</span> <span class="cons_String">member</span> <span class="cons_String">of</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5866_5879" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_5885_5898" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryConcat_8651_8662" id="QueryConcat_5899_5910" title="Referenced at line 250">QueryConcat</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5915_5928" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">||</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5934_5947" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_5953_5966" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryPlus_8696_8705" id="QueryPlus_5967_5976" title="Referenced at line 253">QueryPlus</a></span>   = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_5983_5996" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">+</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6001_6014" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6019_6032" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMinus_8724_8734" id="QueryMinus_6033_6043" title="Referenced at line 254">QueryMinus</a></span>  = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6049_6062" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">-</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6067_6080" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_6086_6099" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMultiply_8559_8572" id="QueryMultiply_6100_6113" title="Referenced at line 247">QueryMultiply</a></span> = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6118_6131" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">*</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6136_6149" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6154_6167" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryDivide_8591_8602" id="QueryDivide_6168_6179" title="Referenced at line 248">QueryDivide</a></span>   = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6186_6199" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">/</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6204_6217" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6222_6235" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryModulo_8621_8632" id="QueryModulo_6236_6247" title="Referenced at line 249">QueryModulo</a></span>   = &lt;&lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6254_6267" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">%</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6272_6285" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_6291_6304" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryUMinus_8514_8525" id="QueryUMinus_6305_6316" title="Referenced at line 244">QueryUMinus</a></span> = &lt;<span class="cons_String">-</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6323_6336" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt;&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_6342_6355" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurDate_6356_6369" title="Not referenced locally, nor via imports">HQLFunCurDate</span></span>       = &lt;<span class="cons_String">current_date</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6399_6412" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurTime_6413_6426" title="Not referenced locally, nor via imports">HQLFunCurTime</span></span>       = &lt;<span class="cons_String">current_time</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6456_6469" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunCurTimestamp_6470_6488" title="Not referenced locally, nor via imports">HQLFunCurTimestamp</span></span>  = &lt;<span class="cons_String">current_timestamp</span> <span class="cons_String">(</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6518_6531" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunSecond_6532_6544" title="Not referenced locally, nor via imports">HQLFunSecond</span></span>        = &lt;<span class="cons_String">second</span> <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6565_6578" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6585_6598" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunMinute_6599_6611" title="Not referenced locally, nor via imports">HQLFunMinute</span></span>        = &lt;<span class="cons_String">minute</span> <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6632_6645" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6652_6665" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunHour_6666_6676" title="Not referenced locally, nor via imports">HQLFunHour</span></span>          = &lt;<span class="cons_String">hour</span>   <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6699_6712" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6719_6732" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunDay_6733_6742" title="Not referenced locally, nor via imports">HQLFunDay</span></span>           = &lt;<span class="cons_String">day</span>    <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6766_6779" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6786_6799" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunMonth_6800_6811" title="Not referenced locally, nor via imports">HQLFunMonth</span></span>         = &lt;<span class="cons_String">month</span>  <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6833_6846" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6853_6866" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLFunYear_6867_6877" title="Not referenced locally, nor via imports">HQLFunYear</span></span>          = &lt;<span class="cons_String">year</span>   <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6900_6913" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_6921_6934" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLAvg_8240_8246" id="HQLAvg_6935_6941" title="Referenced at line 234">HQLAvg</a></span>        = &lt;<span class="cons_String">avg</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_6966_6979" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_6986_6999" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSum_8265_8271" id="HQLSum_7000_7006" title="Referenced at line 235">HQLSum</a></span>        = &lt;<span class="cons_String">sum</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7031_7044" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7051_7064" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMin_8290_8296" id="HQLMin_7065_7071" title="Referenced at line 236">HQLMin</a></span>        = &lt;<span class="cons_String">min</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7096_7109" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7116_7129" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMax_8315_8321" id="HQLMax_7130_7136" title="Referenced at line 237">HQLMax</a></span>        = &lt;<span class="cons_String">max</span>        <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7161_7174" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7181_7194" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCountStar_8340_8352" id="HQLCountStar_7195_7207" title="Referenced at line 238">HQLCountStar</a></span>  = &lt;<span class="cons_String">count</span>      <span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7232_7245" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCount_8371_8379" id="HQLCount_7246_7254" title="Referenced at line 239">HQLCount</a></span>      = &lt;<span class="cons_String">count</span>      <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7277_7290" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7297_7310" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSize_8398_8405" id="HQLSize_7311_7318" title="Referenced at line 240">HQLSize</a></span>       = &lt;<span class="cons_String">size</span>       <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7342_7355" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7362_7375" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSubString_8424_8436" id="HQLSubString_7376_7388" title="Referenced at line 241">HQLSubString</a></span>  = &lt;<span class="cons_String">substring</span>  <span class="cons_String">(</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7407_7420" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">,</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7425_7438" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">,</span> &lt;<a href="#HQLExpression_4426_4439" id="HQLExpression_7443_7456" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_7464_7477" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLElements_8455_8466" id="HQLElements_7478_7489" title="Referenced at line 242">HQLElements</a></span> = &lt;<span class="cons_String">elements</span> <span class="cons_String">(</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_7505_7512" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#HQLExpression_9234_9247" id="HQLExpression_7519_7532" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLIndices_8485_8495" id="HQLIndices_7533_7543" title="Referenced at line 243">HQLIndices</a></span>  = &lt;<span class="cons_String">indices</span>  <span class="cons_String">(</span> &lt;<a href="#HQLPath_2857_2864" id="HQLPath_7560_7567" title="Defined at line 84, 117">HQLPath</a>&gt; <span class="cons_String">)</span>&gt;

  <a href="#HQLExpression_9234_9247" id="HQLExpression_7575_7588" title="Referenced at line 276">HQLExpression</a>.<span class="cons_Constructor"><span id="HQLConstant_7589_7600" title="Not referenced locally, nor via imports">HQLConstant</span></span> = &lt;&lt;<a href="#HQLConstant_4440_4451" id="HQLConstant_7605_7616" title="Defined at line 139, 207, 208, 209, 210, 211, 212">HQLConstant</a>&gt;&gt;

  <a href="#HQLConstant_7605_7616" id="HQLConstant_7622_7633" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLTrue_7634_7641" title="Not referenced locally, nor via imports">HQLTrue</span></span>   = &lt;<span class="cons_String">true</span>&gt;
  <a href="#HQLConstant_7605_7616" id="HQLConstant_7655_7666" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLFalse_7667_7675" title="Not referenced locally, nor via imports">HQLFalse</span></span>  = &lt;<span class="cons_String">false</span>&gt;
  <a href="#HQLConstant_7605_7616" id="HQLConstant_7689_7700" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLEmpty_7701_7709" title="Not referenced locally, nor via imports">HQLEmpty</span></span>  = &lt;<span class="cons_String">empty</span>&gt;
  <a href="#HQLConstant_7605_7616" id="HQLConstant_7723_7734" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLNull_7735_7742" title="Not referenced locally, nor via imports">HQLNull</span></span>   = &lt;<span class="cons_String">null</span>&gt;
  <a href="#HQLConstant_7605_7616" id="HQLConstant_7756_7767" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLString_7768_7777" title="Not referenced locally, nor via imports">HQLString</span></span> = <a href="#HQLQuotedString_139_154" id="HQLQuotedString_7780_7795" title="Defined at line 11, 19">HQLQuotedString</a>
  <a href="#HQLConstant_7605_7616" id="HQLConstant_7798_7809" title="Referenced at line 205">HQLConstant</a>.<span class="cons_Constructor"><span id="HQLNumInt_7810_7819" title="Not referenced locally, nor via imports">HQLNumInt</span></span> = <a href="#HQLNumInt_129_138" id="HQLNumInt_7822_7831" title="Defined at line 11, 18">HQLNumInt</a>

<span class="keyword">lexical syntax</span>

  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_7851_7864" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_7885_7898" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_7920_7933" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"empty"</span> {<span class="keyword">reject</span>}
  <a href="#HQLIdentifier_3985_3998" id="HQLIdentifier_7955_7968" title="Referenced at line 117">HQLIdentifier</a> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_7990_8000" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"or"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_8019_8029" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"and"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_8049_8059" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"not"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="../WebDSL-Action.sdf3#TemplateCall_9275_9287" id="TemplateCall_8101_8113" title="Referenced at ../WebDSL-Action.sdf3 line 412">TemplateCall</a> = &lt;<span class="cons_String">empty</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  {
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8167_8180" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLPath_4526_4533" id="HQLPath_8181_8188" title="Defined at line 145">HQLPath</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8193_8206" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLExpressions_4561_4575" id="HQLExpressions_8207_8221" title="Defined at line 147">HQLExpressions</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8226_8239" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLAvg_6935_6941" id="HQLAvg_8240_8246" title="Defined at line 193">HQLAvg</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8251_8264" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSum_7000_7006" id="HQLSum_8265_8271" title="Defined at line 194">HQLSum</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8276_8289" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMin_7065_7071" id="HQLMin_8290_8296" title="Defined at line 195">HQLMin</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8301_8314" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLMax_7130_7136" id="HQLMax_8315_8321" title="Defined at line 196">HQLMax</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8326_8339" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCountStar_7195_7207" id="HQLCountStar_8340_8352" title="Defined at line 197">HQLCountStar</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8357_8370" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLCount_7246_7254" id="HQLCount_8371_8379" title="Defined at line 198">HQLCount</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8384_8397" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSize_7311_7318" id="HQLSize_8398_8405" title="Defined at line 199">HQLSize</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8410_8423" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLSubString_7376_7388" id="HQLSubString_8424_8436" title="Defined at line 200">HQLSubString</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8441_8454" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLElements_7478_7489" id="HQLElements_8455_8466" title="Defined at line 202">HQLElements</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8471_8484" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#HQLIndices_7533_7543" id="HQLIndices_8485_8495" title="Defined at line 203">HQLIndices</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8500_8513" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryUMinus_6305_6316" id="QueryUMinus_8514_8525" title="Defined at line 181">QueryUMinus</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8545_8558" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMultiply_6100_6113" id="QueryMultiply_8559_8572" title="Defined at line 177">QueryMultiply</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8577_8590" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryDivide_6168_6179" id="QueryDivide_8591_8602" title="Defined at line 178">QueryDivide</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8607_8620" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryModulo_6236_6247" id="QueryModulo_8621_8632" title="Defined at line 179">QueryModulo</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8637_8650" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryConcat_5899_5910" id="QueryConcat_8651_8662" title="Defined at line 172">QueryConcat</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8682_8695" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryPlus_5967_5976" id="QueryPlus_8696_8705" title="Defined at line 174">QueryPlus</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8710_8723" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMinus_6033_6043" id="QueryMinus_8724_8734" title="Defined at line 175">QueryMinus</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8754_8767" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLike_5182_5191" id="QueryLike_8768_8777" title="Defined at line 159">QueryLike</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8782_8795" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotLike_5253_5265" id="QueryNotLike_8796_8808" title="Defined at line 160">QueryNotLike</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8813_8826" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLt_5329_5336" id="QueryLt_8827_8834" title="Defined at line 162">QueryLt</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8839_8852" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryLe_5392_5399" id="QueryLe_8853_8860" title="Defined at line 163">QueryLe</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8865_8878" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGt_5456_5463" id="QueryGt_8879_8886" title="Defined at line 164">QueryGt</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8891_8904" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryGe_5519_5526" id="QueryGe_8905_8912" title="Defined at line 165">QueryGe</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8917_8930" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIn_5584_5591" id="QueryIn_8931_8938" title="Defined at line 167">QueryIn</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8943_8956" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotIn_5657_5667" id="QueryNotIn_8957_8967" title="Defined at line 168">QueryNotIn</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_8972_8985" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryMemberOf_5734_5747" id="QueryMemberOf_8986_8999" title="Defined at line 169">QueryMemberOf</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_9004_9017" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNotMemberOf_5814_5830" id="QueryNotMemberOf_9018_9034" title="Defined at line 170">QueryNotMemberOf</a></span>
  }
  &gt; {<span class="keyword">left</span>:
    <a href="#HQLExpression_4426_4439" id="HQLExpression_9054_9067" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryEq_4905_4912" id="QueryEq_9068_9075" title="Defined at line 155">QueryEq</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_9080_9093" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryIs_4973_4980" id="QueryIs_9094_9101" title="Defined at line 156">QueryIs</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_9106_9119" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNe_5042_5049" id="QueryNe_9120_9127" title="Defined at line 157">QueryNe</a></span>
    <a href="#HQLExpression_4426_4439" id="HQLExpression_9132_9145" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QuerySqlNe_5111_5121" id="QuerySqlNe_9146_9156" title="Defined at line 158">QuerySqlNe</a></span>
  }
  &gt; <a href="#HQLExpression_4426_4439" id="HQLExpression_9165_9178" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryNot_4854_4862" id="QueryNot_9179_9187" title="Defined at line 153">QueryNot</a></span>
  &gt; {<span class="keyword">left</span>: <a href="#HQLExpression_4426_4439" id="HQLExpression_9199_9212" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryAnd_4788_4796" id="QueryAnd_9213_9221" title="Defined at line 152">QueryAnd</a></span>}
  &gt; {<span class="keyword">left</span>: <a href="#HQLExpression_4426_4439" id="HQLExpression_9234_9247" title="Defined at line 139, 143, 145, 147, 148, 149, 151, 152, 153, 155, 156, 157, 158, 159, 160, 162, 163, 164, 165, 167, 168, 169, 170, 172, 174, 175, 177, 178, 179, 181, 183, 184, 185, 186, 187, 188, 189, 190, 191, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 205">HQLExpression</a>.<span class="cons_Constructor"><a href="#QueryOr_4723_4730" id="QueryOr_9248_9255" title="Defined at line 151">QueryOr</a></span>}

</code></pre></td></tr></tbody></table></div>