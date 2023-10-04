---
title: webdsl-types.stx
hide:
  - toc
---

# `webdsl-types.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-types.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-types.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-types.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-ac.stx#static-semantics/webdsl-types_303_332" id="static-semantics/webdsl-types_7_36" title="Referenced at ../webdsl-ac.stx line 15; ../webdsl-actions.stx line 14; ../webdsl-entities.stx line 13; ../webdsl-expand.stx line 10; ../webdsl-hql.stx line 8; ../webdsl-native.stx line 10; ../webdsl-search.stx line 7; ../webdsl-ui.stx line 17; ../webdsl.stx line 23; ../actions/binops.stx line 6; ../actions/built-ins.stx line 6; ../actions/functions.stx line 8; ../entities/annotations.stx line 8; ../entities/generated-functions.stx line 10; ../types/built-ins.stx line 10; ../types/type-extensions.stx line 10; ../ui/actions.stx line 13; ../ui/attributes.stx line 6; ../ui/template-calls.stx line 14">static-semantics/webdsl-types</a>

<span class="keyword">imports</span>
  <a href="../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_48_85" title="Defined at ../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_89_121" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>
  <a href="../types/type-extensions.stx#static-semantics/types/type-extensions_7_45" id="static-semantics/types/type-extensions_124_162" title="Defined at ../types/type-extensions.stx line 1">static-semantics/types/type-extensions</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_166_189" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span> <span class="layout">// semantic types</span>

    <span class="layout">// list of argument types, return type</span>
    <span class="layout">// and BOOL that indicates if function is static or not</span>
    <a href="../webdsl.stx#FUNCTION_9289_9297" id="FUNCTION_343_351" title="Referenced at ../webdsl.stx line 225, 240, 241, 251, 252, 259, 260; ../actions/functions.stx line 55, 167, 189, 210, 210, 215, 222">FUNCTION</a> : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_368_372" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_376_380" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_383_387" title="Defined at ../webdsl.stx line 30">BOOL</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_391_395" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="../webdsl.stx#ACTION_11756_11762" id="ACTION_400_406" title="Referenced at ../webdsl.stx line 267, 268, 291; ../ui/actions.stx line 73">ACTION</a>   : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_425_429" title="Defined at ../webdsl.stx line 29">TYPE</a>) -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_434_438" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="#ENTITY_10966_10972" id="ENTITY_444_450" title="Referenced at line 300; ../webdsl-ac.stx line 29, 30, 69, 268, 273; ../webdsl-actions.stx line 263; ../webdsl-entities.stx line 24, 35, 44, 51, 70, 94, 97, 154, 155, 156, 160, 161, 162, 166, 167, 168, 179, 196, 204, 204; ../webdsl-expand.stx line 49, 54, 58; ../webdsl-hql.stx line 51, 130, 141, 145; ../webdsl-search.stx line 91; ../actions/functions.stx line 42, 257; ../entities/annotations.stx line 173, 175, 180, 216, 234; ../entities/built-ins.stx line 19, 31, 35, 36; ../entities/generated-functions.stx line 20, 29, 46">ENTITY</a>       : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_477_481" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#STATICENTITY_10994_11006" id="STATICENTITY_486_498" title="Referenced at line 301; ../webdsl-entities.stx line 28, 38; ../actions/functions.stx line 45">STATICENTITY</a> : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_519_523" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="#NATIVECLASS_11028_11039" id="NATIVECLASS_529_540" title="Referenced at line 302; ../webdsl-actions.stx line 265; ../webdsl-native.stx line 15, 15, 18, 18, 34, 42, 51, 59, 101, 105, 109; ../webdsl-search.stx line 71, 97; ../actions/binops.stx line 153, 160, 161; ../actions/functions.stx line 258; ../entities/annotations.stx line 233">NATIVECLASS</a>       : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_567_571" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#STATICNATIVECLASS_11063_11080" id="STATICNATIVECLASS_576_593" title="Referenced at line 303; ../webdsl-native.stx line 43, 112">STATICNATIVECLASS</a> : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_614_618" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="#PAGE_9777_9781" id="PAGE_624_628" title="Referenced at line 262; ../webdsl-ac.stx line 140, 143, 229; ../webdsl-ui.stx line 312; ../webdsl.stx line 165; ../ui/actions.stx line 52, 83, 99, 100; ../ui/template-calls.stx line 86">PAGE</a>     : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_649_653" title="Defined at ../webdsl.stx line 29">TYPE</a>) -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_658_662" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <span class="layout">// BOOL indicates if template is ajax-enabled or not</span>
    <a href="../webdsl-ac.stx#TEMPLATE_10530_10538" id="TEMPLATE_725_733" title="Referenced at ../webdsl-ac.stx line 178, 234, 239; ../webdsl-ui.stx line 133; ../webdsl.stx line 159, 188, 193; ../actions/functions.stx line 190, 211, 211, 216, 223; ../ui/template-calls.stx line 43">TEMPLATE</a> : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_750_754" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_758_762" title="Defined at ../webdsl.stx line 30">BOOL</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_766_770" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <span class="layout">// access control</span>
    <a href="../webdsl-ac.stx#POINTCUT_10595_10603" id="POINTCUT_798_806" title="Referenced at ../webdsl-ac.stx line 179; ../webdsl.stx line 206">POINTCUT</a>    : <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_826_830" title="Defined at ../webdsl.stx line 29">TYPE</a>) -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_835_839" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="../webdsl-ac.stx#CREDENTIALS_4149_4160" id="CREDENTIALS_844_855" title="Referenced at ../webdsl-ac.stx line 89, 275">CREDENTIALS</a> : <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_863_867" title="Defined at ../webdsl.stx line 29">TYPE</a>)          -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_881_885" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="#LIST_3578_3582" id="LIST_891_895" title="Referenced at line 117, 117, 190, 270, 275; ../webdsl-actions.stx line 169, 271, 274, 276, 279, 316, 320, 325, 334; ../webdsl-entities.stx line 155, 161, 167; ../webdsl-hql.stx line 49, 65, 70; ../webdsl-native.stx line 120; ../webdsl-regex.stx line 24; ../webdsl-search.stx line 30, 35, 44; ../webdsl-ui.stx line 215, 281; ../actions/built-ins.stx line 48, 52; ../actions/functions.stx line 255; ../entities/annotations.stx line 109, 120, 146, 160; ../entities/generated-functions.stx line 53, 54; ../types/built-ins.stx line 147, 148, 149, 151, 154, 157, 159, 162, 166, 168, 171, 174, 178, 182, 185, 189, 193, 195, 220, 224, 232, 234, 234, 235, 236; ../ui/actions.stx line 121, 146; ../ui/attributes.stx line 54, 64">LIST</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_898_902" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_906_910" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#SET_3643_3646" id="SET_915_918" title="Referenced at line 118, 118, 192, 271, 276; ../webdsl-actions.stx line 170, 282, 285, 287, 290, 310; ../webdsl-entities.stx line 156, 162, 168; ../webdsl-native.stx line 121; ../webdsl-ui.stx line 216; ../actions/functions.stx line 256; ../entities/annotations.stx line 124, 133, 147, 161; ../types/built-ins.stx line 163, 166, 202, 203, 204, 206, 209, 212, 215, 217, 221, 224, 226, 235; ../ui/actions.stx line 147; ../ui/attributes.stx line 55, 65">SET</a>  : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_922_926" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_930_934" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#REF_3708_3711" id="REF_939_942" title="Referenced at line 119, 119, 120, 121, 194, 269, 281; ../webdsl-actions.stx line 121, 262; ../webdsl-entities.stx line 123; ../actions/functions.stx line 48, 254; ../types/built-ins.stx line 230, 232, 234, 235, 236, 238; ../ui/template-calls.stx line 135">REF</a>  : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_946_950" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_954_958" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <span class="layout">// built-in types without scopes</span>
    <a href="#BUILTINTYPE_2472_2483" id="BUILTINTYPE_1001_1012" title="Referenced at line 98, 98, 99, 99, 102, 103, 104, 105, 106, 107, 108, 109, 112, 113, 114, 123, 132, 133, 134, 135, 142, 143, 144, 145, 146, 147, 148, 149, 150, 203, 304; ../webdsl-native.stx line 23, 35; ../webdsl.stx line 296; ../actions/binops.stx line 145, 146, 150, 151, 152, 156, 156, 157, 157, 160, 161; ../actions/functions.stx line 236, 236, 239, 239, 259; ../entities/built-ins.stx line 18; ../types/built-ins.stx line 17, 21, 26, 31, 37, 193, 195; ../types/type-extensions.stx line 16, 32">BUILTINTYPE</a> : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1033_1037" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#STATICBUILTINTYPE_11137_11154" id="STATICBUILTINTYPE_1042_1059" title="Referenced at line 305; ../types/built-ins.stx line 22, 32; ../types/type-extensions.stx line 35">STATICBUILTINTYPE</a> : <span class="keyword">string</span> * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1080_1084" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="../webdsl-ui.stx#TEMPLATEVARARG_13080_13094" id="TEMPLATEVARARG_1090_1104" title="Referenced at ../webdsl-ui.stx line 281, 297, 301, 305, 305; ../actions/functions.stx line 245, 245, 248, 248; ../ui/actions.stx line 139">TEMPLATEVARARG</a> : <span class="keyword">list</span>(<a href="../webdsl.stx#TYPE_669_673" id="TYPE_1112_1116" title="Defined at ../webdsl.stx line 29">TYPE</a>) * <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1129_1133" title="Defined at ../webdsl.stx line 29">TYPE</a>

    <a href="#REGEX_6379_6384" id="REGEX_1139_1144" title="Referenced at line 179, 307">REGEX</a>            : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1158_1162" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#VOID_6473_6477" id="VOID_1167_1171" title="Referenced at line 181, 308; ../webdsl-ac.stx line 41; ../webdsl-actions.stx line 21, 218, 224; ../webdsl-entities.stx line 122; ../actions/built-ins.stx line 20; ../actions/functions.stx line 123; ../entities/built-ins.stx line 26, 27; ../types/built-ins.stx line 125, 126, 132, 133, 151, 154, 157, 174, 178, 182, 209, 212, 215">VOID</a>             : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1186_1190" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#TEMPLATEELEMENTS_6578_6594" id="TEMPLATEELEMENTS_1195_1211" title="Referenced at line 183, 309; ../webdsl-ui.stx line 294; ../webdsl.stx line 339; ../ui/actions.stx line 192; ../ui/template-calls.stx line 50">TEMPLATEELEMENTS</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1214_1218" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#NULL_1492_1496" id="NULL_1223_1227" title="Referenced at line 61, 62, 122, 310">NULL</a>             : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1242_1246" title="Defined at ../webdsl.stx line 29">TYPE</a>
    <a href="#UNTYPED_2380_2387" id="UNTYPED_1251_1258" title="Referenced at line 93, 157, 161, 191, 268, 284, 311; ../webdsl-actions.stx line 31, 32, 33, 34, 35, 36, 37, 51, 64, 82, 217, 223, 236, 237, 261, 270, 281, 347; ../webdsl-entities.stx line 121, 189; ../webdsl-expand.stx line 20; ../webdsl-hql.stx line 58; ../webdsl-native.stx line 122; ../webdsl-regex.stx line 10; ../webdsl-search.stx line 90, 96; ../webdsl.stx line 393, 396, 399; ../actions/binops.stx line 24, 31, 39, 47, 55, 63, 71, 79, 87, 149; ../actions/functions.stx line 49, 142; ../ui/actions.stx line 26, 39, 86, 89, 92, 95, 126; ../ui/built-ins.stx line 50; ../ui/template-calls.stx line 51">UNTYPED</a>          : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1270_1274" title="Defined at ../webdsl.stx line 29">TYPE</a>

<span class="keyword">rules</span> <span class="layout">// types of constant expressions</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1318_1327" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1364_1365" id="s_1328_1329" title="Referenced at line 54">s</a>, <a href="#exp_1373_1376" id="exp_1331_1334" title="Referenced at line 55">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#True_5020_5024" id="True_1335_1339" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 152">True</a>()) = <a href="#t_1354_1355" id="t_1345_1346" title="Referenced at line 54, 55">t</a> :-
    <a href="#t_1345_1346" id="t_1354_1355" title="Defined at line 53">t</a> == <a href="../types/built-ins.stx#bool_2637_2641" id="bool_1359_1363" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_1328_1329" id="s_1364_1365" title="Defined at line 53">s</a>),
    @<a href="#exp_1331_1334" id="exp_1373_1376" title="Defined at line 53">exp</a>.<span class="keyword">type</span> := <a href="#t_1345_1346" id="t_1385_1386" title="Defined at line 53">t</a>.

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1391_1400" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1438_1439" id="s_1401_1402" title="Referenced at line 58">s</a>, <a href="#exp_1447_1450" id="exp_1404_1407" title="Referenced at line 59">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#False_5035_5040" id="False_1408_1413" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 153">False</a>()) = <a href="#t_1428_1429" id="t_1419_1420" title="Referenced at line 58, 59">t</a> :-
    <a href="#t_1419_1420" id="t_1428_1429" title="Defined at line 57">t</a> == <a href="../types/built-ins.stx#bool_2637_2641" id="bool_1433_1437" title="Defined at ../types/built-ins.stx line 72">bool</a>(<a href="#s_1401_1402" id="s_1438_1439" title="Defined at line 57">s</a>),
    @<a href="#exp_1404_1407" id="exp_1447_1450" title="Defined at line 57">exp</a>.<span class="keyword">type</span> := <a href="#t_1419_1420" id="t_1459_1460" title="Defined at line 57">t</a>.

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1465_1474" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(_, <a href="#exp_1507_1510" id="exp_1478_1481" title="Referenced at line 62">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Null_5051_5055" id="Null_1482_1486" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 154">Null</a>()) = <a href="#NULL_1223_1227" id="NULL_1492_1496" title="Defined at line 48">NULL</a>() :-
    @<a href="#exp_1478_1481" id="exp_1507_1510" title="Defined at line 61">exp</a>.<span class="keyword">type</span> := <a href="#NULL_1223_1227" id="NULL_1519_1523" title="Defined at line 48">NULL</a>().

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1530_1539" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Const_3459_3464" id="Const_1543_1548" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 111">Const</a>(c)) = <a href="#typeOfConst_1636_1647" id="typeOfConst_1555_1566" title="Defined at line 67">typeOfConst</a>(<span id="s_1567_1568" title="Not referenced locally, nor via imports">s</span>, <span id="c_1570_1571" title="Not referenced locally, nor via imports">c</span>).
  <a href="../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_1576_1596" title="Defined at ../webdsl.stx line 398">typeOfPlaceholderExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PHConst_2327_2334" id="PHConst_1600_1607" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 64">PHConst</a>(<span id="c_1608_1609" title="Not referenced locally, nor via imports">c</span>)) = <a href="#typeOfConst_1636_1647" id="typeOfConst_1614_1625" title="Defined at line 67">typeOfConst</a>(<span id="s_1626_1627" title="Not referenced locally, nor via imports">s</span>, c).

  <a href="#typeOfConst_1555_1566" id="typeOfConst_1636_1647" title="Referenced at line 64, 65, 68, 72, 76, 80">typeOfConst</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ConstValue_389_399" id="ConstValue_1658_1668" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 24">ConstValue</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1672_1676" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfConst_1636_1647" id="typeOfConst_1679_1690" title="Defined at line 67">typeOfConst</a>(<a href="#s_1726_1727" id="s_1691_1692" title="Referenced at line 69">s</a>, <a href="#exp_1735_1738" id="exp_1694_1697" title="Referenced at line 70">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Int_3489_3492" id="Int_1698_1701" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 112">Int</a>(_)) = <a href="#t_1717_1718" id="t_1708_1709" title="Referenced at line 69, 70">t</a> :-
    <a href="#t_1708_1709" id="t_1717_1718" title="Defined at line 68">t</a> == <a href="../types/built-ins.stx#int_1638_1641" id="int_1722_1725" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_1691_1692" id="s_1726_1727" title="Defined at line 68">s</a>),
    @<a href="#exp_1694_1697" id="exp_1735_1738" title="Defined at line 68">exp</a>.<span class="keyword">type</span> := <a href="#t_1708_1709" id="t_1747_1748" title="Defined at line 68">t</a>.

  <a href="#typeOfConst_1636_1647" id="typeOfConst_1753_1764" title="Defined at line 67">typeOfConst</a>(<a href="#s_1802_1803" id="s_1765_1766" title="Referenced at line 73">s</a>, <a href="#exp_1811_1814" id="exp_1768_1771" title="Referenced at line 74">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Long_3517_3521" id="Long_1772_1776" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 113">Long</a>(_)) = <a href="#t_1792_1793" id="t_1783_1784" title="Referenced at line 73, 74">t</a> :-
    <a href="#t_1783_1784" id="t_1792_1793" title="Defined at line 72">t</a> == <a href="../types/built-ins.stx#long_1760_1764" id="long_1797_1801" title="Defined at ../types/built-ins.stx line 45">long</a>(<a href="#s_1765_1766" id="s_1802_1803" title="Defined at line 72">s</a>),
    @<a href="#exp_1768_1771" id="exp_1811_1814" title="Defined at line 72">exp</a>.<span class="keyword">type</span> := <a href="#t_1783_1784" id="t_1823_1824" title="Defined at line 72">t</a>.

  <a href="#typeOfConst_1636_1647" id="typeOfConst_1829_1840" title="Defined at line 67">typeOfConst</a>(<a href="#s_1880_1881" id="s_1841_1842" title="Referenced at line 77">s</a>, <a href="#exp_1889_1892" id="exp_1844_1847" title="Referenced at line 78">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Float_3547_3552" id="Float_1848_1853" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 114">Float</a>(_)) = <a href="#t_1869_1870" id="t_1860_1861" title="Referenced at line 77, 78">t</a> :-
    <a href="#t_1860_1861" id="t_1869_1870" title="Defined at line 76">t</a> == <a href="../types/built-ins.stx#float_1698_1703" id="float_1874_1879" title="Defined at ../types/built-ins.stx line 43">float</a>(<a href="#s_1841_1842" id="s_1880_1881" title="Defined at line 76">s</a>),
    @<a href="#exp_1844_1847" id="exp_1889_1892" title="Defined at line 76">exp</a>.<span class="keyword">type</span> := <a href="#t_1860_1861" id="t_1901_1902" title="Defined at line 76">t</a>.

  <a href="#typeOfConst_1636_1647" id="typeOfConst_1907_1918" title="Defined at line 67">typeOfConst</a>(<a href="#s_1967_1968" id="s_1919_1920" title="Referenced at line 81, 82">s</a>, <a href="#exp_1998_2001" id="exp_1922_1925" title="Referenced at line 83">exp</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#StringConst_3579_3590" id="StringConst_1926_1937" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 115">StringConst</a>(<a href="#str_1987_1990" id="str_1938_1941" title="Referenced at line 82">str</a>)) = <a href="#t_1955_1956" id="t_1946_1947" title="Referenced at line 81, 83">t</a> :-
    <a href="#t_1946_1947" id="t_1955_1956" title="Defined at line 80">t</a> == <a href="../types/built-ins.stx#string_1822_1828" id="string_1960_1966" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1919_1920" id="s_1967_1968" title="Defined at line 80">s</a>),
    <a href="#stringOk_2016_2024" id="stringOk_1975_1983" title="Defined at line 85">stringOk</a>(<a href="#s_1919_1920" id="s_1984_1985" title="Defined at line 80">s</a>, <a href="#str_1938_1941" id="str_1987_1990" title="Defined at line 80">str</a>),
    @<a href="#exp_1922_1925" id="exp_1998_2001" title="Defined at line 80">exp</a>.<span class="keyword">type</span> := <a href="#t_1946_1947" id="t_2010_2011" title="Defined at line 80">t</a>.

  <a href="#stringOk_1975_1983" id="stringOk_2016_2024" title="Referenced at line 82, 86; ../entities/annotations.stx line 169">stringOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#String_478_484" id="String_2035_2041" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 28">String</a>
  <a href="#stringOk_2016_2024" id="stringOk_2044_2052" title="Defined at line 85">stringOk</a>(<a href="#s_2088_2089" id="s_2053_2054" title="Referenced at line 86">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#String_1416_1422" id="String_2056_2062" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 64">String</a>(<a href="#parts_2091_2096" id="parts_2063_2068" title="Referenced at line 86">parts</a>)) :- <a href="#stringPartsOk_2102_2115" id="stringPartsOk_2074_2087" title="Defined at line 88">stringPartsOk</a>(<a href="#s_2053_2054" id="s_2088_2089" title="Defined at line 86">s</a>, <a href="#parts_2063_2068" id="parts_2091_2096" title="Defined at line 86">parts</a>).

  <a href="#stringPartsOk_2074_2087" id="stringPartsOk_2102_2115" title="Referenced at line 86; ../webdsl-ui.stx line 150">stringPartsOk</a> <span class="keyword">maps</span> <a href="#stringPartOk_2148_2160" id="stringPartOk_2121_2133" title="Defined at line 89">stringPartOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#stringPartOk_2121_2133" id="stringPartOk_2148_2160" title="Referenced at line 88, 90, 91, 92">stringPartOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#StringPart_489_499" id="StringPart_2171_2181" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 29">StringPart</a>
  <a href="#stringPartOk_2148_2160" id="stringPartOk_2184_2196" title="Defined at line 89">stringPartOk</a>(<span id="s_2197_2198" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#StringValue_1456_1467" id="StringValue_2200_2211" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 65">StringValue</a>(_)).
  <a href="#stringPartOk_2148_2160" id="stringPartOk_2219_2231" title="Defined at line 89">stringPartOk</a>(<a href="#s_2260_2261" id="s_2232_2233" title="Referenced at line 91">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#InterpExp_4779_4788" id="InterpExp_2235_2244" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 145">InterpExp</a>(<a href="#exp_2263_2266" id="exp_2245_2248" title="Referenced at line 91">exp</a>)) :- <a href="#typed_10475_10480" id="typed_2254_2259" title="Defined at line 283">typed</a>(<a href="#s_2232_2233" id="s_2260_2261" title="Defined at line 91">s</a>, <a href="#exp_2245_2248" id="exp_2263_2266" title="Defined at line 91">exp</a>).
  <a href="#stringPartOk_2148_2160" id="stringPartOk_2271_2283" title="Defined at line 89">stringPartOk</a>(<a href="#s_2364_2365" id="s_2284_2285" title="Referenced at line 93">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#InterpValue_1498_1509" id="InterpValue_2287_2298" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 66">InterpValue</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#InterpSimpleExp_1546_1561" id="InterpSimpleExp_2299_2314" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 67">InterpSimpleExp</a>(<a href="#simple_exp_2367_2377" id="simple_exp_2315_2325" title="Referenced at line 93">simple_exp</a>))) :-
    <a href="#inequalType_10560_10571" id="inequalType_2336_2347" title="Defined at line 286">inequalType</a>(<a href="../webdsl.stx#typeOfSimpleExp_16774_16789" id="typeOfSimpleExp_2348_2363" title="Defined at ../webdsl.stx line 395">typeOfSimpleExp</a>(<a href="#s_2284_2285" id="s_2364_2365" title="Defined at line 92">s</a>, <a href="#simple_exp_2315_2325" id="simple_exp_2367_2377" title="Defined at line 92">simple_exp</a>), <a href="#UNTYPED_1251_1258" id="UNTYPED_2380_2387" title="Defined at line 49">UNTYPED</a>()).

<span class="keyword">rules</span> <span class="layout">// type compatibility of constants</span>

  <span class="layout">// numeric types</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2456_2471" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2472_2483" title="Defined at line 40">BUILTINTYPE</a>("Long", _), <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2496_2507" title="Defined at line 40">BUILTINTYPE</a>("Int", _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2521_2525" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2531_2546" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2547_2558" title="Defined at line 40">BUILTINTYPE</a>("Int", _), <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2570_2581" title="Defined at line 40">BUILTINTYPE</a>("Long", _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2596_2600" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <span class="layout">// string types</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2625_2640" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2645_2656" title="Defined at line 40">BUILTINTYPE</a>("String", _))      = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_2678_2701" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_2702_2704" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2709_2724" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2729_2740" title="Defined at line 40">BUILTINTYPE</a>("Secret", _))      = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_2762_2785" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_2786_2788" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2793_2808" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2813_2824" title="Defined at line 40">BUILTINTYPE</a>("Email", _))       = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_2846_2869" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_2870_2872" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2877_2892" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2897_2908" title="Defined at line 40">BUILTINTYPE</a>("URL", _))         = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_2930_2953" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_2954_2956" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_2961_2976" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<span id="T1_2977_2979" title="Not referenced locally, nor via imports">T1</span>, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_2981_2992" title="Defined at line 40">BUILTINTYPE</a>("WikiText", _))    = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_3014_3037" title="Defined at line 140">isStringCompatibleTypeB</a>(T1).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3045_3060" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3065_3076" title="Defined at line 40">BUILTINTYPE</a>("Text", _))        = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_3098_3121" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_3122_3124" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3129_3144" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3149_3160" title="Defined at line 40">BUILTINTYPE</a>("Patch", _))       = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_3182_3205" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_3206_3208" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3213_3228" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3233_3244" title="Defined at line 40">BUILTINTYPE</a>("Placeholder", _)) = <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_3266_3289" title="Defined at line 140">isStringCompatibleTypeB</a>(<span id="T1_3290_3292" title="Not referenced locally, nor via imports">T1</span>).

  <span class="layout">// date types</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3314_3329" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<span id="T1_3330_3332" title="Not referenced locally, nor via imports">T1</span>, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3334_3345" title="Defined at line 40">BUILTINTYPE</a>("Date", _))     = <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_3364_3385" title="Defined at line 130">isDateCompatibleTypeB</a>(T1).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3393_3408" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3413_3424" title="Defined at line 40">BUILTINTYPE</a>("DateTime", _)) = <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_3443_3464" title="Defined at line 130">isDateCompatibleTypeB</a>(<span id="T1_3465_3467" title="Not referenced locally, nor via imports">T1</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3472_3487" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3492_3503" title="Defined at line 40">BUILTINTYPE</a>("Time", _))     = <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_3522_3543" title="Defined at line 130">isDateCompatibleTypeB</a>(<span id="T1_3544_3546" title="Not referenced locally, nor via imports">T1</span>).

  <span class="layout">// misc</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3562_3577" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#LIST_891_895" id="LIST_3578_3582" title="Defined at line 35">LIST</a>(T1), <a href="#LIST_891_895" id="LIST_3588_3592" title="Defined at line 35">LIST</a>(<span id="T2_3593_3595" title="Not referenced locally, nor via imports">T2</span>)) = <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3600_3615" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<span id="T1_3616_3618" title="Not referenced locally, nor via imports">T1</span>, T2).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3627_3642" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#SET_915_918" id="SET_3643_3646" title="Defined at line 36">SET</a>(<span id="T1_3647_3649" title="Not referenced locally, nor via imports">T1</span>), <a href="#SET_915_918" id="SET_3652_3655" title="Defined at line 36">SET</a>(T2))   = <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3665_3680" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <span id="T2_3685_3687" title="Not referenced locally, nor via imports">T2</span>).
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3692_3707" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#REF_939_942" id="REF_3708_3711" title="Defined at line 37">REF</a>(_), <a href="#REF_939_942" id="REF_3716_3719" title="Defined at line 37">REF</a>(_))     = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_3730_3734" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3740_3755" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, <a href="#REF_939_942" id="REF_3760_3763" title="Defined at line 37">REF</a>(T2))        = <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3778_3793" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<span id="T1_3794_3796" title="Not referenced locally, nor via imports">T1</span>, <span id="T2_3798_3800" title="Not referenced locally, nor via imports">T2</span>). <span class="layout">// ref is compatible both ways</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3836_3851" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#REF_939_942" id="REF_3852_3855" title="Defined at line 37">REF</a>(<span id="T1_3856_3858" title="Not referenced locally, nor via imports">T1</span>), <span id="T2_3861_3863" title="Not referenced locally, nor via imports">T2</span>)        = <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3874_3889" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(T1, T2). <span class="layout">// ref is compatible both ways</span>
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3932_3947" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#NULL_1223_1227" id="NULL_3948_3952" title="Defined at line 48">NULL</a>(), _) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_3961_3965" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_3971_3986" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(_, <a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_3990_4001" title="Defined at line 40">BUILTINTYPE</a>("Object", _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4018_4022" title="Defined at ../webdsl.stx line 34">TRUE</a>().

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#isDateCompatibleType_4075_4095" id="isDateCompatibleType_4045_4065" title="Referenced at line 128">isDateCompatibleType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4068_4072" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isDateCompatibleType_4045_4065" id="isDateCompatibleType_4075_4095" title="Defined at line 127">isDateCompatibleType</a>(<a href="#t_4124_4125" id="t_4096_4097" title="Referenced at line 128">t</a>) :- <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4102_4123" title="Defined at line 130">isDateCompatibleTypeB</a>(<a href="#t_4096_4097" id="t_4124_4125" title="Defined at line 128">t</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4130_4134" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#isDateCompatibleTypeB_3364_3385" id="isDateCompatibleTypeB_4141_4162" title="Referenced at line 112, 113, 114, 128, 131, 132, 133, 134, 135">isDateCompatibleTypeB</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4165_4169" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4173_4177" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4180_4201" title="Defined at line 130">isDateCompatibleTypeB</a>(_)                          = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4232_4237" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4243_4264" title="Defined at line 130">isDateCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4265_4276" title="Defined at line 40">BUILTINTYPE</a>("Date", _))     = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4295_4299" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4305_4326" title="Defined at line 130">isDateCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4327_4338" title="Defined at line 40">BUILTINTYPE</a>("DateTime", _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4357_4361" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4367_4388" title="Defined at line 130">isDateCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4389_4400" title="Defined at line 40">BUILTINTYPE</a>("Time", _))     = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4419_4423" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isDateCompatibleTypeB_4141_4162" id="isDateCompatibleTypeB_4429_4450" title="Defined at line 130">isDateCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4451_4462" title="Defined at line 40">BUILTINTYPE</a>("Object", _))   = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4481_4485" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#isStringCompatibleType_4524_4546" id="isStringCompatibleType_4492_4514" title="Referenced at line 138; ../webdsl-ac.stx line 77">isStringCompatibleType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4517_4521" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isStringCompatibleType_4492_4514" id="isStringCompatibleType_4524_4546" title="Defined at line 137">isStringCompatibleType</a>(<a href="#t_4577_4578" id="t_4547_4548" title="Referenced at line 138">t</a>) :- <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4553_4576" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#t_4547_4548" id="t_4577_4578" title="Defined at line 138">t</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4583_4587" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#isStringCompatibleTypeB_2678_2701" id="isStringCompatibleTypeB_4594_4617" title="Referenced at line 102, 103, 104, 105, 106, 107, 108, 109, 138, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150">isStringCompatibleTypeB</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_4620_4624" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4628_4632" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4635_4658" title="Defined at line 140">isStringCompatibleTypeB</a>(_)             = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4676_4681" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4687_4710" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4711_4722" title="Defined at line 40">BUILTINTYPE</a>("String", _))       = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4745_4749" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4755_4778" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4779_4790" title="Defined at line 40">BUILTINTYPE</a>("Secret", _))       = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4813_4817" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4823_4846" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4847_4858" title="Defined at line 40">BUILTINTYPE</a>("Email", _))        = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4881_4885" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4891_4914" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4915_4926" title="Defined at line 40">BUILTINTYPE</a>("URL", _))          = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4949_4953" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_4959_4982" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_4983_4994" title="Defined at line 40">BUILTINTYPE</a>("WikiText", _))     = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5017_5021" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_5027_5050" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5051_5062" title="Defined at line 40">BUILTINTYPE</a>("Text", _))         = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5085_5089" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_5095_5118" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5119_5130" title="Defined at line 40">BUILTINTYPE</a>("Patch", _))        = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5153_5157" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_5163_5186" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5187_5198" title="Defined at line 40">BUILTINTYPE</a>("Object", _))       = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5221_5225" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#isStringCompatibleTypeB_4594_4617" id="isStringCompatibleTypeB_5231_5254" title="Defined at line 140">isStringCompatibleTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_5255_5266" title="Defined at line 40">BUILTINTYPE</a>("Placeholder", _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_5288_5292" title="Defined at ../webdsl.stx line 34">TRUE</a>().

<span class="keyword">rules</span> <span class="layout">// map sorts to semantic types</span>

  <a href="#typeOfSortTyped_5378_5393" id="typeOfSortTyped_5337_5352" title="Referenced at line 155, 209, 214">typeOfSortTyped</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5363_5367" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_5371_5375" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfSortTyped_5337_5352" id="typeOfSortTyped_5378_5393" title="Defined at line 154">typeOfSortTyped</a>(<a href="#s_5430_5431" id="s_5394_5395" title="Referenced at line 156">s</a>, <a href="#sort_5433_5437" id="sort_5397_5401" title="Referenced at line 156">sort</a>) = <a href="#t_5414_5415" id="t_5405_5406" title="Referenced at line 156, 157, 157">t</a> :-
    <a href="#t_5405_5406" id="t_5414_5415" title="Defined at line 155">t</a> == <a href="#typeOfSort_5551_5561" id="typeOfSort_5419_5429" title="Defined at line 160">typeOfSort</a>(<a href="#s_5394_5395" id="s_5430_5431" title="Defined at line 155">s</a>, <a href="#sort_5397_5401" id="sort_5433_5437" title="Defined at line 155">sort</a>),
    <a href="#t_5405_5406" id="t_5444_5445" title="Defined at line 155">t</a> != <a href="#UNTYPED_1251_1258" id="UNTYPED_5449_5456" title="Defined at line 49">UNTYPED</a>() | <span class="keyword">error</span> $[Cannot resolve type [<a href="#t_5405_5406" id="t_5490_5491" title="Defined at line 155">t</a>]].

  <a href="../webdsl-ui.stx#typesOfSorts_14814_14826" id="typesOfSorts_5498_5510" title="Referenced at ../webdsl-ui.stx line 321">typesOfSorts</a> <span class="keyword">maps</span> <a href="#typeOfSort_5551_5561" id="typeOfSort_5516_5526" title="Defined at line 160">typeOfSort</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfSort_5419_5429" id="typeOfSort_5551_5561" title="Referenced at line 156, 159, 161, 162, 163, 164, 166, 167, 168, 169, 170, 171, 172, 173, 175, 176, 177, 179, 180, 181, 182, 183, 184, 185, 188, 190, 190, 191, 192, 192, 194, 194; ../webdsl-actions.stx line 50, 56, 69, 74, 166, 186, 277, 288, 338; ../webdsl-entities.stx line 120, 130; ../webdsl-expand.stx line 71; ../webdsl-native.stx line 119; ../webdsl-ui.stx line 212, 234, 288; ../actions/functions.stx line 96, 106, 123, 141; ../ui/actions.stx line 25, 31, 143, 167; ../ui/template-calls.stx line 135">typeOfSort</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5572_5576" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_5580_5584" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5587_5597" title="Defined at line 160">typeOfSort</a>(_, _) = <a href="#UNTYPED_1251_1258" id="UNTYPED_5606_5613" title="Defined at line 49">UNTYPED</a>(). <span class="layout">// untyped by default</span>
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5641_5651" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5655_5665" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Int")) = <a href="../types/built-ins.stx#int_1638_1641" id="int_5676_5679" title="Defined at ../types/built-ins.stx line 41">int</a>(<span id="s_5680_5681" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5686_5696" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5700_5710" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Float")) = <a href="../types/built-ins.stx#float_1698_1703" id="float_5723_5728" title="Defined at ../types/built-ins.stx line 43">float</a>(<span id="s_5729_5730" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5735_5745" title="Defined at line 160">typeOfSort</a>(<span id="s_5746_5747" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5749_5759" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Long")) = <a href="../types/built-ins.stx#long_1760_1764" id="long_5771_5775" title="Defined at ../types/built-ins.stx line 45">long</a>(s).

  <a href="#typeOfSort_5551_5561" id="typeOfSort_5783_5793" title="Defined at line 160">typeOfSort</a>(<span id="s_5794_5795" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5797_5807" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("String")) = <a href="../types/built-ins.stx#string_1822_1828" id="string_5821_5827" title="Defined at ../types/built-ins.stx line 48">string</a>(s).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5834_5844" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5848_5858" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Secret")) = <a href="../types/built-ins.stx#secret_1898_1904" id="secret_5872_5878" title="Defined at ../types/built-ins.stx line 50">secret</a>(<span id="s_5879_5880" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5885_5895" title="Defined at line 160">typeOfSort</a>(<span id="s_5896_5897" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5899_5909" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Email")) = <a href="../types/built-ins.stx#email_1974_1979" id="email_5922_5927" title="Defined at ../types/built-ins.stx line 52">email</a>(s).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5934_5944" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5948_5958" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("URL")) = <a href="../types/built-ins.stx#url_2049_2052" id="url_5969_5972" title="Defined at ../types/built-ins.stx line 54">url</a>(<span id="s_5973_5974" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_5979_5989" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_5993_6003" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("WikiText")) = <a href="../types/built-ins.stx#wikitext_2122_2130" id="wikitext_6019_6027" title="Defined at ../types/built-ins.stx line 56">wikitext</a>(<span id="s_6028_6029" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6034_6044" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6048_6058" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Text")) = <a href="../types/built-ins.stx#text_2200_2204" id="text_6070_6074" title="Defined at ../types/built-ins.stx line 58">text</a>(<span id="s_6075_6076" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6081_6091" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6095_6105" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Patch")) = <a href="../types/built-ins.stx#patch_2274_2279" id="patch_6118_6123" title="Defined at ../types/built-ins.stx line 60">patch</a>(<span id="s_6124_6125" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6130_6140" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6144_6154" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Placeholder")) = <a href="../types/built-ins.stx#placeholder_2349_2360" id="placeholder_6173_6184" title="Defined at ../types/built-ins.stx line 62">placeholder</a>(<span id="s_6185_6186" title="Not referenced locally, nor via imports">s</span>).

  <a href="#typeOfSort_5551_5561" id="typeOfSort_6192_6202" title="Defined at line 160">typeOfSort</a>(<span id="s_6203_6204" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6206_6216" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Date")) = <a href="../types/built-ins.stx#date_2431_2435" id="date_6228_6232" title="Defined at ../types/built-ins.stx line 65">date</a>(s).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6239_6249" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6253_6263" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("DateTime")) = <a href="../types/built-ins.stx#datetime_2498_2506" id="datetime_6279_6287" title="Defined at ../types/built-ins.stx line 67">datetime</a>(<span id="s_6288_6289" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6294_6304" title="Defined at line 160">typeOfSort</a>(<span id="s_6305_6306" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6308_6318" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Time")) = <a href="../types/built-ins.stx#time_2569_2573" id="time_6330_6334" title="Defined at ../types/built-ins.stx line 69">time</a>(s).

  <a href="#typeOfSort_5551_5561" id="typeOfSort_6342_6352" title="Defined at line 160">typeOfSort</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6356_6366" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Regex")) = <a href="#REGEX_1139_1144" id="REGEX_6379_6384" title="Defined at line 45">REGEX</a>().
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6390_6400" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6404_6414" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Bool")) = <a href="../types/built-ins.stx#bool_2637_2641" id="bool_6426_6430" title="Defined at ../types/built-ins.stx line 72">bool</a>(<span id="s_6431_6432" title="Not referenced locally, nor via imports">s</span>).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6437_6447" title="Defined at line 160">typeOfSort</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6451_6461" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Void")) = <a href="#VOID_1167_1171" id="VOID_6473_6477" title="Defined at line 46">VOID</a>().
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6483_6493" title="Defined at line 160">typeOfSort</a>(<span id="s_6494_6495" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6497_6507" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("UUID")) = <a href="../types/built-ins.stx#uuid_2698_2702" id="uuid_6519_6523" title="Defined at ../types/built-ins.stx line 74">uuid</a>(s).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6530_6540" title="Defined at line 160">typeOfSort</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6544_6554" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("TemplateElements")) = <a href="#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_6578_6594" title="Defined at line 47">TEMPLATEELEMENTS</a>().
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6600_6610" title="Defined at line 160">typeOfSort</a>(<span id="s_6611_6612" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6614_6624" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("File")) = <a href="../types/built-ins.stx#file_2759_2763" id="file_6636_6640" title="Defined at ../types/built-ins.stx line 76">file</a>(s).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6647_6657" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6661_6671" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>("Image")) = <a href="../types/built-ins.stx#image_2820_2825" id="image_6684_6689" title="Defined at ../types/built-ins.stx line 78">image</a>(<span id="s_6690_6691" title="Not referenced locally, nor via imports">s</span>).

  <span class="layout">// in case it's not a built in simple sort, it must be an entity</span>
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6764_6774" title="Defined at line 160">typeOfSort</a>(<span id="s_6775_6776" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#SimpleSort_859_869" id="SimpleSort_6778_6788" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 43">SimpleSort</a>(x)) = <a href="#definedType_7911_7922" id="definedType_6795_6806" title="Defined at line 218">definedType</a>(s, <span id="x_6810_6811" title="Not referenced locally, nor via imports">x</span>).

  <a href="#typeOfSort_5551_5561" id="typeOfSort_6817_6827" title="Defined at line 160">typeOfSort</a>(<span id="s_6828_6829" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#GenericSort_898_909" id="GenericSort_6831_6842" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 44">GenericSort</a>("List", [<span id="innerSort_6852_6861" title="Not referenced locally, nor via imports">innerSort</span>])) = <a href="#LIST_891_895" id="LIST_6867_6871" title="Defined at line 35">LIST</a>(<a href="#typeOfSort_5551_5561" id="typeOfSort_6872_6882" title="Defined at line 160">typeOfSort</a>(s, innerSort)).
  <a href="#typeOfSort_5551_5561" id="typeOfSort_6901_6911" title="Defined at line 160">typeOfSort</a>(<span id="s_6912_6913" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#GenericSort_898_909" id="GenericSort_6915_6926" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 44">GenericSort</a>(_, _)) = <a href="#UNTYPED_1251_1258" id="UNTYPED_6936_6943" title="Defined at line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Only lists and sets with one type parameter are supported].
  <a href="#typeOfSort_5551_5561" id="typeOfSort_7027_7037" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#GenericSort_898_909" id="GenericSort_7041_7052" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 44">GenericSort</a>("Set", [<span id="innerSort_7061_7070" title="Not referenced locally, nor via imports">innerSort</span>])) = <a href="#SET_915_918" id="SET_7076_7079" title="Defined at line 36">SET</a>(<a href="#typeOfSort_5551_5561" id="typeOfSort_7080_7090" title="Defined at line 160">typeOfSort</a>(<span id="s_7091_7092" title="Not referenced locally, nor via imports">s</span>, innerSort)).

  <a href="#typeOfSort_5551_5561" id="typeOfSort_7110_7120" title="Defined at line 160">typeOfSort</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#RefSort_1007_1014" id="RefSort_7124_7131" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 47">RefSort</a>(innerSort)) = <a href="#REF_939_942" id="REF_7146_7149" title="Defined at line 37">REF</a>(<a href="#typeOfSort_5551_5561" id="typeOfSort_7150_7160" title="Defined at line 160">typeOfSort</a>(<span id="s_7161_7162" title="Not referenced locally, nor via imports">s</span>, <span id="innerSort_7164_7173" title="Not referenced locally, nor via imports">innerSort</span>)).

<span class="keyword">rules</span> <span class="layout">// WebDSL definition of being a simple type: built-in simple sort (no generics, no ref, no entity etc)</span>

  <a href="#isBuiltInType_7313_7326" id="isBuiltInType_7290_7303" title="Referenced at line 199; ../webdsl-entities.stx line 152, 170">isBuiltInType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_7306_7310" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isBuiltInType_7290_7303" id="isBuiltInType_7313_7326" title="Defined at line 198">isBuiltInType</a>(<a href="#t_7348_7349" id="t_7327_7328" title="Referenced at line 199">t</a>) :- <a href="#isBuiltInTypeB_7365_7379" id="isBuiltInTypeB_7333_7347" title="Defined at line 201">isBuiltInTypeB</a>(<a href="#t_7327_7328" id="t_7348_7349" title="Defined at line 199">t</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_7354_7358" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#isBuiltInTypeB_7333_7347" id="isBuiltInTypeB_7365_7379" title="Referenced at line 199, 202, 203">isBuiltInTypeB</a>: <a href="../webdsl.stx#TYPE_669_673" id="TYPE_7381_7385" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_7389_7393" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#isBuiltInTypeB_7365_7379" id="isBuiltInTypeB_7396_7410" title="Defined at line 201">isBuiltInTypeB</a>(_) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_7416_7421" title="Defined at ../webdsl.stx line 35">FALSE</a>(). <span class="layout">// not a simple type by default</span>
  <a href="#isBuiltInTypeB_7365_7379" id="isBuiltInTypeB_7459_7473" title="Defined at line 201">isBuiltInTypeB</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_7474_7485" title="Defined at line 40">BUILTINTYPE</a>(_, _)) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_7495_7499" title="Defined at ../webdsl.stx line 34">TRUE</a>().

<span class="keyword">rules</span> <span class="layout">// type related expressions</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7541_7550" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7608_7609" id="s_7551_7552" title="Referenced at line 208, 209">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Cast_4540_4544" id="Cast_7554_7558" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 139">Cast</a>(<a href="#exp_7611_7614" id="exp_7559_7562" title="Referenced at line 208">exp</a>, <a href="#sort_7646_7650" id="sort_7564_7568" title="Referenced at line 209">sort</a>)) = <a href="#t'_7621_7623" id="t'_7573_7575" title="Referenced at line 209, 210, 210, 210">t'</a> :- {<a href="#t_7587_7588" id="t_7580_7581" title="Referenced at line 208, 210, 210, 210">t</a>}
    <a href="#t_7580_7581" id="t_7587_7588" title="Defined at line 207">t</a>  == <a href="../webdsl.stx#typeOfExpTyped_16614_16628" id="typeOfExpTyped_7593_7607" title="Defined at ../webdsl.stx line 390">typeOfExpTyped</a>(<a href="#s_7551_7552" id="s_7608_7609" title="Defined at line 207">s</a>, <a href="#exp_7559_7562" id="exp_7611_7614" title="Defined at line 207">exp</a>),
    <a href="#t'_7573_7575" id="t'_7621_7623" title="Defined at line 207">t'</a> == <a href="#typeOfSortTyped_5337_5352" id="typeOfSortTyped_7627_7642" title="Defined at line 154">typeOfSortTyped</a>(<a href="#s_7551_7552" id="s_7643_7644" title="Defined at line 207">s</a>, <a href="#sort_7564_7568" id="sort_7646_7650" title="Defined at line 207">sort</a>),
    <a href="../webdsl.stx#or_17705_17707" id="or_7657_7659" title="Defined at ../webdsl.stx line 417">or</a>(<a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_7660_7675" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#t_7580_7581" id="t_7676_7677" title="Defined at line 207">t</a>, <a href="#t'_7573_7575" id="t'_7679_7681" title="Defined at line 207">t'</a>), <a href="../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_7684_7699" title="Defined at ../webdsl.stx line 411">typeCompatibleB</a>(<a href="#t'_7573_7575" id="t'_7700_7702" title="Defined at line 207">t'</a>, <a href="#t_7580_7581" id="t_7704_7705" title="Defined at line 207">t</a>)) | <span class="keyword">error</span> $[Type [<a href="#t_7580_7581" id="t_7724_7725" title="Defined at line 207">t</a>] cannot be cast to [<a href="#t'_7573_7575" id="t'_7746_7748" title="Defined at line 207">t'</a>]].

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7755_7764" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7829_7830" id="s_7765_7766" title="Referenced at line 213, 214">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#IsA_4512_4515" id="IsA_7768_7771" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 138">IsA</a>(<a href="#exp_7832_7835" id="exp_7772_7775" title="Referenced at line 213">exp</a>, <a href="#sort_7867_7871" id="sort_7777_7781" title="Referenced at line 214">sort</a>)) = <a href="../types/built-ins.stx#bool_2637_2641" id="bool_7786_7790" title="Defined at ../types/built-ins.stx line 72">bool</a>(s) :- {<a href="#t_7808_7809" id="t_7798_7799" title="Referenced at line 213">t</a> <a href="#t'_7842_7844" id="t'_7800_7802" title="Referenced at line 214">t'</a>}
    <a href="#t_7798_7799" id="t_7808_7809" title="Defined at line 212">t</a>  == <a href="../webdsl.stx#typeOfExpTyped_16614_16628" id="typeOfExpTyped_7814_7828" title="Defined at ../webdsl.stx line 390">typeOfExpTyped</a>(<a href="#s_7765_7766" id="s_7829_7830" title="Defined at line 212">s</a>, <a href="#exp_7772_7775" id="exp_7832_7835" title="Defined at line 212">exp</a>),
    <a href="#t'_7800_7802" id="t'_7842_7844" title="Defined at line 212">t'</a> == <a href="#typeOfSortTyped_5337_5352" id="typeOfSortTyped_7848_7863" title="Defined at line 154">typeOfSortTyped</a>(<a href="#s_7765_7766" id="s_7864_7865" title="Defined at line 212">s</a>, <a href="#sort_7777_7781" id="sort_7867_7871" title="Defined at line 212">sort</a>).

<span class="keyword">rules</span> <span class="layout">// resolve reference types</span>

  <a href="#definedType_6795_6806" id="definedType_7911_7922" title="Referenced at line 188, 219; ../webdsl-entities.stx line 178; ../webdsl-hql.stx line 50, 129; ../webdsl-search.stx line 52">definedType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_7943_7947" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#definedType_7911_7922" id="definedType_7950_7961" title="Defined at line 218">definedType</a>(<a href="#s_8002_8003" id="s_7962_7963" title="Referenced at line 220">s</a>, <a href="#name_8005_8009" id="name_7965_7969" title="Referenced at line 220, 220, 221">name</a>) = <a href="#t_8027_8028" id="t_7973_7974" title="Referenced at line 220">t</a> :- {<a href="#name'_8020_8025" id="name'_7979_7984" title="Referenced at line 220, 221">name'</a>}
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_7990_8001" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_7962_7963" id="s_8002_8003" title="Defined at line 219">s</a>, <a href="#name_7965_7969" id="name_8005_8009" title="Defined at line 219">name</a>) == [(_, (<a href="#name'_7979_7984" id="name'_8020_8025" title="Defined at line 219">name'</a>, <a href="#t_7973_7974" id="t_8027_8028" title="Defined at line 219">t</a>))|_] | <span class="keyword">error</span> $[Type [<a href="#name_7965_7969" id="name_8050_8054" title="Defined at line 219">name</a>] does not exist], <span class="layout">// correct error message for tests</span>
    @<a href="#name_7965_7969" id="name_8113_8117" title="Defined at line 219">name</a>.<span class="keyword">ref</span> := <a href="#name'_7979_7984" id="name'_8125_8130" title="Defined at line 219">name'</a>.

  <a href="#definedTypeCustomError_8185_8207" id="definedTypeCustomError_8135_8157" title="Referenced at line 224; ../webdsl-ac.stx line 69">definedTypeCustomError</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8178_8182" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#definedTypeCustomError_8135_8157" id="definedTypeCustomError_8185_8207" title="Defined at line 223">definedTypeCustomError</a>(<a href="#s_8248_8249" id="s_8208_8209" title="Referenced at line 225">s</a>, <a href="#name_8251_8255" id="name_8211_8215" title="Referenced at line 225, 226">name</a>) = <a href="#t_8273_8274" id="t_8219_8220" title="Referenced at line 225">t</a> :- {<a href="#name'_8266_8271" id="name'_8225_8230" title="Referenced at line 225, 226">name'</a>}
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_8236_8247" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_8208_8209" id="s_8248_8249" title="Defined at line 224">s</a>, <a href="#name_8211_8215" id="name_8251_8255" title="Defined at line 224">name</a>) == [(_, (<a href="#name'_8225_8230" id="name'_8266_8271" title="Defined at line 224">name'</a>, <a href="#t_8219_8220" id="t_8273_8274" title="Defined at line 224">t</a>))|_],
    @<a href="#name_8211_8215" id="name_8286_8290" title="Defined at line 224">name</a>.<span class="keyword">ref</span> := <a href="#name'_8225_8230" id="name'_8298_8303" title="Defined at line 224">name'</a>.

  <a href="#definedTypeNoRef_8352_8368" id="definedTypeNoRef_8308_8324" title="Referenced at line 229; ../webdsl-search.stx line 93, 99; ../actions/built-ins.stx line 42; ../types/built-ins.stx line 82, 85">definedTypeNoRef</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8345_8349" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#definedTypeNoRef_8308_8324" id="definedTypeNoRef_8352_8368" title="Defined at line 228">definedTypeNoRef</a>(<a href="#s_8401_8402" id="s_8369_8370" title="Referenced at line 230">s</a>, <a href="#name_8404_8408" id="name_8372_8376" title="Referenced at line 230, 230">name</a>) = <a href="#t_8422_8423" id="t_8380_8381" title="Referenced at line 230">t</a> :-
    <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_8389_8400" title="Defined at ../webdsl.stx line 105">resolveType</a>(<a href="#s_8369_8370" id="s_8401_8402" title="Defined at line 229">s</a>, <a href="#name_8372_8376" id="name_8404_8408" title="Defined at line 229">name</a>) == [(_, (_, <a href="#t_8380_8381" id="t_8422_8423" title="Defined at line 229">t</a>))|_] | <span class="keyword">error</span> $[Type [<a href="#name_8372_8376" id="name_8445_8449" title="Defined at line 229">name</a>] does not exist]. <span class="layout">// correct error message for tests</span>

  <a href="#definedTypeIfExists_8553_8572" id="definedTypeIfExists_8506_8525" title="Referenced at line 233; ../webdsl-search.stx line 35; ../types/built-ins.stx line 238">definedTypeIfExists</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8546_8550" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#definedTypeIfExists_8506_8525" id="definedTypeIfExists_8553_8572" title="Defined at line 232">definedTypeIfExists</a>(s, <span id="name_8576_8580" title="Not referenced locally, nor via imports">name</span>) = <a href="#definedTypeIfExists_internal_8642_8670" id="definedTypeIfExists_internal_8584_8612" title="Defined at line 235">definedTypeIfExists_internal</a>(s, <a href="../webdsl.stx#resolveType_3324_3335" id="resolveType_8616_8627" title="Defined at ../webdsl.stx line 105">resolveType</a>(<span id="s_8628_8629" title="Not referenced locally, nor via imports">s</span>, name)).

  <a href="#definedTypeIfExists_internal_8584_8612" id="definedTypeIfExists_internal_8642_8670" title="Referenced at line 233, 236, 237">definedTypeIfExists_internal</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8704_8708" title="Defined at ../webdsl.stx line 29">TYPE</a>))) -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8715_8719" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#definedTypeIfExists_internal_8642_8670" id="definedTypeIfExists_internal_8722_8750" title="Defined at line 235">definedTypeIfExists_internal</a>(_, [(_, (_, t))|_]) = <span id="t_8773_8774" title="Not referenced locally, nor via imports">t</span>.
  <a href="#definedTypeIfExists_internal_8642_8670" id="definedTypeIfExists_internal_8778_8806" title="Defined at line 235">definedTypeIfExists_internal</a>(s, []) = <a href="../types/built-ins.stx#entity_2883_2889" id="entity_8816_8822" title="Defined at ../types/built-ins.stx line 81">entity</a>(<span id="s_8823_8824" title="Not referenced locally, nor via imports">s</span>).

  <a href="#variableType_8870_8882" id="variableType_8830_8842" title="Referenced at line 240; ../webdsl-actions.stx line 107, 125, 229, 233, 240; ../webdsl-ui.stx line 301; ../ui/template-calls.stx line 137">variableType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_8863_8867" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#variableType_8830_8842" id="variableType_8870_8882" title="Defined at line 239">variableType</a>(<a href="#s_8916_8917" id="s_8883_8884" title="Referenced at line 241">s</a>, <a href="#x_8919_8920" id="x_8886_8887" title="Referenced at line 241, 241, 242">x</a>) = <a href="#t_8935_8936" id="t_8891_8892" title="Referenced at line 241">t</a> :- {<a href="#x'_8931_8933" id="x'_8897_8899" title="Referenced at line 241, 242">x'</a>}
    <a href="../webdsl.stx#resolveVar_13466_13476" id="resolveVar_8905_8915" title="Defined at ../webdsl.stx line 306">resolveVar</a>(<a href="#s_8883_8884" id="s_8916_8917" title="Defined at line 240">s</a>, <a href="#x_8886_8887" id="x_8919_8920" title="Defined at line 240">x</a>) == [(_, (<a href="#x'_8897_8899" id="x'_8931_8933" title="Defined at line 240">x'</a>, <a href="#t_8891_8892" id="t_8935_8936" title="Defined at line 240">t</a>))|_] | <span class="keyword">error</span> $[Variable [<a href="#x_8886_8887" id="x_8962_8963" title="Defined at line 240">x</a>] not defined], <span class="layout">// correct error message for tests</span>
    @<a href="#x_8886_8887" id="x_9019_9020" title="Defined at line 240">x</a>.<span class="keyword">ref</span> := <a href="#x'_8897_8899" id="x'_9028_9030" title="Defined at line 240">x'</a>.

  <a href="#propertyType_9075_9087" id="propertyType_9035_9047" title="Referenced at line 245; ../webdsl-ac.stx line 258, 260; ../webdsl-actions.stx line 264, 266; ../webdsl-ui.stx line 298; ../entities/generated-functions.stx line 31, 47">propertyType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9068_9072" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#propertyType_9035_9047" id="propertyType_9075_9087" title="Defined at line 244">propertyType</a>(<a href="#s_9155_9156" id="s_9088_9089" title="Referenced at line 246">s</a>, <a href="#x_9158_9159" id="x_9091_9092" title="Referenced at line 246, 248">x</a>) = <a href="#t_9198_9199" id="t_9096_9097" title="Referenced at line 247">t</a> :- { <a href="#ps_9115_9117" id="ps_9103_9105" title="Referenced at line 246, 247">ps</a> <a href="#x'_9194_9196" id="x'_9106_9108" title="Referenced at line 247, 248">x'</a> }
    <a href="#ps_9103_9105" id="ps_9115_9117" title="Defined at line 245">ps</a> == <a href="../entities/annotations.stx#withoutAnnotation_12053_12070" id="withoutAnnotation_9121_9138" title="Defined at ../entities/annotations.stx line 254">withoutAnnotation</a>(<a href="../webdsl.stx#resolveProperty_13857_13872" id="resolveProperty_9139_9154" title="Defined at ../webdsl.stx line 314">resolveProperty</a>(<a href="#s_9088_9089" id="s_9155_9156" title="Defined at line 245">s</a>, <a href="#x_9091_9092" id="x_9158_9159" title="Defined at line 245">x</a>), <a href="../entities/annotations.stx#OVERRIDABLE_340_351" id="OVERRIDABLE_9162_9173" title="Defined at ../entities/annotations.stx line 19">OVERRIDABLE</a>()),
    <a href="#ps_9103_9105" id="ps_9182_9184" title="Defined at line 245">ps</a> == [(_, (<a href="#x'_9106_9108" id="x'_9194_9196" title="Defined at line 245">x'</a>, <a href="#t_9096_9097" id="t_9198_9199" title="Defined at line 245">t</a>))],
    @<a href="#x_9091_9092" id="x_9209_9210" title="Defined at line 245">x</a>.<span class="keyword">ref</span> := <a href="#x'_9106_9108" id="x'_9218_9220" title="Defined at line 245">x'</a>.

  <a href="#propertyTypeNoRef_9270_9287" id="propertyTypeNoRef_9225_9242" title="Referenced at line 251; ../entities/annotations.stx line 228, 229">propertyTypeNoRef</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9263_9267" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#propertyTypeNoRef_9225_9242" id="propertyTypeNoRef_9270_9287" title="Defined at line 250">propertyTypeNoRef</a>(<a href="#s_9355_9356" id="s_9288_9289" title="Referenced at line 252">s</a>, <a href="#x_9358_9359" id="x_9291_9292" title="Referenced at line 252">x</a>) = <a href="#t_9398_9399" id="t_9296_9297" title="Referenced at line 253">t</a> :- { <a href="#ps_9315_9317" id="ps_9303_9305" title="Referenced at line 252, 253">ps</a> <a href="#x'_9394_9396" id="x'_9306_9308" title="Referenced at line 253">x'</a> }
    <a href="#ps_9303_9305" id="ps_9315_9317" title="Defined at line 251">ps</a> == <a href="../entities/annotations.stx#withoutAnnotation_12053_12070" id="withoutAnnotation_9321_9338" title="Defined at ../entities/annotations.stx line 254">withoutAnnotation</a>(<a href="../webdsl.stx#resolveProperty_13857_13872" id="resolveProperty_9339_9354" title="Defined at ../webdsl.stx line 314">resolveProperty</a>(<a href="#s_9288_9289" id="s_9355_9356" title="Defined at line 251">s</a>, <a href="#x_9291_9292" id="x_9358_9359" title="Defined at line 251">x</a>), <a href="../entities/annotations.stx#OVERRIDABLE_340_351" id="OVERRIDABLE_9362_9373" title="Defined at ../entities/annotations.stx line 19">OVERRIDABLE</a>()),
    <a href="#ps_9303_9305" id="ps_9382_9384" title="Defined at line 251">ps</a> == [(_, (<a href="#x'_9306_9308" id="x'_9394_9396" title="Defined at line 251">x'</a>, <a href="#t_9296_9297" id="t_9398_9399" title="Defined at line 251">t</a>))].

  <a href="#singleResult_9473_9485" id="singleResult_9407_9419" title="Referenced at line 256, 257, 258">singleResult</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9445_9449" title="Defined at ../webdsl.stx line 29">TYPE</a>))) * <span class="keyword">string</span> * <span class="keyword">string</span>
  <a href="#singleResult_9407_9419" id="singleResult_9473_9485" title="Defined at line 255">singleResult</a>([], <a href="#type_9519_9523" id="type_9490_9494" title="Referenced at line 256">type</a>, <a href="#x_9526_9527" id="x_9496_9497" title="Referenced at line 256, 256">x</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[[<a href="#type_9490_9494" id="type_9519_9523" title="Defined at line 256">type</a>] [<a href="#x_9496_9497" id="x_9526_9527" title="Defined at line 256">x</a>] is not defined] @<a href="#x_9496_9497" id="x_9546_9547" title="Defined at line 256">x</a>.
  <a href="#singleResult_9407_9419" id="singleResult_9551_9563" title="Defined at line 255">singleResult</a>([_ | [_ | _]], <a href="#type_9608_9612" id="type_9579_9583" title="Referenced at line 257">type</a>, <a href="#x_9615_9616" id="x_9585_9586" title="Referenced at line 257, 257">x</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[[<a href="#type_9579_9583" id="type_9608_9612" title="Defined at line 257">type</a>] [<a href="#x_9585_9586" id="x_9615_9616" title="Defined at line 257">x</a>] is defined multiple times] @<a href="#x_9585_9586" id="x_9646_9647" title="Defined at line 257">x</a>.
  <a href="#singleResult_9407_9419" id="singleResult_9651_9663" title="Defined at line 255">singleResult</a>(_, _, _).

  <a href="#pageType_9713_9721" id="pageType_9677_9685" title="Referenced at line 261; ../webdsl-ac.stx line 140, 143; ../ui/template-calls.stx line 86">pageType</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9706_9710" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#pageType_9677_9685" id="pageType_9713_9721" title="Defined at line 260">pageType</a>(<a href="#s_9756_9757" id="s_9722_9723" title="Referenced at line 262">s</a>, <a href="#p_9759_9760" id="p_9725_9726" title="Referenced at line 262, 263">p</a>) = <a href="#t_9775_9776" id="t_9730_9731" title="Referenced at line 262">t</a> :- {<a href="#p'_9771_9773" id="p'_9736_9738" title="Referenced at line 262, 263">p'</a>}
    <a href="../webdsl.stx#resolvePage_7943_7954" id="resolvePage_9744_9755" title="Defined at ../webdsl.stx line 196">resolvePage</a>(<a href="#s_9722_9723" id="s_9756_9757" title="Defined at line 261">s</a>, <a href="#p_9725_9726" id="p_9759_9760" title="Defined at line 261">p</a>) == [(_, (<a href="#p'_9736_9738" id="p'_9771_9773" title="Defined at line 261">p'</a>, <a href="#t_9730_9731" id="t_9775_9776" title="Defined at line 261">t</a>@<a href="#PAGE_624_628" id="PAGE_9777_9781" title="Defined at line 26">PAGE</a>(_, _)))|_], <span class="layout">// no fixed error message here to allow more specific error messages on higher predicates</span>
    @<a href="#p_9725_9726" id="p_9889_9890" title="Defined at line 261">p</a>.<span class="keyword">ref</span> := <a href="#p'_9736_9738" id="p'_9898_9900" title="Defined at line 261">p'</a>.

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#stripGenericType_9955_9971" id="stripGenericType_9921_9937" title="Referenced at line 268, 269, 269, 270, 271; ../webdsl-actions.stx line 179, 306, 328, 337, 338; ../webdsl-ui.stx line 226; ../actions/binops.stx line 129; ../ui/actions.stx line 158">stripGenericType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9940_9944" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_9948_9952" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#stripGenericType_9921_9937" id="stripGenericType_9955_9971" title="Defined at line 267">stripGenericType</a>(<a href="#t_10030_10031" id="t_9972_9973" title="Referenced at line 268">t</a>) = <a href="#UNTYPED_1251_1258" id="UNTYPED_9977_9984" title="Defined at line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Must be a list or set, [<a href="#t_9972_9973" id="t_10030_10031" title="Defined at line 268">t</a>] given].
  <a href="#stripGenericType_9921_9937" id="stripGenericType_10043_10059" title="Defined at line 267">stripGenericType</a>(<a href="#REF_939_942" id="REF_10060_10063" title="Defined at line 37">REF</a>(<span id="t_10064_10065" title="Not referenced locally, nor via imports">t</span>)) = <a href="#stripGenericType_9921_9937" id="stripGenericType_10070_10086" title="Defined at line 267">stripGenericType</a>(t).
  <a href="#stripGenericType_9921_9937" id="stripGenericType_10093_10109" title="Defined at line 267">stripGenericType</a>(<a href="#LIST_891_895" id="LIST_10110_10114" title="Defined at line 35">LIST</a>(<span id="t_10115_10116" title="Not referenced locally, nor via imports">t</span>)) = t.
  <a href="#stripGenericType_9921_9937" id="stripGenericType_10126_10142" title="Defined at line 267">stripGenericType</a>(<a href="#SET_915_918" id="SET_10143_10146" title="Defined at line 36">SET</a>(<span id="t_10147_10148" title="Not referenced locally, nor via imports">t</span>)) = t.

  <a href="#stripOptionalSetOrListType_10203_10229" id="stripOptionalSetOrListType_10159_10185" title="Referenced at line 274, 275, 276; ../webdsl-hql.stx line 140, 144; ../entities/annotations.stx line 157">stripOptionalSetOrListType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10188_10192" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10196_10200" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_10203_10229" title="Defined at line 273">stripOptionalSetOrListType</a>(<span id="t_10230_10231" title="Not referenced locally, nor via imports">t</span>) = t.
  <a href="#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_10240_10266" title="Defined at line 273">stripOptionalSetOrListType</a>(<a href="#LIST_891_895" id="LIST_10267_10271" title="Defined at line 35">LIST</a>(<span id="t_10272_10273" title="Not referenced locally, nor via imports">t</span>)) = t.
  <a href="#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_10283_10309" title="Defined at line 273">stripOptionalSetOrListType</a>(<a href="#SET_915_918" id="SET_10310_10313" title="Defined at line 36">SET</a>(t)) = <span id="t_10320_10321" title="Not referenced locally, nor via imports">t</span>.

  <a href="../actions/functions.stx#stripRefTypes_10263_10276" id="stripRefTypes_10326_10339" title="Referenced at ../actions/functions.stx line 197, 210, 211">stripRefTypes</a> <span class="keyword">maps</span> <a href="#stripRefType_10379_10391" id="stripRefType_10345_10357" title="Defined at line 279">stripRefType</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#stripRefType_10345_10357" id="stripRefType_10379_10391" title="Referenced at line 278, 280, 281, 281">stripRefType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10394_10398" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10402_10406" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#stripRefType_10379_10391" id="stripRefType_10409_10421" title="Defined at line 279">stripRefType</a>(<span id="t_10422_10423" title="Not referenced locally, nor via imports">t</span>) = t.
  <a href="#stripRefType_10379_10391" id="stripRefType_10432_10444" title="Defined at line 279">stripRefType</a>(<a href="#REF_939_942" id="REF_10445_10448" title="Defined at line 37">REF</a>(<span id="t_10449_10450" title="Not referenced locally, nor via imports">t</span>)) = <a href="#stripRefType_10379_10391" id="stripRefType_10455_10467" title="Defined at line 279">stripRefType</a>(t).

  <a href="#typed_2254_2259" id="typed_10475_10480" title="Referenced at line 91, 284; ../webdsl-ui.stx line 176; ../actions/functions.stx line 67; ../ui/attributes.stx line 34">typed</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_10491_10494" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>
  <a href="#typed_10475_10480" id="typed_10497_10502" title="Defined at line 283">typed</a>(<a href="#s_10536_10537" id="s_10503_10504" title="Referenced at line 284">s</a>, <a href="#exp_10539_10542" id="exp_10506_10509" title="Referenced at line 284">exp</a>) :- <a href="#inequalType_10560_10571" id="inequalType_10514_10525" title="Defined at line 286">inequalType</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_10526_10535" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_10503_10504" id="s_10536_10537" title="Defined at line 284">s</a>, <a href="#exp_10506_10509" id="exp_10539_10542" title="Defined at line 284">exp</a>), <a href="#UNTYPED_1251_1258" id="UNTYPED_10545_10552" title="Defined at line 49">UNTYPED</a>()).

  <a href="#inequalType_2336_2347" id="inequalType_10560_10571" title="Referenced at line 93, 284, 287; ../webdsl-actions.stx line 51, 64, 82, 217, 218, 223; ../webdsl-entities.stx line 121, 122, 123; ../actions/binops.stx line 24, 31, 39, 47, 55; ../actions/functions.stx line 123, 142; ../ui/actions.stx line 26, 39">inequalType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10574_10578" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10581_10585" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#inequalType_10560_10571" id="inequalType_10588_10599" title="Defined at line 286">inequalType</a>(<a href="#T1_10622_10624" id="T1_10600_10602" title="Referenced at line 287">T1</a>, <a href="#T2_10626_10628" id="T2_10604_10606" title="Referenced at line 287">T2</a>) :- <a href="#equalTypeB_10725_10735" id="equalTypeB_10611_10621" title="Defined at line 292">equalTypeB</a>(<a href="#T1_10600_10602" id="T1_10622_10624" title="Defined at line 287">T1</a>, <a href="#T2_10604_10606" id="T2_10626_10628" title="Defined at line 287">T2</a>) == <a href="../webdsl.stx#FALSE_844_849" id="FALSE_10633_10638" title="Defined at ../webdsl.stx line 35">FALSE</a>().

  <a href="#equalType_10671_10680" id="equalType_10645_10654" title="Referenced at line 290; ../webdsl-ac.stx line 107, 115, 126, 130, 198; ../webdsl-actions.stx line 150, 158, 194, 195, 210, 224; ../webdsl-ui.stx line 179, 243, 244; ../entities/annotations.stx line 97; ../ui/attributes.stx line 36, 40">equalType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10657_10661" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10664_10668" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#equalType_10645_10654" id="equalType_10671_10680" title="Defined at line 289">equalType</a>(<a href="#T1_10703_10705" id="T1_10681_10683" title="Referenced at line 290">T1</a>, <a href="#T2_10707_10709" id="T2_10685_10687" title="Referenced at line 290">T2</a>) :- <a href="#equalTypeB_10725_10735" id="equalTypeB_10692_10702" title="Defined at line 292">equalTypeB</a>(<a href="#T1_10681_10683" id="T1_10703_10705" title="Defined at line 290">T1</a>, <a href="#T2_10685_10687" id="T2_10707_10709" title="Defined at line 290">T2</a>) == <a href="../webdsl.stx#TRUE_828_832" id="TRUE_10714_10718" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#equalTypeB_10611_10621" id="equalTypeB_10725_10735" title="Referenced at line 287, 290, 293, 294; ../webdsl-actions.stx line 169, 170; ../webdsl-ui.stx line 215, 216; ../entities/annotations.stx line 132, 133, 145, 146, 147; ../ui/actions.stx line 146, 147">equalTypeB</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10738_10742" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10745_10749" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_10753_10757" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#equalTypeB_10725_10735" id="equalTypeB_10760_10770" title="Defined at line 292">equalTypeB</a>(T, <span id="T_10774_10775" title="Not referenced locally, nor via imports">T</span>) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_10779_10783" title="Defined at ../webdsl.stx line 34">TRUE</a>().
  <a href="#equalTypeB_10725_10735" id="equalTypeB_10789_10799" title="Defined at line 292">equalTypeB</a>(_, _) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_10808_10813" title="Defined at ../webdsl.stx line 35">FALSE</a>().

<span class="keyword">rules</span>

  <a href="#ppType_10853_10859" id="ppType_10827_10833" title="Referenced at line 299, 300, 301, 302, 303, 304, 305, 307, 308, 309, 310, 311; ../webdsl-entities.stx line 131">ppType</a> : <a href="../webdsl.stx#TYPE_669_673" id="TYPE_10836_10840" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <span class="keyword">string</span>
  <a href="#ppType_10827_10833" id="ppType_10853_10859" title="Defined at line 298">ppType</a>(<a href="#t_10952_10953" id="t_10860_10861" title="Referenced at line 299">t</a>) = "&lt;unknown pretty print type&gt;" :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Couldn't pretty-print type [<a href="#t_10860_10861" id="t_10952_10953" title="Defined at line 299">t</a>]].
  <a href="#ppType_10827_10833" id="ppType_10959_10965" title="Defined at line 298">ppType</a>(<a href="#ENTITY_444_450" id="ENTITY_10966_10972" title="Defined at line 20">ENTITY</a>(e, _)) = <span id="e_10982_10983" title="Not referenced locally, nor via imports">e</span>.
  <a href="#ppType_10827_10833" id="ppType_10987_10993" title="Defined at line 298">ppType</a>(<a href="#STATICENTITY_486_498" id="STATICENTITY_10994_11006" title="Defined at line 21">STATICENTITY</a>(<span id="e_11007_11008" title="Not referenced locally, nor via imports">e</span>, _)) = e.
  <a href="#ppType_10827_10833" id="ppType_11021_11027" title="Defined at line 298">ppType</a>(<a href="#NATIVECLASS_529_540" id="NATIVECLASS_11028_11039" title="Defined at line 23">NATIVECLASS</a>(nc, _)) = <span id="nc_11050_11052" title="Not referenced locally, nor via imports">nc</span>.
  <a href="#ppType_10827_10833" id="ppType_11056_11062" title="Defined at line 298">ppType</a>(<a href="#STATICNATIVECLASS_576_593" id="STATICNATIVECLASS_11063_11080" title="Defined at line 24">STATICNATIVECLASS</a>(<span id="nc_11081_11083" title="Not referenced locally, nor via imports">nc</span>, _)) = nc.
  <a href="#ppType_10827_10833" id="ppType_11097_11103" title="Defined at line 298">ppType</a>(<a href="#BUILTINTYPE_1001_1012" id="BUILTINTYPE_11104_11115" title="Defined at line 40">BUILTINTYPE</a>(<span id="t_11116_11117" title="Not referenced locally, nor via imports">t</span>, _)) = t.
  <a href="#ppType_10827_10833" id="ppType_11130_11136" title="Defined at line 298">ppType</a>(<a href="#STATICBUILTINTYPE_1042_1059" id="STATICBUILTINTYPE_11137_11154" title="Defined at line 41">STATICBUILTINTYPE</a>(t, _)) = <span id="t_11164_11165" title="Not referenced locally, nor via imports">t</span>.

  <a href="#ppType_10827_10833" id="ppType_11170_11176" title="Defined at line 298">ppType</a>(<a href="#REGEX_1139_1144" id="REGEX_11177_11182" title="Defined at line 45">REGEX</a>()) = "Regex".
  <a href="#ppType_10827_10833" id="ppType_11199_11205" title="Defined at line 298">ppType</a>(<a href="#VOID_1167_1171" id="VOID_11206_11210" title="Defined at line 46">VOID</a>()) = "Void".
  <a href="#ppType_10827_10833" id="ppType_11226_11232" title="Defined at line 298">ppType</a>(<a href="#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_11233_11249" title="Defined at line 47">TEMPLATEELEMENTS</a>()) = "TemplateElements".
  <a href="#ppType_10827_10833" id="ppType_11277_11283" title="Defined at line 298">ppType</a>(<a href="#NULL_1223_1227" id="NULL_11284_11288" title="Defined at line 48">NULL</a>()) = "Null".
  <a href="#ppType_10827_10833" id="ppType_11304_11310" title="Defined at line 298">ppType</a>(<a href="#UNTYPED_1251_1258" id="UNTYPED_11311_11318" title="Defined at line 49">UNTYPED</a>()) = "UNTYPED".

</code></pre></td></tr></tbody></table></div>