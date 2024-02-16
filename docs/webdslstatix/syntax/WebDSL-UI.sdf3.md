---
title: WebDSL-UI.sdf3
hide:
  - toc
---

# `WebDSL-UI.sdf3`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-UI.sdf3]

[pdmosses/webdsl-statix/webdslstatix/syntax/WebDSL-UI.sdf3]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/syntax/WebDSL-UI.sdf3 "The source file on GitHub"

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
494
495
496
497
498
499
500
501
502
503
504
505
506
507
508
509
510
511
512
513
514
515
516
517
518
519
520
521
522
523
524
525
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <button class="modal-open" id="WebDSL-UI_1_8" title="a definition with multiple references" data-urls="../HQL.sdf3/#WebDSL-UI line 7_3; ../WebDSL-AccessControl.sdf3/#WebDSL-UI line 8_3; ../WebDSL-Action.sdf3/#WebDSL-UI line 8_3; ../WebDSL-Ajax.sdf3/#WebDSL-UI line 6_3; ../WebDSL-Attributes.sdf3/#WebDSL-UI line 7_3; ../WebDSL-DataValidation.sdf3/#WebDSL-UI line 6_3; ../WebDSL-Dispatch.sdf3/#WebDSL-UI line 7_3; ../WebDSL-EntityDerive.sdf3/#WebDSL-UI line 7_3; ../WebDSL-Exception.sdf3/#WebDSL-UI line 7_3; ../WebDSL-Expand.sdf3/#WebDSL-UI line 7_3; ../WebDSL-JavaScript.sdf3/#WebDSL-UI line 6_3; ../WebDSL-Prefetch.sdf3/#WebDSL-UI line 7_3; ../WebDSL-Service.sdf3/#WebDSL-UI line 7_3; ../webdsl-statix.sdf3/#WebDSL-UI line 27_3; ../WebDSL-XML.sdf3/#WebDSL-UI line 5_3">WebDSL-UI</button>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action.sdf3/#WebDSL-Action_1_8" id="WebDSL-Action_4_3" title="a reference to a single-file definition">WebDSL-Action</a>
  <a href="../WebDSL-Attributes.sdf3/#WebDSL-Attributes_1_8" id="WebDSL-Attributes_5_3" title="a reference to a single-file definition">WebDSL-Attributes</a>
  <a href="../WebDSL-Core.sdf3/#WebDSL-Core_1_8" id="WebDSL-Core_6_3" title="a reference to a single-file definition">WebDSL-Core</a>
  <a href="../WebDSL-Lexical.sdf3/#WebDSL-Lexical_1_8" id="WebDSL-Lexical_7_3" title="a reference to a single-file definition">WebDSL-Lexical</a>
  <a href="../WebDSL-XML.sdf3/#WebDSL-XML_1_8" id="WebDSL-XML_8_3" title="a reference to a single-file definition">WebDSL-XML</a>

<span class="keyword">template options</span>

  <span class="keyword">keyword</span> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\-\_]

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="TemplateDefinition_16_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button> <button class="modal-open" id="Modifier_16_22" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button> <button class="modal-open" id="TemplateElement_16_31" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button> <button class="modal-open" id="OptFilter_16_47" title="a definition with multiple references" data-urls="#OptFilter line 152_38, 157_29, 162_29, 470_59, 471_58, 472_53; ../WebDSL-Action.sdf3/#OptFilter line 150_38, 153_29, 156_29, 308_83, 309_74">OptFilter</button> <button class="modal-open" id="PageCall_16_57" title="a definition with multiple references" data-urls="#PageCall line 280_17, 283_17, 286_15, 289_15; ../WebDSL-Action.sdf3/#PageCall line 71_11, 74_13, 77_23; ../WebDSL-Ajax.sdf3/#PageCall line 25_45, 49_27">PageCall</button> <button class="modal-open" id="TemplateCall_16_66" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> <button class="modal-open" id="PropertyAssignment_16_79" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_17_3" title="a definition with a single reference">TemplateArgExp</a> <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_17_18" title="a definition with a single reference">TemplateCaseAlt</a> <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_17_34" title="a definition with a single reference">TemplateTypeCaseAlt</a> <button class="modal-open" id="OptTemplateArgs_17_54" title="a definition with multiple references" data-urls="#OptTemplateArgs line 28_46, 42_48, 47_56, 52_45">OptTemplateArgs</button> <a href="#TemplateArg_32_46" id="TemplateArg_17_70" title="a definition with a single reference">TemplateArg</a> <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_17_82" title="a definition with a single reference">OptLocalRedefineArgs</a>
  <a href="#LocalRedefineArg_39_53" id="LocalRedefineArg_18_3" title="a definition with a single reference">LocalRedefineArg</a>

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="SubmitProp_22_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button>

<span class="keyword">context-free syntax</span>

  <span id="Definition_26_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="TemplateDefinition_26_14" title="a definition with no references">TemplateDefinition</span></span> = <a href="#TemplateDefinition_16_3" id="TemplateDefinition_26_35" title="a reference to a single-file definition">TemplateDefinition</a>
  <button class="modal-open" id="TemplateDefinition_27_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="Define_27_22" title="a definition with no references">Define</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_16_22" id="Modifier_28_13" title="a reference to a single-file definition">Modifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_28_25" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_28_30" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_28_46" title="a reference to a single-file definition">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_29_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="OptTemplateArgs_32_3" title="a definition with multiple references" data-urls="#OptTemplateArgs line 28_46, 42_48, 47_56, 52_45">OptTemplateArgs</button>.<span class="cons_Constructor"><span id="TemplateArgs_32_19" title="a definition with no references">TemplateArgs</span></span> = &lt;<span class="cons_String">requires</span> &lt;{<a href="#TemplateArg_17_70" id="TemplateArg_32_46" title="a reference to a single-file definition">TemplateArg</a> <span class="cons_Lit">","</span>}*&gt;&gt;
  <button class="modal-open" id="OptTemplateArgs_33_3" title="a definition with multiple references" data-urls="#OptTemplateArgs line 28_46, 42_48, 47_56, 52_45">OptTemplateArgs</button>.<span class="cons_Constructor"><span id="OptTemplateArgsNone_33_19" title="a definition with no references">OptTemplateArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArg_32_46" id="TemplateArg_34_3" title="a definition with a single reference">TemplateArg</a>.<span class="cons_Constructor"><span id="TemplateArg_34_15" title="a definition with no references">TemplateArg</span></span> = &lt;&lt;<a href="#TemplateId_81_3" id="TemplateId_34_31" title="a reference to a single-file definition">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Sort_464_3" id="Sort_34_47" title="a reference to a single-file definition">Sort</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <button class="modal-open" id="TemplateDefinition_35_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="LocalRedefine_35_22" title="a definition with no references">LocalRedefine</span></span> = &lt;
    <span class="cons_String">define</span> &lt;<a href="#Modifier_16_22" id="Modifier_36_13" title="a reference to a single-file definition">Modifier</a>*&gt; &lt;<a href="#TemplateId_81_3" id="TemplateId_36_25" title="a reference to a single-file definition">TemplateId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_36_41" title="a reference to a single-file definition">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">=</span> &lt;<a href="#TemplateId_81_3" id="TemplateId_36_63" title="a reference to a single-file definition">TemplateId</a>&gt; &lt;<a href="#OptLocalRedefineArgs_17_82" id="OptLocalRedefineArgs_36_76" title="a reference to a single-file definition">OptLocalRedefineArgs</a>&gt;
  &gt;
  <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_38_3" title="a definition with a single reference">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="OptLocalRedefineArgsNone_38_24" title="a definition with no references">OptLocalRedefineArgsNone</span></span> = &lt;&gt;
  <a href="#OptLocalRedefineArgs_36_76" id="OptLocalRedefineArgs_39_3" title="a definition with a single reference">OptLocalRedefineArgs</a>.<span class="cons_Constructor"><span id="LocalRedefineArgs_39_24" title="a definition with no references">LocalRedefineArgs</span></span> = &lt;<span class="cons_String">(</span> <span class="cons_String">*</span> <span class="cons_String">,</span> &lt;{<a href="#LocalRedefineArg_18_3" id="LocalRedefineArg_39_53" title="a reference to a single-file definition">LocalRedefineArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span>&gt;
  <a href="#LocalRedefineArg_39_53" id="LocalRedefineArg_40_3" title="a definition with a single reference">LocalRedefineArg</a>.<span class="cons_Constructor"><span id="LocalRedefineArg_40_20" title="a definition with no references">LocalRedefineArg</span></span> = <a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_40_39" title="a reference to a single-file definition">Id</a>
  <button class="modal-open" id="TemplateDefinition_41_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="DefinePage_41_22" title="a definition with no references">DefinePage</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_42_6" title="a reference to a single-file definition">Modifier</a>*&gt; <span class="cons_String">page</span> &lt;<a href="../WebDSL-Lexical.sdf3/#PageId_5_52" id="PageId_42_23" title="a reference to a single-file definition">PageId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_42_32" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_42_48" title="a reference to a single-file definition">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_43_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateDefinition_46_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="DefineTemplate_46_22" title="a definition with no references">DefineTemplate</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_47_6" title="a reference to a single-file definition">Modifier</a>*&gt; <span class="cons_String">template</span> &lt;<a href="#TemplateId_81_3" id="TemplateId_47_27" title="a reference to a single-file definition">TemplateId</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_47_40" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_47_56" title="a reference to a single-file definition">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_48_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateDefinition_51_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="DefineEmail_51_22" title="a definition with no references">DefineEmail</span></span> = &lt;
    &lt;<a href="#Modifier_16_22" id="Modifier_52_6" title="a reference to a single-file definition">Modifier</a>*&gt; <span class="cons_String">email</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_52_24" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_52_29" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="#OptTemplateArgs_17_54" id="OptTemplateArgs_52_45" title="a reference to a single-file definition">OptTemplateArgs</a>&gt; <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_53_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="Modifier_56_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="Page_56_12" title="a definition with no references">Page</span></span> = &lt;<span class="cons_String">page</span>&gt;
  <button class="modal-open" id="Modifier_57_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="Email_57_12" title="a definition with no references">Email</span></span> = &lt;<span class="cons_String">email</span>&gt;
  <button class="modal-open" id="Modifier_58_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="AjaxTemplate_58_12" title="a definition with no references">AjaxTemplate</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <button class="modal-open" id="Modifier_59_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="Template_59_12" title="a definition with no references">Template</span></span> = &lt;<span class="cons_String">template</span>&gt;
  <button class="modal-open" id="Modifier_60_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="Feed_60_12" title="a definition with no references">Feed</span></span> = &lt;<span class="cons_String">feed</span>&gt;
  <button class="modal-open" id="Modifier_61_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="Local_61_12" title="a definition with no references">Local</span></span> = &lt;<span class="cons_String">local</span>&gt;
  <button class="modal-open" id="Modifier_62_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="NoSpan_62_12" title="a definition with no references">NoSpan</span></span> = &lt;<span class="cons_String">no-span</span>&gt;
  <button class="modal-open" id="Modifier_63_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModSpan_63_12" title="a definition with no references">TemplateModSpan</span></span> = &lt;<span class="cons_String">span</span>&gt;
  <button class="modal-open" id="Modifier_64_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModInline_64_12" title="a definition with no references">TemplateModInline</span></span> = &lt;<span class="cons_String">inline</span>&gt;
  <button class="modal-open" id="Modifier_65_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TempateModSecure_65_12" title="a definition with no references">TempateModSecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <button class="modal-open" id="Modifier_66_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModNotSecure_66_12" title="a definition with no references">TemplateModNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <button class="modal-open" id="Modifier_67_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TemplateModOverride_67_12" title="a definition with no references">TemplateModOverride</span></span> = &lt;<span class="cons_String">override</span>&gt;
  <button class="modal-open" id="Modifier_68_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="TemplateDeprecated_68_12" title="a definition with no references">TemplateDeprecated</span></span> = &lt;<span class="cons_String">deprecated</span>&gt;
  <button class="modal-open" id="Modifier_69_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="ExpireCache_69_12" title="a definition with no references">ExpireCache</span></span> = &lt;<span class="cons_String">expire-cache</span>&gt;
  <button class="modal-open" id="Modifier_70_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="ReadOnlyPage_70_12" title="a definition with no references">ReadOnlyPage</span></span> = &lt;<span class="cons_String">read-only</span>&gt;
  <button class="modal-open" id="Modifier_71_3" title="a definition with multiple references" data-urls="#Modifier line 28_13, 36_13, 42_6, 47_6, 52_6, 77_20; ../WebDSL-Service.sdf3/#Modifier line 17_14">Modifier</button>.<span class="cons_Constructor"><span id="WebService_71_12" title="a definition with no references">WebService</span></span> = &lt;<span class="cons_String">service</span>&gt;
  <button class="modal-open" id="TemplateElement_72_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="Init_72_19" title="a definition with no references">Init</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_73_11" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_75_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button> = <a href="#Action_444_3" id="Action_75_21" title="a reference to a single-file definition">Action</a>

  <button class="modal-open" id="TemplateCall_77_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;&lt;<a href="#Modifier_16_22" id="Modifier_77_20" title="a reference to a single-file definition">Modifier</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_81_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"template"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_82_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"define"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="VarDecl_86_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="VarDecl_90_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDecl_90_11" title="a definition with no references">TemplateVarDecl</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_91_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_91_20" title="a reference to a single-file definition">Sort</a>&gt;
  &gt;
  <button class="modal-open" id="VarDecl_93_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDeclDepr_93_11" title="a definition with no references">TemplateVarDeclDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_94_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_94_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <button class="modal-open" id="VarDecl_96_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDeclInit_96_11" title="a definition with no references">TemplateVarDeclInit</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_97_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_97_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_97_30" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <button class="modal-open" id="VarDecl_99_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDeclInitDepr_99_11" title="a definition with no references">TemplateVarDeclInitDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_100_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_100_20" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_100_30" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <button class="modal-open" id="VarDecl_102_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferred_102_11" title="a definition with no references">TemplateVarDeclInitInferred</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_103_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_103_21" title="a reference to a single-file definition">Exp</a>&gt;
  &gt;
  <button class="modal-open" id="VarDecl_105_3" title="a definition with multiple references" data-urls="#VarDecl line 108_31, 110_14, 113_12">VarDecl</button>.<span class="cons_Constructor"><span id="TemplateVarDeclInitInferredDepr_105_11" title="a definition with no references">TemplateVarDeclInitInferredDepr</span></span> = &lt;
    <span class="cons_String">var</span> &lt;<a href="#VarId_521_3" id="VarId_106_10" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_106_21" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">;</span>
  &gt; {<span class="keyword">deprecated</span>("remove ;")}
  <button class="modal-open" id="TemplateElement_108_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="TEVarDecl_108_19" title="a definition with no references">TEVarDecl</span></span> = <a href="#VarDecl_86_3" id="VarDecl_108_31" title="a reference to a single-file definition">VarDecl</a>
  <button class="modal-open" id="TemplateElement_109_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="RequestScopeTemplate_109_19" title="a definition with no references">RequestScopeTemplate</span></span> = &lt;
    <span class="cons_String">request</span> &lt;<a href="#VarDecl_86_3" id="VarDecl_110_14" title="a reference to a single-file definition">VarDecl</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_112_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="LocalScopeTemplate_112_19" title="a definition with no references">LocalScopeTemplate</span></span> = &lt;
    <span class="cons_String">local</span> &lt;<a href="#VarDecl_86_3" id="VarDecl_113_12" title="a reference to a single-file definition">VarDecl</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_115_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button> = <a href="#TemplateDefinition_16_3" id="TemplateDefinition_115_21" title="a reference to a single-file definition">TemplateDefinition</a>
  <button class="modal-open" id="TemplateElement_116_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button> = <a href="#TemplateCall_16_66" id="TemplateCall_116_21" title="a reference to a single-file definition">TemplateCall</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_120_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"request"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_121_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"local"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="Filter_125_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button> <button class="modal-open" id="OrderExp_125_10" title="a definition with multiple references" data-urls="#OrderExp line 130_45, 131_50, 133_38, 135_43">OrderExp</button> <button class="modal-open" id="Limit_125_19" title="a definition with multiple references" data-urls="#Limit line 132_42, 133_55, 134_35, 135_60">Limit</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Filter_129_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoOrderByNoLimit_129_10" title="a definition with no references">FilterNoOrderByNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_129_43" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Filter_130_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhereNoLimit_130_10" title="a definition with no references">FilterNoWhereNoLimit</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_130_45" title="a reference to a single-file definition">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <button class="modal-open" id="Filter_131_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoLimit_131_10" title="a definition with no references">FilterNoLimit</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_131_34" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_131_50" title="a reference to a single-file definition">OrderExp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <button class="modal-open" id="Filter_132_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoOrderBy_132_10" title="a definition with no references">FilterNoOrderBy</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_132_36" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#Limit_125_19" id="Limit_132_42" title="a reference to a single-file definition">Limit</a>&gt;&gt;
  <button class="modal-open" id="Filter_133_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhere_133_10" title="a definition with no references">FilterNoWhere</span></span> = &lt;<span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_133_38" title="a reference to a single-file definition">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_125_19" id="Limit_133_55" title="a reference to a single-file definition">Limit</a>&gt;&gt;
  <button class="modal-open" id="Filter_134_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="FilterNoWhereNoOrderBy_134_10" title="a definition with no references">FilterNoWhereNoOrderBy</span></span> = <a href="#Limit_125_19" id="Limit_134_35" title="a reference to a single-file definition">Limit</a>
  <button class="modal-open" id="Filter_135_3" title="a definition with multiple references" data-urls="#Filter line 142_29; ../WebDSL-Action.sdf3/#Filter line 311_75, 312_66, 315_75, 316_66">Filter</button>.<span class="cons_Constructor"><span id="Filter_135_10" title="a definition with no references">Filter</span></span> = &lt;<span class="cons_String">where</span> &lt;<a href="#Exp_469_3" id="Exp_135_27" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">order</span> <span class="cons_String">by</span> &lt;{<a href="#OrderExp_125_10" id="OrderExp_135_43" title="a reference to a single-file definition">OrderExp</a> <span class="cons_Lit">","</span>}+&gt; &lt;<a href="#Limit_125_19" id="Limit_135_60" title="a reference to a single-file definition">Limit</a>&gt;&gt;
  <button class="modal-open" id="OrderExp_136_3" title="a definition with multiple references" data-urls="#OrderExp line 130_45, 131_50, 133_38, 135_43">OrderExp</button>.<span class="cons_Constructor"><span id="OrderNonSpecific_136_12" title="a definition with no references">OrderNonSpecific</span></span> = <a href="#Exp_469_3" id="Exp_136_31" title="a reference to a single-file definition">Exp</a>
  <button class="modal-open" id="OrderExp_137_3" title="a definition with multiple references" data-urls="#OrderExp line 130_45, 131_50, 133_38, 135_43">OrderExp</button>.<span class="cons_Constructor"><span id="OrderAscending_137_12" title="a definition with no references">OrderAscending</span></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_137_31" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">asc</span>&gt;
  <button class="modal-open" id="OrderExp_138_3" title="a definition with multiple references" data-urls="#OrderExp line 130_45, 131_50, 133_38, 135_43">OrderExp</button>.<span class="cons_Constructor"><span id="OrderDescending_138_12" title="a definition with no references">OrderDescending</span></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_138_32" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">desc</span>&gt;
  <button class="modal-open" id="Limit_139_3" title="a definition with multiple references" data-urls="#Limit line 132_42, 133_55, 134_35, 135_60">Limit</button>.<span class="cons_Constructor"><span id="Limit_139_9" title="a definition with no references">Limit</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_469_3" id="Exp_139_25" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">offset</span> &lt;<a href="#Exp_469_3" id="Exp_139_38" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Limit_140_3" title="a definition with multiple references" data-urls="#Limit line 132_42, 133_55, 134_35, 135_60">Limit</button>.<span class="cons_Constructor"><span id="LimitNoOffset_140_9" title="a definition with no references">LimitNoOffset</span></span> = &lt;<span class="cons_String">limit</span> &lt;<a href="#Exp_469_3" id="Exp_140_33" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="Limit_141_3" title="a definition with multiple references" data-urls="#Limit line 132_42, 133_55, 134_35, 135_60">Limit</button>.<span class="cons_Constructor"><span id="LimitNoLimit_141_9" title="a definition with no references">LimitNoLimit</span></span> = &lt;<span class="cons_String">offset</span> &lt;<a href="#Exp_469_3" id="Exp_141_33" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="OptFilter_142_3" title="a definition with multiple references" data-urls="#OptFilter line 152_38, 157_29, 162_29, 470_59, 471_58, 472_53; ../WebDSL-Action.sdf3/#OptFilter line 150_38, 153_29, 156_29, 308_83, 309_74">OptFilter</button>.<span class="cons_Constructor"><span id="OptFilterSome_142_13" title="a definition with no references">OptFilterSome</span></span> = <a href="#Filter_125_3" id="Filter_142_29" title="a reference to a single-file definition">Filter</a>
  <button class="modal-open" id="OptFilter_143_3" title="a definition with multiple references" data-urls="#OptFilter line 152_38, 157_29, 162_29, 470_59, 471_58, 472_53; ../WebDSL-Action.sdf3/#OptFilter line 150_38, 153_29, 156_29, 308_83, 309_74">OptFilter</button>.<span class="cons_Constructor"><span id="OptFilterNone_143_13" title="a definition with no references">OptFilterNone</span></span> = &lt;&gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ForSeparator_147_3" title="a definition with multiple references" data-urls="#ForSeparator line 154_8, 159_8, 164_8, 169_8">ForSeparator</button> <a href="#ElseIfTempl_189_8" id="ElseIfTempl_147_16" title="a definition with a single reference">ElseIfTempl</a> <a href="#OptElseTempl_189_23" id="OptElseTempl_147_28" title="a definition with a single reference">OptElseTempl</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_151_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="For_151_19" title="a definition with no references">For</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_152_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_152_22" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_152_32" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_152_38" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_153_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_154_8" title="a reference to a single-file definition">ForSeparator</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_156_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="ForInferred_156_19" title="a definition with no references">ForInferred</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_157_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_157_23" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_157_29" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_158_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_159_8" title="a reference to a single-file definition">ForSeparator</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_161_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="ForAll_161_19" title="a definition with no references">ForAll</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_162_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_162_22" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_162_29" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_163_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_164_8" title="a reference to a single-file definition">ForSeparator</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_166_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="ForCount_166_19" title="a definition with no references">ForCount</span></span> = &lt;
    <span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="#VarId_521_3" id="VarId_167_12" title="a reference to a single-file definition">VarId</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_469_3" id="Exp_167_31" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_469_3" id="Exp_167_40" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_168_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ForSeparator_147_3" id="ForSeparator_169_8" title="a reference to a single-file definition">ForSeparator</a>&gt;
  &gt;
  <button class="modal-open" id="ForSeparator_171_3" title="a definition with multiple references" data-urls="#ForSeparator line 154_8, 159_8, 164_8, 169_8">ForSeparator</button>.<span class="cons_Constructor"><span id="ForSeparator_171_16" title="a definition with no references">ForSeparator</span></span> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_171_48" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="ForSeparator_172_3" title="a definition with multiple references" data-urls="#ForSeparator line 154_8, 159_8, 164_8, 169_8">ForSeparator</button>.<span class="cons_Constructor"><span id="ForSeparatorNone_172_16" title="a definition with no references">ForSeparatorNone</span></span> = &lt;&gt;

  <button class="modal-open" id="TemplateElement_174_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="IfTempl_174_19" title="a definition with no references">IfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_175_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_176_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> <span class="cons_String">else</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_178_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_181_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="IfNoElseTempl_181_19" title="a definition with no references">IfNoElseTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_182_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_183_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_186_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="IfElseIfTempl_186_19" title="a definition with no references">IfElseIfTempl</span></span> = &lt;
    <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_187_11" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_188_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span> &lt;<a href="#ElseIfTempl_147_16" id="ElseIfTempl_189_8" title="a reference to a single-file definition">ElseIfTempl</a>+&gt; &lt;<a href="#OptElseTempl_147_28" id="OptElseTempl_189_23" title="a reference to a single-file definition">OptElseTempl</a>&gt;
  &gt;
  <a href="#OptElseTempl_189_23" id="OptElseTempl_191_3" title="a definition with a single reference">OptElseTempl</a>.<span class="cons_Constructor"><span id="OptElseTemplNone_191_16" title="a definition with no references">OptElseTemplNone</span></span> = &lt;&gt;
  <a href="#OptElseTempl_189_23" id="OptElseTempl_192_3" title="a definition with a single reference">OptElseTempl</a>.<span class="cons_Constructor"><span id="ElseTempl_192_16" title="a definition with no references">ElseTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_193_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

  <a href="#ElseIfTempl_189_8" id="ElseIfTempl_196_3" title="a definition with a single reference">ElseIfTempl</a>.<span class="cons_Constructor"><span id="ElseIfTempl_196_15" title="a definition with no references">ElseIfTempl</span></span> = &lt;<span class="cons_String">else</span> <span class="cons_String">if</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_196_41" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_197_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_202_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"if"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_203_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"else"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_207_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="TemplateCase_207_19" title="a definition with no references">TemplateCase</span></span> = &lt;
    <span class="cons_String">case</span> <span class="cons_String">(</span> &lt;{<a href="#Exp_469_3" id="Exp_208_14" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateCaseAlt_17_18" id="TemplateCaseAlt_209_8" title="a reference to a single-file definition">TemplateCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_212_3" title="a definition with a single reference">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAlt_212_19" title="a definition with no references">TemplateCaseAlt</span></span> = &lt;
    &lt;<a href="#TemplateCaseAltExps_237_3" id="TemplateCaseAltExps_213_6" title="a reference to a single-file definition">TemplateCaseAltExps</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_213_30" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateCaseAlt_209_8" id="TemplateCaseAlt_215_3" title="a definition with a single reference">TemplateCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateCaseAltDefault_215_19" title="a definition with no references">TemplateCaseAltDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_216_16" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_218_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><a href="#TemplateTypeCase_246_19" id="TemplateTypeCase_218_19" title="a definition with a single reference">TemplateTypeCase</a></span> = &lt;
    <span class="cons_String">typecase</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_219_17" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#OptTypeAlias_91_44" id="OptTypeAlias_219_23" title="a reference to a single-file definition">OptTypeAlias</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateTypeCaseAlt_17_34" id="TemplateTypeCaseAlt_220_8" title="a reference to a single-file definition">TemplateTypeCaseAlt</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_223_3" title="a definition with a single reference">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseAlt_223_23" title="a definition with no references">TemplateTypeCaseAlt</span></span> = &lt;
    &lt;<a href="#Sort_464_3" id="Sort_224_6" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_224_15" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <a href="#TemplateTypeCaseAlt_220_8" id="TemplateTypeCaseAlt_226_3" title="a definition with a single reference">TemplateTypeCaseAlt</a>.<span class="cons_Constructor"><span id="TemplateTypeCaseDefault_226_23" title="a definition with no references">TemplateTypeCaseDefault</span></span> = &lt;
    <span class="cons_String">default</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_227_16" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_232_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"case"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_233_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"typecase"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_237_3" title="a definition with a single reference">TemplateCaseAltExps</a>

<span class="keyword">context-free syntax</span>

  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_241_3" title="a definition with a single reference">TemplateCaseAltExps</a>.<span class="cons_Constructor"><span id="TemplateCaseExps_241_23" title="a definition with no references">TemplateCaseExps</span></span> = &lt;&lt;{<a href="#Exp_469_3" id="Exp_241_45" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}+&gt;&gt;
  <a href="#TemplateCaseAltExps_213_6" id="TemplateCaseAltExps_242_3" title="a definition with a single reference">TemplateCaseAltExps</a> = &lt;<span class="cons_String">default</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free priorities</span>

  <a href="#TemplateElement_16_31" id="TemplateElement_246_3" title="a reference to a single-file definition">TemplateElement</a>.<span class="cons_Constructor"><a href="#TemplateTypeCase_218_19" id="TemplateTypeCase_246_19" title="a reference to a single-file definition">TemplateTypeCase</a></span> &lt;2&gt; .&gt; <a href="#Exp_469_3" id="Exp_246_43" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#Cast_253_7" id="Cast_246_47" title="a reference to a single-file definition">Cast</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_250_3" title="a definition with a single reference">OptTCallArgs</a> <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_250_16" title="a definition with a single reference">OptTCallPropAssigns</a> <a href="#TemplateBody_255_60" id="TemplateBody_250_36" title="a definition with a single reference">TemplateBody</a> <a href="#ArgDefine_268_6" id="ArgDefine_250_49" title="a definition with a single reference">ArgDefine</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateCall_254_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button>.<span class="cons_Constructor"><span id="TemplateCall_254_16" title="a definition with no references">TemplateCall</span></span> = &lt;
    &lt;<a href="#TemplateCallId_432_18" id="TemplateCallId_255_6" title="a reference to a single-file definition">TemplateCallId</a>&gt; &lt;<a href="#OptTCallArgs_250_3" id="OptTCallArgs_255_23" title="a reference to a single-file definition">OptTCallArgs</a>&gt; &lt;<a href="#OptTCallPropAssigns_250_16" id="OptTCallPropAssigns_255_38" title="a reference to a single-file definition">OptTCallPropAssigns</a>&gt; &lt;<a href="#TemplateBody_250_36" id="TemplateBody_255_60" title="a reference to a single-file definition">TemplateBody</a>&gt;
  &gt;
  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_257_3" title="a definition with a single reference">OptTCallArgs</a>.<span class="cons_Constructor"><span id="TCallArgs_257_16" title="a definition with no references">TCallArgs</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#TemplateArgExp_17_3" id="TemplateArgExp_257_33" title="a reference to a single-file definition">TemplateArgExp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;
  <a href="#OptTCallArgs_255_23" id="OptTCallArgs_258_3" title="a definition with a single reference">OptTCallArgs</a>.<span class="cons_Constructor"><span id="OptTCallArgsNone_258_16" title="a definition with no references">OptTCallArgsNone</span></span> = &lt;&gt;
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_259_3" title="a definition with a single reference">TemplateArgExp</a>.<span class="cons_Constructor"><span id="Exp_259_18" title="a definition with no references">Exp</span></span> = <a href="#Exp_469_3" id="Exp_259_24" title="a reference to a single-file definition">Exp</a>
  <a href="#TemplateArgExp_257_33" id="TemplateArgExp_260_3" title="a definition with a single reference">TemplateArgExp</a>.<span class="cons_Constructor"><span id="TemplateElementsArgument_260_18" title="a definition with no references">TemplateElementsArgument</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_260_49" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;
  <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_261_3" title="a definition with a single reference">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="TCallPropAssigns_261_23" title="a definition with no references">TCallPropAssigns</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_261_47" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>&gt;
  <a href="#OptTCallPropAssigns_255_38" id="OptTCallPropAssigns_262_3" title="a definition with a single reference">OptTCallPropAssigns</a>.<span class="cons_Constructor"><span id="OptTCallPropAssignsNone_262_23" title="a definition with no references">OptTCallPropAssignsNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_263_3" title="a definition with a single reference">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBody_263_16" title="a definition with no references">TemplateBody</span></span> = &lt;<span class="cons_String">{</span>
    &lt;<a href="#TemplateElement_16_31" id="TemplateElement_264_6" title="a reference to a single-file definition">TemplateElement</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_266_3" title="a definition with a single reference">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateBodyNone_266_16" title="a definition with no references">TemplateBodyNone</span></span> = &lt;&gt;
  <a href="#TemplateBody_255_60" id="TemplateBody_267_3" title="a definition with a single reference">TemplateBody</a>.<span class="cons_Constructor"><span id="TemplateWith_267_16" title="a definition with no references">TemplateWith</span></span> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span>
    &lt;<a href="#ArgDefine_250_49" id="ArgDefine_268_6" title="a reference to a single-file definition">ArgDefine</a>*&gt;
  <span class="cons_String">}</span>&gt;
  <a href="#ArgDefine_268_6" id="ArgDefine_270_3" title="a definition with a single reference">ArgDefine</a>.<span class="cons_Constructor"><span id="ArgDefine_270_13" title="a definition with no references">ArgDefine</span></span> = &lt;
    &lt;<a href="#TemplateCallId_432_18" id="TemplateCallId_271_6" title="a reference to a single-file definition">TemplateCallId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="../WebDSL-Core.sdf3/#FormalArg_10_3" id="FormalArg_271_26" title="a reference to a single-file definition">FormalArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span> <span class="cons_String">{</span>
      &lt;<a href="#TemplateElement_16_31" id="TemplateElement_272_8" title="a reference to a single-file definition">TemplateElement</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateCall_275_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">with</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_275_27" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_279_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="NavigateCallParenthesesNoProps_279_19" title="a definition with no references">NavigateCallParenthesesNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_16_57" id="PageCall_280_17" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_280_32" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_282_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="NavigateCallParentheses_282_19" title="a definition with no references">NavigateCallParentheses</span></span> = &lt;
    <span class="cons_String">navigate</span> <span class="cons_String">(</span> &lt;<a href="#PageCall_16_57" id="PageCall_283_17" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_283_33" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_283_64" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_285_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="NavigateCallNoProps_285_19" title="a definition with no references">NavigateCallNoProps</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_16_57" id="PageCall_286_15" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_286_28" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_288_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="NavigateCall_288_19" title="a definition with no references">NavigateCall</span></span> = &lt;
    <span class="cons_String">navigate</span> &lt;<a href="#PageCall_16_57" id="PageCall_289_15" title="a reference to a single-file definition">PageCall</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_289_29" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_289_60" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="PageCall_291_3" title="a definition with multiple references" data-urls="#PageCall line 280_17, 283_17, 286_15, 289_15; ../WebDSL-Action.sdf3/#PageCall line 71_11, 74_13, 77_23; ../WebDSL-Ajax.sdf3/#PageCall line 25_45, 49_27">PageCall</button>.<span class="cons_Constructor"><span id="PageCall_291_12" title="a definition with no references">PageCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#PageId_5_52" id="PageId_292_6" title="a reference to a single-file definition">PageId</a>&gt; <span class="cons_String">(</span> &lt;{<a href="#Exp_469_3" id="Exp_292_18" title="a reference to a single-file definition">Exp</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>
  &gt;

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ActionCallOrInline_297_3" title="a definition with multiple references" data-urls="#ActionCallOrInline line 302_23, 305_23, 308_27, 311_27, 314_23, 317_23, 320_27, 323_27, 326_13, 329_13, 332_17, 335_17, 338_19, 341_19, 344_18, 347_18, 382_48">ActionCallOrInline</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateElement_301_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitActionNoProps_301_19" title="a definition with no references">SubmitActionNoProps</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_302_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_302_23" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="TemplateElement_304_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitAction_304_19" title="a definition with no references">SubmitAction</span></span> = &lt;
    <span class="cons_String">action</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_305_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_305_23" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_305_49" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <button class="modal-open" id="TemplateElement_307_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLinkActionNoProps_307_19" title="a definition with no references">SubmitLinkActionNoProps</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_308_19" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_308_27" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="TemplateElement_310_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLinkAction_310_19" title="a definition with no references">SubmitLinkAction</span></span> = &lt;
    <span class="cons_String">actionLink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_311_19" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_311_27" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_311_53" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <button class="modal-open" id="TemplateElement_313_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitNoProps_313_19" title="a definition with no references">SubmitNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_314_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_314_23" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="TemplateElement_316_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="Submit_316_19" title="a definition with no references">Submit</span></span> = &lt;
    <span class="cons_String">submit</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_317_15" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_317_23" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_317_49" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <button class="modal-open" id="TemplateElement_319_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLinkNoProps_319_19" title="a definition with no references">SubmitLinkNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_320_19" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_320_27" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span>
  &gt;
  <button class="modal-open" id="TemplateElement_322_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLink_322_19" title="a definition with no references">SubmitLink</span></span> = &lt;
    <span class="cons_String">submitlink</span> <span class="cons_String">(</span> &lt;<a href="#Exp_469_3" id="Exp_323_19" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">,</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_323_27" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">)</span> <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_323_53" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span>
  &gt;
  <button class="modal-open" id="TemplateElement_325_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitElemNoProps_325_19" title="a definition with no references">SubmitElemNoProps</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_326_13" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_326_36" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_328_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitElem_328_19" title="a definition with no references">SubmitElem</span></span> = &lt;
    <span class="cons_String">submit</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_329_13" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_329_37" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_329_68" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_331_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLinkElemNoProps_331_19" title="a definition with no references">SubmitLinkElemNoProps</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_332_17" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_332_40" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_334_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="SubmitLinkElem_334_19" title="a definition with no references">SubmitLinkElem</span></span> = &lt;
    <span class="cons_String">submitlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_335_17" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_335_41" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_335_72" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_337_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="DownloadLinkNoProps_337_19" title="a definition with no references">DownloadLinkNoProps</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_338_19" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_338_42" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_340_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="DownloadLink_340_19" title="a definition with no references">DownloadLink</span></span> = &lt;
    <span class="cons_String">downloadlink</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_341_19" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_341_43" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_341_74" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_343_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="OutputImageNoProps_343_19" title="a definition with no references">OutputImageNoProps</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_344_18" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_344_41" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="TemplateElement_346_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="OutputImage_346_19" title="a definition with no references">OutputImage</span></span> = &lt;
    <span class="cons_String">outputimage</span> &lt;<a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_347_18" title="a reference to a single-file definition">ActionCallOrInline</a>&gt; <span class="cons_String">[</span> &lt;{<a href="#PropertyAssignment_16_79" id="PropertyAssignment_347_42" title="a reference to a single-file definition">PropertyAssignment</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">]</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_347_73" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="ActionCallOrInline_349_3" title="a definition with multiple references" data-urls="#ActionCallOrInline line 302_23, 305_23, 308_27, 311_27, 314_23, 317_23, 320_27, 323_27, 326_13, 329_13, 332_17, 335_17, 338_19, 341_19, 344_18, 347_18, 382_48">ActionCallOrInline</button>.<span class="cons_Constructor"><span id="ActionCall_349_22" title="a definition with no references">ActionCall</span></span> = <a href="../WebDSL-Action.sdf3/#ThisCall_77_3" id="ThisCall_349_35" title="a reference to a single-file definition">ThisCall</a>
  <button class="modal-open" id="ActionCallOrInline_350_3" title="a definition with multiple references" data-urls="#ActionCallOrInline line 302_23, 305_23, 308_27, 311_27, 314_23, 317_23, 320_27, 323_27, 326_13, 329_13, 332_17, 335_17, 338_19, 341_19, 344_18, 347_18, 382_48">ActionCallOrInline</button>.<span class="cons_Constructor"><span id="InlineAction_350_22" title="a definition with no references">InlineAction</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_350_46" title="a reference to a single-file definition">Block</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_354_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"action"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_355_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"actionLink"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_356_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"submit"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_357_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"submitlink"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_358_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"downloadlink"</span> {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateId_359_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"outputimage"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="ActionCallOrInlineOrExp_363_3" title="a definition with multiple references" data-urls="#ActionCallOrInlineOrExp line 367_61, 368_63, 369_56, 381_69, 388_45">ActionCallOrInlineOrExp</button> <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_363_27" title="a definition with a single reference">PropertySubmitMultiple</a> <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_363_50" title="a definition with a single reference">PropertySubmitExp</a>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="PropertyAssignment_367_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertySubmitColon_367_22" title="a definition with no references">PropertySubmitColon</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_367_46" title="a reference to a single-file definition">SubmitProp</a>&gt; <span class="cons_String">:</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_367_61" title="a reference to a single-file definition">ActionCallOrInlineOrExp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_368_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertySubmitAssign_368_22" title="a definition with no references">PropertySubmitAssign</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_368_47" title="a reference to a single-file definition">SubmitProp</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_368_63" title="a reference to a single-file definition">ActionCallOrInlineOrExp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_369_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertySubmit_369_22" title="a definition with no references">PropertySubmit</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_369_41" title="a reference to a single-file definition">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_369_56" title="a reference to a single-file definition">ActionCallOrInlineOrExp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_370_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertyAssignmentColon_370_22" title="a definition with no references">PropertyAssignmentColon</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_370_50" title="a reference to a single-file definition">PropertyAssignmentId</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Exp_469_3" id="Exp_370_75" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_371_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertyAssignmentAssign_371_22" title="a definition with no references">PropertyAssignmentAssign</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_371_51" title="a reference to a single-file definition">PropertyAssignmentId</a>&gt; <span class="cons_String">:=</span> &lt;<a href="#Exp_469_3" id="Exp_371_77" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_372_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="PropertyAssignment_372_22" title="a definition with no references">PropertyAssignment</span></span> = &lt;&lt;<a href="#PropertyAssignmentId_394_3" id="PropertyAssignmentId_372_45" title="a reference to a single-file definition">PropertyAssignmentId</a>&gt; <span class="cons_String">=</span> &lt;<a href="#Exp_469_3" id="Exp_372_70" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="PropertyAssignment_373_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertyAjax_373_22" title="a definition with no references">TemplateCallPropertyAjax</span></span> = &lt;<span class="cons_String">ajax</span>&gt;
  <button class="modal-open" id="PropertyAssignment_374_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertyNoLoadingFeedback_374_22" title="a definition with no references">TemplateCallPropertyNoLoadingFeedback</span></span> = &lt;<span class="cons_String">no</span> <span class="cons_String">loading</span> <span class="cons_String">feedback</span>&gt;
  <button class="modal-open" id="PropertyAssignment_375_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertySecure_375_22" title="a definition with no references">TemplateCallPropertySecure</span></span> = &lt;<span class="cons_String">secure</span>&gt;
  <button class="modal-open" id="PropertyAssignment_376_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertyIgnoreValidation_376_22" title="a definition with no references">TemplateCallPropertyIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <button class="modal-open" id="PropertyAssignment_377_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotSecure_377_22" title="a definition with no references">TemplateCallPropertyNotSecure</span></span> = &lt;<span class="cons_String">not-secure</span>&gt;
  <button class="modal-open" id="PropertyAssignment_378_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button>.<span class="cons_Constructor"><span id="TemplateCallPropertyNotNull_378_22" title="a definition with no references">TemplateCallPropertyNotNull</span></span> = &lt;<span class="cons_String">not</span> <span class="cons_String">null</span>&gt;
  <button class="modal-open" id="PropertyAssignment_379_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button> = <a href="../WebDSL-XML.sdf3/#CommonAttribute_72_3" id="CommonAttribute_379_24" title="a reference to a single-file definition">CommonAttribute</a>
  <button class="modal-open" id="PropertyAssignment_380_3" title="a definition with multiple references" data-urls="#PropertyAssignment line 261_47, 283_33, 289_29, 305_49, 311_53, 317_49, 323_53, 329_37, 335_41, 341_43, 347_42">PropertyAssignment</button> = <a href="#PropertySubmitMultiple_363_27" id="PropertySubmitMultiple_380_24" title="a reference to a single-file definition">PropertySubmitMultiple</a>
  <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_381_3" title="a definition with a single reference">PropertySubmitMultiple</a>.<span class="cons_Constructor"><span id="PropertySubmitMultiple_381_26" title="a definition with no references">PropertySubmitMultiple</span></span> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_381_53" title="a reference to a single-file definition">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;{<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_381_69" title="a reference to a single-file definition">ActionCallOrInlineOrExp</a> <span class="cons_Lit">";"</span>}+&gt;&gt;
  <button class="modal-open" id="ActionCallOrInlineOrExp_382_3" title="a definition with multiple references" data-urls="#ActionCallOrInlineOrExp line 367_61, 368_63, 369_56, 381_69, 388_45">ActionCallOrInlineOrExp</button>.<span class="cons_Constructor"><span id="ActionCallOrInline_382_27" title="a definition with no references">ActionCallOrInline</span></span> = <a href="#ActionCallOrInline_297_3" id="ActionCallOrInline_382_48" title="a reference to a single-file definition">ActionCallOrInline</a>
  <button class="modal-open" id="ActionCallOrInlineOrExp_383_3" title="a definition with multiple references" data-urls="#ActionCallOrInlineOrExp line 367_61, 368_63, 369_56, 381_69, 388_45">ActionCallOrInlineOrExp</button>.<span class="cons_Constructor"><span id="ActionCallOrInlineExp_383_27" title="a definition with no references">ActionCallOrInlineExp</span></span> = <a href="#PropertySubmitExp_363_50" id="PropertySubmitExp_383_51" title="a reference to a single-file definition">PropertySubmitExp</a>
  <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_384_3" title="a definition with a single reference">PropertySubmitExp</a>.<span class="cons_Constructor"><span id="PropertySubmitExp_384_21" title="a definition with no references">PropertySubmitExp</span></span> = <a href="#Exp_469_3" id="Exp_384_41" title="a reference to a single-file definition">Exp</a>
  <button class="modal-open" id="TemplateElement_385_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button> = <a href="../WebDSL-Action.sdf3/#OutputShorthand_258_3" id="OutputShorthand_385_21" title="a reference to a single-file definition">OutputShorthand</a>

  <span class="layout">// require at least two actions to get this constructor</span>
  <a href="#PropertySubmitMultiple_380_24" id="PropertySubmitMultiple_388_3" title="a definition with a single reference">PropertySubmitMultiple</a> = &lt;&lt;<a href="#SubmitProp_22_3" id="SubmitProp_388_30" title="a reference to a single-file definition">SubmitProp</a>&gt; <span class="cons_String">=</span> &lt;<a href="#ActionCallOrInlineOrExp_363_3" id="ActionCallOrInlineOrExp_388_45" title="a reference to a single-file definition">ActionCallOrInlineOrExp</a>&gt;&gt; {<span class="keyword">reject</span>}

  <a href="#PropertySubmitExp_383_51" id="PropertySubmitExp_390_3" title="a definition with a single reference">PropertySubmitExp</a> = <a href="../WebDSL-Action.sdf3/#ThisCall_77_3" id="ThisCall_390_23" title="a reference to a single-file definition">ThisCall</a> {<span class="keyword">reject</span>}

<span class="keyword">lexical sorts</span>

  <button class="modal-open" id="PropertyAssignmentId_394_3" title="a definition with multiple references" data-urls="#PropertyAssignmentId line 370_50, 371_51, 372_45">PropertyAssignmentId</button>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="PropertyAssignmentId_398_3" title="a definition with multiple references" data-urls="#PropertyAssignmentId line 370_50, 371_51, 372_45">PropertyAssignmentId</button> = <a href="../WebDSL-Lexical.sdf3/#ExtendedId_5_59" id="ExtendedId_398_26" title="a reference to a single-file definition">ExtendedId</a>
  <button class="modal-open" id="PropertyAssignmentId_399_3" title="a definition with multiple references" data-urls="#PropertyAssignmentId line 370_50, 371_51, 372_45">PropertyAssignmentId</button> = <a href="#SubmitProp_22_3" id="SubmitProp_399_26" title="a reference to a single-file definition">SubmitProp</a> {<span class="keyword">reject</span>}

<span class="keyword">syntax</span>

  <button class="modal-open" id="TemplateElement_403_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button><span class="keyword">-CF</span>.<span class="cons_Constructor"><span id="Text_403_22" title="a definition with no references">Text</span></span> = <span class="cons_Lit">"\""</span> <a href="../WebDSL-Action.sdf3/#StringPart_269_3" id="StringPart_403_34" title="a reference to a single-file definition">StringPart</a><span class="keyword">-CF</span>* <span class="cons_Lit">"\""</span>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="SubmitProp_407_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onabort"</span>
  <button class="modal-open" id="SubmitProp_408_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onblur"</span>
  <button class="modal-open" id="SubmitProp_409_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onchange"</span>
  <button class="modal-open" id="SubmitProp_410_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onclick"</span>
  <button class="modal-open" id="SubmitProp_411_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"ondblclick"</span>
  <button class="modal-open" id="SubmitProp_412_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onerror"</span>
  <button class="modal-open" id="SubmitProp_413_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onfocus"</span>
  <button class="modal-open" id="SubmitProp_414_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onkeydown"</span>
  <button class="modal-open" id="SubmitProp_415_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onkeypress"</span>
  <button class="modal-open" id="SubmitProp_416_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onkeyup"</span>
  <button class="modal-open" id="SubmitProp_417_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onload"</span>
  <button class="modal-open" id="SubmitProp_418_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onmousedown"</span>
  <button class="modal-open" id="SubmitProp_419_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onmousemove"</span>
  <button class="modal-open" id="SubmitProp_420_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onmouseout"</span>
  <button class="modal-open" id="SubmitProp_421_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onmouseover"</span>
  <button class="modal-open" id="SubmitProp_422_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onmouseup"</span>
  <button class="modal-open" id="SubmitProp_423_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onreset"</span>
  <button class="modal-open" id="SubmitProp_424_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onresize"</span>
  <button class="modal-open" id="SubmitProp_425_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onselect"</span>
  <button class="modal-open" id="SubmitProp_426_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onsubmit"</span>
  <button class="modal-open" id="SubmitProp_427_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"onunload"</span>
  <button class="modal-open" id="SubmitProp_428_3" title="a definition with multiple references" data-urls="#SubmitProp line 367_46, 368_47, 369_41, 381_53, 388_30, 399_26">SubmitProp</button> = <span class="cons_Lit">"oninput"</span>

<span class="keyword">context-free sorts</span>

  <a href="#ActionModifier_444_28" id="ActionModifier_432_3" title="a definition with a single reference">ActionModifier</a> <button class="modal-open" id="TemplateCallId_432_18" title="a definition with multiple references" data-urls="#TemplateCallId line 255_6, 271_6">TemplateCallId</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateCall_436_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">separated-by</span> <span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_436_35" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt; {<span class="keyword">reject</span>}
  <span id="Definition_437_3" title="a definition with no references">Definition</span>.<span class="cons_Constructor"><span id="GlobalInit_437_14" title="a definition with no references">GlobalInit</span></span> = &lt;
    <span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_438_11" title="a reference to a single-file definition">Block</a>&gt;
  &gt;
  <button class="modal-open" id="TemplateElement_440_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="DataBindAction_440_19" title="a definition with no references">DataBindAction</span></span> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_440_47" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <button class="modal-open" id="TemplateElement_441_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="RenderAction_441_19" title="a definition with no references">RenderAction</span></span> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_441_43" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <button class="modal-open" id="TemplateElement_442_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="AllPhasesAction_442_19" title="a definition with no references">AllPhasesAction</span></span> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_442_49" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <button class="modal-open" id="TemplateElement_443_3" title="a definition with multiple references" data-urls="#TemplateElement line 29_8, 43_8, 48_8, 53_8, 153_8, 158_8, 163_8, 168_8, 171_48, 176_8, 178_8, 183_8, 188_8, 193_6, 197_6, 213_30, 216_16, 224_15, 227_16, 246_3, 260_49, 264_6, 272_8, 275_27, 280_32, 283_64, 286_28, 289_60, 326_36, 329_68, 332_40, 335_72, 338_42, 341_74, 344_41, 347_73, 436_35, 477_44">TemplateElement</button>.<span class="cons_Constructor"><span id="ValidateAction_443_19" title="a definition with no references">ValidateAction</span></span> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_443_47" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <a href="#Action_75_21" id="Action_444_3" title="a definition with a single reference">Action</a>.<span class="cons_Constructor"><span id="Action_444_10" title="a definition with no references">Action</span></span> = &lt;<span class="cons_String">action</span> &lt;<a href="#ActionModifier_432_3" id="ActionModifier_444_28" title="a reference to a single-file definition">ActionModifier</a>*&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_444_46" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-Core.sdf3/#OptFormalArgs_10_13" id="OptFormalArgs_444_51" title="a reference to a single-file definition">OptFormalArgs</a>&gt; &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_444_67" title="a reference to a single-file definition">Block</a>&gt;&gt;
  <a href="#ActionModifier_444_28" id="ActionModifier_445_3" title="a definition with a single reference">ActionModifier</a>.<span class="cons_Constructor"><span id="ActionModifierIgnoreValidation_445_18" title="a definition with no references">ActionModifierIgnoreValidation</span></span> = &lt;<span class="cons_String">ignore-validation</span>&gt;
  <button class="modal-open" id="TemplateCallId_446_3" title="a definition with multiple references" data-urls="#TemplateCallId line 255_6, 271_6">TemplateCallId</button>.<span class="cons_Constructor"><span id="QualifiedElementsCall_446_18" title="a definition with no references">QualifiedElementsCall</span></span> = &lt;&lt;<a href="#TemplateId_81_3" id="TemplateId_446_44" title="a reference to a single-file definition">TemplateId</a>&gt; <span class="cons_String">.elements</span>&gt;
  <button class="modal-open" id="TemplateCallId_447_3" title="a definition with multiple references" data-urls="#TemplateCallId line 255_6, 271_6">TemplateCallId</button>.<span class="cons_Constructor"><span id="TemplateCallId_447_18" title="a definition with no references">TemplateCallId</span></span> = <a href="#TemplateId_81_3" id="TemplateId_447_35" title="a reference to a single-file definition">TemplateId</a>

<span class="keyword">context-free syntax</span> <span class="layout">// reject rules</span>

  <button class="modal-open" id="TemplateCall_451_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">init</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_451_25" title="a reference to a single-file definition">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_452_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">databind</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_452_29" title="a reference to a single-file definition">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_453_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">render</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_453_27" title="a reference to a single-file definition">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_454_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">allphases</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_454_30" title="a reference to a single-file definition">Block</a>&gt;&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_455_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">action</span>&gt; {<span class="keyword">reject</span>}
  <button class="modal-open" id="TemplateCall_456_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button> = &lt;<span class="cons_String">validate</span> &lt;<a href="../WebDSL-Action.sdf3/#Block_13_11" id="Block_456_29" title="a reference to a single-file definition">Block</a>&gt;&gt; {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <a href="#FormalVarArg_464_34" id="FormalVarArg_460_3" title="a definition with a single reference">FormalVarArg</a> <button class="modal-open" id="ExpVarArg_460_16" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button> <button class="modal-open" id="ExpOrTemplateArg_460_26" title="a definition with multiple references" data-urls="#ExpOrTemplateArg line 474_30, 481_3">ExpOrTemplateArg</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="Sort_464_3" title="a definition with multiple references" data-urls="#Sort line 34_47, 91_20, 94_20, 97_20, 100_20, 152_22, 162_22, 224_6, 465_40, 470_43, 472_46; ../WebDSL-Dispatch.sdf3/#Sort line 27_13; ../WebDSL-Exception.sdf3/#Sort line 29_37">Sort</button>.<span class="cons_Constructor"><span id="TemplateVarArgSort_464_8" title="a definition with no references">TemplateVarArgSort</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#FormalVarArg_460_3" id="FormalVarArg_464_34" title="a reference to a single-file definition">FormalVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <a href="#FormalVarArg_464_34" id="FormalVarArg_465_3" title="a definition with a single reference">FormalVarArg</a>.<span class="cons_Constructor"><span id="FormalVarArg_465_16" title="a definition with no references">FormalVarArg</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_465_33" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_465_40" title="a reference to a single-file definition">Sort</a>&gt;&gt;
  <button class="modal-open" id="TemplateCall_466_3" title="a definition with multiple references" data-urls="#TemplateCall line 116_21, 467_13; ../WebDSL-Ajax.sdf3/#TemplateCall line 20_49, 33_55, 47_33, 77_79, 78_85, 79_64, 80_70">TemplateCall</button>.<span class="cons_Constructor"><span id="MemberTemplateCall_466_16" title="a definition with no references">MemberTemplateCall</span></span> = &lt;
    &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_467_6" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">.</span> &lt;<a href="#TemplateCall_16_66" id="TemplateCall_467_13" title="a reference to a single-file definition">TemplateCall</a>&gt;
  &gt;
  <button class="modal-open" id="Exp_469_3" title="a definition with multiple references" data-urls="#Exp line 97_30, 100_30, 103_21, 106_21, 129_43, 131_34, 132_36, 135_27, 136_31, 137_31, 138_32, 139_25, 139_38, 140_33, 141_33, 152_32, 157_23, 167_31, 167_40, 175_11, 182_11, 187_11, 196_41, 208_14, 219_17, 241_45, 246_43, 259_24, 292_18, 302_15, 305_15, 308_19, 311_19, 314_15, 317_15, 320_19, 323_19, 370_75, 371_77, 372_70, 384_41, 470_53, 471_52, 473_57, 473_66, 476_37, 481_40; ../WebDSL-Ajax.sdf3/#Exp line 19_43, 20_41, 21_49, 26_43, 26_51, 27_39, 29_47, 46_26, 47_25, 48_29, 50_26, 50_34, 51_24, 53_28, 67_61, 73_46, 97_41, 98_37, 107_20, 107_36, 108_27, 109_31, 109_39, 110_19, 110_27; ../WebDSL-Attributes.sdf3/#Exp line 20_53; ../WebDSL-DataValidation.sdf3/#Exp line 12_54, 12_62, 13_54, 13_62, 14_54, 14_62, 15_42, 15_50, 16_54, 16_62, 19_17, 19_25, 23_17, 23_25, 27_24, 27_32, 30_27, 30_35; ../WebDSL-EntityDerive.sdf3/#Exp line 15_38; ../WebDSL-Exception.sdf3/#Exp line 16_13, 19_13; ../WebDSL-JavaScript.sdf3/#Exp line 28_25; ../WebDSL-Service.sdf3/#Exp line 28_43, 29_45, 30_47">Exp</button>.<span class="cons_Constructor"><span id="TemplateVarArgExp_469_7" title="a definition with no references">TemplateVarArgExp</span></span> = &lt;<span class="cons_String">[</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_469_32" title="a reference to a single-file definition">ExpVarArg</a> <span class="cons_Lit">","</span>}+&gt; <span class="cons_String">]</span>&gt;
  <button class="modal-open" id="ExpVarArg_470_3" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button>.<span class="cons_Constructor"><span id="ExpVarArgFor_470_13" title="a definition with no references">ExpVarArgFor</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_470_36" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_470_43" title="a reference to a single-file definition">Sort</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_470_53" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_470_59" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_470_76" title="a reference to a single-file definition">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="ExpVarArg_471_3" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button>.<span class="cons_Constructor"><span id="ExpVarArgForInferred_471_13" title="a definition with no references">ExpVarArgForInferred</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_471_44" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">in</span> &lt;<a href="#Exp_469_3" id="Exp_471_52" title="a reference to a single-file definition">Exp</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_471_58" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_471_75" title="a reference to a single-file definition">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="ExpVarArg_472_3" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button>.<span class="cons_Constructor"><span id="ExpVarArgForAll_472_13" title="a definition with no references">ExpVarArgForAll</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_472_39" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> &lt;<a href="#Sort_464_3" id="Sort_472_46" title="a reference to a single-file definition">Sort</a>&gt; &lt;<a href="#OptFilter_16_47" id="OptFilter_472_53" title="a reference to a single-file definition">OptFilter</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_472_70" title="a reference to a single-file definition">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="ExpVarArg_473_3" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button>.<span class="cons_Constructor"><span id="ExpVarArgForCount_473_13" title="a definition with no references">ExpVarArgForCount</span></span> = &lt;<span class="cons_String">for</span> <span class="cons_String">(</span> &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_473_41" title="a reference to a single-file definition">Id</a>&gt; <span class="cons_String">:</span> <span class="cons_String">Int</span> <span class="cons_String">from</span> &lt;<a href="#Exp_469_3" id="Exp_473_57" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">to</span> &lt;<a href="#Exp_469_3" id="Exp_473_66" title="a reference to a single-file definition">Exp</a>&gt; <span class="cons_String">)</span> <span class="cons_String">{</span> &lt;{<a href="#ExpVarArg_460_16" id="ExpVarArg_473_77" title="a reference to a single-file definition">ExpVarArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">}</span>&gt;
  <button class="modal-open" id="ExpVarArg_474_3" title="a definition with multiple references" data-urls="#ExpVarArg line 469_32, 470_76, 471_75, 472_70, 473_77">ExpVarArg</button>.<span class="cons_Constructor"><span id="ExpVarArg_474_13" title="a definition with no references">ExpVarArg</span></span> = &lt;<span class="cons_String">(</span> &lt;{<a href="#ExpOrTemplateArg_460_26" id="ExpOrTemplateArg_474_30" title="a reference to a single-file definition">ExpOrTemplateArg</a> <span class="cons_Lit">","</span>}*&gt; <span class="cons_String">)</span>&gt;

  <button class="modal-open" id="ExpOrTemplateArg_476_3" title="a definition with multiple references" data-urls="#ExpOrTemplateArg line 474_30, 481_3">ExpOrTemplateArg</button>.<span class="cons_Constructor"><a href="#ExpVarArgExp_481_20" id="ExpVarArgExp_476_20" title="a definition with a single reference">ExpVarArgExp</a></span> = &lt;&lt;<a href="#Exp_469_3" id="Exp_476_37" title="a reference to a single-file definition">Exp</a>&gt;&gt;
  <button class="modal-open" id="ExpOrTemplateArg_477_3" title="a definition with multiple references" data-urls="#ExpOrTemplateArg line 474_30, 481_3">ExpOrTemplateArg</button>.<span class="cons_Constructor"><span id="ExpVarArgElements_477_20" title="a definition with no references">ExpVarArgElements</span></span> = &lt;<span class="cons_String">{</span> &lt;<a href="#TemplateElement_16_31" id="TemplateElement_477_44" title="a reference to a single-file definition">TemplateElement</a>*&gt; <span class="cons_String">}</span>&gt;

<span class="keyword">context-free priorities</span>

  <a href="#ExpOrTemplateArg_460_26" id="ExpOrTemplateArg_481_3" title="a reference to a single-file definition">ExpOrTemplateArg</a>.<span class="cons_Constructor"><a href="#ExpVarArgExp_476_20" id="ExpVarArgExp_481_20" title="a reference to a single-file definition">ExpVarArgExp</a></span> &lt;0&gt; .&gt; <a href="#Exp_469_3" id="Exp_481_40" title="a reference to a single-file definition">Exp</a>.<span class="cons_Constructor"><a href="../WebDSL-Action.sdf3/#SetCreation_238_7" id="SetCreation_481_44" title="a reference to a single-file definition">SetCreation</a></span>

<span class="keyword">context-free sorts</span>

  <a href="#HTMLWrapper_498_24" id="HTMLWrapper_485_3" title="a definition with a single reference">HTMLWrapper</a> <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_485_15" title="a definition with a single reference">HTMLWrapperAssigns</a> <button class="modal-open" id="HTMLWrapperBody_485_34" title="a definition with multiple references" data-urls="#HTMLWrapperBody line 490_18, 501_8">HTMLWrapperBody</button> <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_485_50" title="a definition with a single reference">HTMLWrapperAssign</a>

<span class="keyword">context-free syntax</span>

  <a href="#HTMLWrapper_498_24" id="HTMLWrapper_489_3" title="a definition with a single reference">HTMLWrapper</a>.<span class="cons_Constructor"><span id="HTMLWrapper_489_15" title="a definition with no references">HTMLWrapper</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> &lt;<a href="#HTMLWrapperBody_485_34" id="HTMLWrapperBody_490_18" title="a reference to a single-file definition">HTMLWrapperBody</a>&gt;
  &gt;
  <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_492_3" title="a definition with a single reference">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssigns_492_22" title="a definition with no references">HTMLWrapperAssigns</span></span> = &lt;<span class="cons_String">[</span>&lt;<a href="#HTMLWrapperAssign_485_50" id="HTMLWrapperAssign_492_46" title="a reference to a single-file definition">HTMLWrapperAssign</a>*&gt; <span class="cons_String">]</span>&gt;
  <a href="#HTMLWrapperAssigns_504_49" id="HTMLWrapperAssigns_493_3" title="a definition with a single reference">HTMLWrapperAssigns</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignsNone_493_22" title="a definition with no references">HTMLWrapperAssignsNone</span></span> = &lt;&gt;

  <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_495_3" title="a definition with a single reference">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssign_495_21" title="a definition with no references">HTMLWrapperAssign</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_495_43" title="a reference to a single-file definition">Attribute</a>&gt;&gt;
  <a href="#HTMLWrapperAssign_492_46" id="HTMLWrapperAssign_496_3" title="a definition with a single reference">HTMLWrapperAssign</a>.<span class="cons_Constructor"><span id="HTMLWrapperAssignComma_496_21" title="a definition with no references">HTMLWrapperAssignComma</span></span> = &lt;&lt;<a href="../WebDSL-Attributes.sdf3/#Attribute_11_87" id="Attribute_496_48" title="a reference to a single-file definition">Attribute</a>&gt; <span class="cons_String">,</span>&gt;

  <button class="modal-open" id="TemplateDefinition_498_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button> = <a href="#HTMLWrapper_485_3" id="HTMLWrapper_498_24" title="a reference to a single-file definition">HTMLWrapper</a>
  <button class="modal-open" id="TemplateDefinition_499_3" title="a definition with multiple references" data-urls="#TemplateDefinition line 26_35, 115_21">TemplateDefinition</button>.<span class="cons_Constructor"><span id="HTMLWrapperMultiple_499_22" title="a definition with no references">HTMLWrapperMultiple</span></span> = &lt;
    <span class="cons_String">htmlwrapper</span> <span class="cons_String">{</span>
      &lt;<a href="#HTMLWrapperBody_485_34" id="HTMLWrapperBody_501_8" title="a reference to a single-file definition">HTMLWrapperBody</a>*&gt;
    <span class="cons_String">}</span>
  &gt;
  <button class="modal-open" id="HTMLWrapperBody_504_3" title="a definition with multiple references" data-urls="#HTMLWrapperBody line 490_18, 501_8">HTMLWrapperBody</button>.<span class="cons_Constructor"><span id="HTMLWrapperBody_504_19" title="a definition with no references">HTMLWrapperBody</span></span> = &lt;&lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_504_39" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="../WebDSL-Lexical.sdf3/#Id_5_49" id="Id_504_44" title="a reference to a single-file definition">Id</a>&gt; &lt;<a href="#HTMLWrapperAssigns_485_15" id="HTMLWrapperAssigns_504_49" title="a reference to a single-file definition">HTMLWrapperAssigns</a>&gt;&gt;

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="TemplateId_508_3" title="a definition with multiple references" data-urls="#TemplateId line 34_31, 36_25, 36_63, 47_27, 446_44, 447_35">TemplateId</button> = <span class="cons_Lit">"htmlwrapper"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free sorts</span>

  <button class="modal-open" id="TemplateName_512_3" title="a definition with multiple references" data-urls="#TemplateName line 517_9, 525_3">TemplateName</button>

<span class="keyword">context-free syntax</span>

  <button class="modal-open" id="TemplateName_516_3" title="a definition with multiple references" data-urls="#TemplateName line 517_9, 525_3">TemplateName</button>.<span class="cons_Constructor"><span id="TemplateName_516_16" title="a definition with no references">TemplateName</span></span> = &lt;<span class="cons_String">id</span>&gt;
  <button class="modal-open" id="Exp_517_3" title="a definition with multiple references" data-urls="#Exp line 97_30, 100_30, 103_21, 106_21, 129_43, 131_34, 132_36, 135_27, 136_31, 137_31, 138_32, 139_25, 139_38, 140_33, 141_33, 152_32, 157_23, 167_31, 167_40, 175_11, 182_11, 187_11, 196_41, 208_14, 219_17, 241_45, 246_43, 259_24, 292_18, 302_15, 305_15, 308_19, 311_19, 314_15, 317_15, 320_19, 323_19, 370_75, 371_77, 372_70, 384_41, 470_53, 471_52, 473_57, 473_66, 476_37, 481_40; ../WebDSL-Ajax.sdf3/#Exp line 19_43, 20_41, 21_49, 26_43, 26_51, 27_39, 29_47, 46_26, 47_25, 48_29, 50_26, 50_34, 51_24, 53_28, 67_61, 73_46, 97_41, 98_37, 107_20, 107_36, 108_27, 109_31, 109_39, 110_19, 110_27; ../WebDSL-Attributes.sdf3/#Exp line 20_53; ../WebDSL-DataValidation.sdf3/#Exp line 12_54, 12_62, 13_54, 13_62, 14_54, 14_62, 15_42, 15_50, 16_54, 16_62, 19_17, 19_25, 23_17, 23_25, 27_24, 27_32, 30_27, 30_35; ../WebDSL-EntityDerive.sdf3/#Exp line 15_38; ../WebDSL-Exception.sdf3/#Exp line 16_13, 19_13; ../WebDSL-JavaScript.sdf3/#Exp line 28_25; ../WebDSL-Service.sdf3/#Exp line 28_43, 29_45, 30_47">Exp</button> = <a href="#TemplateName_512_3" id="TemplateName_517_9" title="a reference to a single-file definition">TemplateName</a>

<span class="keyword">lexical syntax</span>

  <button class="modal-open" id="VarId_521_3" title="a definition with multiple references" data-urls="#VarId line 91_10, 94_10, 97_10, 100_10, 103_10, 106_10, 152_12, 157_12, 162_12, 167_12; ../WebDSL-Exception.sdf3/#VarId line 29_27; ../WebDSL-Prefetch.sdf3/#VarId line 65_37">VarId</button> = <span class="cons_Lit">"id"</span> {<span class="keyword">reject</span>}

<span class="keyword">context-free restrictions</span>

  <a href="#TemplateName_512_3" id="TemplateName_525_3" title="a reference to a single-file definition">TemplateName</a> -/- [<span class="cons_Regular">a</span>-<span class="cons_Regular">z</span><span class="cons_Regular">A</span>-<span class="cons_Regular">Z</span><span class="cons_Regular">0</span>-<span class="cons_Regular">9</span>\_]

</code></pre></td></tr></tbody></table></div>

<div id="modal">
  <div id="modal-content">
    <span id="modal-close">&times;</span>
    <h2 id="modal-h2"></h2>
    <p  id="modal-p"></p>
    <ul id="modal-ul"></ul>
  </div>
</div>
