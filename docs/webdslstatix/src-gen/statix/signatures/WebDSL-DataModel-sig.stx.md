---
title: WebDSL-DataModel-sig.stx
hide:
  - toc
---

# `WebDSL-DataModel-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-DataModel-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-DataModel-sig.stx "The source file on GitHub"

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
</pre></div></td>
<td class="code"><pre><code><span class="keyword">module</span> <a href="../WebDSL-AccessControl-sig.stx#signatures/WebDSL-DataModel-sig_114_145" id="signatures/WebDSL-DataModel-sig_7_38" title="Referenced at ../WebDSL-AccessControl-sig.stx line 6; ../WebDSL-Action-sig.stx line 5; ../WebDSL-Core-sig.stx line 5; ../WebDSL-DataValidation-sig.stx line 7; ../WebDSL-Expand-sig.stx line 8; ../WebDSL-Regex-sig.stx line 6; ../WebDSL-Search-sig.stx line 7; ../WebDSL-Service-sig.stx line 8; ../webdsl-statix-sig.stx line 9; ../WebDSL-Type-sig.stx line 5">signatures/WebDSL-DataModel-sig</a>

<span class="keyword">imports</span>
  <a href="../WebDSL-Action-sig.stx#signatures/WebDSL-Action-sig_7_35" id="signatures/WebDSL-Action-sig_50_78" title="Defined at ../WebDSL-Action-sig.stx line 1">signatures/WebDSL-Action-sig</a>
  <a href="../WebDSL-Core-sig.stx#signatures/WebDSL-Core-sig_7_33" id="signatures/WebDSL-Core-sig_81_107" title="Defined at ../WebDSL-Core-sig.stx line 1">signatures/WebDSL-Core-sig</a>
  <a href="../WebDSL-Lexical-sig.stx#signatures/WebDSL-Lexical-sig_7_36" id="signatures/WebDSL-Lexical-sig_110_139" title="Defined at ../WebDSL-Lexical-sig.stx line 1">signatures/WebDSL-Lexical-sig</a>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="#EntityBodyDeclaration_307_328" id="EntityBodyDeclaration_164_185" title="Referenced at line 18, 26, 27, 28, 29, 30, 43, 44, 45; ../WebDSL-AccessControl-sig.stx line 56; ../WebDSL-Action-sig.stx line 73, 74, 75, 76; ../WebDSL-DataValidation-sig.stx line 24; ../WebDSL-Expand-sig.stx line 41, 41; ../WebDSL-Generated-sig.stx line 20; ../WebDSL-Search-sig.stx line 168, 273; ../WebDSL-Service-sig.stx line 25; ../../../../trans/static-semantics/webdsl-entities.stx line 47, 68, 107">EntityBodyDeclaration</a>
    <a href="#OptPropAnnos_354_366" id="OptPropAnnos_190_202" title="Referenced at line 19, 43, 44, 46, 47">OptPropAnnos</a>
    <a href="#PropKind_388_396" id="PropKind_207_215" title="Referenced at line 20, 43, 44, 48, 49, 50, 51; ../../../../trans/static-semantics/webdsl-entities.stx line 150">PropKind</a>
    <a href="#Annotation_420_430" id="Annotation_220_230" title="Referenced at line 21, 46, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73; ../WebDSL-DataValidation-sig.stx line 19, 20, 21, 22, 23; ../WebDSL-Search-sig.stx line 152, 153, 154; ../WebDSL-Type-sig.stx line 22; ../../../../trans/static-semantics/entities/annotations.stx line 76">Annotation</a>
    <a href="#AnnotationId_1882_1894" id="AnnotationId_235_247" title="Referenced at line 52">AnnotationId</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="EntityBodyDeclaration-Plhdr_277_304" title="Not referenced locally, nor via imports">EntityBodyDeclaration-Plhdr</span> : <a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_307_328" title="Defined at line 11">EntityBodyDeclaration</a>
    <span id="OptPropAnnos-Plhdr_333_351" title="Not referenced locally, nor via imports">OptPropAnnos-Plhdr</span> : <a href="#OptPropAnnos_190_202" id="OptPropAnnos_354_366" title="Defined at line 12">OptPropAnnos</a>
    <span id="PropKind-Plhdr_371_385" title="Not referenced locally, nor via imports">PropKind-Plhdr</span> : <a href="#PropKind_207_215" id="PropKind_388_396" title="Defined at line 13">PropKind</a>
    <span id="Annotation-Plhdr_401_417" title="Not referenced locally, nor via imports">Annotation-Plhdr</span> : <a href="#Annotation_220_230" id="Annotation_420_430" title="Defined at line 14">Annotation</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Entity_563_569" id="Entity_462_468" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 23">Entity</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_471_473" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_476_478" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_486_507" title="Defined at line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_512_522" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#EntityNoSuper_1219_1232" id="EntityNoSuper_527_540" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 34">EntityNoSuper</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_543_545" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_553_574" title="Defined at line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_579_589" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#SessionEntity_1572_1585" id="SessionEntity_594_607" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 41">SessionEntity</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_610_612" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_620_641" title="Defined at line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_646_656" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#ExtendEntity_2609_2621" id="ExtendEntity_661_673" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 63">ExtendEntity</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_676_678" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_686_707" title="Defined at line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_712_722" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#ExtendSessionEntity_2727_2746" id="ExtendSessionEntity_727_746" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 66">ExtendSessionEntity</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_749_751" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <span class="keyword">list</span>(<a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_759_780" title="Defined at line 11">EntityBodyDeclaration</a>) -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_785_795" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#GlobalVarDecl_2963_2976" id="GlobalVarDecl_800_813" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 68">GlobalVarDecl</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_816_821" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_824_828" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_832_842" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="GlobalVarDeclDepr_847_864" title="Not referenced locally, nor via imports">GlobalVarDeclDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_867_872" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_875_879" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_883_893" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#GlobalVarDeclInit_3103_3120" id="GlobalVarDeclInit_898_915" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 73">GlobalVarDeclInit</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_918_923" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_926_930" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_933_936" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_940_950" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="GlobalVarDeclInitDepr_955_976" title="Not referenced locally, nor via imports">GlobalVarDeclInitDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_979_984" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_987_991" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_994_997" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1001_1011" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#GlobalVarDeclInitInferred_3401_3426" id="GlobalVarDeclInitInferred_1016_1041" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 80">GlobalVarDeclInitInferred</a> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1044_1049" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1052_1055" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1059_1069" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="GlobalVarDeclInitInferredDepr_1074_1103" title="Not referenced locally, nor via imports">GlobalVarDeclInitInferredDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1106_1111" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1114_1117" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1121_1131" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDecl_1136_1150" title="Not referenced locally, nor via imports">RequestVarDecl</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1153_1158" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1161_1165" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1169_1179" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDeclDepr_1184_1202" title="Not referenced locally, nor via imports">RequestVarDeclDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1205_1210" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1213_1217" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1221_1231" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDeclInit_1236_1254" title="Not referenced locally, nor via imports">RequestVarDeclInit</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1257_1262" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1265_1269" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1272_1275" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1279_1289" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDeclInitDepr_1294_1316" title="Not referenced locally, nor via imports">RequestVarDeclInitDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1319_1324" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1327_1331" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1334_1337" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1341_1351" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDeclInitInferred_1356_1382" title="Not referenced locally, nor via imports">RequestVarDeclInitInferred</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1385_1390" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1393_1396" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1400_1410" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <span id="RequestVarDeclInitInferredDepr_1415_1445" title="Not referenced locally, nor via imports">RequestVarDeclInitInferredDepr</span> : <a href="../WebDSL-Lexical-sig.stx#VarId_111_116" id="VarId_1448_1453" title="Defined at ../WebDSL-Lexical-sig.stx line 10">VarId</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1456_1459" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="../WebDSL-Core-sig.stx#Definition_310_320" id="Definition_1463_1473" title="Defined at ../WebDSL-Core-sig.stx line 20">Definition</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Property_5037_5045" id="Property_1478_1486" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 119">Property</a> : <a href="../WebDSL-Lexical-sig.stx#PropertyId_170_180" id="PropertyId_1489_1499" title="Defined at ../WebDSL-Lexical-sig.stx line 13">PropertyId</a> * <a href="#PropKind_207_215" id="PropKind_1502_1510" title="Defined at line 13">PropKind</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1513_1517" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#OptPropAnnos_190_202" id="OptPropAnnos_1520_1532" title="Defined at line 12">OptPropAnnos</a> -&gt; <a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1536_1557" title="Defined at line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#DerivedProperty_5597_5612" id="DerivedProperty_1562_1577" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 129">DerivedProperty</a> : <a href="../WebDSL-Lexical-sig.stx#PropertyId_170_180" id="PropertyId_1580_1590" title="Defined at ../WebDSL-Lexical-sig.stx line 13">PropertyId</a> * <a href="#PropKind_207_215" id="PropKind_1593_1601" title="Defined at line 13">PropKind</a> * <a href="../WebDSL-Core-sig.stx#Sort_280_284" id="Sort_1604_1608" title="Defined at ../WebDSL-Core-sig.stx line 17">Sort</a> * <a href="#OptPropAnnos_190_202" id="OptPropAnnos_1611_1623" title="Defined at line 12">OptPropAnnos</a> * <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_1626_1629" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1633_1654" title="Defined at line 11">EntityBodyDeclaration</a>
    <span id="CachedEntity_1659_1671" title="Not referenced locally, nor via imports">CachedEntity</span> : <a href="#EntityBodyDeclaration_164_185" id="EntityBodyDeclaration_1674_1695" title="Defined at line 11">EntityBodyDeclaration</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#PropAnnos_5065_5074" id="PropAnnos_1700_1709" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 119, 129">PropAnnos</a> : <span class="keyword">list</span>(<a href="#Annotation_220_230" id="Annotation_1717_1727" title="Defined at line 14">Annotation</a>) -&gt; <a href="#OptPropAnnos_190_202" id="OptPropAnnos_1732_1744" title="Defined at line 12">OptPropAnnos</a>
    <span id="OptPropAnnosNone_1749_1765" title="Not referenced locally, nor via imports">OptPropAnnosNone</span> : <a href="#OptPropAnnos_190_202" id="OptPropAnnos_1768_1780" title="Defined at line 12">OptPropAnnos</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Simple_6674_6680" id="Simple_1785_1791" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 151">Simple</a> : <a href="#PropKind_207_215" id="PropKind_1794_1802" title="Defined at line 13">PropKind</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Ref_6796_6799" id="Ref_1807_1810" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 154, 155, 156, 157">Ref</a> : <a href="#PropKind_207_215" id="PropKind_1813_1821" title="Defined at line 13">PropKind</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#Comp_7108_7112" id="Comp_1826_1830" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 160, 161, 162, 163">Comp</a> : <a href="#PropKind_207_215" id="PropKind_1833_1841" title="Defined at line 13">PropKind</a>
    <a href="../../../../trans/static-semantics/webdsl-entities.stx#AnyProp_7424_7431" id="AnyProp_1846_1853" title="Referenced at ../../../../trans/static-semantics/webdsl-entities.stx line 166, 167, 168, 169">AnyProp</a> : <a href="#PropKind_207_215" id="PropKind_1856_1864" title="Defined at line 13">PropKind</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#SimpleAnno_2475_2485" id="SimpleAnno_1869_1879" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 77">SimpleAnno</a> : <a href="#AnnotationId_235_247" id="AnnotationId_1882_1894" title="Defined at line 15">AnnotationId</a> -&gt; <a href="#Annotation_220_230" id="Annotation_1898_1908" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#TransientAnno_4067_4080" id="TransientAnno_1913_1926" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 91">TransientAnno</a> : <a href="#Annotation_220_230" id="Annotation_1929_1939" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#IdAnno_4156_4162" id="IdAnno_1944_1950" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 94">IdAnno</a> : <a href="#Annotation_220_230" id="Annotation_1953_1963" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#NameAnno_4586_4594" id="NameAnno_1968_1976" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 101">NameAnno</a> : <a href="#Annotation_220_230" id="Annotation_1979_1989" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#CacheAnno_4699_4708" id="CacheAnno_1994_2003" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 105">CacheAnno</a> : <a href="#Annotation_220_230" id="Annotation_2006_2016" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#InverseAnno_4904_4915" id="InverseAnno_2021_2032" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 109, 124, 137">InverseAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2035_2037" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2040_2042" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2046_2056" title="Defined at line 14">Annotation</a>
    <span id="IncompleteInverseAnno_2061_2082" title="Not referenced locally, nor via imports">IncompleteInverseAnno</span> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2085_2087" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2091_2101" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#InverseSlaveAnno_2602_2618" id="InverseSlaveAnno_2106_2122" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 78">InverseSlaveAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2125_2127" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> * <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2130_2132" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2136_2146" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#InverseReferenceOnlyAnno_6785_6809" id="InverseReferenceOnlyAnno_2151_2175" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 150">InverseReferenceOnlyAnno</a> : <a href="#Annotation_220_230" id="Annotation_2178_2188" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#InlineAnno_2738_2748" id="InlineAnno_2193_2203" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 79">InlineAnno</a> : <span class="keyword">list</span>(<a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2211_2213" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a>) -&gt; <a href="#Annotation_220_230" id="Annotation_2218_2228" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#SelectAnno_2865_2875" id="SelectAnno_2233_2243" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 80">SelectAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2246_2248" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2252_2262" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#NotNullAnno_7011_7022" id="NotNullAnno_2267_2278" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 154">NotNullAnno</a> : <a href="#Annotation_220_230" id="Annotation_2281_2291" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#NotEmptyAnno_7051_7063" id="NotEmptyAnno_2296_2308" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 155">NotEmptyAnno</a> : <a href="#Annotation_220_230" id="Annotation_2311_2321" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#AllowedAnno_7101_7112" id="AllowedAnno_2326_2337" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 156">AllowedAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2340_2343" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2347_2357" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#DefaultAnno_7398_7409" id="DefaultAnno_2362_2373" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 164">DefaultAnno</a> : <a href="../WebDSL-Action-sig.stx#Exp_404_407" id="Exp_2376_2379" title="Defined at ../WebDSL-Action-sig.stx line 25">Exp</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2383_2393" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#LengthAnno_7565_7575" id="LengthAnno_2398_2408" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 168">LengthAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Int_346_349" id="Int_2411_2414" title="Defined at ../WebDSL-Lexical-sig.stx line 22">Int</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2418_2428" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#FormatAnno_7605_7615" id="FormatAnno_2433_2443" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 169">FormatAnno</a> : <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_2446_2452" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2456_2466" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#IndexEmptyAnno_2992_3006" id="IndexEmptyAnno_2471_2485" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 81">IndexEmptyAnno</a> : <a href="#Annotation_220_230" id="Annotation_2488_2498" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#IndexAnno_3122_3131" id="IndexAnno_2503_2512" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 82">IndexAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Int_346_349" id="Int_2515_2518" title="Defined at ../WebDSL-Lexical-sig.stx line 22">Int</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2522_2532" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#CollationAnno_3248_3261" id="CollationAnno_2537_2550" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 83">CollationAnno</a> : <a href="../WebDSL-Lexical-sig.stx#Id_194_196" id="Id_2553_2555" title="Defined at ../WebDSL-Lexical-sig.stx line 14">Id</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2559_2569" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#IdErrorAnno_3378_3389" id="IdErrorAnno_2574_2585" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 84">IdErrorAnno</a> : <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_2588_2594" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2598_2608" title="Defined at line 14">Annotation</a>
    <a href="../../../../trans/static-semantics/entities/annotations.stx#IdEmptyErrorAnno_3506_3522" id="IdEmptyErrorAnno_2613_2629" title="Referenced at ../../../../trans/static-semantics/entities/annotations.stx line 85">IdEmptyErrorAnno</a> : <a href="../WebDSL-Lexical-sig.stx#String_478_484" id="String_2632_2638" title="Defined at ../WebDSL-Lexical-sig.stx line 28">String</a> -&gt; <a href="#Annotation_220_230" id="Annotation_2642_2652" title="Defined at line 14">Annotation</a>
</code></pre></td></tr></tbody></table></div>