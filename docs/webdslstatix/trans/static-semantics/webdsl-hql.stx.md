---
title: webdsl-hql.stx
hide:
  - toc
---

# `webdsl-hql.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-hql.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-hql.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-hql.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-hql_389_416" id="static-semantics/webdsl-hql_7_34" title="Referenced at ../webdsl.stx line 17">static-semantics/webdsl-hql</a>

<span class="keyword">imports</span>
  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_46_78" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_82_105" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>
  <a href="../webdsl-actions.stx#static-semantics/webdsl-actions_7_38" id="static-semantics/webdsl-actions_108_139" title="Defined at ../webdsl-actions.stx line 1">static-semantics/webdsl-actions</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_142_171" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>

<span class="keyword">rules</span> <span class="layout">// unimplemented</span>

  <a href="../webdsl.stx#stmtOk_15783_15789" id="stmtOk_199_205" title="Defined at ../webdsl.stx line 361">stmtOk</a>(_, _, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlStatement_6396_6408" id="HqlStatement_212_224" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 185">HqlStatement</a>(_), _) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This statement is not yet implemented].

<span class="keyword">rules</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_311_320" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlExp_6076_6082" id="HqlExp_324_330" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 178">HqlExp</a>(hqlExp)) = <a href="#typeOfHqlExp_370_382" id="typeOfHqlExp_342_354" title="Defined at line 18">typeOfHqlExp</a>(<span id="s_355_356" title="Not referenced locally, nor via imports">s</span>, <span id="hqlExp_358_364" title="Not referenced locally, nor via imports">hqlExp</span>).

  <a href="#typeOfHqlExp_342_354" id="typeOfHqlExp_370_382" title="Referenced at line 16, 19, 20, 23">typeOfHqlExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlExp_533_539" id="HqlExp_393_399" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 34">HqlExp</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_403_407" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlExp_370_382" id="typeOfHqlExp_410_422" title="Defined at line 18">typeOfHqlExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlQuery_6103_6111" id="HqlQuery_426_434" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 179">HqlQuery</a>(queryRule)) = <a href="#typeOfHqlQueryRule_791_809" id="typeOfHqlQueryRule_449_467" title="Defined at line 27">typeOfHqlQueryRule</a>(<span id="s_468_469" title="Not referenced locally, nor via imports">s</span>, <span id="queryRule_471_480" title="Not referenced locally, nor via imports">queryRule</span>).
  <a href="#typeOfHqlExp_370_382" id="typeOfHqlExp_485_497" title="Defined at line 18">typeOfHqlExp</a>(<a href="#s_595_596" id="s_498_499" title="Referenced at line 21">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlQueryLimit_6141_6154" id="HqlQueryLimit_501_514" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 180">HqlQueryLimit</a>(<span id="queryRule_515_524" title="Not referenced locally, nor via imports">queryRule</span>, <a href="#limitExp_598_606" id="limitExp_526_534" title="Referenced at line 21">limitExp</a>)) = <a href="#typeOfHqlQueryRule_791_809" id="typeOfHqlQueryRule_539_557" title="Defined at line 27">typeOfHqlQueryRule</a>(s, queryRule) :-
    <a href="#limitValueExpOk_5647_5662" id="limitValueExpOk_579_594" title="Defined at line 114">limitValueExpOk</a>(<a href="#s_498_499" id="s_595_596" title="Defined at line 20">s</a>, <a href="#limitExp_526_534" id="limitExp_598_606" title="Defined at line 20">limitExp</a>).

  <a href="#typeOfHqlExp_370_382" id="typeOfHqlExp_612_624" title="Defined at line 18">typeOfHqlExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#HqlQueryLimitOffset_6200_6219" id="HqlQueryLimitOffset_628_647" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 181">HqlQueryLimitOffset</a>(<span id="queryRule_648_657" title="Not referenced locally, nor via imports">queryRule</span>, <a href="#limitExp_742_750" id="limitExp_659_667" title="Referenced at line 24">limitExp</a>, <a href="#offsetExp_776_785" id="offsetExp_669_678" title="Referenced at line 25">offsetExp</a>)) = <a href="#typeOfHqlQueryRule_791_809" id="typeOfHqlQueryRule_683_701" title="Defined at line 27">typeOfHqlQueryRule</a>(<a href="#s_739_740" id="s_702_703" title="Referenced at line 24, 25">s</a>, queryRule) :-
    <a href="#limitValueExpOk_5647_5662" id="limitValueExpOk_723_738" title="Defined at line 114">limitValueExpOk</a>(<a href="#s_702_703" id="s_739_740" title="Defined at line 23">s</a>, <a href="#limitExp_659_667" id="limitExp_742_750" title="Defined at line 23">limitExp</a>),
    <a href="#limitValueExpOk_5647_5662" id="limitValueExpOk_757_772" title="Defined at line 114">limitValueExpOk</a>(<a href="#s_702_703" id="s_773_774" title="Defined at line 23">s</a>, <a href="#offsetExp_669_678" id="offsetExp_776_785" title="Defined at line 23">offsetExp</a>).

  <a href="#typeOfHqlQueryRule_449_467" id="typeOfHqlQueryRule_791_809" title="Referenced at line 19, 20, 23, 28">typeOfHqlQueryRule</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLQueryRule_399_411" id="HQLQueryRule_820_832" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 21">HQLQueryRule</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_836_840" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlQueryRule_791_809" id="typeOfHqlQueryRule_843_861" title="Defined at line 27">typeOfHqlQueryRule</a>(<a href="#s_992_993" id="s_862_863" title="Referenced at line 30, 31, 32, 33">s</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#QueryRule_2221_2230" id="QueryRule_865_874" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 80">QueryRule</a>(<a href="../../../src-gen/statix/signatures/HQL-sig.stx#SelectFrom_2331_2341" id="SelectFrom_875_885" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 81">SelectFrom</a>(<a href="#select_1004_1010" id="select_886_892" title="Referenced at line 30">select</a>, <a href="#from_1012_1016" id="from_894_898" title="Referenced at line 30">from</a>), <a href="#where_1052_1057" id="where_901_906" title="Referenced at line 31">where</a>, <a href="#groupBy_1095_1102" id="groupBy_908_915" title="Referenced at line 32">groupBy</a>, <a href="#orderBy_1140_1147" id="orderBy_917_924" title="Referenced at line 33">orderBy</a>)) = <a href="#t_967_968" id="t_929_930" title="Referenced at line 30">t</a> :- { <a href="#s_query_954_961" id="s_query_936_943" title="Referenced at line 29, 30, 31, 32, 33">s_query</a> }
    <span class="keyword">new</span> <a href="#s_query_936_943" id="s_query_954_961" title="Defined at line 28">s_query</a>,
    <a href="#t_929_930" id="t_967_968" title="Defined at line 28">t</a> == <a href="#typeOfHqlSelectFrom_1153_1172" id="typeOfHqlSelectFrom_972_991" title="Defined at line 35">typeOfHqlSelectFrom</a>(<a href="#s_862_863" id="s_992_993" title="Defined at line 28">s</a>, <a href="#s_query_936_943" id="s_query_995_1002" title="Defined at line 28">s_query</a>, <a href="#select_886_892" id="select_1004_1010" title="Defined at line 28">select</a>, <a href="#from_894_898" id="from_1012_1016" title="Defined at line 28">from</a>),
    <a href="#hqlWhereClauseOk_4947_4963" id="hqlWhereClauseOk_1023_1039" title="Defined at line 100">hqlWhereClauseOk</a>(<a href="#s_862_863" id="s_1040_1041" title="Defined at line 28">s</a>, <a href="#s_query_936_943" id="s_query_1043_1050" title="Defined at line 28">s_query</a>, <a href="#where_901_906" id="where_1052_1057" title="Defined at line 28">where</a>),
    <a href="#hqlGroupByClauseOk_5165_5183" id="hqlGroupByClauseOk_1064_1082" title="Defined at line 104">hqlGroupByClauseOk</a>(<a href="#s_862_863" id="s_1083_1084" title="Defined at line 28">s</a>, <a href="#s_query_936_943" id="s_query_1086_1093" title="Defined at line 28">s_query</a>, <a href="#groupBy_908_915" id="groupBy_1095_1102" title="Defined at line 28">groupBy</a>),
    <a href="#hqlOrderByClauseOk_5397_5415" id="hqlOrderByClauseOk_1109_1127" title="Defined at line 108">hqlOrderByClauseOk</a>(<a href="#s_862_863" id="s_1128_1129" title="Defined at line 28">s</a>, <a href="#s_query_936_943" id="s_query_1131_1138" title="Defined at line 28">s_query</a>, <a href="#orderBy_917_924" id="orderBy_1140_1147" title="Defined at line 28">orderBy</a>).

  <a href="#typeOfHqlSelectFrom_972_991" id="typeOfHqlSelectFrom_1153_1172" title="Referenced at line 30, 36, 37">typeOfHqlSelectFrom</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLSelectClauseOpt_358_376" id="HQLSelectClauseOpt_1191_1209" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 19">HQLSelectClauseOpt</a> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromClause_381_394" id="HQLFromClause_1212_1225" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 20">HQLFromClause</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1229_1233" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlSelectFrom_1153_1172" id="typeOfHqlSelectFrom_1236_1255" title="Defined at line 35">typeOfHqlSelectFrom</a>(s, _      , <a href="../../../src-gen/statix/signatures/HQL-sig.stx#SelectNone_2465_2475" id="SelectNone_1268_1278" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 83">SelectNone</a>()        , <span id="from_1290_1294" title="Not referenced locally, nor via imports">from</span>) = <a href="#typeOfHqlFrom_1790_1803" id="typeOfHqlFrom_1298_1311" title="Defined at line 45">typeOfHqlFrom</a>(<span id="s_1312_1313" title="Not referenced locally, nor via imports">s</span>, from).
  <a href="#typeOfHqlSelectFrom_1153_1172" id="typeOfHqlSelectFrom_1324_1343" title="Defined at line 35">typeOfHqlSelectFrom</a>(<a href="#s_1411_1412" id="s_1344_1345" title="Referenced at line 38, 39">s</a>, <a href="#s_query_1414_1421" id="s_query_1347_1354" title="Referenced at line 38, 39">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#Select_2400_2406" id="Select_1356_1362" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 82">Select</a>(_, <a href="#selection_1467_1476" id="selection_1366_1375" title="Referenced at line 39">selection</a>), <a href="#from_1423_1427" id="from_1378_1382" title="Referenced at line 38">from</a>) = <a href="#t_1434_1435" id="t_1386_1387" title="Referenced at line 39">t</a> :-
    <a href="#hqlFromClauseOk_4009_4024" id="hqlFromClauseOk_1395_1410" title="Defined at line 78">hqlFromClauseOk</a>(<a href="#s_1344_1345" id="s_1411_1412" title="Defined at line 37">s</a>, <a href="#s_query_1347_1354" id="s_query_1414_1421" title="Defined at line 37">s_query</a>, <a href="#from_1378_1382" id="from_1423_1427" title="Defined at line 37">from</a>),
    <a href="#t_1386_1387" id="t_1434_1435" title="Defined at line 37">t</a> == <a href="#typeOfHqlSelect_1482_1497" id="typeOfHqlSelect_1439_1454" title="Defined at line 41">typeOfHqlSelect</a>(<a href="#s_1344_1345" id="s_1455_1456" title="Defined at line 37">s</a>, <a href="#s_query_1347_1354" id="s_query_1458_1465" title="Defined at line 37">s_query</a>, <a href="#selection_1366_1375" id="selection_1467_1476" title="Defined at line 37">selection</a>).

  <a href="#typeOfHqlSelect_1439_1454" id="typeOfHqlSelect_1482_1497" title="Referenced at line 39, 42, 43">typeOfHqlSelect</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLSelection_453_465" id="HQLSelection_1516_1528" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 24">HQLSelection</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1532_1536" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlSelect_1482_1497" id="typeOfHqlSelect_1539_1554" title="Defined at line 41">typeOfHqlSelect</a>(s, s_query, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#SelectedProperties_2687_2705" id="SelectedProperties_1567_1585" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 88">SelectedProperties</a>([aliasedExp])) = <a href="#typeOfHqlAliasedExpression_2169_2195" id="typeOfHqlAliasedExpression_1603_1629" title="Defined at line 53">typeOfHqlAliasedExpression</a>(<span id="s_1630_1631" title="Not referenced locally, nor via imports">s</span>, <span id="s_query_1633_1640" title="Not referenced locally, nor via imports">s_query</span>, <span id="aliasedExp_1642_1652" title="Not referenced locally, nor via imports">aliasedExp</span>).
  <a href="#typeOfHqlSelect_1482_1497" id="typeOfHqlSelect_1657_1672" title="Defined at line 41">typeOfHqlSelect</a>(_, _, <a href="#ps_1783_1785" id="ps_1679_1681" title="Referenced at line 43">ps</a>@<a href="../../../src-gen/statix/signatures/HQL-sig.stx#SelectedProperties_2687_2705" id="SelectedProperties_1682_1700" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 88">SelectedProperties</a>([_ | [_]])) = <span id="t_1715_1716" title="Not referenced locally, nor via imports">t</span> :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Selecting multiple properties is not allowed] @<a href="#ps_1679_1681" id="ps_1783_1785" title="Defined at line 43">ps</a>.

  <a href="#typeOfHqlFrom_1298_1311" id="typeOfHqlFrom_1790_1803" title="Referenced at line 36, 46">typeOfHqlFrom</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromClause_381_394" id="HQLFromClause_1814_1827" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 20">HQLFromClause</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1831_1835" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlFrom_1790_1803" id="typeOfHqlFrom_1838_1851" title="Defined at line 45">typeOfHqlFrom</a>(s, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromClause_2755_2765" id="FromClause_1855_1865" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 89">FromClause</a>([<a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromRangeJoin_2812_2825" id="FromRangeJoin_1867_1880" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 90">FromRangeJoin</a>(fromRange, _) | _])) = <a href="#typeOfHqlFromRange_1941_1959" id="typeOfHqlFromRange_1904_1922" title="Defined at line 48">typeOfHqlFromRange</a>(<span id="s_1923_1924" title="Not referenced locally, nor via imports">s</span>, <span id="fromRange_1926_1935" title="Not referenced locally, nor via imports">fromRange</span>).

  <a href="#typeOfHqlFromRange_1904_1922" id="typeOfHqlFromRange_1941_1959" title="Referenced at line 46, 49">typeOfHqlFromRange</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromRange_563_575" id="HQLFromRange_1970_1982" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 30">HQLFromRange</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1986_1990" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlFromRange_1941_1959" id="typeOfHqlFromRange_1993_2011" title="Defined at line 48">typeOfHqlFromRange</a>(<a href="#s_2095_2096" id="s_2012_2013" title="Referenced at line 50">s</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromClassOrOuterQueryPath_3379_3404" id="FromClassOrOuterQueryPath_2015_2040" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 103">FromClassOrOuterQueryPath</a>(<a href="../../../src-gen/statix/signatures/HQL-sig.stx#Path_4620_4624" id="Path_2041_2045" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 127">Path</a>([<a href="#ent_2098_2101" id="ent_2047_2050" title="Referenced at line 50, 51, 51">ent</a>]), _, _)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_2063_2067" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_2078_2079" id="t_2068_2069" title="Referenced at line 50, 51">t</a>) :-
    <a href="#t_2068_2069" id="t_2078_2079" title="Defined at line 49">t</a> == <a href="../webdsl-types.stx#definedType_7911_7922" id="definedType_2083_2094" title="Defined at ../webdsl-types.stx line 218">definedType</a>(<a href="#s_2012_2013" id="s_2095_2096" title="Defined at line 49">s</a>, <a href="#ent_2047_2050" id="ent_2098_2101" title="Defined at line 49">ent</a>),
    <a href="#t_2068_2069" id="t_2108_2109" title="Defined at line 49">t</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_2113_2119" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[[<a href="#ent_2047_2050" id="ent_2137_2140" title="Defined at line 49">ent</a>] is not an entity] @<a href="#ent_2047_2050" id="ent_2161_2164" title="Defined at line 49">ent</a>.

  <a href="#typeOfHqlAliasedExpression_1603_1629" id="typeOfHqlAliasedExpression_2169_2195" title="Referenced at line 42, 54, 55">typeOfHqlAliasedExpression</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLAliasedExpression_768_788" id="HQLAliasedExpression_2214_2234" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 40">HQLAliasedExpression</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_2238_2242" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlAliasedExpression_2169_2195" id="typeOfHqlAliasedExpression_2245_2271" title="Defined at line 53">typeOfHqlAliasedExpression</a>(<span id="s_2272_2273" title="Not referenced locally, nor via imports">s</span>, s_query, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#AliasedExpression_4542_4559" id="AliasedExpression_2284_2301" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 126">AliasedExpression</a>(hqlExp, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#AsAliasNone_3711_3722" id="AsAliasNone_2310_2321" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 108">AsAliasNone</a>())) = <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2328_2347" title="Defined at line 57">typeOfHqlExpression</a>(s, <span id="s_query_2351_2358" title="Not referenced locally, nor via imports">s_query</span>, <span id="hqlExp_2360_2366" title="Not referenced locally, nor via imports">hqlExp</span>).
  <a href="#typeOfHqlAliasedExpression_2169_2195" id="typeOfHqlAliasedExpression_2371_2397" title="Defined at line 53">typeOfHqlAliasedExpression</a>(_, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#AliasedExpression_4542_4559" id="AliasedExpression_2404_2421" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 126">AliasedExpression</a>(_, <a href="#a_2515_2516" id="a_2425_2426" title="Referenced at line 55">a</a>@<a href="../../../src-gen/statix/signatures/HQL-sig.stx#AsAlias_3671_3678" id="AsAlias_2427_2434" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 107">AsAlias</a>(_))) = <span id="t_2442_2443" title="Not referenced locally, nor via imports">t</span> :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Aliased expressions not yet implemented] @<a href="#a_2425_2426" id="a_2515_2516" title="Defined at line 55">a</a>.

  <a href="#typeOfHqlExpression_2328_2347" id="typeOfHqlExpression_2521_2540" title="Referenced at line 54, 58, 59, 59, 60, 60, 61, 61, 62, 62, 63, 64, 64, 65, 70">typeOfHqlExpression</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLExpression_805_818" id="HQLExpression_2559_2572" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 42">HQLExpression</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_2576_2580" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2583_2602" title="Defined at line 57">typeOfHqlExpression</a>(_, _, <a href="#e_2669_2670" id="e_2609_2610" title="Referenced at line 58, 58">e</a>) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_2614_2621" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[HQL Expression [<a href="#e_2609_2610" id="e_2669_2670" title="Defined at line 58">e</a>] not yet implemented] @<a href="#e_2609_2610" id="e_2694_2695" title="Defined at line 58">e</a>.
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2699_2718" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_2787_2788" id="s_2719_2720" title="Referenced at line 59">s</a>, <a href="#s_query_2790_2797" id="s_query_2722_2729" title="Referenced at line 59">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLAvg_6788_6794" id="HQLAvg_2731_2737" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 166">HQLAvg</a>(<a href="#e_2799_2800" id="e_2738_2739" title="Referenced at line 59">e</a>)) = <a href="../types/built-ins.stx#float_1698_1703" id="float_2744_2749" title="Defined at ../types/built-ins.stx line 43">float</a>(s) :- { <a href="#t_2762_2763" id="t_2758_2759" title="Referenced at line 59">t</a> } <a href="#t_2758_2759" id="t_2762_2763" title="Defined at line 59">t</a> == <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2767_2786" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_2719_2720" id="s_2787_2788" title="Defined at line 59">s</a>, <a href="#s_query_2722_2729" id="s_query_2790_2797" title="Defined at line 59">s_query</a>, <a href="#e_2738_2739" id="e_2799_2800" title="Defined at line 59">e</a>).
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2805_2824" title="Defined at line 57">typeOfHqlExpression</a>(s, <a href="#s_query_2894_2901" id="s_query_2828_2835" title="Referenced at line 60">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLSum_6832_6838" id="HQLSum_2837_2843" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 167">HQLSum</a>(<a href="#e_2903_2904" id="e_2844_2845" title="Referenced at line 60">e</a>)) = <a href="../types/built-ins.stx#int_1638_1641" id="int_2850_2853" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_2891_2892" id="s_2854_2855" title="Referenced at line 60">s</a>) :- { <a href="#t_2866_2867" id="t_2862_2863" title="Referenced at line 60">t</a> } <a href="#t_2862_2863" id="t_2866_2867" title="Defined at line 60">t</a> == <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2871_2890" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_2854_2855" id="s_2891_2892" title="Defined at line 60">s</a>, <a href="#s_query_2828_2835" id="s_query_2894_2901" title="Defined at line 60">s_query</a>, <a href="#e_2844_2845" id="e_2903_2904" title="Defined at line 60">e</a>). <span class="layout">// TO-DO: possibly return float instead of int, based on selection</span>
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_2976_2995" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_3062_3063" id="s_2996_2997" title="Referenced at line 61">s</a>, <a href="#s_query_3065_3072" id="s_query_2999_3006" title="Referenced at line 61">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLMin_6876_6882" id="HQLMin_3008_3014" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 168">HQLMin</a>(<a href="#e_3074_3075" id="e_3015_3016" title="Referenced at line 61">e</a>)) = <a href="../types/built-ins.stx#int_1638_1641" id="int_3021_3024" title="Defined at ../types/built-ins.stx line 41">int</a>(s) :- { <a href="#t_3037_3038" id="t_3033_3034" title="Referenced at line 61">t</a> } <a href="#t_3033_3034" id="t_3037_3038" title="Defined at line 61">t</a> == <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3042_3061" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_2996_2997" id="s_3062_3063" title="Defined at line 61">s</a>, <a href="#s_query_2999_3006" id="s_query_3065_3072" title="Defined at line 61">s_query</a>, <a href="#e_3015_3016" id="e_3074_3075" title="Defined at line 61">e</a>). <span class="layout">// TO-DO: possibly return float instead of int, based on selection</span>
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3147_3166" title="Defined at line 57">typeOfHqlExpression</a>(s, <a href="#s_query_3236_3243" id="s_query_3170_3177" title="Referenced at line 62">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLMax_6920_6926" id="HQLMax_3179_3185" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 169">HQLMax</a>(<a href="#e_3245_3246" id="e_3186_3187" title="Referenced at line 62">e</a>)) = <a href="../types/built-ins.stx#int_1638_1641" id="int_3192_3195" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_3233_3234" id="s_3196_3197" title="Referenced at line 62">s</a>) :- { <a href="#t_3208_3209" id="t_3204_3205" title="Referenced at line 62">t</a> } <a href="#t_3204_3205" id="t_3208_3209" title="Defined at line 62">t</a> == <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3213_3232" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_3196_3197" id="s_3233_3234" title="Defined at line 62">s</a>, <a href="#s_query_3170_3177" id="s_query_3236_3243" title="Defined at line 62">s_query</a>, <a href="#e_3186_3187" id="e_3245_3246" title="Defined at line 62">e</a>). <span class="layout">// TO-DO: possibly return float instead of int, based on selection</span>
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3318_3337" title="Defined at line 57">typeOfHqlExpression</a>(<span id="s_3338_3339" title="Not referenced locally, nor via imports">s</span>, <span id="s_query_3341_3348" title="Not referenced locally, nor via imports">s_query</span>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLCountStar_6964_6976" id="HQLCountStar_3350_3362" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 170">HQLCountStar</a>()) = <a href="../types/built-ins.stx#int_1638_1641" id="int_3368_3371" title="Defined at ../types/built-ins.stx line 41">int</a>(s).
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3378_3397" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_3466_3467" id="s_3398_3399" title="Referenced at line 64">s</a>, <a href="#s_query_3469_3476" id="s_query_3401_3408" title="Referenced at line 64">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLCount_6997_7005" id="HQLCount_3410_3418" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 171">HQLCount</a>(<a href="#e_3478_3479" id="e_3419_3420" title="Referenced at line 64">e</a>)) = <a href="../types/built-ins.stx#int_1638_1641" id="int_3425_3428" title="Defined at ../types/built-ins.stx line 41">int</a>(s) :- { <a href="#t_3441_3442" id="t_3437_3438" title="Referenced at line 64">t</a> } <a href="#t_3437_3438" id="t_3441_3442" title="Defined at line 64">t</a> == <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3446_3465" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_3398_3399" id="s_3466_3467" title="Defined at line 64">s</a>, <a href="#s_query_3401_3408" id="s_query_3469_3476" title="Defined at line 64">s_query</a>, <a href="#e_3419_3420" id="e_3478_3479" title="Defined at line 64">e</a>).
  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3484_3503" title="Defined at line 57">typeOfHqlExpression</a>(_, <a href="#s_query_3571_3578" id="s_query_3507_3514" title="Referenced at line 66">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLPath_4702_4709" id="HQLPath_3516_3523" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 129">HQLPath</a>(<a href="../../../src-gen/statix/signatures/HQL-sig.stx#Path_4620_4624" id="Path_3524_3528" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 127">Path</a>([<a href="#p_3580_3581" id="p_3530_3531" title="Referenced at line 66, 66, 67, 68">p</a>]))) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_3538_3542" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_3596_3597" id="t_3543_3544" title="Referenced at line 66, 67">t</a>) :- { <a href="#p'_3592_3594" id="p'_3551_3553" title="Referenced at line 66, 68">p'</a> }
    <a href="../webdsl.stx#resolveVar_13466_13476" id="resolveVar_3560_3570" title="Defined at ../webdsl.stx line 306">resolveVar</a>(<a href="#s_query_3507_3514" id="s_query_3571_3578" title="Defined at line 65">s_query</a>, <a href="#p_3530_3531" id="p_3580_3581" title="Defined at line 65">p</a>) == [(_, (<a href="#p'_3551_3553" id="p'_3592_3594" title="Defined at line 65">p'</a>, <a href="#t_3543_3544" id="t_3596_3597" title="Defined at line 65">t</a>))] | <span class="keyword">error</span> $[Cannot resolve [<a href="#p_3530_3531" id="p_3627_3628" title="Defined at line 65">p</a>]],
    @<a href="#p_3530_3531" id="p_3637_3638" title="Defined at line 65">p</a>.<span class="keyword">type</span> := <a href="#t_3543_3544" id="t_3647_3648" title="Defined at line 65">t</a>,
    @<a href="#p_3530_3531" id="p_3655_3656" title="Defined at line 65">p</a>.<span class="keyword">ref</span> := <a href="#p'_3551_3553" id="p'_3664_3666" title="Defined at line 65">p'</a>.

  <a href="#typeOfHqlExpression_2521_2540" id="typeOfHqlExpression_3671_3690" title="Defined at line 57">typeOfHqlExpression</a>(<a href="#s_3884_3885" id="s_3691_3692" title="Referenced at line 72">s</a>, <a href="#s_query_3779_3786" id="s_query_3694_3701" title="Referenced at line 71">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLPath_4702_4709" id="HQLPath_3703_3710" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 129">HQLPath</a>(<a href="../../../src-gen/statix/signatures/HQL-sig.stx#Path_4620_4624" id="Path_3711_3715" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 127">Path</a>([<a href="#ent_3788_3791" id="ent_3717_3720" title="Referenced at line 71, 71, 71, 73, 74">ent</a>, <a href="#prop_3899_3903" id="prop_3722_3726" title="Referenced at line 72">prop</a>]))) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_3733_3737" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_3864_3865" id="t_3738_3739" title="Referenced at line 72">t</a>) :- { <a href="#ent'_3802_3806" id="ent'_3746_3750" title="Referenced at line 71, 74">ent'</a> <a href="#entityType_3808_3818" id="entityType_3751_3761" title="Referenced at line 71, 72, 73">entityType</a> }
    <a href="../webdsl.stx#resolveVar_13466_13476" id="resolveVar_3768_3778" title="Defined at ../webdsl.stx line 306">resolveVar</a>(<a href="#s_query_3694_3701" id="s_query_3779_3786" title="Defined at line 70">s_query</a>, <a href="#ent_3717_3720" id="ent_3788_3791" title="Defined at line 70">ent</a>) == [(_, (<a href="#ent'_3746_3750" id="ent'_3802_3806" title="Defined at line 70">ent'</a>, <a href="#entityType_3751_3761" id="entityType_3808_3818" title="Defined at line 70">entityType</a>))] | <span class="keyword">error</span> $[Cannot resolve [<a href="#ent_3717_3720" id="ent_3848_3851" title="Defined at line 70">ent</a>]] @<a href="#ent_3717_3720" id="ent_3855_3858" title="Defined at line 70">ent</a>,
    <a href="#t_3738_3739" id="t_3864_3865" title="Defined at line 70">t</a> == <a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_3869_3883" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_3691_3692" id="s_3884_3885" title="Defined at line 70">s</a>, <a href="#entityType_3751_3761" id="entityType_3887_3897" title="Defined at line 70">entityType</a>, <a href="#prop_3722_3726" id="prop_3899_3903" title="Defined at line 70">prop</a>),
    @<a href="#ent_3717_3720" id="ent_3911_3914" title="Defined at line 70">ent</a>.<span class="keyword">type</span> := <a href="#entityType_3751_3761" id="entityType_3923_3933" title="Defined at line 70">entityType</a>,
    @<a href="#ent_3717_3720" id="ent_3940_3943" title="Defined at line 70">ent</a>.<span class="keyword">ref</span> := <a href="#ent'_3746_3750" id="ent'_3951_3955" title="Defined at line 70">ent'</a>.

<span class="keyword">rules</span> <span class="layout">// fill scope graph using HQL From clause</span>

  <a href="#hqlFromClauseOk_1395_1410" id="hqlFromClauseOk_4009_4024" title="Referenced at line 38, 79">hqlFromClauseOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromClause_381_394" id="HQLFromClause_4043_4056" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 20">HQLFromClause</a>
  <a href="#hqlFromClauseOk_4009_4024" id="hqlFromClauseOk_4059_4074" title="Defined at line 78">hqlFromClauseOk</a>(<a href="#s_4138_4139" id="s_4075_4076" title="Referenced at line 79">s</a>, <a href="#s_query_4141_4148" id="s_query_4078_4085" title="Referenced at line 79">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromClause_2755_2765" id="FromClause_4087_4097" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 89">FromClause</a>(<a href="#fromRangeJoins_4150_4164" id="fromRangeJoins_4098_4112" title="Referenced at line 79">fromRangeJoins</a>)) :- <a href="#hqlFromRangeJoinsOk_4170_4189" id="hqlFromRangeJoinsOk_4118_4137" title="Defined at line 81">hqlFromRangeJoinsOk</a>(<a href="#s_4075_4076" id="s_4138_4139" title="Defined at line 79">s</a>, <a href="#s_query_4078_4085" id="s_query_4141_4148" title="Defined at line 79">s_query</a>, <a href="#fromRangeJoins_4098_4112" id="fromRangeJoins_4150_4164" title="Defined at line 79">fromRangeJoins</a>).

  <a href="#hqlFromRangeJoinsOk_4118_4137" id="hqlFromRangeJoinsOk_4170_4189" title="Referenced at line 79">hqlFromRangeJoinsOk</a> <span class="keyword">maps</span> <a href="#hqlFromRangeJoinOk_4231_4249" id="hqlFromRangeJoinOk_4195_4213" title="Defined at line 82">hqlFromRangeJoinOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#hqlFromRangeJoinOk_4195_4213" id="hqlFromRangeJoinOk_4231_4249" title="Referenced at line 81, 83">hqlFromRangeJoinOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromRangeJoin_470_486" id="HQLFromRangeJoin_4268_4284" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 25">HQLFromRangeJoin</a>
  <a href="#hqlFromRangeJoinOk_4231_4249" id="hqlFromRangeJoinOk_4287_4305" title="Defined at line 82">hqlFromRangeJoinOk</a>(<a href="#s_4373_4374" id="s_4306_4307" title="Referenced at line 84, 85">s</a>, <a href="#s_query_4376_4383" id="s_query_4309_4316" title="Referenced at line 84, 85">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromRangeJoin_2812_2825" id="FromRangeJoin_4318_4331" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 90">FromRangeJoin</a>(<a href="#fromRange_4385_4394" id="fromRange_4332_4341" title="Referenced at line 84">fromRange</a>, <a href="#joins_4428_4433" id="joins_4343_4348" title="Referenced at line 85">joins</a>)) :-
    <a href="#hqlFromRangeOk_4439_4453" id="hqlFromRangeOk_4358_4372" title="Defined at line 87">hqlFromRangeOk</a>(<a href="#s_4306_4307" id="s_4373_4374" title="Defined at line 83">s</a>, <a href="#s_query_4309_4316" id="s_query_4376_4383" title="Defined at line 83">s_query</a>, <a href="#fromRange_4332_4341" id="fromRange_4385_4394" title="Defined at line 83">fromRange</a>),
    <a href="#hqlFromJoinsOk_4649_4663" id="hqlFromJoinsOk_4401_4415" title="Defined at line 92">hqlFromJoinsOk</a>(<a href="#s_4306_4307" id="s_4416_4417" title="Defined at line 83">s</a>, <a href="#s_query_4309_4316" id="s_query_4419_4426" title="Defined at line 83">s_query</a>, <a href="#joins_4343_4348" id="joins_4428_4433" title="Defined at line 83">joins</a>).

  <a href="#hqlFromRangeOk_4358_4372" id="hqlFromRangeOk_4439_4453" title="Referenced at line 84, 88">hqlFromRangeOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromRange_563_575" id="HQLFromRange_4472_4484" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 30">HQLFromRange</a>
  <a href="#hqlFromRangeOk_4439_4453" id="hqlFromRangeOk_4487_4501" title="Defined at line 87">hqlFromRangeOk</a>(<a href="#s_4593_4594" id="s_4502_4503" title="Referenced at line 89">s</a>, <a href="#s_query_4596_4603" id="s_query_4505_4512" title="Referenced at line 89, 90">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromClassOrOuterQueryPath_3379_3404" id="FromClassOrOuterQueryPath_4514_4539" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 103">FromClassOrOuterQueryPath</a>(<a href="#path_4605_4609" id="path_4540_4544" title="Referenced at line 89">path</a>, <a href="#alias_4638_4643" id="alias_4546_4551" title="Referenced at line 90">alias</a>, _)) :- { <a href="#t_4570_4571" id="t_4562_4563" title="Referenced at line 89, 90">t</a> }
    <a href="#t_4562_4563" id="t_4570_4571" title="Defined at line 88">t</a> == <a href="#typeOfHqlFromPath_6177_6194" id="typeOfHqlFromPath_4575_4592" title="Defined at line 127">typeOfHqlFromPath</a>(<a href="#s_4502_4503" id="s_4593_4594" title="Defined at line 88">s</a>, <a href="#s_query_4505_4512" id="s_query_4596_4603" title="Defined at line 88">s_query</a>, <a href="#path_4540_4544" id="path_4605_4609" title="Defined at line 88">path</a>),
    <a href="#declAlias_6026_6035" id="declAlias_4616_4625" title="Defined at line 123">declAlias</a>(<a href="#s_query_4505_4512" id="s_query_4626_4633" title="Defined at line 88">s_query</a>, <a href="#t_4562_4563" id="t_4635_4636" title="Defined at line 88">t</a>, <a href="#alias_4546_4551" id="alias_4638_4643" title="Defined at line 88">alias</a>).

  <a href="#hqlFromJoinsOk_4401_4415" id="hqlFromJoinsOk_4649_4663" title="Referenced at line 85">hqlFromJoinsOk</a> <span class="keyword">maps</span> <a href="#hqlFromJoinOk_4700_4713" id="hqlFromJoinOk_4669_4682" title="Defined at line 93">hqlFromJoinOk</a>(*, *, <span class="keyword">list</span>(*))
  <a href="#hqlFromJoinOk_4669_4682" id="hqlFromJoinOk_4700_4713" title="Referenced at line 92, 94">hqlFromJoinOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLFromJoin_491_502" id="HQLFromJoin_4732_4743" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 26">HQLFromJoin</a>
  <a href="#hqlFromJoinOk_4700_4713" id="hqlFromJoinOk_4746_4759" title="Defined at line 93">hqlFromJoinOk</a>(<a href="#s_4843_4844" id="s_4760_4761" title="Referenced at line 95">s</a>, <a href="#s_query_4846_4853" id="s_query_4763_4770" title="Referenced at line 95, 96">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#FromJoin_2885_2893" id="FromJoin_4772_4780" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 91">FromJoin</a>(_, _, <a href="#path_4855_4859" id="path_4787_4791" title="Referenced at line 95">path</a>, <a href="#alias_4888_4893" id="alias_4793_4798" title="Referenced at line 96">alias</a>, _, _)) :- { <a href="#t_4820_4821" id="t_4812_4813" title="Referenced at line 95, 96">t</a> }
    <a href="#t_4812_4813" id="t_4820_4821" title="Defined at line 94">t</a> == <a href="#typeOfHqlFromPath_6177_6194" id="typeOfHqlFromPath_4825_4842" title="Defined at line 127">typeOfHqlFromPath</a>(<a href="#s_4760_4761" id="s_4843_4844" title="Defined at line 94">s</a>, <a href="#s_query_4763_4770" id="s_query_4846_4853" title="Defined at line 94">s_query</a>, <a href="#path_4787_4791" id="path_4855_4859" title="Defined at line 94">path</a>),
    <a href="#declAlias_6026_6035" id="declAlias_4866_4875" title="Defined at line 123">declAlias</a>(<a href="#s_query_4763_4770" id="s_query_4876_4883" title="Defined at line 94">s_query</a>, <a href="#t_4812_4813" id="t_4885_4886" title="Defined at line 94">t</a>, <a href="#alias_4793_4798" id="alias_4888_4893" title="Defined at line 94">alias</a>).

<span class="keyword">rules</span> <span class="layout">// where, group by and order by analysis</span>

  <a href="#hqlWhereClauseOk_1023_1039" id="hqlWhereClauseOk_4947_4963" title="Referenced at line 31, 101, 102">hqlWhereClauseOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLWhereClauseOpt_746_763" id="HQLWhereClauseOpt_4982_4999" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 39">HQLWhereClauseOpt</a>
  <a href="#hqlWhereClauseOk_4947_4963" id="hqlWhereClauseOk_5002_5018" title="Defined at line 100">hqlWhereClauseOk</a>(_, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#WhereClauseNone_4502_4517" id="WhereClauseNone_5025_5040" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 125">WhereClauseNone</a>()).
  <a href="#hqlWhereClauseOk_4947_4963" id="hqlWhereClauseOk_5047_5063" title="Defined at line 100">hqlWhereClauseOk</a>(_, _, <a href="#w_5159_5160" id="w_5070_5071" title="Referenced at line 102">w</a>@<a href="../../../src-gen/statix/signatures/HQL-sig.stx#WhereClause_4449_4460" id="WhereClause_5072_5083" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 124">WhereClause</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[HQL Where clause is not yet implemented] @<a href="#w_5070_5071" id="w_5159_5160" title="Defined at line 102">w</a>.

  <a href="#hqlGroupByClauseOk_1064_1082" id="hqlGroupByClauseOk_5165_5183" title="Referenced at line 32, 105, 106">hqlGroupByClauseOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLGroupByClauseOpt_635_654" id="HQLGroupByClauseOpt_5202_5221" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 34">HQLGroupByClauseOpt</a>
  <a href="#hqlGroupByClauseOk_5165_5183" id="hqlGroupByClauseOk_5224_5242" title="Defined at line 104">hqlGroupByClauseOk</a>(_, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLGroupByNone_3946_3960" id="HQLGroupByNone_5249_5263" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 113">HQLGroupByNone</a>()).
  <a href="#hqlGroupByClauseOk_5165_5183" id="hqlGroupByClauseOk_5270_5288" title="Defined at line 104">hqlGroupByClauseOk</a>(_, _, <a href="#gb_5390_5392" id="gb_5295_5297" title="Referenced at line 106">gb</a>@<a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLGroupBy_3865_3875" id="HQLGroupBy_5298_5308" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 112">HQLGroupBy</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[HQL Group By clause is not yet implemented] @<a href="#gb_5295_5297" id="gb_5390_5392" title="Defined at line 106">gb</a>.

  <a href="#hqlOrderByClauseOk_1109_1127" id="hqlOrderByClauseOk_5397_5415" title="Referenced at line 33, 109, 110">hqlOrderByClauseOk</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLOrderByClauseOpt_659_678" id="HQLOrderByClauseOpt_5434_5453" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 35">HQLOrderByClauseOpt</a>
  <a href="#hqlOrderByClauseOk_5397_5415" id="hqlOrderByClauseOk_5456_5474" title="Defined at line 108">hqlOrderByClauseOk</a>(_, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#OrderByClauseNone_4052_4069" id="OrderByClauseNone_5481_5498" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 115">OrderByClauseNone</a>()).
  <a href="#hqlOrderByClauseOk_5397_5415" id="hqlOrderByClauseOk_5505_5523" title="Defined at line 108">hqlOrderByClauseOk</a>(_, _, <a href="#ob_5625_5627" id="ob_5530_5532" title="Referenced at line 110">ob</a>@<a href="../../../src-gen/statix/signatures/HQL-sig.stx#OrderByClause_3987_4000" id="OrderByClause_5533_5546" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 114">OrderByClause</a>(_)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[HQL Order By clause is not yet implemented] @<a href="#ob_5530_5532" id="ob_5625_5627" title="Defined at line 110">ob</a>.

<span class="keyword">rules</span> <span class="layout">// misc</span>

  <a href="#limitValueExpOk_579_594" id="limitValueExpOk_5647_5662" title="Referenced at line 21, 24, 25, 115, 118">limitValueExpOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#LimitValueExp_544_557" id="LimitValueExp_5673_5686" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 35">LimitValueExp</a>
  <a href="#limitValueExpOk_5647_5662" id="limitValueExpOk_5689_5704" title="Defined at line 114">limitValueExpOk</a>(<a href="#s_5760_5761" id="s_5705_5706" title="Referenced at line 116, 116">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#LimitValueExp_6281_6294" id="LimitValueExp_5708_5721" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 182">LimitValueExp</a>(<a href="#exp_5763_5766" id="exp_5722_5725" title="Referenced at line 116, 116">exp</a>)) :-
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5735_5749" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5750_5759" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5705_5706" id="s_5760_5761" title="Defined at line 115">s</a>, <a href="#exp_5722_5725" id="exp_5763_5766" title="Defined at line 115">exp</a>), <a href="../types/built-ins.stx#int_1638_1641" id="int_5769_5772" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_5705_5706" id="s_5773_5774" title="Defined at line 115">s</a>)) | <span class="keyword">error</span> $[Expression [<a href="#exp_5722_5725" id="exp_5799_5802" title="Defined at line 115">exp</a>] should be compatible with type Int].

  <a href="#limitValueExpOk_5647_5662" id="limitValueExpOk_5844_5859" title="Defined at line 114">limitValueExpOk</a>(<a href="#s_5926_5927" id="s_5860_5861" title="Referenced at line 119, 119">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#LimitValueDslExp_6322_6338" id="LimitValueDslExp_5863_5879" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 183">LimitValueDslExp</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#DslExp_6369_6375" id="DslExp_5880_5886" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 184">DslExp</a>(<a href="#exp_5929_5932" id="exp_5887_5890" title="Referenced at line 119, 119">exp</a>))) :-
    <a href="../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_5901_5915" title="Defined at ../webdsl.stx line 408">typeCompatible</a>(<a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_5916_5925" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_5860_5861" id="s_5926_5927" title="Defined at line 118">s</a>, <a href="#exp_5887_5890" id="exp_5929_5932" title="Defined at line 118">exp</a>), <a href="../types/built-ins.stx#int_1638_1641" id="int_5935_5938" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_5860_5861" id="s_5939_5940" title="Defined at line 118">s</a>)) | <span class="keyword">error</span> $[Expression [<a href="#exp_5887_5890" id="exp_5965_5968" title="Defined at line 118">exp</a>] should be compatible with type Int].

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#declAlias_4616_4625" id="declAlias_6026_6035" title="Referenced at line 90, 96, 124, 125">declAlias</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6046_6050" title="Defined at ../webdsl.stx line 29">TYPE</a> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLAsAliasOpt_617_630" id="HQLAsAliasOpt_6053_6066" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 33">HQLAsAliasOpt</a>
  <a href="#declAlias_6026_6035" id="declAlias_6069_6078" title="Defined at line 123">declAlias</a>(_, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#AsAliasNone_3711_3722" id="AsAliasNone_6085_6096" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 108">AsAliasNone</a>()).
  <a href="#declAlias_6026_6035" id="declAlias_6103_6112" title="Defined at line 123">declAlias</a>(<a href="#s_query_6158_6165" id="s_query_6113_6120" title="Referenced at line 125">s_query</a>, <a href="#t_6170_6171" id="t_6122_6123" title="Referenced at line 125">t</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#AsAlias_3671_3678" id="AsAlias_6125_6132" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 107">AsAlias</a>(<a href="../../../src-gen/statix/signatures/HQL-sig.stx#Alias_3743_3748" id="Alias_6133_6138" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 109">Alias</a>(<a href="#a_6167_6168" id="a_6139_6140" title="Referenced at line 125">a</a>))) :- <a href="../webdsl.stx#declareVar_13281_13291" id="declareVar_6147_6157" title="Defined at ../webdsl.stx line 301">declareVar</a>(<a href="#s_query_6113_6120" id="s_query_6158_6165" title="Defined at line 125">s_query</a>, <a href="#a_6139_6140" id="a_6167_6168" title="Defined at line 125">a</a>, <a href="#t_6122_6123" id="t_6170_6171" title="Defined at line 125">t</a>).

  <a href="#typeOfHqlFromPath_4575_4592" id="typeOfHqlFromPath_6177_6194" title="Referenced at line 89, 95, 128, 132">typeOfHqlFromPath</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/HQL-sig.stx#HQLPath_793_800" id="HQLPath_6213_6220" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 41">HQLPath</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6224_6228" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlFromPath_6177_6194" id="typeOfHqlFromPath_6231_6248" title="Defined at line 127">typeOfHqlFromPath</a>(<a href="#s_6294_6295" id="s_6249_6250" title="Referenced at line 129">s</a>, _, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#Path_4620_4624" id="Path_6255_6259" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 127">Path</a>([<a href="#x_6297_6298" id="x_6261_6262" title="Referenced at line 129, 129, 129, 130, 130">x</a>])) = <a href="#t_6277_6278" id="t_6268_6269" title="Referenced at line 129, 130">t</a> :-
    <a href="#t_6268_6269" id="t_6277_6278" title="Defined at line 128">t</a> == <a href="../webdsl-types.stx#definedType_7911_7922" id="definedType_6282_6293" title="Defined at ../webdsl-types.stx line 218">definedType</a>(<a href="#s_6249_6250" id="s_6294_6295" title="Defined at line 128">s</a>, <a href="#x_6261_6262" id="x_6297_6298" title="Defined at line 128">x</a>)| <span class="keyword">error</span> $[Cannot resolve [<a href="#x_6261_6262" id="x_6325_6326" title="Defined at line 128">x</a>]] @<a href="#x_6261_6262" id="x_6330_6331" title="Defined at line 128">x</a>,
    <a href="#t_6268_6269" id="t_6337_6338" title="Defined at line 128">t</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_6342_6348" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[[<a href="#x_6261_6262" id="x_6366_6367" title="Defined at line 128">x</a>] is not an entity] @<a href="#x_6261_6262" id="x_6388_6389" title="Defined at line 128">x</a>.

  <a href="#typeOfHqlFromPath_6177_6194" id="typeOfHqlFromPath_6394_6411" title="Defined at line 127">typeOfHqlFromPath</a>(<a href="#s_6576_6577" id="s_6412_6413" title="Referenced at line 134">s</a>, <a href="#s_query_6477_6484" id="s_query_6415_6422" title="Referenced at line 133">s_query</a>, <a href="../../../src-gen/statix/signatures/HQL-sig.stx#Path_4620_4624" id="Path_6424_6428" title="Defined at ../../../src-gen/statix/signatures/HQL-sig.stx line 127">Path</a>([<a href="#x_6486_6487" id="x_6430_6431" title="Referenced at line 133, 133, 133, 135, 136">x</a> | <a href="#tail_6586_6590" id="tail_6434_6438" title="Referenced at line 134">tail</a>])) = <a href="#t_6549_6550" id="t_6444_6445" title="Referenced at line 134">t</a> :- { <a href="#x'_6498_6500" id="x'_6451_6453" title="Referenced at line 133, 136">x'</a> <a href="#xType_6502_6507" id="xType_6454_6459" title="Referenced at line 133, 134, 135">xType</a> }
    <a href="../webdsl.stx#resolveVar_13466_13476" id="resolveVar_6466_6476" title="Defined at ../webdsl.stx line 306">resolveVar</a>(<a href="#s_query_6415_6422" id="s_query_6477_6484" title="Defined at line 132">s_query</a>, <a href="#x_6430_6431" id="x_6486_6487" title="Defined at line 132">x</a>) == [(_, (<a href="#x'_6451_6453" id="x'_6498_6500" title="Defined at line 132">x'</a>, <a href="#xType_6454_6459" id="xType_6502_6507" title="Defined at line 132">xType</a>))] | <span class="keyword">error</span> $[Cannot resolve [<a href="#x_6430_6431" id="x_6537_6538" title="Defined at line 132">x</a>]] @<a href="#x_6430_6431" id="x_6542_6543" title="Defined at line 132">x</a>,
    <a href="#t_6444_6445" id="t_6549_6550" title="Defined at line 132">t</a> == <a href="#typeOfHqlFromPathTail_6636_6657" id="typeOfHqlFromPathTail_6554_6575" title="Defined at line 138">typeOfHqlFromPathTail</a>(<a href="#s_6412_6413" id="s_6576_6577" title="Defined at line 132">s</a>, <a href="#xType_6454_6459" id="xType_6579_6584" title="Defined at line 132">xType</a>, <a href="#tail_6434_6438" id="tail_6586_6590" title="Defined at line 132">tail</a>),
    @<a href="#x_6430_6431" id="x_6598_6599" title="Defined at line 132">x</a>.<span class="keyword">type</span> := <a href="#xType_6454_6459" id="xType_6608_6613" title="Defined at line 132">xType</a>,
    @<a href="#x_6430_6431" id="x_6620_6621" title="Defined at line 132">x</a>.<span class="keyword">ref</span> := <a href="#x'_6451_6453" id="x'_6629_6631" title="Defined at line 132">x'</a>.

  <a href="#typeOfHqlFromPathTail_6554_6575" id="typeOfHqlFromPathTail_6636_6657" title="Referenced at line 134, 139, 143, 146">typeOfHqlFromPathTail</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6668_6672" title="Defined at ../webdsl.stx line 29">TYPE</a> * <span class="keyword">list</span>(<span class="keyword">string</span>) -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_6691_6695" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfHqlFromPathTail_6636_6657" id="typeOfHqlFromPathTail_6698_6719" title="Defined at line 138">typeOfHqlFromPathTail</a>(<a href="#s_6798_6799" id="s_6720_6721" title="Referenced at line 140">s</a>, <a href="#entityType_6801_6811" id="entityType_6723_6733" title="Referenced at line 140">entityType</a>, [<a href="#x_6813_6814" id="x_6736_6737" title="Referenced at line 140, 141, 141">x</a>]) = <a href="#t_6751_6752" id="t_6742_6743" title="Referenced at line 140, 141">t</a> :-
    <a href="#t_6742_6743" id="t_6751_6752" title="Defined at line 139">t</a> == <a href="../webdsl-types.stx#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_6756_6782" title="Defined at ../webdsl-types.stx line 273">stripOptionalSetOrListType</a>(<a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_6783_6797" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_6720_6721" id="s_6798_6799" title="Defined at line 139">s</a>, <a href="#entityType_6723_6733" id="entityType_6801_6811" title="Defined at line 139">entityType</a>, <a href="#x_6736_6737" id="x_6813_6814" title="Defined at line 139">x</a>)),
    <a href="#t_6742_6743" id="t_6822_6823" title="Defined at line 139">t</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_6827_6833" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[Property [<a href="#x_6736_6737" id="x_6860_6861" title="Defined at line 139">x</a>] is not an entity] @<a href="#x_6736_6737" id="x_6882_6883" title="Defined at line 139">x</a>.

  <a href="#typeOfHqlFromPathTail_6636_6657" id="typeOfHqlFromPathTail_6888_6909" title="Defined at line 138">typeOfHqlFromPathTail</a>(<a href="#s_7009_7010" id="s_6910_6911" title="Referenced at line 144, 146">s</a>, <a href="#entityType_7012_7022" id="entityType_6913_6923" title="Referenced at line 144">entityType</a>, [<a href="#x_7024_7025" id="x_6926_6927" title="Referenced at line 144, 145, 145">x</a> | <a href="#tail_7141_7145" id="tail_6930_6934" title="Referenced at line 146">tail</a>]) = <a href="#t_7104_7105" id="t_6939_6940" title="Referenced at line 146">t</a> :- { <a href="#xType_6958_6963" id="xType_6946_6951" title="Referenced at line 144, 145, 146">xType</a> }
    <a href="#xType_6946_6951" id="xType_6958_6963" title="Defined at line 143">xType</a> == <a href="../webdsl-types.stx#stripOptionalSetOrListType_10159_10185" id="stripOptionalSetOrListType_6967_6993" title="Defined at ../webdsl-types.stx line 273">stripOptionalSetOrListType</a>(<a href="../webdsl-actions.stx#typeOfProperty_10792_10806" id="typeOfProperty_6994_7008" title="Defined at ../webdsl-actions.stx line 260">typeOfProperty</a>(<a href="#s_6910_6911" id="s_7009_7010" title="Defined at line 143">s</a>, <a href="#entityType_6913_6923" id="entityType_7012_7022" title="Defined at line 143">entityType</a>, <a href="#x_6926_6927" id="x_7024_7025" title="Defined at line 143">x</a>)),
    <a href="#xType_6946_6951" id="xType_7033_7038" title="Defined at line 143">xType</a> == <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_7042_7048" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(_, _) | <span class="keyword">error</span> $[Property [<a href="#x_6926_6927" id="x_7075_7076" title="Defined at line 143">x</a>] is not an entity] @<a href="#x_6926_6927" id="x_7097_7098" title="Defined at line 143">x</a>,
    <a href="#t_6939_6940" id="t_7104_7105" title="Defined at line 143">t</a> == <a href="#typeOfHqlFromPathTail_6636_6657" id="typeOfHqlFromPathTail_7109_7130" title="Defined at line 138">typeOfHqlFromPathTail</a>(<a href="#s_6910_6911" id="s_7131_7132" title="Defined at line 143">s</a>, <a href="#xType_6946_6951" id="xType_7134_7139" title="Defined at line 143">xType</a>, <a href="#tail_6930_6934" id="tail_7141_7145" title="Defined at line 143">tail</a>).

</code></pre></td></tr></tbody></table></div>