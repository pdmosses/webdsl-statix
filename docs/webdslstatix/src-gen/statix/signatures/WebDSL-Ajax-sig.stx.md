---
title: WebDSL-Ajax-sig.stx
hide:
  - toc
---

# `WebDSL-Ajax-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Ajax-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Ajax-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-Ajax-sig_116_142" id="signatures/WebDSL-Ajax-sig_7_33" title="Referenced at ../webdsl-statix-sig.stx line 6">signatures/WebDSL-Ajax-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_45_73" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_76_105" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_108_132" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_135_161" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#AjaxStatement_384_397" id="AjaxStatement_186_199" title="Referenced at line 22, 33, 34, 35, 36, 40, 41, 42, 43, 44; ../../../../trans/static-semantics/ui/ajax.stx line 49">AjaxStatement</a>
    <a href="#Placeholder_422_433" id="Placeholder_204_215" title="Referenced at line 23, 47, 49, 50, 51, 52">Placeholder</a>
    <a href="#PlaceholderWithAjaxCall_470_493" id="PlaceholderWithAjaxCall_220_243" title="Referenced at line 24, 48, 53, 54, 55, 56">PlaceholderWithAjaxCall</a>
    <a href="#PlaceholderVar_521_535" id="PlaceholderVar_248_262" title="Referenced at line 25, 57, 58">PlaceholderVar</a>
    <a href="#AjaxVisibility_563_577" id="AjaxVisibility_267_281" title="Referenced at line 26, 36, 37, 38, 39">AjaxVisibility</a>
    <a href="#AjaxReplaceTemplateCall_614_637" id="AjaxReplaceTemplateCall_286_309" title="Referenced at line 27, 34, 45, 46">AjaxReplaceTemplateCall</a>
    <a href="#EmptyLex_1286_1294" id="EmptyLex_314_322" title="Referenced at line 46">EmptyLex</a> = <span class="keyword">string</span>
    <a href="#PHExp_656_661" id="PHExp_336_341" title="Referenced at line 28, 54, 56, 59, 60, 61, 62, 63, 64; ../../../../trans/static-semantics/webdsl.stx line 398">PHExp</a>

  <span class="keyword">constructors</span>
    <span id="AjaxStatement-Plhdr_362_381" title="Not referenced locally, nor via imports">AjaxStatement-Plhdr</span> : <a href="#AjaxStatement_186_199" id="AjaxStatement_384_397" title="Defined at line 12">AjaxStatement</a>
    <span id="Placeholder-Plhdr_402_419" title="Not referenced locally, nor via imports">Placeholder-Plhdr</span> : <a href="#Placeholder_204_215" id="Placeholder_422_433" title="Defined at line 13">Placeholder</a>
    <span id="PlaceholderWithAjaxCall-Plhdr_438_467" title="Not referenced locally, nor via imports">PlaceholderWithAjaxCall-Plhdr</span> : <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_470_493" title="Defined at line 14">PlaceholderWithAjaxCall</a>
    <span id="PlaceholderVar-Plhdr_498_518" title="Not referenced locally, nor via imports">PlaceholderVar-Plhdr</span> : <a href="#PlaceholderVar_248_262" id="PlaceholderVar_521_535" title="Defined at line 15">PlaceholderVar</a>
    <span id="AjaxVisibility-Plhdr_540_560" title="Not referenced locally, nor via imports">AjaxVisibility-Plhdr</span> : <a href="#AjaxVisibility_267_281" id="AjaxVisibility_563_577" title="Defined at line 16">AjaxVisibility</a>
    <span id="AjaxReplaceTemplateCall-Plhdr_582_611" title="Not referenced locally, nor via imports">AjaxReplaceTemplateCall-Plhdr</span> : <a href="#AjaxReplaceTemplateCall_286_309" id="AjaxReplaceTemplateCall_614_637" title="Defined at line 17">AjaxReplaceTemplateCall</a>
    <span id="PHExp-Plhdr_642_653" title="Not referenced locally, nor via imports">PHExp-Plhdr</span> : <a href="#PHExp_336_341" id="PHExp_656_661" title="Defined at line 19">PHExp</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxStatement_1814_1827" id="AjaxStatement_693_706" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 47">AjaxStatement</a> : <a href="#AjaxStatement_186_199" id="AjaxStatement_709_722" title="Defined at line 12">AjaxStatement</a> -&gt; <a href="../WebDSL-Core-sig.stx#Statement_350_359" id="Statement_726_735" title="Defined at ../WebDSL-Core-sig.stx line 23">Statement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxReplace_1917_1928" id="AjaxReplace_740_751" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 51">AjaxReplace</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_754_757" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#AjaxReplaceTemplateCall_286_309" id="AjaxReplaceTemplateCall_760_783" title="Defined at line 17">AjaxReplaceTemplateCall</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_787_800" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxAppend_2158_2168" id="AjaxAppend_805_815" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 56">AjaxAppend</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_818_821" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_824_836" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_840_853" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxVisibility_2373_2387" id="AjaxVisibility_858_872" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 61">AjaxVisibility</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_875_878" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="#AjaxVisibility_267_281" id="AjaxVisibility_881_895" title="Defined at line 16">AjaxVisibility</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_899_912" title="Defined at line 12">AjaxStatement</a>
    <span id="Show_917_921" title="Not referenced locally, nor via imports">Show</span> : <a href="#AjaxVisibility_267_281" id="AjaxVisibility_924_938" title="Defined at line 16">AjaxVisibility</a>
    <span id="Toggle_943_949" title="Not referenced locally, nor via imports">Toggle</span> : <a href="#AjaxVisibility_267_281" id="AjaxVisibility_952_966" title="Defined at line 16">AjaxVisibility</a>
    <span id="Hide_971_975" title="Not referenced locally, nor via imports">Hide</span> : <a href="#AjaxVisibility_267_281" id="AjaxVisibility_978_992" title="Defined at line 16">AjaxVisibility</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxRelocate_2456_2468" id="AjaxRelocate_997_1009" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 64">AjaxRelocate</a> : <a href="../WebDSL-UI-sig.stx#PageCall_290_298" id="PageCall_1012_1020" title="Defined at ../WebDSL-UI-sig.stx line 17">PageCall</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_1024_1037" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxRestyle_2517_2528" id="AjaxRestyle_1042_1053" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 67">AjaxRestyle</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1056_1059" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1062_1065" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_1069_1082" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxClear_2709_2718" id="AjaxClear_1087_1096" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 71">AjaxClear</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1099_1102" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_1106_1119" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxRefresh_2784_2795" id="AjaxRefresh_1124_1135" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 74">AjaxRefresh</a> : <a href="#AjaxStatement_186_199" id="AjaxStatement_1138_1151" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxRunScript_2817_2830" id="AjaxRunScript_1156_1169" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 76">AjaxRunScript</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1172_1175" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AjaxStatement_186_199" id="AjaxStatement_1179_1192" title="Defined at line 12">AjaxStatement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#AjaxReplaceTemplateCall_1933_1956" id="AjaxReplaceTemplateCall_1197_1220" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 51">AjaxReplaceTemplateCall</a> : <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_1223_1235" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#AjaxReplaceTemplateCall_286_309" id="AjaxReplaceTemplateCall_1239_1262" title="Defined at line 17">AjaxReplaceTemplateCall</a>
    <span id="AjaxReplaceEmpty_1267_1283" title="Not referenced locally, nor via imports">AjaxReplaceEmpty</span> : <a href="#EmptyLex_314_322" id="EmptyLex_1286_1294" title="Defined at line 18">EmptyLex</a> -&gt; <a href="#AjaxReplaceTemplateCall_286_309" id="AjaxReplaceTemplateCall_1298_1321" title="Defined at line 17">AjaxReplaceTemplateCall</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#TEPlaceholder_236_249" id="TEPlaceholder_1326_1339" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 13, 17, 21, 25">TEPlaceholder</a> : <a href="#Placeholder_204_215" id="Placeholder_1342_1353" title="Defined at line 13">Placeholder</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1357_1372" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#TEPlaceholderWithAjaxCall_998_1023" id="TEPlaceholderWithAjaxCall_1377_1402" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 29, 33, 37, 41">TEPlaceholderWithAjaxCall</a> : <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_1405_1428" title="Defined at line 14">PlaceholderWithAjaxCall</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1432_1447" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderHtml_250_265" id="PlaceholderHtml_1452_1467" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 13">PlaceholderHtml</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1470_1472" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1475_1477" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1485_1500" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#Placeholder_204_215" id="Placeholder_1505_1516" title="Defined at line 13">Placeholder</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderHtmlExp_409_427" id="PlaceholderHtmlExp_1521_1539" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 17">PlaceholderHtmlExp</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1542_1544" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1547_1550" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1558_1573" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#Placeholder_204_215" id="Placeholder_1578_1589" title="Defined at line 13">Placeholder</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#Placeholder_638_649" id="Placeholder_1594_1605" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 21">Placeholder</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1608_1610" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1618_1633" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#Placeholder_204_215" id="Placeholder_1638_1649" title="Defined at line 13">Placeholder</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderExp_790_804" id="PlaceholderExp_1654_1668" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 25">PlaceholderExp</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1671_1674" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_1682_1697" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>) -&gt; <a href="#Placeholder_204_215" id="Placeholder_1702_1713" title="Defined at line 13">Placeholder</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderAjaxHtml_1024_1043" id="PlaceholderAjaxHtml_1718_1737" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 29">PlaceholderAjaxHtml</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1740_1742" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1745_1747" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_1750_1762" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_1766_1789" title="Defined at line 14">PlaceholderWithAjaxCall</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderAjaxHtmlExp_1189_1211" id="PlaceholderAjaxHtmlExp_1794_1816" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 33">PlaceholderAjaxHtmlExp</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1819_1821" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="#PHExp_336_341" id="PHExp_1824_1829" title="Defined at line 19">PHExp</a> * <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_1832_1844" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_1848_1871" title="Defined at line 14">PlaceholderWithAjaxCall</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderAjax_1435_1450" id="PlaceholderAjax_1876_1891" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 37">PlaceholderAjax</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1894_1896" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_1899_1911" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_1915_1938" title="Defined at line 14">PlaceholderWithAjaxCall</a>
    <a href="../../../../trans/static-semantics/ui/ajax.stx#PlaceholderAjaxExp_1593_1611" id="PlaceholderAjaxExp_1943_1961" title="Referenced at ../../../../trans/static-semantics/ui/ajax.stx line 41">PlaceholderAjaxExp</a> : <a href="#PHExp_336_341" id="PHExp_1964_1969" title="Defined at line 19">PHExp</a> * <a href="../WebDSL-UI-sig.stx#TemplateCall_303_315" id="TemplateCall_1972_1984" title="Defined at ../WebDSL-UI-sig.stx line 18">TemplateCall</a> -&gt; <a href="#PlaceholderWithAjaxCall_220_243" id="PlaceholderWithAjaxCall_1988_2011" title="Defined at line 14">PlaceholderWithAjaxCall</a>
    <span id="PlaceholderVar2TemplateElement_2016_2046" title="Not referenced locally, nor via imports">PlaceholderVar2TemplateElement</span> : <a href="#PlaceholderVar_248_262" id="PlaceholderVar_2049_2063" title="Defined at line 15">PlaceholderVar</a> -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_2067_2082" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="PlaceholderVar_2087_2101" title="Not referenced locally, nor via imports">PlaceholderVar</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2104_2106" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#PlaceholderVar_248_262" id="PlaceholderVar_2110_2124" title="Defined at line 15">PlaceholderVar</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#PHThisCall_481_491" id="PHThisCall_2129_2139" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 19">PHThisCall</a> : <a href="../WebDSL-Action-sig.stx#ThisCall_472_480" id="ThisCall_2142_2150" title="Defined at ../WebDSL-Action-sig.stx line 29">ThisCall</a> -&gt; <a href="#PHExp_336_341" id="PHExp_2154_2159" title="Defined at line 19">PHExp</a>
    <a href="../../../../trans/static-semantics/actions/functions.stx#PHCall_971_977" id="PHCall_2164_2170" title="Referenced at ../../../../trans/static-semantics/actions/functions.stx line 32">PHCall</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2173_2176" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2179_2181" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2189_2192" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a>) -&gt; <a href="#PHExp_336_341" id="PHExp_2197_2202" title="Defined at line 19">PHExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#PHFieldAccess_10642_10655" id="PHFieldAccess_2207_2220" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 255">PHFieldAccess</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2223_2226" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Lexical-sig.stx#PropertyId_170_180" id="PropertyId_2229_2239" title="Defined at ../WebDSL-Lexical-sig.stx line 13">PropertyId</a> -&gt; <a href="#PHExp_336_341" id="PHExp_2243_2248" title="Defined at line 19">PHExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#PHCollectionIndex_12615_12632" id="PHCollectionIndex_2253_2270" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 296">PHCollectionIndex</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2273_2276" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2279_2282" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PHExp_336_341" id="PHExp_2286_2291" title="Defined at line 19">PHExp</a>
    <a href="../../../../trans/static-semantics/actions/binops.stx#PHAdd_305_310" id="PHAdd_2296_2301" title="Referenced at ../../../../trans/static-semantics/actions/binops.stx line 15">PHAdd</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2304_2307" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2310_2313" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#PHExp_336_341" id="PHExp_2317_2322" title="Defined at line 19">PHExp</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#PHConst_1600_1607" id="PHConst_2327_2334" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 65">PHConst</a> : <a href="../WebDSL-Action-sig.stx#ConstValue_389_399" id="ConstValue_2337_2347" title="Defined at ../WebDSL-Action-sig.stx line 24">ConstValue</a> -&gt; <a href="#PHExp_336_341" id="PHExp_2351_2356" title="Defined at line 19">PHExp</a>
</code></pre></td></tr></tbody></table></div>