---
title: WebDSL-Action.sdf3
hide:
  - toc
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
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-Action_1_8" title="a definition with multiple references" data-urls="../HQL.sdf3/#WebDSL-Action line 5_3; ../WebDSL-AccessControl.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Ajax.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Attributes.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Core.sdf3/#WebDSL-Action line 4_3; ../WebDSL-DataModel.sdf3/#WebDSL-Action line 4_3; ../WebDSL-DataValidation.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Dispatch.sdf3/#WebDSL-Action line 4_3; ../WebDSL-EntityDerive.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Exception.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Expand.sdf3/#WebDSL-Action line 4_3; ../WebDSL-JavaScript.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Prefetch.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Regex.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Routing.sdf3/#WebDSL-Action line 5_3; ../WebDSL-Search.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Service.sdf3/#WebDSL-Action line 4_3; ../webdsl-statix.sdf3/#WebDSL-Action line 5_3; ../WebDSL-Test.sdf3/#WebDSL-Action line 4_3; ../WebDSL-TimeInterval.sdf3/#WebDSL-Action line 4_3; ../WebDSL-Type.sdf3/#WebDSL-Action line 4_3; ../WebDSL-UI.sdf3/#WebDSL-Action line 4_3; ../WebDSL-XML.sdf3/#WebDSL-Action line 4_3">WebDSL-Action</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_4_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-DataModel.sdf3/#WebDSL-DataModel_1_8" id="WebDSL-DataModel_5_3" title="a reference to a single-file definition">WebDSL-DataModel</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_6_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-Search.sdf3/#WebDSL-Search_1_8" id="WebDSL-Search_7_3" title="a reference to a single-file definition">WebDSL-Search</a>
  <a href="../WebDSL-UI.sdf3/#WebDSL-UI_1_8" id="WebDSL-UI_8_3" title="a reference to a single-file definition">WebDSL-UI</a>
  <a href="../HQL.sdf3/#HQL_1_8" id="HQL_9_3" title="a reference to a single-file definition">HQL</a>

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="OptSort_13_3" title="a definition with multiple references" data-urls="#OptSort line 18_39, 34_48, 35_60, 36_64, 37_71">OptSort</button> <button class="modal-open" id="Block_13_11" title="a definition with multiple references" data-urls="#Block line 18_49, 34_58, 48_15, 96_19, 96_32, 99_19, 102_19, 104_48, 105_32, 114_20, 117_14, 128_13, 131_14, 150_52, 153_43, 156_43, 159_48, 162_22; ../WebDSL-Exception.sdf3/#Block line 23_10, 26_10, 29_46; ../WebDSL-Expand.sdf3/#Block line 108_22; ../WebDSL-Routing.sdf3/#Block line 19_30, 22_32; ../WebDSL-Service.sdf3/#Block line 17_54; ../WebDSL-Test.sdf3/#Block line 11_16, 14_11; ../WebDSL-UI.sdf3/#Block line 73_11, 350_46, 438_11, 440_47, 441_43, 442_49, 443_47, 444_67, 451_25, 452_29, 453_27, 454_30, 456_29">Block</button> <button class="modal-open" id="Function_13_17" title="a definition with multiple references" data-urls="#Function line 23_6, 25_46, 26_46, 27_44, 28_51, 29_51, 30_57">Function</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Function_17_3" title="a definition with multiple references" data-urls="#Function line 23_6, 25_46, 26_46, 27_44, 28_51, 29_51, 30_57">Function</button>.<span class="cons_Constructor"><span id="Function_17_12" title="a definition with no references">Function</span></span> = &lt;
    <span class="cons_String">function</span> &lt;<a href="#FunId_62_3" id="FunId_18_15" title="a reference to a single-file definition">FunId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_18_23" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptSort_13_3" id="OptSort_18_39" title="a reference to a single-file definition">OptSort</a>&gt; &lt;<a href="#Block_13_11" id="Block_18_49" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="OptSort_20_3" title="a definition with multiple references" data-urls="#OptSort line 18_39, 34_48, 35_60, 36_64, 37_71">OptSort</button>.<span class="cons_Constructor"><span id="OptSortNone_20_11" title="a definition with no references">OptSortNone</span></span> = &lt;&gt;
  <button class="modal-open" id="OptSort_21_3" title="a definition with multiple references" data-urls="#OptSort line 18_39, 34_48, 35_60, 36_64, 37_71">OptSort</button>.<span class="cons_Constructor"><span id="OptSortSome_21_11" title="a definition with no references">OptSortSome</span></span> = &lt;<span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_21_29" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <span id="Definition_22_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalFunction_22_14" title="a definition with no references">GlobalFunction</span></span> = &lt;
    &lt;<a href="#Function_13_17" id="Function_23_6" title="a reference to a single-file definition">Function</a>&gt;
  &gt;
  <span id="Definition_25_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="CachedGlobalFunction_25_14" title="a definition with no references">CachedGlobalFunction</span></span> = &lt;<span class="cons_String">cached</span> &lt;<a href="#Function_13_17" id="Function_25_46" title="a reference to a single-file definition">Function</a>&gt;&gt;
  <span id="Definition_26_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="ExtendGlobalFunction_26_14" title="a definition with no references">ExtendGlobalFunction</span></span> = &lt;<span class="cons_String">extend</span> &lt;<a href="#Function_13_17" id="Function_26_46" title="a reference to a single-file definition">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_27_3" title="a definition with no references">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="EntityFunction_27_25" title="a definition with no references">EntityFunction</span></span> = &lt;&lt;<a href="#Function_13_17" id="Function_27_44" title="a reference to a single-file definition">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_28_3" title="a definition with no references">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="CachedFunction_28_25" title="a definition with no references">CachedFunction</span></span> = &lt;<span class="cons_String">cached</span> &lt;<a href="#Function_13_17" id="Function_28_51" title="a reference to a single-file definition">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_29_3" title="a definition with no references">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="ExtendFunction_29_25" title="a definition with no references">ExtendFunction</span></span> = &lt;<span class="cons_String">extend</span> &lt;<a href="#Function_13_17" id="Function_29_51" title="a reference to a single-file definition">Function</a>&gt;&gt;
  <span id="EntityBodyDeclaration_30_3" title="a definition with no references">EntityBodyDeclaration</span>.<span class="cons_Constructor"><span id="StaticEntityFunction_30_25" title="a definition with no references">StaticEntityFunction</span></span> = &lt;<span class="cons_String">static</span> &lt;<a href="#Function_13_17" id="Function_30_57" title="a reference to a single-file definition">Function</a>&gt;&gt;

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_34_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="FunctionExp_34_7" title="a definition with no references">FunctionExp</span></span> = &lt;<span class="cons_String">function</span> &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_34_32" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptSort_13_3" id="OptSort_34_48" title="a reference to a single-file definition">OptSort</a>&gt; &lt;<a href="#Block_13_11" id="Block_34_58" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <button class="modal-open" id="Exp_35_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="FunctionRef_35_7" title="a definition with no references">FunctionRef</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_62_3" id="FunId_35_34" title="a reference to a single-file definition">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_35_45" title="a reference to a single-file definition">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_13_3" id="OptSort_35_60" title="a reference to a single-file definition">OptSort</a>&gt;&gt;
  <button class="modal-open" id="Exp_36_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="FunctionRefCall_36_7" title="a definition with no references">FunctionRefCall</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_62_3" id="FunId_36_38" title="a reference to a single-file definition">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_36_49" title="a reference to a single-file definition">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_13_3" id="OptSort_36_64" title="a reference to a single-file definition">OptSort</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_36_77" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_37_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="FunctionRefCallPartial_37_7" title="a definition with no references">FunctionRefCallPartial</span></span> = &lt;<span class="cons_String">function</span> <span class="cons_String">.</span> &lt;<a href="#FunId_62_3" id="FunId_37_45" title="a reference to a single-file definition">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_37_56" title="a reference to a single-file definition">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> &lt;<a href="#OptSort_13_3" id="OptSort_37_71" title="a reference to a single-file definition">OptSort</a>&gt; <span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">,</span> &lt;{<a href="#Exp_34_3" id="Exp_37_88" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_41_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"function"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Block_45_3" title="a definition with multiple references" data-urls="#Block line 18_49, 34_58, 48_15, 96_19, 96_32, 99_19, 102_19, 104_48, 105_32, 114_20, 117_14, 128_13, 131_14, 150_52, 153_43, 156_43, 159_48, 162_22; ../WebDSL-Exception.sdf3/#Block line 23_10, 26_10, 29_46; ../WebDSL-Expand.sdf3/#Block line 108_22; ../WebDSL-Routing.sdf3/#Block line 19_30, 22_32; ../WebDSL-Service.sdf3/#Block line 17_54; ../WebDSL-Test.sdf3/#Block line 11_16, 14_11; ../WebDSL-UI.sdf3/#Block line 73_11, 350_46, 438_11, 440_47, 441_43, 442_49, 443_47, 444_67, 451_25, 452_29, 453_27, 454_30, 456_29">Block</button>.<span class="cons_Constructor"><span id="Block_45_9" title="a definition with no references">Block</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#Statement_48_3" id="Statement_46_6" title="a reference to a single-file definition">Statement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Statement_48_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button> = <a href="#Block_13_11" id="Block_48_15" title="a reference to a single-file definition">Block</a>
  <button class="modal-open" id="Statement_49_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><a href="#Stat_66_13" id="Stat_49_13" title="a definition with a single reference">Stat</a></span> = &lt;
    &lt;<a href="#Exp_34_3" id="Exp_50_6" title="a reference to a single-file definition">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <button class="modal-open" id="Statement_52_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="Return_52_13" title="a definition with no references">Return</span></span> = &lt;
    <span class="cons_String">return</span> &lt;<a href="#Exp_34_3" id="Exp_53_13" title="a reference to a single-file definition">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <button class="modal-open" id="Statement_55_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="ReturnEmpty_55_13" title="a definition with no references">ReturnEmpty</span></span> = &lt;
    <span class="cons_String">return;</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_61_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"return"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="FunId_62_3" title="a definition with multiple references" data-urls="#FunId line 18_15, 35_34, 36_38, 37_45, 250_25">FunId</button> = <span class="cons_Lit">"return"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#Statement_48_3" id="Statement_66_3" title="a reference to a single-file definition">Statement</a>.<span class="cons_Constructor"><a href="#Stat_49_13" id="Stat_66_13" title="a reference to a single-file definition">Stat</a></span> &lt;0&gt; .&gt; <a href="#Exp_34_3" id="Exp_66_25" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Var_190_7" id="Var_66_29" title="a reference to a single-file definition">Var</a></span>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Statement_70_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="GoTo_70_13" title="a definition with no references">GoTo</span></span> = &lt;
    <span class="cons_String">goto</span> &lt;<a href="../WebDSL-UI.sdf3/#PageCall_16_57" id="PageCall_71_11" title="a reference to a single-file definition">PageCall</a>&gt;<span class="cons_String">;</span>
  &gt;
  <button class="modal-open" id="Statement_73_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="GoToAlt_73_13" title="a definition with no references">GoToAlt</span></span> = &lt;
    <span class="cons_String">goto</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#PageCall_16_57" id="PageCall_74_13" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">);</span>
  &gt;

  <button class="modal-open" id="ThisCall_77_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">goto</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-UI.sdf3/#PageCall_16_57" id="PageCall_77_23" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <button class="modal-open" id="Statement_79_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="VarDecl_79_13" title="a definition with no references">VarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_41_3" id="VarId_80_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_80_20" title="a reference to a single-file definition">Sort</a>&gt;<span class="cons_String">;</span>
  &gt;
  <button class="modal-open" id="Statement_82_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="VarDeclInit_82_13" title="a definition with no references">VarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_41_3" id="VarId_83_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_83_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_34_3" id="Exp_83_30" title="a reference to a single-file definition">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;
  <button class="modal-open" id="Statement_85_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="VarDeclInitInferred_85_13" title="a definition with no references">VarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_41_3" id="VarId_86_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_34_3" id="Exp_86_21" title="a reference to a single-file definition">Exp</a>&gt;<span class="cons_String">;</span>
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#ElseIfStatement_102_27" id="ElseIfStatement_91_3" title="a definition with a single reference">ElseIfStatement</a> <a href="#OptElse_102_46" id="OptElse_91_19" title="a definition with a single reference">OptElse</a> <a href="#Case_110_8" id="Case_91_27" title="a definition with a single reference">Case</a> <a href="#TypeCaseAlt_122_8" id="TypeCaseAlt_91_32" title="a definition with a single reference">TypeCaseAlt</a> <button class="modal-open" id="OptTypeAlias_91_44" title="a definition with multiple references" data-urls="#OptTypeAlias line 121_23; ../WebDSL-UI.sdf3/#OptTypeAlias line 219_23">OptTypeAlias</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Statement_95_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="If_95_13" title="a definition with no references">If</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_96_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_96_19" title="a reference to a single-file definition">Block</a>&gt; <span class="cons_String">else</span> &lt;<a href="#Block_13_11" id="Block_96_32" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_98_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="IfNoElse_98_13" title="a definition with no references">IfNoElse</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_99_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_99_19" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_101_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="IfWithElseIf_101_13" title="a definition with no references">IfWithElseIf</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_102_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_102_19" title="a reference to a single-file definition">Block</a>&gt; &lt;<a href="#ElseIfStatement_91_3" id="ElseIfStatement_102_27" title="a reference to a single-file definition">ElseIfStatement</a>+&gt; &lt;<a href="#OptElse_91_19" id="OptElse_102_46" title="a reference to a single-file definition">OptElse</a>&gt;
  &gt;
  <a href="#ElseIfStatement_102_27" id="ElseIfStatement_104_3" title="a definition with a single reference">ElseIfStatement</a>.<span class="cons_Constructor"><span id="ElseIf_104_19" title="a definition with no references">ElseIf</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_104_40" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_104_48" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <a href="#OptElse_102_46" id="OptElse_105_3" title="a definition with a single reference">OptElse</a>.<span class="cons_Constructor"><span id="OptElseSome_105_11" title="a definition with no references">OptElseSome</span></span> = &lt;<span class="cons_String">else</span> &lt;<a href="#Block_13_11" id="Block_105_32" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <a href="#OptElse_102_46" id="OptElse_106_3" title="a definition with a single reference">OptElse</a>.<span class="cons_Constructor"><span id="OptElseNone_106_11" title="a definition with no references">OptElseNone</span></span> = &lt;&gt;

  <button class="modal-open" id="Statement_108_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="CaseStmt_108_13" title="a definition with no references">CaseStmt</span></span> = &lt;
    <span class="cons_String">case</span> <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_109_14" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#Case_91_27" id="Case_110_8" title="a reference to a single-file definition">Case</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#Case_110_8" id="Case_113_3" title="a definition with a single reference">Case</a>.<span class="cons_Constructor"><span id="CaseAlt_113_8" title="a definition with no references">CaseAlt</span></span> = &lt;
    &lt;<a href="#CaseAltExps_136_3" id="CaseAltExps_114_6" title="a reference to a single-file definition">CaseAltExps</a>&gt; &lt;<a href="#Block_13_11" id="Block_114_20" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <a href="#Case_110_8" id="Case_116_3" title="a definition with a single reference">Case</a>.<span class="cons_Constructor"><span id="CaseAltDefault_116_8" title="a definition with no references">CaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> &lt;<a href="#Block_13_11" id="Block_117_14" title="a reference to a single-file definition">Block</a>&gt;
  &gt;

  <button class="modal-open" id="Statement_120_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><a href="#TypeCaseStmt_145_13" id="TypeCaseStmt_120_13" title="a definition with a single reference">TypeCaseStmt</a></span> = &lt;
    <span class="cons_String">typecase</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_121_17" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#OptTypeAlias_91_44" id="OptTypeAlias_121_23" title="a reference to a single-file definition">OptTypeAlias</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TypeCaseAlt_91_32" id="TypeCaseAlt_122_8" title="a reference to a single-file definition">TypeCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="OptTypeAlias_125_3" title="a definition with multiple references" data-urls="#OptTypeAlias line 121_23; ../WebDSL-UI.sdf3/#OptTypeAlias line 219_23">OptTypeAlias</button>.<span class="cons_Constructor"><span id="TypeAlias_125_16" title="a definition with no references">TypeAlias</span></span> = &lt;<span class="cons_String">as</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_125_33" title="a reference to a single-file definition">Id</a>&gt;&gt;
  <button class="modal-open" id="OptTypeAlias_126_3" title="a definition with multiple references" data-urls="#OptTypeAlias line 121_23; ../WebDSL-UI.sdf3/#OptTypeAlias line 219_23">OptTypeAlias</button>.<span class="cons_Constructor"><span id="OptTypeAliasNone_126_16" title="a definition with no references">OptTypeAliasNone</span></span> = &lt;&gt;
  <a href="#TypeCaseAlt_122_8" id="TypeCaseAlt_127_3" title="a definition with a single reference">TypeCaseAlt</a>.<span class="cons_Constructor"><span id="TypeCaseAlt_127_15" title="a definition with no references">TypeCaseAlt</span></span> = &lt;
    &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_128_6" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="#Block_13_11" id="Block_128_13" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <a href="#TypeCaseAlt_122_8" id="TypeCaseAlt_130_3" title="a definition with a single reference">TypeCaseAlt</a>.<span class="cons_Constructor"><span id="TypeCaseAltDefault_130_15" title="a definition with no references">TypeCaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> &lt;<a href="#Block_13_11" id="Block_131_14" title="a reference to a single-file definition">Block</a>&gt;
  &gt;

<span class="keyword">context-free sorts</span>

  <a href="#CaseAltExps_114_6" id="CaseAltExps_136_3" title="a definition with a single reference">CaseAltExps</a>

<span class="keyword">context-free syntax</span>

  <a href="#CaseAltExps_114_6" id="CaseAltExps_140_3" title="a definition with a single reference">CaseAltExps</a>.<span class="cons_Constructor"><span id="CaseExps_140_15" title="a definition with no references">CaseExps</span></span> = &lt;&lt;{<a href="#Exp_34_3" id="Exp_140_29" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#CaseAltExps_114_6" id="CaseAltExps_141_3" title="a definition with a single reference">CaseAltExps</a> = &lt;<span class="cons_String">default</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#Statement_48_3" id="Statement_145_3" title="a reference to a single-file definition">Statement</a>.<span class="cons_Constructor"><a href="#TypeCaseStmt_120_13" id="TypeCaseStmt_145_13" title="a reference to a single-file definition">TypeCaseStmt</a></span> &lt;2&gt; .&gt; <a href="#Exp_34_3" id="Exp_145_33" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Cast_253_7" id="Cast_145_37" title="a reference to a single-file definition">Cast</a></span>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Statement_149_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="ForStmt_149_13" title="a definition with no references">ForStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_41_3" id="VarId_150_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_150_22" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_150_32" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#OptFilter_16_47" id="OptFilter_150_38" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_150_52" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_152_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="ForStmtInferred_152_13" title="a definition with no references">ForStmtInferred</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_41_3" id="VarId_153_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_153_23" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#OptFilter_16_47" id="OptFilter_153_29" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_153_43" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_155_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="ForAllStmt_155_13" title="a definition with no references">ForAllStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_41_3" id="VarId_156_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_156_22" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#OptFilter_16_47" id="OptFilter_156_29" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_156_43" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_158_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="ForCountStmt_158_13" title="a definition with no references">ForCountStmt</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_41_3" id="VarId_159_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_34_3" id="Exp_159_31" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_34_3" id="Exp_159_40" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_159_48" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="Statement_161_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="WhileStmt_161_13" title="a definition with no references">WhileStmt</span></span> = &lt;
    <span class="cons_String">while</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_162_14" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Block_13_11" id="Block_162_22" title="a reference to a single-file definition">Block</a>&gt;
  &gt;

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="ThisLex_167_3" title="a definition with multiple references" data-urls="#ThisLex line 175_3, 193_16">ThisLex</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="ThisLex_171_3" title="a definition with multiple references" data-urls="#ThisLex line 175_3, 193_16">ThisLex</button> = <span class="cons_Lit">"this"</span>

<span class="keyword">lexical restrictions</span>

  <a href="#ThisLex_167_3" id="ThisLex_175_3" title="a reference to a single-file definition">ThisLex</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ConstValue_179_3" title="a definition with multiple references" data-urls="#ConstValue line 183_15; ../WebDSL-Ajax.sdf3/#ConstValue line 111_19; ../WebDSL-Prefetch.sdf3/#ConstValue line 64_35">ConstValue</button> <button class="modal-open" id="Exp_179_14" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button> <a href="#PropAssignment_215_6" id="PropAssignment_179_18" title="a definition with a single reference">PropAssignment</a> <button class="modal-open" id="ObjectPropertyAssignment_179_33" title="a definition with multiple references" data-urls="#ObjectPropertyAssignment line 218_37, 219_42">ObjectPropertyAssignment</button> <a href="#Mapping_235_25" id="Mapping_179_58" title="a definition with a single reference">Mapping</a> <button class="modal-open" id="ThisCall_179_66" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> <button class="modal-open" id="FAExp_179_75" title="a definition with multiple references" data-urls="#FAExp line 191_23, 202_3">FAExp</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_183_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="Const_183_7" title="a definition with no references">Const</span></span> = <a href="#ConstValue_179_3" id="ConstValue_183_15" title="a reference to a single-file definition">ConstValue</a>

  <button class="modal-open" id="ConstValue_185_3" title="a definition with multiple references" data-urls="#ConstValue line 183_15; ../WebDSL-Ajax.sdf3/#ConstValue line 111_19; ../WebDSL-Prefetch.sdf3/#ConstValue line 64_35">ConstValue</button>.<span class="cons_Constructor"><span id="Int_185_14" title="a definition with no references">Int</span></span> = <a href="../WebDSL-Lexical.sdf3/#Int_44_4" id="Int_185_20" title="a reference to a single-file definition">Int</a>
  <button class="modal-open" id="ConstValue_186_3" title="a definition with multiple references" data-urls="#ConstValue line 183_15; ../WebDSL-Ajax.sdf3/#ConstValue line 111_19; ../WebDSL-Prefetch.sdf3/#ConstValue line 64_35">ConstValue</button>.<span class="cons_Constructor"><span id="Long_186_14" title="a definition with no references">Long</span></span> = <a href="../WebDSL-Lexical.sdf3/#Long_44_8" id="Long_186_21" title="a reference to a single-file definition">Long</a>
  <button class="modal-open" id="ConstValue_187_3" title="a definition with multiple references" data-urls="#ConstValue line 183_15; ../WebDSL-Ajax.sdf3/#ConstValue line 111_19; ../WebDSL-Prefetch.sdf3/#ConstValue line 64_35">ConstValue</button>.<span class="cons_Constructor"><span id="Float_187_14" title="a definition with no references">Float</span></span> = <a href="../WebDSL-Lexical.sdf3/#Float_44_13" id="Float_187_22" title="a reference to a single-file definition">Float</a>
  <button class="modal-open" id="ConstValue_188_3" title="a definition with multiple references" data-urls="#ConstValue line 183_15; ../WebDSL-Ajax.sdf3/#ConstValue line 111_19; ../WebDSL-Prefetch.sdf3/#ConstValue line 64_35">ConstValue</button>.<span class="cons_Constructor"><span id="StringConst_188_14" title="a definition with no references">StringConst</span></span> = <a href="../WebDSL-Lexical.sdf3/#String_69_3" id="String_188_28" title="a reference to a single-file definition">String</a>

  <button class="modal-open" id="Exp_190_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="Var_190_7" title="a definition with multiple references" data-urls="#Var line 66_29, 202_26; ../WebDSL-Ajax.sdf3/#Var line 97_45, 98_41">Var</button></span> = <a href="#VarId_41_3" id="VarId_190_13" title="a reference to a single-file definition">VarId</a>
  <button class="modal-open" id="Exp_191_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#FieldAccess_354_9" id="FieldAccess_191_7" title="a definition with a single reference">FieldAccess</a></span> = &lt;&lt;<a href="#FAExp_179_75" id="FAExp_191_23" title="a reference to a single-file definition">FAExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="#PropertyId_207_3" id="PropertyId_191_33" title="a reference to a single-file definition">PropertyId</a>&gt;&gt;
  <button class="modal-open" id="Exp_192_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#CollectionIndex_355_9" id="CollectionIndex_192_7" title="a definition with a single reference">CollectionIndex</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_192_27" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">[</span> &lt;<a href="#Exp_34_3" id="Exp_192_35" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="Exp_193_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="This_193_7" title="a definition with no references">This</span></span> = &lt;&lt;<a href="#ThisLex_167_3" id="ThisLex_193_16" title="a reference to a single-file definition">ThisLex</a>&gt;&gt;

  <button class="modal-open" id="FAExp_195_3" title="a definition with multiple references" data-urls="#FAExp line 191_23, 202_3">FAExp</button>.<span class="cons_Constructor"><a href="#FAExp_202_9" id="FAExp_195_9" title="a definition with a single reference">FAExp</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_195_19" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="FAExp_196_3" title="a definition with multiple references" data-urls="#FAExp line 191_23, 202_3">FAExp</button>.<span class="cons_Constructor"><span id="FAVar_196_9" title="a definition with no references">FAVar</span></span> = &lt;&lt;<a href="#FAVarId_209_3" id="FAVarId_196_19" title="a reference to a single-file definition">FAVarId</a>&gt;&gt;
  <button class="modal-open" id="FAExp_197_3" title="a definition with multiple references" data-urls="#FAExp line 191_23, 202_3">FAExp</button>.<span class="cons_Constructor"><span id="FAGlobal_197_9" title="a definition with no references">FAGlobal</span></span> = &lt;<span class="cons_String">global</span>&gt;
  <button class="modal-open" id="FAExp_198_3" title="a definition with multiple references" data-urls="#FAExp line 191_23, 202_3">FAExp</button>.<span class="cons_Constructor"><span id="FASession_198_9" title="a definition with no references">FASession</span></span> = &lt;<span class="cons_String">session</span>&gt;

<span class="keyword">context-free priorities</span>

  <a href="#FAExp_179_75" id="FAExp_202_3" title="a reference to a single-file definition">FAExp</a>.<span class="cons_Constructor"><a href="#FAExp_195_9" id="FAExp_202_9" title="a reference to a single-file definition">FAExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_34_3" id="Exp_202_22" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Var_190_7" id="Var_202_26" title="a reference to a single-file definition">Var</a></span>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_206_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"this"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="PropertyId_207_3" title="a definition with multiple references" data-urls="#PropertyId line 191_33; ../WebDSL-DataModel.sdf3/#PropertyId line 91_6, 94_6">PropertyId</button> = <span class="cons_Lit">"this"</span> {<span class="keyword">reject</span>}

  <a href="#FAVarId_196_19" id="FAVarId_209_3" title="a definition with a single reference">FAVarId</a> = <span class="cons_Lit">"global"</span> {<span class="keyword">reject</span>}
  <a href="#FAVarId_196_19" id="FAVarId_210_3" title="a definition with a single reference">FAVarId</a> = <span class="cons_Lit">"session"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_214_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="../WebDSL-Expand.sdf3/#ObjectCreation_55_48" id="ObjectCreation_214_7" title="a definition with a single reference">ObjectCreation</a></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#SimpleSortLex_167_3" id="SimpleSortLex_214_26" title="a reference to a single-file definition">SimpleSortLex</a>&gt; <span class="cons_String">{</span>
    &lt;<a href="#PropAssignment_179_18" id="PropAssignment_215_6" title="a reference to a single-file definition">PropAssignment</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#PropAssignment_215_6" id="PropAssignment_218_3" title="a definition with a single reference">PropAssignment</a>.<span class="cons_Constructor"><span id="PropAssignment_218_18" title="a definition with no references">PropAssignment</span></span> = &lt;&lt;<a href="#ObjectPropertyAssignment_179_33" id="ObjectPropertyAssignment_218_37" title="a reference to a single-file definition">ObjectPropertyAssignment</a>&gt;&gt;
  <a href="#PropAssignment_215_6" id="PropAssignment_219_3" title="a definition with a single reference">PropAssignment</a>.<span class="cons_Constructor"><span id="PropAssignmentComma_219_18" title="a definition with no references">PropAssignmentComma</span></span> = &lt;&lt;<a href="#ObjectPropertyAssignment_179_33" id="ObjectPropertyAssignment_219_42" title="a reference to a single-file definition">ObjectPropertyAssignment</a>&gt; <span class="cons_String">,</span>&gt;
  <button class="modal-open" id="ObjectPropertyAssignment_220_3" title="a definition with multiple references" data-urls="#ObjectPropertyAssignment line 218_37, 219_42">ObjectPropertyAssignment</button>.<span class="cons_Constructor"><span id="ObjectPropertyAssignment_220_28" title="a definition with no references">ObjectPropertyAssignment</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_221_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_34_3" id="Exp_221_14" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;

/*
  <span class="keyword">used in sdf</span>2 <span class="keyword">definition as workaround to get working autocompletion</span>:
  <span class="keyword">ObjectPropertyAssignment</span>.<span class="keyword">IncompleteObjectPropertyAssignment</span> = &lt;
    &lt;<span class="keyword">Id</span>&gt;
  &gt;
*/

  <button class="modal-open" id="Statement_231_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="Assignment_231_13" title="a definition with no references">Assignment</span></span> = &lt;
    &lt;<a href="#Exp_34_3" id="Exp_232_6" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_34_3" id="Exp_232_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt;

  <button class="modal-open" id="Exp_235_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="MapCreation_235_7" title="a definition with no references">MapCreation</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#Mapping_179_58" id="Mapping_235_25" title="a reference to a single-file definition">Mapping</a>+&gt; <span class="cons_String">]</span>&gt;
  <a href="#Mapping_235_25" id="Mapping_236_3" title="a definition with a single reference">Mapping</a>.<span class="cons_Constructor"><span id="Mapping_236_11" title="a definition with no references">Mapping</span></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_236_23" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">-</span>\&gt; &lt;<a href="#Exp_34_3" id="Exp_236_33" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Exp_237_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="ListCreation_237_7" title="a definition with no references">ListCreation</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#Exp_34_3" id="Exp_237_27" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="Exp_238_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="../WebDSL-UI.sdf3/#SetCreation_481_44" id="SetCreation_238_7" title="a definition with a single reference">SetCreation</a></span> = &lt;<span class="cons_String">{</span> &lt;{<a href="#Exp_34_3" id="Exp_238_26" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="Exp_239_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="TypedListCreation_239_7" title="a definition with no references">TypedListCreation</span></span> = &lt;<span class="cons_String">List</span> \&lt; &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_239_37" title="a reference to a single-file definition">Sort</a>&gt; \&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_239_50" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_240_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="TypedSetCreation_240_7" title="a definition with no references">TypedSetCreation</span></span> = &lt;<span class="cons_String">Set</span> \&lt; &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_240_35" title="a reference to a single-file definition">Sort</a>&gt; \&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_240_48" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_244_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"List"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="VarId_245_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"Set"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_249_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button> = <a href="#ThisCall_77_3" id="ThisCall_249_9" title="a reference to a single-file definition">ThisCall</a>
  <button class="modal-open" id="ThisCall_250_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button>.<span class="cons_Constructor"><span id="ThisCall_250_12" title="a definition with no references">ThisCall</span></span> = &lt;&lt;<a href="#FunId_62_3" id="FunId_250_25" title="a reference to a single-file definition">FunId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_250_36" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_251_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Call_353_9" id="Call_251_7" title="a definition with a single reference">Call</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_251_16" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_251_24" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_251_32" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_252_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#IsA_358_9" id="IsA_252_7" title="a definition with a single reference">IsA</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_252_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">is</span> <span class="cons_String">a</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_252_26" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <button class="modal-open" id="Exp_253_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="Cast_253_7" title="a definition with multiple references" data-urls="#Cast line 145_37, 359_9; ../WebDSL-UI.sdf3/#Cast line 246_47">Cast</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_253_16" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">as</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_253_25" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <button class="modal-open" id="Exp_254_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#InColl_360_9" id="InColl_254_7" title="a definition with a single reference">InColl</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_254_18" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_254_27" title="a reference to a single-file definition">Exp</a>&gt;&gt;

  <button class="modal-open" id="Exp_256_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#IfExp_387_9" id="IfExp_256_7" title="a definition with a single reference">IfExp</a></span> = &lt;<span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_256_22" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> &lt;<a href="#Exp_34_3" id="Exp_256_30" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">else</span> &lt;<a href="#Exp_34_3" id="Exp_256_41" title="a reference to a single-file definition">Exp</a>&gt;&gt;

  <a href="../WebDSL-UI.sdf3/#OutputShorthand_385_21" id="OutputShorthand_258_3" title="a definition with a single reference">OutputShorthand</a>.<span class="cons_Constructor"><span id="OutputShorthand_258_19" title="a definition with no references">OutputShorthand</span></span> = &lt;<span class="cons_String">~</span> <span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_258_43" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt;
  <a href="#SimpleExp_260_28" id="SimpleExp_259_3" title="a definition with a single reference">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleThisCall_259_13" title="a definition with no references">SimpleThisCall</span></span> = <a href="#ThisCall_77_3" id="ThisCall_259_30" title="a reference to a single-file definition">ThisCall</a>
  <a href="#SimpleExp_260_28" id="SimpleExp_260_3" title="a definition with a single reference">SimpleExp</a>.<span class="cons_Constructor"><span id="SimpleCall_260_13" title="a definition with no references">SimpleCall</span></span> = &lt;&lt;<a href="#SimpleExp_259_3" id="SimpleExp_260_28" title="a reference to a single-file definition">SimpleExp</a>&gt; <span class="cons_String">.</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_260_42" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_260_50" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_264_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"if"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="VarId_265_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"else"</span> {<span class="keyword">reject</span>}

<span class="keyword">syntax</span>

  <a href="../WebDSL-UI.sdf3/#StringPart_403_34" id="StringPart_269_3" title="a definition with a single reference">StringPart</a><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="InterpExp_269_17" title="a definition with no references">InterpExp</span></span> = <span class="cons_Lit">"~"</span> <span class="cons_Lit">"("</span> <a href="#Exp_34_3" id="Exp_269_37" title="a reference to a single-file definition">Exp</a><span class="keyword">-CF</span> <span class="cons_Lit">")"</span>

<span class="keyword">context-free restrictions</span>

  <span class="cons_Lit">"in"</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="OptGroupBy_277_3" title="a definition with multiple references" data-urls="#OptGroupBy line 308_95, 309_86">OptGroupBy</button> <button class="modal-open" id="GroupBy_277_14" title="a definition with multiple references" data-urls="#GroupBy line 313_75, 314_66, 315_84, 316_75, 318_31">GroupBy</button> <button class="modal-open" id="ForExp_277_22" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_281_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="Eq_281_7" title="a definition with multiple references" data-urls="#Eq line 376_9; ../WebDSL-Search.sdf3/#Eq line 263_45">Eq</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_281_14" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">==</span> &lt;<a href="#Exp_34_3" id="Exp_281_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_282_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="NotEq_282_7" title="a definition with multiple references" data-urls="#NotEq line 377_9; ../WebDSL-Search.sdf3/#NotEq line 264_45">NotEq</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_282_17" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">!=</span> &lt;<a href="#Exp_34_3" id="Exp_282_26" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_283_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="LargerThan_283_7" title="a definition with multiple references" data-urls="#LargerThan line 378_9; ../WebDSL-Search.sdf3/#LargerThan line 265_45">LargerThan</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_283_22" title="a reference to a single-file definition">Exp</a>&gt; \&gt; &lt;<a href="#Exp_34_3" id="Exp_283_31" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_284_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="LargerThanOrEqual_284_7" title="a definition with multiple references" data-urls="#LargerThanOrEqual line 379_9; ../WebDSL-Search.sdf3/#LargerThanOrEqual line 266_45">LargerThanOrEqual</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_284_29" title="a reference to a single-file definition">Exp</a>&gt; \&gt;<span class="cons_String">=</span> &lt;<a href="#Exp_34_3" id="Exp_284_39" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_285_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="SmallerThan_285_7" title="a definition with multiple references" data-urls="#SmallerThan line 380_9; ../WebDSL-Search.sdf3/#SmallerThan line 267_45">SmallerThan</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_285_23" title="a reference to a single-file definition">Exp</a>&gt; \&lt; &lt;<a href="#Exp_34_3" id="Exp_285_32" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_286_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="SmallerThanOrEqual_286_7" title="a definition with multiple references" data-urls="#SmallerThanOrEqual line 381_9; ../WebDSL-Search.sdf3/#SmallerThanOrEqual line 268_45">SmallerThanOrEqual</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_286_30" title="a reference to a single-file definition">Exp</a>&gt; \&lt;<span class="cons_String">=</span> &lt;<a href="#Exp_34_3" id="Exp_286_40" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}

  <button class="modal-open" id="Exp_288_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="True_288_7" title="a definition with no references">True</span></span> = &lt;<span class="cons_String">true</span>&gt;
  <button class="modal-open" id="Exp_289_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="False_289_7" title="a definition with no references">False</span></span> = &lt;<span class="cons_String">false</span>&gt;
  <button class="modal-open" id="Exp_290_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="Null_290_7" title="a definition with no references">Null</span></span> = &lt;<span class="cons_String">null</span>&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_294_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="VarId_295_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="VarId_296_3" title="a definition with multiple references" data-urls="#VarId line 80_10, 83_10, 86_10, 150_12, 153_12, 156_12, 159_12, 190_13, 308_57, 309_57, 310_49, 311_49, 312_49, 313_49, 314_49, 315_49, 316_49; ../WebDSL-Core.sdf3/#VarId line 32_34, 36_21; ../WebDSL-DataModel.sdf3/#VarId line 48_10, 51_10, 54_10, 57_10, 60_10, 63_10, 66_18, 69_18, 72_18, 75_18, 78_18, 81_18">VarId</button> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

  <span id="TemplateId_298_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"true"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_299_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"false"</span> {<span class="keyword">reject</span>}
  <span id="TemplateId_300_3" title="a definition with no references">TemplateId</span> = <span class="cons_Lit">"null"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_304_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#And_383_15" id="And_304_7" title="a definition with a single reference">And</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_304_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">&amp;&amp;</span> &lt;<a href="#Exp_34_3" id="Exp_304_24" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_305_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Or_384_15" id="Or_305_7" title="a definition with a single reference">Or</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_305_14" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">||</span> &lt;<a href="#Exp_34_3" id="Exp_305_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_306_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Not_363_9" id="Not_306_7" title="a definition with a single reference">Not</a></span> = &lt;<span class="cons_String">!</span> &lt;<a href="#Exp_34_3" id="Exp_306_17" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Exp_307_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button> = &lt;<span class="cons_String">(</span> &lt;<a href="#Exp_34_3" id="Exp_307_13" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">bracket</span>}
  <button class="modal-open" id="ForExp_308_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExp_308_10" title="a definition with no references">ForExp</span></span>                           = &lt;<span class="cons_String">[</span> &lt;<a href="#Exp_34_3" id="Exp_308_49" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">|</span> &lt;<a href="#VarId_41_3" id="VarId_308_57" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_308_67" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_308_77" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#OptFilter_16_47" id="OptFilter_308_83" title="a reference to a single-file definition">OptFilter</a>&gt; &lt;<a href="#OptGroupBy_277_3" id="OptGroupBy_308_95" title="a reference to a single-file definition">OptGroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_309_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpInferred_309_10" title="a definition with no references">ForExpInferred</span></span>                   = &lt;<span class="cons_String">[</span> &lt;<a href="#Exp_34_3" id="Exp_309_49" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">|</span> &lt;<a href="#VarId_41_3" id="VarId_309_57" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_309_68" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#OptFilter_16_47" id="OptFilter_309_74" title="a reference to a single-file definition">OptFilter</a>&gt; &lt;<a href="#OptGroupBy_277_3" id="OptGroupBy_309_86" title="a reference to a single-file definition">OptGroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_310_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShort_310_10" title="a definition with no references">ForExpShort</span></span>                      = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_310_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_310_59" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_310_69" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_311_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortFilter_311_10" title="a definition with no references">ForExpShortFilter</span></span>                = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_311_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_311_59" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_311_69" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#Filter_125_3" id="Filter_311_75" title="a reference to a single-file definition">Filter</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_312_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortFilterInferred_312_10" title="a definition with no references">ForExpShortFilterInferred</span></span>        = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_312_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_312_60" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#Filter_125_3" id="Filter_312_66" title="a reference to a single-file definition">Filter</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_313_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortGroupBy_313_10" title="a definition with no references">ForExpShortGroupBy</span></span>               = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_313_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_313_59" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_313_69" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#GroupBy_277_14" id="GroupBy_313_75" title="a reference to a single-file definition">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_314_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortGroupByInferred_314_10" title="a definition with no references">ForExpShortGroupByInferred</span></span>       = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_314_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_314_60" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#GroupBy_277_14" id="GroupBy_314_66" title="a reference to a single-file definition">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_315_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortFilterGroupBy_315_10" title="a definition with no references">ForExpShortFilterGroupBy</span></span>         = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_315_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="../WebDSL-Core.sdf3/#Sort_10_95" id="Sort_315_59" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_315_69" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#Filter_125_3" id="Filter_315_75" title="a reference to a single-file definition">Filter</a>&gt; &lt;<a href="#GroupBy_277_14" id="GroupBy_315_84" title="a reference to a single-file definition">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ForExp_316_3" title="a definition with multiple references" data-urls="#ForExp line 317_9, 321_25, 322_23">ForExp</button>.<span class="cons_Constructor"><span id="ForExpShortFilterGroupByInferred_316_10" title="a definition with no references">ForExpShortFilterGroupByInferred</span></span> = &lt;<span class="cons_String">[</span> &lt;<a href="#VarId_41_3" id="VarId_316_49" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_34_3" id="Exp_316_60" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-UI.sdf3/#Filter_125_3" id="Filter_316_66" title="a reference to a single-file definition">Filter</a>&gt; &lt;<a href="#GroupBy_277_14" id="GroupBy_316_75" title="a reference to a single-file definition">GroupBy</a>&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="Exp_317_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button> = <a href="#ForExp_277_22" id="ForExp_317_9" title="a reference to a single-file definition">ForExp</a>
  <button class="modal-open" id="OptGroupBy_318_3" title="a definition with multiple references" data-urls="#OptGroupBy line 308_95, 309_86">OptGroupBy</button>.<span class="cons_Constructor"><span id="OptGroupBySome_318_14" title="a definition with no references">OptGroupBySome</span></span> = <a href="#GroupBy_277_14" id="GroupBy_318_31" title="a reference to a single-file definition">GroupBy</a>
  <button class="modal-open" id="OptGroupBy_319_3" title="a definition with multiple references" data-urls="#OptGroupBy line 308_95, 309_86">OptGroupBy</button>.<span class="cons_Constructor"><span id="OptGroupByNone_319_14" title="a definition with no references">OptGroupByNone</span></span> = &lt;&gt;
  <button class="modal-open" id="GroupBy_320_3" title="a definition with multiple references" data-urls="#GroupBy line 313_75, 314_66, 315_84, 316_75, 318_31">GroupBy</button>.<span class="cons_Constructor"><span id="GroupBy_320_11" title="a definition with no references">GroupBy</span></span> = &lt;<span class="cons_String">group</span> <span class="cons_String">by</span> &lt;<a href="#Exp_34_3" id="Exp_320_32" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Exp_321_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="AndForExp_321_7" title="a definition with no references">AndForExp</span></span> = &lt;<span class="cons_String">And</span> &lt;<a href="#ForExp_277_22" id="ForExp_321_25" title="a reference to a single-file definition">ForExp</a>&gt;&gt;
  <button class="modal-open" id="Exp_322_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="OrForExp_322_7" title="a definition with no references">OrForExp</span></span> = &lt;<span class="cons_String">Or</span> &lt;<a href="#ForExp_277_22" id="ForExp_322_23" title="a reference to a single-file definition">ForExp</a>&gt;&gt;
  <button class="modal-open" id="Exp_323_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Mul_366_9" id="Mul_323_7" title="a definition with a single reference">Mul</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_323_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">*</span> &lt;<a href="#Exp_34_3" id="Exp_323_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_324_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Div_367_9" id="Div_324_7" title="a definition with a single reference">Div</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_324_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">/</span> &lt;<a href="#Exp_34_3" id="Exp_324_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_325_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#Mod_368_9" id="Mod_325_7" title="a definition with a single reference">Mod</a></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_325_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">%</span> &lt;<a href="#Exp_34_3" id="Exp_325_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_326_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="Add_326_7" title="a definition with multiple references" data-urls="#Add line 371_9; ../WebDSL-Search.sdf3/#Add line 290_37">Add</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_326_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">+</span> &lt;<a href="#Exp_34_3" id="Exp_326_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}
  <button class="modal-open" id="Exp_327_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><button class="modal-open" id="Sub_327_7" title="a definition with multiple references" data-urls="#Sub line 372_9; ../WebDSL-Search.sdf3/#Sub line 289_37">Sub</button></span> = &lt;&lt;<a href="#Exp_34_3" id="Exp_327_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">-</span> &lt;<a href="#Exp_34_3" id="Exp_327_23" title="a reference to a single-file definition">Exp</a>&gt;&gt; {<span class="keyword">left</span>}

<span class="keyword">context-free sorts</span>

  <a href="#HqlExp_335_16" id="HqlExp_331_3" title="a definition with a single reference">HqlExp</a> <button class="modal-open" id="LimitValueExp_331_10" title="a definition with multiple references" data-urls="#LimitValueExp line 338_56, 339_56, 339_74">LimitValueExp</button> <button class="modal-open" id="DslExp_331_24" title="a definition with multiple references" data-urls="#DslExp line 342_39; ../HQL.sdf3/#DslExp line 143_29">DslExp</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_335_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><a href="#HqlExp_385_9" id="HqlExp_335_7" title="a definition with a single reference">HqlExp</a></span> = <a href="#HqlExp_331_3" id="HqlExp_335_16" title="a reference to a single-file definition">HqlExp</a>

  <a href="#HqlExp_335_16" id="HqlExp_337_3" title="a definition with a single reference">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQuery_337_10" title="a definition with no references">HqlQuery</span></span>             = &lt;&lt;<a href="../HQL.sdf3/#HQLQueryRule_31_68" id="HQLQueryRule_337_35" title="a reference to a single-file definition">HQLQueryRule</a>&gt;&gt;
  <a href="#HqlExp_335_16" id="HqlExp_338_3" title="a definition with a single reference">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQueryLimit_338_10" title="a definition with no references">HqlQueryLimit</span></span>        = &lt;&lt;<a href="../HQL.sdf3/#HQLQueryRule_31_68" id="HQLQueryRule_338_35" title="a reference to a single-file definition">HQLQueryRule</a>&gt; <span class="cons_String">limit</span> &lt;<a href="#LimitValueExp_331_10" id="LimitValueExp_338_56" title="a reference to a single-file definition">LimitValueExp</a>&gt;&gt;
  <a href="#HqlExp_335_16" id="HqlExp_339_3" title="a definition with a single reference">HqlExp</a>.<span class="cons_Constructor"><span id="HqlQueryLimitOffset_339_10" title="a definition with no references">HqlQueryLimitOffset</span></span>  = &lt;&lt;<a href="../HQL.sdf3/#HQLQueryRule_31_68" id="HQLQueryRule_339_35" title="a reference to a single-file definition">HQLQueryRule</a>&gt; <span class="cons_String">limit</span> &lt;<a href="#LimitValueExp_331_10" id="LimitValueExp_339_56" title="a reference to a single-file definition">LimitValueExp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#LimitValueExp_331_10" id="LimitValueExp_339_74" title="a reference to a single-file definition">LimitValueExp</a>&gt;&gt;

  <button class="modal-open" id="LimitValueExp_341_3" title="a definition with multiple references" data-urls="#LimitValueExp line 338_56, 339_56, 339_74">LimitValueExp</button>.<span class="cons_Constructor"><span id="LimitValueExp_341_17" title="a definition with no references">LimitValueExp</span></span>     = &lt;&lt;<a href="#Exp_34_3" id="Exp_341_39" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="LimitValueExp_342_3" title="a definition with multiple references" data-urls="#LimitValueExp line 338_56, 339_56, 339_74">LimitValueExp</button>.<span class="cons_Constructor"><span id="LimitValueDslExp_342_17" title="a definition with no references">LimitValueDslExp</span></span>  = &lt;&lt;<a href="#DslExp_331_24" id="DslExp_342_39" title="a reference to a single-file definition">DslExp</a>&gt;&gt;

  <button class="modal-open" id="DslExp_344_3" title="a definition with multiple references" data-urls="#DslExp line 342_39; ../HQL.sdf3/#DslExp line 143_29">DslExp</button>.<span class="cons_Constructor"><span id="DslExp_344_10" title="a definition with no references">DslExp</span></span> = &lt;<span class="cons_String">~</span> &lt;<a href="#Exp_34_3" id="Exp_344_23" title="a reference to a single-file definition">Exp</a>&gt;&gt;

  <button class="modal-open" id="Statement_346_3" title="a definition with multiple references" data-urls="#Statement line 46_6, 66_3, 145_3">Statement</button>.<span class="cons_Constructor"><span id="HqlStatement_346_13" title="a definition with no references">HqlStatement</span></span> = &lt;
    &lt;<a href="../HQL.sdf3/#HQLDeleteStatement_31_16" id="HQLDeleteStatement_347_6" title="a reference to a single-file definition">HQLDeleteStatement</a>&gt; <span class="cons_String">;</span>
  &gt;

<span class="keyword">context-free priorities</span>

  {<span class="keyword">left</span> :
    <a href="#Exp_34_3" id="Exp_353_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Call_251_7" id="Call_353_9" title="a reference to a single-file definition">Call</a></span>
    <a href="#Exp_34_3" id="Exp_354_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#FieldAccess_191_7" id="FieldAccess_354_9" title="a reference to a single-file definition">FieldAccess</a></span>
    <a href="#Exp_34_3" id="Exp_355_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#CollectionIndex_192_7" id="CollectionIndex_355_9" title="a reference to a single-file definition">CollectionIndex</a></span>
  } &gt;
  {<span class="keyword">non-assoc</span> :
    <a href="#Exp_34_3" id="Exp_358_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#IsA_252_7" id="IsA_358_9" title="a reference to a single-file definition">IsA</a></span>
    <a href="#Exp_34_3" id="Exp_359_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Cast_253_7" id="Cast_359_9" title="a reference to a single-file definition">Cast</a></span>
    <a href="#Exp_34_3" id="Exp_360_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#InColl_254_7" id="InColl_360_9" title="a reference to a single-file definition">InColl</a></span>
  } &gt;
  {
    <a href="#Exp_34_3" id="Exp_363_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Not_306_7" id="Not_363_9" title="a reference to a single-file definition">Not</a></span>
  } &gt;
  {<span class="keyword">left</span> :
    <a href="#Exp_34_3" id="Exp_366_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Mul_323_7" id="Mul_366_9" title="a reference to a single-file definition">Mul</a></span>
    <a href="#Exp_34_3" id="Exp_367_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Div_324_7" id="Div_367_9" title="a reference to a single-file definition">Div</a></span>
    <a href="#Exp_34_3" id="Exp_368_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Mod_325_7" id="Mod_368_9" title="a reference to a single-file definition">Mod</a></span>
  } &gt;
  {<span class="keyword">left</span>:
    <a href="#Exp_34_3" id="Exp_371_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Add_326_7" id="Add_371_9" title="a reference to a single-file definition">Add</a></span>
    <a href="#Exp_34_3" id="Exp_372_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Sub_327_7" id="Sub_372_9" title="a reference to a single-file definition">Sub</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_34_3" id="Exp_374_11" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Search.sdf3/#RetrievalExp_251_7" id="RetrievalExp_374_15" title="a reference to a single-file definition">RetrievalExp</a></span> } &gt;
  {<span class="keyword">left</span> :
    <a href="#Exp_34_3" id="Exp_376_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Eq_281_7" id="Eq_376_9" title="a reference to a single-file definition">Eq</a></span>
    <a href="#Exp_34_3" id="Exp_377_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#NotEq_282_7" id="NotEq_377_9" title="a reference to a single-file definition">NotEq</a></span>
    <a href="#Exp_34_3" id="Exp_378_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#LargerThan_283_7" id="LargerThan_378_9" title="a reference to a single-file definition">LargerThan</a></span>
    <a href="#Exp_34_3" id="Exp_379_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#LargerThanOrEqual_284_7" id="LargerThanOrEqual_379_9" title="a reference to a single-file definition">LargerThanOrEqual</a></span>
    <a href="#Exp_34_3" id="Exp_380_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThan_285_7" id="SmallerThan_380_9" title="a reference to a single-file definition">SmallerThan</a></span>
    <a href="#Exp_34_3" id="Exp_381_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#SmallerThanOrEqual_286_7" id="SmallerThanOrEqual_381_9" title="a reference to a single-file definition">SmallerThanOrEqual</a></span>
  } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_34_3" id="Exp_383_11" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#And_304_7" id="And_383_15" title="a reference to a single-file definition">And</a></span> } &gt;
  {<span class="keyword">left</span> : <a href="#Exp_34_3" id="Exp_384_11" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#Or_305_7" id="Or_384_15" title="a reference to a single-file definition">Or</a></span> } &gt;
  { <a href="#Exp_34_3" id="Exp_385_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#HqlExp_335_7" id="HqlExp_385_9" title="a reference to a single-file definition">HqlExp</a></span> } &gt;
  { <a href="#Exp_34_3" id="Exp_386_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Search.sdf3/#SearcherDef_171_7" id="SearcherDef_386_9" title="a reference to a single-file definition">SearcherDef</a></span> } &gt;
  { <a href="#Exp_34_3" id="Exp_387_5" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="#IfExp_256_7" id="IfExp_387_9" title="a reference to a single-file definition">IfExp</a></span> }

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="EmailCall_391_3" title="a definition with multiple references" data-urls="#EmailCall line 395_49, 396_37, 397_38, 398_45, 406_30, 407_24, 408_22, 409_28">EmailCall</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Exp_395_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="RenderEmailFunctionCall_395_7" title="a definition with no references">RenderEmailFunctionCall</span></span> = &lt;<span class="cons_String">renderemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_395_49" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_396_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="EmailFunctionCall_396_7" title="a definition with no references">EmailFunctionCall</span></span> = &lt;<span class="cons_String">email</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_396_37" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_397_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="EmailFunctionCallAlt_397_7" title="a definition with no references">EmailFunctionCallAlt</span></span> = &lt;<span class="cons_String">email</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_397_38" title="a reference to a single-file definition">EmailCall</a>&gt;&gt;
  <button class="modal-open" id="Exp_398_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="SendEmailFunctionCall_398_7" title="a definition with no references">SendEmailFunctionCall</span></span> = &lt;<span class="cons_String">sendemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_398_45" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="EmailCall_399_3" title="a definition with multiple references" data-urls="#EmailCall line 395_49, 396_37, 397_38, 398_45, 406_30, 407_24, 408_22, 409_28">EmailCall</button>.<span class="cons_Constructor"><span id="EmailCall_399_13" title="a definition with no references">EmailCall</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_399_27" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_34_3" id="Exp_399_35" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <button class="modal-open" id="Exp_401_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="RenderTemplateFunctionCall_401_7" title="a definition with no references">RenderTemplateFunctionCall</span></span> = &lt;<span class="cons_String">rendertemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3/#TemplateCall_135_3" id="TemplateCall_401_55" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="Exp_402_3" title="a definition with multiple references" data-urls="#Exp line 36_77, 37_88, 50_6, 53_13, 66_25, 83_30, 86_21, 96_11, 99_11, 102_11, 104_40, 109_14, 121_17, 140_29, 145_33, 150_32, 153_23, 159_31, 159_40, 162_14, 192_27, 192_35, 195_19, 202_22, 221_14, 232_6, 232_15, 236_23, 236_33, 237_27, 238_26, 239_50, 240_48, 250_36, 251_16, 251_32, 252_15, 253_16, 254_18, 254_27, 256_22, 256_30, 256_41, 258_43, 260_50, 269_37, 281_14, 281_23, 282_17, 282_26, 283_22, 283_31, 284_29, 284_39, 285_23, 285_32, 286_30, 286_40, 304_15, 304_24, 305_14, 305_23, 306_17, 307_13, 308_49, 308_77, 309_49, 309_68, 310_69, 311_69, 312_60, 313_69, 314_60, 315_69, 316_60, 320_32, 323_15, 323_23, 324_15, 324_23, 325_15, 325_23, 326_15, 326_23, 327_15, 327_23, 341_39, 344_23, 353_5, 354_5, 355_5, 358_5, 359_5, 360_5, 363_5, 366_5, 367_5, 368_5, 371_5, 372_5, 374_11, 376_5, 377_5, 378_5, 379_5, 380_5, 381_5, 383_11, 384_11, 385_5, 386_5, 387_5, 399_35; ../WebDSL-AccessControl.sdf3/#Exp line 38_8, 47_8, 62_8, 67_8, 85_8; ../WebDSL-Core.sdf3/#Exp line 40_31; ../WebDSL-DataModel.sdf3/#Exp line 54_30, 57_30, 60_21, 63_21, 72_38, 75_38, 78_29, 81_29, 94_55, 125_40, 126_40; ../WebDSL-Dispatch.sdf3/#Exp line 44_17, 46_57; ../WebDSL-TimeInterval.sdf3/#Exp line 13_30, 14_29, 15_30, 16_32, 17_32, 18_37, 24_13; ../WebDSL-XML.sdf3/#Exp line 67_38, 68_42, 76_40, 79_68, 80_48">Exp</button>.<span class="cons_Constructor"><span id="ValidateTemplateFunctionCall_402_7" title="a definition with no references">ValidateTemplateFunctionCall</span></span> = &lt;<span class="cons_String">validatetemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3/#TemplateCall_135_3" id="TemplateCall_402_59" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt;

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="ThisCall_406_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">renderemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_406_30" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="ThisCall_407_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">email</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_407_24" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="ThisCall_408_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">email</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_408_22" title="a reference to a single-file definition">EmailCall</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="ThisCall_409_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">sendemail</span> <span class="cons_String">(</span> &lt;<a href="#EmailCall_391_3" id="EmailCall_409_28" title="a reference to a single-file definition">EmailCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

  <button class="modal-open" id="ThisCall_411_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">rendertemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3/#TemplateCall_135_3" id="TemplateCall_411_33" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="ThisCall_412_3" title="a definition with multiple references" data-urls="#ThisCall line 249_9, 259_30; ../WebDSL-UI.sdf3/#ThisCall line 349_35, 390_23">ThisCall</button> = &lt;<span class="cons_String">validatetemplate</span> <span class="cons_String">(</span> &lt;<a href="../HQL.sdf3/#TemplateCall_135_3" id="TemplateCall_412_35" title="a reference to a single-file definition">TemplateCall</a>&gt; <span class="cons_String">)</span>&gt; {<span class="keyword">reject</span>}

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
