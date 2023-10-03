---
title: WebDSL-Action-sig.stx
hide:
  - toc
---

# `WebDSL-Action-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Action-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Action-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../HQL-sig.stx#signatures/WebDSL-Action-sig_37_65" id="signatures/WebDSL-Action-sig_7_35" title="Referenced at ../HQL-sig.stx line 4; ../WebDSL-AccessControl-sig.stx line 4; ../WebDSL-Ajax-sig.stx line 4; ../WebDSL-Attributes-sig.stx line 4; ../WebDSL-Core-sig.stx line 4; ../WebDSL-DataModel-sig.stx line 4; ../WebDSL-DataValidation-sig.stx line 4; ../WebDSL-Dispatch-sig.stx line 4; ../WebDSL-EntityDerive-sig.stx line 4; ../WebDSL-Exception-sig.stx line 4; ../WebDSL-Expand-sig.stx line 4; ../WebDSL-JavaScript-sig.stx line 4; ../WebDSL-Prefetch-sig.stx line 4; ../WebDSL-Regex-sig.stx line 4; ../WebDSL-Routing-sig.stx line 5; ../WebDSL-Search-sig.stx line 4; ../WebDSL-Service-sig.stx line 4; ../webdsl-statix-sig.stx line 5; ../WebDSL-Test-sig.stx line 4; ../WebDSL-TimeInterval-sig.stx line 4; ../WebDSL-Type-sig.stx line 4; ../WebDSL-UI-sig.stx line 4; ../WebDSL-XML-sig.stx line 4">signatures/WebDSL-Action-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_47_73" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_76_107" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_110_139" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-Search-sig.stx#signatures/WebDSL-Search-sig_7_35" id="signatures/WebDSL-Search-sig_142_170" title="Defined at ../WebDSL-Search-sig.stx line 1">signatures/WebDSL-Search-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_173_197" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../HQL-sig.stx#signatures/HQL-sig_7_25" id="signatures/HQL-sig_200_218" title="Defined at ../HQL-sig.stx line 1">signatures/HQL-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#OptSort_619_626" id="OptSort_243_250" title="Referenced at line 40, 67, 68, 69, 77, 78, 79, 80">OptSort</a>
    <a href="#Block_645_650" id="Block_255_260" title="Referenced at line 41, 67, 77, 81, 82, 91, 91, 92, 93, 94, 95, 98, 99, 103, 104, 106, 107, 108, 109, 110; ../WebDSL-Exception-sig.stx line 22, 23, 24; ../WebDSL-Expand-sig.stx line 51; ../WebDSL-Routing-sig.stx line 19, 20; ../WebDSL-Service-sig.stx line 23; ../WebDSL-Test-sig.stx line 17, 18; ../WebDSL-UI-sig.stx line 129, 209, 230, 231, 232, 233, 234, 235">Block</a>
    <a href="#Function_672_680" id="Function_265_273" title="Referenced at line 42, 67, 70, 71, 72, 73, 74, 75, 76; ../../../../trans/static-semantics/actions/functions.stx line 94, 104, 122">Function</a>
    <a href="#ElseIfStatement_709_724" id="ElseIfStatement_278_293" title="Referenced at line 43, 93, 94">ElseIfStatement</a>
    <a href="#OptElse_745_752" id="OptElse_298_305" title="Referenced at line 44, 93, 95, 96">OptElse</a>
    <a href="#Case_770_774" id="Case_310_314" title="Referenced at line 45, 97, 98, 99; ../WebDSL-Expand-sig.stx line 49, 49">Case</a>
    <a href="#TypeCaseAlt_799_810" id="TypeCaseAlt_319_330" title="Referenced at line 46, 100, 103, 104; ../WebDSL-Expand-sig.stx line 51">TypeCaseAlt</a>
    <a href="#OptTypeAlias_836_848" id="OptTypeAlias_335_347" title="Referenced at line 47, 100, 101, 102; ../WebDSL-UI-sig.stx line 172">OptTypeAlias</a>
    <a href="#CaseAltExps_873_884" id="CaseAltExps_352_363" title="Referenced at line 48, 98, 105">CaseAltExps</a>
    <a href="#ThisLex_3731_3738" id="ThisLex_368_375" title="Referenced at line 119">ThisLex</a> = <span class="keyword">string</span>
    <a href="#ConstValue_908_918" id="ConstValue_389_399" title="Referenced at line 49, 111, 112, 113, 114, 115; ../WebDSL-Ajax-sig.stx line 64; ../WebDSL-Prefetch-sig.stx line 80; ../../../../trans/static-semantics/webdsl-types.stx line 67">ConstValue</a>
    <a href="#Exp_935_938" id="Exp_404_407" title="Referenced at line 50, 77, 78, 79, 79, 80, 80, 83, 84, 89, 90, 91, 92, 93, 94, 97, 100, 105, 106, 107, 109, 109, 110, 111, 116, 117, 118, 118, 118, 119, 120, 124, 127, 128, 128, 129, 130, 130, 131, 131, 132, 132, 133, 133, 134, 134, 135, 136, 137, 137, 137, 138, 138, 139, 139, 140, 140, 140, 141, 141, 141, 141, 142, 144, 145, 146, 146, 146, 147, 147, 147, 148, 148, 148, 149, 149, 149, 150, 150, 150, 151, 151, 151, 152, 153, 154, 155, 155, 155, 156, 156, 156, 157, 157, 158, 158, 159, 159, 160, 161, 162, 163, 164, 165, 166, 167, 170, 171, 172, 173, 173, 173, 174, 174, 174, 175, 175, 175, 176, 176, 176, 177, 177, 177, 178, 182, 184, 186, 187, 188, 189, 190, 191, 192; ../WebDSL-AccessControl-sig.stx line 43, 45, 49, 50, 56; ../WebDSL-Ajax-sig.stx line 34, 35, 36, 41, 41, 42, 44, 50, 52, 60, 60, 61, 62, 62, 63, 63; ../WebDSL-Attributes-sig.stx line 30; ../WebDSL-Core-sig.stx line 59; ../WebDSL-DataModel-sig.stx line 33, 34, 35, 36, 39, 40, 41, 42, 44, 65, 66; ../WebDSL-DataValidation-sig.stx line 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26; ../WebDSL-Dispatch-sig.stx line 36, 37; ../WebDSL-EntityDerive-sig.stx line 21; ../WebDSL-Exception-sig.stx line 20, 21; ../WebDSL-Expand-sig.stx line 28, 29, 30, 31, 45, 45; ../WebDSL-JavaScript-sig.stx line 26; ../WebDSL-Regex-sig.stx line 108, 108; ../WebDSL-Search-sig.stx line 187, 189, 199, 200, 207, 212, 214, 218, 226, 229, 237, 245, 245, 246, 246, 246, 246, 247, 248, 249, 250, 254, 255, 259, 260, 277, 278; ../WebDSL-Service-sig.stx line 29, 30, 31; ../WebDSL-TimeInterval-sig.stx line 20, 21, 22, 23, 24, 25, 27; ../WebDSL-UI-sig.stx line 133, 134, 135, 136, 142, 144, 145, 148, 149, 150, 151, 152, 152, 153, 154, 157, 158, 160, 160, 163, 164, 165, 168, 169, 172, 175, 179, 191, 192, 193, 194, 195, 196, 197, 198, 199, 213, 214, 215, 227, 242, 243, 244, 246, 246, 248, 259; ../WebDSL-XML-sig.stx line 32, 33, 34, 37, 38; ../../../../trans/static-semantics/webdsl-ac.stx line 189; ../../../../trans/static-semantics/webdsl-actions.stx line 300, 300; ../../../../trans/static-semantics/webdsl-types.stx line 283; ../../../../trans/static-semantics/webdsl.stx line 371, 388, 390; ../../../../trans/static-semantics/actions/binops.stx line 19, 19; ../../../../trans/static-semantics/actions/functions.stx line 37, 41, 51; ../../../../trans/static-semantics/entities/annotations.stx line 194, 194; ../../../../trans/static-semantics/ui/ajax.stx line 79, 89; ../../../../trans/static-semantics/ui/template-calls.stx line 84, 132">Exp</a>
    <a href="#PropAssignment_966_980" id="PropAssignment_412_426" title="Referenced at line 51, 124, 125, 126; ../../../../trans/static-semantics/webdsl-entities.stx line 194">PropAssignment</a>
    <a href="#ObjectPropertyAssignment_1018_1042" id="ObjectPropertyAssignment_431_455" title="Referenced at line 52, 125, 126, 127; ../WebDSL-Expand-sig.stx line 43, 43">ObjectPropertyAssignment</a>
    <a href="#Mapping_1063_1070" id="Mapping_460_467" title="Referenced at line 53, 129, 130">Mapping</a>
    <a href="#ThisCall_1092_1100" id="ThisCall_472_480" title="Referenced at line 54, 135, 136, 143; ../WebDSL-Ajax-sig.stx line 59; ../WebDSL-UI-sig.stx line 208">ThisCall</a>
    <a href="#FAExp_1119_1124" id="FAExp_485_490" title="Referenced at line 55, 117, 120, 121, 122, 123">FAExp</a>
    <a href="#OptGroupBy_1148_1158" id="OptGroupBy_495_505" title="Referenced at line 56, 158, 159, 168, 169">OptGroupBy</a>
    <a href="#GroupBy_1179_1186" id="GroupBy_510_517" title="Referenced at line 57, 163, 164, 165, 166, 168, 170">GroupBy</a>
    <a href="#ForExp_1206_1212" id="ForExp_522_528" title="Referenced at line 58, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 171, 172; ../../../../trans/static-semantics/webdsl-actions.stx line 324">ForExp</a>
    <a href="#HqlExp_1232_1238" id="HqlExp_533_539" title="Referenced at line 59, 178, 179, 180, 181; ../../../../trans/static-semantics/webdsl-hql.stx line 18">HqlExp</a>
    <a href="#LimitValueExp_1265_1278" id="LimitValueExp_544_557" title="Referenced at line 60, 180, 181, 181, 182, 183; ../../../../trans/static-semantics/webdsl-hql.stx line 114">LimitValueExp</a>
    <a href="#DslExp_1298_1304" id="DslExp_562_568" title="Referenced at line 61, 183, 184; ../HQL-sig.stx line 128">DslExp</a>
    <a href="#EmailCall_1327_1336" id="EmailCall_573_582" title="Referenced at line 62, 186, 187, 188, 189, 190">EmailCall</a>

  <span class="keyword">constructors</span>
    <span id="OptSort-Plhdr_603_616" title="Not referenced locally, nor via imports">OptSort-Plhdr</span> : <a href="#OptSort_243_250" id="OptSort_619_626" title="Defined at line 14">OptSort</a>
    <span id="Block-Plhdr_631_642" title="Not referenced locally, nor via imports">Block-Plhdr</span> : <a href="#Block_255_260" id="Block_645_650" title="Defined at line 15">Block</a>
    <span id="Function-Plhdr_655_669" title="Not referenced locally, nor via imports">Function-Plhdr</span> : <a href="#Function_265_273" id="Function_672_680" title="Defined at line 16">Function</a>
    <span id="ElseIfStatement-Plhdr_685_706" title="Not referenced locally, nor via imports">ElseIfStatement-Plhdr</span> : <a href="#ElseIfStatement_278_293" id="ElseIfStatement_709_724" title="Defined at line 17">ElseIfStatement</a>
    <span id="OptElse-Plhdr_729_742" title="Not referenced locally, nor via imports">OptElse-Plhdr</span> : <a href="#OptElse_298_305" id="OptElse_745_752" title="Defined at line 18">OptElse</a>
    <span id="Case-Plhdr_757_767" title="Not referenced locally, nor via imports">Case-Plhdr</span> : <a href="#Case_310_314" id="Case_770_774" title="Defined at line 19">Case</a>
    <span id="TypeCaseAlt-Plhdr_779_796" title="Not referenced locally, nor via imports">TypeCaseAlt-Plhdr</span> : <a href="#TypeCaseAlt_319_330" id="TypeCaseAlt_799_810" title="Defined at line 20">TypeCaseAlt</a>
    <span id="OptTypeAlias-Plhdr_815_833" title="Not referenced locally, nor via imports">OptTypeAlias-Plhdr</span> : <a href="#OptTypeAlias_335_347" id="OptTypeAlias_836_848" title="Defined at line 21">OptTypeAlias</a>
    <span id="CaseAltExps-Plhdr_853_870" title="Not referenced locally, nor via imports">CaseAltExps-Plhdr</span> : <a href="#CaseAltExps_352_363" id="CaseAltExps_873_884" title="Defined at line 22">CaseAltExps</a>
    <span id="ConstValue-Plhdr_889_905" title="Not referenced locally, nor via imports">ConstValue-Plhdr</span> : <a href="#ConstValue_389_399" id="ConstValue_908_918" title="Defined at line 24">ConstValue</a>
    <span id="Exp-Plhdr_923_932" title="Not referenced locally, nor via imports">Exp-Plhdr</span> : <a href="#Exp_404_407" id="Exp_935_938" title="Defined at line 25">Exp</a>
    <span id="PropAssignment-Plhdr_943_963" title="Not referenced locally, nor via imports">PropAssignment-Plhdr</span> : <a href="#PropAssignment_412_426" id="PropAssignment_966_980" title="Defined at line 26">PropAssignment</a>
    <span id="ObjectPropertyAssignment-Plhdr_985_1015" title="Not referenced locally, nor via imports">ObjectPropertyAssignment-Plhdr</span> : <a href="#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_1018_1042" title="Defined at line 27">ObjectPropertyAssignment</a>
    <span id="Mapping-Plhdr_1047_1060" title="Not referenced locally, nor via imports">Mapping-Plhdr</span> : <a href="#Mapping_460_467" id="Mapping_1063_1070" title="Defined at line 28">Mapping</a>
    <span id="ThisCall-Plhdr_1075_1089" title="Not referenced locally, nor via imports">ThisCall-Plhdr</span> : <a href="#ThisCall_472_480" id="ThisCall_1092_1100" title="Defined at line 29">ThisCall</a>
    <span id="FAExp-Plhdr_1105_1116" title="Not referenced locally, nor via imports">FAExp-Plhdr</span> : <a href="#FAExp_485_490" id="FAExp_1119_1124" title="Defined at line 30">FAExp</a>
    <span id="OptGroupBy-Plhdr_1129_1145" title="Not referenced locally, nor via imports">OptGroupBy-Plhdr</span> : <a href="#OptGroupBy_495_505" id="OptGroupBy_1148_1158" title="Defined at line 31">OptGroupBy</a>
    <span id="GroupBy-Plhdr_1163_1176" title="Not referenced locally, nor via imports">GroupBy-Plhdr</span> : <a href="#GroupBy_510_517" id="GroupBy_1179_1186" title="Defined at line 32">GroupBy</a>
    <span id="ForExp-Plhdr_1191_1203" title="Not referenced locally, nor via imports">ForExp-Plhdr</span> : <a href="#ForExp_522_528" id="ForExp_1206_1212" title="Defined at line 33">ForExp</a>
    <span id="HqlExp-Plhdr_1217_1229" title="Not referenced locally, nor via imports">HqlExp-Plhdr</span> : <a href="#HqlExp_533_539" id="HqlExp_1232_1238" title="Defined at line 34">HqlExp</a>
    <span id="LimitValueExp-Plhdr_1243_1262" title="Not referenced locally, nor via imports">LimitValueExp-Plhdr</span> : <a href="#LimitValueExp_544_557" id="LimitValueExp_1265_1278" title="Defined at line 35">LimitValueExp</a>
    <span id="DslExp-Plhdr_1283_1295" title="Not referenced locally, nor via imports">DslExp-Plhdr</span> : <a href="#DslExp_562_568" id="DslExp_1298_1304" title="Defined at line 36">DslExp</a>
    <span id="EmailCall-Plhdr_1309_1324" title="Not referenced locally, nor via imports">EmailCall-Plhdr</span> : <a href="#EmailCall_573_582" id="EmailCall_1327_1336" title="Defined at line 37">EmailCall</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Function_3945_3953" id="Function_1368_1376" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 95, 105, 115, 118, 123, 124">Function</a> : <a href="../WebDSL-Lexical-sig.stx#FunId_151_156" id="FunId_1379_1384" title="Defined at ../WebDSL-Lexical-sig.stx line 12">FunId</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_1387_1400" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptSort_243_250" id="OptSort_1403_1410" title="Defined at line 14">OptSort</a> * <a href="#Block_255_260" id="Block_1413_1418" title="Defined at line 15">Block</a> -&gt; <a href="#Function_265_273" id="Function_1422_1430" title="Defined at line 16">Function</a>
    <span id="OptSortNone_1435_1446" title="Not referenced locally, nor via imports">OptSortNone</span> : <a href="#OptSort_243_250" id="OptSort_1449_1456" title="Defined at line 14">OptSort</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#OptSortSome_3978_3989" id="OptSortSome_1461_1472" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 95, 105, 123">OptSortSome</a> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1475_1479" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#OptSort_243_250" id="OptSort_1483_1490" title="Defined at line 14">OptSort</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#GlobalFunction_3432_3446" id="GlobalFunction_1495_1509" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 82">GlobalFunction</a> : <a href="#Function_265_273" id="Function_1512_1520" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1524_1534" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#CachedGlobalFunction_3489_3509" id="CachedGlobalFunction_1539_1559" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 83">CachedGlobalFunction</a> : <a href="#Function_265_273" id="Function_1562_1570" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1574_1584" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#ExtendGlobalFunction_3580_3600" id="ExtendGlobalFunction_1589_1609" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 87">ExtendGlobalFunction</a> : <a href="#Function_265_273" id="Function_1612_1620" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1624_1634" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#EntityFunction_4714_4728" id="EntityFunction_1639_1653" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 112">EntityFunction</a> : <a href="#Function_265_273" id="Function_1656_1664" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1668_1689" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#CachedFunction_4897_4911" id="CachedFunction_1694_1708" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 114">CachedFunction</a> : <a href="#Function_265_273" id="Function_1711_1719" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1723_1744" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <span id="ExtendFunction_1749_1763" title="Not referenced locally, nor via imports">ExtendFunction</span> : <a href="#Function_265_273" id="Function_1766_1774" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1778_1799" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#StaticEntityFunction_4803_4823" id="StaticEntityFunction_1804_1824" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 113">StaticEntityFunction</a> : <a href="#Function_265_273" id="Function_1827_1835" title="Defined at line 16">Function</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1839_1860" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FunctionExp_1089_1100" id="FunctionExp_1865_1876" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 31">FunctionExp</a> : <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_1879_1892" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="#OptSort_243_250" id="OptSort_1895_1902" title="Defined at line 14">OptSort</a> * <a href="#Block_255_260" id="Block_1905_1910" title="Defined at line 15">Block</a> -&gt; <a href="#Exp_404_407" id="Exp_1914_1917" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FunctionRef_1223_1234" id="FunctionRef_1922_1933" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 32">FunctionRef</a> : <a href="../WebDSL-Lexical-sig.stx#FunId_151_156" id="FunId_1936_1941" title="Defined at ../WebDSL-Lexical-sig.stx line 12">FunId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1949_1953" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a>) * <a href="#OptSort_243_250" id="OptSort_1957_1964" title="Defined at line 14">OptSort</a> -&gt; <a href="#Exp_404_407" id="Exp_1968_1971" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FunctionRefCall_1357_1372" id="FunctionRefCall_1976_1991" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 33">FunctionRefCall</a> : <a href="../WebDSL-Lexical-sig.stx#FunId_151_156" id="FunId_1994_1999" title="Defined at ../WebDSL-Lexical-sig.stx line 12">FunId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2007_2011" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a>) * <a href="#OptSort_243_250" id="OptSort_2015_2022" title="Defined at line 14">OptSort</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_2030_2033" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_2038_2041" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FunctionRefCallPartial_1498_1520" id="FunctionRefCallPartial_2046_2068" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 34">FunctionRefCallPartial</a> : <a href="../WebDSL-Lexical-sig.stx#FunId_151_156" id="FunId_2071_2076" title="Defined at ../WebDSL-Lexical-sig.stx line 12">FunId</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2084_2088" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a>) * <a href="#OptSort_243_250" id="OptSort_2092_2099" title="Defined at line 14">OptSort</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_2107_2110" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_2115_2118" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Block_406_411" id="Block_2123_2128" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 19, 45, 149, 149, 165, 177, 185, 192, 209, 345; ../../../../trans/static-semantics/webdsl-services.stx line 14; ../../../../trans/static-semantics/actions/functions.stx line 95, 105; ../../../../trans/static-semantics/ui/actions.stx line 62, 77, 82, 85, 88, 91, 94">Block</a> : <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2136_2145" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>) -&gt; <a href="#Block_255_260" id="Block_2150_2155" title="Defined at line 15">Block</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Block2Statement_2144_2159" id="Block2Statement_2160_2175" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 45">Block2Statement</a> : <a href="#Block_255_260" id="Block_2178_2183" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2187_2196" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Stat_2092_2096" id="Stat_2201_2205" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 42">Stat</a> : <a href="#Exp_404_407" id="Exp_2208_2211" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2215_2224" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Return_8950_8956" id="Return_2229_2235" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 216; ../../../../trans/static-semantics/ui/actions.stx line 99, 100">Return</a> : <a href="#Exp_404_407" id="Exp_2238_2241" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2245_2254" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ReturnEmpty_9367_9378" id="ReturnEmpty_2259_2270" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 222">ReturnEmpty</a> : <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2273_2282" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#GoTo_4223_4227" id="GoTo_2287_2291" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 103">GoTo</a> : <a href="../WebDSL-UI-sig.stx#PageCall_290_298" id="PageCall_2294_2302" title="Defined at ../WebDSL-UI-sig.stx line 17">PageCall</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2306_2315" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="GoToAlt_2320_2327" title="Not referenced locally, nor via imports">GoToAlt</span> : <a href="../WebDSL-UI-sig.stx#PageCall_290_298" id="PageCall_2330_2338" title="Defined at ../WebDSL-UI-sig.stx line 17">PageCall</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2342_2351" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#VarDecl_2273_2280" id="VarDecl_2356_2363" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 49">VarDecl</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_2366_2371" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2374_2378" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2382_2391" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#VarDeclInit_2470_2481" id="VarDeclInit_2396_2407" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 55">VarDeclInit</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_2410_2415" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_2418_2422" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_2425_2428" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2432_2441" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#VarDeclInitInferred_2757_2776" id="VarDeclInitInferred_2446_2465" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 62">VarDeclInitInferred</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_2468_2473" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_2476_2479" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2483_2492" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#If_6240_6242" id="If_2497_2499" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 149">If</a> : <a href="#Exp_404_407" id="Exp_2502_2505" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_2508_2513" title="Defined at line 15">Block</a> * <a href="#Block_255_260" id="Block_2516_2521" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2525_2534" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="IfNoElse_2539_2547" title="Not referenced locally, nor via imports">IfNoElse</span> : <a href="#Exp_404_407" id="Exp_2550_2553" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_2556_2561" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2565_2574" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="IfWithElseIf_2579_2591" title="Not referenced locally, nor via imports">IfWithElseIf</span> : <a href="#Exp_404_407" id="Exp_2594_2597" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_2600_2605" title="Defined at line 15">Block</a> * <span class="keyword">list</span>(<a href="#ElseIfStatement_278_293" id="ElseIfStatement_2613_2628" title="Defined at line 17">ElseIfStatement</a>) * <a href="#OptElse_298_305" id="OptElse_2632_2639" title="Defined at line 18">OptElse</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2643_2652" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="ElseIf_2657_2663" title="Not referenced locally, nor via imports">ElseIf</span> : <a href="#Exp_404_407" id="Exp_2666_2669" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_2672_2677" title="Defined at line 15">Block</a> -&gt; <a href="#ElseIfStatement_278_293" id="ElseIfStatement_2681_2696" title="Defined at line 17">ElseIfStatement</a>
    <span id="OptElseSome_2701_2712" title="Not referenced locally, nor via imports">OptElseSome</span> : <a href="#Block_255_260" id="Block_2715_2720" title="Defined at line 15">Block</a> -&gt; <a href="#OptElse_298_305" id="OptElse_2724_2731" title="Defined at line 18">OptElse</a>
    <span id="OptElseNone_2736_2747" title="Not referenced locally, nor via imports">OptElseNone</span> : <a href="#OptElse_298_305" id="OptElse_2750_2757" title="Defined at line 18">OptElse</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#CaseStmt_542_550" id="CaseStmt_2762_2770" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 25">CaseStmt</a> : <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_2778_2781" title="Defined at line 25">Exp</a>) * <span class="keyword">list</span>(<a href="#Case_310_314" id="Case_2790_2794" title="Defined at line 19">Case</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2799_2808" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="CaseAlt_2813_2820" title="Not referenced locally, nor via imports">CaseAlt</span> : <a href="#CaseAltExps_352_363" id="CaseAltExps_2823_2834" title="Defined at line 22">CaseAltExps</a> * <a href="#Block_255_260" id="Block_2837_2842" title="Defined at line 15">Block</a> -&gt; <a href="#Case_310_314" id="Case_2846_2850" title="Defined at line 19">Case</a>
    <span id="CaseAltDefault_2855_2869" title="Not referenced locally, nor via imports">CaseAltDefault</span> : <a href="#Block_255_260" id="Block_2872_2877" title="Defined at line 15">Block</a> -&gt; <a href="#Case_310_314" id="Case_2881_2885" title="Defined at line 19">Case</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#TypeCaseStmt_645_657" id="TypeCaseStmt_2890_2902" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 26">TypeCaseStmt</a> : <a href="#Exp_404_407" id="Exp_2905_2908" title="Defined at line 25">Exp</a> * <a href="#OptTypeAlias_335_347" id="OptTypeAlias_2911_2923" title="Defined at line 21">OptTypeAlias</a> * <span class="keyword">list</span>(<a href="#TypeCaseAlt_319_330" id="TypeCaseAlt_2931_2942" title="Defined at line 20">TypeCaseAlt</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_2947_2956" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <span id="TypeAlias_2961_2970" title="Not referenced locally, nor via imports">TypeAlias</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2973_2975" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#OptTypeAlias_335_347" id="OptTypeAlias_2979_2991" title="Defined at line 21">OptTypeAlias</a>
    <span id="OptTypeAliasNone_2996_3012" title="Not referenced locally, nor via imports">OptTypeAliasNone</span> : <a href="#OptTypeAlias_335_347" id="OptTypeAlias_3015_3027" title="Defined at line 21">OptTypeAlias</a>
    <span id="TypeCaseAlt_3032_3043" title="Not referenced locally, nor via imports">TypeCaseAlt</span> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_3046_3050" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Block_255_260" id="Block_3053_3058" title="Defined at line 15">Block</a> -&gt; <a href="#TypeCaseAlt_319_330" id="TypeCaseAlt_3062_3073" title="Defined at line 20">TypeCaseAlt</a>
    <span id="TypeCaseAltDefault_3078_3096" title="Not referenced locally, nor via imports">TypeCaseAltDefault</span> : <a href="#Block_255_260" id="Block_3099_3104" title="Defined at line 15">Block</a> -&gt; <a href="#TypeCaseAlt_319_330" id="TypeCaseAlt_3108_3119" title="Defined at line 20">TypeCaseAlt</a>
    <span id="CaseExps_3124_3132" title="Not referenced locally, nor via imports">CaseExps</span> : <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_3140_3143" title="Defined at line 25">Exp</a>) -&gt; <a href="#CaseAltExps_352_363" id="CaseAltExps_3148_3159" title="Defined at line 22">CaseAltExps</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForStmt_6884_6891" id="ForStmt_3164_3171" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 165">ForStmt</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3174_3179" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_3182_3186" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_3189_3192" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#OptFilter_276_285" id="OptFilter_3195_3204" title="Defined at ../WebDSL-UI-sig.stx line 16">OptFilter</a> * <a href="#Block_255_260" id="Block_3207_3212" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_3216_3225" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForStmtInferred_7389_7404" id="ForStmtInferred_3230_3245" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 177">ForStmtInferred</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3248_3253" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_3256_3259" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#OptFilter_276_285" id="OptFilter_3262_3271" title="Defined at ../WebDSL-UI-sig.stx line 16">OptFilter</a> * <a href="#Block_255_260" id="Block_3274_3279" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_3283_3292" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForAllStmt_7685_7695" id="ForAllStmt_3297_3307" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 185">ForAllStmt</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3310_3315" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_3318_3322" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-UI-sig.stx#OptFilter_276_285" id="OptFilter_3325_3334" title="Defined at ../WebDSL-UI-sig.stx line 16">OptFilter</a> * <a href="#Block_255_260" id="Block_3337_3342" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_3346_3355" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForCountStmt_7957_7969" id="ForCountStmt_3360_3372" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 192">ForCountStmt</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3375_3380" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_3383_3386" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_3389_3392" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_3395_3400" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_3404_3413" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#WhileStmt_8699_8708" id="WhileStmt_3418_3427" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 209">WhileStmt</a> : <a href="#Exp_404_407" id="Exp_3430_3433" title="Defined at line 25">Exp</a> * <a href="#Block_255_260" id="Block_3436_3441" title="Defined at line 15">Block</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_3445_3454" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#Const_1543_1548" id="Const_3459_3464" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 64">Const</a> : <a href="#ConstValue_389_399" id="ConstValue_3467_3477" title="Defined at line 24">ConstValue</a> -&gt; <a href="#Exp_404_407" id="Exp_3481_3484" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#Int_1698_1701" id="Int_3489_3492" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 68">Int</a> : <a href="../WebDSL-Lexical-sig.stx#Int_346_349" id="Int_3495_3498" title="Defined at ../WebDSL-Lexical-sig.stx line 22">Int</a> -&gt; <a href="#ConstValue_389_399" id="ConstValue_3502_3512" title="Defined at line 24">ConstValue</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#Long_1772_1776" id="Long_3517_3521" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 72">Long</a> : <a href="../WebDSL-Lexical-sig.stx#Long_363_367" id="Long_3524_3528" title="Defined at ../WebDSL-Lexical-sig.stx line 23">Long</a> -&gt; <a href="#ConstValue_389_399" id="ConstValue_3532_3542" title="Defined at line 24">ConstValue</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#Float_1848_1853" id="Float_3547_3552" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 76">Float</a> : <a href="../WebDSL-Lexical-sig.stx#Float_381_386" id="Float_3555_3560" title="Defined at ../WebDSL-Lexical-sig.stx line 24">Float</a> -&gt; <a href="#ConstValue_389_399" id="ConstValue_3564_3574" title="Defined at line 24">ConstValue</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#StringConst_1926_1937" id="StringConst_3579_3590" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 80">StringConst</a> : <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_3593_3599" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#ConstValue_389_399" id="ConstValue_3603_3613" title="Defined at line 24">ConstValue</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Var_4547_4550" id="Var_3618_3621" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 106, 228; ../../../../trans/static-semantics/ui/ajax.stx line 84; ../../../../trans/static-semantics/ui/template-calls.stx line 134">Var</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_3624_3629" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> -&gt; <a href="#Exp_404_407" id="Exp_3633_3636" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FieldAccess_5056_5067" id="FieldAccess_3641_3652" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 124, 133, 236, 237, 239, 245; ../../../../trans/static-semantics/ui/template-calls.stx line 136">FieldAccess</a> : <a href="#FAExp_485_490" id="FAExp_3655_3660" title="Defined at line 30">FAExp</a> * <a href="../WebDSL-Lexical-sig.stx#PropertyId_170_180" id="PropertyId_3663_3673" title="Defined at ../WebDSL-Lexical-sig.stx line 13">PropertyId</a> -&gt; <a href="#Exp_404_407" id="Exp_3677_3680" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#CollectionIndex_5876_5891" id="CollectionIndex_3685_3700" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 141, 292">CollectionIndex</a> : <a href="#Exp_404_407" id="Exp_3703_3706" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_3709_3712" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_3716_3719" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#This_8247_8251" id="This_3724_3728" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 187">This</a> : <a href="#ThisLex_368_375" id="ThisLex_3731_3738" title="Defined at line 23">ThisLex</a> -&gt; <a href="#Exp_404_407" id="Exp_3742_3745" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FAExp_5446_5451" id="FAExp_3750_3755" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 133, 245">FAExp</a> : <a href="#Exp_404_407" id="Exp_3758_3761" title="Defined at line 25">Exp</a> -&gt; <a href="#FAExp_485_490" id="FAExp_3765_3770" title="Defined at line 30">FAExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FAVar_5070_5075" id="FAVar_3775_3780" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 124, 239; ../../../../trans/static-semantics/ui/template-calls.stx line 136">FAVar</a> : <a href="../WebDSL-Lexical-sig.stx#FAVarId_130_137" id="FAVarId_3783_3790" title="Defined at ../WebDSL-Lexical-sig.stx line 11">FAVarId</a> -&gt; <a href="#FAExp_485_490" id="FAExp_3794_3799" title="Defined at line 30">FAExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FAGlobal_9807_9815" id="FAGlobal_3804_3812" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 236">FAGlobal</a> : <a href="#FAExp_485_490" id="FAExp_3815_3820" title="Defined at line 30">FAExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#FASession_9943_9952" id="FASession_3825_3834" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 237">FASession</a> : <a href="#FAExp_485_490" id="FAExp_3837_3842" title="Defined at line 30">FAExp</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#ObjectCreation_7925_7939" id="ObjectCreation_3847_3861" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 177">ObjectCreation</a> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_3864_3877" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> * <span class="keyword">list</span>(<a href="#PropAssignment_412_426" id="PropAssignment_3885_3899" title="Defined at line 26">PropAssignment</a>) -&gt; <a href="#Exp_404_407" id="Exp_3904_3907" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#PropAssignment_8681_8695" id="PropAssignment_3912_3926" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 196">PropAssignment</a> : <a href="#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_3929_3953" title="Defined at line 27">ObjectPropertyAssignment</a> -&gt; <a href="#PropAssignment_412_426" id="PropAssignment_3957_3971" title="Defined at line 26">PropAssignment</a>
    <span id="PropAssignmentComma_3976_3995" title="Not referenced locally, nor via imports">PropAssignmentComma</span> : <a href="#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_3998_4022" title="Defined at line 27">ObjectPropertyAssignment</a> -&gt; <a href="#PropAssignment_412_426" id="PropAssignment_4026_4040" title="Defined at line 26">PropAssignment</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#ObjectPropertyAssignment_8696_8720" id="ObjectPropertyAssignment_4045_4069" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 196">ObjectPropertyAssignment</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4072_4074" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#Exp_404_407" id="Exp_4077_4080" title="Defined at line 25">Exp</a> -&gt; <a href="#ObjectPropertyAssignment_431_455" id="ObjectPropertyAssignment_4084_4108" title="Defined at line 27">ObjectPropertyAssignment</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Assignment_4374_4384" id="Assignment_4113_4123" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 105, 106, 124, 133, 141, 144">Assignment</a> : <a href="#Exp_404_407" id="Exp_4126_4129" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4132_4135" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_4139_4148" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#MapCreation_1646_1657" id="MapCreation_4153_4164" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 35">MapCreation</a> : <span class="keyword">list</span>(<a href="#Mapping_460_467" id="Mapping_4172_4179" title="Defined at line 28">Mapping</a>) -&gt; <a href="#Exp_404_407" id="Exp_4184_4187" title="Defined at line 25">Exp</a>
    <span id="Mapping_4192_4199" title="Not referenced locally, nor via imports">Mapping</span> : <a href="#Exp_404_407" id="Exp_4202_4205" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4208_4211" title="Defined at line 25">Exp</a> -&gt; <a href="#Mapping_460_467" id="Mapping_4215_4222" title="Defined at line 28">Mapping</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ListCreation_11219_11231" id="ListCreation_4227_4239" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 270, 271">ListCreation</a> : <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4247_4250" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_4255_4258" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#SetCreation_11860_11871" id="SetCreation_4263_4274" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 281, 282">SetCreation</a> : <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4282_4285" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_4290_4293" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#TypedListCreation_11631_11648" id="TypedListCreation_4298_4315" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 276">TypedListCreation</a> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4318_4322" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4330_4333" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_4338_4341" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#TypedSetCreation_12266_12282" id="TypedSetCreation_4346_4362" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 287">TypedSetCreation</a> : <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4365_4369" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4377_4380" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_4385_4388" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#ThisCall2Exp_256_268" id="ThisCall2Exp_4393_4405" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 13; ../../../../trans/static-semantics/ui/actions.stx line 100; ../../../../trans/static-semantics/ui/built-ins.stx line 47, 47, 50; ../../../../trans/static-semantics/ui/template-calls.stx line 66, 69">ThisCall2Exp</a> : <a href="#ThisCall_472_480" id="ThisCall_4408_4416" title="Defined at line 29">ThisCall</a> -&gt; <a href="#Exp_404_407" id="Exp_4420_4423" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#ThisCall_269_277" id="ThisCall_4428_4436" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 13, 16, 19; ../../../../trans/static-semantics/ui/actions.stx line 71, 100; ../../../../trans/static-semantics/ui/built-ins.stx line 47, 47, 50; ../../../../trans/static-semantics/ui/template-calls.stx line 66, 69">ThisCall</a> : <a href="../WebDSL-Lexical-sig.stx#FunId_151_156" id="FunId_4439_4444" title="Defined at ../WebDSL-Lexical-sig.stx line 12">FunId</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4452_4455" title="Defined at line 25">Exp</a>) -&gt; <a href="#ThisCall_472_480" id="ThisCall_4460_4468" title="Defined at line 29">ThisCall</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#Call_582_586" id="Call_4473_4477" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 22">Call</a> : <a href="#Exp_404_407" id="Exp_4480_4483" title="Defined at line 25">Exp</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4486_4488" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4496_4499" title="Defined at line 25">Exp</a>) -&gt; <a href="#Exp_404_407" id="Exp_4504_4507" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#IsA_7768_7771" id="IsA_4512_4515" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 212">IsA</a> : <a href="#Exp_404_407" id="Exp_4518_4521" title="Defined at line 25">Exp</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4524_4528" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#Exp_404_407" id="Exp_4532_4535" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#Cast_6104_6108" id="Cast_4540_4544" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 144; ../../../../trans/static-semantics/webdsl-types.stx line 207; ../../../../trans/static-semantics/ui/template-calls.stx line 135">Cast</a> : <a href="#Exp_404_407" id="Exp_4547_4550" title="Defined at line 25">Exp</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_4553_4557" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="#Exp_404_407" id="Exp_4561_4564" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#InColl_5038_5044" id="InColl_4569_4575" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 127">InColl</a> : <a href="#Exp_404_407" id="Exp_4578_4581" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4584_4587" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4591_4594" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#IfExp_6524_6529" id="IfExp_4599_4604" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 156">IfExp</a> : <a href="#Exp_404_407" id="Exp_4607_4610" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4613_4616" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4619_4622" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4626_4629" title="Defined at line 25">Exp</a>
    <span id="OutputShorthand_4634_4649" title="Not referenced locally, nor via imports">OutputShorthand</span> : <a href="#Exp_404_407" id="Exp_4652_4655" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Lexical-sig.stx#OutputShorthand_524_539" id="OutputShorthand_4659_4674" title="Defined at ../WebDSL-Lexical-sig.stx line 31">OutputShorthand</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#SimpleThisCall_365_379" id="SimpleThisCall_4679_4693" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 16">SimpleThisCall</a> : <a href="#ThisCall_472_480" id="ThisCall_4696_4704" title="Defined at line 29">ThisCall</a> -&gt; <a href="../WebDSL-Lexical-sig.stx#SimpleExp_544_553" id="SimpleExp_4708_4717" title="Defined at ../WebDSL-Lexical-sig.stx line 32">SimpleExp</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#SimpleCall_768_778" id="SimpleCall_4722_4732" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 27">SimpleCall</a> : <a href="../WebDSL-Lexical-sig.stx#SimpleExp_544_553" id="SimpleExp_4735_4744" title="Defined at ../WebDSL-Lexical-sig.stx line 32">SimpleExp</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_4747_4749" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_4757_4760" title="Defined at line 25">Exp</a>) -&gt; <a href="../WebDSL-Lexical-sig.stx#SimpleExp_544_553" id="SimpleExp_4765_4774" title="Defined at ../WebDSL-Lexical-sig.stx line 32">SimpleExp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#InterpExp_2235_2244" id="InterpExp_4779_4788" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 91">InterpExp</a> : <a href="#Exp_404_407" id="Exp_4791_4794" title="Defined at line 25">Exp</a> -&gt; <a href="../WebDSL-Lexical-sig.stx#StringPart_489_499" id="StringPart_4798_4808" title="Defined at ../WebDSL-Lexical-sig.stx line 29">StringPart</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Eq_4324_4326" id="Eq_4813_4815" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 105">Eq</a> : <a href="#Exp_404_407" id="Exp_4818_4821" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4824_4827" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4831_4834" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#NotEq_4681_4686" id="NotEq_4839_4844" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 116">NotEq</a> : <a href="#Exp_404_407" id="Exp_4847_4850" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4853_4856" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4860_4863" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#LargerThan_2052_2062" id="LargerThan_4868_4878" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 59">LargerThan</a> : <a href="#Exp_404_407" id="Exp_4881_4884" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4887_4890" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4894_4897" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#LargerThanOrEqual_2392_2409" id="LargerThanOrEqual_4902_4919" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 67">LargerThanOrEqual</a> : <a href="#Exp_404_407" id="Exp_4922_4925" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4928_4931" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4935_4938" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#SmallerThan_2745_2756" id="SmallerThan_4943_4954" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 75">SmallerThan</a> : <a href="#Exp_404_407" id="Exp_4957_4960" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_4963_4966" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_4970_4973" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#SmallerThanOrEqual_3087_3105" id="SmallerThanOrEqual_4978_4996" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 83">SmallerThanOrEqual</a> : <a href="#Exp_404_407" id="Exp_4999_5002" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_5005_5008" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5012_5015" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#True_1335_1339" id="True_5020_5024" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 53">True</a> : <a href="#Exp_404_407" id="Exp_5027_5030" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#False_1408_1413" id="False_5035_5040" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 57">False</a> : <a href="#Exp_404_407" id="Exp_5043_5046" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#Null_1482_1486" id="Null_5051_5055" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 61">Null</a> : <a href="#Exp_404_407" id="Exp_5058_5061" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#And_3443_3446" id="And_5066_5069" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 91">And</a> : <a href="#Exp_404_407" id="Exp_5072_5075" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_5078_5081" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5085_5088" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Or_3885_3887" id="Or_5093_5095" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 98">Or</a> : <a href="#Exp_404_407" id="Exp_5098_5101" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_5104_5107" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5111_5114" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Not_5357_5360" id="Not_5119_5122" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 135">Not</a> : <a href="#Exp_404_407" id="Exp_5125_5128" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5132_5135" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForExp_13940_13946" id="ForExp_5140_5146" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 334">ForExp</a> : <a href="#Exp_404_407" id="Exp_5149_5152" title="Defined at line 25">Exp</a> * <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5155_5160" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5163_5167" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_5170_5173" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#OptFilter_276_285" id="OptFilter_5176_5185" title="Defined at ../WebDSL-UI-sig.stx line 16">OptFilter</a> * <a href="#OptGroupBy_495_505" id="OptGroupBy_5188_5198" title="Defined at line 31">OptGroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5202_5208" title="Defined at line 33">ForExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForExpInferred_13582_13596" id="ForExpInferred_5213_5227" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 325">ForExpInferred</a> : <a href="#Exp_404_407" id="Exp_5230_5233" title="Defined at line 25">Exp</a> * <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5236_5241" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_5244_5247" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#OptFilter_276_285" id="OptFilter_5250_5259" title="Defined at ../WebDSL-UI-sig.stx line 16">OptFilter</a> * <a href="#OptGroupBy_495_505" id="OptGroupBy_5262_5272" title="Defined at line 31">OptGroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5276_5282" title="Defined at line 33">ForExp</a>
    <span id="ForExpShort_5287_5298" title="Not referenced locally, nor via imports">ForExpShort</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5301_5306" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5309_5313" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_5316_5319" title="Defined at line 25">Exp</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5323_5329" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortFilter_5334_5351" title="Not referenced locally, nor via imports">ForExpShortFilter</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5354_5359" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5362_5366" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_5369_5372" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#Filter_524_530" id="Filter_5375_5381" title="Defined at ../WebDSL-UI-sig.stx line 29">Filter</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5385_5391" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortFilterInferred_5396_5421" title="Not referenced locally, nor via imports">ForExpShortFilterInferred</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5424_5429" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_5432_5435" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#Filter_524_530" id="Filter_5438_5444" title="Defined at ../WebDSL-UI-sig.stx line 29">Filter</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5448_5454" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortGroupBy_5459_5477" title="Not referenced locally, nor via imports">ForExpShortGroupBy</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5480_5485" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5488_5492" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_5495_5498" title="Defined at line 25">Exp</a> * <a href="#GroupBy_510_517" id="GroupBy_5501_5508" title="Defined at line 32">GroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5512_5518" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortGroupByInferred_5523_5549" title="Not referenced locally, nor via imports">ForExpShortGroupByInferred</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5552_5557" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_5560_5563" title="Defined at line 25">Exp</a> * <a href="#GroupBy_510_517" id="GroupBy_5566_5573" title="Defined at line 32">GroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5577_5583" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortFilterGroupBy_5588_5612" title="Not referenced locally, nor via imports">ForExpShortFilterGroupBy</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5615_5620" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_5623_5627" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#Exp_404_407" id="Exp_5630_5633" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#Filter_524_530" id="Filter_5636_5642" title="Defined at ../WebDSL-UI-sig.stx line 29">Filter</a> * <a href="#GroupBy_510_517" id="GroupBy_5645_5652" title="Defined at line 32">GroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5656_5662" title="Defined at line 33">ForExp</a>
    <span id="ForExpShortFilterGroupByInferred_5667_5699" title="Not referenced locally, nor via imports">ForExpShortFilterGroupByInferred</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_5702_5707" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Exp_404_407" id="Exp_5710_5713" title="Defined at line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#Filter_524_530" id="Filter_5716_5722" title="Defined at ../WebDSL-UI-sig.stx line 29">Filter</a> * <a href="#GroupBy_510_517" id="GroupBy_5725_5732" title="Defined at line 32">GroupBy</a> -&gt; <a href="#ForExp_522_528" id="ForExp_5736_5742" title="Defined at line 33">ForExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#ForExp2Exp_13230_13240" id="ForExp2Exp_5747_5757" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 312">ForExp2Exp</a> : <a href="#ForExp_522_528" id="ForExp_5760_5766" title="Defined at line 33">ForExp</a> -&gt; <a href="#Exp_404_407" id="Exp_5770_5773" title="Defined at line 25">Exp</a>
    <span id="OptGroupBySome_5778_5792" title="Not referenced locally, nor via imports">OptGroupBySome</span> : <a href="#GroupBy_510_517" id="GroupBy_5795_5802" title="Defined at line 32">GroupBy</a> -&gt; <a href="#OptGroupBy_495_505" id="OptGroupBy_5806_5816" title="Defined at line 31">OptGroupBy</a>
    <span id="OptGroupByNone_5821_5835" title="Not referenced locally, nor via imports">OptGroupByNone</span> : <a href="#OptGroupBy_495_505" id="OptGroupBy_5838_5848" title="Defined at line 31">OptGroupBy</a>
    <span id="GroupBy_5853_5860" title="Not referenced locally, nor via imports">GroupBy</span> : <a href="#Exp_404_407" id="Exp_5863_5866" title="Defined at line 25">Exp</a> -&gt; <a href="#GroupBy_510_517" id="GroupBy_5870_5877" title="Defined at line 32">GroupBy</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#AndForExp_13401_13410" id="AndForExp_5882_5891" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 318">AndForExp</a> : <a href="#ForExp_522_528" id="ForExp_5894_5900" title="Defined at line 33">ForExp</a> -&gt; <a href="#Exp_404_407" id="Exp_5904_5907" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#OrForExp_13293_13301" id="OrForExp_5912_5920" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 314">OrForExp</a> : <a href="#ForExp_522_528" id="ForExp_5923_5929" title="Defined at line 33">ForExp</a> -&gt; <a href="#Exp_404_407" id="Exp_5933_5936" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Mul_1062_1065" id="Mul_5941_5944" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 35">Mul</a> : <a href="#Exp_404_407" id="Exp_5947_5950" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_5953_5956" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5960_5963" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Div_1392_1395" id="Div_5968_5971" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 43">Div</a> : <a href="#Exp_404_407" id="Exp_5974_5977" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_5980_5983" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_5987_5990" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Mod_1722_1725" id="Mod_5995_5998" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 51">Mod</a> : <a href="#Exp_404_407" id="Exp_6001_6004" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_6007_6010" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_6014_6017" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Add_203_206" id="Add_6022_6025" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 11">Add</a> : <a href="#Exp_404_407" id="Exp_6028_6031" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_6034_6037" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_6041_6044" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#Sub_732_735" id="Sub_6049_6052" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 27">Sub</a> : <a href="#Exp_404_407" id="Exp_6055_6058" title="Defined at line 25">Exp</a> * <a href="#Exp_404_407" id="Exp_6061_6064" title="Defined at line 25">Exp</a> -&gt; <a href="#Exp_404_407" id="Exp_6068_6071" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HqlExp_324_330" id="HqlExp_6076_6082" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 16">HqlExp</a> : <a href="#HqlExp_533_539" id="HqlExp_6085_6091" title="Defined at line 34">HqlExp</a> -&gt; <a href="#Exp_404_407" id="Exp_6095_6098" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HqlQuery_426_434" id="HqlQuery_6103_6111" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 19">HqlQuery</a> : <a href="../HQL-sig.stx#HQLQueryRule_399_411" id="HQLQueryRule_6114_6126" title="Defined at ../HQL-sig.stx line 21">HQLQueryRule</a> -&gt; <a href="#HqlExp_533_539" id="HqlExp_6130_6136" title="Defined at line 34">HqlExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HqlQueryLimit_501_514" id="HqlQueryLimit_6141_6154" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 20">HqlQueryLimit</a> : <a href="../HQL-sig.stx#HQLQueryRule_399_411" id="HQLQueryRule_6157_6169" title="Defined at ../HQL-sig.stx line 21">HQLQueryRule</a> * <a href="#LimitValueExp_544_557" id="LimitValueExp_6172_6185" title="Defined at line 35">LimitValueExp</a> -&gt; <a href="#HqlExp_533_539" id="HqlExp_6189_6195" title="Defined at line 34">HqlExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HqlQueryLimitOffset_628_647" id="HqlQueryLimitOffset_6200_6219" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 23">HqlQueryLimitOffset</a> : <a href="../HQL-sig.stx#HQLQueryRule_399_411" id="HQLQueryRule_6222_6234" title="Defined at ../HQL-sig.stx line 21">HQLQueryRule</a> * <a href="#LimitValueExp_544_557" id="LimitValueExp_6237_6250" title="Defined at line 35">LimitValueExp</a> * <a href="#LimitValueExp_544_557" id="LimitValueExp_6253_6266" title="Defined at line 35">LimitValueExp</a> -&gt; <a href="#HqlExp_533_539" id="HqlExp_6270_6276" title="Defined at line 34">HqlExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#LimitValueExp_5708_5721" id="LimitValueExp_6281_6294" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 115">LimitValueExp</a> : <a href="#Exp_404_407" id="Exp_6297_6300" title="Defined at line 25">Exp</a> -&gt; <a href="#LimitValueExp_544_557" id="LimitValueExp_6304_6317" title="Defined at line 35">LimitValueExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#LimitValueDslExp_5863_5879" id="LimitValueDslExp_6322_6338" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 118">LimitValueDslExp</a> : <a href="#DslExp_562_568" id="DslExp_6341_6347" title="Defined at line 36">DslExp</a> -&gt; <a href="#LimitValueExp_544_557" id="LimitValueExp_6351_6364" title="Defined at line 35">LimitValueExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#DslExp_5880_5886" id="DslExp_6369_6375" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 118">DslExp</a> : <a href="#Exp_404_407" id="Exp_6378_6381" title="Defined at line 25">Exp</a> -&gt; <a href="#DslExp_562_568" id="DslExp_6385_6391" title="Defined at line 36">DslExp</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HqlStatement_212_224" id="HqlStatement_6396_6408" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 12">HqlStatement</a> : <a href="../HQL-sig.stx#HQLDeleteStatement_335_353" id="HQLDeleteStatement_6411_6429" title="Defined at ../HQL-sig.stx line 18">HQLDeleteStatement</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_6433_6442" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#RenderEmailFunctionCall_1774_1797" id="RenderEmailFunctionCall_6447_6470" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 36">RenderEmailFunctionCall</a> : <a href="#EmailCall_573_582" id="EmailCall_6473_6482" title="Defined at line 37">EmailCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6486_6489" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#EmailFunctionCall_1914_1931" id="EmailFunctionCall_6494_6511" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 37">EmailFunctionCall</a> : <a href="#EmailCall_573_582" id="EmailCall_6514_6523" title="Defined at line 37">EmailCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6527_6530" title="Defined at line 25">Exp</a>
    <span id="EmailFunctionCallAlt_6535_6555" title="Not referenced locally, nor via imports">EmailFunctionCallAlt</span> : <a href="#EmailCall_573_582" id="EmailCall_6558_6567" title="Defined at line 37">EmailCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6571_6574" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/actions/emails.stx#SendEmailFunctionCall_133_154" id="SendEmailFunctionCall_6579_6600" title="Referenced at ../../../../trans/static-semantics/actions/emails.stx line 10">SendEmailFunctionCall</a> : <a href="#EmailCall_573_582" id="EmailCall_6603_6612" title="Defined at line 37">EmailCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6616_6619" title="Defined at line 25">Exp</a>
    <span id="EmailCall_6624_6633" title="Not referenced locally, nor via imports">EmailCall</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_6636_6638" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#Exp_404_407" id="Exp_6646_6649" title="Defined at line 25">Exp</a>) -&gt; <a href="#EmailCall_573_582" id="EmailCall_6654_6663" title="Defined at line 37">EmailCall</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#RenderTemplateFunctionCall_4720_4746" id="RenderTemplateFunctionCall_6668_6694" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 113">RenderTemplateFunctionCall</a> : <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_6697_6709" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6713_6716" title="Defined at line 25">Exp</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#ValidateTemplateFunctionCall_4815_4843" id="ValidateTemplateFunctionCall_6721_6749" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 116">ValidateTemplateFunctionCall</a> : <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_6752_6764" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#Exp_404_407" id="Exp_6768_6771" title="Defined at line 25">Exp</a>
</code></pre></td></tr></tbody></table></div>