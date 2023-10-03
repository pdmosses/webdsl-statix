---
title: WebDSL-AccessControl-sig.stx
hide:
  - toc
---

# `WebDSL-AccessControl-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-AccessControl-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-AccessControl-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../webdsl-statix-sig.stx#signatures/WebDSL-AccessControl-sig_47_82" id="signatures/WebDSL-AccessControl-sig_7_42" title="Referenced at ../webdsl-statix-sig.stx line 4">signatures/WebDSL-AccessControl-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_54_82" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_85_111" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-DataModel-sig.stx#signatures/WebDSL-DataModel-sig_7_38" id="signatures/WebDSL-DataModel-sig_114_145" title="Defined at ../WebDSL-DataModel-sig.stx line 1">signatures/WebDSL-DataModel-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_148_177" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>
  <a href="../WebDSL-UI-sig.stx#signatures/WebDSL-UI-sig_7_31" id="signatures/WebDSL-UI-sig_180_204" title="Defined at ../WebDSL-UI-sig.stx line 1">signatures/WebDSL-UI-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#OptMatchArgs_477_489" id="OptMatchArgs_229_241" title="Referenced at line 25, 49, 60, 61; ../../../../trans/static-semantics/webdsl-ac.stx line 132">OptMatchArgs</a>
    <a href="#OptId_508_513" id="OptId_246_251" title="Referenced at line 26, 41, 42, 62, 63">OptId</a>
    <a href="#OptWildCardArg_541_555" id="OptWildCardArg_256_270" title="Referenced at line 27, 40, 51, 60, 64, 65; ../../../../trans/static-semantics/webdsl-ac.stx line 244">OptWildCardArg</a>
    <a href="#AccessControlDefinition_592_615" id="AccessControlDefinition_275_298" title="Referenced at line 28, 41, 42, 45, 46, 47, 48; ../../../../trans/static-semantics/webdsl-ac.stx line 58">AccessControlDefinition</a>
    <a href="#AccessControlRule_646_663" id="AccessControlRule_303_320" title="Referenced at line 29, 48, 49, 49, 50; ../../../../trans/static-semantics/webdsl-ac.stx line 95, 118">AccessControlRule</a>
    <a href="#AccessControlPointcutElement_705_733" id="AccessControlPointcutElement_325_353" title="Referenced at line 30, 47, 51; ../../../../trans/static-semantics/webdsl-ac.stx line 216, 222, 283">AccessControlPointcutElement</a>
    <a href="#AccessControlImportRulesArg_774_801" id="AccessControlImportRulesArg_358_385" title="Referenced at line 31, 58, 59">AccessControlImportRulesArg</a>
    <a href="#PolicyExp_824_833" id="PolicyExp_390_399" title="Referenced at line 32, 52, 53, 54, 54, 54, 55, 55, 55">PolicyExp</a>
    <a href="#MatchName_856_865" id="MatchName_404_413" title="Referenced at line 33, 39, 40, 49, 51; ../../../../trans/static-semantics/webdsl-ac.stx line 132">MatchName</a>
    <a href="#AccessControlType_896_913" id="AccessControlType_418_435" title="Referenced at line 34, 49, 51, 66, 67, 68, 69, 70; ../../../../trans/static-semantics/webdsl-ac.stx line 132">AccessControlType</a>

  <span class="keyword">constructors</span>
    <span id="OptMatchArgs-Plhdr_456_474" title="Not referenced locally, nor via imports">OptMatchArgs-Plhdr</span> : <a href="#OptMatchArgs_229_241" id="OptMatchArgs_477_489" title="Defined at line 13">OptMatchArgs</a>
    <span id="OptId-Plhdr_494_505" title="Not referenced locally, nor via imports">OptId-Plhdr</span> : <a href="#OptId_246_251" id="OptId_508_513" title="Defined at line 14">OptId</a>
    <span id="OptWildCardArg-Plhdr_518_538" title="Not referenced locally, nor via imports">OptWildCardArg-Plhdr</span> : <a href="#OptWildCardArg_256_270" id="OptWildCardArg_541_555" title="Defined at line 15">OptWildCardArg</a>
    <span id="AccessControlDefinition-Plhdr_560_589" title="Not referenced locally, nor via imports">AccessControlDefinition-Plhdr</span> : <a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_592_615" title="Defined at line 16">AccessControlDefinition</a>
    <span id="AccessControlRule-Plhdr_620_643" title="Not referenced locally, nor via imports">AccessControlRule-Plhdr</span> : <a href="#AccessControlRule_303_320" id="AccessControlRule_646_663" title="Defined at line 17">AccessControlRule</a>
    <span id="AccessControlPointcutElement-Plhdr_668_702" title="Not referenced locally, nor via imports">AccessControlPointcutElement-Plhdr</span> : <a href="#AccessControlPointcutElement_325_353" id="AccessControlPointcutElement_705_733" title="Defined at line 18">AccessControlPointcutElement</a>
    <span id="AccessControlImportRulesArg-Plhdr_738_771" title="Not referenced locally, nor via imports">AccessControlImportRulesArg-Plhdr</span> : <a href="#AccessControlImportRulesArg_358_385" id="AccessControlImportRulesArg_774_801" title="Defined at line 19">AccessControlImportRulesArg</a>
    <span id="PolicyExp-Plhdr_806_821" title="Not referenced locally, nor via imports">PolicyExp-Plhdr</span> : <a href="#PolicyExp_390_399" id="PolicyExp_824_833" title="Defined at line 20">PolicyExp</a>
    <span id="MatchName-Plhdr_838_853" title="Not referenced locally, nor via imports">MatchName-Plhdr</span> : <a href="#MatchName_404_413" id="MatchName_856_865" title="Defined at line 21">MatchName</a>
    <span id="AccessControlType-Plhdr_870_893" title="Not referenced locally, nor via imports">AccessControlType-Plhdr</span> : <a href="#AccessControlType_418_435" id="AccessControlType_896_913" title="Defined at line 22">AccessControlType</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#MatchNameWildCard_7018_7035" id="MatchNameWildCard_945_962" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 136">MatchNameWildCard</a> : <a href="#MatchName_404_413" id="MatchName_965_974" title="Defined at line 21">MatchName</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#MatchName_7069_7078" id="MatchName_979_988" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 137, 139, 142, 149, 152, 158, 161, 167, 170, 223, 227, 232, 237">MatchName</a> : <a href="../WebDSL-Lexical-sig.stx#PageId_210_216" id="PageId_991_997" title="Defined at ../WebDSL-Lexical-sig.stx line 15">PageId</a> * <a href="#OptWildCardArg_256_270" id="OptWildCardArg_1000_1014" title="Defined at line 15">OptWildCardArg</a> -&gt; <a href="#MatchName_404_413" id="MatchName_1018_1027" title="Defined at line 21">MatchName</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlDefinition_2164_2187" id="AccessControlDefinition_1032_1055" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 55">AccessControlDefinition</a> : <a href="#OptId_246_251" id="OptId_1058_1063" title="Defined at line 14">OptId</a> * <span class="keyword">list</span>(<a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1071_1094" title="Defined at line 16">AccessControlDefinition</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Section_298_305" id="Section_1099_1106" title="Defined at ../WebDSL-Core-sig.stx line 19">Section</a>
    <span id="AccessControlDefinitionAlt_1111_1137" title="Not referenced locally, nor via imports">AccessControlDefinitionAlt</span> : <a href="#OptId_246_251" id="OptId_1140_1145" title="Defined at line 14">OptId</a> * <span class="keyword">list</span>(<a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1153_1176" title="Defined at line 16">AccessControlDefinition</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Section_298_305" id="Section_1181_1188" title="Defined at ../WebDSL-Core-sig.stx line 19">Section</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#Predicate_10741_10750" id="Predicate_1193_1202" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 184">Predicate</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1205_1207" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_1210_1223" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1226_1229" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1233_1243" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlPrincipalDef_2441_2466" id="AccessControlPrincipalDef_1248_1273" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 63">AccessControlPrincipalDef</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1276_1278" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1286_1288" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1293_1303" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#PredicateAc_10820_10831" id="PredicateAc_1308_1319" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 185">PredicateAc</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1322_1324" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_1327_1340" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1343_1346" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1350_1373" title="Defined at line 16">AccessControlDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlPrincipalAcDef_2537_2564" id="AccessControlPrincipalAcDef_1378_1405" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 64">AccessControlPrincipalAcDef</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1408_1410" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1418_1420" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a>) -&gt; <a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1425_1448" title="Defined at line 16">AccessControlDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlPointcut_12244_12265" id="AccessControlPointcut_1453_1474" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 208">AccessControlPointcut</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1477_1479" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_1487_1496" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a>) * <span class="keyword">list</span>(<a href="#AccessControlPointcutElement_325_353" id="AccessControlPointcutElement_1505_1533" title="Defined at line 18">AccessControlPointcutElement</a>) -&gt; <a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1538_1561" title="Defined at line 16">AccessControlDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#Rule_4218_4222" id="Rule_1566_1570" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 93">Rule</a> : <a href="#AccessControlRule_303_320" id="AccessControlRule_1573_1590" title="Defined at line 17">AccessControlRule</a> -&gt; <a href="#AccessControlDefinition_275_298" id="AccessControlDefinition_1594_1617" title="Defined at line 16">AccessControlDefinition</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlRule_4396_4413" id="AccessControlRule_1622_1639" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 97, 120, 121">AccessControlRule</a> : <a href="#AccessControlType_418_435" id="AccessControlType_1642_1659" title="Defined at line 22">AccessControlType</a> * <a href="#MatchName_404_413" id="MatchName_1662_1671" title="Defined at line 21">MatchName</a> * <a href="#OptMatchArgs_229_241" id="OptMatchArgs_1674_1686" title="Defined at line 13">OptMatchArgs</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1689_1692" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> * <span class="keyword">list</span>(<a href="#AccessControlRule_303_320" id="AccessControlRule_1700_1717" title="Defined at line 17">AccessControlRule</a>) -&gt; <a href="#AccessControlRule_303_320" id="AccessControlRule_1722_1739" title="Defined at line 17">AccessControlRule</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#SpecialAccessControlRule_5120_5144" id="SpecialAccessControlRule_1744_1768" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 109, 128">SpecialAccessControlRule</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1771_1774" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#AccessControlRule_303_320" id="AccessControlRule_1778_1795" title="Defined at line 17">AccessControlRule</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#AccessControlPointcutElement_12733_12761" id="AccessControlPointcutElement_1800_1828" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 217, 223, 224, 227, 232, 237, 242">AccessControlPointcutElement</a> : <a href="#AccessControlType_418_435" id="AccessControlType_1831_1848" title="Defined at line 22">AccessControlType</a> * <a href="#MatchName_404_413" id="MatchName_1851_1860" title="Defined at line 21">MatchName</a> * <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1868_1870" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a>) * <a href="#OptWildCardArg_256_270" id="OptWildCardArg_1874_1888" title="Defined at line 15">OptWildCardArg</a> -&gt; <a href="#AccessControlPointcutElement_325_353" id="AccessControlPointcutElement_1892_1920" title="Defined at line 18">AccessControlPointcutElement</a>
    <a href="../../../../trans/static-semantics/webdsl.stx#ACPolicy_15305_15313" id="ACPolicy_1925_1933" title="Referenced at ../../../../trans/static-semantics/webdsl.stx line 352">ACPolicy</a> : <a href="#PolicyExp_390_399" id="PolicyExp_1936_1945" title="Defined at line 20">PolicyExp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Section_298_305" id="Section_1949_1956" title="Defined at ../WebDSL-Core-sig.stx line 19">Section</a>
    <span id="Name_1961_1965" title="Not referenced locally, nor via imports">Name</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_1968_1970" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#PolicyExp_390_399" id="PolicyExp_1974_1983" title="Defined at line 20">PolicyExp</a>
    <span id="PolicyAnd_1988_1997" title="Not referenced locally, nor via imports">PolicyAnd</span> : <a href="#PolicyExp_390_399" id="PolicyExp_2000_2009" title="Defined at line 20">PolicyExp</a> * <a href="#PolicyExp_390_399" id="PolicyExp_2012_2021" title="Defined at line 20">PolicyExp</a> -&gt; <a href="#PolicyExp_390_399" id="PolicyExp_2025_2034" title="Defined at line 20">PolicyExp</a>
    <span id="PolicyOr_2039_2047" title="Not referenced locally, nor via imports">PolicyOr</span> : <a href="#PolicyExp_390_399" id="PolicyExp_2050_2059" title="Defined at line 20">PolicyExp</a> * <a href="#PolicyExp_390_399" id="PolicyExp_2062_2071" title="Defined at line 20">PolicyExp</a> -&gt; <a href="#PolicyExp_390_399" id="PolicyExp_2075_2084" title="Defined at line 20">PolicyExp</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#PredicateInEntity_10922_10939" id="PredicateInEntity_2089_2106" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 186">PredicateInEntity</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2109_2111" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Core-sig.stx#OptFormalArgs_178_191" id="OptFormalArgs_2114_2127" title="Defined at ../WebDSL-Core-sig.stx line 12">OptFormalArgs</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2130_2133" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-DataModel-sig.stx#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_2137_2158" title="Defined at ../WebDSL-DataModel-sig.stx line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-ui.stx#IgnoreAccessControl_2437_2456" id="IgnoreAccessControl_2163_2182" title="Referenced at ../../../../trans/static-semantics/webdsl-ui.stx line 54, 82">IgnoreAccessControl</a> : <a href="../WebDSL-UI-sig.stx#Modifier_243_251" id="Modifier_2185_2193" title="Defined at ../WebDSL-UI-sig.stx line 14">Modifier</a>
    <span id="AccessControlImportRules_2198_2222" title="Not referenced locally, nor via imports">AccessControlImportRules</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2225_2227" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#AccessControlImportRulesArg_358_385" id="AccessControlImportRulesArg_2235_2262" title="Defined at line 19">AccessControlImportRulesArg</a>) -&gt; <a href="../WebDSL-UI-sig.stx#TemplateElement_256_271" id="TemplateElement_2267_2282" title="Defined at ../WebDSL-UI-sig.stx line 15">TemplateElement</a>
    <span id="ACVar_2287_2292" title="Not referenced locally, nor via imports">ACVar</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2295_2297" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#AccessControlImportRulesArg_358_385" id="AccessControlImportRulesArg_2301_2328" title="Defined at line 19">AccessControlImportRulesArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#MatchArgs_4424_4433" id="MatchArgs_2333_2342" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 97, 121, 139, 142, 149, 152, 158, 161, 167, 170">MatchArgs</a> : <span class="keyword">list</span>(<a href="../WebDSL-Core-sig.stx#FormalArg_164_173" id="FormalArg_2350_2359" title="Defined at ../WebDSL-Core-sig.stx line 11">FormalArg</a>) * <a href="#OptWildCardArg_256_270" id="OptWildCardArg_2363_2377" title="Defined at line 15">OptWildCardArg</a> -&gt; <a href="#OptMatchArgs_229_241" id="OptMatchArgs_2381_2393" title="Defined at line 13">OptMatchArgs</a>
    <span id="OptMatchArgsNone_2398_2414" title="Not referenced locally, nor via imports">OptMatchArgsNone</span> : <a href="#OptMatchArgs_229_241" id="OptMatchArgs_2417_2429" title="Defined at line 13">OptMatchArgs</a>
    <span id="Id_2434_2436" title="Not referenced locally, nor via imports">Id</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2439_2441" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#OptId_246_251" id="OptId_2445_2450" title="Defined at line 14">OptId</a>
    <span id="OptIdNone_2455_2464" title="Not referenced locally, nor via imports">OptIdNone</span> : <a href="#OptId_246_251" id="OptId_2467_2472" title="Defined at line 14">OptId</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#WildCardArg_7082_7093" id="WildCardArg_2477_2488" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 137, 139, 149, 158, 167, 223, 246">WildCardArg</a> : <a href="#OptWildCardArg_256_270" id="OptWildCardArg_2491_2505" title="Defined at line 15">OptWildCardArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#OptWildCardArgNone_7153_7171" id="OptWildCardArgNone_2510_2528" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 139, 142, 142, 149, 152, 152, 158, 161, 161, 167, 170, 170, 247">OptWildCardArgNone</a> : <a href="#OptWildCardArg_256_270" id="OptWildCardArg_2531_2545" title="Defined at line 15">OptWildCardArg</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#ACTypePage_7126_7136" id="ACTypePage_2550_2560" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 139, 142, 227">ACTypePage</a> : <a href="#AccessControlType_418_435" id="AccessControlType_2563_2580" title="Defined at line 22">AccessControlType</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#ACTypeAction_6068_6080" id="ACTypeAction_2585_2597" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 121, 147, 242">ACTypeAction</a> : <a href="#AccessControlType_418_435" id="AccessControlType_2600_2617" title="Defined at line 22">AccessControlType</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#ACTypeTemplate_7834_7848" id="ACTypeTemplate_2622_2636" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 149, 152, 232">ACTypeTemplate</a> : <a href="#AccessControlType_418_435" id="AccessControlType_2639_2656" title="Defined at line 22">AccessControlType</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#ACTypeAjaxTemplate_8739_8757" id="ACTypeAjaxTemplate_2661_2679" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 158, 161, 237">ACTypeAjaxTemplate</a> : <a href="#AccessControlType_418_435" id="AccessControlType_2682_2699" title="Defined at line 22">AccessControlType</a>
    <a href="../../../../trans/static-semantics/webdsl-ac.stx#ACTypePointcut_9653_9667" id="ACTypePointcut_2704_2718" title="Referenced at ../../../../trans/static-semantics/webdsl-ac.stx line 167, 170">ACTypePointcut</a> : <a href="#AccessControlType_418_435" id="AccessControlType_2721_2738" title="Defined at line 22">AccessControlType</a>
</code></pre></td></tr></tbody></table></div>