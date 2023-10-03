---
title: HQL-sig.stx
hide:
  - toc
---

# `HQL-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/HQL-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/HQL-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-Action-sig.stx#signatures/HQL-sig_200_218" id="signatures/HQL-sig_7_25" title="Referenced at ../WebDSL-Action-sig.stx line 9">signatures/HQL-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_37_65" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_68_97" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_100_124" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#HQLIdentifier_2653_2666" id="HQLIdentifier_149_162" title="Referenced at line 87, 109, 127">HQLIdentifier</a> = <span class="keyword">string</span>
    <span id="HQLIdParameter_176_190" title="Not referenced locally, nor via imports">HQLIdParameter</span> = <span class="keyword">string</span>
    <span id="HQLNumParameter_204_219" title="Not referenced locally, nor via imports">HQLNumParameter</span> = <span class="keyword">string</span>
    <a href="#HQLNumInt_7467_7476" id="HQLNumInt_233_242" title="Referenced at line 182">HQLNumInt</a> = <span class="keyword">string</span>
    <a href="#HQLQuotedString_7420_7435" id="HQLQuotedString_256_271" title="Referenced at line 181">HQLQuotedString</a> = <span class="keyword">string</span>
    <span id="HQLQuotedStringChar_285_304" title="Not referenced locally, nor via imports">HQLQuotedStringChar</span> = <span class="keyword">string</span>
    <a href="#HQLStatement_876_888" id="HQLStatement_318_330" title="Referenced at line 46, 77, 78">HQLStatement</a>
    <a href="#HQLDeleteStatement_920_938" id="HQLDeleteStatement_335_353" title="Referenced at line 47, 77, 79; ../WebDSL-Action-sig.stx line 185">HQLDeleteStatement</a>
    <a href="#HQLSelectClauseOpt_970_988" id="HQLSelectClauseOpt_358_376" title="Referenced at line 48, 81, 82, 83; ../../../../trans/static-semantics/webdsl-hql.stx line 35">HQLSelectClauseOpt</a>
    <a href="#HQLFromClause_1015_1028" id="HQLFromClause_381_394" title="Referenced at line 49, 79, 81, 89; ../../../../trans/static-semantics/webdsl-hql.stx line 35, 45, 78">HQLFromClause</a>
    <a href="#HQLQueryRule_1054_1066" id="HQLQueryRule_399_411" title="Referenced at line 50, 78, 80, 131, 132; ../WebDSL-Action-sig.stx line 179, 180, 181; ../../../../trans/static-semantics/webdsl-hql.stx line 27">HQLQueryRule</a>
    <a href="#HQLSelectFrom_1093_1106" id="HQLSelectFrom_416_429" title="Referenced at line 51, 80, 81">HQLSelectFrom</a>
    <a href="#HQLDistinctOpt_1134_1148" id="HQLDistinctOpt_434_448" title="Referenced at line 52, 82, 84, 85">HQLDistinctOpt</a>
    <a href="#HQLSelection_1174_1186" id="HQLSelection_453_465" title="Referenced at line 53, 82, 86, 87, 88; ../../../../trans/static-semantics/webdsl-hql.stx line 41">HQLSelection</a>
    <a href="#HQLFromRangeJoin_1216_1232" id="HQLFromRangeJoin_470_486" title="Referenced at line 54, 89, 90; ../../../../trans/static-semantics/webdsl-hql.stx line 82">HQLFromRangeJoin</a>
    <a href="#HQLFromJoin_1257_1268" id="HQLFromJoin_491_502" title="Referenced at line 55, 90, 91; ../../../../trans/static-semantics/webdsl-hql.stx line 93">HQLFromJoin</a>
    <a href="#HQLJoinTypeOpt_1296_1310" id="HQLJoinTypeOpt_507_521" title="Referenced at line 56, 91, 92, 93, 94, 95, 96, 97, 98">HQLJoinTypeOpt</a>
    <a href="#HQLFetchOpt_1335_1346" id="HQLFetchOpt_526_537" title="Referenced at line 57, 91, 99, 100">HQLFetchOpt</a>
    <a href="#HQLWithClauseOpt_1376_1392" id="HQLWithClauseOpt_542_558" title="Referenced at line 58, 91, 101, 102">HQLWithClauseOpt</a>
    <a href="#HQLFromRange_1418_1430" id="HQLFromRange_563_575" title="Referenced at line 59, 90, 103, 104, 105, 106; ../../../../trans/static-semantics/webdsl-hql.stx line 48, 87">HQLFromRange</a>
    <a href="#HQLPropertyFetchOpt_1463_1482" id="HQLPropertyFetchOpt_580_599" title="Referenced at line 60, 91, 103, 110, 111">HQLPropertyFetchOpt</a>
    <a href="#HQLAlias_1504_1512" id="HQLAlias_604_612" title="Referenced at line 61, 104, 105, 106, 107, 109">HQLAlias</a>
    <a href="#HQLAsAliasOpt_1539_1552" id="HQLAsAliasOpt_617_630" title="Referenced at line 62, 91, 103, 107, 108, 126; ../../../../trans/static-semantics/webdsl-hql.stx line 123">HQLAsAliasOpt</a>
    <a href="#HQLGroupByClauseOpt_1585_1604" id="HQLGroupByClauseOpt_635_654" title="Referenced at line 63, 80, 112, 113; ../../../../trans/static-semantics/webdsl-hql.stx line 104">HQLGroupByClauseOpt</a>
    <a href="#HQLOrderByClauseOpt_1637_1656" id="HQLOrderByClauseOpt_659_678" title="Referenced at line 64, 80, 114, 115; ../../../../trans/static-semantics/webdsl-hql.stx line 108">HQLOrderByClauseOpt</a>
    <a href="#HQLOrderElement_1685_1700" id="HQLOrderElement_683_698" title="Referenced at line 65, 114, 116">HQLOrderElement</a>
    <a href="#HQLAscOrDescOpt_1729_1744" id="HQLAscOrDescOpt_703_718" title="Referenced at line 66, 116, 117, 118, 119, 120, 121">HQLAscOrDescOpt</a>
    <a href="#HQLHavingClauseOpt_1776_1794" id="HQLHavingClauseOpt_723_741" title="Referenced at line 67, 112, 122, 123">HQLHavingClauseOpt</a>
    <a href="#HQLWhereClauseOpt_1825_1842" id="HQLWhereClauseOpt_746_763" title="Referenced at line 68, 79, 80, 124, 125; ../../../../trans/static-semantics/webdsl-hql.stx line 100">HQLWhereClauseOpt</a>
    <a href="#HQLAliasedExpression_1876_1896" id="HQLAliasedExpression_768_788" title="Referenced at line 69, 86, 88, 126; ../../../../trans/static-semantics/webdsl-hql.stx line 53">HQLAliasedExpression</a>
    <a href="#HQLPath_1917_1924" id="HQLPath_793_800" title="Referenced at line 70, 86, 91, 103, 104, 105, 106, 127, 129, 174, 175; ../../../../trans/static-semantics/webdsl-hql.stx line 127">HQLPath</a>
    <a href="#HQLExpression_1951_1964" id="HQLExpression_805_818" title="Referenced at line 71, 101, 112, 116, 122, 124, 126, 128, 129, 130, 130, 131, 132, 133, 133, 133, 134, 134, 134, 135, 135, 136, 136, 136, 137, 137, 137, 138, 138, 138, 139, 139, 139, 140, 140, 140, 141, 141, 141, 142, 142, 142, 143, 143, 143, 144, 144, 144, 145, 145, 145, 146, 146, 146, 147, 147, 147, 148, 148, 148, 149, 149, 149, 150, 150, 150, 151, 151, 151, 152, 152, 152, 153, 153, 153, 154, 154, 154, 155, 155, 155, 156, 156, 157, 158, 159, 160, 160, 161, 161, 162, 162, 163, 163, 164, 164, 165, 165, 166, 166, 167, 167, 168, 168, 169, 169, 170, 171, 171, 172, 172, 173, 173, 173, 173, 174, 175, 176; ../../../../trans/static-semantics/webdsl-hql.stx line 57">HQLExpression</a>
    <a href="#HQLConstant_1989_2000" id="HQLConstant_823_834" title="Referenced at line 72, 176, 177, 178, 179, 180, 181, 182">HQLConstant</a>

  <span class="keyword">constructors</span>
    <span id="HQLStatement-Plhdr_855_873" title="Not referenced locally, nor via imports">HQLStatement-Plhdr</span> : <a href="#HQLStatement_318_330" id="HQLStatement_876_888" title="Defined at line 17">HQLStatement</a>
    <span id="HQLDeleteStatement-Plhdr_893_917" title="Not referenced locally, nor via imports">HQLDeleteStatement-Plhdr</span> : <a href="#HQLDeleteStatement_335_353" id="HQLDeleteStatement_920_938" title="Defined at line 18">HQLDeleteStatement</a>
    <span id="HQLSelectClauseOpt-Plhdr_943_967" title="Not referenced locally, nor via imports">HQLSelectClauseOpt-Plhdr</span> : <a href="#HQLSelectClauseOpt_358_376" id="HQLSelectClauseOpt_970_988" title="Defined at line 19">HQLSelectClauseOpt</a>
    <span id="HQLFromClause-Plhdr_993_1012" title="Not referenced locally, nor via imports">HQLFromClause-Plhdr</span> : <a href="#HQLFromClause_381_394" id="HQLFromClause_1015_1028" title="Defined at line 20">HQLFromClause</a>
    <span id="HQLQueryRule-Plhdr_1033_1051" title="Not referenced locally, nor via imports">HQLQueryRule-Plhdr</span> : <a href="#HQLQueryRule_399_411" id="HQLQueryRule_1054_1066" title="Defined at line 21">HQLQueryRule</a>
    <span id="HQLSelectFrom-Plhdr_1071_1090" title="Not referenced locally, nor via imports">HQLSelectFrom-Plhdr</span> : <a href="#HQLSelectFrom_416_429" id="HQLSelectFrom_1093_1106" title="Defined at line 22">HQLSelectFrom</a>
    <span id="HQLDistinctOpt-Plhdr_1111_1131" title="Not referenced locally, nor via imports">HQLDistinctOpt-Plhdr</span> : <a href="#HQLDistinctOpt_434_448" id="HQLDistinctOpt_1134_1148" title="Defined at line 23">HQLDistinctOpt</a>
    <span id="HQLSelection-Plhdr_1153_1171" title="Not referenced locally, nor via imports">HQLSelection-Plhdr</span> : <a href="#HQLSelection_453_465" id="HQLSelection_1174_1186" title="Defined at line 24">HQLSelection</a>
    <span id="HQLFromRangeJoin-Plhdr_1191_1213" title="Not referenced locally, nor via imports">HQLFromRangeJoin-Plhdr</span> : <a href="#HQLFromRangeJoin_470_486" id="HQLFromRangeJoin_1216_1232" title="Defined at line 25">HQLFromRangeJoin</a>
    <span id="HQLFromJoin-Plhdr_1237_1254" title="Not referenced locally, nor via imports">HQLFromJoin-Plhdr</span> : <a href="#HQLFromJoin_491_502" id="HQLFromJoin_1257_1268" title="Defined at line 26">HQLFromJoin</a>
    <span id="HQLJoinTypeOpt-Plhdr_1273_1293" title="Not referenced locally, nor via imports">HQLJoinTypeOpt-Plhdr</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_1296_1310" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="HQLFetchOpt-Plhdr_1315_1332" title="Not referenced locally, nor via imports">HQLFetchOpt-Plhdr</span> : <a href="#HQLFetchOpt_526_537" id="HQLFetchOpt_1335_1346" title="Defined at line 28">HQLFetchOpt</a>
    <span id="HQLWithClauseOpt-Plhdr_1351_1373" title="Not referenced locally, nor via imports">HQLWithClauseOpt-Plhdr</span> : <a href="#HQLWithClauseOpt_542_558" id="HQLWithClauseOpt_1376_1392" title="Defined at line 29">HQLWithClauseOpt</a>
    <span id="HQLFromRange-Plhdr_1397_1415" title="Not referenced locally, nor via imports">HQLFromRange-Plhdr</span> : <a href="#HQLFromRange_563_575" id="HQLFromRange_1418_1430" title="Defined at line 30">HQLFromRange</a>
    <span id="HQLPropertyFetchOpt-Plhdr_1435_1460" title="Not referenced locally, nor via imports">HQLPropertyFetchOpt-Plhdr</span> : <a href="#HQLPropertyFetchOpt_580_599" id="HQLPropertyFetchOpt_1463_1482" title="Defined at line 31">HQLPropertyFetchOpt</a>
    <span id="HQLAlias-Plhdr_1487_1501" title="Not referenced locally, nor via imports">HQLAlias-Plhdr</span> : <a href="#HQLAlias_604_612" id="HQLAlias_1504_1512" title="Defined at line 32">HQLAlias</a>
    <span id="HQLAsAliasOpt-Plhdr_1517_1536" title="Not referenced locally, nor via imports">HQLAsAliasOpt-Plhdr</span> : <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_1539_1552" title="Defined at line 33">HQLAsAliasOpt</a>
    <span id="HQLGroupByClauseOpt-Plhdr_1557_1582" title="Not referenced locally, nor via imports">HQLGroupByClauseOpt-Plhdr</span> : <a href="#HQLGroupByClauseOpt_635_654" id="HQLGroupByClauseOpt_1585_1604" title="Defined at line 34">HQLGroupByClauseOpt</a>
    <span id="HQLOrderByClauseOpt-Plhdr_1609_1634" title="Not referenced locally, nor via imports">HQLOrderByClauseOpt-Plhdr</span> : <a href="#HQLOrderByClauseOpt_659_678" id="HQLOrderByClauseOpt_1637_1656" title="Defined at line 35">HQLOrderByClauseOpt</a>
    <span id="HQLOrderElement-Plhdr_1661_1682" title="Not referenced locally, nor via imports">HQLOrderElement-Plhdr</span> : <a href="#HQLOrderElement_683_698" id="HQLOrderElement_1685_1700" title="Defined at line 36">HQLOrderElement</a>
    <span id="HQLAscOrDescOpt-Plhdr_1705_1726" title="Not referenced locally, nor via imports">HQLAscOrDescOpt-Plhdr</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_1729_1744" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="HQLHavingClauseOpt-Plhdr_1749_1773" title="Not referenced locally, nor via imports">HQLHavingClauseOpt-Plhdr</span> : <a href="#HQLHavingClauseOpt_723_741" id="HQLHavingClauseOpt_1776_1794" title="Defined at line 38">HQLHavingClauseOpt</a>
    <span id="HQLWhereClauseOpt-Plhdr_1799_1822" title="Not referenced locally, nor via imports">HQLWhereClauseOpt-Plhdr</span> : <a href="#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_1825_1842" title="Defined at line 39">HQLWhereClauseOpt</a>
    <span id="HQLAliasedExpression-Plhdr_1847_1873" title="Not referenced locally, nor via imports">HQLAliasedExpression-Plhdr</span> : <a href="#HQLAliasedExpression_768_788" id="HQLAliasedExpression_1876_1896" title="Defined at line 40">HQLAliasedExpression</a>
    <span id="HQLPath-Plhdr_1901_1914" title="Not referenced locally, nor via imports">HQLPath-Plhdr</span> : <a href="#HQLPath_793_800" id="HQLPath_1917_1924" title="Defined at line 41">HQLPath</a>
    <span id="HQLExpression-Plhdr_1929_1948" title="Not referenced locally, nor via imports">HQLExpression-Plhdr</span> : <a href="#HQLExpression_805_818" id="HQLExpression_1951_1964" title="Defined at line 42">HQLExpression</a>
    <span id="HQLConstant-Plhdr_1969_1986" title="Not referenced locally, nor via imports">HQLConstant-Plhdr</span> : <a href="#HQLConstant_823_834" id="HQLConstant_1989_2000" title="Defined at line 43">HQLConstant</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <span id="DeleteStatement_2032_2047" title="Not referenced locally, nor via imports">DeleteStatement</span> : <a href="#HQLDeleteStatement_335_353" id="HQLDeleteStatement_2050_2068" title="Defined at line 18">HQLDeleteStatement</a> -&gt; <a href="#HQLStatement_318_330" id="HQLStatement_2072_2084" title="Defined at line 17">HQLStatement</a>
    <span id="SelectStatement_2089_2104" title="Not referenced locally, nor via imports">SelectStatement</span> : <a href="#HQLQueryRule_399_411" id="HQLQueryRule_2107_2119" title="Defined at line 21">HQLQueryRule</a> -&gt; <a href="#HQLStatement_318_330" id="HQLStatement_2123_2135" title="Defined at line 17">HQLStatement</a>
    <span id="HQLDeleteStatement_2140_2158" title="Not referenced locally, nor via imports">HQLDeleteStatement</span> : <a href="#HQLFromClause_381_394" id="HQLFromClause_2161_2174" title="Defined at line 20">HQLFromClause</a> * <a href="#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_2177_2194" title="Defined at line 39">HQLWhereClauseOpt</a> -&gt; <a href="#HQLDeleteStatement_335_353" id="HQLDeleteStatement_2198_2216" title="Defined at line 18">HQLDeleteStatement</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#QueryRule_865_874" id="QueryRule_2221_2230" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 28">QueryRule</a> : <a href="#HQLSelectFrom_416_429" id="HQLSelectFrom_2233_2246" title="Defined at line 22">HQLSelectFrom</a> * <a href="#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_2249_2266" title="Defined at line 39">HQLWhereClauseOpt</a> * <a href="#HQLGroupByClauseOpt_635_654" id="HQLGroupByClauseOpt_2269_2288" title="Defined at line 34">HQLGroupByClauseOpt</a> * <a href="#HQLOrderByClauseOpt_659_678" id="HQLOrderByClauseOpt_2291_2310" title="Defined at line 35">HQLOrderByClauseOpt</a> -&gt; <a href="#HQLQueryRule_399_411" id="HQLQueryRule_2314_2326" title="Defined at line 21">HQLQueryRule</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#SelectFrom_875_885" id="SelectFrom_2331_2341" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 28">SelectFrom</a> : <a href="#HQLSelectClauseOpt_358_376" id="HQLSelectClauseOpt_2344_2362" title="Defined at line 19">HQLSelectClauseOpt</a> * <a href="#HQLFromClause_381_394" id="HQLFromClause_2365_2378" title="Defined at line 20">HQLFromClause</a> -&gt; <a href="#HQLSelectFrom_416_429" id="HQLSelectFrom_2382_2395" title="Defined at line 22">HQLSelectFrom</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#Select_1356_1362" id="Select_2400_2406" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 37">Select</a> : <a href="#HQLDistinctOpt_434_448" id="HQLDistinctOpt_2409_2423" title="Defined at line 23">HQLDistinctOpt</a> * <a href="#HQLSelection_453_465" id="HQLSelection_2426_2438" title="Defined at line 24">HQLSelection</a> -&gt; <a href="#HQLSelectClauseOpt_358_376" id="HQLSelectClauseOpt_2442_2460" title="Defined at line 19">HQLSelectClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#SelectNone_1268_1278" id="SelectNone_2465_2475" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 36">SelectNone</a> : <a href="#HQLSelectClauseOpt_358_376" id="HQLSelectClauseOpt_2478_2496" title="Defined at line 19">HQLSelectClauseOpt</a>
    <span id="Distinct_2501_2509" title="Not referenced locally, nor via imports">Distinct</span> : <a href="#HQLDistinctOpt_434_448" id="HQLDistinctOpt_2512_2526" title="Defined at line 23">HQLDistinctOpt</a>
    <span id="NoneDistinct_2531_2543" title="Not referenced locally, nor via imports">NoneDistinct</span> : <a href="#HQLDistinctOpt_434_448" id="HQLDistinctOpt_2546_2560" title="Defined at line 23">HQLDistinctOpt</a>
    <span id="NewExpression_2565_2578" title="Not referenced locally, nor via imports">NewExpression</span> : <a href="#HQLPath_793_800" id="HQLPath_2581_2588" title="Defined at line 41">HQLPath</a> * <span class="keyword">list</span>(<a href="#HQLAliasedExpression_768_788" id="HQLAliasedExpression_2596_2616" title="Defined at line 40">HQLAliasedExpression</a>) -&gt; <a href="#HQLSelection_453_465" id="HQLSelection_2621_2633" title="Defined at line 24">HQLSelection</a>
    <span id="SelectObject_2638_2650" title="Not referenced locally, nor via imports">SelectObject</span> : <a href="#HQLIdentifier_149_162" id="HQLIdentifier_2653_2666" title="Defined at line 11">HQLIdentifier</a> -&gt; <a href="#HQLSelection_453_465" id="HQLSelection_2670_2682" title="Defined at line 24">HQLSelection</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#SelectedProperties_1567_1585" id="SelectedProperties_2687_2705" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 42, 43">SelectedProperties</a> : <span class="keyword">list</span>(<a href="#HQLAliasedExpression_768_788" id="HQLAliasedExpression_2713_2733" title="Defined at line 40">HQLAliasedExpression</a>) -&gt; <a href="#HQLSelection_453_465" id="HQLSelection_2738_2750" title="Defined at line 24">HQLSelection</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#FromClause_1855_1865" id="FromClause_2755_2765" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 46, 79">FromClause</a> : <span class="keyword">list</span>(<a href="#HQLFromRangeJoin_470_486" id="HQLFromRangeJoin_2773_2789" title="Defined at line 25">HQLFromRangeJoin</a>) -&gt; <a href="#HQLFromClause_381_394" id="HQLFromClause_2794_2807" title="Defined at line 20">HQLFromClause</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#FromRangeJoin_1867_1880" id="FromRangeJoin_2812_2825" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 46, 83">FromRangeJoin</a> : <a href="#HQLFromRange_563_575" id="HQLFromRange_2828_2840" title="Defined at line 30">HQLFromRange</a> * <span class="keyword">list</span>(<a href="#HQLFromJoin_491_502" id="HQLFromJoin_2848_2859" title="Defined at line 26">HQLFromJoin</a>) -&gt; <a href="#HQLFromRangeJoin_470_486" id="HQLFromRangeJoin_2864_2880" title="Defined at line 25">HQLFromRangeJoin</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#FromJoin_4772_4780" id="FromJoin_2885_2893" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 94">FromJoin</a> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_2896_2910" title="Defined at line 27">HQLJoinTypeOpt</a> * <a href="#HQLFetchOpt_526_537" id="HQLFetchOpt_2913_2924" title="Defined at line 28">HQLFetchOpt</a> * <a href="#HQLPath_793_800" id="HQLPath_2927_2934" title="Defined at line 41">HQLPath</a> * <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_2937_2950" title="Defined at line 33">HQLAsAliasOpt</a> * <a href="#HQLPropertyFetchOpt_580_599" id="HQLPropertyFetchOpt_2953_2972" title="Defined at line 31">HQLPropertyFetchOpt</a> * <a href="#HQLWithClauseOpt_542_558" id="HQLWithClauseOpt_2975_2991" title="Defined at line 29">HQLWithClauseOpt</a> -&gt; <a href="#HQLFromJoin_491_502" id="HQLFromJoin_2995_3006" title="Defined at line 26">HQLFromJoin</a>
    <span id="LeftJoin_3011_3019" title="Not referenced locally, nor via imports">LeftJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3022_3036" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="RightJoin_3041_3050" title="Not referenced locally, nor via imports">RightJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3053_3067" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="LeftOuterJoin_3072_3085" title="Not referenced locally, nor via imports">LeftOuterJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3088_3102" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="RightOuterJoin_3107_3121" title="Not referenced locally, nor via imports">RightOuterJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3124_3138" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="FullJoin_3143_3151" title="Not referenced locally, nor via imports">FullJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3154_3168" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="InnerJoin_3173_3182" title="Not referenced locally, nor via imports">InnerJoin</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3185_3199" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="JoinTypeNone_3204_3216" title="Not referenced locally, nor via imports">JoinTypeNone</span> : <a href="#HQLJoinTypeOpt_507_521" id="HQLJoinTypeOpt_3219_3233" title="Defined at line 27">HQLJoinTypeOpt</a>
    <span id="Fetch_3238_3243" title="Not referenced locally, nor via imports">Fetch</span> : <a href="#HQLFetchOpt_526_537" id="HQLFetchOpt_3246_3257" title="Defined at line 28">HQLFetchOpt</a>
    <span id="FetchNone_3262_3271" title="Not referenced locally, nor via imports">FetchNone</span> : <a href="#HQLFetchOpt_526_537" id="HQLFetchOpt_3274_3285" title="Defined at line 28">HQLFetchOpt</a>
    <span id="WithClause_3290_3300" title="Not referenced locally, nor via imports">WithClause</span> : <a href="#HQLExpression_805_818" id="HQLExpression_3303_3316" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLWithClauseOpt_542_558" id="HQLWithClauseOpt_3320_3336" title="Defined at line 29">HQLWithClauseOpt</a>
    <span id="WithClauseNone_3341_3355" title="Not referenced locally, nor via imports">WithClauseNone</span> : <a href="#HQLWithClauseOpt_542_558" id="HQLWithClauseOpt_3358_3374" title="Defined at line 29">HQLWithClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#FromClassOrOuterQueryPath_2015_2040" id="FromClassOrOuterQueryPath_3379_3404" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 49, 88">FromClassOrOuterQueryPath</a> : <a href="#HQLPath_793_800" id="HQLPath_3407_3414" title="Defined at line 41">HQLPath</a> * <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_3417_3430" title="Defined at line 33">HQLAsAliasOpt</a> * <a href="#HQLPropertyFetchOpt_580_599" id="HQLPropertyFetchOpt_3433_3452" title="Defined at line 31">HQLPropertyFetchOpt</a> -&gt; <a href="#HQLFromRange_563_575" id="HQLFromRange_3456_3468" title="Defined at line 30">HQLFromRange</a>
    <span id="InClassDeclaration_3473_3491" title="Not referenced locally, nor via imports">InClassDeclaration</span> : <a href="#HQLAlias_604_612" id="HQLAlias_3494_3502" title="Defined at line 32">HQLAlias</a> * <a href="#HQLPath_793_800" id="HQLPath_3505_3512" title="Defined at line 41">HQLPath</a> -&gt; <a href="#HQLFromRange_563_575" id="HQLFromRange_3516_3528" title="Defined at line 30">HQLFromRange</a>
    <span id="InCollectionDeclaration_3533_3556" title="Not referenced locally, nor via imports">InCollectionDeclaration</span> : <a href="#HQLPath_793_800" id="HQLPath_3559_3566" title="Defined at line 41">HQLPath</a> * <a href="#HQLAlias_604_612" id="HQLAlias_3569_3577" title="Defined at line 32">HQLAlias</a> -&gt; <a href="#HQLFromRange_563_575" id="HQLFromRange_3581_3593" title="Defined at line 30">HQLFromRange</a>
    <span id="InCollectionElementsDeclaration_3598_3629" title="Not referenced locally, nor via imports">InCollectionElementsDeclaration</span> : <a href="#HQLAlias_604_612" id="HQLAlias_3632_3640" title="Defined at line 32">HQLAlias</a> * <a href="#HQLPath_793_800" id="HQLPath_3643_3650" title="Defined at line 41">HQLPath</a> -&gt; <a href="#HQLFromRange_563_575" id="HQLFromRange_3654_3666" title="Defined at line 30">HQLFromRange</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#AsAlias_2427_2434" id="AsAlias_3671_3678" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 55, 125">AsAlias</a> : <a href="#HQLAlias_604_612" id="HQLAlias_3681_3689" title="Defined at line 32">HQLAlias</a> -&gt; <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_3693_3706" title="Defined at line 33">HQLAsAliasOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#AsAliasNone_2310_2321" id="AsAliasNone_3711_3722" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 54, 124">AsAliasNone</a> : <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_3725_3738" title="Defined at line 33">HQLAsAliasOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#Alias_6133_6138" id="Alias_3743_3748" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 125">Alias</a> : <a href="#HQLIdentifier_149_162" id="HQLIdentifier_3751_3764" title="Defined at line 11">HQLIdentifier</a> -&gt; <a href="#HQLAlias_604_612" id="HQLAlias_3768_3776" title="Defined at line 32">HQLAlias</a>
    <span id="PropertyFetch_3781_3794" title="Not referenced locally, nor via imports">PropertyFetch</span> : <a href="#HQLPropertyFetchOpt_580_599" id="HQLPropertyFetchOpt_3797_3816" title="Defined at line 31">HQLPropertyFetchOpt</a>
    <span id="PropertyFetchNone_3821_3838" title="Not referenced locally, nor via imports">PropertyFetchNone</span> : <a href="#HQLPropertyFetchOpt_580_599" id="HQLPropertyFetchOpt_3841_3860" title="Defined at line 31">HQLPropertyFetchOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLGroupBy_5298_5308" id="HQLGroupBy_3865_3875" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 106">HQLGroupBy</a> : <span class="keyword">list</span>(<a href="#HQLExpression_805_818" id="HQLExpression_3883_3896" title="Defined at line 42">HQLExpression</a>) * <a href="#HQLHavingClauseOpt_723_741" id="HQLHavingClauseOpt_3900_3918" title="Defined at line 38">HQLHavingClauseOpt</a> -&gt; <a href="#HQLGroupByClauseOpt_635_654" id="HQLGroupByClauseOpt_3922_3941" title="Defined at line 34">HQLGroupByClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLGroupByNone_5249_5263" id="HQLGroupByNone_3946_3960" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 105">HQLGroupByNone</a> : <a href="#HQLGroupByClauseOpt_635_654" id="HQLGroupByClauseOpt_3963_3982" title="Defined at line 34">HQLGroupByClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#OrderByClause_5533_5546" id="OrderByClause_3987_4000" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 110">OrderByClause</a> : <span class="keyword">list</span>(<a href="#HQLOrderElement_683_698" id="HQLOrderElement_4008_4023" title="Defined at line 36">HQLOrderElement</a>) -&gt; <a href="#HQLOrderByClauseOpt_659_678" id="HQLOrderByClauseOpt_4028_4047" title="Defined at line 35">HQLOrderByClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#OrderByClauseNone_5481_5498" id="OrderByClauseNone_4052_4069" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 109">OrderByClauseNone</a> : <a href="#HQLOrderByClauseOpt_659_678" id="HQLOrderByClauseOpt_4072_4091" title="Defined at line 35">HQLOrderByClauseOpt</a>
    <span id="OrderElement_4096_4108" title="Not referenced locally, nor via imports">OrderElement</span> : <a href="#HQLExpression_805_818" id="HQLExpression_4111_4124" title="Defined at line 42">HQLExpression</a> * <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4127_4142" title="Defined at line 37">HQLAscOrDescOpt</a> -&gt; <a href="#HQLOrderElement_683_698" id="HQLOrderElement_4146_4161" title="Defined at line 36">HQLOrderElement</a>
    <span id="HQLAscending_4166_4178" title="Not referenced locally, nor via imports">HQLAscending</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4181_4196" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="HQLAscendingAbbr_4201_4217" title="Not referenced locally, nor via imports">HQLAscendingAbbr</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4220_4235" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="HQLDescending_4240_4253" title="Not referenced locally, nor via imports">HQLDescending</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4256_4271" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="HQLDescendingAbbr_4276_4293" title="Not referenced locally, nor via imports">HQLDescendingAbbr</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4296_4311" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="AscOrDescNone_4316_4329" title="Not referenced locally, nor via imports">AscOrDescNone</span> : <a href="#HQLAscOrDescOpt_703_718" id="HQLAscOrDescOpt_4332_4347" title="Defined at line 37">HQLAscOrDescOpt</a>
    <span id="HavingClause_4352_4364" title="Not referenced locally, nor via imports">HavingClause</span> : <a href="#HQLExpression_805_818" id="HQLExpression_4367_4380" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLHavingClauseOpt_723_741" id="HQLHavingClauseOpt_4384_4402" title="Defined at line 38">HQLHavingClauseOpt</a>
    <span id="HavingClauseNone_4407_4423" title="Not referenced locally, nor via imports">HavingClauseNone</span> : <a href="#HQLHavingClauseOpt_723_741" id="HQLHavingClauseOpt_4426_4444" title="Defined at line 38">HQLHavingClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#WhereClause_5072_5083" id="WhereClause_4449_4460" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 102">WhereClause</a> : <a href="#HQLExpression_805_818" id="HQLExpression_4463_4476" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_4480_4497" title="Defined at line 39">HQLWhereClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#WhereClauseNone_5025_5040" id="WhereClauseNone_4502_4517" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 101">WhereClauseNone</a> : <a href="#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_4520_4537" title="Defined at line 39">HQLWhereClauseOpt</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#AliasedExpression_2284_2301" id="AliasedExpression_4542_4559" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 54, 55">AliasedExpression</a> : <a href="#HQLExpression_805_818" id="HQLExpression_4562_4575" title="Defined at line 42">HQLExpression</a> * <a href="#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_4578_4591" title="Defined at line 33">HQLAsAliasOpt</a> -&gt; <a href="#HQLAliasedExpression_768_788" id="HQLAliasedExpression_4595_4615" title="Defined at line 40">HQLAliasedExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#Path_2041_2045" id="Path_4620_4624" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 49, 65, 70, 128, 132">Path</a> : <span class="keyword">list</span>(<a href="#HQLIdentifier_149_162" id="HQLIdentifier_4632_4645" title="Defined at line 11">HQLIdentifier</a>) -&gt; <a href="#HQLPath_793_800" id="HQLPath_4650_4657" title="Defined at line 41">HQLPath</a>
    <span id="HQLDslExp_4662_4671" title="Not referenced locally, nor via imports">HQLDslExp</span> : <a href="../WebDSL-Action-sig.stx#DslExp_562_568" id="DslExp_4674_4680" title="Defined at ../WebDSL-Action-sig.stx line 36">DslExp</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4684_4697" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLPath_3516_3523" id="HQLPath_4702_4709" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 65, 70">HQLPath</a> : <a href="#HQLPath_793_800" id="HQLPath_4712_4719" title="Defined at line 41">HQLPath</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4723_4736" title="Defined at line 42">HQLExpression</a>
    <span id="HQLExpressions_4741_4755" title="Not referenced locally, nor via imports">HQLExpressions</span> : <span class="keyword">list</span>(<a href="#HQLExpression_805_818" id="HQLExpression_4763_4776" title="Defined at line 42">HQLExpression</a>) -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4781_4794" title="Defined at line 42">HQLExpression</a>
    <span id="HQLQueryRule_4799_4811" title="Not referenced locally, nor via imports">HQLQueryRule</span> : <a href="#HQLQueryRule_399_411" id="HQLQueryRule_4814_4826" title="Defined at line 21">HQLQueryRule</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4830_4843" title="Defined at line 42">HQLExpression</a>
    <span id="HQLQueryRuleAlt_4848_4863" title="Not referenced locally, nor via imports">HQLQueryRuleAlt</span> : <a href="#HQLQueryRule_399_411" id="HQLQueryRule_4866_4878" title="Defined at line 21">HQLQueryRule</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4882_4895" title="Defined at line 42">HQLExpression</a>
    <span id="QueryOr_4900_4907" title="Not referenced locally, nor via imports">QueryOr</span> : <a href="#HQLExpression_805_818" id="HQLExpression_4910_4923" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_4926_4939" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_4943_4956" title="Defined at line 42">HQLExpression</a>
    <span id="QueryAnd_4961_4969" title="Not referenced locally, nor via imports">QueryAnd</span> : <a href="#HQLExpression_805_818" id="HQLExpression_4972_4985" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_4988_5001" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5005_5018" title="Defined at line 42">HQLExpression</a>
    <span id="QueryNot_5023_5031" title="Not referenced locally, nor via imports">QueryNot</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5034_5047" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5051_5064" title="Defined at line 42">HQLExpression</a>
    <span id="QueryEq_5069_5076" title="Not referenced locally, nor via imports">QueryEq</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5079_5092" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5095_5108" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5112_5125" title="Defined at line 42">HQLExpression</a>
    <span id="QueryIs_5130_5137" title="Not referenced locally, nor via imports">QueryIs</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5140_5153" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5156_5169" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5173_5186" title="Defined at line 42">HQLExpression</a>
    <span id="QueryNe_5191_5198" title="Not referenced locally, nor via imports">QueryNe</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5201_5214" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5217_5230" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5234_5247" title="Defined at line 42">HQLExpression</a>
    <span id="QuerySqlNe_5252_5262" title="Not referenced locally, nor via imports">QuerySqlNe</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5265_5278" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5281_5294" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5298_5311" title="Defined at line 42">HQLExpression</a>
    <span id="QueryLike_5316_5325" title="Not referenced locally, nor via imports">QueryLike</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5328_5341" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5344_5357" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5361_5374" title="Defined at line 42">HQLExpression</a>
    <span id="QueryNotLike_5379_5391" title="Not referenced locally, nor via imports">QueryNotLike</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5394_5407" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5410_5423" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5427_5440" title="Defined at line 42">HQLExpression</a>
    <span id="QueryLt_5445_5452" title="Not referenced locally, nor via imports">QueryLt</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5455_5468" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5471_5484" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5488_5501" title="Defined at line 42">HQLExpression</a>
    <span id="QueryLe_5506_5513" title="Not referenced locally, nor via imports">QueryLe</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5516_5529" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5532_5545" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5549_5562" title="Defined at line 42">HQLExpression</a>
    <span id="QueryGt_5567_5574" title="Not referenced locally, nor via imports">QueryGt</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5577_5590" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5593_5606" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5610_5623" title="Defined at line 42">HQLExpression</a>
    <span id="QueryGe_5628_5635" title="Not referenced locally, nor via imports">QueryGe</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5638_5651" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5654_5667" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5671_5684" title="Defined at line 42">HQLExpression</a>
    <span id="QueryIn_5689_5696" title="Not referenced locally, nor via imports">QueryIn</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5699_5712" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5715_5728" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5732_5745" title="Defined at line 42">HQLExpression</a>
    <span id="QueryNotIn_5750_5760" title="Not referenced locally, nor via imports">QueryNotIn</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5763_5776" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5779_5792" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5796_5809" title="Defined at line 42">HQLExpression</a>
    <span id="QueryMemberOf_5814_5827" title="Not referenced locally, nor via imports">QueryMemberOf</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5830_5843" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5846_5859" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5863_5876" title="Defined at line 42">HQLExpression</a>
    <span id="QueryNotMemberOf_5881_5897" title="Not referenced locally, nor via imports">QueryNotMemberOf</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5900_5913" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5916_5929" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5933_5946" title="Defined at line 42">HQLExpression</a>
    <span id="QueryConcat_5951_5962" title="Not referenced locally, nor via imports">QueryConcat</span> : <a href="#HQLExpression_805_818" id="HQLExpression_5965_5978" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_5981_5994" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_5998_6011" title="Defined at line 42">HQLExpression</a>
    <span id="QueryPlus_6016_6025" title="Not referenced locally, nor via imports">QueryPlus</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6028_6041" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_6044_6057" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6061_6074" title="Defined at line 42">HQLExpression</a>
    <span id="QueryMinus_6079_6089" title="Not referenced locally, nor via imports">QueryMinus</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6092_6105" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_6108_6121" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6125_6138" title="Defined at line 42">HQLExpression</a>
    <span id="QueryMultiply_6143_6156" title="Not referenced locally, nor via imports">QueryMultiply</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6159_6172" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_6175_6188" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6192_6205" title="Defined at line 42">HQLExpression</a>
    <span id="QueryDivide_6210_6221" title="Not referenced locally, nor via imports">QueryDivide</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6224_6237" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_6240_6253" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6257_6270" title="Defined at line 42">HQLExpression</a>
    <span id="QueryModulo_6275_6286" title="Not referenced locally, nor via imports">QueryModulo</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6289_6302" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_6305_6318" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6322_6335" title="Defined at line 42">HQLExpression</a>
    <span id="QueryUMinus_6340_6351" title="Not referenced locally, nor via imports">QueryUMinus</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6354_6367" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6371_6384" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunCurDate_6389_6402" title="Not referenced locally, nor via imports">HQLFunCurDate</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6405_6418" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunCurTime_6423_6436" title="Not referenced locally, nor via imports">HQLFunCurTime</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6439_6452" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunCurTimestamp_6457_6475" title="Not referenced locally, nor via imports">HQLFunCurTimestamp</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6478_6491" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunSecond_6496_6508" title="Not referenced locally, nor via imports">HQLFunSecond</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6511_6524" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6528_6541" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunMinute_6546_6558" title="Not referenced locally, nor via imports">HQLFunMinute</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6561_6574" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6578_6591" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunHour_6596_6606" title="Not referenced locally, nor via imports">HQLFunHour</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6609_6622" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6626_6639" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunDay_6644_6653" title="Not referenced locally, nor via imports">HQLFunDay</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6656_6669" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6673_6686" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunMonth_6691_6702" title="Not referenced locally, nor via imports">HQLFunMonth</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6705_6718" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6722_6735" title="Defined at line 42">HQLExpression</a>
    <span id="HQLFunYear_6740_6750" title="Not referenced locally, nor via imports">HQLFunYear</span> : <a href="#HQLExpression_805_818" id="HQLExpression_6753_6766" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6770_6783" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLAvg_2731_2737" id="HQLAvg_6788_6794" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 59">HQLAvg</a> : <a href="#HQLExpression_805_818" id="HQLExpression_6797_6810" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6814_6827" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLSum_2837_2843" id="HQLSum_6832_6838" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 60">HQLSum</a> : <a href="#HQLExpression_805_818" id="HQLExpression_6841_6854" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6858_6871" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLMin_3008_3014" id="HQLMin_6876_6882" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 61">HQLMin</a> : <a href="#HQLExpression_805_818" id="HQLExpression_6885_6898" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6902_6915" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLMax_3179_3185" id="HQLMax_6920_6926" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 62">HQLMax</a> : <a href="#HQLExpression_805_818" id="HQLExpression_6929_6942" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_6946_6959" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLCountStar_3350_3362" id="HQLCountStar_6964_6976" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 63">HQLCountStar</a> : <a href="#HQLExpression_805_818" id="HQLExpression_6979_6992" title="Defined at line 42">HQLExpression</a>
    <a href="../../../../trans/static-semantics/webdsl-hql.stx#HQLCount_3410_3418" id="HQLCount_6997_7005" title="Referenced at ../../../../trans/static-semantics/webdsl-hql.stx line 64">HQLCount</a> : <a href="#HQLExpression_805_818" id="HQLExpression_7008_7021" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7025_7038" title="Defined at line 42">HQLExpression</a>
    <span id="HQLSize_7043_7050" title="Not referenced locally, nor via imports">HQLSize</span> : <a href="#HQLExpression_805_818" id="HQLExpression_7053_7066" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7070_7083" title="Defined at line 42">HQLExpression</a>
    <span id="HQLSubString_7088_7100" title="Not referenced locally, nor via imports">HQLSubString</span> : <a href="#HQLExpression_805_818" id="HQLExpression_7103_7116" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_7119_7132" title="Defined at line 42">HQLExpression</a> * <a href="#HQLExpression_805_818" id="HQLExpression_7135_7148" title="Defined at line 42">HQLExpression</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7152_7165" title="Defined at line 42">HQLExpression</a>
    <span id="HQLElements_7170_7181" title="Not referenced locally, nor via imports">HQLElements</span> : <a href="#HQLPath_793_800" id="HQLPath_7184_7191" title="Defined at line 41">HQLPath</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7195_7208" title="Defined at line 42">HQLExpression</a>
    <span id="HQLIndices_7213_7223" title="Not referenced locally, nor via imports">HQLIndices</span> : <a href="#HQLPath_793_800" id="HQLPath_7226_7233" title="Defined at line 41">HQLPath</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7237_7250" title="Defined at line 42">HQLExpression</a>
    <span id="HQLConstant_7255_7266" title="Not referenced locally, nor via imports">HQLConstant</span> : <a href="#HQLConstant_823_834" id="HQLConstant_7269_7280" title="Defined at line 43">HQLConstant</a> -&gt; <a href="#HQLExpression_805_818" id="HQLExpression_7284_7297" title="Defined at line 42">HQLExpression</a>
    <span id="HQLTrue_7302_7309" title="Not referenced locally, nor via imports">HQLTrue</span> : <a href="#HQLConstant_823_834" id="HQLConstant_7312_7323" title="Defined at line 43">HQLConstant</a>
    <span id="HQLFalse_7328_7336" title="Not referenced locally, nor via imports">HQLFalse</span> : <a href="#HQLConstant_823_834" id="HQLConstant_7339_7350" title="Defined at line 43">HQLConstant</a>
    <span id="HQLEmpty_7355_7363" title="Not referenced locally, nor via imports">HQLEmpty</span> : <a href="#HQLConstant_823_834" id="HQLConstant_7366_7377" title="Defined at line 43">HQLConstant</a>
    <span id="HQLNull_7382_7389" title="Not referenced locally, nor via imports">HQLNull</span> : <a href="#HQLConstant_823_834" id="HQLConstant_7392_7403" title="Defined at line 43">HQLConstant</a>
    <span id="HQLString_7408_7417" title="Not referenced locally, nor via imports">HQLString</span> : <a href="#HQLQuotedString_256_271" id="HQLQuotedString_7420_7435" title="Defined at line 15">HQLQuotedString</a> -&gt; <a href="#HQLConstant_823_834" id="HQLConstant_7439_7450" title="Defined at line 43">HQLConstant</a>
    <span id="HQLNumInt_7455_7464" title="Not referenced locally, nor via imports">HQLNumInt</span> : <a href="#HQLNumInt_233_242" id="HQLNumInt_7467_7476" title="Defined at line 14">HQLNumInt</a> -&gt; <a href="#HQLConstant_823_834" id="HQLConstant_7480_7491" title="Defined at line 43">HQLConstant</a>
</code></pre></td></tr></tbody></table></div>