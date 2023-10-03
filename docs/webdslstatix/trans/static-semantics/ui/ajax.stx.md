---
title: ajax.stx
hide:
  - toc
---

# `ajax.stx`

:simple-github: [pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/ajax.stx]

[pdmosses/webdsl-statix/webdslstatix/trans/static-semantics/ui/ajax.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/trans/static-semantics/ui/ajax.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../../webdsl-ui.stx#static-semantics/ui/ajax_190_214" id="static-semantics/ui/ajax_7_31" title="Referenced at ../../webdsl-ui.stx line 11">static-semantics/ui/ajax</a>

<span class="keyword">imports</span>
  <a href="../../types/built-ins.stx#static-semantics/types/built-ins_7_39" id="static-semantics/types/built-ins_43_75" title="Defined at ../../types/built-ins.stx line 1">static-semantics/types/built-ins</a>

  <a href="../template-calls.stx#static-semantics/ui/template-calls_7_41" id="static-semantics/ui/template-calls_79_113" title="Defined at ../template-calls.stx line 1">static-semantics/ui/template-calls</a>

  <a href="../../webdsl-ui.stx#static-semantics/webdsl-ui_7_33" id="static-semantics/webdsl-ui_117_143" title="Defined at ../../webdsl-ui.stx line 1">static-semantics/webdsl-ui</a>
  <a href="../../webdsl.stx#static-semantics/webdsl_7_30" id="static-semantics/webdsl_146_169" title="Defined at ../../webdsl.stx line 1">static-semantics/webdsl</a>

<span class="keyword">rules</span> <span class="layout">// placeholders and ajax</span>

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_205_222" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_343_344" id="s_223_224" title="Referenced at line 15">s</a>, _, <a href="#s_pha_308_313" id="s_pha_229_234" title="Referenced at line 14, 15">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholder_1326_1339" id="TEPlaceholder_236_249" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 47">TEPlaceholder</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderHtml_1452_1467" id="PlaceholderHtml_250_265" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 49">PlaceholderHtml</a>(_, <a href="#ph_315_317" id="ph_269_271" title="Referenced at line 14">ph</a>, <a href="#elems_353_358" id="elems_273_278" title="Referenced at line 15">elems</a>))) :-
    <a href="../../webdsl.stx#declarePlaceholder_12135_12153" id="declarePlaceholder_289_307" title="Defined at ../../webdsl.stx line 276">declarePlaceholder</a>(<a href="#s_pha_229_234" id="s_pha_308_313" title="Defined at line 13">s_pha</a>, <a href="#ph_269_271" id="ph_315_317" title="Defined at line 13">ph</a>),
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_324_342" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_223_224" id="s_343_344" title="Defined at line 13">s</a>, <a href="#s_pha_229_234" id="s_pha_346_351" title="Defined at line 13">s_pha</a>, <a href="#elems_273_278" id="elems_353_358" title="Defined at line 13">elems</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_364_381" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_475_476" id="s_382_383" title="Referenced at line 18, 18, 19">s</a>, _, <a href="#s_pha_575_580" id="s_pha_388_393" title="Referenced at line 19">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholder_1326_1339" id="TEPlaceholder_395_408" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 47">TEPlaceholder</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderHtmlExp_1521_1539" id="PlaceholderHtmlExp_409_427" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 50">PlaceholderHtmlExp</a>(_, <a href="#e_478_479" id="e_431_432" title="Referenced at line 18">e</a>, <a href="#elems_582_587" id="elems_434_439" title="Referenced at line 19">elems</a>))) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_450_464" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_465_474" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_382_383" id="s_475_476" title="Defined at line 17">s</a>, <a href="#e_431_432" id="e_478_479" title="Defined at line 17">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_482_488" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_382_383" id="s_489_490" title="Defined at line 17">s</a>)) | <span class="keyword">error</span> $[Expression should be compatible with String],
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_553_571" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_382_383" id="s_572_573" title="Defined at line 17">s</a>, <a href="#s_pha_388_393" id="s_pha_575_580" title="Defined at line 17">s_pha</a>, <a href="#elems_434_439" id="elems_582_587" title="Defined at line 17">elems</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_593_610" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_724_725" id="s_611_612" title="Referenced at line 23">s</a>, _, <a href="#s_pha_689_694" id="s_pha_617_622" title="Referenced at line 22, 23">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholder_1326_1339" id="TEPlaceholder_624_637" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 47">TEPlaceholder</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#Placeholder_1594_1605" id="Placeholder_638_649" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 51">Placeholder</a>(<a href="#ph_696_698" id="ph_650_652" title="Referenced at line 22">ph</a>, <a href="#elems_734_739" id="elems_654_659" title="Referenced at line 23">elems</a>))) :-
    <a href="../../webdsl.stx#declarePlaceholder_12135_12153" id="declarePlaceholder_670_688" title="Defined at ../../webdsl.stx line 276">declarePlaceholder</a>(<a href="#s_pha_617_622" id="s_pha_689_694" title="Defined at line 21">s_pha</a>, <a href="#ph_650_652" id="ph_696_698" title="Defined at line 21">ph</a>),
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_705_723" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_611_612" id="s_724_725" title="Defined at line 21">s</a>, <a href="#s_pha_617_622" id="s_pha_727_732" title="Defined at line 21">s_pha</a>, <a href="#elems_654_659" id="elems_734_739" title="Defined at line 21">elems</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_745_762" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_849_850" id="s_763_764" title="Referenced at line 26, 26, 27">s</a>, _, <a href="#s_pha_949_954" id="s_pha_769_774" title="Referenced at line 27">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholder_1326_1339" id="TEPlaceholder_776_789" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 47">TEPlaceholder</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderExp_1654_1668" id="PlaceholderExp_790_804" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 52">PlaceholderExp</a>(<a href="#e_852_853" id="e_805_806" title="Referenced at line 26">e</a>, <a href="#elems_956_961" id="elems_808_813" title="Referenced at line 27">elems</a>))) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_824_838" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_839_848" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_763_764" id="s_849_850" title="Defined at line 25">s</a>, <a href="#e_805_806" id="e_852_853" title="Defined at line 25">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_856_862" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_763_764" id="s_863_864" title="Defined at line 25">s</a>)) | <span class="keyword">error</span> $[Expression should be compatible with String],
    <a href="../../webdsl-ui.stx#templateElementsOk_7412_7430" id="templateElementsOk_927_945" title="Defined at ../../webdsl-ui.stx line 142">templateElementsOk</a>(<a href="#s_763_764" id="s_946_947" title="Defined at line 25">s</a>, <a href="#s_pha_769_774" id="s_pha_949_954" title="Defined at line 25">s_pha</a>, <a href="#elems_808_813" id="elems_956_961" title="Defined at line 25">elems</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_967_984" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_1114_1115" id="s_985_986" title="Referenced at line 31">s</a>, _, <a href="#s_pha_1083_1088" id="s_pha_991_996" title="Referenced at line 30, 31">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholderWithAjaxCall_1377_1402" id="TEPlaceholderWithAjaxCall_998_1023" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 48">TEPlaceholderWithAjaxCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderAjaxHtml_1718_1737" id="PlaceholderAjaxHtml_1024_1043" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 53">PlaceholderAjaxHtml</a>(_, <a href="#ph_1090_1092" id="ph_1047_1049" title="Referenced at line 30">ph</a>, <a href="#tc_1124_1126" id="tc_1051_1053" title="Referenced at line 31">tc</a>))) :-
    <a href="../../webdsl.stx#declarePlaceholder_12135_12153" id="declarePlaceholder_1064_1082" title="Defined at ../../webdsl.stx line 276">declarePlaceholder</a>(<a href="#s_pha_991_996" id="s_pha_1083_1088" title="Defined at line 29">s_pha</a>, <a href="#ph_1047_1049" id="ph_1090_1092" title="Defined at line 29">ph</a>),
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_1099_1113" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_985_986" id="s_1114_1115" title="Defined at line 29">s</a>, <a href="#s_pha_991_996" id="s_pha_1117_1122" title="Defined at line 29">s_pha</a>, <a href="#tc_1051_1053" id="tc_1124_1126" title="Defined at line 29">tc</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_1132_1149" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_1267_1268" id="s_1150_1151" title="Referenced at line 34, 34, 35">s</a>, _, <a href="#s_pha_1363_1368" id="s_pha_1156_1161" title="Referenced at line 35">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholderWithAjaxCall_1377_1402" id="TEPlaceholderWithAjaxCall_1163_1188" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 48">TEPlaceholderWithAjaxCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderAjaxHtmlExp_1794_1816" id="PlaceholderAjaxHtmlExp_1189_1211" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 54">PlaceholderAjaxHtmlExp</a>(_, <a href="#e_1270_1271" id="e_1215_1216" title="Referenced at line 34">e</a>, <a href="#tc_1370_1372" id="tc_1218_1220" title="Referenced at line 35">tc</a>))) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_1231_1245" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_1246_1266" title="Defined at ../../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_1150_1151" id="s_1267_1268" title="Defined at line 33">s</a>, <a href="#e_1215_1216" id="e_1270_1271" title="Defined at line 33">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_1274_1280" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1150_1151" id="s_1281_1282" title="Defined at line 33">s</a>)) | <span class="keyword">error</span> $[Expression should be compatible with String],
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_1345_1359" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_1150_1151" id="s_1360_1361" title="Defined at line 33">s</a>, <a href="#s_pha_1156_1161" id="s_pha_1363_1368" title="Defined at line 33">s_pha</a>, <a href="#tc_1218_1220" id="tc_1370_1372" title="Defined at line 33">tc</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_1378_1395" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_1518_1519" id="s_1396_1397" title="Referenced at line 39">s</a>, _, <a href="#s_pha_1487_1492" id="s_pha_1402_1407" title="Referenced at line 38, 39">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholderWithAjaxCall_1377_1402" id="TEPlaceholderWithAjaxCall_1409_1434" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 48">TEPlaceholderWithAjaxCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderAjax_1876_1891" id="PlaceholderAjax_1435_1450" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 55">PlaceholderAjax</a>(<a href="#ph_1494_1496" id="ph_1451_1453" title="Referenced at line 38">ph</a>, <a href="#tc_1528_1530" id="tc_1455_1457" title="Referenced at line 39">tc</a>))) :-
    <a href="../../webdsl.stx#declarePlaceholder_12135_12153" id="declarePlaceholder_1468_1486" title="Defined at ../../webdsl.stx line 276">declarePlaceholder</a>(<a href="#s_pha_1402_1407" id="s_pha_1487_1492" title="Defined at line 37">s_pha</a>, <a href="#ph_1451_1453" id="ph_1494_1496" title="Defined at line 37">ph</a>),
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_1503_1517" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_1396_1397" id="s_1518_1519" title="Defined at line 37">s</a>, <a href="#s_pha_1402_1407" id="s_pha_1521_1526" title="Defined at line 37">s_pha</a>, <a href="#tc_1455_1457" id="tc_1528_1530" title="Defined at line 37">tc</a>).

  <a href="../../webdsl-ui.stx#templateElementOk_7058_7075" id="templateElementOk_1536_1553" title="Defined at ../../webdsl-ui.stx line 138">templateElementOk</a>(<a href="#s_1664_1665" id="s_1554_1555" title="Referenced at line 42, 42, 43">s</a>, _, <a href="#s_pha_1760_1765" id="s_pha_1560_1565" title="Referenced at line 43">s_pha</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#TEPlaceholderWithAjaxCall_1377_1402" id="TEPlaceholderWithAjaxCall_1567_1592" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 48">TEPlaceholderWithAjaxCall</a>(<a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#PlaceholderAjaxExp_1943_1961" id="PlaceholderAjaxExp_1593_1611" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 56">PlaceholderAjaxExp</a>(<a href="#e_1667_1668" id="e_1612_1613" title="Referenced at line 42">e</a>, <a href="#tc_1767_1769" id="tc_1615_1617" title="Referenced at line 43">tc</a>))) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_1628_1642" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfPlaceholderExp_16940_16960" id="typeOfPlaceholderExp_1643_1663" title="Defined at ../../webdsl.stx line 398">typeOfPlaceholderExp</a>(<a href="#s_1554_1555" id="s_1664_1665" title="Defined at line 41">s</a>, <a href="#e_1612_1613" id="e_1667_1668" title="Defined at line 41">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_1671_1677" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_1554_1555" id="s_1678_1679" title="Defined at line 41">s</a>)) | <span class="keyword">error</span> $[Expression should be compatible with String],
    <a href="../template-calls.stx#templateCallOk_622_636" id="templateCallOk_1742_1756" title="Defined at ../template-calls.stx line 26">templateCallOk</a>(<a href="#s_1554_1555" id="s_1757_1758" title="Defined at line 41">s</a>, <a href="#s_pha_1560_1565" id="s_pha_1760_1765" title="Defined at line 41">s_pha</a>, <a href="#tc_1615_1617" id="tc_1767_1769" title="Defined at line 41">tc</a>).

<span class="keyword">rules</span> <span class="layout">// ajax statements</span>

  <a href="../../webdsl.stx#stmtOk_15783_15789" id="stmtOk_1801_1807" title="Defined at ../../webdsl.stx line 361">stmtOk</a>(<a href="#s_1852_1853" id="s_1808_1809" title="Referenced at line 47">s</a>, _, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxStatement_693_706" id="AjaxStatement_1814_1827" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 33">AjaxStatement</a>(<a href="#stmt_1855_1859" id="stmt_1828_1832" title="Referenced at line 47">stmt</a>), _) :- <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_1841_1851" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_1808_1809" id="s_1852_1853" title="Defined at line 47">s</a>, <a href="#stmt_1828_1832" id="stmt_1855_1859" title="Defined at line 47">stmt</a>).

  <a href="#ajaxStmtOk_1841_1851" id="ajaxStmtOk_1865_1875" title="Referenced at line 47, 51, 56, 61, 64, 67, 71, 74, 76">ajaxStmtOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxStatement_186_199" id="AjaxStatement_1886_1899" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 12">AjaxStatement</a>

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_1903_1913" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_1998_1999" id="s_1914_1915" title="Referenced at line 52, 53, 53">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxReplace_740_751" id="AjaxReplace_1917_1928" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 34">AjaxReplace</a>(<a href="#ph_2001_2003" id="ph_1929_1931" title="Referenced at line 52">ph</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxReplaceTemplateCall_1197_1220" id="AjaxReplaceTemplateCall_1933_1956" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 45">AjaxReplaceTemplateCall</a>(<a href="#tc_2035_2037" id="tc_1957_1959" title="Referenced at line 53, 54">tc</a>))) :-
    <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_1970_1997" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_1914_1915" id="s_1998_1999" title="Defined at line 51">s</a>, <a href="#ph_1929_1931" id="ph_2001_2003" title="Defined at line 51">ph</a>),
    <a href="../template-calls.stx#ajaxTemplateCallOk_484_502" id="ajaxTemplateCallOk_2010_2028" title="Defined at ../template-calls.stx line 23">ajaxTemplateCallOk</a>(<a href="#s_1914_1915" id="s_2029_2030" title="Defined at line 51">s</a>, <a href="#s_1914_1915" id="s_2032_2033" title="Defined at line 51">s</a>, <a href="#tc_1957_1959" id="tc_2035_2037" title="Defined at line 51">tc</a>)
      | <span class="keyword">error</span> $[An ajax-enabled template must be called here] @<a href="#tc_1957_1959" id="tc_2102_2104" title="Defined at line 51">tc</a>. <span class="layout">// correct error message for tests</span>

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2144_2154" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2213_2214" id="s_2155_2156" title="Referenced at line 57, 58, 58">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxAppend_805_815" id="AjaxAppend_2158_2168" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 35">AjaxAppend</a>(<a href="#ph_2216_2218" id="ph_2169_2171" title="Referenced at line 57">ph</a>, <a href="#tc_2250_2252" id="tc_2173_2175" title="Referenced at line 58, 59">tc</a>)) :-
    <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_2185_2212" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_2155_2156" id="s_2213_2214" title="Defined at line 56">s</a>, <a href="#ph_2169_2171" id="ph_2216_2218" title="Defined at line 56">ph</a>),
    <a href="../template-calls.stx#ajaxTemplateCallOk_484_502" id="ajaxTemplateCallOk_2225_2243" title="Defined at ../template-calls.stx line 23">ajaxTemplateCallOk</a>(<a href="#s_2155_2156" id="s_2244_2245" title="Defined at line 56">s</a>, <a href="#s_2155_2156" id="s_2247_2248" title="Defined at line 56">s</a>, <a href="#tc_2173_2175" id="tc_2250_2252" title="Defined at line 56">tc</a>)
      | <span class="keyword">error</span> $[An ajax-enabled template must be called here] @<a href="#tc_2173_2175" id="tc_2317_2319" title="Defined at line 56">tc</a>. <span class="layout">// correct error message for tests</span>

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2359_2369" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2431_2432" id="s_2370_2371" title="Referenced at line 62">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxVisibility_858_872" id="AjaxVisibility_2373_2387" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 36">AjaxVisibility</a>(<a href="#ph_2434_2436" id="ph_2388_2390" title="Referenced at line 62">ph</a>, _)) :-
    <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_2403_2430" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_2370_2371" id="s_2431_2432" title="Defined at line 61">s</a>, <a href="#ph_2388_2390" id="ph_2434_2436" title="Defined at line 61">ph</a>).

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2442_2452" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2492_2493" id="s_2453_2454" title="Referenced at line 65">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxRelocate_997_1009" id="AjaxRelocate_2456_2468" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 40">AjaxRelocate</a>(<a href="#pc_2495_2497" id="pc_2469_2471" title="Referenced at line 65">pc</a>)) :-
    <a href="../template-calls.stx#pageCallOk_3537_3547" id="pageCallOk_2481_2491" title="Defined at ../template-calls.stx line 80">pageCallOk</a>(<a href="#s_2453_2454" id="s_2492_2493" title="Defined at line 64">s</a>, <a href="#pc_2469_2471" id="pc_2495_2497" title="Defined at line 64">pc</a>).

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2503_2513" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2572_2573" id="s_2514_2515" title="Referenced at line 68, 69, 69">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxRestyle_1042_1053" id="AjaxRestyle_2517_2528" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 41">AjaxRestyle</a>(<a href="#ph_2575_2577" id="ph_2529_2531" title="Referenced at line 68">ph</a>, <a href="#e_2612_2613" id="e_2533_2534" title="Referenced at line 69, 69">e</a>)) :-
    <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_2544_2571" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_2514_2515" id="s_2572_2573" title="Defined at line 67">s</a>, <a href="#ph_2529_2531" id="ph_2575_2577" title="Defined at line 67">ph</a>),
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_2584_2598" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2599_2608" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2514_2515" id="s_2609_2610" title="Defined at line 67">s</a>, <a href="#e_2533_2534" id="e_2612_2613" title="Defined at line 67">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_2616_2622" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2514_2515" id="s_2623_2624" title="Defined at line 67">s</a>)) | <span class="keyword">error</span> $[CSS classname must be compatible with type String] @<a href="#e_2533_2534" id="e_2689_2690" title="Defined at line 67">e</a>.

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2695_2705" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2759_2760" id="s_2706_2707" title="Referenced at line 72">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxClear_1087_1096" id="AjaxClear_2709_2718" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 42">AjaxClear</a>(<a href="#ph_2762_2764" id="ph_2719_2721" title="Referenced at line 72">ph</a>)) :-
    <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_2731_2758" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_2706_2707" id="s_2759_2760" title="Defined at line 71">s</a>, <a href="#ph_2719_2721" id="ph_2762_2764" title="Defined at line 71">ph</a>).

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2770_2780" title="Defined at line 49">ajaxStmtOk</a>(<span id="s_2781_2782" title="Not referenced locally, nor via imports">s</span>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxRefresh_1124_1135" id="AjaxRefresh_2784_2795" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 43">AjaxRefresh</a>()).

  <a href="#ajaxStmtOk_1865_1875" id="ajaxStmtOk_2803_2813" title="Defined at line 49">ajaxStmtOk</a>(<a href="#s_2867_2868" id="s_2814_2815" title="Referenced at line 77, 77">s</a>, <a href="../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx#AjaxRunScript_1156_1169" id="AjaxRunScript_2817_2830" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Ajax-sig.stx line 44">AjaxRunScript</a>(<a href="#e_2870_2871" id="e_2831_2832" title="Referenced at line 77, 77">e</a>)) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_2842_2856" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_2857_2866" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_2814_2815" id="s_2867_2868" title="Defined at line 76">s</a>, <a href="#e_2831_2832" id="e_2870_2871" title="Defined at line 76">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_2874_2880" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_2814_2815" id="s_2881_2882" title="Defined at line 76">s</a>)) | <span class="keyword">error</span> $[Javascript code must be compatible with type String] @<a href="#e_2831_2832" id="e_2949_2950" title="Defined at line 76">e</a>.

  <a href="#ajaxPlaceholderExpressionOk_1970_1997" id="ajaxPlaceholderExpressionOk_2955_2982" title="Referenced at line 52, 57, 62, 68, 72, 80, 84">ajaxPlaceholderExpressionOk</a> : <span class="keyword">scope</span> * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2993_2996" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>
  <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_2999_3026" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_3065_3066" id="s_3027_3028" title="Referenced at line 81, 81">s</a>, <a href="#e_3068_3069" id="e_3030_3031" title="Referenced at line 81, 82">e</a>) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3040_3054" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3055_3064" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3027_3028" id="s_3065_3066" title="Defined at line 80">s</a>, <a href="#e_3030_3031" id="e_3068_3069" title="Defined at line 80">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_3072_3078" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_3027_3028" id="s_3079_3080" title="Defined at line 80">s</a>))
      | <span class="keyword">error</span> $[Expression should be compatible with type string or a placeholder variable] @<a href="#e_3030_3031" id="e_3176_3177" title="Defined at line 80">e</a>.

  <a href="#ajaxPlaceholderExpressionOk_2955_2982" id="ajaxPlaceholderExpressionOk_3182_3209" title="Defined at line 79">ajaxPlaceholderExpressionOk</a>(<a href="#s_3263_3264" id="s_3210_3211" title="Referenced at line 85, 86">s</a>, <a href="#e_3356_3357" id="e_3213_3214" title="Referenced at line 87">e</a>@<a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Var_3618_3621" id="Var_3215_3218" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 116">Var</a>(<a href="#ph_3266_3268" id="ph_3219_3221" title="Referenced at line 85">ph</a>)) :- { <a href="#s_next_3284_3290" id="s_next_3229_3235" title="Referenced at line 86, 86, 87">s_next</a> <a href="#r_3273_3274" id="r_3236_3237" title="Referenced at line 85, 87">r</a> }
    <a href="../../webdsl.stx#resolvePlaceholder_12336_12354" id="resolvePlaceholder_3244_3262" title="Defined at ../../webdsl.stx line 281">resolvePlaceholder</a>(<a href="#s_3210_3211" id="s_3263_3264" title="Defined at line 84">s</a>, <a href="#ph_3219_3221" id="ph_3266_3268" title="Defined at line 84">ph</a>) == <a href="#r_3236_3237" id="r_3273_3274" title="Defined at line 84">r</a>,
    <span class="keyword">new</span> <a href="#s_next_3229_3235" id="s_next_3284_3290" title="Defined at line 84">s_next</a>, <a href="#s_next_3229_3235" id="s_next_3292_3298" title="Defined at line 84">s_next</a> -<a href="../../webdsl.stx#P_1226_1227" id="P_3300_3301" title="Defined at ../../webdsl.stx line 45">P</a>-&gt; <a href="#s_3210_3211" id="s_3304_3305" title="Defined at line 84">s</a>,
    <a href="#ajaxPlaceholderExpressionResultOk_3363_3396" id="ajaxPlaceholderExpressionResultOk_3311_3344" title="Defined at line 89">ajaxPlaceholderExpressionResultOk</a>(<a href="#s_next_3229_3235" id="s_next_3345_3351" title="Defined at line 84">s_next</a>, <a href="#r_3236_3237" id="r_3353_3354" title="Defined at line 84">r</a>, <a href="#e_3213_3214" id="e_3356_3357" title="Defined at line 84">e</a>).

  <a href="#ajaxPlaceholderExpressionResultOk_3311_3344" id="ajaxPlaceholderExpressionResultOk_3363_3396" title="Referenced at line 87, 90, 91, 93">ajaxPlaceholderExpressionResultOk</a> : <span class="keyword">scope</span> * <span class="keyword">list</span>((<span class="keyword">path</span> * (<span class="keyword">string</span> * <a href="../../webdsl.stx#TYPE_669_673" id="TYPE_3430_3434" title="Defined at ../../webdsl.stx line 29">TYPE</a>))) * <a href="../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx#Exp_404_407" id="Exp_3440_3443" title="Defined at ../../../../src-gen/statix/signatures/WebDSL-Action-sig.stx line 25">Exp</a>
  <a href="#ajaxPlaceholderExpressionResultOk_3363_3396" id="ajaxPlaceholderExpressionResultOk_3446_3479" title="Defined at line 89">ajaxPlaceholderExpressionResultOk</a>(<span id="s_3480_3481" title="Not referenced locally, nor via imports">s</span>, <a href="#r_3530_3531" id="r_3483_3484" title="Referenced at line 90">r</a>, <a href="#e_3538_3539" id="e_3486_3487" title="Referenced at line 90">e</a>) :- <span class="keyword">false</span> | <span class="keyword">error</span> $[Unexpected input? r: [<a href="#r_3483_3484" id="r_3530_3531" title="Defined at line 90">r</a>], e: [<a href="#e_3486_3487" id="e_3538_3539" title="Defined at line 90">e</a>]].
  <a href="#ajaxPlaceholderExpressionResultOk_3363_3396" id="ajaxPlaceholderExpressionResultOk_3545_3578" title="Defined at line 89">ajaxPlaceholderExpressionResultOk</a>(<span id="s_3579_3580" title="Not referenced locally, nor via imports">s</span>, [_ | _], _).

  <a href="#ajaxPlaceholderExpressionResultOk_3363_3396" id="ajaxPlaceholderExpressionResultOk_3598_3631" title="Defined at line 89">ajaxPlaceholderExpressionResultOk</a>(<a href="#s_3674_3675" id="s_3632_3633" title="Referenced at line 94, 94">s</a>, [], <a href="#e_3677_3678" id="e_3639_3640" title="Referenced at line 94, 94, 94">e</a>) :-
    <a href="../../webdsl.stx#typeCompatible_17433_17447" id="typeCompatible_3649_3663" title="Defined at ../../webdsl.stx line 408">typeCompatible</a>(<a href="../../webdsl.stx#typeOfExp_16579_16588" id="typeOfExp_3664_3673" title="Defined at ../../webdsl.stx line 388">typeOfExp</a>(<a href="#s_3632_3633" id="s_3674_3675" title="Defined at line 93">s</a>, <a href="#e_3639_3640" id="e_3677_3678" title="Defined at line 93">e</a>), <a href="../../types/built-ins.stx#string_1822_1828" id="string_3681_3687" title="Defined at ../../types/built-ins.stx line 48">string</a>(<a href="#s_3632_3633" id="s_3688_3689" title="Defined at line 93">s</a>)) | <span class="keyword">error</span> $[Type of expression [<a href="#e_3639_3640" id="e_3722_3723" title="Defined at line 93">e</a>] is not compatible with String or Placeholder] @<a href="#e_3639_3640" id="e_3772_3773" title="Defined at line 93">e</a>.

</code></pre></td></tr></tbody></table></div>