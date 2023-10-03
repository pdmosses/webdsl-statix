---
title: webdsl.stx
hide:
  - toc
---

# `webdsl.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl.stx "The source file on GitHub"

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
413
414
415
416
417
418
419
420
421
422
423
424
425
426
427
428
429
430
431
432
433
434
435
436
437
438
439
440
441
442
443
444
445
446
447
448
449
450
451
452
453
454
455
456
457
458
459
460
461
462
463
464
465
466
467
468
469
470
471
472
473
474
475
476
477
478
479
480
481
482
483
484
485
486
487
488
489
490
491
492
493
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-ac.stx#static-semantics/webdsl_335_358" id="static-semantics/webdsl_7_30" title="Referenced at ../webdsl-ac.stx line 16; ../webdsl-actions.stx line 15; ../webdsl-built-ins.stx line 6; ../webdsl-entities.stx line 14; ../webdsl-expand.stx line 8; ../webdsl-hql.stx line 6; ../webdsl-modules.stx line 6; ../webdsl-native.stx line 11; ../webdsl-regex.stx line 6; ../webdsl-search.stx line 6; ../webdsl-services.stx line 8; ../webdsl-types.stx line 9; ../webdsl-ui.stx line 18; ../../statics.stx line 4; ../actions/binops.stx line 7; ../actions/built-ins.stx line 7; ../actions/emails.stx line 6; ../actions/functions.stx line 9; ../entities/annotations.stx line 9; ../entities/built-ins.stx line 10; ../entities/generated-functions.stx line 8; ../types/built-ins.stx line 11; ../types/type-extensions.stx line 11; ../ui/actions.stx line 15; ../ui/ajax.stx line 9; ../ui/attributes.stx line 7; ../ui/built-ins.stx line 8; ../ui/template-calls.stx line 16">static-semantics/webdsl</a>

<span class="keyword">imports</span>
  <a href="../../../src-gen/statix/signatures/webdsl-statix-sig.stx#signatures/webdsl-statix-sig_7_35" id="signatures/webdsl-statix-sig_42_70" title="Defined at ../../../src-gen/statix/signatures/webdsl-statix-sig.stx line 1">signatures/webdsl-statix-sig</a>

  <a href="../actions/built-ins.stx#static-semantics/actions/built-ins_7_41" id="static-semantics/actions/built-ins_74_108" title="Defined at ../actions/built-ins.stx line 1">static-semantics/actions/built-ins</a>
  <a href="../entities/built-ins.stx#static-semantics/entities/built-ins_7_42" id="static-semantics/entities/built-ins_111_146" title="Defined at ../entities/built-ins.stx line 1">static-semantics/entities/built-ins</a>
  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_149_181" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>
  <a href="../ui/built-ins.stx#static-semantics/ui/built-ins_7_36" id="static-semantics/ui/built-ins_184_213" title="Defined at ../ui/built-ins.stx line 1">static-semantics/ui/built-ins</a>

  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_217_254" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../webdsl-ac.stx#static-semantics/webdsl-ac_7_33" id="static-semantics/webdsl-ac_258_284" title="Defined at ../webdsl-ac.stx line 1">static-semantics/webdsl-ac</a>
  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_287_318" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_321_353" title="Defined at ../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../webdsl-expand.stx#static-semantics/webdsl-expand_7_37" id="static-semantics/webdsl-expand_356_386" title="Defined at ../webdsl-expand.stx line 1">static-semantics/webdsl-expand</a>
  <a href="../webdsl-hql.stx#static-semantics/webdsl-hql_7_34" id="static-semantics/webdsl-hql_389_416" title="Defined at ../webdsl-hql.stx line 1">static-semantics/webdsl-hql</a>
  <a href="../webdsl-modules.stx#static-semantics/webdsl-modules_7_38" id="static-semantics/webdsl-modules_419_450" title="Defined at ../webdsl-modules.stx line 1">static-semantics/webdsl-modules</a>
  <a href="../webdsl-native.stx#static-semantics/webdsl-native_7_37" id="static-semantics/webdsl-native_453_483" title="Defined at ../webdsl-native.stx line 1">static-semantics/webdsl-native</a>
  <a href="../webdsl-regex.stx#static-semantics/webdsl-regex_7_36" id="static-semantics/webdsl-regex_486_515" title="Defined at ../webdsl-regex.stx line 1">static-semantics/webdsl-regex</a>
  <a href="../webdsl-search.stx#static-semantics/webdsl-search_7_37" id="static-semantics/webdsl-search_518_548" title="Defined at ../webdsl-search.stx line 1">static-semantics/webdsl-search</a>
  <a href="../webdsl-services.stx#static-semantics/webdsl-services_7_39" id="static-semantics/webdsl-services_551_583" title="Defined at ../webdsl-services.stx line 1">static-semantics/webdsl-services</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_586_615" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_618_644" title="Defined at ../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#TYPE_985_989" id="TYPE_669_673" title="Referenced at line 39, 69, 100, 105, 113, 118, 123, 127, 151, 154, 157, 163, 169, 172, 175, 183, 186, 186, 191, 191, 191, 196, 204, 209, 217, 217, 220, 220, 223, 223, 228, 234, 245, 257, 257, 265, 270, 281, 289, 289, 294, 294, 301, 306, 314, 320, 326, 332, 361, 363, 388, 390, 395, 398, 401, 401, 408, 408, 411, 411, 436, 463, 463, 463, 468, 468, 471, 471, 476, 484, 484, 488, 488; ../webdsl-ac.stx line 75, 79, 79, 88, 176, 176, 202, 202, 216, 244, 244, 256, 266, 271, 278; ../webdsl-actions.stx line 100, 113, 120, 200, 200, 260, 260, 300, 308, 324; ../webdsl-built-ins.stx line 10, 10, 13, 13; ../webdsl-entities.stx line 83, 88, 102, 139, 150, 183, 194; ../webdsl-expand.stx line 46; ../webdsl-hql.stx line 18, 27, 35, 41, 45, 48, 53, 57, 123, 127, 138, 138; ../webdsl-native.stx line 32, 57, 118; ../webdsl-search.stx line 23, 50, 69, 89, 89, 95, 95; ../webdsl-types.stx line 17, 17, 17, 18, 18, 20, 21, 23, 24, 26, 26, 29, 29, 32, 32, 33, 33, 35, 35, 36, 36, 37, 37, 40, 41, 43, 43, 45, 46, 47, 48, 49, 67, 127, 130, 137, 140, 154, 160, 198, 201, 218, 223, 228, 232, 235, 235, 239, 244, 250, 255, 260, 267, 267, 273, 273, 279, 279, 286, 286, 289, 289, 292, 292, 298; ../webdsl-ui.stx line 44, 114, 114, 118, 118, 126, 131, 131, 250, 286, 292, 315, 320; ../actions/binops.stx line 19, 143, 143, 143, 148, 148, 148; ../actions/functions.stx line 37, 41, 41, 51, 51, 59, 128, 128, 133, 133, 139, 146, 146, 150, 156, 165, 165, 173, 173, 173, 180, 180, 188, 188, 188, 194, 194, 194, 202, 202, 202, 202, 208, 208, 208, 214, 214, 214, 214, 221, 221, 226, 226, 253, 262, 262, 267, 267, 273, 273; ../entities/annotations.stx line 76, 118, 118, 171, 171, 215, 231, 251, 251, 254, 254, 258, 258, 262, 262, 265, 265; ../entities/generated-functions.stx line 23, 50, 50; ../types/built-ins.stx line 34, 41, 43, 45, 48, 50, 52, 54, 56, 58, 60, 62, 65, 67, 69, 72, 74, 76, 78, 81, 84; ../ui/actions.stx line 54, 125, 131, 138, 188; ../ui/ajax.stx line 89; ../ui/template-calls.stx line 48, 128, 132">TYPE</a>   <span class="layout">// semantic type</span>
    <a href="#BOOL_835_839" id="BOOL_697_701" title="Referenced at line 34, 35, 157, 175, 186, 223, 257, 401, 411, 417, 417, 419, 419, 419, 424, 424, 424, 428, 428, 432, 432, 436; ../webdsl-ac.stx line 189, 202; ../webdsl-actions.stx line 120; ../webdsl-built-ins.stx line 13; ../webdsl-entities.stx line 206, 213, 225; ../webdsl-modules.stx line 40, 75, 79, 102, 109, 115; ../webdsl-native.stx line 57; ../webdsl-types.stx line 17, 29, 130, 140, 201, 292; ../webdsl-ui.stx line 44, 98, 103, 108, 108, 114, 114, 118, 267, 267; ../actions/functions.stx line 104, 133, 180, 188; ../entities/annotations.stx line 220, 223, 240, 258, 262, 265, 270; ../entities/generated-functions.stx line 23, 50; ../ui/actions.stx line 45, 54; ../ui/template-calls.stx line 30, 37">BOOL</a>   <span class="layout">// used as return values of functional rules</span>
    <a href="#ORIGIN_898_904" id="ORIGIN_753_759" title="Referenced at line 37, 38, 39, 40, 41, 65, 123, 217, 220, 223, 265; ../webdsl-ac.stx line 202; ../actions/functions.stx line 128, 133">ORIGIN</a> <span class="layout">// dummy data: used to guide scope graph differ</span>

  <span class="keyword">constructors</span>
    <a href="#TRUE_5524_5528" id="TRUE_828_832" title="Referenced at line 155, 173, 181, 181, 221, 246, 259, 259, 402, 409, 413, 418, 421, 421, 422, 422, 426, 426, 426, 433, 434, 437; ../webdsl-ac.stx line 47, 184, 185, 203; ../webdsl-actions.stx line 121; ../webdsl-entities.stx line 113, 215; ../webdsl-modules.stx line 38, 42, 77, 80, 81, 103, 104, 117; ../webdsl-native.stx line 18, 59; ../webdsl-regex.stx line 17, 22, 27, 32, 37; ../webdsl-types.stx line 98, 99, 119, 122, 123, 128, 132, 133, 134, 135, 138, 142, 143, 144, 145, 146, 147, 148, 149, 150, 199, 203, 290, 293; ../webdsl-ui.stx line 46, 101, 106, 110, 111, 112, 112, 116, 277; ../actions/functions.stx line 134, 182; ../entities/annotations.stx line 242, 246, 267, 271; ../entities/generated-functions.stx line 27, 52; ../ui/actions.stx line 56, 63, 74; ../ui/template-calls.stx line 24, 88">TRUE</a> : <a href="#BOOL_697_701" id="BOOL_835_839" title="Defined at line 30">BOOL</a>
    <a href="#FALSE_5391_5396" id="FALSE_844_849" title="Referenced at line 152, 170, 176, 181, 184, 184, 218, 229, 235, 260, 403, 404, 412, 420, 422, 425, 433, 434, 438; ../webdsl-ac.stx line 186, 204, 204; ../webdsl-actions.stx line 122; ../webdsl-entities.stx line 112, 116, 214; ../webdsl-modules.stx line 41, 76, 82, 105, 116; ../webdsl-native.stx line 58; ../webdsl-types.stx line 131, 141, 202, 287, 294; ../webdsl-ui.stx line 40, 41, 41, 45, 73, 73, 95, 95, 99, 104, 109, 111, 115, 128, 272, 276; ../actions/functions.stx line 135, 161, 183; ../entities/annotations.stx line 227, 241, 249, 268, 272; ../entities/generated-functions.stx line 24, 51; ../types/built-ins.stx line 122, 125, 126, 127, 128, 132, 133, 134, 135, 136, 139, 140, 141, 142, 143; ../ui/actions.stx line 55, 78; ../ui/template-calls.stx line 27, 67">FALSE</a> : <a href="#BOOL_697_701" id="BOOL_852_856" title="Defined at line 30">BOOL</a>

    <a href="../webdsl-ac.stx#FUNCTION_ORIGIN_11810_11825" id="FUNCTION_ORIGIN_862_877" title="Referenced at ../webdsl-ac.stx line 199; ../actions/functions.stx line 102, 112; ../ui/actions.stx line 56">FUNCTION_ORIGIN</a>: <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_884_893" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a>) -&gt; <a href="#ORIGIN_753_759" id="ORIGIN_898_904" title="Defined at line 31">ORIGIN</a>
    <a href="../webdsl-native.stx#NATIVE_FUNCTION_ORIGIN_3840_3862" id="NATIVE_FUNCTION_ORIGIN_909_931" title="Referenced at ../webdsl-native.stx line 87, 92, 101, 105">NATIVE_FUNCTION_ORIGIN</a>: <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Native-sig.stx#NativeType_168_178" id="NativeType_938_948" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Native-sig.stx line 13">NativeType</a>) -&gt; <a href="#ORIGIN_753_759" id="ORIGIN_953_959" title="Defined at line 31">ORIGIN</a>
    <a href="../webdsl-built-ins.stx#BUILTIN_ORIGIN_254_268" id="BUILTIN_ORIGIN_964_978" title="Referenced at ../webdsl-built-ins.stx line 11, 15">BUILTIN_ORIGIN</a>: <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_985_989" title="Defined at line 29">TYPE</a>) -&gt; <a href="#ORIGIN_753_759" id="ORIGIN_994_1000" title="Defined at line 31">ORIGIN</a>
    <a href="../entities/generated-functions.stx#PROP_ORIGIN_2392_2403" id="PROP_ORIGIN_1005_1016" title="Referenced at ../entities/generated-functions.stx line 53, 54">PROP_ORIGIN</a>: <a href="#ORIGIN_753_759" id="ORIGIN_1018_1024" title="Defined at line 31">ORIGIN</a> <span class="layout">// prop names should be unique. TODO: how about non-unique properties in incorrect programs?</span>
    <a href="../entities/generated-functions.stx#GENERATED_ORIGIN_890_906" id="GENERATED_ORIGIN_1122_1138" title="Referenced at ../entities/generated-functions.stx line 25, 32, 33, 34, 35, 36">GENERATED_ORIGIN</a>: <span class="keyword">int</span> -&gt; <a href="#ORIGIN_753_759" id="ORIGIN_1147_1153" title="Defined at line 31">ORIGIN</a>  <span class="layout">// unary identity-derived function</span>

  <span class="keyword">name-resolution</span>
    <span class="keyword">labels</span>
      <a href="#P_3449_3450" id="P_1226_1227" title="Referenced at line 107, 109, 139, 141, 142, 142, 142, 142, 142, 177, 198, 211, 230, 272, 283, 308, 310, 310, 366, 367; ../webdsl-ac.stx line 122, 129; ../webdsl-actions.stx line 46, 88, 151, 153, 172, 180, 187, 196, 211, 326, 335; ../webdsl-search.stx line 76, 82; ../webdsl-services.stx line 18; ../webdsl-ui.stx line 37, 38, 69, 70, 86, 93, 94, 145, 218, 227, 235, 245, 258, 302; ../actions/functions.stx line 24, 29, 34, 100, 110; ../entities/annotations.stx line 42, 44, 44, 44, 49, 51, 51, 51, 56, 58, 59, 59, 59, 111, 126, 139; ../ui/actions.stx line 47, 50, 149, 159, 168, 179, 193; ../ui/ajax.stx line 86; ../ui/attributes.stx line 23">P</a>         <span class="layout">// parent edge label for consecutive statements</span>
      <a href="#F_3452_3453" id="F_1290_1291" title="Referenced at line 107, 109, 139, 141, 142, 143, 143, 143, 143, 177, 198, 211, 230, 308, 310, 310; ../webdsl-ac.stx line 100, 111, 192; ../webdsl-actions.stx line 346; ../webdsl-search.stx line 76, 82; ../webdsl-services.stx line 15; ../webdsl-ui.stx line 34, 64; ../actions/functions.stx line 97, 107; ../entities/annotations.stx line 42, 44, 44, 44, 49, 51, 51, 51, 56, 58, 59, 60, 60; ../ui/attributes.stx line 23">F</a>         <span class="layout">// function edge label for embedding functions, templates and pages in a scope</span>
      <a href="#EXTEND_3457_3463" id="EXTEND_1385_1391" title="Referenced at line 107, 109, 177, 177, 198, 198, 211, 211, 230, 230, 236, 236, 238, 247, 247, 249, 308, 308, 310, 310, 316, 316, 322, 328, 328; ../webdsl-entities.stx line 60, 227, 227, 229, 229; ../webdsl-search.stx line 76, 82; ../actions/functions.stx line 158; ../entities/annotations.stx line 42, 44, 44, 44, 49, 51, 51, 51, 56, 56, 58, 59, 60, 61; ../ui/attributes.stx line 23">EXTEND</a>    <span class="layout">// extend edge label for extending entities</span>
      <a href="#INHERIT_3465_3472" id="INHERIT_1445_1452" title="Referenced at line 107, 109, 177, 198, 211, 230, 236, 238, 238, 247, 249, 249, 308, 310, 310, 316, 328; ../webdsl-entities.stx line 25, 36, 78, 78, 79, 95, 208, 210, 219, 220, 227, 229, 229; ../webdsl-native.stx line 39; ../webdsl-search.stx line 76, 82; ../entities/annotations.stx line 56, 58, 59, 60, 61; ../entities/built-ins.stx line 17, 30, 34; ../types/built-ins.stx line 18, 27; ../ui/attributes.stx line 23">INHERIT</a>   <span class="layout">// inherit edge label for subclasses</span>
      <a href="#DEF_3478_3481" id="DEF_1498_1501" title="Referenced at line 107, 109, 139, 141, 142, 143, 144, 144, 144, 177, 198, 211, 230, 308, 310, 310; ../webdsl-actions.stx line 20; ../webdsl-entities.stx line 25, 36, 42, 71, 95; ../webdsl-native.stx line 39, 52; ../webdsl-search.stx line 76, 82; ../entities/built-ins.stx line 16; ../types/built-ins.stx line 18, 27; ../types/type-extensions.stx line 17; ../ui/attributes.stx line 23">DEF</a>       <span class="layout">// definition edge label for embedding top-level definitions in the module scope</span>
      <a href="#IMPORT_3484_3490" id="IMPORT_1595_1601" title="Referenced at line 107, 109, 139, 141, 142, 143, 144, 145, 177, 198, 211, 230, 308, 310, 310; ../webdsl-modules.stx line 17, 26, 43, 80, 94; ../webdsl-search.stx line 76, 82; ../ui/attributes.stx line 23">IMPORT</a>    <span class="layout">// import edge label for importing another module</span>
      <a href="#IMPORTLIB_3493_3502" id="IMPORTLIB_1661_1670" title="Referenced at line 107, 109, 109, 109, 109, 109, 109, 109, 139, 141, 142, 143, 144, 145, 177, 198, 211, 230, 308, 310; ../webdsl-modules.stx line 103; ../webdsl-search.stx line 76, 82; ../ui/attributes.stx line 23">IMPORTLIB</a> <span class="layout">// import edge label for importing statix libraries such as the built-in.app library</span>
      <a href="#GLOBAL_4692_4698" id="GLOBAL_1762_1768" title="Referenced at line 139, 141, 142, 143, 144, 145, 145; ../webdsl-modules.stx line 17, 26, 43">GLOBAL</a>    <span class="layout">// global edge label for edges from global scope to other modules</span>

  <span class="keyword">relations</span>
    <a href="#mod_2246_2249" id="mod_1855_1858" title="Referenced at line 75, 80, 86">mod</a> : <span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>

    <a href="#type_3193_3197" id="type_1887_1891" title="Referenced at line 102, 107">type</a> : <span class="keyword">string</span> * <span class="keyword">scope</span>

    <a href="#extendscope_4490_4501" id="extendscope_1914_1925" title="Referenced at line 135, 139">extendscope</a> : <span class="keyword">string</span> * <span class="keyword">scope</span>

    <a href="#page_6056_6060" id="page_1948_1952" title="Referenced at line 165, 198">page</a>     : <span class="keyword">string</span> * <span class="keyword">scope</span>
    <a href="#template_5649_5657" id="template_1978_1986" title="Referenced at line 159, 177">template</a> : <span class="keyword">string</span> * <span class="keyword">scope</span>
    <a href="#ac_8307_8309" id="ac_2008_2010" title="Referenced at line 206, 211">ac</a>       : <span class="keyword">string</span> * <span class="keyword">scope</span>

    <a href="#function_9330_9338" id="function_2039_2047" title="Referenced at line 226, 230, 236, 247, 267, 272; ../actions/functions.stx line 158">function</a> : <span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_2059_2065" title="Defined at line 31">ORIGIN</a> * <span class="keyword">scope</span>

    <a href="#var_12207_12210" id="var_2079_2082" title="Referenced at line 278, 283, 303, 308, 316, 322, 328; ../webdsl-ac.stx line 89; ../webdsl-actions.stx line 88">var</a>      : <span class="keyword">string</span> * <span class="keyword">scope</span>

    <a href="#typeOf_3806_3812" id="typeOf_2110_2116" title="Referenced at line 115, 120, 125, 129">typeOf</a> : <a href="#TYPE_669_673" id="TYPE_2119_2123" title="Defined at line 29">TYPE</a>

<span class="keyword">rules</span> <span class="layout">// module declaration and resolving</span>

  <a href="#declareMod_2214_2224" id="declareMod_2170_2180" title="Referenced at line 74; ../webdsl-modules.stx line 19, 27, 45">declareMod</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>
  <a href="#declareMod_2170_2180" id="declareMod_2214_2224" title="Defined at line 73">declareMod</a>(<a href="#s_2263_2264" id="s_2225_2226" title="Referenced at line 75, 76">s</a>, <a href="#m_2250_2251" id="m_2228_2229" title="Referenced at line 75, 76, 76">m</a>, <a href="#s_mod_2253_2258" id="s_mod_2231_2236" title="Referenced at line 75">s_mod</a>) :-
    !<a href="#mod_1855_1858" id="mod_2246_2249" title="Defined at line 55">mod</a>[<a href="#m_2228_2229" id="m_2250_2251" title="Defined at line 74">m</a>, <a href="#s_mod_2231_2236" id="s_mod_2253_2258" title="Defined at line 74">s_mod</a>] <span class="keyword">in</span> <a href="#s_2225_2226" id="s_2263_2264" title="Defined at line 74">s</a>,
    <a href="#resolveMod_2340_2350" id="resolveMod_2270_2280" title="Defined at line 78">resolveMod</a>(<a href="#s_2225_2226" id="s_2281_2282" title="Defined at line 74">s</a>, <a href="#m_2228_2229" id="m_2284_2285" title="Defined at line 74">m</a>) == [_] | <span class="keyword">error</span> $[Module [<a href="#m_2228_2229" id="m_2312_2313" title="Defined at line 74">m</a>] is already declared].

  <a href="#resolveMod_2270_2280" id="resolveMod_2340_2350" title="Referenced at line 76, 79; ../webdsl-modules.stx line 72, 73, 99, 100">resolveMod</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<span class="keyword">string</span>) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>)))
  <a href="#resolveMod_2340_2350" id="resolveMod_2417_2427" title="Defined at line 78">resolveMod</a>(<a href="#s_2523_2524" id="s_2428_2429" title="Referenced at line 82">s</a>, <a href="#m_2498_2499" id="m_2431_2432" title="Referenced at line 81">m</a>) = <a href="#ss_2529_2531" id="ss_2436_2438" title="Referenced at line 82">ss</a> :-
    <span class="keyword">query</span> <a href="#mod_1855_1858" id="mod_2452_2455" title="Defined at line 55">mod</a> <span class="keyword">filter e</span>
              <span class="keyword">and</span> { <a href="#m'_2491_2493" id="m'_2485_2487" title="Referenced at line 81">m'</a> :- <a href="#m'_2485_2487" id="m'_2491_2493" title="Defined at line 81">m'</a> == (<a href="#m_2431_2432" id="m_2498_2499" title="Defined at line 79">m</a>, _) }
              <span class="keyword">in</span> <a href="#s_2428_2429" id="s_2523_2524" title="Defined at line 79">s</a> |-&gt; <a href="#ss_2436_2438" id="ss_2529_2531" title="Defined at line 79">ss</a>.

  <a href="#resolveModWildcard_2621_2639" id="resolveModWildcard_2536_2554" title="Referenced at line 85; ../webdsl-modules.stx line 85">resolveModWildcard</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<span class="keyword">string</span>) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>)))
  <a href="#resolveModWildcard_2536_2554" id="resolveModWildcard_2621_2639" title="Defined at line 84">resolveModWildcard</a>(<a href="#s_2764_2765" id="s_2640_2641" title="Referenced at line 88">s</a>, <a href="#names_2734_2739" id="names_2643_2648" title="Referenced at line 87">names</a>) = /*<span class="keyword">modsOf</span>(*/ <a href="#ss_2770_2772" id="ss_2664_2666" title="Referenced at line 88">ss</a> /*)*/ :-
    <span class="keyword">query</span> <a href="#mod_1855_1858" id="mod_2686_2689" title="Defined at line 55">mod</a> <span class="keyword">filter e</span>
              <span class="keyword">and</span> { <a href="#m'_2741_2743" id="m'_2719_2721" title="Referenced at line 87">m'</a> :- <a href="#isPrefix_2777_2785" id="isPrefix_2725_2733" title="Defined at line 90">isPrefix</a>(<a href="#names_2643_2648" id="names_2734_2739" title="Defined at line 85">names</a>, <a href="#m'_2719_2721" id="m'_2741_2743" title="Defined at line 87">m'</a>) }
              <span class="keyword">in</span> <a href="#s_2640_2641" id="s_2764_2765" title="Defined at line 85">s</a> |-&gt; <a href="#ss_2664_2666" id="ss_2770_2772" title="Defined at line 85">ss</a>.

  <a href="#isPrefix_2725_2733" id="isPrefix_2777_2785" title="Referenced at line 87, 91">isPrefix</a> : <span class="keyword">list</span>(<span class="keyword">string</span>) * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>)
  <a href="#isPrefix_2777_2785" id="isPrefix_2828_2836" title="Defined at line 90">isPrefix</a>(<a href="#names_2878_2883" id="names_2837_2842" title="Referenced at line 91">names</a>, (<a href="#names'_2885_2891" id="names'_2845_2851" title="Referenced at line 91">names'</a>, _)) :- <a href="#isPrefix_internal_2897_2914" id="isPrefix_internal_2860_2877" title="Defined at line 93">isPrefix_internal</a>(<a href="#names_2837_2842" id="names_2878_2883" title="Defined at line 91">names</a>, <a href="#names'_2845_2851" id="names'_2885_2891" title="Defined at line 91">names'</a>).

  <a href="#isPrefix_internal_2860_2877" id="isPrefix_internal_2897_2914" title="Referenced at line 91, 94, 95, 95, 96">isPrefix_internal</a> : <span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">list</span>(<span class="keyword">string</span>)
  <a href="#isPrefix_internal_2897_2914" id="isPrefix_internal_2947_2964" title="Defined at line 93">isPrefix_internal</a>([], _).
  <a href="#isPrefix_internal_2897_2914" id="isPrefix_internal_2975_2992" title="Defined at line 93">isPrefix_internal</a>([x | <a href="#xs_3034_3036" id="xs_2998_3000" title="Referenced at line 95">xs</a>], [<span id="x_3004_3005" title="Not referenced locally, nor via imports">x</span> | <a href="#ys_3038_3040" id="ys_3008_3010" title="Referenced at line 95">ys</a>]) :- <a href="#isPrefix_internal_2897_2914" id="isPrefix_internal_3016_3033" title="Defined at line 93">isPrefix_internal</a>(<a href="#xs_2998_3000" id="xs_3034_3036" title="Defined at line 95">xs</a>, <a href="#ys_3008_3010" id="ys_3038_3040" title="Defined at line 95">ys</a>).
  <a href="#isPrefix_internal_2897_2914" id="isPrefix_internal_3045_3062" title="Defined at line 93">isPrefix_internal</a>(_, _) :- <span class="keyword">false</span>.

<span class="keyword">rules</span> <span class="layout">// type declaration and resolving</span>

  <a href="#declareType_3161_3172" id="declareType_3123_3134" title="Referenced at line 101; ../webdsl-ac.stx line 29; ../webdsl-entities.stx line 52, 98; ../webdsl-native.stx line 42; ../entities/built-ins.stx line 18, 19, 31, 35; ../types/built-ins.stx line 21, 31">declareType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_3154_3158" title="Defined at line 29">TYPE</a>
  <a href="#declareType_3123_3134" id="declareType_3161_3172" title="Defined at line 100">declareType</a>(<a href="#s_3220_3221" id="s_3173_3174" title="Referenced at line 102, 103">s</a>, <a href="#name_3198_3202" id="name_3176_3180" title="Referenced at line 102, 103, 103, 103">name</a>, <a href="#t_3213_3214" id="t_3182_3183" title="Referenced at line 102, 103">t</a>) :-
    !<a href="#type_1887_1891" id="type_3193_3197" title="Defined at line 57">type</a>[<a href="#name_3176_3180" id="name_3198_3202" title="Defined at line 101">name</a>, <a href="#withType_3748_3756" id="withType_3204_3212" title="Defined at line 113">withType</a>(<a href="#t_3182_3183" id="t_3213_3214" title="Defined at line 101">t</a>)] <span class="keyword">in</span> <a href="#s_3173_3174" id="s_3220_3221" title="Defined at line 101">s</a>,
    <a href="#resolveType_3324_3335" id="resolveType_3227_3238" title="Defined at line 105">resolveType</a>(<a href="#s_3173_3174" id="s_3239_3240" title="Defined at line 101">s</a>, <a href="#name_3176_3180" id="name_3242_3246" title="Defined at line 101">name</a>) == [(_, (_, <a href="#t_3182_3183" id="t_3260_3261" title="Defined at line 101">t</a>))] | <span class="keyword">error</span> $[Type [<a href="#name_3176_3180" id="name_3281_3285" title="Defined at line 101">name</a>] is defined multiple times] @<a href="#name_3176_3180" id="name_3315_3319" title="Defined at line 101">name</a>.

  <a href="#resolveType_3227_3238" id="resolveType_3324_3335" title="Referenced at line 103, 106; ../webdsl-ac.stx line 268, 273; ../webdsl-entities.stx line 24, 70; ../webdsl-native.stx line 27, 51; ../webdsl-types.stx line 220, 225, 230, 233; ../entities/annotations.stx line 174; ../entities/generated-functions.stx line 20, 46; ../types/built-ins.stx line 36">resolveType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_3379_3383" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveType_3324_3335" id="resolveType_3389_3400" title="Defined at line 105">resolveType</a>(<a href="#s_3735_3736" id="s_3401_3402" title="Referenced at line 111">s</a>, <a href="#name_3541_3545" id="name_3404_3408" title="Referenced at line 108">name</a>) = <a href="#typesOf_3825_3832" id="typesOf_3412_3419" title="Defined at line 117">typesOf</a>(<a href="#ts_3741_3743" id="ts_3420_3422" title="Referenced at line 111">ts</a>) :-
    <span class="keyword">query</span> <a href="#type_1887_1891" id="type_3437_3441" title="Defined at line 57">type</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_3449_3450" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_3452_3453" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_3457_3463" title="Defined at line 47">EXTEND</a>? <a href="#INHERIT_1445_1452" id="INHERIT_3465_3472" title="Defined at line 48">INHERIT</a>*) | (<a href="#DEF_1498_1501" id="DEF_3478_3481" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_3484_3490" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3493_3502" title="Defined at line 51">IMPORTLIB</a>)?))
               <span class="keyword">and</span> { <a href="#e'_3534_3536" id="e'_3528_3530" title="Referenced at line 108">e'</a> :- <a href="#e'_3528_3530" id="e'_3534_3536" title="Defined at line 108">e'</a> == (<a href="#name_3404_3408" id="name_3541_3545" title="Defined at line 106">name</a>, _) }
               <span class="keyword">min</span> $ &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3575_3584" title="Defined at line 51">IMPORTLIB</a>, <a href="#P_1226_1227" id="P_3586_3587" title="Defined at line 45">P</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3590_3599" title="Defined at line 51">IMPORTLIB</a>, <a href="#F_1290_1291" id="F_3601_3602" title="Defined at line 46">F</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3605_3614" title="Defined at line 51">IMPORTLIB</a>, <a href="#EXTEND_1385_1391" id="EXTEND_3616_3622" title="Defined at line 47">EXTEND</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3625_3634" title="Defined at line 51">IMPORTLIB</a>, <a href="#INHERIT_1445_1452" id="INHERIT_3636_3643" title="Defined at line 48">INHERIT</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3646_3655" title="Defined at line 51">IMPORTLIB</a>, <a href="#DEF_1498_1501" id="DEF_3657_3660" title="Defined at line 49">DEF</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3663_3672" title="Defined at line 51">IMPORTLIB</a>, <a href="#IMPORT_1595_1601" id="IMPORT_3674_3680" title="Defined at line 50">IMPORT</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_3683_3692" title="Defined at line 51">IMPORTLIB</a>
               <span class="keyword">and true</span>
               <span class="keyword">in</span> <a href="#s_3401_3402" id="s_3735_3736" title="Defined at line 106">s</a> |-&gt; <a href="#ts_3420_3422" id="ts_3741_3743" title="Defined at line 106">ts</a>.

  <a href="#withType_3204_3212" id="withType_3748_3756" title="Referenced at line 102, 114, 159, 165, 206, 225, 267, 278, 303; ../webdsl-ac.stx line 89">withType</a> : <a href="#TYPE_669_673" id="TYPE_3759_3763" title="Defined at line 29">TYPE</a> -&gt; <span class="keyword">scope</span>
  <a href="#withType_3748_3756" id="withType_3775_3783" title="Defined at line 113">withType</a>(<a href="#t_3813_3814" id="t_3784_3785" title="Referenced at line 115">t</a>) = <a href="#s_3802_3803" id="s_3789_3790" title="Referenced at line 115, 115">s</a> :-
    <span class="keyword">new</span> <a href="#s_3789_3790" id="s_3802_3803" title="Defined at line 114">s</a>, !<a href="#typeOf_2110_2116" id="typeOf_3806_3812" title="Defined at line 69">typeOf</a>[<a href="#t_3784_3785" id="t_3813_3814" title="Defined at line 114">t</a>] <span class="keyword">in</span> <a href="#s_3789_3790" id="s_3819_3820" title="Defined at line 114">s</a>.

  <a href="#typesOf_3412_3419" id="typesOf_3825_3832" title="Referenced at line 106, 176, 197, 210, 286, 307, 315, 321, 327">typesOf</a> <span class="keyword">maps</span> <a href="#typeOf_3866_3872" id="typeOf_3838_3844" title="Defined at line 118">typeOf</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOf_3838_3844" id="typeOf_3866_3872" title="Referenced at line 117, 119">typeOf</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <span class="keyword">scope</span>)) -&gt; (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_3922_3926" title="Defined at line 29">TYPE</a>))
  <a href="#typeOf_3866_3872" id="typeOf_3931_3937" title="Defined at line 118">typeOf</a>((p, (<span id="x_3943_3944" title="Not referenced locally, nor via imports">x</span>, <a href="#s_3997_3998" id="s_3946_3947" title="Referenced at line 120">s</a>))) = (<span id="p_3954_3955" title="Not referenced locally, nor via imports">p</span>, (x, <a href="#t_4008_4009" id="t_3961_3962" title="Referenced at line 120">t</a>)) :-
    <span class="keyword">query</span> <a href="#typeOf_2110_2116" id="typeOf_3978_3984" title="Defined at line 69">typeOf</a> <span class="keyword">filter e in</span> <a href="#s_3946_3947" id="s_3997_3998" title="Defined at line 119">s</a> |-&gt; [(_, <a href="#t_3961_3962" id="t_4008_4009" title="Defined at line 119">t</a>)].

  <a href="#typesOfStripOrigin_9482_9500" id="typesOfStripOrigin_4016_4034" title="Referenced at line 229, 235, 246, 271; ../actions/functions.stx line 161">typesOfStripOrigin</a> <span class="keyword">maps</span> <a href="#typeOfStripOrigin_4079_4096" id="typeOfStripOrigin_4040_4057" title="Defined at line 123">typeOfStripOrigin</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfStripOrigin_4040_4057" id="typeOfStripOrigin_4079_4096" title="Referenced at line 122, 124">typeOfStripOrigin</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_4117_4123" title="Defined at line 31">ORIGIN</a> * <span class="keyword">scope</span>)) -&gt; (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_4155_4159" title="Defined at line 29">TYPE</a>))
  <a href="#typeOfStripOrigin_4079_4096" id="typeOfStripOrigin_4164_4181" title="Defined at line 123">typeOfStripOrigin</a>((<span id="p_4183_4184" title="Not referenced locally, nor via imports">p</span>, (x, _, <a href="#s_4244_4245" id="s_4193_4194" title="Referenced at line 125">s</a>))) = (p, (<span id="x_4205_4206" title="Not referenced locally, nor via imports">x</span>, <a href="#t_4255_4256" id="t_4208_4209" title="Referenced at line 125">t</a>)) :-
    <span class="keyword">query</span> <a href="#typeOf_2110_2116" id="typeOf_4225_4231" title="Defined at line 69">typeOf</a> <span class="keyword">filter e in</span> <a href="#s_4193_4194" id="s_4244_4245" title="Defined at line 124">s</a> |-&gt; [(_, <a href="#t_4208_4209" id="t_4255_4256" title="Defined at line 124">t</a>)].

  <a href="#simpleTypeOf_4294_4306" id="simpleTypeOf_4263_4275" title="Referenced at line 128, 240, 241, 251, 252">simpleTypeOf</a> : <span class="keyword">scope</span> -&gt; <a href="#TYPE_669_673" id="TYPE_4287_4291" title="Defined at line 29">TYPE</a>
  <a href="#simpleTypeOf_4263_4275" id="simpleTypeOf_4294_4306" title="Defined at line 127">simpleTypeOf</a>(<a href="#s_4346_4347" id="s_4307_4308" title="Referenced at line 129">s</a>) = <a href="#t_4357_4358" id="t_4312_4313" title="Referenced at line 129">t</a> :-
    <span class="keyword">query</span> <a href="#typeOf_2110_2116" id="typeOf_4327_4333" title="Defined at line 69">typeOf</a> <span class="keyword">filter e in</span> <a href="#s_4307_4308" id="s_4346_4347" title="Defined at line 128">s</a> |-&gt; [(_, <a href="#t_4312_4313" id="t_4357_4358" title="Defined at line 128">t</a>)].

<span class="keyword">rules</span> <span class="layout">// extend entity declaration</span>

  <a href="#declareExtendScope_4447_4465" id="declareExtendScope_4401_4419" title="Referenced at line 134; ../webdsl-ac.stx line 27, 85; ../webdsl-entities.stx line 49, 72; ../webdsl-native.stx line 40, 53; ../types/built-ins.stx line 19, 29, 121, 124, 130, 131, 138; ../types/type-extensions.stx line 18">declareExtendScope</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">scope</span>
  <a href="#declareExtendScope_4401_4419" id="declareExtendScope_4447_4465" title="Defined at line 133">declareExtendScope</a>(<a href="#s_4518_4519" id="s_4466_4467" title="Referenced at line 135">s</a>, <a href="#e_4502_4503" id="e_4469_4470" title="Referenced at line 135">e</a>, <a href="#s_extend_4505_4513" id="s_extend_4472_4480" title="Referenced at line 135">s_extend</a>) :-
    !<a href="#extendscope_1914_1925" id="extendscope_4490_4501" title="Defined at line 59">extendscope</a>[<a href="#e_4469_4470" id="e_4502_4503" title="Defined at line 134">e</a>, <a href="#s_extend_4472_4480" id="s_extend_4505_4513" title="Defined at line 134">s_extend</a>] <span class="keyword">in</span> <a href="#s_4466_4467" id="s_4518_4519" title="Defined at line 134">s</a>.

  <a href="#resolveExtendScope_4597_4615" id="resolveExtendScope_4524_4542" title="Referenced at line 138; ../webdsl-ac.stx line 28, 86; ../webdsl-entities.stx line 50, 73; ../webdsl-native.stx line 41, 54; ../types/built-ins.stx line 20, 30; ../types/type-extensions.stx line 19">resolveExtendScope</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <span class="keyword">scope</span>)))
  <a href="#resolveExtendScope_4524_4542" id="resolveExtendScope_4597_4615" title="Defined at line 137">resolveExtendScope</a>(<a href="#s_5227_5228" id="s_4616_4617" title="Referenced at line 147">s</a>, <a href="#x_4741_4742" id="x_4619_4620" title="Referenced at line 140">x</a>) = <a href="#ps_5233_5235" id="ps_4624_4626" title="Referenced at line 147">ps</a> :-
    <span class="keyword">query</span> <a href="#extendscope_1914_1925" id="extendscope_4640_4651" title="Defined at line 59">extendscope</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_4659_4660" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_4662_4663" title="Defined at line 46">F</a>* <a href="#DEF_1498_1501" id="DEF_4665_4668" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_4671_4677" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_4680_4689" title="Defined at line 51">IMPORTLIB</a>)? <a href="#GLOBAL_1762_1768" id="GLOBAL_4692_4698" title="Defined at line 52">GLOBAL</a>?
                      <span class="keyword">and</span> { <a href="#e'_4734_4736" id="e'_4728_4730" title="Referenced at line 140">e'</a> :- <a href="#e'_4728_4730" id="e'_4734_4736" title="Defined at line 140">e'</a> == (<a href="#x_4619_4620" id="x_4741_4742" title="Defined at line 138">x</a>, _) }
                      <span class="keyword">min</span> $ &lt; <a href="#P_1226_1227" id="P_4779_4780" title="Defined at line 45">P</a>, $ &lt; <a href="#F_1290_1291" id="F_4786_4787" title="Defined at line 46">F</a>, $ &lt; <a href="#DEF_1498_1501" id="DEF_4793_4796" title="Defined at line 49">DEF</a>, $ &lt; <a href="#IMPORT_1595_1601" id="IMPORT_4802_4808" title="Defined at line 50">IMPORT</a>, $ &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_4814_4823" title="Defined at line 51">IMPORTLIB</a>, $ &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_4829_4835" title="Defined at line 52">GLOBAL</a>,
                          <a href="#P_1226_1227" id="P_4863_4864" title="Defined at line 45">P</a> &lt; <a href="#F_1290_1291" id="F_4867_4868" title="Defined at line 46">F</a>, <a href="#P_1226_1227" id="P_4870_4871" title="Defined at line 45">P</a> &lt; <a href="#DEF_1498_1501" id="DEF_4874_4877" title="Defined at line 49">DEF</a>, <a href="#P_1226_1227" id="P_4879_4880" title="Defined at line 45">P</a> &lt; <a href="#IMPORT_1595_1601" id="IMPORT_4883_4889" title="Defined at line 50">IMPORT</a>, <a href="#P_1226_1227" id="P_4891_4892" title="Defined at line 45">P</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_4895_4904" title="Defined at line 51">IMPORTLIB</a>, <a href="#P_1226_1227" id="P_4906_4907" title="Defined at line 45">P</a> &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_4910_4916" title="Defined at line 52">GLOBAL</a>,
                          <a href="#F_1290_1291" id="F_4944_4945" title="Defined at line 46">F</a> &lt; <a href="#DEF_1498_1501" id="DEF_4948_4951" title="Defined at line 49">DEF</a>, <a href="#F_1290_1291" id="F_4953_4954" title="Defined at line 46">F</a> &lt; <a href="#IMPORT_1595_1601" id="IMPORT_4957_4963" title="Defined at line 50">IMPORT</a>, <a href="#F_1290_1291" id="F_4965_4966" title="Defined at line 46">F</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_4969_4978" title="Defined at line 51">IMPORTLIB</a>, <a href="#F_1290_1291" id="F_4980_4981" title="Defined at line 46">F</a> &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_4984_4990" title="Defined at line 52">GLOBAL</a>,
                          <a href="#DEF_1498_1501" id="DEF_5018_5021" title="Defined at line 49">DEF</a> &lt; <a href="#IMPORT_1595_1601" id="IMPORT_5024_5030" title="Defined at line 50">IMPORT</a>, <a href="#DEF_1498_1501" id="DEF_5032_5035" title="Defined at line 49">DEF</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_5038_5047" title="Defined at line 51">IMPORTLIB</a>, <a href="#DEF_1498_1501" id="DEF_5049_5052" title="Defined at line 49">DEF</a> &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_5055_5061" title="Defined at line 52">GLOBAL</a>,
                          <a href="#IMPORT_1595_1601" id="IMPORT_5089_5095" title="Defined at line 50">IMPORT</a> &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_5098_5104" title="Defined at line 52">GLOBAL</a>, <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_5106_5115" title="Defined at line 51">IMPORTLIB</a> &lt; <a href="#GLOBAL_1762_1768" id="GLOBAL_5118_5124" title="Defined at line 52">GLOBAL</a>
                      <span class="keyword">and</span> { (entity, entity_scope), (<span id="entity_5178_5184" title="Not referenced locally, nor via imports">entity</span>, <span id="entity_scope_5186_5198" title="Not referenced locally, nor via imports">entity_scope</span>) }
                      <span class="keyword">in</span> <a href="#s_4616_4617" id="s_5227_5228" title="Defined at line 138">s</a> |-&gt; <a href="#ps_4624_4626" id="ps_5233_5235" title="Defined at line 138">ps</a>.

<span class="keyword">rules</span> <span class="layout">// ui declaration and resolving</span>

  <a href="#declareTemplate_5327_5342" id="declareTemplate_5279_5294" title="Referenced at line 152, 342; ../webdsl-ac.stx line 36, 37, 38; ../webdsl-ui.stx line 295; ../ui/built-ins.stx line 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 33, 35, 36, 37, 38, 39, 41">declareTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_5319_5323" title="Defined at line 29">TYPE</a>)
  <a href="#declareTemplate_5279_5294" id="declareTemplate_5327_5342" title="Defined at line 151">declareTemplate</a>(<a href="#s_5381_5382" id="s_5343_5344" title="Referenced at line 152">s</a>, <a href="#t_5384_5385" id="t_5346_5347" title="Referenced at line 152">t</a>, <a href="#ts_5387_5389" id="ts_5349_5351" title="Referenced at line 152">ts</a>) :- <a href="#declareTemplate_internal_5536_5560" id="declareTemplate_internal_5356_5380" title="Defined at line 157">declareTemplate_internal</a>(<a href="#s_5343_5344" id="s_5381_5382" title="Defined at line 152">s</a>, <a href="#t_5346_5347" id="t_5384_5385" title="Defined at line 152">t</a>, <a href="#ts_5349_5351" id="ts_5387_5389" title="Defined at line 152">ts</a>, <a href="#FALSE_844_849" id="FALSE_5391_5396" title="Defined at line 35">FALSE</a>()).

  <a href="#declareAjaxTemplate_5456_5475" id="declareAjaxTemplate_5404_5423" title="Referenced at line 155">declareAjaxTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_5448_5452" title="Defined at line 29">TYPE</a>)
  <a href="#declareAjaxTemplate_5404_5423" id="declareAjaxTemplate_5456_5475" title="Defined at line 154">declareAjaxTemplate</a>(<a href="#s_5514_5515" id="s_5476_5477" title="Referenced at line 155">s</a>, <a href="#t_5517_5518" id="t_5479_5480" title="Referenced at line 155">t</a>, <a href="#ts_5520_5522" id="ts_5482_5484" title="Referenced at line 155">ts</a>) :- <a href="#declareTemplate_internal_5536_5560" id="declareTemplate_internal_5489_5513" title="Defined at line 157">declareTemplate_internal</a>(<a href="#s_5476_5477" id="s_5514_5515" title="Defined at line 155">s</a>, <a href="#t_5479_5480" id="t_5517_5518" title="Defined at line 155">t</a>, <a href="#ts_5482_5484" id="ts_5520_5522" title="Defined at line 155">ts</a>, <a href="#TRUE_828_832" id="TRUE_5524_5528" title="Defined at line 34">TRUE</a>()).

  <a href="#declareTemplate_internal_5356_5380" id="declareTemplate_internal_5536_5560" title="Referenced at line 152, 155, 158; ../webdsl-ui.stx line 120">declareTemplate_internal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_5585_5589" title="Defined at line 29">TYPE</a>) * <a href="#BOOL_697_701" id="BOOL_5593_5597" title="Defined at line 30">BOOL</a>
  <a href="#declareTemplate_internal_5536_5560" id="declareTemplate_internal_5600_5624" title="Defined at line 157">declareTemplate_internal</a>(<a href="#s_5697_5698" id="s_5625_5626" title="Referenced at line 159, 160, 161">s</a>, <a href="#t_5658_5659" id="t_5628_5629" title="Referenced at line 159, 159, 160, 160, 160, 161, 161, 161">t</a>, <a href="#ts_5682_5684" id="ts_5631_5633" title="Referenced at line 159, 161, 161">ts</a>, <a href="#ajax_5686_5690" id="ajax_5635_5639" title="Referenced at line 159">ajax</a>) :-
    !<a href="#template_1978_1986" id="template_5649_5657" title="Defined at line 62">template</a>[<a href="#t_5628_5629" id="t_5658_5659" title="Defined at line 158">t</a>, <a href="#withType_3748_3756" id="withType_5661_5669" title="Defined at line 113">withType</a>(<a href="../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_5670_5678" title="Defined at ../webdsl-types.stx line 29">TEMPLATE</a>(<a href="#t_5628_5629" id="t_5679_5680" title="Defined at line 158">t</a>, <a href="#ts_5631_5633" id="ts_5682_5684" title="Defined at line 158">ts</a>, <a href="#ajax_5635_5639" id="ajax_5686_5690" title="Defined at line 158">ajax</a>))] <span class="keyword">in</span> <a href="#s_5625_5626" id="s_5697_5698" title="Defined at line 158">s</a>,
    <a href="#resolvePage_7943_7954" id="resolvePage_5704_5715" title="Defined at line 196">resolvePage</a>(<a href="#s_5625_5626" id="s_5716_5717" title="Defined at line 158">s</a>, <a href="#t_5628_5629" id="t_5719_5720" title="Defined at line 158">t</a>) == [] | <span class="keyword">error</span> $[Multiple page/template definitions with name [<a href="#t_5628_5629" id="t_5784_5785" title="Defined at line 158">t</a>]] @<a href="#t_5628_5629" id="t_5789_5790" title="Defined at line 158">t</a>,
    <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_5796_5821" title="Defined at line 191">filterTemplateResultsArgs</a>(<a href="#resolveTemplate_6355_6370" id="resolveTemplate_5822_5837" title="Defined at line 169">resolveTemplate</a>(<a href="#s_5625_5626" id="s_5838_5839" title="Defined at line 158">s</a>, <a href="#t_5628_5629" id="t_5841_5842" title="Defined at line 158">t</a>), <a href="#ts_5631_5633" id="ts_5845_5847" title="Defined at line 158">ts</a>) == [_] | <span class="keyword">error</span> $[Multiple page/template definitions with name [<a href="#t_5628_5629" id="t_5912_5913" title="Defined at line 158">t</a>] and argument types [<a href="#ts_5631_5633" id="ts_5935_5937" title="Defined at line 158">ts</a>]] @<a href="#t_5628_5629" id="t_5941_5942" title="Defined at line 158">t</a>. <span class="layout">// correct error message for tests</span>

  <a href="#declarePage_6026_6037" id="declarePage_5982_5993" title="Referenced at line 164; ../webdsl-services.stx line 20; ../webdsl-ui.stx line 46; ../ui/built-ins.stx line 43">declarePage</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_6018_6022" title="Defined at line 29">TYPE</a>)
  <a href="#declarePage_5982_5993" id="declarePage_6026_6037" title="Defined at line 163">declarePage</a>(<a href="#s_6090_6091" id="s_6038_6039" title="Referenced at line 165, 166, 167">s</a>, <a href="#p_6061_6062" id="p_6041_6042" title="Referenced at line 165, 165, 166, 166, 166, 167, 167, 167">p</a>, <a href="#ts_6081_6083" id="ts_6044_6046" title="Referenced at line 165">ts</a>) :-
    !<a href="#page_1948_1952" id="page_6056_6060" title="Defined at line 61">page</a>[<a href="#p_6041_6042" id="p_6061_6062" title="Defined at line 164">p</a>, <a href="#withType_3748_3756" id="withType_6064_6072" title="Defined at line 113">withType</a>(<a href="../webdsl-types.stx#PAGE_624_628" id="PAGE_6073_6077" title="Defined at ../webdsl-types.stx line 26">PAGE</a>(<a href="#p_6041_6042" id="p_6078_6079" title="Defined at line 164">p</a>, <a href="#ts_6044_6046" id="ts_6081_6083" title="Defined at line 164">ts</a>))] <span class="keyword">in</span> <a href="#s_6038_6039" id="s_6090_6091" title="Defined at line 164">s</a>,
    <a href="#resolveTemplate_6355_6370" id="resolveTemplate_6097_6112" title="Defined at line 169">resolveTemplate</a>(<a href="#s_6038_6039" id="s_6113_6114" title="Defined at line 164">s</a>, <a href="#p_6041_6042" id="p_6116_6117" title="Defined at line 164">p</a>) == [] | <span class="keyword">error</span> $[Multiple page/template definitions with name [<a href="#p_6041_6042" id="p_6181_6182" title="Defined at line 164">p</a>]] @<a href="#p_6041_6042" id="p_6186_6187" title="Defined at line 164">p</a>, <span class="layout">// correct error message for tests</span>
    <a href="#resolvePage_7943_7954" id="resolvePage_6228_6239" title="Defined at line 196">resolvePage</a>(<a href="#s_6038_6039" id="s_6240_6241" title="Defined at line 164">s</a>, <a href="#p_6041_6042" id="p_6243_6244" title="Defined at line 164">p</a>) == [_] | <span class="keyword">error</span> $[Multiple page/template definitions with name [<a href="#p_6041_6042" id="p_6309_6310" title="Defined at line 164">p</a>]] @<a href="#p_6041_6042" id="p_6314_6315" title="Defined at line 164">p</a>. <span class="layout">// correct error message for tests</span>

  <a href="#resolveTemplate_5822_5837" id="resolveTemplate_6355_6370" title="Referenced at line 161, 166, 170; ../webdsl-ui.stx line 91, 121">resolveTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_6414_6418" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveTemplate_6355_6370" id="resolveTemplate_6424_6439" title="Defined at line 169">resolveTemplate</a>(<span id="s_6440_6441" title="Not referenced locally, nor via imports">s</span>, <span id="t_6443_6444" title="Not referenced locally, nor via imports">t</span>) = <a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_6448_6472" title="Defined at line 175">resolveTemplate_internal</a>(s, t, <a href="#FALSE_844_849" id="FALSE_6479_6484" title="Defined at line 35">FALSE</a>()).

  <a href="#resolveAjaxTemplate_6565_6584" id="resolveAjaxTemplate_6492_6511" title="Referenced at line 173; ../webdsl-ac.stx line 159, 163, 239; ../webdsl-ui.stx line 112">resolveAjaxTemplate</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_6555_6559" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveAjaxTemplate_6492_6511" id="resolveAjaxTemplate_6565_6584" title="Defined at line 172">resolveAjaxTemplate</a>(<span id="s_6585_6586" title="Not referenced locally, nor via imports">s</span>, <span id="t_6588_6589" title="Not referenced locally, nor via imports">t</span>) = <a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_6593_6617" title="Defined at line 175">resolveTemplate_internal</a>(s, t, <a href="#TRUE_828_832" id="TRUE_6624_6628" title="Defined at line 34">TRUE</a>()).

  <a href="#resolveTemplate_internal_6448_6472" id="resolveTemplate_internal_6636_6660" title="Referenced at line 170, 173, 176, 181, 181, 184; ../ui/template-calls.stx line 41">resolveTemplate_internal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#BOOL_697_701" id="BOOL_6680_6684" title="Defined at line 30">BOOL</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_6711_6715" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_6721_6745" title="Defined at line 175">resolveTemplate_internal</a>(<a href="#s_6940_6941" id="s_6746_6747" title="Referenced at line 179">s</a>, <a href="#t_6910_6911" id="t_6749_6750" title="Referenced at line 178">t</a>, <a href="#FALSE_844_849" id="FALSE_6752_6757" title="Defined at line 35">FALSE</a>()) = <a href="#typesOf_3825_3832" id="typesOf_6763_6770" title="Defined at line 117">typesOf</a>(<a href="#ps_6946_6948" id="ps_6771_6773" title="Referenced at line 179">ps</a>) :-
    <span class="keyword">query</span> <a href="#template_1978_1986" id="template_6788_6796" title="Defined at line 62">template</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_6804_6805" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_6807_6808" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_6812_6818" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_6821_6828" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_6829_6835" title="Defined at line 47">EXTEND</a>?)*) | (<a href="#DEF_1498_1501" id="DEF_6843_6846" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_6849_6855" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_6858_6867" title="Defined at line 51">IMPORTLIB</a>)?))
                   <span class="keyword">and</span> { <a href="#t'_6903_6905" id="t'_6897_6899" title="Referenced at line 178">t'</a> :- <a href="#t'_6897_6899" id="t'_6903_6905" title="Defined at line 178">t'</a> == (<a href="#t_6749_6750" id="t_6910_6911" title="Defined at line 176">t</a>, _) }
                   <span class="keyword">in</span> <a href="#s_6746_6747" id="s_6940_6941" title="Defined at line 176">s</a> |-&gt; <a href="#ps_6771_6773" id="ps_6946_6948" title="Defined at line 176">ps</a>.

  <a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_6953_6977" title="Defined at line 175">resolveTemplate_internal</a>(s, t, <a href="#TRUE_828_832" id="TRUE_6984_6988" title="Defined at line 34">TRUE</a>()) = <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_6994_7019" title="Defined at line 186">filterTemplateResultsAjax</a>(<a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_7020_7044" title="Defined at line 175">resolveTemplate_internal</a>(<span id="s_7045_7046" title="Not referenced locally, nor via imports">s</span>, <span id="t_7048_7049" title="Not referenced locally, nor via imports">t</span>, <a href="#FALSE_844_849" id="FALSE_7051_7056" title="Defined at line 35">FALSE</a>()), <a href="#TRUE_828_832" id="TRUE_7061_7065" title="Defined at line 34">TRUE</a>()).

  <a href="#resolveTemplateNoAjax_7148_7169" id="resolveTemplateNoAjax_7073_7094" title="Referenced at line 184; ../webdsl-ac.stx line 150, 154, 234; ../webdsl-ui.stx line 111">resolveTemplateNoAjax</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7138_7142" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveTemplateNoAjax_7073_7094" id="resolveTemplateNoAjax_7148_7169" title="Defined at line 183">resolveTemplateNoAjax</a>(<span id="s_7170_7171" title="Not referenced locally, nor via imports">s</span>, <span id="t_7173_7174" title="Not referenced locally, nor via imports">t</span>) = <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7178_7203" title="Defined at line 186">filterTemplateResultsAjax</a>(<a href="#resolveTemplate_internal_6636_6660" id="resolveTemplate_internal_7204_7228" title="Defined at line 175">resolveTemplate_internal</a>(s, t, <a href="#FALSE_844_849" id="FALSE_7235_7240" title="Defined at line 35">FALSE</a>()), <a href="#FALSE_844_849" id="FALSE_7245_7250" title="Defined at line 35">FALSE</a>()).

  <a href="#filterTemplateResultsAjax_6994_7019" id="filterTemplateResultsAjax_7258_7283" title="Referenced at line 181, 184, 187, 188, 188, 189, 189">filterTemplateResultsAjax</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7309_7313" title="Defined at line 29">TYPE</a>))) * <a href="#BOOL_697_701" id="BOOL_7319_7323" title="Defined at line 30">BOOL</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7350_7354" title="Defined at line 29">TYPE</a>)))
  <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7360_7385" title="Defined at line 186">filterTemplateResultsAjax</a>([], _) = [].
  <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7401_7426" title="Defined at line 186">filterTemplateResultsAjax</a>([t@(_, (_, <a href="../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_7438_7446" title="Defined at ../webdsl-types.stx line 29">TEMPLATE</a>(_, _, <span id="b_7453_7454" title="Not referenced locally, nor via imports">b</span>))) | <span id="ts_7460_7462" title="Not referenced locally, nor via imports">ts</span>], b) = [<span id="t_7471_7472" title="Not referenced locally, nor via imports">t</span> | <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7475_7500" title="Defined at line 186">filterTemplateResultsAjax</a>(ts, b)].
  <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7512_7537" title="Defined at line 186">filterTemplateResultsAjax</a>([_ | ts], <span id="b_7548_7549" title="Not referenced locally, nor via imports">b</span>) = <a href="#filterTemplateResultsAjax_7258_7283" id="filterTemplateResultsAjax_7553_7578" title="Defined at line 186">filterTemplateResultsAjax</a>(<span id="ts_7579_7581" title="Not referenced locally, nor via imports">ts</span>, b).

  <a href="#filterTemplateResultsArgs_5796_5821" id="filterTemplateResultsArgs_7590_7615" title="Referenced at line 161, 192, 193, 193, 194, 194">filterTemplateResultsArgs</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7641_7645" title="Defined at line 29">TYPE</a>))) * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_7656_7660" title="Defined at line 29">TYPE</a>) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7688_7692" title="Defined at line 29">TYPE</a>)))
  <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_7698_7723" title="Defined at line 191">filterTemplateResultsArgs</a>([], _) = [].
  <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_7739_7764" title="Defined at line 191">filterTemplateResultsArgs</a>([t@(_, (_, <a href="../webdsl-types.stx#TEMPLATE_725_733" id="TEMPLATE_7776_7784" title="Defined at ../webdsl-types.stx line 29">TEMPLATE</a>(_, <span id="args_7788_7792" title="Not referenced locally, nor via imports">args</span>, _))) | ts], args) = [<span id="t_7815_7816" title="Not referenced locally, nor via imports">t</span> | <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_7819_7844" title="Defined at line 191">filterTemplateResultsArgs</a>(<span id="ts_7845_7847" title="Not referenced locally, nor via imports">ts</span>, args)].
  <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_7859_7884" title="Defined at line 191">filterTemplateResultsArgs</a>([_ | <span id="ts_7890_7892" title="Not referenced locally, nor via imports">ts</span>], args) = <a href="#filterTemplateResultsArgs_7590_7615" id="filterTemplateResultsArgs_7903_7928" title="Defined at line 191">filterTemplateResultsArgs</a>(ts, <span id="args_7933_7937" title="Not referenced locally, nor via imports">args</span>).

  <a href="#resolvePage_5704_5715" id="resolvePage_7943_7954" title="Referenced at line 160, 167, 197; ../webdsl-ac.stx line 229; ../webdsl-types.stx line 262; ../webdsl-ui.stx line 110, 312">resolvePage</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_7998_8002" title="Defined at line 29">TYPE</a>)))
  <a href="#resolvePage_7943_7954" id="resolvePage_8008_8019" title="Defined at line 196">resolvePage</a>(<a href="#s_8193_8194" id="s_8020_8021" title="Referenced at line 200">s</a>, <a href="#p_8167_8168" id="p_8023_8024" title="Referenced at line 199">p</a>) = <a href="#typesOf_3825_3832" id="typesOf_8028_8035" title="Defined at line 117">typesOf</a>(<a href="#ps_8199_8201" id="ps_8036_8038" title="Referenced at line 200">ps</a>) :-
    <span class="keyword">query</span> <a href="#page_1948_1952" id="page_8053_8057" title="Defined at line 61">page</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_8065_8066" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_8068_8069" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_8073_8079" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_8082_8089" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_8090_8096" title="Defined at line 47">EXTEND</a>?)*) | (<a href="#DEF_1498_1501" id="DEF_8104_8107" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_8110_8116" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_8119_8128" title="Defined at line 51">IMPORTLIB</a>)?))
               <span class="keyword">and</span> { <a href="#p'_8160_8162" id="p'_8154_8156" title="Referenced at line 199">p'</a> :- <a href="#p'_8154_8156" id="p'_8160_8162" title="Defined at line 199">p'</a> == (<a href="#p_8023_8024" id="p_8167_8168" title="Defined at line 197">p</a>, _) }
               <span class="keyword">in</span> <a href="#s_8020_8021" id="s_8193_8194" title="Defined at line 197">s</a> |-&gt; <a href="#ps_8036_8038" id="ps_8199_8201" title="Defined at line 197">ps</a>.

<span class="keyword">rules</span> <span class="layout">// ac rules</span>

  <a href="#declarePointcut_8273_8288" id="declarePointcut_8225_8240" title="Referenced at line 205; ../webdsl-ac.stx line 210">declarePointcut</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_8265_8269" title="Defined at line 29">TYPE</a>)
  <a href="#declarePointcut_8225_8240" id="declarePointcut_8273_8288" title="Defined at line 204">declarePointcut</a>(<a href="#s_8343_8344" id="s_8289_8290" title="Referenced at line 206, 207">s</a>, <a href="#p_8310_8311" id="p_8292_8293" title="Referenced at line 206, 206, 207, 207, 207">p</a>, <a href="#ts_8334_8336" id="ts_8295_8297" title="Referenced at line 206">ts</a>) :-
    !<a href="#ac_2008_2010" id="ac_8307_8309" title="Defined at line 63">ac</a>[<a href="#p_8292_8293" id="p_8310_8311" title="Defined at line 205">p</a>, <a href="#withType_3748_3756" id="withType_8313_8321" title="Defined at line 113">withType</a>(<a href="../webdsl-types.stx#POINTCUT_798_806" id="POINTCUT_8322_8330" title="Defined at ../webdsl-types.stx line 32">POINTCUT</a>(<a href="#p_8292_8293" id="p_8331_8332" title="Defined at line 205">p</a>, <a href="#ts_8295_8297" id="ts_8334_8336" title="Defined at line 205">ts</a>))] <span class="keyword">in</span> <a href="#s_8289_8290" id="s_8343_8344" title="Defined at line 205">s</a>,
    <a href="#resolvePointcut_8436_8451" id="resolvePointcut_8350_8365" title="Defined at line 209">resolvePointcut</a>(<a href="#s_8289_8290" id="s_8366_8367" title="Defined at line 205">s</a>, <a href="#p_8292_8293" id="p_8369_8370" title="Defined at line 205">p</a>) == [_] | <span class="keyword">error</span> $[Pointcut [<a href="#p_8292_8293" id="p_8399_8400" title="Defined at line 205">p</a>] is defined multiple times] @<a href="#p_8292_8293" id="p_8430_8431" title="Defined at line 205">p</a>.

  <a href="#resolvePointcut_8350_8365" id="resolvePointcut_8436_8451" title="Referenced at line 207, 210; ../webdsl-ac.stx line 168, 172">resolvePointcut</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_8495_8499" title="Defined at line 29">TYPE</a>)))
  <a href="#resolvePointcut_8436_8451" id="resolvePointcut_8505_8520" title="Defined at line 209">resolvePointcut</a>(<a href="#s_8688_8689" id="s_8521_8522" title="Referenced at line 213">s</a>, <a href="#p_8664_8665" id="p_8524_8525" title="Referenced at line 212">p</a>) = <a href="#typesOf_3825_3832" id="typesOf_8529_8536" title="Defined at line 117">typesOf</a>(<a href="#ps_8694_8696" id="ps_8537_8539" title="Referenced at line 213">ps</a>) :-
    <span class="keyword">query</span> <a href="#ac_2008_2010" id="ac_8554_8556" title="Defined at line 63">ac</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_8564_8565" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_8567_8568" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_8572_8578" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_8581_8588" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_8589_8595" title="Defined at line 47">EXTEND</a>?)*) | (<a href="#DEF_1498_1501" id="DEF_8603_8606" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_8609_8615" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_8618_8627" title="Defined at line 51">IMPORTLIB</a>)?))
             <span class="keyword">and</span> { <a href="#p'_8657_8659" id="p'_8651_8653" title="Referenced at line 212">p'</a> :- <a href="#p'_8651_8653" id="p'_8657_8659" title="Defined at line 212">p'</a> == (<a href="#p_8524_8525" id="p_8664_8665" title="Defined at line 210">p</a>, _) }
             <span class="keyword">in</span> <a href="#s_8521_8522" id="s_8688_8689" title="Defined at line 210">s</a> |-&gt; <a href="#ps_8537_8539" id="ps_8694_8696" title="Defined at line 210">ps</a>.

<span class="keyword">rules</span> <span class="layout">// function declaration and resolving</span>

  <a href="#declareFunction_8810_8825" id="declareFunction_8746_8761" title="Referenced at line 218; ../webdsl-built-ins.stx line 11; ../webdsl-native.stx line 92; ../actions/functions.stx line 130, 135; ../entities/generated-functions.stx line 25, 32, 33, 34, 35, 36, 53, 54">declareFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_8781_8787" title="Defined at line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_8795_8799" title="Defined at line 29">TYPE</a>) * <a href="#TYPE_669_673" id="TYPE_8803_8807" title="Defined at line 29">TYPE</a>
  <a href="#declareFunction_8746_8761" id="declareFunction_8810_8825" title="Defined at line 217">declareFunction</a>(<a href="#s_8882_8883" id="s_8826_8827" title="Referenced at line 218">s</a>, <a href="#f_8885_8886" id="f_8829_8830" title="Referenced at line 218">f</a>, <a href="#origin_8888_8894" id="origin_8832_8838" title="Referenced at line 218">origin</a>, <a href="#args_8896_8900" id="args_8840_8844" title="Referenced at line 218">args</a>, <a href="#return_8902_8908" id="return_8846_8852" title="Referenced at line 218">return</a>) :- <a href="#declareFunction_internal_9111_9135" id="declareFunction_internal_8857_8881" title="Defined at line 223">declareFunction_internal</a>(<a href="#s_8826_8827" id="s_8882_8883" title="Defined at line 218">s</a>, <a href="#f_8829_8830" id="f_8885_8886" title="Defined at line 218">f</a>, <a href="#origin_8832_8838" id="origin_8888_8894" title="Defined at line 218">origin</a>, <a href="#args_8840_8844" id="args_8896_8900" title="Defined at line 218">args</a>, <a href="#return_8846_8852" id="return_8902_8908" title="Defined at line 218">return</a>, <a href="#FALSE_844_849" id="FALSE_8910_8915" title="Defined at line 35">FALSE</a>()).

  <a href="#declareStaticFunction_8993_9014" id="declareStaticFunction_8923_8944" title="Referenced at line 221; ../webdsl-native.stx line 87; ../actions/functions.stx line 134">declareStaticFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_8964_8970" title="Defined at line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_8978_8982" title="Defined at line 29">TYPE</a>) * <a href="#TYPE_669_673" id="TYPE_8986_8990" title="Defined at line 29">TYPE</a>
  <a href="#declareStaticFunction_8923_8944" id="declareStaticFunction_8993_9014" title="Defined at line 220">declareStaticFunction</a>(<a href="#s_9071_9072" id="s_9015_9016" title="Referenced at line 221">s</a>, <a href="#f_9074_9075" id="f_9018_9019" title="Referenced at line 221">f</a>, <a href="#origin_9077_9083" id="origin_9021_9027" title="Referenced at line 221">origin</a>, <a href="#args_9085_9089" id="args_9029_9033" title="Referenced at line 221">args</a>, <a href="#return_9091_9097" id="return_9035_9041" title="Referenced at line 221">return</a>) :- <a href="#declareFunction_internal_9111_9135" id="declareFunction_internal_9046_9070" title="Defined at line 223">declareFunction_internal</a>(<a href="#s_9015_9016" id="s_9071_9072" title="Defined at line 221">s</a>, <a href="#f_9018_9019" id="f_9074_9075" title="Defined at line 221">f</a>, <a href="#origin_9021_9027" id="origin_9077_9083" title="Defined at line 221">origin</a>, <a href="#args_9029_9033" id="args_9085_9089" title="Defined at line 221">args</a>, <a href="#return_9035_9041" id="return_9091_9097" title="Defined at line 221">return</a>, <a href="#TRUE_828_832" id="TRUE_9099_9103" title="Defined at line 34">TRUE</a>()).

  <a href="#declareFunction_internal_8857_8881" id="declareFunction_internal_9111_9135" title="Referenced at line 218, 221, 224">declareFunction_internal</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_9155_9161" title="Defined at line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_9169_9173" title="Defined at line 29">TYPE</a>) * <a href="#TYPE_669_673" id="TYPE_9177_9181" title="Defined at line 29">TYPE</a> * <a href="#BOOL_697_701" id="BOOL_9184_9188" title="Defined at line 30">BOOL</a>
  <a href="#declareFunction_internal_9111_9135" id="declareFunction_internal_9191_9215" title="Defined at line 223">declareFunction_internal</a>(<a href="#s_9361_9362" id="s_9216_9217" title="Referenced at line 226">s</a>, <a href="#f_9298_9299" id="f_9219_9220" title="Referenced at line 225, 226">f</a>, <a href="#origin_9342_9348" id="origin_9222_9228" title="Referenced at line 226">origin</a>, <a href="#args_9301_9305" id="args_9230_9234" title="Referenced at line 225">args</a>, <a href="#return_9307_9313" id="return_9236_9242" title="Referenced at line 225">return</a>, <a href="#static_9315_9321" id="static_9244_9250" title="Referenced at line 225">static</a>) :- { <a href="#s_type_9270_9276" id="s_type_9257_9263" title="Referenced at line 225, 226">s_type</a> }
    <a href="#s_type_9257_9263" id="s_type_9270_9276" title="Defined at line 224">s_type</a> == <a href="#withType_3748_3756" id="withType_9280_9288" title="Defined at line 113">withType</a>(<a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_9289_9297" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(<a href="#f_9219_9220" id="f_9298_9299" title="Defined at line 224">f</a>, <a href="#args_9230_9234" id="args_9301_9305" title="Defined at line 224">args</a>, <a href="#return_9236_9242" id="return_9307_9313" title="Defined at line 224">return</a>, <a href="#static_9244_9250" id="static_9315_9321" title="Defined at line 224">static</a>)),
    !<a href="#function_2039_2047" id="function_9330_9338" title="Defined at line 65">function</a>[<a href="#f_9219_9220" id="f_9339_9340" title="Defined at line 224">f</a>, <a href="#origin_9222_9228" id="origin_9342_9348" title="Defined at line 224">origin</a>, <a href="#s_type_9257_9263" id="s_type_9350_9356" title="Defined at line 224">s_type</a>] <span class="keyword">in</span> <a href="#s_9216_9217" id="s_9361_9362" title="Defined at line 224">s</a>.

  <a href="#resolveFunction_9436_9451" id="resolveFunction_9367_9382" title="Referenced at line 229; ../actions/functions.stx line 39, 152">resolveFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_9426_9430" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveFunction_9367_9382" id="resolveFunction_9436_9451" title="Defined at line 228">resolveFunction</a>(<a href="#s_9683_9684" id="s_9452_9453" title="Referenced at line 232">s</a>, <a href="#f_9650_9651" id="f_9455_9456" title="Referenced at line 231">f</a>) = <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_9460_9481" title="Defined at line 257">filterFunctionResults</a>(<a href="#typesOfStripOrigin_4016_4034" id="typesOfStripOrigin_9482_9500" title="Defined at line 122">typesOfStripOrigin</a>(<a href="#ps_9689_9691" id="ps_9501_9503" title="Referenced at line 232">ps</a>), <a href="#FALSE_844_849" id="FALSE_9506_9511" title="Defined at line 35">FALSE</a>()) :-
    <span class="keyword">query</span> <a href="#function_2039_2047" id="function_9528_9536" title="Defined at line 65">function</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_9544_9545" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_9547_9548" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_9552_9558" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_9561_9568" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_9569_9575" title="Defined at line 47">EXTEND</a>?)*) | (<a href="#DEF_1498_1501" id="DEF_9583_9586" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_9589_9595" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_9598_9607" title="Defined at line 51">IMPORTLIB</a>)?))
                   <span class="keyword">and</span> { <a href="#f'_9643_9645" id="f'_9637_9639" title="Referenced at line 231">f'</a> :- <a href="#f'_9637_9639" id="f'_9643_9645" title="Defined at line 231">f'</a> == (<a href="#f_9455_9456" id="f_9650_9651" title="Defined at line 229">f</a>, _, _) }
                   <span class="keyword">in</span> <a href="#s_9452_9453" id="s_9683_9684" title="Defined at line 229">s</a> |-&gt; <a href="#ps_9501_9503" id="ps_9689_9691" title="Defined at line 229">ps</a>.

  <a href="#resolveEntityFunction_9771_9792" id="resolveEntityFunction_9696_9717" title="Referenced at line 235; ../webdsl-native.stx line 110; ../actions/functions.stx line 43; ../types/type-extensions.stx line 33">resolveEntityFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_9761_9765" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveEntityFunction_9696_9717" id="resolveEntityFunction_9771_9792" title="Defined at line 234">resolveEntityFunction</a>(<a href="#s_10343_10344" id="s_9793_9794" title="Referenced at line 243">s</a>, <a href="#x_9950_9951" id="x_9796_9797" title="Referenced at line 237">x</a>) = <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_9801_9822" title="Defined at line 257">filterFunctionResults</a>(<a href="#typesOfStripOrigin_4016_4034" id="typesOfStripOrigin_9823_9841" title="Defined at line 122">typesOfStripOrigin</a>(<a href="#ps_10349_10351" id="ps_9842_9844" title="Referenced at line 243">ps</a>), <a href="#FALSE_844_849" id="FALSE_9847_9852" title="Defined at line 35">FALSE</a>()) :-
    <span class="keyword">query</span> <a href="#function_2039_2047" id="function_9869_9877" title="Defined at line 65">function</a> <span class="keyword">filter</span> <a href="#EXTEND_1385_1391" id="EXTEND_9885_9891" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_9894_9901" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_9902_9908" title="Defined at line 47">EXTEND</a>?)*
                   <span class="keyword">and</span> { <a href="#x'_9943_9945" id="x'_9937_9939" title="Referenced at line 237">x'</a> :- <a href="#x'_9937_9939" id="x'_9943_9945" title="Defined at line 237">x'</a> == (<a href="#x_9796_9797" id="x_9950_9951" title="Defined at line 235">x</a>, _, _) }
                   <span class="keyword">min</span> $ &lt; <a href="#INHERIT_1445_1452" id="INHERIT_9988_9995" title="Defined at line 48">INHERIT</a>, <a href="#EXTEND_1385_1391" id="EXTEND_9997_10003" title="Defined at line 47">EXTEND</a> &lt; <a href="#INHERIT_1445_1452" id="INHERIT_10006_10013" title="Defined at line 48">INHERIT</a> <span class="layout">// do not shadow EXTEND with $</span>
                   <span class="keyword">and</span> { (f, _, <a href="#T1_10137_10139" id="T1_10077_10079" title="Referenced at line 240">T1</a>), (<a href="#f_10153_10154" id="f_10083_10084" title="Referenced at line 240, 241">f</a>, _, <a href="#T2_10203_10205" id="T2_10089_10091" title="Referenced at line 241">T2</a>) :- {<a href="#args_10156_10160" id="args_10097_10101" title="Referenced at line 240, 241">args</a>}
                     <a href="#simpleTypeOf_4263_4275" id="simpleTypeOf_10124_10136" title="Defined at line 127">simpleTypeOf</a>(<a href="#T1_10077_10079" id="T1_10137_10139" title="Defined at line 239">T1</a>) == <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_10144_10152" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(<a href="#f_10083_10084" id="f_10153_10154" title="Defined at line 239">f</a>, <a href="#args_10097_10101" id="args_10156_10160" title="Defined at line 239">args</a>, _, _),
                     <a href="#simpleTypeOf_4263_4275" id="simpleTypeOf_10190_10202" title="Defined at line 127">simpleTypeOf</a>(<a href="#T2_10089_10091" id="T2_10203_10205" title="Defined at line 239">T2</a>) == <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_10210_10218" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(<a href="#f_10083_10084" id="f_10219_10220" title="Defined at line 239">f</a>, <a href="#args_10097_10101" id="args_10222_10226" title="Defined at line 239">args</a>, _, _)
                   } <span class="layout">// only shadow when function has the same name and argument types</span>
                   <span class="keyword">in</span> <a href="#s_9793_9794" id="s_10343_10344" title="Defined at line 235">s</a> |-&gt; <a href="#ps_9842_9844" id="ps_10349_10351" title="Defined at line 235">ps</a>.

  <a href="#resolveStaticEntityFunction_10437_10464" id="resolveStaticEntityFunction_10356_10383" title="Referenced at line 246; ../webdsl-native.stx line 113; ../actions/functions.stx line 46; ../types/type-extensions.stx line 36">resolveStaticEntityFunction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_10427_10431" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveStaticEntityFunction_10356_10383" id="resolveStaticEntityFunction_10437_10464" title="Defined at line 245">resolveStaticEntityFunction</a>(<a href="#s_11014_11015" id="s_10465_10466" title="Referenced at line 254">s</a>, <a href="#x_10621_10622" id="x_10468_10469" title="Referenced at line 248">x</a>) = <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_10473_10494" title="Defined at line 257">filterFunctionResults</a>(<a href="#typesOfStripOrigin_4016_4034" id="typesOfStripOrigin_10495_10513" title="Defined at line 122">typesOfStripOrigin</a>(<a href="#ps_11020_11022" id="ps_10514_10516" title="Referenced at line 254">ps</a>), <a href="#TRUE_828_832" id="TRUE_10519_10523" title="Defined at line 34">TRUE</a>()) :-
    <span class="keyword">query</span> <a href="#function_2039_2047" id="function_10540_10548" title="Defined at line 65">function</a> <span class="keyword">filter</span> <a href="#EXTEND_1385_1391" id="EXTEND_10556_10562" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_10565_10572" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_10573_10579" title="Defined at line 47">EXTEND</a>?)*
                   <span class="keyword">and</span> { <a href="#x'_10614_10616" id="x'_10608_10610" title="Referenced at line 248">x'</a> :- <a href="#x'_10608_10610" id="x'_10614_10616" title="Defined at line 248">x'</a> == (<a href="#x_10468_10469" id="x_10621_10622" title="Defined at line 246">x</a>, _, _) }
                   <span class="keyword">min</span> $ &lt; <a href="#INHERIT_1445_1452" id="INHERIT_10659_10666" title="Defined at line 48">INHERIT</a>, <a href="#EXTEND_1385_1391" id="EXTEND_10668_10674" title="Defined at line 47">EXTEND</a> &lt; <a href="#INHERIT_1445_1452" id="INHERIT_10677_10684" title="Defined at line 48">INHERIT</a> <span class="layout">// do not shadow EXTEND with $</span>
                   <span class="keyword">and</span> { (<a href="#f_10824_10825" id="f_10742_10743" title="Referenced at line 251, 252">f</a>, _, <a href="#T1_10808_10810" id="T1_10748_10750" title="Referenced at line 251">T1</a>), (f, _, <a href="#T2_10874_10876" id="T2_10760_10762" title="Referenced at line 252">T2</a>) :- {<a href="#args_10827_10831" id="args_10768_10772" title="Referenced at line 251, 252">args</a>}
                     <a href="#simpleTypeOf_4263_4275" id="simpleTypeOf_10795_10807" title="Defined at line 127">simpleTypeOf</a>(<a href="#T1_10748_10750" id="T1_10808_10810" title="Defined at line 250">T1</a>) == <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_10815_10823" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(<a href="#f_10742_10743" id="f_10824_10825" title="Defined at line 250">f</a>, <a href="#args_10768_10772" id="args_10827_10831" title="Defined at line 250">args</a>, _, _),
                     <a href="#simpleTypeOf_4263_4275" id="simpleTypeOf_10861_10873" title="Defined at line 127">simpleTypeOf</a>(<a href="#T2_10760_10762" id="T2_10874_10876" title="Defined at line 250">T2</a>) == <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_10881_10889" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(<a href="#f_10742_10743" id="f_10890_10891" title="Defined at line 250">f</a>, <a href="#args_10768_10772" id="args_10893_10897" title="Defined at line 250">args</a>, _, _)
                   } <span class="layout">// only shadow when function has the same name and argument types</span>
                   <span class="keyword">in</span> <a href="#s_10465_10466" id="s_11014_11015" title="Defined at line 246">s</a> |-&gt; <a href="#ps_10514_10516" id="ps_11020_11022" title="Defined at line 246">ps</a>.

  <span class="layout">// last BOOL arg indiciates if only static function should be returned (TRUE()) or all functions (FALSE())</span>
  <a href="#filterFunctionResults_9460_9481" id="filterFunctionResults_11136_11157" title="Referenced at line 229, 235, 246, 258, 259, 259, 260, 260, 261, 261; ../actions/functions.stx line 161">filterFunctionResults</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_11183_11187" title="Defined at line 29">TYPE</a>))) * <a href="#BOOL_697_701" id="BOOL_11193_11197" title="Defined at line 30">BOOL</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_11224_11228" title="Defined at line 29">TYPE</a>)))
  <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11234_11255" title="Defined at line 257">filterFunctionResults</a>([], _) = [].
  <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11271_11292" title="Defined at line 257">filterFunctionResults</a>([f@(_, (_, <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_11304_11312" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(_, _, _, <a href="#TRUE_828_832" id="TRUE_11322_11326" title="Defined at line 34">TRUE</a>()))) | fs], b@<a href="#TRUE_828_832" id="TRUE_11341_11345" title="Defined at line 34">TRUE</a>()) = [<span id="f_11352_11353" title="Not referenced locally, nor via imports">f</span> | <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11356_11377" title="Defined at line 257">filterFunctionResults</a>(<span id="fs_11378_11380" title="Not referenced locally, nor via imports">fs</span>, <span id="b_11382_11383" title="Not referenced locally, nor via imports">b</span>)].
  <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11389_11410" title="Defined at line 257">filterFunctionResults</a>([<span id="f_11412_11413" title="Not referenced locally, nor via imports">f</span>@(_, (_, <a href="../webdsl-types.stx#FUNCTION_343_351" id="FUNCTION_11422_11430" title="Defined at ../webdsl-types.stx line 17">FUNCTION</a>(_, _, _, _))) | fs], b@<a href="#FALSE_844_849" id="FALSE_11454_11459" title="Defined at line 35">FALSE</a>()) = [f | <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11470_11491" title="Defined at line 257">filterFunctionResults</a>(<span id="fs_11492_11494" title="Not referenced locally, nor via imports">fs</span>, <span id="b_11496_11497" title="Not referenced locally, nor via imports">b</span>)].
  <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11503_11524" title="Defined at line 257">filterFunctionResults</a>([_ | fs], <span id="b_11535_11536" title="Not referenced locally, nor via imports">b</span>) = <a href="#filterFunctionResults_11136_11157" id="filterFunctionResults_11540_11561" title="Defined at line 257">filterFunctionResults</a>(<span id="fs_11562_11564" title="Not referenced locally, nor via imports">fs</span>, b).

<span class="keyword">rules</span> <span class="layout">// action and placeholder declaration and resolving</span>

  <a href="#declareAction_11687_11700" id="declareAction_11632_11645" title="Referenced at line 266; ../ui/actions.stx line 56">declareAction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#ORIGIN_753_759" id="ORIGIN_11665_11671" title="Defined at line 31">ORIGIN</a> * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_11679_11683" title="Defined at line 29">TYPE</a>)
  <a href="#declareAction_11632_11645" id="declareAction_11687_11700" title="Defined at line 265">declareAction</a>(<a href="#s_11775_11776" id="s_11701_11702" title="Referenced at line 267, 268">s</a>, <a href="#a_11736_11737" id="a_11704_11705" title="Referenced at line 267, 267, 268, 268, 268, 268">a</a>, <a href="#origin_11739_11745" id="origin_11707_11713" title="Referenced at line 267">origin</a>, <a href="#ts_11766_11768" id="ts_11715_11717" title="Referenced at line 267, 268">ts</a>) :-
    !<a href="#function_2039_2047" id="function_11727_11735" title="Defined at line 65">function</a>[<a href="#a_11704_11705" id="a_11736_11737" title="Defined at line 266">a</a>, <a href="#origin_11707_11713" id="origin_11739_11745" title="Defined at line 266">origin</a>, <a href="#withType_3748_3756" id="withType_11747_11755" title="Defined at line 113">withType</a>(<a href="../webdsl-types.stx#ACTION_400_406" id="ACTION_11756_11762" title="Defined at ../webdsl-types.stx line 18">ACTION</a>(<a href="#a_11704_11705" id="a_11763_11764" title="Defined at line 266">a</a>, <a href="#ts_11715_11717" id="ts_11766_11768" title="Defined at line 266">ts</a>))] <span class="keyword">in</span> <a href="#s_11701_11702" id="s_11775_11776" title="Defined at line 266">s</a>,
    <a href="#resolveAction_11886_11899" id="resolveAction_11782_11795" title="Defined at line 270">resolveAction</a>(<a href="#s_11701_11702" id="s_11796_11797" title="Defined at line 266">s</a>, <a href="#a_11704_11705" id="a_11799_11800" title="Defined at line 266">a</a>) == [(_, (_, <a href="../webdsl-types.stx#ACTION_400_406" id="ACTION_11814_11820" title="Defined at ../webdsl-types.stx line 18">ACTION</a>(<a href="#a_11704_11705" id="a_11821_11822" title="Defined at line 266">a</a>, <a href="#ts_11715_11717" id="ts_11824_11826" title="Defined at line 266">ts</a>)))] | <span class="keyword">error</span> $[Action [<a href="#a_11704_11705" id="a_11849_11850" title="Defined at line 266">a</a>] is defined multiple times] @<a href="#a_11704_11705" id="a_11880_11881" title="Defined at line 266">a</a>.

  <a href="#resolveAction_11782_11795" id="resolveAction_11886_11899" title="Referenced at line 268, 271; ../ui/actions.stx line 73">resolveAction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_11943_11947" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveAction_11886_11899" id="resolveAction_11953_11966" title="Defined at line 270">resolveAction</a>(<a href="#s_12122_12123" id="s_11967_11968" title="Referenced at line 274">s</a>, <a href="#a_12089_12090" id="a_11970_11971" title="Referenced at line 273">a</a>) = <a href="#filterActionResults_12645_12664" id="filterActionResults_11975_11994" title="Defined at line 289">filterActionResults</a>(<a href="#typesOfStripOrigin_4016_4034" id="typesOfStripOrigin_11995_12013" title="Defined at line 122">typesOfStripOrigin</a>(<a href="#as_12128_12130" id="as_12014_12016" title="Referenced at line 274">as</a>)) :-
    <span class="keyword">query</span> <a href="#function_2039_2047" id="function_12032_12040" title="Defined at line 65">function</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_12048_12049" title="Defined at line 45">P</a>*
                   <span class="keyword">and</span> { <a href="#a'_12082_12084" id="a'_12076_12078" title="Referenced at line 273">a'</a> :- <a href="#a'_12076_12078" id="a'_12082_12084" title="Defined at line 273">a'</a> == (<a href="#a_11970_11971" id="a_12089_12090" title="Defined at line 271">a</a>, _, _) }
                   <span class="keyword">in</span> <a href="#s_11967_11968" id="s_12122_12123" title="Defined at line 271">s</a> |-&gt; <a href="#as_12014_12016" id="as_12128_12130" title="Defined at line 271">as</a>.

  <a href="#declarePlaceholder_12173_12191" id="declarePlaceholder_12135_12153" title="Referenced at line 277; ../ui/ajax.stx line 14, 22, 30, 38">declarePlaceholder</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#declarePlaceholder_12135_12153" id="declarePlaceholder_12173_12191" title="Defined at line 276">declarePlaceholder</a>(<a href="#s_12236_12237" id="s_12192_12193" title="Referenced at line 278, 278, 279">s</a>, <a href="#ph_12211_12213" id="ph_12195_12197" title="Referenced at line 278, 279, 279, 279">ph</a>) :-
    !<a href="#var_2079_2082" id="var_12207_12210" title="Defined at line 67">var</a>[<a href="#ph_12195_12197" id="ph_12211_12213" title="Defined at line 277">ph</a>, <a href="#withType_3748_3756" id="withType_12215_12223" title="Defined at line 113">withType</a>(<a href="../types/built-ins.stx#placeholder_2349_2360" id="placeholder_12224_12235" title="Defined at ../types/built-ins.stx line 62">placeholder</a>(<a href="#s_12192_12193" id="s_12236_12237" title="Defined at line 277">s</a>))] <span class="keyword">in</span> <a href="#s_12192_12193" id="s_12244_12245" title="Defined at line 277">s</a>,
    <a href="../webdsl-actions.stx#noDuplicateVarDefs_3623_3641" id="noDuplicateVarDefs_12251_12269" title="Defined at ../webdsl-actions.stx line 86">noDuplicateVarDefs</a>(<a href="#s_12192_12193" id="s_12270_12271" title="Defined at line 277">s</a>, <a href="#ph_12195_12197" id="ph_12273_12275" title="Defined at line 277">ph</a>) | <span class="keyword">error</span> $[Variable [<a href="#ph_12195_12197" id="ph_12297_12299" title="Defined at line 277">ph</a>] is defined multiple times] @<a href="#ph_12195_12197" id="ph_12329_12331" title="Defined at line 277">ph</a>.

  <a href="#resolvePlaceholder_12408_12426" id="resolvePlaceholder_12336_12354" title="Referenced at line 282; ../ui/ajax.stx line 85">resolvePlaceholder</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_12398_12402" title="Defined at line 29">TYPE</a>)))
  <a href="#resolvePlaceholder_12336_12354" id="resolvePlaceholder_12408_12426" title="Defined at line 281">resolvePlaceholder</a>(<a href="#s_12549_12550" id="s_12427_12428" title="Referenced at line 285">s</a>, <a href="#ph_12523_12525" id="ph_12430_12432" title="Referenced at line 284">ph</a>) = <a href="#result_12601_12607" id="result_12436_12442" title="Referenced at line 287">result</a> :- { <a href="#ph_scopes_12555_12564" id="ph_scopes_12448_12457" title="Referenced at line 285, 286">ph_scopes</a> <a href="#phs_12570_12573" id="phs_12458_12461" title="Referenced at line 286, 287">phs</a> }
    <span class="keyword">query</span> <a href="#var_2079_2082" id="var_12474_12477" title="Defined at line 67">var</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_12485_12486" title="Defined at line 45">P</a>*
              <span class="keyword">and</span> { <a href="#ph'_12515_12518" id="ph'_12508_12511" title="Referenced at line 284">ph'</a> :- <a href="#ph'_12508_12511" id="ph'_12515_12518" title="Defined at line 284">ph'</a> == (<a href="#ph_12430_12432" id="ph_12523_12525" title="Defined at line 282">ph</a>, _) }
              <span class="keyword">in</span> <a href="#s_12427_12428" id="s_12549_12550" title="Defined at line 282">s</a> |-&gt; <a href="#ph_scopes_12448_12457" id="ph_scopes_12555_12564" title="Defined at line 282">ph_scopes</a>,
    <a href="#phs_12458_12461" id="phs_12570_12573" title="Defined at line 282">phs</a> == <a href="#typesOf_3825_3832" id="typesOf_12577_12584" title="Defined at line 117">typesOf</a>(<a href="#ph_scopes_12448_12457" id="ph_scopes_12585_12594" title="Defined at line 282">ph_scopes</a>),
    <a href="#result_12436_12442" id="result_12601_12607" title="Defined at line 282">result</a> == <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_12611_12635" title="Defined at line 294">filterPlaceholderResults</a>(<a href="#phs_12458_12461" id="phs_12636_12639" title="Defined at line 282">phs</a>).

  <a href="#filterActionResults_11975_11994" id="filterActionResults_12645_12664" title="Referenced at line 271, 290, 291, 291, 292, 292">filterActionResults</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_12690_12694" title="Defined at line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_12724_12728" title="Defined at line 29">TYPE</a>)))
  <a href="#filterActionResults_12645_12664" id="filterActionResults_12734_12753" title="Defined at line 289">filterActionResults</a>([]) = [].
  <a href="#filterActionResults_12645_12664" id="filterActionResults_12766_12785" title="Defined at line 289">filterActionResults</a>([<span id="a_12787_12788" title="Not referenced locally, nor via imports">a</span>@(_, (_, <a href="../webdsl-types.stx#ACTION_400_406" id="ACTION_12797_12803" title="Defined at ../webdsl-types.stx line 18">ACTION</a>(_, _))) | as]) = [a | <a href="#filterActionResults_12645_12664" id="filterActionResults_12826_12845" title="Defined at line 289">filterActionResults</a>(<span id="as_12846_12848" title="Not referenced locally, nor via imports">as</span>)].
  <a href="#filterActionResults_12645_12664" id="filterActionResults_12854_12873" title="Defined at line 289">filterActionResults</a>([_ | <span id="as_12879_12881" title="Not referenced locally, nor via imports">as</span>]) = <a href="#filterActionResults_12645_12664" id="filterActionResults_12886_12905" title="Defined at line 289">filterActionResults</a>(as).

  <a href="#filterPlaceholderResults_12611_12635" id="filterPlaceholderResults_12914_12938" title="Referenced at line 287, 295, 296, 296, 297, 297">filterPlaceholderResults</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_12964_12968" title="Defined at line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_12998_13002" title="Defined at line 29">TYPE</a>)))
  <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_13008_13032" title="Defined at line 294">filterPlaceholderResults</a>([]) = [].
  <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_13045_13069" title="Defined at line 294">filterPlaceholderResults</a>([ph@(_, (_, <a href="../webdsl-types.stx#BUILTINTYPE_1001_1012" id="BUILTINTYPE_13082_13093" title="Defined at ../webdsl-types.stx line 40">BUILTINTYPE</a>("Placeholder", _))) | <span id="phs_13116_13119" title="Not referenced locally, nor via imports">phs</span>]) = [<span id="ph_13125_13127" title="Not referenced locally, nor via imports">ph</span> | <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_13130_13154" title="Defined at line 294">filterPlaceholderResults</a>(phs)].
  <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_13164_13188" title="Defined at line 294">filterPlaceholderResults</a>([_ | <span id="phs_13194_13197" title="Not referenced locally, nor via imports">phs</span>]) = <a href="#filterPlaceholderResults_12914_12938" id="filterPlaceholderResults_13202_13226" title="Defined at line 294">filterPlaceholderResults</a>(phs).

<span class="keyword">rules</span> <span class="layout">// variable declaration and resolving</span>

  <a href="#declareVar_13318_13328" id="declareVar_13281_13291" title="Referenced at line 302, 335, 340; ../webdsl-ac.stx line 30, 104, 105, 113, 114, 196, 197; ../webdsl-actions.stx line 52, 59, 65, 70, 77, 83, 202, 329, 339; ../webdsl-entities.stx line 28, 38, 44, 85, 90, 96, 103, 142; ../webdsl-hql.stx line 125; ../webdsl-native.stx line 43, 72; ../webdsl-ui.stx line 252, 289; ../entities/built-ins.stx line 20, 21, 22, 23, 24, 25, 32, 36, 37, 38, 39, 40, 41, 42; ../types/built-ins.stx line 22, 32; ../ui/actions.stx line 27, 34, 40, 151, 161, 170, 180">declareVar</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_13311_13315" title="Defined at line 29">TYPE</a>
  <a href="#declareVar_13281_13291" id="declareVar_13318_13328" title="Defined at line 301">declareVar</a>(<a href="#s_13369_13370" id="s_13329_13330" title="Referenced at line 303, 304">s</a>, <a href="#x_13350_13351" id="x_13332_13333" title="Referenced at line 303, 304, 304">x</a>, <a href="#t_13362_13363" id="t_13335_13336" title="Referenced at line 303">t</a>) :-
    !<a href="#var_2079_2082" id="var_13346_13349" title="Defined at line 67">var</a>[<a href="#x_13332_13333" id="x_13350_13351" title="Defined at line 302">x</a>, <a href="#withType_3748_3756" id="withType_13353_13361" title="Defined at line 113">withType</a>(<a href="#t_13335_13336" id="t_13362_13363" title="Defined at line 302">t</a>)] <span class="keyword">in</span> <a href="#s_13329_13330" id="s_13369_13370" title="Defined at line 302">s</a>,
    <a href="../webdsl-actions.stx#noDuplicateVarDefs_3623_3641" id="noDuplicateVarDefs_13376_13394" title="Defined at ../webdsl-actions.stx line 86">noDuplicateVarDefs</a>(<a href="#s_13329_13330" id="s_13395_13396" title="Defined at line 302">s</a>, <a href="#x_13332_13333" id="x_13398_13399" title="Defined at line 302">x</a>) | <span class="keyword">error</span> $[A variable named [<a href="#x_13332_13333" id="x_13429_13430" title="Defined at line 302">x</a>] already exists in this scope].

  <a href="#resolveVar_13530_13540" id="resolveVar_13466_13476" title="Referenced at line 307; ../webdsl-ac.stx line 280; ../webdsl-entities.stx line 185; ../webdsl-hql.stx line 66, 71, 133; ../webdsl-types.stx line 241">resolveVar</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_13520_13524" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveVar_13466_13476" id="resolveVar_13530_13540" title="Defined at line 306">resolveVar</a>(<a href="#s_13844_13845" id="s_13541_13542" title="Referenced at line 312">s</a>, <a href="#x_13686_13687" id="x_13544_13545" title="Referenced at line 309">x</a>) = <a href="#typesOf_3825_3832" id="typesOf_13549_13556" title="Defined at line 117">typesOf</a>(<a href="#ps_13850_13852" id="ps_13557_13559" title="Referenced at line 312">ps</a>) :-
    <span class="keyword">query</span> <a href="#var_2079_2082" id="var_13574_13577" title="Defined at line 67">var</a> <span class="keyword">filter</span> <a href="#P_1226_1227" id="P_13585_13586" title="Defined at line 45">P</a>* <a href="#F_1290_1291" id="F_13588_13589" title="Defined at line 46">F</a>* ((<a href="#EXTEND_1385_1391" id="EXTEND_13593_13599" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_13602_13609" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_13610_13616" title="Defined at line 47">EXTEND</a>?)*) | (<a href="#DEF_1498_1501" id="DEF_13624_13627" title="Defined at line 49">DEF</a>? (<a href="#IMPORT_1595_1601" id="IMPORT_13630_13636" title="Defined at line 50">IMPORT</a> | <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_13639_13648" title="Defined at line 51">IMPORTLIB</a>)?))
              <span class="keyword">and</span> { <a href="#x'_13679_13681" id="x'_13673_13675" title="Referenced at line 309">x'</a> :- <a href="#x'_13673_13675" id="x'_13679_13681" title="Defined at line 309">x'</a> == (<a href="#x_13544_13545" id="x_13686_13687" title="Defined at line 307">x</a>, _) }
              <span class="keyword">min</span> $ &lt; <a href="#P_1226_1227" id="P_13716_13717" title="Defined at line 45">P</a>, <a href="#P_1226_1227" id="P_13719_13720" title="Defined at line 45">P</a> &lt; <a href="#F_1290_1291" id="F_13723_13724" title="Defined at line 46">F</a>, <a href="#F_1290_1291" id="F_13726_13727" title="Defined at line 46">F</a> &lt; <a href="#EXTEND_1385_1391" id="EXTEND_13730_13736" title="Defined at line 47">EXTEND</a>, <a href="#EXTEND_1385_1391" id="EXTEND_13738_13744" title="Defined at line 47">EXTEND</a> &lt; <a href="#INHERIT_1445_1452" id="INHERIT_13747_13754" title="Defined at line 48">INHERIT</a>, <a href="#INHERIT_1445_1452" id="INHERIT_13756_13763" title="Defined at line 48">INHERIT</a> &lt; <a href="#DEF_1498_1501" id="DEF_13766_13769" title="Defined at line 49">DEF</a>, <a href="#DEF_1498_1501" id="DEF_13771_13774" title="Defined at line 49">DEF</a> &lt; <a href="#IMPORT_1595_1601" id="IMPORT_13777_13783" title="Defined at line 50">IMPORT</a>, <a href="#IMPORT_1595_1601" id="IMPORT_13785_13791" title="Defined at line 50">IMPORT</a> &lt; <a href="#IMPORTLIB_1661_1670" id="IMPORTLIB_13794_13803" title="Defined at line 51">IMPORTLIB</a>
              <span class="keyword">and true</span>
              <span class="keyword">in</span> <a href="#s_13541_13542" id="s_13844_13845" title="Defined at line 307">s</a> |-&gt; <a href="#ps_13557_13559" id="ps_13850_13852" title="Defined at line 307">ps</a>.

  <a href="#resolveProperty_13926_13941" id="resolveProperty_13857_13872" title="Referenced at line 315; ../webdsl-ac.stx line 269, 274; ../webdsl-actions.stx line 96; ../webdsl-types.stx line 246, 252">resolveProperty</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_13916_13920" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveProperty_13857_13872" id="resolveProperty_13926_13941" title="Defined at line 314">resolveProperty</a>(<a href="#s_entity_14078_14086" id="s_entity_13942_13950" title="Referenced at line 318">s_entity</a>, <a href="#x_14053_14054" id="x_13952_13953" title="Referenced at line 317">x</a>) = <a href="#typesOf_3825_3832" id="typesOf_13957_13964" title="Defined at line 117">typesOf</a>(<a href="#ps_14091_14093" id="ps_13965_13967" title="Referenced at line 318">ps</a>) :-
    <span class="keyword">query</span> <a href="#var_2079_2082" id="var_13982_13985" title="Defined at line 67">var</a> <span class="keyword">filter</span> <a href="#EXTEND_1385_1391" id="EXTEND_13993_13999" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_14002_14009" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_14010_14016" title="Defined at line 47">EXTEND</a>?)*
              <span class="keyword">and</span> { <a href="#x'_14046_14048" id="x'_14040_14042" title="Referenced at line 317">x'</a> :- <a href="#x'_14040_14042" id="x'_14046_14048" title="Defined at line 317">x'</a> == (<a href="#x_13952_13953" id="x_14053_14054" title="Defined at line 315">x</a>, _) }
              <span class="keyword">in</span> <a href="#s_entity_13942_13950" id="s_entity_14078_14086" title="Defined at line 315">s_entity</a> |-&gt; <a href="#ps_13965_13967" id="ps_14091_14093" title="Defined at line 315">ps</a>.

  <a href="#resolveLocalProperty_14172_14192" id="resolveLocalProperty_14098_14118" title="Referenced at line 321; ../webdsl-entities.stx line 143; ../entities/annotations.stx line 183">resolveLocalProperty</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_14162_14166" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveLocalProperty_14098_14118" id="resolveLocalProperty_14172_14192" title="Defined at line 320">resolveLocalProperty</a>(<a href="#s_entity_14310_14318" id="s_entity_14193_14201" title="Referenced at line 324">s_entity</a>, <a href="#x_14285_14286" id="x_14203_14204" title="Referenced at line 323">x</a>) = <a href="#typesOf_3825_3832" id="typesOf_14208_14215" title="Defined at line 117">typesOf</a>(<a href="#ps_14323_14325" id="ps_14216_14218" title="Referenced at line 324">ps</a>) :-
    <span class="keyword">query</span> <a href="#var_2079_2082" id="var_14233_14236" title="Defined at line 67">var</a> <span class="keyword">filter</span> <a href="#EXTEND_1385_1391" id="EXTEND_14244_14250" title="Defined at line 47">EXTEND</a>?
              <span class="keyword">and</span> { <a href="#x'_14278_14280" id="x'_14272_14274" title="Referenced at line 323">x'</a> :- <a href="#x'_14272_14274" id="x'_14278_14280" title="Defined at line 323">x'</a> == (<a href="#x_14203_14204" id="x_14285_14286" title="Defined at line 321">x</a>, _) }
              <span class="keyword">in</span> <a href="#s_entity_14193_14201" id="s_entity_14310_14318" title="Defined at line 321">s_entity</a> |-&gt; <a href="#ps_14216_14218" id="ps_14323_14325" title="Defined at line 321">ps</a>.

  <a href="#resolveMutableProperty_14406_14428" id="resolveMutableProperty_14330_14352" title="Referenced at line 327">resolveMutableProperty</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_14396_14400" title="Defined at line 29">TYPE</a>)))
  <a href="#resolveMutableProperty_14330_14352" id="resolveMutableProperty_14406_14428" title="Defined at line 326">resolveMutableProperty</a>(<a href="#s_entity_14565_14573" id="s_entity_14429_14437" title="Referenced at line 330">s_entity</a>, <a href="#x_14540_14541" id="x_14439_14440" title="Referenced at line 329">x</a>) = <a href="#typesOf_3825_3832" id="typesOf_14444_14451" title="Defined at line 117">typesOf</a>(<a href="#ps_14578_14580" id="ps_14452_14454" title="Referenced at line 330">ps</a>) :-
    <span class="keyword">query</span> <a href="#var_2079_2082" id="var_14469_14472" title="Defined at line 67">var</a> <span class="keyword">filter</span> <a href="#EXTEND_1385_1391" id="EXTEND_14480_14486" title="Defined at line 47">EXTEND</a>? (<a href="#INHERIT_1445_1452" id="INHERIT_14489_14496" title="Defined at line 48">INHERIT</a> <a href="#EXTEND_1385_1391" id="EXTEND_14497_14503" title="Defined at line 47">EXTEND</a>?)*
              <span class="keyword">and</span> { <a href="#x'_14533_14535" id="x'_14527_14529" title="Referenced at line 329">x'</a> :- <a href="#x'_14527_14529" id="x'_14533_14535" title="Defined at line 329">x'</a> == (<a href="#x_14439_14440" id="x_14540_14541" title="Defined at line 327">x</a>, _) }
              <span class="keyword">in</span> <a href="#s_entity_14429_14437" id="s_entity_14565_14573" title="Defined at line 327">s_entity</a> |-&gt; <a href="#ps_14452_14454" id="ps_14578_14580" title="Defined at line 327">ps</a>.

  <a href="#declareParameters_14637_14654" id="declareParameters_14585_14602" title="Referenced at line 333, 334, 337, 339, 343; ../webdsl-ac.stx line 102, 124, 194, 212; ../webdsl-services.stx line 17; ../webdsl-ui.stx line 36, 67, 89; ../actions/functions.stx line 99, 109; ../ui/actions.stx line 49">declareParameters</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>((<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_14628_14632" title="Defined at line 29">TYPE</a>))
  <a href="#declareParameters_14585_14602" id="declareParameters_14637_14654" title="Defined at line 332">declareParameters</a>(<span id="s_14655_14656" title="Not referenced locally, nor via imports">s</span>, []).
  <a href="#declareParameters_14585_14602" id="declareParameters_14665_14682" title="Defined at line 332">declareParameters</a>(<a href="#s_14719_14720" id="s_14683_14684" title="Referenced at line 335, 336, 337">s</a>, [(<a href="#x_14722_14723" id="x_14688_14689" title="Referenced at line 335, 336">x</a>, <a href="#t_14725_14726" id="t_14691_14692" title="Referenced at line 335">t</a>)|<a href="#tail_14860_14864" id="tail_14694_14698" title="Referenced at line 337">tail</a>]) :-
    <a href="#declareVar_13281_13291" id="declareVar_14708_14718" title="Defined at line 301">declareVar</a>(<a href="#s_14683_14684" id="s_14719_14720" title="Defined at line 334">s</a>, <a href="#x_14688_14689" id="x_14722_14723" title="Defined at line 334">x</a>, <a href="#t_14691_14692" id="t_14725_14726" title="Defined at line 334">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_14733_14750" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_14683_14684" id="s_14751_14752" title="Defined at line 334">s</a>, <a href="#x_14688_14689" id="x_14754_14755" title="Defined at line 334">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_14757_14764" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of parameters</span>
    <a href="#declareParameters_14585_14602" id="declareParameters_14839_14856" title="Defined at line 332">declareParameters</a>(<a href="#s_14683_14684" id="s_14857_14858" title="Defined at line 334">s</a>, <a href="#tail_14694_14698" id="tail_14860_14864" title="Defined at line 334">tail</a>).

  <a href="#declareParameters_14585_14602" id="declareParameters_14870_14887" title="Defined at line 332">declareParameters</a>(<a href="#s_14945_14946" id="s_14888_14889" title="Referenced at line 340, 341, 342, 343">s</a>, [(<a href="#x_14948_14949" id="x_14893_14894" title="Referenced at line 340, 341, 342">x</a>, <a href="#t_14951_14952" id="t_14896_14897" title="Referenced at line 340">t</a>@<a href="../webdsl-types.stx#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_14898_14914" title="Defined at ../webdsl-types.stx line 47">TEMPLATEELEMENTS</a>()) | <a href="#tail_15117_15121" id="tail_14920_14924" title="Referenced at line 343">tail</a>]) :-
    <a href="#declareVar_13281_13291" id="declareVar_14934_14944" title="Defined at line 301">declareVar</a>(<a href="#s_14888_14889" id="s_14945_14946" title="Defined at line 339">s</a>, <a href="#x_14893_14894" id="x_14948_14949" title="Defined at line 339">x</a>, <a href="#t_14896_14897" id="t_14951_14952" title="Defined at line 339">t</a>),
    <a href="../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_14959_14976" title="Defined at ../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_14888_14889" id="s_14977_14978" title="Defined at line 339">s</a>, <a href="#x_14893_14894" id="x_14980_14981" title="Defined at line 339">x</a>, <a href="../entities/annotations.stx#DERIVED_427_434" id="DERIVED_14983_14990" title="Defined at ../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of parameters</span>
    <a href="#declareTemplate_5279_5294" id="declareTemplate_15065_15080" title="Defined at line 151">declareTemplate</a>(<a href="#s_14888_14889" id="s_15081_15082" title="Defined at line 339">s</a>, <a href="#x_14893_14894" id="x_15084_15085" title="Defined at line 339">x</a>, []),
    <a href="#declareParameters_14585_14602" id="declareParameters_15096_15113" title="Defined at line 332">declareParameters</a>(<a href="#s_14888_14889" id="s_15114_15115" title="Defined at line 339">s</a>, <a href="#tail_14920_14924" id="tail_15117_15121" title="Defined at line 339">tail</a>).

<span class="keyword">rules</span> <span class="layout">// declare common rules and mappings</span>

  <a href="#unitOk_15195_15201" id="unitOk_15171_15177" title="Referenced at line 348; ../webdsl-modules.stx line 16, 25, 32, 36; ../../statics.stx line 23">unitOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Unit_289_293" id="Unit_15188_15192" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 18">Unit</a>
  <a href="#unitOk_15171_15177" id="unitOk_15195_15201" title="Defined at line 347">unitOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#EmptyUnit_2134_2143" id="EmptyUnit_15205_15214" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 70">EmptyUnit</a>()).

  <a href="../webdsl-modules.stx#sectionsOk_521_531" id="sectionsOk_15222_15232" title="Referenced at ../webdsl-modules.stx line 22, 30, 47">sectionsOk</a> <span class="keyword">maps</span> <a href="#sectionOk_15262_15271" id="sectionOk_15238_15247" title="Defined at line 351">sectionOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#sectionOk_15238_15247" id="sectionOk_15262_15271" title="Referenced at line 350, 352, 353; ../webdsl-ac.stx line 55">sectionOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Section_298_305" id="Section_15282_15289" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 19">Section</a>
  <a href="#sectionOk_15262_15271" id="sectionOk_15292_15301" title="Defined at line 351">sectionOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx#ACPolicy_1925_1933" id="ACPolicy_15305_15313" title="Defined at ../../../src-gen/statix/signatures/WebDSL-AccessControl-sig.stx line 52">ACPolicy</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This section is not yet implemented].
  <a href="#sectionOk_15262_15271" id="sectionOk_15387_15396" title="Defined at line 351">sectionOk</a>(<a href="#s_15428_15429" id="s_15397_15398" title="Referenced at line 353">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Section_1640_1647" id="Section_15400_15407" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 61">Section</a>(_, <a href="#defs_15431_15435" id="defs_15411_15415" title="Referenced at line 353">defs</a>)) :- <a href="#defsOk_15441_15447" id="defsOk_15421_15427" title="Defined at line 355">defsOk</a>(<a href="#s_15397_15398" id="s_15428_15429" title="Defined at line 353">s</a>, <a href="#defs_15411_15415" id="defs_15431_15435" title="Defined at line 353">defs</a>).

  <a href="#defsOk_15421_15427" id="defsOk_15441_15447" title="Referenced at line 353">defsOk</a> <span class="keyword">maps</span> <a href="#defOk_15473_15478" id="defOk_15453_15458" title="Defined at line 356">defOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#defOk_15453_15458" id="defOk_15473_15478" title="Referenced at line 355, 357, 358, 359; ../webdsl-ac.stx line 63, 184; ../webdsl-actions.stx line 19, 68, 73, 80, 345; ../webdsl-entities.stx line 23, 34, 41, 63, 66, 93; ../webdsl-expand.stx line 15, 16, 70; ../webdsl-modules.stx line 51, 52; ../webdsl-native.stx line 22, 26, 50; ../webdsl-search.stx line 16, 17, 86; ../webdsl-services.stx line 12, 14; ../webdsl-ui.stx line 22, 23, 24, 26, 27, 31, 58; ../actions/functions.stx line 66, 82, 83, 87; ../entities/generated-functions.stx line 19, 45; ../types/type-extensions.stx line 15; ../ui/actions.stx line 58; ../ui/attributes.stx line 71, 74">defOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Definition_310_320" id="Definition_15489_15499" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 20">Definition</a>
  <a href="#defOk_15473_15478" id="defOk_15502_15507" title="Defined at line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Description_2226_2237" id="Description_15511_15522" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 73">Description</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].
  <a href="#defOk_15473_15478" id="defOk_15599_15604" title="Defined at line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Note_2269_2273" id="Note_15608_15612" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 74">Note</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].
  <a href="#defOk_15473_15478" id="defOk_15689_15694" title="Defined at line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Routing-sig.stx#Routing_234_241" id="Routing_15698_15705" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Routing-sig.stx line 18">Routing</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].

  <a href="#stmtOk_16062_16068" id="stmtOk_15783_15789" title="Referenced at line 368; ../webdsl-actions.stx line 25, 26, 27, 28, 29, 42, 45, 49, 55, 62, 105, 106, 124, 133, 141, 144, 149, 165, 177, 185, 192, 209, 216, 222, 351, 352; ../webdsl-entities.stx line 18; ../webdsl-expand.stx line 18; ../webdsl-hql.stx line 12; ../ui/actions.stx line 99, 100, 103; ../ui/ajax.stx line 47">stmtOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Statement_350_359" id="Statement_15808_15817" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 23">Statement</a> * <a href="#TYPE_669_673" id="TYPE_15820_15824" title="Defined at line 29">TYPE</a> <span class="layout">// TYPE argument is the return type in a function</span>

  <a href="#stmtsOk_15921_15928" id="stmtsOk_15878_15885" title="Referenced at line 364, 365, 369; ../webdsl-actions.stx line 21, 47, 152, 154, 204, 212, 347; ../webdsl-services.stx line 19; ../actions/functions.stx line 101, 111; ../ui/actions.stx line 52, 83, 86, 89, 92, 95">stmtsOk</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Statement_350_359" id="Statement_15901_15910" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 23">Statement</a>) * <a href="#TYPE_669_673" id="TYPE_15914_15918" title="Defined at line 29">TYPE</a>
  <a href="#stmtsOk_15878_15885" id="stmtsOk_15921_15928" title="Defined at line 363">stmtsOk</a>(_, [], _).
  <a href="#stmtsOk_15878_15885" id="stmtsOk_15942_15949" title="Defined at line 363">stmtsOk</a>(<a href="#s_16019_16020" id="s_15950_15951" title="Referenced at line 366, 368">s</a>, [<a href="#stmt_16080_16084" id="stmt_15954_15958" title="Referenced at line 368">stmt</a> | <a href="#tail_16111_16115" id="tail_15961_15965" title="Referenced at line 369">tail</a>], <a href="#rt_16086_16088" id="rt_15968_15970" title="Referenced at line 368, 369">rt</a>) :- {<a href="#s_decl_15999_16005" id="s_decl_15976_15982" title="Referenced at line 366, 366, 367, 368">s_decl</a> <a href="#s_next_16030_16036" id="s_next_15983_15989" title="Referenced at line 367, 367, 369">s_next</a>}
    <span class="keyword">new</span> <a href="#s_decl_15976_15982" id="s_decl_15999_16005" title="Defined at line 365">s_decl</a>, <a href="#s_decl_15976_15982" id="s_decl_16007_16013" title="Defined at line 365">s_decl</a> -<a href="#P_1226_1227" id="P_16015_16016" title="Defined at line 45">P</a>-&gt; <a href="#s_15950_15951" id="s_16019_16020" title="Defined at line 365">s</a>,
    <span class="keyword">new</span> <a href="#s_next_15983_15989" id="s_next_16030_16036" title="Defined at line 365">s_next</a>, <a href="#s_next_15983_15989" id="s_next_16038_16044" title="Defined at line 365">s_next</a> -<a href="#P_1226_1227" id="P_16046_16047" title="Defined at line 45">P</a>-&gt; <a href="#s_decl_15976_15982" id="s_decl_16050_16056" title="Defined at line 365">s_decl</a>,
    <a href="#stmtOk_15783_15789" id="stmtOk_16062_16068" title="Defined at line 361">stmtOk</a>(<a href="#s_15950_15951" id="s_16069_16070" title="Defined at line 365">s</a>, <a href="#s_decl_15976_15982" id="s_decl_16072_16078" title="Defined at line 365">s_decl</a>, <a href="#stmt_15954_15958" id="stmt_16080_16084" title="Defined at line 365">stmt</a>, <a href="#rt_15968_15970" id="rt_16086_16088" title="Defined at line 365">rt</a>),
    <a href="#stmtsOk_15878_15885" id="stmtsOk_16095_16102" title="Defined at line 363">stmtsOk</a>(<a href="#s_next_15983_15989" id="s_next_16103_16109" title="Defined at line 365">s_next</a>, <a href="#tail_15961_15965" id="tail_16111_16115" title="Defined at line 365">tail</a>, <a href="#rt_15968_15970" id="rt_16117_16119" title="Defined at line 365">rt</a>).

  <a href="#expOk_16147_16152" id="expOk_16125_16130" title="Referenced at line 372; ../webdsl-actions.stx line 43">expOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_16141_16144" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>
  <a href="#expOk_16125_16130" id="expOk_16147_16152" title="Defined at line 371">expOk</a>(<a href="#s_16184_16185" id="s_16153_16154" title="Referenced at line 373">s</a>, <a href="#exp_16187_16190" id="exp_16156_16159" title="Referenced at line 373">exp</a>) :- { <a href="#T_16195_16196" id="T_16166_16167" title="Referenced at line 373">T</a> }
    <a href="#typeOfExp_16579_16588" id="typeOfExp_16174_16183" title="Defined at line 388">typeOfExp</a>(<a href="#s_16153_16154" id="s_16184_16185" title="Defined at line 372">s</a>, <a href="#exp_16156_16159" id="exp_16187_16190" title="Defined at line 372">exp</a>) == <a href="#T_16166_16167" id="T_16195_16196" title="Defined at line 372">T</a>.

  <a href="#declareBuiltIns_16227_16242" id="declareBuiltIns_16201_16216" title="Referenced at line 376; ../webdsl-modules.stx line 44">declareBuiltIns</a> : <span class="keyword">scope</span>
  <a href="#declareBuiltIns_16201_16216" id="declareBuiltIns_16227_16242" title="Defined at line 375">declareBuiltIns</a>(<a href="#s_16354_16355" id="s_16243_16244" title="Referenced at line 378, 379, 380, 381, 382, 383">s</a>) :-
<span class="layout">//    declareACBuiltIns(s), do this separately in Application instead of built-in</span>
    <a href="../actions/built-ins.stx#declareFunctionIns_190_208" id="declareFunctionIns_16335_16353" title="Defined at ../actions/built-ins.stx line 11">declareFunctionIns</a>(<a href="#s_16243_16244" id="s_16354_16355" title="Defined at line 376">s</a>),
    <a href="../entities/built-ins.stx#declareEntityBuiltIns_236_257" id="declareEntityBuiltIns_16362_16383" title="Defined at ../entities/built-ins.stx line 14">declareEntityBuiltIns</a>(<a href="#s_16243_16244" id="s_16384_16385" title="Defined at line 376">s</a>),
    <a href="../webdsl-search.stx#declareSearchBuiltIns_3891_3912" id="declareSearchBuiltIns_16392_16413" title="Defined at ../webdsl-search.stx line 103">declareSearchBuiltIns</a>(<a href="#s_16243_16244" id="s_16414_16415" title="Defined at line 376">s</a>),
    <a href="../types/built-ins.stx#declareTypeBuiltIns_3025_3044" id="declareTypeBuiltIns_16422_16441" title="Defined at ../types/built-ins.stx line 87">declareTypeBuiltIns</a>(<a href="#s_16243_16244" id="s_16442_16443" title="Defined at line 376">s</a>),
    <a href="../types/built-ins.stx#declareTypeBuiltInFunctions_3930_3957" id="declareTypeBuiltInFunctions_16450_16477" title="Defined at ../types/built-ins.stx line 115">declareTypeBuiltInFunctions</a>(<a href="#s_16243_16244" id="s_16478_16479" title="Defined at line 376">s</a>),
    <a href="../ui/built-ins.stx#declareUIBuiltIns_185_202" id="declareUIBuiltIns_16486_16503" title="Defined at ../ui/built-ins.stx line 13">declareUIBuiltIns</a>(<a href="#s_16243_16244" id="s_16504_16505" title="Defined at line 376">s</a>).

<span class="keyword">rules</span> <span class="layout">// typing</span>

  <a href="../webdsl-ac.stx#typesOfExps_1710_1721" id="typesOfExps_16528_16539" title="Referenced at ../webdsl-ac.stx line 45; ../webdsl-actions.stx line 273, 278, 284, 289; ../webdsl-regex.stx line 12, 16, 21, 26, 31, 36; ../actions/functions.stx line 53; ../ui/actions.stx line 72; ../ui/template-calls.stx line 87">typesOfExps</a> <span class="keyword">maps</span> <a href="#typeOfExp_16579_16588" id="typeOfExp_16545_16554" title="Defined at line 388">typeOfExp</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfExp_16174_16183" id="typeOfExp_16579_16588" title="Referenced at line 373, 387, 392; ../webdsl-ac.stx line 107, 115, 126, 130, 198; ../webdsl-actions.stx line 31, 32, 33, 34, 35, 36, 37, 57, 63, 75, 81, 109, 130, 134, 138, 142, 142, 145, 145, 150, 156, 157, 159, 160, 167, 178, 194, 195, 210, 219, 228, 236, 237, 239, 245, 246, 256, 270, 271, 272, 276, 281, 282, 283, 287, 292, 302, 303, 312, 314, 318, 327, 330, 336, 340; ../webdsl-entities.stx line 132, 177, 187, 199; ../webdsl-expand.stx line 20, 31; ../webdsl-hql.stx line 16, 116, 119; ../webdsl-regex.stx line 10, 14, 19, 24, 29, 34; ../webdsl-search.stx line 21, 25, 28, 31, 36, 39, 42, 48, 57; ../webdsl-types.stx line 53, 57, 61, 64, 207, 212, 284; ../webdsl-ui.stx line 179, 207, 213, 225, 243, 244; ../actions/binops.stx line 11, 21, 22, 27, 28, 29, 35, 36, 37, 43, 44, 45, 51, 52, 53, 59, 61, 62, 67, 69, 70, 75, 77, 78, 83, 85, 86, 91, 93, 94, 98, 100, 101, 105, 107, 108, 116, 118, 119, 127, 128, 129, 135, 137; ../actions/emails.stx line 10; ../actions/functions.stx line 13, 22, 23, 33, 72, 73, 74, 75, 76, 77; ../entities/annotations.stx line 158, 165, 196, 197; ../types/built-ins.stx line 152, 155, 160, 169, 172, 175, 176, 179, 180, 183, 186, 187, 197, 207, 210, 213, 218; ../ui/actions.stx line 32, 38, 68, 113, 116, 121, 144, 157, 177, 178, 190; ../ui/ajax.stx line 18, 26, 69, 77, 81, 94; ../ui/attributes.stx line 36, 40, 50, 60; ../ui/built-ins.stx line 47, 50; ../ui/template-calls.stx line 49, 70, 109">typeOfExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_16599_16602" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TYPE_669_673" id="TYPE_16606_16610" title="Defined at line 29">TYPE</a>

  <a href="#typeOfExpTyped_16653_16667" id="typeOfExpTyped_16614_16628" title="Referenced at line 391; ../webdsl-types.stx line 208, 213">typeOfExpTyped</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_16639_16642" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#TYPE_669_673" id="TYPE_16646_16650" title="Defined at line 29">TYPE</a>
  <a href="#typeOfExpTyped_16614_16628" id="typeOfExpTyped_16653_16667" title="Defined at line 390">typeOfExpTyped</a>(<a href="#s_16702_16703" id="s_16668_16669" title="Referenced at line 392">s</a>, <a href="#exp_16705_16708" id="exp_16671_16674" title="Referenced at line 392, 393">exp</a>) = <a href="#t_16687_16688" id="t_16678_16679" title="Referenced at line 392, 393, 393">t</a> :-
    <a href="#t_16678_16679" id="t_16687_16688" title="Defined at line 391">t</a> == <a href="#typeOfExp_16579_16588" id="typeOfExp_16692_16701" title="Defined at line 388">typeOfExp</a>(<a href="#s_16668_16669" id="s_16702_16703" title="Defined at line 391">s</a>, <a href="#exp_16671_16674" id="exp_16705_16708" title="Defined at line 391">exp</a>),
    <a href="#t_16678_16679" id="t_16715_16716" title="Defined at line 391">t</a> != <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_16720_16727" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Cannot resolve type [<a href="#t_16678_16679" id="t_16761_16762" title="Defined at line 391">t</a>]] @<a href="#exp_16671_16674" id="exp_16766_16769" title="Defined at line 391">exp</a>.

  <a href="#typeOfSimpleExp_16820_16835" id="typeOfSimpleExp_16774_16789" title="Referenced at line 396; ../webdsl-actions.stx line 232, 250, 251; ../webdsl-types.stx line 93; ../actions/functions.stx line 16, 27, 28">typeOfSimpleExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#SimpleExp_544_553" id="SimpleExp_16800_16809" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 32">SimpleExp</a> -&gt; <a href="#TYPE_669_673" id="TYPE_16813_16817" title="Defined at line 29">TYPE</a>
  <a href="#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_16820_16835" title="Defined at line 395">typeOfSimpleExp</a>(<span id="s_16836_16837" title="Not referenced locally, nor via imports">s</span>, <a href="#exp_16907_16910" id="exp_16839_16842" title="Referenced at line 396">exp</a>) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_16846_16853" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[typing of expression [<a href="#exp_16839_16842" id="exp_16907_16910" title="Defined at line 396">exp</a>] is not yet implemented].

  <a href="#typeOfPlaceholderExp_16987_17007" id="typeOfPlaceholderExp_16940_16960" title="Referenced at line 399; ../webdsl-actions.stx line 255, 296; ../webdsl-types.stx line 65; ../actions/binops.stx line 15; ../actions/functions.stx line 19, 32; ../ui/ajax.stx line 34, 42">typeOfPlaceholderExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHExp_336_341" id="PHExp_16971_16976" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 19">PHExp</a> -&gt; <a href="#TYPE_669_673" id="TYPE_16980_16984" title="Defined at line 29">TYPE</a>
  <a href="#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_16987_17007" title="Defined at line 398">typeOfPlaceholderExp</a>(<span id="s_17008_17009" title="Not referenced locally, nor via imports">s</span>, <a href="#exp_17079_17082" id="exp_17011_17014" title="Referenced at line 399">exp</a>) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_17018_17025" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[typing of expression [<a href="#exp_17011_17014" id="exp_17079_17082" title="Defined at line 399">exp</a>] is not yet implemented].

  <a href="#typesCompatible_17164_17179" id="typesCompatible_17112_17127" title="Referenced at line 402, 403, 404, 405, 405; ../webdsl-ac.stx line 47; ../webdsl-regex.stx line 17, 22, 27, 32, 37; ../webdsl-ui.stx line 306; ../actions/functions.stx line 189, 190; ../ui/actions.stx line 74; ../ui/template-calls.stx line 88">typesCompatible</a> : <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_17135_17139" title="Defined at line 29">TYPE</a>) * <span class="keyword">list</span>(<a href="#TYPE_669_673" id="TYPE_17148_17152" title="Defined at line 29">TYPE</a>) -&gt; <a href="#BOOL_697_701" id="BOOL_17157_17161" title="Defined at line 30">BOOL</a>
  <a href="#typesCompatible_17112_17127" id="typesCompatible_17164_17179" title="Defined at line 401">typesCompatible</a>([], []) = <a href="#TRUE_828_832" id="TRUE_17190_17194" title="Defined at line 34">TRUE</a>().
  <a href="#typesCompatible_17112_17127" id="typesCompatible_17200_17215" title="Defined at line 401">typesCompatible</a>([], [_|_]) = <a href="#FALSE_844_849" id="FALSE_17229_17234" title="Defined at line 35">FALSE</a>().
  <a href="#typesCompatible_17112_17127" id="typesCompatible_17240_17255" title="Defined at line 401">typesCompatible</a>([_|_], []) = <a href="#FALSE_844_849" id="FALSE_17269_17274" title="Defined at line 35">FALSE</a>().
  <a href="#typesCompatible_17112_17127" id="typesCompatible_17280_17295" title="Defined at line 401">typesCompatible</a>([t1|<span id="t1s_17300_17303" title="Not referenced locally, nor via imports">t1s</span>], [<span id="t2_17307_17309" title="Not referenced locally, nor via imports">t2</span>|t2s]) = <a href="#andB_17875_17879" id="andB_17318_17322" title="Defined at line 424">andB</a>(<a href="#typeCompatibleB_17528_17543" id="typeCompatibleB_17323_17338" title="Defined at line 411">typeCompatibleB</a>(<span id="t1_17339_17341" title="Not referenced locally, nor via imports">t1</span>, t2), <a href="#typesCompatible_17112_17127" id="typesCompatible_17348_17363" title="Defined at line 401">typesCompatible</a>(t1s, <span id="t2s_17369_17372" title="Not referenced locally, nor via imports">t2s</span>)).

  <a href="../webdsl-actions.stx#typesCompatibleWith_11481_11500" id="typesCompatibleWith_17379_17398" title="Referenced at ../webdsl-actions.stx line 273, 278, 284, 289">typesCompatibleWith</a> <span class="keyword">maps</span> <a href="#typeCompatible_17433_17447" id="typeCompatible_17404_17418" title="Defined at line 408">typeCompatible</a>(<span class="keyword">list</span>(*), *)
  <a href="#typeCompatible_17404_17418" id="typeCompatible_17433_17447" title="Referenced at line 407, 409; ../webdsl-ac.stx line 250; ../webdsl-actions.stx line 58, 76, 110, 131, 139, 142, 145, 161, 220, 305; ../webdsl-entities.stx line 133, 200; ../webdsl-expand.stx line 32, 72; ../webdsl-hql.stx line 116, 119; ../actions/binops.stx line 93, 94, 100, 101, 130; ../actions/functions.stx line 240, 249; ../entities/annotations.stx line 166, 198, 199; ../types/built-ins.stx line 152, 155, 169, 172, 175, 176, 179, 180, 183, 186, 187, 198, 207, 210, 213; ../ui/actions.stx line 33, 68, 135, 177, 178; ../ui/ajax.stx line 18, 26, 34, 42, 69, 77, 81, 94; ../ui/template-calls.stx line 70, 109">typeCompatible</a> : <a href="#TYPE_669_673" id="TYPE_17450_17454" title="Defined at line 29">TYPE</a> * <a href="#TYPE_669_673" id="TYPE_17457_17461" title="Defined at line 29">TYPE</a>
  <a href="#typeCompatible_17433_17447" id="typeCompatible_17464_17478" title="Defined at line 408">typeCompatible</a>(<a href="#T1_17506_17508" id="T1_17479_17481" title="Referenced at line 409">T1</a>, <a href="#T2_17510_17512" id="T2_17483_17485" title="Referenced at line 409">T2</a>) :- <a href="#typeCompatibleB_17528_17543" id="typeCompatibleB_17490_17505" title="Defined at line 411">typeCompatibleB</a>(<a href="#T1_17479_17481" id="T1_17506_17508" title="Defined at line 409">T1</a>, <a href="#T2_17483_17485" id="T2_17510_17512" title="Defined at line 409">T2</a>) == <a href="#TRUE_828_832" id="TRUE_17517_17521" title="Defined at line 34">TRUE</a>().

  <a href="#typeCompatibleB_17323_17338" id="typeCompatibleB_17528_17543" title="Referenced at line 405, 409, 412, 413; ../webdsl-entities.stx line 204; ../webdsl-native.stx line 15, 18; ../webdsl-types.stx line 98, 99, 102, 103, 104, 105, 106, 107, 108, 109, 112, 113, 114, 117, 117, 118, 118, 119, 120, 120, 121, 121, 122, 123, 210, 210; ../webdsl-ui.stx line 305; ../actions/binops.stx line 110, 111, 121, 122; ../entities/annotations.stx line 160, 161; ../entities/generated-functions.stx line 48; ../types/built-ins.stx line 162, 163, 220, 221; ../ui/attributes.stx line 52, 54, 55, 62, 64, 65">typeCompatibleB</a> : <a href="#TYPE_669_673" id="TYPE_17546_17550" title="Defined at line 29">TYPE</a> * <a href="#TYPE_669_673" id="TYPE_17553_17557" title="Defined at line 29">TYPE</a> -&gt; <a href="#BOOL_697_701" id="BOOL_17561_17565" title="Defined at line 30">BOOL</a>
  <a href="#typeCompatibleB_17528_17543" id="typeCompatibleB_17568_17583" title="Defined at line 411">typeCompatibleB</a>(<span id="T1_17584_17586" title="Not referenced locally, nor via imports">T1</span>, <span id="T2_17588_17590" title="Not referenced locally, nor via imports">T2</span>) = <a href="#FALSE_844_849" id="FALSE_17594_17599" title="Defined at line 35">FALSE</a>(). <span class="layout">//default</span>
  <a href="#typeCompatibleB_17528_17543" id="typeCompatibleB_17615_17630" title="Defined at line 411">typeCompatibleB</a>(<span id="T_17631_17632" title="Not referenced locally, nor via imports">T</span>, T) = <a href="#TRUE_828_832" id="TRUE_17639_17643" title="Defined at line 34">TRUE</a>(). <span class="layout">// same type is always type compatible</span>

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#or_17724_17726" id="or_17705_17707" title="Referenced at line 418; ../webdsl-actions.stx line 115, 168; ../webdsl-types.stx line 210; ../webdsl-ui.stx line 214; ../actions/binops.stx line 109, 120; ../entities/annotations.stx line 131, 144, 159; ../types/built-ins.stx line 161, 219; ../ui/actions.stx line 145; ../ui/attributes.stx line 51, 61">or</a> : <a href="#BOOL_697_701" id="BOOL_17710_17714" title="Defined at line 30">BOOL</a> * <a href="#BOOL_697_701" id="BOOL_17717_17721" title="Defined at line 30">BOOL</a>
  <a href="#or_17705_17707" id="or_17724_17726" title="Defined at line 417">or</a>(<a href="#b1_17742_17744" id="b1_17727_17729" title="Referenced at line 418">b1</a>, <a href="#b2_17746_17748" id="b2_17731_17733" title="Referenced at line 418">b2</a>) :- <a href="#orB_17763_17766" id="orB_17738_17741" title="Defined at line 419">orB</a>(<a href="#b1_17727_17729" id="b1_17742_17744" title="Defined at line 418">b1</a>, <a href="#b2_17731_17733" id="b2_17746_17748" title="Defined at line 418">b2</a>) == <a href="#TRUE_828_832" id="TRUE_17753_17757" title="Defined at line 34">TRUE</a>().
  <a href="#orB_17738_17741" id="orB_17763_17766" title="Referenced at line 418, 420, 421, 422; ../entities/annotations.stx line 144; ../ui/attributes.stx line 53, 63">orB</a> : <a href="#BOOL_697_701" id="BOOL_17769_17773" title="Defined at line 30">BOOL</a> * <a href="#BOOL_697_701" id="BOOL_17776_17780" title="Defined at line 30">BOOL</a> -&gt; <a href="#BOOL_697_701" id="BOOL_17784_17788" title="Defined at line 30">BOOL</a>
  <a href="#orB_17763_17766" id="orB_17791_17794" title="Defined at line 419">orB</a>(_, _) = <a href="#FALSE_844_849" id="FALSE_17803_17808" title="Defined at line 35">FALSE</a>().
  <a href="#orB_17763_17766" id="orB_17814_17817" title="Defined at line 419">orB</a>(<a href="#TRUE_828_832" id="TRUE_17818_17822" title="Defined at line 34">TRUE</a>(), _) = <a href="#TRUE_828_832" id="TRUE_17831_17835" title="Defined at line 34">TRUE</a>().
  <a href="#orB_17763_17766" id="orB_17841_17844" title="Defined at line 419">orB</a>(<a href="#FALSE_844_849" id="FALSE_17845_17850" title="Defined at line 35">FALSE</a>(), <a href="#TRUE_828_832" id="TRUE_17854_17858" title="Defined at line 34">TRUE</a>()) = <a href="#TRUE_828_832" id="TRUE_17864_17868" title="Defined at line 34">TRUE</a>().

  <a href="#andB_17318_17322" id="andB_17875_17879" title="Referenced at line 405, 425, 426">andB</a> : <a href="#BOOL_697_701" id="BOOL_17882_17886" title="Defined at line 30">BOOL</a> * <a href="#BOOL_697_701" id="BOOL_17889_17893" title="Defined at line 30">BOOL</a> -&gt; <a href="#BOOL_697_701" id="BOOL_17897_17901" title="Defined at line 30">BOOL</a>
  <a href="#andB_17875_17879" id="andB_17904_17908" title="Defined at line 424">andB</a>(_, _) = <a href="#FALSE_844_849" id="FALSE_17917_17922" title="Defined at line 35">FALSE</a>().
  <a href="#andB_17875_17879" id="andB_17928_17932" title="Defined at line 424">andB</a>(<a href="#TRUE_828_832" id="TRUE_17933_17937" title="Defined at line 34">TRUE</a>(), <a href="#TRUE_828_832" id="TRUE_17941_17945" title="Defined at line 34">TRUE</a>()) = <a href="#TRUE_828_832" id="TRUE_17951_17955" title="Defined at line 34">TRUE</a>().

  <a href="#equalB_17985_17991" id="equalB_17962_17968" title="Referenced at line 429, 430">equalB</a> : <a href="#BOOL_697_701" id="BOOL_17971_17975" title="Defined at line 30">BOOL</a> * <a href="#BOOL_697_701" id="BOOL_17978_17982" title="Defined at line 30">BOOL</a>
  <a href="#equalB_17962_17968" id="equalB_17985_17991" title="Defined at line 428">equalB</a>(b, <span id="b_17995_17996" title="Not referenced locally, nor via imports">b</span>).
  <a href="#equalB_17962_17968" id="equalB_18001_18007" title="Defined at line 428">equalB</a>(_, _) :- <span class="keyword">false</span>.

  <a href="#notB_18049_18053" id="notB_18027_18031" title="Referenced at line 433, 434; ../webdsl-modules.stx line 34; ../webdsl-ui.stx line 39, 71; ../entities/annotations.stx line 221, 224, 263">notB</a> : <a href="#BOOL_697_701" id="BOOL_18034_18038" title="Defined at line 30">BOOL</a> -&gt; <a href="#BOOL_697_701" id="BOOL_18042_18046" title="Defined at line 30">BOOL</a>
  <a href="#notB_18027_18031" id="notB_18049_18053" title="Defined at line 432">notB</a>(<a href="#TRUE_828_832" id="TRUE_18054_18058" title="Defined at line 34">TRUE</a>()) = <a href="#FALSE_844_849" id="FALSE_18064_18069" title="Defined at line 35">FALSE</a>().
  <a href="#notB_18027_18031" id="notB_18075_18079" title="Defined at line 432">notB</a>(<a href="#FALSE_844_849" id="FALSE_18080_18085" title="Defined at line 35">FALSE</a>()) = <a href="#TRUE_828_832" id="TRUE_18091_18095" title="Defined at line 34">TRUE</a>().

  <a href="#emtpyQueryResultB_18163_18180" id="emtpyQueryResultB_18102_18119" title="Referenced at line 437, 438">emtpyQueryResultB</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_18145_18149" title="Defined at line 29">TYPE</a>))) -&gt; <a href="#BOOL_697_701" id="BOOL_18156_18160" title="Defined at line 30">BOOL</a>
  <a href="#emtpyQueryResultB_18102_18119" id="emtpyQueryResultB_18163_18180" title="Defined at line 436">emtpyQueryResultB</a>([]) = <a href="#TRUE_828_832" id="TRUE_18187_18191" title="Defined at line 34">TRUE</a>().
  <a href="#emtpyQueryResultB_18102_18119" id="emtpyQueryResultB_18197_18214" title="Defined at line 436">emtpyQueryResultB</a>([_ | _]) = <a href="#FALSE_844_849" id="FALSE_18226_18231" title="Defined at line 35">FALSE</a>().

  <a href="#minOfList_18269_18278" id="minOfList_18238_18247" title="Referenced at line 441, 442, 443; ../actions/functions.stx line 204">minOfList</a> : <span class="keyword">list</span>(<span class="keyword">int</span>) -&gt; <span class="keyword">int</span>
  <a href="#minOfList_18238_18247" id="minOfList_18269_18278" title="Defined at line 440">minOfList</a>([]) = 100000.
  <a href="#minOfList_18238_18247" id="minOfList_18295_18304" title="Defined at line 440">minOfList</a>([<span id="x_18306_18307" title="Not referenced locally, nor via imports">x</span>|<a href="#xs_18343_18345" id="xs_18308_18310" title="Referenced at line 443">xs</a>]) = <a href="#z_18352_18353" id="z_18315_18316" title="Referenced at line 444">z</a> :- {<a href="#y_18328_18329" id="y_18321_18322" title="Referenced at line 443">y</a>}
    <a href="#y_18321_18322" id="y_18328_18329" title="Defined at line 442">y</a> == <a href="#minOfList_18238_18247" id="minOfList_18333_18342" title="Defined at line 440">minOfList</a>(<a href="#xs_18308_18310" id="xs_18343_18345" title="Defined at line 442">xs</a>),
    <a href="#z_18315_18316" id="z_18352_18353" title="Defined at line 442">z</a> #= <span class="keyword">min</span>(x,y).

  <a href="#scopeFromPath_18402_18415" id="scopeFromPath_18370_18383" title="Referenced at line 447, 448; ../entities/annotations.stx line 182, 259, 263">scopeFromPath</a> : <span class="keyword">path</span> -&gt; <span class="keyword">scope</span>
  <a href="#scopeFromPath_18370_18383" id="scopeFromPath_18402_18415" title="Defined at line 446">scopeFromPath</a>(_<span class="keyword">PathEmpty</span>(<span id="s_18427_18428" title="Not referenced locally, nor via imports">s</span>)) = s.
  <a href="#scopeFromPath_18370_18383" id="scopeFromPath_18438_18451" title="Defined at line 446">scopeFromPath</a>(_<span class="keyword">PathStep</span>(_, _, s)) = <span id="s_18474_18475" title="Not referenced locally, nor via imports">s</span>.

  <a href="#pathLength_18507_18517" id="pathLength_18480_18490" title="Referenced at line 451, 452, 453, 479, 485; ../webdsl-entities.stx line 218">pathLength</a> : <span class="keyword">path</span> -&gt; <span class="keyword">int</span>
  <a href="#pathLength_18480_18490" id="pathLength_18507_18517" title="Defined at line 450">pathLength</a>(_<span class="keyword">PathEmpty</span>(_)) = 0.
  <a href="#pathLength_18480_18490" id="pathLength_18540_18550" title="Defined at line 450">pathLength</a>(_<span class="keyword">PathStep</span>(<a href="#p_18604_18605" id="p_18561_18562" title="Referenced at line 453">p</a>, _, _)) = <a href="#x_18612_18613" id="x_18573_18574" title="Referenced at line 454">x</a> :- {<a href="#x'_18587_18589" id="x'_18579_18581" title="Referenced at line 453">x'</a>}
    <a href="#x'_18579_18581" id="x'_18587_18589" title="Defined at line 452">x'</a> == <a href="#pathLength_18480_18490" id="pathLength_18593_18603" title="Defined at line 450">pathLength</a>(<a href="#p_18561_18562" id="p_18604_18605" title="Defined at line 452">p</a>),
    <a href="#x_18573_18574" id="x_18612_18613" title="Defined at line 452">x</a> #= x' + 1.

  <a href="#noDuplicatesString_18673_18691" id="noDuplicatesString_18628_18646" title="Referenced at line 457, 458, 459, 459, 460, 460, 461; ../ui/template-calls.stx line 101">noDuplicatesString</a> : <span class="keyword">string</span> * <span class="keyword">list</span>(<span class="keyword">string</span>)
  <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18673_18691" title="Defined at line 456">noDuplicatesString</a>(_, []).
  <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18702_18720" title="Defined at line 456">noDuplicatesString</a>("_IGNORE", _).
  <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18738_18756" title="Defined at line 456">noDuplicatesString</a>(<a href="#x_18800_18801" id="x_18757_18758" title="Referenced at line 459">x</a>, ["_IGNORE" | <a href="#ys_18803_18805" id="ys_18773_18775" title="Referenced at line 459">ys</a>]) :- <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18781_18799" title="Defined at line 456">noDuplicatesString</a>(<a href="#x_18757_18758" id="x_18800_18801" title="Defined at line 459">x</a>, <a href="#ys_18773_18775" id="ys_18803_18805" title="Defined at line 459">ys</a>).
  <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18810_18828" title="Defined at line 456">noDuplicatesString</a>(<a href="#x_18864_18865" id="x_18829_18830" title="Referenced at line 460">x</a>, [<span id="y_18833_18834" title="Not referenced locally, nor via imports">y</span> | <a href="#ys_18867_18869" id="ys_18837_18839" title="Referenced at line 460">ys</a>]) :- <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18845_18863" title="Defined at line 456">noDuplicatesString</a>(<a href="#x_18829_18830" id="x_18864_18865" title="Defined at line 460">x</a>, <a href="#ys_18837_18839" id="ys_18867_18869" title="Defined at line 460">ys</a>).
  <a href="#noDuplicatesString_18628_18646" id="noDuplicatesString_18874_18892" title="Defined at line 456">noDuplicatesString</a>(x, [<span id="x_18897_18898" title="Not referenced locally, nor via imports">x</span> | _]) :- <span class="keyword">false</span>.

  <a href="#addQueryResults_19036_19051" id="addQueryResults_18918_18933" title="Referenced at line 464, 465, 465">addQueryResults</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_18959_18963" title="Defined at line 29">TYPE</a>))) * <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_18992_18996" title="Defined at line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19026_19030" title="Defined at line 29">TYPE</a>)))
  <a href="#addQueryResults_18918_18933" id="addQueryResults_19036_19051" title="Defined at line 463">addQueryResults</a>([], ls) = <span id="ls_19062_19064" title="Not referenced locally, nor via imports">ls</span>.
  <a href="#addQueryResults_18918_18933" id="addQueryResults_19068_19083" title="Defined at line 463">addQueryResults</a>([hd | tl], <span id="ls_19095_19097" title="Not referenced locally, nor via imports">ls</span>) = [<span id="hd_19102_19104" title="Not referenced locally, nor via imports">hd</span> | <a href="#addQueryResults_18918_18933" id="addQueryResults_19107_19122" title="Defined at line 463">addQueryResults</a>(<span id="tl_19123_19125" title="Not referenced locally, nor via imports">tl</span>, ls)].

  <span class="layout">// functional rule to drop all results with longer paths than the minimal</span>
  <a href="#filterShortestPath_19300_19318" id="filterShortestPath_19212_19230" title="Referenced at line 469">filterShortestPath</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19256_19260" title="Defined at line 29">TYPE</a>))) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19290_19294" title="Defined at line 29">TYPE</a>)))
  <a href="#filterShortestPath_19212_19230" id="filterShortestPath_19300_19318" title="Defined at line 468">filterShortestPath</a>(ps) = <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19325_19352" title="Defined at line 471">filterShortestPath_internal</a>(<a href="#zipQueryResultsWithPathLength_19971_20000" id="zipQueryResultsWithPathLength_19353_19382" title="Defined at line 483">zipQueryResultsWithPathLength</a>(<span id="ps_19383_19385" title="Not referenced locally, nor via imports">ps</span>), <a href="#shortestPathLength_19749_19767" id="shortestPathLength_19388_19406" title="Defined at line 476">shortestPathLength</a>(ps)).

  <a href="#filterShortestPath_internal_19325_19352" id="filterShortestPath_internal_19416_19443" title="Referenced at line 469, 472, 473, 473, 474, 474">filterShortestPath_internal</a> : <span class="keyword">list</span>((<span class="keyword">int</span> * (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19476_19480" title="Defined at line 29">TYPE</a>)))) * <span class="keyword">int</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19517_19521" title="Defined at line 29">TYPE</a>)))
  <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19527_19554" title="Defined at line 471">filterShortestPath_internal</a>([], _) = [].
  <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19570_19597" title="Defined at line 471">filterShortestPath_internal</a>([(<span id="x_19600_19601" title="Not referenced locally, nor via imports">x</span>, <span id="r_19603_19604" title="Not referenced locally, nor via imports">r</span>) | ps], x) = [r | <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19623_19650" title="Defined at line 471">filterShortestPath_internal</a>(<span id="ps_19651_19653" title="Not referenced locally, nor via imports">ps</span>, x)].
  <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19662_19689" title="Defined at line 471">filterShortestPath_internal</a>([_      | ps], x) = <a href="#filterShortestPath_internal_19416_19443" id="filterShortestPath_internal_19710_19737" title="Defined at line 471">filterShortestPath_internal</a>(<span id="ps_19738_19740" title="Not referenced locally, nor via imports">ps</span>, <span id="x_19742_19743" title="Not referenced locally, nor via imports">x</span>).

  <a href="#shortestPathLength_19388_19406" id="shortestPathLength_19749_19767" title="Referenced at line 469, 477, 478, 480">shortestPathLength</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_19793_19797" title="Defined at line 29">TYPE</a>))) -&gt; <span class="keyword">int</span>
  <a href="#shortestPathLength_19749_19767" id="shortestPathLength_19810_19828" title="Defined at line 476">shortestPathLength</a>([]) = 10000.
  <a href="#shortestPathLength_19749_19767" id="shortestPathLength_19844_19862" title="Defined at line 476">shortestPathLength</a>([(<a href="#p_19911_19912" id="p_19865_19866" title="Referenced at line 479">p</a>, _) | <a href="#ps_19943_19945" id="ps_19873_19875" title="Referenced at line 480">ps</a>]) = <a href="#z_19952_19953" id="z_19880_19881" title="Referenced at line 481">z</a> :- {<a href="#x_19895_19896" id="x_19886_19887" title="Referenced at line 479">x</a> <a href="#y_19919_19920" id="y_19888_19889" title="Referenced at line 480">y</a>}
    <a href="#x_19886_19887" id="x_19895_19896" title="Defined at line 478">x</a> == <a href="#pathLength_18480_18490" id="pathLength_19900_19910" title="Defined at line 450">pathLength</a>(<a href="#p_19865_19866" id="p_19911_19912" title="Defined at line 478">p</a>),
    <a href="#y_19888_19889" id="y_19919_19920" title="Defined at line 478">y</a> == <a href="#shortestPathLength_19749_19767" id="shortestPathLength_19924_19942" title="Defined at line 476">shortestPathLength</a>(<a href="#ps_19873_19875" id="ps_19943_19945" title="Defined at line 478">ps</a>),
    <a href="#z_19880_19881" id="z_19952_19953" title="Defined at line 478">z</a> #= <span class="keyword">min</span>(x, y).

  <a href="#zipQueryResultsWithPathLength_19353_19382" id="zipQueryResultsWithPathLength_19971_20000" title="Referenced at line 469">zipQueryResultsWithPathLength</a> <span class="keyword">maps</span> <a href="#zipQueryResultWithPathLength_20056_20084" id="zipQueryResultWithPathLength_20006_20034" title="Defined at line 484">zipQueryResultWithPathLength</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#zipQueryResultWithPathLength_20006_20034" id="zipQueryResultWithPathLength_20056_20084" title="Referenced at line 483, 485">zipQueryResultWithPathLength</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_20105_20109" title="Defined at line 29">TYPE</a>)) -&gt; (<span class="keyword">int</span> * (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_20140_20144" title="Defined at line 29">TYPE</a>)))
  <a href="#zipQueryResultWithPathLength_20056_20084" id="zipQueryResultWithPathLength_20150_20178" title="Defined at line 484">zipQueryResultWithPathLength</a>(<span id="r_20179_20180" title="Not referenced locally, nor via imports">r</span>@(<span id="p_20182_20183" title="Not referenced locally, nor via imports">p</span>, _)) = (<a href="#pathLength_18480_18490" id="pathLength_20192_20202" title="Defined at line 450">pathLength</a>(p), r).

  <a href="../webdsl-ac.stx#queryResultTypes_8504_8520" id="queryResultTypes_20214_20230" title="Referenced at ../webdsl-ac.stx line 155, 164, 173, 274">queryResultTypes</a> <span class="keyword">maps</span> <a href="#queryResultType_20273_20288" id="queryResultType_20236_20251" title="Defined at line 488">queryResultType</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#queryResultType_20236_20251" id="queryResultType_20273_20288" title="Referenced at line 487, 489">queryResultType</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#TYPE_669_673" id="TYPE_20309_20313" title="Defined at line 29">TYPE</a>)) -&gt; <a href="#TYPE_669_673" id="TYPE_20319_20323" title="Defined at line 29">TYPE</a>
  <a href="#queryResultType_20273_20288" id="queryResultType_20326_20341" title="Defined at line 488">queryResultType</a>((_, (_, <span id="t_20350_20351" title="Not referenced locally, nor via imports">t</span>))) = t.

  <a href="../webdsl-ac.stx#argNames_12485_12493" id="argNames_20363_20371" title="Referenced at ../webdsl-ac.stx line 213">argNames</a> <span class="keyword">maps</span> <a href="#argName_20406_20413" id="argName_20377_20384" title="Defined at line 492">argName</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#argName_20377_20384" id="argName_20406_20413" title="Referenced at line 491, 493">argName</a> : <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_20416_20425" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a> -&gt; <span class="keyword">string</span>
  <a href="#argName_20406_20413" id="argName_20438_20445" title="Defined at line 492">argName</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Arg_1442_1445" id="Arg_20446_20449" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 56">Arg</a>(x, _)) = <span id="x_20459_20460" title="Not referenced locally, nor via imports">x</span>.

</code></pre></td></tr></tbody></table></div>