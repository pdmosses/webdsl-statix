---
title: webdsl-search.stx
hide:
  - toc
---

# `webdsl-search.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-search.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-search.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-search.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-search_518_548" id="static-semantics/webdsl-search_7_37" title="Referenced at ../webdsl.stx line 21">static-semantics/webdsl-search</a>

<span class="keyword">imports</span>
  <a href="../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_49_81" title="Defined at ../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_85_108" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>
  <a href="../webdsl-types.stx#static-semantics/webdsl-types_7_36" id="static-semantics/webdsl-types_111_140" title="Defined at ../webdsl-types.stx line 1">static-semantics/webdsl-types</a>

<span class="keyword">signature</span>

  <span class="keyword">relations</span>
    <a href="#searcher_2798_2806" id="searcher_169_177" title="Referenced at line 76, 82, 87, 105">searcher</a> : <span class="keyword">string</span> * <span class="keyword">string</span>

<span class="keyword">rules</span> <span class="layout">// definition</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_220_225" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#FullTextAnalyzer_3539_3555" id="FullTextAnalyzer_229_245" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 137">FullTextAnalyzer</a>(_, _, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_328_333" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchMapping_5109_5122" id="SearchMapping_337_350" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 167">SearchMapping</a>(_, _)) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[This definition is not yet implemented].

<span class="keyword">rules</span> <span class="layout">// search retrieval expressions</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_470_479" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#RetrievalExp_9503_9515" id="RetrievalExp_483_495" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 254">RetrievalExp</a>(<span id="exp_496_499" title="Not referenced locally, nor via imports">exp</span>)) = <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_504_522" title="Defined at line 23">typeOfRetrievalExp</a>(<span id="s_523_524" title="Not referenced locally, nor via imports">s</span>, exp).

  <a href="#typeOfRetrievalExp_504_522" id="typeOfRetrievalExp_535_553" title="Referenced at line 21, 24, 27, 30, 35, 38, 41, 44">typeOfRetrievalExp</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#RetrievalExp_1123_1135" id="RetrievalExp_564_576" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 63">RetrievalExp</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_580_584" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_587_605" title="Defined at line 23">typeOfRetrievalExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#Highlight_9030_9039" id="Highlight_609_618" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 245">Highlight</a>(_, _, _, <a href="#searcherExp_694_705" id="searcherExp_628_639" title="Referenced at line 25">searcherExp</a>)) = <a href="../types/built-ins.stx#string_1822_1828" id="string_644_650" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_678_679" id="s_651_652" title="Referenced at line 25, 25">s</a>) :-
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_661_677" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_651_652" id="s_678_679" title="Defined at line 24">s</a>, <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_681_690" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_651_652" id="s_691_692" title="Defined at line 24">s</a>, <a href="#searcherExp_628_639" id="searcherExp_694_705" title="Defined at line 24">searcherExp</a>)).

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_712_730" title="Defined at line 23">typeOfRetrievalExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#HighlightTags_9098_9111" id="HighlightTags_734_747" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 246">HighlightTags</a>(_, _, _, <a href="#searcherExp_829_840" id="searcherExp_757_768" title="Referenced at line 28">searcherExp</a>, _, _)) = <a href="../types/built-ins.stx#string_1822_1828" id="string_779_785" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_813_814" id="s_786_787" title="Referenced at line 28, 28">s</a>) :-
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_796_812" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_786_787" id="s_813_814" title="Defined at line 27">s</a>, <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_816_825" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_786_787" id="s_826_827" title="Defined at line 27">s</a>, <a href="#searcherExp_757_768" id="searcherExp_829_840" title="Defined at line 27">searcherExp</a>)).

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_847_865" title="Defined at line 23">typeOfRetrievalExp</a>(<a href="#s_949_950" id="s_866_867" title="Referenced at line 31, 32, 33">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchResults_9182_9195" id="SearchResults_869_882" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 247">SearchResults</a>(<a href="#exp_952_955" id="exp_883_886" title="Referenced at line 31">exp</a>)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_891_895" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="#t_1070_1071" id="t_896_897" title="Referenced at line 33">t</a>) :- { <a href="#searcherType_923_935" id="searcherType_904_916" title="Referenced at line 31, 32, 32, 33, 33">searcherType</a> }
    <a href="#searcherType_904_916" id="searcherType_923_935" title="Defined at line 30">searcherType</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_939_948" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_866_867" id="s_949_950" title="Defined at line 30">s</a>, <a href="#exp_883_886" id="exp_952_955" title="Defined at line 30">exp</a>),
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_962_978" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_866_867" id="s_979_980" title="Defined at line 30">s</a>, <a href="#searcherType_904_916" id="searcherType_982_994" title="Defined at line 30">searcherType</a>) | <span class="keyword">error</span> $[Expression must be an entity searcher, got [<a href="#searcherType_904_916" id="searcherType_1050_1062" title="Defined at line 30">searcherType</a>]],
    <a href="#t_896_897" id="t_1070_1071" title="Defined at line 30">t</a> == <a href="#entityOfSearcher_3608_3624" id="entityOfSearcher_1075_1091" title="Defined at line 95">entityOfSearcher</a>(<a href="#s_866_867" id="s_1092_1093" title="Defined at line 30">s</a>, <a href="#searcherType_904_916" id="searcherType_1095_1107" title="Defined at line 30">searcherType</a>) | <span class="keyword">error</span> $[Cannot resolve entity of searcher with type [<a href="#searcherType_904_916" id="searcherType_1164_1176" title="Defined at line 30">searcherType</a>]].

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_1183_1201" title="Defined at line 23">typeOfRetrievalExp</a>(<a href="#s_1299_1300" id="s_1202_1203" title="Referenced at line 36, 36">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#FacetResults_9222_9234" id="FacetResults_1205_1217" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 248">FacetResults</a>(_, <a href="#searcherExp_1315_1326" id="searcherExp_1221_1232" title="Referenced at line 36">searcherExp</a>)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_1237_1241" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../webdsl-types.stx#definedTypeIfExists_8506_8525" id="definedTypeIfExists_1242_1261" title="Defined at ../webdsl-types.stx line 232">definedTypeIfExists</a>(s, "Facet")) :-
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_1282_1298" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_1202_1203" id="s_1299_1300" title="Defined at line 35">s</a>, <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1302_1311" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1202_1203" id="s_1312_1313" title="Defined at line 35">s</a>, <a href="#searcherExp_1221_1232" id="searcherExp_1315_1326" title="Defined at line 35">searcherExp</a>)).

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_1333_1351" title="Defined at line 23">typeOfRetrievalExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchResultsSize_9275_9292" id="SearchResultsSize_1355_1372" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 249">SearchResultsSize</a>(<a href="#exp_1428_1431" id="exp_1373_1376" title="Referenced at line 39">exp</a>)) = <a href="../types/built-ins.stx#int_1638_1641" id="int_1381_1384" title="Defined at ../types/built-ins.stx line 41">int</a>(<a href="#s_1412_1413" id="s_1385_1386" title="Referenced at line 39, 39">s</a>) :-
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_1395_1411" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_1385_1386" id="s_1412_1413" title="Defined at line 38">s</a>, <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1415_1424" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1385_1386" id="s_1425_1426" title="Defined at line 38">s</a>, <a href="#exp_1373_1376" id="exp_1428_1431" title="Defined at line 38">exp</a>)).

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_1438_1456" title="Defined at line 23">typeOfRetrievalExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearchTimeString_9319_9335" id="SearchTimeString_1460_1476" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 250">SearchTimeString</a>(<a href="#exp_1536_1539" id="exp_1477_1480" title="Referenced at line 42">exp</a>)) = <a href="../types/built-ins.stx#string_1822_1828" id="string_1485_1491" title="Defined at ../types/built-ins.stx line 48">string</a>(<a href="#s_1520_1521" id="s_1492_1493" title="Referenced at line 42, 42">s</a>) :- 
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_1503_1519" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_1492_1493" id="s_1520_1521" title="Defined at line 41">s</a>, <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1523_1532" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_1492_1493" id="s_1533_1534" title="Defined at line 41">s</a>, <a href="#exp_1477_1480" id="exp_1536_1539" title="Defined at line 41">exp</a>)).

  <a href="#typeOfRetrievalExp_535_553" id="typeOfRetrievalExp_1546_1564" title="Defined at line 23">typeOfRetrievalExp</a>(s, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#Suggest_9362_9369" id="Suggest_1568_1575" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 251">Suggest</a>(_, _, _)) = <a href="../webdsl-types.stx#LIST_891_895" id="LIST_1588_1592" title="Defined at ../webdsl-types.stx line 35">LIST</a>(<a href="../types/built-ins.stx#string_1822_1828" id="string_1593_1599" title="Defined at ../types/built-ins.stx line 48">string</a>(<span id="s_1600_1601" title="Not referenced locally, nor via imports">s</span>)).

<span class="keyword">rules</span> <span class="layout">// search initialization expressions</span>

  <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_1652_1661" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<span id="s_1662_1663" title="Not referenced locally, nor via imports">s</span>, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearcherDef_6336_6347" id="SearcherDef_1665_1676" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 187">SearcherDef</a>(<span id="def_1677_1680" title="Not referenced locally, nor via imports">def</span>)) = <a href="#typeOfSearcherDef_1715_1732" id="typeOfSearcherDef_1685_1702" title="Defined at line 50">typeOfSearcherDef</a>(s, def).

  <a href="#typeOfSearcherDef_1685_1702" id="typeOfSearcherDef_1715_1732" title="Referenced at line 48, 51, 56">typeOfSearcherDef</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearcherDef_671_682" id="SearcherDef_1743_1754" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 34">SearcherDef</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_1758_1762" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#typeOfSearcherDef_1715_1732" id="typeOfSearcherDef_1765_1782" title="Defined at line 50">typeOfSearcherDef</a>(<a href="#s_1848_1849" id="s_1783_1784" title="Referenced at line 52, 53, 54">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearcherInit_6373_6385" id="SearcherInit_1786_1798" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 188">SearcherInit</a>(<a href="#e_1851_1852" id="e_1799_1800" title="Referenced at line 52, 52, 52, 53, 53">e</a>, <a href="#parts_2011_2016" id="parts_1802_1807" title="Referenced at line 54">parts</a>)) = <a href="#t_1899_1900" id="t_1812_1813" title="Referenced at line 53">t</a> :- { <a href="#ent_1829_1832" id="ent_1819_1822" title="Referenced at line 52, 53">ent</a> }
    <a href="#ent_1819_1822" id="ent_1829_1832" title="Defined at line 51">ent</a> == <a href="../webdsl-types.stx#definedType_7911_7922" id="definedType_1836_1847" title="Defined at ../webdsl-types.stx line 218">definedType</a>(<a href="#s_1783_1784" id="s_1848_1849" title="Defined at line 51">s</a>, <a href="#e_1799_1800" id="e_1851_1852" title="Defined at line 51">e</a>) | <span class="keyword">error</span> $[Cannot resolve entity [<a href="#e_1799_1800" id="e_1887_1888" title="Defined at line 51">e</a>]] @<a href="#e_1799_1800" id="e_1892_1893" title="Defined at line 51">e</a>,
    <a href="#t_1812_1813" id="t_1899_1900" title="Defined at line 51">t</a> == <a href="#searcherOfEntity_3364_3380" id="searcherOfEntity_1904_1920" title="Defined at line 89">searcherOfEntity</a>(<a href="#s_1783_1784" id="s_1921_1922" title="Defined at line 51">s</a>, <a href="#ent_1819_1822" id="ent_1924_1927" title="Defined at line 51">ent</a>) | <span class="keyword">error</span> $[Cannot resolve entity searcher for type [<a href="#e_1799_1800" id="e_1980_1981" title="Defined at line 51">e</a>]] @<a href="#e_1799_1800" id="e_1985_1986" title="Defined at line 51">e</a>,
    <a href="#searcherPartsOk_2261_2276" id="searcherPartsOk_1992_2007" title="Defined at line 63">searcherPartsOk</a>(<a href="#s_1783_1784" id="s_2008_2009" title="Defined at line 51">s</a>, <a href="#parts_1802_1807" id="parts_2011_2016" title="Defined at line 51">parts</a>).

  <a href="#typeOfSearcherDef_1715_1732" id="typeOfSearcherDef_2022_2039" title="Defined at line 50">typeOfSearcherDef</a>(<a href="#s_2097_2098" id="s_2040_2041" title="Referenced at line 57, 58, 59">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearcherRefMod_6442_6456" id="SearcherRefMod_2043_2057" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 189">SearcherRefMod</a>(<a href="#exp_2100_2103" id="exp_2058_2061" title="Referenced at line 57, 58">exp</a>, <a href="#parts_2225_2230" id="parts_2063_2068" title="Referenced at line 59">parts</a>)) = <a href="#t_2082_2083" id="t_2073_2074" title="Referenced at line 57, 58, 58">t</a> :-
    <a href="#t_2073_2074" id="t_2082_2083" title="Defined at line 56">t</a> == <a href="../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2087_2096" title="Defined at ../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2040_2041" id="s_2097_2098" title="Defined at line 56">s</a>, <a href="#exp_2058_2061" id="exp_2100_2103" title="Defined at line 56">exp</a>),
    <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_2110_2126" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_2040_2041" id="s_2127_2128" title="Defined at line 56">s</a>, <a href="#t_2073_2074" id="t_2130_2131" title="Defined at line 56">t</a>) | <span class="keyword">error</span> $[Expression must be an entity searcher, got type [<a href="#t_2073_2074" id="t_2192_2193" title="Defined at line 56">t</a>]] @<a href="#exp_2058_2061" id="exp_2197_2200" title="Defined at line 56">exp</a>,
    <a href="#searcherPartsOk_2261_2276" id="searcherPartsOk_2206_2221" title="Defined at line 63">searcherPartsOk</a>(<a href="#s_2040_2041" id="s_2222_2223" title="Defined at line 56">s</a>, <a href="#parts_2063_2068" id="parts_2225_2230" title="Defined at line 56">parts</a>).

<span class="keyword">rules</span> <span class="layout">// searcher parts</span>

  <a href="#searcherPartsOk_1992_2007" id="searcherPartsOk_2261_2276" title="Referenced at line 54, 59">searcherPartsOk</a> <span class="keyword">maps</span> <a href="#searcherPartOk_2311_2325" id="searcherPartOk_2282_2296" title="Defined at line 64">searcherPartOk</a>(*, <span class="keyword">list</span>(*))
  <a href="#searcherPartOk_2282_2296" id="searcherPartOk_2311_2325" title="Referenced at line 63, 65">searcherPartOk</a> : <span class="keyword">scope</span> * <a href="../../../src-gen/statix/signatures/WebDSL-Search-sig.stx#SearcherPart_687_699" id="SearcherPart_2336_2348" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Search-sig.stx line 35">SearcherPart</a>
  <a href="#searcherPartOk_2311_2325" id="searcherPartOk_2351_2365" title="Defined at line 64">searcherPartOk</a>(_, <a href="#part_2419_2423" id="part_2369_2373" title="Referenced at line 65">part</a>) :- <span class="keyword">try</span> { <span class="keyword">false</span> } | <span class="keyword">warning</span> $[Searcher part [<a href="#part_2369_2373" id="part_2419_2423" title="Defined at line 65">part</a>] is not yet implemented].

<span class="keyword">rules</span> <span class="layout">// entity name to searcher name mapping</span>

  <a href="#isEntitySearcher_661_677" id="isEntitySearcher_2500_2516" title="Referenced at line 25, 28, 32, 36, 39, 42, 58, 70, 71">isEntitySearcher</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_2527_2531" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_2534_2550" title="Defined at line 69">isEntitySearcher</a>(<span id="s_2551_2552" title="Not referenced locally, nor via imports">s</span>, <span id="t_2554_2555" title="Not referenced locally, nor via imports">t</span>) :- <span class="keyword">false</span>.
  <a href="#isEntitySearcher_2500_2516" id="isEntitySearcher_2569_2585" title="Defined at line 69">isEntitySearcher</a>(<a href="#s_2648_2649" id="s_2586_2587" title="Referenced at line 72">s</a>, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_2589_2600" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<a href="#name_2651_2655" id="name_2601_2605" title="Referenced at line 72">name</a>, _)) :-
    <a href="#resolveSearcherMappingInverse_2942_2971" id="resolveSearcherMappingInverse_2618_2647" title="Defined at line 80">resolveSearcherMappingInverse</a>(<a href="#s_2586_2587" id="s_2648_2649" title="Defined at line 71">s</a>, <a href="#name_2601_2605" id="name_2651_2655" title="Defined at line 71">name</a>) == [_].

  <a href="#resolveSearcherMapping_2746_2768" id="resolveSearcherMapping_2668_2690" title="Referenced at line 75, 92">resolveSearcherMapping</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <span class="keyword">string</span>)))
  <a href="#resolveSearcherMapping_2668_2690" id="resolveSearcherMapping_2746_2768" title="Defined at line 74">resolveSearcherMapping</a>(<a href="#s_2929_2930" id="s_2769_2770" title="Referenced at line 78">s</a>, <a href="#entity_2902_2908" id="entity_2772_2778" title="Referenced at line 77">entity</a>) = <a href="#ps_2935_2937" id="ps_2782_2784" title="Referenced at line 78">ps</a> :-
    <span class="keyword">query</span> <a href="#searcher_169_177" id="searcher_2798_2806" title="Defined at line 12">searcher</a> <span class="keyword">filter</span> <a href="../webdsl.stx#P_1226_1227" id="P_2814_2815" title="Defined at ../webdsl.stx line 45">P</a>* <a href="../webdsl.stx#F_1290_1291" id="F_2817_2818" title="Defined at ../webdsl.stx line 46">F</a>* ((<a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_2822_2828" title="Defined at ../webdsl.stx line 47">EXTEND</a>? <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_2830_2837" title="Defined at ../webdsl.stx line 48">INHERIT</a>*) | (<a href="../webdsl.stx#DEF_1498_1501" id="DEF_2843_2846" title="Defined at ../webdsl.stx line 49">DEF</a>? (<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_2849_2855" title="Defined at ../webdsl.stx line 50">IMPORT</a> | <a href="../webdsl.stx#IMPORTLIB_1661_1670" id="IMPORTLIB_2858_2867" title="Defined at ../webdsl.stx line 51">IMPORTLIB</a>)?))
           <span class="keyword">and</span> { <a href="#e'_2895_2897" id="e'_2889_2891" title="Referenced at line 77">e'</a> :- <a href="#e'_2889_2891" id="e'_2895_2897" title="Defined at line 77">e'</a> == (<a href="#entity_2772_2778" id="entity_2902_2908" title="Defined at line 75">entity</a>, _) }
           <span class="keyword">in</span> <a href="#s_2769_2770" id="s_2929_2930" title="Defined at line 75">s</a> |-&gt; <a href="#ps_2782_2784" id="ps_2935_2937" title="Defined at line 75">ps</a>.

  <a href="#resolveSearcherMappingInverse_2618_2647" id="resolveSearcherMappingInverse_2942_2971" title="Referenced at line 72, 81, 98">resolveSearcherMappingInverse</a> : <span class="keyword">scope</span> * <span class="keyword">string</span> -&gt; <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <span class="keyword">string</span>)))
  <a href="#resolveSearcherMappingInverse_2942_2971" id="resolveSearcherMappingInverse_3027_3056" title="Defined at line 80">resolveSearcherMappingInverse</a>(<a href="#s_3221_3222" id="s_3057_3058" title="Referenced at line 84">s</a>, <a href="#searcher_3195_3203" id="searcher_3060_3068" title="Referenced at line 83">searcher</a>) = <a href="#ps_3227_3229" id="ps_3072_3074" title="Referenced at line 84">ps</a> :-
    <span class="keyword">query</span> <a href="#searcher_169_177" id="searcher_3088_3096" title="Defined at line 12">searcher</a> <span class="keyword">filter</span> <a href="../webdsl.stx#P_1226_1227" id="P_3104_3105" title="Defined at ../webdsl.stx line 45">P</a>* <a href="../webdsl.stx#F_1290_1291" id="F_3107_3108" title="Defined at ../webdsl.stx line 46">F</a>* ((<a href="../webdsl.stx#EXTEND_1385_1391" id="EXTEND_3112_3118" title="Defined at ../webdsl.stx line 47">EXTEND</a>? <a href="../webdsl.stx#INHERIT_1445_1452" id="INHERIT_3120_3127" title="Defined at ../webdsl.stx line 48">INHERIT</a>*) | (<a href="../webdsl.stx#DEF_1498_1501" id="DEF_3133_3136" title="Defined at ../webdsl.stx line 49">DEF</a>? (<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_3139_3145" title="Defined at ../webdsl.stx line 50">IMPORT</a> | <a href="../webdsl.stx#IMPORTLIB_1661_1670" id="IMPORTLIB_3148_3157" title="Defined at ../webdsl.stx line 51">IMPORTLIB</a>)?))
           <span class="keyword">and</span> { <a href="#e'_3185_3187" id="e'_3179_3181" title="Referenced at line 83">e'</a> :- <a href="#e'_3179_3181" id="e'_3185_3187" title="Defined at line 83">e'</a> == (_, <a href="#searcher_3060_3068" id="searcher_3195_3203" title="Defined at line 81">searcher</a>) }
           <span class="keyword">in</span> <a href="#s_3057_3058" id="s_3221_3222" title="Defined at line 81">s</a> |-&gt; <a href="#ps_3072_3074" id="ps_3227_3229" title="Defined at line 81">ps</a>.

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_3234_3239" title="Defined at ../webdsl.stx line 356">defOk</a>(<a href="#s_3358_3359" id="s_3240_3241" title="Referenced at line 87">s</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#GeneratedDefinition_288_307" id="GeneratedDefinition_3243_3262" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 19">GeneratedDefinition</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx#Generated_243_252" id="Generated_3263_3272" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Generated-sig.stx line 18">Generated</a>(["entitySearcherMapping", <a href="#entity_3337_3343" id="entity_3299_3305" title="Referenced at line 87">entity</a>, <a href="#searcher_3345_3353" id="searcher_3307_3315" title="Referenced at line 87">searcher</a>]))) :-
    !<a href="#searcher_169_177" id="searcher_3328_3336" title="Defined at line 12">searcher</a>[<a href="#entity_3299_3305" id="entity_3337_3343" title="Defined at line 86">entity</a>, <a href="#searcher_3307_3315" id="searcher_3345_3353" title="Defined at line 86">searcher</a>] <span class="keyword">in</span> <a href="#s_3240_3241" id="s_3358_3359" title="Defined at line 86">s</a>.

  <a href="#searcherOfEntity_1904_1920" id="searcherOfEntity_3364_3380" title="Referenced at line 53, 90, 91">searcherOfEntity</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3391_3395" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3399_3403" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#searcherOfEntity_3364_3380" id="searcherOfEntity_3406_3422" title="Defined at line 89">searcherOfEntity</a>(_, _) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3431_3438" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span>.
  <a href="#searcherOfEntity_3364_3380" id="searcherOfEntity_3453_3469" title="Defined at line 89">searcherOfEntity</a>(<a href="#s_3534_3535" id="s_3470_3471" title="Referenced at line 92, 93">s</a>, <a href="../webdsl-types.stx#ENTITY_444_450" id="ENTITY_3473_3479" title="Defined at ../webdsl-types.stx line 20">ENTITY</a>(<a href="#e_3537_3538" id="e_3480_3481" title="Referenced at line 92">e</a>, _)) = <a href="#t_3569_3570" id="t_3489_3490" title="Referenced at line 93">t</a> :- { <a href="#searcher_3552_3560" id="searcher_3496_3504" title="Referenced at line 92, 93">searcher</a> }
    <a href="#resolveSearcherMapping_2668_2690" id="resolveSearcherMapping_3511_3533" title="Defined at line 74">resolveSearcherMapping</a>(<a href="#s_3470_3471" id="s_3534_3535" title="Defined at line 91">s</a>, <a href="#e_3480_3481" id="e_3537_3538" title="Defined at line 91">e</a>) == [(_, (_, <a href="#searcher_3496_3504" id="searcher_3552_3560" title="Defined at line 91">searcher</a>))],
    <a href="#t_3489_3490" id="t_3569_3570" title="Defined at line 91">t</a> == <a href="../webdsl-types.stx#definedTypeNoRef_8308_8324" id="definedTypeNoRef_3574_3590" title="Defined at ../webdsl-types.stx line 228">definedTypeNoRef</a>(<a href="#s_3470_3471" id="s_3591_3592" title="Defined at line 91">s</a>, <a href="#searcher_3496_3504" id="searcher_3594_3602" title="Defined at line 91">searcher</a>).

  <a href="#entityOfSearcher_1075_1091" id="entityOfSearcher_3608_3624" title="Referenced at line 33, 96, 97">entityOfSearcher</a> : <span class="keyword">scope</span> * <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3635_3639" title="Defined at ../webdsl.stx line 29">TYPE</a> -&gt; <a href="../webdsl.stx#TYPE_669_673" id="TYPE_3643_3647" title="Defined at ../webdsl.stx line 29">TYPE</a>
  <a href="#entityOfSearcher_3608_3624" id="entityOfSearcher_3650_3666" title="Defined at line 95">entityOfSearcher</a>(_, _) = <a href="../webdsl-types.stx#UNTYPED_1251_1258" id="UNTYPED_3675_3682" title="Defined at ../webdsl-types.stx line 49">UNTYPED</a>() :- <span class="keyword">false</span>.
  <a href="#entityOfSearcher_3608_3624" id="entityOfSearcher_3697_3713" title="Defined at line 95">entityOfSearcher</a>(<a href="#s_3795_3796" id="s_3714_3715" title="Referenced at line 98, 99">s</a>, <a href="../webdsl-types.stx#NATIVECLASS_529_540" id="NATIVECLASS_3717_3728" title="Defined at ../webdsl-types.stx line 23">NATIVECLASS</a>(<a href="#searcher_3798_3806" id="searcher_3729_3737" title="Referenced at line 98">searcher</a>, _)) = <a href="#t_3835_3836" id="t_3745_3746" title="Referenced at line 99">t</a> :- { <a href="#entity_3817_3823" id="entity_3752_3758" title="Referenced at line 98, 99">entity</a> }
    <a href="#resolveSearcherMappingInverse_2942_2971" id="resolveSearcherMappingInverse_3765_3794" title="Defined at line 80">resolveSearcherMappingInverse</a>(<a href="#s_3714_3715" id="s_3795_3796" title="Defined at line 97">s</a>, <a href="#searcher_3729_3737" id="searcher_3798_3806" title="Defined at line 97">searcher</a>) == [(_, (<a href="#entity_3752_3758" id="entity_3817_3823" title="Defined at line 97">entity</a>, _))],
    <a href="#t_3745_3746" id="t_3835_3836" title="Defined at line 97">t</a> == <a href="../webdsl-types.stx#definedTypeNoRef_8308_8324" id="definedTypeNoRef_3840_3856" title="Defined at ../webdsl-types.stx line 228">definedTypeNoRef</a>(<a href="#s_3714_3715" id="s_3857_3858" title="Defined at line 97">s</a>, <a href="#entity_3752_3758" id="entity_3860_3866" title="Defined at line 97">entity</a>).

<span class="keyword">rules</span> <span class="layout">// built in</span>

  <a href="#declareSearchBuiltIns_3923_3944" id="declareSearchBuiltIns_3891_3912" title="Referenced at line 104; ../webdsl.stx line 380">declareSearchBuiltIns</a> : <span class="keyword">scope</span>
  <a href="#declareSearchBuiltIns_3891_3912" id="declareSearchBuiltIns_3923_3944" title="Defined at line 103">declareSearchBuiltIns</a>(<a href="#s_3990_3991" id="s_3945_3946" title="Referenced at line 105">s</a>) :-
    !<a href="#searcher_169_177" id="searcher_3956_3964" title="Defined at line 12">searcher</a>["Entity", "Searcher"] <span class="keyword">in</span> <a href="#s_3945_3946" id="s_3990_3991" title="Defined at line 104">s</a>. <span class="layout">// abstract searcher results in entity type</span>

</code></pre></td></tr></tbody></table></div>