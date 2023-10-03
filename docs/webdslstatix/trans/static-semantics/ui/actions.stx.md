---
title: actions.stx
hide:
  - toc
---

# `actions.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/actions.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/actions.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/actions.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../template-calls.stx#static-semantics/ui/actions_168_195" id="static-semantics/ui/actions_7_34" title="Referenced at ../template-calls.stx line 10; ../../webdsl-ui.stx line 10">static-semantics/ui/actions</a>

<span class="keyword">imports</span>
  <a href="../../actions/functions.stx#static-semantics/actions/functions_7_41" id="static-semantics/actions/functions_46_80" title="Defined at ../../actions/functions.stx line 1">static-semantics/actions/functions</a>

  <a href="../../entities/annotations.stx#static-semantics/entities/annotations_7_44" id="static-semantics/entities/annotations_84_121" title="Defined at ../../entities/annotations.stx line 1">static-semantics/entities/annotations</a>

  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_125_157" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../template-calls.stx#static-semantics/ui/template-calls_7_41" id="static-semantics/ui/template-calls_161_195" title="Defined at ../template-calls.stx line 1">static-semantics/ui/template-calls</a>

  <a href="../../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_199_230" title="Defined at ../../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_233_262" title="Defined at ../../webdsl-types.stx line 1">static-semantics/webdsl-types</a>
  <a href="../../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_265_291" title="Defined at ../../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_294_317" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// var decls in templates and pages</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_364_381" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_448_449" id="s_382_383" title="Referenced at line 19">s</a>, <a href="#s_decl_451_457" id="s_decl_385_391" title="Referenced at line 19">s_decl</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TEVarDecl_4571_4580" id="TEVarDecl_396_405" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 137">TEVarDecl</a>(<a href="#varDecl_459_466" id="varDecl_406_413" title="Referenced at line 19">varDecl</a>))            :- <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_430_447" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_382_383" id="s_448_449" title="Defined at line 19">s</a>, <a href="#s_decl_385_391" id="s_decl_451_457" title="Defined at line 19">s_decl</a>, <a href="#varDecl_406_413" id="varDecl_459_466" title="Defined at line 19">varDecl</a>).
  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_471_488" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_555_556" id="s_489_490" title="Referenced at line 20">s</a>, <a href="#s_decl_558_564" id="s_decl_492_498" title="Referenced at line 20">s_decl</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#RequestScopeTemplate_4614_4634" id="RequestScopeTemplate_503_523" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 138">RequestScopeTemplate</a>(<a href="#varDecl_566_573" id="varDecl_524_531" title="Referenced at line 20">varDecl</a>)) :- <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_537_554" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_489_490" id="s_555_556" title="Defined at line 20">s</a>, <a href="#s_decl_492_498" id="s_decl_558_564" title="Defined at line 20">s_decl</a>, <a href="#varDecl_524_531" id="varDecl_566_573" title="Defined at line 20">varDecl</a>).
  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_578_595" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_662_663" id="s_596_597" title="Referenced at line 21">s</a>, <a href="#s_decl_665_671" id="s_decl_599_605" title="Referenced at line 21">s_decl</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#LocalScopeTemplate_4668_4686" id="LocalScopeTemplate_610_628" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 139">LocalScopeTemplate</a>(<a href="#varDecl_673_680" id="varDecl_629_636" title="Referenced at line 21">varDecl</a>))   :- <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_644_661" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_596_597" id="s_662_663" title="Defined at line 21">s</a>, <a href="#s_decl_599_605" id="s_decl_665_671" title="Defined at line 21">s_decl</a>, <a href="#varDecl_629_636" id="varDecl_673_680" title="Defined at line 21">varDecl</a>).

  <a href="#templateVarDeclOk_430_447" id="templateVarDeclOk_686_703" title="Referenced at line 19, 20, 21, 24, 30, 37">templateVarDeclOk</a>: <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#VarDecl_512_519" id="VarDecl_721_728" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 28">VarDecl</a>
  <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_731_748" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_815_816" id="s_749_750" title="Referenced at line 25">s</a>, <a href="#s_decl_908_914" id="s_decl_752_758" title="Referenced at line 27">s_decl</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateVarDecl_4241_4256" id="TemplateVarDecl_760_775" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 131">TemplateVarDecl</a>(<a href="#x_916_917" id="x_776_777" title="Referenced at line 27, 28">x</a>, <a href="#sort_818_822" id="sort_779_783" title="Referenced at line 25, 26, 26">sort</a>)) :- { <a href="#t_799_800" id="t_791_792" title="Referenced at line 25, 26, 27, 28">t</a> }
    <a href="#t_791_792" id="t_799_800" title="Defined at line 24">t</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_804_814" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_749_750" id="s_815_816" title="Defined at line 24">s</a>, <a href="#sort_779_783" id="sort_818_822" title="Defined at line 24">sort</a>),
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_829_840" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#t_791_792" id="t_841_842" title="Defined at line 24">t</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_844_851" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Unknown type [<a href="#sort_779_783" id="sort_879_883" title="Defined at line 24">sort</a>]] @<a href="#sort_779_783" id="sort_887_891" title="Defined at line 24">sort</a>,
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_897_907" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_752_758" id="s_decl_908_914" title="Defined at line 24">s_decl</a>, <a href="#x_776_777" id="x_916_917" title="Defined at line 24">x</a>, <a href="#t_791_792" id="t_919_920" title="Defined at line 24">t</a>),
    @<a href="#x_776_777" id="x_928_929" title="Defined at line 24">x</a>.<span class="keyword">type</span> := <a href="#t_791_792" id="t_938_939" title="Defined at line 24">t</a>.

  <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_944_961" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_1045_1046" id="s_962_963" title="Referenced at line 31, 32">s</a>, <a href="#s_decl_1211_1217" id="s_decl_965_971" title="Referenced at line 34">s_decl</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateVarDeclInit_4337_4356" id="TemplateVarDeclInit_973_992" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 133">TemplateVarDeclInit</a>(<a href="#x_1219_1220" id="x_993_994" title="Referenced at line 34, 35">x</a>, <a href="#sort_1048_1052" id="sort_996_1000" title="Referenced at line 31, 33">sort</a>, <a href="#exp_1083_1086" id="exp_1002_1005" title="Referenced at line 32, 33, 33">exp</a>)) :- { <a href="#t_1029_1030" id="t_1013_1014" title="Referenced at line 31, 33, 34, 35">t</a> <a href="#expType_1059_1066" id="expType_1015_1022" title="Referenced at line 32, 33, 33">expType</a> }
    <a href="#t_1013_1014" id="t_1029_1030" title="Defined at line 30">t</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_1034_1044" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_962_963" id="s_1045_1046" title="Defined at line 30">s</a>, <a href="#sort_996_1000" id="sort_1048_1052" title="Defined at line 30">sort</a>),
    <a href="#expType_1015_1022" id="expType_1059_1066" title="Defined at line 30">expType</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1070_1079" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_962_963" id="s_1080_1081" title="Defined at line 30">s</a>, <a href="#exp_1002_1005" id="exp_1083_1086" title="Defined at line 30">exp</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_1093_1107" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#expType_1015_1022" id="expType_1108_1115" title="Defined at line 30">expType</a>, <a href="#t_1013_1014" id="t_1117_1118" title="Defined at line 30">t</a>) | <span class="keyword">error</span> $[Expression [<a href="#exp_1002_1005" id="exp_1142_1145" title="Defined at line 30">exp</a>] is not of type [<a href="#sort_996_1000" id="sort_1163_1167" title="Defined at line 30">sort</a>], got type [<a href="#expType_1015_1022" id="expType_1180_1187" title="Defined at line 30">expType</a>]] @<a href="#exp_1002_1005" id="exp_1191_1194" title="Defined at line 30">exp</a>,
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1200_1210" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_965_971" id="s_decl_1211_1217" title="Defined at line 30">s_decl</a>, <a href="#x_993_994" id="x_1219_1220" title="Defined at line 30">x</a>, <a href="#t_1013_1014" id="t_1222_1223" title="Defined at line 30">t</a>),
    @<a href="#x_993_994" id="x_1231_1232" title="Defined at line 30">x</a>.<span class="keyword">type</span> := <a href="#t_1013_1014" id="t_1241_1242" title="Defined at line 30">t</a>.

  <a href="#templateVarDeclOk_686_703" id="templateVarDeclOk_1247_1264" title="Defined at line 23">templateVarDeclOk</a>(<a href="#s_1341_1342" id="s_1265_1266" title="Referenced at line 38">s</a>, <a href="#s_decl_1442_1448" id="s_decl_1268_1274" title="Referenced at line 40">s_decl</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateVarDeclInitInferred_4453_4480" id="TemplateVarDeclInitInferred_1276_1303" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 135">TemplateVarDeclInitInferred</a>(<a href="#x_1450_1451" id="x_1304_1305" title="Referenced at line 40, 41">x</a>, <a href="#exp_1344_1347" id="exp_1307_1310" title="Referenced at line 38, 39, 39">exp</a>)) :- { <a href="#t_1326_1327" id="t_1318_1319" title="Referenced at line 38, 39, 40, 41">t</a> }
    <a href="#t_1318_1319" id="t_1326_1327" title="Defined at line 37">t</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1331_1340" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1265_1266" id="s_1341_1342" title="Defined at line 37">s</a>, <a href="#exp_1307_1310" id="exp_1344_1347" title="Defined at line 37">exp</a>),
    <a href="../../webdsl-types.stx#inequalType_10560_10571" id="inequalType_1354_1365" title="Defined at ../../webdsl-types.stx line 286">inequalType</a>(<a href="#t_1318_1319" id="t_1366_1367" title="Defined at line 37">t</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_1369_1376" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()) | <span class="keyword">error</span> $[Unable to infer type of [<a href="#exp_1307_1310" id="exp_1415_1418" title="Defined at line 37">exp</a>]] @<a href="#exp_1307_1310" id="exp_1422_1425" title="Defined at line 37">exp</a>,
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_1431_1441" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_decl_1268_1274" id="s_decl_1442_1448" title="Defined at line 37">s_decl</a>, <a href="#x_1304_1305" id="x_1450_1451" title="Defined at line 37">x</a>, <a href="#t_1318_1319" id="t_1453_1454" title="Defined at line 37">t</a>),
    @<a href="#x_1304_1305" id="x_1462_1463" title="Defined at line 37">x</a>.<span class="keyword">type</span> := <a href="#t_1318_1319" id="t_1472_1473" title="Defined at line 37">t</a>.

<span class="keyword">rules</span> <span class="layout">// action definitions</span>

  <a href="#templateActionOk_1594_1610" id="templateActionOk_1507_1523" title="Referenced at line 46, 63, 78">templateActionOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_1556_1565" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a>) * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Statement_350_359" id="Statement_1574_1583" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 23">Statement</a>) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_1587_1591" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#templateActionOk_1507_1523" id="templateActionOk_1594_1610" title="Defined at line 45">templateActionOk</a>(<a href="#s_1703_1704" id="s_1611_1612" title="Referenced at line 47, 48">s</a>, <a href="#s_pha_1963_1968" id="s_pha_1614_1619" title="Referenced at line 51">s_pha</a>, <a href="#a_1970_1971" id="a_1621_1622" title="Referenced at line 51">a</a>, <a href="#args_1826_1830" id="args_1624_1628" title="Referenced at line 48, 49, 51">args</a>, <a href="#stmts_2023_2028" id="stmts_1630_1635" title="Referenced at line 52">stmts</a>, <a href="#declare_1989_1996" id="declare_1637_1644" title="Referenced at line 51">declare</a>) :- {<a href="#s_fun_1685_1690" id="s_fun_1650_1655" title="Referenced at line 47, 47, 49, 50">s_fun</a> <a href="#s_fun_body_1900_1910" id="s_fun_body_1656_1666" title="Referenced at line 50, 50, 52">s_fun_body</a> <a href="#argTypes_1799_1807" id="argTypes_1667_1675" title="Referenced at line 48, 49, 51">argTypes</a>}
    <span class="keyword">new</span> <a href="#s_fun_1650_1655" id="s_fun_1685_1690" title="Defined at line 46">s_fun</a>, <a href="#s_fun_1650_1655" id="s_fun_1692_1697" title="Defined at line 46">s_fun</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_1699_1700" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_1611_1612" id="s_1703_1704" title="Defined at line 46">s</a>, <span class="layout">// TO-DO: possibly create different label for edges out of actions, abusing P label here</span>
    <a href="#argTypes_1667_1675" id="argTypes_1799_1807" title="Defined at line 46">argTypes</a> == <a href="../../actions/functions.stx#typesOfArgs_6612_6623" id="typesOfArgs_1811_1822" title="Defined at ../../actions/functions.stx line 138">typesOfArgs</a>(<a href="#s_1611_1612" id="s_1823_1824" title="Defined at line 46">s</a>, <a href="#args_1624_1628" id="args_1826_1830" title="Defined at line 46">args</a>),
    <a href="../../webdsl.stx#declareParameters_14585_14602" id="declareParameters_1837_1854" title="Defined at ../../webdsl.stx line 332">declareParameters</a>(<a href="#s_fun_1650_1655" id="s_fun_1855_1860" title="Defined at line 46">s_fun</a>, <a href="../../actions/functions.stx#zipArgTypes_6882_6893" id="zipArgTypes_1862_1873" title="Defined at ../../actions/functions.stx line 145">zipArgTypes</a>(<a href="#args_1624_1628" id="args_1874_1878" title="Defined at line 46">args</a>, <a href="#argTypes_1667_1675" id="argTypes_1880_1888" title="Defined at line 46">argTypes</a>)),
    <span class="keyword">new</span> <a href="#s_fun_body_1656_1666" id="s_fun_body_1900_1910" title="Defined at line 46">s_fun_body</a>, <a href="#s_fun_body_1656_1666" id="s_fun_body_1912_1922" title="Defined at line 46">s_fun_body</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_1924_1925" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_fun_1650_1655" id="s_fun_1928_1933" title="Defined at line 46">s_fun</a>,
    <a href="#optionallyDeclareAction_2046_2069" id="optionallyDeclareAction_1939_1962" title="Defined at line 54">optionallyDeclareAction</a>(<a href="#s_pha_1614_1619" id="s_pha_1963_1968" title="Defined at line 46">s_pha</a>, <a href="#a_1621_1622" id="a_1970_1971" title="Defined at line 46">a</a>, <a href="#args_1624_1628" id="args_1973_1977" title="Defined at line 46">args</a>, <a href="#argTypes_1667_1675" id="argTypes_1979_1987" title="Defined at line 46">argTypes</a>, <a href="#declare_1637_1644" id="declare_1989_1996" title="Defined at line 46">declare</a>),
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_2003_2010" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_fun_body_1656_1666" id="s_fun_body_2011_2021" title="Defined at line 46">s_fun_body</a>, <a href="#stmts_1630_1635" id="stmts_2023_2028" title="Defined at line 46">stmts</a>, <a href="../../webdsl-types.stx#PAGE_624_628" id="PAGE_2030_2034" title="Defined at ../../webdsl-types.stx line 26">PAGE</a>(_, _)).

  <a href="#optionallyDeclareAction_1939_1962" id="optionallyDeclareAction_2046_2069" title="Referenced at line 51, 55, 56">optionallyDeclareAction</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_2094_2103" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 11">FormalArg</a>) * <span class="keyword">list</span>(<a href="../../webdsl.stx#TYPE_669_673" id="TYPE_2112_2116" title="Defined at ../../webdsl.stx line 29">TYPE</a>) * <a href="../../webdsl.stx#BOOL_697_701" id="BOOL_2120_2124" title="Defined at ../../webdsl.stx line 30">BOOL</a>
  <a href="#optionallyDeclareAction_2046_2069" id="optionallyDeclareAction_2127_2150" title="Defined at line 54">optionallyDeclareAction</a>(_, _, _, _, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_2163_2168" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).
  <a href="#optionallyDeclareAction_2046_2069" id="optionallyDeclareAction_2175_2198" title="Defined at line 54">optionallyDeclareAction</a>(<a href="#s_2240_2241" id="s_2199_2200" title="Referenced at line 56">s</a>, <a href="#a_2243_2244" id="a_2202_2203" title="Referenced at line 56">a</a>, <a href="#args_2262_2266" id="args_2205_2209" title="Referenced at line 56">args</a>, <a href="#ts_2269_2271" id="ts_2211_2213" title="Referenced at line 56">ts</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_2215_2219" title="Defined at ../../webdsl.stx line 34">TRUE</a>()) :- <a href="../../webdsl.stx#declareAction_11632_11645" id="declareAction_2226_2239" title="Defined at ../../webdsl.stx line 265">declareAction</a>(<a href="#s_2199_2200" id="s_2240_2241" title="Defined at line 56">s</a>, <a href="#a_2202_2203" id="a_2243_2244" title="Defined at line 56">a</a>, <a href="../../webdsl.stx#FUNCTION_ORIGIN_862_877" id="FUNCTION_ORIGIN_2246_2261" title="Defined at ../../webdsl.stx line 37">FUNCTION_ORIGIN</a>(<a href="#args_2205_2209" id="args_2262_2266" title="Defined at line 56">args</a>), <a href="#ts_2211_2213" id="ts_2269_2271" title="Defined at line 56">ts</a>).

  <a href="../../webdsl.stx#defOk_15473_15478" id="defOk_2277_2282" title="Defined at ../../webdsl.stx line 356">defOk</a>(_, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Action2Definition_2392_2409" id="Action2Definition_2286_2303" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 77">Action2Definition</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Action_11091_11097" id="Action_2304_2310" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 235">Action</a>(_, <a href="#a_2394_2395" id="a_2314_2315" title="Referenced at line 58">a</a>, _, _))) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Actions are only allowed in pages and templates] @<a href="#a_2314_2315" id="a_2394_2395" title="Defined at line 58">a</a>.

<span class="keyword">rules</span> <span class="layout">// action calls</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_2423_2440" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_2548_2549" id="s_2441_2442" title="Referenced at line 63">s</a>, _, <a href="#s_pha_2551_2556" id="s_pha_2447_2452" title="Referenced at line 63">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Action2TemplateElement_4186_4208" id="Action2TemplateElement_2454_2476" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 130">Action2TemplateElement</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Action_11091_11097" id="Action_2477_2483" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 235">Action</a>(_, <a href="#a_2558_2559" id="a_2487_2488" title="Referenced at line 63">a</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#FormalArgs_1478_1488" id="FormalArgs_2490_2500" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 57">FormalArgs</a>(<a href="#args_2561_2565" id="args_2501_2505" title="Referenced at line 63">args</a>), <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_2508_2513" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_2567_2572" id="stmts_2514_2519" title="Referenced at line 63">stmts</a>)))) :-
    <a href="#templateActionOk_1507_1523" id="templateActionOk_2531_2547" title="Defined at line 45">templateActionOk</a>(<a href="#s_2441_2442" id="s_2548_2549" title="Defined at line 62">s</a>, <a href="#s_pha_2447_2452" id="s_pha_2551_2556" title="Defined at line 62">s_pha</a>, <a href="#a_2487_2488" id="a_2558_2559" title="Defined at line 62">a</a>, <a href="#args_2501_2505" id="args_2561_2565" title="Defined at line 62">args</a>, <a href="#stmts_2514_2519" id="stmts_2567_2572" title="Defined at line 62">stmts</a>, <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_2574_2578" title="Defined at ../../webdsl.stx line 34">TRUE</a>()).

  <a href="#actionCallOrInlineOrExpOk_2648_2673" id="actionCallOrInlineOrExpOk_2586_2611" title="Referenced at line 66, 67; ../template-calls.stx line 112">actionCallOrInlineOrExpOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ActionCallOrInlineOrExp_727_750" id="ActionCallOrInlineOrExp_2622_2645" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 41">ActionCallOrInlineOrExp</a>
  <a href="#actionCallOrInlineOrExpOk_2586_2611" id="actionCallOrInlineOrExpOk_2648_2673" title="Defined at line 65">actionCallOrInlineOrExpOk</a>(<a href="#s_2724_2725" id="s_2674_2675" title="Referenced at line 66">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ActionCallOrInline_10558_10576" id="ActionCallOrInline_2677_2695" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 225">ActionCallOrInline</a>(<a href="#a_2727_2728" id="a_2696_2697" title="Referenced at line 66">a</a>)) :- <a href="#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_2703_2723" title="Defined at line 70">actionCallOrInlineOk</a>(<a href="#s_2674_2675" id="s_2724_2725" title="Defined at line 66">s</a>, <a href="#a_2696_2697" id="a_2727_2728" title="Defined at line 66">a</a>).
  <a href="#actionCallOrInlineOrExpOk_2586_2611" id="actionCallOrInlineOrExpOk_2733_2758" title="Defined at line 65">actionCallOrInlineOrExpOk</a>(<a href="#s_2839_2840" id="s_2759_2760" title="Referenced at line 68, 68">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ActionCallOrInlineExp_10629_10650" id="ActionCallOrInlineExp_2762_2783" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 226">ActionCallOrInlineExp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#PropertySubmitExp_10702_10719" id="PropertySubmitExp_2784_2801" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 227">PropertySubmitExp</a>(<a href="#e_2842_2843" id="e_2802_2803" title="Referenced at line 68">e</a>))) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_2814_2828" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2829_2838" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2759_2760" id="s_2839_2840" title="Defined at line 67">s</a>, <a href="#e_2802_2803" id="e_2842_2843" title="Defined at line 67">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_2846_2852" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2759_2760" id="s_2853_2854" title="Defined at line 67">s</a>)) | <span class="keyword">error</span> $[Expression must be compatible with type String].

  <a href="#actionCallOrInlineOk_2703_2723" id="actionCallOrInlineOk_2919_2939" title="Referenced at line 66, 71, 77; ../../webdsl-ui.stx line 186, 191, 196, 201">actionCallOrInlineOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ActionCallOrInline_704_722" id="ActionCallOrInline_2950_2968" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 40">ActionCallOrInline</a>
  <a href="#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_2971_2991" title="Defined at line 70">actionCallOrInlineOk</a>(<a href="#s_3074_3075" id="s_2992_2993" title="Referenced at line 72, 73">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ActionCall_9374_9384" id="ActionCall_2995_3005" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 208">ActionCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_3006_3014" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#a_3105_3106" id="a_3015_3016" title="Referenced at line 73, 73, 73, 75">a</a>, <a href="#args_3077_3081" id="args_3018_3022" title="Referenced at line 72, 74">args</a>))) :- {<a href="#argTypes_3050_3058" id="argTypes_3030_3038" title="Referenced at line 72, 74, 74">argTypes</a> <a href="#a'_3117_3119" id="a'_3039_3041" title="Referenced at line 73, 75">a'</a> <a href="#ts_3131_3133" id="ts_3042_3044" title="Referenced at line 73, 74, 74">ts</a>}
    <a href="#argTypes_3030_3038" id="argTypes_3050_3058" title="Defined at line 71">argTypes</a> == <a href="../../webdsl.stx#typesOfExps_16528_16539" id="typesOfExps_3062_3073" title="Defined at ../../webdsl.stx line 387">typesOfExps</a>(<a href="#s_2992_2993" id="s_3074_3075" title="Defined at line 71">s</a>, <a href="#args_3018_3022" id="args_3077_3081" title="Defined at line 71">args</a>),
    <a href="../../webdsl.stx#resolveAction_11886_11899" id="resolveAction_3088_3101" title="Defined at ../../webdsl.stx line 270">resolveAction</a>(<a href="#s_2992_2993" id="s_3102_3103" title="Defined at line 71">s</a>, <a href="#a_3015_3016" id="a_3105_3106" title="Defined at line 71">a</a>) == [(_, (<a href="#a'_3039_3041" id="a'_3117_3119" title="Defined at line 71">a'</a>, <a href="../../webdsl-types.stx#ACTION_400_406" id="ACTION_3121_3127" title="Defined at ../../webdsl-types.stx line 18">ACTION</a>(_, <a href="#ts_3042_3044" id="ts_3131_3133" title="Defined at line 71">ts</a>))) | _] | <span class="keyword">error</span> $[Action [<a href="#a_3015_3016" id="a_3160_3161" title="Defined at line 71">a</a>] not defined] @<a href="#a_3015_3016" id="a_3177_3178" title="Defined at line 71">a</a>,
    <a href="../../webdsl.stx#typesCompatible_17112_17127" id="typesCompatible_3184_3199" title="Defined at ../../webdsl.stx line 401">typesCompatible</a>(<a href="#argTypes_3030_3038" id="argTypes_3200_3208" title="Defined at line 71">argTypes</a>, <a href="#ts_3042_3044" id="ts_3210_3212" title="Defined at line 71">ts</a>) == <a href="../../webdsl.stx#TRUE_828_832" id="TRUE_3217_3221" title="Defined at ../../webdsl.stx line 34">TRUE</a>() | <span class="keyword">error</span> $[Given argument types not compatible with action definition. Got [<a href="#argTypes_3030_3038" id="argTypes_3299_3307" title="Defined at line 71">argTypes</a>] but expected [<a href="#ts_3042_3044" id="ts_3323_3325" title="Defined at line 71">ts</a>]] @<a href="#args_3018_3022" id="args_3329_3333" title="Defined at line 71">args</a>,
    @<a href="#a_3015_3016" id="a_3340_3341" title="Defined at line 71">a</a>.<span class="keyword">ref</span> := <a href="#a'_3039_3041" id="a'_3349_3351" title="Defined at line 71">a'</a>.

  <a href="#actionCallOrInlineOk_2919_2939" id="actionCallOrInlineOk_3356_3376" title="Defined at line 70">actionCallOrInlineOk</a>(<a href="#s_3432_3433" id="s_3377_3378" title="Referenced at line 78, 78">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#InlineAction_9422_9434" id="InlineAction_3380_3392" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 209">InlineAction</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3393_3398" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3446_3451" id="stmts_3399_3404" title="Referenced at line 78">stmts</a>))) :-
    <a href="#templateActionOk_1507_1523" id="templateActionOk_3415_3431" title="Defined at line 45">templateActionOk</a>(<a href="#s_3377_3378" id="s_3432_3433" title="Defined at line 77">s</a>, <a href="#s_3377_3378" id="s_3435_3436" title="Defined at line 77">s</a>, "", [], <a href="#stmts_3399_3404" id="stmts_3446_3451" title="Defined at line 77">stmts</a>, <a href="../../webdsl.stx#FALSE_844_849" id="FALSE_3453_3458" title="Defined at ../../webdsl.stx line 35">FALSE</a>()).

<span class="keyword">rules</span> <span class="layout">// action blocks in templates</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3503_3520" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3565_3566" id="s_3521_3522" title="Referenced at line 83">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#Init_4150_4154" id="Init_3530_3534" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 129">Init</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3535_3540" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3568_3573" id="stmts_3541_3546" title="Referenced at line 83">stmts</a>))) :-
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_3557_3564" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_3521_3522" id="s_3565_3566" title="Defined at line 82">s</a>, <a href="#stmts_3541_3546" id="stmts_3568_3573" title="Defined at line 82">stmts</a>, <a href="../../webdsl-types.stx#PAGE_624_628" id="PAGE_3575_3579" title="Defined at ../../webdsl-types.stx line 26">PAGE</a>(_, _)).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3591_3608" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3663_3664" id="s_3609_3610" title="Referenced at line 86">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#DataBindAction_10908_10922" id="DataBindAction_3618_3632" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 231">DataBindAction</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3633_3638" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3666_3671" id="stmts_3639_3644" title="Referenced at line 86">stmts</a>))) :-
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_3655_3662" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_3609_3610" id="s_3663_3664" title="Defined at line 85">s</a>, <a href="#stmts_3639_3644" id="stmts_3666_3671" title="Defined at line 85">stmts</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3673_3680" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3688_3705" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3758_3759" id="s_3706_3707" title="Referenced at line 89">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#RenderAction_10954_10966" id="RenderAction_3715_3727" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 232">RenderAction</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3728_3733" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3761_3766" id="stmts_3734_3739" title="Referenced at line 89">stmts</a>))) :-
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_3750_3757" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_3706_3707" id="s_3758_3759" title="Defined at line 88">s</a>, <a href="#stmts_3734_3739" id="stmts_3761_3766" title="Defined at line 88">stmts</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3768_3775" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3783_3800" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3856_3857" id="s_3801_3802" title="Referenced at line 92">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#AllPhasesAction_10998_11013" id="AllPhasesAction_3810_3825" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 233">AllPhasesAction</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3826_3831" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3859_3864" id="stmts_3832_3837" title="Referenced at line 92">stmts</a>))) :-
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_3848_3855" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_3801_3802" id="s_3856_3857" title="Defined at line 91">s</a>, <a href="#stmts_3832_3837" id="stmts_3859_3864" title="Defined at line 91">stmts</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3866_3873" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_3881_3898" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_3953_3954" id="s_3899_3900" title="Referenced at line 95">s</a>, _, _, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ValidateAction_11045_11059" id="ValidateAction_3908_3922" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 234">ValidateAction</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Block_2123_2128" id="Block_3923_3928" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 81">Block</a>(<a href="#stmts_3956_3961" id="stmts_3929_3934" title="Referenced at line 95">stmts</a>))) :-
    <a href="../../webdsl.stx#stmtsOk_15878_15885" id="stmtsOk_3945_3952" title="Defined at ../../webdsl.stx line 363">stmtsOk</a>(<a href="#s_3899_3900" id="s_3953_3954" title="Defined at line 94">s</a>, <a href="#stmts_3929_3934" id="stmts_3956_3961" title="Defined at line 94">stmts</a>, <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3963_3970" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>()).

<span class="keyword">rules</span> <span class="layout">// statements</span>

  <a href="../../webdsl.stx#stmtOk_15783_15789" id="stmtOk_3999_4005" title="Defined at ../../webdsl.stx line 361">stmtOk</a>(<span id="s_4006_4007" title="Not referenced locally, nor via imports">s</span>, _, <span id="r_4012_4013" title="Not referenced locally, nor via imports">r</span>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Return_2229_2235" id="Return_4014_4020" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 84">Return</a>(_), <a href="../../webdsl-types.stx#PAGE_624_628" id="PAGE_4025_4029" title="Defined at ../../webdsl-types.stx line 26">PAGE</a>(_, _)) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Expected page call in return statement].
  <a href="../../webdsl.stx#stmtOk_15783_15789" id="stmtOk_4099_4105" title="Defined at ../../webdsl.stx line 361">stmtOk</a>(<a href="#s_4194_4195" id="s_4106_4107" title="Referenced at line 101">s</a>, _, <span id="r_4112_4113" title="Not referenced locally, nor via imports">r</span>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Return_2229_2235" id="Return_4114_4120" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 84">Return</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall2Exp_4393_4405" id="ThisCall2Exp_4121_4133" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 135">ThisCall2Exp</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ThisCall_4428_4436" id="ThisCall_4134_4142" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 136">ThisCall</a>(<a href="#p_4197_4198" id="p_4143_4144" title="Referenced at line 101">p</a>, <a href="#exps_4200_4204" id="exps_4146_4150" title="Referenced at line 101">exps</a>))), <a href="../../webdsl-types.stx#PAGE_624_628" id="PAGE_4155_4159" title="Defined at ../../webdsl-types.stx line 26">PAGE</a>(_, _)) :-
    <a href="../template-calls.stx#pageCallOk_internal_3645_3664" id="pageCallOk_internal_4174_4193" title="Defined at ../template-calls.stx line 84">pageCallOk_internal</a>(<a href="#s_4106_4107" id="s_4194_4195" title="Defined at line 100">s</a>, <a href="#p_4143_4144" id="p_4197_4198" title="Defined at line 100">p</a>, <a href="#exps_4146_4150" id="exps_4200_4204" title="Defined at line 100">exps</a>).

  <a href="../../webdsl.stx#stmtOk_15783_15789" id="stmtOk_4210_4216" title="Defined at ../../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#GoTo_2287_2291" id="GoTo_4223_4227" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 86">GoTo</a>(<span id="pc_4228_4230" title="Not referenced locally, nor via imports">pc</span>), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].

<span class="keyword">rules</span> <span class="layout">// expressions</span>

  <span class="layout">// pass new scope as placeholder and action scope because passing `s`</span>
  <span class="layout">// would introduce a CloseLabel exception in the concurrent solver.</span>
  <span class="layout">// this causes any actions/placeholders references and declarations to fail</span>
  <span class="layout">// but this is not a big deal since there's no use case for working with</span>
  <span class="layout">// actions/placeholders in rendertemplate(...) and validatetemplate(...) calls</span>

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4707_4716" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4786_4787" id="s_4717_4718" title="Referenced at line 114">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#RenderTemplateFunctionCall_6668_6694" id="RenderTemplateFunctionCall_4720_4746" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 191">RenderTemplateFunctionCall</a>(<a href="#tc_4794_4796" id="tc_4747_4749" title="Referenced at line 114">tc</a>)) = <a href="../../types/built-ins.stx#string_1822_1828" id="string_4754_4760" title="Defined at ../../types/built-ins.stx line 48">string</a>(s) :-
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_4771_4785" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_4717_4718" id="s_4786_4787" title="Defined at line 113">s</a>, <span class="keyword">new</span>, <a href="#tc_4747_4749" id="tc_4794_4796" title="Defined at line 113">tc</a>).

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4802_4811" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_4883_4884" id="s_4812_4813" title="Referenced at line 117">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#ValidateTemplateFunctionCall_6721_6749" id="ValidateTemplateFunctionCall_4815_4843" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 192">ValidateTemplateFunctionCall</a>(<a href="#tc_4891_4893" id="tc_4844_4846" title="Referenced at line 117">tc</a>)) = <a href="../../types/built-ins.stx#string_1822_1828" id="string_4851_4857" title="Defined at ../../types/built-ins.stx line 48">string</a>(s) :-
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_4868_4882" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_4812_4813" id="s_4883_4884" title="Defined at line 116">s</a>, <span class="keyword">new</span>, <a href="#tc_4844_4846" id="tc_4891_4893" title="Defined at line 116">tc</a>).

<span class="keyword">rules</span> <span class="layout">// template var arg exp</span>

  <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_4930_4939" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5018_5019" id="s_4940_4941" title="Referenced at line 122">s</a>, <a href="#e_5039_5040" id="e_4943_4944" title="Referenced at line 123">e</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#TemplateVarArgExp_11479_11496" id="TemplateVarArgExp_4945_4962" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 242">TemplateVarArgExp</a>(<a href="#expVarArgs_5021_5031" id="expVarArgs_4963_4973" title="Referenced at line 122">expVarArgs</a>)) = <a href="../../webdsl-types.stx#LIST_891_895" id="LIST_4978_4982" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#t_4993_4994" id="t_4983_4984" title="Referenced at line 122, 123">t</a>) :-
    <a href="#t_4983_4984" id="t_4993_4994" title="Defined at line 121">t</a> == <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_4998_5017" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_4940_4941" id="s_5018_5019" title="Defined at line 121">s</a>, <a href="#expVarArgs_4963_4973" id="expVarArgs_5021_5031" title="Defined at line 121">expVarArgs</a>),
    @<a href="#e_4943_4944" id="e_5039_5040" title="Defined at line 121">e</a>.<span class="keyword">type</span> := <a href="#t_4983_4984" id="t_5049_5050" title="Defined at line 121">t</a>.

  <a href="#typeOfExpVarArgList_4998_5017" id="typeOfExpVarArgList_5055_5074" title="Referenced at line 122, 126, 127, 153, 163, 172, 182">typeOfExpVarArgList</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArg_893_902" id="ExpVarArg_5090_5099" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 48">ExpVarArg</a>) -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5104_5108" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_5111_5130" title="Defined at line 125">typeOfExpVarArgList</a>(<span id="s_5131_5132" title="Not referenced locally, nor via imports">s</span>, []) = <a href="../../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_5140_5147" title="Defined at ../../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot infer the type of an empty list of ExpVarArgs].
  <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_5226_5245" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_5292_5293" id="s_5246_5247" title="Referenced at line 128, 129">s</a>, [<a href="#hd_5295_5297" id="hd_5250_5252" title="Referenced at line 128">hd</a> | <a href="#tl_5328_5330" id="tl_5255_5257" title="Referenced at line 129">tl</a>]) = <a href="#t_5271_5272" id="t_5262_5263" title="Referenced at line 128, 129">t</a> :-
    <a href="#t_5262_5263" id="t_5271_5272" title="Defined at line 127">t</a> == <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_5276_5291" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_5246_5247" id="s_5292_5293" title="Defined at line 127">s</a>, <a href="#hd_5250_5252" id="hd_5295_5297" title="Defined at line 127">hd</a>),
    <a href="#expVarArgsCompatible_5339_5359" id="expVarArgsCompatible_5304_5324" title="Defined at line 131">expVarArgsCompatible</a>(<a href="#s_5246_5247" id="s_5325_5326" title="Defined at line 127">s</a>, <a href="#tl_5255_5257" id="tl_5328_5330" title="Defined at line 127">tl</a>, <a href="#t_5262_5263" id="t_5332_5333" title="Defined at line 127">t</a>).

  <a href="#expVarArgsCompatible_5304_5324" id="expVarArgsCompatible_5339_5359" title="Referenced at line 129, 132, 133, 136">expVarArgsCompatible</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArg_893_902" id="ExpVarArg_5375_5384" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 48">ExpVarArg</a>) * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5388_5392" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#expVarArgsCompatible_5339_5359" id="expVarArgsCompatible_5395_5415" title="Defined at line 131">expVarArgsCompatible</a>(_, [], _).
  <a href="#expVarArgsCompatible_5339_5359" id="expVarArgsCompatible_5429_5449" title="Defined at line 131">expVarArgsCompatible</a>(<a href="#s_5504_5505" id="s_5450_5451" title="Referenced at line 134, 136">s</a>, [<a href="#hd_5507_5509" id="hd_5454_5456" title="Referenced at line 134, 135, 135">hd</a> | <a href="#tl_5631_5633" id="tl_5459_5461" title="Referenced at line 136">tl</a>], <a href="#T1_5535_5537" id="T1_5464_5466" title="Referenced at line 135, 135, 136">T1</a>) :- { <a href="#T2_5482_5484" id="T2_5473_5475" title="Referenced at line 134, 135, 135">T2</a> }
    <a href="#T2_5473_5475" id="T2_5482_5484" title="Defined at line 133">T2</a> == <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_5488_5503" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_5450_5451" id="s_5504_5505" title="Defined at line 133">s</a>, <a href="#hd_5454_5456" id="hd_5507_5509" title="Defined at line 133">hd</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5516_5530" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="#T2_5473_5475" id="T2_5531_5533" title="Defined at line 133">T2</a>, <a href="#T1_5464_5466" id="T1_5535_5537" title="Defined at line 133">T1</a>) | <span class="keyword">error</span> $[Type of [<a href="#hd_5454_5456" id="hd_5558_5560" title="Defined at line 133">hd</a>] must be compatible [<a href="#T1_5464_5466" id="T1_5582_5584" title="Defined at line 133">T1</a>], [<a href="#T2_5473_5475" id="T2_5588_5590" title="Defined at line 133">T2</a>] given]@<a href="#hd_5454_5456" id="hd_5599_5601" title="Defined at line 133">hd</a>,
    <a href="#expVarArgsCompatible_5339_5359" id="expVarArgsCompatible_5607_5627" title="Defined at line 131">expVarArgsCompatible</a>(<a href="#s_5450_5451" id="s_5628_5629" title="Defined at line 133">s</a>, <a href="#tl_5459_5461" id="tl_5631_5633" title="Defined at line 133">tl</a>, <a href="#T1_5464_5466" id="T1_5635_5637" title="Defined at line 133">T1</a>).

  <a href="#typeOfExpVarArg_5276_5291" id="typeOfExpVarArg_5643_5658" title="Referenced at line 128, 134, 139, 142, 156, 166, 175">typeOfExpVarArg</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArg_893_902" id="ExpVarArg_5669_5678" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 48">ExpVarArg</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_5682_5686" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_5689_5704" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_5803_5804" id="s_5705_5706" title="Referenced at line 140">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArg_11828_11837" id="ExpVarArg_5708_5717" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 247">ExpVarArg</a>(<a href="#expsOrTemplateArgs_5806_5824" id="expsOrTemplateArgs_5718_5736" title="Referenced at line 140">expsOrTemplateArgs</a>)) = <a href="../../webdsl-types.stx#TEMPLATEVARARG_1090_1104" id="TEMPLATEVARARG_5741_5755" title="Defined at ../../webdsl-types.stx line 43">TEMPLATEVARARG</a>(<a href="#ts_5772_5774" id="ts_5756_5758" title="Referenced at line 140">ts</a>, <span class="keyword">new</span>) :-
    <a href="#ts_5756_5758" id="ts_5772_5774" title="Defined at line 139">ts</a> == <a href="#typesOfExpOrTemplateArgs_7951_7975" id="typesOfExpOrTemplateArgs_5778_5802" title="Defined at line 187">typesOfExpOrTemplateArgs</a>(<a href="#s_5705_5706" id="s_5803_5804" title="Defined at line 139">s</a>, <a href="#expsOrTemplateArgs_5718_5736" id="expsOrTemplateArgs_5806_5824" title="Defined at line 139">expsOrTemplateArgs</a>).

  <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_5830_5845" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_5973_5974" id="s_5846_5847" title="Referenced at line 143, 144, 149">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgFor_11526_11538" id="ExpVarArgFor_5849_5861" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 243">ExpVarArgFor</a>(<a href="#x_6285_6286" id="x_5862_5863" title="Referenced at line 151, 152, 154">x</a>, <a href="#srt_5976_5979" id="srt_5865_5868" title="Referenced at line 143">srt</a>, <a href="#exp_6012_6015" id="exp_5870_5873" title="Referenced at line 144, 148">exp</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_5875_5888" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_6259_6260" id="f_5889_5890" title="Referenced at line 150">f</a>), <a href="#expVarArgs_6438_6448" id="expVarArgs_5893_5903" title="Referenced at line 153">expVarArgs</a>)) = <a href="#t_6406_6407" id="t_5908_5909" title="Referenced at line 153">t</a> :- { <a href="#s_for_6211_6216" id="s_for_5915_5920" title="Referenced at line 149, 149, 150, 151, 152, 153">s_for</a> <a href="#typeOfSort_5948_5958" id="typeOfSort_5921_5931" title="Referenced at line 143, 146, 147, 148, 151, 154">typeOfSort</a> <a href="#typeOfExp_5986_5995" id="typeOfExp_5932_5941" title="Referenced at line 144, 146, 147, 148">typeOfExp</a> }
    <a href="#typeOfSort_5921_5931" id="typeOfSort_5948_5958" title="Defined at line 142">typeOfSort</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_5962_5972" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_5846_5847" id="s_5973_5974" title="Defined at line 142">s</a>, <a href="#srt_5865_5868" id="srt_5976_5979" title="Defined at line 142">srt</a>),
    <a href="#typeOfExp_5932_5941" id="typeOfExp_5986_5995" title="Defined at line 142">typeOfExp</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5999_6008" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5846_5847" id="s_6009_6010" title="Defined at line 142">s</a>, <a href="#exp_5870_5873" id="exp_6012_6015" title="Defined at line 142">exp</a>),
    <a href="../../webdsl.stx#or_17705_17707" id="or_6022_6024" title="Defined at ../../webdsl.stx line 417">or</a>(
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6032_6042" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="../../webdsl-types.stx#LIST_891_895" id="LIST_6043_6047" title="Defined at ../../webdsl-types.stx line 35">LIST</a>(<a href="#typeOfSort_5921_5931" id="typeOfSort_6048_6058" title="Defined at line 142">typeOfSort</a>), <a href="#typeOfExp_5932_5941" id="typeOfExp_6061_6070" title="Defined at line 142">typeOfExp</a>),
      <a href="../../webdsl-types.stx#equalTypeB_10725_10735" id="equalTypeB_6079_6089" title="Defined at ../../webdsl-types.stx line 292">equalTypeB</a>(<a href="../../webdsl-types.stx#SET_915_918" id="SET_6090_6093" title="Defined at ../../webdsl-types.stx line 36">SET</a>(<a href="#typeOfSort_5921_5931" id="typeOfSort_6094_6104" title="Defined at line 142">typeOfSort</a>), <a href="#typeOfExp_5932_5941" id="typeOfExp_6107_6116" title="Defined at line 142">typeOfExp</a>)
    ) | <span class="keyword">error</span> $[Must be a list or set of type [<a href="#typeOfSort_5921_5931" id="typeOfSort_6165_6175" title="Defined at line 142">typeOfSort</a>], [<a href="#typeOfExp_5932_5941" id="typeOfExp_6179_6188" title="Defined at line 142">typeOfExp</a>] given] @<a href="#exp_5870_5873" id="exp_6198_6201" title="Defined at line 142">exp</a>,
    <span class="keyword">new</span> <a href="#s_for_5915_5920" id="s_for_6211_6216" title="Defined at line 142">s_for</a>, <a href="#s_for_5915_5920" id="s_for_6218_6223" title="Defined at line 142">s_for</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_6225_6226" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_5846_5847" id="s_6229_6230" title="Defined at line 142">s</a>,
    <a href="../../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_6236_6251" title="Defined at ../../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_5915_5920" id="s_for_6252_6257" title="Defined at line 142">s_for</a>, <a href="#f_5889_5890" id="f_6259_6260" title="Defined at line 142">f</a>),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_6267_6277" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_for_5915_5920" id="s_for_6278_6283" title="Defined at line 142">s_for</a>, <a href="#x_5862_5863" id="x_6285_6286" title="Defined at line 142">x</a>, <a href="#typeOfSort_5921_5931" id="typeOfSort_6288_6298" title="Defined at line 142">typeOfSort</a>),
    <a href="../../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_6305_6322" title="Defined at ../../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_5915_5920" id="s_for_6323_6328" title="Defined at line 142">s_for</a>, <a href="#x_5862_5863" id="x_6330_6331" title="Defined at line 142">x</a>, <a href="../../entities/annotations.stx#DERIVED_427_434" id="DERIVED_6333_6340" title="Defined at ../../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="#t_5908_5909" id="t_6406_6407" title="Defined at line 142">t</a> == <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_6411_6430" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_for_5915_5920" id="s_for_6431_6436" title="Defined at line 142">s_for</a>, <a href="#expVarArgs_5893_5903" id="expVarArgs_6438_6448" title="Defined at line 142">expVarArgs</a>),
    @<a href="#x_5862_5863" id="x_6456_6457" title="Defined at line 142">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_5921_5931" id="typeOfSort_6466_6476" title="Defined at line 142">typeOfSort</a>.

  <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_6481_6496" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_6625_6626" id="s_6497_6498" title="Referenced at line 157, 159">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgForInferred_11604_11624" id="ExpVarArgForInferred_6500_6520" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 244">ExpVarArgForInferred</a>(<a href="#x_6763_6764" id="x_6521_6522" title="Referenced at line 161, 162, 164">x</a>, <a href="#exp_6628_6631" id="exp_6524_6527" title="Referenced at line 157">exp</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_6529_6542" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_6737_6738" id="f_6543_6544" title="Referenced at line 160">f</a>), <a href="#expVarArgs_6916_6926" id="expVarArgs_6547_6557" title="Referenced at line 163">expVarArgs</a>)) = <a href="#t_6884_6885" id="t_6562_6563" title="Referenced at line 163">t</a> :- { <a href="#s_for_6689_6694" id="s_for_6569_6574" title="Referenced at line 159, 159, 160, 161, 162, 163">s_for</a> <a href="#typeOfExp_6602_6611" id="typeOfExp_6575_6584" title="Referenced at line 157, 158">typeOfExp</a> <a href="#typeOfSort_6638_6648" id="typeOfSort_6585_6595" title="Referenced at line 158, 161, 164">typeOfSort</a> }
    <a href="#typeOfExp_6575_6584" id="typeOfExp_6602_6611" title="Defined at line 156">typeOfExp</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_6615_6624" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_6497_6498" id="s_6625_6626" title="Defined at line 156">s</a>, <a href="#exp_6524_6527" id="exp_6628_6631" title="Defined at line 156">exp</a>),
    <a href="#typeOfSort_6585_6595" id="typeOfSort_6638_6648" title="Defined at line 156">typeOfSort</a> == <a href="../../webdsl-types.stx#stripGenericType_9921_9937" id="stripGenericType_6652_6668" title="Defined at ../../webdsl-types.stx line 267">stripGenericType</a>(<a href="#typeOfExp_6575_6584" id="typeOfExp_6669_6678" title="Defined at line 156">typeOfExp</a>),
    <span class="keyword">new</span> <a href="#s_for_6569_6574" id="s_for_6689_6694" title="Defined at line 156">s_for</a>, <a href="#s_for_6569_6574" id="s_for_6696_6701" title="Defined at line 156">s_for</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_6703_6704" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_6497_6498" id="s_6707_6708" title="Defined at line 156">s</a>,
    <a href="../../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_6714_6729" title="Defined at ../../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_6569_6574" id="s_for_6730_6735" title="Defined at line 156">s_for</a>, <a href="#f_6543_6544" id="f_6737_6738" title="Defined at line 156">f</a>),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_6745_6755" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_for_6569_6574" id="s_for_6756_6761" title="Defined at line 156">s_for</a>, <a href="#x_6521_6522" id="x_6763_6764" title="Defined at line 156">x</a>, <a href="#typeOfSort_6585_6595" id="typeOfSort_6766_6776" title="Defined at line 156">typeOfSort</a>),
    <a href="../../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_6783_6800" title="Defined at ../../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_6569_6574" id="s_for_6801_6806" title="Defined at line 156">s_for</a>, <a href="#x_6521_6522" id="x_6808_6809" title="Defined at line 156">x</a>, <a href="../../entities/annotations.stx#DERIVED_427_434" id="DERIVED_6811_6818" title="Defined at ../../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="#t_6562_6563" id="t_6884_6885" title="Defined at line 156">t</a> == <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_6889_6908" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_for_6569_6574" id="s_for_6909_6914" title="Defined at line 156">s_for</a>, <a href="#expVarArgs_6547_6557" id="expVarArgs_6916_6926" title="Defined at line 156">expVarArgs</a>),
    @<a href="#x_6521_6522" id="x_6934_6935" title="Defined at line 156">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_6585_6595" id="typeOfSort_6944_6954" title="Defined at line 156">typeOfSort</a>.

  <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_6959_6974" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_7090_7091" id="s_6975_6976" title="Referenced at line 167, 168">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgForAll_11683_11698" id="ExpVarArgForAll_6978_6993" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 245">ExpVarArgForAll</a>(<a href="#x_7181_7182" id="x_6994_6995" title="Referenced at line 170, 171, 173">x</a>, <a href="#srt_7093_7096" id="srt_6997_7000" title="Referenced at line 167">srt</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#OptFilterSome_5416_5429" id="OptFilterSome_7002_7015" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 155">OptFilterSome</a>(<a href="#f_7155_7156" id="f_7016_7017" title="Referenced at line 169">f</a>), <a href="#expVarArgs_7334_7344" id="expVarArgs_7020_7030" title="Referenced at line 172">expVarArgs</a>)) = <a href="#t_7302_7303" id="t_7035_7036" title="Referenced at line 172">t</a> :- { <a href="#s_for_7107_7112" id="s_for_7042_7047" title="Referenced at line 168, 168, 169, 170, 171, 172">s_for</a> <a href="#typeOfSort_7065_7075" id="typeOfSort_7048_7058" title="Referenced at line 167, 170, 173">typeOfSort</a> }
    <a href="#typeOfSort_7048_7058" id="typeOfSort_7065_7075" title="Defined at line 166">typeOfSort</a> == <a href="../../webdsl-types.stx#typeOfSort_5551_5561" id="typeOfSort_7079_7089" title="Defined at ../../webdsl-types.stx line 160">typeOfSort</a>(<a href="#s_6975_6976" id="s_7090_7091" title="Defined at line 166">s</a>, <a href="#srt_6997_7000" id="srt_7093_7096" title="Defined at line 166">srt</a>),
    <span class="keyword">new</span> <a href="#s_for_7042_7047" id="s_for_7107_7112" title="Defined at line 166">s_for</a>, <a href="#s_for_7042_7047" id="s_for_7114_7119" title="Defined at line 166">s_for</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_7121_7122" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_6975_6976" id="s_7125_7126" title="Defined at line 166">s</a>,
    <a href="../../webdsl-actions.stx#forLoopFilterOk_8616_8631" id="forLoopFilterOk_7132_7147" title="Defined at ../../webdsl-actions.stx line 206">forLoopFilterOk</a>(<a href="#s_for_7042_7047" id="s_for_7148_7153" title="Defined at line 166">s_for</a>, <a href="#f_7016_7017" id="f_7155_7156" title="Defined at line 166">f</a>),
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_7163_7173" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_for_7042_7047" id="s_for_7174_7179" title="Defined at line 166">s_for</a>, <a href="#x_6994_6995" id="x_7181_7182" title="Defined at line 166">x</a>, <a href="#typeOfSort_7048_7058" id="typeOfSort_7184_7194" title="Defined at line 166">typeOfSort</a>),
    <a href="../../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_7201_7218" title="Defined at ../../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_7042_7047" id="s_for_7219_7224" title="Defined at line 166">s_for</a>, <a href="#x_6994_6995" id="x_7226_7227" title="Defined at line 166">x</a>, <a href="../../entities/annotations.stx#DERIVED_427_434" id="DERIVED_7229_7236" title="Defined at ../../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="#t_7035_7036" id="t_7302_7303" title="Defined at line 166">t</a> == <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_7307_7326" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_for_7042_7047" id="s_for_7327_7332" title="Defined at line 166">s_for</a>, <a href="#expVarArgs_7020_7030" id="expVarArgs_7334_7344" title="Defined at line 166">expVarArgs</a>),
    @<a href="#x_6994_6995" id="x_7352_7353" title="Defined at line 166">x</a>.<span class="keyword">type</span> := <a href="#typeOfSort_7048_7058" id="typeOfSort_7362_7372" title="Defined at line 166">typeOfSort</a>.

  <a href="#typeOfExpVarArg_5643_5658" id="typeOfExpVarArg_7377_7392" title="Defined at line 138">typeOfExpVarArg</a>(<a href="#s_7480_7481" id="s_7393_7394" title="Referenced at line 176, 177, 178, 179">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgForCount_11758_11775" id="ExpVarArgForCount_7396_7413" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 246">ExpVarArgForCount</a>(<a href="#x_7739_7740" id="x_7414_7415" title="Referenced at line 180, 181, 183">x</a>, <a href="#e1_7516_7518" id="e1_7417_7419" title="Referenced at line 177, 177">e1</a>, <a href="#e2_7618_7620" id="e2_7421_7423" title="Referenced at line 178, 178">e2</a>, <a href="#expVarArgs_7885_7895" id="expVarArgs_7425_7435" title="Referenced at line 182">expVarArgs</a>)) = <a href="#t_7853_7854" id="t_7440_7441" title="Referenced at line 182">t</a> :- { <a href="#s_for_7696_7701" id="s_for_7447_7452" title="Referenced at line 179, 179, 180, 181, 182">s_for</a> <a href="#int_7469_7472" id="int_7453_7456" title="Referenced at line 176, 177, 178, 180, 183">int</a> <span id="t1_7457_7459" title="Not referenced locally, nor via imports">t1</span> <span id="t2_7460_7462" title="Not referenced locally, nor via imports">t2</span> }
    <a href="#int_7453_7456" id="int_7469_7472" title="Defined at line 175">int</a> == <a href="../../types/built-ins.stx#int_1638_1641" id="int_7476_7479" title="Defined at ../../types/built-ins.stx line 41">int</a>(<a href="#s_7393_7394" id="s_7480_7481" title="Defined at line 175">s</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7488_7502" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7503_7512" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7393_7394" id="s_7513_7514" title="Defined at line 175">s</a>, <a href="#e1_7417_7419" id="e1_7516_7518" title="Defined at line 175">e1</a>), <a href="#int_7453_7456" id="int_7521_7524" title="Defined at line 175">int</a>) | <span class="keyword">error</span> $[Expression must be compatible with type Int] @<a href="#e1_7417_7419" id="e1_7582_7584" title="Defined at line 175">e1</a>,
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_7590_7604" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_7605_7614" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_7393_7394" id="s_7615_7616" title="Defined at line 175">s</a>, <a href="#e2_7421_7423" id="e2_7618_7620" title="Defined at line 175">e2</a>), <a href="#int_7453_7456" id="int_7623_7626" title="Defined at line 175">int</a>) | <span class="keyword">error</span> $[Expression must be compatible with type Int] @<a href="#e2_7421_7423" id="e2_7684_7686" title="Defined at line 175">e2</a>,
    <span class="keyword">new</span> <a href="#s_for_7447_7452" id="s_for_7696_7701" title="Defined at line 175">s_for</a>, <a href="#s_for_7447_7452" id="s_for_7703_7708" title="Defined at line 175">s_for</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_7710_7711" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_7393_7394" id="s_7714_7715" title="Defined at line 175">s</a>,
    <a href="../../webdsl.stx#declareVar_13281_13291" id="declareVar_7721_7731" title="Defined at ../../webdsl.stx line 301">declareVar</a>(<a href="#s_for_7447_7452" id="s_for_7732_7737" title="Defined at line 175">s_for</a>, <a href="#x_7414_7415" id="x_7739_7740" title="Defined at line 175">x</a>, <a href="#int_7453_7456" id="int_7742_7745" title="Defined at line 175">int</a>),
    <a href="../../entities/annotations.stx#declareAnnotation_758_775" id="declareAnnotation_7752_7769" title="Defined at ../../entities/annotations.stx line 36">declareAnnotation</a>(<a href="#s_for_7447_7452" id="s_for_7770_7775" title="Defined at line 175">s_for</a>, <a href="#x_7414_7415" id="x_7777_7778" title="Defined at line 175">x</a>, <a href="../../entities/annotations.stx#DERIVED_427_434" id="DERIVED_7780_7787" title="Defined at ../../entities/annotations.stx line 22">DERIVED</a>()), <span class="layout">// abuse derived annotation to declare immutability of x</span>
    <a href="#t_7440_7441" id="t_7853_7854" title="Defined at line 175">t</a> == <a href="#typeOfExpVarArgList_5055_5074" id="typeOfExpVarArgList_7858_7877" title="Defined at line 125">typeOfExpVarArgList</a>(<a href="#s_for_7447_7452" id="s_for_7878_7883" title="Defined at line 175">s_for</a>, <a href="#expVarArgs_7425_7435" id="expVarArgs_7885_7895" title="Defined at line 175">expVarArgs</a>),
    @<a href="#x_7414_7415" id="x_7903_7904" title="Defined at line 175">x</a>.<span class="keyword">type</span> := <a href="#int_7453_7456" id="int_7913_7916" title="Defined at line 175">int</a>.

<span class="keyword">rules</span> <span class="layout">// exp or template arg</span>

  <a href="#typesOfExpOrTemplateArgs_5778_5802" id="typesOfExpOrTemplateArgs_7951_7975" title="Referenced at line 140">typesOfExpOrTemplateArgs</a> <span class="keyword">maps</span> <a href="#typeOfExpOrTemplateArg_8028_8050" id="typeOfExpOrTemplateArg_7981_8003" title="Defined at line 188">typeOfExpOrTemplateArg</a>(*, <span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#typeOfExpOrTemplateArg_7981_8003" id="typeOfExpOrTemplateArg_8028_8050" title="Referenced at line 187, 189, 192">typeOfExpOrTemplateArg</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpOrTemplateArg_907_923" id="ExpOrTemplateArg_8061_8077" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 49">ExpOrTemplateArg</a> -&gt; <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_8081_8085" title="Defined at ../../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfExpOrTemplateArg_8028_8050" id="typeOfExpOrTemplateArg_8088_8110" title="Defined at line 188">typeOfExpOrTemplateArg</a>(<a href="#s_8159_8160" id="s_8111_8112" title="Referenced at line 190">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgExp_11880_11892" id="ExpVarArgExp_8114_8126" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 248">ExpVarArgExp</a>(<a href="#exp_8162_8165" id="exp_8127_8130" title="Referenced at line 190">exp</a>)) = <a href="#t_8144_8145" id="t_8135_8136" title="Referenced at line 190">t</a> :-
    <a href="#t_8135_8136" id="t_8144_8145" title="Defined at line 189">t</a> == <a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_8149_8158" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_8111_8112" id="s_8159_8160" title="Defined at line 189">s</a>, <a href="#exp_8127_8130" id="exp_8162_8165" title="Defined at line 189">exp</a>).

  <a href="#typeOfExpOrTemplateArg_8028_8050" id="typeOfExpOrTemplateArg_8171_8193" title="Defined at line 188">typeOfExpOrTemplateArg</a>(<a href="#s_8286_8287" id="s_8194_8195" title="Referenced at line 193">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx#ExpVarArgElements_11923_11940" id="ExpVarArgElements_8197_8214" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-UI-sig.stx line 249">ExpVarArgElements</a>(<a href="#elems_8325_8330" id="elems_8215_8220" title="Referenced at line 194">elems</a>)) = <a href="../../webdsl-types.stx#TEMPLATEELEMENTS_1195_1211" id="TEMPLATEELEMENTS_8225_8241" title="Defined at ../../webdsl-types.stx line 47">TEMPLATEELEMENTS</a>() :- { <a href="#s_eval_8266_8272" id="s_eval_8249_8255" title="Referenced at line 193, 193, 194">s_eval</a> }
    <span class="keyword">new</span> <a href="#s_eval_8249_8255" id="s_eval_8266_8272" title="Defined at line 192">s_eval</a>, <a href="#s_eval_8249_8255" id="s_eval_8274_8280" title="Defined at line 192">s_eval</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_8282_8283" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_8194_8195" id="s_8286_8287" title="Defined at line 192">s</a>,
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_8293_8311" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_eval_8249_8255" id="s_eval_8312_8318" title="Defined at line 192">s_eval</a>, <span class="keyword">new</span>, <a href="#elems_8215_8220" id="elems_8325_8330" title="Defined at line 192">elems</a>).

</code></pre></td></tr></tbody></table></div>