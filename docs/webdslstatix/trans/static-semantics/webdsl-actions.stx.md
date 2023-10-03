---
title: webdsl-actions.stx
hide:
  - toc
---

# `webdsl-actions.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-actions.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-actions.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-actions.stx "The source file on GitHub"

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
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-ac.stx#static-semantics/webdsl-actions_198_229" id="static-semantics/webdsl-actions_7_38" title="Referenced at ../webdsl-ac.stx line 12; ../webdsl-entities.stx line 12; ../webdsl-expand.stx line 9; ../webdsl-hql.stx line 7; ../webdsl-native.stx line 8; ../webdsl-ui.stx line 16; ../webdsl.stx line 14; ../actions/functions.stx line 6; ../entities/annotations.stx line 6; ../entities/generated-functions.stx line 9; ../types/built-ins.stx line 6; ../ui/actions.stx line 12; ../ui/template-calls.stx line 13">static-semantics/webdsl-actions</a>

<span class="keyword">imports</span>
  <a href="../actions/binops.stx#static-semantics/actions/binops_7_38" id="static-semantics/actions/binops_50_81" title="Defined at ../actions/binops.stx line 1">static-semantics/actions/binops</a>
  <a href="../actions/built-ins.stx#static-semantics/actions/built-ins_7_41" id="static-semantics/actions/built-ins_84_118" title="Defined at ../actions/built-ins.stx line 1">static-semantics/actions/built-ins</a>
  <a href="../actions/emails.stx#static-semantics/actions/emails_7_38" id="static-semantics/actions/emails_121_152" title="Defined at ../actions/emails.stx line 1">static-semantics/actions/emails</a>
  <a href="../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_155_189" title="Defined at ../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_193_230" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_234_266" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_270_302" title="Defined at ../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_305_334" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_337_360" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// definitions</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_386_391" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_463_464" id="s_392_393" title="Referenced at line 20">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#GlobalInit_10871_10881" id="GlobalInit_395_405" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 230">GlobalInit</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_406_411" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_486_491" id="stmts_412_417" title="Referenced at line 21">stmts</a>))) :- {<a href="#s_init_441_447" id="s_init_425_431" title="Referenced at line 20, 20, 21">s_init</a>}
    <span class="keyword">new</span> <a href="#s_init_425_431" id="s_init_441_447" title="Defined at line 19">s_init</a>, <a href="#s_init_425_431" id="s_init_449_455" title="Defined at line 19">s_init</a> -<a href="../webdsl.stx#DEF_1498_1501" id="DEF_457_460" title="Defined at ../webdsl.stx line 49">DEF</a>-&gt; <a href="#s_392_393" id="s_463_464" title="Defined at line 19">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_470_477" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_init_425_431" id="s_init_478_484" title="Defined at line 19">s_init</a>, <a href="#stmts_412_417" id="stmts_486_491" title="Defined at line 19">stmts</a>, <a href="../webdsl-types.stx#VOID_1167_1171" id="VOID_493_497" title="Defined at ../webdsl-types.stx line 46">VOID</a>()).

<span class="keyword">rules</span> <span class="layout">// unimplemented</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_529_535" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#CaseStmt_2762_2770" id="CaseStmt_542_550" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 97">CaseStmt</a>(_, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_632_638" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#TypeCaseStmt_2890_2902" id="TypeCaseStmt_645_657" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 100">TypeCaseStmt</a>(_, _, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_742_748" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Exception-sig.stx#ThrowStatement_268_282" id="ThrowStatement_755_769" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Exception-sig.stx line 20">ThrowStatement</a>(_), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_848_854" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Exception-sig.stx#TryStatement_358_370" id="TryStatement_861_873" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Exception-sig.stx line 22">TryStatement</a>(_, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_955_961" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Prefetch-sig.stx#PrefetchForStmt_1266_1281" id="PrefetchForStmt_968_983" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Prefetch-sig.stx line 47">PrefetchForStmt</a>(_, _, _, _), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1072_1081" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1174_1177" id="exp_1085_1088" title="Referenced at line 31">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FunctionExp_1865_1876" id="FunctionExp_1089_1100" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 77">FunctionExp</a>(_, _, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1113_1120" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1085_1088" id="exp_1174_1177" title="Defined at line 31">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1206_1215" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1308_1311" id="exp_1219_1222" title="Referenced at line 32">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FunctionRef_1922_1933" id="FunctionRef_1223_1234" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 78">FunctionRef</a>(_, _, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1247_1254" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1219_1222" id="exp_1308_1311" title="Defined at line 32">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1340_1349" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1449_1452" id="exp_1353_1356" title="Referenced at line 33">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FunctionRefCall_1976_1991" id="FunctionRefCall_1357_1372" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 79">FunctionRefCall</a>(_, _, _, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1388_1395" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1353_1356" id="exp_1449_1452" title="Defined at line 33">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1481_1490" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1597_1600" id="exp_1494_1497" title="Referenced at line 34">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FunctionRefCallPartial_2046_2068" id="FunctionRefCallPartial_1498_1520" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 80">FunctionRefCallPartial</a>(_, _, _, _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1536_1543" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1494_1497" id="exp_1597_1600" title="Defined at line 34">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1629_1638" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1725_1728" id="exp_1642_1645" title="Referenced at line 35">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#MapCreation_4153_4164" id="MapCreation_1646_1657" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 129">MapCreation</a>(_)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1664_1671" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1642_1645" id="exp_1725_1728" title="Defined at line 35">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1757_1766" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1865_1868" id="exp_1770_1773" title="Referenced at line 36">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#RenderEmailFunctionCall_6447_6470" id="RenderEmailFunctionCall_1774_1797" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 186">RenderEmailFunctionCall</a>(_)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1804_1811" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1770_1773" id="exp_1865_1868" title="Defined at line 36">exp</a>] is not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1897_1906" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1999_2002" id="exp_1910_1913" title="Referenced at line 37">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#EmailFunctionCall_6494_6511" id="EmailFunctionCall_1914_1931" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 187">EmailFunctionCall</a>(_)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1938_1945" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of expression [<a href="#exp_1910_1913" id="exp_1999_2002" title="Defined at line 37">exp</a>] is not yet implemented].


<span class="keyword">rules</span> <span class="layout">// variable declaration and assignment</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_2079_2085" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_2119_2120" id="s_2086_2087" title="Referenced at line 43">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Stat_2201_2205" id="Stat_2092_2096" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 83">Stat</a>(<a href="#exp_2122_2125" id="exp_2097_2100" title="Referenced at line 43">exp</a>), _) :-
    <a href="../webdsl.stx#expOk_16125_16130" id="expOk_2113_2118" title="Defined at ../webdsl.stx line 371">expOk</a>(<a href="#s_2086_2087" id="s_2119_2120" title="Defined at line 42">s</a>, <a href="#exp_2097_2100" id="exp_2122_2125" title="Defined at line 42">exp</a>).

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_2131_2137" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_2218_2219" id="s_2138_2139" title="Referenced at line 46">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block2Statement_2160_2175" id="Block2Statement_2144_2159" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 82">Block2Statement</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_2160_2165" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_2240_2245" id="stmts_2166_2171" title="Referenced at line 47">stmts</a>)), <a href="#rt_2247_2249" id="rt_2175_2177" title="Referenced at line 47">rt</a>) :- { <a href="#s_new_2200_2205" id="s_new_2184_2189" title="Referenced at line 46, 46, 47">s_new</a> }
    <span class="keyword">new</span> <a href="#s_new_2184_2189" id="s_new_2200_2205" title="Defined at line 45">s_new</a>, <a href="#s_new_2184_2189" id="s_new_2207_2212" title="Defined at line 45">s_new</a> -<a href="../webdsl.stx#P_1226_1227" id="P_2214_2215" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_2138_2139" id="s_2218_2219" title="Defined at line 45">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_2225_2232" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_new_2184_2189" id="s_new_2233_2238" title="Defined at line 45">s_new</a>, <a href="#stmts_2166_2171" id="stmts_2240_2245" title="Defined at line 45">stmts</a>, <a href="#rt_2175_2177" id="rt_2247_2249" title="Defined at line 45">rt</a>).

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_2255_2261" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_2323_2324" id="s_2262_2263" title="Referenced at line 50">s</a>, <a href="#s_decl_2416_2422" id="s_decl_2265_2271" title="Referenced at line 52">s_decl</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#VarDecl_2356_2363" id="VarDecl_2273_2280" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 88">VarDecl</a>(<a href="#x_2424_2425" id="x_2281_2282" title="Referenced at line 52, 53">x</a>, <a href="#sort_2326_2330" id="sort_2284_2288" title="Referenced at line 50, 51, 51">sort</a>), _) :- { <a href="#t_2307_2308" id="t_2299_2300" title="Referenced at line 50, 51, 52, 53">t</a> }
    <a href="#t_2299_2300" id="t_2307_2308" title="Defined at line 49">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_2312_2322" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_2262_2263" id="s_2323_2324" title="Defined at line 49">s</a>, <a href="#sort_2284_2288" id="sort_2326_2330" title="Defined at line 49">sort</a>),
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_2337_2348" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#t_2299_2300" id="t_2349_2350" title="Defined at line 49">t</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2352_2359" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Unknown type [<a href="#sort_2284_2288" id="sort_2387_2391" title="Defined at line 49">sort</a>]] @<a href="#sort_2284_2288" id="sort_2395_2399" title="Defined at line 49">sort</a>,
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_2405_2415" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_2265_2271" id="s_decl_2416_2422" title="Defined at line 49">s_decl</a>, <a href="#x_2281_2282" id="x_2424_2425" title="Defined at line 49">x</a>, <a href="#t_2299_2300" id="t_2427_2428" title="Defined at line 49">t</a>),
    @<a href="#x_2281_2282" id="x_2436_2437" title="Defined at line 49">x</a>.<span class="keyword">type</span> := <a href="#t_2299_2300" id="t_2446_2447" title="Defined at line 49">t</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_2452_2458" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_2537_2538" id="s_2459_2460" title="Referenced at line 56, 57">s</a>, <a href="#s_decl_2703_2709" id="s_decl_2462_2468" title="Referenced at line 59">s_decl</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#VarDeclInit_2396_2407" id="VarDeclInit_2470_2481" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 89">VarDeclInit</a>(<a href="#x_2711_2712" id="x_2482_2483" title="Referenced at line 59, 60">x</a>, <a href="#sort_2540_2544" id="sort_2485_2489" title="Referenced at line 56, 58">sort</a>, <a href="#exp_2575_2578" id="exp_2491_2494" title="Referenced at line 57, 58, 58">exp</a>), _) :- { <a href="#t_2521_2522" id="t_2505_2506" title="Referenced at line 56, 58, 59, 60">t</a> <a href="#expType_2551_2558" id="expType_2507_2514" title="Referenced at line 57, 58, 58">expType</a> }
    <a href="#t_2505_2506" id="t_2521_2522" title="Defined at line 55">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_2526_2536" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_2459_2460" id="s_2537_2538" title="Defined at line 55">s</a>, <a href="#sort_2485_2489" id="sort_2540_2544" title="Defined at line 55">sort</a>),
    <a href="#expType_2507_2514" id="expType_2551_2558" title="Defined at line 55">expType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2562_2571" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2459_2460" id="s_2572_2573" title="Defined at line 55">s</a>, <a href="#exp_2491_2494" id="exp_2575_2578" title="Defined at line 55">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_2585_2599" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_2507_2514" id="expType_2600_2607" title="Defined at line 55">expType</a>, <a href="#t_2505_2506" id="t_2609_2610" title="Defined at line 55">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#exp_2491_2494" id="exp_2634_2637" title="Defined at line 55">exp</a>] is not of type [<a href="#sort_2485_2489" id="sort_2655_2659" title="Defined at line 55">sort</a>], got type [<a href="#expType_2507_2514" id="expType_2672_2679" title="Defined at line 55">expType</a>]] @<a href="#exp_2491_2494" id="exp_2683_2686" title="Defined at line 55">exp</a>,
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_2692_2702" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_2462_2468" id="s_decl_2703_2709" title="Defined at line 55">s_decl</a>, <a href="#x_2482_2483" id="x_2711_2712" title="Defined at line 55">x</a>, <a href="#t_2505_2506" id="t_2714_2715" title="Defined at line 55">t</a>),
    @<a href="#x_2482_2483" id="x_2723_2724" title="Defined at line 55">x</a>.<span class="keyword">type</span> := <a href="#t_2505_2506" id="t_2733_2734" title="Defined at line 55">t</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_2739_2745" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_2817_2818" id="s_2746_2747" title="Referenced at line 63">s</a>, <a href="#s_decl_2918_2924" id="s_decl_2749_2755" title="Referenced at line 65">s_decl</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#VarDeclInitInferred_2446_2465" id="VarDeclInitInferred_2757_2776" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 90">VarDeclInitInferred</a>(<a href="#x_2926_2927" id="x_2777_2778" title="Referenced at line 65, 66">x</a>, <a href="#exp_2820_2823" id="exp_2780_2783" title="Referenced at line 63, 64, 64">exp</a>), _) :- { <a href="#t_2802_2803" id="t_2794_2795" title="Referenced at line 63, 64, 65, 66">t</a> }
    <a href="#t_2794_2795" id="t_2802_2803" title="Defined at line 62">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2807_2816" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2746_2747" id="s_2817_2818" title="Defined at line 62">s</a>, <a href="#exp_2780_2783" id="exp_2820_2823" title="Defined at line 62">exp</a>),
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_2830_2841" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#t_2794_2795" id="t_2842_2843" title="Defined at line 62">t</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2845_2852" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Unable to infer type of [<a href="#exp_2780_2783" id="exp_2891_2894" title="Defined at line 62">exp</a>]] @<a href="#exp_2780_2783" id="exp_2898_2901" title="Defined at line 62">exp</a>,
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_2907_2917" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_2749_2755" id="s_decl_2918_2924" title="Defined at line 62">s_decl</a>, <a href="#x_2777_2778" id="x_2926_2927" title="Defined at line 62">x</a>, <a href="#t_2794_2795" id="t_2929_2930" title="Defined at line 62">t</a>),
    @<a href="#x_2777_2778" id="x_2938_2939" title="Defined at line 62">x</a>.<span class="keyword">type</span> := <a href="#t_2794_2795" id="t_2948_2949" title="Defined at line 62">t</a>.

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_2954_2959" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3016_3017" id="s_2960_2961" title="Referenced at line 69, 70, 71">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#GlobalVarDecl_800_813" id="GlobalVarDecl_2963_2976" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 31">GlobalVarDecl</a>(<a href="#x_3044_3045" id="x_2977_2978" title="Referenced at line 70, 71">x</a>, <a href="#sort_3019_3023" id="sort_2980_2984" title="Referenced at line 69">sort</a>)) :- { <a href="#t_3000_3001" id="t_2992_2993" title="Referenced at line 69, 70">t</a> }
    <a href="#t_2992_2993" id="t_3000_3001" title="Defined at line 68">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_3005_3015" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_2960_2961" id="s_3016_3017" title="Defined at line 68">s</a>, <a href="#sort_2980_2984" id="sort_3019_3023" title="Defined at line 68">sort</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3030_3040" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_2960_2961" id="s_3041_3042" title="Defined at line 68">s</a>, <a href="#x_2977_2978" id="x_3044_3045" title="Defined at line 68">x</a>, <a href="#t_2992_2993" id="t_3047_3048" title="Defined at line 68">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_3055_3072" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_2960_2961" id="s_3073_3074" title="Defined at line 68">s</a>, <a href="#x_2977_2978" id="x_3076_3077" title="Defined at line 68">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_3079_3086" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()).

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_3094_3099" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3173_3174" id="s_3100_3101" title="Referenced at line 74, 75, 77, 78">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#GlobalVarDeclInit_898_915" id="GlobalVarDeclInit_3103_3120" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 33">GlobalVarDeclInit</a>(<a href="#x_3342_3343" id="x_3121_3122" title="Referenced at line 77, 78">x</a>, <a href="#sort_3176_3180" id="sort_3124_3128" title="Referenced at line 74, 76">sort</a>, <a href="#exp_3211_3214" id="exp_3130_3133" title="Referenced at line 75, 76, 76">exp</a>)) :- { <a href="#t_3157_3158" id="t_3141_3142" title="Referenced at line 74, 76, 77">t</a> <a href="#expType_3187_3194" id="expType_3143_3150" title="Referenced at line 75, 76, 76">expType</a> }
    <a href="#t_3141_3142" id="t_3157_3158" title="Defined at line 73">t</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_3162_3172" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_3100_3101" id="s_3173_3174" title="Defined at line 73">s</a>, <a href="#sort_3124_3128" id="sort_3176_3180" title="Defined at line 73">sort</a>),
    <a href="#expType_3143_3150" id="expType_3187_3194" title="Defined at line 73">expType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3198_3207" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3100_3101" id="s_3208_3209" title="Defined at line 73">s</a>, <a href="#exp_3130_3133" id="exp_3211_3214" title="Defined at line 73">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3221_3235" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_3143_3150" id="expType_3236_3243" title="Defined at line 73">expType</a>, <a href="#t_3141_3142" id="t_3245_3246" title="Defined at line 73">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#exp_3130_3133" id="exp_3270_3273" title="Defined at line 73">exp</a>] is not of type [<a href="#sort_3124_3128" id="sort_3291_3295" title="Defined at line 73">sort</a>], got type [<a href="#expType_3143_3150" id="expType_3308_3315" title="Defined at line 73">expType</a>]] @<a href="#exp_3130_3133" id="exp_3319_3322" title="Defined at line 73">exp</a>,
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3328_3338" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_3100_3101" id="s_3339_3340" title="Defined at line 73">s</a>, <a href="#x_3121_3122" id="x_3342_3343" title="Defined at line 73">x</a>, <a href="#t_3141_3142" id="t_3345_3346" title="Defined at line 73">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_3353_3370" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_3100_3101" id="s_3371_3372" title="Defined at line 73">s</a>, <a href="#x_3121_3122" id="x_3374_3375" title="Defined at line 73">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_3377_3384" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()).

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_3392_3397" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3464_3465" id="s_3398_3399" title="Referenced at line 81, 83, 84">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#GlobalVarDeclInitInferred_1016_1041" id="GlobalVarDeclInitInferred_3401_3426" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 35">GlobalVarDeclInitInferred</a>(<a href="#x_3573_3574" id="x_3427_3428" title="Referenced at line 83, 84">x</a>, <a href="#exp_3467_3470" id="exp_3430_3433" title="Referenced at line 81, 82">exp</a>)) :- { <a href="#t_3449_3450" id="t_3441_3442" title="Referenced at line 81, 82, 83">t</a> }
    <a href="#t_3441_3442" id="t_3449_3450" title="Defined at line 80">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3454_3463" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3398_3399" id="s_3464_3465" title="Defined at line 80">s</a>, <a href="#exp_3430_3433" id="exp_3467_3470" title="Defined at line 80">exp</a>),
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_3477_3488" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#t_3441_3442" id="t_3489_3490" title="Defined at line 80">t</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3492_3499" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Cannot resolve type of expression [<a href="#exp_3430_3433" id="exp_3548_3551" title="Defined at line 80">exp</a>]],
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_3559_3569" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_3398_3399" id="s_3570_3571" title="Defined at line 80">s</a>, <a href="#x_3427_3428" id="x_3573_3574" title="Defined at line 80">x</a>, <a href="#t_3441_3442" id="t_3576_3577" title="Defined at line 80">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_3584_3601" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_3398_3399" id="s_3602_3603" title="Defined at line 80">s</a>, <a href="#x_3427_3428" id="x_3605_3606" title="Defined at line 80">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_3608_3615" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()).

  <a href="#noDuplicateVarDefs_3661_3679" id="noDuplicateVarDefs_3623_3641" title="Referenced at line 87; ../webdsl.stx line 279, 304">noDuplicateVarDefs</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#noDuplicateVarDefs_3623_3641" id="noDuplicateVarDefs_3661_3679" title="Defined at line 86">noDuplicateVarDefs</a>(<a href="#s_3771_3772" id="s_3680_3681" title="Referenced at line 90">s</a>, <a href="#x_3746_3747" id="x_3683_3684" title="Referenced at line 89">x</a>) :-
    <span class="keyword">query</span> <a href="../webdsl.stx#var_2079_2082" id="var_3699_3702" title="Defined at ../webdsl.stx line 67">var</a> <span class="keyword">filter</span> <a href="../webdsl.stx#P_1226_1227" id="P_3710_3711" title="Defined at ../webdsl.stx line 45">P</a>*
              <span class="keyword">and</span> { <a href="#x'_3739_3741" id="x'_3733_3735" title="Referenced at line 89">x'</a> :- <a href="#x'_3733_3735" id="x'_3739_3741" title="Defined at line 89">x'</a> == (<a href="#x_3683_3684" id="x_3746_3747" title="Defined at line 87">x</a>, _) }
              <span class="keyword">in</span> <a href="#s_3680_3681" id="s_3771_3772" title="Defined at line 87">s</a> |-&gt; [_].

  <a href="#noDuplicateVarDefsInSuper_3830_3855" id="noDuplicateVarDefsInSuper_3785_3810" title="Referenced at line 93, 94, 95; ../webdsl-entities.stx line 144; ../webdsl-native.stx line 73">noDuplicateVarDefsInSuper</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#noDuplicateVarDefsInSuper_3785_3810" id="noDuplicateVarDefsInSuper_3830_3855" title="Defined at line 92">noDuplicateVarDefsInSuper</a>(_, "this"). // allow "<span class="keyword">this</span>" <span class="keyword">var to be redefined in sub</span>
  <a href="#noDuplicateVarDefsInSuper_3785_3810" id="noDuplicateVarDefsInSuper_3913_3938" title="Defined at line 92">noDuplicateVarDefsInSuper</a>(_, "super"). // allow "<span class="keyword">super</span>" <span class="keyword">var to be redefined in sub</span>
  <a href="#noDuplicateVarDefsInSuper_3785_3810" id="noDuplicateVarDefsInSuper_3998_4023" title="Defined at line 92">noDuplicateVarDefsInSuper</a>(<a href="#s_sub_4079_4084" id="s_sub_4024_4029" title="Referenced at line 96">s_sub</a>, <a href="#x_4086_4087" id="x_4031_4032" title="Referenced at line 96">x</a>) :- { <a href="#xs_4092_4094" id="xs_4039_4041" title="Referenced at line 96, 97">xs</a> <a href="#nonOverridable_4140_4154" id="nonOverridable_4042_4056" title="Referenced at line 97, 98">nonOverridable</a> }
    <a href="../webdsl.stx#resolveProperty_13857_13872" id="resolveProperty_4063_4078" title="Defined at ../webdsl.stx line 314">resolveProperty</a>(<a href="#s_sub_4024_4029" id="s_sub_4079_4084" title="Defined at line 95">s_sub</a>, <a href="#x_4031_4032" id="x_4086_4087" title="Defined at line 95">x</a>) == <a href="#xs_4039_4041" id="xs_4092_4094" title="Defined at line 95">xs</a>,
    <a href="../entities/annotations.stx#withoutAnnotation_12053_12070" id="withoutAnnotation_4100_4117" title="Defined at ../entities/annotations.stx line 254">withoutAnnotation</a>(<a href="#xs_4039_4041" id="xs_4118_4120" title="Defined at line 95">xs</a>, <a href="../entities/annotations.stx#OVERRIDABLE_340_351" id="OVERRIDABLE_4122_4133" title="Defined at ../entities/annotations.stx line 19">OVERRIDABLE</a>()) == <a href="#nonOverridable_4042_4056" id="nonOverridable_4140_4154" title="Defined at line 95">nonOverridable</a>,
    <a href="#amountNonOverridableOk_4203_4225" id="amountNonOverridableOk_4160_4182" title="Defined at line 100">amountNonOverridableOk</a>(<a href="#nonOverridable_4042_4056" id="nonOverridable_4183_4197" title="Defined at line 95">nonOverridable</a>).

  <a href="#amountNonOverridableOk_4160_4182" id="amountNonOverridableOk_4203_4225" title="Referenced at line 98, 101, 102, 103">amountNonOverridableOk</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4251_4255" title="Defined at ../webdsl.stx line 29">TYPE</a>)))
  <a href="#amountNonOverridableOk_4203_4225" id="amountNonOverridableOk_4261_4283" title="Defined at line 100">amountNonOverridableOk</a>(_) :- <span class="keyword">false</span>.
  <a href="#amountNonOverridableOk_4203_4225" id="amountNonOverridableOk_4299_4321" title="Defined at line 100">amountNonOverridableOk</a>([]).
  <a href="#amountNonOverridableOk_4203_4225" id="amountNonOverridableOk_4329_4351" title="Defined at line 100">amountNonOverridableOk</a>([_]).

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_4361_4367" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<span id="s_4368_4369" title="Not referenced locally, nor via imports">s</span>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_4374_4384" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(_, <span id="exp_4388_4391" title="Not referenced locally, nor via imports">exp</span>), _) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Can only assign to fields or vars (except global or session vars)]. <span class="layout">// correct error message for tests</span>
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_4521_4527" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_4598_4599" id="s_4528_4529" title="Referenced at line 107, 108, 109">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_4534_4544" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(<a href="#v_4777_4778" id="v_4545_4546" title="Referenced at line 111">v</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Var_3618_3621" id="Var_4547_4550" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 116">Var</a>(<a href="#x_4601_4602" id="x_4551_4552" title="Referenced at line 107, 108">x</a>), <a href="#exp_4667_4670" id="exp_4555_4558" title="Referenced at line 109, 110">exp</a>), _) :- { <a href="#t_4607_4608" id="t_4569_4570" title="Referenced at line 107, 108, 110, 110, 111">t</a> <a href="#expType_4643_4650" id="expType_4571_4578" title="Referenced at line 109, 110, 110">expType</a> }
    <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_4585_4597" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_4528_4529" id="s_4598_4599" title="Defined at line 106">s</a>, <a href="#x_4551_4552" id="x_4601_4602" title="Defined at line 106">x</a>) == <a href="#t_4569_4570" id="t_4607_4608" title="Defined at line 106">t</a>,
    <a href="#isMutableOrRef_4793_4807" id="isMutableOrRef_4614_4628" title="Defined at line 113">isMutableOrRef</a>(<a href="#s_4528_4529" id="s_4629_4630" title="Defined at line 106">s</a>, <a href="#x_4551_4552" id="x_4632_4633" title="Defined at line 106">x</a>, <a href="#t_4569_4570" id="t_4635_4636" title="Defined at line 106">t</a>),
    <a href="#expType_4571_4578" id="expType_4643_4650" title="Defined at line 106">expType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4654_4663" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4528_4529" id="s_4664_4665" title="Defined at line 106">s</a>, <a href="#exp_4555_4558" id="exp_4667_4670" title="Defined at line 106">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_4677_4691" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_4571_4578" id="expType_4692_4699" title="Defined at line 106">expType</a>, <a href="#t_4569_4570" id="t_4701_4702" title="Defined at line 106">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#exp_4555_4558" id="exp_4726_4729" title="Defined at line 106">exp</a>] is not of type [<a href="#t_4569_4570" id="t_4747_4748" title="Defined at line 106">t</a>], got type [<a href="#expType_4571_4578" id="expType_4761_4768" title="Defined at line 106">expType</a>]],
    @<a href="#v_4545_4546" id="v_4777_4778" title="Defined at line 106">v</a>.<span class="keyword">type</span> := <a href="#t_4569_4570" id="t_4787_4788" title="Defined at line 106">t</a>.

  <a href="#isMutableOrRef_4614_4628" id="isMutableOrRef_4793_4807" title="Referenced at line 108, 114; ../ui/template-calls.stx line 134">isMutableOrRef</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4827_4831" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isMutableOrRef_4793_4807" id="isMutableOrRef_4834_4848" title="Defined at line 113">isMutableOrRef</a>(<a href="#s_4886_4887" id="s_4849_4850" title="Referenced at line 116">s</a>, <a href="#x_4889_4890" id="x_4852_4853" title="Referenced at line 116, 118, 118">x</a>, <a href="#t_4905_4906" id="t_4855_4856" title="Referenced at line 117">t</a>) :-
    <a href="../webdsl.stx#or_17705_17707" id="or_4865_4867" title="Defined at ../webdsl.stx line 417">or</a>(
      <a href="../entities/annotations.stx#isMutableB_10370_10380" id="isMutableB_4875_4885" title="Defined at ../entities/annotations.stx line 223">isMutableB</a>(<a href="#s_4849_4850" id="s_4886_4887" title="Defined at line 114">s</a>, <a href="#x_4852_4853" id="x_4889_4890" title="Defined at line 114">x</a>),
      <a href="#isRef_4960_4965" id="isRef_4899_4904" title="Defined at line 120">isRef</a>(<a href="#t_4855_4856" id="t_4905_4906" title="Defined at line 114">t</a>)
    ) | <span class="keyword">error</span> $[Variable [<a href="#x_4852_4853" id="x_4934_4935" title="Defined at line 114">x</a>] is not mutable] @<a href="#x_4852_4853" id="x_4954_4955" title="Defined at line 114">x</a>.

  <a href="#isRef_4899_4904" id="isRef_4960_4965" title="Referenced at line 117, 121, 122">isRef</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4968_4972" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4976_4980" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isRef_4960_4965" id="isRef_4983_4988" title="Defined at line 120">isRef</a>(<a href="../webdsl-types.stx#REF_939_942" id="REF_4989_4992" title="Defined at ../webdsl-types.stx line 37">REF</a>(_)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4999_5003" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isRef_4960_4965" id="isRef_5009_5014" title="Defined at line 120">isRef</a>(_) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_5020_5025" title="Defined at ../webdsl.stx line 35">FALSE</a>().

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_5032_5038" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_5148_5149" id="s_5039_5040" title="Referenced at line 125, 127, 130">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_5045_5055" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_5056_5067" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="#v_5162_5163" id="v_5068_5069" title="Referenced at line 126">v</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAVar_3775_3780" id="FAVar_5070_5075" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 121">FAVar</a>(<a href="#var_5151_5154" id="var_5076_5079" title="Referenced at line 125">var</a>), <a href="#x_5217_5218" id="x_5082_5083" title="Referenced at line 127, 128, 129">x</a>), <a href="#exp_5302_5305" id="exp_5086_5089" title="Referenced at line 130, 131">exp</a>), _) :- { <a href="#varType_5124_5131" id="varType_5100_5107" title="Referenced at line 125, 126, 127, 129">varType</a> <a href="#t_5185_5186" id="t_5108_5109" title="Referenced at line 127, 128, 131, 131">t</a> <a href="#expType_5278_5285" id="expType_5110_5117" title="Referenced at line 130, 131, 131">expType</a> }
    <a href="#varType_5100_5107" id="varType_5124_5131" title="Defined at line 124">varType</a> == <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_5135_5147" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_5039_5040" id="s_5148_5149" title="Defined at line 124">s</a>, <a href="#var_5076_5079" id="var_5151_5154" title="Defined at line 124">var</a>),
    @<a href="#v_5068_5069" id="v_5162_5163" title="Defined at line 124">v</a>.<span class="keyword">type</span> := <a href="#varType_5100_5107" id="varType_5172_5179" title="Defined at line 124">varType</a>,
    <a href="#t_5108_5109" id="t_5185_5186" title="Defined at line 124">t</a> == <a href="#typeOfProperty_10792_10806" id="typeOfProperty_5190_5204" title="Defined at line 260">typeOfProperty</a>(<a href="#s_5039_5040" id="s_5205_5206" title="Defined at line 124">s</a>, <a href="#varType_5100_5107" id="varType_5208_5215" title="Defined at line 124">varType</a>, <a href="#x_5082_5083" id="x_5217_5218" title="Defined at line 124">x</a>),
    @<a href="#x_5082_5083" id="x_5226_5227" title="Defined at line 124">x</a>.<span class="keyword">type</span> := <a href="#t_5108_5109" id="t_5236_5237" title="Defined at line 124">t</a>,
    <a href="../entities/annotations.stx#isMutableProperty_10850_10867" id="isMutableProperty_5243_5260" title="Defined at ../entities/annotations.stx line 231">isMutableProperty</a>(<a href="#varType_5100_5107" id="varType_5261_5268" title="Defined at line 124">varType</a>, <a href="#x_5082_5083" id="x_5270_5271" title="Defined at line 124">x</a>),
    <a href="#expType_5110_5117" id="expType_5278_5285" title="Defined at line 124">expType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5289_5298" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5039_5040" id="s_5299_5300" title="Defined at line 124">s</a>, <a href="#exp_5086_5089" id="exp_5302_5305" title="Defined at line 124">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5312_5326" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_5110_5117" id="expType_5327_5334" title="Defined at line 124">expType</a>, <a href="#t_5108_5109" id="t_5336_5337" title="Defined at line 124">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#exp_5086_5089" id="exp_5361_5364" title="Defined at line 124">exp</a>] is not of type [<a href="#t_5108_5109" id="t_5382_5383" title="Defined at line 124">t</a>], got type [<a href="#expType_5110_5117" id="expType_5396_5403" title="Defined at line 124">expType</a>]].

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_5410_5416" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_5531_5532" id="s_5417_5418" title="Referenced at line 134, 135, 138">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_5423_5433" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_5434_5445" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAExp_3750_3755" id="FAExp_5446_5451" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 120">FAExp</a>(<a href="#lhexp_5534_5539" id="lhexp_5452_5457" title="Referenced at line 134">lhexp</a>), <a href="#x_5580_5581" id="x_5460_5461" title="Referenced at line 135, 136, 137">x</a>), <a href="#rhexp_5669_5674" id="rhexp_5464_5469" title="Referenced at line 138, 139">rhexp</a>), _) :- { <a href="#lhExpType_5508_5517" id="lhExpType_5480_5489" title="Referenced at line 134, 135, 137">lhExpType</a> <a href="#t_5546_5547" id="t_5490_5491" title="Referenced at line 135, 136, 139, 139">t</a> <a href="#rhExpType_5643_5652" id="rhExpType_5492_5501" title="Referenced at line 138, 139, 139">rhExpType</a> }
    <a href="#lhExpType_5480_5489" id="lhExpType_5508_5517" title="Defined at line 133">lhExpType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5521_5530" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5417_5418" id="s_5531_5532" title="Defined at line 133">s</a>, <a href="#lhexp_5452_5457" id="lhexp_5534_5539" title="Defined at line 133">lhexp</a>),
    <a href="#t_5490_5491" id="t_5546_5547" title="Defined at line 133">t</a> == <a href="#typeOfProperty_10792_10806" id="typeOfProperty_5551_5565" title="Defined at line 260">typeOfProperty</a>(<a href="#s_5417_5418" id="s_5566_5567" title="Defined at line 133">s</a>, <a href="#lhExpType_5480_5489" id="lhExpType_5569_5578" title="Defined at line 133">lhExpType</a>, <a href="#x_5460_5461" id="x_5580_5581" title="Defined at line 133">x</a>),
    @<a href="#x_5460_5461" id="x_5589_5590" title="Defined at line 133">x</a>.<span class="keyword">type</span> := <a href="#t_5490_5491" id="t_5599_5600" title="Defined at line 133">t</a>,
    <a href="../entities/annotations.stx#isMutableProperty_10850_10867" id="isMutableProperty_5606_5623" title="Defined at ../entities/annotations.stx line 231">isMutableProperty</a>(<a href="#lhExpType_5480_5489" id="lhExpType_5624_5633" title="Defined at line 133">lhExpType</a>, <a href="#x_5460_5461" id="x_5635_5636" title="Defined at line 133">x</a>),
    <a href="#rhExpType_5492_5501" id="rhExpType_5643_5652" title="Defined at line 133">rhExpType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5656_5665" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5417_5418" id="s_5666_5667" title="Defined at line 133">s</a>, <a href="#rhexp_5464_5469" id="rhexp_5669_5674" title="Defined at line 133">rhexp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5681_5695" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#rhExpType_5492_5501" id="rhExpType_5696_5705" title="Defined at line 133">rhExpType</a>, <a href="#t_5490_5491" id="t_5707_5708" title="Defined at line 133">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#rhexp_5464_5469" id="rhexp_5732_5737" title="Defined at line 133">rhexp</a>] is incompatible with type in left-hand side [<a href="#t_5490_5491" id="t_5784_5785" title="Defined at line 133">t</a>], got type [<a href="#rhExpType_5492_5501" id="rhExpType_5798_5807" title="Defined at line 133">rhExpType</a>]]. <span class="layout">// correct error message for tests</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_5849_5855" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_5940_5941" id="s_5856_5857" title="Referenced at line 142, 142">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_5862_5872" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(<a href="#ci_5962_5964" id="ci_5873_5875" title="Referenced at line 142">ci</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#CollectionIndex_3685_3700" id="CollectionIndex_5876_5891" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 118">CollectionIndex</a>(_, _), <a href="#exp_5943_5946" id="exp_5899_5902" title="Referenced at line 142, 142">exp</a>), _) :-
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5915_5929" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5930_5939" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5856_5857" id="s_5940_5941" title="Defined at line 141">s</a>, <a href="#exp_5899_5902" id="exp_5943_5946" title="Defined at line 141">exp</a>), <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5949_5958" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5856_5857" id="s_5959_5960" title="Defined at line 141">s</a>, <a href="#ci_5873_5875" id="ci_5962_5964" title="Defined at line 141">ci</a>)) | <span class="keyword">error</span> $[Expression [<a href="#exp_5899_5902" id="exp_5989_5992" title="Defined at line 141">exp</a>] is incompatible with type in left-hand side]. <span class="layout">// correct error message for tests</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_6078_6084" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_6157_6158" id="s_6085_6086" title="Referenced at line 145, 145">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Assignment_4113_4123" id="Assignment_6091_6101" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 128">Assignment</a>(<a href="#c_6179_6180" id="c_6102_6103" title="Referenced at line 145">c</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Cast_4540_4544" id="Cast_6104_6108" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 139">Cast</a>(_, _), <a href="#exp_6160_6163" id="exp_6116_6119" title="Referenced at line 145">exp</a>), _) :-
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6132_6146" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6147_6156" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6085_6086" id="s_6157_6158" title="Defined at line 144">s</a>, <a href="#exp_6116_6119" id="exp_6160_6163" title="Defined at line 144">exp</a>), <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6166_6175" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6085_6086" id="s_6176_6177" title="Defined at line 144">s</a>, <a href="#c_6102_6103" id="c_6179_6180" title="Defined at line 144">c</a>)).

<span class="keyword">rules</span> <span class="layout">// if statements and expressions</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_6227_6233" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_6320_6321" id="s_6234_6235" title="Referenced at line 150, 150, 151, 153">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#If_2497_2499" id="If_6240_6242" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 91">If</a>(<a href="#c_6323_6324" id="c_6243_6244" title="Referenced at line 150, 150">c</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_6246_6251" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#then_6435_6439" id="then_6252_6256" title="Referenced at line 152">then</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_6259_6264" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#else_6497_6501" id="else_6265_6269" title="Referenced at line 154">else</a>)), <a href="#rt_6441_6443" id="rt_6273_6275" title="Referenced at line 152, 154">rt</a>) :- {<a href="#s_then_6392_6398" id="s_then_6281_6287" title="Referenced at line 151, 151, 152">s_then</a> <a href="#s_else_6454_6460" id="s_else_6288_6294" title="Referenced at line 153, 153, 154">s_else</a>}
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_6300_6309" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6310_6319" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6234_6235" id="s_6320_6321" title="Defined at line 149">s</a>, <a href="#c_6243_6244" id="c_6323_6324" title="Defined at line 149">c</a>), <a href="../types/built-ins.stx#bool_2637_2641" id="bool_6327_6331" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_6234_6235" id="s_6332_6333" title="Defined at line 149">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool] @<a href="#c_6243_6244" id="c_6381_6382" title="Defined at line 149">c</a>,
    <span class="keyword">new</span> <a href="#s_then_6281_6287" id="s_then_6392_6398" title="Defined at line 149">s_then</a>, <a href="#s_then_6281_6287" id="s_then_6400_6406" title="Defined at line 149">s_then</a> -<a href="../webdsl.stx#P_1226_1227" id="P_6408_6409" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_6234_6235" id="s_6412_6413" title="Defined at line 149">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_6419_6426" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_then_6281_6287" id="s_then_6427_6433" title="Defined at line 149">s_then</a>, <a href="#then_6252_6256" id="then_6435_6439" title="Defined at line 149">then</a>, <a href="#rt_6273_6275" id="rt_6441_6443" title="Defined at line 149">rt</a>),
    <span class="keyword">new</span> <a href="#s_else_6288_6294" id="s_else_6454_6460" title="Defined at line 149">s_else</a>, <a href="#s_else_6288_6294" id="s_else_6462_6468" title="Defined at line 149">s_else</a> -<a href="../webdsl.stx#P_1226_1227" id="P_6470_6471" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_6234_6235" id="s_6474_6475" title="Defined at line 149">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_6481_6488" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_else_6288_6294" id="s_else_6489_6495" title="Defined at line 149">s_else</a>, <a href="#else_6265_6269" id="else_6497_6501" title="Defined at line 149">else</a>, <a href="#rt_6273_6275" id="rt_6503_6505" title="Defined at line 149">rt</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6511_6520" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6579_6580" id="s_6521_6522" title="Referenced at line 157, 158, 159, 160">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#IfExp_4599_4604" id="IfExp_6524_6529" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 141">IfExp</a>(<a href="#ce_6582_6584" id="ce_6530_6532" title="Referenced at line 157">ce</a>, <a href="#ie_6694_6696" id="ie_6534_6536" title="Referenced at line 159">ie</a>, <a href="#ee_6722_6724" id="ee_6538_6540" title="Referenced at line 160">ee</a>)) = <a href="#it_6675_6677" id="it_6545_6547" title="Referenced at line 159, 161, 161">it</a> :- {<a href="#et_6703_6705" id="et_6552_6554" title="Referenced at line 160, 161, 161">et</a> <a href="#ct_6563_6565" id="ct_6555_6557" title="Referenced at line 157, 158, 158">ct</a>}
    <a href="#ct_6555_6557" id="ct_6563_6565" title="Defined at line 156">ct</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6569_6578" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6521_6522" id="s_6579_6580" title="Defined at line 156">s</a>, <a href="#ce_6530_6532" id="ce_6582_6584" title="Defined at line 156">ce</a>),
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_6591_6600" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="#ct_6555_6557" id="ct_6601_6603" title="Defined at line 156">ct</a>, <a href="../types/built-ins.stx#bool_2637_2641" id="bool_6605_6609" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_6521_6522" id="s_6610_6611" title="Defined at line 156">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool, [<a href="#ct_6555_6557" id="ct_6659_6661" title="Defined at line 156">ct</a>] given],
    <a href="#it_6545_6547" id="it_6675_6677" title="Defined at line 156">it</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6681_6690" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6521_6522" id="s_6691_6692" title="Defined at line 156">s</a>, <a href="#ie_6534_6536" id="ie_6694_6696" title="Defined at line 156">ie</a>),
    <a href="#et_6552_6554" id="et_6703_6705" title="Defined at line 156">et</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6709_6718" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6521_6522" id="s_6719_6720" title="Defined at line 156">s</a>, <a href="#ee_6538_6540" id="ee_6722_6724" title="Defined at line 156">ee</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_6731_6745" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#et_6552_6554" id="et_6746_6748" title="Defined at line 156">et</a>, <a href="#it_6545_6547" id="it_6750_6752" title="Defined at line 156">it</a>) | <span class="keyword">error</span> $[Type of else-expression ([<a href="#et_6552_6554" id="et_6790_6792" title="Defined at line 156">et</a>]) should be compatible with type of if-expression ([<a href="#it_6545_6547" id="it_6845_6847" title="Defined at line 156">it</a>])].

<span class="keyword">rules</span> <span class="layout">// loops</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_6871_6877" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_7003_7004" id="s_6878_6879" title="Referenced at line 166, 167, 172">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForStmt_3164_3171" id="ForStmt_6884_6891" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 106">ForStmt</a>(<a href="#x_7319_7320" id="x_6892_6893" title="Referenced at line 174, 175">x</a>, <a href="#srt_7006_7009" id="srt_6895_6898" title="Referenced at line 166">srt</a>, <a href="#exp_7042_7045" id="exp_6900_6903" title="Referenced at line 167, 171">exp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_6905_6918" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_7289_7290" id="f_6919_6920" title="Referenced at line 173">f</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_6923_6928" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_7334_7339" id="stmts_6929_6934" title="Referenced at line 174">stmts</a>)), <a href="#rt_7341_7343" id="rt_6938_6940" title="Referenced at line 174">rt</a>) :- {<a href="#s_for_7241_7246" id="s_for_6946_6951" title="Referenced at line 172, 172, 173, 174">s_for</a> <a href="#typeOfSort_6978_6988" id="typeOfSort_6952_6962" title="Referenced at line 166, 169, 170, 171, 174, 175">typeOfSort</a> <a href="#typeOfExp_7016_7025" id="typeOfExp_6963_6972" title="Referenced at line 167, 169, 170, 171">typeOfExp</a>}
    <a href="#typeOfSort_6952_6962" id="typeOfSort_6978_6988" title="Defined at line 165">typeOfSort</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_6992_7002" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_6878_6879" id="s_7003_7004" title="Defined at line 165">s</a>, <a href="#srt_6895_6898" id="srt_7006_7009" title="Defined at line 165">srt</a>),
    <a href="#typeOfExp_6963_6972" id="typeOfExp_7016_7025" title="Defined at line 165">typeOfExp</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7029_7038" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6878_6879" id="s_7039_7040" title="Defined at line 165">s</a>, <a href="#exp_6900_6903" id="exp_7042_7045" title="Defined at line 165">exp</a>),
    <a href="../webdsl.stx#or_17705_17707" id="or_7052_7054" title="Defined at ../webdsl.stx line 417">or</a>(
      <a href="../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_7062_7072" title="Defined at ../webdsl-types.stx line 292">equalTypeB</a>(<a href="../webdsl-types.stx#LIST_891_895" id="LIST_7073_7077" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#typeOfSort_6952_6962" id="typeOfSort_7078_7088" title="Defined at line 165">typeOfSort</a>), <a href="#typeOfExp_6963_6972" id="typeOfExp_7091_7100" title="Defined at line 165">typeOfExp</a>),
      <a href="../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_7109_7119" title="Defined at ../webdsl-types.stx line 292">equalTypeB</a>(<a href="../webdsl-types.stx#SET_915_918" id="SET_7120_7123" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#typeOfSort_6952_6962" id="typeOfSort_7124_7134" title="Defined at line 165">typeOfSort</a>), <a href="#typeOfExp_6963_6972" id="typeOfExp_7137_7146" title="Defined at line 165">typeOfExp</a>)
    ) | <span class="keyword">error</span> $[Must be a list or set of type [<a href="#typeOfSort_6952_6962" id="typeOfSort_7195_7205" title="Defined at line 165">typeOfSort</a>], [<a href="#typeOfExp_6963_6972" id="typeOfExp_7209_7218" title="Defined at line 165">typeOfExp</a>] given] @<a href="#exp_6900_6903" id="exp_7228_7231" title="Defined at line 165">exp</a>,
    <span class="keyword">new</span> <a href="#s_for_6946_6951" id="s_for_7241_7246" title="Defined at line 165">s_for</a>, <a href="#s_for_6946_6951" id="s_for_7248_7253" title="Defined at line 165">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_7255_7256" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_6878_6879" id="s_7259_7260" title="Defined at line 165">s</a>,
    <a href="#forLoopFilterOk_8616_8631" id="forLoopFilterOk_7266_7281" title="Defined at line 206">forLoopFilterOk</a>(<a href="#s_for_6946_6951" id="s_for_7282_7287" title="Defined at line 165">s_for</a>, <a href="#f_6919_6920" id="f_7289_7290" title="Defined at line 165">f</a>),
    <a href="#forLoopStmtsOk_8344_8358" id="forLoopStmtsOk_7297_7311" title="Defined at line 200">forLoopStmtsOk</a>(<a href="#s_for_6946_6951" id="s_for_7312_7317" title="Defined at line 165">s_for</a>, <a href="#x_6892_6893" id="x_7319_7320" title="Defined at line 165">x</a>, <a href="#typeOfSort_6952_6962" id="typeOfSort_7322_7332" title="Defined at line 165">typeOfSort</a>, <a href="#stmts_6929_6934" id="stmts_7334_7339" title="Defined at line 165">stmts</a>, <a href="#rt_6938_6940" id="rt_7341_7343" title="Defined at line 165">rt</a>),
    @<a href="#x_6892_6893" id="x_7351_7352" title="Defined at line 165">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_6952_6962" id="typeOfSort_7361_7371" title="Defined at line 165">typeOfSort</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_7376_7382" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_7500_7501" id="s_7383_7384" title="Referenced at line 178, 180">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForStmtInferred_3230_3245" id="ForStmtInferred_7389_7404" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 107">ForStmtInferred</a>(<a href="#x_7633_7634" id="x_7405_7406" title="Referenced at line 182, 183">x</a>, <a href="#exp_7503_7506" id="exp_7408_7411" title="Referenced at line 178">exp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_7413_7426" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_7603_7604" id="f_7427_7428" title="Referenced at line 181">f</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_7431_7436" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_7639_7644" id="stmts_7437_7442" title="Referenced at line 182">stmts</a>)), <a href="#rt_7646_7648" id="rt_7446_7448" title="Referenced at line 182">rt</a>) :- {<a href="#s_for_7555_7560" id="s_for_7454_7459" title="Referenced at line 180, 180, 181, 182">s_for</a> <a href="#typeOfExp_7477_7486" id="typeOfExp_7460_7469" title="Referenced at line 178, 179">typeOfExp</a> <a href="#t_7513_7514" id="t_7470_7471" title="Referenced at line 179, 182, 183">t</a>}
    <a href="#typeOfExp_7460_7469" id="typeOfExp_7477_7486" title="Defined at line 177">typeOfExp</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7490_7499" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7383_7384" id="s_7500_7501" title="Defined at line 177">s</a>, <a href="#exp_7408_7411" id="exp_7503_7506" title="Defined at line 177">exp</a>),
    <a href="#t_7470_7471" id="t_7513_7514" title="Defined at line 177">t</a> == <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_7518_7534" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#typeOfExp_7460_7469" id="typeOfExp_7535_7544" title="Defined at line 177">typeOfExp</a>),
    <span class="keyword">new</span> <a href="#s_for_7454_7459" id="s_for_7555_7560" title="Defined at line 177">s_for</a>, <a href="#s_for_7454_7459" id="s_for_7562_7567" title="Defined at line 177">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_7569_7570" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_7383_7384" id="s_7573_7574" title="Defined at line 177">s</a>,
    <a href="#forLoopFilterOk_8616_8631" id="forLoopFilterOk_7580_7595" title="Defined at line 206">forLoopFilterOk</a>(<a href="#s_for_7454_7459" id="s_for_7596_7601" title="Defined at line 177">s_for</a>, <a href="#f_7427_7428" id="f_7603_7604" title="Defined at line 177">f</a>),
    <a href="#forLoopStmtsOk_8344_8358" id="forLoopStmtsOk_7611_7625" title="Defined at line 200">forLoopStmtsOk</a>(<a href="#s_for_7454_7459" id="s_for_7626_7631" title="Defined at line 177">s_for</a>, <a href="#x_7405_7406" id="x_7633_7634" title="Defined at line 177">x</a>, <a href="#t_7470_7471" id="t_7636_7637" title="Defined at line 177">t</a>, <a href="#stmts_7437_7442" id="stmts_7639_7644" title="Defined at line 177">stmts</a>, <a href="#rt_7446_7448" id="rt_7646_7648" title="Defined at line 177">rt</a>),
    @<a href="#x_7405_7406" id="x_7656_7657" title="Defined at line 177">x</a>.<span class="keyword">type</span> := <a href="#t_7470_7471" id="t_7666_7667" title="Defined at line 177">t</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_7672_7678" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_7792_7793" id="s_7679_7680" title="Referenced at line 186, 187">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForAllStmt_3297_3307" id="ForAllStmt_7685_7695" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 108">ForAllStmt</a>(<a href="#x_7887_7888" id="x_7696_7697" title="Referenced at line 189, 190">x</a>, <a href="#srt_7795_7798" id="srt_7699_7702" title="Referenced at line 186">srt</a>, <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_7704_7717" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_7857_7858" id="f_7718_7719" title="Referenced at line 188">f</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_7722_7727" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_7902_7907" id="stmts_7728_7733" title="Referenced at line 189">stmts</a>)), <a href="#rt_7909_7911" id="rt_7737_7739" title="Referenced at line 189">rt</a>) :- {<a href="#s_for_7809_7814" id="s_for_7745_7750" title="Referenced at line 187, 187, 188, 189">s_for</a> <a href="#typeOfSort_7767_7777" id="typeOfSort_7751_7761" title="Referenced at line 186, 189, 190">typeOfSort</a>}
    <a href="#typeOfSort_7751_7761" id="typeOfSort_7767_7777" title="Defined at line 185">typeOfSort</a> == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_7781_7791" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_7679_7680" id="s_7792_7793" title="Defined at line 185">s</a>, <a href="#srt_7699_7702" id="srt_7795_7798" title="Defined at line 185">srt</a>),
    <span class="keyword">new</span> <a href="#s_for_7745_7750" id="s_for_7809_7814" title="Defined at line 185">s_for</a>, <a href="#s_for_7745_7750" id="s_for_7816_7821" title="Defined at line 185">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_7823_7824" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_7679_7680" id="s_7827_7828" title="Defined at line 185">s</a>,
    <a href="#forLoopFilterOk_8616_8631" id="forLoopFilterOk_7834_7849" title="Defined at line 206">forLoopFilterOk</a>(<a href="#s_for_7745_7750" id="s_for_7850_7855" title="Defined at line 185">s_for</a>, <a href="#f_7718_7719" id="f_7857_7858" title="Defined at line 185">f</a>),
    <a href="#forLoopStmtsOk_8344_8358" id="forLoopStmtsOk_7865_7879" title="Defined at line 200">forLoopStmtsOk</a>(<a href="#s_for_7745_7750" id="s_for_7880_7885" title="Defined at line 185">s_for</a>, <a href="#x_7696_7697" id="x_7887_7888" title="Defined at line 185">x</a>, <a href="#typeOfSort_7751_7761" id="typeOfSort_7890_7900" title="Defined at line 185">typeOfSort</a>, <a href="#stmts_7728_7733" id="stmts_7902_7907" title="Defined at line 185">stmts</a>, <a href="#rt_7737_7739" id="rt_7909_7911" title="Defined at line 185">rt</a>),
    @<a href="#x_7696_7697" id="x_7919_7920" title="Defined at line 185">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_7751_7761" id="typeOfSort_7929_7939" title="Defined at line 185">typeOfSort</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_7944_7950" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_8046_8047" id="s_7951_7952" title="Referenced at line 193, 194, 195, 196">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForCountStmt_3360_3372" id="ForCountStmt_7957_7969" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 109">ForCountStmt</a>(<a href="#x_8293_8294" id="x_7970_7971" title="Referenced at line 197, 198">x</a>, <a href="#fromExp_8077_8084" id="fromExp_7973_7980" title="Referenced at line 194">fromExp</a>, <a href="#toExp_8172_8177" id="toExp_7982_7987" title="Referenced at line 195">toExp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_7989_7994" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_8305_8310" id="stmts_7995_8000" title="Referenced at line 197">stmts</a>)), <a href="#rt_8312_8314" id="rt_8004_8006" title="Referenced at line 197">rt</a>) :- {<a href="#s_for_8246_8251" id="s_for_8012_8017" title="Referenced at line 196, 196, 197">s_for</a> <a href="#intType_8031_8038" id="intType_8018_8025" title="Referenced at line 193, 194, 195, 197, 198">intType</a>}
    <a href="#intType_8018_8025" id="intType_8031_8038" title="Defined at line 192">intType</a> == <a href="../types/built-ins.stx#int_1638_1641" id="int_8042_8045" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_7951_7952" id="s_8046_8047" title="Defined at line 192">s</a>),
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_8054_8063" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8064_8073" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7951_7952" id="s_8074_8075" title="Defined at line 192">s</a>, <a href="#fromExp_7973_7980" id="fromExp_8077_8084" title="Defined at line 192">fromExp</a>), <a href="#intType_8018_8025" id="intType_8087_8094" title="Defined at line 192">intType</a>) | <span class="keyword">error</span> $[From expression should have type Int],
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_8149_8158" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8159_8168" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7951_7952" id="s_8169_8170" title="Defined at line 192">s</a>, <a href="#toExp_7982_7987" id="toExp_8172_8177" title="Defined at line 192">toExp</a>)  , <a href="#intType_8018_8025" id="intType_8182_8189" title="Defined at line 192">intType</a>) | <span class="keyword">error</span> $[To expression should have type Int],
    <span class="keyword">new</span> <a href="#s_for_8012_8017" id="s_for_8246_8251" title="Defined at line 192">s_for</a>, <a href="#s_for_8012_8017" id="s_for_8253_8258" title="Defined at line 192">s_for</a> -<a href="../webdsl.stx#P_1226_1227" id="P_8260_8261" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_7951_7952" id="s_8264_8265" title="Defined at line 192">s</a>,
    <a href="#forLoopStmtsOk_8344_8358" id="forLoopStmtsOk_8271_8285" title="Defined at line 200">forLoopStmtsOk</a>(<a href="#s_for_8012_8017" id="s_for_8286_8291" title="Defined at line 192">s_for</a>, <a href="#x_7970_7971" id="x_8293_8294" title="Defined at line 192">x</a>, <a href="#intType_8018_8025" id="intType_8296_8303" title="Defined at line 192">intType</a>, <a href="#stmts_7995_8000" id="stmts_8305_8310" title="Defined at line 192">stmts</a>, <a href="#rt_8004_8006" id="rt_8312_8314" title="Defined at line 192">rt</a>),
    @<a href="#x_7970_7971" id="x_8322_8323" title="Defined at line 192">x</a>.<span class="keyword">type</span> := <a href="#intType_8018_8025" id="intType_8332_8339" title="Defined at line 192">intType</a>.

  <a href="#forLoopStmtsOk_7297_7311" id="forLoopStmtsOk_8344_8358" title="Referenced at line 174, 182, 189, 197, 201">forLoopStmtsOk</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8378_8382" title="Defined at ../webdsl.stx line 29">TYPE</a> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Statement_350_359" id="Statement_8390_8399" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 23">Statement</a>) * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8403_8407" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#forLoopStmtsOk_8344_8358" id="forLoopStmtsOk_8410_8424" title="Defined at line 200">forLoopStmtsOk</a>(<a href="#s_for_8467_8472" id="s_for_8425_8430" title="Referenced at line 202, 203, 204">s_for</a>, <a href="#x_8474_8475" id="x_8432_8433" title="Referenced at line 202, 203">x</a>, <a href="#t_8477_8478" id="t_8435_8436" title="Referenced at line 202">t</a>, <a href="#stmts_8601_8606" id="stmts_8438_8443" title="Referenced at line 204">stmts</a>, <a href="#rt_8608_8610" id="rt_8445_8447" title="Referenced at line 204">rt</a>) :-
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_8456_8466" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_for_8425_8430" id="s_for_8467_8472" title="Defined at line 201">s_for</a>, <a href="#x_8432_8433" id="x_8474_8475" title="Defined at line 201">x</a>, <a href="#t_8435_8436" id="t_8477_8478" title="Defined at line 201">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_8485_8502" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_8425_8430" id="s_for_8503_8508" title="Defined at line 201">s_for</a>, <a href="#x_8432_8433" id="x_8510_8511" title="Defined at line 201">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_8513_8520" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_8586_8593" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_for_8425_8430" id="s_for_8594_8599" title="Defined at line 201">s_for</a>, <a href="#stmts_8438_8443" id="stmts_8601_8606" title="Defined at line 201">stmts</a>, <a href="#rt_8445_8447" id="rt_8608_8610" title="Defined at line 201">rt</a>).

  <a href="#forLoopFilterOk_7266_7281" id="forLoopFilterOk_8616_8631" title="Referenced at line 173, 181, 188, 207; ../webdsl-ui.stx line 219, 228, 236; ../ui/actions.stx line 150, 160, 169">forLoopFilterOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Filter_524_530" id="Filter_8642_8648" title="Defined at ../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 29">Filter</a>
  <a href="#forLoopFilterOk_8616_8631" id="forLoopFilterOk_8651_8666" title="Defined at line 206">forLoopFilterOk</a>(<span id="s_8667_8668" title="Not referenced locally, nor via imports">s</span>, <span id="f_8670_8671" title="Not referenced locally, nor via imports">f</span>). <span class="layout">// TO-DO</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_8686_8692" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_8770_8771" id="s_8693_8694" title="Referenced at line 210, 210, 211">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#WhileStmt_3418_3427" id="WhileStmt_8699_8708" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 110">WhileStmt</a>(<a href="#exp_8773_8776" id="exp_8709_8712" title="Referenced at line 210, 210">exp</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_8714_8719" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_8892_8897" id="stmts_8720_8725" title="Referenced at line 212">stmts</a>)), <a href="#rt_8899_8901" id="rt_8729_8731" title="Referenced at line 212">rt</a>) :- {<a href="#s_while_8846_8853" id="s_while_8737_8744" title="Referenced at line 211, 211, 212">s_while</a>}
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_8750_8759" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8760_8769" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8693_8694" id="s_8770_8771" title="Defined at line 209">s</a>, <a href="#exp_8709_8712" id="exp_8773_8776" title="Defined at line 209">exp</a>), <a href="../types/built-ins.stx#bool_2637_2641" id="bool_8779_8783" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_8693_8694" id="s_8784_8785" title="Defined at line 209">s</a>)) | <span class="keyword">error</span> $[Condition should be of type bool] @<a href="#exp_8709_8712" id="exp_8833_8836" title="Defined at line 209">exp</a>,
    <span class="keyword">new</span> <a href="#s_while_8737_8744" id="s_while_8846_8853" title="Defined at line 209">s_while</a>, <a href="#s_while_8737_8744" id="s_while_8855_8862" title="Defined at line 209">s_while</a> -<a href="../webdsl.stx#P_1226_1227" id="P_8864_8865" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_8693_8694" id="s_8868_8869" title="Defined at line 209">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_8875_8882" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_while_8737_8744" id="s_while_8883_8890" title="Defined at line 209">s_while</a>, <a href="#stmts_8720_8725" id="stmts_8892_8897" title="Defined at line 209">stmts</a>, <a href="#rt_8729_8731" id="rt_8899_8901" title="Defined at line 209">rt</a>).

<span class="keyword">rules</span> <span class="layout">// return statements</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_8935_8941" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_9207_9208" id="s_8942_8943" title="Referenced at line 219">s</a>, _, <a href="#r_9079_9080" id="r_8948_8949" title="Referenced at line 217">r</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Return_2229_2235" id="Return_8950_8956" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 84">Return</a>(<a href="#exp_9171_9174" id="exp_8957_8960" title="Referenced at line 218, 219, 220">exp</a>), <a href="#returnType_9010_9020" id="returnType_8963_8973" title="Referenced at line 217, 218, 220, 220">returnType</a>) :- {<a href="#returnExpType_9180_9193" id="returnExpType_8979_8992" title="Referenced at line 219, 220, 220">returnExpType</a>}
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_8998_9009" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#returnType_8963_8973" id="returnType_9010_9020" title="Defined at line 216">returnType</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_9022_9029" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Return statement not allowed here] @<a href="#r_8948_8949" id="r_9079_9080" title="Defined at line 216">r</a>,
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_9086_9097" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#returnType_8963_8973" id="returnType_9098_9108" title="Defined at line 216">returnType</a>, <a href="../webdsl-types.stx#VOID_1167_1171" id="VOID_9110_9114" title="Defined at ../webdsl-types.stx line 46">VOID</a>()) | <span class="keyword">error</span> $[No return type specified in this context] @<a href="#exp_8957_8960" id="exp_9171_9174" title="Defined at line 216">exp</a>,
    <a href="#returnExpType_8979_8992" id="returnExpType_9180_9193" title="Defined at line 216">returnExpType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9197_9206" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8942_8943" id="s_9207_9208" title="Defined at line 216">s</a>, <a href="#exp_8957_8960" id="exp_9210_9213" title="Defined at line 216">exp</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_9220_9234" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#returnExpType_8979_8992" id="returnExpType_9235_9248" title="Defined at line 216">returnExpType</a>, <a href="#returnType_8963_8973" id="returnType_9250_9260" title="Defined at line 216">returnType</a>) | <span class="keyword">error</span> $[Must return an expression of type [<a href="#returnType_8963_8973" id="returnType_9307_9317" title="Defined at line 216">returnType</a>], [<a href="#returnExpType_8979_8992" id="returnExpType_9321_9334" title="Defined at line 216">returnExpType</a>] given] @<a href="#exp_8957_8960" id="exp_9344_9347" title="Defined at line 216">exp</a>.

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_9352_9358" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<span id="s_9359_9360" title="Not referenced locally, nor via imports">s</span>, _, <a href="#r_9482_9483" id="r_9365_9366" title="Referenced at line 223, 224">r</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ReturnEmpty_2259_2270" id="ReturnEmpty_9367_9378" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 85">ReturnEmpty</a>(), <a href="#returnType_9413_9423" id="returnType_9382_9392" title="Referenced at line 223, 224, 224">returnType</a>) :-
    <a href="../webdsl-types.stx#inequalType_10560_10571" id="inequalType_9401_9412" title="Defined at ../webdsl-types.stx line 286">inequalType</a>(<a href="#returnType_9382_9392" id="returnType_9413_9423" title="Defined at line 222">returnType</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_9425_9432" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Return statement not allowed here] @<a href="#r_9365_9366" id="r_9482_9483" title="Defined at line 222">r</a>,
    <a href="../webdsl-types.stx#equalType_10645_10654" id="equalType_9489_9498" title="Defined at ../webdsl-types.stx line 289">equalType</a>(<a href="#returnType_9382_9392" id="returnType_9499_9509" title="Defined at line 222">returnType</a>, <a href="../webdsl-types.stx#VOID_1167_1171" id="VOID_9511_9515" title="Defined at ../webdsl-types.stx line 46">VOID</a>()) | <span class="keyword">error</span> $[Must return an expression of type [<a href="#returnType_9382_9392" id="returnType_9564_9574" title="Defined at line 222">returnType</a>]] @<a href="#r_9365_9366" id="r_9578_9579" title="Defined at line 222">r</a>.

<span class="keyword">rules</span> <span class="layout">// variable references</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9614_9623" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_9659_9660" id="s_9624_9625" title="Referenced at line 229">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Var_3618_3621" id="Var_9627_9630" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 116">Var</a>(<a href="#x_9662_9663" id="x_9631_9632" title="Referenced at line 229, 230">x</a>)) = <a href="#t_9668_9669" id="t_9637_9638" title="Referenced at line 229, 230">t</a> :-
    <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_9646_9658" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_9624_9625" id="s_9659_9660" title="Defined at line 228">s</a>, <a href="#x_9631_9632" id="x_9662_9663" title="Defined at line 228">x</a>) == <a href="#t_9637_9638" id="t_9668_9669" title="Defined at line 228">t</a>,
    @<a href="#x_9631_9632" id="x_9676_9677" title="Defined at line 228">x</a>.<span class="keyword">type</span> := <a href="#t_9637_9638" id="t_9686_9687" title="Defined at line 228">t</a>.

  <a href="../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_9692_9707" title="Defined at ../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_9749_9750" id="s_9708_9709" title="Referenced at line 233">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#SimpleVar_1657_1666" id="SimpleVar_9711_9720" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 69">SimpleVar</a>(<a href="#x_9752_9753" id="x_9721_9722" title="Referenced at line 233, 234">x</a>)) = <a href="#t_9758_9759" id="t_9727_9728" title="Referenced at line 233, 234">t</a> :-
    <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_9736_9748" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_9708_9709" id="s_9749_9750" title="Defined at line 232">s</a>, <a href="#x_9721_9722" id="x_9752_9753" title="Defined at line 232">x</a>) == <a href="#t_9727_9728" id="t_9758_9759" title="Defined at line 232">t</a>,
    @<a href="#x_9721_9722" id="x_9766_9767" title="Defined at line 232">x</a>.<span class="keyword">type</span> := <a href="#t_9727_9728" id="t_9776_9777" title="Defined at line 232">t</a>.

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9782_9791" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_9792_9793" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_9795_9806" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAGlobal_3804_3812" id="FAGlobal_9807_9815" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 122">FAGlobal</a>(), _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_9825_9832" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of global field access not yet implemented].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9918_9927" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_9928_9929" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_9931_9942" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FASession_3825_3834" id="FASession_9943_9952" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 123">FASession</a>(), _)) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_9962_9969" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Typing of global field access not yet implemented].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10056_10065" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10142_10143" id="s_10066_10067" title="Referenced at line 240, 242">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_10069_10080" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAVar_3775_3780" id="FAVar_10081_10086" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 121">FAVar</a>(<a href="#var_10145_10148" id="var_10087_10090" title="Referenced at line 240, 241">var</a>), <a href="#x_10219_10220" id="x_10093_10094" title="Referenced at line 242, 243">x</a>)) = <a href="#propertyType_10225_10237" id="propertyType_10099_10111" title="Referenced at line 242, 243">propertyType</a> :- {<a href="#varType_10153_10160" id="varType_10116_10123" title="Referenced at line 240, 241, 242">varType</a>}
    <a href="../webdsl-types.stx#variableType_8830_8842" id="variableType_10129_10141" title="Defined at ../webdsl-types.stx line 239">variableType</a>(<a href="#s_10066_10067" id="s_10142_10143" title="Defined at line 239">s</a>, <a href="#var_10087_10090" id="var_10145_10148" title="Defined at line 239">var</a>) == <a href="#varType_10116_10123" id="varType_10153_10160" title="Defined at line 239">varType</a>,
    @<a href="#var_10087_10090" id="var_10167_10170" title="Defined at line 239">var</a>.<span class="keyword">type</span> := <a href="#varType_10116_10123" id="varType_10179_10186" title="Defined at line 239">varType</a>,
    <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10192_10206" title="Defined at line 260">typeOfProperty</a>(<a href="#s_10066_10067" id="s_10207_10208" title="Defined at line 239">s</a>, <a href="#varType_10116_10123" id="varType_10210_10217" title="Defined at line 239">varType</a>, <a href="#x_10093_10094" id="x_10219_10220" title="Defined at line 239">x</a>) == <a href="#propertyType_10099_10111" id="propertyType_10225_10237" title="Defined at line 239">propertyType</a>,
    @<a href="#x_10093_10094" id="x_10244_10245" title="Defined at line 239">x</a>.<span class="keyword">type</span> := <a href="#propertyType_10099_10111" id="propertyType_10254_10266" title="Defined at line 239">propertyType</a>.

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10271_10280" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10348_10349" id="s_10281_10282" title="Referenced at line 246, 247">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FieldAccess_3641_3652" id="FieldAccess_10284_10295" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 117">FieldAccess</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#FAExp_3750_3755" id="FAExp_10296_10301" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 120">FAExp</a>(<a href="#exp_10351_10354" id="exp_10302_10305" title="Referenced at line 246">exp</a>), <a href="#x_10387_10388" id="x_10308_10309" title="Referenced at line 247, 248">x</a>)) = <a href="#propertyType_10393_10405" id="propertyType_10314_10326" title="Referenced at line 247, 248">propertyType</a> :- {<a href="#t_10359_10360" id="t_10331_10332" title="Referenced at line 246, 247">t</a>}
    <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10338_10347" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10281_10282" id="s_10348_10349" title="Defined at line 245">s</a>, <a href="#exp_10302_10305" id="exp_10351_10354" title="Defined at line 245">exp</a>) == <a href="#t_10331_10332" id="t_10359_10360" title="Defined at line 245">t</a>,
    <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10366_10380" title="Defined at line 260">typeOfProperty</a>(<a href="#s_10281_10282" id="s_10381_10382" title="Defined at line 245">s</a>, <a href="#t_10331_10332" id="t_10384_10385" title="Defined at line 245">t</a>, <a href="#x_10308_10309" id="x_10387_10388" title="Defined at line 245">x</a>) == <a href="#propertyType_10314_10326" id="propertyType_10393_10405" title="Defined at line 245">propertyType</a>,
    @<a href="#x_10308_10309" id="x_10412_10413" title="Defined at line 245">x</a>.<span class="keyword">type</span> := <a href="#propertyType_10314_10326" id="propertyType_10422_10434" title="Defined at line 245">propertyType</a>.

  <a href="../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_10439_10454" title="Defined at ../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_10527_10528" id="s_10455_10456" title="Referenced at line 251, 252">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#SimpleFieldAccess_1689_1706" id="SimpleFieldAccess_10458_10475" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 70">SimpleFieldAccess</a>(<a href="#exp_10530_10533" id="exp_10476_10479" title="Referenced at line 251">exp</a>, <a href="#x_10566_10567" id="x_10481_10482" title="Referenced at line 252, 253">x</a>)) = <a href="#propertyType_10572_10584" id="propertyType_10487_10499" title="Referenced at line 252, 253">propertyType</a> :- {<a href="#t_10538_10539" id="t_10504_10505" title="Referenced at line 251, 252">t</a>}
    <a href="../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_10511_10526" title="Defined at ../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_10455_10456" id="s_10527_10528" title="Defined at line 250">s</a>, <a href="#exp_10476_10479" id="exp_10530_10533" title="Defined at line 250">exp</a>) == <a href="#t_10504_10505" id="t_10538_10539" title="Defined at line 250">t</a>,
    <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10545_10559" title="Defined at line 260">typeOfProperty</a>(<a href="#s_10455_10456" id="s_10560_10561" title="Defined at line 250">s</a>, <a href="#t_10504_10505" id="t_10563_10564" title="Defined at line 250">t</a>, <a href="#x_10481_10482" id="x_10566_10567" title="Defined at line 250">x</a>) == <a href="#propertyType_10487_10499" id="propertyType_10572_10584" title="Defined at line 250">propertyType</a>,
    @<a href="#x_10481_10482" id="x_10591_10592" title="Defined at line 250">x</a>.<span class="keyword">type</span> := <a href="#propertyType_10487_10499" id="propertyType_10601_10613" title="Defined at line 250">propertyType</a>.

  <a href="../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_10618_10638" title="Defined at ../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_10701_10702" id="s_10639_10640" title="Referenced at line 256, 257">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHFieldAccess_2207_2220" id="PHFieldAccess_10642_10655" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 61">PHFieldAccess</a>(<a href="#exp_10704_10707" id="exp_10656_10659" title="Referenced at line 256">exp</a>, <a href="#x_10740_10741" id="x_10661_10662" title="Referenced at line 257, 258">x</a>)) = <a href="#propertyType_10746_10758" id="propertyType_10667_10679" title="Referenced at line 257, 258">propertyType</a> :- {<a href="#t_10712_10713" id="t_10684_10685" title="Referenced at line 256, 257">t</a>}
    <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10691_10700" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10639_10640" id="s_10701_10702" title="Defined at line 255">s</a>, <a href="#exp_10656_10659" id="exp_10704_10707" title="Defined at line 255">exp</a>) == <a href="#t_10684_10685" id="t_10712_10713" title="Defined at line 255">t</a>,
    <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10719_10733" title="Defined at line 260">typeOfProperty</a>(<a href="#s_10639_10640" id="s_10734_10735" title="Defined at line 255">s</a>, <a href="#t_10684_10685" id="t_10737_10738" title="Defined at line 255">t</a>, <a href="#x_10661_10662" id="x_10740_10741" title="Defined at line 255">x</a>) == <a href="#propertyType_10667_10679" id="propertyType_10746_10758" title="Defined at line 255">propertyType</a>,
    @<a href="#x_10661_10662" id="x_10765_10766" title="Defined at line 255">x</a>.<span class="keyword">type</span> := <a href="#propertyType_10667_10679" id="propertyType_10775_10787" title="Defined at line 255">propertyType</a>.

  <a href="#typeOfProperty_5190_5204" id="typeOfProperty_10792_10806" title="Referenced at line 127, 135, 242, 247, 252, 257, 261, 262, 262, 263, 265; ../webdsl-entities.stx line 189, 197; ../webdsl-expand.stx line 50, 55, 59; ../webdsl-hql.stx line 72, 140, 144; ../webdsl-ui.stx line 297; ../entities/annotations.stx line 115, 130, 143, 180; ../types/built-ins.stx line 147, 148, 149, 202, 203, 204">typeOfProperty</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10817_10821" title="Defined at ../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10834_10838" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10841_10855" title="Defined at line 260">typeOfProperty</a>(_, <a href="#t_10958_10959" id="t_10859_10860" title="Referenced at line 261">t</a>, _) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_10867_10874" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Field access is only allowed on native classes and entities, [<a href="#t_10859_10860" id="t_10958_10959" title="Defined at line 261">t</a>] given].
  <a href="#typeOfProperty_10792_10806" id="typeOfProperty_10971_10985" title="Defined at line 260">typeOfProperty</a>(s, <a href="../webdsl-types.stx#REF_939_942" id="REF_10989_10992" title="Defined at ../webdsl-types.stx line 37">REF</a>(<span id="t_10993_10994" title="Not referenced locally, nor via imports">t</span>), x) = <a href="#typeOfProperty_10792_10806" id="typeOfProperty_11002_11016" title="Defined at line 260">typeOfProperty</a>(<span id="s_11017_11018" title="Not referenced locally, nor via imports">s</span>, t, <span id="x_11023_11024" title="Not referenced locally, nor via imports">x</span>).
  <a href="#typeOfProperty_10792_10806" id="typeOfProperty_11029_11043" title="Defined at line 260">typeOfProperty</a>(_, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_11047_11053" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_11088_11089" id="s_11057_11058" title="Referenced at line 264">s</a>), <a href="#x_11091_11092" id="x_11061_11062" title="Referenced at line 264">x</a>) = <a href="#t_11097_11098" id="t_11066_11067" title="Referenced at line 264">t</a> :-
    <a href="../webdsl-types.stx#propertyType_9035_9047" id="propertyType_11075_11087" title="Defined at ../webdsl-types.stx line 244">propertyType</a>(<a href="#s_11057_11058" id="s_11088_11089" title="Defined at line 263">s</a>, <a href="#x_11061_11062" id="x_11091_11092" title="Defined at line 263">x</a>) == <a href="#t_11066_11067" id="t_11097_11098" title="Defined at line 263">t</a>.
  <a href="#typeOfProperty_10792_10806" id="typeOfProperty_11102_11116" title="Defined at line 260">typeOfProperty</a>(_, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_11120_11131" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(_, <a href="#s_11166_11167" id="s_11135_11136" title="Referenced at line 266">s</a>), <a href="#x_11169_11170" id="x_11139_11140" title="Referenced at line 266">x</a>) = <a href="#t_11175_11176" id="t_11144_11145" title="Referenced at line 266">t</a> :-
    <a href="../webdsl-types.stx#propertyType_9035_9047" id="propertyType_11153_11165" title="Defined at ../webdsl-types.stx line 244">propertyType</a>(<a href="#s_11135_11136" id="s_11166_11167" title="Defined at line 265">s</a>, <a href="#x_11139_11140" id="x_11169_11170" title="Defined at line 265">x</a>) == <a href="#t_11144_11145" id="t_11175_11176" title="Defined at line 265">t</a>.

<span class="keyword">rules</span> <span class="layout">// lists and sets</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11206_11215" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_11216_11217" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ListCreation_4227_4239" id="ListCreation_11219_11231" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 131">ListCreation</a>([])) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_11239_11246" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Type cannot be determined for empty untyped list creation].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11330_11339" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11403_11404" id="s_11340_11341" title="Referenced at line 272, 273">s</a>, <a href="#lc_11591_11593" id="lc_11343_11345" title="Referenced at line 274">lc</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ListCreation_4227_4239" id="ListCreation_11346_11358" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 131">ListCreation</a>([<a href="#hd_11406_11408" id="hd_11360_11362" title="Referenced at line 272">hd</a> | <a href="#tl_11516_11518" id="tl_11365_11367" title="Referenced at line 273, 273">tl</a>])) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_11373_11377" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_11388_11389" id="t_11378_11379" title="Referenced at line 272, 273, 273, 274">t</a>) :-
    <a href="#t_11378_11379" id="t_11388_11389" title="Defined at line 271">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11393_11402" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11340_11341" id="s_11403_11404" title="Defined at line 271">s</a>, <a href="#hd_11360_11362" id="hd_11406_11408" title="Defined at line 271">hd</a>), <span class="layout">// first element of the untyped list creation determines the type</span>
    <a href="../webdsl.stx#typesCompatibleWith_17379_17398" id="typesCompatibleWith_11481_11500" title="Defined at ../webdsl.stx line 407">typesCompatibleWith</a>(<a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_11501_11512" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_11340_11341" id="s_11513_11514" title="Defined at line 271">s</a>, <a href="#tl_11365_11367" id="tl_11516_11518" title="Defined at line 271">tl</a>), <a href="#t_11378_11379" id="t_11521_11522" title="Defined at line 271">t</a>) | <span class="keyword">error</span> $[Not all elements are compatible with type [<a href="#t_11378_11379" id="t_11577_11578" title="Defined at line 271">t</a>]] @<a href="#tl_11365_11367" id="tl_11582_11584" title="Defined at line 271">tl</a>,
    @<a href="#lc_11343_11345" id="lc_11591_11593" title="Defined at line 271">lc</a>.<span class="keyword">type</span> := <a href="../webdsl-types.stx#LIST_891_895" id="LIST_11602_11606" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_11378_11379" id="t_11607_11608" title="Defined at line 271">t</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11614_11623" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11690_11691" id="s_11624_11625" title="Referenced at line 277, 278">s</a>, <a href="#tlc_11823_11826" id="tlc_11627_11630" title="Referenced at line 279">tlc</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#TypedListCreation_4298_4315" id="TypedListCreation_11631_11648" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 133">TypedListCreation</a>(<a href="#sort_11693_11697" id="sort_11649_11653" title="Referenced at line 277">sort</a>, <a href="#exps_11744_11748" id="exps_11655_11659" title="Referenced at line 278, 278">exps</a>)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_11664_11668" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_11702_11703" id="t_11669_11670" title="Referenced at line 277, 278, 278, 279">t</a>) :-
    <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_11679_11689" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_11624_11625" id="s_11690_11691" title="Defined at line 276">s</a>, <a href="#sort_11649_11653" id="sort_11693_11697" title="Defined at line 276">sort</a>) == <a href="#t_11669_11670" id="t_11702_11703" title="Defined at line 276">t</a>,
    <a href="../webdsl.stx#typesCompatibleWith_17379_17398" id="typesCompatibleWith_11709_11728" title="Defined at ../webdsl.stx line 407">typesCompatibleWith</a>(<a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_11729_11740" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_11624_11625" id="s_11741_11742" title="Defined at line 276">s</a>, <a href="#exps_11655_11659" id="exps_11744_11748" title="Defined at line 276">exps</a>), <a href="#t_11669_11670" id="t_11751_11752" title="Defined at line 276">t</a>) | <span class="keyword">error</span> $[Not all elements are compatible with type [<a href="#t_11669_11670" id="t_11807_11808" title="Defined at line 276">t</a>]] @<a href="#exps_11655_11659" id="exps_11812_11816" title="Defined at line 276">exps</a>,
    @<a href="#tlc_11627_11630" id="tlc_11823_11826" title="Defined at line 276">tlc</a>.<span class="keyword">type</span> := <a href="../webdsl-types.stx#LIST_891_895" id="LIST_11835_11839" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_11669_11670" id="t_11840_11841" title="Defined at line 276">t</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11847_11856" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_11857_11858" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SetCreation_4263_4274" id="SetCreation_11860_11871" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 132">SetCreation</a>([])) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_11879_11886" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Type cannot be determined for empty untyped set creation].
  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_11969_11978" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_12040_12041" id="s_11979_11980" title="Referenced at line 283, 284">s</a>, <a href="#sc_12227_12229" id="sc_11982_11984" title="Referenced at line 285">sc</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#SetCreation_4263_4274" id="SetCreation_11985_11996" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 132">SetCreation</a>([<a href="#hd_12043_12045" id="hd_11998_12000" title="Referenced at line 283">hd</a> | <a href="#tl_12152_12154" id="tl_12003_12005" title="Referenced at line 284, 284">tl</a>])) = <a href="../webdsl-types.stx#SET_915_918" id="SET_12011_12014" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#t_12025_12026" id="t_12015_12016" title="Referenced at line 283, 284, 284, 285">t</a>) :-
    <a href="#t_12015_12016" id="t_12025_12026" title="Defined at line 282">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_12030_12039" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_11979_11980" id="s_12040_12041" title="Defined at line 282">s</a>, <a href="#hd_11998_12000" id="hd_12043_12045" title="Defined at line 282">hd</a>), <span class="layout">// first element of the untyped set creation determines the type</span>
    <a href="../webdsl.stx#typesCompatibleWith_17379_17398" id="typesCompatibleWith_12117_12136" title="Defined at ../webdsl.stx line 407">typesCompatibleWith</a>(<a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_12137_12148" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_11979_11980" id="s_12149_12150" title="Defined at line 282">s</a>, <a href="#tl_12003_12005" id="tl_12152_12154" title="Defined at line 282">tl</a>), <a href="#t_12015_12016" id="t_12157_12158" title="Defined at line 282">t</a>) | <span class="keyword">error</span> $[Not all elements are compatible with type [<a href="#t_12015_12016" id="t_12213_12214" title="Defined at line 282">t</a>]] @<a href="#tl_12003_12005" id="tl_12218_12220" title="Defined at line 282">tl</a>,
    @<a href="#sc_11982_11984" id="sc_12227_12229" title="Defined at line 282">sc</a>.<span class="keyword">type</span> := <a href="../webdsl-types.stx#SET_915_918" id="SET_12238_12241" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#t_12015_12016" id="t_12242_12243" title="Defined at line 282">t</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_12249_12258" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_12323_12324" id="s_12259_12260" title="Referenced at line 288, 289">s</a>, <a href="#tsc_12456_12459" id="tsc_12262_12265" title="Referenced at line 290">tsc</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#TypedSetCreation_4346_4362" id="TypedSetCreation_12266_12282" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 134">TypedSetCreation</a>(<a href="#sort_12326_12330" id="sort_12283_12287" title="Referenced at line 288">sort</a>, <a href="#exps_12377_12381" id="exps_12289_12293" title="Referenced at line 289, 289">exps</a>)) = <a href="../webdsl-types.stx#SET_915_918" id="SET_12298_12301" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#t_12335_12336" id="t_12302_12303" title="Referenced at line 288, 289, 289, 290">t</a>) :-
    <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_12312_12322" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_12259_12260" id="s_12323_12324" title="Defined at line 287">s</a>, <a href="#sort_12283_12287" id="sort_12326_12330" title="Defined at line 287">sort</a>) == <a href="#t_12302_12303" id="t_12335_12336" title="Defined at line 287">t</a>,
    <a href="../webdsl.stx#typesCompatibleWith_17379_17398" id="typesCompatibleWith_12342_12361" title="Defined at ../webdsl.stx line 407">typesCompatibleWith</a>(<a href="../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_12362_12373" title="Defined at ../webdsl.stx line 387">typesOfExps</a>(<a href="#s_12259_12260" id="s_12374_12375" title="Defined at line 287">s</a>, <a href="#exps_12289_12293" id="exps_12377_12381" title="Defined at line 287">exps</a>), <a href="#t_12302_12303" id="t_12384_12385" title="Defined at line 287">t</a>) | <span class="keyword">error</span> $[Not all elements are compatible with type [<a href="#t_12302_12303" id="t_12440_12441" title="Defined at line 287">t</a>]] @<a href="#exps_12289_12293" id="exps_12445_12449" title="Defined at line 287">exps</a>,
    @<a href="#tsc_12262_12265" id="tsc_12456_12459" title="Defined at line 287">tsc</a>.<span class="keyword">type</span> := <a href="../webdsl-types.stx#SET_915_918" id="SET_12468_12471" title="Defined at ../webdsl-types.stx line 36">SET</a>(<a href="#t_12302_12303" id="t_12472_12473" title="Defined at line 287">t</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_12479_12488" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_12556_12557" id="s_12489_12490" title="Referenced at line 293">s</a>, <a href="#ci_12571_12573" id="ci_12492_12494" title="Referenced at line 294">ci</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#CollectionIndex_3685_3700" id="CollectionIndex_12495_12510" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 118">CollectionIndex</a>(<a href="#c_12559_12560" id="c_12511_12512" title="Referenced at line 293">c</a>, <a href="#x_12562_12563" id="x_12514_12515" title="Referenced at line 293">x</a>)) = <a href="#t_12529_12530" id="t_12520_12521" title="Referenced at line 293, 294">t</a> :-
    <a href="#t_12520_12521" id="t_12529_12530" title="Defined at line 292">t</a> == <a href="#typeOfCollectionIndex_12710_12731" id="typeOfCollectionIndex_12534_12555" title="Defined at line 300">typeOfCollectionIndex</a>(<a href="#s_12489_12490" id="s_12556_12557" title="Defined at line 292">s</a>, <a href="#c_12511_12512" id="c_12559_12560" title="Defined at line 292">c</a>, <a href="#x_12514_12515" id="x_12562_12563" title="Defined at line 292">x</a>),
    @<a href="#ci_12492_12494" id="ci_12571_12573" title="Defined at line 292">ci</a>.<span class="keyword">type</span> := <a href="#t_12520_12521" id="t_12582_12583" title="Defined at line 292">t</a>.

  <a href="../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_12588_12608" title="Defined at ../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_12678_12679" id="s_12609_12610" title="Referenced at line 297">s</a>, <a href="#ci_12693_12695" id="ci_12612_12614" title="Referenced at line 298">ci</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHCollectionIndex_2253_2270" id="PHCollectionIndex_12615_12632" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 62">PHCollectionIndex</a>(<a href="#c_12681_12682" id="c_12633_12634" title="Referenced at line 297">c</a>, <a href="#x_12684_12685" id="x_12636_12637" title="Referenced at line 297">x</a>)) = <a href="#t_12651_12652" id="t_12642_12643" title="Referenced at line 297, 298">t</a> :-
    <a href="#t_12642_12643" id="t_12651_12652" title="Defined at line 296">t</a> == <a href="#typeOfCollectionIndex_12710_12731" id="typeOfCollectionIndex_12656_12677" title="Defined at line 300">typeOfCollectionIndex</a>(<a href="#s_12609_12610" id="s_12678_12679" title="Defined at line 296">s</a>, <a href="#c_12633_12634" id="c_12681_12682" title="Defined at line 296">c</a>, <a href="#x_12636_12637" id="x_12684_12685" title="Defined at line 296">x</a>),
    @<a href="#ci_12612_12614" id="ci_12693_12695" title="Defined at line 296">ci</a>.<span class="keyword">type</span> := <a href="#t_12642_12643" id="t_12704_12705" title="Defined at line 296">t</a>.

  <a href="#typeOfCollectionIndex_12534_12555" id="typeOfCollectionIndex_12710_12731" title="Referenced at line 293, 297, 301">typeOfCollectionIndex</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_12742_12745" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_12748_12751" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_12755_12759" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfCollectionIndex_12710_12731" id="typeOfCollectionIndex_12762_12783" title="Defined at line 300">typeOfCollectionIndex</a>(<a href="#s_12828_12829" id="s_12784_12785" title="Referenced at line 302, 303, 305">s</a>, <a href="#c_12831_12832" id="c_12787_12788" title="Referenced at line 302">c</a>, <a href="#x_12858_12859" id="x_12790_12791" title="Referenced at line 303">x</a>) = <a href="#t_13012_13013" id="t_12795_12796" title="Referenced at line 306">t</a> :- {<a href="#ct_12812_12814" id="ct_12801_12803" title="Referenced at line 302, 304, 306">ct</a> <a href="#xt_12839_12841" id="xt_12804_12806" title="Referenced at line 303, 305, 305">xt</a>}
    <a href="#ct_12801_12803" id="ct_12812_12814" title="Defined at line 301">ct</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_12818_12827" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_12784_12785" id="s_12828_12829" title="Defined at line 301">s</a>, <a href="#c_12787_12788" id="c_12831_12832" title="Defined at line 301">c</a>),
    <a href="#xt_12804_12806" id="xt_12839_12841" title="Defined at line 301">xt</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_12845_12854" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_12784_12785" id="s_12855_12856" title="Defined at line 301">s</a>, <a href="#x_12790_12791" id="x_12858_12859" title="Defined at line 301">x</a>),
    <a href="#indexedAccessAllowed_13042_13062" id="indexedAccessAllowed_12866_12886" title="Defined at line 308">indexedAccessAllowed</a>(<a href="#ct_12801_12803" id="ct_12887_12889" title="Defined at line 301">ct</a>),
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_12896_12910" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="#xt_12804_12806" id="xt_12911_12913" title="Defined at line 301">xt</a>, <a href="../types/built-ins.stx#int_1638_1641" id="int_12915_12918" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_12784_12785" id="s_12919_12920" title="Defined at line 301">s</a>)) | <span class="keyword">error</span> $[Index must be of type Int, [<a href="#xt_12804_12806" id="xt_12961_12963" title="Defined at line 301">xt</a>] given], <span class="layout">// correct error message for tests</span>
    <a href="#t_12795_12796" id="t_13012_13013" title="Defined at line 301">t</a> == <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_13017_13033" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#ct_12801_12803" id="ct_13034_13036" title="Defined at line 301">ct</a>).

  <a href="#indexedAccessAllowed_12866_12886" id="indexedAccessAllowed_13042_13062" title="Referenced at line 304, 309, 310">indexedAccessAllowed</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_13065_13069" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#indexedAccessAllowed_13042_13062" id="indexedAccessAllowed_13072_13092" title="Defined at line 308">indexedAccessAllowed</a>(_).
  <a href="#indexedAccessAllowed_13042_13062" id="indexedAccessAllowed_13099_13119" title="Defined at line 308">indexedAccessAllowed</a>(<a href="../webdsl-types.stx#SET_915_918" id="SET_13120_13123" title="Defined at ../webdsl-types.stx line 36">SET</a>(_)) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Indexed access \[\] is only allowed for List&lt;type&gt; and Set&lt;type&gt;].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_13217_13226" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForExp2Exp_5747_5757" id="ForExp2Exp_13230_13240" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 167">ForExp2Exp</a>(forExp)) = <a href="#typeOfForExp_13526_13538" id="typeOfForExp_13252_13264" title="Defined at line 324">typeOfForExp</a>(<span id="s_13265_13266" title="Not referenced locally, nor via imports">s</span>, <span id="forExp_13268_13274" title="Not referenced locally, nor via imports">forExp</span>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_13280_13289" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_13338_13339" id="s_13290_13291" title="Referenced at line 315, 316">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#OrForExp_5912_5920" id="OrForExp_13293_13301" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 172">OrForExp</a>(<a href="#forExp_13362_13368" id="forExp_13302_13308" title="Referenced at line 316">forExp</a>)) = <a href="#bool_13325_13329" id="bool_13313_13317" title="Referenced at line 315, 316">bool</a> :-
    <a href="#bool_13313_13317" id="bool_13325_13329" title="Defined at line 314">bool</a> == <a href="../types/built-ins.stx#bool_2637_2641" id="bool_13333_13337" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_13290_13291" id="s_13338_13339" title="Defined at line 314">s</a>),
    <a href="#typeOfForExp_13526_13538" id="typeOfForExp_13346_13358" title="Defined at line 324">typeOfForExp</a>(<a href="#s_13290_13291" id="s_13359_13360" title="Defined at line 314">s</a>, <a href="#forExp_13302_13308" id="forExp_13362_13368" title="Defined at line 314">forExp</a>) == <a href="../webdsl-types.stx#LIST_891_895" id="LIST_13373_13377" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#bool_13313_13317" id="bool_13378_13382" title="Defined at line 314">bool</a>).

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_13388_13397" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_13447_13448" id="s_13398_13399" title="Referenced at line 319, 320">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#AndForExp_5882_5891" id="AndForExp_13401_13410" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 171">AndForExp</a>(<a href="#forExp_13471_13477" id="forExp_13411_13417" title="Referenced at line 320">forExp</a>)) = <a href="#bool_13434_13438" id="bool_13422_13426" title="Referenced at line 319, 320">bool</a> :-
    <a href="#bool_13422_13426" id="bool_13434_13438" title="Defined at line 318">bool</a> == <a href="../types/built-ins.stx#bool_2637_2641" id="bool_13442_13446" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_13398_13399" id="s_13447_13448" title="Defined at line 318">s</a>),
    <a href="#typeOfForExp_13526_13538" id="typeOfForExp_13455_13467" title="Defined at line 324">typeOfForExp</a>(<a href="#s_13398_13399" id="s_13468_13469" title="Defined at line 318">s</a>, <a href="#forExp_13411_13417" id="forExp_13471_13477" title="Defined at line 318">forExp</a>) == <a href="../webdsl-types.stx#LIST_891_895" id="LIST_13482_13486" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#bool_13422_13426" id="bool_13487_13491" title="Defined at line 318">bool</a>).

<span class="keyword">rules</span> <span class="layout">// list comprehension</span>

  <a href="#typeOfForExp_13252_13264" id="typeOfForExp_13526_13538" title="Referenced at line 312, 316, 320, 325, 334">typeOfForExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForExp_522_528" id="ForExp_13549_13555" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 33">ForExp</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_13559_13563" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfForExp_13526_13538" id="typeOfForExp_13566_13578" title="Defined at line 324">typeOfForExp</a>(<a href="#s_13684_13685" id="s_13579_13580" title="Referenced at line 326, 327">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForExpInferred_5213_5227" id="ForExpInferred_13582_13596" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 159">ForExpInferred</a>(<a href="#e1_13835_13837" id="e1_13597_13599" title="Referenced at line 330">e1</a>, <a href="#x_13797_13798" id="x_13601_13602" title="Referenced at line 329, 331">x</a>, <a href="#e2_13722_13724" id="e2_13604_13606" title="Referenced at line 327">e2</a>, _, _)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_13617_13621" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_13814_13815" id="t_13622_13623" title="Referenced at line 330">t</a>) :- { <a href="#s_e1_13668_13672" id="s_e1_13630_13634" title="Referenced at line 326, 326, 329, 330">s_e1</a> <a href="#collectionType_13691_13705" id="collectionType_13635_13649" title="Referenced at line 327, 328">collectionType</a> <a href="#varType_13731_13738" id="varType_13650_13657" title="Referenced at line 328, 329, 331">varType</a> }
    <span class="keyword">new</span> <a href="#s_e1_13630_13634" id="s_e1_13668_13672" title="Defined at line 325">s_e1</a>, <a href="#s_e1_13630_13634" id="s_e1_13674_13678" title="Defined at line 325">s_e1</a> -<a href="../webdsl.stx#P_1226_1227" id="P_13680_13681" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_13579_13580" id="s_13684_13685" title="Defined at line 325">s</a>,
    <a href="#collectionType_13635_13649" id="collectionType_13691_13705" title="Defined at line 325">collectionType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_13709_13718" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_13579_13580" id="s_13719_13720" title="Defined at line 325">s</a>, <a href="#e2_13604_13606" id="e2_13722_13724" title="Defined at line 325">e2</a>),
    <a href="#varType_13650_13657" id="varType_13731_13738" title="Defined at line 325">varType</a> == <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_13742_13758" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#collectionType_13635_13649" id="collectionType_13759_13773" title="Defined at line 325">collectionType</a>),
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_13780_13790" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_e1_13630_13634" id="s_e1_13791_13795" title="Defined at line 325">s_e1</a>, <a href="#x_13601_13602" id="x_13797_13798" title="Defined at line 325">x</a>, <a href="#varType_13650_13657" id="varType_13800_13807" title="Defined at line 325">varType</a>),
    <a href="#t_13622_13623" id="t_13814_13815" title="Defined at line 325">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_13819_13828" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_e1_13630_13634" id="s_e1_13829_13833" title="Defined at line 325">s_e1</a>, <a href="#e1_13597_13599" id="e1_13835_13837" title="Defined at line 325">e1</a>),
    @<a href="#x_13601_13602" id="x_13845_13846" title="Defined at line 325">x</a>.<span class="keyword">type</span> := <a href="#varType_13650_13657" id="varType_13855_13862" title="Defined at line 325">varType</a>.
    <span class="layout">// TO-DO: implement filter and group by typechecking</span>

  <a href="#typeOfForExp_13526_13538" id="typeOfForExp_13924_13936" title="Defined at line 324">typeOfForExp</a>(<a href="#s_14040_14041" id="s_13937_13938" title="Referenced at line 335, 336, 338">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ForExp_5140_5146" id="ForExp_13940_13946" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 158">ForExp</a>(<a href="#e1_14313_14315" id="e1_13947_13949" title="Referenced at line 340">e1</a>, <a href="#x_14275_14276" id="x_13951_13952" title="Referenced at line 339">x</a>, <a href="#sort_14186_14190" id="sort_13954_13958" title="Referenced at line 338, 338">sort</a>, <a href="#e2_14078_14080" id="e2_13960_13962" title="Referenced at line 336, 338">e2</a>, _, _)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_13973_13977" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_14292_14293" id="t_13978_13979" title="Referenced at line 340">t</a>) :- { <a href="#s_e1_14024_14028" id="s_e1_13986_13990" title="Referenced at line 335, 335, 339, 340">s_e1</a> <a href="#collectionType_14047_14061" id="collectionType_13991_14005" title="Referenced at line 336, 337, 338">collectionType</a> <a href="#varType_14087_14094" id="varType_14006_14013" title="Referenced at line 337, 339">varType</a> }
    <span class="keyword">new</span> <a href="#s_e1_13986_13990" id="s_e1_14024_14028" title="Defined at line 334">s_e1</a>, <a href="#s_e1_13986_13990" id="s_e1_14030_14034" title="Defined at line 334">s_e1</a> -<a href="../webdsl.stx#P_1226_1227" id="P_14036_14037" title="Defined at ../webdsl.stx line 45">P</a>-&gt; <a href="#s_13937_13938" id="s_14040_14041" title="Defined at line 334">s</a>,
    <a href="#collectionType_13991_14005" id="collectionType_14047_14061" title="Defined at line 334">collectionType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_14065_14074" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_13937_13938" id="s_14075_14076" title="Defined at line 334">s</a>, <a href="#e2_13960_13962" id="e2_14078_14080" title="Defined at line 334">e2</a>),
    <a href="#varType_14006_14013" id="varType_14087_14094" title="Defined at line 334">varType</a> == <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_14098_14114" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#collectionType_13991_14005" id="collectionType_14115_14129" title="Defined at line 334">collectionType</a>),
    <a href="../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_14136_14152" title="Defined at ../webdsl-types.stx line 267">stripGenericType</a>(<a href="#collectionType_13991_14005" id="collectionType_14153_14167" title="Defined at line 334">collectionType</a>) == <a href="../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_14172_14182" title="Defined at ../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_13937_13938" id="s_14183_14184" title="Defined at line 334">s</a>, <a href="#sort_13954_13958" id="sort_14186_14190" title="Defined at line 334">sort</a>) | <span class="keyword">error</span> $["type of [<a href="#e2_13960_13962" id="e2_14212_14214" title="Defined at line 334">e2</a>] is not a collection of type [<a href="#sort_13954_13958" id="sort_14245_14249" title="Defined at line 334">sort</a>]"],
    <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_14258_14268" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_e1_13986_13990" id="s_e1_14269_14273" title="Defined at line 334">s_e1</a>, <a href="#x_13951_13952" id="x_14275_14276" title="Defined at line 334">x</a>, <a href="#varType_14006_14013" id="varType_14278_14285" title="Defined at line 334">varType</a>),
    <a href="#t_13978_13979" id="t_14292_14293" title="Defined at line 334">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_14297_14306" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_e1_13986_13990" id="s_e1_14307_14311" title="Defined at line 334">s_e1</a>, <a href="#e1_13947_13949" id="e1_14313_14315" title="Defined at line 334">e1</a>).
    <span class="layout">// TO-DO: implement filter and group by typechecking</span>

<span class="keyword">rules</span> <span class="layout">// test</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_14393_14398" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_14465_14466" id="s_14399_14400" title="Referenced at line 346">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Test-sig.stx#Test_202_206" id="Test_14402_14406" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Test-sig.stx line 17">Test</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_14410_14415" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_14488_14493" id="stmts_14416_14421" title="Referenced at line 347">stmts</a>))) :- {<a href="#s_test_14445_14451" id="s_test_14429_14435" title="Referenced at line 346, 346, 347">s_test</a>}
    <span class="keyword">new</span> <a href="#s_test_14429_14435" id="s_test_14445_14451" title="Defined at line 345">s_test</a>, <a href="#s_test_14429_14435" id="s_test_14453_14459" title="Defined at line 345">s_test</a> -<a href="../webdsl.stx#F_1290_1291" id="F_14461_14462" title="Defined at ../webdsl.stx line 46">F</a>-&gt; <a href="#s_14399_14400" id="s_14465_14466" title="Defined at line 345">s</a>,
    <a href="../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_14472_14479" title="Defined at ../webdsl.stx line 363">stmtsOk</a>(<a href="#s_test_14429_14435" id="s_test_14480_14486" title="Defined at line 345">s_test</a>, <a href="#stmts_14416_14421" id="stmts_14488_14493" title="Defined at line 345">stmts</a>, <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_14495_14502" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>()).

<span class="keyword">rules</span> <span class="layout">// misc</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_14525_14531" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_14599_14600" id="s_14532_14533" title="Referenced at line 351">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateStatement_572_589" id="ValidateStatement_14538_14555" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 25">ValidateStatement</a>(<a href="#validateExp_14602_14613" id="validateExp_14556_14567" title="Referenced at line 351">validateExp</a>, <a href="#messageExp_14615_14625" id="messageExp_14569_14579" title="Referenced at line 351">messageExp</a>), _) :- <a href="../entities/annotations.stx#validateOk_8996_9006" id="validateOk_14588_14598" title="Defined at ../entities/annotations.stx line 194">validateOk</a>(<a href="#s_14532_14533" id="s_14599_14600" title="Defined at line 351">s</a>, <a href="#validateExp_14556_14567" id="validateExp_14602_14613" title="Defined at line 351">validateExp</a>, <a href="#messageExp_14569_14579" id="messageExp_14615_14625" title="Defined at line 351">messageExp</a>).
  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_14630_14636" title="Defined at ../webdsl.stx line 361">stmtOk</a>(<a href="#s_14712_14713" id="s_14637_14638" title="Referenced at line 352">s</a>, _, <a href="../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#NamedValidateStatement_619_641" id="NamedValidateStatement_14643_14665" title="Defined at ../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 26">NamedValidateStatement</a>(_, <a href="#validateExp_14715_14726" id="validateExp_14669_14680" title="Referenced at line 352">validateExp</a>, <a href="#messageExp_14728_14738" id="messageExp_14682_14692" title="Referenced at line 352">messageExp</a>), _) :- <a href="../entities/annotations.stx#validateOk_8996_9006" id="validateOk_14701_14711" title="Defined at ../entities/annotations.stx line 194">validateOk</a>(<a href="#s_14637_14638" id="s_14712_14713" title="Defined at line 352">s</a>, <a href="#validateExp_14669_14680" id="validateExp_14715_14726" title="Defined at line 352">validateExp</a>, <a href="#messageExp_14682_14692" id="messageExp_14728_14738" title="Defined at line 352">messageExp</a>).

</code></pre></td></tr></tbody></table></div>