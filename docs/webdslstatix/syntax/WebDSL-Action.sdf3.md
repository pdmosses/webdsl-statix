---
title: WebDSL-Action.sdf3
---

# `WebDSL-Action.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Action.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-Action.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-Action.sdf3 "The source file on GitHub"

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
353
354
355
356
357
358
359
360
361
362
363
364
365
366
367
368
369
370
371
372
373
374
375
376
377
378
379
380
381
382
383
384
385
386
387
388
389
390
391
392
393
394
395
396
397
398
399
400
401
402
403
404
405
406
407
408
409
410
411
412
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix.sdf3#WebDSL-Action_55_68" id="WebDSL-Action_7_20" title="Referenced at ../webdsl-statix.sdf3 line 5">WebDSL-Action</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3#WebDSL-Core_7_18" id="WebDSL-Core_32_43" title="Defined at ../WebDSL-Core.sdf3 line 1">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3#WebDSL-DataModel_7_23" id="WebDSL-DataModel_46_62" title="Defined at ../WebDSL-DataModel.sdf3 line 1">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3#WebDSL-Lexical_7_21" id="WebDSL-Lexical_65_79" title="Defined at ../WebDSL-Lexical.sdf3 line 1">WebDSL-Lexical</a>
  <a href="../WebDSL-Search.sdf3#WebDSL-Search_7_20" id="WebDSL-Search_82_95" title="Defined at ../WebDSL-Search.sdf3 line 1">WebDSL-Search</a>
  <a href="../WebDSL-UI.sdf3#WebDSL-UI_7_16" id="WebDSL-UI_98_107" title="Defined at ../WebDSL-UI.sdf3 line 1">WebDSL-UI</a>
  <a href="../HQL.sdf3#HQL_7_10" id="HQL_110_113" title="Defined at ../HQL.sdf3 line 1">HQL</a>

<span class="keyword">context-free sorts</span>

  <a href="#OptSort_1049_1056" id="OptSort_137_144" title="Referenced at line 37">OptSort</a> <a href="#Block_3314_3319" id="Block_145_150" title="Referenced at line 162; ../WebDSL-Exception.sdf3 line 29; ../WebDSL-Expand.sdf3 line 108; ../WebDSL-Routing.sdf3 line 22; ../WebDSL-Service.sdf3 line 17; ../WebDSL-Test.sdf3 line 14; ../WebDSL-UI.sdf3 line 456">Block</a> <a href="#Function_722_730" id="Function_151_159" title="Referenced at line 30">Function</a>

<span class="keyword">context-free syntax</span>

  <a href="#Function_722_730" id="Function_184_192" title="Referenced at line 30">Function</a>.<span class="cons_Constructor"><span id="Function_193_201" title="Not referenced locally, nor via imports">Function</span></span> = &lt;
    <span class="cons_String">function</span> &lt;<a href="#FunId_1382_1387" id="FunId_220_225" title="Defined at line 62">FunId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_228_241" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptSort_137_144" id="OptSort_244_251" title="Defined at line 13, 20, 21">OptSort</a>&gt; &lt;<a href="#Block_145_150" id="Block_254_259" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#OptSort_1049_1056" id="OptSort_267_274" title="Referenced at line 37">OptSort</a>.<span class="cons_Constructor"><span id="OptSortNone_275_286" title="Not referenced locally, nor via imports">OptSortNone</span></span> = &lt;&gt;
  <a href="#OptSort_1049_1056" id="OptSort_294_301" title="Referenced at line 37">OptSort</a>.<span class="cons_Constructor"><span id="OptSortSome_302_313" title="Not referenced locally, nor via imports">OptSortSome</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_320_324" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <span id="Definition_329_339" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="GlobalFunction_340_354" title="Not referenced locally, nor via imports">GlobalFunction</span></span> = &lt;
    &lt;<a href="#Function_151_159" id="Function_364_372" title="Defined at line 13, 17">Function</a>&gt;
  &gt;
  <span id="Definition_380_390" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="CachedGlobalFunction_391_411" title="Not referenced locally, nor via imports">CachedGlobalFunction</span></span> = &lt;<span class="cons_String">cached</span> &lt;<a href="#Function_151_159" id="Function_423_431" title="Defined at line 13, 17">Function</a>&gt;&gt;
  <span id="Definition_436_446" title="Not referenced locally, nor via imports">Definition</span>.<span class="cons_Constructor"><span id="ExtendGlobalFunction_447_467" title="Not referenced locally, nor via imports">ExtendGlobalFunction</span></span> = &lt;<span class="cons_String">extend</span> &lt;<a href="#Function_151_159" id="Function_479_487" title="Defined at line 13, 17">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_492_513" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="EntityFunction_514_528" title="Not referenced locally, nor via imports">EntityFunction</span></span> = &lt;&lt;<a href="#Function_151_159" id="Function_533_541" title="Defined at line 13, 17">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_546_567" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="CachedFunction_568_582" title="Not referenced locally, nor via imports">CachedFunction</span></span> = &lt;<span class="cons_String">cached</span> &lt;<a href="#Function_151_159" id="Function_594_602" title="Defined at line 13, 17">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_607_628" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="ExtendFunction_629_643" title="Not referenced locally, nor via imports">ExtendFunction</span></span> = &lt;<span class="cons_String">extend</span> &lt;<a href="#Function_151_159" id="Function_655_663" title="Defined at line 13, 17">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_668_689" title="Not referenced locally, nor via imports">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="StaticEntityFunction_690_710" title="Not referenced locally, nor via imports">StaticEntityFunction</span></span> = &lt;<span class="cons_String">static</span> &lt;<a href="#Function_151_159" id="Function_722_730" title="Defined at line 13, 17">Function</a>&gt;&gt;

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_757_760" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="FunctionExp_761_772" title="Not referenced locally, nor via imports">FunctionExp</span></span> = &lt;<span class="cons_String">function</span> &lt;<a href="../WebDSL-Core.sdf3#OptFormalArgs_113_126" id="OptFormalArgs_786_799" title="Defined at ../WebDSL-Core.sdf3 line 10, 37, 38">OptFormalArgs</a>&gt; &lt;<a href="#OptSort_137_144" id="OptSort_802_809" title="Defined at line 13, 20, 21">OptSort</a>&gt; &lt;<a href="#Block_145_150" id="Block_812_817" title="Defined at line 13, 45">Block</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_822_825" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="FunctionRef_826_837" title="Not referenced locally, nor via imports">FunctionRef</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_1382_1387" id="FunId_853_858" title="Defined at line 62">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_864_868" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_137_144" id="OptSort_879_886" title="Defined at line 13, 20, 21">OptSort</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_891_894" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="FunctionRefCall_895_910" title="Not referenced locally, nor via imports">FunctionRefCall</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_1382_1387" id="FunId_926_931" title="Defined at line 62">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_937_941" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_137_144" id="OptSort_952_959" title="Defined at line 13, 20, 21">OptSort</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_965_968" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_981_984" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="FunctionRefCallPartial_985_1007" title="Not referenced locally, nor via imports">FunctionRefCallPartial</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_1382_1387" id="FunId_1023_1028" title="Defined at line 62">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1034_1038" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_137_144" id="OptSort_1049_1056" title="Defined at line 13, 20, 21">OptSort</a>&gt; <span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">,</span> &lt;{<a href="#Exp_757_760" id="Exp_1066_1069" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_1099_1104" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"function"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Block_3314_3319" id="Block_1151_1156" title="Referenced at line 162; ../WebDSL-Exception.sdf3 line 29; ../WebDSL-Expand.sdf3 line 108; ../WebDSL-Routing.sdf3 line 22; ../WebDSL-Service.sdf3 line 17; ../WebDSL-Test.sdf3 line 14; ../WebDSL-UI.sdf3 line 456">Block</a>.<span class="cons_Constructor"><span id="Block_1157_1162" title="Not referenced locally, nor via imports">Block</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#Statement_1192_1201" id="Statement_1173_1182" title="Defined at line 48, 49, 52, 55, 70, 73, 79, 82, 85, 95, 98, 101, 108, 120, 149, 152, 155, 158, 161, 231, 346">Statement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#Statement_2868_2877" id="Statement_1192_1201" title="Referenced at line 145">Statement</a> = <a href="#Block_145_150" id="Block_1204_1209" title="Defined at line 13, 45">Block</a>
  <a href="#Statement_2868_2877" id="Statement_1212_1221" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><a href="#Stat_1446_1450" id="Stat_1222_1226" title="Referenced at line 66">Stat</a></span> = &lt;
    &lt;<a href="#Exp_757_760" id="Exp_1236_1239" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1248_1257" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="Return_1258_1264" title="Not referenced locally, nor via imports">Return</span></span> = &lt;
    <span class="cons_String">return</span> &lt;<a href="#Exp_757_760" id="Exp_1281_1284" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1293_1302" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="ReturnEmpty_1303_1314" title="Not referenced locally, nor via imports">ReturnEmpty</span></span> = &lt;
    <span class="cons_String">return;</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_1354_1359" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"return"</span> {<span class="keyword">reject</span>}
  <a href="#FunId_5050_5055" id="FunId_1382_1387" title="Referenced at line 250">FunId</a> = <span class="cons_Lit">"return"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#Statement_1192_1201" id="Statement_1436_1445" title="Defined at line 48, 49, 52, 55, 70, 73, 79, 82, 85, 95, 98, 101, 108, 120, 149, 152, 155, 158, 161, 231, 346">Statement</a>.<span class="cons_Constructor"><a href="#Stat_1222_1226" id="Stat_1446_1450" title="Defined at line 49">Stat</a></span> &lt;0&gt; .&gt; <a href="#Exp_757_760" id="Exp_1458_1461" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Var_3701_3704" id="Var_1462_1465" title="Defined at line 190">Var</a></span>

<span class="keyword">context-free syntax</span>

  <a href="#Statement_2868_2877" id="Statement_1490_1499" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="GoTo_1500_1504" title="Not referenced locally, nor via imports">GoTo</span></span> = &lt;
    <span class="cons_String">goto</span> &lt;<a href="../WebDSL-UI.sdf3#PageCall_232_240" id="PageCall_1519_1527" title="Defined at ../WebDSL-UI.sdf3 line 16, 291">PageCall</a>&gt;<span class="cons_String">;</span>
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1536_1545" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="GoToAlt_1546_1553" title="Not referenced locally, nor via imports">GoToAlt</span></span> = &lt;
    <span class="cons_String">goto</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#PageCall_232_240" id="PageCall_1570_1578" title="Defined at ../WebDSL-UI.sdf3 line 16, 291">PageCall</a>&gt; <span class="cons_String">);</span>
  &gt;

  <a href="#ThisCall_5342_5350" id="ThisCall_1590_1598" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">goto</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3#PageCall_232_240" id="PageCall_1610_1618" title="Defined at ../WebDSL-UI.sdf3 line 16, 291">PageCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <a href="#Statement_2868_2877" id="Statement_1635_1644" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="VarDecl_1645_1652" title="Not referenced locally, nor via imports">VarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_1099_1104" id="VarId_1666_1671" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1676_1680" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;<span class="cons_String">;</span>
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1689_1698" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="VarDeclInit_1699_1710" title="Not referenced locally, nor via imports">VarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_1099_1104" id="VarId_1724_1729" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_1734_1738" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_757_760" id="Exp_1744_1747" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1756_1765" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="VarDeclInitInferred_1766_1785" title="Not referenced locally, nor via imports">VarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_1099_1104" id="VarId_1799_1804" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_757_760" id="Exp_1810_1813" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#ElseIfStatement_2089_2104" id="ElseIfStatement_1843_1858" title="Referenced at line 102">ElseIfStatement</a> <a href="#OptElse_2108_2115" id="OptElse_1859_1866" title="Referenced at line 102">OptElse</a> <a href="#Case_2303_2307" id="Case_1867_1871" title="Referenced at line 110">Case</a> <a href="#TypeCaseAlt_2496_2507" id="TypeCaseAlt_1872_1883" title="Referenced at line 122">TypeCaseAlt</a> <a href="#OptTypeAlias_2471_2483" id="OptTypeAlias_1884_1896" title="Referenced at line 121; ../WebDSL-UI.sdf3 line 219">OptTypeAlias</a>

<span class="keyword">context-free syntax</span>

  <a href="#Statement_2868_2877" id="Statement_1921_1930" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="If_1931_1933" title="Not referenced locally, nor via imports">If</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_1948_1951" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_1956_1961" title="Defined at line 13, 45">Block</a>&gt; <span class="cons_String">else</span> &lt;<a href="#Block_145_150" id="Block_1969_1974" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_1982_1991" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="IfNoElse_1992_2000" title="Not referenced locally, nor via imports">IfNoElse</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_2015_2018" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_2023_2028" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_2036_2045" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="IfWithElseIf_2046_2058" title="Not referenced locally, nor via imports">IfWithElseIf</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_2073_2076" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_2081_2086" title="Defined at line 13, 45">Block</a>&gt; &lt;<a href="#ElseIfStatement_1843_1858" id="ElseIfStatement_2089_2104" title="Defined at line 91, 104">ElseIfStatement</a>+&gt; &lt;<a href="#OptElse_1859_1866" id="OptElse_2108_2115" title="Defined at line 91, 105, 106">OptElse</a>&gt;
  &gt;
  <a href="#ElseIfStatement_2089_2104" id="ElseIfStatement_2123_2138" title="Referenced at line 102">ElseIfStatement</a>.<span class="cons_Constructor"><span id="ElseIf_2139_2145" title="Not referenced locally, nor via imports">ElseIf</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_2160_2163" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_2168_2173" title="Defined at line 13, 45">Block</a>&gt;&gt;
  <a href="#OptElse_2108_2115" id="OptElse_2178_2185" title="Referenced at line 102">OptElse</a>.<span class="cons_Constructor"><span id="OptElseSome_2186_2197" title="Not referenced locally, nor via imports">OptElseSome</span></span> = &lt;<span class="cons_String">else</span> &lt;<a href="#Block_145_150" id="Block_2207_2212" title="Defined at line 13, 45">Block</a>&gt;&gt;
  <a href="#OptElse_2108_2115" id="OptElse_2217_2224" title="Referenced at line 102">OptElse</a>.<span class="cons_Constructor"><span id="OptElseNone_2225_2236" title="Not referenced locally, nor via imports">OptElseNone</span></span> = &lt;&gt;

  <a href="#Statement_2868_2877" id="Statement_2245_2254" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="CaseStmt_2255_2263" title="Not referenced locally, nor via imports">CaseStmt</span></span> = &lt;
    <span class="cons_String">case</span> <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_2281_2284" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#Case_1867_1871" id="Case_2303_2307" title="Defined at line 91, 113, 116">Case</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Case_2303_2307" id="Case_2322_2326" title="Referenced at line 110">Case</a>.<span class="cons_Constructor"><span id="CaseAlt_2327_2334" title="Not referenced locally, nor via imports">CaseAlt</span></span> = &lt;
    &lt;<a href="#CaseAltExps_2731_2742" id="CaseAltExps_2344_2355" title="Defined at line 136, 140, 141">CaseAltExps</a>&gt; &lt;<a href="#Block_145_150" id="Block_2358_2363" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Case_2303_2307" id="Case_2371_2375" title="Referenced at line 110">Case</a>.<span class="cons_Constructor"><span id="CaseAltDefault_2376_2390" title="Not referenced locally, nor via imports">CaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> &lt;<a href="#Block_145_150" id="Block_2408_2413" title="Defined at line 13, 45">Block</a>&gt;
  &gt;

  <a href="#Statement_2868_2877" id="Statement_2422_2431" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><a href="#TypeCaseStmt_2878_2890" id="TypeCaseStmt_2432_2444" title="Referenced at line 145">TypeCaseStmt</a></span> = &lt;
    <span class="cons_String">typecase</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_2465_2468" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="#OptTypeAlias_1884_1896" id="OptTypeAlias_2471_2483" title="Defined at line 91, 125, 126">OptTypeAlias</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TypeCaseAlt_1872_1883" id="TypeCaseAlt_2496_2507" title="Defined at line 91, 127, 130">TypeCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#OptTypeAlias_2471_2483" id="OptTypeAlias_2522_2534" title="Referenced at line 121; ../WebDSL-UI.sdf3 line 219">OptTypeAlias</a>.<span class="cons_Constructor"><span id="TypeAlias_2535_2544" title="Not referenced locally, nor via imports">TypeAlias</span></span> = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_2552_2554" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt;&gt;
  <a href="#OptTypeAlias_2471_2483" id="OptTypeAlias_2559_2571" title="Referenced at line 121; ../WebDSL-UI.sdf3 line 219">OptTypeAlias</a>.<span class="cons_Constructor"><span id="OptTypeAliasNone_2572_2588" title="Not referenced locally, nor via imports">OptTypeAliasNone</span></span> = &lt;&gt;
  <a href="#TypeCaseAlt_2496_2507" id="TypeCaseAlt_2596_2607" title="Referenced at line 122">TypeCaseAlt</a>.<span class="cons_Constructor"><span id="TypeCaseAlt_2608_2619" title="Not referenced locally, nor via imports">TypeCaseAlt</span></span> = &lt;
    &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_2629_2633" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; &lt;<a href="#Block_145_150" id="Block_2636_2641" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#TypeCaseAlt_2496_2507" id="TypeCaseAlt_2649_2660" title="Referenced at line 122">TypeCaseAlt</a>.<span class="cons_Constructor"><span id="TypeCaseAltDefault_2661_2679" title="Not referenced locally, nor via imports">TypeCaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> &lt;<a href="#Block_145_150" id="Block_2697_2702" title="Defined at line 13, 45">Block</a>&gt;
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#CaseAltExps_2344_2355" id="CaseAltExps_2731_2742" title="Referenced at line 114">CaseAltExps</a>

<span class="keyword">context-free syntax</span>

  <a href="#CaseAltExps_2344_2355" id="CaseAltExps_2767_2778" title="Referenced at line 114">CaseAltExps</a>.<span class="cons_Constructor"><span id="CaseExps_2779_2787" title="Not referenced locally, nor via imports">CaseExps</span></span> = &lt;&lt;{<a href="#Exp_757_760" id="Exp_2793_2796" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#CaseAltExps_2344_2355" id="CaseAltExps_2807_2818" title="Referenced at line 114">CaseAltExps</a> = &lt;<span class="cons_String">default</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#Statement_1192_1201" id="Statement_2868_2877" title="Defined at line 48, 49, 52, 55, 70, 73, 79, 82, 85, 95, 98, 101, 108, 120, 149, 152, 155, 158, 161, 231, 346">Statement</a>.<span class="cons_Constructor"><a href="#TypeCaseStmt_2432_2444" id="TypeCaseStmt_2878_2890" title="Defined at line 120">TypeCaseStmt</a></span> &lt;2&gt; .&gt; <a href="#Exp_757_760" id="Exp_2898_2901" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Cast_5158_5162" id="Cast_2902_2906" title="Defined at line 253">Cast</a></span>

<span class="keyword">context-free syntax</span>

  <a href="#Statement_2868_2877" id="Statement_2931_2940" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="ForStmt_2941_2948" title="Not referenced locally, nor via imports">ForStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_1099_1104" id="VarId_2964_2969" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_2974_2978" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_2984_2987" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#OptFilter_222_231" id="OptFilter_2990_2999" title="Defined at ../WebDSL-UI.sdf3 line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_3004_3009" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_3017_3026" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="ForStmtInferred_3027_3042" title="Not referenced locally, nor via imports">ForStmtInferred</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_1099_1104" id="VarId_3058_3063" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_3069_3072" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#OptFilter_222_231" id="OptFilter_3075_3084" title="Defined at ../WebDSL-UI.sdf3 line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_3089_3094" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_3102_3111" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="ForAllStmt_3112_3122" title="Not referenced locally, nor via imports">ForAllStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_1099_1104" id="VarId_3138_3143" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_3148_3152" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#OptFilter_222_231" id="OptFilter_3155_3164" title="Defined at ../WebDSL-UI.sdf3 line 16, 142, 143">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_3169_3174" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_3182_3191" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="ForCountStmt_3192_3204" title="Not referenced locally, nor via imports">ForCountStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_1099_1104" id="VarId_3220_3225" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_757_760" id="Exp_3239_3242" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_757_760" id="Exp_3248_3251" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_3256_3261" title="Defined at line 13, 45">Block</a>&gt;
  &gt;
  <a href="#Statement_2868_2877" id="Statement_3269_3278" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="WhileStmt_3279_3288" title="Not referenced locally, nor via imports">WhileStmt</span></span> = &lt;
    <span class="cons_String">while</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_3306_3309" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_145_150" id="Block_3314_3319" title="Defined at line 13, 45">Block</a>&gt;
  &gt;

<span class="keyword">lexical sorts</span>

  <a href="#ThisLex_3815_3822" id="ThisLex_3343_3350" title="Referenced at line 193">ThisLex</a>

<span class="keyword">lexical syntax</span>

  <a href="#ThisLex_3815_3822" id="ThisLex_3370_3377" title="Referenced at line 193">ThisLex</a> = <span class="cons_Lit">"this"</span>

<span class="keyword">lexical restrictions</span>

  <a href="#ThisLex_3343_3350" id="ThisLex_3412_3419" title="Defined at line 167, 171">ThisLex</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <a href="#ConstValue_3573_3583" id="ConstValue_3459_3469" title="Referenced at line 183; ../WebDSL-Ajax.sdf3 line 111; ../WebDSL-Prefetch.sdf3 line 64">ConstValue</a> <a href="#Exp_8809_8812" id="Exp_3470_3473" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a> <a href="#PropAssignment_4196_4210" id="PropAssignment_3474_3488" title="Referenced at line 215">PropAssignment</a> <a href="#ObjectPropertyAssignment_4323_4347" id="ObjectPropertyAssignment_3489_3513" title="Referenced at line 219">ObjectPropertyAssignment</a> <a href="#Mapping_4665_4672" id="Mapping_3514_3521" title="Referenced at line 235">Mapping</a> <a href="#ThisCall_5342_5350" id="ThisCall_3522_3530" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> <a href="#FAExp_3964_3969" id="FAExp_3531_3536" title="Referenced at line 202">FAExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_3561_3564" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="Const_3565_3570" title="Not referenced locally, nor via imports">Const</span></span> = <a href="#ConstValue_3459_3469" id="ConstValue_3573_3583" title="Defined at line 179, 185, 186, 187, 188">ConstValue</a>

  <a href="#ConstValue_3573_3583" id="ConstValue_3587_3597" title="Referenced at line 183; ../WebDSL-Ajax.sdf3 line 111; ../WebDSL-Prefetch.sdf3 line 64">ConstValue</a>.<span class="cons_Constructor"><span id="Int_3598_3601" title="Not referenced locally, nor via imports">Int</span></span> = <a href="../WebDSL-Lexical.sdf3#Int_906_909" id="Int_3604_3607" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 48">Int</a>
  <a href="#ConstValue_3573_3583" id="ConstValue_3610_3620" title="Referenced at line 183; ../WebDSL-Ajax.sdf3 line 111; ../WebDSL-Prefetch.sdf3 line 64">ConstValue</a>.<span class="cons_Constructor"><span id="Long_3621_3625" title="Not referenced locally, nor via imports">Long</span></span> = <a href="../WebDSL-Lexical.sdf3#Long_910_914" id="Long_3628_3632" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 49">Long</a>
  <a href="#ConstValue_3573_3583" id="ConstValue_3635_3645" title="Referenced at line 183; ../WebDSL-Ajax.sdf3 line 111; ../WebDSL-Prefetch.sdf3 line 64">ConstValue</a>.<span class="cons_Constructor"><span id="Float_3646_3651" title="Not referenced locally, nor via imports">Float</span></span> = <a href="../WebDSL-Lexical.sdf3#Float_915_920" id="Float_3654_3659" title="Defined at ../WebDSL-Lexical.sdf3 line 44, 50, 55">Float</a>
  <a href="#ConstValue_3573_3583" id="ConstValue_3662_3672" title="Referenced at line 183; ../WebDSL-Ajax.sdf3 line 111; ../WebDSL-Prefetch.sdf3 line 64">ConstValue</a>.<span class="cons_Constructor"><span id="StringConst_3673_3684" title="Not referenced locally, nor via imports">StringConst</span></span> = <a href="../WebDSL-Lexical.sdf3#String_1591_1597" id="String_3687_3693" title="Defined at ../WebDSL-Lexical.sdf3 line 69, 75">String</a>

  <a href="#Exp_8809_8812" id="Exp_3697_3700" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Var_3987_3990" id="Var_3701_3704" title="Referenced at line 202; ../WebDSL-Ajax.sdf3 line 98">Var</a></span> = <a href="#VarId_1099_1104" id="VarId_3707_3712" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>
  <a href="#Exp_8809_8812" id="Exp_3715_3718" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#FieldAccess_8019_8030" id="FieldAccess_3719_3730" title="Referenced at line 354">FieldAccess</a></span> = &lt;&lt;<a href="#FAExp_3531_3536" id="FAExp_3735_3740" title="Defined at line 179, 195, 196, 197, 198">FAExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PropertyId_4036_4046" id="PropertyId_3745_3755" title="Defined at line 207">PropertyId</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_3760_3763" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#CollectionIndex_8039_8054" id="CollectionIndex_3764_3779" title="Referenced at line 355">CollectionIndex</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_3784_3787" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">[</span> &lt;<a href="#Exp_757_760" id="Exp_3792_3795" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_3802_3805" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="This_3806_3810" title="Not referenced locally, nor via imports">This</span></span> = &lt;&lt;<a href="#ThisLex_3343_3350" id="ThisLex_3815_3822" title="Defined at line 167, 171">ThisLex</a>&gt;&gt;

  <a href="#FAExp_3964_3969" id="FAExp_3828_3833" title="Referenced at line 202">FAExp</a>.<span class="cons_Constructor"><a href="#FAExp_3970_3975" id="FAExp_3834_3839" title="Referenced at line 202">FAExp</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_3844_3847" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#FAExp_3964_3969" id="FAExp_3852_3857" title="Referenced at line 202">FAExp</a>.<span class="cons_Constructor"><span id="FAVar_3858_3863" title="Not referenced locally, nor via imports">FAVar</span></span> = &lt;&lt;<a href="#FAVarId_4068_4075" id="FAVarId_3868_3875" title="Defined at line 209, 210">FAVarId</a>&gt;&gt;
  <a href="#FAExp_3964_3969" id="FAExp_3880_3885" title="Referenced at line 202">FAExp</a>.<span class="cons_Constructor"><span id="FAGlobal_3886_3894" title="Not referenced locally, nor via imports">FAGlobal</span></span> = &lt;<span class="cons_String">global</span>&gt;
  <a href="#FAExp_3964_3969" id="FAExp_3908_3913" title="Referenced at line 202">FAExp</a>.<span class="cons_Constructor"><span id="FASession_3914_3923" title="Not referenced locally, nor via imports">FASession</span></span> = &lt;<span class="cons_String">session</span>&gt;

<span class="keyword">context-free priorities</span>

  <a href="#FAExp_3531_3536" id="FAExp_3964_3969" title="Defined at line 179, 195, 196, 197, 198">FAExp</a>.<span class="cons_Constructor"><a href="#FAExp_3834_3839" id="FAExp_3970_3975" title="Defined at line 195">FAExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_757_760" id="Exp_3983_3986" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Var_3701_3704" id="Var_3987_3990" title="Defined at line 190">Var</a></span>

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_4010_4015" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"this"</span> {<span class="keyword">reject</span>}
  <a href="#PropertyId_3745_3755" id="PropertyId_4036_4046" title="Referenced at line 191; ../WebDSL-DataModel.sdf3 line 94">PropertyId</a> = <span class="cons_Lit">"this"</span> {<span class="keyword">reject</span>}

  <a href="#FAVarId_3868_3875" id="FAVarId_4068_4075" title="Referenced at line 196">FAVarId</a> = <span class="cons_Lit">"global"</span> {<span class="keyword">reject</span>}
  <a href="#FAVarId_3868_3875" id="FAVarId_4098_4105" title="Referenced at line 196">FAVarId</a> = <span class="cons_Lit">"session"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_4151_4154" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Expand.sdf3#ObjectCreation_1135_1149" id="ObjectCreation_4155_4169" title="Referenced at ../WebDSL-Expand.sdf3 line 55">ObjectCreation</a></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#SimpleSortLex_3805_3818" id="SimpleSortLex_4174_4187" title="Defined at ../WebDSL-Lexical.sdf3 line 167, 171">SimpleSortLex</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#PropAssignment_3474_3488" id="PropAssignment_4196_4210" title="Defined at line 179, 218, 219">PropAssignment</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#PropAssignment_4196_4210" id="PropAssignment_4221_4235" title="Referenced at line 215">PropAssignment</a>.<span class="cons_Constructor"><span id="PropAssignment_4236_4250" title="Not referenced locally, nor via imports">PropAssignment</span></span> = &lt;&lt;<a href="#ObjectPropertyAssignment_3489_3513" id="ObjectPropertyAssignment_4255_4279" title="Defined at line 179, 220">ObjectPropertyAssignment</a>&gt;&gt;
  <a href="#PropAssignment_4196_4210" id="PropAssignment_4284_4298" title="Referenced at line 215">PropAssignment</a>.<span class="cons_Constructor"><span id="PropAssignmentComma_4299_4318" title="Not referenced locally, nor via imports">PropAssignmentComma</span></span> = &lt;&lt;<a href="#ObjectPropertyAssignment_3489_3513" id="ObjectPropertyAssignment_4323_4347" title="Defined at line 179, 220">ObjectPropertyAssignment</a>&gt; <span class="cons_String">,</span>&gt;
  <a href="#ObjectPropertyAssignment_4323_4347" id="ObjectPropertyAssignment_4354_4378" title="Referenced at line 219">ObjectPropertyAssignment</a>.<span class="cons_Constructor"><span id="ObjectPropertyAssignment_4379_4403" title="Not referenced locally, nor via imports">ObjectPropertyAssignment</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_4413_4415" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_757_760" id="Exp_4421_4424" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;
  &gt;

/*
  <span class="keyword">used in sdf</span>2 <span class="keyword">definition as workaround to get working autocompletion</span>:
  <span class="keyword">ObjectPropertyAssignment</span>.<span class="keyword">IncompleteObjectPropertyAssignment</span> = &lt;
    &lt;<span class="keyword">Id</span>&gt;
  &gt;
*/

  <a href="#Statement_2868_2877" id="Statement_4590_4599" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="Assignment_4600_4610" title="Not referenced locally, nor via imports">Assignment</span></span> = &lt;
    &lt;<a href="#Exp_757_760" id="Exp_4620_4623" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_757_760" id="Exp_4629_4632" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">;</span>
  &gt;

  <a href="#Exp_8809_8812" id="Exp_4643_4646" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="MapCreation_4647_4658" title="Not referenced locally, nor via imports">MapCreation</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#Mapping_3514_3521" id="Mapping_4665_4672" title="Defined at line 179, 236">Mapping</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#Mapping_4665_4672" id="Mapping_4680_4687" title="Referenced at line 235">Mapping</a>.<span class="cons_Constructor"><span id="Mapping_4688_4695" title="Not referenced locally, nor via imports">Mapping</span></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_4700_4703" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">-</span>\&gt; &lt;<a href="#Exp_757_760" id="Exp_4710_4713" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_4718_4721" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="ListCreation_4722_4734" title="Not referenced locally, nor via imports">ListCreation</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#Exp_757_760" id="Exp_4742_4745" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_4758_4761" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-UI.sdf3#SetCreation_13903_13914" id="SetCreation_4762_4773" title="Referenced at ../WebDSL-UI.sdf3 line 481">SetCreation</a></span> = &lt;<span class="cons_String">{</span> &lt;{<a href="#Exp_757_760" id="Exp_4781_4784" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">}</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_4797_4800" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="TypedListCreation_4801_4818" title="Not referenced locally, nor via imports">TypedListCreation</span></span> = &lt;<span class="cons_String">List</span> \&lt; &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_4831_4835" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; \&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_4844_4847" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_4860_4863" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="TypedSetCreation_4864_4880" title="Not referenced locally, nor via imports">TypedSetCreation</span></span> = &lt;<span class="cons_String">Set</span> \&lt; &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_4892_4896" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; \&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_4905_4908" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_4938_4943" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"List"</span> {<span class="keyword">reject</span>}
  <a href="#VarId_7075_7080" id="VarId_4964_4969" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"Set"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_5011_5014" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a> = <a href="#ThisCall_1590_1598" id="ThisCall_5017_5025" title="Defined at line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a>
  <a href="#ThisCall_5342_5350" id="ThisCall_5028_5036" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a>.<span class="cons_Constructor"><span id="ThisCall_5037_5045" title="Not referenced locally, nor via imports">ThisCall</span></span> = &lt;&lt;<a href="#FunId_1382_1387" id="FunId_5050_5055" title="Defined at line 62">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_5061_5064" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_5077_5080" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Call_8006_8010" id="Call_5081_5085" title="Referenced at line 353">Call</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5090_5093" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_5098_5100" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_5106_5109" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_5122_5125" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#IsA_8084_8087" id="IsA_5126_5129" title="Referenced at line 358">IsA</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5134_5137" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">is</span> <span class="cons_String">a</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_5145_5149" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_5154_5157" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Cast_8096_8100" id="Cast_5158_5162" title="Referenced at line 359; ../WebDSL-UI.sdf3 line 246">Cast</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5167_5170" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">as</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_5176_5180" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_5185_5188" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#InColl_8109_8115" id="InColl_5189_5195" title="Referenced at line 360">InColl</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5200_5203" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_5209_5212" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;

  <a href="#Exp_8809_8812" id="Exp_5218_5221" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#IfExp_8493_8498" id="IfExp_5222_5227" title="Referenced at line 387">IfExp</a></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_5237_5240" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Exp_757_760" id="Exp_5245_5248" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">else</span> &lt;<a href="#Exp_757_760" id="Exp_5256_5259" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;

  <a href="../WebDSL-UI.sdf3#OutputShorthand_11052_11067" id="OutputShorthand_5265_5280" title="Referenced at ../WebDSL-UI.sdf3 line 385">OutputShorthand</a>.<span class="cons_Constructor"><span id="OutputShorthand_5281_5296" title="Not referenced locally, nor via imports">OutputShorthand</span></span> = &lt;<span class="cons_String">~</span> <span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_5305_5308" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#SimpleExp_5378_5387" id="SimpleExp_5315_5324" title="Referenced at line 260">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleThisCall_5325_5339" title="Not referenced locally, nor via imports">SimpleThisCall</span></span> = <a href="#ThisCall_1590_1598" id="ThisCall_5342_5350" title="Defined at line 77, 179, 250, 406, 407, 408, 409, 411, 412">ThisCall</a>
  <a href="#SimpleExp_5378_5387" id="SimpleExp_5353_5362" title="Referenced at line 260">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleCall_5363_5373" title="Not referenced locally, nor via imports">SimpleCall</span></span> = &lt;&lt;<a href="#SimpleExp_5315_5324" id="SimpleExp_5378_5387" title="Defined at line 259, 260">SimpleExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_5392_5394" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_5400_5403" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_5433_5438" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"if"</span> {<span class="keyword">reject</span>}
  <a href="#VarId_7075_7080" id="VarId_5457_5462" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"else"</span> {<span class="keyword">reject</span>}

<span class="keyword">syntax</span>

  <a href="../WebDSL-UI.sdf3#StringPart_11426_11436" id="StringPart_5492_5502" title="Referenced at ../WebDSL-UI.sdf3 line 403">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpExp_5506_5515" title="Not referenced locally, nor via imports">InterpExp</span></span> = <span class="cons_Lit">"~"</span> <span class="cons_Lit">"("</span> <a href="#Exp_757_760" id="Exp_5526_5529" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a><span class="keyword">-CF</span> <span class="cons_Lit">")"</span>

<span class="keyword">context-free restrictions</span>

  <span class="cons_Lit">"in"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free sorts</span>

  <a href="#OptGroupBy_6517_6527" id="OptGroupBy_5613_5623" title="Referenced at line 309">OptGroupBy</a> <a href="#GroupBy_7158_7165" id="GroupBy_5624_5631" title="Referenced at line 318">GroupBy</a> <a href="#ForExp_7291_7297" id="ForExp_5632_5638" title="Referenced at line 322">ForExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_5663_5666" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Eq_8284_8286" id="Eq_5667_5669" title="Referenced at line 376; ../WebDSL-Search.sdf3 line 263">Eq</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5674_5677" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">==</span> &lt;<a href="#Exp_757_760" id="Exp_5683_5686" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_5698_5701" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#NotEq_8295_8300" id="NotEq_5702_5707" title="Referenced at line 377; ../WebDSL-Search.sdf3 line 264">NotEq</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5712_5715" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#Exp_757_760" id="Exp_5721_5724" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_5736_5739" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#LargerThan_8309_8319" id="LargerThan_5740_5750" title="Referenced at line 378; ../WebDSL-Search.sdf3 line 265">LargerThan</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5755_5758" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; \&gt; &lt;<a href="#Exp_757_760" id="Exp_5764_5767" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_5779_5782" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#LargerThanOrEqual_8328_8345" id="LargerThanOrEqual_5783_5800" title="Referenced at line 379; ../WebDSL-Search.sdf3 line 266">LargerThanOrEqual</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5805_5808" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#Exp_757_760" id="Exp_5815_5818" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_5830_5833" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThan_8354_8365" id="SmallerThan_5834_5845" title="Referenced at line 380; ../WebDSL-Search.sdf3 line 267">SmallerThan</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5850_5853" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; \&lt; &lt;<a href="#Exp_757_760" id="Exp_5859_5862" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_5874_5877" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThanOrEqual_8374_8392" id="SmallerThanOrEqual_5878_5896" title="Referenced at line 381; ../WebDSL-Search.sdf3 line 268">SmallerThanOrEqual</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_5901_5904" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#Exp_757_760" id="Exp_5911_5914" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}

  <a href="#Exp_8809_8812" id="Exp_5927_5930" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="True_5931_5935" title="Not referenced locally, nor via imports">True</span></span> = &lt;<span class="cons_String">true</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_5947_5950" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="False_5951_5956" title="Not referenced locally, nor via imports">False</span></span> = &lt;<span class="cons_String">false</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_5969_5972" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="Null_5973_5977" title="Not referenced locally, nor via imports">Null</span></span> = &lt;<span class="cons_String">null</span>&gt;

<span class="keyword">lexical syntax</span>

  <a href="#VarId_7075_7080" id="VarId_6006_6011" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <a href="#VarId_7075_7080" id="VarId_6032_6037" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <a href="#VarId_7075_7080" id="VarId_6059_6064" title="Referenced at line 316; ../WebDSL-DataModel.sdf3 line 81">VarId</a> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_6086_6096" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_6117_6127" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_6149_6159" title="Not referenced locally, nor via imports">TemplateId</span> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_6202_6205" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#And_8413_8416" id="And_6206_6209" title="Referenced at line 383">And</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_6214_6217" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">&amp;&amp;</span> &lt;<a href="#Exp_757_760" id="Exp_6223_6226" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_6238_6241" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Or_8435_8437" id="Or_6242_6244" title="Referenced at line 384">Or</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_6249_6252" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">||</span> &lt;<a href="#Exp_757_760" id="Exp_6258_6261" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_6273_6276" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Not_8134_8137" id="Not_6277_6280" title="Referenced at line 363">Not</a></span> = &lt;<span class="cons_String">!</span> &lt;<a href="#Exp_757_760" id="Exp_6287_6290" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_6295_6298" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a> = &lt;<span class="cons_String">(</span> &lt;<a href="#Exp_757_760" id="Exp_6305_6308" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}
  <a href="#ForExp_7291_7297" id="ForExp_6325_6331" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExp_6332_6338" title="Not referenced locally, nor via imports">ForExp</span></span>                           = &lt;<span class="cons_String">[</span> &lt;<a href="#Exp_757_760" id="Exp_6371_6374" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">|</span> &lt;<a href="#VarId_1099_1104" id="VarId_6379_6384" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_6389_6393" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6399_6402" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#OptFilter_222_231" id="OptFilter_6405_6414" title="Defined at ../WebDSL-UI.sdf3 line 16, 142, 143">OptFilter</a>&gt; &lt;<a href="#OptGroupBy_5613_5623" id="OptGroupBy_6417_6427" title="Defined at line 277, 318, 319">OptGroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6434_6440" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpInferred_6441_6455" title="Not referenced locally, nor via imports">ForExpInferred</span></span>                   = &lt;<span class="cons_String">[</span> &lt;<a href="#Exp_757_760" id="Exp_6480_6483" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">|</span> &lt;<a href="#VarId_1099_1104" id="VarId_6488_6493" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6499_6502" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#OptFilter_222_231" id="OptFilter_6505_6514" title="Defined at ../WebDSL-UI.sdf3 line 16, 142, 143">OptFilter</a>&gt; &lt;<a href="#OptGroupBy_5613_5623" id="OptGroupBy_6517_6527" title="Defined at line 277, 318, 319">OptGroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6534_6540" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShort_6541_6552" title="Not referenced locally, nor via imports">ForExpShort</span></span>                      = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6580_6585" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_6590_6594" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6600_6603" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6610_6616" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortFilter_6617_6634" title="Not referenced locally, nor via imports">ForExpShortFilter</span></span>                = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6656_6661" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_6666_6670" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6676_6679" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#Filter_3195_3201" id="Filter_6682_6688" title="Defined at ../WebDSL-UI.sdf3 line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6695_6701" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortFilterInferred_6702_6727" title="Not referenced locally, nor via imports">ForExpShortFilterInferred</span></span>        = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6741_6746" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6752_6755" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#Filter_3195_3201" id="Filter_6758_6764" title="Defined at ../WebDSL-UI.sdf3 line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6771_6777" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortGroupBy_6778_6796" title="Not referenced locally, nor via imports">ForExpShortGroupBy</span></span>               = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6817_6822" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_6827_6831" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6837_6840" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="#GroupBy_5624_5631" id="GroupBy_6843_6850" title="Defined at line 277, 320">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6857_6863" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortGroupByInferred_6864_6890" title="Not referenced locally, nor via imports">ForExpShortGroupByInferred</span></span>       = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6903_6908" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_6914_6917" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="#GroupBy_5624_5631" id="GroupBy_6920_6927" title="Defined at line 277, 320">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_6934_6940" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortFilterGroupBy_6941_6965" title="Not referenced locally, nor via imports">ForExpShortFilterGroupBy</span></span>         = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_6980_6985" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3#Sort_195_199" id="Sort_6990_6994" title="Defined at ../WebDSL-Core.sdf3 line 10, 14, 15, 16, 17, 18, 19, 20">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_7000_7003" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#Filter_3195_3201" id="Filter_7006_7012" title="Defined at ../WebDSL-UI.sdf3 line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>&gt; &lt;<a href="#GroupBy_5624_5631" id="GroupBy_7015_7022" title="Defined at line 277, 320">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#ForExp_7291_7297" id="ForExp_7029_7035" title="Referenced at line 322">ForExp</a>.<span class="cons_Constructor"><span id="ForExpShortFilterGroupByInferred_7036_7068" title="Not referenced locally, nor via imports">ForExpShortFilterGroupByInferred</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_1099_1104" id="VarId_7075_7080" title="Defined at line 41, 61, 206, 244, 245, 264, 265, 294, 295, 296">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_757_760" id="Exp_7086_7089" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3#Filter_3195_3201" id="Filter_7092_7098" title="Defined at ../WebDSL-UI.sdf3 line 125, 129, 130, 131, 132, 133, 134, 135">Filter</a>&gt; &lt;<a href="#GroupBy_5624_5631" id="GroupBy_7101_7108" title="Defined at line 277, 320">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_7115_7118" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a> = <a href="#ForExp_5632_5638" id="ForExp_7121_7127" title="Defined at line 277, 308, 309, 310, 311, 312, 313, 314, 315, 316">ForExp</a>
  <a href="#OptGroupBy_6517_6527" id="OptGroupBy_7130_7140" title="Referenced at line 309">OptGroupBy</a>.<span class="cons_Constructor"><span id="OptGroupBySome_7141_7155" title="Not referenced locally, nor via imports">OptGroupBySome</span></span> = <a href="#GroupBy_5624_5631" id="GroupBy_7158_7165" title="Defined at line 277, 320">GroupBy</a>
  <a href="#OptGroupBy_6517_6527" id="OptGroupBy_7168_7178" title="Referenced at line 309">OptGroupBy</a>.<span class="cons_Constructor"><span id="OptGroupByNone_7179_7193" title="Not referenced locally, nor via imports">OptGroupByNone</span></span> = &lt;&gt;
  <a href="#GroupBy_7158_7165" id="GroupBy_7201_7208" title="Referenced at line 318">GroupBy</a>.<span class="cons_Constructor"><span id="GroupBy_7209_7216" title="Not referenced locally, nor via imports">GroupBy</span></span> = &lt;<span class="cons_String">group</span> <span class="cons_String">by</span> &lt;<a href="#Exp_757_760" id="Exp_7230_7233" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_7238_7241" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="AndForExp_7242_7251" title="Not referenced locally, nor via imports">AndForExp</span></span> = &lt;<span class="cons_String">And</span> &lt;<a href="#ForExp_5632_5638" id="ForExp_7260_7266" title="Defined at line 277, 308, 309, 310, 311, 312, 313, 314, 315, 316">ForExp</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_7271_7274" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="OrForExp_7275_7283" title="Not referenced locally, nor via imports">OrForExp</span></span> = &lt;<span class="cons_String">Or</span> &lt;<a href="#ForExp_5632_5638" id="ForExp_7291_7297" title="Defined at line 277, 308, 309, 310, 311, 312, 313, 314, 315, 316">ForExp</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_7302_7305" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Mul_8162_8165" id="Mul_7306_7309" title="Referenced at line 366">Mul</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_7314_7317" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">*</span> &lt;<a href="#Exp_757_760" id="Exp_7322_7325" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_7337_7340" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Div_8174_8177" id="Div_7341_7344" title="Referenced at line 367">Div</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_7349_7352" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">/</span> &lt;<a href="#Exp_757_760" id="Exp_7357_7360" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_7372_7375" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Mod_8186_8189" id="Mod_7376_7379" title="Referenced at line 368">Mod</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_7384_7387" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">%</span> &lt;<a href="#Exp_757_760" id="Exp_7392_7395" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_7407_7410" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Add_8213_8216" id="Add_7411_7414" title="Referenced at line 371; ../WebDSL-Search.sdf3 line 290">Add</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_7419_7422" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">+</span> &lt;<a href="#Exp_757_760" id="Exp_7427_7430" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <a href="#Exp_8809_8812" id="Exp_7442_7445" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#Sub_8225_8228" id="Sub_7446_7449" title="Referenced at line 372; ../WebDSL-Search.sdf3 line 289">Sub</a></span> = &lt;&lt;<a href="#Exp_757_760" id="Exp_7454_7457" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt; <span class="cons_String">-</span> &lt;<a href="#Exp_757_760" id="Exp_7462_7465" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt; {<span class="keyword">left</span>}

<span class="keyword">context-free sorts</span>

  <a href="#HqlExp_7563_7569" id="HqlExp_7498_7504" title="Referenced at line 335">HqlExp</a> <a href="#LimitValueExp_7764_7777" id="LimitValueExp_7505_7518" title="Referenced at line 339">LimitValueExp</a> <a href="#DslExp_7863_7869" id="DslExp_7519_7525" title="Referenced at line 342; ../HQL.sdf3 line 143">DslExp</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_7550_7553" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><a href="#HqlExp_8450_8456" id="HqlExp_7554_7560" title="Referenced at line 385">HqlExp</a></span> = <a href="#HqlExp_7498_7504" id="HqlExp_7563_7569" title="Defined at line 331, 337, 338, 339">HqlExp</a>

  <a href="#HqlExp_7563_7569" id="HqlExp_7573_7579" title="Referenced at line 335">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQuery_7580_7588" title="Not referenced locally, nor via imports">HqlQuery</span></span>             = &lt;&lt;<a href="../HQL.sdf3#HQLQueryRule_638_650" id="HQLQueryRule_7605_7617" title="Defined at ../HQL.sdf3 line 31, 42">HQLQueryRule</a>&gt;&gt;
  <a href="#HqlExp_7563_7569" id="HqlExp_7622_7628" title="Referenced at line 335">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQueryLimit_7629_7642" title="Not referenced locally, nor via imports">HqlQueryLimit</span></span>        = &lt;&lt;<a href="../HQL.sdf3#HQLQueryRule_638_650" id="HQLQueryRule_7654_7666" title="Defined at ../HQL.sdf3 line 31, 42">HQLQueryRule</a>&gt; <span class="cons_String">limit</span> &lt;<a href="#LimitValueExp_7505_7518" id="LimitValueExp_7675_7688" title="Defined at line 331, 341, 342">LimitValueExp</a>&gt;&gt;
  <a href="#HqlExp_7563_7569" id="HqlExp_7693_7699" title="Referenced at line 335">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQueryLimitOffset_7700_7719" title="Not referenced locally, nor via imports">HqlQueryLimitOffset</span></span>  = &lt;&lt;<a href="../HQL.sdf3#HQLQueryRule_638_650" id="HQLQueryRule_7725_7737" title="Defined at ../HQL.sdf3 line 31, 42">HQLQueryRule</a>&gt; <span class="cons_String">limit</span> &lt;<a href="#LimitValueExp_7505_7518" id="LimitValueExp_7746_7759" title="Defined at line 331, 341, 342">LimitValueExp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#LimitValueExp_7505_7518" id="LimitValueExp_7764_7777" title="Defined at line 331, 341, 342">LimitValueExp</a>&gt;&gt;

  <a href="#LimitValueExp_7764_7777" id="LimitValueExp_7783_7796" title="Referenced at line 339">LimitValueExp</a>.<span class="cons_Constructor"><span id="LimitValueExp_7797_7810" title="Not referenced locally, nor via imports">LimitValueExp</span></span>     = &lt;&lt;<a href="#Exp_757_760" id="Exp_7819_7822" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;
  <a href="#LimitValueExp_7764_7777" id="LimitValueExp_7827_7840" title="Referenced at line 339">LimitValueExp</a>.<span class="cons_Constructor"><span id="LimitValueDslExp_7841_7857" title="Not referenced locally, nor via imports">LimitValueDslExp</span></span>  = &lt;&lt;<a href="#DslExp_7519_7525" id="DslExp_7863_7869" title="Defined at line 331, 344">DslExp</a>&gt;&gt;

  <a href="#DslExp_7863_7869" id="DslExp_7875_7881" title="Referenced at line 342; ../HQL.sdf3 line 143">DslExp</a>.<span class="cons_Constructor"><span id="DslExp_7882_7888" title="Not referenced locally, nor via imports">DslExp</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_757_760" id="Exp_7895_7898" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>&gt;&gt;

  <a href="#Statement_2868_2877" id="Statement_7904_7913" title="Referenced at line 145">Statement</a>.<span class="cons_Constructor"><span id="HqlStatement_7914_7926" title="Not referenced locally, nor via imports">HqlStatement</span></span> = &lt;
    &lt;<a href="../HQL.sdf3#HQLDeleteStatement_586_604" id="HQLDeleteStatement_7936_7954" title="Defined at ../HQL.sdf3 line 31, 40">HQLDeleteStatement</a>&gt; <span class="cons_String">;</span>
  &gt;

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span> :
    <a href="#Exp_757_760" id="Exp_8002_8005" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Call_5081_5085" id="Call_8006_8010" title="Defined at line 251">Call</a></span>
    <a href="#Exp_757_760" id="Exp_8015_8018" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#FieldAccess_3719_3730" id="FieldAccess_8019_8030" title="Defined at line 191">FieldAccess</a></span>
    <a href="#Exp_757_760" id="Exp_8035_8038" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#CollectionIndex_3764_3779" id="CollectionIndex_8039_8054" title="Defined at line 192">CollectionIndex</a></span>
  } &gt;
  {<span class="keyword">non-assoc</span> :
    <a href="#Exp_757_760" id="Exp_8080_8083" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#IsA_5126_5129" id="IsA_8084_8087" title="Defined at line 252">IsA</a></span>
    <a href="#Exp_757_760" id="Exp_8092_8095" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Cast_5158_5162" id="Cast_8096_8100" title="Defined at line 253">Cast</a></span>
    <a href="#Exp_757_760" id="Exp_8105_8108" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#InColl_5189_5195" id="InColl_8109_8115" title="Defined at line 254">InColl</a></span>
  } &gt;
  {
    <a href="#Exp_757_760" id="Exp_8130_8133" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Not_6277_6280" id="Not_8134_8137" title="Defined at line 306">Not</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#Exp_757_760" id="Exp_8158_8161" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Mul_7306_7309" id="Mul_8162_8165" title="Defined at line 323">Mul</a></span>
    <a href="#Exp_757_760" id="Exp_8170_8173" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Div_7341_7344" id="Div_8174_8177" title="Defined at line 324">Div</a></span>
    <a href="#Exp_757_760" id="Exp_8182_8185" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Mod_7376_7379" id="Mod_8186_8189" title="Defined at line 325">Mod</a></span>
  } &gt;
  {<span class="keyword">left</span>:
    <a href="#Exp_757_760" id="Exp_8209_8212" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Add_7411_7414" id="Add_8213_8216" title="Defined at line 326">Add</a></span>
    <a href="#Exp_757_760" id="Exp_8221_8224" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Sub_7446_7449" id="Sub_8225_8228" title="Defined at line 327">Sub</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_757_760" id="Exp_8245_8248" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Search.sdf3#RetrievalExp_8333_8345" id="RetrievalExp_8249_8261" title="Defined at ../WebDSL-Search.sdf3 line 251">RetrievalExp</a></span> } &gt;
  {<span class="keyword">left</span> :
    <a href="#Exp_757_760" id="Exp_8280_8283" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Eq_5667_5669" id="Eq_8284_8286" title="Defined at line 281">Eq</a></span>
    <a href="#Exp_757_760" id="Exp_8291_8294" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#NotEq_5702_5707" id="NotEq_8295_8300" title="Defined at line 282">NotEq</a></span>
    <a href="#Exp_757_760" id="Exp_8305_8308" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#LargerThan_5740_5750" id="LargerThan_8309_8319" title="Defined at line 283">LargerThan</a></span>
    <a href="#Exp_757_760" id="Exp_8324_8327" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#LargerThanOrEqual_5783_5800" id="LargerThanOrEqual_8328_8345" title="Defined at line 284">LargerThanOrEqual</a></span>
    <a href="#Exp_757_760" id="Exp_8350_8353" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThan_5834_5845" id="SmallerThan_8354_8365" title="Defined at line 285">SmallerThan</a></span>
    <a href="#Exp_757_760" id="Exp_8370_8373" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThanOrEqual_5878_5896" id="SmallerThanOrEqual_8374_8392" title="Defined at line 286">SmallerThanOrEqual</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_757_760" id="Exp_8409_8412" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#And_6206_6209" id="And_8413_8416" title="Defined at line 304">And</a></span> } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_757_760" id="Exp_8431_8434" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#Or_6242_6244" id="Or_8435_8437" title="Defined at line 305">Or</a></span> } &gt;
  { <a href="#Exp_757_760" id="Exp_8446_8449" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#HqlExp_7554_7560" id="HqlExp_8450_8456" title="Defined at line 335">HqlExp</a></span> } &gt;
  { <a href="#Exp_757_760" id="Exp_8465_8468" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Search.sdf3#SearcherDef_4874_4885" id="SearcherDef_8469_8480" title="Defined at ../WebDSL-Search.sdf3 line 171">SearcherDef</a></span> } &gt;
  { <a href="#Exp_757_760" id="Exp_8489_8492" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a>.<span class="cons_Constructor"><a href="#IfExp_5222_5227" id="IfExp_8493_8498" title="Defined at line 256">IfExp</a></span> }

<span class="keyword">context-free sorts</span>

  <a href="#EmailCall_9159_9168" id="EmailCall_8524_8533" title="Referenced at line 409">EmailCall</a>

<span class="keyword">context-free syntax</span>

  <a href="#Exp_8809_8812" id="Exp_8558_8561" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="RenderEmailFunctionCall_8562_8585" title="Not referenced locally, nor via imports">RenderEmailFunctionCall</span></span> = &lt;<span class="cons_String">renderemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_8604_8613" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_8620_8623" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="EmailFunctionCall_8624_8641" title="Not referenced locally, nor via imports">EmailFunctionCall</span></span> = &lt;<span class="cons_String">email</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_8654_8663" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_8670_8673" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="EmailFunctionCallAlt_8674_8694" title="Not referenced locally, nor via imports">EmailFunctionCallAlt</span></span> = &lt;<span class="cons_String">email</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_8705_8714" title="Defined at line 391, 399">EmailCall</a>&gt;&gt;
  <a href="#Exp_8809_8812" id="Exp_8719_8722" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="SendEmailFunctionCall_8723_8744" title="Not referenced locally, nor via imports">SendEmailFunctionCall</span></span> = &lt;<span class="cons_String">sendemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_8761_8770" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#EmailCall_9159_9168" id="EmailCall_8777_8786" title="Referenced at line 409">EmailCall</a>.<span class="cons_Constructor"><span id="EmailCall_8787_8796" title="Not referenced locally, nor via imports">EmailCall</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3#Id_86_88" id="Id_8801_8803" title="Defined at ../WebDSL-Lexical.sdf3 line 5, 16">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_757_760" id="Exp_8809_8812" title="Defined at line 34, 35, 36, 37, 179, 183, 190, 191, 192, 193, 214, 235, 237, 238, 239, 240, 249, 251, 252, 253, 254, 256, 281, 282, 283, 284, 285, 286, 288, 289, 290, 304, 305, 306, 307, 317, 321, 322, 323, 324, 325, 326, 327, 335, 395, 396, 397, 398, 401, 402">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <a href="#Exp_8809_8812" id="Exp_8826_8829" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="RenderTemplateFunctionCall_8830_8856" title="Not referenced locally, nor via imports">RenderTemplateFunctionCall</span></span> = &lt;<span class="cons_String">rendertemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3#TemplateCall_4370_4382" id="TemplateCall_8878_8890" title="Defined at ../HQL.sdf3 line 135, 227">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#Exp_8809_8812" id="Exp_8897_8900" title="Referenced at line 399; ../WebDSL-AccessControl.sdf3 line 85; ../WebDSL-Core.sdf3 line 40; ../WebDSL-DataModel.sdf3 line 126; ../WebDSL-TimeInterval.sdf3 line 24; ../WebDSL-XML.sdf3 line 80">Exp</a>.<span class="cons_Constructor"><span id="ValidateTemplateFunctionCall_8901_8929" title="Not referenced locally, nor via imports">ValidateTemplateFunctionCall</span></span> = &lt;<span class="cons_String">validatetemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3#TemplateCall_4370_4382" id="TemplateCall_8953_8965" title="Defined at ../HQL.sdf3 line 135, 227">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free syntax</span>

  <a href="#ThisCall_5342_5350" id="ThisCall_8994_9002" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">renderemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_9021_9030" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_5342_5350" id="ThisCall_9046_9054" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">email</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_9067_9076" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_5342_5350" id="ThisCall_9092_9100" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">email</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_9111_9120" title="Defined at line 391, 399">EmailCall</a>&gt;&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_5342_5350" id="ThisCall_9134_9142" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">sendemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_8524_8533" id="EmailCall_9159_9168" title="Defined at line 391, 399">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <a href="#ThisCall_5342_5350" id="ThisCall_9185_9193" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">rendertemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3#TemplateCall_4370_4382" id="TemplateCall_9215_9227" title="Defined at ../HQL.sdf3 line 135, 227">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <a href="#ThisCall_5342_5350" id="ThisCall_9243_9251" title="Referenced at line 259; ../WebDSL-UI.sdf3 line 390">ThisCall</a> = &lt;<span class="cons_String">validatetemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3#TemplateCall_4370_4382" id="TemplateCall_9275_9287" title="Defined at ../HQL.sdf3 line 135, 227">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>