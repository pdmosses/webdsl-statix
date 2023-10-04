---
title: webdsl-modules.stx
hide:
  - toc
---

# `webdsl-modules.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-modules.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/webdsl-modules.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/webdsl-modules.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl.stx#static-semantics/webdsl-modules_419_450" id="static-semantics/webdsl-modules_7_38" title="Referenced at ../webdsl.stx line 18">static-semantics/webdsl-modules</a>

<span class="keyword">imports</span>
  <a href="../webdsl-ac.stx#static-semantics/webdsl-ac_7_33" id="static-semantics/webdsl-ac_50_76" title="Defined at ../webdsl-ac.stx line 1">static-semantics/webdsl-ac</a>
  <a href="../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_79_105" title="Defined at ../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>
  <a href="../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_108_131" title="Defined at ../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">signature</span>

  <span class="keyword">relations</span>

    <a href="#library_1129_1136" id="library_161_168" title="Referenced at line 37, 111">library</a> : <span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>

<span class="keyword">rules</span> <span class="layout">// unit rules</span>

  <a href="../webdsl.stx#unitOk_15171_15177" id="unitOk_216_222" title="Defined at ../webdsl.stx line 347">unitOk</a>(<a href="#s_global_305_313" id="s_global_223_231" title="Referenced at line 17, 17, 18, 19, 20, 21">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Application_1765_1776" id="Application_233_244" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 63">Application</a>(<a href="#app_407_410" id="app_245_248" title="Referenced at line 19, 23">app</a>, <a href="#sections_456_464" id="sections_250_258" title="Referenced at line 20, 22">sections</a>)) :- { <a href="#s_mod_282_287" id="s_mod_266_271" title="Referenced at line 17, 17, 17, 18, 19, 20, 21, 22, 23">s_mod</a> }
    <span class="keyword">new</span> <a href="#s_mod_266_271" id="s_mod_282_287" title="Defined at line 16">s_mod</a>, <a href="#s_mod_266_271" id="s_mod_289_294" title="Defined at line 16">s_mod</a> -<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_296_302" title="Defined at ../webdsl.stx line 50">IMPORT</a>-&gt; <a href="#s_global_223_231" id="s_global_305_313" title="Defined at line 16">s_global</a>, <a href="#s_global_223_231" id="s_global_315_323" title="Defined at line 16">s_global</a> -<a href="../webdsl.stx#GLOBAL_1762_1768" id="GLOBAL_325_331" title="Defined at ../webdsl.stx line 52">GLOBAL</a>-&gt; <a href="#s_mod_266_271" id="s_mod_334_339" title="Defined at line 16">s_mod</a>,
    <a href="../webdsl-ac.stx#declareACBuiltIns_382_399" id="declareACBuiltIns_345_362" title="Defined at ../webdsl-ac.stx line 20">declareACBuiltIns</a>(<a href="#s_global_223_231" id="s_global_363_371" title="Defined at line 16">s_global</a>, <a href="#s_mod_266_271" id="s_mod_373_378" title="Defined at line 16">s_mod</a>),
    <a href="../webdsl.stx#declareMod_2170_2180" id="declareMod_385_395" title="Defined at ../webdsl.stx line 73">declareMod</a>(<a href="#s_global_223_231" id="s_global_396_404" title="Defined at line 16">s_global</a>, [<a href="#app_245_248" id="app_407_410" title="Defined at line 16">app</a>], <a href="#s_mod_266_271" id="s_mod_413_418" title="Defined at line 16">s_mod</a>),
    <a href="#importModules_1730_1743" id="importModules_425_438" title="Defined at line 54">importModules</a>(<a href="#s_global_223_231" id="s_global_439_447" title="Defined at line 16">s_global</a>, <a href="#s_mod_266_271" id="s_mod_449_454" title="Defined at line 16">s_mod</a>, <a href="#sections_250_258" id="sections_456_464" title="Defined at line 16">sections</a>),
    <a href="#importLibrary_3827_3840" id="importLibrary_471_484" title="Defined at line 97">importLibrary</a>(<a href="#s_global_223_231" id="s_global_485_493" title="Defined at line 16">s_global</a>, <a href="#s_mod_266_271" id="s_mod_495_500" title="Defined at line 16">s_mod</a>, ["_BUILTIN"]),
    <a href="../webdsl.stx#sectionsOk_15222_15232" id="sectionsOk_521_531" title="Defined at ../webdsl.stx line 350">sectionsOk</a>(<a href="#s_mod_266_271" id="s_mod_532_537" title="Defined at line 16">s_mod</a>, <a href="#sections_250_258" id="sections_539_547" title="Defined at line 16">sections</a>),
    <a href="../webdsl-ui.stx#rootPageDefined_14240_14255" id="rootPageDefined_554_569" title="Defined at ../webdsl-ui.stx line 310">rootPageDefined</a>(<a href="#s_mod_266_271" id="s_mod_570_575" title="Defined at line 16">s_mod</a>, <a href="#app_245_248" id="app_577_580" title="Defined at line 16">app</a>).

  <a href="../webdsl.stx#unitOk_15171_15177" id="unitOk_586_592" title="Defined at ../webdsl.stx line 347">unitOk</a>(<a href="#s_global_682_690" id="s_global_593_601" title="Referenced at line 26, 26, 27, 28, 29">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Module_1882_1888" id="Module_603_609" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 65">Module</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ModuleName_1306_1316" id="ModuleName_610_620" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 62">ModuleName</a>(<a href="#mps_764_767" id="mps_621_624" title="Referenced at line 27">mps</a>), <a href="#sections_813_821" id="sections_627_635" title="Referenced at line 28, 30">sections</a>)) :- { <a href="#s_mod_659_664" id="s_mod_643_648" title="Referenced at line 26, 26, 26, 27, 28, 29, 30">s_mod</a> }
    <span class="keyword">new</span> <a href="#s_mod_643_648" id="s_mod_659_664" title="Defined at line 25">s_mod</a>, <a href="#s_mod_643_648" id="s_mod_666_671" title="Defined at line 25">s_mod</a> -<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_673_679" title="Defined at ../webdsl.stx line 50">IMPORT</a>-&gt; <a href="#s_global_593_601" id="s_global_682_690" title="Defined at line 25">s_global</a>, <a href="#s_global_593_601" id="s_global_692_700" title="Defined at line 25">s_global</a> -<a href="../webdsl.stx#GLOBAL_1762_1768" id="GLOBAL_702_708" title="Defined at ../webdsl.stx line 52">GLOBAL</a>-&gt; <a href="#s_mod_643_648" id="s_mod_711_716" title="Defined at line 25">s_mod</a>,
    <a href="../webdsl.stx#declareMod_2170_2180" id="declareMod_722_732" title="Defined at ../webdsl.stx line 73">declareMod</a>(<a href="#s_global_593_601" id="s_global_733_741" title="Defined at line 25">s_global</a>, <a href="#modulePartsToStrings_4758_4778" id="modulePartsToStrings_743_763" title="Defined at line 119">modulePartsToStrings</a>(<a href="#mps_621_624" id="mps_764_767" title="Defined at line 25">mps</a>), <a href="#s_mod_643_648" id="s_mod_770_775" title="Defined at line 25">s_mod</a>),
    <a href="#importModules_1730_1743" id="importModules_782_795" title="Defined at line 54">importModules</a>(<a href="#s_global_593_601" id="s_global_796_804" title="Defined at line 25">s_global</a>, <a href="#s_mod_643_648" id="s_mod_806_811" title="Defined at line 25">s_mod</a>, <a href="#sections_627_635" id="sections_813_821" title="Defined at line 25">sections</a>),
    <a href="#importLibrary_3827_3840" id="importLibrary_828_841" title="Defined at line 97">importLibrary</a>(<a href="#s_global_593_601" id="s_global_842_850" title="Defined at line 25">s_global</a>, <a href="#s_mod_643_648" id="s_mod_852_857" title="Defined at line 25">s_mod</a>, ["_BUILTIN"]),
    <a href="../webdsl.stx#sectionsOk_15222_15232" id="sectionsOk_878_888" title="Defined at ../webdsl.stx line 350">sectionsOk</a>(<a href="#s_mod_643_648" id="s_mod_889_894" title="Defined at line 25">s_mod</a>, <a href="#sections_627_635" id="sections_896_904" title="Defined at line 25">sections</a>).

  <a href="../webdsl.stx#unitOk_15171_15177" id="unitOk_910_916" title="Defined at ../webdsl.stx line 347">unitOk</a>(<a href="#s_global_1017_1025" id="s_global_917_925" title="Referenced at line 34, 34">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#BuiltIn_1989_1996" id="BuiltIn_927_934" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 67">BuiltIn</a>(<a href="#sections_1027_1035" id="sections_935_943" title="Referenced at line 34">sections</a>)) :-
    <span class="layout">// only analyze built-in if no library is present</span>
    <a href="#builtInOk_1223_1232" id="builtInOk_1007_1016" title="Defined at line 40">builtInOk</a>(<a href="#s_global_917_925" id="s_global_1017_1025" title="Defined at line 32">s_global</a>, <a href="#sections_935_943" id="sections_1027_1035" title="Defined at line 32">sections</a>, <a href="../webdsl.stx#notB_18027_18031" id="notB_1037_1041" title="Defined at ../webdsl.stx line 432">notB</a>(<a href="#usesBuiltInLibraryB_4384_4403" id="usesBuiltInLibraryB_1042_1061" title="Defined at line 109">usesBuiltInLibraryB</a>(<a href="#s_global_917_925" id="s_global_1062_1070" title="Defined at line 32">s_global</a>))).

  <a href="../webdsl.stx#unitOk_15171_15177" id="unitOk_1078_1084" title="Defined at ../webdsl.stx line 347">unitOk</a>(<a href="#s_global_1167_1175" id="s_global_1085_1093" title="Referenced at line 37, 38">s_global</a>, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#BuiltInLibrary_2091_2105" id="BuiltInLibrary_1095_1109" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 69">BuiltInLibrary</a>(<a href="#sections_1201_1209" id="sections_1110_1118" title="Referenced at line 38">sections</a>)) :-
    !<a href="#library_161_168" id="library_1129_1136" title="Defined at line 12">library</a>[["_BUILTIN_LIBRARY"], <span class="keyword">new</span>] <span class="keyword">in</span> <a href="#s_global_1085_1093" id="s_global_1167_1175" title="Defined at line 36">s_global</a>,
    <a href="#builtInOk_1223_1232" id="builtInOk_1181_1190" title="Defined at line 40">builtInOk</a>(<a href="#s_global_1085_1093" id="s_global_1191_1199" title="Defined at line 36">s_global</a>, <a href="#sections_1110_1118" id="sections_1201_1209" title="Defined at line 36">sections</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1211_1215" title="Defined at ../webdsl.stx line 34">TRUE</a>()).

  <a href="#builtInOk_1007_1016" id="builtInOk_1223_1232" title="Referenced at line 34, 38, 41, 42">builtInOk</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Section_298_305" id="Section_1248_1255" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 19">Section</a>) * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_1259_1263" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#builtInOk_1223_1232" id="builtInOk_1266_1275" title="Defined at line 40">builtInOk</a>(<span id="s_global_1276_1284" title="Not referenced locally, nor via imports">s_global</span>, <span id="sections_1286_1294" title="Not referenced locally, nor via imports">sections</span>, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_1296_1301" title="Defined at ../webdsl.stx line 35">FALSE</a>()).
  <a href="#builtInOk_1223_1232" id="builtInOk_1308_1317" title="Defined at line 40">builtInOk</a>(<a href="#s_global_1390_1398" id="s_global_1318_1326" title="Referenced at line 43, 43, 45, 46">s_global</a>, <a href="#sections_1536_1544" id="sections_1328_1336" title="Referenced at line 46, 47">sections</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_1338_1342" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- { <a href="#s_mod_1367_1372" id="s_mod_1351_1356" title="Referenced at line 43, 43, 43, 44, 45, 46, 47">s_mod</a> }
    <span class="keyword">new</span> <a href="#s_mod_1351_1356" id="s_mod_1367_1372" title="Defined at line 42">s_mod</a>, <a href="#s_mod_1351_1356" id="s_mod_1374_1379" title="Defined at line 42">s_mod</a> -<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_1381_1387" title="Defined at ../webdsl.stx line 50">IMPORT</a>-&gt; <a href="#s_global_1318_1326" id="s_global_1390_1398" title="Defined at line 42">s_global</a>, <a href="#s_global_1318_1326" id="s_global_1400_1408" title="Defined at line 42">s_global</a> -<a href="../webdsl.stx#GLOBAL_1762_1768" id="GLOBAL_1410_1416" title="Defined at ../webdsl.stx line 52">GLOBAL</a>-&gt; <a href="#s_mod_1351_1356" id="s_mod_1419_1424" title="Defined at line 42">s_mod</a>,
    <a href="../webdsl.stx#declareBuiltIns_16201_16216" id="declareBuiltIns_1430_1445" title="Defined at ../webdsl.stx line 375">declareBuiltIns</a>(<a href="#s_mod_1351_1356" id="s_mod_1446_1451" title="Defined at line 42">s_mod</a>),
    <a href="../webdsl.stx#declareMod_2170_2180" id="declareMod_1458_1468" title="Defined at ../webdsl.stx line 73">declareMod</a>(<a href="#s_global_1318_1326" id="s_global_1469_1477" title="Defined at line 42">s_global</a>, ["_BUILTIN"], <a href="#s_mod_1351_1356" id="s_mod_1493_1498" title="Defined at line 42">s_mod</a>),
    <a href="#importModules_1730_1743" id="importModules_1505_1518" title="Defined at line 54">importModules</a>(<a href="#s_global_1318_1326" id="s_global_1519_1527" title="Defined at line 42">s_global</a>, <a href="#s_mod_1351_1356" id="s_mod_1529_1534" title="Defined at line 42">s_mod</a>, <a href="#sections_1328_1336" id="sections_1536_1544" title="Defined at line 42">sections</a>),
    <a href="../webdsl.stx#sectionsOk_15222_15232" id="sectionsOk_1551_1561" title="Defined at ../webdsl.stx line 350">sectionsOk</a>(<a href="#s_mod_1351_1356" id="s_mod_1562_1567" title="Defined at line 42">s_mod</a>, <a href="#sections_1328_1336" id="sections_1569_1577" title="Defined at line 42">sections</a>).

<span class="keyword">rules</span> <span class="layout">// import definition rules</span>

  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_1617_1622" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Imports_2155_2162" id="Imports_1626_1633" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 71">Imports</a>(_)). <span class="layout">// imports are handled in another rule, discard them here</span>
  <a href="../webdsl.stx#defOk_15473_15478" id="defOk_1699_1704" title="Defined at ../webdsl.stx line 356">defOk</a>(_, <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#ImportsBuiltIn_2194_2208" id="ImportsBuiltIn_1708_1722" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 72">ImportsBuiltIn</a>()).

  <a href="#importModules_425_438" id="importModules_1730_1743" title="Referenced at line 20, 28, 46, 55, 56, 57, 59, 61">importModules</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Section_298_305" id="Section_1767_1774" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 19">Section</a>)
  <a href="#importModules_1730_1743" id="importModules_1778_1791" title="Defined at line 54">importModules</a>(_, _, []).
  <a href="#importModules_1730_1743" id="importModules_1805_1818" title="Defined at line 54">importModules</a>(<a href="#s_1860_1861" id="s_1819_1820" title="Referenced at line 57">s</a>, <a href="#s_mod_1863_1868" id="s_mod_1822_1827" title="Referenced at line 57">s_mod</a>, [_ | <a href="#ss_1870_1872" id="ss_1834_1836" title="Referenced at line 57">ss</a>]) :-
    <a href="#importModules_1730_1743" id="importModules_1846_1859" title="Defined at line 54">importModules</a>(<a href="#s_1819_1820" id="s_1860_1861" title="Defined at line 56">s</a>, <a href="#s_mod_1822_1827" id="s_mod_1863_1868" title="Defined at line 56">s_mod</a>, <a href="#ss_1834_1836" id="ss_1870_1872" title="Defined at line 56">ss</a>).

  <a href="#importModules_1730_1743" id="importModules_1878_1891" title="Defined at line 54">importModules</a>(<a href="#s_1957_1958" id="s_1892_1893" title="Referenced at line 60, 61">s</a>, <a href="#s_mod_1960_1965" id="s_mod_1895_1900" title="Referenced at line 60, 61">s_mod</a>, [<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Section_1640_1647" id="Section_1903_1910" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 61">Section</a>(_, <a href="#defs_1967_1971" id="defs_1914_1918" title="Referenced at line 60">defs</a>) | <a href="#ss_2002_2004" id="ss_1922_1924" title="Referenced at line 61">ss</a>]) :-
    <a href="#importModulesInSection_2010_2032" id="importModulesInSection_1934_1956" title="Defined at line 63">importModulesInSection</a>(<a href="#s_1892_1893" id="s_1957_1958" title="Defined at line 59">s</a>, <a href="#s_mod_1895_1900" id="s_mod_1960_1965" title="Defined at line 59">s_mod</a>, <a href="#defs_1914_1918" id="defs_1967_1971" title="Defined at line 59">defs</a>),
    <a href="#importModules_1730_1743" id="importModules_1978_1991" title="Defined at line 54">importModules</a>(<a href="#s_1892_1893" id="s_1992_1993" title="Defined at line 59">s</a>, <a href="#s_mod_1895_1900" id="s_mod_1995_2000" title="Defined at line 59">s_mod</a>, <a href="#ss_1922_1924" id="ss_2002_2004" title="Defined at line 59">ss</a>).

  <a href="#importModulesInSection_1934_1956" id="importModulesInSection_2010_2032" title="Referenced at line 60, 64, 65, 65, 66, 68, 84, 86">importModulesInSection</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Definition_310_320" id="Definition_2056_2066" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 20">Definition</a>)
  <a href="#importModulesInSection_2010_2032" id="importModulesInSection_2070_2092" title="Defined at line 63">importModulesInSection</a>(_, _, []).
  <a href="#importModulesInSection_2010_2032" id="importModulesInSection_2106_2128" title="Defined at line 63">importModulesInSection</a>(<a href="#s_2177_2178" id="s_2129_2130" title="Referenced at line 65">s</a>, <a href="#s_mod_2180_2185" id="s_mod_2132_2137" title="Referenced at line 65">s_mod</a>, [_ | <a href="#defs_2187_2191" id="defs_2144_2148" title="Referenced at line 65">defs</a>]) :- <a href="#importModulesInSection_2010_2032" id="importModulesInSection_2154_2176" title="Defined at line 63">importModulesInSection</a>(<a href="#s_2129_2130" id="s_2177_2178" title="Defined at line 65">s</a>, <a href="#s_mod_2132_2137" id="s_mod_2180_2185" title="Defined at line 65">s_mod</a>, <a href="#defs_2144_2148" id="defs_2187_2191" title="Defined at line 65">defs</a>).
  <a href="#importModulesInSection_2010_2032" id="importModulesInSection_2196_2218" title="Defined at line 63">importModulesInSection</a>(<a href="#s_2316_2317" id="s_2219_2220" title="Referenced at line 67, 68">s</a>, <a href="#s_mod_2319_2324" id="s_mod_2222_2227" title="Referenced at line 67, 68">s_mod</a>, [<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Imports_2155_2162" id="Imports_2230_2237" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 71">Imports</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ImportName_1354_1364" id="ImportName_2238_2248" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 63">ImportName</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ModuleName_1306_1316" id="ModuleName_2249_2259" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 62">ModuleName</a>(<a href="#mps_2347_2350" id="mps_2260_2263" title="Referenced at line 67">mps</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#NoWildcardImport_1265_1281" id="NoWildcardImport_2266_2282" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 61">NoWildcardImport</a>())) | <a href="#defs_2391_2395" id="defs_2289_2293" title="Referenced at line 68">defs</a>]) :-
    <a href="#importModule_2401_2413" id="importModule_2303_2315" title="Defined at line 70">importModule</a>(<a href="#s_2219_2220" id="s_2316_2317" title="Defined at line 66">s</a>, <a href="#s_mod_2222_2227" id="s_mod_2319_2324" title="Defined at line 66">s_mod</a>, <a href="#modulePartsToStrings_4758_4778" id="modulePartsToStrings_2326_2346" title="Defined at line 119">modulePartsToStrings</a>(<a href="#mps_2260_2263" id="mps_2347_2350" title="Defined at line 66">mps</a>)),
    <a href="#importModulesInSection_2010_2032" id="importModulesInSection_2358_2380" title="Defined at line 63">importModulesInSection</a>(<a href="#s_2219_2220" id="s_2381_2382" title="Defined at line 66">s</a>, <a href="#s_mod_2222_2227" id="s_mod_2384_2389" title="Defined at line 66">s_mod</a>, <a href="#defs_2289_2293" id="defs_2391_2395" title="Defined at line 66">defs</a>).

  <a href="#importModule_2303_2315" id="importModule_2401_2413" title="Referenced at line 67, 71">importModule</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<span class="keyword">string</span>)
  <a href="#importModule_2401_2413" id="importModule_2447_2459" title="Defined at line 70">importModule</a>(<a href="#s_2499_2500" id="s_2460_2461" title="Referenced at line 72, 73">s</a>, <a href="#s_mod_2598_2603" id="s_mod_2463_2468" title="Referenced at line 73">s_mod</a>, <a href="#mps_2502_2505" id="mps_2470_2473" title="Referenced at line 72, 72, 73">mps</a>) :- {<a href="#s_y_2519_2522" id="s_y_2479_2482" title="Referenced at line 72, 73">s_y</a>}
    <a href="../webdsl.stx#resolveMod_2340_2350" id="resolveMod_2488_2498" title="Defined at ../webdsl.stx line 78">resolveMod</a>(<a href="#s_2460_2461" id="s_2499_2500" title="Defined at line 71">s</a>, <a href="#mps_2470_2473" id="mps_2502_2505" title="Defined at line 71">mps</a>) == [(_, (_, <a href="#s_y_2479_2482" id="s_y_2519_2522" title="Defined at line 71">s_y</a>))] | <span class="keyword">error</span> $[Cannot resolve module [<a href="#mps_2470_2473" id="mps_2559_2562" title="Defined at line 71">mps</a>]],
    <a href="#importModuleScopeIfDeclared_2770_2797" id="importModuleScopeIfDeclared_2570_2597" title="Defined at line 79">importModuleScopeIfDeclared</a>(<a href="#s_mod_2463_2468" id="s_mod_2598_2603" title="Defined at line 71">s_mod</a>, <a href="#s_y_2479_2482" id="s_y_2605_2608" title="Defined at line 71">s_y</a>, <a href="#modDeclaredB_2648_2660" id="modDeclaredB_2610_2622" title="Defined at line 75">modDeclaredB</a>(<a href="../webdsl.stx#resolveMod_2340_2350" id="resolveMod_2623_2633" title="Defined at ../webdsl.stx line 78">resolveMod</a>(<a href="#s_2460_2461" id="s_2634_2635" title="Defined at line 71">s</a>, <a href="#mps_2470_2473" id="mps_2637_2640" title="Defined at line 71">mps</a>))).

  <a href="#modDeclaredB_2610_2622" id="modDeclaredB_2648_2660" title="Referenced at line 73, 76, 77, 100">modDeclaredB</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>))) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_2704_2708" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#modDeclaredB_2648_2660" id="modDeclaredB_2711_2723" title="Defined at line 75">modDeclaredB</a>([]) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_2730_2735" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#modDeclaredB_2648_2660" id="modDeclaredB_2741_2753" title="Defined at line 75">modDeclaredB</a>(_) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2759_2763" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#importModuleScopeIfDeclared_2570_2597" id="importModuleScopeIfDeclared_2770_2797" title="Referenced at line 73, 80, 81, 82">importModuleScopeIfDeclared</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_2816_2820" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#importModuleScopeIfDeclared_2770_2797" id="importModuleScopeIfDeclared_2823_2850" title="Defined at line 79">importModuleScopeIfDeclared</a>(<a href="#s_mod_2874_2879" id="s_mod_2851_2856" title="Referenced at line 80">s_mod</a>, <a href="#s_y_2890_2893" id="s_y_2858_2861" title="Referenced at line 80">s_y</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2863_2867" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="#s_mod_2851_2856" id="s_mod_2874_2879" title="Defined at line 80">s_mod</a> -<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_2881_2887" title="Defined at ../webdsl.stx line 50">IMPORT</a>-&gt; <a href="#s_y_2858_2861" id="s_y_2890_2893" title="Defined at line 80">s_y</a>.
  <a href="#importModuleScopeIfDeclared_2770_2797" id="importModuleScopeIfDeclared_2897_2924" title="Defined at line 79">importModuleScopeIfDeclared</a>(s_mod, <span id="s_mod_2932_2937" title="Not referenced locally, nor via imports">s_mod</span>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_2939_2943" title="Defined at ../webdsl.stx line 34">TRUE</a>()). <span class="layout">// restrict self import</span>
  <a href="#importModuleScopeIfDeclared_2770_2797" id="importModuleScopeIfDeclared_2974_3001" title="Defined at line 79">importModuleScopeIfDeclared</a>(_, _, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_3008_3013" title="Defined at ../webdsl.stx line 35">FALSE</a>()).

  <a href="#importModulesInSection_2010_2032" id="importModulesInSection_3021_3043" title="Defined at line 63">importModulesInSection</a>(<a href="#s_3176_3177" id="s_3044_3045" title="Referenced at line 85, 86">s</a>, <a href="#s_mod_3150_3155" id="s_mod_3047_3052" title="Referenced at line 85, 86">s_mod</a>, [<a href="#i_3207_3208" id="i_3055_3056" title="Referenced at line 85">i</a>@<a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Imports_2155_2162" id="Imports_3057_3064" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 71">Imports</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ImportName_1354_1364" id="ImportName_3065_3075" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 63">ImportName</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ModuleName_1306_1316" id="ModuleName_3076_3086" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 62">ModuleName</a>(<a href="#mps_3200_3203" id="mps_3087_3090" title="Referenced at line 85">mps</a>), <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#WildcardImport_1226_1240" id="WildcardImport_3093_3107" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 60">WildcardImport</a>())) | <a href="#defs_3248_3252" id="defs_3114_3118" title="Referenced at line 86">defs</a>]) :-
    <a href="#importModulesWildcard_3258_3279" id="importModulesWildcard_3128_3149" title="Defined at line 88">importModulesWildcard</a>(<a href="#s_mod_3047_3052" id="s_mod_3150_3155" title="Defined at line 84">s_mod</a>, <a href="../webdsl.stx#resolveModWildcard_2536_2554" id="resolveModWildcard_3157_3175" title="Defined at ../webdsl.stx line 84">resolveModWildcard</a>(<a href="#s_3044_3045" id="s_3176_3177" title="Defined at line 84">s</a>, <a href="#modulePartsToStrings_4758_4778" id="modulePartsToStrings_3179_3199" title="Defined at line 119">modulePartsToStrings</a>(<a href="#mps_3087_3090" id="mps_3200_3203" title="Defined at line 84">mps</a>)), <a href="#i_3055_3056" id="i_3207_3208" title="Defined at line 84">i</a>),
    <a href="#importModulesInSection_2010_2032" id="importModulesInSection_3215_3237" title="Defined at line 63">importModulesInSection</a>(<a href="#s_3044_3045" id="s_3238_3239" title="Defined at line 84">s</a>, <a href="#s_mod_3047_3052" id="s_mod_3241_3246" title="Defined at line 84">s_mod</a>, <a href="#defs_3114_3118" id="defs_3248_3252" title="Defined at line 84">defs</a>).

  <a href="#importModulesWildcard_3128_3149" id="importModulesWildcard_3258_3279" title="Referenced at line 85, 89, 90">importModulesWildcard</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>))) * <a href="../../../src-gen/statix/signatures/WebDSL-Core-sig.stx#Definition_310_320" id="Definition_3330_3340" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Core-sig.stx line 20">Definition</a>
  <a href="#importModulesWildcard_3258_3279" id="importModulesWildcard_3343_3364" title="Defined at line 88">importModulesWildcard</a>(_, [], <a href="#i_3419_3420" id="i_3372_3373" title="Referenced at line 89">i</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Cannot resolve modules] @<a href="#i_3372_3373" id="i_3419_3420" title="Defined at line 89">i</a>.
  <a href="#importModulesWildcard_3258_3279" id="importModulesWildcard_3424_3445" title="Defined at line 88">importModulesWildcard</a>(<a href="#s_mod_3496_3501" id="s_mod_3446_3451" title="Referenced at line 90">s_mod</a>, <a href="#mods_3503_3507" id="mods_3453_3457" title="Referenced at line 90">mods</a>, _) :- <a href="#importModulesWildcard_internal_3513_3543" id="importModulesWildcard_internal_3465_3495" title="Defined at line 92">importModulesWildcard_internal</a>(<a href="#s_mod_3446_3451" id="s_mod_3496_3501" title="Defined at line 90">s_mod</a>, <a href="#mods_3453_3457" id="mods_3503_3507" title="Defined at line 90">mods</a>).

  <a href="#importModulesWildcard_internal_3465_3495" id="importModulesWildcard_internal_3513_3543" title="Referenced at line 90">importModulesWildcard_internal</a> <span class="keyword">maps</span> <a href="#importModuleWildcard_internal_3593_3622" id="importModuleWildcard_internal_3549_3578" title="Defined at line 93">importModuleWildcard_internal</a>(*, <span class="keyword">list</span>(*))
  <a href="#importModuleWildcard_internal_3549_3578" id="importModuleWildcard_internal_3593_3622" title="Referenced at line 92, 94, 95">importModuleWildcard_internal</a> : <span class="keyword">scope</span> * (<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>))
  <a href="#importModuleWildcard_internal_3593_3622" id="importModuleWildcard_internal_3667_3696" title="Defined at line 93">importModuleWildcard_internal</a>(<a href="#s_mod_3722_3727" id="s_mod_3697_3702" title="Referenced at line 94">s_mod</a>, (_, (_, <a href="#s_y_3738_3741" id="s_y_3712_3715" title="Referenced at line 94">s_y</a>))) :- <a href="#s_mod_3697_3702" id="s_mod_3722_3727" title="Defined at line 94">s_mod</a> -<a href="../webdsl.stx#IMPORT_1595_1601" id="IMPORT_3729_3735" title="Defined at ../webdsl.stx line 50">IMPORT</a>-&gt; <a href="#s_y_3712_3715" id="s_y_3738_3741" title="Defined at line 94">s_y</a>.
  <a href="#importModuleWildcard_internal_3593_3622" id="importModuleWildcard_internal_3745_3774" title="Defined at line 93">importModuleWildcard_internal</a>(s_mod, (_, (_, <span id="s_mod_3790_3795" title="Not referenced locally, nor via imports">s_mod</span>))). <span class="layout">// restrict self import</span>

  <a href="#importLibrary_471_484" id="importLibrary_3827_3840" title="Referenced at line 21, 29, 98">importLibrary</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <span class="keyword">list</span>(<span class="keyword">string</span>)
  <a href="#importLibrary_3827_3840" id="importLibrary_3874_3887" title="Defined at line 97">importLibrary</a>(<a href="#s_global_3938_3946" id="s_global_3888_3896" title="Referenced at line 99, 100">s_global</a>, <a href="#s_mod_4047_4052" id="s_mod_3898_3903" title="Referenced at line 100">s_mod</a>, <a href="#lib_3948_3951" id="lib_3905_3908" title="Referenced at line 99, 99, 100">lib</a>) :- { <a href="#s_lib_3965_3970" id="s_lib_3915_3920" title="Referenced at line 99, 100">s_lib</a> }
    <a href="../webdsl.stx#resolveMod_2340_2350" id="resolveMod_3927_3937" title="Defined at ../webdsl.stx line 78">resolveMod</a>(<a href="#s_global_3888_3896" id="s_global_3938_3946" title="Defined at line 98">s_global</a>, <a href="#lib_3905_3908" id="lib_3948_3951" title="Defined at line 98">lib</a>) == [(_, (_, <a href="#s_lib_3915_3920" id="s_lib_3965_3970" title="Defined at line 98">s_lib</a>))] | <span class="keyword">error</span> $[Cannot resolve module [<a href="#lib_3905_3908" id="lib_4007_4010" title="Defined at line 98">lib</a>]],
    <a href="#importLibraryScopeIfDeclared_4106_4134" id="importLibraryScopeIfDeclared_4018_4046" title="Defined at line 102">importLibraryScopeIfDeclared</a>(<a href="#s_mod_3898_3903" id="s_mod_4047_4052" title="Defined at line 98">s_mod</a>, <a href="#s_lib_3915_3920" id="s_lib_4054_4059" title="Defined at line 98">s_lib</a>, <a href="#modDeclaredB_2648_2660" id="modDeclaredB_4061_4073" title="Defined at line 75">modDeclaredB</a>(<a href="../webdsl.stx#resolveMod_2340_2350" id="resolveMod_4074_4084" title="Defined at ../webdsl.stx line 78">resolveMod</a>(<a href="#s_global_3888_3896" id="s_global_4085_4093" title="Defined at line 98">s_global</a>, <a href="#lib_3905_3908" id="lib_4095_4098" title="Defined at line 98">lib</a>))).

  <a href="#importLibraryScopeIfDeclared_4018_4046" id="importLibraryScopeIfDeclared_4106_4134" title="Referenced at line 100, 103, 104, 105">importLibraryScopeIfDeclared</a> : <span class="keyword">scope</span> * <span class="keyword">scope</span> * <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4153_4157" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#importLibraryScopeIfDeclared_4106_4134" id="importLibraryScopeIfDeclared_4160_4188" title="Defined at line 102">importLibraryScopeIfDeclared</a>(<a href="#s_mod_4214_4219" id="s_mod_4189_4194" title="Referenced at line 103">s_mod</a>, <a href="#s_lib_4233_4238" id="s_lib_4196_4201" title="Referenced at line 103">s_lib</a>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4203_4207" title="Defined at ../webdsl.stx line 34">TRUE</a>()) :- <a href="#s_mod_4189_4194" id="s_mod_4214_4219" title="Defined at line 103">s_mod</a> -<a href="../webdsl.stx#IMPORTLIB_1661_1670" id="IMPORTLIB_4221_4230" title="Defined at ../webdsl.stx line 51">IMPORTLIB</a>-&gt; <a href="#s_lib_4196_4201" id="s_lib_4233_4238" title="Defined at line 103">s_lib</a>.
  <a href="#importLibraryScopeIfDeclared_4106_4134" id="importLibraryScopeIfDeclared_4242_4270" title="Defined at line 102">importLibraryScopeIfDeclared</a>(s_mod, <span id="s_mod_4278_4283" title="Not referenced locally, nor via imports">s_mod</span>, <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4285_4289" title="Defined at ../webdsl.stx line 34">TRUE</a>()). <span class="layout">// restrict self import</span>
  <a href="#importLibraryScopeIfDeclared_4106_4134" id="importLibraryScopeIfDeclared_4320_4348" title="Defined at line 102">importLibraryScopeIfDeclared</a>(_, _, <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4355_4360" title="Defined at ../webdsl.stx line 35">FALSE</a>()).

<span class="keyword">rules</span> <span class="layout">// utils</span>

  <a href="#usesBuiltInLibraryB_1042_1061" id="usesBuiltInLibraryB_4384_4403" title="Referenced at line 34, 110">usesBuiltInLibraryB</a> : <span class="keyword">scope</span> -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4415_4419" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#usesBuiltInLibraryB_4384_4403" id="usesBuiltInLibraryB_4422_4441" title="Defined at line 109">usesBuiltInLibraryB</a>(<a href="#s_global_4583_4591" id="s_global_4442_4450" title="Referenced at line 113">s_global</a>) = <a href="#usesLibraryB_internal_4603_4624" id="usesLibraryB_internal_4454_4475" title="Defined at line 115">usesLibraryB_internal</a>(<a href="#ps_4596_4598" id="ps_4476_4478" title="Referenced at line 113">ps</a>) :-
        <span class="keyword">query</span> <a href="#library_161_168" id="library_4497_4504" title="Defined at line 12">library</a> <span class="keyword">filter e</span>
          <span class="keyword">and</span> { <a href="#m'_4536_4538" id="m'_4530_4532" title="Referenced at line 112">m'</a> :- <a href="#m'_4530_4532" id="m'_4536_4538" title="Defined at line 112">m'</a> == (["_BUILTIN_LIBRARY"], _) }
          <span class="keyword">in</span> <a href="#s_global_4442_4450" id="s_global_4583_4591" title="Defined at line 110">s_global</a> |-&gt; <a href="#ps_4476_4478" id="ps_4596_4598" title="Defined at line 110">ps</a>.

  <a href="#usesLibraryB_internal_4454_4475" id="usesLibraryB_internal_4603_4624" title="Referenced at line 110, 116, 117">usesLibraryB_internal</a> : <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">list</span>(<span class="keyword">string</span>) * <span class="keyword">scope</span>))) -&gt; <a href="../webdsl.stx#BOOL_697_701" id="BOOL_4668_4672" title="Defined at ../webdsl.stx line 30">BOOL</a>
  <a href="#usesLibraryB_internal_4603_4624" id="usesLibraryB_internal_4675_4696" title="Defined at line 115">usesLibraryB_internal</a>([]) = <a href="../webdsl.stx#FALSE_844_849" id="FALSE_4703_4708" title="Defined at ../webdsl.stx line 35">FALSE</a>().
  <a href="#usesLibraryB_internal_4603_4624" id="usesLibraryB_internal_4714_4735" title="Defined at line 115">usesLibraryB_internal</a>([_ | _]) = <a href="../webdsl.stx#TRUE_828_832" id="TRUE_4747_4751" title="Defined at ../webdsl.stx line 34">TRUE</a>().

  <a href="#modulePartsToStrings_743_763" id="modulePartsToStrings_4758_4778" title="Referenced at line 27, 67, 85">modulePartsToStrings</a> <span class="keyword">maps</span> <a href="#modulePartToString_4824_4842" id="modulePartToString_4784_4802" title="Defined at line 120">modulePartToString</a>(<span class="keyword">list</span>(*)) = <span class="keyword">list</span>(*)
  <a href="#modulePartToString_4784_4802" id="modulePartToString_4824_4842" title="Referenced at line 119, 121">modulePartToString</a> : <a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ModulePart_294_304" id="ModulePart_4845_4855" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 19">ModulePart</a> -&gt; <span class="keyword">string</span>
  <a href="#modulePartToString_4824_4842" id="modulePartToString_4868_4886" title="Defined at line 120">modulePartToString</a>(<a href="../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx#ModulePart_1184_1194" id="ModulePart_4887_4897" title="Defined at ../../../src-gen/statix/signatures/WebDSL-Lexical-sig.stx line 59">ModulePart</a>(<span id="s_4898_4899" title="Not referenced locally, nor via imports">s</span>)) = s.

</code></pre></td></tr></tbody></table></div>