---
title: WebDSL-Core-sig.stx
hide:
  - toc
---

# `WebDSL-Core-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Core-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Core-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-AccessControl-sig.stx#signatures/WebDSL-Core-sig_85_111" id="signatures/WebDSL-Core-sig_7_33" title="Referenced at ../WebDSL-AccessControl-sig.stx line 5; ../WebDSL-Action-sig.stx line 4; ../WebDSL-Ajax-sig.stx line 7; ../WebDSL-Attributes-sig.stx line 6; ../WebDSL-DataModel-sig.stx line 5; ../WebDSL-DataValidation-sig.stx line 8; ../WebDSL-Dispatch-sig.stx line 5; ../WebDSL-EntityDerive-sig.stx line 5; ../WebDSL-Exception-sig.stx line 5; ../WebDSL-Expand-sig.stx line 6; ../WebDSL-Generated-sig.stx line 4; ../WebDSL-Native-sig.stx line 4; ../WebDSL-Prefetch-sig.stx line 5; ../WebDSL-Routing-sig.stx line 4; ../WebDSL-Search-sig.stx line 5; ../WebDSL-Service-sig.stx line 5; ../webdsl-statix-sig.stx line 8; ../WebDSL-Test-sig.stx line 6; ../WebDSL-TimeInterval-sig.stx line 5; ../WebDSL-Type-sig.stx line 8; ../WebDSL-UI-sig.stx line 6">signatures/WebDSL-Core-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_45_73" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_76_107" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_110_139" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#FormalArg_398_407" id="FormalArg_164_173" title="Referenced at line 26, 56, 57; ../WebDSL-AccessControl-sig.stx line 47, 60; ../WebDSL-Expand-sig.stx line 48, 48; ../WebDSL-Service-sig.stx line 23; ../WebDSL-UI-sig.stx line 106, 186; ../../../../trans/static-semantics/webdsl.stx line 37, 492; ../../../../trans/static-semantics/actions/functions.stx line 139, 146; ../../../../trans/static-semantics/ui/actions.stx line 45, 54">FormalArg</a>
    <a href="#OptFormalArgs_434_447" id="OptFormalArgs_178_191" title="Referenced at line 27, 57, 58; ../WebDSL-AccessControl-sig.stx line 43, 45, 56; ../WebDSL-Action-sig.stx line 67, 77; ../WebDSL-Dispatch-sig.stx line 29; ../WebDSL-EntityDerive-sig.stx line 23; ../WebDSL-Routing-sig.stx line 19, 20; ../WebDSL-UI-sig.stx line 102, 110, 111, 112, 235; ../../../../trans/static-semantics/webdsl-ac.stx line 189">OptFormalArgs</a>
    <a href="#FunctionSortParams_479_497" id="FunctionSortParams_196_214" title="Referenced at line 28, 49, 50, 51">FunctionSortParams</a>
    <a href="#FunctionSortParam_528_545" id="FunctionSortParam_219_236" title="Referenced at line 29, 50, 52, 53">FunctionSortParam</a>
    <a href="#FunctionSortReturn_577_595" id="FunctionSortReturn_241_259" title="Referenced at line 30, 49, 54, 55">FunctionSortReturn</a>
    <a href="#OptCallArgs_620_631" id="OptCallArgs_264_275" title="Referenced at line 31, 59, 60; ../WebDSL-EntityDerive-sig.stx line 22">OptCallArgs</a>
    <a href="#Sort_649_653" id="Sort_280_284" title="Referenced at line 32, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48, 49, 52, 53, 54, 56; ../WebDSL-Action-sig.stx line 69, 78, 79, 80, 88, 89, 103, 106, 108, 133, 134, 138, 139, 158, 160, 161, 163, 165; ../WebDSL-DataModel-sig.stx line 31, 32, 33, 34, 37, 38, 39, 40, 43, 44; ../WebDSL-Dispatch-sig.stx line 30; ../WebDSL-EntityDerive-sig.stx line 23; ../WebDSL-Exception-sig.stx line 24; ../WebDSL-Prefetch-sig.stx line 59, 61; ../WebDSL-UI-sig.stx line 105, 131, 132, 133, 134, 157, 159, 173, 239, 240, 243, 245; ../../../../trans/static-semantics/webdsl-entities.stx line 150; ../../../../trans/static-semantics/webdsl-types.stx line 154, 160">Sort</a>
    <a href="#Unit_671_675" id="Unit_289_293" title="Referenced at line 33, 62, 63, 64, 65, 66, 67, 68, 69, 70; ../../../../trans/statics.stx line 21; ../../../../trans/static-semantics/webdsl.stx line 347">Unit</a>
    <a href="#Section_696_703" id="Section_298_305" title="Referenced at line 34, 61, 62, 63, 64, 65, 66, 67, 68, 69; ../WebDSL-AccessControl-sig.stx line 41, 42, 52; ../../../../trans/static-semantics/webdsl-modules.stx line 40, 54; ../../../../trans/static-semantics/webdsl.stx line 351">Section</a>
    <a href="#Definition_727_737" id="Definition_310_320" title="Referenced at line 35, 61, 62, 64, 66, 68, 71, 72, 73, 74, 75, 77; ../WebDSL-AccessControl-sig.stx line 43, 44; ../WebDSL-Action-sig.stx line 70, 71, 72; ../WebDSL-Attributes-sig.stx line 29; ../WebDSL-DataModel-sig.stx line 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42; ../WebDSL-Expand-sig.stx line 37, 38, 39, 39, 44, 44; ../WebDSL-Generated-sig.stx line 19; ../WebDSL-Native-sig.stx line 33, 34; ../WebDSL-Routing-sig.stx line 18; ../WebDSL-Search-sig.stx line 137, 167, 274; ../WebDSL-Service-sig.stx line 23, 24; ../WebDSL-Test-sig.stx line 17, 18; ../WebDSL-TimeInterval-sig.stx line 27; ../WebDSL-Type-sig.stx line 21; ../WebDSL-UI-sig.stx line 101, 230; ../../../../trans/static-semantics/webdsl-modules.stx line 63, 88; ../../../../trans/static-semantics/webdsl.stx line 356">Definition</a>
    <a href="#EnumValue_760_769" id="EnumValue_325_334" title="Referenced at line 36, 75, 76; ../../../../trans/static-semantics/webdsl-entities.stx line 102">EnumValue</a>
    <a href="#Action_789_795" id="Action_339_345" title="Referenced at line 37, 77; ../WebDSL-UI-sig.stx line 130, 235">Action</a>
    <a href="#Statement_818_827" id="Statement_350_359" title="Referenced at line 38; ../WebDSL-Action-sig.stx line 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 97, 100, 106, 107, 108, 109, 110, 128, 185; ../WebDSL-Ajax-sig.stx line 33; ../WebDSL-DataValidation-sig.stx line 25, 26; ../WebDSL-EntityDerive-sig.stx line 25, 25; ../WebDSL-Exception-sig.stx line 20, 22; ../WebDSL-Expand-sig.stx line 42, 42; ../WebDSL-Prefetch-sig.stx line 47; ../../../../trans/static-semantics/webdsl-actions.stx line 200; ../../../../trans/static-semantics/webdsl.stx line 361, 363; ../../../../trans/static-semantics/ui/actions.stx line 45">Statement</a>

  <span class="keyword">constructors</span>
    <span id="FormalArg-Plhdr_380_395" title="Not referenced locally, nor via imports">FormalArg-Plhdr</span> : <a href="#FormalArg_164_173" id="FormalArg_398_407" title="Defined at line 11">FormalArg</a>
    <span id="OptFormalArgs-Plhdr_412_431" title="Not referenced locally, nor via imports">OptFormalArgs-Plhdr</span> : <a href="#OptFormalArgs_178_191" id="OptFormalArgs_434_447" title="Defined at line 12">OptFormalArgs</a>
    <span id="FunctionSortParams-Plhdr_452_476" title="Not referenced locally, nor via imports">FunctionSortParams-Plhdr</span> : <a href="#FunctionSortParams_196_214" id="FunctionSortParams_479_497" title="Defined at line 13">FunctionSortParams</a>
    <span id="FunctionSortParam-Plhdr_502_525" title="Not referenced locally, nor via imports">FunctionSortParam-Plhdr</span> : <a href="#FunctionSortParam_219_236" id="FunctionSortParam_528_545" title="Defined at line 14">FunctionSortParam</a>
    <span id="FunctionSortReturn-Plhdr_550_574" title="Not referenced locally, nor via imports">FunctionSortReturn-Plhdr</span> : <a href="#FunctionSortReturn_241_259" id="FunctionSortReturn_577_595" title="Defined at line 15">FunctionSortReturn</a>
    <span id="OptCallArgs-Plhdr_600_617" title="Not referenced locally, nor via imports">OptCallArgs-Plhdr</span> : <a href="#OptCallArgs_264_275" id="OptCallArgs_620_631" title="Defined at line 16">OptCallArgs</a>
    <span id="Sort-Plhdr_636_646" title="Not referenced locally, nor via imports">Sort-Plhdr</span> : <a href="#Sort_280_284" id="Sort_649_653" title="Defined at line 17">Sort</a>
    <span id="Unit-Plhdr_658_668" title="Not referenced locally, nor via imports">Unit-Plhdr</span> : <a href="#Unit_289_293" id="Unit_671_675" title="Defined at line 18">Unit</a>
    <span id="Section-Plhdr_680_693" title="Not referenced locally, nor via imports">Section-Plhdr</span> : <a href="#Section_298_305" id="Section_696_703" title="Defined at line 19">Section</a>
    <span id="Definition-Plhdr_708_724" title="Not referenced locally, nor via imports">Definition-Plhdr</span> : <a href="#Definition_310_320" id="Definition_727_737" title="Defined at line 20">Definition</a>
    <span id="EnumValue-Plhdr_742_757" title="Not referenced locally, nor via imports">EnumValue-Plhdr</span> : <a href="#EnumValue_325_334" id="EnumValue_760_769" title="Defined at line 21">EnumValue</a>
    <span id="Action-Plhdr_774_786" title="Not referenced locally, nor via imports">Action-Plhdr</span> : <a href="#Action_339_345" id="Action_789_795" title="Defined at line 22">Action</a>
    <span id="Statement-Plhdr_800_815" title="Not referenced locally, nor via imports">Statement-Plhdr</span> : <a href="#Statement_350_359" id="Statement_818_827" title="Defined at line 23">Statement</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-expand.stx#SimpleSort_3037_3047" id="SimpleSort_859_869" title="Referenced at ../../../../trans/static-semantics/webdsl-expand.stx line 71; ../../../../trans/static-semantics/webdsl-native.stx line 119; ../../../../trans/static-semantics/webdsl-types.stx line 162, 163, 164, 166, 167, 168, 169, 170, 171, 172, 173, 175, 176, 177, 179, 180, 181, 182, 183, 184, 185, 188">SimpleSort</a> : <a href="../WebDSL-Lexical-sig.stx#SimpleSortLex_756_769" id="SimpleSortLex_872_885" title="Defined at ../WebDSL-Lexical-sig.stx line 42">SimpleSortLex</a> -&gt; <a href="#Sort_280_284" id="Sort_889_893" title="Defined at line 17">Sort</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#GenericSort_6831_6842" id="GenericSort_898_909" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 190, 191, 192">GenericSort</a> : <a href="../WebDSL-Lexical-sig.stx#GenericSortLex_783_797" id="GenericSortLex_912_926" title="Defined at ../WebDSL-Lexical-sig.stx line 43">GenericSortLex</a> * <span class="keyword">list</span>(<a href="#Sort_280_284" id="Sort_934_938" title="Defined at line 17">Sort</a>) -&gt; <a href="#Sort_280_284" id="Sort_943_947" title="Defined at line 17">Sort</a>
    <span id="ListSort_952_960" title="Not referenced locally, nor via imports">ListSort</span> : <a href="#Sort_280_284" id="Sort_963_967" title="Defined at line 17">Sort</a> -&gt; <a href="#Sort_280_284" id="Sort_971_975" title="Defined at line 17">Sort</a>
    <span id="SetSort_980_987" title="Not referenced locally, nor via imports">SetSort</span> : <a href="#Sort_280_284" id="Sort_990_994" title="Defined at line 17">Sort</a> -&gt; <a href="#Sort_280_284" id="Sort_998_1002" title="Defined at line 17">Sort</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#RefSort_7124_7131" id="RefSort_1007_1014" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 194">RefSort</a> : <a href="#Sort_280_284" id="Sort_1017_1021" title="Defined at line 17">Sort</a> -&gt; <a href="#Sort_280_284" id="Sort_1025_1029" title="Defined at line 17">Sort</a>
    <span id="RefSortAlt_1034_1044" title="Not referenced locally, nor via imports">RefSortAlt</span> : <a href="#Sort_280_284" id="Sort_1047_1051" title="Defined at line 17">Sort</a> -&gt; <a href="#Sort_280_284" id="Sort_1055_1059" title="Defined at line 17">Sort</a>
    <span id="FunctionSort_1064_1076" title="Not referenced locally, nor via imports">FunctionSort</span> : <a href="#FunctionSortParams_196_214" id="FunctionSortParams_1079_1097" title="Defined at line 13">FunctionSortParams</a> * <a href="#FunctionSortReturn_241_259" id="FunctionSortReturn_1100_1118" title="Defined at line 15">FunctionSortReturn</a> -&gt; <a href="#Sort_280_284" id="Sort_1122_1126" title="Defined at line 17">Sort</a>
    <span id="FunctionSortParams_1131_1149" title="Not referenced locally, nor via imports">FunctionSortParams</span> : <span class="keyword">list</span>(<a href="#FunctionSortParam_219_236" id="FunctionSortParam_1157_1174" title="Defined at line 14">FunctionSortParam</a>) -&gt; <a href="#FunctionSortParams_196_214" id="FunctionSortParams_1179_1197" title="Defined at line 13">FunctionSortParams</a>
    <span id="FunctionSortParamsNone_1202_1224" title="Not referenced locally, nor via imports">FunctionSortParamsNone</span> : <a href="#FunctionSortParams_196_214" id="FunctionSortParams_1227_1245" title="Defined at line 13">FunctionSortParams</a>
    <span id="UnnamedArg_1250_1260" title="Not referenced locally, nor via imports">UnnamedArg</span> : <a href="#Sort_280_284" id="Sort_1263_1267" title="Defined at line 17">Sort</a> -&gt; <a href="#FunctionSortParam_219_236" id="FunctionSortParam_1271_1288" title="Defined at line 14">FunctionSortParam</a>
    <span id="NamedArg_1293_1301" title="Not referenced locally, nor via imports">NamedArg</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1304_1309" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Sort_280_284" id="Sort_1312_1316" title="Defined at line 17">Sort</a> -&gt; <a href="#FunctionSortParam_219_236" id="FunctionSortParam_1320_1337" title="Defined at line 14">FunctionSortParam</a>
    <span id="FunctionSortReturn_1342_1360" title="Not referenced locally, nor via imports">FunctionSortReturn</span> : <a href="#Sort_280_284" id="Sort_1363_1367" title="Defined at line 17">Sort</a> -&gt; <a href="#FunctionSortReturn_241_259" id="FunctionSortReturn_1371_1389" title="Defined at line 15">FunctionSortReturn</a>
    <span id="FunctionSortReturnNone_1394_1416" title="Not referenced locally, nor via imports">FunctionSortReturnNone</span> : <a href="#FunctionSortReturn_241_259" id="FunctionSortReturn_1419_1437" title="Defined at line 15">FunctionSortReturn</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#Arg_13038_13041" id="Arg_1442_1445" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 281; ../../../../trans/static-semantics/webdsl.stx line 493; ../../../../trans/static-semantics/actions/functions.stx line 140, 147">Arg</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1448_1453" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="#Sort_280_284" id="Sort_1456_1460" title="Defined at line 17">Sort</a> -&gt; <a href="#FormalArg_164_173" id="FormalArg_1464_1473" title="Defined at line 11">FormalArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#FormalArgs_11142_11152" id="FormalArgs_1478_1488" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 190; ../../../../trans/static-semantics/webdsl-ui.stx line 31, 62, 85; ../../../../trans/static-semantics/actions/functions.stx line 95, 105, 115, 118, 123, 124; ../../../../trans/static-semantics/ui/actions.stx line 62">FormalArgs</a> : <span class="keyword">list</span>(<a href="#FormalArg_164_173" id="FormalArg_1496_1505" title="Defined at line 11">FormalArg</a>) -&gt; <a href="#OptFormalArgs_178_191" id="OptFormalArgs_1510_1523" title="Defined at line 12">OptFormalArgs</a>
    <span id="OptFormalArgsNone_1528_1545" title="Not referenced locally, nor via imports">OptFormalArgsNone</span> : <a href="#OptFormalArgs_178_191" id="OptFormalArgs_1548_1561" title="Defined at line 12">OptFormalArgs</a>
    <span id="CallArgs_1566_1574" title="Not referenced locally, nor via imports">CallArgs</span> : <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1582_1585" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="#OptCallArgs_264_275" id="OptCallArgs_1590_1601" title="Defined at line 16">OptCallArgs</a>
    <span id="OptCallArgsNone_1606_1621" title="Not referenced locally, nor via imports">OptCallArgsNone</span> : <a href="#OptCallArgs_264_275" id="OptCallArgs_1624_1635" title="Defined at line 16">OptCallArgs</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#Section_1903_1910" id="Section_1640_1647" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 59; ../../../../trans/static-semantics/webdsl.stx line 353">Section</a> : <a href="../WebDSL-Lexical-sig.stx#SectionName_254_265" id="SectionName_1650_1661" title="Defined at ../WebDSL-Lexical-sig.stx line 17">SectionName</a> * <span class="keyword">list</span>(<a href="#Definition_310_320" id="Definition_1669_1679" title="Defined at line 20">Definition</a>) -&gt; <a href="#Section_298_305" id="Section_1684_1691" title="Defined at line 19">Section</a>
    <span id="ApplicationDefs_1696_1711" title="Not referenced locally, nor via imports">ApplicationDefs</span> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_1714_1717" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <span class="keyword">list</span>(<a href="#Definition_310_320" id="Definition_1725_1735" title="Defined at line 20">Definition</a>) * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_1744_1751" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_1756_1760" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#Application_233_244" id="Application_1765_1776" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 16">Application</a> : <a href="../WebDSL-Lexical-sig.stx#QId_70_73" id="QId_1779_1782" title="Defined at ../WebDSL-Lexical-sig.stx line 8">QId</a> * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_1790_1797" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_1802_1806" title="Defined at line 18">Unit</a>
    <span id="ModuleDefs_1811_1821" title="Not referenced locally, nor via imports">ModuleDefs</span> : <a href="../WebDSL-Lexical-sig.stx#ModuleName_279_289" id="ModuleName_1824_1834" title="Defined at ../WebDSL-Lexical-sig.stx line 18">ModuleName</a> * <span class="keyword">list</span>(<a href="#Definition_310_320" id="Definition_1842_1852" title="Defined at line 20">Definition</a>) * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_1861_1868" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_1873_1877" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#Module_603_609" id="Module_1882_1888" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 25">Module</a> : <a href="../WebDSL-Lexical-sig.stx#ModuleName_279_289" id="ModuleName_1891_1901" title="Defined at ../WebDSL-Lexical-sig.stx line 18">ModuleName</a> * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_1909_1916" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_1921_1925" title="Defined at line 18">Unit</a>
    <span id="BuiltInDefs_1930_1941" title="Not referenced locally, nor via imports">BuiltInDefs</span> : <span class="keyword">list</span>(<a href="#Definition_310_320" id="Definition_1949_1959" title="Defined at line 20">Definition</a>) * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_1968_1975" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_1980_1984" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#BuiltIn_927_934" id="BuiltIn_1989_1996" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 32">BuiltIn</a> : <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_2004_2011" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_2016_2020" title="Defined at line 18">Unit</a>
    <span id="BuiltInLibraryDefs_2025_2043" title="Not referenced locally, nor via imports">BuiltInLibraryDefs</span> : <span class="keyword">list</span>(<a href="#Definition_310_320" id="Definition_2051_2061" title="Defined at line 20">Definition</a>) * <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_2070_2077" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_2082_2086" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#BuiltInLibrary_1095_1109" id="BuiltInLibrary_2091_2105" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 36">BuiltInLibrary</a> : <span class="keyword">list</span>(<a href="#Section_298_305" id="Section_2113_2120" title="Defined at line 19">Section</a>) -&gt; <a href="#Unit_289_293" id="Unit_2125_2129" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl.stx#EmptyUnit_15205_15214" id="EmptyUnit_2134_2143" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 348">EmptyUnit</a> : <a href="#Unit_289_293" id="Unit_2146_2150" title="Defined at line 18">Unit</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#Imports_1626_1633" id="Imports_2155_2162" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 51, 66, 84">Imports</a> : <a href="../WebDSL-Lexical-sig.stx#ImportName_309_319" id="ImportName_2165_2175" title="Defined at ../WebDSL-Lexical-sig.stx line 20">ImportName</a> -&gt; <a href="#Definition_310_320" id="Definition_2179_2189" title="Defined at line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#ImportsBuiltIn_1708_1722" id="ImportsBuiltIn_2194_2208" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 52">ImportsBuiltIn</a> : <a href="#Definition_310_320" id="Definition_2211_2221" title="Defined at line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl.stx#Description_15511_15522" id="Description_2226_2237" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 357">Description</a> : <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Word_738_742" id="Word_2245_2249" title="Defined at ../WebDSL-Lexical-sig.stx line 41">Word</a>) -&gt; <a href="#Definition_310_320" id="Definition_2254_2264" title="Defined at line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl.stx#Note_15608_15612" id="Note_2269_2273" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 358">Note</a> : <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Word_738_742" id="Word_2281_2285" title="Defined at ../WebDSL-Lexical-sig.stx line 41">Word</a>) -&gt; <a href="#Definition_310_320" id="Definition_2290_2300" title="Defined at line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Enum_3917_3921" id="Enum_2305_2309" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 93">Enum</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2312_2314" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EnumValue_325_334" id="EnumValue_2322_2331" title="Defined at line 21">EnumValue</a>) -&gt; <a href="#Definition_310_320" id="Definition_2336_2346" title="Defined at line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#EnumValue_4327_4336" id="EnumValue_2351_2360" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 103">EnumValue</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2363_2365" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_2368_2374" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#EnumValue_325_334" id="EnumValue_2378_2387" title="Defined at line 21">EnumValue</a>
    <a href="../../../../trans/static-semantics/ui/actions.stx#Action2Definition_2286_2303" id="Action2Definition_2392_2409" title="Referenced at ../../../../trans/static-semantics/ui/actions.stx line 58">Action2Definition</a> : <a href="#Action_339_345" id="Action_2412_2418" title="Defined at line 22">Action</a> -&gt; <a href="#Definition_310_320" id="Definition_2422_2432" title="Defined at line 20">Definition</a>
</code></pre></td></tr></tbody></table></div>