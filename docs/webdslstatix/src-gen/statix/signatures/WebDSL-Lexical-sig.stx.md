---
title: WebDSL-Lexical-sig.stx
hide:
  - toc
---

# `WebDSL-Lexical-sig.stx`



[pdmosses/webdsl-statix/webdslstatix/src-gen/statix/signatures/WebDSL-Lexical-sig.stx]: https://github.com/pdmosses/webdsl-statix/blob/master/webdslstatix/src-gen/statix/signatures/WebDSL-Lexical-sig.stx "The source file on GitHub"

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
<td class="code"><pre><code><span class="keyword">module</span> <a href="../HQL-sig.stx#signatures/WebDSL-Lexical-sig_68_97" id="signatures/WebDSL-Lexical-sig_7_36" title="Referenced at ../HQL-sig.stx line 5; ../WebDSL-AccessControl-sig.stx line 7; ../WebDSL-Action-sig.stx line 6; ../WebDSL-Ajax-sig.stx line 5; ../WebDSL-Attributes-sig.stx line 5; ../WebDSL-Core-sig.stx line 6; ../WebDSL-DataModel-sig.stx line 6; ../WebDSL-DataValidation-sig.stx line 5; ../WebDSL-Dispatch-sig.stx line 6; ../WebDSL-EntityDerive-sig.stx line 6; ../WebDSL-Exception-sig.stx line 6; ../WebDSL-Expand-sig.stx line 5; ../WebDSL-Generated-sig.stx line 5; ../WebDSL-Native-sig.stx line 5; ../WebDSL-Prefetch-sig.stx line 6; ../WebDSL-Regex-sig.stx line 5; ../WebDSL-Search-sig.stx line 6; ../WebDSL-Service-sig.stx line 6; ../webdsl-statix-sig.stx line 17; ../WebDSL-Test-sig.stx line 5; ../WebDSL-Type-sig.stx line 6; ../WebDSL-UI-sig.stx line 7">signatures/WebDSL-Lexical-sig</a>

<span class="keyword">imports</span>

<span class="keyword">signature</span>

  <span class="keyword">sorts</span>
    <a href="../WebDSL-Core-sig.stx#QId_1714_1717" id="QId_70_73" title="Referenced at ../WebDSL-Core-sig.stx line 62, 63; ../WebDSL-Native-sig.stx line 33, 34, 46, 49">QId</a> = <span class="keyword">string</span>
    <a href="../WebDSL-UI-sig.stx#TemplateId_3008_3018" id="TemplateId_87_97" title="Referenced at ../WebDSL-UI-sig.stx line 105, 106, 106, 111, 237, 238">TemplateId</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#VarId_2366_2371" id="VarId_111_116" title="Referenced at ../WebDSL-Action-sig.stx line 88, 89, 90, 106, 107, 108, 109, 116, 158, 159, 160, 161, 162, 163, 164, 165, 166; ../WebDSL-Core-sig.stx line 53, 56; ../WebDSL-DataModel-sig.stx line 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42; ../WebDSL-Exception-sig.stx line 24; ../WebDSL-Prefetch-sig.stx line 81; ../WebDSL-UI-sig.stx line 131, 132, 133, 134, 135, 136, 157, 158, 159, 160">VarId</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#FAVarId_3783_3790" id="FAVarId_130_137" title="Referenced at ../WebDSL-Action-sig.stx line 121">FAVarId</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#FunId_1379_1384" id="FunId_151_156" title="Referenced at ../WebDSL-Action-sig.stx line 67, 78, 79, 80, 136">FunId</a> = <span class="keyword">string</span>
    <a href="#PropertyId_1721_1731" id="PropertyId_170_180" title="Referenced at line 70; ../WebDSL-Action-sig.stx line 117; ../WebDSL-Ajax-sig.stx line 61; ../WebDSL-DataModel-sig.stx line 43, 44; ../WebDSL-Prefetch-sig.stx line 82">PropertyId</a> = <span class="keyword">string</span>
    <a href="#Id_1669_1671" id="Id_194_196" title="Referenced at line 69; ../WebDSL-AccessControl-sig.stx line 43, 44, 44, 45, 46, 46, 47, 51, 53, 56, 58, 59, 62; ../WebDSL-Action-sig.stx line 101, 127, 137, 144, 190; ../WebDSL-Ajax-sig.stx line 49, 49, 50, 51, 53, 53, 54, 55, 58, 60; ../WebDSL-Attributes-sig.stx line 29; ../WebDSL-Core-sig.stx line 75, 76; ../WebDSL-DataModel-sig.stx line 26, 26, 27, 28, 29, 30, 57, 57, 58, 59, 59, 61, 62, 71; ../WebDSL-DataValidation-sig.stx line 23, 26, 27; ../WebDSL-Dispatch-sig.stx line 29, 30, 37, 38; ../WebDSL-EntityDerive-sig.stx line 23, 24, 25; ../WebDSL-Expand-sig.stx line 28, 29, 30, 31, 32, 33, 34, 34, 36, 37, 38, 39; ../WebDSL-Generated-sig.stx line 18; ../WebDSL-Native-sig.stx line 35, 37, 39, 50, 53; ../WebDSL-Prefetch-sig.stx line 46, 47, 51, 58; ../WebDSL-Regex-sig.stx line 108; ../WebDSL-Search-sig.stx line 137, 144, 145, 146, 149, 167, 169, 170, 173, 174, 175, 176, 178, 274, 275, 276; ../WebDSL-Service-sig.stx line 23, 24, 24, 27, 28; ../WebDSL-Test-sig.stx line 17; ../WebDSL-Type-sig.stx line 21; ../WebDSL-UI-sig.stx line 102, 109, 112, 235, 240, 241, 243, 244, 245, 246, 257, 257">Id</a> = <span class="keyword">string</span>
    <a href="../WebDSL-AccessControl-sig.stx#PageId_991_997" id="PageId_210_216" title="Referenced at ../WebDSL-AccessControl-sig.stx line 40; ../WebDSL-UI-sig.stx line 110, 191">PageId</a> = <span class="keyword">string</span>
    <a href="#ExtendedId_1197_1207" id="ExtendedId_230_240" title="Referenced at line 59">ExtendedId</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Core-sig.stx#SectionName_1650_1661" id="SectionName_254_265" title="Referenced at ../WebDSL-Core-sig.stx line 61">SectionName</a> = <span class="keyword">string</span>
    <a href="#ModuleName_846_856" id="ModuleName_279_289" title="Referenced at line 46, 62, 63; ../WebDSL-Core-sig.stx line 64, 65">ModuleName</a>
    <a href="#ModulePart_880_890" id="ModulePart_294_304" title="Referenced at line 47, 59, 62; ../../../../trans/static-semantics/webdsl-modules.stx line 120">ModulePart</a>
    <a href="#ImportName_914_924" id="ImportName_309_319" title="Referenced at line 48, 63; ../WebDSL-Core-sig.stx line 71">ImportName</a>
    <a href="#OptWildcardImport_955_972" id="OptWildcardImport_324_341" title="Referenced at line 49, 60, 61, 63">OptWildcardImport</a>
    <a href="../WebDSL-Action-sig.stx#Int_3495_3498" id="Int_346_349" title="Referenced at ../WebDSL-Action-sig.stx line 112; ../WebDSL-DataModel-sig.stx line 67, 70; ../WebDSL-Search-sig.stx line 180, 181">Int</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#Long_3524_3528" id="Long_363_367" title="Referenced at ../WebDSL-Action-sig.stx line 113">Long</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#Float_3555_3560" id="Float_381_386" title="Referenced at ../WebDSL-Action-sig.stx line 114; ../WebDSL-Search-sig.stx line 152, 177, 182">Float</a> = <span class="keyword">string</span>
    <span id="FloatDigits_400_411" title="Not referenced locally, nor via imports">FloatDigits</span> = <span class="keyword">string</span>
    <span id="ExponentPart_425_437" title="Not referenced locally, nor via imports">ExponentPart</span> = <span class="keyword">string</span>
    <span id="SignedInteger_451_464" title="Not referenced locally, nor via imports">SignedInteger</span> = <span class="keyword">string</span>
    <a href="#String_992_998" id="String_478_484" title="Referenced at line 50, 64; ../WebDSL-Action-sig.stx line 115; ../WebDSL-Core-sig.stx line 76; ../WebDSL-DataModel-sig.stx line 68, 72, 73; ../WebDSL-Search-sig.stx line 149; ../../../../trans/static-semantics/webdsl-types.stx line 85">String</a>
    <a href="#StringPart_1022_1032" id="StringPart_489_499" title="Referenced at line 51, 64, 65, 66; ../WebDSL-Action-sig.stx line 145; ../WebDSL-UI-sig.stx line 229; ../../../../trans/static-semantics/webdsl-types.stx line 89">StringPart</a>
    <a href="#StringInterpExp_1061_1076" id="StringInterpExp_504_519" title="Referenced at line 52, 66, 67">StringInterpExp</a>
    <a href="#OutputShorthand_1105_1120" id="OutputShorthand_524_539" title="Referenced at line 53, 68; ../WebDSL-Action-sig.stx line 142; ../WebDSL-UI-sig.stx line 228">OutputShorthand</a>
    <a href="#SimpleExp_1143_1152" id="SimpleExp_544_553" title="Referenced at line 54, 67, 68, 69, 70, 70; ../WebDSL-Action-sig.stx line 143, 144, 144; ../../../../trans/static-semantics/webdsl.stx line 395">SimpleExp</a>
    <span id="QMLex_558_563" title="Not referenced locally, nor via imports">QMLex</span> = <span class="keyword">string</span>
    <a href="#StringLex_1470_1479" id="StringLex_577_586" title="Referenced at line 65">StringLex</a> = <span class="keyword">string</span>
    <span id="StringChar_600_610" title="Not referenced locally, nor via imports">StringChar</span> = <span class="keyword">string</span>
    <span id="HexPart_624_631" title="Not referenced locally, nor via imports">HexPart</span> = <span class="keyword">string</span>
    <span id="InsideComment_645_658" title="Not referenced locally, nor via imports">InsideComment</span> = <span class="keyword">string</span>
    <span id="CommentChar_672_683" title="Not referenced locally, nor via imports">CommentChar</span> = <span class="keyword">string</span>
    <span id="NewLineEOF_697_707" title="Not referenced locally, nor via imports">NewLineEOF</span> = <span class="keyword">string</span>
    <span id="EOF_721_724" title="Not referenced locally, nor via imports">EOF</span> = <span class="keyword">string</span>
    <a href="../WebDSL-Core-sig.stx#Word_2245_2249" id="Word_738_742" title="Referenced at ../WebDSL-Core-sig.stx line 73, 74">Word</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Action-sig.stx#SimpleSortLex_3864_3877" id="SimpleSortLex_756_769" title="Referenced at ../WebDSL-Action-sig.stx line 124; ../WebDSL-Core-sig.stx line 43; ../WebDSL-Prefetch-sig.stx line 53, 89; ../WebDSL-Search-sig.stx line 188, 251">SimpleSortLex</a> = <span class="keyword">string</span>
    <a href="../WebDSL-Core-sig.stx#GenericSortLex_912_926" id="GenericSortLex_783_797" title="Referenced at ../WebDSL-Core-sig.stx line 44">GenericSortLex</a> = <span class="keyword">string</span>

  <span class="keyword">constructors</span>
    <span id="ModuleName-Plhdr_827_843" title="Not referenced locally, nor via imports">ModuleName-Plhdr</span> : <a href="#ModuleName_279_289" id="ModuleName_846_856" title="Defined at line 18">ModuleName</a>
    <span id="ModulePart-Plhdr_861_877" title="Not referenced locally, nor via imports">ModulePart-Plhdr</span> : <a href="#ModulePart_294_304" id="ModulePart_880_890" title="Defined at line 19">ModulePart</a>
    <span id="ImportName-Plhdr_895_911" title="Not referenced locally, nor via imports">ImportName-Plhdr</span> : <a href="#ImportName_309_319" id="ImportName_914_924" title="Defined at line 20">ImportName</a>
    <span id="OptWildcardImport-Plhdr_929_952" title="Not referenced locally, nor via imports">OptWildcardImport-Plhdr</span> : <a href="#OptWildcardImport_324_341" id="OptWildcardImport_955_972" title="Defined at line 21">OptWildcardImport</a>
    <span id="String-Plhdr_977_989" title="Not referenced locally, nor via imports">String-Plhdr</span> : <a href="#String_478_484" id="String_992_998" title="Defined at line 28">String</a>
    <span id="StringPart-Plhdr_1003_1019" title="Not referenced locally, nor via imports">StringPart-Plhdr</span> : <a href="#StringPart_489_499" id="StringPart_1022_1032" title="Defined at line 29">StringPart</a>
    <span id="StringInterpExp-Plhdr_1037_1058" title="Not referenced locally, nor via imports">StringInterpExp-Plhdr</span> : <a href="#StringInterpExp_504_519" id="StringInterpExp_1061_1076" title="Defined at line 30">StringInterpExp</a>
    <span id="OutputShorthand-Plhdr_1081_1102" title="Not referenced locally, nor via imports">OutputShorthand-Plhdr</span> : <a href="#OutputShorthand_524_539" id="OutputShorthand_1105_1120" title="Defined at line 31">OutputShorthand</a>
    <span id="SimpleExp-Plhdr_1125_1140" title="Not referenced locally, nor via imports">SimpleExp-Plhdr</span> : <a href="#SimpleExp_544_553" id="SimpleExp_1143_1152" title="Defined at line 32">SimpleExp</a>

<span class="keyword">signature</span>

  <span class="keyword">constructors</span>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#ModulePart_4887_4897" id="ModulePart_1184_1194" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 121">ModulePart</a> : <a href="#ExtendedId_230_240" id="ExtendedId_1197_1207" title="Defined at line 16">ExtendedId</a> -&gt; <a href="#ModulePart_294_304" id="ModulePart_1211_1221" title="Defined at line 19">ModulePart</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#WildcardImport_3093_3107" id="WildcardImport_1226_1240" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 84">WildcardImport</a> : <a href="#OptWildcardImport_324_341" id="OptWildcardImport_1243_1260" title="Defined at line 21">OptWildcardImport</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#NoWildcardImport_2266_2282" id="NoWildcardImport_1265_1281" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 66">NoWildcardImport</a> : <a href="#OptWildcardImport_324_341" id="OptWildcardImport_1284_1301" title="Defined at line 21">OptWildcardImport</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#ModuleName_610_620" id="ModuleName_1306_1316" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 25, 66, 84">ModuleName</a> : <span class="keyword">list</span>(<a href="#ModulePart_294_304" id="ModulePart_1324_1334" title="Defined at line 19">ModulePart</a>) -&gt; <a href="#ModuleName_279_289" id="ModuleName_1339_1349" title="Defined at line 18">ModuleName</a>
    <a href="../../../../trans/static-semantics/webdsl-modules.stx#ImportName_2238_2248" id="ImportName_1354_1364" title="Referenced at ../../../../trans/static-semantics/webdsl-modules.stx line 66, 84">ImportName</a> : <a href="#ModuleName_279_289" id="ModuleName_1367_1377" title="Defined at line 18">ModuleName</a> * <a href="#OptWildcardImport_324_341" id="OptWildcardImport_1380_1397" title="Defined at line 21">OptWildcardImport</a> -&gt; <a href="#ImportName_309_319" id="ImportName_1401_1411" title="Defined at line 20">ImportName</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#String_2056_2062" id="String_1416_1422" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 86">String</a> : <span class="keyword">list</span>(<a href="#StringPart_489_499" id="StringPart_1430_1440" title="Defined at line 29">StringPart</a>) -&gt; <a href="#String_478_484" id="String_1445_1451" title="Defined at line 28">String</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#StringValue_2200_2211" id="StringValue_1456_1467" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 90">StringValue</a> : <a href="#StringLex_577_586" id="StringLex_1470_1479" title="Defined at line 34">StringLex</a> -&gt; <a href="#StringPart_489_499" id="StringPart_1483_1493" title="Defined at line 29">StringPart</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#InterpValue_2287_2298" id="InterpValue_1498_1509" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 92">InterpValue</a> : <a href="#StringInterpExp_504_519" id="StringInterpExp_1512_1527" title="Defined at line 30">StringInterpExp</a> -&gt; <a href="#StringPart_489_499" id="StringPart_1531_1541" title="Defined at line 29">StringPart</a>
    <a href="../../../../trans/static-semantics/webdsl-types.stx#InterpSimpleExp_2299_2314" id="InterpSimpleExp_1546_1561" title="Referenced at ../../../../trans/static-semantics/webdsl-types.stx line 92">InterpSimpleExp</a> : <a href="#SimpleExp_544_553" id="SimpleExp_1564_1573" title="Defined at line 32">SimpleExp</a> -&gt; <a href="#StringInterpExp_504_519" id="StringInterpExp_1577_1592" title="Defined at line 30">StringInterpExp</a>
    <span id="OutputShorthandSimpleExp_1597_1621" title="Not referenced locally, nor via imports">OutputShorthandSimpleExp</span> : <a href="#SimpleExp_544_553" id="SimpleExp_1624_1633" title="Defined at line 32">SimpleExp</a> -&gt; <a href="#OutputShorthand_524_539" id="OutputShorthand_1637_1652" title="Defined at line 31">OutputShorthand</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#SimpleVar_9711_9720" id="SimpleVar_1657_1666" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 232">SimpleVar</a> : <a href="#Id_194_196" id="Id_1669_1671" title="Defined at line 14">Id</a> -&gt; <a href="#SimpleExp_544_553" id="SimpleExp_1675_1684" title="Defined at line 32">SimpleExp</a>
    <a href="../../../../trans/static-semantics/webdsl-actions.stx#SimpleFieldAccess_10458_10475" id="SimpleFieldAccess_1689_1706" title="Referenced at ../../../../trans/static-semantics/webdsl-actions.stx line 250">SimpleFieldAccess</a> : <a href="#SimpleExp_544_553" id="SimpleExp_1709_1718" title="Defined at line 32">SimpleExp</a> * <a href="#PropertyId_170_180" id="PropertyId_1721_1731" title="Defined at line 13">PropertyId</a> -&gt; <a href="#SimpleExp_544_553" id="SimpleExp_1735_1744" title="Defined at line 32">SimpleExp</a>
</code></pre></td></tr></tbody></table></div>