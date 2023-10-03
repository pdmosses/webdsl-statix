---
title: annotations.stx
hide:
  - toc
---

# `annotations.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/annotations.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/entities/annotations.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/entities/annotations.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../built-ins.stx#static-semantics/entities/annotations_90_127" id="static-semantics/entities/annotations_7_44" title="Referenced at ../built-ins.stx line 6; ../generated-functions.stx line 4; ../../webdsl-ac.stx line 6; ../../webdsl-actions.stx line 9; ../../webdsl-entities.stx line 6; ../../webdsl-expand.stx line 4; ../../webdsl-types.stx line 4; ../../webdsl-ui.stx line 6; ../../webdsl.stx line 11; ../../ui/actions.stx line 6; ../../ui/template-calls.stx line 6">static-semantics/entities/annotations</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_56_88" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_92_123" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-entities.stx#static-semantics/webdsl-entities_7_39" id="static-semantics/webdsl-entities_126_158" title="Defined at ../../webdsl-entities.stx line 1">static-semantics/webdsl-entities</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_161_190" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_193_216" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#ANNOTATION_325_335" id="ANNOTATION_241_251" title="Referenced at line 18, 19, 20, 21, 22, 23, 26, 27, 30, 36, 40, 47, 47, 54, 54, 66, 70, 240, 240, 245, 245, 248, 248, 251, 254, 258, 262, 270">ANNOTATION</a>

  <span class="keyword">constructors</span>
    <span class="layout">// annotations on a property level</span>
    <a href="#ID_4197_4199" id="ID_311_313" title="Referenced at line 95, 210, 221; ../generated-functions.stx line 30">ID</a>          : <a href="#ANNOTATION_241_251" id="ANNOTATION_325_335" title="Defined at line 14">ANNOTATION</a>
    <a href="../built-ins.stx#OVERRIDABLE_762_773" id="OVERRIDABLE_340_351" title="Referenced at ../built-ins.stx line 23; ../../webdsl-actions.stx line 97; ../../webdsl-types.stx line 246, 252">OVERRIDABLE</a> : <a href="#ANNOTATION_241_251" id="ANNOTATION_354_364" title="Defined at line 14">ANNOTATION</a>
    <a href="#NAME_4629_4633" id="NAME_369_373" title="Referenced at line 102, 181, 213; ../built-ins.stx line 23">NAME</a>        : <a href="#ANNOTATION_241_251" id="ANNOTATION_383_393" title="Defined at line 14">ANNOTATION</a>
    <a href="#TRANSIENT_4115_4124" id="TRANSIENT_398_407" title="Referenced at line 92">TRANSIENT</a>   : <a href="#ANNOTATION_241_251" id="ANNOTATION_412_422" title="Defined at line 14">ANNOTATION</a>
    <a href="#DERIVED_4758_4765" id="DERIVED_427_434" title="Referenced at line 106, 224, 227, 236; ../built-ins.stx line 23; ../../webdsl-actions.stx line 71, 78, 84, 203; ../../webdsl-entities.stx line 86, 91, 135; ../../webdsl-ui.stx line 253; ../../webdsl.stx line 336, 341; ../../ui/actions.stx line 152, 162, 171, 181">DERIVED</a>     : <a href="#ANNOTATION_241_251" id="ANNOTATION_441_451" title="Defined at line 14">ANNOTATION</a>
    <a href="#INVERSE_4998_5005" id="INVERSE_456_463" title="Referenced at line 110, 125, 138, 151, 217">INVERSE</a>     : <a href="#ANNOTATION_241_251" id="ANNOTATION_470_480" title="Defined at line 14">ANNOTATION</a>

    <span class="layout">// annotations on entity level</span>
    <a href="#SESSIONENTITY_9710_9723" id="SESSIONENTITY_521_534" title="Referenced at line 207; ../../webdsl-ac.stx line 26; ../../webdsl-entities.stx line 45">SESSIONENTITY</a> : <a href="#ANNOTATION_241_251" id="ANNOTATION_537_547" title="Defined at line 14">ANNOTATION</a>
    <a href="#SUBENTITY_9591_9600" id="SUBENTITY_552_561" title="Referenced at line 204; ../../webdsl-entities.stx line 30">SUBENTITY</a>     : <a href="#ANNOTATION_241_251" id="ANNOTATION_568_578" title="Defined at line 14">ANNOTATION</a>

  <span class="keyword">relations</span>
    <a href="#annotation_843_853" id="annotation_596_606" title="Referenced at line 38, 42, 49, 56">annotation</a> : <span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_618_628" title="Defined at line 14">ANNOTATION</a>

<span class="keyword">rules</span> <span class="layout">// annotation declaration and resolving</span>

  <span class="layout">// property level</span>
  <a href="../built-ins.stx#declareAnnotations_727_745" id="declareAnnotations_699_717" title="Referenced at ../built-ins.stx line 23">declareAnnotations</a> <span class="keyword">maps</span> <a href="#declareAnnotation_758_775" id="declareAnnotation_723_740" title="Defined at line 36">declareAnnotation</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#declareAnnotation_723_740" id="declareAnnotation_758_775" title="Referenced at line 35, 37, 68, 92, 95, 102, 110, 125, 138; ../../webdsl-actions.stx line 71, 78, 84, 203; ../../webdsl-entities.stx line 86, 91, 135; ../../webdsl-ui.stx line 253; ../../webdsl.stx line 336, 341; ../../ui/actions.stx line 152, 162, 171, 181">declareAnnotation</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_795_805" title="Defined at line 14">ANNOTATION</a>
  <a href="#declareAnnotation_758_775" id="declareAnnotation_808_825" title="Defined at line 36">declareAnnotation</a>(<a href="#s_863_864" id="s_826_827" title="Referenced at line 38">s</a>, <a href="#p_854_855" id="p_829_830" title="Referenced at line 38">p</a>, <a href="#a_857_858" id="a_832_833" title="Referenced at line 38">a</a>) :-
    !<a href="#annotation_596_606" id="annotation_843_853" title="Defined at line 30">annotation</a>[<a href="#p_829_830" id="p_854_855" title="Defined at line 37">p</a>, <a href="#a_832_833" id="a_857_858" title="Defined at line 37">a</a>] <span class="keyword">in</span> <a href="#s_826_827" id="s_863_864" title="Defined at line 37">s</a>.

  <a href="#resolveAnnotation_946_963" id="resolveAnnotation_869_886" title="Referenced at line 41, 71, 106, 151, 217, 224, 227, 235, 259, 263">resolveAnnotation</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_930_940" title="Defined at line 14">ANNOTATION</a>)))
  <a href="#resolveAnnotation_869_886" id="resolveAnnotation_946_963" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_1173_1174" id="s_964_965" title="Referenced at line 45">s</a>, <a href="#x_1060_1061" id="x_967_968" title="Referenced at line 43">x</a>) = <a href="#ps_1179_1181" id="ps_972_974" title="Referenced at line 45">ps</a> :-
    <span class="keyword">query</span> <a href="#annotation_596_606" id="annotation_988_998" title="Defined at line 30">annotation</a> <span class="keyword">filter</span> <a href="../../webdsl.stx#P_1226_1227" id="P_1006_1007" title="Defined at ../../webdsl.stx line 45">P</a>* <a href="../../webdsl.stx#F_1290_1291" id="F_1009_1010" title="Defined at ../../webdsl.stx line 46">F</a>* <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1012_1018" title="Defined at ../../webdsl.stx line 47">EXTEND</a>?
                     <span class="keyword">and</span> { <a href="#x'_1053_1055" id="x'_1047_1049" title="Referenced at line 43">x'</a> :- <a href="#x'_1047_1049" id="x'_1053_1055" title="Defined at line 43">x'</a> == (<a href="#x_967_968" id="x_1060_1061" title="Defined at line 41">x</a>, _) }
                     <span class="keyword">min</span> $ &lt; <a href="../../webdsl.stx#P_1226_1227" id="P_1097_1098" title="Defined at ../../webdsl.stx line 45">P</a>, $ &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1104_1105" title="Defined at ../../webdsl.stx line 46">F</a>, $ &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1111_1117" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1119_1120" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1123_1124" title="Defined at ../../webdsl.stx line 46">F</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1126_1127" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1130_1136" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#F_1290_1291" id="F_1138_1139" title="Defined at ../../webdsl.stx line 46">F</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1142_1148" title="Defined at ../../webdsl.stx line 47">EXTEND</a>
                     <span class="keyword">in</span> <a href="#s_964_965" id="s_1173_1174" title="Defined at line 41">s</a> |-&gt; <a href="#ps_972_974" id="ps_1179_1181" title="Defined at line 41">ps</a>.

  <a href="#resolveAnnotationByAnno_1273_1296" id="resolveAnnotationByAnno_1186_1209" title="Referenced at line 48, 210, 213, 221; ../generated-functions.stx line 30">resolveAnnotationByAnno</a> : <span class="keyword">scope</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_1220_1230" title="Defined at line 14">ANNOTATION</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_1257_1267" title="Defined at line 14">ANNOTATION</a>)))
  <a href="#resolveAnnotationByAnno_1186_1209" id="resolveAnnotationByAnno_1273_1296" title="Defined at line 47">resolveAnnotationByAnno</a>(<a href="#s_1506_1507" id="s_1297_1298" title="Referenced at line 52">s</a>, <a href="#a_1396_1397" id="a_1300_1301" title="Referenced at line 50">a</a>) = <a href="#ps_1512_1514" id="ps_1305_1307" title="Referenced at line 52">ps</a> :-
    <span class="keyword">query</span> <a href="#annotation_596_606" id="annotation_1321_1331" title="Defined at line 30">annotation</a> <span class="keyword">filter</span> <a href="../../webdsl.stx#P_1226_1227" id="P_1339_1340" title="Defined at ../../webdsl.stx line 45">P</a>* <a href="../../webdsl.stx#F_1290_1291" id="F_1342_1343" title="Defined at ../../webdsl.stx line 46">F</a>* <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1345_1351" title="Defined at ../../webdsl.stx line 47">EXTEND</a>?
                     <span class="keyword">and</span> { <a href="#x'_1386_1388" id="x'_1380_1382" title="Referenced at line 50">x'</a> :- <a href="#x'_1380_1382" id="x'_1386_1388" title="Defined at line 50">x'</a> == (_, <a href="#a_1300_1301" id="a_1396_1397" title="Defined at line 48">a</a>) }
                     <span class="keyword">min</span> $ &lt; <a href="../../webdsl.stx#P_1226_1227" id="P_1430_1431" title="Defined at ../../webdsl.stx line 45">P</a>, $ &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1437_1438" title="Defined at ../../webdsl.stx line 46">F</a>, $ &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1444_1450" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1452_1453" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1456_1457" title="Defined at ../../webdsl.stx line 46">F</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1459_1460" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1463_1469" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#F_1290_1291" id="F_1471_1472" title="Defined at ../../webdsl.stx line 46">F</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1475_1481" title="Defined at ../../webdsl.stx line 47">EXTEND</a>
                     <span class="keyword">in</span> <a href="#s_1297_1298" id="s_1506_1507" title="Defined at line 48">s</a> |-&gt; <a href="#ps_1305_1307" id="ps_1512_1514" title="Defined at line 48">ps</a>.

  <a href="#resolveClosestAnnotationByAnno_1613_1643" id="resolveClosestAnnotationByAnno_1519_1549" title="Referenced at line 55, 181">resolveClosestAnnotationByAnno</a> : <span class="keyword">scope</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_1560_1570" title="Defined at line 14">ANNOTATION</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_1597_1607" title="Defined at line 14">ANNOTATION</a>)))
  <a href="#resolveClosestAnnotationByAnno_1519_1549" id="resolveClosestAnnotationByAnno_1613_1643" title="Defined at line 54">resolveClosestAnnotationByAnno</a>(<a href="#s_2032_2033" id="s_1644_1645" title="Referenced at line 63">s</a>, <a href="#a_1760_1761" id="a_1647_1648" title="Referenced at line 57">a</a>) = <a href="#ps_2038_2040" id="ps_1652_1654" title="Referenced at line 63">ps</a> :-
    <span class="keyword">query</span> <a href="#annotation_596_606" id="annotation_1668_1678" title="Defined at line 30">annotation</a> <span class="keyword">filter</span> <a href="../../webdsl.stx#P_1226_1227" id="P_1686_1687" title="Defined at ../../webdsl.stx line 45">P</a>* <a href="../../webdsl.stx#F_1290_1291" id="F_1689_1690" title="Defined at ../../webdsl.stx line 46">F</a>* <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1692_1698" title="Defined at ../../webdsl.stx line 47">EXTEND</a>? <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1700_1707" title="Defined at ../../webdsl.stx line 48">INHERIT</a>* <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1709_1715" title="Defined at ../../webdsl.stx line 47">EXTEND</a>?
                     <span class="keyword">and</span> { <a href="#x'_1750_1752" id="x'_1744_1746" title="Referenced at line 57">x'</a> :- <a href="#x'_1744_1746" id="x'_1750_1752" title="Defined at line 57">x'</a> == (_, <a href="#a_1647_1648" id="a_1760_1761" title="Defined at line 55">a</a>) }
                     <span class="keyword">min</span> $ &lt; <a href="../../webdsl.stx#P_1226_1227" id="P_1794_1795" title="Defined at ../../webdsl.stx line 45">P</a>, $ &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1801_1802" title="Defined at ../../webdsl.stx line 46">F</a>, $ &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1808_1814" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, $ &lt; <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1820_1827" title="Defined at ../../webdsl.stx line 48">INHERIT</a>,
                         <a href="../../webdsl.stx#P_1226_1227" id="P_1854_1855" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#F_1290_1291" id="F_1858_1859" title="Defined at ../../webdsl.stx line 46">F</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1861_1862" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1865_1871" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#P_1226_1227" id="P_1873_1874" title="Defined at ../../webdsl.stx line 45">P</a> &lt; <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1877_1884" title="Defined at ../../webdsl.stx line 48">INHERIT</a>,
                         <a href="../../webdsl.stx#F_1290_1291" id="F_1911_1912" title="Defined at ../../webdsl.stx line 46">F</a> &lt; <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1915_1921" title="Defined at ../../webdsl.stx line 47">EXTEND</a>, <a href="../../webdsl.stx#F_1290_1291" id="F_1923_1924" title="Defined at ../../webdsl.stx line 46">F</a> &lt; <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1927_1934" title="Defined at ../../webdsl.stx line 48">INHERIT</a>,
                         <a href="../../webdsl.stx#EXTEND_1385_1391" id="EXTEND_1961_1967" title="Defined at ../../webdsl.stx line 47">EXTEND</a> &lt; <a href="../../webdsl.stx#INHERIT_1445_1452" id="INHERIT_1970_1977" title="Defined at ../../webdsl.stx line 48">INHERIT</a>
                     <span class="keyword">and true</span>
                     <span class="keyword">in</span> <a href="#s_1644_1645" id="s_2032_2033" title="Defined at line 55">s</a> |-&gt; <a href="#ps_1652_1654" id="ps_2038_2040" title="Defined at line 55">ps</a>.

  <span class="layout">// entity level</span>
  <a href="#declareEntityAnnotation_2110_2133" id="declareEntityAnnotation_2063_2086" title="Referenced at line 67; ../../webdsl-ac.stx line 26; ../../webdsl-entities.stx line 30, 45">declareEntityAnnotation</a> : <span class="keyword">scope</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_2097_2107" title="Defined at line 14">ANNOTATION</a>
  <a href="#declareEntityAnnotation_2063_2086" id="declareEntityAnnotation_2110_2133" title="Defined at line 66">declareEntityAnnotation</a>(<a href="#s_2165_2166" id="s_2134_2135" title="Referenced at line 68">s</a>, <a href="#a_2179_2180" id="a_2137_2138" title="Referenced at line 68">a</a>) :-
    <a href="#declareAnnotation_758_775" id="declareAnnotation_2147_2164" title="Defined at line 36">declareAnnotation</a>(<a href="#s_2134_2135" id="s_2165_2166" title="Defined at line 67">s</a>, "_ENTITY", <a href="#a_2137_2138" id="a_2179_2180" title="Defined at line 67">a</a>).

  <a href="#resolveEntityAnnotation_2260_2283" id="resolveEntityAnnotation_2186_2209" title="Referenced at line 71, 204, 207">resolveEntityAnnotation</a> : <span class="keyword">scope</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_2244_2254" title="Defined at line 14">ANNOTATION</a>)))
  <a href="#resolveEntityAnnotation_2186_2209" id="resolveEntityAnnotation_2260_2283" title="Defined at line 70">resolveEntityAnnotation</a>(s) = <a href="#resolveAnnotation_869_886" id="resolveAnnotation_2289_2306" title="Defined at line 40">resolveAnnotation</a>(<span id="s_2307_2308" title="Not referenced locally, nor via imports">s</span>, "_ENTITY").

<span class="keyword">rules</span> <span class="layout">// annotations</span>

  <a href="../../webdsl-entities.stx#annotationsOk_5493_5506" id="annotationsOk_2347_2360" title="Referenced at ../../webdsl-entities.stx line 126, 136">annotationsOk</a> <span class="keyword">maps</span> <a href="#annotationOk_2399_2411" id="annotationOk_2366_2378" title="Defined at line 76">annotationOk</a>(*, *, *, <span class="keyword">list</span>(*))
  <a href="#annotationOk_2366_2378" id="annotationOk_2399_2411" title="Referenced at line 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 91, 94, 101, 105, 109, 124, 137, 150, 154, 155, 156, 164, 168, 169, 188, 189, 190, 191, 192">annotationOk</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2431_2435" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#Annotation_220_230" id="Annotation_2438_2448" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 14">Annotation</a>
  <a href="#annotationOk_2399_2411" id="annotationOk_2451_2463" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_2573_2574" id="a_2473_2474" title="Referenced at line 77">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#SimpleAnno_1869_1879" id="SimpleAnno_2475_2485" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 52">SimpleAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_2473_2474" id="a_2573_2574" title="Defined at line 77">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_2578_2590" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_2709_2710" id="a_2600_2601" title="Referenced at line 78">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InverseSlaveAnno_2106_2122" id="InverseSlaveAnno_2602_2618" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 59">InverseSlaveAnno</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_2600_2601" id="a_2709_2710" title="Defined at line 78">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_2714_2726" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_2836_2837" id="a_2736_2737" title="Referenced at line 79">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InlineAnno_2193_2203" id="InlineAnno_2738_2748" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 61">InlineAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_2736_2737" id="a_2836_2837" title="Defined at line 79">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_2841_2853" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_2963_2964" id="a_2863_2864" title="Referenced at line 80">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#SelectAnno_2233_2243" id="SelectAnno_2865_2875" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 62">SelectAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_2863_2864" id="a_2963_2964" title="Defined at line 80">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_2968_2980" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3093_3094" id="a_2990_2991" title="Referenced at line 81">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#IndexEmptyAnno_2471_2485" id="IndexEmptyAnno_2992_3006" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 69">IndexEmptyAnno</a>()) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_2990_2991" id="a_3093_3094" title="Defined at line 81">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3098_3110" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3219_3220" id="a_3120_3121" title="Referenced at line 82">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#IndexAnno_2503_2512" id="IndexAnno_3122_3131" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 70">IndexAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3120_3121" id="a_3219_3220" title="Defined at line 82">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3224_3236" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3349_3350" id="a_3246_3247" title="Referenced at line 83">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#CollationAnno_2537_2550" id="CollationAnno_3248_3261" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 71">CollationAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3246_3247" id="a_3349_3350" title="Defined at line 83">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3354_3366" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3477_3478" id="a_3376_3377" title="Referenced at line 84">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#IdErrorAnno_2574_2585" id="IdErrorAnno_3378_3389" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 72">IdErrorAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3376_3377" id="a_3477_3478" title="Defined at line 84">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3482_3494" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3610_3611" id="a_3504_3505" title="Referenced at line 85">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#IdEmptyErrorAnno_2613_2629" id="IdEmptyErrorAnno_3506_3522" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 73">IdEmptyErrorAnno</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3504_3505" id="a_3610_3611" title="Defined at line 85">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_3616_3628" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3750_3751" id="a_3638_3639" title="Referenced at line 87">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchableAnnoBoost_4491_4510" id="SearchableAnnoBoost_3640_3659" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 152">SearchableAnnoBoost</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3638_3639" id="a_3750_3751" title="Defined at line 87">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3755_3767" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_3892_3893" id="a_3777_3778" title="Referenced at line 88">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchableAnno2Annotation_4554_4579" id="SearchableAnno2Annotation_3779_3804" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 153">SearchableAnno2Annotation</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3777_3778" id="a_3892_3893" title="Defined at line 88">a</a>.
  <a href="#annotationOk_2399_2411" id="annotationOk_3897_3909" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="#a_4039_4040" id="a_3919_3920" title="Referenced at line 89">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchNamespaceAnno2Annotation_4615_4645" id="SearchNamespaceAnno2Annotation_3921_3951" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 154">SearchNamespaceAnno2Annotation</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Static analysis not implemented for this annotation] @<a href="#a_3919_3920" id="a_4039_4040" title="Defined at line 89">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_4045_4057" title="Defined at line 76">annotationOk</a>(<a href="#s_4109_4110" id="s_4058_4059" title="Referenced at line 92">s</a>, <a href="#p_4112_4113" id="p_4061_4062" title="Referenced at line 92">p</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#TransientAnno_1913_1926" id="TransientAnno_4067_4080" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 53">TransientAnno</a>()) :-
    <a href="#declareAnnotation_758_775" id="declareAnnotation_4091_4108" title="Defined at line 36">declareAnnotation</a>(<a href="#s_4058_4059" id="s_4109_4110" title="Defined at line 91">s</a>, <a href="#p_4061_4062" id="p_4112_4113" title="Defined at line 91">p</a>, <a href="#TRANSIENT_398_407" id="TRANSIENT_4115_4124" title="Defined at line 21">TRANSIENT</a>()).

  <a href="#annotationOk_2399_2411" id="annotationOk_4132_4144" title="Defined at line 76">annotationOk</a>(<a href="#s_4191_4192" id="s_4145_4146" title="Referenced at line 95, 96, 97, 98, 99">s</a>, <a href="#p_4194_4195" id="p_4148_4149" title="Referenced at line 95">p</a>, <a href="#t_4311_4312" id="t_4151_4152" title="Referenced at line 97">t</a>, <a href="#a_4294_4295" id="a_4154_4155" title="Referenced at line 96, 97, 98, 99">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#IdAnno_1944_1950" id="IdAnno_4156_4162" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 54">IdAnno</a>()) :-
    <a href="#declareAnnotation_758_775" id="declareAnnotation_4173_4190" title="Defined at line 36">declareAnnotation</a>(<a href="#s_4145_4146" id="s_4191_4192" title="Defined at line 94">s</a>, <a href="#p_4148_4149" id="p_4194_4195" title="Defined at line 94">p</a>, <a href="#ID_311_313" id="ID_4197_4199" title="Defined at line 18">ID</a>()),
    <a href="#noDuplicateIdAnnotations_9731_9755" id="noDuplicateIdAnnotations_4208_4232" title="Defined at line 209">noDuplicateIdAnnotations</a>(<a href="#s_4145_4146" id="s_4233_4234" title="Defined at line 94">s</a>) | <span class="keyword">error</span> $[Only one id annotatation allowed in an entity] @<a href="#a_4154_4155" id="a_4294_4295" title="Defined at line 94">a</a>,
    <a href="../../webdsl-types.stx#equalType_10645_10654" id="equalType_4301_4310" title="Defined at ../../webdsl-types.stx line 289">equalType</a>(<a href="#t_4151_4152" id="t_4311_4312" title="Defined at line 94">t</a>, <a href="../../types/built-ins.stx#string_1822_1828" id="string_4314_4320" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_4145_4146" id="s_4321_4322" title="Defined at line 94">s</a>))     | <span class="keyword">error</span> $[Id property must be of type String] @<a href="#a_4154_4155" id="a_4376_4377" title="Defined at line 94">a</a>,
    <a href="#isTopLevelEntity_9491_9507" id="isTopLevelEntity_4383_4399" title="Defined at line 203">isTopLevelEntity</a>(<a href="#s_4145_4146" id="s_4400_4401" title="Defined at line 94">s</a>)         | <span class="keyword">error</span> $[Id annotation not allowed in sub-entities] @<a href="#a_4154_4155" id="a_4465_4466" title="Defined at line 94">a</a>,
    <a href="#isNoSessionEntity_9608_9625" id="isNoSessionEntity_4472_4489" title="Defined at line 206">isNoSessionEntity</a>(<a href="#s_4145_4146" id="s_4490_4491" title="Defined at line 94">s</a>)        | <span class="keyword">error</span> $[Id annotation not allowed in session entities] @<a href="#a_4154_4155" id="a_4558_4559" title="Defined at line 94">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_4564_4576" title="Defined at line 76">annotationOk</a>(<a href="#s_4623_4624" id="s_4577_4578" title="Referenced at line 102, 103">s</a>, <a href="#p_4626_4627" id="p_4580_4581" title="Referenced at line 102">p</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#NameAnno_1968_1976" id="NameAnno_4586_4594" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 55">NameAnno</a>()) :-
    <a href="#declareAnnotation_758_775" id="declareAnnotation_4605_4622" title="Defined at line 36">declareAnnotation</a>(<a href="#s_4577_4578" id="s_4623_4624" title="Defined at line 101">s</a>, <a href="#p_4580_4581" id="p_4626_4627" title="Defined at line 101">p</a>, <a href="#NAME_369_373" id="NAME_4629_4633" title="Defined at line 20">NAME</a>()),
    <a href="#noMultipleNameAnnotations_9841_9866" id="noMultipleNameAnnotations_4642_4667" title="Defined at line 212">noMultipleNameAnnotations</a>(<a href="#s_4577_4578" id="s_4668_4669" title="Defined at line 101">s</a>).

  <a href="#annotationOk_2399_2411" id="annotationOk_4675_4687" title="Defined at line 76">annotationOk</a>(<a href="#s_4751_4752" id="s_4688_4689" title="Referenced at line 106">s</a>, <a href="#p_4754_4755" id="p_4691_4692" title="Referenced at line 106">p</a>, _, <a href="#a_4837_4838" id="a_4697_4698" title="Referenced at line 106">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#CacheAnno_1994_2003" id="CacheAnno_4699_4708" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 56">CacheAnno</a>()) :-
    <a href="#hasAnnotation_11599_11612" id="hasAnnotation_4719_4732" title="Defined at line 245">hasAnnotation</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_4733_4750" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_4688_4689" id="s_4751_4752" title="Defined at line 105">s</a>, <a href="#p_4691_4692" id="p_4754_4755" title="Defined at line 105">p</a>), <a href="#DERIVED_427_434" id="DERIVED_4758_4765" title="Defined at line 22">DERIVED</a>()) | <span class="keyword">error</span> $[cached annotation can only be set on derived properties] @<a href="#a_4697_4698" id="a_4837_4838" title="Defined at line 105">a</a>.

  <span class="layout">// inverse property on List&lt;t&gt;</span>
  <a href="#annotationOk_2399_2411" id="annotationOk_4876_4888" title="Defined at line 76">annotationOk</a>(<a href="#s_4992_4993" id="s_4889_4890" title="Referenced at line 110, 111, 114">s</a>, <a href="#p_4995_4996" id="p_4892_4893" title="Referenced at line 110">p</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_4895_4899" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_5089_5090" id="t_4900_4901" title="Referenced at line 112">t</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InverseAnno_2021_2032" id="InverseAnno_4904_4915" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 57">InverseAnno</a>(<a href="#sort_5083_5087" id="sort_4916_4920" title="Referenced at line 112">sort</a>, <a href="#prop_5123_5127" id="prop_4922_4926" title="Referenced at line 113, 115, 116">prop</a>)) :- { <a href="#sortType_5045_5053" id="sortType_4934_4942" title="Referenced at line 112, 113, 115">sortType</a> <a href="#s_eval_5018_5024" id="s_eval_4943_4949" title="Referenced at line 111, 111, 112, 115">s_eval</a> <a href="#thisType_5134_5142" id="thisType_4950_4958" title="Referenced at line 114, 116">thisType</a> <a href="#propType_5165_5173" id="propType_4959_4967" title="Referenced at line 115, 116">propType</a> }
    <a href="#declareAnnotation_758_775" id="declareAnnotation_4974_4991" title="Defined at line 36">declareAnnotation</a>(<a href="#s_4889_4890" id="s_4992_4993" title="Defined at line 109">s</a>, <a href="#p_4892_4893" id="p_4995_4996" title="Defined at line 109">p</a>, <a href="#INVERSE_456_463" id="INVERSE_4998_5005" title="Defined at line 23">INVERSE</a>()),
    <span class="keyword">new</span> <a href="#s_eval_4943_4949" id="s_eval_5018_5024" title="Defined at line 109">s_eval</a>, <a href="#s_eval_4943_4949" id="s_eval_5026_5032" title="Defined at line 109">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_5034_5035" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_4889_4890" id="s_5038_5039" title="Defined at line 109">s</a>,
    <a href="#sortType_4934_4942" id="sortType_5045_5053" title="Defined at line 109">sortType</a> == <a href="#typeOfInverseSort_7646_7663" id="typeOfInverseSort_5057_5074" title="Defined at line 171">typeOfInverseSort</a>(<a href="#s_eval_4943_4949" id="s_eval_5075_5081" title="Defined at line 109">s_eval</a>, <a href="#sort_4916_4920" id="sort_5083_5087" title="Defined at line 109">sort</a>, <a href="#t_4900_4901" id="t_5089_5090" title="Defined at line 109">t</a>),
    <a href="#noDoubleInverse_10032_10047" id="noDoubleInverse_5097_5112" title="Defined at line 215">noDoubleInverse</a>(<a href="#sortType_4934_4942" id="sortType_5113_5121" title="Defined at line 109">sortType</a>, <a href="#prop_4922_4926" id="prop_5123_5127" title="Defined at line 109">prop</a>),
    <a href="#thisType_4950_4958" id="thisType_5134_5142" title="Defined at line 109">thisType</a> == <a href="../../webdsl-entities.stx#typeOfThis_8090_8100" id="typeOfThis_5146_5156" title="Defined at ../../webdsl-entities.stx line 183">typeOfThis</a>(<a href="#s_4889_4890" id="s_5157_5158" title="Defined at line 109">s</a>),
    <a href="#propType_4959_4967" id="propType_5165_5173" title="Defined at line 109">propType</a> == <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_5177_5191" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_eval_4943_4949" id="s_eval_5192_5198" title="Defined at line 109">s_eval</a>, <a href="#sortType_4934_4942" id="sortType_5200_5208" title="Defined at line 109">sortType</a>, <a href="#prop_4922_4926" id="prop_5210_5214" title="Defined at line 109">prop</a>),
    <a href="#inverseListAnnoTypeOk_5273_5294" id="inverseListAnnoTypeOk_5221_5242" title="Defined at line 118">inverseListAnnoTypeOk</a>(<a href="#propType_4959_4967" id="propType_5243_5251" title="Defined at line 109">propType</a>, <a href="#thisType_4950_4958" id="thisType_5253_5261" title="Defined at line 109">thisType</a>, <a href="#prop_4922_4926" id="prop_5263_5267" title="Defined at line 109">prop</a>).

  <a href="#inverseListAnnoTypeOk_5221_5242" id="inverseListAnnoTypeOk_5273_5294" title="Referenced at line 116, 119, 120, 121">inverseListAnnoTypeOk</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5297_5301" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5304_5308" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span>
  <a href="#inverseListAnnoTypeOk_5273_5294" id="inverseListAnnoTypeOk_5320_5341" title="Defined at line 118">inverseListAnnoTypeOk</a>(T, <span id="T_5345_5346" title="Not referenced locally, nor via imports">T</span>, _).
  <a href="#inverseListAnnoTypeOk_5273_5294" id="inverseListAnnoTypeOk_5354_5375" title="Defined at line 118">inverseListAnnoTypeOk</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_5376_5380" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(_), _, <a href="#prop_5449_5453" id="prop_5388_5392" title="Referenced at line 120">prop</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Inverse between lists not allowed] @<a href="#prop_5388_5392" id="prop_5449_5453" title="Defined at line 120">prop</a>. <span class="layout">// correct error message for tests</span>
  <a href="#inverseListAnnoTypeOk_5273_5294" id="inverseListAnnoTypeOk_5492_5513" title="Defined at line 118">inverseListAnnoTypeOk</a>(_, _, <a href="#prop_5601_5605" id="prop_5520_5524" title="Referenced at line 121">prop</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Inverse property must be the same type as this entity] @<a href="#prop_5520_5524" id="prop_5601_5605" title="Defined at line 121">prop</a>.

  <span class="layout">// inverse property on Set&lt;t&gt;</span>
  <a href="#annotationOk_2399_2411" id="annotationOk_5642_5654" title="Defined at line 76">annotationOk</a>(<a href="#s_5757_5758" id="s_5655_5656" title="Referenced at line 125, 126, 129">s</a>, <a href="#p_5760_5761" id="p_5658_5659" title="Referenced at line 125">p</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_5661_5664" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_5854_5855" id="t_5665_5666" title="Referenced at line 127">t</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InverseAnno_2021_2032" id="InverseAnno_5669_5680" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 57">InverseAnno</a>(<a href="#sort_5848_5852" id="sort_5681_5685" title="Referenced at line 127">sort</a>, <a href="#prop_5888_5892" id="prop_5687_5691" title="Referenced at line 128, 130, 134">prop</a>)) :- { <a href="#sortType_5810_5818" id="sortType_5699_5707" title="Referenced at line 127, 128, 130">sortType</a> <a href="#s_eval_5783_5789" id="s_eval_5708_5714" title="Referenced at line 126, 126, 127, 130">s_eval</a> <a href="#thisType_5899_5907" id="thisType_5715_5723" title="Referenced at line 129, 132, 133">thisType</a> <a href="#propType_5930_5938" id="propType_5724_5732" title="Referenced at line 130, 132, 133">propType</a> }
    <a href="#declareAnnotation_758_775" id="declareAnnotation_5739_5756" title="Defined at line 36">declareAnnotation</a>(<a href="#s_5655_5656" id="s_5757_5758" title="Defined at line 124">s</a>, <a href="#p_5658_5659" id="p_5760_5761" title="Defined at line 124">p</a>, <a href="#INVERSE_456_463" id="INVERSE_5763_5770" title="Defined at line 23">INVERSE</a>()),
    <span class="keyword">new</span> <a href="#s_eval_5708_5714" id="s_eval_5783_5789" title="Defined at line 124">s_eval</a>, <a href="#s_eval_5708_5714" id="s_eval_5791_5797" title="Defined at line 124">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_5799_5800" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_5655_5656" id="s_5803_5804" title="Defined at line 124">s</a>,
    <a href="#sortType_5699_5707" id="sortType_5810_5818" title="Defined at line 124">sortType</a> == <a href="#typeOfInverseSort_7646_7663" id="typeOfInverseSort_5822_5839" title="Defined at line 171">typeOfInverseSort</a>(<a href="#s_eval_5708_5714" id="s_eval_5840_5846" title="Defined at line 124">s_eval</a>, <a href="#sort_5681_5685" id="sort_5848_5852" title="Defined at line 124">sort</a>, <a href="#t_5665_5666" id="t_5854_5855" title="Defined at line 124">t</a>),
    <a href="#noDoubleInverse_10032_10047" id="noDoubleInverse_5862_5877" title="Defined at line 215">noDoubleInverse</a>(<a href="#sortType_5699_5707" id="sortType_5878_5886" title="Defined at line 124">sortType</a>, <a href="#prop_5687_5691" id="prop_5888_5892" title="Defined at line 124">prop</a>),
    <a href="#thisType_5715_5723" id="thisType_5899_5907" title="Defined at line 124">thisType</a> == <a href="../../webdsl-entities.stx#typeOfThis_8090_8100" id="typeOfThis_5911_5921" title="Defined at ../../webdsl-entities.stx line 183">typeOfThis</a>(<a href="#s_5655_5656" id="s_5922_5923" title="Defined at line 124">s</a>),
    <a href="#propType_5724_5732" id="propType_5930_5938" title="Defined at line 124">propType</a> == <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_5942_5956" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_eval_5708_5714" id="s_eval_5957_5963" title="Defined at line 124">s_eval</a>, <a href="#sortType_5699_5707" id="sortType_5965_5973" title="Defined at line 124">sortType</a>, <a href="#prop_5687_5691" id="prop_5975_5979" title="Defined at line 124">prop</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_5986_5988" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_5996_6006" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="#propType_5724_5732" id="propType_6007_6015" title="Defined at line 124">propType</a>, <a href="#thisType_5715_5723" id="thisType_6017_6025" title="Defined at line 124">thisType</a>),
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6034_6044" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="#propType_5724_5732" id="propType_6045_6053" title="Defined at line 124">propType</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_6055_6058" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#thisType_5715_5723" id="thisType_6059_6067" title="Defined at line 124">thisType</a>))
    ) | <span class="keyword">error</span> $[Inverse property must be the same type as this entity] @<a href="#prop_5687_5691" id="prop_6142_6146" title="Defined at line 124">prop</a>.

  <span class="layout">// inverse property non-collection</span>
  <a href="#annotationOk_2399_2411" id="annotationOk_6188_6200" title="Defined at line 76">annotationOk</a>(<a href="#s_6298_6299" id="s_6201_6202" title="Referenced at line 138, 139, 142">s</a>, <a href="#p_6301_6302" id="p_6204_6205" title="Referenced at line 138">p</a>, <a href="#t_6395_6396" id="t_6207_6208" title="Referenced at line 140">t</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InverseAnno_2021_2032" id="InverseAnno_6210_6221" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 57">InverseAnno</a>(<a href="#sort_6389_6393" id="sort_6222_6226" title="Referenced at line 140">sort</a>, <a href="#prop_6429_6433" id="prop_6228_6232" title="Referenced at line 141, 143, 148">prop</a>)) :- { <a href="#sortType_6351_6359" id="sortType_6240_6248" title="Referenced at line 140, 141, 143">sortType</a> <a href="#s_eval_6324_6330" id="s_eval_6249_6255" title="Referenced at line 139, 139, 140, 143">s_eval</a> <a href="#propType_6471_6479" id="propType_6256_6264" title="Referenced at line 143, 145, 146, 147">propType</a> <a href="#thisType_6440_6448" id="thisType_6265_6273" title="Referenced at line 142, 145, 146, 147">thisType</a> }
    <a href="#declareAnnotation_758_775" id="declareAnnotation_6280_6297" title="Defined at line 36">declareAnnotation</a>(<a href="#s_6201_6202" id="s_6298_6299" title="Defined at line 137">s</a>, <a href="#p_6204_6205" id="p_6301_6302" title="Defined at line 137">p</a>, <a href="#INVERSE_456_463" id="INVERSE_6304_6311" title="Defined at line 23">INVERSE</a>()),
    <span class="keyword">new</span> <a href="#s_eval_6249_6255" id="s_eval_6324_6330" title="Defined at line 137">s_eval</a>, <a href="#s_eval_6249_6255" id="s_eval_6332_6338" title="Defined at line 137">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_6340_6341" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_6201_6202" id="s_6344_6345" title="Defined at line 137">s</a>,
    <a href="#sortType_6240_6248" id="sortType_6351_6359" title="Defined at line 137">sortType</a> == <a href="#typeOfInverseSort_7646_7663" id="typeOfInverseSort_6363_6380" title="Defined at line 171">typeOfInverseSort</a>(<a href="#s_eval_6249_6255" id="s_eval_6381_6387" title="Defined at line 137">s_eval</a>, <a href="#sort_6222_6226" id="sort_6389_6393" title="Defined at line 137">sort</a>, <a href="#t_6207_6208" id="t_6395_6396" title="Defined at line 137">t</a>),
    <a href="#noDoubleInverse_10032_10047" id="noDoubleInverse_6403_6418" title="Defined at line 215">noDoubleInverse</a>(<a href="#sortType_6240_6248" id="sortType_6419_6427" title="Defined at line 137">sortType</a>, <a href="#prop_6228_6232" id="prop_6429_6433" title="Defined at line 137">prop</a>),
    <a href="#thisType_6265_6273" id="thisType_6440_6448" title="Defined at line 137">thisType</a> == <a href="../../webdsl-entities.stx#typeOfThis_8090_8100" id="typeOfThis_6452_6462" title="Defined at ../../webdsl-entities.stx line 183">typeOfThis</a>(<a href="#s_6201_6202" id="s_6463_6464" title="Defined at line 137">s</a>),
    <a href="#propType_6256_6264" id="propType_6471_6479" title="Defined at line 137">propType</a> == <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_6483_6497" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_eval_6249_6255" id="s_eval_6498_6504" title="Defined at line 137">s_eval</a>, <a href="#sortType_6240_6248" id="sortType_6506_6514" title="Defined at line 137">sortType</a>, <a href="#prop_6228_6232" id="prop_6516_6520" title="Defined at line 137">prop</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_6527_6529" title="Defined at ../../webdsl.stx line 417">or</a>(<a href="../../webdsl.stx#orB_17763_17766" id="orB_6530_6533" title="Defined at ../../webdsl.stx line 419">orB</a>(
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6541_6551" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="#propType_6256_6264" id="propType_6552_6560" title="Defined at line 137">propType</a>, <a href="#thisType_6265_6273" id="thisType_6562_6570" title="Defined at line 137">thisType</a>),
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6579_6589" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="#propType_6256_6264" id="propType_6590_6598" title="Defined at line 137">propType</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6600_6604" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#thisType_6265_6273" id="thisType_6605_6613" title="Defined at line 137">thisType</a>))),
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6624_6634" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="#propType_6256_6264" id="propType_6635_6643" title="Defined at line 137">propType</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_6645_6648" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#thisType_6265_6273" id="thisType_6649_6657" title="Defined at line 137">thisType</a>))
    ) | <span class="keyword">error</span> $[Inverse property must have (a collection of) the same type as this entity] @<a href="#prop_6228_6232" id="prop_6752_6756" title="Defined at line 137">prop</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_6761_6773" title="Defined at line 76">annotationOk</a>(<a href="#s_6852_6853" id="s_6774_6775" title="Referenced at line 151">s</a>, <a href="#p_6855_6856" id="p_6777_6778" title="Referenced at line 151">p</a>, _, <a href="#a_6983_6984" id="a_6783_6784" title="Referenced at line 152">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#InverseReferenceOnlyAnno_2151_2175" id="InverseReferenceOnlyAnno_6785_6809" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 60">InverseReferenceOnlyAnno</a>()) :-
    <a href="#hasAnnotation_11599_11612" id="hasAnnotation_6820_6833" title="Defined at line 245">hasAnnotation</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_6834_6851" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_6774_6775" id="s_6852_6853" title="Defined at line 150">s</a>, <a href="#p_6777_6778" id="p_6855_6856" title="Defined at line 150">p</a>), <a href="#INVERSE_456_463" id="INVERSE_6859_6866" title="Defined at line 23">INVERSE</a>())
      | <span class="keyword">error</span> $[inverse-reference-only annotation is only allowed on properties that have an inverse specified] @<a href="#a_6783_6784" id="a_6983_6984" title="Defined at line 150">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_6989_7001" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#NotNullAnno_2267_2278" id="NotNullAnno_7011_7022" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 63">NotNullAnno</a>()).
  <a href="#annotationOk_2399_2411" id="annotationOk_7029_7041" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#NotEmptyAnno_2296_2308" id="NotEmptyAnno_7051_7063" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 64">NotEmptyAnno</a>()).
  <a href="#annotationOk_2399_2411" id="annotationOk_7070_7082" title="Defined at line 76">annotationOk</a>(<a href="#s_7198_7199" id="s_7083_7084" title="Referenced at line 158">s</a>, _, <a href="#propType_7167_7175" id="propType_7089_7097" title="Referenced at line 157">propType</a>, <a href="#a_7368_7369" id="a_7099_7100" title="Referenced at line 162">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#AllowedAnno_2326_2337" id="AllowedAnno_7101_7112" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 65">AllowedAnno</a>(<a href="#exp_7201_7204" id="exp_7113_7116" title="Referenced at line 158">exp</a>)) :- { <a href="#t_7135_7136" id="t_7124_7125" title="Referenced at line 157, 160, 161, 162">t</a> <a href="#t'_7182_7184" id="t'_7126_7128" title="Referenced at line 158, 160, 161, 162">t'</a> }
    <a href="#t_7124_7125" id="t_7135_7136" title="Defined at line 156">t</a> == <a href="../../webdsl-types.stx#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_7140_7166" title="Defined at ../../webdsl-types.stx line 273">stripOptionalSetOrListType</a>(<a href="#propType_7089_7097" id="propType_7167_7175" title="Defined at line 156">propType</a>),
    <a href="#t'_7126_7128" id="t'_7182_7184" title="Defined at line 156">t'</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7188_7197" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7083_7084" id="s_7198_7199" title="Defined at line 156">s</a>, <a href="#exp_7113_7116" id="exp_7201_7204" title="Defined at line 156">exp</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_7211_7213" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_7221_7236" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#t'_7126_7128" id="t'_7237_7239" title="Defined at line 156">t'</a>, <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_7241_7245" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_7124_7125" id="t_7246_7247" title="Defined at line 156">t</a>)),
      <a href="../../webdsl.stx#typeCompatibleB_17528_17543" id="typeCompatibleB_7257_7272" title="Defined at ../../webdsl.stx line 411">typeCompatibleB</a>(<a href="#t'_7126_7128" id="t'_7273_7275" title="Defined at line 156">t'</a>, <a href="../../webdsl-types.stx#SET_915_918" id="SET_7277_7280" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#t_7124_7125" id="t_7281_7282" title="Defined at line 156">t</a>))
    ) | <span class="keyword">error</span> $[Allowed expression must be a list of set of type [<a href="#t_7124_7125" id="t_7351_7352" title="Defined at line 156">t</a>], [<a href="#t'_7126_7128" id="t'_7356_7358" title="Defined at line 156">t'</a>] given] @<a href="#a_7099_7100" id="a_7368_7369" title="Defined at line 156">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_7374_7386" title="Defined at line 76">annotationOk</a>(<a href="#s_7444_7445" id="s_7387_7388" title="Referenced at line 165">s</a>, _, <a href="#t_7476_7477" id="t_7393_7394" title="Referenced at line 166, 166">t</a>, <a href="#a_7537_7538" id="a_7396_7397" title="Referenced at line 166">a</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#DefaultAnno_2362_2373" id="DefaultAnno_7398_7409" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 66">DefaultAnno</a>(<a href="#exp_7447_7450" id="exp_7410_7413" title="Referenced at line 165">exp</a>)) :- {<a href="#t'_7428_7430" id="t'_7420_7422" title="Referenced at line 165, 166, 166">t'</a>}
    <a href="#t'_7420_7422" id="t'_7428_7430" title="Defined at line 164">t'</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7434_7443" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7387_7388" id="s_7444_7445" title="Defined at line 164">s</a>, <a href="#exp_7410_7413" id="exp_7447_7450" title="Defined at line 164">exp</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7457_7471" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#t'_7420_7422" id="t'_7472_7474" title="Defined at line 164">t'</a>, <a href="#t_7393_7394" id="t_7476_7477" title="Defined at line 164">t</a>) | <span class="keyword">error</span> $[Default value must be of type [<a href="#t_7393_7394" id="t_7520_7521" title="Defined at line 164">t</a>], [<a href="#t'_7420_7422" id="t'_7525_7527" title="Defined at line 164">t'</a>] given] @<a href="#a_7396_7397" id="a_7537_7538" title="Defined at line 164">a</a>.

  <a href="#annotationOk_2399_2411" id="annotationOk_7543_7555" title="Defined at line 76">annotationOk</a>(_, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#LengthAnno_2398_2408" id="LengthAnno_7565_7575" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 67">LengthAnno</a>(_)).
  <a href="#annotationOk_2399_2411" id="annotationOk_7583_7595" title="Defined at line 76">annotationOk</a>(<a href="#s_7634_7635" id="s_7596_7597" title="Referenced at line 169">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx#FormatAnno_2433_2443" id="FormatAnno_7605_7615" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataModel-sig.stx line 68">FormatAnno</a>(<a href="#str_7637_7640" id="str_7616_7619" title="Referenced at line 169">str</a>)) :- <a href="../../webdsl-types.stx#stringOk_2016_2024" id="stringOk_7625_7633" title="Defined at ../../webdsl-types.stx line 85">stringOk</a>(<a href="#s_7596_7597" id="s_7634_7635" title="Defined at line 169">s</a>, <a href="#str_7616_7619" id="str_7637_7640" title="Defined at line 169">str</a>).

  <a href="#typeOfInverseSort_5057_5074" id="typeOfInverseSort_7646_7663" title="Referenced at line 112, 127, 140, 172">typeOfInverseSort</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_7683_7687" title="Defined at ../../webdsl.stx line 29">TYPE</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_7691_7695" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfInverseSort_7646_7663" id="typeOfInverseSort_7698_7715" title="Defined at line 171">typeOfInverseSort</a>(<a href="#s_7857_7858" id="s_7716_7717" title="Referenced at line 174">s</a>, <a href="#sort_7860_7864" id="sort_7719_7723" title="Referenced at line 174, 174, 175">sort</a>, <a href="#t_7746_7747" id="t_7725_7726" title="Referenced at line 173, 176, 176">t</a>) = <a href="#sortType_7878_7886" id="sortType_7730_7738" title="Referenced at line 174, 175, 176">sortType</a> :-
    <a href="#t_7725_7726" id="t_7746_7747" title="Defined at line 172">t</a> == <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7751_7757" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[Inverse annotation only allowed on (collections of) entity types],
    <a href="../../webdsl.stx#resolveType_3324_3335" id="resolveType_7845_7856" title="Defined at ../../webdsl.stx line 105">resolveType</a>(<a href="#s_7716_7717" id="s_7857_7858" title="Defined at line 172">s</a>, <a href="#sort_7719_7723" id="sort_7860_7864" title="Defined at line 172">sort</a>) == [(_, (_, <a href="#sortType_7730_7738" id="sortType_7878_7886" title="Defined at line 172">sortType</a>))] | <span class="keyword">error</span> $[Cannot resolve sort [<a href="#sort_7719_7723" id="sort_7921_7925" title="Defined at line 172">sort</a>] to an entity],
    <a href="#sortType_7730_7738" id="sortType_7946_7954" title="Defined at line 172">sortType</a> == <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7958_7964" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[Cannot resolve sort [<a href="#sort_7719_7723" id="sort_8002_8006" title="Defined at line 172">sort</a>] to an entity],
    <a href="#sortType_7730_7738" id="sortType_8027_8035" title="Defined at line 172">sortType</a> == <a href="#t_7725_7726" id="t_8039_8040" title="Defined at line 172">t</a> | <span class="keyword">error</span> $[Inverse entity must be the same as property type [<a href="#t_7725_7726" id="t_8101_8102" title="Defined at line 172">t</a>]].

<span class="keyword">rules</span> <span class="layout">// resolving entity.name</span>

  <a href="../../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_8141_8155" title="Defined at ../../webdsl-actions.stx line 260">typeOfProperty</a>(_, <a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_8159_8165" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_8257_8262" id="s_ent_8169_8174" title="Referenced at line 181">s_ent</a>), <a href="#n_8402_8403" id="n_8177_8178" title="Referenced at line 184">n</a>@"name") = <a href="#t_8391_8392" id="t_8189_8190" title="Referenced at line 183">t</a> :- { <a href="#path_8277_8281" id="path_8196_8200" title="Referenced at line 181, 182">path</a> <a href="#s_name_8304_8310" id="s_name_8201_8207" title="Referenced at line 182, 183">s_name</a> <a href="#nameProp_8284_8292" id="nameProp_8208_8216" title="Referenced at line 181, 183">nameProp</a> <a href="#n'_8387_8389" id="n'_8217_8219" title="Referenced at line 183, 184">n'</a> }
    <a href="#resolveClosestAnnotationByAnno_1519_1549" id="resolveClosestAnnotationByAnno_8226_8256" title="Defined at line 54">resolveClosestAnnotationByAnno</a>(<a href="#s_ent_8169_8174" id="s_ent_8257_8262" title="Defined at line 180">s_ent</a>, <a href="#NAME_369_373" id="NAME_8264_8268" title="Defined at line 20">NAME</a>()) == [(<a href="#path_8196_8200" id="path_8277_8281" title="Defined at line 180">path</a>, (<a href="#nameProp_8208_8216" id="nameProp_8284_8292" title="Defined at line 180">nameProp</a>, _))],
    <a href="#s_name_8201_8207" id="s_name_8304_8310" title="Defined at line 180">s_name</a> == <a href="../../webdsl.stx#scopeFromPath_18370_18383" id="scopeFromPath_8314_8327" title="Defined at ../../webdsl.stx line 446">scopeFromPath</a>(<a href="#path_8196_8200" id="path_8328_8332" title="Defined at line 180">path</a>),
    <a href="../../webdsl.stx#resolveLocalProperty_14098_14118" id="resolveLocalProperty_8339_8359" title="Defined at ../../webdsl.stx line 320">resolveLocalProperty</a>(<a href="#s_name_8201_8207" id="s_name_8360_8366" title="Defined at line 180">s_name</a>, <a href="#nameProp_8208_8216" id="nameProp_8368_8376" title="Defined at line 180">nameProp</a>) == [(_, (<a href="#n'_8217_8219" id="n'_8387_8389" title="Defined at line 180">n'</a>, <a href="#t_8189_8190" id="t_8391_8392" title="Defined at line 180">t</a>))],
    @<a href="#n_8177_8178" id="n_8402_8403" title="Defined at line 180">n</a>.<span class="keyword">ref</span> := <a href="#n'_8217_8219" id="n'_8411_8413" title="Defined at line 180">n'</a>.

<span class="keyword">rules</span> <span class="layout">// validation</span>

  <a href="#annotationOk_2399_2411" id="annotationOk_8439_8451" title="Defined at line 76">annotationOk</a>(<a href="#s_8520_8521" id="s_8452_8453" title="Referenced at line 188">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateCreateAnno_273_291" id="ValidateCreateAnno_8461_8479" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 19">ValidateCreateAnno</a>(<a href="#validateExp_8523_8534" id="validateExp_8480_8491" title="Referenced at line 188">validateExp</a>, <a href="#messageExp_8536_8546" id="messageExp_8493_8503" title="Referenced at line 188">messageExp</a>)) :- <a href="#validateOk_8996_9006" id="validateOk_8509_8519" title="Defined at line 194">validateOk</a>(<a href="#s_8452_8453" id="s_8520_8521" title="Defined at line 188">s</a>, <a href="#validateExp_8480_8491" id="validateExp_8523_8534" title="Defined at line 188">validateExp</a>, <a href="#messageExp_8493_8503" id="messageExp_8536_8546" title="Defined at line 188">messageExp</a>).
  <a href="#annotationOk_2399_2411" id="annotationOk_8551_8563" title="Defined at line 76">annotationOk</a>(<a href="#s_8632_8633" id="s_8564_8565" title="Referenced at line 189">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateUpdateAnno_322_340" id="ValidateUpdateAnno_8573_8591" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 20">ValidateUpdateAnno</a>(<a href="#validateExp_8635_8646" id="validateExp_8592_8603" title="Referenced at line 189">validateExp</a>, <a href="#messageExp_8648_8658" id="messageExp_8605_8615" title="Referenced at line 189">messageExp</a>)) :- <a href="#validateOk_8996_9006" id="validateOk_8621_8631" title="Defined at line 194">validateOk</a>(<a href="#s_8564_8565" id="s_8632_8633" title="Defined at line 189">s</a>, <a href="#validateExp_8592_8603" id="validateExp_8635_8646" title="Defined at line 189">validateExp</a>, <a href="#messageExp_8605_8615" id="messageExp_8648_8658" title="Defined at line 189">messageExp</a>).
  <a href="#annotationOk_2399_2411" id="annotationOk_8663_8675" title="Defined at line 76">annotationOk</a>(<a href="#s_8744_8745" id="s_8676_8677" title="Referenced at line 190">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateDeleteAnno_371_389" id="ValidateDeleteAnno_8685_8703" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 21">ValidateDeleteAnno</a>(<a href="#validateExp_8747_8758" id="validateExp_8704_8715" title="Referenced at line 190">validateExp</a>, <a href="#messageExp_8760_8770" id="messageExp_8717_8727" title="Referenced at line 190">messageExp</a>)) :- <a href="#validateOk_8996_9006" id="validateOk_8733_8743" title="Defined at line 194">validateOk</a>(<a href="#s_8676_8677" id="s_8744_8745" title="Defined at line 190">s</a>, <a href="#validateExp_8704_8715" id="validateExp_8747_8758" title="Defined at line 190">validateExp</a>, <a href="#messageExp_8717_8727" id="messageExp_8760_8770" title="Defined at line 190">messageExp</a>).
  <a href="#annotationOk_2399_2411" id="annotationOk_8775_8787" title="Defined at line 76">annotationOk</a>(<a href="#s_8850_8851" id="s_8788_8789" title="Referenced at line 191">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#ValidateAnno_420_432" id="ValidateAnno_8797_8809" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 22">ValidateAnno</a>(<a href="#validateExp_8853_8864" id="validateExp_8810_8821" title="Referenced at line 191">validateExp</a>, <a href="#messageExp_8866_8876" id="messageExp_8823_8833" title="Referenced at line 191">messageExp</a>)) :- <a href="#validateOk_8996_9006" id="validateOk_8839_8849" title="Defined at line 194">validateOk</a>(<a href="#s_8788_8789" id="s_8850_8851" title="Defined at line 191">s</a>, <a href="#validateExp_8810_8821" id="validateExp_8853_8864" title="Defined at line 191">validateExp</a>, <a href="#messageExp_8823_8833" id="messageExp_8866_8876" title="Defined at line 191">messageExp</a>).
  <a href="#annotationOk_2399_2411" id="annotationOk_8881_8893" title="Defined at line 76">annotationOk</a>(<a href="#s_8964_8965" id="s_8894_8895" title="Referenced at line 192">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx#NamedValidateAnno_463_480" id="NamedValidateAnno_8903_8920" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-DataValidation-sig.stx line 23">NamedValidateAnno</a>(_, <a href="#validateExp_8967_8978" id="validateExp_8924_8935" title="Referenced at line 192">validateExp</a>, <a href="#messageExp_8980_8990" id="messageExp_8937_8947" title="Referenced at line 192">messageExp</a>)) :- <a href="#validateOk_8996_9006" id="validateOk_8953_8963" title="Defined at line 194">validateOk</a>(<a href="#s_8894_8895" id="s_8964_8965" title="Defined at line 192">s</a>, <a href="#validateExp_8924_8935" id="validateExp_8967_8978" title="Defined at line 192">validateExp</a>, <a href="#messageExp_8937_8947" id="messageExp_8980_8990" title="Defined at line 192">messageExp</a>).

  <a href="#validateOk_8509_8519" id="validateOk_8996_9006" title="Referenced at line 188, 189, 190, 191, 192, 195; ../../webdsl-actions.stx line 351, 352; ../../webdsl-entities.stx line 173">validateOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9017_9020" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_9023_9026" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>
  <a href="#validateOk_8996_9006" id="validateOk_9029_9039" title="Defined at line 194">validateOk</a>(<a href="#s_9130_9131" id="s_9040_9041" title="Referenced at line 196, 197, 198, 199">s</a>, <a href="#validateExp_9133_9144" id="validateExp_9043_9054" title="Referenced at line 196">validateExp</a>, <a href="#messageExp_9179_9189" id="messageExp_9056_9066" title="Referenced at line 197">messageExp</a>) :- { <a href="#validateType_9104_9116" id="validateType_9073_9085" title="Referenced at line 196, 198, 198">validateType</a> <a href="#messageType_9151_9162" id="messageType_9086_9097" title="Referenced at line 197, 199, 199">messageType</a> }
    <a href="#validateType_9073_9085" id="validateType_9104_9116" title="Defined at line 195">validateType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9120_9129" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_9040_9041" id="s_9130_9131" title="Defined at line 195">s</a>, <a href="#validateExp_9043_9054" id="validateExp_9133_9144" title="Defined at line 195">validateExp</a>),
    <a href="#messageType_9086_9097" id="messageType_9151_9162" title="Defined at line 195">messageType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_9166_9175" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_9040_9041" id="s_9176_9177" title="Defined at line 195">s</a>, <a href="#messageExp_9056_9066" id="messageExp_9179_9189" title="Defined at line 195">messageExp</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_9196_9210" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#validateType_9073_9085" id="validateType_9211_9223" title="Defined at line 195">validateType</a>, <a href="../../types/built-ins.stx#bool_2637_2641" id="bool_9225_9229" title="Defined at ../../types/built-ins.stx line 72">bool</a>(<a href="#s_9040_9041" id="s_9230_9231" title="Defined at line 195">s</a>)) | <span class="keyword">error</span> $[The expression to be validated should be compatible with type Bool, [<a href="#validateType_9073_9085" id="validateType_9313_9325" title="Defined at line 195">validateType</a>] given],
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_9339_9353" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#messageType_9086_9097" id="messageType_9354_9365" title="Defined at line 195">messageType</a>, <a href="../../types/built-ins.stx#string_1822_1828" id="string_9367_9373" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_9040_9041" id="s_9374_9375" title="Defined at line 195">s</a>)) | <span class="keyword">error</span> $[The error message should be compatible with type String, [<a href="#messageType_9086_9097" id="messageType_9446_9457" title="Defined at line 195">messageType</a>] given].

<span class="keyword">rules</span> <span class="layout">// predicates</span>

  <a href="#isTopLevelEntity_4383_4399" id="isTopLevelEntity_9491_9507" title="Referenced at line 98, 204">isTopLevelEntity</a> : <span class="keyword">scope</span>
  <a href="#isTopLevelEntity_9491_9507" id="isTopLevelEntity_9518_9534" title="Defined at line 203">isTopLevelEntity</a>(<a href="#s_9587_9588" id="s_9535_9536" title="Referenced at line 204">s</a>) :- <a href="#doesNotHaveAnnotation_11727_11748" id="doesNotHaveAnnotation_9541_9562" title="Defined at line 248">doesNotHaveAnnotation</a>(<a href="#resolveEntityAnnotation_2186_2209" id="resolveEntityAnnotation_9563_9586" title="Defined at line 70">resolveEntityAnnotation</a>(<a href="#s_9535_9536" id="s_9587_9588" title="Defined at line 204">s</a>), <a href="#SUBENTITY_552_561" id="SUBENTITY_9591_9600" title="Defined at line 27">SUBENTITY</a>()).

  <a href="#isNoSessionEntity_4472_4489" id="isNoSessionEntity_9608_9625" title="Referenced at line 99, 207">isNoSessionEntity</a> : <span class="keyword">scope</span>
  <a href="#isNoSessionEntity_9608_9625" id="isNoSessionEntity_9636_9653" title="Defined at line 206">isNoSessionEntity</a>(<a href="#s_9706_9707" id="s_9654_9655" title="Referenced at line 207">s</a>) :- <a href="#doesNotHaveAnnotation_11727_11748" id="doesNotHaveAnnotation_9660_9681" title="Defined at line 248">doesNotHaveAnnotation</a>(<a href="#resolveEntityAnnotation_2186_2209" id="resolveEntityAnnotation_9682_9705" title="Defined at line 70">resolveEntityAnnotation</a>(<a href="#s_9654_9655" id="s_9706_9707" title="Defined at line 207">s</a>), <a href="#SESSIONENTITY_521_534" id="SESSIONENTITY_9710_9723" title="Defined at line 26">SESSIONENTITY</a>()).

  <a href="#noDuplicateIdAnnotations_4208_4232" id="noDuplicateIdAnnotations_9731_9755" title="Referenced at line 96, 210">noDuplicateIdAnnotations</a> : <span class="keyword">scope</span>
  <a href="#noDuplicateIdAnnotations_9731_9755" id="noDuplicateIdAnnotations_9766_9790" title="Defined at line 209">noDuplicateIdAnnotations</a>(<a href="#s_9821_9822" id="s_9791_9792" title="Referenced at line 210">s</a>) :- <a href="#resolveAnnotationByAnno_1186_1209" id="resolveAnnotationByAnno_9797_9820" title="Defined at line 47">resolveAnnotationByAnno</a>(<a href="#s_9791_9792" id="s_9821_9822" title="Defined at line 210">s</a>, <a href="#ID_311_313" id="ID_9824_9826" title="Defined at line 18">ID</a>()) == [_].

  <a href="#noMultipleNameAnnotations_4642_4667" id="noMultipleNameAnnotations_9841_9866" title="Referenced at line 103, 213">noMultipleNameAnnotations</a> : <span class="keyword">scope</span>
  <a href="#noMultipleNameAnnotations_9841_9866" id="noMultipleNameAnnotations_9877_9902" title="Defined at line 212">noMultipleNameAnnotations</a>(<a href="#s_9933_9934" id="s_9903_9904" title="Referenced at line 213">s</a>) :- <a href="#resolveAnnotationByAnno_1186_1209" id="resolveAnnotationByAnno_9909_9932" title="Defined at line 47">resolveAnnotationByAnno</a>(<a href="#s_9903_9904" id="s_9933_9934" title="Defined at line 213">s</a>, <a href="#NAME_369_373" id="NAME_9936_9940" title="Defined at line 20">NAME</a>()) == [_] | <span class="keyword">error</span> $[Found multiple properties called "name" or with a name annotation].

  <a href="#noDoubleInverse_5097_5112" id="noDoubleInverse_10032_10047" title="Referenced at line 113, 128, 141, 216">noDoubleInverse</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10050_10054" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span>
  <a href="#noDoubleInverse_10032_10047" id="noDoubleInverse_10066_10081" title="Defined at line 215">noDoubleInverse</a>(<a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_10082_10088" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_ent_10150_10155" id="s_ent_10092_10097" title="Referenced at line 217">s_ent</a>), <a href="#x_10157_10158" id="x_10100_10101" title="Referenced at line 217">x</a>) :-
    <a href="#doesNotHaveAnnotation_11727_11748" id="doesNotHaveAnnotation_10110_10131" title="Defined at line 248">doesNotHaveAnnotation</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_10132_10149" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_ent_10092_10097" id="s_ent_10150_10155" title="Defined at line 216">s_ent</a>, <a href="#x_10100_10101" id="x_10157_10158" title="Defined at line 216">x</a>), <a href="#INVERSE_456_463" id="INVERSE_10161_10168" title="Defined at line 23">INVERSE</a>())
      | <span class="keyword">error</span> $[Inverse annotations cannot be declared on both sides].

  <a href="#hasIdAnnotationB_10281_10297" id="hasIdAnnotationB_10246_10262" title="Referenced at line 221; ../generated-functions.stx line 21">hasIdAnnotationB</a> : <span class="keyword">scope</span> -&gt; <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_10274_10278" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#hasIdAnnotationB_10246_10262" id="hasIdAnnotationB_10281_10297" title="Defined at line 220">hasIdAnnotationB</a>(s) = <a href="../../webdsl.stx#notB_18027_18031" id="notB_10303_10307" title="Defined at ../../webdsl.stx line 432">notB</a>(<a href="#emptyAnnotationResultB_13141_13163" id="emptyAnnotationResultB_10308_10330" title="Defined at line 270">emptyAnnotationResultB</a>(<a href="#resolveAnnotationByAnno_1186_1209" id="resolveAnnotationByAnno_10331_10354" title="Defined at line 47">resolveAnnotationByAnno</a>(<span id="s_10355_10356" title="Not referenced locally, nor via imports">s</span>, <a href="#ID_311_313" id="ID_10358_10360" title="Defined at line 18">ID</a>()))).

  <a href="#isMutableB_10408_10418" id="isMutableB_10370_10380" title="Referenced at line 224; ../../webdsl-actions.stx line 116">isMutableB</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_10401_10405" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#isMutableB_10370_10380" id="isMutableB_10408_10418" title="Defined at line 223">isMutableB</a>(<span id="s_10419_10420" title="Not referenced locally, nor via imports">s</span>, x) = <a href="../../webdsl.stx#notB_18027_18031" id="notB_10427_10431" title="Defined at ../../webdsl.stx line 432">notB</a>(<a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_10432_10446" title="Defined at line 240">hasAnnotationB</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_10447_10464" title="Defined at line 40">resolveAnnotation</a>(s, <span id="x_10468_10469" title="Not referenced locally, nor via imports">x</span>), <a href="#DERIVED_427_434" id="DERIVED_10472_10479" title="Defined at line 22">DERIVED</a>())).

  <a href="#isMutable_10517_10526" id="isMutable_10488_10497" title="Referenced at line 227, 228, 229; ../../webdsl-entities.stx line 198">isMutable</a> : <span class="keyword">scope</span> * <span class="keyword">string</span>
  <a href="#isMutable_10488_10497" id="isMutable_10517_10526" title="Defined at line 226">isMutable</a>(<a href="#s_10569_10570" id="s_10527_10528" title="Referenced at line 227">s</a>, <a href="#x_10572_10573" id="x_10530_10531" title="Referenced at line 227">x</a>) :- <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_10536_10550" title="Defined at line 240">hasAnnotationB</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_10551_10568" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_10527_10528" id="s_10569_10570" title="Defined at line 227">s</a>, <a href="#x_10530_10531" id="x_10572_10573" title="Defined at line 227">x</a>), <a href="#DERIVED_427_434" id="DERIVED_10576_10583" title="Defined at line 22">DERIVED</a>()) == <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_10590_10595" title="Defined at ../../webdsl.stx line 35">FALSE</a>().
  <a href="#isMutable_10488_10497" id="isMutable_10601_10610" title="Defined at line 226">isMutable</a>(<a href="#s_10651_10652" id="s_10611_10612" title="Referenced at line 228">s</a>, <a href="#x_10654_10655" id="x_10614_10615" title="Referenced at line 228">x</a>@"name") :- { <a href="#t_10660_10661" id="t_10629_10630" title="Referenced at line 228">t</a> } <a href="../../webdsl-types.stx#propertyTypeNoRef_9225_9242" id="propertyTypeNoRef_10633_10650" title="Defined at ../../webdsl-types.stx line 250">propertyTypeNoRef</a>(<a href="#s_10611_10612" id="s_10651_10652" title="Defined at line 228">s</a>, <a href="#x_10614_10615" id="x_10654_10655" title="Defined at line 228">x</a>) == <a href="#t_10629_10630" id="t_10660_10661" title="Defined at line 228">t</a>.      <span class="layout">// only allow assignment if the property is overridden</span>
  <a href="#isMutable_10488_10497" id="isMutable_10725_10734" title="Defined at line 226">isMutable</a>(<a href="#s_10780_10781" id="s_10735_10736" title="Referenced at line 229">s</a>, <a href="#x_10783_10784" id="x_10738_10739" title="Referenced at line 229">x</a>@"naturalId") :- { <a href="#t_10789_10790" id="t_10758_10759" title="Referenced at line 229">t</a> } <a href="../../webdsl-types.stx#propertyTypeNoRef_9225_9242" id="propertyTypeNoRef_10762_10779" title="Defined at ../../webdsl-types.stx line 250">propertyTypeNoRef</a>(<a href="#s_10735_10736" id="s_10780_10781" title="Defined at line 229">s</a>, <a href="#x_10738_10739" id="x_10783_10784" title="Defined at line 229">x</a>) == <a href="#t_10758_10759" id="t_10789_10790" title="Defined at line 229">t</a>. <span class="layout">// only allow assignment if the property is overridden</span>

  <a href="#isMutableProperty_10886_10903" id="isMutableProperty_10850_10867" title="Referenced at line 232, 233, 234; ../../webdsl-actions.stx line 129, 137; ../../webdsl-expand.stx line 51; ../../ui/template-calls.stx line 138">isMutableProperty</a> : <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_10870_10874" title="Defined at ../../webdsl.stx line 29">TYPE</a> * <span class="keyword">string</span>
  <a href="#isMutableProperty_10850_10867" id="isMutableProperty_10886_10903" title="Defined at line 231">isMutableProperty</a>(_, _) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Can only check mutability of native class and entity properties].
  <a href="#isMutableProperty_10850_10867" id="isMutableProperty_10997_11014" title="Defined at line 231">isMutableProperty</a>(<a href="../../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_11015_11026" title="Defined at ../../webdsl-types.stx line 23">NATIVECLASS</a>(_, _), _). <span class="layout">// all native class properties are mutable</span>
  <a href="#isMutableProperty_10850_10867" id="isMutableProperty_11083_11100" title="Defined at line 231">isMutableProperty</a>(<a href="../../webdsl-types.stx#ENTITY_444_450" id="ENTITY_11101_11107" title="Defined at ../../webdsl-types.stx line 20">ENTITY</a>(_, <a href="#s_entity_11179_11187" id="s_entity_11111_11119" title="Referenced at line 235">s_entity</a>), <a href="#x_11189_11190" id="x_11122_11123" title="Referenced at line 235, 236">x</a>) :- {<a href="#annotations_11146_11157" id="annotations_11129_11140" title="Referenced at line 235, 236">annotations</a>}
    <a href="#annotations_11129_11140" id="annotations_11146_11157" title="Defined at line 234">annotations</a> == <a href="#resolveAnnotation_869_886" id="resolveAnnotation_11161_11178" title="Defined at line 40">resolveAnnotation</a>(<a href="#s_entity_11111_11119" id="s_entity_11179_11187" title="Defined at line 234">s_entity</a>, <a href="#x_11122_11123" id="x_11189_11190" title="Defined at line 234">x</a>),
    <a href="#doesNotHaveAnnotation_11727_11748" id="doesNotHaveAnnotation_11197_11218" title="Defined at line 248">doesNotHaveAnnotation</a>(<a href="#annotations_11129_11140" id="annotations_11219_11230" title="Defined at line 234">annotations</a>, <a href="#DERIVED_427_434" id="DERIVED_11232_11239" title="Defined at line 22">DERIVED</a>()) | <span class="keyword">error</span> $[Property [<a href="#x_11122_11123" id="x_11263_11264" title="Defined at line 234">x</a>] is a derived property and hence cannot be edited]. <span class="layout">// correct error message for tests</span>

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#hasAnnotationB_10432_10446" id="hasAnnotationB_11371_11385" title="Referenced at line 224, 227, 241, 242, 243, 243, 246, 249, 259, 263">hasAnnotationB</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_11411_11421" title="Defined at line 14">ANNOTATION</a>))) * <a href="#ANNOTATION_241_251" id="ANNOTATION_11427_11437" title="Defined at line 14">ANNOTATION</a> -&gt; <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_11441_11445" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11448_11462" title="Defined at line 240">hasAnnotationB</a>([], _) = <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_11472_11477" title="Defined at ../../webdsl.stx line 35">FALSE</a>().
  <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11483_11497" title="Defined at line 240">hasAnnotationB</a>([(_, (_, a)) | <span id="tl_11513_11515" title="Not referenced locally, nor via imports">tl</span>], <span id="a_11518_11519" title="Not referenced locally, nor via imports">a</span>) = <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_11523_11527" title="Defined at ../../webdsl.stx line 34">TRUE</a>().
  <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11533_11547" title="Defined at line 240">hasAnnotationB</a>([(_, (_, _)) | tl], <span id="a_11568_11569" title="Not referenced locally, nor via imports">a</span>) = <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11573_11587" title="Defined at line 240">hasAnnotationB</a>(<span id="tl_11588_11590" title="Not referenced locally, nor via imports">tl</span>, a).

  <a href="#hasAnnotation_4719_4732" id="hasAnnotation_11599_11612" title="Referenced at line 106, 151, 246">hasAnnotation</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_11638_11648" title="Defined at line 14">ANNOTATION</a>))) * <a href="#ANNOTATION_241_251" id="ANNOTATION_11654_11664" title="Defined at line 14">ANNOTATION</a>
  <a href="#hasAnnotation_11599_11612" id="hasAnnotation_11667_11680" title="Defined at line 245">hasAnnotation</a>(<a href="#ps_11706_11708" id="ps_11681_11683" title="Referenced at line 246">ps</a>, <a href="#a_11710_11711" id="a_11685_11686" title="Referenced at line 246">a</a>) :- <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11691_11705" title="Defined at line 240">hasAnnotationB</a>(<a href="#ps_11681_11683" id="ps_11706_11708" title="Defined at line 246">ps</a>, <a href="#a_11685_11686" id="a_11710_11711" title="Defined at line 246">a</a>) == <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_11716_11720" title="Defined at ../../webdsl.stx line 34">TRUE</a>().

  <a href="#doesNotHaveAnnotation_9541_9562" id="doesNotHaveAnnotation_11727_11748" title="Referenced at line 204, 207, 217, 236, 249">doesNotHaveAnnotation</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_11774_11784" title="Defined at line 14">ANNOTATION</a>))) * <a href="#ANNOTATION_241_251" id="ANNOTATION_11790_11800" title="Defined at line 14">ANNOTATION</a>
  <a href="#doesNotHaveAnnotation_11727_11748" id="doesNotHaveAnnotation_11803_11824" title="Defined at line 248">doesNotHaveAnnotation</a>(<a href="#ps_11850_11852" id="ps_11825_11827" title="Referenced at line 249">ps</a>, <a href="#a_11854_11855" id="a_11829_11830" title="Referenced at line 249">a</a>) :- <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_11835_11849" title="Defined at line 240">hasAnnotationB</a>(<a href="#ps_11825_11827" id="ps_11850_11852" title="Defined at line 249">ps</a>, <a href="#a_11829_11830" id="a_11854_11855" title="Defined at line 249">a</a>) == <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_11860_11865" title="Defined at ../../webdsl.stx line 35">FALSE</a>().

  <a href="#withAnnotation_11969_11983" id="withAnnotation_11872_11886" title="Referenced at line 252">withAnnotation</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11912_11916" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) * <a href="#ANNOTATION_241_251" id="ANNOTATION_11922_11932" title="Defined at line 14">ANNOTATION</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_11959_11963" title="Defined at ../../webdsl.stx line 29">TYPE</a>)))
  <a href="#withAnnotation_11872_11886" id="withAnnotation_11969_11983" title="Defined at line 251">withAnnotation</a>(<span id="xs_11984_11986" title="Not referenced locally, nor via imports">xs</span>, <span id="a_11988_11989" title="Not referenced locally, nor via imports">a</span>) = <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_11993_12014" title="Defined at line 265">filterResultsWithBool</a>(<a href="#zipResultsWithHasAnnoBool_12243_12268" id="zipResultsWithHasAnnoBool_12015_12040" title="Defined at line 257">zipResultsWithHasAnnoBool</a>(xs, a)).

  <a href="#withoutAnnotation_12153_12170" id="withoutAnnotation_12053_12070" title="Referenced at line 255; ../../webdsl-actions.stx line 97; ../../webdsl-types.stx line 246, 252">withoutAnnotation</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12096_12100" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) * <a href="#ANNOTATION_241_251" id="ANNOTATION_12106_12116" title="Defined at line 14">ANNOTATION</a> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12143_12147" title="Defined at ../../webdsl.stx line 29">TYPE</a>)))
  <a href="#withoutAnnotation_12053_12070" id="withoutAnnotation_12153_12170" title="Defined at line 254">withoutAnnotation</a>(xs, a) = <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_12180_12201" title="Defined at line 265">filterResultsWithBool</a>(<a href="#zipResultsWithNotHasAnnoBool_12539_12567" id="zipResultsWithNotHasAnnoBool_12202_12230" title="Defined at line 261">zipResultsWithNotHasAnnoBool</a>(<span id="xs_12231_12233" title="Not referenced locally, nor via imports">xs</span>, <span id="a_12235_12236" title="Not referenced locally, nor via imports">a</span>)).

  <a href="#zipResultsWithHasAnnoBool_12015_12040" id="zipResultsWithHasAnnoBool_12243_12268" title="Referenced at line 252">zipResultsWithHasAnnoBool</a> <span class="keyword">maps</span> <a href="#zipResultWithHasAnnoBool_12323_12347" id="zipResultWithHasAnnoBool_12274_12298" title="Defined at line 258">zipResultWithHasAnnoBool</a>(<span class="keyword">list</span>(*), *) = <span class="keyword">list</span>(*)
  <a href="#zipResultWithHasAnnoBool_12274_12298" id="zipResultWithHasAnnoBool_12323_12347" title="Referenced at line 257, 259">zipResultWithHasAnnoBool</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12368_12372" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <a href="#ANNOTATION_241_251" id="ANNOTATION_12377_12387" title="Defined at line 14">ANNOTATION</a> -&gt; ((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12410_12414" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_12419_12423" title="Defined at ../../webdsl.stx line 30">BOOL</a>)
  <a href="#zipResultWithHasAnnoBool_12323_12347" id="zipResultWithHasAnnoBool_12427_12451" title="Defined at line 258">zipResultWithHasAnnoBool</a>(r@(p, (<span id="x_12459_12460" title="Not referenced locally, nor via imports">x</span>, _)), a) = (<span id="r_12473_12474" title="Not referenced locally, nor via imports">r</span>, <a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_12476_12490" title="Defined at line 240">hasAnnotationB</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_12491_12508" title="Defined at line 40">resolveAnnotation</a>(<a href="../../webdsl.stx#scopeFromPath_18370_18383" id="scopeFromPath_12509_12522" title="Defined at ../../webdsl.stx line 446">scopeFromPath</a>(<span id="p_12523_12524" title="Not referenced locally, nor via imports">p</span>), x), <span id="a_12531_12532" title="Not referenced locally, nor via imports">a</span>)).

  <a href="#zipResultsWithNotHasAnnoBool_12202_12230" id="zipResultsWithNotHasAnnoBool_12539_12567" title="Referenced at line 255">zipResultsWithNotHasAnnoBool</a> <span class="keyword">maps</span> <a href="#zipResultWithNotHasAnnoBool_12625_12652" id="zipResultWithNotHasAnnoBool_12573_12600" title="Defined at line 262">zipResultWithNotHasAnnoBool</a>(<span class="keyword">list</span>(*), *) = <span class="keyword">list</span>(*)
  <a href="#zipResultWithNotHasAnnoBool_12573_12600" id="zipResultWithNotHasAnnoBool_12625_12652" title="Referenced at line 261, 263">zipResultWithNotHasAnnoBool</a> : (<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12673_12677" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <a href="#ANNOTATION_241_251" id="ANNOTATION_12682_12692" title="Defined at line 14">ANNOTATION</a> -&gt; ((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12715_12719" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_12724_12728" title="Defined at ../../webdsl.stx line 30">BOOL</a>)
  <a href="#zipResultWithNotHasAnnoBool_12625_12652" id="zipResultWithNotHasAnnoBool_12732_12759" title="Defined at line 262">zipResultWithNotHasAnnoBool</a>(r@(p, (<span id="x_12767_12768" title="Not referenced locally, nor via imports">x</span>, _)), a) = (<span id="r_12781_12782" title="Not referenced locally, nor via imports">r</span>, <a href="../../webdsl.stx#notB_18027_18031" id="notB_12784_12788" title="Defined at ../../webdsl.stx line 432">notB</a>(<a href="#hasAnnotationB_11371_11385" id="hasAnnotationB_12789_12803" title="Defined at line 240">hasAnnotationB</a>(<a href="#resolveAnnotation_869_886" id="resolveAnnotation_12804_12821" title="Defined at line 40">resolveAnnotation</a>(<a href="../../webdsl.stx#scopeFromPath_18370_18383" id="scopeFromPath_12822_12835" title="Defined at ../../webdsl.stx line 446">scopeFromPath</a>(<span id="p_12836_12837" title="Not referenced locally, nor via imports">p</span>), x), <span id="a_12844_12845" title="Not referenced locally, nor via imports">a</span>))).

  <a href="#filterResultsWithBool_11993_12014" id="filterResultsWithBool_12853_12874" title="Referenced at line 252, 255, 266, 267, 267, 268, 268">filterResultsWithBool</a> : <span class="keyword">list</span>(((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12901_12905" title="Defined at ../../webdsl.stx line 29">TYPE</a>)) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_12910_12914" title="Defined at ../../webdsl.stx line 30">BOOL</a>)) -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_12943_12947" title="Defined at ../../webdsl.stx line 29">TYPE</a>)))
  <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_12953_12974" title="Defined at line 265">filterResultsWithBool</a>([]) = [].
  <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_12987_13008" title="Defined at line 265">filterResultsWithBool</a>([(<span id="x_13011_13012" title="Not referenced locally, nor via imports">x</span>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_13014_13018" title="Defined at ../../webdsl.stx line 34">TRUE</a>()) | xs]) = [x | <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_13036_13057" title="Defined at line 265">filterResultsWithBool</a>(<span id="xs_13058_13060" title="Not referenced locally, nor via imports">xs</span>)].
  <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_13066_13087" title="Defined at line 265">filterResultsWithBool</a>([(_, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_13093_13098" title="Defined at ../../webdsl.stx line 35">FALSE</a>()) | xs]) = <a href="#filterResultsWithBool_12853_12874" id="filterResultsWithBool_13111_13132" title="Defined at line 265">filterResultsWithBool</a>(<span id="xs_13133_13135" title="Not referenced locally, nor via imports">xs</span>).

  <a href="#emptyAnnotationResultB_10308_10330" id="emptyAnnotationResultB_13141_13163" title="Referenced at line 221, 271, 272">emptyAnnotationResultB</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="#ANNOTATION_241_251" id="ANNOTATION_13189_13199" title="Defined at line 14">ANNOTATION</a>))) -&gt; <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_13206_13210" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#emptyAnnotationResultB_13141_13163" id="emptyAnnotationResultB_13213_13235" title="Defined at line 270">emptyAnnotationResultB</a>([]) = <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_13242_13246" title="Defined at ../../webdsl.stx line 34">TRUE</a>().
  <a href="#emptyAnnotationResultB_13141_13163" id="emptyAnnotationResultB_13252_13274" title="Defined at line 270">emptyAnnotationResultB</a>(_) = <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_13280_13285" title="Defined at ../../webdsl.stx line 35">FALSE</a>().

</code></pre></td></tr></tbody></table></div>